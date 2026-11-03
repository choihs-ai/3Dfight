"""VRM(glTF 바이너리) 텍스처 크기 줄이기 — 아이폰 메모리용
사용: python3 tools/shrink-vrm.py 입력.vrm 출력.vrm [최대크기=1024]
 - 이름에 nml/normal 이 들어간 노멀맵은 절반 크기
 - 썸네일은 128px
"""
import io, json, struct, sys
from PIL import Image

src, dst = sys.argv[1], sys.argv[2]
MAX = int(sys.argv[3]) if len(sys.argv) > 3 else 1024
b = open(src, 'rb').read()
L = struct.unpack('<I', b[12:16])[0]
j = json.loads(b[20:20 + L])
binoff = 20 + L + 8
BIN = b[binoff:binoff + struct.unpack('<I', b[20 + L:24 + L])[0]]
views = [bytearray(BIN[v.get('byteOffset', 0):v.get('byteOffset', 0) + v['byteLength']]) for v in j['bufferViews']]
thumb = j.get('extensions', {}).get('VRMC_vrm', {}).get('meta', {}).get('thumbnailImage')
saved = 0
for i, im in enumerate(j['images']):
    bv = im['bufferView']
    p = Image.open(io.BytesIO(views[bv]))
    name = (im.get('name') or '').lower()
    lim = 128 if i == thumb else (MAX // 2 if ('nml' in name or 'normal' in name or name.startswith('nm_')) else MAX)
    if max(p.size) <= lim:
        continue
    s = lim / max(p.size)
    q = p.resize((max(1, round(p.size[0] * s)), max(1, round(p.size[1] * s))), Image.LANCZOS)
    out = io.BytesIO(); q.save(out, 'PNG', optimize=True)
    saved += len(views[bv]) - out.tell()
    print(f'  {im.get("name")}: {p.size} -> {q.size}')
    views[bv] = bytearray(out.getvalue())
# 버퍼 다시 쌓기 (4바이트 정렬)
nb = bytearray()
for v, data in zip(j['bufferViews'], views):
    while len(nb) % 4: nb.append(0)
    v['byteOffset'] = len(nb); v['byteLength'] = len(data); nb += data
while len(nb) % 4: nb.append(0)
j['buffers'][0]['byteLength'] = len(nb)
js = json.dumps(j, ensure_ascii=False, separators=(',', ':')).encode('utf8')
while len(js) % 4: js += b' '
total = 12 + 8 + len(js) + 8 + len(nb)
with open(dst, 'wb') as f:
    f.write(struct.pack('<III', 0x46546C67, 2, total))
    f.write(struct.pack('<II', len(js), 0x4E4F534A)); f.write(js)
    f.write(struct.pack('<II', len(nb), 0x004E4942)); f.write(nb)
print(f'{dst}: {total // 1024} KB (절약 {saved // 1024} KB)')
