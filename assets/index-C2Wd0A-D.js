(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const xs="180",mm=0,Hh=1,gm=2,Tf=1,_m=2,pi=3,vi=0,dn=1,Mn=2,Gi=0,sr=1,Gh=2,Wh=3,Xh=4,go=5,ps=100,vm=101,xm=102,Mm=103,ym=104,Sm=200,xi=201,bm=202,wm=203,Zl=204,Jl=205,Tm=206,Em=207,Am=208,Rm=209,Cm=210,Pm=211,Lm=212,Im=213,Um=214,Ql=0,ec=1,tc=2,cr=3,nc=4,ic=5,sc=6,rc=7,lh=0,Nm=1,Dm=2,Wi=0,km=1,Om=2,Fm=3,Bm=4,Vm=5,zm=6,Hm=7,jh="attached",Gm="detached",Ef=300,hr=301,ur=302,oc=303,ac=304,ka=306,Ms=1e3,Bi=1001,ya=1002,fn=1003,Af=1004,zr=1005,Rn=1006,ha=1007,Qn=1008,ni=1009,Rf=1010,Cf=1011,to=1012,ch=1013,ys=1014,Gn=1015,_o=1016,hh=1017,uh=1018,no=1020,Pf=35902,Lf=35899,If=1021,Uf=1022,Dn=1023,io=1026,so=1027,dh=1028,fh=1029,Nf=1030,ph=1031,mh=1033,ua=33776,da=33777,fa=33778,pa=33779,lc=35840,cc=35841,hc=35842,uc=35843,dc=36196,fc=37492,pc=37496,mc=37808,gc=37809,_c=37810,vc=37811,xc=37812,Mc=37813,yc=37814,Sc=37815,bc=37816,wc=37817,Tc=37818,Ec=37819,Ac=37820,Rc=37821,Cc=36492,Pc=36494,Lc=36495,Ic=36283,Uc=36284,Nc=36285,Dc=36286,Wm=2200,Xm=2201,jm=2202,ro=2300,oo=2301,Xa=2302,er=2400,tr=2401,Sa=2402,gh=2500,qm=2501,Ym=0,Df=1,kc=2,$m=3200,Km=3201,vo=0,Zm=1,mi="",an="srgb",pn="srgb-linear",ba="linear",Lt="srgb",Cs=7680,qh=519,Jm=512,Qm=513,e0=514,kf=515,t0=516,n0=517,i0=518,s0=519,Oc=35044,Xi=35048,Yh="300 es",ei=2e3,wa=2001;class As{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $h=1234567;const qr=Math.PI/180,dr=180/Math.PI;function Wn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function dt(i,e,t){return Math.max(e,Math.min(t,i))}function _h(i,e){return(i%e+e)%e}function r0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function o0(i,e,t){return i!==e?(t-i)/(e-i):0}function Yr(i,e,t){return(1-t)*i+t*e}function a0(i,e,t,n){return Yr(i,e,1-Math.exp(-t*n))}function l0(i,e=1){return e-Math.abs(_h(i,e*2)-e)}function c0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function h0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function u0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function d0(i,e){return i+Math.random()*(e-i)}function f0(i){return i*(.5-Math.random())}function p0(i){i!==void 0&&($h=i);let e=$h+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function m0(i){return i*qr}function g0(i){return i*dr}function _0(i){return(i&i-1)===0&&i!==0}function v0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function x0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function M0(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Dt={DEG2RAD:qr,RAD2DEG:dr,generateUUID:Wn,clamp:dt,euclideanModulo:_h,mapLinear:r0,inverseLerp:o0,lerp:Yr,damp:a0,pingpong:l0,smoothstep:c0,smootherstep:h0,randInt:u0,randFloat:d0,randFloatSpread:f0,seededRandom:p0,degToRad:m0,radToDeg:g0,isPowerOfTwo:_0,ceilPowerOfTwo:v0,floorPowerOfTwo:x0,setQuaternionFromProperEuler:M0,normalize:Et,denormalize:zn};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let p=1-a;const m=l*d+c*f+h*g+u*_,y=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const E=Math.sqrt(S),R=Math.atan2(E,m*y);p=Math.sin(p*R)/E,a=Math.sin(a*R)/E}const v=a*y;if(l=l*p+d*v,c=c*p+f*v,h=h*p+g*v,u=u*p+_*v,p===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ja.copy(this).projectOnVector(e),this.sub(ja)}reflect(e){return this.sub(ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ja=new A,Kh=new Pe;class Be{constructor(e,t,n,s,r,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],p=s[3],m=s[6],y=s[1],S=s[4],v=s[7],E=s[2],R=s[5],w=s[8];return r[0]=o*_+a*y+l*E,r[3]=o*p+a*S+l*R,r[6]=o*m+a*v+l*w,r[1]=c*_+h*y+u*E,r[4]=c*p+h*S+u*R,r[7]=c*m+h*v+u*w,r[2]=d*_+f*y+g*E,r[5]=d*p+f*S+g*R,r[8]=d*m+f*v+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(qa.makeScale(e,t)),this}rotate(e){return this.premultiply(qa.makeRotation(-e)),this}translate(e,t){return this.premultiply(qa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new Be;function Of(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ao(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function y0(){const i=ao("canvas");return i.style.display="block",i}const Zh={};function lo(i){i in Zh||(Zh[i]=!0,console.warn(i))}function S0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Jh=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qh=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function b0(){const i={enabled:!0,workingColorSpace:pn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Lt&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Lt&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?ba:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return lo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return lo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pn]:{primaries:e,whitePoint:n,transfer:ba,toXYZ:Jh,fromXYZ:Qh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:e,whitePoint:n,transfer:Lt,toXYZ:Jh,fromXYZ:Qh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),i}const gt=b0();function _i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ps;class w0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ps===void 0&&(Ps=ao("canvas")),Ps.width=e.width,Ps.height=e.height;const s=Ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=ao("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=_i(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let T0=0;class vh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Wn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ya(s[o].image)):r.push(Ya(s[o]))}else r=Ya(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ya(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?w0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let E0=0;const $a=new A;class Kt extends As{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,n=Bi,s=Bi,r=Rn,o=Qn,a=Dn,l=ni,c=Kt.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Wn(),this.name="",this.source=new vh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($a).x}get height(){return this.source.getSize($a).y}get depth(){return this.source.getSize($a).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ef)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ms:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ms:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Ef;Kt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,n=0,s=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(f+1)/2,E=(m+1)/2,R=(h+d)/4,w=(u+_)/4,L=(g+p)/4;return S>v&&S>E?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=R/n,r=w/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=R/s,r=L/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=w/r,s=L/r),this.set(n,s,r,t),this}let y=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class A0 extends As{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Kt(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new vh(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ss extends A0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ff extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class R0 extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mi{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bo.copy(n.boundingBox)),bo.applyMatrix4(e.matrixWorld),this.union(bo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mr),wo.subVectors(this.max,Mr),Ls.subVectors(e.a,Mr),Is.subVectors(e.b,Mr),Us.subVectors(e.c,Mr),wi.subVectors(Is,Ls),Ti.subVectors(Us,Is),Ji.subVectors(Ls,Us);let t=[0,-wi.z,wi.y,0,-Ti.z,Ti.y,0,-Ji.z,Ji.y,wi.z,0,-wi.x,Ti.z,0,-Ti.x,Ji.z,0,-Ji.x,-wi.y,wi.x,0,-Ti.y,Ti.x,0,-Ji.y,Ji.x,0];return!Ka(t,Ls,Is,Us,wo)||(t=[1,0,0,0,1,0,0,0,1],!Ka(t,Ls,Is,Us,wo))?!1:(To.crossVectors(wi,Ti),t=[To.x,To.y,To.z],Ka(t,Ls,Is,Us,wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const oi=[new A,new A,new A,new A,new A,new A,new A,new A],kn=new A,bo=new Mi,Ls=new A,Is=new A,Us=new A,wi=new A,Ti=new A,Ji=new A,Mr=new A,wo=new A,To=new A,Qi=new A;function Ka(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Qi.fromArray(i,r);const a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=e.dot(Qi),c=t.dot(Qi),h=n.dot(Qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const C0=new Mi,yr=new A,Za=new A;class ii{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):C0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);const t=yr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(yr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(Za)),this.expandByPoint(yr.copy(e.center).sub(Za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ai=new A,Ja=new A,Eo=new A,Ei=new A,Qa=new A,Ao=new A,el=new A;class Oa{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ja.copy(e).add(t).multiplyScalar(.5),Eo.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(Ja);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Eo),a=Ei.dot(this.direction),l=-Ei.dot(Eo),c=Ei.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ja).addScaledVector(Eo,d),f}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,s,r){Qa.subVectors(t,e),Ao.subVectors(n,e),el.crossVectors(Qa,Ao);let o=this.direction.dot(el),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ei.subVectors(this.origin,e);const l=a*this.direction.dot(Ao.crossVectors(Ei,Ao));if(l<0)return null;const c=a*this.direction.dot(Qa.cross(Ei));if(c<0||l+c>o)return null;const h=-a*Ei.dot(el);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oe{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,g,_,p){Oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,g,_,p)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ns.setFromMatrixColumn(e,0).length(),r=1/Ns.setFromMatrixColumn(e,1).length(),o=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(P0,e,L0)}lookAt(e,t,n){const s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Ai.crossVectors(n,Tn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Ai.crossVectors(n,Tn)),Ai.normalize(),Ro.crossVectors(Tn,Ai),s[0]=Ai.x,s[4]=Ro.x,s[8]=Tn.x,s[1]=Ai.y,s[5]=Ro.y,s[9]=Tn.y,s[2]=Ai.z,s[6]=Ro.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],y=n[3],S=n[7],v=n[11],E=n[15],R=s[0],w=s[4],L=s[8],x=s[12],M=s[1],C=s[5],U=s[9],O=s[13],D=s[2],G=s[6],V=s[10],Y=s[14],B=s[3],Q=s[7],ie=s[11],Se=s[15];return r[0]=o*R+a*M+l*D+c*B,r[4]=o*w+a*C+l*G+c*Q,r[8]=o*L+a*U+l*V+c*ie,r[12]=o*x+a*O+l*Y+c*Se,r[1]=h*R+u*M+d*D+f*B,r[5]=h*w+u*C+d*G+f*Q,r[9]=h*L+u*U+d*V+f*ie,r[13]=h*x+u*O+d*Y+f*Se,r[2]=g*R+_*M+p*D+m*B,r[6]=g*w+_*C+p*G+m*Q,r[10]=g*L+_*U+p*V+m*ie,r[14]=g*x+_*O+p*Y+m*Se,r[3]=y*R+S*M+v*D+E*B,r[7]=y*w+S*C+v*G+E*Q,r[11]=y*L+S*U+v*V+E*ie,r[15]=y*x+S*O+v*Y+E*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+p*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],y=u*p*c-_*d*c+_*l*f-a*p*f-u*l*m+a*d*m,S=g*d*c-h*p*c-g*l*f+o*p*f+h*l*m-o*d*m,v=h*_*c-g*u*c+g*a*f-o*_*f-h*a*m+o*u*m,E=g*u*l-h*_*l-g*a*d+o*_*d+h*a*p-o*u*p,R=t*y+n*S+s*v+r*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=y*w,e[1]=(_*d*r-u*p*r-_*s*f+n*p*f+u*s*m-n*d*m)*w,e[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*m+n*l*m)*w,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*w,e[4]=S*w,e[5]=(h*p*r-g*d*r+g*s*f-t*p*f-h*s*m+t*d*m)*w,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*m-t*l*m)*w,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*w,e[8]=v*w,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*m-t*u*m)*w,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*m+t*a*m)*w,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*w,e[12]=E*w,e[13]=(h*_*s-g*u*s+g*n*d-t*_*d-h*n*p+t*u*p)*w,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*p-t*a*p)*w,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,p=o*u,m=a*u,y=l*c,S=l*h,v=l*u,E=n.x,R=n.y,w=n.z;return s[0]=(1-(_+m))*E,s[1]=(f+v)*E,s[2]=(g-S)*E,s[3]=0,s[4]=(f-v)*R,s[5]=(1-(d+m))*R,s[6]=(p+y)*R,s[7]=0,s[8]=(g+S)*w,s[9]=(p-y)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ns.set(s[0],s[1],s[2]).length();const o=Ns.set(s[4],s[5],s[6]).length(),a=Ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],On.copy(this);const c=1/r,h=1/o,u=1/a;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,t.setFromRotationMatrix(On),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ei,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===ei)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===wa)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ei,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===ei)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===wa)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ns=new A,On=new Oe,P0=new A(0,0,0),L0=new A(1,1,1),Ai=new A,Ro=new A,Tn=new A,eu=new Oe,tu=new Pe;class mn{constructor(e=0,t=0,n=0,s=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tu.setFromEuler(this),this.setFromQuaternion(tu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class Bf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let I0=0;const nu=new A,Ds=new Pe,li=new Oe,Co=new A,Sr=new A,U0=new A,N0=new Pe,iu=new A(1,0,0),su=new A(0,1,0),ru=new A(0,0,1),ou={type:"added"},D0={type:"removed"},ks={type:"childadded",child:null},tl={type:"childremoved",child:null};class At extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new A,t=new mn,n=new Pe,s=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Be}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(iu,e)}rotateY(e){return this.rotateOnAxis(su,e)}rotateZ(e){return this.rotateOnAxis(ru,e)}translateOnAxis(e,t){return nu.copy(e).applyQuaternion(this.quaternion),this.position.add(nu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(iu,e)}translateY(e){return this.translateOnAxis(su,e)}translateZ(e){return this.translateOnAxis(ru,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Co.copy(e):Co.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Sr,Co,this.up):li.lookAt(Co,Sr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(li),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ou),ks.child=e,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(D0),tl.child=e,this.dispatchEvent(tl),tl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ou),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,e,U0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,N0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}At.DEFAULT_UP=new A(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new A,ci=new A,nl=new A,hi=new A,Os=new A,Fs=new A,au=new A,il=new A,sl=new A,rl=new A,ol=new xt,al=new xt,ll=new xt;class Hn{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Fn.subVectors(e,t),s.cross(Fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Fn.subVectors(s,t),ci.subVectors(n,t),nl.subVectors(e,t);const o=Fn.dot(Fn),a=Fn.dot(ci),l=Fn.dot(nl),c=ci.dot(ci),h=ci.dot(nl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return ol.setScalar(0),al.setScalar(0),ll.setScalar(0),ol.fromBufferAttribute(e,t),al.fromBufferAttribute(e,n),ll.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ol,r.x),o.addScaledVector(al,r.y),o.addScaledVector(ll,r.z),o}static isFrontFacing(e,t,n,s){return Fn.subVectors(n,t),ci.subVectors(e,t),Fn.cross(ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Fn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Hn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Os.subVectors(s,n),Fs.subVectors(r,n),il.subVectors(e,n);const l=Os.dot(il),c=Fs.dot(il);if(l<=0&&c<=0)return t.copy(n);sl.subVectors(e,s);const h=Os.dot(sl),u=Fs.dot(sl);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Os,o);rl.subVectors(e,r);const f=Os.dot(rl),g=Fs.dot(rl);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Fs,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return au.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(au,a);const m=1/(p+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(Os,o).addScaledVector(Fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},Po={h:0,s:0,l:0};function cl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=gt.workingColorSpace){if(e=_h(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=cl(o,r,e+1/3),this.g=cl(o,r,e),this.b=cl(o,r,e-1/3)}return gt.colorSpaceToWorking(this,s),this}setStyle(e,t=an){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){const n=Vf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return gt.workingToColorSpace(hn.copy(this),e),Math.round(dt(hn.r*255,0,255))*65536+Math.round(dt(hn.g*255,0,255))*256+Math.round(dt(hn.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(hn.copy(this),t);const n=hn.r,s=hn.g,r=hn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=an){gt.workingToColorSpace(hn.copy(this),e);const t=hn.r,n=hn.g,s=hn.b;return e!==an?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(Po);const n=Yr(Ri.h,Po.h,t),s=Yr(Ri.s,Po.s,t),r=Yr(Ri.l,Po.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new pe;pe.NAMES=Vf;let k0=0;class Cn extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=sr,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zl,this.blendDst=Jl,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(n.blending=this.blending),this.side!==vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zl&&(n.blendSrc=this.blendSrc),this.blendDst!==Jl&&(n.blendDst=this.blendDst),this.blendEquation!==ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ti extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new A,Lo=new Ke;let O0=0;class it{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:O0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oc,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lo.fromBufferAttribute(this,t),Lo.applyMatrix3(e),this.setXY(t,Lo.x,Lo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oc&&(e.usage=this.usage),e}}class Fa extends it{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class zf extends it{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ht extends it{constructor(e,t,n){super(new Float32Array(e),t,n)}}let F0=0;const Pn=new Oe,hl=new At,Bs=new A,En=new Mi,br=new Mi,Qt=new A;class Rt extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Of(e)?zf:Fa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return hl.lookAt(e),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ht(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];br.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(En.min,br.min),En.expandByPoint(Qt),Qt.addVectors(En.max,br.max),En.expandByPoint(Qt)):(En.expandByPoint(br.min),En.expandByPoint(br.max))}En.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Qt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qt.fromBufferAttribute(a,c),l&&(Bs.fromBufferAttribute(e,c),Qt.add(Bs)),s=Math.max(s,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new it(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new A,l[L]=new A;const c=new A,h=new A,u=new A,d=new Ke,f=new Ke,g=new Ke,_=new A,p=new A;function m(L,x,M){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,x),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[L].add(_),a[x].add(_),a[M].add(_),l[L].add(p),l[x].add(p),l[M].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,x=y.length;L<x;++L){const M=y[L],C=M.start,U=M.count;for(let O=C,D=C+U;O<D;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const S=new A,v=new A,E=new A,R=new A;function w(L){E.fromBufferAttribute(s,L),R.copy(E);const x=a[L];S.copy(x),S.sub(E.multiplyScalar(E.dot(x))).normalize(),v.crossVectors(R,x);const C=v.dot(l[L])<0?-1:1;o.setXYZW(L,S.x,S.y,S.z,C)}for(let L=0,x=y.length;L<x;++L){const M=y[L],C=M.start,U=M.count;for(let O=C,D=C+U;O<D;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new it(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,u=new A;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new it(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lu=new Oe,es=new Oa,Io=new ii,cu=new A,Uo=new A,No=new A,Do=new A,ul=new A,ko=new A,hu=new A,Oo=new A;class wt extends At{constructor(e=new Rt,t=new ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ko.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(ul.fromBufferAttribute(u,e),o?ko.addScaledVector(ul,h):ko.addScaledVector(ul.sub(t),h))}t.add(ko)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(r),es.copy(e.ray).recast(e.near),!(Io.containsPoint(es.origin)===!1&&(es.intersectSphere(Io,cu)===null||es.origin.distanceToSquared(cu)>(e.far-e.near)**2))&&(lu.copy(r).invert(),es.copy(e.ray).applyMatrix4(lu),!(n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),S=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,E=S;v<E;v+=3){const R=a.getX(v),w=a.getX(v+1),L=a.getX(v+2);s=Fo(this,m,e,n,c,h,u,R,w,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const y=a.getX(p),S=a.getX(p+1),v=a.getX(p+2);s=Fo(this,o,e,n,c,h,u,y,S,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,E=S;v<E;v+=3){const R=v,w=v+1,L=v+2;s=Fo(this,m,e,n,c,h,u,R,w,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const y=p,S=p+1,v=p+2;s=Fo(this,o,e,n,c,h,u,y,S,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function B0(i,e,t,n,s,r,o,a){let l;if(e.side===dn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===vi,a),l===null)return null;Oo.copy(a),Oo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Oo);return c<t.near||c>t.far?null:{distance:c,point:Oo.clone(),object:i}}function Fo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Uo),i.getVertexPosition(l,No),i.getVertexPosition(c,Do);const h=B0(i,e,t,n,Uo,No,Do,hu);if(h){const u=new A;Hn.getBarycoord(hu,Uo,No,Do,u),s&&(h.uv=Hn.getInterpolatedAttribute(s,a,l,c,u,new Ke)),r&&(h.uv1=Hn.getInterpolatedAttribute(r,a,l,c,u,new Ke)),o&&(h.normal=Hn.getInterpolatedAttribute(o,a,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new A,materialIndex:0};Hn.getNormal(Uo,No,Do,d.normal),h.face=d,h.barycoord=u}return h}class xo extends Rt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(u,2));function g(_,p,m,y,S,v,E,R,w,L,x){const M=v/w,C=E/L,U=v/2,O=E/2,D=R/2,G=w+1,V=L+1;let Y=0,B=0;const Q=new A;for(let ie=0;ie<V;ie++){const Se=ie*C-O;for(let $e=0;$e<G;$e++){const ht=$e*M-U;Q[_]=ht*y,Q[p]=Se*S,Q[m]=D,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[p]=0,Q[m]=R>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push($e/w),u.push(1-ie/L),Y+=1}}for(let ie=0;ie<L;ie++)for(let Se=0;Se<w;Se++){const $e=d+Se+G*ie,ht=d+Se+G*(ie+1),at=d+(Se+1)+G*(ie+1),lt=d+(Se+1)+G*ie;l.push($e,ht,lt),l.push(ht,at,lt),B+=6}a.addGroup(f,B,x),f+=B,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function vn(i){const e={};for(let t=0;t<i.length;t++){const n=fr(i[t]);for(const s in n)e[s]=n[s]}return e}function V0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Hf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const Gf={clone:fr,merge:vn};var z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z0,this.fragmentShader=H0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=V0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Wf extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new A,uu=new Ke,du=new Ke;class xn extends Wf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,t){return this.getViewBounds(e,uu,du),t.subVectors(du,uu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vs=-90,zs=1;class G0 extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new xn(Vs,zs,e,t);s.layers=this.layers,this.add(s);const r=new xn(Vs,zs,e,t);r.layers=this.layers,this.add(r);const o=new xn(Vs,zs,e,t);o.layers=this.layers,this.add(o);const a=new xn(Vs,zs,e,t);a.layers=this.layers,this.add(a);const l=new xn(Vs,zs,e,t);l.layers=this.layers,this.add(l);const c=new xn(Vs,zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Xf extends Kt{constructor(e=[],t=hr,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class W0 extends Ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Xf(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new xo(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:Gi});r.uniforms.tEquirect.value=t;const o=new wt(s,r),a=t.minFilter;return t.minFilter===Qn&&(t.minFilter=Rn),new G0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class Ft extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const X0={type:"move"};class dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(X0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class xh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new pe(e),this.near=t,this.far=n}clone(){return new xh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class j0 extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Mh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oc,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const _n=new A;class Mo{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new it(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const fu=new A,pu=new xt,mu=new xt,q0=new A,gu=new Oe,Bo=new A,fl=new ii,_u=new Oe,pl=new Oa;class co extends wt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jh,this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bo),this.boundingBox.expandByPoint(Bo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ii),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bo),this.boundingSphere.expandByPoint(Bo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fl.copy(this.boundingSphere),fl.applyMatrix4(s),e.ray.intersectsSphere(fl)!==!1&&(_u.copy(s).invert(),pl.copy(e.ray).applyMatrix4(_u),!(this.boundingBox!==null&&pl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new xt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===jh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Gm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;pu.fromBufferAttribute(s.attributes.skinIndex,e),mu.fromBufferAttribute(s.attributes.skinWeight,e),fu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=mu.getComponent(r);if(o!==0){const a=pu.getComponent(r);gu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(q0.copy(fu).applyMatrix4(gu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class $r extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}}class yh extends Kt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=fn,h=fn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vu=new Oe,Y0=new Oe;class Yi{constructor(e=[],t=[]){this.uuid=Wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Oe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Y0;vu.multiplyMatrices(a,t[r]),vu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Yi(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new yh(t,e,e,Dn,Gn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new $r),this.bones.push(o),this.boneInverses.push(new Oe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Fc extends it{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Hs=new Oe,xu=new Oe,Vo=[],Mu=new Mi,$0=new Oe,wr=new wt,Tr=new ii;class Bc extends wt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,$0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hs),Mu.copy(e.boundingBox).applyMatrix4(Hs),this.boundingBox.union(Mu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hs),Tr.copy(e.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(Tr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tr.copy(this.boundingSphere),Tr.applyMatrix4(n),e.ray.intersectsSphere(Tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hs),xu.multiplyMatrices(n,Hs),wr.matrixWorld=xu,wr.raycast(e,Vo);for(let o=0,a=Vo.length;o<a;o++){const l=Vo[o];l.instanceId=r,l.object=this,t.push(l)}Vo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new yh(new Float32Array(s*this.count),s,this.count,dh,Gn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ml=new A,K0=new A,Z0=new Be;class ds{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ml.subVectors(n,t).cross(K0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ml),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Z0.getNormalMatrix(e),s=this.coplanarPoint(ml).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new ii,J0=new Ke(.5,.5),zo=new A;class Sh{constructor(e=new ds,t=new ds,n=new ds,s=new ds,r=new ds,o=new ds){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],p=r[10],m=r[11],y=r[12],S=r[13],v=r[14],E=r[15];if(s[0].setComponents(c-o,f-h,m-g,E-y).normalize(),s[1].setComponents(c+o,f+h,m+g,E+y).normalize(),s[2].setComponents(c+a,f+u,m+_,E+S).normalize(),s[3].setComponents(c-a,f-u,m-_,E-S).normalize(),n)s[4].setComponents(l,d,p,v).normalize(),s[5].setComponents(c-l,f-d,m-p,E-v).normalize();else if(s[4].setComponents(c-l,f-d,m-p,E-v).normalize(),t===ei)s[5].setComponents(c+l,f+d,m+p,E+v).normalize();else if(t===wa)s[5].setComponents(l,d,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);const t=J0.distanceTo(e.center);return ts.radius=.7071067811865476+t,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(zo.x=s.normal.x>0?e.max.x:e.min.x,zo.y=s.normal.y>0?e.max.y:e.min.y,zo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rs extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ta=new A,Ea=new A,yu=new Oe,Er=new Oa,Ho=new ii,gl=new A,Su=new A;class Ba extends At{constructor(e=new Rt,t=new Rs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ta.fromBufferAttribute(t,s-1),Ea.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ta.distanceTo(Ea);e.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(s),Ho.radius+=r,e.ray.intersectsSphere(Ho)===!1)return;yu.copy(s).invert(),Er.copy(e.ray).applyMatrix4(yu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=c){const m=h.getX(_),y=h.getX(_+1),S=Go(this,e,Er,l,m,y,_);S&&t.push(S)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(f),m=Go(this,e,Er,l,_,p,g-1);m&&t.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=c){const m=Go(this,e,Er,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=Go(this,e,Er,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Go(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(Ta.fromBufferAttribute(a,s),Ea.fromBufferAttribute(a,r),t.distanceSqToSegment(Ta,Ea,gl,Su)>n)return;gl.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(gl);if(!(c<e.near||c>e.far))return{distance:c,point:Su.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const bu=new A,wu=new A;class yo extends Ba{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)bu.fromBufferAttribute(t,s),wu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bu.distanceTo(wu);e.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Q0 extends Ba{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class jf extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tu=new Oe,Vc=new Oa,Wo=new ii,Xo=new A;class qf extends At{constructor(e=new Rt,t=new jf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(s),Wo.radius+=r,e.ray.intersectsSphere(Wo)===!1)return;Tu.copy(s).invert(),Vc.copy(e.ray).applyMatrix4(Tu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const p=c.getX(g);Xo.fromBufferAttribute(u,p),Eu(Xo,p,l,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Xo.fromBufferAttribute(u,g),Eu(Xo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Eu(i,e,t,n,s,r,o){const a=Vc.distanceSqToPoint(i);if(a<t){const l=new A;Vc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class bh extends Kt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yf extends Kt{constructor(e,t,n=ys,s,r,o,a=fn,l=fn,c,h=io,u=1){if(h!==io&&h!==so)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $f extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ji extends Rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const y=m*d-o;for(let S=0;S<c;S++){const v=S*u-r;g.push(v,-y,0),_.push(0,0,1),p.push(S/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const S=y+c*m,v=y+c*(m+1),E=y+1+c*(m+1),R=y+1+c*m;f.push(S,v,R),f.push(v,E,R)}this.setIndex(f),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(_,3)),this.setAttribute("uv",new Ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.width,e.height,e.widthSegments,e.heightSegments)}}class wh extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vo,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class si extends wh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class eg extends Cn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vo,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class tg extends Cn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vo,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ng extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$m,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ig extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function jo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function sg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function rg(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Au(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Kf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class So{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class og extends So{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:er,endingEnd:er}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case tr:r=e,a=2*t-n;break;case Sa:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case tr:o=e,l=2*n-t;break;case Sa:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,y=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-f)*p+(1.5+f)*_+.5*g,v=f*p-f*_;for(let E=0;E!==a;++E)r[E]=m*o[h+E]+y*o[c+E]+S*o[l+E]+v*o[u+E];return r}}class Zf extends So{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class ag extends So{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class jn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=jo(t,this.TimeBufferType),this.values=jo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:jo(e.times,Array),values:jo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ag(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new og(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ro:t=this.InterpolantFactoryMethodDiscrete;break;case oo:t=this.InterpolantFactoryMethodLinear;break;case Xa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ro;case this.InterpolantFactoryMethodLinear:return oo;case this.InterpolantFactoryMethodSmooth:return Xa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&sg(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xa,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}jn.prototype.ValueTypeName="";jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=oo;class mr extends jn{constructor(e,t,n){super(e,t,n)}}mr.prototype.ValueTypeName="bool";mr.prototype.ValueBufferType=Array;mr.prototype.DefaultInterpolation=ro;mr.prototype.InterpolantFactoryMethodLinear=void 0;mr.prototype.InterpolantFactoryMethodSmooth=void 0;class Jf extends jn{constructor(e,t,n,s){super(e,t,n,s)}}Jf.prototype.ValueTypeName="color";class pr extends jn{constructor(e,t,n,s){super(e,t,n,s)}}pr.prototype.ValueTypeName="number";class lg extends So{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Pe.slerpFlat(r,0,o,c-a,o,c,l);return r}}class bs extends jn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new lg(this.times,this.values,this.getValueSize(),e)}}bs.prototype.ValueTypeName="quaternion";bs.prototype.InterpolantFactoryMethodSmooth=void 0;class gr extends jn{constructor(e,t,n){super(e,t,n)}}gr.prototype.ValueTypeName="string";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=ro;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;class ws extends jn{constructor(e,t,n,s){super(e,t,n,s)}}ws.prototype.ValueTypeName="vector";class Aa{constructor(e="",t=-1,n=[],s=gh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Wn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(hg(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(jn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=rg(l);l=Au(l,1,h),c=Au(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new pr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const p=[],m=[];Kf(f,p,m,g),p.length!==0&&_.push(new u(d,p,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const p=[],m=[];for(let y=0;y!==d[g].morphTargets.length;++y){const S=d[g];p.push(S.time),m.push(S.morphTarget===_?1:0)}s.push(new pr(".morphTargetInfluence["+_+"]",p,m))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(ws,f+".position",d,"pos",s),n(bs,f+".quaternion",d,"rot",s),n(ws,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function cg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return pr;case"vector":case"vector2":case"vector3":case"vector4":return ws;case"color":return Jf;case"quaternion":return bs;case"bool":case"boolean":return mr;case"string":return gr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function hg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=cg(i.type);if(i.times===void 0){const t=[],n=[];Kf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const gi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ug{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const dg=new ug;class _r{constructor(e){this.manager=e!==void 0?e:dg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}_r.DEFAULT_MATERIAL_NAME="__DEFAULT";const ui={};class fg extends Error{constructor(e,t){super(e),this.response=t}}class Qf extends _r{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=gi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ui[e]!==void 0){ui[e].push({onLoad:t,onProgress:n,onError:s});return}ui[e]=[],ui[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;const h=ui[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const p=new ReadableStream({start(m){y();function y(){u.read().then(({done:S,value:v})=>{if(S)m.close();else{_+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let R=0,w=h.length;R<w;R++){const L=h[R];L.onProgress&&L.onProgress(E)}m.enqueue(v),y()}},S=>{m.error(S)})}}});return new Response(p)}else throw new fg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{gi.add(`file:${e}`,c);const h=ui[e];delete ui[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=ui[e];if(h===void 0)throw this.manager.itemError(e),c;delete ui[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Gs=new WeakMap;class ep extends _r{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=gi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Gs.get(o);u===void 0&&(u=[],Gs.set(o,u)),u.push({onLoad:t,onError:s})}return o}const a=ao("img");function l(){h(),t&&t(this);const u=Gs.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Gs.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),gi.remove(`image:${e}`);const d=Gs.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}Gs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),gi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class pg extends _r{constructor(e){super(e)}load(e,t,n,s){const r=new Kt,o=new ep(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Va extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class mg extends Va{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const _l=new Oe,Ru=new A,Cu=new A;class Th{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sh,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ru.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ru),Cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cu),t.updateMatrixWorld(),_l.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_l,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_l)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gg extends Th{constructor(){super(new xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=dr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class _g extends Va{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new gg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Pu=new Oe,Ar=new A,vl=new A;class vg extends Th{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ar.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ar),vl.copy(n.position),vl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vl),n.updateMatrixWorld(),s.makeTranslation(-Ar.x,-Ar.y,-Ar.z),Pu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pu,n.coordinateSystem,n.reversedDepth)}}class Eh extends Va{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ah extends Wf{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class xg extends Th{constructor(){super(new Ah(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tp extends Va{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new xg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const xl=new WeakMap;class Mg extends _r{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=gi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(xl.has(o)===!0)s&&s(xl.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return gi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),xl.set(l,c),gi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});gi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class yg extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Sg{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){Pe.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const o=this._workIndex*r;Pe.multiplyQuaternionsFlat(e,o,e,t,e,n),Pe.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*s}}}const Rh="\\[\\]\\.:\\/",bg=new RegExp("["+Rh+"]","g"),Ch="[^"+Rh+"]",wg="[^"+Rh.replace("\\.","")+"]",Tg=/((?:WC+[\/:])*)/.source.replace("WC",Ch),Eg=/(WCOD+)?/.source.replace("WCOD",wg),Ag=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ch),Rg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ch),Cg=new RegExp("^"+Tg+Eg+Ag+Rg+"$"),Pg=["material","materials","bones","map"];class Lg{constructor(e,t,n){const s=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Tt{constructor(e,t,n){this.path=t,this.parsedPath=n||Tt.parseTrackName(t),this.node=Tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Tt.Composite(e,t,n):new Tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bg,"")}static parseTrackName(e){const t=Cg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Pg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Tt.Composite=Lg;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ig{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:er,endingEnd:er};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Xm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case qm:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case gh:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const o=n===jm;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Wm){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=tr,s.endingEnd=tr):(e?s.endingStart=this.zeroSlopeAtStart?tr:er:s.endingStart=Sa,t?s.endingEnd=this.zeroSlopeAtEnd?tr:er:s.endingEnd=Sa)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const Ug=new Float32Array(1);class np extends As{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=s[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new Sg(Tt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Zf(new Float32Array(2),new Float32Array(2),1,Ug),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?Aa.findByName(s,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=gh),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new Ig(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?Aa.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Lu{constructor(e,t,n,s,r,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=s,this.count=r,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class Ng extends yo{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Rt;s.setAttribute("position",new Ht(t,3)),s.setAttribute("color",new Ht(n,3));const r=new Rs({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){const s=new pe,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function Iu(i,e,t,n){const s=Dg(n);switch(t){case If:return i*e;case dh:return i*e/s.components*s.byteLength;case fh:return i*e/s.components*s.byteLength;case Nf:return i*e*2/s.components*s.byteLength;case ph:return i*e*2/s.components*s.byteLength;case Uf:return i*e*3/s.components*s.byteLength;case Dn:return i*e*4/s.components*s.byteLength;case mh:return i*e*4/s.components*s.byteLength;case ua:case da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fa:case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cc:case uc:return Math.max(i,16)*Math.max(e,8)/4;case lc:case hc:return Math.max(i,8)*Math.max(e,8)/2;case dc:case fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _c:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case vc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case yc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case bc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case wc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Cc:case Pc:case Lc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ic:case Uc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Nc:case Dc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dg(i){switch(i){case ni:case Rf:return{byteLength:1,components:1};case to:case Cf:case _o:return{byteLength:2,components:1};case hh:case uh:return{byteLength:2,components:4};case ys:case ch:case Gn:return{byteLength:4,components:1};case Pf:case Lf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xs}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xs);function ip(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function kg(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$g=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Kg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,i_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,s_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,r_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,o_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,a_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,l_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,c_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f_="gl_FragColor = linearToOutputTexel( gl_FragColor );",p_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,g_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,__=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,v_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,M_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,T_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,C_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,P_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,D_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,k_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,O_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,F_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,G_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,j_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,K_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Q_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ev=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ov=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,av=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_v=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,xv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ev=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Av=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Dv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ov=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$v=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ex=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ix=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ox=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ax=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ux=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,px=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:Og,alphahash_pars_fragment:Fg,alphamap_fragment:Bg,alphamap_pars_fragment:Vg,alphatest_fragment:zg,alphatest_pars_fragment:Hg,aomap_fragment:Gg,aomap_pars_fragment:Wg,batching_pars_vertex:Xg,batching_vertex:jg,begin_vertex:qg,beginnormal_vertex:Yg,bsdfs:$g,iridescence_fragment:Kg,bumpmap_pars_fragment:Zg,clipping_planes_fragment:Jg,clipping_planes_pars_fragment:Qg,clipping_planes_pars_vertex:e_,clipping_planes_vertex:t_,color_fragment:n_,color_pars_fragment:i_,color_pars_vertex:s_,color_vertex:r_,common:o_,cube_uv_reflection_fragment:a_,defaultnormal_vertex:l_,displacementmap_pars_vertex:c_,displacementmap_vertex:h_,emissivemap_fragment:u_,emissivemap_pars_fragment:d_,colorspace_fragment:f_,colorspace_pars_fragment:p_,envmap_fragment:m_,envmap_common_pars_fragment:g_,envmap_pars_fragment:__,envmap_pars_vertex:v_,envmap_physical_pars_fragment:C_,envmap_vertex:x_,fog_vertex:M_,fog_pars_vertex:y_,fog_fragment:S_,fog_pars_fragment:b_,gradientmap_pars_fragment:w_,lightmap_pars_fragment:T_,lights_lambert_fragment:E_,lights_lambert_pars_fragment:A_,lights_pars_begin:R_,lights_toon_fragment:P_,lights_toon_pars_fragment:L_,lights_phong_fragment:I_,lights_phong_pars_fragment:U_,lights_physical_fragment:N_,lights_physical_pars_fragment:D_,lights_fragment_begin:k_,lights_fragment_maps:O_,lights_fragment_end:F_,logdepthbuf_fragment:B_,logdepthbuf_pars_fragment:V_,logdepthbuf_pars_vertex:z_,logdepthbuf_vertex:H_,map_fragment:G_,map_pars_fragment:W_,map_particle_fragment:X_,map_particle_pars_fragment:j_,metalnessmap_fragment:q_,metalnessmap_pars_fragment:Y_,morphinstance_vertex:$_,morphcolor_vertex:K_,morphnormal_vertex:Z_,morphtarget_pars_vertex:J_,morphtarget_vertex:Q_,normal_fragment_begin:ev,normal_fragment_maps:tv,normal_pars_fragment:nv,normal_pars_vertex:iv,normal_vertex:sv,normalmap_pars_fragment:rv,clearcoat_normal_fragment_begin:ov,clearcoat_normal_fragment_maps:av,clearcoat_pars_fragment:lv,iridescence_pars_fragment:cv,opaque_fragment:hv,packing:uv,premultiplied_alpha_fragment:dv,project_vertex:fv,dithering_fragment:pv,dithering_pars_fragment:mv,roughnessmap_fragment:gv,roughnessmap_pars_fragment:_v,shadowmap_pars_fragment:vv,shadowmap_pars_vertex:xv,shadowmap_vertex:Mv,shadowmask_pars_fragment:yv,skinbase_vertex:Sv,skinning_pars_vertex:bv,skinning_vertex:wv,skinnormal_vertex:Tv,specularmap_fragment:Ev,specularmap_pars_fragment:Av,tonemapping_fragment:Rv,tonemapping_pars_fragment:Cv,transmission_fragment:Pv,transmission_pars_fragment:Lv,uv_pars_fragment:Iv,uv_pars_vertex:Uv,uv_vertex:Nv,worldpos_vertex:Dv,background_vert:kv,background_frag:Ov,backgroundCube_vert:Fv,backgroundCube_frag:Bv,cube_vert:Vv,cube_frag:zv,depth_vert:Hv,depth_frag:Gv,distanceRGBA_vert:Wv,distanceRGBA_frag:Xv,equirect_vert:jv,equirect_frag:qv,linedashed_vert:Yv,linedashed_frag:$v,meshbasic_vert:Kv,meshbasic_frag:Zv,meshlambert_vert:Jv,meshlambert_frag:Qv,meshmatcap_vert:ex,meshmatcap_frag:tx,meshnormal_vert:nx,meshnormal_frag:ix,meshphong_vert:sx,meshphong_frag:rx,meshphysical_vert:ox,meshphysical_frag:ax,meshtoon_vert:lx,meshtoon_frag:cx,points_vert:hx,points_frag:ux,shadow_vert:dx,shadow_frag:fx,sprite_vert:px,sprite_frag:mx},de={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Jn={basic:{uniforms:vn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:vn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new pe(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:vn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:vn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:vn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new pe(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:vn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:vn([de.points,de.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:vn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:vn([de.common,de.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:vn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:vn([de.sprite,de.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:vn([de.common,de.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:vn([de.lights,de.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Jn.physical={uniforms:vn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const qo={r:0,b:0,g:0},ns=new mn,gx=new Oe;function _x(i,e,t,n,s,r,o){const a=new pe(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function _(S){let v=!1;const E=g(S);E===null?m(a,l):E&&E.isColor&&(m(E,1),v=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(S,v){const E=g(v);E&&(E.isCubeTexture||E.mapping===ka)?(h===void 0&&(h=new wt(new xo(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:fr(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ns.copy(v.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(gx.makeRotationFromEuler(ns)),h.material.toneMapped=gt.getTransfer(E.colorSpace)!==Lt,(u!==E||d!==E.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new wt(new ji(2,2),new nn({name:"BackgroundMaterial",uniforms:fr(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=gt.getTransfer(E.colorSpace)!==Lt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,v){S.getRGB(qo,Hf(i)),n.buffers.color.setClear(qo.r,qo.g,qo.b,v,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(a,l)},render:_,addToRenderList:p,dispose:y}}function vx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,C,U,O,D){let G=!1;const V=u(O,U,C);r!==V&&(r=V,c(r.object)),G=f(M,O,U,D),G&&g(M,O,U,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(M,C,U,O),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,C,U){const O=U.wireframe===!0;let D=n[M.id];D===void 0&&(D={},n[M.id]=D);let G=D[C.id];G===void 0&&(G={},D[C.id]=G);let V=G[O];return V===void 0&&(V=d(l()),G[O]=V),V}function d(M){const C=[],U=[],O=[];for(let D=0;D<t;D++)C[D]=0,U[D]=0,O[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:O,object:M,attributes:{},index:null}}function f(M,C,U,O){const D=r.attributes,G=C.attributes;let V=0;const Y=U.getAttributes();for(const B in Y)if(Y[B].location>=0){const ie=D[B];let Se=G[B];if(Se===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),ie===void 0||ie.attribute!==Se||Se&&ie.data!==Se.data)return!0;V++}return r.attributesNum!==V||r.index!==O}function g(M,C,U,O){const D={},G=C.attributes;let V=0;const Y=U.getAttributes();for(const B in Y)if(Y[B].location>=0){let ie=G[B];ie===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor));const Se={};Se.attribute=ie,ie&&ie.data&&(Se.data=ie.data),D[B]=Se,V++}r.attributes=D,r.attributesNum=V,r.index=O}function _(){const M=r.newAttributes;for(let C=0,U=M.length;C<U;C++)M[C]=0}function p(M){m(M,0)}function m(M,C){const U=r.newAttributes,O=r.enabledAttributes,D=r.attributeDivisors;U[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),D[M]!==C&&(i.vertexAttribDivisor(M,C),D[M]=C)}function y(){const M=r.newAttributes,C=r.enabledAttributes;for(let U=0,O=C.length;U<O;U++)C[U]!==M[U]&&(i.disableVertexAttribArray(U),C[U]=0)}function S(M,C,U,O,D,G,V){V===!0?i.vertexAttribIPointer(M,C,U,D,G):i.vertexAttribPointer(M,C,U,O,D,G)}function v(M,C,U,O){_();const D=O.attributes,G=U.getAttributes(),V=C.defaultAttributeValues;for(const Y in G){const B=G[Y];if(B.location>=0){let Q=D[Y];if(Q===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Q!==void 0){const ie=Q.normalized,Se=Q.itemSize,$e=e.get(Q);if($e===void 0)continue;const ht=$e.buffer,at=$e.type,lt=$e.bytesPerElement,K=at===i.INT||at===i.UNSIGNED_INT||Q.gpuType===ch;if(Q.isInterleavedBufferAttribute){const ee=Q.data,be=ee.stride,He=Q.offset;if(ee.isInstancedInterleavedBuffer){for(let Ae=0;Ae<B.locationSize;Ae++)m(B.location+Ae,ee.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ae=0;Ae<B.locationSize;Ae++)p(B.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let Ae=0;Ae<B.locationSize;Ae++)S(B.location+Ae,Se/B.locationSize,at,ie,be*lt,(He+Se/B.locationSize*Ae)*lt,K)}else{if(Q.isInstancedBufferAttribute){for(let ee=0;ee<B.locationSize;ee++)m(B.location+ee,Q.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ee=0;ee<B.locationSize;ee++)p(B.location+ee);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let ee=0;ee<B.locationSize;ee++)S(B.location+ee,Se/B.locationSize,at,ie,Se*lt,Se/B.locationSize*ee*lt,K)}}else if(V!==void 0){const ie=V[Y];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(B.location,ie);break;case 3:i.vertexAttrib3fv(B.location,ie);break;case 4:i.vertexAttrib4fv(B.location,ie);break;default:i.vertexAttrib1fv(B.location,ie)}}}}y()}function E(){L();for(const M in n){const C=n[M];for(const U in C){const O=C[U];for(const D in O)h(O[D].object),delete O[D];delete C[U]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const U in C){const O=C[U];for(const D in O)h(O[D].object),delete O[D];delete C[U]}delete n[M.id]}function w(M){for(const C in n){const U=n[C];if(U[M.id]===void 0)continue;const O=U[M.id];for(const D in O)h(O[D].object),delete O[D];delete U[M.id]}}function L(){x(),o=!0,r!==s&&(r=s,c(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:x,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function xx(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Mx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Dn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const L=w===_o&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ni&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Gn&&!L)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:E,maxSamples:R}}function yx(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new ds,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const y=r?0:n,S=y*4;let v=m.clippingState||null;l.value=v,v=h(g,d,S,f);for(let E=0;E!==S;++E)v[E]=t[E];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,v=f;S!==_;++S,v+=4)o.copy(u[S]).applyMatrix4(y,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Sx(i){let e=new WeakMap;function t(o,a){return a===oc?o.mapping=hr:a===ac&&(o.mapping=ur),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===oc||a===ac)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new W0(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const nr=4,Uu=[.125,.215,.35,.446,.526,.582],ms=20,Ml=new Ah,Nu=new pe;let yl=null,Sl=0,bl=0,wl=!1;const fs=(1+Math.sqrt(5))/2,Ws=1/fs,Du=[new A(-fs,Ws,0),new A(fs,Ws,0),new A(-Ws,0,fs),new A(Ws,0,fs),new A(0,fs,-Ws),new A(0,fs,Ws),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],bx=new A;class ku{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=bx}=r;yl=this._renderer.getRenderTarget(),Sl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yl,Sl,bl),this._renderer.xr.enabled=wl,e.scissorTest=!1,Yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hr||e.mapping===ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yl=this._renderer.getRenderTarget(),Sl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:_o,format:Dn,colorSpace:pn,depthBuffer:!1},s=Ou(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ou(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wx(r)),this._blurMaterial=Tx(r,e,t)}return s}_compileMaterial(e){const t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,Ml)}_sceneToCubeUV(e,t,n,s,r){const l=new xn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Nu),u.toneMapping=Wi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new ti({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),p=new wt(new xo,_);let m=!1;const y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,m=!0):(_.color.copy(Nu),m=!0);for(let S=0;S<6;S++){const v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));const E=this._cubeSize;Yo(s,v*E,S>2?E:0,E,E),u.setRenderTarget(s),m&&u.render(p,l),u.render(e,l)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===hr||e.mapping===ur;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new wt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Yo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ml)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Du[(s-r-1)%Du.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new wt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ms-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):ms;p>ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ms}`);const m=[];let y=0;for(let w=0;w<ms;++w){const L=w/_,x=Math.exp(-L*L/2);m.push(x),w===0?y+=x:w<p&&(y+=2*x)}for(let w=0;w<m.length;w++)m[w]=m[w]/y;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const v=this._sizeLods[s],E=3*v*(s>S-nr?s-S+nr:0),R=4*(this._cubeSize-v);Yo(t,E,R,3*v,2*v),l.setRenderTarget(t),l.render(u,Ml)}}function wx(i){const e=[],t=[],n=[];let s=i;const r=i-nr+1+Uu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-nr?l=Uu[o-i+nr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*f),S=new Float32Array(p*g*f),v=new Float32Array(m*g*f);for(let R=0;R<f;R++){const w=R%3*2/3-1,L=R>2?0:-1,x=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];y.set(x,_*g*R),S.set(d,p*g*R);const M=[R,R,R,R,R,R];v.set(M,m*g*R)}const E=new Rt;E.setAttribute("position",new it(y,_)),E.setAttribute("uv",new it(S,p)),E.setAttribute("faceIndex",new it(v,m)),e.push(E),s>nr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ou(i,e,t){const n=new Ss(i,e,t);return n.texture.mapping=ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Tx(i,e,t){const n=new Float32Array(ms),s=new A(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Fu(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Bu(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Ph(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ex(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===oc||l===ac,h=l===hr||l===ur;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ku(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new ku(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ax(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&lo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Rx(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let S=0,v=y.length;S<v;S+=3){const E=y[S+0],R=y[S+1],w=y[S+2];d.push(E,R,R,w,w,E)}}else if(g!==void 0){const y=g.array;_=g.version;for(let S=0,v=y.length/3-1;S<v;S+=3){const E=S+0,R=S+1,w=S+2;d.push(E,R,R,w,w,E)}}else return;const p=new(Of(d)?zf:Fa)(d,1);p.version=_;const m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Cx(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function u(d,f,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let m=0;for(let y=0;y<g;y++)m+=f[y]*_[y];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Px(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Lx(i,e,t){const n=new WeakMap,s=new xt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let x=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",x)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;f===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let v=a.attributes.position.count*S,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const R=new Float32Array(v*E*4*u),w=new Ff(R,v,E,u);w.type=Gn,w.needsUpdate=!0;const L=S*4;for(let M=0;M<u;M++){const C=p[M],U=m[M],O=y[M],D=v*E*4*M;for(let G=0;G<C.count;G++){const V=G*L;f===!0&&(s.fromBufferAttribute(C,G),R[D+V+0]=s.x,R[D+V+1]=s.y,R[D+V+2]=s.z,R[D+V+3]=0),g===!0&&(s.fromBufferAttribute(U,G),R[D+V+4]=s.x,R[D+V+5]=s.y,R[D+V+6]=s.z,R[D+V+7]=0),_===!0&&(s.fromBufferAttribute(O,G),R[D+V+8]=s.x,R[D+V+9]=s.y,R[D+V+10]=s.z,R[D+V+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new Ke(v,E)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Ix(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const sp=new Kt,Vu=new Yf(1,1),rp=new Ff,op=new R0,ap=new Xf,zu=[],Hu=[],Gu=new Float32Array(16),Wu=new Float32Array(9),Xu=new Float32Array(4);function vr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=zu[s];if(r===void 0&&(r=new Float32Array(s),zu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function za(i,e){let t=Hu[e];t===void 0&&(t=new Int32Array(e),Hu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ux(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Nx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),Jt(t,e)}}function Dx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),Jt(t,e)}}function kx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),Jt(t,e)}}function Ox(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;Xu.set(n),i.uniformMatrix2fv(this.addr,!1,Xu),Jt(t,n)}}function Fx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;Wu.set(n),i.uniformMatrix3fv(this.addr,!1,Wu),Jt(t,n)}}function Bx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;Gu.set(n),i.uniformMatrix4fv(this.addr,!1,Gu),Jt(t,n)}}function Vx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function zx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),Jt(t,e)}}function Hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),Jt(t,e)}}function Gx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),Jt(t,e)}}function Wx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),Jt(t,e)}}function jx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),Jt(t,e)}}function qx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),Jt(t,e)}}function Yx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Vu.compareFunction=kf,r=Vu):r=sp,t.setTexture2D(e||r,s)}function $x(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||op,s)}function Kx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ap,s)}function Zx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||rp,s)}function Jx(i){switch(i){case 5126:return Ux;case 35664:return Nx;case 35665:return Dx;case 35666:return kx;case 35674:return Ox;case 35675:return Fx;case 35676:return Bx;case 5124:case 35670:return Vx;case 35667:case 35671:return zx;case 35668:case 35672:return Hx;case 35669:case 35673:return Gx;case 5125:return Wx;case 36294:return Xx;case 36295:return jx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return $x;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return Zx}}function Qx(i,e){i.uniform1fv(this.addr,e)}function eM(i,e){const t=vr(e,this.size,2);i.uniform2fv(this.addr,t)}function tM(i,e){const t=vr(e,this.size,3);i.uniform3fv(this.addr,t)}function nM(i,e){const t=vr(e,this.size,4);i.uniform4fv(this.addr,t)}function iM(i,e){const t=vr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sM(i,e){const t=vr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function rM(i,e){const t=vr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function oM(i,e){i.uniform1iv(this.addr,e)}function aM(i,e){i.uniform2iv(this.addr,e)}function lM(i,e){i.uniform3iv(this.addr,e)}function cM(i,e){i.uniform4iv(this.addr,e)}function hM(i,e){i.uniform1uiv(this.addr,e)}function uM(i,e){i.uniform2uiv(this.addr,e)}function dM(i,e){i.uniform3uiv(this.addr,e)}function fM(i,e){i.uniform4uiv(this.addr,e)}function pM(i,e,t){const n=this.cache,s=e.length,r=za(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||sp,r[o])}function mM(i,e,t){const n=this.cache,s=e.length,r=za(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||op,r[o])}function gM(i,e,t){const n=this.cache,s=e.length,r=za(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ap,r[o])}function _M(i,e,t){const n=this.cache,s=e.length,r=za(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||rp,r[o])}function vM(i){switch(i){case 5126:return Qx;case 35664:return eM;case 35665:return tM;case 35666:return nM;case 35674:return iM;case 35675:return sM;case 35676:return rM;case 5124:case 35670:return oM;case 35667:case 35671:return aM;case 35668:case 35672:return lM;case 35669:case 35673:return cM;case 5125:return hM;case 36294:return uM;case 36295:return dM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return pM;case 35679:case 36299:case 36307:return mM;case 35680:case 36300:case 36308:case 36293:return gM;case 36289:case 36303:case 36311:case 36292:return _M}}class xM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jx(t.type)}}class MM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vM(t.type)}}class yM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Tl=/(\w+)(\])?(\[|\.)?/g;function ju(i,e){i.seq.push(e),i.map[e.id]=e}function SM(i,e,t){const n=i.name,s=n.length;for(Tl.lastIndex=0;;){const r=Tl.exec(n),o=Tl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ju(t,c===void 0?new xM(a,i,e):new MM(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new yM(a),ju(t,u)),t=u}}}class ma{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);SM(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function qu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const bM=37297;let wM=0;function TM(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Yu=new Be;function EM(i){gt._getMatrix(Yu,gt.workingColorSpace,i);const e=`mat3( ${Yu.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(i)){case ba:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function $u(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+TM(i.getShaderSource(e),a)}else return r}function AM(i,e){const t=EM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function RM(i,e){let t;switch(e){case km:t="Linear";break;case Om:t="Reinhard";break;case Fm:t="Cineon";break;case Bm:t="ACESFilmic";break;case zm:t="AgX";break;case Hm:t="Neutral";break;case Vm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $o=new A;function CM(){gt.getLuminanceCoefficients($o);const i=$o.x.toFixed(4),e=$o.y.toFixed(4),t=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function LM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function IM(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Hr(i){return i!==""}function Ku(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UM=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(i){return i.replace(UM,DM)}const NM=new Map;function DM(i,e){let t=ot[e];if(t===void 0){const n=NM.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return zc(t)}const kM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ju(i){return i.replace(kM,OM)}function OM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function FM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===_m?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function BM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hr:case ur:e="ENVMAP_TYPE_CUBE";break;case ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function VM(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ur&&(e="ENVMAP_MODE_REFRACTION"),e}function zM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lh:e="ENVMAP_BLENDING_MULTIPLY";break;case Nm:e="ENVMAP_BLENDING_MIX";break;case Dm:e="ENVMAP_BLENDING_ADD";break}return e}function HM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function GM(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=FM(t),c=BM(t),h=VM(t),u=zM(t),d=HM(t),f=PM(t),g=LM(r),_=s.createProgram();let p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hr).join(`
`),m.length>0&&(m+=`
`)):(p=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),m=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?ot.tonemapping_pars_fragment:"",t.toneMapping!==Wi?RM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,AM("linearToOutputTexel",t.outputColorSpace),CM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hr).join(`
`)),o=zc(o),o=Ku(o,t),o=Zu(o,t),a=zc(a),a=Ku(a,t),a=Zu(a,t),o=Ju(o),a=Ju(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=y+p+o,v=y+m+a,E=qu(s,s.VERTEX_SHADER,S),R=qu(s,s.FRAGMENT_SHADER,v);s.attachShader(_,E),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(C){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(E)||"",D=s.getShaderInfoLog(R)||"",G=U.trim(),V=O.trim(),Y=D.trim();let B=!0,Q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,R);else{const ie=$u(s,E,"vertex"),Se=$u(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+G+`
`+ie+`
`+Se)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(V===""||Y==="")&&(Q=!1);Q&&(C.diagnostics={runnable:B,programLog:G,vertexShader:{log:V,prefix:p},fragmentShader:{log:Y,prefix:m}})}s.deleteShader(E),s.deleteShader(R),L=new ma(s,_),x=IM(s,_)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,bM)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=R,this}let WM=0;class XM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jM(e),t.set(e,n)),n}}class jM{constructor(e){this.id=WM++,this.code=e,this.usedTimes=0}}function qM(i,e,t,n,s,r,o){const a=new Bf,l=new XM,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,M,C,U,O){const D=U.fog,G=O.geometry,V=x.isMeshStandardMaterial?U.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||V),B=Y&&Y.mapping===ka?Y.image.height:null,Q=g[x.type];x.precision!==null&&(f=s.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const ie=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Se=ie!==void 0?ie.length:0;let $e=0;G.morphAttributes.position!==void 0&&($e=1),G.morphAttributes.normal!==void 0&&($e=2),G.morphAttributes.color!==void 0&&($e=3);let ht,at,lt,K;if(Q){const mt=Jn[Q];ht=mt.vertexShader,at=mt.fragmentShader}else ht=x.vertexShader,at=x.fragmentShader,l.update(x),lt=l.getVertexShaderID(x),K=l.getFragmentShaderID(x);const ee=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),He=O.isInstancedMesh===!0,Ae=O.isBatchedMesh===!0,Qe=!!x.map,Ut=!!x.matcap,I=!!Y,St=!!x.aoMap,Fe=!!x.lightMap,Ne=!!x.bumpMap,Re=!!x.normalMap,pt=!!x.displacementMap,Me=!!x.emissiveMap,Ge=!!x.metalnessMap,Bt=!!x.roughnessMap,kt=x.anisotropy>0,P=x.clearcoat>0,b=x.dispersion>0,z=x.iridescence>0,$=x.sheen>0,Z=x.transmission>0,X=kt&&!!x.anisotropyMap,Ce=P&&!!x.clearcoatMap,re=P&&!!x.clearcoatNormalMap,we=P&&!!x.clearcoatRoughnessMap,xe=z&&!!x.iridescenceMap,se=z&&!!x.iridescenceThicknessMap,me=$&&!!x.sheenColorMap,Ue=$&&!!x.sheenRoughnessMap,Ee=!!x.specularMap,fe=!!x.specularColorMap,qe=!!x.specularIntensityMap,N=Z&&!!x.transmissionMap,oe=Z&&!!x.thicknessMap,ae=!!x.gradientMap,_e=!!x.alphaMap,ne=x.alphaTest>0,J=!!x.alphaHash,ve=!!x.extensions;let We=Wi;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(We=i.toneMapping);const _t={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:ht,fragmentShader:at,defines:x.defines,customVertexShaderID:lt,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ae,batchingColor:Ae&&O._colorsTexture!==null,instancing:He,instancingColor:He&&O.instanceColor!==null,instancingMorph:He&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:pn,alphaToCoverage:!!x.alphaToCoverage,map:Qe,matcap:Ut,envMap:I,envMapMode:I&&Y.mapping,envMapCubeUVHeight:B,aoMap:St,lightMap:Fe,bumpMap:Ne,normalMap:Re,displacementMap:d&&pt,emissiveMap:Me,normalMapObjectSpace:Re&&x.normalMapType===Zm,normalMapTangentSpace:Re&&x.normalMapType===vo,metalnessMap:Ge,roughnessMap:Bt,anisotropy:kt,anisotropyMap:X,clearcoat:P,clearcoatMap:Ce,clearcoatNormalMap:re,clearcoatRoughnessMap:we,dispersion:b,iridescence:z,iridescenceMap:xe,iridescenceThicknessMap:se,sheen:$,sheenColorMap:me,sheenRoughnessMap:Ue,specularMap:Ee,specularColorMap:fe,specularIntensityMap:qe,transmission:Z,transmissionMap:N,thicknessMap:oe,gradientMap:ae,opaque:x.transparent===!1&&x.blending===sr&&x.alphaToCoverage===!1,alphaMap:_e,alphaTest:ne,alphaHash:J,combine:x.combine,mapUv:Qe&&_(x.map.channel),aoMapUv:St&&_(x.aoMap.channel),lightMapUv:Fe&&_(x.lightMap.channel),bumpMapUv:Ne&&_(x.bumpMap.channel),normalMapUv:Re&&_(x.normalMap.channel),displacementMapUv:pt&&_(x.displacementMap.channel),emissiveMapUv:Me&&_(x.emissiveMap.channel),metalnessMapUv:Ge&&_(x.metalnessMap.channel),roughnessMapUv:Bt&&_(x.roughnessMap.channel),anisotropyMapUv:X&&_(x.anisotropyMap.channel),clearcoatMapUv:Ce&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:me&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&_(x.sheenRoughnessMap.channel),specularMapUv:Ee&&_(x.specularMap.channel),specularColorMapUv:fe&&_(x.specularColorMap.channel),specularIntensityMapUv:qe&&_(x.specularIntensityMap.channel),transmissionMapUv:N&&_(x.transmissionMap.channel),thicknessMapUv:oe&&_(x.thicknessMap.channel),alphaMapUv:_e&&_(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Re||kt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(Qe||_e),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:be,skinning:O.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:$e,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:Qe&&x.map.isVideoTexture===!0&&gt.getTransfer(x.map.colorSpace)===Lt,decodeVideoTextureEmissive:Me&&x.emissiveMap.isVideoTexture===!0&&gt.getTransfer(x.emissiveMap.colorSpace)===Lt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mn,flipSided:x.side===dn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ve&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&x.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function m(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)M.push(C),M.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(y(M,x),S(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function y(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function S(x,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){const M=g[x.type];let C;if(M){const U=Jn[M];C=Gf.clone(U.uniforms)}else C=x.uniforms;return C}function E(x,M){let C;for(let U=0,O=h.length;U<O;U++){const D=h[U];if(D.cacheKey===M){C=D,++C.usedTimes;break}}return C===void 0&&(C=new GM(i,M,x,r),h.push(C)),C}function R(x){if(--x.usedTimes===0){const M=h.indexOf(x);h[M]=h[h.length-1],h.pop(),x.destroy()}}function w(x){l.remove(x)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:E,releaseProgram:R,releaseShaderCache:w,programs:h,dispose:L}}function YM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function $M(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ed(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function td(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,p){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),e++,m}function a(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||$M),n.length>1&&n.sort(d||ed),s.length>1&&s.sort(d||ed)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function KM(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new td,i.set(n,[o])):s>=r.length?(o=new td,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ZM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new pe};break;case"SpotLight":t={position:new A,direction:new A,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function JM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let QM=0;function ey(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ty(i){const e=new ZM,t=JM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);const s=new A,r=new Oe,o=new Oe;function a(c){let h=0,u=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,y=0,S=0,v=0,E=0,R=0,w=0;c.sort(ey);for(let x=0,M=c.length;x<M;x++){const C=c[x],U=C.color,O=C.intensity,D=C.distance,G=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=U.r*O,u+=U.g*O,d+=U.b*O;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],O);w++}else if(C.isDirectionalLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,B=t.get(C);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=C.shadow.matrix,y++}n.directional[f]=V,f++}else if(C.isSpotLight){const V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(U).multiplyScalar(O),V.distance=D,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[_]=V;const Y=C.shadow;if(C.map&&(n.spotLightMap[E]=C.map,E++,Y.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[_]=Y.matrix,C.castShadow){const B=t.get(C);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=G,v++}_++}else if(C.isRectAreaLight){const V=e.get(C);V.color.copy(U).multiplyScalar(O),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=V,p++}else if(C.isPointLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const Y=C.shadow,B=t.get(C);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,B.shadowCameraNear=Y.camera.near,B.shadowCameraFar=Y.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=C.shadow.matrix,S++}n.point[g]=V,g++}else if(C.isHemisphereLight){const V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(O),V.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[m]=V,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==p||L.hemiLength!==m||L.numDirectionalShadows!==y||L.numPointShadows!==S||L.numSpotShadows!==v||L.numSpotMaps!==E||L.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+E-R,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=w,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=p,L.hemiLength=m,L.numDirectionalShadows=y,L.numPointShadows=S,L.numSpotShadows=v,L.numSpotMaps=E,L.numLightProbes=w,n.version=QM++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const S=c[m];if(S.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),u++}else if(S.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),f++}else if(S.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(S.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function nd(i){const e=new ty(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ny(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new nd(i),e.set(s,[a])):r>=o.length?(a=new nd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ry(i,e,t){let n=new Sh;const s=new Ke,r=new Ke,o=new xt,a=new ng({depthPacking:Km}),l=new ig,c={},h=t.maxTextureSize,u={[vi]:dn,[dn]:vi,[Mn]:Mn},d=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:iy,fragmentShader:sy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Rt;g.setAttribute("position",new it(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new wt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tf;let m=this.type;this.render=function(R,w,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const x=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Gi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=m!==pi&&this.type===pi,D=m===pi&&this.type!==pi;for(let G=0,V=R.length;G<V;G++){const Y=R[G],B=Y.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const Q=B.getFrameExtents();if(s.multiply(Q),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,B.mapSize.y=r.y)),B.map===null||O===!0||D===!0){const Se=this.type!==pi?{minFilter:fn,magFilter:fn}:{};B.map!==null&&B.map.dispose(),B.map=new Ss(s.x,s.y,Se),B.map.texture.name=Y.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const ie=B.getViewportCount();for(let Se=0;Se<ie;Se++){const $e=B.getViewport(Se);o.set(r.x*$e.x,r.y*$e.y,r.x*$e.z,r.y*$e.w),U.viewport(o),B.updateMatrices(Y,Se),n=B.getFrustum(),v(w,L,B.camera,Y,this.type)}B.isPointLightShadow!==!0&&this.type===pi&&y(B,L),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(x,M,C)};function y(R,w){const L=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ss(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,L,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,L,f,_,null)}function S(R,w,L,x){let M=null;const C=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)M=C;else if(M=L.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const U=M.uuid,O=w.uuid;let D=c[U];D===void 0&&(D={},c[U]=D);let G=D[O];G===void 0&&(G=M.clone(),D[O]=G,w.addEventListener("dispose",E)),M=G}if(M.visible=w.visible,M.wireframe=w.wireframe,x===pi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=i.properties.get(M);U.light=L}return M}function v(R,w,L,x,M){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===pi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const O=e.update(R),D=R.material;if(Array.isArray(D)){const G=O.groups;for(let V=0,Y=G.length;V<Y;V++){const B=G[V],Q=D[B.materialIndex];if(Q&&Q.visible){const ie=S(R,Q,x,M);R.onBeforeShadow(i,R,w,L,O,ie,B),i.renderBufferDirect(L,null,O,ie,R,B),R.onAfterShadow(i,R,w,L,O,ie,B)}}}else if(D.visible){const G=S(R,D,x,M);R.onBeforeShadow(i,R,w,L,O,G,null),i.renderBufferDirect(L,null,O,G,R,null),R.onAfterShadow(i,R,w,L,O,G,null)}}const U=R.children;for(let O=0,D=U.length;O<D;O++)v(U[O],w,L,x,M)}function E(R){R.target.removeEventListener("dispose",E);for(const L in c){const x=c[L],M=R.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}const oy={[Ql]:ec,[tc]:sc,[nc]:rc,[cr]:ic,[ec]:Ql,[sc]:tc,[rc]:nc,[ic]:cr};function ay(i,e){function t(){let N=!1;const oe=new xt;let ae=null;const _e=new xt(0,0,0,0);return{setMask:function(ne){ae!==ne&&!N&&(i.colorMask(ne,ne,ne,ne),ae=ne)},setLocked:function(ne){N=ne},setClear:function(ne,J,ve,We,_t){_t===!0&&(ne*=We,J*=We,ve*=We),oe.set(ne,J,ve,We),_e.equals(oe)===!1&&(i.clearColor(ne,J,ve,We),_e.copy(oe))},reset:function(){N=!1,ae=null,_e.set(-1,0,0,0)}}}function n(){let N=!1,oe=!1,ae=null,_e=null,ne=null;return{setReversed:function(J){if(oe!==J){const ve=e.get("EXT_clip_control");J?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),oe=J;const We=ne;ne=null,this.setClear(We)}},getReversed:function(){return oe},setTest:function(J){J?ee(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(J){ae!==J&&!N&&(i.depthMask(J),ae=J)},setFunc:function(J){if(oe&&(J=oy[J]),_e!==J){switch(J){case Ql:i.depthFunc(i.NEVER);break;case ec:i.depthFunc(i.ALWAYS);break;case tc:i.depthFunc(i.LESS);break;case cr:i.depthFunc(i.LEQUAL);break;case nc:i.depthFunc(i.EQUAL);break;case ic:i.depthFunc(i.GEQUAL);break;case sc:i.depthFunc(i.GREATER);break;case rc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=J}},setLocked:function(J){N=J},setClear:function(J){ne!==J&&(oe&&(J=1-J),i.clearDepth(J),ne=J)},reset:function(){N=!1,ae=null,_e=null,ne=null,oe=!1}}}function s(){let N=!1,oe=null,ae=null,_e=null,ne=null,J=null,ve=null,We=null,_t=null;return{setTest:function(mt){N||(mt?ee(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(mt){oe!==mt&&!N&&(i.stencilMask(mt),oe=mt)},setFunc:function(mt,gn,yn){(ae!==mt||_e!==gn||ne!==yn)&&(i.stencilFunc(mt,gn,yn),ae=mt,_e=gn,ne=yn)},setOp:function(mt,gn,yn){(J!==mt||ve!==gn||We!==yn)&&(i.stencilOp(mt,gn,yn),J=mt,ve=gn,We=yn)},setLocked:function(mt){N=mt},setClear:function(mt){_t!==mt&&(i.clearStencil(mt),_t=mt)},reset:function(){N=!1,oe=null,ae=null,_e=null,ne=null,J=null,ve=null,We=null,_t=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,p=null,m=null,y=null,S=null,v=null,E=null,R=null,w=new pe(0,0,0),L=0,x=!1,M=null,C=null,U=null,O=null,D=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(B)[1]),V=Y>=1):B.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),V=Y>=2);let Q=null,ie={};const Se=i.getParameter(i.SCISSOR_BOX),$e=i.getParameter(i.VIEWPORT),ht=new xt().fromArray(Se),at=new xt().fromArray($e);function lt(N,oe,ae,_e){const ne=new Uint8Array(4),J=i.createTexture();i.bindTexture(N,J),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ve=0;ve<ae;ve++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(oe+ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return J}const K={};K[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(i.DEPTH_TEST),o.setFunc(cr),Ne(!1),Re(Hh),ee(i.CULL_FACE),St(Gi);function ee(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function be(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function He(N,oe){return u[N]!==oe?(i.bindFramebuffer(N,oe),u[N]=oe,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=oe),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ae(N,oe){let ae=f,_e=!1;if(N){ae=d.get(oe),ae===void 0&&(ae=[],d.set(oe,ae));const ne=N.textures;if(ae.length!==ne.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let J=0,ve=ne.length;J<ve;J++)ae[J]=i.COLOR_ATTACHMENT0+J;ae.length=ne.length,_e=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,_e=!0);_e&&i.drawBuffers(ae)}function Qe(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const Ut={[ps]:i.FUNC_ADD,[vm]:i.FUNC_SUBTRACT,[xm]:i.FUNC_REVERSE_SUBTRACT};Ut[Mm]=i.MIN,Ut[ym]=i.MAX;const I={[Sm]:i.ZERO,[xi]:i.ONE,[bm]:i.SRC_COLOR,[Zl]:i.SRC_ALPHA,[Cm]:i.SRC_ALPHA_SATURATE,[Am]:i.DST_COLOR,[Tm]:i.DST_ALPHA,[wm]:i.ONE_MINUS_SRC_COLOR,[Jl]:i.ONE_MINUS_SRC_ALPHA,[Rm]:i.ONE_MINUS_DST_COLOR,[Em]:i.ONE_MINUS_DST_ALPHA,[Pm]:i.CONSTANT_COLOR,[Lm]:i.ONE_MINUS_CONSTANT_COLOR,[Im]:i.CONSTANT_ALPHA,[Um]:i.ONE_MINUS_CONSTANT_ALPHA};function St(N,oe,ae,_e,ne,J,ve,We,_t,mt){if(N===Gi){_===!0&&(be(i.BLEND),_=!1);return}if(_===!1&&(ee(i.BLEND),_=!0),N!==go){if(N!==p||mt!==x){if((m!==ps||v!==ps)&&(i.blendEquation(i.FUNC_ADD),m=ps,v=ps),mt)switch(N){case sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gh:i.blendFunc(i.ONE,i.ONE);break;case Wh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Wh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,S=null,E=null,R=null,w.set(0,0,0),L=0,p=N,x=mt}return}ne=ne||oe,J=J||ae,ve=ve||_e,(oe!==m||ne!==v)&&(i.blendEquationSeparate(Ut[oe],Ut[ne]),m=oe,v=ne),(ae!==y||_e!==S||J!==E||ve!==R)&&(i.blendFuncSeparate(I[ae],I[_e],I[J],I[ve]),y=ae,S=_e,E=J,R=ve),(We.equals(w)===!1||_t!==L)&&(i.blendColor(We.r,We.g,We.b,_t),w.copy(We),L=_t),p=N,x=!1}function Fe(N,oe){N.side===Mn?be(i.CULL_FACE):ee(i.CULL_FACE);let ae=N.side===dn;oe&&(ae=!ae),Ne(ae),N.blending===sr&&N.transparent===!1?St(Gi):St(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const _e=N.stencilWrite;a.setTest(_e),_e&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Me(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function Re(N){N!==mm?(ee(i.CULL_FACE),N!==C&&(N===Hh?i.cullFace(i.BACK):N===gm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),C=N}function pt(N){N!==U&&(V&&i.lineWidth(N),U=N)}function Me(N,oe,ae){N?(ee(i.POLYGON_OFFSET_FILL),(O!==oe||D!==ae)&&(i.polygonOffset(oe,ae),O=oe,D=ae)):be(i.POLYGON_OFFSET_FILL)}function Ge(N){N?ee(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function Bt(N){N===void 0&&(N=i.TEXTURE0+G-1),Q!==N&&(i.activeTexture(N),Q=N)}function kt(N,oe,ae){ae===void 0&&(Q===null?ae=i.TEXTURE0+G-1:ae=Q);let _e=ie[ae];_e===void 0&&(_e={type:void 0,texture:void 0},ie[ae]=_e),(_e.type!==N||_e.texture!==oe)&&(Q!==ae&&(i.activeTexture(ae),Q=ae),i.bindTexture(N,oe||K[N]),_e.type=N,_e.texture=oe)}function P(){const N=ie[Q];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(N){ht.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ht.copy(N))}function Ue(N){at.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),at.copy(N))}function Ee(N,oe){let ae=c.get(oe);ae===void 0&&(ae=new WeakMap,c.set(oe,ae));let _e=ae.get(N);_e===void 0&&(_e=i.getUniformBlockIndex(oe,N.name),ae.set(N,_e))}function fe(N,oe){const _e=c.get(oe).get(N);l.get(oe)!==_e&&(i.uniformBlockBinding(oe,_e,N.__bindingPointIndex),l.set(oe,_e))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Q=null,ie={},u={},d=new WeakMap,f=[],g=null,_=!1,p=null,m=null,y=null,S=null,v=null,E=null,R=null,w=new pe(0,0,0),L=0,x=!1,M=null,C=null,U=null,O=null,D=null,ht.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:be,bindFramebuffer:He,drawBuffers:Ae,useProgram:Qe,setBlending:St,setMaterial:Fe,setFlipSided:Ne,setCullFace:Re,setLineWidth:pt,setPolygonOffset:Me,setScissorTest:Ge,activeTexture:Bt,bindTexture:kt,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:z,texImage2D:xe,texImage3D:se,updateUBOMapping:Ee,uniformBlockBinding:fe,texStorage2D:re,texStorage3D:we,texSubImage2D:$,texSubImage3D:Z,compressedTexSubImage2D:X,compressedTexSubImage3D:Ce,scissor:me,viewport:Ue,reset:qe}}function ly(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return f?new OffscreenCanvas(P,b):ao("canvas")}function _(P,b,z){let $=1;const Z=kt(P);if((Z.width>z||Z.height>z)&&($=z/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){const X=Math.floor($*Z.width),Ce=Math.floor($*Z.height);u===void 0&&(u=g(X,Ce));const re=b?g(X,Ce):u;return re.width=X,re.height=Ce,re.getContext("2d").drawImage(P,0,0,X,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+Ce+")."),re}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function p(P){return P.generateMipmaps}function m(P){i.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(P,b,z,$,Z=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let X=b;if(b===i.RED&&(z===i.FLOAT&&(X=i.R32F),z===i.HALF_FLOAT&&(X=i.R16F),z===i.UNSIGNED_BYTE&&(X=i.R8)),b===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.R8UI),z===i.UNSIGNED_SHORT&&(X=i.R16UI),z===i.UNSIGNED_INT&&(X=i.R32UI),z===i.BYTE&&(X=i.R8I),z===i.SHORT&&(X=i.R16I),z===i.INT&&(X=i.R32I)),b===i.RG&&(z===i.FLOAT&&(X=i.RG32F),z===i.HALF_FLOAT&&(X=i.RG16F),z===i.UNSIGNED_BYTE&&(X=i.RG8)),b===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RG8UI),z===i.UNSIGNED_SHORT&&(X=i.RG16UI),z===i.UNSIGNED_INT&&(X=i.RG32UI),z===i.BYTE&&(X=i.RG8I),z===i.SHORT&&(X=i.RG16I),z===i.INT&&(X=i.RG32I)),b===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RGB8UI),z===i.UNSIGNED_SHORT&&(X=i.RGB16UI),z===i.UNSIGNED_INT&&(X=i.RGB32UI),z===i.BYTE&&(X=i.RGB8I),z===i.SHORT&&(X=i.RGB16I),z===i.INT&&(X=i.RGB32I)),b===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),z===i.UNSIGNED_INT&&(X=i.RGBA32UI),z===i.BYTE&&(X=i.RGBA8I),z===i.SHORT&&(X=i.RGBA16I),z===i.INT&&(X=i.RGBA32I)),b===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),b===i.RGBA){const Ce=Z?ba:gt.getTransfer($);z===i.FLOAT&&(X=i.RGBA32F),z===i.HALF_FLOAT&&(X=i.RGBA16F),z===i.UNSIGNED_BYTE&&(X=Ce===Lt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function v(P,b){let z;return P?b===null||b===ys||b===no?z=i.DEPTH24_STENCIL8:b===Gn?z=i.DEPTH32F_STENCIL8:b===to&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ys||b===no?z=i.DEPTH_COMPONENT24:b===Gn?z=i.DEPTH_COMPONENT32F:b===to&&(z=i.DEPTH_COMPONENT16),z}function E(P,b){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==fn&&P.minFilter!==Rn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function R(P){const b=P.target;b.removeEventListener("dispose",R),L(b),b.isVideoTexture&&h.delete(b)}function w(P){const b=P.target;b.removeEventListener("dispose",w),M(b)}function L(P){const b=n.get(P);if(b.__webglInit===void 0)return;const z=P.source,$=d.get(z);if($){const Z=$[b.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&x(P),Object.keys($).length===0&&d.delete(z)}n.remove(P)}function x(P){const b=n.get(P);i.deleteTexture(b.__webglTexture);const z=P.source,$=d.get(z);delete $[b.__cacheKey],o.memory.textures--}function M(P){const b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let Z=0;Z<b.__webglFramebuffer[$].length;Z++)i.deleteFramebuffer(b.__webglFramebuffer[$][Z]);else i.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)i.deleteFramebuffer(b.__webglFramebuffer[$]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=P.textures;for(let $=0,Z=z.length;$<Z;$++){const X=n.get(z[$]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(z[$])}n.remove(P)}let C=0;function U(){C=0}function O(){const P=C;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),C+=1,P}function D(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function G(P,b){const z=n.get(P);if(P.isVideoTexture&&Ge(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&z.__version!==P.version){const $=P.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(z,P,b);return}}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+b)}function V(P,b){const z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){K(z,P,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+b)}function Y(P,b){const z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){K(z,P,b);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+b)}function B(P,b){const z=n.get(P);if(P.version>0&&z.__version!==P.version){ee(z,P,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+b)}const Q={[Ms]:i.REPEAT,[Bi]:i.CLAMP_TO_EDGE,[ya]:i.MIRRORED_REPEAT},ie={[fn]:i.NEAREST,[Af]:i.NEAREST_MIPMAP_NEAREST,[zr]:i.NEAREST_MIPMAP_LINEAR,[Rn]:i.LINEAR,[ha]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},Se={[Jm]:i.NEVER,[s0]:i.ALWAYS,[Qm]:i.LESS,[kf]:i.LEQUAL,[e0]:i.EQUAL,[i0]:i.GEQUAL,[t0]:i.GREATER,[n0]:i.NOTEQUAL};function $e(P,b){if(b.type===Gn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Rn||b.magFilter===ha||b.magFilter===zr||b.magFilter===Qn||b.minFilter===Rn||b.minFilter===ha||b.minFilter===zr||b.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Q[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Q[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Q[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ie[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ie[b.minFilter]),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Se[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===fn||b.minFilter!==zr&&b.minFilter!==Qn||b.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ht(P,b){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",R));const $=b.source;let Z=d.get($);Z===void 0&&(Z={},d.set($,Z));const X=D(b);if(X!==P.__cacheKey){Z[X]===void 0&&(Z[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Z[X].usedTimes++;const Ce=Z[P.__cacheKey];Ce!==void 0&&(Z[P.__cacheKey].usedTimes--,Ce.usedTimes===0&&x(b)),P.__cacheKey=X,P.__webglTexture=Z[X].texture}return z}function at(P,b,z){return Math.floor(Math.floor(P/z)/b)}function lt(P,b,z,$){const X=P.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,z,$,b.data);else{X.sort((se,me)=>se.start-me.start);let Ce=0;for(let se=1;se<X.length;se++){const me=X[Ce],Ue=X[se],Ee=me.start+me.count,fe=at(Ue.start,b.width,4),qe=at(me.start,b.width,4);Ue.start<=Ee+1&&fe===qe&&at(Ue.start+Ue.count-1,b.width,4)===fe?me.count=Math.max(me.count,Ue.start+Ue.count-me.start):(++Ce,X[Ce]=Ue)}X.length=Ce+1;const re=i.getParameter(i.UNPACK_ROW_LENGTH),we=i.getParameter(i.UNPACK_SKIP_PIXELS),xe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let se=0,me=X.length;se<me;se++){const Ue=X[se],Ee=Math.floor(Ue.start/4),fe=Math.ceil(Ue.count/4),qe=Ee%b.width,N=Math.floor(Ee/b.width),oe=fe,ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,qe,N,oe,ae,z,$,b.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,re),i.pixelStorei(i.UNPACK_SKIP_PIXELS,we),i.pixelStorei(i.UNPACK_SKIP_ROWS,xe)}}function K(P,b,z){let $=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=i.TEXTURE_3D);const Z=ht(P,b),X=b.source;t.bindTexture($,P.__webglTexture,i.TEXTURE0+z);const Ce=n.get(X);if(X.version!==Ce.__version||Z===!0){t.activeTexture(i.TEXTURE0+z);const re=gt.getPrimaries(gt.workingColorSpace),we=b.colorSpace===mi?null:gt.getPrimaries(b.colorSpace),xe=b.colorSpace===mi||re===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let se=_(b.image,!1,s.maxTextureSize);se=Bt(b,se);const me=r.convert(b.format,b.colorSpace),Ue=r.convert(b.type);let Ee=S(b.internalFormat,me,Ue,b.colorSpace,b.isVideoTexture);$e($,b);let fe;const qe=b.mipmaps,N=b.isVideoTexture!==!0,oe=Ce.__version===void 0||Z===!0,ae=X.dataReady,_e=E(b,se);if(b.isDepthTexture)Ee=v(b.format===so,b.type),oe&&(N?t.texStorage2D(i.TEXTURE_2D,1,Ee,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Ee,se.width,se.height,0,me,Ue,null));else if(b.isDataTexture)if(qe.length>0){N&&oe&&t.texStorage2D(i.TEXTURE_2D,_e,Ee,qe[0].width,qe[0].height);for(let ne=0,J=qe.length;ne<J;ne++)fe=qe[ne],N?ae&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,fe.width,fe.height,me,Ue,fe.data):t.texImage2D(i.TEXTURE_2D,ne,Ee,fe.width,fe.height,0,me,Ue,fe.data);b.generateMipmaps=!1}else N?(oe&&t.texStorage2D(i.TEXTURE_2D,_e,Ee,se.width,se.height),ae&&lt(b,se,me,Ue)):t.texImage2D(i.TEXTURE_2D,0,Ee,se.width,se.height,0,me,Ue,se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){N&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Ee,qe[0].width,qe[0].height,se.depth);for(let ne=0,J=qe.length;ne<J;ne++)if(fe=qe[ne],b.format!==Dn)if(me!==null)if(N){if(ae)if(b.layerUpdates.size>0){const ve=Iu(fe.width,fe.height,b.format,b.type);for(const We of b.layerUpdates){const _t=fe.data.subarray(We*ve/fe.data.BYTES_PER_ELEMENT,(We+1)*ve/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,We,fe.width,fe.height,1,me,_t)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,se.depth,me,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Ee,fe.width,fe.height,se.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,se.depth,me,Ue,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Ee,fe.width,fe.height,se.depth,0,me,Ue,fe.data)}else{N&&oe&&t.texStorage2D(i.TEXTURE_2D,_e,Ee,qe[0].width,qe[0].height);for(let ne=0,J=qe.length;ne<J;ne++)fe=qe[ne],b.format!==Dn?me!==null?N?ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,fe.width,fe.height,me,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Ee,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ae&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,fe.width,fe.height,me,Ue,fe.data):t.texImage2D(i.TEXTURE_2D,ne,Ee,fe.width,fe.height,0,me,Ue,fe.data)}else if(b.isDataArrayTexture)if(N){if(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Ee,se.width,se.height,se.depth),ae)if(b.layerUpdates.size>0){const ne=Iu(se.width,se.height,b.format,b.type);for(const J of b.layerUpdates){const ve=se.data.subarray(J*ne/se.data.BYTES_PER_ELEMENT,(J+1)*ne/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,se.width,se.height,1,me,Ue,ve)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,me,Ue,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,se.width,se.height,se.depth,0,me,Ue,se.data);else if(b.isData3DTexture)N?(oe&&t.texStorage3D(i.TEXTURE_3D,_e,Ee,se.width,se.height,se.depth),ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,me,Ue,se.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,se.width,se.height,se.depth,0,me,Ue,se.data);else if(b.isFramebufferTexture){if(oe)if(N)t.texStorage2D(i.TEXTURE_2D,_e,Ee,se.width,se.height);else{let ne=se.width,J=se.height;for(let ve=0;ve<_e;ve++)t.texImage2D(i.TEXTURE_2D,ve,Ee,ne,J,0,me,Ue,null),ne>>=1,J>>=1}}else if(qe.length>0){if(N&&oe){const ne=kt(qe[0]);t.texStorage2D(i.TEXTURE_2D,_e,Ee,ne.width,ne.height)}for(let ne=0,J=qe.length;ne<J;ne++)fe=qe[ne],N?ae&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,me,Ue,fe):t.texImage2D(i.TEXTURE_2D,ne,Ee,me,Ue,fe);b.generateMipmaps=!1}else if(N){if(oe){const ne=kt(se);t.texStorage2D(i.TEXTURE_2D,_e,Ee,ne.width,ne.height)}ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Ue,se)}else t.texImage2D(i.TEXTURE_2D,0,Ee,me,Ue,se);p(b)&&m($),Ce.__version=X.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ee(P,b,z){if(b.image.length!==6)return;const $=ht(P,b),Z=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+z);const X=n.get(Z);if(Z.version!==X.__version||$===!0){t.activeTexture(i.TEXTURE0+z);const Ce=gt.getPrimaries(gt.workingColorSpace),re=b.colorSpace===mi?null:gt.getPrimaries(b.colorSpace),we=b.colorSpace===mi||Ce===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const xe=b.isCompressedTexture||b.image[0].isCompressedTexture,se=b.image[0]&&b.image[0].isDataTexture,me=[];for(let J=0;J<6;J++)!xe&&!se?me[J]=_(b.image[J],!0,s.maxCubemapSize):me[J]=se?b.image[J].image:b.image[J],me[J]=Bt(b,me[J]);const Ue=me[0],Ee=r.convert(b.format,b.colorSpace),fe=r.convert(b.type),qe=S(b.internalFormat,Ee,fe,b.colorSpace),N=b.isVideoTexture!==!0,oe=X.__version===void 0||$===!0,ae=Z.dataReady;let _e=E(b,Ue);$e(i.TEXTURE_CUBE_MAP,b);let ne;if(xe){N&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,qe,Ue.width,Ue.height);for(let J=0;J<6;J++){ne=me[J].mipmaps;for(let ve=0;ve<ne.length;ve++){const We=ne[ve];b.format!==Dn?Ee!==null?N?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,0,0,We.width,We.height,Ee,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,qe,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,0,0,We.width,We.height,Ee,fe,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,qe,We.width,We.height,0,Ee,fe,We.data)}}}else{if(ne=b.mipmaps,N&&oe){ne.length>0&&_e++;const J=kt(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,qe,J.width,J.height)}for(let J=0;J<6;J++)if(se){N?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,me[J].width,me[J].height,Ee,fe,me[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,me[J].width,me[J].height,0,Ee,fe,me[J].data);for(let ve=0;ve<ne.length;ve++){const _t=ne[ve].image[J].image;N?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,0,0,_t.width,_t.height,Ee,fe,_t.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,qe,_t.width,_t.height,0,Ee,fe,_t.data)}}else{N?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ee,fe,me[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,Ee,fe,me[J]);for(let ve=0;ve<ne.length;ve++){const We=ne[ve];N?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,0,0,Ee,fe,We.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,qe,Ee,fe,We.image[J])}}}p(b)&&m(i.TEXTURE_CUBE_MAP),X.__version=Z.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function be(P,b,z,$,Z,X){const Ce=r.convert(z.format,z.colorSpace),re=r.convert(z.type),we=S(z.internalFormat,Ce,re,z.colorSpace),xe=n.get(b),se=n.get(z);if(se.__renderTarget=b,!xe.__hasExternalTextures){const me=Math.max(1,b.width>>X),Ue=Math.max(1,b.height>>X);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,X,we,me,Ue,b.depth,0,Ce,re,null):t.texImage2D(Z,X,we,me,Ue,0,Ce,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Me(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Z,se.__webglTexture,0,pt(b)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Z,se.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(P,b,z){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer){const $=b.depthTexture,Z=$&&$.isDepthTexture?$.type:null,X=v(b.stencilBuffer,Z),Ce=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=pt(b);Me(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,X,b.width,b.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,X,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,X,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,P)}else{const $=b.textures;for(let Z=0;Z<$.length;Z++){const X=$[Z],Ce=r.convert(X.format,X.colorSpace),re=r.convert(X.type),we=S(X.internalFormat,Ce,re,X.colorSpace),xe=pt(b);z&&Me(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,we,b.width,b.height):Me(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,we,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,we,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(b.depthTexture);$.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),G(b.depthTexture,0);const Z=$.__webglTexture,X=pt(b);if(b.depthTexture.format===io)Me(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(b.depthTexture.format===so)Me(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Qe(P){const b=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const $=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){const Z=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),b.__depthDisposeCallback=Z}b.__boundDepthTexture=$}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const $=P.texture.mipmaps;$&&$.length>0?Ae(b.__webglFramebuffer[0],P):Ae(b.__webglFramebuffer,P)}else if(z){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=i.createRenderbuffer(),He(b.__webglDepthbuffer[$],P,!1);else{const Z=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=b.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,X)}}else{const $=P.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),He(b.__webglDepthbuffer,P,!1);else{const Z=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(P,b,z){const $=n.get(P);b!==void 0&&be($.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Qe(P)}function I(P){const b=P.texture,z=n.get(P),$=n.get(b);P.addEventListener("dispose",w);const Z=P.textures,X=P.isWebGLCubeRenderTarget===!0,Ce=Z.length>1;if(Ce||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=b.version,o.memory.textures++),X){z.__webglFramebuffer=[];for(let re=0;re<6;re++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[re]=[];for(let we=0;we<b.mipmaps.length;we++)z.__webglFramebuffer[re][we]=i.createFramebuffer()}else z.__webglFramebuffer[re]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let re=0;re<b.mipmaps.length;re++)z.__webglFramebuffer[re]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let re=0,we=Z.length;re<we;re++){const xe=n.get(Z[re]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Me(P)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let re=0;re<Z.length;re++){const we=Z[re];z.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[re]);const xe=r.convert(we.format,we.colorSpace),se=r.convert(we.type),me=S(we.internalFormat,xe,se,we.colorSpace,P.isXRRenderTarget===!0),Ue=pt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,me,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,z.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),He(z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),$e(i.TEXTURE_CUBE_MAP,b);for(let re=0;re<6;re++)if(b.mipmaps&&b.mipmaps.length>0)for(let we=0;we<b.mipmaps.length;we++)be(z.__webglFramebuffer[re][we],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,we);else be(z.__webglFramebuffer[re],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);p(b)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let re=0,we=Z.length;re<we;re++){const xe=Z[re],se=n.get(xe);let me=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(me=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,se.__webglTexture),$e(me,xe),be(z.__webglFramebuffer,P,xe,i.COLOR_ATTACHMENT0+re,me,0),p(xe)&&m(me)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(re=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,$.__webglTexture),$e(re,b),b.mipmaps&&b.mipmaps.length>0)for(let we=0;we<b.mipmaps.length;we++)be(z.__webglFramebuffer[we],P,b,i.COLOR_ATTACHMENT0,re,we);else be(z.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,re,0);p(b)&&m(re),t.unbindTexture()}P.depthBuffer&&Qe(P)}function St(P){const b=P.textures;for(let z=0,$=b.length;z<$;z++){const Z=b[z];if(p(Z)){const X=y(P),Ce=n.get(Z).__webglTexture;t.bindTexture(X,Ce),m(X),t.unbindTexture()}}}const Fe=[],Ne=[];function Re(P){if(P.samples>0){if(Me(P)===!1){const b=P.textures,z=P.width,$=P.height;let Z=i.COLOR_BUFFER_BIT;const X=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(P),re=b.length>1;if(re)for(let xe=0;xe<b.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const we=P.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let xe=0;xe<b.length;xe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[xe]);const se=n.get(b[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,z,$,0,0,z,$,Z,i.NEAREST),l===!0&&(Fe.length=0,Ne.length=0,Fe.push(i.COLOR_ATTACHMENT0+xe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Fe.push(X),Ne.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let xe=0;xe<b.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[xe]);const se=n.get(b[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const b=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function pt(P){return Math.min(s.maxSamples,P.samples)}function Me(P){const b=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ge(P){const b=o.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function Bt(P,b){const z=P.colorSpace,$=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==pn&&z!==mi&&(gt.getTransfer(z)===Lt?($!==Dn||Z!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function kt(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=G,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=B,this.rebindTextures=Ut,this.setupRenderTarget=I,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Me}function cy(i,e){function t(n,s=mi){let r;const o=gt.getTransfer(s);if(n===ni)return i.UNSIGNED_BYTE;if(n===hh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rf)return i.BYTE;if(n===Cf)return i.SHORT;if(n===to)return i.UNSIGNED_SHORT;if(n===ch)return i.INT;if(n===ys)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===_o)return i.HALF_FLOAT;if(n===If)return i.ALPHA;if(n===Uf)return i.RGB;if(n===Dn)return i.RGBA;if(n===io)return i.DEPTH_COMPONENT;if(n===so)return i.DEPTH_STENCIL;if(n===dh)return i.RED;if(n===fh)return i.RED_INTEGER;if(n===Nf)return i.RG;if(n===ph)return i.RG_INTEGER;if(n===mh)return i.RGBA_INTEGER;if(n===ua||n===da||n===fa||n===pa)if(o===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lc||n===cc||n===hc||n===uc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===lc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dc||n===fc||n===pc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dc||n===fc)return o===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mc||n===gc||n===_c||n===vc||n===xc||n===Mc||n===yc||n===Sc||n===bc||n===wc||n===Tc||n===Ec||n===Ac||n===Rc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===mc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_c)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ec)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ac)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rc)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cc||n===Pc||n===Lc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Cc)return o===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ic||n===Uc||n===Nc||n===Dc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ic)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===no?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const hy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new $f(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new nn({vertexShader:hy,fragmentShader:uy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new ji(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fy extends As{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding!="undefined",p=new dy,m={},y=t.getContextAttributes();let S=null,v=null;const E=[],R=[],w=new Ke;let L=null;const x=new xn;x.viewport=new xt;const M=new xn;M.viewport=new xt;const C=[x,M],U=new yg;let O=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=E[K];return ee===void 0&&(ee=new dl,E[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=E[K];return ee===void 0&&(ee=new dl,E[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=E[K];return ee===void 0&&(ee=new dl,E[K]=ee),ee.getHandSpace()};function G(K){const ee=R.indexOf(K.inputSource);if(ee===-1)return;const be=E[ee];be!==void 0&&(be.update(K.inputSource,K.frame,c||o),be.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Y);for(let K=0;K<E.length;K++){const ee=R[K];ee!==null&&(R[K]=null,E[K].disconnect(ee))}O=null,D=null,p.reset();for(const K in m)delete m[K];e.setRenderTarget(S),f=null,d=null,u=null,s=null,v=null,lt.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,He=null,Ae=null;y.depth&&(Ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=y.stencil?so:io,He=y.stencil?no:ys);const Qe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Qe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Ss(d.textureWidth,d.textureHeight,{format:Dn,type:ni,depthTexture:new Yf(d.textureWidth,d.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const be={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ss(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),lt.setContext(s),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Y(K){for(let ee=0;ee<K.removed.length;ee++){const be=K.removed[ee],He=R.indexOf(be);He>=0&&(R[He]=null,E[He].disconnect(be))}for(let ee=0;ee<K.added.length;ee++){const be=K.added[ee];let He=R.indexOf(be);if(He===-1){for(let Qe=0;Qe<E.length;Qe++)if(Qe>=R.length){R.push(be),He=Qe;break}else if(R[Qe]===null){R[Qe]=be,He=Qe;break}if(He===-1)break}const Ae=E[He];Ae&&Ae.connect(be)}}const B=new A,Q=new A;function ie(K,ee,be){B.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(be.matrixWorld);const He=B.distanceTo(Q),Ae=ee.projectionMatrix.elements,Qe=be.projectionMatrix.elements,Ut=Ae[14]/(Ae[10]-1),I=Ae[14]/(Ae[10]+1),St=(Ae[9]+1)/Ae[5],Fe=(Ae[9]-1)/Ae[5],Ne=(Ae[8]-1)/Ae[0],Re=(Qe[8]+1)/Qe[0],pt=Ut*Ne,Me=Ut*Re,Ge=He/(-Ne+Re),Bt=Ge*-Ne;if(ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Bt),K.translateZ(Ge),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ae[10]===-1)K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const kt=Ut+Ge,P=I+Ge,b=pt-Bt,z=Me+(He-Bt),$=St*I/P*kt,Z=Fe*I/P*kt;K.projectionMatrix.makePerspective(b,z,$,Z,kt,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Se(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ee=K.near,be=K.far;p.texture!==null&&(p.depthNear>0&&(ee=p.depthNear),p.depthFar>0&&(be=p.depthFar)),U.near=M.near=x.near=ee,U.far=M.far=x.far=be,(O!==U.near||D!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),O=U.near,D=U.far),U.layers.mask=K.layers.mask|6,x.layers.mask=U.layers.mask&3,M.layers.mask=U.layers.mask&5;const He=K.parent,Ae=U.cameras;Se(U,He);for(let Qe=0;Qe<Ae.length;Qe++)Se(Ae[Qe],He);Ae.length===2?ie(U,x,M):U.projectionMatrix.copy(x.projectionMatrix),$e(K,U,He)};function $e(K,ee,be){be===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(be.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=dr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(U)},this.getCameraTexture=function(K){return m[K]};let ht=null;function at(K,ee){if(h=ee.getViewerPose(c||o),g=ee,h!==null){const be=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let He=!1;be.length!==U.cameras.length&&(U.cameras.length=0,He=!0);for(let I=0;I<be.length;I++){const St=be[I];let Fe=null;if(f!==null)Fe=f.getViewport(St);else{const Re=u.getViewSubImage(d,St);Fe=Re.viewport,I===0&&(e.setRenderTargetTextures(v,Re.colorTexture,Re.depthStencilTexture),e.setRenderTarget(v))}let Ne=C[I];Ne===void 0&&(Ne=new xn,Ne.layers.enable(I),Ne.viewport=new xt,C[I]=Ne),Ne.matrix.fromArray(St.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(St.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),I===0&&(U.matrix.copy(Ne.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),He===!0&&U.cameras.push(Ne)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const I=u.getDepthInformation(be[0]);I&&I.isValid&&I.texture&&p.init(I,s.renderState)}if(Ae&&Ae.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let I=0;I<be.length;I++){const St=be[I].camera;if(St){let Fe=m[St];Fe||(Fe=new $f,m[St]=Fe);const Ne=u.getCameraImage(St);Fe.sourceTexture=Ne}}}}for(let be=0;be<E.length;be++){const He=R[be],Ae=E[be];He!==null&&Ae!==void 0&&Ae.update(He,ee,c||o)}ht&&ht(K,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const lt=new ip;lt.setAnimationLoop(at),this.setAnimationLoop=function(K){ht=K},this.dispose=function(){}}}const is=new mn,py=new Oe;function my(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Hf(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,S,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===dn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===dn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m),S=y.envMap,v=y.envMapRotation;S&&(p.envMap.value=S,is.copy(v),is.x*=-1,is.y*=-1,is.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),p.envMapRotation.value.setFromMatrix4(py.makeRotationFromEuler(is)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=S*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===dn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gy(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const v=S.program;n.uniformBlockBinding(y,v)}function c(y,S){let v=s[y.id];v===void 0&&(g(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",p));const E=S.program;n.updateUBOMapping(y,E);const R=e.render.frame;r[y.id]!==R&&(d(y),r[y.id]=R)}function h(y){const S=u();y.__bindingPointIndex=S;const v=i.createBuffer(),E=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const S=s[y.id],v=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let R=0,w=v.length;R<w;R++){const L=Array.isArray(v[R])?v[R]:[v[R]];for(let x=0,M=L.length;x<M;x++){const C=L[x];if(f(C,R,x,E)===!0){const U=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let D=0;for(let G=0;G<O.length;G++){const V=O[G],Y=_(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,U+D,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,D),D+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,S,v,E){const R=y.value,w=S+"_"+v;if(E[w]===void 0)return typeof R=="number"||typeof R=="boolean"?E[w]=R:E[w]=R.clone(),!0;{const L=E[w];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return E[w]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(y){const S=y.uniforms;let v=0;const E=16;for(let w=0,L=S.length;w<L;w++){const x=Array.isArray(S[w])?S[w]:[S[w]];for(let M=0,C=x.length;M<C;M++){const U=x[M],O=Array.isArray(U.value)?U.value:[U.value];for(let D=0,G=O.length;D<G;D++){const V=O[D],Y=_(V),B=v%E,Q=B%Y.boundary,ie=B+Q;v+=Q,ie!==0&&E-ie<Y.storage&&(v+=E-ie),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=Y.storage}}}const R=v%E;return R>0&&(v+=E-R),y.__size=v,y.__cache={},this}function _(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function p(y){const S=y.target;S.removeEventListener("dispose",p);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class _y{constructor(e={}){const{canvas:t=y0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,m=null;const y=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=an;let R=0,w=0,L=null,x=-1,M=null;const C=new xt,U=new xt;let O=null;const D=new pe(0);let G=0,V=t.width,Y=t.height,B=1,Q=null,ie=null;const Se=new xt(0,0,V,Y),$e=new xt(0,0,V,Y);let ht=!1;const at=new Sh;let lt=!1,K=!1;const ee=new Oe,be=new A,He=new xt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function Ut(){return L===null?B:1}let I=n;function St(T,k){return t.getContext(T,k)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xs}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",ne,!1),I===null){const k="webgl2";if(I=St(k,T),I===null)throw St(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Fe,Ne,Re,pt,Me,Ge,Bt,kt,P,b,z,$,Z,X,Ce,re,we,xe,se,me,Ue,Ee,fe,qe;function N(){Fe=new Ax(I),Fe.init(),Ee=new cy(I,Fe),Ne=new Mx(I,Fe,e,Ee),Re=new ay(I,Fe),Ne.reversedDepthBuffer&&d&&Re.buffers.depth.setReversed(!0),pt=new Px(I),Me=new YM,Ge=new ly(I,Fe,Re,Me,Ne,Ee,pt),Bt=new Sx(v),kt=new Ex(v),P=new kg(I),fe=new vx(I,P),b=new Rx(I,P,pt,fe),z=new Ix(I,b,P,pt),se=new Lx(I,Ne,Ge),re=new yx(Me),$=new qM(v,Bt,kt,Fe,Ne,fe,re),Z=new my(v,Me),X=new KM,Ce=new ny(Fe),xe=new _x(v,Bt,kt,Re,z,f,l),we=new ry(v,z,Ne),qe=new gy(I,pt,Ne,Re),me=new xx(I,Fe,pt),Ue=new Cx(I,Fe,pt),pt.programs=$.programs,v.capabilities=Ne,v.extensions=Fe,v.properties=Me,v.renderLists=X,v.shadowMap=we,v.state=Re,v.info=pt}N();const oe=new fy(v,I);this.xr=oe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=Fe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Fe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(V,Y,!1))},this.getSize=function(T){return T.set(V,Y)},this.setSize=function(T,k,H=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,Y=k,t.width=Math.floor(T*B),t.height=Math.floor(k*B),H===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(V*B,Y*B).floor()},this.setDrawingBufferSize=function(T,k,H){V=T,Y=k,B=H,t.width=Math.floor(T*H),t.height=Math.floor(k*H),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(Se)},this.setViewport=function(T,k,H,W){T.isVector4?Se.set(T.x,T.y,T.z,T.w):Se.set(T,k,H,W),Re.viewport(C.copy(Se).multiplyScalar(B).round())},this.getScissor=function(T){return T.copy($e)},this.setScissor=function(T,k,H,W){T.isVector4?$e.set(T.x,T.y,T.z,T.w):$e.set(T,k,H,W),Re.scissor(U.copy($e).multiplyScalar(B).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(T){Re.setScissorTest(ht=T)},this.setOpaqueSort=function(T){Q=T},this.setTransparentSort=function(T){ie=T},this.getClearColor=function(T){return T.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,H=!0){let W=0;if(T){let F=!1;if(L!==null){const te=L.texture.format;F=te===mh||te===ph||te===fh}if(F){const te=L.texture.type,ge=te===ni||te===ys||te===to||te===no||te===hh||te===uh,le=xe.getClearColor(),ce=xe.getClearAlpha(),ye=le.r,Ie=le.g,Te=le.b;ge?(g[0]=ye,g[1]=Ie,g[2]=Te,g[3]=ce,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=ye,_[1]=Ie,_[2]=Te,_[3]=ce,I.clearBufferiv(I.COLOR,0,_))}else W|=I.COLOR_BUFFER_BIT}k&&(W|=I.DEPTH_BUFFER_BIT),H&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),xe.dispose(),X.dispose(),Ce.dispose(),Me.dispose(),Bt.dispose(),kt.dispose(),z.dispose(),fe.dispose(),qe.dispose(),$.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",yn),oe.removeEventListener("sessionend",yi),wn.stop()};function ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=pt.autoReset,k=we.enabled,H=we.autoUpdate,W=we.needsUpdate,F=we.type;N(),pt.autoReset=T,we.enabled=k,we.autoUpdate=H,we.needsUpdate=W,we.type=F}function ne(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function J(T){const k=T.target;k.removeEventListener("dispose",J),ve(k)}function ve(T){We(T),Me.remove(T)}function We(T){const k=Me.get(T).programs;k!==void 0&&(k.forEach(function(H){$.releaseProgram(H)}),T.isShaderMaterial&&$.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,H,W,F,te){k===null&&(k=Ae);const ge=F.isMesh&&F.matrixWorld.determinant()<0,le=Ze(T,k,H,W,F);Re.setMaterial(W,ge);let ce=H.index,ye=1;if(W.wireframe===!0){if(ce=b.getWireframeAttribute(H),ce===void 0)return;ye=2}const Ie=H.drawRange,Te=H.attributes.position;let Ve=Ie.start*ye,ct=(Ie.start+Ie.count)*ye;te!==null&&(Ve=Math.max(Ve,te.start*ye),ct=Math.min(ct,(te.start+te.count)*ye)),ce!==null?(Ve=Math.max(Ve,0),ct=Math.min(ct,ce.count)):Te!=null&&(Ve=Math.max(Ve,0),ct=Math.min(ct,Te.count));const Ct=ct-Ve;if(Ct<0||Ct===1/0)return;fe.setup(F,W,le,H,ce);let bt,Mt=me;if(ce!==null&&(bt=P.get(ce),Mt=Ue,Mt.setIndex(bt)),F.isMesh)W.wireframe===!0?(Re.setLineWidth(W.wireframeLinewidth*Ut()),Mt.setMode(I.LINES)):Mt.setMode(I.TRIANGLES);else if(F.isLine){let Le=W.linewidth;Le===void 0&&(Le=1),Re.setLineWidth(Le*Ut()),F.isLineSegments?Mt.setMode(I.LINES):F.isLineLoop?Mt.setMode(I.LINE_LOOP):Mt.setMode(I.LINE_STRIP)}else F.isPoints?Mt.setMode(I.POINTS):F.isSprite&&Mt.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)lo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))Mt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Le=F._multiDrawStarts,ut=F._multiDrawCounts,st=F._multiDrawCount,Nt=ce?P.get(ce).bytesPerElement:1,Sn=Me.get(W).currentProgram.getUniforms();for(let zt=0;zt<st;zt++)Sn.setValue(I,"_gl_DrawID",zt),Mt.render(Le[zt]/Nt,ut[zt])}else if(F.isInstancedMesh)Mt.renderInstances(Ve,Ct,F.count);else if(H.isInstancedBufferGeometry){const Le=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ut=Math.min(H.instanceCount,Le);Mt.renderInstances(Ve,Ct,ut)}else Mt.render(Ve,Ct)};function _t(T,k,H){T.transparent===!0&&T.side===Mn&&T.forceSinglePass===!1?(T.side=dn,T.needsUpdate=!0,q(T,k,H),T.side=vi,T.needsUpdate=!0,q(T,k,H),T.side=Mn):q(T,k,H)}this.compile=function(T,k,H=null){H===null&&(H=T),m=Ce.get(H),m.init(k),S.push(m),H.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),T!==H&&T.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const W=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const te=F.material;if(te)if(Array.isArray(te))for(let ge=0;ge<te.length;ge++){const le=te[ge];_t(le,H,F),W.add(le)}else _t(te,H,F),W.add(te)}),m=S.pop(),W},this.compileAsync=function(T,k,H=null){const W=this.compile(T,k,H);return new Promise(F=>{function te(){if(W.forEach(function(ge){Me.get(ge).currentProgram.isReady()&&W.delete(ge)}),W.size===0){F(T);return}setTimeout(te,10)}Fe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let mt=null;function gn(T){mt&&mt(T)}function yn(){wn.stop()}function yi(){wn.start()}const wn=new ip;wn.setAnimationLoop(gn),typeof self!="undefined"&&wn.setContext(self),this.setAnimationLoop=function(T){mt=T,oe.setAnimationLoop(T),T===null?wn.stop():wn.start()},oe.addEventListener("sessionstart",yn),oe.addEventListener("sessionend",yi),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(k),k=oe.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,k,L),m=Ce.get(T,S.length),m.init(k),S.push(m),ee.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),at.setFromProjectionMatrix(ee,ei,k.reversedDepth),K=this.localClippingEnabled,lt=re.init(this.clippingPlanes,K),p=X.get(T,y.length),p.init(),y.push(p),oe.enabled===!0&&oe.isPresenting===!0){const te=v.xr.getDepthSensingMesh();te!==null&&ri(te,k,-1/0,v.sortObjects)}ri(T,k,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(Q,ie),Qe=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Qe&&xe.addToRenderList(p,T),this.info.render.frame++,lt===!0&&re.beginShadows();const H=m.state.shadowsArray;we.render(H,T,k),lt===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=p.opaque,F=p.transmissive;if(m.setupLights(),k.isArrayCamera){const te=k.cameras;if(F.length>0)for(let ge=0,le=te.length;ge<le;ge++){const ce=te[ge];Si(W,F,T,ce)}Qe&&xe.render(T);for(let ge=0,le=te.length;ge<le;ge++){const ce=te[ge];Ki(p,T,ce,ce.viewport)}}else F.length>0&&Si(W,F,T,k),Qe&&xe.render(T),Ki(p,T,k);L!==null&&w===0&&(Ge.updateMultisampleRenderTarget(L),Ge.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(v,T,k),fe.resetDefaultState(),x=-1,M=null,S.pop(),S.length>0?(m=S[S.length-1],lt===!0&&re.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function ri(T,k,H,W){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||at.intersectsSprite(T)){W&&He.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ee);const ge=z.update(T),le=T.material;le.visible&&p.push(T,ge,le,H,He.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||at.intersectsObject(T))){const ge=z.update(T),le=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),He.copy(T.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),He.copy(ge.boundingSphere.center)),He.applyMatrix4(T.matrixWorld).applyMatrix4(ee)),Array.isArray(le)){const ce=ge.groups;for(let ye=0,Ie=ce.length;ye<Ie;ye++){const Te=ce[ye],Ve=le[Te.materialIndex];Ve&&Ve.visible&&p.push(T,ge,Ve,H,He.z,Te)}}else le.visible&&p.push(T,ge,le,H,He.z,null)}}const te=T.children;for(let ge=0,le=te.length;ge<le;ge++)ri(te[ge],k,H,W)}function Ki(T,k,H,W){const F=T.opaque,te=T.transmissive,ge=T.transparent;m.setupLightsView(H),lt===!0&&re.setGlobalState(v.clippingPlanes,H),W&&Re.viewport(C.copy(W)),F.length>0&&bi(F,k,H),te.length>0&&bi(te,k,H),ge.length>0&&bi(ge,k,H),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Si(T,k,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Ss(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?_o:ni,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const te=m.state.transmissionRenderTarget[W.id],ge=W.viewport||C;te.setSize(ge.z*v.transmissionResolutionScale,ge.w*v.transmissionResolutionScale);const le=v.getRenderTarget(),ce=v.getActiveCubeFace(),ye=v.getActiveMipmapLevel();v.setRenderTarget(te),v.getClearColor(D),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),Qe&&xe.render(H);const Ie=v.toneMapping;v.toneMapping=Wi;const Te=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),lt===!0&&re.setGlobalState(v.clippingPlanes,W),bi(T,H,W),Ge.updateMultisampleRenderTarget(te),Ge.updateRenderTargetMipmap(te),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let ct=0,Ct=k.length;ct<Ct;ct++){const bt=k[ct],Mt=bt.object,Le=bt.geometry,ut=bt.material,st=bt.group;if(ut.side===Mn&&Mt.layers.test(W.layers)){const Nt=ut.side;ut.side=dn,ut.needsUpdate=!0,j(Mt,H,W,Le,ut,st),ut.side=Nt,ut.needsUpdate=!0,Ve=!0}}Ve===!0&&(Ge.updateMultisampleRenderTarget(te),Ge.updateRenderTargetMipmap(te))}v.setRenderTarget(le,ce,ye),v.setClearColor(D,G),Te!==void 0&&(W.viewport=Te),v.toneMapping=Ie}function bi(T,k,H){const W=k.isScene===!0?k.overrideMaterial:null;for(let F=0,te=T.length;F<te;F++){const ge=T[F],le=ge.object,ce=ge.geometry,ye=ge.group;let Ie=ge.material;Ie.allowOverride===!0&&W!==null&&(Ie=W),le.layers.test(H.layers)&&j(le,k,H,ce,Ie,ye)}}function j(T,k,H,W,F,te){T.onBeforeRender(v,k,H,W,F,te),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(v,k,H,W,T,te),F.transparent===!0&&F.side===Mn&&F.forceSinglePass===!1?(F.side=dn,F.needsUpdate=!0,v.renderBufferDirect(H,k,W,F,T,te),F.side=vi,F.needsUpdate=!0,v.renderBufferDirect(H,k,W,F,T,te),F.side=Mn):v.renderBufferDirect(H,k,W,F,T,te),T.onAfterRender(v,k,H,W,F,te)}function q(T,k,H){k.isScene!==!0&&(k=Ae);const W=Me.get(T),F=m.state.lights,te=m.state.shadowsArray,ge=F.state.version,le=$.getParameters(T,F.state,te,k,H),ce=$.getProgramCacheKey(le);let ye=W.programs;W.environment=T.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(T.isMeshStandardMaterial?kt:Bt).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,ye===void 0&&(T.addEventListener("dispose",J),ye=new Map,W.programs=ye);let Ie=ye.get(ce);if(Ie!==void 0){if(W.currentProgram===Ie&&W.lightsStateVersion===ge)return et(T,le),Ie}else le.uniforms=$.getUniforms(T),T.onBeforeCompile(le,v),Ie=$.acquireProgram(le,ce),ye.set(ce,Ie),W.uniforms=le.uniforms;const Te=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Te.clippingPlanes=re.uniform),et(T,le),W.needsLights=rt(T),W.lightsStateVersion=ge,W.needsLights&&(Te.ambientLightColor.value=F.state.ambient,Te.lightProbe.value=F.state.probe,Te.directionalLights.value=F.state.directional,Te.directionalLightShadows.value=F.state.directionalShadow,Te.spotLights.value=F.state.spot,Te.spotLightShadows.value=F.state.spotShadow,Te.rectAreaLights.value=F.state.rectArea,Te.ltc_1.value=F.state.rectAreaLTC1,Te.ltc_2.value=F.state.rectAreaLTC2,Te.pointLights.value=F.state.point,Te.pointLightShadows.value=F.state.pointShadow,Te.hemisphereLights.value=F.state.hemi,Te.directionalShadowMap.value=F.state.directionalShadowMap,Te.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Te.spotShadowMap.value=F.state.spotShadowMap,Te.spotLightMatrix.value=F.state.spotLightMatrix,Te.spotLightMap.value=F.state.spotLightMap,Te.pointShadowMap.value=F.state.pointShadowMap,Te.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Ie,W.uniformsList=null,Ie}function ue(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=ma.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function et(T,k){const H=Me.get(T);H.outputColorSpace=k.outputColorSpace,H.batching=k.batching,H.batchingColor=k.batchingColor,H.instancing=k.instancing,H.instancingColor=k.instancingColor,H.instancingMorph=k.instancingMorph,H.skinning=k.skinning,H.morphTargets=k.morphTargets,H.morphNormals=k.morphNormals,H.morphColors=k.morphColors,H.morphTargetsCount=k.morphTargetsCount,H.numClippingPlanes=k.numClippingPlanes,H.numIntersection=k.numClipIntersection,H.vertexAlphas=k.vertexAlphas,H.vertexTangents=k.vertexTangents,H.toneMapping=k.toneMapping}function Ze(T,k,H,W,F){k.isScene!==!0&&(k=Ae),Ge.resetTextureUnits();const te=k.fog,ge=W.isMeshStandardMaterial?k.environment:null,le=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:pn,ce=(W.isMeshStandardMaterial?kt:Bt).get(W.envMap||ge),ye=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ie=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Te=!!H.morphAttributes.position,Ve=!!H.morphAttributes.normal,ct=!!H.morphAttributes.color;let Ct=Wi;W.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ct=v.toneMapping);const bt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Mt=bt!==void 0?bt.length:0,Le=Me.get(W),ut=m.state.lights;if(lt===!0&&(K===!0||T!==M)){const Ot=T===M&&W.id===x;re.setState(W,T,Ot)}let st=!1;W.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==ut.state.version||Le.outputColorSpace!==le||F.isBatchedMesh&&Le.batching===!1||!F.isBatchedMesh&&Le.batching===!0||F.isBatchedMesh&&Le.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Le.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Le.instancing===!1||!F.isInstancedMesh&&Le.instancing===!0||F.isSkinnedMesh&&Le.skinning===!1||!F.isSkinnedMesh&&Le.skinning===!0||F.isInstancedMesh&&Le.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Le.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Le.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Le.instancingMorph===!1&&F.morphTexture!==null||Le.envMap!==ce||W.fog===!0&&Le.fog!==te||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==re.numPlanes||Le.numIntersection!==re.numIntersection)||Le.vertexAlphas!==ye||Le.vertexTangents!==Ie||Le.morphTargets!==Te||Le.morphNormals!==Ve||Le.morphColors!==ct||Le.toneMapping!==Ct||Le.morphTargetsCount!==Mt)&&(st=!0):(st=!0,Le.__version=W.version);let Nt=Le.currentProgram;st===!0&&(Nt=q(W,k,F));let Sn=!1,zt=!1,bn=!1;const vt=Nt.getUniforms(),jt=Le.uniforms;if(Re.useProgram(Nt.program)&&(Sn=!0,zt=!0,bn=!0),W.id!==x&&(x=W.id,zt=!0),Sn||M!==T){Re.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),vt.setValue(I,"projectionMatrix",T.projectionMatrix),vt.setValue(I,"viewMatrix",T.matrixWorldInverse);const rn=vt.map.cameraPosition;rn!==void 0&&rn.setValue(I,be.setFromMatrixPosition(T.matrixWorld)),Ne.logarithmicDepthBuffer&&vt.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&vt.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,zt=!0,bn=!0)}if(F.isSkinnedMesh){vt.setOptional(I,F,"bindMatrix"),vt.setOptional(I,F,"bindMatrixInverse");const Ot=F.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),vt.setValue(I,"boneTexture",Ot.boneTexture,Ge))}F.isBatchedMesh&&(vt.setOptional(I,F,"batchingTexture"),vt.setValue(I,"batchingTexture",F._matricesTexture,Ge),vt.setOptional(I,F,"batchingIdTexture"),vt.setValue(I,"batchingIdTexture",F._indirectTexture,Ge),vt.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&vt.setValue(I,"batchingColorTexture",F._colorsTexture,Ge));const Gt=H.morphAttributes;if((Gt.position!==void 0||Gt.normal!==void 0||Gt.color!==void 0)&&se.update(F,H,Nt),(zt||Le.receiveShadow!==F.receiveShadow)&&(Le.receiveShadow=F.receiveShadow,vt.setValue(I,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(jt.envMap.value=ce,jt.flipEnvMap.value=ce.isCubeTexture&&ce.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&k.environment!==null&&(jt.envMapIntensity.value=k.environmentIntensity),zt&&(vt.setValue(I,"toneMappingExposure",v.toneMappingExposure),Le.needsLights&&ze(jt,bn),te&&W.fog===!0&&Z.refreshFogUniforms(jt,te),Z.refreshMaterialUniforms(jt,W,B,Y,m.state.transmissionRenderTarget[T.id]),ma.upload(I,ue(Le),jt,Ge)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ma.upload(I,ue(Le),jt,Ge),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&vt.setValue(I,"center",F.center),vt.setValue(I,"modelViewMatrix",F.modelViewMatrix),vt.setValue(I,"normalMatrix",F.normalMatrix),vt.setValue(I,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ot=W.uniformsGroups;for(let rn=0,Wa=Ot.length;rn<Wa;rn++){const Zi=Ot[rn];qe.update(Zi,Nt),qe.bind(Zi,Nt)}}return Nt}function ze(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function rt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,k,H){const W=Me.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Me.get(T.texture).__webglTexture=k,Me.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:H,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){const H=Me.get(T);H.__webglFramebuffer=k,H.__useDefaultFramebuffer=k===void 0};const Ye=I.createFramebuffer();this.setRenderTarget=function(T,k=0,H=0){L=T,R=k,w=H;let W=!0,F=null,te=!1,ge=!1;if(T){const ce=Me.get(T);if(ce.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(ce.__webglFramebuffer===void 0)Ge.setupRenderTarget(T);else if(ce.__hasExternalTextures)Ge.rebindTextures(T,Me.get(T.texture).__webglTexture,Me.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Te=T.depthTexture;if(ce.__boundDepthTexture!==Te){if(Te!==null&&Me.has(Te)&&(T.width!==Te.image.width||T.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(T)}}const ye=T.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(ge=!0);const Ie=Me.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ie[k])?F=Ie[k][H]:F=Ie[k],te=!0):T.samples>0&&Ge.useMultisampledRTT(T)===!1?F=Me.get(T).__webglMultisampledFramebuffer:Array.isArray(Ie)?F=Ie[H]:F=Ie,C.copy(T.viewport),U.copy(T.scissor),O=T.scissorTest}else C.copy(Se).multiplyScalar(B).floor(),U.copy($e).multiplyScalar(B).floor(),O=ht;if(H!==0&&(F=Ye),Re.bindFramebuffer(I.FRAMEBUFFER,F)&&W&&Re.drawBuffers(T,F),Re.viewport(C),Re.scissor(U),Re.setScissorTest(O),te){const ce=Me.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,ce.__webglTexture,H)}else if(ge){const ce=k;for(let ye=0;ye<T.textures.length;ye++){const Ie=Me.get(T.textures[ye]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+ye,Ie.__webglTexture,H,ce)}}else if(T!==null&&H!==0){const ce=Me.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ce.__webglTexture,H)}x=-1},this.readRenderTargetPixels=function(T,k,H,W,F,te,ge,le=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ce=Me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(ce=ce[ge]),ce){Re.bindFramebuffer(I.FRAMEBUFFER,ce);try{const ye=T.textures[le],Ie=ye.format,Te=ye.type;if(!Ne.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-W&&H>=0&&H<=T.height-F&&(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+le),I.readPixels(k,H,W,F,Ee.convert(Ie),Ee.convert(Te),te))}finally{const ye=L!==null?Me.get(L).__webglFramebuffer:null;Re.bindFramebuffer(I.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(T,k,H,W,F,te,ge,le=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ce=Me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(ce=ce[ge]),ce)if(k>=0&&k<=T.width-W&&H>=0&&H<=T.height-F){Re.bindFramebuffer(I.FRAMEBUFFER,ce);const ye=T.textures[le],Ie=ye.format,Te=ye.type;if(!Ne.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ve),I.bufferData(I.PIXEL_PACK_BUFFER,te.byteLength,I.STREAM_READ),T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+le),I.readPixels(k,H,W,F,Ee.convert(Ie),Ee.convert(Te),0);const ct=L!==null?Me.get(L).__webglFramebuffer:null;Re.bindFramebuffer(I.FRAMEBUFFER,ct);const Ct=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await S0(I,Ct,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ve),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,te),I.deleteBuffer(Ve),I.deleteSync(Ct),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,H=0){const W=Math.pow(2,-H),F=Math.floor(T.image.width*W),te=Math.floor(T.image.height*W),ge=k!==null?k.x:0,le=k!==null?k.y:0;Ge.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,ge,le,F,te),Re.unbindTexture()};const nt=I.createFramebuffer(),Vt=I.createFramebuffer();this.copyTextureToTexture=function(T,k,H=null,W=null,F=0,te=null){te===null&&(F!==0?(lo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=F,F=0):te=0);let ge,le,ce,ye,Ie,Te,Ve,ct,Ct;const bt=T.isCompressedTexture?T.mipmaps[te]:T.image;if(H!==null)ge=H.max.x-H.min.x,le=H.max.y-H.min.y,ce=H.isBox3?H.max.z-H.min.z:1,ye=H.min.x,Ie=H.min.y,Te=H.isBox3?H.min.z:0;else{const Gt=Math.pow(2,-F);ge=Math.floor(bt.width*Gt),le=Math.floor(bt.height*Gt),T.isDataArrayTexture?ce=bt.depth:T.isData3DTexture?ce=Math.floor(bt.depth*Gt):ce=1,ye=0,Ie=0,Te=0}W!==null?(Ve=W.x,ct=W.y,Ct=W.z):(Ve=0,ct=0,Ct=0);const Mt=Ee.convert(k.format),Le=Ee.convert(k.type);let ut;k.isData3DTexture?(Ge.setTexture3D(k,0),ut=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Ge.setTexture2DArray(k,0),ut=I.TEXTURE_2D_ARRAY):(Ge.setTexture2D(k,0),ut=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const st=I.getParameter(I.UNPACK_ROW_LENGTH),Nt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Sn=I.getParameter(I.UNPACK_SKIP_PIXELS),zt=I.getParameter(I.UNPACK_SKIP_ROWS),bn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,bt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,bt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ye),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ie),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Te);const vt=T.isDataArrayTexture||T.isData3DTexture,jt=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){const Gt=Me.get(T),Ot=Me.get(k),rn=Me.get(Gt.__renderTarget),Wa=Me.get(Ot.__renderTarget);Re.bindFramebuffer(I.READ_FRAMEBUFFER,rn.__webglFramebuffer),Re.bindFramebuffer(I.DRAW_FRAMEBUFFER,Wa.__webglFramebuffer);for(let Zi=0;Zi<ce;Zi++)vt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.get(T).__webglTexture,F,Te+Zi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.get(k).__webglTexture,te,Ct+Zi)),I.blitFramebuffer(ye,Ie,ge,le,Ve,ct,ge,le,I.DEPTH_BUFFER_BIT,I.NEAREST);Re.bindFramebuffer(I.READ_FRAMEBUFFER,null),Re.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(F!==0||T.isRenderTargetTexture||Me.has(T)){const Gt=Me.get(T),Ot=Me.get(k);Re.bindFramebuffer(I.READ_FRAMEBUFFER,nt),Re.bindFramebuffer(I.DRAW_FRAMEBUFFER,Vt);for(let rn=0;rn<ce;rn++)vt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Gt.__webglTexture,F,Te+rn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Gt.__webglTexture,F),jt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ot.__webglTexture,te,Ct+rn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ot.__webglTexture,te),F!==0?I.blitFramebuffer(ye,Ie,ge,le,Ve,ct,ge,le,I.COLOR_BUFFER_BIT,I.NEAREST):jt?I.copyTexSubImage3D(ut,te,Ve,ct,Ct+rn,ye,Ie,ge,le):I.copyTexSubImage2D(ut,te,Ve,ct,ye,Ie,ge,le);Re.bindFramebuffer(I.READ_FRAMEBUFFER,null),Re.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else jt?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(ut,te,Ve,ct,Ct,ge,le,ce,Mt,Le,bt.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(ut,te,Ve,ct,Ct,ge,le,ce,Mt,bt.data):I.texSubImage3D(ut,te,Ve,ct,Ct,ge,le,ce,Mt,Le,bt):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,te,Ve,ct,ge,le,Mt,Le,bt.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,te,Ve,ct,bt.width,bt.height,Mt,bt.data):I.texSubImage2D(I.TEXTURE_2D,te,Ve,ct,ge,le,Mt,Le,bt);I.pixelStorei(I.UNPACK_ROW_LENGTH,st),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Nt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Sn),I.pixelStorei(I.UNPACK_SKIP_ROWS,zt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,bn),te===0&&k.generateMipmaps&&I.generateMipmap(ut),Re.unbindTexture()},this.initRenderTarget=function(T){Me.get(T).__webglFramebuffer===void 0&&Ge.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ge.setTextureCube(T,0):T.isData3DTexture?Ge.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ge.setTexture2DArray(T,0):Ge.setTexture2D(T,0),Re.unbindTexture()},this.resetState=function(){R=0,w=0,L=null,Re.reset(),fe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}const un=1/60,Ts=100,El=10.6,Vi=(i,e,t)=>i<e?e:i>t?t:i,Xt=(i,e,t)=>i+(e-i)*t,vy=i=>{for(;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;return i},Gr=(i,e,t)=>i+Vi(vy(e-i),-t,t);function Ha(i){const e=()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296};return e.getState=()=>i,e.setState=t=>{i=t},e}class on{constructor(){this.v=[],this.n=[],this.c=[0,0,0]}tri(e,t,n){const s=t[0]-e[0],r=t[1]-e[1],o=t[2]-e[2],a=n[0]-e[0],l=n[1]-e[1],c=n[2]-e[2];let h=r*c-o*l,u=o*a-s*c,d=s*l-r*a;const f=Math.hypot(h,u,d);if(f<1e-10)return;h/=f,u/=f,d/=f;const g=(e[0]+t[0]+n[0])/3-this.c[0],_=(e[1]+t[1]+n[1])/3-this.c[1],p=(e[2]+t[2]+n[2])/3-this.c[2];if(h*g+u*_+d*p<0){const m=t;t=n,n=m,h=-h,u=-u,d=-d}this.v.push(...e,...t,...n),this.n.push(h,u,d,h,u,d,h,u,d)}quad(e,t,n,s){this.tri(e,t,n),this.tri(e,n,s)}box(e,t,n,s,r,o,a=0){this.c=[e,t,n];const l=Math.cos(a),c=Math.sin(a),h=(_,p,m)=>[e+_*l+m*c,t+p,n-_*c+m*l],u=s/2,d=r/2,f=o/2,g=[h(-u,-d,-f),h(u,-d,-f),h(u,d,-f),h(-u,d,-f),h(-u,-d,f),h(u,-d,f),h(u,d,f),h(-u,d,f)];return this.quad(g[4],g[5],g[6],g[7]),this.quad(g[1],g[0],g[3],g[2]),this.quad(g[5],g[1],g[2],g[6]),this.quad(g[0],g[4],g[7],g[3]),this.quad(g[7],g[6],g[2],g[3]),this.quad(g[0],g[1],g[5],g[4]),this}cyl(e,t,n,s,r,o,a=7,l=0){this.c=[e,(t+o)/2,n];for(let c=0;c<a;c++){const h=l+c/a*Math.PI*2,u=l+(c+1)/a*Math.PI*2,d=[e+Math.cos(h)*s,t,n+Math.sin(h)*s],f=[e+Math.cos(u)*s,t,n+Math.sin(u)*s],g=[e+Math.cos(h)*r,o,n+Math.sin(h)*r],_=[e+Math.cos(u)*r,o,n+Math.sin(u)*r];this.quad(d,f,_,g),this.tri([e,t,n],d,f),this.tri([e,o,n],g,_)}return this}sphere(e,t,n,s,r=8,o=6){this.c=[e,t,n];const a=(l,c)=>{const h=c/o*Math.PI,u=l/r*Math.PI*2;return[e+Math.sin(h)*Math.cos(u)*s,t+Math.cos(h)*s,n+Math.sin(h)*Math.sin(u)*s]};for(let l=0;l<o;l++)for(let c=0;c<r;c++)this.quad(a(c,l),a(c+1,l),a(c+1,l+1),a(c,l+1));return this}build(){const e=new Rt;return e.setAttribute("position",new Ht(this.v,3)),e.setAttribute("normal",new Ht(this.n,3)),e.computeBoundingSphere(),e}}const lp=i=>{const e=Math.hypot(...i);return i.map(t=>t/e)},Hc=lp([-.45,.75,.4]),xy=lp([-.5,.42,.75]),Gc=[.62,.66,.85],Wc=[.36,.34,.48],Xc=[.24,.15,.12],Zr=[.27,.15,.13],Wr=[22,72];function My(i){const e=new mg(new pe(...Wc),new pe(...Xc),Math.PI),t=new tp(new pe(...Gc),Math.PI);return t.position.set(...Hc),i.add(e,t,t.target),{hemi:e,sun:t}}function Jr(i,e){const t=new tg({color:new pe(...i)});return t.onBeforeCompile=n=>{n.uniforms.uRim=e,n.fragmentShader=`uniform vec3 uRim;
`+n.fragmentShader.replace("#include <opaque_fragment>",`outgoingLight += uRim * pow(1.0 - max(dot(normal, normalize(vViewPosition)), 0.0), 2.5);
#include <opaque_fragment>`).replace("#include <fog_fragment>",`#ifdef USE_FOG
  gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, smoothstep(fogNear, fogFar, length(vViewPosition)));
#endif`)},t.customProgramCacheKey=()=>"rimLambert",t}const cp=`float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h21(i),h21(i+vec2(1.,0.)),f.x),mix(h21(i+vec2(0.,1.)),h21(i+vec2(1.,1.)),f.x),f.y);}
`,yy=`uniform vec3 uSunDir;uniform vec3 uSunCol;uniform vec3 uSkyAmb;uniform vec3 uGndAmb;
uniform vec4 uPL[4];uniform vec3 uPLC[4];uniform vec3 uCam;uniform vec3 uFogCol;uniform vec2 uFog;
vec3 light(vec3 b,vec3 n,vec3 w){vec3 c=b*mix(uGndAmb,uSkyAmb,n.y*.5+.5);c+=b*uSunCol*max(dot(n,uSunDir),0.);
for(int i=0;i<4;i++){vec3 L=uPL[i].xyz-w;float d=length(L);float at=clamp(1.-d/uPL[i].w,0.,1.);c+=b*uPLC[i]*at*at*max(dot(n,L/max(d,.001)),0.);}
return c;}
vec3 fog(vec3 c,vec3 w){return mix(c,uFogCol,smoothstep(uFog.x,uFog.y,length(w-uCam)));}
`,Sy=yy+cp+`varying vec3 vW;uniform vec3 uShd[2];
void main(){vec2 p=vW.xz;float r=length(p);float a=atan(p.y,p.x)/6.28318+.5;float n1=vn(p*2.3),n2=vn(p*.45);vec3 col;
if(r<11.){float rr=r/1.15;float ring=floor(rr);float segs=floor(5.+ring*5.5);float sa=a*segs+ring*.37;float seg=floor(sa);
 float fr=fract(rr),fa=fract(sa);float ew=min(min(fr,1.-fr)*1.15,min(fa,1.-fa)*6.28318*max(r,.3)/segs);float mort=smoothstep(.015,.05,ew);
 float hv=h21(vec2(ring+.5,seg+.5));vec3 st=mix(vec3(.22,.2,.19),vec3(.4,.37,.33),hv)*(.8+.35*n1);col=mix(vec3(.05,.045,.04),st,mort);
 col=mix(col,vec3(.58,.44,.22)*(.8+.3*n1),(1.-smoothstep(.03,.07,abs(r-2.6)))*.85);
 if(ring<1.){col=mix(vec3(.24,.19,.14),vec3(.44,.35,.22),n1)*.9;col=mix(col,vec3(.62,.47,.24),1.-smoothstep(.02,.05,abs(r-.75)));}
 col*=.85+.15*n2;}
else if(r<11.7){float sa=a*64.;float fa=fract(sa);col=mix(vec3(.05),vec3(.36,.33,.3)*(.8+.3*n1),smoothstep(.02,.08,min(fa,1.-fa)));}
else{col=mix(vec3(.08,.07,.06),vec3(.15,.13,.1),n2)*(.75+.4*n1);col=mix(col,vec3(.07,.09,.05),smoothstep(.55,.75,vn(p*.25)));}
for(int i=0;i<2;i++){float d=length(p-uShd[i].xy);col*=mix(.32,1.,smoothstep(uShd[i].z*.2,uShd[i].z,d));}
gl_FragColor=vec4(fog(light(col,vec3(0.,1.,0.),vW),vW),1.);}`,by="varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",wy="varying vec2 vUV;void main(){vUV=position.xy;gl_Position=vec4(position.xy,.9999,1.);}",Ty=cp+`varying vec2 vUV;uniform vec3 uR;uniform vec3 uU;uniform vec3 uF;uniform vec2 uTan;uniform vec3 uMoon;uniform float uT;uniform vec3 uFogCol;
void main(){vec3 d=normalize(uF+uR*vUV.x*uTan.x+uU*vUV.y*uTan.y);float y=d.y;float az=atan(d.z,d.x);
vec3 hor=vec3(.5,.26,.18),mid=vec3(.19,.1,.17),top=vec3(.02,.025,.07);
vec3 c=mix(hor,mid,smoothstep(0.,.22,y));c=mix(c,top,smoothstep(.18,.75,y));
vec2 sp=vec2(az*90.,y*90.);float s=h21(floor(sp));vec2 fp=fract(sp)-.5;
c+=vec3(.95)*step(.992,s)*smoothstep(.12,.5,y)*smoothstep(.3,.0,length(fp))*(.6+.4*sin(uT*2.+s*50.));
float m=dot(d,uMoon);c+=vec3(1.,.94,.82)*smoothstep(.9986,.9992,m);c+=vec3(.6,.42,.38)*pow(max(m,0.),70.)*.55;
vec2 cs=vec2(cos(az),sin(az));
float r1=.03+.07*vn(cs*3.+7.)+.025*vn(cs*11.);float r2=.015+.035*vn(cs*5.+20.);
if(y<r1)c=mix(vec3(.11,.065,.075),hor,.3);
if(y<r2)c=mix(vec3(.07,.045,.05),hor,.22);
if(y<0.)c=uFogCol;
gl_FragColor=vec4(c,1.);}`,Pi=i=>new A(...i);function Ey(i){const e=new Ft;i.add(e);const t=Ha(7),n=new on,s=new on,r=new on,o=[];for(let p=0;p<14;p++){const m=p/14*Math.PI*2+.11,y=13.8,S=Math.cos(m)*y,v=Math.sin(m)*y,E=t()<.35,R=E?1.4+t()*2.2:5.2+t()*1.6;n.box(S,.3,v,1.3,.6,1.3,m),n.cyl(S,.6,v,.46,.4,R,8,m),E?n.box(S+Math.cos(m+1.3)*1.3,.22,v+Math.sin(m+1.3)*1.3,.7,.44,.9,m+t()):(n.box(S,R+.18,v,1.15,.36,1.15,m),n.box(S,R+.45,v,.9,.18,.9,m))}for(let p=0;p<34;p++){const m=p/34*Math.PI*2,y=19+t()*1.5,S=1.2+t()*3.5;s.box(Math.cos(m)*y,S/2,Math.sin(m)*y,3.4,S,1,-m+Math.PI/2)}for(let p=0;p<48;p++){const m=(p+.5)/48*Math.PI*2,y=11.35;s.box(Math.cos(m)*y,.09,Math.sin(m)*y,1.35,.18,.55,-m+Math.PI/2)}for(let p=0;p<4;p++){const m=Math.PI/4+p*Math.PI/2,y=12.3,S=Math.cos(m)*y,v=Math.sin(m)*y;r.cyl(S,0,v,.16,.08,1.35,6),r.cyl(S,1.35,v,.18,.46,1.72,8),o.push([S,1.8,v])}const a={value:Pi([.05,.03,.03])};for(const[p,m]of[[n,[.5,.46,.42]],[s,[.28,.25,.24]],[r,[.2,.18,.17]]])e.add(new wt(p.build(),Jr(m,a)));const l=o.map(p=>{const m=new Eh(16745779,1,11,1);return m.color.setRGB(1,.52,.2),m.position.set(p[0],p[1]+.3,p[2]),e.add(m),m}),c=Array.from({length:4},()=>new xt),h=Array.from({length:4},()=>new A),u={uSunDir:{value:Pi(Hc)},uSunCol:{value:Pi(Gc)},uSkyAmb:{value:Pi(Wc)},uGndAmb:{value:Pi(Xc)},uPL:{value:c},uPLC:{value:h},uCam:{value:new A},uFogCol:{value:Pi(Zr)},uFog:{value:new Ke(...Wr)},uShd:{value:[new A,new A]}},d=new wt(new ji(180,180).rotateX(-Math.PI/2),new nn({vertexShader:by,fragmentShader:Sy,uniforms:u}));e.add(d);const f=new Rt;f.setAttribute("position",new Ht([-1,-1,0,3,-1,0,-1,3,0],3));const g={uR:{value:new A},uU:{value:new A},uF:{value:new A},uTan:{value:new Ke},uMoon:{value:Pi(xy)},uT:{value:0},uFogCol:{value:Pi(Zr)}},_=new wt(f,new nn({vertexShader:wy,fragmentShader:Ty,uniforms:g,depthTest:!1,depthWrite:!1}));return _.frustumCulled=!1,_.renderOrder=-10,e.add(_),{root:e,braziers:o,name:"석양 유적",env:{fog:Zr,sunCol:Gc,sun:Hc,sky:Wc,gnd:Xc,ambient:"embers"},dispose(){i.remove(e),e.traverse(p=>{p.geometry&&p.geometry.dispose(),p.material&&p.material.dispose()})},update(p,m,y,S){for(let R=0;R<4;R++){const w=o[R],L=1.25+.25*Math.sin(p*13+R*2)+.12*Math.sin(p*29+R);c[R].set(w[0],w[1]+.3,w[2],11),h[R].set(L,.52*L,.2*L),l[R].intensity=L*1.6*Math.PI}u.uCam.value.copy(y);for(let R=0;R<2;R++)u.uShd.value[R].set(...S[R]);const v=m.matrixWorld.elements;g.uR.value.set(v[0],v[1],v[2]),g.uU.value.set(v[4],v[5],v[6]),g.uF.value.set(-v[8],-v[9],-v[10]);const E=Math.tan(Dt.degToRad(m.fov)/2);g.uTan.value.set(E*m.aspect,E),g.uT.value=p}}}const hp=i=>{const e=Math.hypot(...i);return i.map(t=>t/e)},Ay=hp([.28,.36,.89]),Ry={fog:[.045,.06,.12],fogRange:[24,80],sun:hp([.35,.8,.5]),sunCol:[.42,.5,.78],sky:[.2,.24,.4],gnd:[.07,.07,.09],ambient:"shrine"},up=`float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h21(i),h21(i+vec2(1.,0.)),f.x),mix(h21(i+vec2(0.,1.)),h21(i+vec2(1.,1.)),f.x),f.y);}
`,Cy=`uniform vec3 uSunDir;uniform vec3 uSunCol;uniform vec3 uSkyAmb;uniform vec3 uGndAmb;
uniform vec4 uPL[4];uniform vec3 uPLC[4];uniform vec3 uCam;uniform vec3 uFogCol;uniform vec2 uFog;
vec3 light(vec3 b,vec3 n,vec3 w){vec3 c=b*mix(uGndAmb,uSkyAmb,n.y*.5+.5);c+=b*uSunCol*max(dot(n,uSunDir),0.);
for(int i=0;i<4;i++){vec3 L=uPL[i].xyz-w;float d=length(L);float at=clamp(1.-d/uPL[i].w,0.,1.);c+=b*uPLC[i]*at*at*max(dot(n,L/max(d,.001)),0.);}
return c;}
vec3 fog(vec3 c,vec3 w){return mix(c,uFogCol,smoothstep(uFog.x,uFog.y,length(w-uCam)));}
`,Py=Cy+up+`varying vec3 vW;uniform vec3 uShd[2];
void main(){vec2 p=vW.xz;float r=length(p);float n1=vn(p*3.1),n2=vn(p*.45);vec3 col;
if(r<11.){
  float rake=smoothstep(.25,.75,sin(r*10.+n2*1.5)*.5+.5);
  col=mix(vec3(.4,.41,.45),vec3(.54,.55,.6),n1*.6+rake*.4);
  col*=.9+.1*h21(floor(p*38.));
  float dais=1.-smoothstep(1.25,1.3,r);
  col=mix(col,mix(vec3(.3,.3,.33),vec3(.4,.4,.43),n1)*(1.-.5*(1.-smoothstep(.02,.05,abs(r-1.05)))),dais);
}else if(r<11.7){float a=atan(p.y,p.x)/6.28318+.5;float fa=fract(a*52.);col=mix(vec3(.06),vec3(.34,.34,.36)*(.8+.3*n1),smoothstep(.02,.08,min(fa,1.-fa)));}
else{
  col=mix(vec3(.05,.08,.05),vec3(.1,.15,.08),n2)*(.7+.45*n1);
  if(p.y>11.5&&p.y<23.&&abs(p.x)<1.8){vec2 q=vec2(p.x,fract(p.y/1.3)*1.3-.65);float st=length(q*vec2(.75,1.))-.5-.08*n1;col=mix(vec3(.3,.3,.32)*(.8+.3*n1),col,smoothstep(0.,.05,st));}
}
for(int i=0;i<2;i++){float d=length(p-uShd[i].xy);col*=mix(.32,1.,smoothstep(uShd[i].z*.2,uShd[i].z,d));}
gl_FragColor=vec4(fog(light(col,vec3(0.,1.,0.),vW),vW),1.);}`,Ly="varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",Iy="varying vec2 vUV;void main(){vUV=position.xy;gl_Position=vec4(position.xy,.9999,1.);}",Uy=up+`varying vec2 vUV;uniform vec3 uR;uniform vec3 uU;uniform vec3 uF;uniform vec2 uTan;uniform vec3 uMoon;uniform float uT;uniform vec3 uFogCol;
void main(){vec3 d=normalize(uF+uR*vUV.x*uTan.x+uU*vUV.y*uTan.y);float y=d.y;float az=atan(d.z,d.x);
vec3 hor=vec3(.1,.14,.27),mid=vec3(.04,.06,.15),top=vec3(.01,.015,.05);
vec3 c=mix(hor,mid,smoothstep(0.,.25,y));c=mix(c,top,smoothstep(.2,.8,y));
vec2 sp=vec2(az*110.,y*110.);float s=h21(floor(sp));vec2 fp=fract(sp)-.5;
c+=vec3(.9,.92,1.)*step(.993,s)*smoothstep(.1,.5,y)*smoothstep(.3,.0,length(fp))*(.55+.45*sin(uT*1.5+s*60.));
float m=dot(d,uMoon);
c+=vec3(.55,.62,.85)*pow(max(m,0.),40.)*.35+vec3(.3,.35,.5)*pow(max(m,0.),6.)*.12;
float disk=smoothstep(.9972,.9976,m);
vec3 moon=vec3(1.,.97,.86)*(.85+.15*vn(vec2(az,y)*180.));
c=mix(c,moon,disk);
float cl=vn(vec2(az*3.+uT*.01,y*9.))*smoothstep(.05,.3,y)*smoothstep(.6,.3,y);c=mix(c,vec3(.12,.15,.26),smoothstep(.55,.8,cl)*.6);
vec2 cs=vec2(cos(az),sin(az));
float r1=.05+.09*vn(cs*2.+3.)+.03*vn(cs*9.);float r2=.02+.05*vn(cs*4.+11.)+.02*vn(cs*13.);
if(y<r1)c=mix(vec3(.05,.07,.13),hor,.25);
if(y<r2)c=vec3(.025,.035,.07);
if(y<0.)c=uFogCol;
gl_FragColor=vec4(c,1.);}`,Li=i=>new A(...i);function Ny(i){const e=new Ft;i.add(e);const t=Ha(11),n={value:Li([.04,.05,.09])},s={red:new on,black:new on,stone:new on,wood:new on,paper:new on,lamp:new on},r=12,o=56;for(let v=0;v<o;v++){const E=v/o*Math.PI*2,R=(v+1)/o*Math.PI*2,w=E*180/Math.PI%360;if(w>80&&w<100)continue;const L=Math.cos(E)*r,x=Math.sin(E)*r;s.wood.box(L,.4,x,.13,.8,.13,-E);const M=R*180/Math.PI%360;if(M>80&&M<100)continue;const C=(Math.cos(E)+Math.cos(R))/2*r,U=(Math.sin(E)+Math.sin(R))/2*r,O=2*r*Math.sin(Math.PI/o);for(const D of[.32,.64])s.wood.box(C,D,U,O,.07,.06,-(E+R)/2+Math.PI/2)}const a=[];for(const v of[25,55,125,155,205,235,305,335]){const E=v*Math.PI/180,R=Math.cos(E)*13,w=Math.sin(E)*13;s.stone.box(R,.12,w,.8,.24,.8),s.stone.cyl(R,.24,w,.13,.11,1.25,8),s.stone.box(R,1.32,w,.66,.15,.66),s.stone.box(R,1.62,w,.5,.45,.5);for(const[L,x,M,C]of[[.255,0,.02,.24],[-.255,0,.02,.24],[0,.255,.24,.02],[0,-.255,.24,.02]])s.lamp.box(R+L,1.64,w+x,M,.24,C);s.stone.cyl(R,1.85,w,.62,.06,2.2,4,Math.PI/4),s.stone.sphere(R,2.27,w,.08,6,4),a.push([R,1.64,w])}const l=15.5;for(const v of[-2.1,2.1])s.red.cyl(v,0,l,.24,.2,4.7,10),s.black.cyl(v,0,l,.3,.3,.35,10);s.red.box(0,3.9,l,5.4,.24,.26),s.red.box(0,4.65,l,6,.28,.4),s.black.box(0,4.92,l,6.6,.26,.55),s.black.box(-3.35,5,l,.6,.18,.55,0),s.black.box(3.35,5,l,.6,.18,.55,0),s.red.box(0,4.28,l,.22,.6,.22),s.wood.box(0,4.28,l-.13,.6,.5,.04);const c=22.5;s.stone.box(0,.3,c,7.2,.6,5.6);for(let v=0;v<3;v++)s.stone.box(0,.1+v*.1,c-2.9-v*.35,2.4,.2+v*.2,.35);for(const[v,E]of[[-2.6,-1.8],[2.6,-1.8],[-2.6,1.8],[2.6,1.8],[-.9,-1.8],[.9,-1.8]])s.red.cyl(v,.6,c+E,.16,.16,3.4,8);s.wood.box(0,2,c+1.8,5.2,2.8,.15),s.wood.box(-2.6,2,c,.15,2.8,3.6),s.wood.box(2.6,2,c,.15,2.8,3.6),s.paper.box(0,1.8,c-1.75,1.6,2.2,.06),s.paper.box(-1.75,1.8,c-1.75,1.4,2.2,.06),s.paper.box(1.75,1.8,c-1.75,1.4,2.2,.06),s.red.box(0,3.4,c-1.8,5.6,.22,.25);{const v=(E,R)=>{const w=s.black,L=w.v.length;w.box(0,0,0,7.4,.2,3.4);const x=new Pe().setFromAxisAngle(new A(1,0,0),R*.5),M=new A,C=new A;for(let U=L;U<w.v.length;U+=3)M.set(w.v[U],w.v[U+1],w.v[U+2]).applyQuaternion(x).add(new A(0,4.35,E)),w.v[U]=M.x,w.v[U+1]=M.y,w.v[U+2]=M.z,C.set(w.n[U],w.n[U+1],w.n[U+2]).applyQuaternion(x),w.n[U]=C.x,w.n[U+1]=C.y,w.n[U+2]=C.z};v(c-1.45,1),v(c+1.45,-1),s.black.box(0,5.15,c,7.6,.3,.4)}a.push([0,1.9,c-2.2]);const h={red:[.6,.09,.06],black:[.07,.065,.075],stone:[.42,.42,.45],wood:[.3,.2,.13],paper:[.85,.78,.6],lamp:[1,.85,.55]};for(const[v,E]of Object.entries(s)){if(!E.v.length)continue;const R=Jr(h[v],n);(v==="lamp"||v==="paper")&&R.emissive.setRGB(...v==="lamp"?[1,.62,.25]:[.55,.38,.16]),e.add(new wt(E.build(),R))}{const v=new on;for(let V=0;V<8;V++)v.cyl(0,V/8,0,1,1,(V+1)/8-.004,7),v.cyl(0,(V+1)/8-.006,0,1.2,1.2,(V+1)/8+.006,7);const E=new on().sphere(0,0,0,1,7,4),R=260,w=4,L=new Bc(v.build(),Jr([.42,.55,.3],n),R),x=new Bc(E.build(),Jr([.1,.22,.11],n),R*w),M=new Oe,C=new Pe,U=new mn,O=new pe;let D=0,G=0;for(let V=0;D<R&&V<4e3;V++){const Y=t()*Math.PI*2,B=15+Math.pow(t(),.8)*19,Q=(Y*180/Math.PI%360+360)%360;if(Q>68&&Q<112&&B<28)continue;const ie=Math.cos(Y)*B,Se=Math.sin(Y)*B,$e=7+t()*7,ht=.06+t()*.06;U.set((t()-.5)*.12,0,(t()-.5)*.12),C.setFromEuler(U),M.compose(new A(ie,0,Se),C,new A(ht,$e,ht)),L.setMatrixAt(D,M),O.setRGB(.75+t()*.35,.8+t()*.3,.7+t()*.3),L.setColorAt(D,O),D++;for(let at=0;at<w;at++){const lt=$e*(.55+t()*.42),K=.45+t()*.6,ee=new Pe().setFromEuler(new mn((t()-.5)*1.2,t()*6.3,(t()-.5)*1.2));M.compose(new A(ie+(t()-.5)*1.4,lt,Se+(t()-.5)*1.4),ee,new A(K*1.6,K*.5,K*.8)),x.setMatrixAt(G,M),O.setRGB(.7+t()*.5,.8+t()*.4,.7+t()*.4),x.setColorAt(G,O),G++}}L.count=D,x.count=G,e.add(L,x)}const u=[a[0],a[3],a[4],a[7]],d=u.map(v=>{const E=new Eh(16752720,1,9,1);return E.color.setRGB(1,.62,.3),E.position.set(v[0],v[1],v[2]),e.add(E),E}),f=Array.from({length:4},()=>new xt),g=Array.from({length:4},()=>new A),_=Ry,p={uSunDir:{value:Li(_.sun)},uSunCol:{value:Li(_.sunCol)},uSkyAmb:{value:Li(_.sky)},uGndAmb:{value:Li(_.gnd)},uPL:{value:f},uPLC:{value:g},uCam:{value:new A},uFogCol:{value:Li(_.fog)},uFog:{value:new Ke(..._.fogRange)},uShd:{value:[new A,new A]}};e.add(new wt(new ji(180,180).rotateX(-Math.PI/2),new nn({vertexShader:Ly,fragmentShader:Py,uniforms:p})));const m=new Rt;m.setAttribute("position",new Ht([-1,-1,0,3,-1,0,-1,3,0],3));const y={uR:{value:new A},uU:{value:new A},uF:{value:new A},uTan:{value:new Ke},uMoon:{value:Li(Ay)},uT:{value:0},uFogCol:{value:Li(_.fog)}},S=new wt(m,new nn({vertexShader:Iy,fragmentShader:Uy,uniforms:y,depthTest:!1,depthWrite:!1}));return S.frustumCulled=!1,S.renderOrder=-10,e.add(S),{root:e,name:"대나무숲 신사",braziers:a.slice(0,8),env:_,update(v,E,R,w){for(let M=0;M<4;M++){const C=u[M],U=1+.18*Math.sin(v*11+M*2)+.08*Math.sin(v*27+M);f[M].set(C[0],C[1],C[2],8),g[M].set(U,.6*U,.28*U),d[M].intensity=U*1.4*Math.PI}p.uCam.value.copy(R);for(let M=0;M<2;M++)p.uShd.value[M].set(...w[M]);const L=E.matrixWorld.elements;y.uR.value.set(L[0],L[1],L[2]),y.uU.value.set(L[4],L[5],L[6]),y.uF.value.set(-L[8],-L[9],-L[10]);const x=Math.tan(Dt.degToRad(E.fov)/2);y.uTan.value.set(x*E.aspect,x),y.uT.value=v},dispose(){i.remove(e),e.traverse(v=>{v.geometry&&v.geometry.dispose(),v.material&&v.material.dispose()})}}}const dp=[];(function(){const i=(e,t,n)=>{const s=new on;n(s),dp.push({j:e,col:t,geo:s.build()})};i(0,"pants",e=>e.box(0,-.03,0,.3,.17,.2)),i(0,"belt",e=>{e.box(0,.055,0,.32,.06,.22),e.box(.06,-.01,.115,.06,.12,.02)}),i(1,"gi",e=>e.cyl(0,0,0,.135,.155,.26,7)),i(2,"gi",e=>{e.box(0,.11,0,.38,.24,.22),e.sphere(.2,.19,0,.075,6,4),e.sphere(-.2,.19,0,.075,6,4)}),i(2,"skin",e=>e.cyl(0,.2,0,.05,.045,.3,6)),i(3,"skin",e=>e.sphere(0,.1,0,.115,8,6)),i(3,"hair",e=>{e.box(0,.175,-.015,.21,.07,.22),e.box(0,.1,-.095,.2,.16,.05)}),i(3,"accent",e=>{e.box(0,.14,0,.24,.035,.24),e.box(0,.13,-.15,.05,.03,.12)}),i(3,"dark",e=>e.box(0,.1,.11,.13,.024,.014));for(const e of[0,1]){const t=e?6:4,n=e?7:5,s=e?10:8,r=e?11:9;i(t,"skin",o=>{o.cyl(0,0,0,.062,.052,-.28,7),o.sphere(0,-.28,0,.052,6,4)}),i(n,"wrap",o=>o.cyl(0,0,0,.05,.043,-.24,7)),i(n,"glove",o=>o.box(0,-.29,0,.1,.11,.1)),i(s,"pants",o=>{o.cyl(0,.02,0,.09,.066,-.43,7),o.sphere(0,-.43,0,.066,6,4)}),i(r,"pants",o=>o.cyl(0,0,0,.066,.052,-.38,7)),i(r,"wrap",o=>o.cyl(0,-.33,0,.053,.05,-.41,7)),i(r,"skin",o=>o.box(0,-.45,.05,.09,.07,.22))}i(2,"gi",e=>{e.box(0,-.02,-.02,.44,.1,.26)}),i(0,"gi",e=>{e.box(.13,-.2,-.02,.16,.36,.24),e.box(-.13,-.2,-.02,.16,.36,.24)}),i(12,"tsuka",e=>e.box(0,0,-.06,.035,.04,.3)),i(12,"tsuba",e=>e.box(0,0,.1,.1,.09,.018)),i(12,"blade",e=>{for(let r=0;r<4;r++){const o=.12+.88*r/4,a=.12+(1-.12)*(r+1)/4,l=(o+a)/2,c=.035*Math.pow(l,2),h=r===3?.02:.032;e.box(0,c,l,.008,h,a-o+.004)}})})();const Dy=i=>[parseInt(i.slice(1,3),16)/255,parseInt(i.slice(3,5),16)/255,parseInt(i.slice(5,7),16)/255];class fp{constructor(e,t){this.rim={value:new A(...t.rim)},this.glow=t.glow,this.mats={};for(const n in t.colors)this.mats[n]=Jr(Dy(t.colors[n]),this.rim);this.scene=e,this.meshes=dp.map(n=>{const s=new wt(n.geo,this.mats[n.col]);return s.matrixAutoUpdate=!1,s.userData.j=n.j,e.add(s),s})}sync(e,t){for(const s of this.meshes)s.matrix.fromArray(e.jw[s.userData.j]),s.matrixWorldNeedsUpdate=!0;for(const s in this.mats)this.mats[s].emissive.setRGB(t[0],t[1],t[2]);const n=this.glow;this.mats.blade.emissive.setRGB(t[0]+n[0]*1.6,t[1]+n[1]*1.6,t[2]+n[2]*1.6)}}fp.prototype.dispose=function(){for(const i of this.meshes)this.scene.remove(i);for(const i in this.mats)this.mats[i].dispose()};const Rr=1400,id=["x","y","z","vx","vy","vz","life","max","s0","s1","r","g","b","a","gr","dr"],he=(i,e)=>i+Math.random()*(e-i);function ss(){const i=Math.random()*2-1,e=Math.random()*Math.PI*2,t=Math.sqrt(1-i*i);return[t*Math.cos(e),i,t*Math.sin(e)]}const ky=`attribute vec4 aCol;attribute float aSize;uniform float uScale;varying vec4 vC;
void main(){gl_Position=projectionMatrix*viewMatrix*vec4(position,1.);gl_PointSize=min(aSize*uScale/max(gl_Position.w,.1),256.);vC=aCol;}`,Oy="varying vec4 vC;void main(){float d=length(gl_PointCoord-.5);float a=smoothstep(.5,0.,d);a*=a;gl_FragColor=vec4(vC.rgb*a*vC.a,1.);}";class Fy{constructor(e){this.n=0;for(const n of id)this[n]=new Float32Array(Rr);this.pos=new Float32Array(Rr*3),this.col=new Float32Array(Rr*4),this.size=new Float32Array(Rr);const t=new Rt;this.aPos=new it(this.pos,3).setUsage(Xi),this.aCol=new it(this.col,4).setUsage(Xi),this.aSize=new it(this.size,1).setUsage(Xi),t.setAttribute("position",this.aPos),t.setAttribute("aCol",this.aCol),t.setAttribute("aSize",this.aSize),this.uScale={value:1},this.points=new qf(t,new nn({vertexShader:ky,fragmentShader:Oy,uniforms:{uScale:this.uScale},transparent:!0,depthWrite:!1,blending:go,blendSrc:xi,blendDst:xi})),this.points.frustumCulled=!1,this.points.renderOrder=10,this.geo=t,e.add(this.points)}emit(e,t,n,s,r,o,a,l,c,h,u,d,f,g=0,_=1){if(this.n>=Rr)return;const p=this.n++;this.x[p]=e,this.y[p]=t,this.z[p]=n,this.vx[p]=s,this.vy[p]=r,this.vz[p]=o,this.life[p]=this.max[p]=a,this.s0[p]=l,this.s1[p]=c,this.r[p]=h,this.g[p]=u,this.b[p]=d,this.a[p]=f,this.gr[p]=g,this.dr[p]=_}update(e){let t=0;for(let n=0;n<this.n;n++){const s=this.life[n]-e;if(s<=0)continue;if(t!==n)for(const o of id)this[o][t]=this[o][n];this.life[t]=s,this.vy[t]+=this.gr[t]*e;const r=Math.pow(this.dr[t],e*60);this.vx[t]*=r,this.vy[t]*=r,this.vz[t]*=r,this.x[t]+=this.vx[t]*e,this.y[t]+=this.vy[t]*e,this.z[t]+=this.vz[t]*e,this.y[t]<.02&&(this.y[t]=.02,this.vy[t]*=-.3),t++}this.n=t}upload(e){this.uScale.value=e;for(let t=0;t<this.n;t++){const n=this.life[t]/this.max[t];this.pos[t*3]=this.x[t],this.pos[t*3+1]=this.y[t],this.pos[t*3+2]=this.z[t],this.col[t*4]=this.r[t],this.col[t*4+1]=this.g[t],this.col[t*4+2]=this.b[t],this.col[t*4+3]=this.a[t]*Math.min(1,n*1.6),this.size[t]=Xt(this.s1[t],this.s0[t],n)}this.geo.setDrawRange(0,this.n);for(const t of[this.aPos,this.aCol,this.aSize])t.clearUpdateRanges(),t.addUpdateRange(0,this.n*t.itemSize),t.needsUpdate=!0;this.points.visible=this.n>0}sparks(e,t,n=8){const[s,r,o]=e,a=this.emit.bind(this);if(t==="hit"||t==="counter"){const l=n>=12,c=t==="counter"?[1,.4,.2]:[1,.85,.45];a(s,r,o,0,0,0,.1,l?1.6:1.1,l?2.2:1.5,1,.92,.7,1);for(let h=0;h<(l?26:16);h++){const u=ss(),d=he(3,l?9:6.5);a(s,r,o,u[0]*d,u[1]*d+1,u[2]*d,he(.15,.35),he(.07,.13),.02,c[0],c[1],c[2],1,-9,.9)}}else if(t==="block"){a(s,r,o,0,0,0,.08,.8,1.1,.5,.8,1,1);for(let l=0;l<10;l++){const c=ss(),h=he(2,5);a(s,r,o,c[0]*h,c[1]*h,c[2]*h,he(.1,.22),.07,.02,.45,.8,1,1,-6,.88)}}else if(t==="parry"){a(s,r,o,0,0,0,.18,2.6,3.6,1,1,.9,1);for(let l=0;l<24;l++){const c=l/24*Math.PI*2;a(s,r,o,Math.cos(c)*7,he(-.5,.5),Math.sin(c)*7,.28,.12,.03,1,.85,.45,1,0,.86)}for(let l=0;l<18;l++){const c=ss(),h=he(3,8);a(s,r,o,c[0]*h,c[1]*h+1,c[2]*h,he(.2,.45),.1,.02,1,1,.8,1,-8,.9)}}else if(t==="armor"){a(s,r,o,0,0,0,.1,1.2,1.4,1,.55,.15,1);for(let l=0;l<12;l++){const c=ss(),h=he(2,5);a(s,r,o,c[0]*h,c[1]*h,c[2]*h,.25,.1,.02,1,.55,.2,1,-6,.9)}}else if(t==="dust")for(let l=0;l<16;l++){const c=Math.random()*Math.PI*2,h=he(.8,2.2);a(s+Math.cos(c)*.3,.1,o+Math.sin(c)*.3,Math.cos(c)*h,he(.2,.8),Math.sin(c)*h,he(.4,.8),.35,.9,.35,.3,.26,.35,0,.92)}}elementBurst(e,t,n=8){const[s,r,o]=e,a=this.emit.bind(this),l=n>=12,c=l?1.6:1;if(t==="fire"){a(s,r,o,0,0,0,.16,1.6*c,2.6*c,1,.45,.1,1);for(let h=0;h<22*c;h++){const u=ss(),d=he(1.5,5);a(s,r,o,u[0]*d,Math.abs(u[1])*d+1.5,u[2]*d,he(.3,.7),he(.25,.45),.05,1,he(.3,.6),.08,.9,2.5,.9)}}else if(t==="water"){a(s,r,o,0,0,0,.14,1.4*c,2.4*c,.3,.7,1,1);for(let h=0;h<26*c;h++){const u=h/26*Math.PI*2,d=he(3,6);a(s,r,o,Math.cos(u)*d,he(1,4),Math.sin(u)*d,he(.35,.7),he(.08,.16),.03,.45,.8,1,1,-12,.95)}}else if(t==="thunder"){a(s,r,o,0,0,0,.08,2*c,2.6*c,.7,.9,1,1);for(let h=0;h<24*c;h++){const u=ss(),d=he(8,16);a(s,r,o,u[0]*d,u[1]*d,u[2]*d,he(.06,.16),he(.06,.1),.02,.75,.92,1,1,0,.8)}}else if(t==="wind"){a(s,r,o,0,0,0,.14,1.4*c,2.4*c,.5,1,.7,1);for(let h=0;h<24*c;h++){const u=he(0,Math.PI*2),d=he(.2,.5),f=he(3,6);a(s+Math.cos(u)*d,r,o+Math.sin(u)*d,-Math.sin(u)*f,he(.5,2.5),Math.cos(u)*f,he(.4,.8),he(.1,.2),.03,.55,1,.75,.9,0,.93)}}}elementSwing(e,t){const[n,s,r]=e,o=this.emit.bind(this);if(t==="fire")for(let a=0;a<3;a++)o(n+he(-.05,.05),s,r+he(-.05,.05),he(-.4,.4),he(.6,1.6),he(-.4,.4),he(.25,.5),he(.25,.4),.05,1,he(.35,.6),.1,.8,1.5,.95);else if(t==="water")for(let a=0;a<3;a++)o(n,s,r,he(-1,1),he(-.5,1),he(-1,1),he(.3,.6),he(.07,.12),.03,.5,.82,1,1,-9,.97);else if(t==="thunder")for(let a=0;a<2;a++){const l=ss();o(n,s,r,l[0]*6,l[1]*6,l[2]*6,he(.04,.1),.08,.02,.7,.9,1,1,0,.8)}else if(t==="wind")for(let a=0;a<2;a++)o(n,s,r,he(-1.2,1.2),he(0,1),he(-1.2,1.2),he(.35,.6),he(.12,.22),.03,.6,1,.8,.6,0,.94)}embers(){if(Math.random()<.35){const e=Math.random()*Math.PI*2,t=he(2,13);this.emit(Math.cos(e)*t,he(.1,1.5),Math.sin(e)*t,he(-.2,.2),he(.25,.6),he(-.2,.2),he(2.5,4.5),.06,.03,1,he(.45,.7),.2,.9,.02,.995)}}shrineAmbient(e){if(Math.random()<.3){const t=Math.random()*Math.PI*2,n=he(4,16);this.emit(Math.cos(t)*n,he(.3,2.2),Math.sin(t)*n,he(-.25,.25),he(-.1,.15),he(-.25,.25),he(1.2,2.6),.07,.04,.75,1,.35,1,0,.995)}if(Math.random()<.12){const t=Math.random()*Math.PI*2,n=he(6,15);this.emit(Math.cos(t)*n,he(5,8),Math.sin(t)*n,he(-.5,.5),he(-.9,-.5),he(-.5,.5),he(5,8),.09,.08,.16,.3,.12,.8,0,.995)}for(const t of e)Math.random()<.25&&this.emit(t[0]+he(-.08,.08),t[1]-.05,t[2]+he(-.08,.08),0,he(.1,.3),0,he(.2,.4),.18,.06,1,.6,.2,.5,0,.98)}flames(e){for(const t of e)this.emit(t[0]+he(-.14,.14),t[1],t[2]+he(-.14,.14),he(-.15,.15),he(1.1,1.9),he(-.15,.15),he(.35,.6),he(.4,.6),.08,1,he(.42,.6),.15,.85,.6,.97),Math.random()<.12&&this.emit(t[0],t[1]+.2,t[2],he(-.5,.5),he(1.5,2.5),he(-.5,.5),he(.8,1.4),.06,.02,1,.7,.3,1,-.3,.99)}}class By{constructor(){this.cam=new xn(54,1,.08,160),this.e=[0,2,-6],this.l=[0,1,0],this.snap=!0,this.shake=0,this.punch=0,this.shakeDir=[0,0,0],this.cine=null,this.eye=new A}update(e,t,n,s,r,o,a,l){let c,h;const u=o;if(this.cam.fov=(u?72:54)-this.punch,this.punch*=Math.pow(5e-4,e),a){const p=t*.12,m=(n.x+s.x)/2,y=(n.z+s.z)/2;c=[m+Math.cos(p)*6.4,2.4,y+Math.sin(p)*6.4],h=[m,1.05,y]}else{let p=s.x-n.x,m=s.z-n.z;const y=Math.hypot(p,m)||1;p/=y,m/=y;const S=-m,v=p,E=(u?4.6:3.4)+Math.max(0,y-3)*.25,R=u?1.05:1.3,w=u?2.7:2.05;c=[n.x-p*E+S*R,w+Math.max(0,r-.95)*.4,n.z-m*E+v*R];const L=u?.78:.7;h=[Xt(n.x,s.x,L),(u?.85:1.05)+Math.min(s.y,1.5)*.35,Xt(n.z,s.z,L)]}if(this.cine&&!a)if(this.cine.t-=e,this.cine.t<=0)this.cine=null;else if(this.cine.mode==="cast"&&l){const p=l.f[this.cine.a],m=Math.sin(p.yaw),y=Math.cos(p.yaw),S=Math.cos(p.yaw),v=-Math.sin(p.yaw);c=[p.x+m*3.2+S*1.3,1.7,p.z+y*3.2+v*1.3],h=[p.x,1.05,p.z]}else if(this.cine.mode==="strike"&&l){const p=l.f[this.cine.a],m=l.f[1-this.cine.a],y=(p.x+m.x)/2,S=(p.z+m.z)/2,v=m.x-p.x,E=m.z-p.z,R=Math.hypot(v,E)||1;c=[y-E/R*4,1.6,S+v/R*4],h=[y,1.1,S]}else{const p=(n.x+s.x)/2,m=(n.z+s.z)/2,y=s.x-n.x,S=s.z-n.z,v=Math.hypot(y,S)||1,E=this.cine.side,R=-S/v*E,w=y/v*E;c=[p+R*3-y/v*.8,1.25,m+w*3-S/v*.8],h=[p,.95,m]}window.__cam&&(c=window.__cam[0],h=window.__cam[1]);const d=this.snap?1:1-Math.exp(-e*7),f=this.snap?1:1-Math.exp(-e*10);this.snap=!1;for(let p=0;p<3;p++)this.e[p]=Xt(this.e[p],c[p],d),this.l[p]=Xt(this.l[p],h[p],f);const g=this.e.slice(),_=this.l.slice();if(this.shake>.002){const p=this.shakeDir,m=(Math.random()-.5)*2;for(let y=0;y<3;y++){const S=(Math.random()-.5)*this.shake*.5+p[y]*m*this.shake;g[y]+=S,_[y]+=S*.6}}this.cam.position.set(g[0],g[1],g[2]),this.cam.up.set(0,1,0),this.cam.lookAt(_[0],_[1],_[2]),this.cam.updateProjectionMatrix(),this.cam.updateMatrixWorld(),this.eye.set(g[0],g[1],g[2])}}const sd={dmg:1,taken:1,walk:1,startup:1,recovery:1,chip:1,track:1,arc:0,maxChain:5,flowSkip:.25,scaleFrom:2,parryWin:8,parriedStun:52,counterMul:1.25,roll:{stam:22,inv:[2,15],dur:26,speed:7.2},cmd:{},mods:{},traits:{},skill:null,ai:null},Cr=i=>({...sd,...i,roll:{...sd.roll,...i.roll||{}}}),jc={base:Cr({}),fire:Cr({taken:1,walk:.88,chip:1.2,maxChain:4,roll:{stam:26,inv:[3,14],dur:28,speed:6.6},cmd:{t:"f_stab",h:"f_slash",u:"f_rise",d:"f_down",l:"f_low",ft:"blaze_rush",fh:"blaze_rush",bl:"f_sweep",sh:"f_spin",bd:"f_helm"},skill:"erupt",traits:{heat:3,blaze:["f_down","f_helm","blaze_rush"]},ai:{pref:1.5,circle:.08,wait:.15,near:["t","h","d","l","h:f","d:b"],far:["h:f","d","l:b","h:s"]}}),water:Cr({maxChain:7,flowSkip:.4,scaleFrom:4,parryWin:12,parriedStun:62,counterMul:1.4,cmd:{t:"w_stab",h:"w_slash",u:"w_rise",d:"w_down",l:"w_low",ft:"w_thrust",bt:"mirror",bl:"w_sweep",sh:"w_spin",bd:"w_tide"},skill:"mirror",traits:{mirror:!0},ai:{pref:2,circle:.15,wait:.35,near:["t","h","l","h","u:f","h:s"],far:["t:f","d:b","l:b","d"]}}),thunder:Cr({taken:1.06,walk:1.15,roll:{stam:20,inv:[2,14],dur:22,speed:8.4},cmd:{t:"t_stab",h:"t_slash",u:"t_rise",d:"t_down",l:"t_low",ft:"raiko",bl:"t_slide",sh:"t_leap",bd:"t_heaven"},mods:{raiko:{lunge:1.2}},skill:"iai",traits:{iai:30,jf:3},ai:{pref:3,circle:.1,wait:.2,near:["t","h","l","h:s","u:f"],far:["t:f","l:b","d:b","h:s"]}}),wind:Cr({taken:.92,walk:1.14,track:1.3,arc:.1,roll:{stam:13,inv:[2,19],dur:22,speed:8},cmd:{t:"n_stab",h:"n_slash",u:"n_rise",d:"n_down",l:"n_low",ft:"n_dash",bl:"n_sweep",sh:"n_spin",bd:"n_sky"},skill:"dash",traits:{rollAtk:[5,20],rollCancel:13},ai:{aggro:.18,pref:2,circle:.18,wait:.1,near:["t","h","h:s","d","l"],far:["t:f","d:b","h:s","l:b"]}})},Lh=i=>jc[i]||jc.base,qi={},Vy={level:"high",startup:10,active:3,recovery:14,dmg:6,range:1.3,arc:.55,track:.06,lunge:.15,hitstun:18,blockstun:12,chip:4,stam:6,push:2.5,bpush:2,hitstop:7,limb:"blade",chain:null,launch:0,knockdown:!1,armor:null};function sn(i,e){const t=Object.assign({id:i,name:i},Vy,e);t.total=t.startup+t.active+t.recovery,qi[i]=t}const ke=.45;sn("stab",{name:"찌르기",startup:7,active:3,recovery:12,dmg:5,range:1.25+ke,arc:.5,track:.07,lunge:.22,hitstun:17,blockstun:12,chip:3,stam:5,push:1.6,hitstop:6,limb:"blade",chain:{h:"combo2"}});sn("combo2",{name:"이연 베기",startup:8,active:3,recovery:16,dmg:8,range:1.35+ke,arc:.6,track:.06,lunge:.25,hitstun:20,blockstun:13,chip:4,stam:5,push:2,hitstop:7,limb:"blade",chain:{h:"combo3"}});sn("combo3",{name:"삼연 회전베기",startup:14,active:4,recovery:22,dmg:12,range:1.6+ke,arc:.8,track:.05,lunge:.25,hitstun:24,blockstun:13,chip:6,stam:8,push:3,hitstop:10,limb:"blade",knockdown:!0});sn("slash_h",{name:"가로베기",startup:10,active:3,recovery:15,dmg:9,range:1.35+ke,arc:.7,track:.06,lunge:.25,hitstun:20,blockstun:13,chip:4,stam:6,push:2.2,hitstop:7,limb:"blade"});sn("slash_low",{name:"하단베기",level:"low",startup:12,active:3,recovery:17,dmg:7,range:1.4+ke,arc:.6,track:.05,lunge:.2,hitstun:18,blockstun:15,chip:3,stam:6,push:1.4,hitstop:7,limb:"blade"});sn("slash_down",{name:"내려베기",level:"mid",startup:15,active:4,recovery:20,dmg:13,range:1.6+ke,arc:.5,track:.05,lunge:.25,hitstun:24,blockstun:14,chip:6,stam:10,push:3,hitstop:9,limb:"blade"});sn("slash_up",{name:"올려베기",level:"mid",startup:15,active:4,recovery:22,dmg:12,range:1.3+ke,arc:.6,track:.05,lunge:.5,hitstun:0,launch:7.4,blockstun:11,chip:6,stam:12,push:0,hitstop:11,limb:"blade"});sn("thrust",{name:"밀어차기",level:"mid",startup:13,active:4,recovery:18,dmg:12,range:1.65+ke,arc:.45,track:.05,lunge:.45,hitstun:22,blockstun:13,chip:6,stam:9,push:5,bpush:4,hitstop:8,limb:"blade"});sn("sweep",{name:"다리 후리기",level:"low",startup:18,active:5,recovery:26,dmg:11,range:1.75+ke,arc:1.1,track:.04,lunge:.1,blockstun:11,chip:4,stam:10,push:0,hitstop:9,limb:"blade",knockdown:!0});sn("spin",{name:"회전베기",level:"mid",startup:17,active:5,recovery:22,dmg:13,range:1.6+ke,arc:1.45,track:.15,lunge:.3,hitstun:22,blockstun:12,chip:6,stam:11,push:3.5,hitstop:9,limb:"blade"});sn("blaze_rush",{name:"화염 돌진베기",level:"mid",startup:18,active:4,recovery:26,dmg:11,range:1.5+ke,arc:.8,track:.05,lunge:1,hitstun:22,blockstun:14,chip:8,stam:14,push:4,bpush:3.5,hitstop:10,armor:[3,16],anim:"slash_h"});sn("mirror",{name:"물거울",level:"mid",startup:2,active:20,recovery:14,dmg:0,stam:8,lunge:0,noHit:!0,counter:!0,anim:"stab"});sn("mirror_cut",{name:"물거울 반격",level:"mid",startup:4,active:3,recovery:18,dmg:12,range:1.6+ke,arc:1.3,track:.3,lunge:.4,hitstun:0,blockstun:12,chip:6,stam:0,push:3,hitstop:12,knockdown:!0,anim:"combo3"});sn("iai_flash",{name:"발도 일섬",level:"mid",startup:5,active:4,recovery:22,dmg:13,range:1.5+ke,arc:.7,track:.08,lunge:1.6,hitstun:28,blockstun:12,chip:6,stam:10,push:3,hitstop:13,anim:"stab"});sn("raiko",{name:"뇌격 찌르기",level:"mid",startup:9,active:3,recovery:18,dmg:10,range:1.6+ke,arc:.45,track:.06,lunge:.9,hitstun:20,blockstun:12,chip:4,stam:9,push:3,hitstop:8,anim:"stab"});sn("gale",{name:"선풍참",level:"mid",startup:7,active:5,recovery:16,dmg:12,range:1.5+ke,arc:3.14,track:.3,lunge:.35,hitstun:22,blockstun:12,chip:5,stam:8,push:3,hitstop:9,anim:"spin"});sn("helm",{name:"투구 깨기",level:"mid",startup:24,active:4,recovery:26,dmg:22,range:1.45+ke,arc:.7,track:.06,lunge:.6,hitstun:30,blockstun:20,chip:32,stam:22,push:4,bpush:3,hitstop:15,limb:"blade",knockdown:!0,armor:[5,24]});const Je=(i,e,t,[n,s,r],o,a={},l="")=>sn(i,{name:e,desc:l,level:t,startup:n,active:s,recovery:r,dmg:o,range:1.35+ke,arc:.65,track:.06,lunge:.25,hitstun:Math.round(16+o*.6),blockstun:Math.round(11+o*.2),chip:Math.round(o*.45),stam:Math.round(4+o*.5),push:2.2,hitstop:Math.round(6+o/3),...a});Je("f_stab","화염 찌르기","high",[8,3,13],6,{range:1.2+ke,chain:{h:"f_combo2"},anim:"stab"},"불 치고는 빠른 견제");Je("f_combo2","이연 화참","high",[9,3,16],9,{chain:{h:"f_combo3"},anim:"combo2"});Je("f_combo3","삼연 화륜참","mid",[15,4,22],14,{range:1.55+ke,arc:.9,knockdown:!0,hitstop:12,anim:"combo3"},"탭→가로→가로 마무리, 다운");Je("f_slash","불꽃 가로베기","high",[12,4,16],11,{range:1.4+ke,arc:.9,push:3,anim:"slash_h"},"넓게 휩쓰는 가로베기");Je("f_rise","승염","mid",[15,4,22],12,{range:1.3+ke,lunge:.5,hitstun:0,launch:7.6,push:0,anim:"slash_up"},"띄우기");Je("f_down","화염 내려찍기","mid",[17,4,22],15,{range:1.6+ke,arc:.5,armor:[4,17],push:3.5,anim:"slash_down"},"슈퍼아머 · 불씨 3개면 작열");Je("f_low","불길 쓸기","low",[13,3,18],8,{range:1.4+ke,anim:"slash_low"},"하단");Je("f_sweep","화륜 다리베기","low",[18,5,26],12,{range:1.75+ke,arc:1.1,knockdown:!0,push:0,anim:"sweep"},"하단 다운");Je("f_spin","화륜 회전베기","mid",[18,5,22],14,{range:1.6+ke,arc:1.45,track:.15,push:3.5,anim:"spin"},"옆걸음 잡기");Je("f_helm","염열 대도","mid",[26,5,30],22,{range:1.5+ke,lunge:.7,armor:[5,26],knockdown:!0,chip:34,hitstop:16,anim:"helm"},"뛰어올라 내려찍기 · 슈퍼아머 · 가드 크게 깎음");Je("f_erupt","화염 해방","mid",[10,6,28],4,{range:1.25+ke,arc:3.14,track:0,lunge:0,armor:[1,16],knockdown:!0,push:5,bpush:5,chip:10,stam:6,anim:"spin"},"기술 버튼 · 불씨를 터뜨려 주변을 날림 (불씨당 +5 피해, 3개면 가드 브레이크)");Je("w_stab","물방울 찌르기","high",[6,3,11],5,{range:1.3+ke,chain:{h:"w_flow2"},anim:"stab"},"가장 빠른 견제");Je("w_flow2","유수 이연","high",[8,3,14],6,{chain:{h:"w_flow3"},anim:"combo2"});Je("w_flow3","유수 삼연","mid",[10,4,16],7,{arc:.9,chain:{h:"w_flow4"},anim:"combo2"});Je("w_flow4","유수 사연 · 폭포","mid",[14,4,22],10,{range:1.55+ke,knockdown:!0,anim:"combo3"},"탭→가로×3, 끊기지 않는 4연격 · 다운");Je("w_slash","유수 베기","high",[9,3,13],8,{arc:.8,track:.1,anim:"slash_h"},"빠르고 유도가 좋은 가로베기");Je("w_rise","물보라 올려베기","mid",[14,4,20],10,{range:1.3+ke,lunge:.5,hitstun:0,launch:7.2,push:0,anim:"slash_up"},"띄우기");Je("w_down","폭포 내려베기","mid",[14,4,19],12,{range:1.55+ke,anim:"slash_down"},"중단");Je("w_low","잔물결","low",[10,3,14],7,{range:1.35+ke,anim:"slash_low"},"빠른 하단");Je("w_thrust","격류 찌르기","mid",[12,3,15],10,{range:1.9+ke,arc:.4,lunge:.7,push:3.5,anim:"thrust"},"멀리 닿는 찌르기");Je("w_sweep","소용돌이 다리베기","low",[16,5,22],9,{range:1.7+ke,arc:1.1,knockdown:!0,push:0,anim:"sweep"},"하단 다운");Je("w_spin","수류 회전","mid",[15,5,20],10,{range:1.55+ke,arc:1.5,track:.2,push:3,anim:"spin"},"옆걸음 잡기");Je("w_tide","해일 베기","mid",[20,5,22],13,{range:1.9+ke,lunge:.4,push:6,bpush:5,anim:"slash_h"},"멀리 밀어내는 큰 베기");Je("t_stab","섬광 찌르기","high",[5,2,11],4,{range:1.3+ke,chain:{h:"t_rai2"},anim:"stab"},"가장 빠른 찌르기");Je("t_rai2","뇌광 이연","high",[7,3,13],6,{chain:{h:"t_rai3"},anim:"combo2"});Je("t_rai3","뇌광 삼연 · 낙뢰","mid",[11,3,18],10,{range:1.5+ke,knockdown:!0,anim:"combo3"},"탭→가로→가로, 마지막은 뛰어 내려찍기 · 다운");Je("t_slash","뇌광 베기","high",[8,3,13],8,{range:1.45+ke,anim:"slash_h"},"빠른 한손 베기");Je("t_rise","뇌운 올려베기","mid",[12,4,20],9,{range:1.3+ke,lunge:.5,hitstun:0,launch:7.4,push:0,anim:"slash_up"},"띄우기");Je("t_down","낙뢰","mid",[13,4,18],11,{range:1.5+ke,anim:"slash_down"},"들었다 내려찍기");Je("t_low","지뢰 베기","low",[9,3,15],6,{range:1.4+ke,anim:"slash_low"},"빠른 하단");Je("t_slide","뇌전 미끄러지기","low",[14,4,22],9,{range:1.6+ke,lunge:.9,knockdown:!0,push:0,anim:"sweep"},"파고드는 하단 다운");Je("t_leap","뇌명 도약베기","mid",[16,4,20],12,{range:1.5+ke,lunge:1,air:[4,16],anim:"slash_down"},"뛰어서 하단을 피하며 베기");Je("t_heaven","천뢰","mid",[24,5,26],18,{range:1.5+ke,lunge:1.4,air:[6,24],knockdown:!0,hitstop:14,anim:"helm"},"높이 뛰어 내려찍기 · 하단 회피");Je("n_stab","바람 찌르기","high",[6,3,11],5,{range:1.3+ke,chain:{h:"n_gale2"},anim:"stab"},"견제");Je("n_gale2","질풍 이연","high",[9,3,14],7,{arc:1,track:.15,chain:{h:"n_gale3"},anim:"combo2"});Je("n_gale3","질풍 삼연 · 회오리","mid",[13,5,20],11,{range:1.5+ke,arc:3.14,knockdown:!0,anim:"spin"},"탭→가로→가로, 360° 회오리 · 다운");Je("n_slash","질풍 베기","high",[9,3,13],9,{arc:.95,track:.2,anim:"slash_h"},"유도가 강한 가로베기");Je("n_rise","승천 회오리","mid",[15,4,22],10,{range:1.3+ke,lunge:.5,hitstun:0,launch:8.2,push:0,anim:"slash_up"},"높이 띄우기");Je("n_down","낙엽 내려베기","mid",[14,4,17],13,{range:1.5+ke,lunge:.6,air:[3,15],anim:"slash_down"},"뛰어 내려베기 · 하단 회피");Je("n_low","바람 하단","low",[11,3,16],7,{range:1.4+ke,anim:"slash_low"},"하단");Je("n_dash","돌풍 찌르기","mid",[12,3,18],9,{range:1.6+ke,arc:.5,lunge:1.3,push:3,anim:"thrust"},"멀리서 날아드는 찌르기");Je("n_sweep","회오리 다리베기","low",[17,5,22],10,{range:1.75+ke,arc:1.3,knockdown:!0,push:0,anim:"sweep"},"하단 다운");Je("n_spin","선풍 회전","mid",[13,5,17],12,{range:1.6+ke,arc:3.14,track:.3,push:3,anim:"spin"},"360° · 옆걸음 잡기");Je("n_sky","하늘 가르기","mid",[22,5,24],17,{range:1.5+ke,lunge:1.2,air:[5,22],knockdown:!0,hitstop:14,anim:"helm"},"크게 뛰어 내려찍기 · 하단 회피");const di={startup:1,active:1.1,recovery:1.3,stun:1.2};for(const i of Object.values(qi))i.startup=Math.round(i.startup*di.startup),i.active=Math.round(i.active*di.active),i.recovery=Math.round(i.recovery*di.recovery),i.hitstun=Math.round(i.hitstun*di.stun),i.blockstun=Math.round(i.blockstun*di.stun),i.armor&&(i.armor=[Math.round(i.armor[0]*di.startup),Math.round(i.armor[1]*di.startup)]),i.air&&(i.air=[Math.round(i.air[0]*di.startup),Math.round(i.air[1]*di.startup)]),i.total=i.startup+i.active+i.recovery;const rd={t:"stab",h:"slash_h",u:"slash_up",d:"slash_down",l:"slash_low",ft:"thrust",bl:"sweep",sh:"spin",bd:"helm"},pp=(i,e,t)=>{const n=Lh(t).cmd;return n[e+i]||n[i]||rd[e+i]||rd[i]},qc={};var wf;for(const[i,e]of Object.entries(jc)){const t={};for(const[n,s]of Object.entries(qi)){const r=Object.assign({},s,e.mods[n]||{});if(i!=="base"){if(!r.noHit){const o=r.startup;r.startup=Math.max(3,Math.round(r.startup*e.startup));const a=r.startup/o;r.armor&&(r.armor=[Math.round(r.armor[0]*a),Math.round(r.armor[1]*a)]),r.air&&(r.air=[Math.round(r.air[0]*a),Math.round(r.air[1]*a)])}r.recovery=Math.max(4,Math.round(r.recovery*e.recovery)),r.dmg=r.dmg*e.dmg,r.chip=r.chip*e.chip,r.track=r.track*e.track,r.arc=Math.min(3.14,r.arc+e.arc)}if(r.total=r.startup+r.active+r.recovery,!r.noHit){const o=(wf=r.onBlock)!=null?wf:-Math.round(Math.max(0,r.dmg-4)*1.15)-1-(r.launch?14:0)-(r.knockdown?4:0)-(r.armor?4:0);r.onBlock=o,r.blockstun=Math.max(6,r.active+r.recovery+o)}t[n]=r}qc[i]=t}const Ga=i=>qc[i]||qc.base;function zy(i,e){return Math.hypot(i,e)<.45?"n":e>.5&&e>=Math.abs(i)?"f":e<-.5&&-e>=Math.abs(i)?"b":Math.abs(i)>.5?"s":"n"}const An={create(){const i=new Float32Array(16);return i[0]=i[5]=i[10]=i[15]=1,i},_t:new Float32Array(16),mul(i,e,t){const n=this._t;for(let s=0;s<4;s++){const r=t[s*4],o=t[s*4+1],a=t[s*4+2],l=t[s*4+3];for(let c=0;c<4;c++)n[s*4+c]=e[c]*r+e[4+c]*o+e[8+c]*a+e[12+c]*l}return i.set(n),i},trs(i,e,t,n,s,r,o){const a=Math.cos(s),l=Math.sin(s),c=Math.cos(r),h=Math.sin(r),u=Math.cos(o),d=Math.sin(o),f=c,g=h*l,_=h*a,p=0,m=a,y=-l,S=-h,v=c*l,E=c*a;return i[0]=f*u+g*d,i[1]=p*u+m*d,i[2]=S*u+v*d,i[3]=0,i[4]=-f*d+g*u,i[5]=-p*d+m*u,i[6]=-S*d+v*u,i[7]=0,i[8]=_,i[9]=y,i[10]=E,i[11]=0,i[12]=e,i[13]=t,i[14]=n,i[15]=1,i},pt(i,e,t,n){return[i[0]*e+i[4]*t+i[8]*n+i[12],i[1]*e+i[5]*t+i[9]*n+i[13],i[2]*e+i[6]*t+i[10]*n+i[14]]}},Zn={lift:0,hipsX:0,hipsY:-.35,hipsZ:0,spineX:.1,spineY:0,spineZ:0,chestX:.05,chestY:.25,chestZ:0,headX:.08,headY:.1,headZ:0,shLX:-.8,shLY:0,shLZ:-.6,elLX:-1,elLY:0,shRX:-.85,shRY:0,shRZ:.3,elRX:-.9,elRY:0,wrRX:1.05,wrRY:0,wrRZ:0,hipLX:-.35,hipLY:0,hipLZ:.08,knLX:.4,hipRX:.3,hipRY:0,hipRZ:-.08,knRX:.5},ga=Object.keys(Zn),Xn=i=>Object.assign({},Zn,i),mp={shLX:-1.25,shLZ:-.7,elLX:-1.3,shRX:-1.3,shRZ:.25,elRX:-1.2,elRY:-1.35,wrRX:1.2,chestY:.1,headY:.1},od=Xn({...mp,spineX:.2,headX:.25,hipsY:-.2}),ad=Xn({...mp,headX:.25,hipsY:-.2,hipLX:-1.25,knLX:2.1,hipRX:-.45,knRX:2.2,spineX:.4}),gp=Xn({spineX:-.5,chestX:-.15,headX:-.35,shLX:-2.3,shLZ:.7,elLX:-.5,shRX:-2.3,shRZ:-.7,elRX:-.5,wrRX:.4,knLX:.7,knRX:.7,hipsY:0,headY:0,chestY:0}),ld={high:Xn({spineX:-.35,chestX:-.15,headX:-.5,shLX:-.4,shLZ:.2,elLX:-1.2,shRX:-.4,shRZ:-.2,elRX:-1,wrRX:.6}),mid:Xn({spineX:.5,chestX:.25,headX:.25,shLX:-.6,elLX:-1.6,shRX:-.6,elRX:-1.4,wrRX:1.4,knLX:.8,knRX:.8}),low:Xn({hipLX:-.1,knLX:.95,hipRX:.1,knRX:1.4,spineX:.3,headX:.1,hipsZ:.12}),stagger:gp},Hy=Xn({spineX:-.5,chestX:-.2,headX:-.5,shLX:-2.2,shLZ:.7,elLX:-.6,shRX:-2.2,shRZ:-.7,elRX:-.6,wrRX:.3,hipLX:-.8,knLX:.9,hipRX:-.4,knRX:.6,hipsY:0,headY:0,chestY:0}),Gy=Xn({spineX:-.05,chestX:0,headX:-.2,shLX:-.15,shLZ:.55,elLX:-.3,shRX:-.15,shRZ:-.55,elRX:-.3,wrRX:.2,hipLX:-.15,hipLZ:.15,knLX:.2,hipRX:-.35,hipRZ:-.1,knRX:.7,hipsY:0,headY:0,chestY:0}),Wy=Xn({spineX:.75,chestX:.3,headX:.5,shLX:-1,elLX:-2.2,shRX:-1,elRX:-2.2,wrRX:1.5,hipLX:-2.1,knLX:2.4,hipRX:-2.1,knRX:2.4,hipsY:0,headY:0,chestY:0}),Xy=Xn({shRX:-2.9,shRZ:.15,elRX:-.25,wrRX:.6,shLX:-.2,shLZ:-.1,elLX:-.4,hipsY:-.6,headY:.3,chestY:.2,spineX:-.05,headX:-.2,hipLX:-.25,knLX:.15,hipRX:.25,knRX:.1}),ir={hipLX:-1,knLX:.6,hipRX:.65,knRX:.25,hipsY:-.55},rs={hipLX:-1.2,knLX:1.9,hipRX:-.2,knRX:1.9,lift:-.05},en=(i,e=1.35)=>({shLX:-e,shLZ:-.75+i*.25,elLX:-.7,shRX:-e,shRZ:.3+i*.25,elRX:-.45,elRY:-1.45,wrRX:1.35}),cd={shLX:-.55,elLX:-1.7,shRX:-.6,elRX:-1.7,wrRX:1.5,hipsY:-.1,spineX:.05},Ko={...ir,shLX:-1.45,shLZ:-.35,elLX:-.25,shRX:-1.5,shRZ:.1,elRX:-.05,wrRX:1.57,spineX:.25,chestY:.15,headY:.25},Al={shLX:-2.9,shLZ:-.35,elLX:-.7,shRX:-2.95,shRZ:.2,elRX:-.6,wrRX:.25,spineX:-.2,chestX:-.1,headX:-.1,chestY:.1},Zo={...ir,shLX:-1.05,shLZ:-.5,elLX:-.3,shRX:-1.1,shRZ:.15,elRX:-.1,wrRX:1.45,spineX:.5,chestX:.15,chestY:.1,headY:.15},hd={stab:[[3,cd],[7,Ko],[10,Ko]],combo2:[[4,{...en(-1),chestY:1,hipsY:.2}],[8,{...en(1),chestY:-.9,hipsY:-.7,...ir}],[11,{...en(1),chestY:-1,hipsY:-.7}]],combo3:[[7,{...en(1,1.55),chestY:-1.1,hipsY:.6}],[14,{...en(-1,1.55),chestY:1,hipsY:-1.5,...ir}],[18,{...en(-1,1.5),chestY:1.1,hipsY:-1.7}]],slash_h:[[5,{...en(1),chestY:-.9,hipsY:.1}],[10,{...en(-1),chestY:1,hipsY:-.9,...ir}],[13,{...en(-1),chestY:1.1,hipsY:-.9}]],slash_low:[[6,{...en(1,.55),...rs,chestY:-.9,spineX:.45}],[12,{...en(-1,.55),...rs,chestY:1,spineX:.5,hipsY:-.7}],[15,{...en(-1,.55),...rs,chestY:1.1,spineX:.5,hipsY:-.7}]],slash_down:[[8,Al],[15,Zo],[19,Zo]],slash_up:[[9,{...rs,shLX:.15,shLZ:-.45,elLX:-.3,shRX:.2,shRZ:.2,elRX:-.2,wrRX:1.75,spineX:.55,chestY:.4}],[15,{shLX:-2.75,shLZ:-.3,elLX:-.3,shRX:-2.8,shRZ:.15,elRX:-.2,wrRX:.9,spineX:-.3,chestX:-.1,headX:-.25,lift:.06,hipLX:-.4,knLX:.3,hipRX:.35,knRX:.2}],[19,{shLX:-2.85,shLZ:-.3,elLX:-.3,shRX:-2.9,shRZ:.15,elRX:-.2,wrRX:.8,spineX:-.3,headX:-.25,lift:.05}]],thrust:[[7,{...cd,shRX:-.4,elRX:-2,hipsY:.3}],[13,{...Ko,hipLX:-1.3,knLX:.5,hipRX:.85,knRX:.1,spineX:.4}],[17,{...Ko,hipLX:-1.3,knLX:.5,hipRX:.85,knRX:.1,spineX:.4}]],sweep:[[9,{...en(1,.35),...rs,hipLX:-1.35,knLX:2.3,hipRX:-.5,knRX:2.2,hipsY:.9,spineX:.55}],[18,{...en(-1,.3),...rs,hipLX:-1.35,knLX:2.3,hipRX:-.15,hipRZ:-1.2,knRX:.1,hipsY:.2,spineX:.5}],[23,{...en(-1,.3),...rs,hipLX:-1.35,knLX:2.3,hipRX:-.15,hipRZ:-1.2,knRX:.1,hipsY:-1.1,spineX:.5}]],spin:[[8,{...en(1,1.45),hipsY:.8,chestY:-.6,shRZ:-.4}],[17,{...en(-1,1.5),hipsY:-1.4,chestY:.8,shRZ:-.9,...ir}],[22,{...en(-1,1.5),hipsY:-2.2,chestY:.9,shRZ:-.9}]],helm:[[14,{...Al,lift:.04}],[20,{...Al,shLX:-3.1,shRX:-3.15,spineX:-.42,lift:.08}],[24,{...Zo,shLX:-.8,shRX:-.85,spineX:.7,hipLX:-.9,knLX:1.4,hipRX:.3,knRX:1.2,wrRX:1.55}],[28,{...Zo,shLX:-.8,shRX:-.85,spineX:.7,hipLX:-.9,knLX:1.4,hipRX:.3,knRX:1.2,wrRX:1.55}]]},Rl=[{n:"hips",p:-1,o:[0,0,0]},{n:"spine",p:0,o:[0,.07,0]},{n:"chest",p:1,o:[0,.25,0]},{n:"head",p:2,o:[0,.27,0]},{n:"shL",p:2,o:[.2,.2,0]},{n:"elL",p:4,o:[0,-.28,0]},{n:"shR",p:2,o:[-.2,.2,0]},{n:"elR",p:6,o:[0,-.28,0]},{n:"hipL",p:0,o:[.1,-.05,0]},{n:"knL",p:8,o:[0,-.43,0]},{n:"hipR",p:0,o:[-.1,-.05,0]},{n:"knR",p:10,o:[0,-.43,0]},{n:"wrR",p:7,o:[0,-.29,0]}],Cl={base:.12,tip:1},_a={};for(const i in qi)hd[i]&&(_a[i]=[[0,null],...hd[i].map(([e,t])=>[e,Xn(t)]),[qi[i].total,Zn]]);function jy(i,e,t,n){const s=_a[i]||_a[qi[i]&&qi[i].anim]||_a.stab;let r=0;for(;r<s.length-2&&e>=s[r+1][0];)r++;const o=s[r][0],a=s[r+1][0];let l=Vi((e-o)/Math.max(1,a-o),0,1);l=r===s.length-2?l*l*(3-2*l):1-(1-l)*(1-l);const c=r===0?t:s[r][1],h=s[r+1][1];for(const u of ga)n[u]=c[u]+(h[u]-c[u])*l}class ud{constructor(e){this.idx=e,this.jw=Rl.map(()=>An.create()),this.root=An.create(),this.tmp=An.create(),this.reset()}reset(){this.base=Object.assign({},Zn),this.pose=Object.assign({},Zn),this.snap=null,this.lastUid=-1,this.bodyPitch=0,this.bodyRoll=0,this.rootH=.95,this.groundMode=!0,this.walkPh=0,this.walkF=0,this.walkS=0}step(e,t){e.state==="attack"&&e.moveUid!==this.lastUid&&(this.lastUid=e.moveUid,this.snap=Object.assign({},this.pose)),e.wk===1?(this.walkF*=.75,this.walkS*=.75):e.wk===2?(this.walkF*=.7,this.walkS*=.7):e.wk===3&&(this.walkF=Xt(this.walkF,e.wmy,.3),this.walkS=Xt(this.walkS,e.wmx,.3),this.walkPh+=e.wph),this.updPose(e,t),this.fk(e)}updPose(e,t){const n=this.base,s=this.pose;let r=Zn,o=.25,a=!1;switch(this.groundMode=!0,e.state){case"idle":r=e.guard?e.crouch?ad:od:Zn,o=e.guard?.45:.25;break;case"attack":jy(e.move.id,e.f,this.snap||s,n),a=!0;break;case"hitstun":{const c=e.stun,h=e.f,u=ld[e.hitLevel]||ld.high,d=h<3?h/3:Math.max(0,1-(h-3)/Math.max(1,c-3));for(const f of ga)n[f]=Xt(n[f],Xt(Zn[f],u[f],d),.6);a=!0;break}case"blockstun":r=e.crouch?ad:od,o=.6;break;case"launched":r=Hy,o=.25,this.groundMode=!1;break;case"down":case"ko":r=Gy,o=.2,this.groundMode=!1;break;case"getup":r=Zn,o=.14,this.groundMode=!1;break;case"roll":r=e.f<19?Wy:Zn,o=.45,this.groundMode=!1;break;case"parried":r=gp,o=.3;break;case"win":r=Xy,o=.08;break}if(!a)for(const c of ga)n[c]+=(r[c]-n[c])*o;for(const c of ga)s[c]=n[c];if(e.state==="idle"&&!e.crouch){const c=Math.sin(this.walkPh),h=Math.cos(this.walkPh),u=Vi(Math.abs(this.walkF),0,1)*Math.sign(this.walkF),d=Vi(this.walkS,-1,1);s.hipLX+=c*.45*u,s.hipRX-=c*.45*u,s.knLX+=Math.max(0,-c)*.6*Math.abs(u),s.knRX+=Math.max(0,c)*.6*Math.abs(u),s.hipLZ+=c*.28*d,s.hipRZ+=c*.28*d,s.knLX+=Math.max(0,h)*.4*Math.abs(d),s.knRX+=Math.max(0,-h)*.4*Math.abs(d),s.lift-=Math.abs(h)*.03*(Math.abs(u)+Math.abs(d)),s.chestX+=Math.sin(t*2.2+this.idx)*.025,s.shLX+=Math.sin(t*2.2+this.idx)*.03}e.state==="parried"&&(s.spineZ+=Math.sin(e.f*.25)*.15);const l=e.state;if(l==="launched")this.bodyPitch=Xt(this.bodyPitch,-1.25,.06),this.bodyRoll=Xt(this.bodyRoll,0,.2),this.rootH=e.y+.9;else if(l==="down"||l==="ko")this.bodyPitch=Xt(this.bodyPitch,-1.57,.25),this.bodyRoll=0,this.rootH=Xt(this.rootH,.14,.3);else if(l==="getup"){const c=Vi(e.f/20,0,1),h=c*c*(3-2*c);this.bodyPitch=-1.57*(1-h),this.rootH=Xt(.14,.92,h)}else if(l==="roll"){const c=Vi(e.f/20,0,1),h=c<1?c*c*(3-2*c):0,u=e.rollSign*Math.PI*2*h;e.rollAxis==="x"?(this.bodyPitch=u,this.bodyRoll=0):(this.bodyRoll=u,this.bodyPitch=0),this.rootH=.95-.45*Math.sin(Math.PI*c)}else this.bodyPitch=Xt(this.bodyPitch,0,.3),this.bodyRoll=Xt(this.bodyRoll,0,.3),this.rootH=.95}fk(e){const t=this.pose;An.trs(this.root,e.x,this.rootH,e.z,this.bodyPitch,e.yaw,this.bodyRoll);for(let s=0;s<Rl.length;s++){const r=Rl[s];An.trs(this.tmp,r.o[0],r.o[1],r.o[2],t[r.n+"X"]||0,t[r.n+"Y"]||0,t[r.n+"Z"]||0),An.mul(this.jw[s],s===0?this.root:this.jw[r.p],this.tmp)}let n=0;if(this.groundMode){let s=9;for(const r of[9,11]){const o=this.jw[r];for(const a of[.16,-.06]){const l=o[5]*-.485+o[9]*a+o[13];l<s&&(s=l)}}n=-s}if(n+=t.lift||0,n){for(const s of this.jw)s[13]+=n;this.root[13]+=n}}bladePoint(e){return An.pt(this.jw[12],0,0,Cl.base+(Cl.tip-Cl.base)*e)}limbPos(e){if(e==="blade")return this.bladePoint(.7);if(e==="both"){const t=An.pt(this.jw[5],0,-.29,0),n=An.pt(this.jw[7],0,-.29,0);return[(t[0]+n[0])/2,(t[1]+n[1])/2,(t[2]+n[2])/2]}return e==="fistL"?An.pt(this.jw[5],0,-.29,0):e==="fistR"?An.pt(this.jw[7],0,-.29,0):e==="footL"?An.pt(this.jw[9],0,-.45,.08):An.pt(this.jw[11],0,-.45,.08)}center(){return[this.root[12],this.root[13]+.25,this.root[14]]}}const qy={fire:0,water:1,thunder:2,wind:3},_p=`attribute float aU;attribute float aT;varying float vU;varying float vT;
void main(){vU=aU;vT=aT;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,Yy=`uniform float uTime;uniform float uAlpha;uniform float uReveal;uniform int uMode;uniform float uSeed;
varying float vU;varying float vT;
float h(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){return vn(p)*.55+vn(p*2.1+3.1)*.3+vn(p*4.3+7.7)*.15;}
void main(){
  if(vT>uReveal) discard;
  float head=1.-vT;            // 머리(방금 지나간 곳)=1, 꼬리=0
  float taper=smoothstep(0.,.18,vT)*smoothstep(1.,.55,vT); // 초승달처럼 양끝이 가늘게
  float thick=mix(.25,1.,taper);
  vec3 c=vec3(0.); float a=0.;
  if(uMode==0){
    // 불: 노랑→주황→빨강 단색 칠 + 불꽃 혀마다 검은 먹 테두리 + 끝이 말림 + 테두리 있는 불티 조각
    float dc=abs(vU-.84);
    vec2 q=vec2(vT*6.,vU*2.4); float ang=sin(vT*9.+uTime*3.)*.9*vT; q=vec2(q.x*cos(ang)-q.y*sin(ang),q.x*sin(ang)+q.y*cos(ang));
    float n=fbm(q+vec2(uSeed-uTime*1.2,-uTime*2.5));
    float flame=(n*1.05+.62-dc*2.3-vT*.75+head*.1)*(thick*.6+.4);
    float body=step(.5,flame);
    float ink=body*(1.-step(.565,flame));                         // 먹 테두리
    float mid=step(.68,flame), hot=step(.84,flame);
    c=mix(vec3(.82,.1,.02),vec3(1.,.5,.05),mid); c=mix(c,vec3(1.,.9,.35),hot);
    c=mix(c,vec3(1.,.98,.85),step(.95,flame)*step(dc,.07));
    // 불티 조각: 꼬리 쪽에 흩날리는 작은 불꽃 (테두리 포함)
    vec2 g=vec2(vT*18.+uSeed,vU*7.-uTime*2.); vec2 gi=floor(g), gf=fract(g)-.5;
    float rnd=h(gi), fl=0., fi=0.;
    if(rnd>.8 && vT>.25){ vec2 o=(vec2(h(gi+1.),h(gi+2.))-.5)*.4; float d=length((gf-o)*vec2(1.,1.6)); fl=step(d,.24); fi=step(d,.16); }
    c=mix(c,mix(vec3(.1,.0,.0),vec3(1.,.6,.1),fi),fl*(1.-body));
    c=mix(c,vec3(.12,.02,.0),ink);
    a=max(body,fl);
  } else if(uMode==1){
    // 물: 여러 가닥 물줄기 다발(하늘색~남색, 사이 흰 광택 선, 먹 테두리) + 소용돌이 말린 구름 물거품 + 물방울
    float band=vU;
    float inner=.4+(1.-thick)*.42, top=.9-(1.-thick)*.05;
    float body=step(inner,band)*step(band,top);
    float tw=sin(vT*7.-uTime*3.+uSeed)*.04;                         // 가닥이 꼬임
    float sv=(band-inner)/max(.01,top-inner)+tw; float k=floor(sv*4.); float sf=fract(sv*4.);
    vec3 cols[4]; cols[0]=vec3(.03,.18,.55); cols[1]=vec3(.08,.38,.85); cols[2]=vec3(.2,.62,1.); cols[3]=vec3(.55,.85,1.);
    int ki=int(clamp(k,0.,3.));
    c=ki==0?cols[0]:ki==1?cols[1]:ki==2?cols[2]:cols[3];
    float shine=step(.82,sf)*step(sf,.9);
    c=mix(c,vec3(.92,.98,1.),shine);
    float ink=step(band,inner+.03)+step(top-.025,band);
    c=mix(c,vec3(.0,.03,.15),ink*body);
    a=body;
    // 소용돌이 구름 물거품: 바깥 가장자리를 따라 (흰 몸 + 먹 테두리 + 안쪽 소용돌이 선)
    float cell=vT*7.+uSeed*.3; float ci=floor(cell); vec2 p=vec2((fract(cell)-.5)*1.2,(band-top-.02)*4.5);
    if(h(vec2(ci,7.))>.25 && thick>.25){
      float blob=min(min(length(p-vec2(-.15,.0))-.24,length(p-vec2(.15,.02))-.22),length(p-vec2(.0,.14))-.2);
      float r=length(p-vec2(.02,.06)), th=atan(p.y-.06,p.x-.02);
      float sp=abs(fract(r*6.-th/6.2832)-.5);
      float fill=step(blob,0.), edge=step(blob,0.)*(1.-step(blob,-.045));
      float spl=fill*step(sp,.08)*step(r,.17);
      vec3 fc=mix(vec3(1.),vec3(.05,.12,.35),max(edge,spl));
      c=mix(c,fc,fill); a=max(a,fill);
    }
    // 물방울
    vec2 g=vec2(vT*22.,band*9.-uTime); vec2 gi=floor(g), gf=fract(g)-.5;
    if(h(gi+3.)>.88 && band>.85){ float d=length(gf); float dr=step(d,.2), di=step(d,.13); c=mix(c,mix(vec3(.05,.12,.35),vec3(1.),di),dr*(1.-body)); a=max(a,dr); }
    a*=smoothstep(0.,.05,head);
  } else if(uMode==2){
    // 번개: 굵고 구불구불한 띠(흰 심 + 하늘색 빛) + 가는 흰 실금 가지
    float fl=floor(uTime*18.)+uSeed;
    float cy=.78+(vn(vec2(vT*5.,fl*.3))-.5)*.25+(vn(vec2(vT*24.,fl))-.5)*.07;
    float d=abs(vU-cy), w=.045*thick+.01;
    float core=step(d,w*.55), bodyL=step(d,w), glow=smoothstep(w*4.,w,d)*.55;
    float br=0.;
    for(int k=0;k<5;k++){
      float kk=float(k);
      float b0=h(vec2(kk,fl))*.85+.05, len=.06+h(vec2(kk+3.,fl))*.14, sl=(h(vec2(kk+7.,fl))*.9+.5)*(h(vec2(kk+9.,fl))>.5?1.:-1.);
      float tt=vT-b0;
      if(tt>0. && tt<len){ float by=cy+tt*sl*2.2+(vn(vec2(vT*70.,fl+kk))-.5)*.06; br+=smoothstep(.012,.0,abs(vU-by))*(1.-tt/len*.6); }
    }
    a=clamp(max(max(bodyL,glow),br)*(.4+.6*head),0.,1.);
    c=mix(vec3(.25,.7,1.),vec3(.75,.93,1.),bodyL); c=mix(c,vec3(1.),max(core,br));
  } else {
    // 바람: 끝이 날카롭게 빠지는 초승달 칼날 3장 (초록 몸 + 흰 하이라이트 + 진한 테두리 + 마른 붓 끝), 하나는 잎사귀 마디 무늬
    float m=0.; c=vec3(0.);
    for(int k=0;k<3;k++){
      float kk=float(k);
      float s0=kk*.12, s1=1.-kk*.18;                                // 칼날마다 길이가 다름
      float sT=(vT-s0)/(s1-s0);
      if(sT<0. || sT>1.) continue;
      float wv=sin(3.14159*pow(sT,.7))*(.09-kk*.02)*(thick*.7+.3);   // 앞쪽이 굵고 끝이 날카로움
      float cy=.9-kk*.22+sin(sT*3.)*.02;
      float d=abs(vU-cy);
      float dry=step(.35,vn(vec2(vT*60.,vU*30.+kk)))*step(.75,sT);  // 마른 붓 끝 (갈라짐)
      float inb=step(d,wv)*(1.-dry);
      if(inb>0.){
        vec3 col=mix(vec3(.15,.62,.25),vec3(.45,.95,.45),step(d,wv*.6));
        col=mix(col,vec3(.97,1.,.95),step(abs(vU-cy-wv*.25),wv*.18));      // 흰 하이라이트
        if(k==1){ float leaf=abs(fract(sT*10.)-.5); col=mix(col,vec3(.08,.4,.15),step(length(vec2(leaf*2.2,(vU-cy)/max(.001,wv)*.7)),.35)); } // 잎사귀 마디
        col=mix(col,vec3(.02,.2,.08),step(wv*.82,d));                      // 테두리
        c=col; m=1.;
      }
    }
    a=m*(.35+.65*head);
  }
  if(uMode==1) gl_FragColor=vec4(c,a*uAlpha);
  else gl_FragColor=vec4(c*a*uAlpha,1.);
}`;function Yc(i,e=Math.random()*10){var s;const t=(s=qy[i])!=null?s:0,n=new nn({vertexShader:_p,fragmentShader:Yy,uniforms:{uTime:{value:0},uAlpha:{value:1},uReveal:{value:1},uMode:{value:t},uSeed:{value:e}},transparent:!0,depthWrite:!1,side:Mn});return t!==1&&(n.blending=go,n.blendSrc=xi,n.blendDst=xi),n}const $y=`uniform float uTime;uniform float uAlpha;uniform float uReveal;uniform vec3 uCol;varying float vU;varying float vT;
void main(){ if(vT>uReveal) discard; float head=1.-vT; float taper=smoothstep(0.,.2,vT)*smoothstep(1.,.5,vT);
  float g=exp(-pow((vU-.8)*3.,2.))*mix(.3,1.,taper)*(.25+.75*head);
  gl_FragColor=vec4(uCol*g*uAlpha*.55,1.);}`,Ky={fire:[.7,.25,.05],water:[.1,.28,.6],thunder:[.25,.55,.9],wind:[.1,.35,.15]};function Zy(i){return new nn({vertexShader:_p,fragmentShader:$y,uniforms:{uTime:{value:0},uAlpha:{value:1},uReveal:{value:1},uCol:{value:new pe(...Ky[i]||[1,1,1])}},transparent:!0,depthWrite:!1,side:Mn,blending:go,blendSrc:xi,blendDst:xi})}const $c=11,Kc=4,Xs=($c-1)*Kc+1;function dd(i,e,t,n,s,r){const o=s*s,a=o*s;for(let l=0;l<3;l++)r[l]=.5*(2*e[l]+(-i[l]+t[l])*s+(2*i[l]-5*e[l]+4*t[l]-n[l])*o+(-i[l]+3*e[l]-3*t[l]+n[l])*a);return r}class Jy{constructor(e,t){this.samples=[];const n=new Rt;this.pos=new Float32Array(Xs*2*3),this.col=new Float32Array(Xs*2*4),this.u=new Float32Array(Xs*2),this.tt=new Float32Array(Xs*2);const s=[];for(let r=0;r<Xs-1;r++){const o=r*2;s.push(o,o+1,o+2,o+1,o+3,o+2)}n.setIndex(s),n.setAttribute("position",new it(this.pos,3).setUsage(Xi)),n.setAttribute("aCol",new it(this.col,4).setUsage(Xi)),n.setAttribute("aU",new it(this.u,1)),n.setAttribute("aT",new it(this.tt,1).setUsage(Xi));for(let r=0;r<Xs;r++)this.u[r*2]=0,this.u[r*2+1]=1;this.geo=n,this.mat=Yc(t.id),this.mesh=new wt(n,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=9,this.glowMat=Zy(t.id),this.glow=new wt(n,this.glowMat),this.glow.frustumCulled=!1,this.glow.renderOrder=8,this.scene=e,e.add(this.glow,this.mesh),this.jitter=0,this.wind=t.id==="wind"}push(e,t){this.samples.unshift(e?{b:t.bladePoint(this.wind?.3:-.05),t:t.bladePoint(this.wind?1.15:1.35)}:null),this.samples.length>$c&&(this.samples.length=$c)}clear(){this.samples.length=0}update(e=0){this.mat.uniforms.uTime.value=e,this.glowMat.uniforms.uTime.value=e;const t=this.samples;let n=0;const s=[0,0,0],r=[0,0,0];let o=0;for(;o<t.length&&t[o];)o++;if(o>=2){const a=l=>t[Math.max(0,Math.min(o-1,l))];for(let l=0;l<o-1;l++)for(let c=0;c<Kc;c++){const h=c/Kc;dd(a(l-1).b,a(l).b,a(l+1).b,a(l+2).b,h,s),dd(a(l-1).t,a(l).t,a(l+1).t,a(l+2).t,h,r),this.writeV(n++,s,r,(l+h)/(o-1))}this.writeV(n++,a(o-1).b,a(o-1).t,1)}this.geo.setDrawRange(0,Math.max(0,(n-1)*6)),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aCol.needsUpdate=!0,this.geo.attributes.aT.needsUpdate=!0,this.mesh.visible=n>=2,this.glow.visible=n>=2}writeV(e,t,n,s){const r=Math.pow(1-s,1.6),o=this.jitter,a=this.pos,l=this.col;for(let c=0;c<3;c++)a[e*6+c]=t[c]+(o?(Math.random()-.5)*o:0),a[e*6+3+c]=n[c]+(o?(Math.random()-.5)*o*2:0);l[e*8+3]=r,l[e*8+7]=r,this.tt[e*2]=s,this.tt[e*2+1]=s}dispose(){this.scene.remove(this.mesh,this.glow),this.geo.dispose(),this.mat.dispose(),this.glowMat.dispose()}}function Qy(){const t=document.createElement("canvas");t.width=512,t.height=128;const n=t.getContext("2d");let s=7;const r=()=>(s=s*16807%2147483647,s/2147483647);n.lineCap="round";for(let a=0;a<70;a++){const l=(r()-.5)*2,c=1.5+r()*4,h=.25+r()*.6;n.strokeStyle=`rgba(255,255,255,${h})`,n.lineWidth=c,n.beginPath();for(let u=0;u<=40;u++){const d=u/40,f=20+d*472,g=Math.sin(Math.PI*Math.pow(d,.8))*44,_=128/2+l*g+Math.sin(d*9+a)*1.5;if(d>.98-r()*.25*Math.abs(l))break;u===0?n.moveTo(f,_):n.lineTo(f,_)}n.stroke()}for(let a=0;a<40;a++){const l=60+r()*392,c=128/2+(r()-.5)*110,h=.8+r()*3;n.fillStyle=`rgba(255,255,255,${.3+r()*.5})`,n.beginPath(),n.arc(l,c,h,0,Math.PI*2),n.fill()}const o=new bh(t);return o.colorSpace=mi,o}const fd="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",e1=`uniform sampler2D uMap;uniform float uP;uniform float uA;uniform vec3 uCol;uniform float uCore;varying vec2 vUv;
void main(){float m=texture2D(uMap,vUv).r;float edge=smoothstep(uP,uP-0.08,vUv.x);m*=edge;
float core=smoothstep(.25,0.,abs(vUv.y-.5))*uCore;vec3 c=mix(uCol,vec3(1.),core*.8);
gl_FragColor=vec4(c*m*uA*2.3,1.);}`,t1=`uniform float uT;uniform float uA;uniform vec3 uCol;varying vec2 vUv;
void main(){float d=length(vUv-.5)*2.;float r=uT;float w=.18*(1.-uT)+.03;float m=smoothstep(w,0.,abs(d-r));
gl_FragColor=vec4(uCol*m*uA*1.5,1.);}`,pd={transparent:!0,depthWrite:!1,blending:go,blendSrc:xi,blendDst:xi,side:Mn};class n1{constructor(e){this.scene=e;const t=Qy();this.strokes=[];for(let n=0;n<8;n++){const s={uMap:{value:t},uP:{value:0},uA:{value:0},uCol:{value:new pe},uCore:{value:1}},r=new wt(new ji(1,.34),new nn({vertexShader:fd,fragmentShader:e1,uniforms:s,...pd}));r.visible=!1,r.frustumCulled=!1,r.renderOrder=12,e.add(r),this.strokes.push({m:r,u:s,t:1,life:.32,len:1})}this.rings=[];for(let n=0;n<8;n++){const s={uT:{value:0},uA:{value:0},uCol:{value:new pe}},r=new wt(new ji(1,1),new nn({vertexShader:fd,fragmentShader:t1,uniforms:s,...pd}));r.visible=!1,r.frustumCulled=!1,r.renderOrder=11,e.add(r),this.rings.push({m:r,u:s,t:1,life:.3,size:1,ground:!1})}this.si=0,this.ri=0}stroke(e,t,n,s=1.4,r=1){const o=this.strokes[this.si++%this.strokes.length];o.t=0,o.len=s,o.ang=t,o.flip=Math.random()<.5,o.m.position.set(e[0],e[1],e[2]),o.u.uCol.value.setRGB(n[0],n[1],n[2]),o.u.uCore.value=r,o.m.visible=!0}ring(e,t,n=1.2,s=!1){const r=this.rings[this.ri++%this.rings.length];r.t=0,r.size=n,r.ground=s,r.m.position.set(e[0],s?.03:e[1],e[2]),r.u.uCol.value.setRGB(t[0],t[1],t[2]),r.m.visible=!0}update(e,t){const n=t.quaternion;for(const s of this.strokes){if(!s.m.visible)continue;s.t+=e;const r=s.t/s.life;if(r>=1){s.m.visible=!1;continue}s.u.uP.value=Math.min(1.08,r*6),s.u.uA.value=r<.4?1:1-(r-.4)/.6,s.m.quaternion.copy(n),s.m.rotateZ(s.ang);const o=s.len*(1+r*.25);s.m.scale.set(s.flip?-o:o,o*(1-r*.3),1)}for(const s of this.rings){if(!s.m.visible)continue;s.t+=e;const r=s.t/s.life;if(r>=1){s.m.visible=!1;continue}s.u.uT.value=1-Math.pow(1-r,2.2),s.u.uA.value=1-r,s.ground?s.m.rotation.set(-Math.PI/2,0,0):s.m.quaternion.copy(n);const o=s.size*(s.ground?2.2:1);s.m.scale.set(o,o,1)}}}const js=96,md=new A,os=new A,gd=new A,Jo=new A;class i1{constructor(e){this.pos=new Float32Array(js*2*3),this.u=new Float32Array(js*2),this.t=new Float32Array(js*2);const t=new Rt,n=[];for(let s=0;s<js-1;s++){const r=s*2;n.push(r,r+1,r+2,r+1,r+3,r+2)}t.setIndex(n),t.setAttribute("position",new it(this.pos,3).setUsage(Xi)),t.setAttribute("aU",new it(this.u,1)),t.setAttribute("aT",new it(this.t,1));for(let s=0;s<js;s++)this.u[s*2]=0,this.u[s*2+1]=1;this.geo=t,this.mesh=new wt(t,Yc("fire")),this.mesh.frustumCulled=!1,this.mesh.renderOrder=13,this.mesh.visible=!1,e.add(this.mesh),this.mats={}}start(e,t,{width:n=.4,life:s=.5,reveal:r=.12,delay:o=0,flicker:a=null,spin:l=null}={}){this.mats[e]||(this.mats[e]=Yc(e)),this.mesh.material=this.mats[e],this.el=e,this.pts=t.slice(0,js),this.width=n,this.life=s,this.reveal=r,this.age=-o,this.flicker=a,this.spin=l,this.mesh.visible=!1,this.active=!0;const c=this.pts.length;for(let h=0;h<c;h++){const u=1-h/(c-1);this.t[h*2]=u,this.t[h*2+1]=u}this.geo.attributes.aT.needsUpdate=!0,this.geo.setDrawRange(0,(c-1)*6)}update(e,t,n){if(!this.active||(this.age+=e,this.age<0))return;if(this.age>this.life){this.active=!1,this.mesh.visible=!1;return}this.mesh.visible=!0,this.flicker&&Math.floor(this.age*30)!==this.lastFl&&(this.lastFl=Math.floor(this.age*30),this.pts=this.flicker());const s=this.mesh.material,r=this.age/this.life;s.uniforms.uTime.value=t,s.uniforms.uReveal.value=Math.min(1.01,this.age/this.reveal),s.uniforms.uAlpha.value=r<.6?1:1-(r-.6)/.4,n.getWorldPosition(Jo);const o=this.pts,a=o.length,l=typeof this.width=="function"?this.width:()=>this.width;for(let c=0;c<a;c++){const h=o[Math.max(0,c-1)],u=o[Math.min(a-1,c+1)];gd.set(u[0]-h[0],u[1]-h[1],u[2]-h[2]).normalize(),md.set(o[c][0]-Jo.x,o[c][1]-Jo.y,o[c][2]-Jo.z),os.crossVectors(gd,md).normalize();const d=l(c/(a-1),r)*.5;this.pos[c*6]=o[c][0]-os.x*d,this.pos[c*6+1]=o[c][1]-os.y*d,this.pos[c*6+2]=o[c][2]-os.z*d,this.pos[c*6+3]=o[c][0]+os.x*d,this.pos[c*6+4]=o[c][1]+os.y*d,this.pos[c*6+5]=o[c][2]+os.z*d}this.geo.attributes.position.needsUpdate=!0}}const Qo=(i,e,t,n,s,r,o,a=0)=>Array.from({length:s},(l,c)=>{const h=t+(n-t)*c/(s-1);return[i[0]+(r[0]*Math.cos(h)+o[0]*Math.sin(h))*e,i[1]+(r[1]*Math.cos(h)+o[1]*Math.sin(h))*e+a*(c/(s-1)),i[2]+(r[2]*Math.cos(h)+o[2]*Math.sin(h))*e]});function Ii(i,e,t=14,n=.18){const s=[];for(let r=0;r<t;r++){const o=r/(t-1),a=r===0||r===t-1?0:n;s.push([i[0]+(e[0]-i[0])*o+(Math.random()-.5)*a,i[1]+(e[1]-i[1])*o+(Math.random()-.5)*a,i[2]+(e[2]-i[2])*o+(Math.random()-.5)*a])}return s}class s1{constructor(e){this.pool=Array.from({length:26},()=>new i1(e)),this.i=0}next(){return this.pool[this.i++%this.pool.length]}hit(e,t,n,s=8){const r=s>=12,o=r?1.35:1,a=[n[2],0,-n[0]],l=[0,1,0];if(e==="fire")this.next().start("fire",Qo(t,.55*o,-.4,Math.PI*1.7,40,a,l),{width:c=>.6*o*(.3+c),life:.45,reveal:.1}),this.next().start("fire",[[t[0],t[1]-.6,t[2]],[t[0],t[1]+.1,t[2]],[t[0],t[1]+.9*o,t[2]]],{width:.7*o,life:.35,reveal:.08});else if(e==="water")for(let c=0;c<2;c++)this.next().start("water",Qo(t,(.7+c*.25)*o,Math.PI*(.9-c*.1),-Math.PI*(.15+c*.1),36,a,[n[0]*.5,.85,n[2]*.5]),{width:h=>.45*o*Math.sin(Math.PI*h)+.05,life:.55,reveal:.14,delay:c*.05});else if(e==="thunder")for(let c=0;c<(r?5:3);c++){const h=Math.random()*Math.PI*2,u=(Math.random()-.3)*1.2,d=(.9+Math.random()*.8)*o,f=[t[0]+Math.cos(h)*d,t[1]+u*d*.6,t[2]+Math.sin(h)*d];this.next().start("thunder",Ii(t,f),{width:.35,life:.25,reveal:.04,flicker:()=>Ii(t,f)})}else for(let c=0;c<2;c++)this.next().start("wind",Qo(t,(.38+c*.12)*o,Math.PI*(.85-c*.1),-Math.PI*.1,26,a,[n[0]*.4,.9,n[2]*.4]),{width:.28*o,life:.32,reveal:.07,delay:c*.03})}ougiShape(e,t,n,s,r,o=1.4){const a=r.map(l=>[t[0]+n[0]*l[0]*o-s[0]*l[1]*o,t[1]+n[1]*l[0]*o-s[1]*l[1]*o,t[2]+n[2]*l[0]*o-s[2]*l[1]*o]);if(e==="thunder"){const l=[];for(let h=0;h<a.length-1;h+=1)l.push(a[h]);const c=()=>l.flatMap((h,u)=>u<l.length-1?Ii(h,l[u+1],5,.12).slice(0,4):[h]);this.next().start("thunder",c(),{width:.9,life:.9,reveal:.08,flicker:c}),this.next().start("thunder",c(),{width:.5,life:.9,reveal:.08,flicker:c})}else{const l=e==="fire"?1:e==="water"?.9:.5;this.next().start(e,a,{width:(c,h)=>l*(.35+.65*Math.sin(Math.PI*Math.min(1,c*1.1)))*(1+h*.3),life:1,reveal:.35}),this.next().start(e,a.map(c=>[c[0],c[1],c[2]]),{width:l*.45,life:1,reveal:.3,delay:.06})}}ougiBurst(e,t,n,s=0){const r=n[0]-t[0],o=n[2]-t[2],a=Math.hypot(r,o)||1,l=[r/a,0,o/a],c=[l[2],0,-l[0]];if(e==="fire"){for(let h=0;h<3;h++)this.next().start("fire",[[n[0]+(h-1)*.3,0,n[2]],[n[0]+(h-1)*.2,1.5,n[2]],[n[0],3.2,n[2]]],{width:1.4,life:.8,reveal:.15,delay:h*.05});this.next().start("fire",Qo([n[0],1.2,n[2]],1.5,0,Math.PI*2,64,c,[0,1,0]),{width:h=>.9*(.3+h),life:.8,reveal:.2})}else if(e==="water"){const h=Array.from({length:72},(u,d)=>{const f=d/71,g=f*Math.PI*3.5,_=1.6-f*.9;return[n[0]+Math.cos(g)*_,.2+f*2.8,n[2]+Math.sin(g)*_]});this.next().start("water",h,{width:u=>.9*Math.sin(Math.PI*u)+.15,life:1.1,reveal:.45})}else if(e==="thunder"){const h=[t[0]-l[0]*.5,1,t[2]-l[2]*.5],u=[n[0]+l[0]*2,1,n[2]+l[2]*2];this.next().start("thunder",Ii(h,u,20,.35),{width:1.2,life:.6,reveal:.05,flicker:()=>Ii(h,u,20,.35)});for(let d=0;d<3;d++){const f=[n[0]+(Math.random()-.5)*1.5,6,n[2]+(Math.random()-.5)*1.5];this.next().start("thunder",Ii(f,[n[0],.9,n[2]],18,.5),{width:.8,life:.4,reveal:.04,delay:.1+d*.08,flicker:()=>Ii(f,[n[0],.9,n[2]],18,.5)})}}else{const h=(t[0]+n[0])/2,u=(t[2]+n[2])/2;for(let d=0;d<2;d++){const f=Array.from({length:64},(g,_)=>{const p=_/63,m=p*Math.PI*4.5+d*Math.PI,y=.45+p*.75;return[h+Math.cos(m)*y,.2+p*2.4,u+Math.sin(m)*y]});this.next().start("wind",f,{width:.45,life:.9,reveal:.35,delay:d*.08})}}}crackle(e){const t=[e[0]+(Math.random()-.5)*.5,e[1]+(Math.random()-.5)*.9,e[2]+(Math.random()-.5)*.5],n=[t[0]+(Math.random()-.5)*.6,t[1]+(Math.random()-.5)*.6,t[2]+(Math.random()-.5)*.6];this.next().start("thunder",Ii(t,n,6,.1),{width:.18,life:.09,reveal:.01})}update(e,t,n){for(const s of this.pool)s.update(e,t,n)}}const ln=[{id:"fire",element:"불",icon:"🔥",name:"아카네",style:"화염류",desc:"묵직한 한 방과 슈퍼아머로 밀어붙인다",combat:{type:"파워형",diff:1,stats:[5,4,2,2],range:"근거리",skill:{ic:"🔥",nm:"해방"},tip:"🔥 맞히거나 막히게 하면 <b>불씨</b>가 쌓여요 → <b>기술 버튼 = 화염 해방</b> (불씨 3개면 가드도 부숨) · ↓ 내려찍기는 슈퍼아머",traits:[["열기","맞히거나 막히게 할 때마다 불씨 +1 (최대 3). 3개면 다음 <b>↓ 내려찍기 · 뒤+↓ 염열 대도 · 앞+탭/가로 화염 돌진</b>이 <b>작열</b> — 피해 1.4배, 막아도 가드 브레이크"],["기술: 화염 해방","불씨를 터뜨려 주변을 날림 (슈퍼아머, 불씨당 피해↑, 3개면 가드 브레이크)"],["불굴","↓ 내려찍기 · 화염 돌진 · 염열 대도에 <b>슈퍼아머</b>"],["약점","발이 느리고 구르기가 무거움, 흐름 연계 최대 4"]]},colors:{gi:"#a8261e",pants:"#2a1512",belt:"#f0b03a",skin:"#e3b089",hair:"#3a1410",accent:"#ff8a2a",glove:"#3a1d14",wrap:"#e9dcc4",dark:"#0a0a10",tsuka:"#1b1210",tsuba:"#c9962e",blade:"#e9e2da"},trail:[[1,.35,.08],[1,.85,.35]],rim:[.75,.3,.1],glow:[.35,.09,0],ougi:{name:"홍련륜",hanja:"紅蓮輪",shape:"fire"},vrm:{model:"girl",hair:[.78,.13,.08],eyes:[1,.55,.12]}},{id:"water",element:"물",icon:"🌊",name:"미즈하",style:"수류",desc:"받아넘기고, 끊기지 않고 흐른다",combat:{type:"반격형",diff:3,stats:[2,3,3,3],range:"중거리",skill:{ic:"🌊",nm:"물거울"},tip:"🌊 상대가 휘두를 때 <b>기술 버튼(또는 뒤+탭) = 물거울</b> → 상·중단을 흘리고 자동 반격 · 탭→가로×3 4연격",traits:[["물거울","<b>기술 버튼</b> 또는 <b>뒤 + 탭</b> = 반격 자세. 상단·중단 공격을 흘리고 <b>자동 반격(다운)</b>. 하단에는 뚫려서 카운터"],["흐름","흐름 연계 <b>최대 7</b>, 이어질 때 준비 동작 40% 생략, 연계 피해 보정이 5타째부터"],["받아넘기기","패링 입력 여유 1.5배, 패링당한 상대가 더 오래 휘청, 카운터 피해 1.4배"],["약점","한 방 피해가 약함"]]},colors:{gi:"#1f4c8c",pants:"#141c2c",belt:"#d8e6f2",skin:"#e6b892",hair:"#141822",accent:"#4fb6ff",glove:"#152238",wrap:"#d9e2ea",dark:"#0a0a10",tsuka:"#101826",tsuba:"#7d8ea3",blade:"#dfe9f2"},trail:[[.1,.4,1],[.7,.95,1]],rim:[.2,.45,.8],glow:[.04,.16,.35],ougi:{name:"청룡류",hanja:"靑龍流",shape:"water"},vrm:{model:"girl",hair:[.12,.17,.36],eyes:[.25,.55,1]}},{id:"thunder",element:"번개",icon:"⚡",name:"라이카",style:"뇌명류",desc:"가장 빠른 칼, 타이밍이 곧 위력",combat:{type:"속도·테크닉형",diff:4,stats:[4,1,5,4],range:"원거리 돌진",skill:{ic:"⚡",nm:"발도"},tip:"⚡ <b>기술 버튼 = 발도 자세</b> → <b>탭</b>하면 멀리서 순간 베기 · 맞는 순간(화면이 멈출 때) 바로 다음을 그으면 <b>뇌속</b>",traits:[["발도","<b>기술 버튼</b>(또는 스틱을 놓고 <b>0.5초 가만히</b>) → 칼을 넣음. 다음 <b>탭 = 발도 일섬</b>(먼 거리 순간 베기), 다른 베기도 빨라지고 1.2배. 움직이거나 가드하면 풀림"],["뇌속","베기가 <b>맞은 순간(화면이 멈춘 동안)</b> 다음을 그으면 거의 즉발 + 1.3배 + 연계 보정 없음"],["앞 + 탭","<b>뇌격 찌르기</b> — 멀리서 파고드는 찌르기"],["약점","맷집이 가장 약함"]]},colors:{gi:"#d29a17",pants:"#2b2414",belt:"#f5f0dc",skin:"#efc59a",hair:"#f2d24a",accent:"#fff07a",glove:"#3a3016",wrap:"#f0e8cc",dark:"#0a0a10",tsuka:"#2a2210",tsuba:"#e7d36a",blade:"#f3efe0"},trail:[[.25,.65,1],[.8,.95,1]],rim:[.8,.65,.15],glow:[.15,.3,.45],ougi:{name:"섬광뇌절",hanja:"閃光雷絶",shape:"thunder"},vrm:{model:"boy",hair:[1,.84,.22],eyes:[1,.72,.2]}},{id:"wind",element:"바람",icon:"🍃",name:"하야테",style:"질풍류",desc:"피하면서 벤다, 잡히지 않는 바람",combat:{type:"기동형",diff:2,stats:[3,3,4,5],range:"돌아들기",skill:{ic:"🍃",nm:"질풍"},tip:"🍃 <b>기술 버튼 = 질풍 걸음</b>(스틱 좌우로 방향) → 상대 옆으로 돌아 들어감 · 구르는 중 베기 = <b>선풍참</b>",traits:[["기술: 질풍 걸음","상대 주위를 크게 돌아 옆·뒤로 파고드는 무적 이동, 도중에 베면 선풍참"],["선풍","<b>구르는 도중 아무 베기</b> = 선풍참 (360° 회전베기)"],["바람 걸음","베기가 닿은 뒤(맞든 막히든) <b>회피</b>로 후딜을 끊고 빠짐"],["질풍","구르기가 싸고 무적이 김, 모든 베기의 유도가 강함"],["약점","큰 한 방이 없음"]]},colors:{gi:"#2f7a46",pants:"#15241a",belt:"#e8eedc",skin:"#deae86",hair:"#d8e6dc",accent:"#7cf0a8",glove:"#16301f",wrap:"#e2eadc",dark:"#0a0a10",tsuka:"#0f2016",tsuba:"#8fb59a",blade:"#e4efe8"},trail:[[.15,.85,.45],[.8,1,.9]],rim:[.2,.7,.4],glow:[.04,.3,.12],ougi:{name:"선풍천열",hanja:"旋風天裂",shape:"wind"},vrm:{model:"boy",hair:[.9,.93,.9],eyes:[.35,.9,.5]}}],vp=Object.fromEntries(ln.map(i=>[i.id,i])),r1=i=>"#"+i.map(e=>Math.round(Math.min(1,e)*255).toString(16).padStart(2,"0")).join("");function Ih(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let o=0;const a=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let y=0,S=a.length;y<S;y++){const v=a[y],E=i.attributes[v];l[v]=new E.constructor(new E.array.constructor(E.count*E.itemSize),E.itemSize,E.normalized);const R=i.morphAttributes[v];R&&(c[v]||(c[v]=[]),R.forEach((w,L)=>{const x=new w.array.constructor(w.count*w.itemSize);c[v][L]=new w.constructor(x,w.itemSize,w.normalized)}))}const f=e*.5,g=Math.log10(1/e),_=Math.pow(10,g),p=f*_;for(let y=0;y<r;y++){const S=n?n.getX(y):y;let v="";for(let E=0,R=a.length;E<R;E++){const w=a[E],L=i.getAttribute(w),x=L.itemSize;for(let M=0;M<x;M++)v+=`${~~(L[u[M]](S)*_+p)},`}if(v in t)h.push(t[v]);else{for(let E=0,R=a.length;E<R;E++){const w=a[E],L=i.getAttribute(w),x=i.morphAttributes[w],M=L.itemSize,C=l[w],U=c[w];for(let O=0;O<M;O++){const D=u[O],G=d[O];if(C[G](o,L[D](S)),x)for(let V=0,Y=x.length;V<Y;V++)U[V][G](o,x[V][D](S))}}t[v]=o,h.push(o),o++}}const m=i.clone();for(const y in i.attributes){const S=l[y];if(m.setAttribute(y,new S.constructor(S.array.slice(0,o*S.itemSize),S.itemSize,S.normalized)),y in c)for(let v=0;v<c[y].length;v++){const E=c[y][v];m.morphAttributes[y][v]=new E.constructor(E.array.slice(0,o*E.itemSize),E.itemSize,E.normalized)}}return m.setIndex(h),m}function _d(i,e){if(e===Ym)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===kc||e===Df){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===kc)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class xp extends _r{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new h1(t)}),this.register(function(t){return new u1(t)}),this.register(function(t){return new M1(t)}),this.register(function(t){return new y1(t)}),this.register(function(t){return new S1(t)}),this.register(function(t){return new f1(t)}),this.register(function(t){return new p1(t)}),this.register(function(t){return new m1(t)}),this.register(function(t){return new g1(t)}),this.register(function(t){return new c1(t)}),this.register(function(t){return new _1(t)}),this.register(function(t){return new d1(t)}),this.register(function(t){return new x1(t)}),this.register(function(t){return new v1(t)}),this.register(function(t){return new a1(t)}),this.register(function(t){return new b1(t)}),this.register(function(t){return new w1(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Kr.extractUrlBase(e);o=Kr.resolveURL(c,this.path)}else o=Kr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Qf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Mp){try{o[ft.KHR_BINARY_GLTF]=new T1(e)}catch(u){s&&s(u);return}r=JSON.parse(o[ft.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new F1(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ft.KHR_MATERIALS_UNLIT:o[u]=new l1;break;case ft.KHR_DRACO_MESH_COMPRESSION:o[u]=new E1(r,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:o[u]=new A1;break;case ft.KHR_MESH_QUANTIZATION:o[u]=new R1;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function o1(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class a1{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new pe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],pn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new tp(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Eh(h),c.distance=u;break;case"spot":c=new _g(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Kn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class l1{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return ti}extendParams(e,t,n){const s=[];e.color=new pe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],pn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,an))}return Promise.all(s)}}class c1{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class h1{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(a,a)}return Promise.all(r)}}class u1{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class d1{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class f1{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],pn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,an)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class p1{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class m1{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new pe().setRGB(a[0],a[1],a[2],pn),Promise.all(r)}}class g1{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class _1{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new pe().setRGB(a[0],a[1],a[2],pn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,an)),Promise.all(r)}}class v1{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class x1{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class M1{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class y1{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class S1{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class b1{constructor(e){this.name=ft.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class w1{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Nn.TRIANGLES&&c.mode!==Nn.TRIANGLE_STRIP&&c.mode!==Nn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const _=new Oe,p=new A,m=new Pe,y=new A(1,1,1),S=new Bc(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,v),l.SCALE&&y.fromBufferAttribute(l.SCALE,v),S.setMatrixAt(v,_.compose(p,m,y));for(const v in l)if(v==="_COLOR_0"){const E=l[v];S.instanceColor=new Fc(E.array,E.itemSize,E.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);At.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Mp="glTF",Pr=12,vd={JSON:1313821514,BIN:5130562};class T1{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Pr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Mp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Pr,r=new DataView(e,Pr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===vd.JSON){const c=new Uint8Array(e,Pr+o,a);this.content=n.decode(c)}else if(l===vd.BIN){const c=Pr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class E1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Zc[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Zc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=or[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}u(f)},a,c,pn,d)})})}}class A1{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class R1{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}}class yp extends So{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,_=g-c,p=-2*f+3*d,m=f-d,y=1-p,S=m-d+u;for(let v=0;v!==a;v++){const E=o[_+v+a],R=o[_+v+l]*h,w=o[g+v+a],L=o[g+v]*h;r[v]=y*E+S*R+p*w+m*L}return r}}const C1=new Pe;class P1 extends yp{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return C1.fromArray(r).normalize().toArray(r),r}}const Nn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},or={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xd={9728:fn,9729:Rn,9984:Af,9985:ha,9986:zr,9987:Qn},Md={33071:Bi,33648:ya,10497:Ms},Pl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},L1={CUBICSPLINE:void 0,LINEAR:oo,STEP:ro},Ll={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function I1(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new wh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:vi})),i.DefaultMaterial}function as(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Kn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function U1(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function N1(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function D1(i){let e;const t=i.extensions&&i.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Il(t.attributes):e=i.indices+":"+Il(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Il(i.targets[n]);return e}function Il(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Jc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function k1(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const O1=new Oe;class F1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new o1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator!="undefined"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&s<17||r&&o<98?this.textureLoader=new pg(this.options.manager):this.textureLoader=new Mg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return as(r,a,s),Kn(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Kr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Pl[s.type],a=or[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new it(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Pl[s.type],c=or[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,p;if(f&&f!==u){const m=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let S=t.cache.get(y);S||(_=new c(a,m*f,s.count*f/h),S=new Mh(_,f/h),t.cache.add(y,S)),p=new Mo(S,l,d%f/h,g)}else a===null?_=new c(s.count*l):_=new c(a,d,s.count*l),p=new it(_,l,g);if(s.sparse!==void 0){const m=Pl.SCALAR,y=or[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,E=new y(o[1],S,s.sparse.count*m),R=new c(o[2],v,s.sparse.count*l);a!==null&&(p=new it(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let w=0,L=E.length;w<L;w++){const x=E[w];if(p.setX(x,R[w*l]),l>=2&&p.setY(x,R[w*l+1]),l>=3&&p.setZ(x,R[w*l+2]),l>=4&&p.setW(x,R[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=xd[d.magFilter]||Rn,h.minFilter=xd[d.minFilter]||Qn,h.wrapS=Md[d.wrapS]||Ms,h.wrapT=Md[d.wrapT]||Ms,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==fn&&h.minFilter!==Rn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const p=new Kt(_);p.needsUpdate=!0,d(p)}),t.load(Kr.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Kn(u,o),u.userData.mimeType=o.mimeType||k1(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ft.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new jf,Cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Rs,Cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return wh}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[ft.KHR_MATERIALS_UNLIT]){const u=s[ft.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new pe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],pn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,an)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Mn);const h=r.alphaMode||Ll.OPAQUE;if(h===Ll.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ll.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ti&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ke(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==ti&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ti){const u=r.emissiveFactor;a.emissive=new pe().setRGB(u[0],u[1],u[2],pn)}return r.emissiveTexture!==void 0&&o!==ti&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,an)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Kn(u,r),t.associations.set(u,{materials:e}),r.extensions&&as(s,u,r),u})}createUniqueName(e){const t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return yd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=D1(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=yd(new Rt,c,t),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?I1(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],p=o[f];let m;const y=c[f];if(p.mode===Nn.TRIANGLES||p.mode===Nn.TRIANGLE_STRIP||p.mode===Nn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new co(_,y):new wt(_,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Nn.TRIANGLE_STRIP?m.geometry=_d(m.geometry,Df):p.mode===Nn.TRIANGLE_FAN&&(m.geometry=_d(m.geometry,kc));else if(p.mode===Nn.LINES)m=new yo(_,y);else if(p.mode===Nn.LINE_STRIP)m=new Ba(_,y);else if(p.mode===Nn.LINE_LOOP)m=new Q0(_,y);else if(p.mode===Nn.POINTS)m=new qf(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&N1(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Kn(m,r),p.extensions&&as(s,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&as(s,u[0],r),u[0];const d=new Ft;r.extensions&&as(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new xn(Dt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ah(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Kn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Oe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Yi(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],g=s.samplers[f.sampler],_=f.target,p=_.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],p=u[4],m=[];for(let S=0,v=d.length;S<v;S++){const E=d[S],R=f[S],w=g[S],L=_[S],x=p[S];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const M=n._createAnimationTracks(E,R,w,L,x);if(M)for(let C=0;C<M.length;C++)m.push(M[C])}const y=new Aa(r,void 0,m);return Kn(y,s),y})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,O1)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new $r:c.length>1?h=new Ft:c.length===1?h=c[0]:h=new At,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Kn(h,r),r.extensions&&as(n,h,r),r.matrix!==void 0){const u=new Oe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Ft;n.name&&(r.name=s.createUniqueName(n.name)),Kn(r,n),n.extensions&&as(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof Cn||d instanceof Kt)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Ui[r.path]===Ui.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Ui[r.path]){case Ui.weights:c=pr;break;case Ui.rotation:c=bs;break;case Ui.translation:case Ui.scale:c=ws;break;default:n.itemSize===1?c=pr:c=ws;break}const h=s.interpolation!==void 0?L1[s.interpolation]:oo,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Ui[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Jc(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof bs?P1:yp;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function B1(i,e,t){const n=e.attributes,s=new Mi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new A(l[0],l[1],l[2]),new A(c[0],c[1],c[2])),a.normalized){const h=Jc(or[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new A,l=new A;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Jc(or[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new ii;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function yd(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Zc[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return gt.workingColorSpace!==pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${gt.workingColorSpace}" not supported.`),Kn(i,e),B1(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?U1(i,e.targets,t):i})}const V1={stab:{clip:"stab",t0:.12,hit:.38,t1:.85},slash:{clip:"slash",t0:.2,hit:.62,t1:1.15},slash3:{clip:"slash3",t0:.35,hit:.86,t1:1.45},slash4:{clip:"slash4",t0:.4,hit:.72,t1:1.2},slash5:{clip:"slash5",t0:.1,hit:.45,t1:1},attack:{clip:"attack",t0:.15,hit:.43,t1:1},kick2:{clip:"kick2",t0:.3,hit:.75,t1:1.3},slide:{clip:"slide",t0:.75,hit:1.25,t1:2},spinA:{clip:"spin",t0:0,hit:.43,t1:.9},spinB:{clip:"spin",t0:.6,hit:1.08,t1:1.6},jump:{clip:"jump_attack",t0:.2,hit:1.2,t1:2},inward:{clip:"inward",t0:.75,hit:1.18,t1:1.75},kickslash:{clip:"kick",t0:.05,hit:.32,t1:.75},overhead:{clip:"casting",t0:1.95,hit:2.33,t1:2.85},mirror:{clip:"guard",t0:0,hit:.18,t1:.45},erupt:{clip:"power_up",t0:0,hit:.45,t1:1.3},ss2a:{clip:"ss_slash2",t0:.3,hit:.67,t1:.95},ss2c:{clip:"ss_slash2",t0:1.6,hit:2.43,t1:2.95},ss_slam:{clip:"ss_cast",t0:1.25,hit:1.73,t1:2.5},ss_leap:{clip:"ss_slash4",t0:.45,hit:1.4,t1:2},ss_smash:{clip:"ss_attack1",t0:.35,hit:1.17,t1:1.9},draw_cut:{clip:"sw_draw1",t0:0,hit:.2,t1:.5},ss_slash:{clip:"ss_slash",t0:.2,hit:.56,t1:1.1},ss_low:{clip:"ss_slash2",t0:.55,hit:.88,t1:1.3},ss_slash3:{clip:"ss_slash3",t0:.45,hit:.8,t1:1.3},ss_crouch:{clip:"ss_slash5",t0:.2,hit:.55,t1:1},ss_over:{clip:"ss_attack2",t0:.2,hit:.55,t1:1.05},ss_mid:{clip:"ss_attack3",t0:.4,hit:.78,t1:1.3},ss_quick:{clip:"ss_attack4",t0:.12,hit:.28,t1:.7}},Xr={stab:["stab"],combo2:{L:["kickslash"],R:["slash4"]},combo3:{L:["spinA"],R:["slash3"]},slash_h:{L:["slash","kickslash"],R:["slash3","slash4"]},spin:{L:["spinA"],R:["slash4"]},slash_low:["slash5"],slash_down:["overhead"],slash_up:["attack"],thrust:["kick2"],sweep:["slide"],helm:["jump"],blaze_rush:{L:["spinA"],R:["slash3"]},mirror:["mirror"],mirror_cut:{L:["spinA"],R:["slash4"]},iai_flash:["draw_cut"],raiko:["stab","ss_quick"],gale:{L:["spinA"],R:["spinB"]},f_stab:["stab"],f_combo2:{L:["kickslash"],R:["slash4"]},f_combo3:{L:["spinA"],R:["slash3"]},f_slash:{L:["slash","kickslash"],R:["slash3"]},f_rise:["attack"],f_down:["overhead"],f_low:["slash5"],f_sweep:["slide"],f_spin:{L:["spinA"],R:["spinB"]},f_helm:["jump"],f_erupt:["erupt"],w_stab:["stab"],w_flow2:{L:["kickslash"],R:["ss_mid"]},w_flow3:{L:["spinA"],R:["slash4"]},w_flow4:["spinB"],w_slash:{L:["spinA","slash"],R:["slash4","ss_slash3"]},w_rise:["attack"],w_down:["overhead"],w_low:["ss_crouch"],w_thrust:["stab"],w_sweep:["slide"],w_spin:["spinB"],w_tide:{L:["slash"],R:["slash3"]},t_stab:["ss_quick"],t_rai2:["ss2a"],t_rai3:["ss2c"],t_slash:{L:["ss_low","ss_crouch"],R:["inward","ss_mid"]},t_rise:["ss_slash3"],t_down:["ss_slam"],t_low:["ss_crouch"],t_slide:["slide"],t_leap:["ss_leap"],t_heaven:["ss_smash"],n_stab:["stab"],n_gale2:{L:["spinA"],R:["ss_slash3"]},n_gale3:["spinB"],n_slash:{L:["spinA","kick2"],R:["ss_slash3","slash3"]},n_rise:["attack"],n_down:["ss_leap"],n_low:["slash5"],n_dash:["stab"],n_sweep:["slide"],n_spin:{L:["spinA"],R:["spinB"]},n_sky:["ss_smash"]},z1={walk_f:"ss_walk_f",walk_b:"ss_walk_b",strafe_l:"ss_strafe1",strafe_r:"ss_strafe2",run:"ss_run",guard:"ss_block_idle",crouch:"ss_crouch_idle"},Ra={fire:{idle:"idle",fidget:["idle3","idle4"],loco:{},moves:Xr},water:{idle:"idle2",fidget:["idle5"],loco:{guard:"gs_block3"},moves:Xr},thunder:{idle:"ss_idle",fidget:["ss_idle4"],loco:z1,moves:Xr},wind:{idle:"ss_idle4",fidget:["idle3"],loco:{run:"gs_run2",walk_f:"ss_walk_f",walk_b:"ss_walk_b"},moves:Xr}};function H1(i,e,t,n="R"){let s=(Ra[i]||Ra.fire).moves[e]||Xr[e];return Array.isArray(s)||(s=s[n]||s.R),V1[s[t%s.length]]}const G1=i=>Math.cos(i||0)<0?"L":"R",Sd=2.2;function W1(i,e,t){const n=e.startup,s=e.active,r=e.total-n-s,o=Math.max(i.t0,i.hit-Sd*n/60);if(t<=n)return o+(i.hit-o)*(t/n);const a=Math.min(i.t1,i.hit+.06);if(t<=n+s)return i.hit+(a-i.hit)*((t-n)/s);const l=Math.min(i.t1,a+Sd*r/60);return a+(l-a)*Math.min(1,(t-n-s)/Math.max(1,r))}const Bn=[.2,.19,-.96],Sp={...Object.fromEntries(["ss_walk_f","ss_walk_b","ss_run","ss_strafe1","ss_strafe2","ss_strafe3","ss_strafe4","ss_block_idle","ss_crouch_idle","ss_idle2","ss_idle3","ss_idle4","ss_cast","ss_cast2","ss_slash4","ss_attack1","ss_crouching","ss_crouching2","ss_crouching3","ss_jump","ss_jump2","ss_power"].map(i=>[i,Bn])),stab:[.05,.97,.22],inward:Bn,ss_idle:Bn,ss_slash:Bn,ss_slash2:Bn,ss_slash3:Bn,ss_slash5:Bn,ss_attack2:Bn,ss_attack3:Bn,ss_attack4:Bn,ss_kick:Bn};let ho=null;function X1(i){return new xp().loadAsync(i).then(e=>(ho=e,e))}const bd=()=>!!ho,Qc=()=>ho,j1=(()=>{const i=new yh(new Uint8Array([90,90,90,255,175,175,175,255,255,255,255,255]),3,1);return i.minFilter=i.magFilter=fn,i.needsUpdate=!0,i})(),q1=i=>new pe(i);function zi(i,e){const t=new eg({color:q1(i),gradientMap:j1});return t.onBeforeCompile=n=>{n.uniforms.uRim=e,n.fragmentShader=`uniform vec3 uRim;
`+n.fragmentShader.replace("#include <opaque_fragment>",`outgoingLight += uRim * smoothstep(.55,.75,1.0 - max(dot(normal, normalize(vViewPosition)), 0.0));
#include <opaque_fragment>`)},t.customProgramCacheKey=()=>"toonRim",t}const uo=new ti({color:526348,side:dn});uo.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <begin_vertex>","vec3 transformed = position + normal * 0.011;")};uo.customProgramCacheKey=()=>"outline";const bp=new A(0,.08,0),Ca=new A(.81,.23,-.53).normalize(),gs={base:.14,tip:1},Qr=new Pe().setFromUnitVectors(new A(0,0,1),Ca);function wd(i,e){const t=i.children.find(s=>s.name==="mixamorig"+e)||i.children[0],n=t?t.position.clone():new A(0,.1,0);return{len:n.length(),q:new Pe().setFromUnitVectors(new A(0,1,0),n.clone().normalize())}}const Y1=new A;class wp{constructor(e,t,n=!1){if(this.scene=e,this.ch=t,!n){this.group=new Ft,this.pivot=new Ft,this.group.add(this.pivot),this.skel=ho.scene.children[0].clone(!0),this.inner=new Ft,this.inner.add(this.skel),this.pivot.add(this.inner),this.pivot.position.y=.55,this.inner.position.y=-.55,e.add(this.group),this.bone=s=>this.skel.name==="mixamorig"+s?this.skel:this.skel.getObjectByName("mixamorig"+s),this.rim={value:new A(...t.rim).multiplyScalar(.9)},this.mats={blade:zi(t.colors.blade,this.rim)},this.buildBody(),this.mats.body=this.bodyMat,this.mixer=new np(this.skel),this.clips={},this.actions={};for(const s of ho.animations){this.clips[s.name]=s;const r=this.mixer.clipAction(s);r.play(),r.paused=!0,r.enabled=!1,r.setEffectiveWeight(0),this.actions[s.name]=r}this.root=new Float32Array(16),this.reset()}}buildBody(){const e=this.ch.colors,t=new Map,n=(x,M,C)=>{const U=x+"|"+M;t.has(U)||t.set(U,{bone:this.bone(x),color:M,g:new on}),C(t.get(U).g)},s=(x,M,C,U,O,D=0,G=0)=>{const V=this.bone(x),{len:Y,q:B}=wd(V,M);n(x,C,Q=>{const ie=Q.v.length;Q.cyl(0,G,0,U,O,Y+D,8),Q.rot=Q.rot||[],Q.rot.push([ie,Q.v.length,B])})},r=(x,M,C,U,O,D,G,V,Y=0)=>n(x,M,B=>B.box(C,U,O,D,G,V,Y));for(const x of["Left","Right"]){s(x+"UpLeg","Leg","pants",.1,.11,.02,-.04),s(x+"Leg","Foot","pants",.1,.15,-.04),s(x+"Leg","Foot","wrap",.055,.05,.02,0);const M=this.bone(x+"Foot"),{len:C,q:U}=wd(M,x+"ToeBase");n(x+"Foot","dark",O=>{const D=O.v.length;O.box(0,C*.5,-.02,.09,C+.1,.05),O.rot=O.rot||[],O.rot.push([D,O.v.length,U])})}r("Hips","pants",0,.02,0,.32,.18,.22),r("Hips","belt",0,.1,0,.33,.07,.23),s("Spine","Spine1","dark",.14,.15),s("Spine1","Spine2","dark",.15,.16),r("Spine2","dark",0,.1,0,.34,.22,.21),r("Spine2","wrap",0,.13,.095,.1,.16,.03),r("Spine2","gi",0,-.14,-.18,.46,.66,.03),r("Spine2","gi",.205,-.14,-.01,.07,.66,.33),r("Spine2","gi",-.205,-.14,-.01,.07,.66,.33),r("Spine2","gi",0,.2,-.03,.46,.06,.32),r("Spine2","accent",0,-.45,-.185,.47,.06,.035),r("Spine2","accent",.205,-.45,-.01,.075,.06,.335),r("Spine2","accent",-.205,-.45,-.01,.075,.06,.335),s("Neck","Head","skin",.045,.045),n("Head","skin",x=>x.sphere(0,.1,.01,.105,10,8)),n("Head","dark",x=>{x.box(.038,.1,.1,.03,.035,.012),x.box(-.038,.1,.1,.03,.035,.012)}),n("Head","hair",x=>{x.box(0,.18,-.01,.23,.08,.24),x.box(0,.11,-.1,.22,.18,.06);for(const[M,C,U]of[[.08,.06,.5],[-.08,.06,-.5],[0,.09,0],[.1,-.06,.9],[-.1,-.06,-.9],[0,-.12,0]])x.box(M,.24,C,.06,.1,.06,U);x.box(.07,.15,.1,.05,.08,.03),x.box(-.06,.16,.1,.06,.06,.03)}),n("Head","accent",x=>x.box(0,.165,0,.245,.025,.25));for(const x of["Left","Right"])s(x+"Arm","ForeArm","gi",.065,.11,.02),s(x+"ForeArm","Hand","skin",.045,.038),s(x+"ForeArm","Hand","wrap",.05,.045,-.12,.12),n(x+"Hand","skin",M=>M.box(0,.06,0,.08,.11,.05));{const x=new Pe().setFromUnitVectors(new A(0,0,1),new A(.12,-.4,-1).normalize());n("Hips","tsuka",M=>{const C=M.v.length;M.box(0,0,.38,.045,.05,.86),M.rot=M.rot||[],M.rot.push([C,M.v.length,x,new A(.18,.08,.1)])}),n("Hips","tsuba",M=>{const C=M.v.length;M.box(0,0,0,.05,.055,.04),M.rot=M.rot||[],M.rot.push([C,M.v.length,x,new A(.18,.08,.1)])})}n("RightHand","blade_tsuka",x=>{const M=x.v.length;x.box(0,0,-.09,.034,.04,.3),x.rot=x.rot||[],x.rot.push([M,x.v.length,Qr])}),n("RightHand","blade_tsuba",x=>{const M=x.v.length;x.box(0,0,.075,.095,.085,.016),x.rot=x.rot||[],x.rot.push([M,x.v.length,Qr])}),n("RightHand","blade",x=>{const M=x.v.length,C=5,U=gs.base-.06,O=gs.tip;for(let D=0;D<C;D++){const G=U+(O-U)*D/C,V=U+(O-U)*(D+1)/C,Y=(G+V)/2;x.box(0,.03*Y*Y,Y,.009,D===C-1?.022:.034,V-G+.004)}x.rot=x.rot||[],x.rot.push([M,x.v.length,Qr])}),this.group.updateMatrixWorld(!0);const o=[];this.skel.traverse(x=>o.push(x));const a=new Map(o.map((x,M)=>[x,M])),l=[],c=[],h=[],u=[],d=[],f=[],g=new A,_=new A,p=new Be,m=new pe;for(const{bone:x,color:M,g:C}of t.values()){if(C.rot)for(const[D,G,V,Y]of C.rot)for(let B=D;B<G;B+=3)g.set(C.v[B],C.v[B+1],C.v[B+2]).applyQuaternion(V),Y&&g.add(Y),C.v[B]=g.x,C.v[B+1]=g.y,C.v[B+2]=g.z,_.set(C.n[B],C.n[B+1],C.n[B+2]).applyQuaternion(V),C.n[B]=_.x,C.n[B+1]=_.y,C.n[B+2]=_.z;if(M.startsWith("blade")){f.push({color:M,g:C});continue}const U=x.matrixWorld;p.getNormalMatrix(U),m.set(e[M]);const O=a.get(x);for(let D=0;D<C.v.length;D+=3)g.set(C.v[D],C.v[D+1],C.v[D+2]).applyMatrix4(U),l.push(g.x,g.y,g.z),_.set(C.n[D],C.n[D+1],C.n[D+2]).applyMatrix3(p).normalize(),c.push(_.x,_.y,_.z),h.push(m.r,m.g,m.b),u.push(O,0,0,0),d.push(1,0,0,0)}const y=new Rt;y.setAttribute("position",new Ht(l,3)),y.setAttribute("normal",new Ht(c,3)),y.setAttribute("color",new Ht(h,3)),y.setAttribute("skinIndex",new Fa(u,4)),y.setAttribute("skinWeight",new Ht(d,4)),this.skeleton=new Yi(o),this.bodyMat=zi("#ffffff",this.rim),this.bodyMat.vertexColors=!0;const S=new co(y,this.bodyMat),v=new Rt;v.setAttribute("position",y.getAttribute("position")),v.setAttribute("skinIndex",y.getAttribute("skinIndex")),v.setAttribute("skinWeight",y.getAttribute("skinWeight"));const E=Ih(v,1e-4);E.computeVertexNormals();const R=new co(E,uo);for(const x of[S,R])x.frustumCulled=!1,this.inner.add(x),x.bind(this.skeleton,new Oe);this.meshes=[S,R],this.bladePivot=new Ft,this.bladePivot.position.copy(bp),this.bone("RightHand").add(this.bladePivot);const w=zi(e.tsuka,this.rim),L=zi(e.tsuba,this.rim);this.mats.hilt=w,this.mats.guard=L;for(const{color:x,g:M}of f){const C=new wt(M.build(),x==="blade"?this.mats.blade:x==="blade_tsuka"?w:L);this.bladePivot.add(C),this.meshes.push(C)}this.bladeAdj={};for(const[x,M]of Object.entries(Sp))this.bladeAdj[x]=new Pe().setFromUnitVectors(Ca,new A(...M).normalize())}reset(){this.cur=null,this.prev=null,this.alpha=1,this.key="",this.fidgetN=0,this.locoT=0,this.walkF=0,this.walkS=0,this.loopT=0,this.lastState="",this.lastF=0,this.downT0=0,this.rootH=.95,this.visYaw=void 0}dur(e){return this.clips[e]?this.clips[e].duration:1}target(e,t){const n=e.state,s=e.f,r=Ra[this.ch.id]||Ra.fire,o=a=>r.loco&&r.loco[a]&&this.clips[r.loco[a]]?r.loco[a]:a;switch(n){case"idle":{if(t&&t.phase==="intro"){const d=this.dur("withdraw")-.02,f=Math.max(0,d-t.phaseT/55*d);return{key:"draw",L:[["withdraw",f,1]],sheathed:f>1,fade:8}}if(e.iaiReady)return{key:"iai",L:[["withdraw",Math.min(1.35,this.dur("withdraw")-.05),1]],sheathed:!0,fade:10};if(e.guard){const d=o(e.crouch?"crouch":"guard");return{key:d,L:[[d,this.loopT%this.dur(d),1]]}}const a=this.walkF,l=this.walkS,c=Math.min(1,Math.abs(a)+Math.abs(l));if(c<.05&&e.idleF>200){const d=Math.floor((e.idleF-200)/480),f=r.fidget[(d+this.fidgetN)%r.fidget.length],g=(e.idleF-200)%480/60;if(g<this.dur(f)-.05)return{key:"fidget"+d,L:[[f,g,1]],fade:12}}const h=r.idle,u=[[h,this.loopT%this.dur(h),1-c]];if(c>.01){const d=c/(Math.abs(a)+Math.abs(l)),f=v=>this.locoT%this.dur(v),g=t&&t.f[1-e.idx],_=g&&Math.hypot(g.x-e.x,g.z-e.z)>3.4,p=o(_?"run":"walk_f"),m=o("walk_b"),y=o("strafe_r"),S=o("strafe_l");a>0?u.push([p,f(p),a*d]):a<0&&u.push([m,f(m),-a*d]),l>0?u.push([y,f(y),l*d]):l<0&&u.push([S,f(S),-l*d])}return{key:"loco",L:u,fade:6}}case"attack":{const a=H1(this.ch.id,e.move.id,e.moveUid,G1(e.swipeAng));return{key:"atk"+e.moveUid,L:[[a.clip,W1(a,e.move,s),1]],fade:e.chainN>0?6:3}}case"hitstun":{const a=e.hitLevel==="high"?"hit_head":e.hitLevel==="low"?"hit_low":"hit_body";return{key:"hit",L:[[a,Math.min(1,s/Math.max(1,e.stun))*this.dur(a)*.7,1]],fade:2}}case"blockstun":{const a=e.crouch?"crouch_block_hit":"block_hit";return{key:a,L:[[a,Math.min(1,s/Math.max(1,e.stun))*this.dur(a)*.8,1]],fade:2}}case"parried":return{key:"parried",L:[["hit_head",Math.min(1,s/52)*this.dur("hit_head"),1]],fade:3};case"launched":return{key:"death",L:[["death",Math.min(.85,s/60),1]],fade:3};case"down":case"ko":{const a=n==="ko"&&e.launchUid%2===1?"death2":"death";return this.lastState!=="down"&&this.lastState!=="ko"&&(this.downT0=this.cur&&this.cur.L[0][0]===a?this.cur.L[0][1]:a==="death2"?.3:.6),{key:a,L:[[a,Math.min(this.dur(a)-.01,this.downT0+s/60*1.4),1]],fade:6}}case"getup":return{key:"death",L:[["death",(this.dur("death")-.01)*(1-Math.min(1,s/20)),1]]};case"roll":return{key:"roll",L:[["roll",.55+Math.min(1,s/26)*.95,1]],fade:2};case"ougi":return s<22?{key:"ougiDash",L:[["run",s/60*1.6%this.dur("run"),1]],fade:3}:{key:"ougiMiss",L:[["hit_body",Math.min(1,(s-22)/46)*this.dur("hit_body")*.8,1]],fade:5};case"ougiCast":return{key:"ougiCast",L:[["power_up",s/60%this.dur("power_up"),1]],fade:8};case"ougiHeld":return{key:"ougiHeld",L:[["hit_body",.3,1]],fade:6};case"ougiStrike":return this.ougiMove(e,t);case"ougiEnd":return{key:"ougiEnd",L:[[r.idle,this.loopT%this.dur(r.idle),1]],fade:10};case"win":return{key:"win",L:[["withdraw",Math.min(this.dur("withdraw")-.01,s/60),1]],fade:6,sheathed:s>62}}return{key:"idle",L:[[r.idle,0,1]]}}ougiMove(e,t){const n=Math.min(54,e.f),s=n/54,r=t?t.f[1-e.idx]:e,o=r.x-e.x,a=r.z-e.z,l=Math.hypot(o,a)||1,c=o/l,h=a/l,u=(g,_,p)=>{const m=Math.max(0,Math.min(1,(p-g)/(_-g)));return m*m*(3-2*m)};let d,f=[0,0,0];switch(this.ch.id){case"fire":{d=[["jump_attack",.2+1.45*s,1]];const g=u(.15,.7,s)*Math.max(0,l-1.1);f=[c*g,Math.sin(Math.PI*u(.1,.75,s))*1,h*g];break}case"water":{d=n<18?[["slash4",.35+n/18*.6,1]]:n<36?[["slash3",.55+(n-18)/18*.65,1]]:[["spin",(n-36)/18*.9,1]];const g=Math.sin(Math.PI*s)*1.4,_=Math.min(l,1.4),p=-c*_,m=-h*_,y=Math.cos(g),S=Math.sin(g);f=[r.x+p*y-m*S-e.x,0,r.z+p*S+m*y-e.z];break}case"thunder":{n<16?d=[["ss_slash5",.28,1]]:d=[["inward",1.05+Math.min(1,(n-16)/38)*.7,1]];const g=u(16,20,n),_=l+1.6;f=[c*_*g,0,h*_*g];break}default:d=[["spin",n/27%1*1.75,1]],f=[0,Math.sin(Math.PI*s)*.9,0]}return this.visOff=f,{key:"ougiStrike",L:d,fade:4}}step(e,t,n){this.sim=n,e.wk===1?(this.walkF*=.75,this.walkS*=.75):e.wk===2?(this.walkF*=.7,this.walkS*=.7):e.wk===3&&(this.walkF=Xt(this.walkF,e.wmy,.3),this.walkS=Xt(this.walkS,e.wmx,.3)),this.locoT+=un*(1+1.4*Math.min(1,Math.abs(this.walkF)+Math.abs(this.walkS))),this.loopT+=un;const s=this.target(e,n),r=e.state===this.lastState&&e.f<this.lastF&&e.state!=="idle";(s.key!==this.key||r)&&(this.prev=this.cur,this.key=s.key,this.alpha=this.prev?0:1,this.fadeN=s.fade||5),this.cur=s,this.alpha<1&&(this.alpha=Math.min(1,this.alpha+1/this.fadeN)),this.lastState=e.state,this.lastF=e.f;const o=e.state==="roll"&&e.f<22?Math.atan2(e.rollDir[0],e.rollDir[1]):e.yaw;this.visYaw===void 0&&(this.visYaw=o),this.visYaw=Gr(this.visYaw,o,e.state==="roll"?.6:.35),this.fk(e)}apply(){for(const t in this.actions){const n=this.actions[t];n.enabled=!1,n.setEffectiveWeight(0)}const e=(t,n)=>{for(const[s,r,o]of t){const a=this.actions[s];!a||o*n<=0||(a.enabled||(a.enabled=!0,a.setEffectiveWeight(0)),a.time=r,a.setEffectiveWeight(a.getEffectiveWeight()+o*n))}};this.prev&&this.alpha<1&&e(this.prev.L,1-this.alpha),this.cur&&e(this.cur.L,this.prev&&this.alpha<1?this.alpha:1),this.mixer.update(0)}fk(e){this.cur||(this.cur=this.target(e,this.sim)),this.apply();const t=e.state==="ougiStrike"&&this.visOff?this.visOff:null;t||(this.visOff=null),this.group.position.set(e.x+(t?t[0]:0),(e.state==="launched"?e.y:0)+(t?t[1]:0),e.z+(t?t[2]:0)),this.group.rotation.set(0,this.visYaw===void 0?e.yaw:this.visYaw,0);let n=null,s=0;const r=(a,l)=>{for(const[c,h,u]of a)this.bladeAdj[c]&&(n=this.bladeAdj[c],s+=u*l)};this.cur&&r(this.cur.L,this.prev&&this.alpha<1?this.alpha:1),this.prev&&this.alpha<1&&r(this.prev.L,1-this.alpha),n?this.bladePivot.quaternion.identity().slerp(n,Math.min(1,s)):this.bladePivot.quaternion.identity(),this.bladePivot.visible=!(this.cur&&this.cur.sheathed),this.group.updateMatrixWorld(!0);const o=this.bone("Hips").getWorldPosition(Y1);this.rootH=o.y,this.root[12]=o.x,this.root[13]=o.y,this.root[14]=o.z}bladePoint(e){return this.bladePivot.localToWorld(Ca.clone().multiplyScalar(gs.base+(gs.tip-gs.base)*e)).toArray()}limbPos(e){return e==="blade"?this.bladePoint(.7):this.center()}center(){return this.bone("Spine1").getWorldPosition(new A).toArray()}sync(e,t){for(const s in this.mats)this.mats[s].emissive.setRGB(t[0],t[1],t[2]);const n=this.ch.glow;this.mats.blade.emissive.setRGB(t[0]+n[0]*1.8,t[1]+n[1]*1.8,t[2]+n[2]*1.8)}dispose(){this.scene.remove(this.group);for(const e of this.meshes)e.geometry.dispose();for(const e in this.mats)this.mats[e].dispose();this.mixer.stopAllAction()}}var ea=(i,e,t)=>new Promise((n,s)=>{var r=l=>{try{a(t.next(l))}catch(c){s(c)}},o=l=>{try{a(t.throw(l))}catch(c){s(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,o);a((t=t.apply(i,e)).next())}),yt=(i,e,t)=>new Promise((n,s)=>{var r=l=>{try{a(t.next(l))}catch(c){s(c)}},o=l=>{try{a(t.throw(l))}catch(c){s(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,o);a((t=t.apply(i,e)).next())}),Td=class extends At{constructor(i){super(),this.weight=0,this.isBinary=!1,this.overrideBlink="none",this.overrideLookAt="none",this.overrideMouth="none",this._binds=[],this.name=`VRMExpression_${i}`,this.expressionName=i,this.type="VRMExpression",this.visible=!1}get binds(){return this._binds}get overrideBlinkAmount(){return this.overrideBlink==="block"?0<this.outputWeight?1:0:this.overrideBlink==="blend"?this.outputWeight:0}get overrideLookAtAmount(){return this.overrideLookAt==="block"?0<this.outputWeight?1:0:this.overrideLookAt==="blend"?this.outputWeight:0}get overrideMouthAmount(){return this.overrideMouth==="block"?0<this.outputWeight?1:0:this.overrideMouth==="blend"?this.outputWeight:0}get outputWeight(){return this.isBinary?this.weight>.5?1:0:this.weight}addBind(i){this._binds.push(i)}deleteBind(i){const e=this._binds.indexOf(i);e>=0&&this._binds.splice(e,1)}applyWeight(i){var e;let t=this.outputWeight;t*=(e=i==null?void 0:i.multiplier)!=null?e:1,this.isBinary&&t<1&&(t=0),this._binds.forEach(n=>n.applyWeight(t))}clearAppliedWeight(){this._binds.forEach(i=>i.clearAppliedWeight())}};function Tp(i,e,t){var n,s;const r=i.parser.json,o=(n=r.nodes)==null?void 0:n[e];if(o==null)return console.warn(`extractPrimitivesInternal: Attempt to use nodes[${e}] of glTF but the node doesn't exist`),null;const a=o.mesh;if(a==null)return null;const l=(s=r.meshes)==null?void 0:s[a];if(l==null)return console.warn(`extractPrimitivesInternal: Attempt to use meshes[${a}] of glTF but the mesh doesn't exist`),null;const c=l.primitives.length,h=[];return t.traverse(u=>{h.length<c&&u.isMesh&&h.push(u)}),h}function Ed(i,e){return yt(this,null,function*(){const t=yield i.parser.getDependency("node",e);return Tp(i,e,t)})}function Ad(i){return yt(this,null,function*(){const e=yield i.parser.getDependencies("node"),t=new Map;return e.forEach((n,s)=>{const r=Tp(i,s,n);r!=null&&t.set(s,r)}),t})}var eh={Aa:"aa",Ih:"ih",Ou:"ou",Ee:"ee",Oh:"oh",Blink:"blink",Happy:"happy",Angry:"angry",Sad:"sad",Relaxed:"relaxed",LookUp:"lookUp",Surprised:"surprised",LookDown:"lookDown",LookLeft:"lookLeft",LookRight:"lookRight",BlinkLeft:"blinkLeft",BlinkRight:"blinkRight",Neutral:"neutral"};function Ep(i){return Math.max(Math.min(i,1),0)}var Rd=class Ap{constructor(){this.blinkExpressionNames=["blink","blinkLeft","blinkRight"],this.lookAtExpressionNames=["lookLeft","lookRight","lookUp","lookDown"],this.mouthExpressionNames=["aa","ee","ih","oh","ou"],this._expressions=[],this._expressionMap={}}get expressions(){return this._expressions.concat()}get expressionMap(){return Object.assign({},this._expressionMap)}get presetExpressionMap(){const e={},t=new Set(Object.values(eh));return Object.entries(this._expressionMap).forEach(([n,s])=>{t.has(n)&&(e[n]=s)}),e}get customExpressionMap(){const e={},t=new Set(Object.values(eh));return Object.entries(this._expressionMap).forEach(([n,s])=>{t.has(n)||(e[n]=s)}),e}copy(e){return this._expressions.concat().forEach(n=>{this.unregisterExpression(n)}),e._expressions.forEach(n=>{this.registerExpression(n)}),this.blinkExpressionNames=e.blinkExpressionNames.concat(),this.lookAtExpressionNames=e.lookAtExpressionNames.concat(),this.mouthExpressionNames=e.mouthExpressionNames.concat(),this}clone(){return new Ap().copy(this)}getExpression(e){var t;return(t=this._expressionMap[e])!=null?t:null}registerExpression(e){this._expressions.push(e),this._expressionMap[e.expressionName]=e}unregisterExpression(e){const t=this._expressions.indexOf(e);t===-1&&console.warn("VRMExpressionManager: The specified expressions is not registered"),this._expressions.splice(t,1),delete this._expressionMap[e.expressionName]}getValue(e){var t;const n=this.getExpression(e);return(t=n==null?void 0:n.weight)!=null?t:null}setValue(e,t){const n=this.getExpression(e);n&&(n.weight=Ep(t))}resetValues(){this._expressions.forEach(e=>{e.weight=0})}getExpressionTrackName(e){const t=this.getExpression(e);return t?`${t.name}.weight`:null}update(){const e=this._calculateWeightMultipliers();this._expressions.forEach(t=>{t.clearAppliedWeight()}),this._expressions.forEach(t=>{let n=1;const s=t.expressionName;this.blinkExpressionNames.indexOf(s)!==-1&&(n*=e.blink),this.lookAtExpressionNames.indexOf(s)!==-1&&(n*=e.lookAt),this.mouthExpressionNames.indexOf(s)!==-1&&(n*=e.mouth),t.applyWeight({multiplier:n})})}_calculateWeightMultipliers(){let e=1,t=1,n=1;return this._expressions.forEach(s=>{e-=s.overrideBlinkAmount,t-=s.overrideLookAtAmount,n-=s.overrideMouthAmount}),e=Math.max(0,e),t=Math.max(0,t),n=Math.max(0,n),{blink:e,lookAt:t,mouth:n}}},Lr={Color:"color",EmissionColor:"emissionColor",ShadeColor:"shadeColor",RimColor:"rimColor",OutlineColor:"outlineColor"},$1={_Color:Lr.Color,_EmissionColor:Lr.EmissionColor,_ShadeColor:Lr.ShadeColor,_RimColor:Lr.RimColor,_OutlineColor:Lr.OutlineColor},K1=new pe,Rp=class Cp{constructor({material:e,type:t,targetValue:n,targetAlpha:s}){this.material=e,this.type=t,this.targetValue=n,this.targetAlpha=s!=null?s:1;const r=this._initColorBindState(),o=this._initAlphaBindState();this._state={color:r,alpha:o}}applyWeight(e){const{color:t,alpha:n}=this._state;if(t!=null){const{propertyName:s,deltaValue:r}=t,o=this.material[s];o!=null&&o.add(K1.copy(r).multiplyScalar(e))}if(n!=null){const{propertyName:s,deltaValue:r}=n;this.material[s]!=null&&(this.material[s]+=r*e)}}clearAppliedWeight(){const{color:e,alpha:t}=this._state;if(e!=null){const{propertyName:n,initialValue:s}=e,r=this.material[n];r!=null&&r.copy(s)}if(t!=null){const{propertyName:n,initialValue:s}=t;this.material[n]!=null&&(this.material[n]=s)}}_initColorBindState(){var e,t,n;const{material:s,type:r,targetValue:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a==null?void 0:a[r])==null?void 0:e[0])!=null?t:null;if(l==null)return console.warn(`Tried to add a material color bind to the material ${(n=s.name)!=null?n:"(no name)"}, the type ${r} but the material or the type is not supported.`),null;const h=s[l].clone(),u=new pe(o.r-h.r,o.g-h.g,o.b-h.b);return{propertyName:l,initialValue:h,deltaValue:u}}_initAlphaBindState(){var e,t,n;const{material:s,type:r,targetAlpha:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a==null?void 0:a[r])==null?void 0:e[1])!=null?t:null;if(l==null&&o!==1)return console.warn(`Tried to add a material alpha bind to the material ${(n=s.name)!=null?n:"(no name)"}, the type ${r} but the material or the type does not support alpha.`),null;if(l==null)return null;const c=s[l],h=o-c;return{propertyName:l,initialValue:c,deltaValue:h}}_getPropertyNameMap(){var e,t;return(t=(e=Object.entries(Cp._propertyNameMapMap).find(([n])=>this.material[n]===!0))==null?void 0:e[1])!=null?t:null}};Rp._propertyNameMapMap={isMeshStandardMaterial:{color:["color","opacity"],emissionColor:["emissive",null]},isMeshBasicMaterial:{color:["color","opacity"]},isMToonMaterial:{color:["color","opacity"],emissionColor:["emissive",null],outlineColor:["outlineColorFactor",null],matcapColor:["matcapFactor",null],rimColor:["parametricRimColorFactor",null],shadeColor:["shadeColorFactor",null]}};var Cd=Rp,Pa=class{constructor({primitives:i,index:e,weight:t}){this.primitives=i,this.index=e,this.weight=t}applyWeight(i){this.primitives.forEach(e=>{var t;((t=e.morphTargetInfluences)==null?void 0:t[this.index])!=null&&(e.morphTargetInfluences[this.index]+=this.weight*i)})}clearAppliedWeight(){this.primitives.forEach(i=>{var e;((e=i.morphTargetInfluences)==null?void 0:e[this.index])!=null&&(i.morphTargetInfluences[this.index]=0)})}},Pd=new Ke,Pp=class Lp{constructor({material:e,scale:t,offset:n}){var s,r;this.material=e,this.scale=t,this.offset=n;const o=(s=Object.entries(Lp._propertyNamesMap).find(([a])=>e[a]===!0))==null?void 0:s[1];o==null?(console.warn(`Tried to add a texture transform bind to the material ${(r=e.name)!=null?r:"(no name)"} but the material is not supported.`),this._properties=[]):(this._properties=[],o.forEach(a=>{var l;const c=(l=e[a])==null?void 0:l.clone();if(!c)return null;e[a]=c;const h=c.offset.clone(),u=c.repeat.clone(),d=n.clone().sub(h),f=t.clone().sub(u);this._properties.push({name:a,initialOffset:h,deltaOffset:d,initialScale:u,deltaScale:f})}))}applyWeight(e){this._properties.forEach(t=>{const n=this.material[t.name];n!==void 0&&(n.offset.add(Pd.copy(t.deltaOffset).multiplyScalar(e)),n.repeat.add(Pd.copy(t.deltaScale).multiplyScalar(e)))})}clearAppliedWeight(){this._properties.forEach(e=>{const t=this.material[e.name];t!==void 0&&(t.offset.copy(e.initialOffset),t.repeat.copy(e.initialScale))})}};Pp._propertyNamesMap={isMeshStandardMaterial:["map","emissiveMap","bumpMap","normalMap","displacementMap","roughnessMap","metalnessMap","alphaMap"],isMeshBasicMaterial:["map","specularMap","alphaMap"],isMToonMaterial:["map","normalMap","emissiveMap","shadeMultiplyTexture","rimMultiplyTexture","outlineWidthMultiplyTexture","uvAnimationMaskTexture"]};var Ld=Pp,Z1=new Set(["1.0","1.0-beta"]),Ip=class Up{get name(){return"VRMExpressionLoaderPlugin"}constructor(e){this.parser=e}afterRoot(e){return yt(this,null,function*(){e.userData.vrmExpressionManager=yield this._import(e)})}_import(e){return yt(this,null,function*(){const t=yield this._v1Import(e);if(t)return t;const n=yield this._v0Import(e);return n||null})}_v1Import(e){return yt(this,null,function*(){var t,n;const s=this.parser.json;if(!(((t=s.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const o=(n=s.extensions)==null?void 0:n.VRMC_vrm;if(!o)return null;const a=o.specVersion;if(!Z1.has(a))return console.warn(`VRMExpressionLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.expressions;if(!l)return null;const c=new Set(Object.values(eh)),h=new Map;l.preset!=null&&Object.entries(l.preset).forEach(([d,f])=>{if(f!=null){if(!c.has(d)){console.warn(`VRMExpressionLoaderPlugin: Unknown preset name "${d}" detected. Ignoring the expression`);return}h.set(d,f)}}),l.custom!=null&&Object.entries(l.custom).forEach(([d,f])=>{if(c.has(d)){console.warn(`VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${d}". Ignoring the expression`);return}h.set(d,f)});const u=new Rd;return yield Promise.all(Array.from(h.entries()).map(d=>yt(this,[d],function*([f,g]){var _,p,m,y,S,v,E;const R=new Td(f);if(e.scene.add(R),R.isBinary=(_=g.isBinary)!=null?_:!1,R.overrideBlink=(p=g.overrideBlink)!=null?p:"none",R.overrideLookAt=(m=g.overrideLookAt)!=null?m:"none",R.overrideMouth=(y=g.overrideMouth)!=null?y:"none",(S=g.morphTargetBinds)==null||S.forEach(w=>yt(this,null,function*(){var L;if(w.node===void 0||w.index===void 0)return;const x=yield Ed(e,w.node),M=w.index;if(!x.every(C=>Array.isArray(C.morphTargetInfluences)&&M<C.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${g.name} attempts to index morph #${M} but not found.`);return}R.addBind(new Pa({primitives:x,index:M,weight:(L=w.weight)!=null?L:1}))})),g.materialColorBinds||g.textureTransformBinds){const w=[];e.scene.traverse(L=>{const x=L.material;x&&(Array.isArray(x)?w.push(...x):w.push(x))}),(v=g.materialColorBinds)==null||v.forEach(L=>yt(this,null,function*(){w.filter(M=>{var C;const U=(C=this.parser.associations.get(M))==null?void 0:C.materials;return L.material===U}).forEach(M=>{R.addBind(new Cd({material:M,type:L.type,targetValue:new pe().fromArray(L.targetValue),targetAlpha:L.targetValue[3]}))})})),(E=g.textureTransformBinds)==null||E.forEach(L=>yt(this,null,function*(){w.filter(M=>{var C;const U=(C=this.parser.associations.get(M))==null?void 0:C.materials;return L.material===U}).forEach(M=>{var C,U;R.addBind(new Ld({material:M,offset:new Ke().fromArray((C=L.offset)!=null?C:[0,0]),scale:new Ke().fromArray((U=L.scale)!=null?U:[1,1])}))})}))}u.registerExpression(R)}))),u})}_v0Import(e){return yt(this,null,function*(){var t;const n=this.parser.json,s=(t=n.extensions)==null?void 0:t.VRM;if(!s)return null;const r=s.blendShapeMaster;if(!r)return null;const o=new Rd,a=r.blendShapeGroups;if(!a)return o;const l=new Set;return yield Promise.all(a.map(c=>yt(this,null,function*(){var h;const u=c.presetName,d=u!=null&&Up.v0v1PresetNameMap[u]||null,f=d!=null?d:c.name;if(f==null){console.warn("VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression");return}if(l.has(f)){console.warn(`VRMExpressionLoaderPlugin: An expression preset ${u} has duplicated entries. Ignoring the expression`);return}l.add(f);const g=new Td(f);e.scene.add(g),g.isBinary=(h=c.isBinary)!=null?h:!1,c.binds&&c.binds.forEach(p=>yt(this,null,function*(){var m;if(p.mesh===void 0||p.index===void 0)return;const y=[];if((m=n.nodes)==null||m.forEach((v,E)=>{v.mesh===p.mesh&&y.push(E)}),y.length===0){console.warn(`VRMExpressionLoaderPlugin: ${c.name} attempts to bind a morph target to the mesh #${p.mesh} but the mesh is not found or not used in the scene. Ignoring the bind.`);return}const S=p.index;yield Promise.all(y.map(v=>yt(this,null,function*(){var E;const R=yield Ed(e,v);if(!R.every(w=>Array.isArray(w.morphTargetInfluences)&&S<w.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${c.name} attempts to index ${S}th morph but not found.`);return}g.addBind(new Pa({primitives:R,index:S,weight:.01*((E=p.weight)!=null?E:100)}))})))}));const _=c.materialValues;_&&_.length!==0&&_.forEach(p=>{if(p.materialName===void 0||p.propertyName===void 0||p.targetValue===void 0)return;const m=[];e.scene.traverse(S=>{if(S.material){const v=S.material;Array.isArray(v)?m.push(...v.filter(E=>(E.name===p.materialName||E.name===p.materialName+" (Outline)")&&m.indexOf(E)===-1)):v.name===p.materialName&&m.indexOf(v)===-1&&m.push(v)}});const y=p.propertyName;m.forEach(S=>{if(y==="_MainTex_ST"){const E=new Ke(p.targetValue[0],p.targetValue[1]),R=new Ke(p.targetValue[2],p.targetValue[3]);R.y=1-R.y-E.y,g.addBind(new Ld({material:S,scale:E,offset:R}));return}const v=$1[y];if(v){g.addBind(new Cd({material:S,type:v,targetValue:new pe().fromArray(p.targetValue),targetAlpha:p.targetValue[3]}));return}console.warn(y+" is not supported")})}),o.registerExpression(g)}))),o})}};Ip.v0v1PresetNameMap={a:"aa",e:"ee",i:"ih",o:"oh",u:"ou",blink:"blink",joy:"happy",angry:"angry",sorrow:"sad",fun:"relaxed",lookup:"lookUp",lookdown:"lookDown",lookleft:"lookLeft",lookright:"lookRight",blink_l:"blinkLeft",blink_r:"blinkRight",neutral:"neutral"};var J1=Ip,Uh=class Js{constructor(e,t){this._firstPersonOnlyLayer=Js.DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=Js.DEFAULT_THIRDPERSON_ONLY_LAYER,this._initializedLayers=!1,this.humanoid=e,this.meshAnnotations=t}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMFirstPerson: humanoid must be same in order to copy");return this.meshAnnotations=e.meshAnnotations.map(t=>({meshes:t.meshes.concat(),type:t.type})),this}clone(){return new Js(this.humanoid,this.meshAnnotations).copy(this)}get firstPersonOnlyLayer(){return this._firstPersonOnlyLayer}get thirdPersonOnlyLayer(){return this._thirdPersonOnlyLayer}setup({firstPersonOnlyLayer:e=Js.DEFAULT_FIRSTPERSON_ONLY_LAYER,thirdPersonOnlyLayer:t=Js.DEFAULT_THIRDPERSON_ONLY_LAYER}={}){this._initializedLayers||(this._firstPersonOnlyLayer=e,this._thirdPersonOnlyLayer=t,this.meshAnnotations.forEach(n=>{n.meshes.forEach(s=>{n.type==="firstPersonOnly"?(s.layers.set(this._firstPersonOnlyLayer),s.traverse(r=>r.layers.set(this._firstPersonOnlyLayer))):n.type==="thirdPersonOnly"?(s.layers.set(this._thirdPersonOnlyLayer),s.traverse(r=>r.layers.set(this._thirdPersonOnlyLayer))):n.type==="auto"&&this._createHeadlessModel(s)})}),this._initializedLayers=!0)}_excludeTriangles(e,t,n,s){let r=0;if(t!=null&&t.length>0)for(let o=0;o<e.length;o+=3){const a=e[o],l=e[o+1],c=e[o+2],h=t[a],u=n[a];if(h[0]>0&&s.includes(u[0])||h[1]>0&&s.includes(u[1])||h[2]>0&&s.includes(u[2])||h[3]>0&&s.includes(u[3]))continue;const d=t[l],f=n[l];if(d[0]>0&&s.includes(f[0])||d[1]>0&&s.includes(f[1])||d[2]>0&&s.includes(f[2])||d[3]>0&&s.includes(f[3]))continue;const g=t[c],_=n[c];g[0]>0&&s.includes(_[0])||g[1]>0&&s.includes(_[1])||g[2]>0&&s.includes(_[2])||g[3]>0&&s.includes(_[3])||(e[r++]=a,e[r++]=l,e[r++]=c)}return r}_createErasedMesh(e,t){const n=new co(e.geometry.clone(),e.material);n.name=`${e.name}(erase)`,n.frustumCulled=e.frustumCulled,n.layers.set(this._firstPersonOnlyLayer);const s=n.geometry,r=s.getAttribute("skinIndex"),o=r instanceof Lu?[]:r.array,a=[];for(let _=0;_<o.length;_+=4)a.push([o[_],o[_+1],o[_+2],o[_+3]]);const l=s.getAttribute("skinWeight"),c=l instanceof Lu?[]:l.array,h=[];for(let _=0;_<c.length;_+=4)h.push([c[_],c[_+1],c[_+2],c[_+3]]);const u=s.getIndex();if(!u)throw new Error("The geometry doesn't have an index buffer");const d=Array.from(u.array),f=this._excludeTriangles(d,h,a,t),g=[];for(let _=0;_<f;_++)g[_]=d[_];return s.setIndex(g),e.onBeforeRender&&(n.onBeforeRender=e.onBeforeRender),n.bind(new Yi(e.skeleton.bones,e.skeleton.boneInverses),new Oe),n}_createHeadlessModelForSkinnedMesh(e,t){const n=[];if(t.skeleton.bones.forEach((r,o)=>{this._isEraseTarget(r)&&n.push(o)}),!n.length){t.layers.enable(this._thirdPersonOnlyLayer),t.layers.enable(this._firstPersonOnlyLayer);return}t.layers.set(this._thirdPersonOnlyLayer);const s=this._createErasedMesh(t,n);e.add(s)}_createHeadlessModel(e){if(e.type==="Group")if(e.layers.set(this._thirdPersonOnlyLayer),this._isEraseTarget(e))e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer));else{const t=new Ft;t.name=`_headless_${e.name}`,t.layers.set(this._firstPersonOnlyLayer),e.parent.add(t),e.children.filter(n=>n.type==="SkinnedMesh").forEach(n=>{const s=n;this._createHeadlessModelForSkinnedMesh(t,s)})}else if(e.type==="SkinnedMesh"){const t=e;this._createHeadlessModelForSkinnedMesh(e.parent,t)}else this._isEraseTarget(e)&&(e.layers.set(this._thirdPersonOnlyLayer),e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer)))}_isEraseTarget(e){return e===this.humanoid.getRawBoneNode("head")?!0:e.parent?this._isEraseTarget(e.parent):!1}};Uh.DEFAULT_FIRSTPERSON_ONLY_LAYER=9;Uh.DEFAULT_THIRDPERSON_ONLY_LAYER=10;var Id=Uh,Q1=new Set(["1.0","1.0-beta"]),eS=class{get name(){return"VRMFirstPersonLoaderPlugin"}constructor(i){this.parser=i}afterRoot(i){return yt(this,null,function*(){const e=i.userData.vrmHumanoid;if(e!==null){if(e===void 0)throw new Error("VRMFirstPersonLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");i.userData.vrmFirstPerson=yield this._import(i,e)}})}_import(i,e){return yt(this,null,function*(){if(e==null)return null;const t=yield this._v1Import(i,e);if(t)return t;const n=yield this._v0Import(i,e);return n||null})}_v1Import(i,e){return yt(this,null,function*(){var t,n;const s=this.parser.json;if(!(((t=s.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const o=(n=s.extensions)==null?void 0:n.VRMC_vrm;if(!o)return null;const a=o.specVersion;if(!Q1.has(a))return console.warn(`VRMFirstPersonLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.firstPerson,c=[],h=yield Ad(i);return Array.from(h.entries()).forEach(([u,d])=>{var f,g;const _=(f=l==null?void 0:l.meshAnnotations)==null?void 0:f.find(p=>p.node===u);c.push({meshes:d,type:(g=_==null?void 0:_.type)!=null?g:"auto"})}),new Id(e,c)})}_v0Import(i,e){return yt(this,null,function*(){var t;const n=this.parser.json,s=(t=n.extensions)==null?void 0:t.VRM;if(!s)return null;const r=s.firstPerson;if(!r)return null;const o=[],a=yield Ad(i);return Array.from(a.entries()).forEach(([l,c])=>{const h=n.nodes[l],u=r.meshAnnotations?r.meshAnnotations.find(d=>d.mesh===h.mesh):void 0;o.push({meshes:c,type:this._convertV0FlagToV1Type(u==null?void 0:u.firstPersonFlag)})}),new Id(e,o)})}_convertV0FlagToV1Type(i){return i==="FirstPersonOnly"?"firstPersonOnly":i==="ThirdPersonOnly"?"thirdPersonOnly":i==="Both"?"both":"auto"}},Ud=new A,Nd=new A,tS=new Pe,Dd=class extends Ft{constructor(i){super(),this.vrmHumanoid=i,this._boneAxesMap=new Map,Object.values(i.humanBones).forEach(e=>{const t=new Ng(1);t.matrixAutoUpdate=!1,t.material.depthTest=!1,t.material.depthWrite=!1,this.add(t),this._boneAxesMap.set(e,t)})}dispose(){Array.from(this._boneAxesMap.values()).forEach(i=>{i.geometry.dispose(),i.material.dispose()})}updateMatrixWorld(i){Array.from(this._boneAxesMap.entries()).forEach(([e,t])=>{e.node.updateWorldMatrix(!0,!1),e.node.matrixWorld.decompose(Ud,tS,Nd);const n=Ud.set(.1,.1,.1).divide(Nd);t.matrix.copy(e.node.matrixWorld).scale(n)}),super.updateMatrixWorld(i)}},Ul=["hips","spine","chest","upperChest","neck","head","leftEye","rightEye","jaw","leftUpperLeg","leftLowerLeg","leftFoot","leftToes","rightUpperLeg","rightLowerLeg","rightFoot","rightToes","leftShoulder","leftUpperArm","leftLowerArm","leftHand","rightShoulder","rightUpperArm","rightLowerArm","rightHand","leftThumbMetacarpal","leftThumbProximal","leftThumbDistal","leftIndexProximal","leftIndexIntermediate","leftIndexDistal","leftMiddleProximal","leftMiddleIntermediate","leftMiddleDistal","leftRingProximal","leftRingIntermediate","leftRingDistal","leftLittleProximal","leftLittleIntermediate","leftLittleDistal","rightThumbMetacarpal","rightThumbProximal","rightThumbDistal","rightIndexProximal","rightIndexIntermediate","rightIndexDistal","rightMiddleProximal","rightMiddleIntermediate","rightMiddleDistal","rightRingProximal","rightRingIntermediate","rightRingDistal","rightLittleProximal","rightLittleIntermediate","rightLittleDistal"],nS={hips:null,spine:"hips",chest:"spine",upperChest:"chest",neck:"upperChest",head:"neck",leftEye:"head",rightEye:"head",jaw:"head",leftUpperLeg:"hips",leftLowerLeg:"leftUpperLeg",leftFoot:"leftLowerLeg",leftToes:"leftFoot",rightUpperLeg:"hips",rightLowerLeg:"rightUpperLeg",rightFoot:"rightLowerLeg",rightToes:"rightFoot",leftShoulder:"upperChest",leftUpperArm:"leftShoulder",leftLowerArm:"leftUpperArm",leftHand:"leftLowerArm",rightShoulder:"upperChest",rightUpperArm:"rightShoulder",rightLowerArm:"rightUpperArm",rightHand:"rightLowerArm",leftThumbMetacarpal:"leftHand",leftThumbProximal:"leftThumbMetacarpal",leftThumbDistal:"leftThumbProximal",leftIndexProximal:"leftHand",leftIndexIntermediate:"leftIndexProximal",leftIndexDistal:"leftIndexIntermediate",leftMiddleProximal:"leftHand",leftMiddleIntermediate:"leftMiddleProximal",leftMiddleDistal:"leftMiddleIntermediate",leftRingProximal:"leftHand",leftRingIntermediate:"leftRingProximal",leftRingDistal:"leftRingIntermediate",leftLittleProximal:"leftHand",leftLittleIntermediate:"leftLittleProximal",leftLittleDistal:"leftLittleIntermediate",rightThumbMetacarpal:"rightHand",rightThumbProximal:"rightThumbMetacarpal",rightThumbDistal:"rightThumbProximal",rightIndexProximal:"rightHand",rightIndexIntermediate:"rightIndexProximal",rightIndexDistal:"rightIndexIntermediate",rightMiddleProximal:"rightHand",rightMiddleIntermediate:"rightMiddleProximal",rightMiddleDistal:"rightMiddleIntermediate",rightRingProximal:"rightHand",rightRingIntermediate:"rightRingProximal",rightRingDistal:"rightRingIntermediate",rightLittleProximal:"rightHand",rightLittleIntermediate:"rightLittleProximal",rightLittleDistal:"rightLittleIntermediate"};function Np(i){return i.invert?i.invert():i.inverse(),i}var ls=new A,cs=new Pe,th=class{constructor(i){this.humanBones=i,this.restPose=this.getAbsolutePose()}getAbsolutePose(){const i={};return Object.keys(this.humanBones).forEach(e=>{const t=e,n=this.getBoneNode(t);n&&(ls.copy(n.position),cs.copy(n.quaternion),i[t]={position:ls.toArray(),rotation:cs.toArray()})}),i}getPose(){const i={};return Object.keys(this.humanBones).forEach(e=>{const t=e,n=this.getBoneNode(t);if(!n)return;ls.set(0,0,0),cs.identity();const s=this.restPose[t];s!=null&&s.position&&ls.fromArray(s.position).negate(),s!=null&&s.rotation&&Np(cs.fromArray(s.rotation)),ls.add(n.position),cs.premultiply(n.quaternion),i[t]={position:ls.toArray(),rotation:cs.toArray()}}),i}setPose(i){Object.entries(i).forEach(([e,t])=>{const n=e,s=this.getBoneNode(n);if(!s)return;const r=this.restPose[n];r&&(t!=null&&t.position&&(s.position.fromArray(t.position),r.position&&s.position.add(ls.fromArray(r.position))),t!=null&&t.rotation&&(s.quaternion.fromArray(t.rotation),r.rotation&&s.quaternion.multiply(cs.fromArray(r.rotation))))})}resetPose(){Object.entries(this.restPose).forEach(([i,e])=>{const t=this.getBoneNode(i);t&&(e!=null&&e.position&&t.position.fromArray(e.position),e!=null&&e.rotation&&t.quaternion.fromArray(e.rotation))})}getBone(i){var e;return(e=this.humanBones[i])!=null?e:void 0}getBoneNode(i){var e,t;return(t=(e=this.humanBones[i])==null?void 0:e.node)!=null?t:null}},Nl=new A,iS=new Pe,sS=new A,kd=class Dp extends th{static _setupTransforms(e){const t=new At;t.name="VRMHumanoidRig";const n={},s={},r={};Ul.forEach(a=>{var l;const c=e.getBoneNode(a);if(c){const h=new A,u=new Pe;c.updateWorldMatrix(!0,!1),c.matrixWorld.decompose(h,u,Nl),n[a]=h,s[a]=c.quaternion.clone();const d=new Pe;(l=c.parent)==null||l.matrixWorld.decompose(Nl,d,Nl),r[a]=d}});const o={};return Ul.forEach(a=>{var l;const c=e.getBoneNode(a);if(c){const h=n[a];let u=a,d;for(;d==null&&(u=nS[u],u!=null);)d=n[u];const f=new At;f.name="Normalized_"+c.name,(u?(l=o[u])==null?void 0:l.node:t).add(f),f.position.copy(h),d&&f.position.sub(d),o[a]={node:f}}}),{rigBones:o,root:t,parentWorldRotations:r,boneRotations:s}}constructor(e){const{rigBones:t,root:n,parentWorldRotations:s,boneRotations:r}=Dp._setupTransforms(e);super(t),this.original=e,this.root=n,this._parentWorldRotations=s,this._boneRotations=r}update(){Ul.forEach(e=>{const t=this.original.getBoneNode(e);if(t!=null){const n=this.getBoneNode(e),s=this._parentWorldRotations[e],r=iS.copy(s).invert(),o=this._boneRotations[e];if(t.quaternion.copy(n.quaternion).multiply(s).premultiply(r).multiply(o),e==="hips"){const a=n.getWorldPosition(sS);t.parent.updateWorldMatrix(!0,!1);const l=t.parent.matrixWorld,c=a.applyMatrix4(l.invert());t.position.copy(c)}}})}},Od=class kp{get restPose(){return console.warn("VRMHumanoid: restPose is deprecated. Use either rawRestPose or normalizedRestPose instead."),this.rawRestPose}get rawRestPose(){return this._rawHumanBones.restPose}get normalizedRestPose(){return this._normalizedHumanBones.restPose}get humanBones(){return this._rawHumanBones.humanBones}get rawHumanBones(){return this._rawHumanBones.humanBones}get normalizedHumanBones(){return this._normalizedHumanBones.humanBones}get normalizedHumanBonesRoot(){return this._normalizedHumanBones.root}constructor(e,t){var n;this.autoUpdateHumanBones=(n=t==null?void 0:t.autoUpdateHumanBones)!=null?n:!0,this._rawHumanBones=new th(e),this._normalizedHumanBones=new kd(this._rawHumanBones)}copy(e){return this.autoUpdateHumanBones=e.autoUpdateHumanBones,this._rawHumanBones=new th(e.humanBones),this._normalizedHumanBones=new kd(this._rawHumanBones),this}clone(){return new kp(this.humanBones,{autoUpdateHumanBones:this.autoUpdateHumanBones}).copy(this)}getAbsolutePose(){return console.warn("VRMHumanoid: getAbsolutePose() is deprecated. Use either getRawAbsolutePose() or getNormalizedAbsolutePose() instead."),this.getRawAbsolutePose()}getRawAbsolutePose(){return this._rawHumanBones.getAbsolutePose()}getNormalizedAbsolutePose(){return this._normalizedHumanBones.getAbsolutePose()}getPose(){return console.warn("VRMHumanoid: getPose() is deprecated. Use either getRawPose() or getNormalizedPose() instead."),this.getRawPose()}getRawPose(){return this._rawHumanBones.getPose()}getNormalizedPose(){return this._normalizedHumanBones.getPose()}setPose(e){return console.warn("VRMHumanoid: setPose() is deprecated. Use either setRawPose() or setNormalizedPose() instead."),this.setRawPose(e)}setRawPose(e){return this._rawHumanBones.setPose(e)}setNormalizedPose(e){return this._normalizedHumanBones.setPose(e)}resetPose(){return console.warn("VRMHumanoid: resetPose() is deprecated. Use either resetRawPose() or resetNormalizedPose() instead."),this.resetRawPose()}resetRawPose(){return this._rawHumanBones.resetPose()}resetNormalizedPose(){return this._normalizedHumanBones.resetPose()}getBone(e){return console.warn("VRMHumanoid: getBone() is deprecated. Use either getRawBone() or getNormalizedBone() instead."),this.getRawBone(e)}getRawBone(e){return this._rawHumanBones.getBone(e)}getNormalizedBone(e){return this._normalizedHumanBones.getBone(e)}getBoneNode(e){return console.warn("VRMHumanoid: getBoneNode() is deprecated. Use either getRawBoneNode() or getNormalizedBoneNode() instead."),this.getRawBoneNode(e)}getRawBoneNode(e){return this._rawHumanBones.getBoneNode(e)}getNormalizedBoneNode(e){return this._normalizedHumanBones.getBoneNode(e)}update(){this.autoUpdateHumanBones&&this._normalizedHumanBones.update()}},rS={Hips:"hips",Spine:"spine",Head:"head",LeftUpperLeg:"leftUpperLeg",LeftLowerLeg:"leftLowerLeg",LeftFoot:"leftFoot",RightUpperLeg:"rightUpperLeg",RightLowerLeg:"rightLowerLeg",RightFoot:"rightFoot",LeftUpperArm:"leftUpperArm",LeftLowerArm:"leftLowerArm",LeftHand:"leftHand",RightUpperArm:"rightUpperArm",RightLowerArm:"rightLowerArm",RightHand:"rightHand"},oS=new Set(["1.0","1.0-beta"]),Fd={leftThumbProximal:"leftThumbMetacarpal",leftThumbIntermediate:"leftThumbProximal",rightThumbProximal:"rightThumbMetacarpal",rightThumbIntermediate:"rightThumbProximal"},aS=class{get name(){return"VRMHumanoidLoaderPlugin"}constructor(i,e){this.parser=i,this.helperRoot=e==null?void 0:e.helperRoot,this.autoUpdateHumanBones=e==null?void 0:e.autoUpdateHumanBones}afterRoot(i){return yt(this,null,function*(){i.userData.vrmHumanoid=yield this._import(i)})}_import(i){return yt(this,null,function*(){const e=yield this._v1Import(i);if(e)return e;const t=yield this._v0Import(i);return t||null})}_v1Import(i){return yt(this,null,function*(){var e,t;const n=this.parser.json;if(!(((e=n.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;const r=(t=n.extensions)==null?void 0:t.VRMC_vrm;if(!r)return null;const o=r.specVersion;if(!oS.has(o))return console.warn(`VRMHumanoidLoaderPlugin: Unknown VRMC_vrm specVersion "${o}"`),null;const a=r.humanoid;if(!a)return null;const l=a.humanBones.leftThumbIntermediate!=null||a.humanBones.rightThumbIntermediate!=null,c={};a.humanBones!=null&&(yield Promise.all(Object.entries(a.humanBones).map(u=>yt(this,[u],function*([d,f]){let g=d;const _=f.node;if(l){const m=Fd[g];m!=null&&(g=m)}const p=yield this.parser.getDependency("node",_);if(p==null){console.warn(`A glTF node bound to the humanoid bone ${g} (index = ${_}) does not exist`);return}c[g]={node:p}}))));const h=new Od(this._ensureRequiredBonesExist(c),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(i.scene.add(h.normalizedHumanBonesRoot),this.helperRoot){const u=new Dd(h);this.helperRoot.add(u),u.renderOrder=this.helperRoot.renderOrder}return h})}_v0Import(i){return yt(this,null,function*(){var e;const n=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!n)return null;const s=n.humanoid;if(!s)return null;const r={};s.humanBones!=null&&(yield Promise.all(s.humanBones.map(a=>yt(this,null,function*(){const l=a.bone,c=a.node;if(l==null||c==null)return;if(c<0){console.warn(`A glTF node index for the humanoid bone ${l} is negative (${c}), ignoring this bone.`);return}const h=yield this.parser.getDependency("node",c);if(h==null){console.warn(`A glTF node bound to the humanoid bone ${l} (index = ${c}) does not exist`);return}const u=Fd[l],d=u!=null?u:l;if(r[d]!=null){console.warn(`Multiple bone entries for ${d} detected (index = ${c}), ignoring duplicated entries.`);return}r[d]={node:h}}))));const o=new Od(this._ensureRequiredBonesExist(r),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(i.scene.add(o.normalizedHumanBonesRoot),this.helperRoot){const a=new Dd(o);this.helperRoot.add(a),a.renderOrder=this.helperRoot.renderOrder}return o})}_ensureRequiredBonesExist(i){const e=Object.values(rS).filter(t=>i[t]==null);if(e.length>0)throw new Error(`VRMHumanoidLoaderPlugin: These humanoid bones are required but not exist: ${e.join(", ")}`);return i}},Bd=class extends Rt{constructor(){super(),this._currentTheta=0,this._currentRadius=0,this.theta=0,this.radius=0,this._currentTheta=0,this._currentRadius=0,this._attrPos=new it(new Float32Array(195),3),this.setAttribute("position",this._attrPos),this._attrIndex=new it(new Uint16Array(189),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;this._currentTheta!==this.theta&&(this._currentTheta=this.theta,i=!0),this._currentRadius!==this.radius&&(this._currentRadius=this.radius,i=!0),i&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,0,0,0);for(let i=0;i<64;i++){const e=i/63*this._currentTheta;this._attrPos.setXYZ(i+1,this._currentRadius*Math.sin(e),0,this._currentRadius*Math.cos(e))}this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<63;i++)this._attrIndex.setXYZ(i*3,0,i+1,i+2);this._attrIndex.needsUpdate=!0}},lS=class extends Rt{constructor(){super(),this.radius=0,this._currentRadius=0,this.tail=new A,this._currentTail=new A,this._attrPos=new it(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new it(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;this._currentRadius!==this.radius&&(this._currentRadius=this.radius,i=!0),this._currentTail.equals(this.tail)||(this._currentTail.copy(this.tail),i=!0),i&&this._buildPosition()}_buildPosition(){for(let i=0;i<32;i++){const e=i/16*Math.PI;this._attrPos.setXYZ(i,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+i,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+i,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<32;i++){const e=(i+1)%32;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(64+i*2,32+i,32+e),this._attrIndex.setXY(128+i*2,64+i,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},ta=new Pe,Vd=new Pe,Ir=new A,zd=new A,Hd=Math.sqrt(2)/2,cS=new Pe(0,0,-Hd,Hd),hS=new A(0,1,0),uS=class extends Ft{constructor(i){super(),this.matrixAutoUpdate=!1,this.vrmLookAt=i;{const e=new Bd;e.radius=.5;const t=new ti({color:65280,transparent:!0,opacity:.5,side:Mn,depthTest:!1,depthWrite:!1});this._meshPitch=new wt(e,t),this.add(this._meshPitch)}{const e=new Bd;e.radius=.5;const t=new ti({color:16711680,transparent:!0,opacity:.5,side:Mn,depthTest:!1,depthWrite:!1});this._meshYaw=new wt(e,t),this.add(this._meshYaw)}{const e=new lS;e.radius=.1;const t=new Rs({color:16777215,depthTest:!1,depthWrite:!1});this._lineTarget=new yo(e,t),this._lineTarget.frustumCulled=!1,this.add(this._lineTarget)}}dispose(){this._meshYaw.geometry.dispose(),this._meshYaw.material.dispose(),this._meshPitch.geometry.dispose(),this._meshPitch.material.dispose(),this._lineTarget.geometry.dispose(),this._lineTarget.material.dispose()}updateMatrixWorld(i){const e=Dt.DEG2RAD*this.vrmLookAt.yaw;this._meshYaw.geometry.theta=e,this._meshYaw.geometry.update();const t=Dt.DEG2RAD*this.vrmLookAt.pitch;this._meshPitch.geometry.theta=t,this._meshPitch.geometry.update(),this.vrmLookAt.getLookAtWorldPosition(Ir),this.vrmLookAt.getLookAtWorldQuaternion(ta),ta.multiply(this.vrmLookAt.getFaceFrontQuaternion(Vd)),this._meshYaw.position.copy(Ir),this._meshYaw.quaternion.copy(ta),this._meshPitch.position.copy(Ir),this._meshPitch.quaternion.copy(ta),this._meshPitch.quaternion.multiply(Vd.setFromAxisAngle(hS,e)),this._meshPitch.quaternion.multiply(cS);const{target:n,autoUpdate:s}=this.vrmLookAt;n!=null&&s&&(n.getWorldPosition(zd).sub(Ir),this._lineTarget.geometry.tail.copy(zd),this._lineTarget.geometry.update(),this._lineTarget.position.copy(Ir)),super.updateMatrixWorld(i)}},dS=new A,fS=new A;function nh(i,e){return i.matrixWorld.decompose(dS,e,fS),e}function va(i){return[Math.atan2(-i.z,i.x),Math.atan2(i.y,Math.sqrt(i.x*i.x+i.z*i.z))]}function Gd(i){const e=Math.round(i/2/Math.PI);return i-2*Math.PI*e}var Wd=new A(0,0,1),pS=new A,mS=new A,gS=new A,_S=new Pe,Dl=new Pe,Xd=new Pe,vS=new Pe,kl=new mn,Op=class Fp{constructor(e,t){this.offsetFromHeadBone=new A,this.autoUpdate=!0,this.faceFront=new A(0,0,1),this.humanoid=e,this.applier=t,this._yaw=0,this._pitch=0,this._needsUpdate=!0,this._restHeadWorldQuaternion=this.getLookAtWorldQuaternion(new Pe)}get yaw(){return this._yaw}set yaw(e){this._yaw=e,this._needsUpdate=!0}get pitch(){return this._pitch}set pitch(e){this._pitch=e,this._needsUpdate=!0}get euler(){return console.warn("VRMLookAt: euler is deprecated. use getEuler() instead."),this.getEuler(new mn)}getEuler(e){return e.set(Dt.DEG2RAD*this._pitch,Dt.DEG2RAD*this._yaw,0,"YXZ")}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMLookAt: humanoid must be same in order to copy");return this.offsetFromHeadBone.copy(e.offsetFromHeadBone),this.applier=e.applier,this.autoUpdate=e.autoUpdate,this.target=e.target,this.faceFront.copy(e.faceFront),this}clone(){return new Fp(this.humanoid,this.applier).copy(this)}reset(){this._yaw=0,this._pitch=0,this._needsUpdate=!0}getLookAtWorldPosition(e){const t=this.humanoid.getRawBoneNode("head");return e.copy(this.offsetFromHeadBone).applyMatrix4(t.matrixWorld)}getLookAtWorldQuaternion(e){const t=this.humanoid.getRawBoneNode("head");return nh(t,e)}getFaceFrontQuaternion(e){if(this.faceFront.distanceToSquared(Wd)<.01)return e.copy(this._restHeadWorldQuaternion).invert();const[t,n]=va(this.faceFront);return kl.set(0,.5*Math.PI+t,n,"YZX"),e.setFromEuler(kl).premultiply(vS.copy(this._restHeadWorldQuaternion).invert())}getLookAtWorldDirection(e){return this.getLookAtWorldQuaternion(Dl),this.getFaceFrontQuaternion(Xd),e.copy(Wd).applyQuaternion(Dl).applyQuaternion(Xd).applyEuler(this.getEuler(kl))}lookAt(e){const t=_S.copy(this._restHeadWorldQuaternion).multiply(Np(this.getLookAtWorldQuaternion(Dl))),n=this.getLookAtWorldPosition(mS),s=gS.copy(e).sub(n).applyQuaternion(t).normalize(),[r,o]=va(this.faceFront),[a,l]=va(s),c=Gd(a-r),h=Gd(o-l);this._yaw=Dt.RAD2DEG*c,this._pitch=Dt.RAD2DEG*h,this._needsUpdate=!0}update(e){this.target!=null&&this.autoUpdate&&this.lookAt(this.target.getWorldPosition(pS)),this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}};Op.EULER_ORDER="YXZ";var xS=Op,MS=new A(0,0,1),qn=new Pe,qs=new Pe,Ln=new mn(0,0,0,"YXZ"),xa=class{constructor(i,e,t,n,s){this.humanoid=i,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=n,this.rangeMapVerticalUp=s,this.faceFront=new A(0,0,1),this._restQuatLeftEye=new Pe,this._restQuatRightEye=new Pe,this._restLeftEyeParentWorldQuat=new Pe,this._restRightEyeParentWorldQuat=new Pe;const r=this.humanoid.getRawBoneNode("leftEye"),o=this.humanoid.getRawBoneNode("rightEye");r&&(this._restQuatLeftEye.copy(r.quaternion),nh(r.parent,this._restLeftEyeParentWorldQuat)),o&&(this._restQuatRightEye.copy(o.quaternion),nh(o.parent,this._restRightEyeParentWorldQuat))}applyYawPitch(i,e){const t=this.humanoid.getRawBoneNode("leftEye"),n=this.humanoid.getRawBoneNode("rightEye"),s=this.humanoid.getNormalizedBoneNode("leftEye"),r=this.humanoid.getNormalizedBoneNode("rightEye");t&&(e<0?Ln.x=-Dt.DEG2RAD*this.rangeMapVerticalDown.map(-e):Ln.x=Dt.DEG2RAD*this.rangeMapVerticalUp.map(e),i<0?Ln.y=-Dt.DEG2RAD*this.rangeMapHorizontalInner.map(-i):Ln.y=Dt.DEG2RAD*this.rangeMapHorizontalOuter.map(i),qn.setFromEuler(Ln),this._getWorldFaceFrontQuat(qs),s.quaternion.copy(qs).multiply(qn).multiply(qs.invert()),qn.copy(this._restLeftEyeParentWorldQuat),t.quaternion.copy(s.quaternion).multiply(qn).premultiply(qn.invert()).multiply(this._restQuatLeftEye)),n&&(e<0?Ln.x=-Dt.DEG2RAD*this.rangeMapVerticalDown.map(-e):Ln.x=Dt.DEG2RAD*this.rangeMapVerticalUp.map(e),i<0?Ln.y=-Dt.DEG2RAD*this.rangeMapHorizontalOuter.map(-i):Ln.y=Dt.DEG2RAD*this.rangeMapHorizontalInner.map(i),qn.setFromEuler(Ln),this._getWorldFaceFrontQuat(qs),r.quaternion.copy(qs).multiply(qn).multiply(qs.invert()),qn.copy(this._restRightEyeParentWorldQuat),n.quaternion.copy(r.quaternion).multiply(qn).premultiply(qn.invert()).multiply(this._restQuatRightEye))}lookAt(i){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const e=Dt.RAD2DEG*i.y,t=Dt.RAD2DEG*i.x;this.applyYawPitch(e,t)}_getWorldFaceFrontQuat(i){if(this.faceFront.distanceToSquared(MS)<.01)return i.identity();const[e,t]=va(this.faceFront);return Ln.set(0,.5*Math.PI+e,t,"YZX"),i.setFromEuler(Ln)}};xa.type="bone";var ih=class{constructor(i,e,t,n,s){this.expressions=i,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=n,this.rangeMapVerticalUp=s}applyYawPitch(i,e){e<0?(this.expressions.setValue("lookDown",0),this.expressions.setValue("lookUp",this.rangeMapVerticalUp.map(-e))):(this.expressions.setValue("lookUp",0),this.expressions.setValue("lookDown",this.rangeMapVerticalDown.map(e))),i<0?(this.expressions.setValue("lookLeft",0),this.expressions.setValue("lookRight",this.rangeMapHorizontalOuter.map(-i))):(this.expressions.setValue("lookRight",0),this.expressions.setValue("lookLeft",this.rangeMapHorizontalOuter.map(i)))}lookAt(i){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const e=Dt.RAD2DEG*i.y,t=Dt.RAD2DEG*i.x;this.applyYawPitch(e,t)}};ih.type="expression";var jd=class{constructor(i,e){this.inputMaxValue=i,this.outputScale=e}map(i){return this.outputScale*Ep(i/this.inputMaxValue)}},yS=new Set(["1.0","1.0-beta"]),na=.01,SS=class{get name(){return"VRMLookAtLoaderPlugin"}constructor(i,e){this.parser=i,this.helperRoot=e==null?void 0:e.helperRoot}afterRoot(i){return yt(this,null,function*(){const e=i.userData.vrmHumanoid;if(e===null)return;if(e===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");const t=i.userData.vrmExpressionManager;if(t!==null){if(t===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmExpressionManager is undefined. VRMExpressionLoaderPlugin have to be used first");i.userData.vrmLookAt=yield this._import(i,e,t)}})}_import(i,e,t){return yt(this,null,function*(){if(e==null||t==null)return null;const n=yield this._v1Import(i,e,t);if(n)return n;const s=yield this._v0Import(i,e,t);return s||null})}_v1Import(i,e,t){return yt(this,null,function*(){var n,s,r;const o=this.parser.json;if(!(((n=o.extensionsUsed)==null?void 0:n.indexOf("VRMC_vrm"))!==-1))return null;const l=(s=o.extensions)==null?void 0:s.VRMC_vrm;if(!l)return null;const c=l.specVersion;if(!yS.has(c))return console.warn(`VRMLookAtLoaderPlugin: Unknown VRMC_vrm specVersion "${c}"`),null;const h=l.lookAt;if(!h)return null;const u=h.type==="expression"?1:10,d=this._v1ImportRangeMap(h.rangeMapHorizontalInner,u),f=this._v1ImportRangeMap(h.rangeMapHorizontalOuter,u),g=this._v1ImportRangeMap(h.rangeMapVerticalDown,u),_=this._v1ImportRangeMap(h.rangeMapVerticalUp,u);let p;h.type==="expression"?p=new ih(t,d,f,g,_):p=new xa(e,d,f,g,_);const m=this._importLookAt(e,p);return m.offsetFromHeadBone.fromArray((r=h.offsetFromHeadBone)!=null?r:[0,.06,0]),m})}_v1ImportRangeMap(i,e){var t,n;let s=(t=i==null?void 0:i.inputMaxValue)!=null?t:90;const r=(n=i==null?void 0:i.outputScale)!=null?n:e;return s<na&&(console.warn("VRMLookAtLoaderPlugin: inputMaxValue of a range map is too small. Consider reviewing the range map!"),s=na),new jd(s,r)}_v0Import(i,e,t){return yt(this,null,function*(){var n,s,r,o;const l=(n=this.parser.json.extensions)==null?void 0:n.VRM;if(!l)return null;const c=l.firstPerson;if(!c)return null;const h=c.lookAtTypeName==="BlendShape"?1:10,u=this._v0ImportDegreeMap(c.lookAtHorizontalInner,h),d=this._v0ImportDegreeMap(c.lookAtHorizontalOuter,h),f=this._v0ImportDegreeMap(c.lookAtVerticalDown,h),g=this._v0ImportDegreeMap(c.lookAtVerticalUp,h);let _;c.lookAtTypeName==="BlendShape"?_=new ih(t,u,d,f,g):_=new xa(e,u,d,f,g);const p=this._importLookAt(e,_);return c.firstPersonBoneOffset?p.offsetFromHeadBone.set((s=c.firstPersonBoneOffset.x)!=null?s:0,(r=c.firstPersonBoneOffset.y)!=null?r:.06,-((o=c.firstPersonBoneOffset.z)!=null?o:0)):p.offsetFromHeadBone.set(0,.06,0),p.faceFront.set(0,0,-1),_ instanceof xa&&_.faceFront.set(0,0,-1),p})}_v0ImportDegreeMap(i,e){var t,n;const s=i==null?void 0:i.curve;JSON.stringify(s)!=="[0,0,0,1,1,1,1,0]"&&console.warn("Curves of LookAtDegreeMap defined in VRM 0.0 are not supported");let r=(t=i==null?void 0:i.xRange)!=null?t:90;const o=(n=i==null?void 0:i.yRange)!=null?n:e;return r<na&&(console.warn("VRMLookAtLoaderPlugin: xRange of a degree map is too small. Consider reviewing the degree map!"),r=na),new jd(r,o)}_importLookAt(i,e){const t=new xS(i,e);if(this.helperRoot){const n=new uS(t);this.helperRoot.add(n),n.renderOrder=this.helperRoot.renderOrder}return t}};function bS(i,e){return typeof i!="string"||i===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(i)&&(e=e.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(i)||/^data:.*,.*$/i.test(i)||/^blob:.*$/i.test(i)?i:e+i)}var wS=new Set(["1.0","1.0-beta"]),TS=class{get name(){return"VRMMetaLoaderPlugin"}constructor(i,e){var t,n,s;this.parser=i,this.needThumbnailImage=(t=e==null?void 0:e.needThumbnailImage)!=null?t:!1,this.acceptLicenseUrls=(n=e==null?void 0:e.acceptLicenseUrls)!=null?n:["https://vrm.dev/licenses/1.0/"],this.acceptV0Meta=(s=e==null?void 0:e.acceptV0Meta)!=null?s:!0}afterRoot(i){return yt(this,null,function*(){i.userData.vrmMeta=yield this._import(i)})}_import(i){return yt(this,null,function*(){const e=yield this._v1Import(i);if(e!=null)return e;const t=yield this._v0Import(i);return t!=null?t:null})}_v1Import(i){return yt(this,null,function*(){var e,t,n;const s=this.parser.json;if(!(((e=s.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;const o=(t=s.extensions)==null?void 0:t.VRMC_vrm;if(o==null)return null;const a=o.specVersion;if(!wS.has(a))return console.warn(`VRMMetaLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.meta;if(!l)return null;const c=l.licenseUrl;if(!new Set(this.acceptLicenseUrls).has(c))throw new Error(`VRMMetaLoaderPlugin: The license url "${c}" is not accepted`);let u;return this.needThumbnailImage&&l.thumbnailImage!=null&&(u=(n=yield this._extractGLTFImage(l.thumbnailImage))!=null?n:void 0),{metaVersion:"1",name:l.name,version:l.version,authors:l.authors,copyrightInformation:l.copyrightInformation,contactInformation:l.contactInformation,references:l.references,thirdPartyLicenses:l.thirdPartyLicenses,thumbnailImage:u,licenseUrl:l.licenseUrl,avatarPermission:l.avatarPermission,allowExcessivelyViolentUsage:l.allowExcessivelyViolentUsage,allowExcessivelySexualUsage:l.allowExcessivelySexualUsage,commercialUsage:l.commercialUsage,allowPoliticalOrReligiousUsage:l.allowPoliticalOrReligiousUsage,allowAntisocialOrHateUsage:l.allowAntisocialOrHateUsage,creditNotation:l.creditNotation,allowRedistribution:l.allowRedistribution,modification:l.modification,otherLicenseUrl:l.otherLicenseUrl}})}_v0Import(i){return yt(this,null,function*(){var e;const n=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!n)return null;const s=n.meta;if(!s)return null;if(!this.acceptV0Meta)throw new Error("VRMMetaLoaderPlugin: Attempted to load VRM0.0 meta but acceptV0Meta is false");let r;return this.needThumbnailImage&&s.texture!=null&&s.texture!==-1&&(r=yield this.parser.getDependency("texture",s.texture)),{metaVersion:"0",allowedUserName:s.allowedUserName,author:s.author,commercialUssageName:s.commercialUssageName,contactInformation:s.contactInformation,licenseName:s.licenseName,otherLicenseUrl:s.otherLicenseUrl,otherPermissionUrl:s.otherPermissionUrl,reference:s.reference,sexualUssageName:s.sexualUssageName,texture:r!=null?r:void 0,title:s.title,version:s.version,violentUssageName:s.violentUssageName}})}_extractGLTFImage(i){return yt(this,null,function*(){var e;const n=(e=this.parser.json.images)==null?void 0:e[i];if(n==null)return console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${i}] of glTF as a thumbnail but the image doesn't exist`),null;let s=n.uri;if(n.bufferView!=null){const o=yield this.parser.getDependency("bufferView",n.bufferView),a=new Blob([o],{type:n.mimeType});s=URL.createObjectURL(a)}return s==null?(console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${i}] of glTF as a thumbnail but the image couldn't load properly`),null):yield new ep().loadAsync(bS(s,this.parser.options.path)).catch(o=>(console.error(o),console.warn("VRMMetaLoaderPlugin: Failed to load a thumbnail image"),null))})}},ES=class{constructor(i){this.scene=i.scene,this.meta=i.meta,this.humanoid=i.humanoid,this.expressionManager=i.expressionManager,this.firstPerson=i.firstPerson,this.lookAt=i.lookAt}update(i){this.humanoid.update(),this.lookAt&&this.lookAt.update(i),this.expressionManager&&this.expressionManager.update()}},AS=class extends ES{constructor(i){super(i),this.materials=i.materials,this.springBoneManager=i.springBoneManager,this.nodeConstraintManager=i.nodeConstraintManager}update(i){super.update(i),this.nodeConstraintManager&&this.nodeConstraintManager.update(),this.springBoneManager&&this.springBoneManager.update(i),this.materials&&this.materials.forEach(e=>{e.update&&e.update(i)})}},RS=Object.defineProperty,qd=Object.getOwnPropertySymbols,CS=Object.prototype.hasOwnProperty,PS=Object.prototype.propertyIsEnumerable,Yd=(i,e,t)=>e in i?RS(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,$d=(i,e)=>{for(var t in e||(e={}))CS.call(e,t)&&Yd(i,t,e[t]);if(qd)for(var t of qd(e))PS.call(e,t)&&Yd(i,t,e[t]);return i},_s=(i,e,t)=>new Promise((n,s)=>{var r=l=>{try{a(t.next(l))}catch(c){s(c)}},o=l=>{try{a(t.throw(l))}catch(c){s(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,o);a((t=t.apply(i,e)).next())}),LS={"":3e3,srgb:3001};function IS(i,e){parseInt(xs,10)>=152?i.colorSpace=e:i.encoding=LS[e]}var US=class{get pending(){return Promise.all(this._pendings)}constructor(i,e){this._parser=i,this._materialParams=e,this._pendings=[]}assignPrimitive(i,e){e!=null&&(this._materialParams[i]=e)}assignColor(i,e,t){if(e!=null){const n=new pe().fromArray(e);t&&n.convertSRGBToLinear(),this._materialParams[i]=n}}assignTexture(i,e,t){return _s(this,null,function*(){const n=_s(this,null,function*(){if(e!=null){const s=yield this._parser.assignTexture(this._materialParams,i,e);if(s==null){console.warn("GLTFMToonMaterialParamsAssignHelper: Failed to load texture. The rendering result may be wrong");return}t&&IS(s,"srgb")}});return this._pendings.push(n),n})}assignTextureByIndex(i,e,t){return _s(this,null,function*(){return this.assignTexture(i,e!=null?{index:e}:void 0,t)})}},NS=`// #define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED
  varying vec3 vNormal;
#endif

#include <common>

// #include <uv_pars_vertex>
#ifdef MTOON_USE_UV
  varying vec2 vUv;

  // COMPAT: pre-r151 uses a common uvTransform
  #if THREE_VRM_THREE_REVISION < 151
    uniform mat3 uvTransform;
  #endif
#endif

// #include <uv2_pars_vertex>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    attribute vec2 uv2;
    varying vec2 vUv2;
    uniform mat3 uv2Transform;
  #endif
#endif

// #include <displacementmap_pars_vertex>
// #include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
  uniform sampler2D outlineWidthMultiplyTexture;
  uniform mat3 outlineWidthMultiplyTextureUvTransform;
#endif

uniform float outlineWidthFactor;

void main() {

  // #include <uv_vertex>
  #ifdef MTOON_USE_UV
    // COMPAT: pre-r151 uses a common uvTransform
    #if THREE_VRM_THREE_REVISION >= 151
      vUv = uv;
    #else
      vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
    #endif
  #endif

  // #include <uv2_vertex>
  // COMAPT: pre-r151 uses uv2 for lightMap and aoMap
  #if THREE_VRM_THREE_REVISION < 151
    #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
      vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
    #endif
  #endif

  #include <color_vertex>

  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>

  // we need this to compute the outline properly
  objectNormal = normalize( objectNormal );

  #include <defaultnormal_vertex>

  #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED
    vNormal = normalize( transformedNormal );
  #endif

  #include <begin_vertex>

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  // #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  vViewPosition = - mvPosition.xyz;

  #ifdef OUTLINE
    float worldNormalLength = length( transformedNormal );
    vec3 outlineOffset = outlineWidthFactor * worldNormalLength * objectNormal;

    #ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
      vec2 outlineWidthMultiplyTextureUv = ( outlineWidthMultiplyTextureUvTransform * vec3( vUv, 1 ) ).xy;
      float outlineTex = texture2D( outlineWidthMultiplyTexture, outlineWidthMultiplyTextureUv ).g;
      outlineOffset *= outlineTex;
    #endif

    #ifdef OUTLINE_WIDTH_SCREEN
      outlineOffset *= vViewPosition.z / projectionMatrix[ 1 ].y;
    #endif

    gl_Position = projectionMatrix * modelViewMatrix * vec4( outlineOffset + transformed, 1.0 );

    gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
  #endif

  #include <worldpos_vertex>
  // #include <envmap_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>

}`,DS=`// #define PHONG

uniform vec3 litFactor;

uniform float opacity;

uniform vec3 shadeColorFactor;
#ifdef USE_SHADEMULTIPLYTEXTURE
  uniform sampler2D shadeMultiplyTexture;
  uniform mat3 shadeMultiplyTextureUvTransform;
#endif

uniform float shadingShiftFactor;
uniform float shadingToonyFactor;

#ifdef USE_SHADINGSHIFTTEXTURE
  uniform sampler2D shadingShiftTexture;
  uniform mat3 shadingShiftTextureUvTransform;
  uniform float shadingShiftTextureScale;
#endif

uniform float giEqualizationFactor;

uniform vec3 parametricRimColorFactor;
#ifdef USE_RIMMULTIPLYTEXTURE
  uniform sampler2D rimMultiplyTexture;
  uniform mat3 rimMultiplyTextureUvTransform;
#endif
uniform float rimLightingMixFactor;
uniform float parametricRimFresnelPowerFactor;
uniform float parametricRimLiftFactor;

#ifdef USE_MATCAPTEXTURE
  uniform vec3 matcapFactor;
  uniform sampler2D matcapTexture;
  uniform mat3 matcapTextureUvTransform;
#endif

uniform vec3 emissive;
uniform float emissiveIntensity;

uniform vec3 outlineColorFactor;
uniform float outlineLightingMixFactor;

#ifdef USE_UVANIMATIONMASKTEXTURE
  uniform sampler2D uvAnimationMaskTexture;
  uniform mat3 uvAnimationMaskTextureUvTransform;
#endif

uniform float uvAnimationScrollXOffset;
uniform float uvAnimationScrollYOffset;
uniform float uvAnimationRotationPhase;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>

// #include <uv_pars_fragment>
#if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
  varying vec2 vUv;
#endif

// #include <uv2_pars_fragment>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    varying vec2 vUv2;
  #endif
#endif

#include <map_pars_fragment>

#ifdef USE_MAP
  uniform mat3 mapUvTransform;
#endif

// #include <alphamap_pars_fragment>

#include <alphatest_pars_fragment>

#include <aomap_pars_fragment>
// #include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>

#ifdef USE_EMISSIVEMAP
  uniform mat3 emissiveMapUvTransform;
#endif

// #include <envmap_common_pars_fragment>
// #include <envmap_pars_fragment>
// #include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>

// #include <bsdfs>
// COMPAT: pre-r151 doesn't have BRDF_Lambert in <common>
#if THREE_VRM_THREE_REVISION < 151
  vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
    return RECIPROCAL_PI * diffuseColor;
  }
#endif

#include <lights_pars_begin>

#include <normal_pars_fragment>

// #include <lights_phong_pars_fragment>
varying vec3 vViewPosition;

struct MToonMaterial {
  vec3 diffuseColor;
  vec3 shadeColor;
  float shadingShift;
};

float linearstep( float a, float b, float t ) {
  return clamp( ( t - a ) / ( b - a ), 0.0, 1.0 );
}

/**
 * Convert NdotL into toon shading factor using shadingShift and shadingToony
 */
float getShading(
  const in float dotNL,
  const in float shadow,
  const in float shadingShift
) {
  float shading = dotNL;
  shading = shading + shadingShift;
  shading = linearstep( -1.0 + shadingToonyFactor, 1.0 - shadingToonyFactor, shading );
  shading *= shadow;
  return shading;
}

/**
 * Mix diffuseColor and shadeColor using shading factor and light color
 */
vec3 getDiffuse(
  const in MToonMaterial material,
  const in float shading,
  in vec3 lightColor
) {
  #ifdef DEBUG_LITSHADERATE
    return vec3( BRDF_Lambert( shading * lightColor ) );
  #endif

  vec3 col = lightColor * BRDF_Lambert( mix( material.shadeColor, material.diffuseColor, shading ) );

  // The "comment out if you want to PBR absolutely" line
  #ifdef V0_COMPAT_SHADE
    col = min( col, material.diffuseColor );
  #endif

  return col;
}

// COMPAT: pre-r156 uses a struct GeometricContext
#if THREE_VRM_THREE_REVISION >= 157
  void RE_Direct_MToon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometryNormal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#else
  void RE_Direct_MToon( const in IncidentLight directLight, const in GeometricContext geometry, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometry.normal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in GeometricContext geometry, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#endif

#define RE_Direct RE_Direct_MToon
#define RE_IndirectDiffuse RE_IndirectDiffuse_MToon
#define Material_LightProbeLOD( material ) (0)

#include <shadowmap_pars_fragment>
// #include <bumpmap_pars_fragment>

// #include <normalmap_pars_fragment>
#ifdef USE_NORMALMAP

  uniform sampler2D normalMap;
  uniform mat3 normalMapUvTransform;
  uniform vec2 normalScale;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
#if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

  uniform mat3 normalMatrix;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( TANGENTSPACE_NORMALMAP ) )

  // Per-Pixel Tangent Space Normal Mapping
  // http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

  // three-vrm specific change: it requires \`uv\` as an input in order to support uv scrolls

  // Temporary compat against shader change @ Three.js r126, r151
  #if THREE_VRM_THREE_REVISION >= 151

    mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

      vec3 q0 = dFdx( eye_pos.xyz );
      vec3 q1 = dFdy( eye_pos.xyz );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = surf_norm;

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

      return mat3( T * scale, B * scale, N );

    }

  #else

    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

      vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
      vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = normalize( surf_norm );

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
      // TODO: Is this still required? Or shall I make a PR about it?
      if ( length( T ) == 0.0 || length( B ) == 0.0 ) {
        return surf_norm;
      }

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

      return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

    }

  #endif

#endif

// #include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

// == post correction ==========================================================
void postCorrection() {
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}

// == main procedure ===========================================================
void main() {
  #include <clipping_planes_fragment>

  vec2 uv = vec2(0.5, 0.5);

  #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
    uv = vUv;

    float uvAnimMask = 1.0;
    #ifdef USE_UVANIMATIONMASKTEXTURE
      vec2 uvAnimationMaskTextureUv = ( uvAnimationMaskTextureUvTransform * vec3( uv, 1 ) ).xy;
      uvAnimMask = texture2D( uvAnimationMaskTexture, uvAnimationMaskTextureUv ).b;
    #endif

    float uvRotCos = cos( uvAnimationRotationPhase * uvAnimMask );
    float uvRotSin = sin( uvAnimationRotationPhase * uvAnimMask );
    uv = mat2( uvRotCos, -uvRotSin, uvRotSin, uvRotCos ) * ( uv - 0.5 ) + 0.5;
    uv = uv + vec2( uvAnimationScrollXOffset, uvAnimationScrollYOffset ) * uvAnimMask;
  #endif

  #ifdef DEBUG_UV
    gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
    #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
      gl_FragColor = vec4( uv, 0.0, 1.0 );
    #endif
    return;
  #endif

  vec4 diffuseColor = vec4( litFactor, opacity );
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive * emissiveIntensity;

  #include <logdepthbuf_fragment>

  // #include <map_fragment>
  #ifdef USE_MAP
    vec2 mapUv = ( mapUvTransform * vec3( uv, 1 ) ).xy;
    vec4 sampledDiffuseColor = texture2D( map, mapUv );
    #ifdef DECODE_VIDEO_TEXTURE
      sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
    #endif
    diffuseColor *= sampledDiffuseColor;
  #endif

  // #include <color_fragment>
  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    diffuseColor.rgb *= vColor;
  #endif

  // #include <alphamap_fragment>

  #include <alphatest_fragment>

  // #include <specularmap_fragment>

  // #include <normal_fragment_begin>
  float faceDirection = gl_FrontFacing ? 1.0 : -1.0;

  #ifdef FLAT_SHADED

    vec3 fdx = dFdx( vViewPosition );
    vec3 fdy = dFdy( vViewPosition );
    vec3 normal = normalize( cross( fdx, fdy ) );

  #else

    vec3 normal = normalize( vNormal );

    #ifdef DOUBLE_SIDED

      normal *= faceDirection;

    #endif

  #endif

  #ifdef USE_NORMALMAP

    vec2 normalMapUv = ( normalMapUvTransform * vec3( uv, 1 ) ).xy;

  #endif

  #ifdef USE_NORMALMAP_TANGENTSPACE

    #ifdef USE_TANGENT

      mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn = getTangentFrame( - vViewPosition, normal, normalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn[0] *= faceDirection;
      tbn[1] *= faceDirection;

    #endif

  #endif

  #ifdef USE_CLEARCOAT_NORMALMAP

    #ifdef USE_TANGENT

      mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn2[0] *= faceDirection;
      tbn2[1] *= faceDirection;

    #endif

  #endif

  // non perturbed normal for clearcoat among others

  vec3 nonPerturbedNormal = normal;

  #ifdef OUTLINE
    normal *= -1.0;
  #endif

  // #include <normal_fragment_maps>

  // COMPAT: pre-r151
  // USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
  #if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

    normal = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

    #ifdef FLIP_SIDED

      normal = - normal;

    #endif

    #ifdef DOUBLE_SIDED

      normal = normal * faceDirection;

    #endif

    normal = normalize( normalMatrix * normal );

  // COMPAT: pre-r151
  // USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
  #elif defined( USE_NORMALMAP_TANGENTSPACE ) || defined( TANGENTSPACE_NORMALMAP )

    vec3 mapN = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0;
    mapN.xy *= normalScale;

    // COMPAT: pre-r151
    #if THREE_VRM_THREE_REVISION >= 151 || defined( USE_TANGENT )

      normal = normalize( tbn * mapN );

    #else

      normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN, faceDirection );

    #endif

  #endif

  // #include <emissivemap_fragment>
  #ifdef USE_EMISSIVEMAP
    vec2 emissiveMapUv = ( emissiveMapUvTransform * vec3( uv, 1 ) ).xy;
    totalEmissiveRadiance *= texture2D( emissiveMap, emissiveMapUv ).rgb;
  #endif

  #ifdef DEBUG_NORMAL
    gl_FragColor = vec4( 0.5 + 0.5 * normal, 1.0 );
    return;
  #endif

  // -- MToon: lighting --------------------------------------------------------
  // accumulation
  // #include <lights_phong_fragment>
  MToonMaterial material;

  material.diffuseColor = diffuseColor.rgb;

  material.shadeColor = shadeColorFactor;
  #ifdef USE_SHADEMULTIPLYTEXTURE
    vec2 shadeMultiplyTextureUv = ( shadeMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadeColor *= texture2D( shadeMultiplyTexture, shadeMultiplyTextureUv ).rgb;
  #endif

  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    material.shadeColor.rgb *= vColor;
  #endif

  material.shadingShift = shadingShiftFactor;
  #ifdef USE_SHADINGSHIFTTEXTURE
    vec2 shadingShiftTextureUv = ( shadingShiftTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadingShift += texture2D( shadingShiftTexture, shadingShiftTextureUv ).r * shadingShiftTextureScale;
  #endif

  // #include <lights_fragment_begin>

  // MToon Specific changes:
  // Since we want to take shadows into account of shading instead of irradiance,
  // we had to modify the codes that multiplies the results of shadowmap into color of direct lights.

  // COMPAT: pre-r156 uses a struct GeometricContext
  #if THREE_VRM_THREE_REVISION >= 157
    vec3 geometryPosition = - vViewPosition;
    vec3 geometryNormal = normal;
    vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    vec3 geometryClearcoatNormal;

    #ifdef USE_CLEARCOAT

      geometryClearcoatNormal = clearcoatNormal;

    #endif
  #else
    GeometricContext geometry;

    geometry.position = - vViewPosition;
    geometry.normal = normal;
    geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    #ifdef USE_CLEARCOAT

      geometry.clearcoatNormal = clearcoatNormal;

    #endif
  #endif

  IncidentLight directLight;

  // since these variables will be used in unrolled loop, we have to define in prior
  float shadow;

  #if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

    PointLight pointLight;
    #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
    PointLightShadow pointLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

      pointLight = pointLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getPointLightInfo( pointLight, geometryPosition, directLight );
      #else
        getPointLightInfo( pointLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
      pointLightShadow = pointLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

    SpotLight spotLight;
    // COMPAT: pre-r144 uses NUM_SPOT_LIGHT_SHADOWS, r144+ uses NUM_SPOT_LIGHT_COORDS
    #if THREE_VRM_THREE_REVISION >= 144
      #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_COORDS > 0
      SpotLightShadow spotLightShadow;
      #endif
    #elif defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
    SpotLightShadow spotLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

      spotLight = spotLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getSpotLightInfo( spotLight, geometryPosition, directLight );
      #else
        getSpotLightInfo( spotLight, geometry, directLight );
      #endif

      shadow = 1.0;
      // COMPAT: pre-r144 uses NUM_SPOT_LIGHT_SHADOWS and vSpotShadowCoord, r144+ uses NUM_SPOT_LIGHT_COORDS and vSpotLightCoord
      // COMPAT: pre-r166 does not have shadowIntensity, r166+ has shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_COORDS )
        spotLightShadow = spotLightShadows[ i ];
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
        #endif
      #elif THREE_VRM_THREE_REVISION >= 144
        #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_COORDS )
        spotLightShadow = spotLightShadows[ i ];
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
        #endif
      #elif defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
      spotLightShadow = spotLightShadows[ i ];
      shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

    DirectionalLight directionalLight;
    #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
    DirectionalLightShadow directionalLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

      directionalLight = directionalLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getDirectionalLightInfo( directionalLight, directLight );
      #else
        getDirectionalLightInfo( directionalLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
      directionalLightShadow = directionalLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  // #if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

  //   RectAreaLight rectAreaLight;

  //   #pragma unroll_loop_start
  //   for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

  //     rectAreaLight = rectAreaLights[ i ];
  //     RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

  //   }
  //   #pragma unroll_loop_end

  // #endif

  #if defined( RE_IndirectDiffuse )

    vec3 iblIrradiance = vec3( 0.0 );

    vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

    // COMPAT: pre-r156 uses a struct GeometricContext
    // COMPAT: pre-r156 doesn't have a define USE_LIGHT_PROBES
    #if THREE_VRM_THREE_REVISION >= 157
      #if defined( USE_LIGHT_PROBES )
        irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
      #endif
    #else
      irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
    #endif

    #if ( NUM_HEMI_LIGHTS > 0 )

      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

        // COMPAT: pre-r156 uses a struct GeometricContext
        #if THREE_VRM_THREE_REVISION >= 157
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
        #else
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
        #endif

      }
      #pragma unroll_loop_end

    #endif

  #endif

  // #if defined( RE_IndirectSpecular )

  //   vec3 radiance = vec3( 0.0 );
  //   vec3 clearcoatRadiance = vec3( 0.0 );

  // #endif

  #include <lights_fragment_maps>
  #include <lights_fragment_end>

  // modulation
  #include <aomap_fragment>

  vec3 col = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;

  #ifdef DEBUG_LITSHADERATE
    gl_FragColor = vec4( col, diffuseColor.a );
    postCorrection();
    return;
  #endif

  // -- MToon: rim lighting -----------------------------------------
  vec3 viewDir = normalize( vViewPosition );

  #ifndef PHYSICALLY_CORRECT_LIGHTS
    reflectedLight.directSpecular /= PI;
  #endif
  vec3 rimMix = mix( vec3( 1.0 ), reflectedLight.directSpecular, rimLightingMixFactor );

  vec3 rim = parametricRimColorFactor * pow( saturate( 1.0 - dot( viewDir, normal ) + parametricRimLiftFactor ), parametricRimFresnelPowerFactor );

  #ifdef USE_MATCAPTEXTURE
    {
      vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );
      vec3 y = cross( viewDir, x ); // guaranteed to be normalized
      vec2 sphereUv = 0.5 + 0.5 * vec2( dot( x, normal ), -dot( y, normal ) );
      sphereUv = ( matcapTextureUvTransform * vec3( sphereUv, 1 ) ).xy;
      vec3 matcap = texture2D( matcapTexture, sphereUv ).rgb;
      rim += matcapFactor * matcap;
    }
  #endif

  #ifdef USE_RIMMULTIPLYTEXTURE
    vec2 rimMultiplyTextureUv = ( rimMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    rim *= texture2D( rimMultiplyTexture, rimMultiplyTextureUv ).rgb;
  #endif

  col += rimMix * rim;

  // -- MToon: Emission --------------------------------------------------------
  col += totalEmissiveRadiance;

  // #include <envmap_fragment>

  // -- Almost done! -----------------------------------------------------------
  #if defined( OUTLINE )
    col = outlineColorFactor.rgb * mix( vec3( 1.0 ), col, outlineLightingMixFactor );
  #endif

  #ifdef OPAQUE
    diffuseColor.a = 1.0;
  #endif

  gl_FragColor = vec4( col, diffuseColor.a );
  postCorrection();
}
`,kS={None:"none"},Kd={None:"none",ScreenCoordinates:"screenCoordinates"},OS={3e3:"",3001:"srgb"};function Ol(i){return parseInt(xs,10)>=152?i.colorSpace:OS[i.encoding]}var FS=class extends nn{constructor(i={}){var e;super({vertexShader:NS,fragmentShader:DS}),this.uvAnimationScrollXSpeedFactor=0,this.uvAnimationScrollYSpeedFactor=0,this.uvAnimationRotationSpeedFactor=0,this.fog=!0,this.normalMapType=vo,this._ignoreVertexColor=!0,this._v0CompatShade=!1,this._debugMode=kS.None,this._outlineWidthMode=Kd.None,this._isOutline=!1,i.transparentWithZWrite&&(i.depthWrite=!0),delete i.transparentWithZWrite,i.fog=!0,i.lights=!0,i.clipping=!0,this.uniforms=Gf.merge([de.common,de.normalmap,de.emissivemap,de.fog,de.lights,{litFactor:{value:new pe(1,1,1)},mapUvTransform:{value:new Be},colorAlpha:{value:1},normalMapUvTransform:{value:new Be},shadeColorFactor:{value:new pe(0,0,0)},shadeMultiplyTexture:{value:null},shadeMultiplyTextureUvTransform:{value:new Be},shadingShiftFactor:{value:0},shadingShiftTexture:{value:null},shadingShiftTextureUvTransform:{value:new Be},shadingShiftTextureScale:{value:1},shadingToonyFactor:{value:.9},giEqualizationFactor:{value:.9},matcapFactor:{value:new pe(1,1,1)},matcapTexture:{value:null},matcapTextureUvTransform:{value:new Be},parametricRimColorFactor:{value:new pe(0,0,0)},rimMultiplyTexture:{value:null},rimMultiplyTextureUvTransform:{value:new Be},rimLightingMixFactor:{value:1},parametricRimFresnelPowerFactor:{value:5},parametricRimLiftFactor:{value:0},emissive:{value:new pe(0,0,0)},emissiveIntensity:{value:1},emissiveMapUvTransform:{value:new Be},outlineWidthMultiplyTexture:{value:null},outlineWidthMultiplyTextureUvTransform:{value:new Be},outlineWidthFactor:{value:0},outlineColorFactor:{value:new pe(0,0,0)},outlineLightingMixFactor:{value:1},uvAnimationMaskTexture:{value:null},uvAnimationMaskTextureUvTransform:{value:new Be},uvAnimationScrollXOffset:{value:0},uvAnimationScrollYOffset:{value:0},uvAnimationRotationPhase:{value:0}},(e=i.uniforms)!=null?e:{}]),this.setValues(i),this._uploadUniformsWorkaround(),this.customProgramCacheKey=()=>[...Object.entries(this._generateDefines()).map(([t,n])=>`${t}:${n}`),this.matcapTexture?`matcapTextureColorSpace:${Ol(this.matcapTexture)}`:"",this.shadeMultiplyTexture?`shadeMultiplyTextureColorSpace:${Ol(this.shadeMultiplyTexture)}`:"",this.rimMultiplyTexture?`rimMultiplyTextureColorSpace:${Ol(this.rimMultiplyTexture)}`:""].join(","),this.onBeforeCompile=t=>{const n=parseInt(xs,10),s=Object.entries($d($d({},this._generateDefines()),this.defines)).filter(([r,o])=>!!o).map(([r,o])=>`#define ${r} ${o}`).join(`
`)+`
`;t.vertexShader=s+t.vertexShader,t.fragmentShader=s+t.fragmentShader,n<154&&(t.fragmentShader=t.fragmentShader.replace("#include <colorspace_fragment>","#include <encodings_fragment>"))}}get color(){return this.uniforms.litFactor.value}set color(i){this.uniforms.litFactor.value=i}get map(){return this.uniforms.map.value}set map(i){this.uniforms.map.value=i}get normalMap(){return this.uniforms.normalMap.value}set normalMap(i){this.uniforms.normalMap.value=i}get normalScale(){return this.uniforms.normalScale.value}set normalScale(i){this.uniforms.normalScale.value=i}get emissive(){return this.uniforms.emissive.value}set emissive(i){this.uniforms.emissive.value=i}get emissiveIntensity(){return this.uniforms.emissiveIntensity.value}set emissiveIntensity(i){this.uniforms.emissiveIntensity.value=i}get emissiveMap(){return this.uniforms.emissiveMap.value}set emissiveMap(i){this.uniforms.emissiveMap.value=i}get shadeColorFactor(){return this.uniforms.shadeColorFactor.value}set shadeColorFactor(i){this.uniforms.shadeColorFactor.value=i}get shadeMultiplyTexture(){return this.uniforms.shadeMultiplyTexture.value}set shadeMultiplyTexture(i){this.uniforms.shadeMultiplyTexture.value=i}get shadingShiftFactor(){return this.uniforms.shadingShiftFactor.value}set shadingShiftFactor(i){this.uniforms.shadingShiftFactor.value=i}get shadingShiftTexture(){return this.uniforms.shadingShiftTexture.value}set shadingShiftTexture(i){this.uniforms.shadingShiftTexture.value=i}get shadingShiftTextureScale(){return this.uniforms.shadingShiftTextureScale.value}set shadingShiftTextureScale(i){this.uniforms.shadingShiftTextureScale.value=i}get shadingToonyFactor(){return this.uniforms.shadingToonyFactor.value}set shadingToonyFactor(i){this.uniforms.shadingToonyFactor.value=i}get giEqualizationFactor(){return this.uniforms.giEqualizationFactor.value}set giEqualizationFactor(i){this.uniforms.giEqualizationFactor.value=i}get matcapFactor(){return this.uniforms.matcapFactor.value}set matcapFactor(i){this.uniforms.matcapFactor.value=i}get matcapTexture(){return this.uniforms.matcapTexture.value}set matcapTexture(i){this.uniforms.matcapTexture.value=i}get parametricRimColorFactor(){return this.uniforms.parametricRimColorFactor.value}set parametricRimColorFactor(i){this.uniforms.parametricRimColorFactor.value=i}get rimMultiplyTexture(){return this.uniforms.rimMultiplyTexture.value}set rimMultiplyTexture(i){this.uniforms.rimMultiplyTexture.value=i}get rimLightingMixFactor(){return this.uniforms.rimLightingMixFactor.value}set rimLightingMixFactor(i){this.uniforms.rimLightingMixFactor.value=i}get parametricRimFresnelPowerFactor(){return this.uniforms.parametricRimFresnelPowerFactor.value}set parametricRimFresnelPowerFactor(i){this.uniforms.parametricRimFresnelPowerFactor.value=i}get parametricRimLiftFactor(){return this.uniforms.parametricRimLiftFactor.value}set parametricRimLiftFactor(i){this.uniforms.parametricRimLiftFactor.value=i}get outlineWidthMultiplyTexture(){return this.uniforms.outlineWidthMultiplyTexture.value}set outlineWidthMultiplyTexture(i){this.uniforms.outlineWidthMultiplyTexture.value=i}get outlineWidthFactor(){return this.uniforms.outlineWidthFactor.value}set outlineWidthFactor(i){this.uniforms.outlineWidthFactor.value=i}get outlineColorFactor(){return this.uniforms.outlineColorFactor.value}set outlineColorFactor(i){this.uniforms.outlineColorFactor.value=i}get outlineLightingMixFactor(){return this.uniforms.outlineLightingMixFactor.value}set outlineLightingMixFactor(i){this.uniforms.outlineLightingMixFactor.value=i}get uvAnimationMaskTexture(){return this.uniforms.uvAnimationMaskTexture.value}set uvAnimationMaskTexture(i){this.uniforms.uvAnimationMaskTexture.value=i}get uvAnimationScrollXOffset(){return this.uniforms.uvAnimationScrollXOffset.value}set uvAnimationScrollXOffset(i){this.uniforms.uvAnimationScrollXOffset.value=i}get uvAnimationScrollYOffset(){return this.uniforms.uvAnimationScrollYOffset.value}set uvAnimationScrollYOffset(i){this.uniforms.uvAnimationScrollYOffset.value=i}get uvAnimationRotationPhase(){return this.uniforms.uvAnimationRotationPhase.value}set uvAnimationRotationPhase(i){this.uniforms.uvAnimationRotationPhase.value=i}get ignoreVertexColor(){return this._ignoreVertexColor}set ignoreVertexColor(i){this._ignoreVertexColor=i,this.needsUpdate=!0}get v0CompatShade(){return this._v0CompatShade}set v0CompatShade(i){this._v0CompatShade=i,this.needsUpdate=!0}get debugMode(){return this._debugMode}set debugMode(i){this._debugMode=i,this.needsUpdate=!0}get outlineWidthMode(){return this._outlineWidthMode}set outlineWidthMode(i){this._outlineWidthMode=i,this.needsUpdate=!0}get isOutline(){return this._isOutline}set isOutline(i){this._isOutline=i,this.needsUpdate=!0}get isMToonMaterial(){return!0}update(i){this._uploadUniformsWorkaround(),this._updateUVAnimation(i)}copy(i){return super.copy(i),this.map=i.map,this.normalMap=i.normalMap,this.emissiveMap=i.emissiveMap,this.shadeMultiplyTexture=i.shadeMultiplyTexture,this.shadingShiftTexture=i.shadingShiftTexture,this.matcapTexture=i.matcapTexture,this.rimMultiplyTexture=i.rimMultiplyTexture,this.outlineWidthMultiplyTexture=i.outlineWidthMultiplyTexture,this.uvAnimationMaskTexture=i.uvAnimationMaskTexture,this.normalMapType=i.normalMapType,this.uvAnimationScrollXSpeedFactor=i.uvAnimationScrollXSpeedFactor,this.uvAnimationScrollYSpeedFactor=i.uvAnimationScrollYSpeedFactor,this.uvAnimationRotationSpeedFactor=i.uvAnimationRotationSpeedFactor,this.ignoreVertexColor=i.ignoreVertexColor,this.v0CompatShade=i.v0CompatShade,this.debugMode=i.debugMode,this.outlineWidthMode=i.outlineWidthMode,this.isOutline=i.isOutline,this.needsUpdate=!0,this}_updateUVAnimation(i){this.uniforms.uvAnimationScrollXOffset.value+=i*this.uvAnimationScrollXSpeedFactor,this.uniforms.uvAnimationScrollYOffset.value+=i*this.uvAnimationScrollYSpeedFactor,this.uniforms.uvAnimationRotationPhase.value+=i*this.uvAnimationRotationSpeedFactor,this.uniforms.alphaTest.value=this.alphaTest,this.uniformsNeedUpdate=!0}_uploadUniformsWorkaround(){this.uniforms.opacity.value=this.opacity,this._updateTextureMatrix(this.uniforms.map,this.uniforms.mapUvTransform),this._updateTextureMatrix(this.uniforms.normalMap,this.uniforms.normalMapUvTransform),this._updateTextureMatrix(this.uniforms.emissiveMap,this.uniforms.emissiveMapUvTransform),this._updateTextureMatrix(this.uniforms.shadeMultiplyTexture,this.uniforms.shadeMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.shadingShiftTexture,this.uniforms.shadingShiftTextureUvTransform),this._updateTextureMatrix(this.uniforms.matcapTexture,this.uniforms.matcapTextureUvTransform),this._updateTextureMatrix(this.uniforms.rimMultiplyTexture,this.uniforms.rimMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.outlineWidthMultiplyTexture,this.uniforms.outlineWidthMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.uvAnimationMaskTexture,this.uniforms.uvAnimationMaskTextureUvTransform),this.uniformsNeedUpdate=!0}_generateDefines(){const i=parseInt(xs,10),e=this.outlineWidthMultiplyTexture!==null,t=this.map!==null||this.normalMap!==null||this.emissiveMap!==null||this.shadeMultiplyTexture!==null||this.shadingShiftTexture!==null||this.rimMultiplyTexture!==null||this.uvAnimationMaskTexture!==null;return{THREE_VRM_THREE_REVISION:i,OUTLINE:this._isOutline,MTOON_USE_UV:e||t,MTOON_UVS_VERTEX_ONLY:e&&!t,V0_COMPAT_SHADE:this._v0CompatShade,USE_SHADEMULTIPLYTEXTURE:this.shadeMultiplyTexture!==null,USE_SHADINGSHIFTTEXTURE:this.shadingShiftTexture!==null,USE_MATCAPTEXTURE:this.matcapTexture!==null,USE_RIMMULTIPLYTEXTURE:this.rimMultiplyTexture!==null,USE_OUTLINEWIDTHMULTIPLYTEXTURE:this._isOutline&&this.outlineWidthMultiplyTexture!==null,USE_UVANIMATIONMASKTEXTURE:this.uvAnimationMaskTexture!==null,IGNORE_VERTEX_COLOR:this._ignoreVertexColor===!0,DEBUG_NORMAL:this._debugMode==="normal",DEBUG_LITSHADERATE:this._debugMode==="litShadeRate",DEBUG_UV:this._debugMode==="uv",OUTLINE_WIDTH_SCREEN:this._isOutline&&this._outlineWidthMode===Kd.ScreenCoordinates}}_updateTextureMatrix(i,e){i.value&&(i.value.matrixAutoUpdate&&i.value.updateMatrix(),e.value.copy(i.value.matrix))}},BS=new Set(["1.0","1.0-beta"]),Bp=class Ma{get name(){return Ma.EXTENSION_NAME}constructor(e,t={}){var n,s,r,o;this.parser=e,this.materialType=(n=t.materialType)!=null?n:FS,this.renderOrderOffset=(s=t.renderOrderOffset)!=null?s:0,this.v0CompatShade=(r=t.v0CompatShade)!=null?r:!1,this.debugMode=(o=t.debugMode)!=null?o:"none",this._mToonMaterialSet=new Set}beforeRoot(){return _s(this,null,function*(){this._removeUnlitExtensionIfMToonExists()})}afterRoot(e){return _s(this,null,function*(){e.userData.vrmMToonMaterials=Array.from(this._mToonMaterialSet)})}getMaterialType(e){return this._getMToonExtension(e)?this.materialType:null}extendMaterialParams(e,t){const n=this._getMToonExtension(e);return n?this._extendMaterialParams(n,t):null}loadMesh(e){return _s(this,null,function*(){var t;const n=this.parser,r=(t=n.json.meshes)==null?void 0:t[e];if(r==null)throw new Error(`MToonMaterialLoaderPlugin: Attempt to use meshes[${e}] of glTF but the mesh doesn't exist`);const o=r.primitives,a=yield n.loadMesh(e);if(o.length===1){const l=a,c=o[0].material;c!=null&&this._setupPrimitive(l,c)}else{const l=a;for(let c=0;c<o.length;c++){const h=l.children[c],u=o[c].material;u!=null&&this._setupPrimitive(h,u)}}return a})}_removeUnlitExtensionIfMToonExists(){const n=this.parser.json.materials;n==null||n.map((s,r)=>{var o;this._getMToonExtension(r)&&((o=s.extensions)!=null&&o.KHR_materials_unlit)&&delete s.extensions.KHR_materials_unlit})}_getMToonExtension(e){var t,n;const o=(t=this.parser.json.materials)==null?void 0:t[e];if(o==null){console.warn(`MToonMaterialLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const a=(n=o.extensions)==null?void 0:n[Ma.EXTENSION_NAME];if(a==null)return;const l=a.specVersion;if(!BS.has(l)){console.warn(`MToonMaterialLoaderPlugin: Unknown ${Ma.EXTENSION_NAME} specVersion "${l}"`);return}return a}_extendMaterialParams(e,t){return _s(this,null,function*(){var n;delete t.metalness,delete t.roughness;const s=new US(this.parser,t);s.assignPrimitive("transparentWithZWrite",e.transparentWithZWrite),s.assignColor("shadeColorFactor",e.shadeColorFactor),s.assignTexture("shadeMultiplyTexture",e.shadeMultiplyTexture,!0),s.assignPrimitive("shadingShiftFactor",e.shadingShiftFactor),s.assignTexture("shadingShiftTexture",e.shadingShiftTexture,!0),s.assignPrimitive("shadingShiftTextureScale",(n=e.shadingShiftTexture)==null?void 0:n.scale),s.assignPrimitive("shadingToonyFactor",e.shadingToonyFactor),s.assignPrimitive("giEqualizationFactor",e.giEqualizationFactor),s.assignColor("matcapFactor",e.matcapFactor),s.assignTexture("matcapTexture",e.matcapTexture,!0),s.assignColor("parametricRimColorFactor",e.parametricRimColorFactor),s.assignTexture("rimMultiplyTexture",e.rimMultiplyTexture,!0),s.assignPrimitive("rimLightingMixFactor",e.rimLightingMixFactor),s.assignPrimitive("parametricRimFresnelPowerFactor",e.parametricRimFresnelPowerFactor),s.assignPrimitive("parametricRimLiftFactor",e.parametricRimLiftFactor),s.assignPrimitive("outlineWidthMode",e.outlineWidthMode),s.assignPrimitive("outlineWidthFactor",e.outlineWidthFactor),s.assignTexture("outlineWidthMultiplyTexture",e.outlineWidthMultiplyTexture,!1),s.assignColor("outlineColorFactor",e.outlineColorFactor),s.assignPrimitive("outlineLightingMixFactor",e.outlineLightingMixFactor),s.assignTexture("uvAnimationMaskTexture",e.uvAnimationMaskTexture,!1),s.assignPrimitive("uvAnimationScrollXSpeedFactor",e.uvAnimationScrollXSpeedFactor),s.assignPrimitive("uvAnimationScrollYSpeedFactor",e.uvAnimationScrollYSpeedFactor),s.assignPrimitive("uvAnimationRotationSpeedFactor",e.uvAnimationRotationSpeedFactor),s.assignPrimitive("v0CompatShade",this.v0CompatShade),s.assignPrimitive("debugMode",this.debugMode),yield s.pending})}_setupPrimitive(e,t){const n=this._getMToonExtension(t);if(n){const s=this._parseRenderOrder(n);e.renderOrder=s+this.renderOrderOffset,this._generateOutline(e),this._addToMaterialSet(e);return}}_shouldGenerateOutline(e){return typeof e.outlineWidthMode=="string"&&e.outlineWidthMode!=="none"&&typeof e.outlineWidthFactor=="number"&&e.outlineWidthFactor>0}_generateOutline(e){const t=e.material;if(!(t instanceof Cn)||!this._shouldGenerateOutline(t))return;e.material=[t];const n=t.clone();n.name+=" (Outline)",n.isOutline=!0,n.side=dn,e.material.push(n);const s=e.geometry,r=s.index?s.index.count:s.attributes.position.count/3;s.addGroup(0,r,0),s.addGroup(0,r,1)}_addToMaterialSet(e){const t=e.material,n=new Set;Array.isArray(t)?t.forEach(s=>n.add(s)):n.add(t);for(const s of n)this._mToonMaterialSet.add(s)}_parseRenderOrder(e){var t;return(e.transparentWithZWrite?0:19)+((t=e.renderQueueOffsetNumber)!=null?t:0)}};Bp.EXTENSION_NAME="VRMC_materials_mtoon";var VS=Bp,zS=(i,e,t)=>new Promise((n,s)=>{var r=l=>{try{a(t.next(l))}catch(c){s(c)}},o=l=>{try{a(t.throw(l))}catch(c){s(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,o);a((t=t.apply(i,e)).next())}),Vp=class sh{get name(){return sh.EXTENSION_NAME}constructor(e){this.parser=e}extendMaterialParams(e,t){return zS(this,null,function*(){const n=this._getHDREmissiveMultiplierExtension(e);if(n==null)return;console.warn("VRMMaterialsHDREmissiveMultiplierLoaderPlugin: `VRMC_materials_hdr_emissiveMultiplier` is archived. Use `KHR_materials_emissive_strength` instead.");const s=n.emissiveMultiplier;t.emissiveIntensity=s})}_getHDREmissiveMultiplierExtension(e){var t,n;const o=(t=this.parser.json.materials)==null?void 0:t[e];if(o==null){console.warn(`VRMMaterialsHDREmissiveMultiplierLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const a=(n=o.extensions)==null?void 0:n[sh.EXTENSION_NAME];if(a!=null)return a}};Vp.EXTENSION_NAME="VRMC_materials_hdr_emissiveMultiplier";var HS=Vp,GS=Object.defineProperty,WS=Object.defineProperties,XS=Object.getOwnPropertyDescriptors,Zd=Object.getOwnPropertySymbols,jS=Object.prototype.hasOwnProperty,qS=Object.prototype.propertyIsEnumerable,Jd=(i,e,t)=>e in i?GS(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Yn=(i,e)=>{for(var t in e||(e={}))jS.call(e,t)&&Jd(i,t,e[t]);if(Zd)for(var t of Zd(e))qS.call(e,t)&&Jd(i,t,e[t]);return i},Qd=(i,e)=>WS(i,XS(e)),YS=(i,e,t)=>new Promise((n,s)=>{var r=l=>{try{a(t.next(l))}catch(c){s(c)}},o=l=>{try{a(t.throw(l))}catch(c){s(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,o);a((t=t.apply(i,e)).next())});function Ys(i){return Math.pow(i,2.2)}var $S=class{get name(){return"VRMMaterialsV0CompatPlugin"}constructor(i){var e;this.parser=i,this._renderQueueMapTransparent=new Map,this._renderQueueMapTransparentZWrite=new Map;const t=this.parser.json;t.extensionsUsed=(e=t.extensionsUsed)!=null?e:[],t.extensionsUsed.indexOf("KHR_texture_transform")===-1&&t.extensionsUsed.push("KHR_texture_transform")}beforeRoot(){return YS(this,null,function*(){var i;const e=this.parser.json,t=(i=e.extensions)==null?void 0:i.VRM,n=t==null?void 0:t.materialProperties;n&&(this._populateRenderQueueMap(n),n.forEach((s,r)=>{var o,a;const l=(o=e.materials)==null?void 0:o[r];if(l==null){console.warn(`VRMMaterialsV0CompatPlugin: Attempt to use materials[${r}] of glTF but the material doesn't exist`);return}if(s.shader==="VRM/MToon"){const c=this._parseV0MToonProperties(s,l);e.materials[r]=c}else if((a=s.shader)!=null&&a.startsWith("VRM/Unlit")){const c=this._parseV0UnlitProperties(s,l);e.materials[r]=c}else s.shader==="VRM_USE_GLTFSHADER"||console.warn(`VRMMaterialsV0CompatPlugin: Unknown shader: ${s.shader}`)}))})}_parseV0MToonProperties(i,e){var t,n,s,r,o,a,l,c,h,u,d,f,g,_,p,m,y,S,v,E,R,w,L,x,M,C,U,O,D,G,V,Y,B,Q,ie,Se,$e,ht,at,lt,K,ee,be,He,Ae,Qe,Ut,I,St,Fe,Ne,Re,pt,Me,Ge;const Bt=(n=(t=i.keywordMap)==null?void 0:t._ALPHABLEND_ON)!=null?n:!1,P=((s=i.floatProperties)==null?void 0:s._ZWrite)===1&&Bt,b=this._v0ParseRenderQueue(i),z=(o=(r=i.keywordMap)==null?void 0:r._ALPHATEST_ON)!=null?o:!1,$=Bt?"BLEND":z?"MASK":"OPAQUE",Z=z?(l=(a=i.floatProperties)==null?void 0:a._Cutoff)!=null?l:.5:void 0,Ce=((h=(c=i.floatProperties)==null?void 0:c._CullMode)!=null?h:2)===0,re=this._portTextureTransform(i),we=((d=(u=i.vectorProperties)==null?void 0:u._Color)!=null?d:[1,1,1,1]).map((H,W)=>W===3?H:Ys(H)),xe=(f=i.textureProperties)==null?void 0:f._MainTex,se=xe!=null?{index:xe,extensions:Yn({},re)}:void 0,me=(_=(g=i.floatProperties)==null?void 0:g._BumpScale)!=null?_:1,Ue=(p=i.textureProperties)==null?void 0:p._BumpMap,Ee=Ue!=null?{index:Ue,scale:me,extensions:Yn({},re)}:void 0,fe=((y=(m=i.vectorProperties)==null?void 0:m._EmissionColor)!=null?y:[0,0,0,1]).map(Ys),qe=(S=i.textureProperties)==null?void 0:S._EmissionMap,N=qe!=null?{index:qe,extensions:Yn({},re)}:void 0,oe=((E=(v=i.vectorProperties)==null?void 0:v._ShadeColor)!=null?E:[.97,.81,.86,1]).map(Ys),ae=(R=i.textureProperties)==null?void 0:R._ShadeTexture,_e=ae!=null?{index:ae,extensions:Yn({},re)}:void 0;let ne=(L=(w=i.floatProperties)==null?void 0:w._ShadeShift)!=null?L:0,J=(M=(x=i.floatProperties)==null?void 0:x._ShadeToony)!=null?M:.9;J=Dt.lerp(J,1,.5+.5*ne),ne=-ne-(1-J);const ve=(U=(C=i.floatProperties)==null?void 0:C._IndirectLightIntensity)!=null?U:.1,We=ve?1-ve:void 0,_t=(O=i.textureProperties)==null?void 0:O._SphereAdd,mt=_t!=null?[1,1,1]:void 0,gn=_t!=null?{index:_t}:void 0,yn=(G=(D=i.floatProperties)==null?void 0:D._RimLightingMix)!=null?G:0,yi=(V=i.textureProperties)==null?void 0:V._RimTexture,wn=yi!=null?{index:yi,extensions:Yn({},re)}:void 0,ri=((B=(Y=i.vectorProperties)==null?void 0:Y._RimColor)!=null?B:[0,0,0,1]).map(Ys),Ki=(ie=(Q=i.floatProperties)==null?void 0:Q._RimFresnelPower)!=null?ie:1,Si=($e=(Se=i.floatProperties)==null?void 0:Se._RimLift)!=null?$e:0,bi=["none","worldCoordinates","screenCoordinates"][(at=(ht=i.floatProperties)==null?void 0:ht._OutlineWidthMode)!=null?at:0];let j=(K=(lt=i.floatProperties)==null?void 0:lt._OutlineWidth)!=null?K:0;j=.01*j;const q=(ee=i.textureProperties)==null?void 0:ee._OutlineWidthTexture,ue=q!=null?{index:q,extensions:Yn({},re)}:void 0,et=((He=(be=i.vectorProperties)==null?void 0:be._OutlineColor)!=null?He:[0,0,0]).map(Ys),ze=((Qe=(Ae=i.floatProperties)==null?void 0:Ae._OutlineColorMode)!=null?Qe:0)===1?(I=(Ut=i.floatProperties)==null?void 0:Ut._OutlineLightingMix)!=null?I:1:0,rt=(St=i.textureProperties)==null?void 0:St._UvAnimMaskTexture,Ye=rt!=null?{index:rt,extensions:Yn({},re)}:void 0,nt=(Ne=(Fe=i.floatProperties)==null?void 0:Fe._UvAnimScrollX)!=null?Ne:0;let Vt=(pt=(Re=i.floatProperties)==null?void 0:Re._UvAnimScrollY)!=null?pt:0;Vt!=null&&(Vt=-Vt);const T=(Ge=(Me=i.floatProperties)==null?void 0:Me._UvAnimRotation)!=null?Ge:0,k={specVersion:"1.0",transparentWithZWrite:P,renderQueueOffsetNumber:b,shadeColorFactor:oe,shadeMultiplyTexture:_e,shadingShiftFactor:ne,shadingToonyFactor:J,giEqualizationFactor:We,matcapFactor:mt,matcapTexture:gn,rimLightingMixFactor:yn,rimMultiplyTexture:wn,parametricRimColorFactor:ri,parametricRimFresnelPowerFactor:Ki,parametricRimLiftFactor:Si,outlineWidthMode:bi,outlineWidthFactor:j,outlineWidthMultiplyTexture:ue,outlineColorFactor:et,outlineLightingMixFactor:ze,uvAnimationMaskTexture:Ye,uvAnimationScrollXSpeedFactor:nt,uvAnimationScrollYSpeedFactor:Vt,uvAnimationRotationSpeedFactor:T};return Qd(Yn({},e),{pbrMetallicRoughness:{baseColorFactor:we,baseColorTexture:se},normalTexture:Ee,emissiveTexture:N,emissiveFactor:fe,alphaMode:$,alphaCutoff:Z,doubleSided:Ce,extensions:{VRMC_materials_mtoon:k}})}_parseV0UnlitProperties(i,e){var t,n,s,r,o;const a=i.shader==="VRM/UnlitTransparentZWrite",l=i.shader==="VRM/UnlitTransparent"||a,c=this._v0ParseRenderQueue(i),h=i.shader==="VRM/UnlitCutout",u=l?"BLEND":h?"MASK":"OPAQUE",d=h?(n=(t=i.floatProperties)==null?void 0:t._Cutoff)!=null?n:.5:void 0,f=this._portTextureTransform(i),g=((r=(s=i.vectorProperties)==null?void 0:s._Color)!=null?r:[1,1,1,1]).map(Ys),_=(o=i.textureProperties)==null?void 0:o._MainTex,p=_!=null?{index:_,extensions:Yn({},f)}:void 0,m={specVersion:"1.0",transparentWithZWrite:a,renderQueueOffsetNumber:c,shadeColorFactor:g,shadeMultiplyTexture:p};return Qd(Yn({},e),{pbrMetallicRoughness:{baseColorFactor:g,baseColorTexture:p},alphaMode:u,alphaCutoff:d,extensions:{VRMC_materials_mtoon:m}})}_portTextureTransform(i){var e,t,n,s,r;const o=(e=i.vectorProperties)==null?void 0:e._MainTex;if(o==null)return{};const a=[(t=o==null?void 0:o[0])!=null?t:0,(n=o==null?void 0:o[1])!=null?n:0],l=[(s=o==null?void 0:o[2])!=null?s:1,(r=o==null?void 0:o[3])!=null?r:1];return a[1]=1-l[1]-a[1],{KHR_texture_transform:{offset:a,scale:l}}}_v0ParseRenderQueue(i){var e,t;const n=i.shader==="VRM/UnlitTransparentZWrite",s=((e=i.keywordMap)==null?void 0:e._ALPHABLEND_ON)!=null||i.shader==="VRM/UnlitTransparent"||n,r=((t=i.floatProperties)==null?void 0:t._ZWrite)===1||n;let o=0;if(s){const a=i.renderQueue;a!=null&&(r?o=this._renderQueueMapTransparentZWrite.get(a):o=this._renderQueueMapTransparent.get(a))}return o}_populateRenderQueueMap(i){const e=new Set,t=new Set;i.forEach(n=>{var s,r;const o=n.shader==="VRM/UnlitTransparentZWrite",a=((s=n.keywordMap)==null?void 0:s._ALPHABLEND_ON)!=null||n.shader==="VRM/UnlitTransparent"||o,l=((r=n.floatProperties)==null?void 0:r._ZWrite)===1||o;if(a){const c=n.renderQueue;c!=null&&(l?t.add(c):e.add(c))}}),e.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${e.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),t.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${t.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),Array.from(e).sort().forEach((n,s)=>{const r=Math.min(Math.max(s-e.size+1,-9),0);this._renderQueueMapTransparent.set(n,r)}),Array.from(t).sort().forEach((n,s)=>{const r=Math.min(Math.max(s,0),9);this._renderQueueMapTransparentZWrite.set(n,r)})}},ef=(i,e,t)=>new Promise((n,s)=>{var r=l=>{try{a(t.next(l))}catch(c){s(c)}},o=l=>{try{a(t.throw(l))}catch(c){s(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,o);a((t=t.apply(i,e)).next())}),Ni=new A,Fl=class extends Ft{constructor(i){super(),this._attrPosition=new it(new Float32Array([0,0,0,0,0,0]),3),this._attrPosition.setUsage(Xi);const e=new Rt;e.setAttribute("position",this._attrPosition);const t=new Rs({color:16711935,depthTest:!1,depthWrite:!1});this._line=new Ba(e,t),this.add(this._line),this.constraint=i}updateMatrixWorld(i){Ni.setFromMatrixPosition(this.constraint.destination.matrixWorld),this._attrPosition.setXYZ(0,Ni.x,Ni.y,Ni.z),this.constraint.source&&Ni.setFromMatrixPosition(this.constraint.source.matrixWorld),this._attrPosition.setXYZ(1,Ni.x,Ni.y,Ni.z),this._attrPosition.needsUpdate=!0,super.updateMatrixWorld(i)}};function tf(i,e){return e.set(i.elements[12],i.elements[13],i.elements[14])}var KS=new A,ZS=new A;function JS(i,e){return i.decompose(KS,e,ZS),e}function La(i){return i.invert?i.invert():i.inverse(),i}var Nh=class{constructor(i,e){this.destination=i,this.source=e,this.weight=1}},QS=new A,eb=new A,tb=new A,nb=new Pe,ib=new Pe,sb=new Pe,rb=class extends Nh{get aimAxis(){return this._aimAxis}set aimAxis(i){this._aimAxis=i,this._v3AimAxis.set(i==="PositiveX"?1:i==="NegativeX"?-1:0,i==="PositiveY"?1:i==="NegativeY"?-1:0,i==="PositiveZ"?1:i==="NegativeZ"?-1:0)}get dependencies(){const i=new Set([this.source]);return this.destination.parent&&i.add(this.destination.parent),i}constructor(i,e){super(i,e),this._aimAxis="PositiveX",this._v3AimAxis=new A(1,0,0),this._dstRestQuat=new Pe}setInitState(){this._dstRestQuat.copy(this.destination.quaternion)}update(){this.destination.updateWorldMatrix(!0,!1),this.source.updateWorldMatrix(!0,!1);const i=nb.identity(),e=ib.identity();this.destination.parent&&(JS(this.destination.parent.matrixWorld,i),La(e.copy(i)));const t=QS.copy(this._v3AimAxis).applyQuaternion(this._dstRestQuat).applyQuaternion(i),n=tf(this.source.matrixWorld,eb).sub(tf(this.destination.matrixWorld,tb)).normalize(),s=sb.setFromUnitVectors(t,n).premultiply(e).multiply(i).multiply(this._dstRestQuat);this.destination.quaternion.copy(this._dstRestQuat).slerp(s,this.weight)}};function ob(i,e){const t=[i];let n=i.parent;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(s=>{e(s)})}var ab=class{constructor(){this._constraints=new Set,this._objectConstraintsMap=new Map}get constraints(){return this._constraints}addConstraint(i){this._constraints.add(i);let e=this._objectConstraintsMap.get(i.destination);e==null&&(e=new Set,this._objectConstraintsMap.set(i.destination,e)),e.add(i)}deleteConstraint(i){this._constraints.delete(i),this._objectConstraintsMap.get(i.destination).delete(i)}setInitState(){const i=new Set,e=new Set;for(const t of this._constraints)this._processConstraint(t,i,e,n=>n.setInitState())}update(){const i=new Set,e=new Set;for(const t of this._constraints)this._processConstraint(t,i,e,n=>n.update())}_processConstraint(i,e,t,n){if(t.has(i))return;if(e.has(i))throw new Error("VRMNodeConstraintManager: Circular dependency detected while updating constraints");e.add(i);const s=i.dependencies;for(const r of s)ob(r,o=>{const a=this._objectConstraintsMap.get(o);if(a)for(const l of a)this._processConstraint(l,e,t,n)});n(i),t.add(i)}},lb=new Pe,cb=new Pe,hb=class extends Nh{get dependencies(){return new Set([this.source])}constructor(i,e){super(i,e),this._dstRestQuat=new Pe,this._invSrcRestQuat=new Pe}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),La(this._invSrcRestQuat.copy(this.source.quaternion))}update(){const i=lb.copy(this._invSrcRestQuat).multiply(this.source.quaternion),e=cb.copy(this._dstRestQuat).multiply(i);this.destination.quaternion.copy(this._dstRestQuat).slerp(e,this.weight)}},ub=new A,db=new Pe,fb=new Pe,pb=class extends Nh{get rollAxis(){return this._rollAxis}set rollAxis(i){this._rollAxis=i,this._v3RollAxis.set(i==="X"?1:0,i==="Y"?1:0,i==="Z"?1:0)}get dependencies(){return new Set([this.source])}constructor(i,e){super(i,e),this._rollAxis="X",this._v3RollAxis=new A(1,0,0),this._dstRestQuat=new Pe,this._invDstRestQuat=new Pe,this._invSrcRestQuatMulDstRestQuat=new Pe}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),La(this._invDstRestQuat.copy(this._dstRestQuat)),La(this._invSrcRestQuatMulDstRestQuat.copy(this.source.quaternion)).multiply(this._dstRestQuat)}update(){const i=db.copy(this._invDstRestQuat).multiply(this.source.quaternion).multiply(this._invSrcRestQuatMulDstRestQuat),e=ub.copy(this._v3RollAxis).applyQuaternion(i),n=fb.setFromUnitVectors(e,this._v3RollAxis).premultiply(this._dstRestQuat).multiply(i);this.destination.quaternion.copy(this._dstRestQuat).slerp(n,this.weight)}},mb=new Set(["1.0","1.0-beta"]),zp=class jr{get name(){return jr.EXTENSION_NAME}constructor(e,t){this.parser=e,this.helperRoot=t==null?void 0:t.helperRoot}afterRoot(e){return ef(this,null,function*(){e.userData.vrmNodeConstraintManager=yield this._import(e)})}_import(e){return ef(this,null,function*(){var t;const n=this.parser.json;if(!(((t=n.extensionsUsed)==null?void 0:t.indexOf(jr.EXTENSION_NAME))!==-1))return null;const r=new ab,o=yield this.parser.getDependencies("node");return o.forEach((a,l)=>{var c;const h=n.nodes[l],u=(c=h==null?void 0:h.extensions)==null?void 0:c[jr.EXTENSION_NAME];if(u==null)return;const d=u.specVersion;if(!mb.has(d)){console.warn(`VRMNodeConstraintLoaderPlugin: Unknown ${jr.EXTENSION_NAME} specVersion "${d}"`);return}const f=u.constraint;if(f.roll!=null){const g=this._importRollConstraint(a,o,f.roll);r.addConstraint(g)}else if(f.aim!=null){const g=this._importAimConstraint(a,o,f.aim);r.addConstraint(g)}else if(f.rotation!=null){const g=this._importRotationConstraint(a,o,f.rotation);r.addConstraint(g)}}),e.scene.updateMatrixWorld(),r.setInitState(),r})}_importRollConstraint(e,t,n){const{source:s,rollAxis:r,weight:o}=n,a=t[s],l=new pb(e,a);if(r!=null&&(l.rollAxis=r),o!=null&&(l.weight=o),this.helperRoot){const c=new Fl(l);this.helperRoot.add(c)}return l}_importAimConstraint(e,t,n){const{source:s,aimAxis:r,weight:o}=n,a=t[s],l=new rb(e,a);if(r!=null&&(l.aimAxis=r),o!=null&&(l.weight=o),this.helperRoot){const c=new Fl(l);this.helperRoot.add(c)}return l}_importRotationConstraint(e,t,n){const{source:s,weight:r}=n,o=t[s],a=new hb(e,o);if(r!=null&&(a.weight=r),this.helperRoot){const l=new Fl(a);this.helperRoot.add(l)}return a}};zp.EXTENSION_NAME="VRMC_node_constraint";var gb=zp,ia=(i,e,t)=>new Promise((n,s)=>{var r=l=>{try{a(t.next(l))}catch(c){s(c)}},o=l=>{try{a(t.throw(l))}catch(c){s(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,o);a((t=t.apply(i,e)).next())}),Dh=class{},Bl=new A,hs=new A,Hp=class extends Dh{get type(){return"capsule"}constructor(i){var e,t,n,s;super(),this.offset=(e=i==null?void 0:i.offset)!=null?e:new A(0,0,0),this.tail=(t=i==null?void 0:i.tail)!=null?t:new A(0,0,0),this.radius=(n=i==null?void 0:i.radius)!=null?n:0,this.inside=(s=i==null?void 0:i.inside)!=null?s:!1}calculateCollision(i,e,t,n){Bl.setFromMatrixPosition(i),hs.subVectors(this.tail,this.offset).applyMatrix4(i),hs.sub(Bl);const s=hs.lengthSq();n.copy(e).sub(Bl);const r=hs.dot(n);r<=0||(s<=r||hs.multiplyScalar(r/s),n.sub(hs));const o=n.length(),a=this.inside?this.radius-t-o:o-t-this.radius;return a<0&&(n.multiplyScalar(1/o),this.inside&&n.negate()),a}},Vl=new A,nf=new Be,Gp=class extends Dh{get type(){return"plane"}constructor(i){var e,t;super(),this.offset=(e=i==null?void 0:i.offset)!=null?e:new A(0,0,0),this.normal=(t=i==null?void 0:i.normal)!=null?t:new A(0,0,1)}calculateCollision(i,e,t,n){n.setFromMatrixPosition(i),n.negate().add(e),nf.getNormalMatrix(i),Vl.copy(this.normal).applyNormalMatrix(nf).normalize();const s=n.dot(Vl)-t;return n.copy(Vl),s}},_b=new A,Wp=class extends Dh{get type(){return"sphere"}constructor(i){var e,t,n;super(),this.offset=(e=i==null?void 0:i.offset)!=null?e:new A(0,0,0),this.radius=(t=i==null?void 0:i.radius)!=null?t:0,this.inside=(n=i==null?void 0:i.inside)!=null?n:!1}calculateCollision(i,e,t,n){n.subVectors(e,_b.setFromMatrixPosition(i));const s=n.length(),r=this.inside?this.radius-t-s:s-t-this.radius;return r<0&&(n.multiplyScalar(1/s),this.inside&&n.negate()),r}},$n=new A,vb=class extends Rt{constructor(i){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new A,this._currentTail=new A,this._shape=i,this._attrPos=new it(new Float32Array(396),3),this.setAttribute("position",this._attrPos),this._attrIndex=new it(new Uint16Array(264),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;const e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,i=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),i=!0);const t=$n.copy(this._shape.tail).divideScalar(this.worldScale);this._currentTail.distanceToSquared(t)>1e-10&&(this._currentTail.copy(t),i=!0),i&&this._buildPosition()}_buildPosition(){$n.copy(this._currentTail).sub(this._currentOffset);const i=$n.length()/this._currentRadius;for(let n=0;n<=16;n++){const s=n/16*Math.PI;this._attrPos.setXYZ(n,-Math.sin(s),-Math.cos(s),0),this._attrPos.setXYZ(17+n,i+Math.sin(s),Math.cos(s),0),this._attrPos.setXYZ(34+n,-Math.sin(s),0,-Math.cos(s)),this._attrPos.setXYZ(51+n,i+Math.sin(s),0,Math.cos(s))}for(let n=0;n<32;n++){const s=n/16*Math.PI;this._attrPos.setXYZ(68+n,0,Math.sin(s),Math.cos(s)),this._attrPos.setXYZ(100+n,i,Math.sin(s),Math.cos(s))}const e=Math.atan2($n.y,Math.sqrt($n.x*$n.x+$n.z*$n.z)),t=-Math.atan2($n.z,$n.x);this.rotateZ(e),this.rotateY(t),this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<34;i++){const e=(i+1)%34;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(68+i*2,34+i,34+e)}for(let i=0;i<32;i++){const e=(i+1)%32;this._attrIndex.setXY(136+i*2,68+i,68+e),this._attrIndex.setXY(200+i*2,100+i,100+e)}this._attrIndex.needsUpdate=!0}},xb=class extends Rt{constructor(i){super(),this.worldScale=1,this._currentOffset=new A,this._currentNormal=new A,this._shape=i,this._attrPos=new it(new Float32Array(18),3),this.setAttribute("position",this._attrPos),this._attrIndex=new it(new Uint16Array(10),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),i=!0),this._currentNormal.equals(this._shape.normal)||(this._currentNormal.copy(this._shape.normal),i=!0),i&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,-.5,-.5,0),this._attrPos.setXYZ(1,.5,-.5,0),this._attrPos.setXYZ(2,.5,.5,0),this._attrPos.setXYZ(3,-.5,.5,0),this._attrPos.setXYZ(4,0,0,0),this._attrPos.setXYZ(5,0,0,.25),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this.lookAt(this._currentNormal),this._attrPos.needsUpdate=!0}_buildIndex(){this._attrIndex.setXY(0,0,1),this._attrIndex.setXY(2,1,2),this._attrIndex.setXY(4,2,3),this._attrIndex.setXY(6,3,0),this._attrIndex.setXY(8,4,5),this._attrIndex.needsUpdate=!0}},Mb=class extends Rt{constructor(i){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new A,this._shape=i,this._attrPos=new it(new Float32Array(288),3),this.setAttribute("position",this._attrPos),this._attrIndex=new it(new Uint16Array(192),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;const e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,i=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),i=!0),i&&this._buildPosition()}_buildPosition(){for(let i=0;i<32;i++){const e=i/16*Math.PI;this._attrPos.setXYZ(i,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+i,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+i,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<32;i++){const e=(i+1)%32;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(64+i*2,32+i,32+e),this._attrIndex.setXY(128+i*2,64+i,64+e)}this._attrIndex.needsUpdate=!0}},yb=new A,zl=class extends Ft{constructor(i){if(super(),this.matrixAutoUpdate=!1,this.collider=i,this.collider.shape instanceof Wp)this._geometry=new Mb(this.collider.shape);else if(this.collider.shape instanceof Hp)this._geometry=new vb(this.collider.shape);else if(this.collider.shape instanceof Gp)this._geometry=new xb(this.collider.shape);else throw new Error("VRMSpringBoneColliderHelper: Unknown collider shape type detected");const e=new Rs({color:16711935,depthTest:!1,depthWrite:!1});this._line=new yo(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(i){this.collider.updateWorldMatrix(!0,!1),this.matrix.copy(this.collider.matrixWorld);const e=this.matrix.elements;this._geometry.worldScale=yb.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(i)}},Sb=class extends Rt{constructor(i){super(),this.worldScale=1,this._currentRadius=0,this._currentTail=new A,this._springBone=i,this._attrPos=new it(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new it(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;const e=this._springBone.settings.hitRadius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,i=!0),this._currentTail.equals(this._springBone.initialLocalChildPosition)||(this._currentTail.copy(this._springBone.initialLocalChildPosition),i=!0),i&&this._buildPosition()}_buildPosition(){for(let i=0;i<32;i++){const e=i/16*Math.PI;this._attrPos.setXYZ(i,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+i,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+i,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<32;i++){const e=(i+1)%32;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(64+i*2,32+i,32+e),this._attrIndex.setXY(128+i*2,64+i,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},bb=new A,wb=class extends Ft{constructor(i){super(),this.matrixAutoUpdate=!1,this.springBone=i,this._geometry=new Sb(this.springBone);const e=new Rs({color:16776960,depthTest:!1,depthWrite:!1});this._line=new yo(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(i){this.springBone.bone.updateWorldMatrix(!0,!1),this.matrix.copy(this.springBone.bone.matrixWorld);const e=this.matrix.elements;this._geometry.worldScale=bb.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(i)}},Hl=class extends At{constructor(i){super(),this.colliderMatrix=new Oe,this.shape=i}updateWorldMatrix(i,e){super.updateWorldMatrix(i,e),Tb(this.colliderMatrix,this.matrixWorld,this.shape.offset)}};function Tb(i,e,t){const n=e.elements;i.copy(e),t&&(i.elements[12]=n[0]*t.x+n[4]*t.y+n[8]*t.z+n[12],i.elements[13]=n[1]*t.x+n[5]*t.y+n[9]*t.z+n[13],i.elements[14]=n[2]*t.x+n[6]*t.y+n[10]*t.z+n[14])}var Eb=new Oe;function Ab(i){return i.invert?i.invert():i.getInverse(Eb.copy(i)),i}var Rb=class{constructor(i){this._inverseCache=new Oe,this._shouldUpdateInverse=!0,this.matrix=i;const e={set:(t,n,s)=>(this._shouldUpdateInverse=!0,t[n]=s,!0)};this._originalElements=i.elements,i.elements=new Proxy(i.elements,e)}get inverse(){return this._shouldUpdateInverse&&(Ab(this._inverseCache.copy(this.matrix)),this._shouldUpdateInverse=!1),this._inverseCache}revert(){this.matrix.elements=this._originalElements}},Gl=new Oe,$s=new A,Ur=new A,Nr=new A,Dr=new A,Cb=new Oe,Pb=class{constructor(i,e,t={},n=[]){this._currentTail=new A,this._prevTail=new A,this._boneAxis=new A,this._worldSpaceBoneLength=0,this._center=null,this._initialLocalMatrix=new Oe,this._initialLocalRotation=new Pe,this._initialLocalChildPosition=new A;var s,r,o,a,l,c;this.bone=i,this.bone.matrixAutoUpdate=!1,this.child=e,this.settings={hitRadius:(s=t.hitRadius)!=null?s:0,stiffness:(r=t.stiffness)!=null?r:1,gravityPower:(o=t.gravityPower)!=null?o:0,gravityDir:(l=(a=t.gravityDir)==null?void 0:a.clone())!=null?l:new A(0,-1,0),dragForce:(c=t.dragForce)!=null?c:.4},this.colliderGroups=n}get dependencies(){const i=new Set,e=this.bone.parent;e&&i.add(e);for(let t=0;t<this.colliderGroups.length;t++)for(let n=0;n<this.colliderGroups[t].colliders.length;n++)i.add(this.colliderGroups[t].colliders[n]);return i}get center(){return this._center}set center(i){var e;(e=this._center)!=null&&e.userData.inverseCacheProxy&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=i,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new Rb(this._center.matrixWorld)))}get initialLocalChildPosition(){return this._initialLocalChildPosition}get _parentMatrixWorld(){return this.bone.parent?this.bone.parent.matrixWorld:Gl}setInitState(){this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.child?this._initialLocalChildPosition.copy(this.child.position):this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);const i=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(i),this._prevTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize()}reset(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix);const i=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(i),this._prevTail.copy(this._currentTail)}update(i){if(i<=0)return;this._calcWorldSpaceBoneLength();const e=Ur.copy(this._boneAxis).transformDirection(this._initialLocalMatrix).transformDirection(this._parentMatrixWorld);Dr.copy(this._currentTail).add($s.subVectors(this._currentTail,this._prevTail).multiplyScalar(1-this.settings.dragForce)).applyMatrix4(this._getMatrixCenterToWorld()).addScaledVector(e,this.settings.stiffness*i).addScaledVector(this.settings.gravityDir,this.settings.gravityPower*i),Nr.setFromMatrixPosition(this.bone.matrixWorld),Dr.sub(Nr).normalize().multiplyScalar(this._worldSpaceBoneLength).add(Nr),this._collision(Dr),this._prevTail.copy(this._currentTail),this._currentTail.copy(Dr).applyMatrix4(this._getMatrixWorldToCenter());const t=Cb.multiplyMatrices(this._parentMatrixWorld,this._initialLocalMatrix).invert();this.bone.quaternion.setFromUnitVectors(this._boneAxis,$s.copy(Dr).applyMatrix4(t).normalize()).premultiply(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix)}_collision(i){for(let e=0;e<this.colliderGroups.length;e++)for(let t=0;t<this.colliderGroups[e].colliders.length;t++){const n=this.colliderGroups[e].colliders[t],s=n.shape.calculateCollision(n.colliderMatrix,i,this.settings.hitRadius,$s);if(s<0){i.addScaledVector($s,-s),i.sub(Nr);const r=i.length();i.multiplyScalar(this._worldSpaceBoneLength/r).add(Nr)}}}_calcWorldSpaceBoneLength(){$s.setFromMatrixPosition(this.bone.matrixWorld),this.child?Ur.setFromMatrixPosition(this.child.matrixWorld):(Ur.copy(this._initialLocalChildPosition),Ur.applyMatrix4(this.bone.matrixWorld)),this._worldSpaceBoneLength=$s.sub(Ur).length()}_getMatrixCenterToWorld(){return this._center?this._center.matrixWorld:Gl}_getMatrixWorldToCenter(){return this._center?this._center.userData.inverseCacheProxy.inverse:Gl}};function Lb(i,e){const t=[];let n=i;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(s=>{e(s)})}function rh(i,e){i.children.forEach(t=>{e(t)||rh(t,e)})}function Ib(i){var e;const t=new Map;for(const n of i){let s=n;do{const r=((e=t.get(s))!=null?e:0)+1;if(r===i.size)return s;t.set(s,r),s=s.parent}while(s!==null)}return null}var sf=class{constructor(){this._joints=new Set,this._sortedJoints=[],this._hasWarnedCircularDependency=!1,this._ancestors=[],this._objectSpringBonesMap=new Map,this._isSortedJointsDirty=!1,this._relevantChildrenUpdated=this._relevantChildrenUpdated.bind(this)}get joints(){return this._joints}get springBones(){return console.warn("VRMSpringBoneManager: springBones is deprecated. use joints instead."),this._joints}get colliderGroups(){const i=new Set;return this._joints.forEach(e=>{e.colliderGroups.forEach(t=>{i.add(t)})}),Array.from(i)}get colliders(){const i=new Set;return this.colliderGroups.forEach(e=>{e.colliders.forEach(t=>{i.add(t)})}),Array.from(i)}addJoint(i){this._joints.add(i);let e=this._objectSpringBonesMap.get(i.bone);e==null&&(e=new Set,this._objectSpringBonesMap.set(i.bone,e)),e.add(i),this._isSortedJointsDirty=!0}addSpringBone(i){console.warn("VRMSpringBoneManager: addSpringBone() is deprecated. use addJoint() instead."),this.addJoint(i)}deleteJoint(i){this._joints.delete(i),this._objectSpringBonesMap.get(i.bone).delete(i),this._isSortedJointsDirty=!0}deleteSpringBone(i){console.warn("VRMSpringBoneManager: deleteSpringBone() is deprecated. use deleteJoint() instead."),this.deleteJoint(i)}setInitState(){this._sortJoints();for(let i=0;i<this._sortedJoints.length;i++){const e=this._sortedJoints[i];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.setInitState()}}reset(){this._sortJoints();for(let i=0;i<this._sortedJoints.length;i++){const e=this._sortedJoints[i];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.reset()}}update(i){this._sortJoints();for(let e=0;e<this._ancestors.length;e++)this._ancestors[e].updateWorldMatrix(e===0,!1);for(let e=0;e<this._sortedJoints.length;e++){const t=this._sortedJoints[e];t.bone.updateMatrix(),t.bone.updateWorldMatrix(!1,!1),t.update(i),rh(t.bone,this._relevantChildrenUpdated)}}_sortJoints(){if(!this._isSortedJointsDirty)return;const i=[],e=new Set,t=new Set,n=new Set;for(const r of this._joints)this._insertJointSort(r,e,t,i,n);this._sortedJoints=i;const s=Ib(n);this._ancestors=[],s&&(this._ancestors.push(s),rh(s,r=>{var o,a;return((a=(o=this._objectSpringBonesMap.get(r))==null?void 0:o.size)!=null?a:0)>0?!0:(this._ancestors.push(r),!1)})),this._isSortedJointsDirty=!1}_insertJointSort(i,e,t,n,s){if(t.has(i))return;if(e.has(i)){this._hasWarnedCircularDependency||(console.warn("VRMSpringBoneManager: Circular dependency detected"),this._hasWarnedCircularDependency=!0);return}e.add(i);const r=i.dependencies;for(const o of r){let a=!1,l=null;Lb(o,c=>{const h=this._objectSpringBonesMap.get(c);if(h)for(const u of h)a=!0,this._insertJointSort(u,e,t,n,s);else a||(l=c)}),l&&s.add(l)}n.push(i),t.add(i)}_relevantChildrenUpdated(i){var e,t;return((t=(e=this._objectSpringBonesMap.get(i))==null?void 0:e.size)!=null?t:0)>0?!0:(i.updateWorldMatrix(!1,!1),!1)}},rf="VRMC_springBone_extended_collider",Ub=new Set(["1.0","1.0-beta"]),Nb=new Set(["1.0"]),Xp=class Qs{get name(){return Qs.EXTENSION_NAME}constructor(e,t){var n;this.parser=e,this.jointHelperRoot=t==null?void 0:t.jointHelperRoot,this.colliderHelperRoot=t==null?void 0:t.colliderHelperRoot,this.useExtendedColliders=(n=t==null?void 0:t.useExtendedColliders)!=null?n:!0}afterRoot(e){return ia(this,null,function*(){e.userData.vrmSpringBoneManager=yield this._import(e)})}_import(e){return ia(this,null,function*(){const t=yield this._v1Import(e);if(t!=null)return t;const n=yield this._v0Import(e);return n!=null?n:null})}_v1Import(e){return ia(this,null,function*(){var t,n,s,r,o;const a=e.parser.json;if(!(((t=a.extensionsUsed)==null?void 0:t.indexOf(Qs.EXTENSION_NAME))!==-1))return null;const c=new sf,h=yield e.parser.getDependencies("node"),u=(n=a.extensions)==null?void 0:n[Qs.EXTENSION_NAME];if(!u)return null;const d=u.specVersion;if(!Ub.has(d))return console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${Qs.EXTENSION_NAME} specVersion "${d}"`),null;const f=(s=u.colliders)==null?void 0:s.map((_,p)=>{var m,y,S,v,E,R,w,L,x,M,C,U,O,D,G;const V=h[_.node];if(V==null)return console.warn(`VRMSpringBoneLoaderPlugin: The collider #${p} attempted to reference a node #${_.node} but not found. Skipping the collider`),null;const Y=_.shape,B=(m=_.extensions)==null?void 0:m[rf];if(this.useExtendedColliders&&B!=null){const Q=B.specVersion;if(!Nb.has(Q))console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${rf} specVersion "${Q}". Fallbacking to the ${Qs.EXTENSION_NAME} definition`);else{const ie=B.shape;if(ie.sphere)return this._importSphereCollider(V,{offset:new A().fromArray((y=ie.sphere.offset)!=null?y:[0,0,0]),radius:(S=ie.sphere.radius)!=null?S:0,inside:(v=ie.sphere.inside)!=null?v:!1});if(ie.capsule)return this._importCapsuleCollider(V,{offset:new A().fromArray((E=ie.capsule.offset)!=null?E:[0,0,0]),radius:(R=ie.capsule.radius)!=null?R:0,tail:new A().fromArray((w=ie.capsule.tail)!=null?w:[0,0,0]),inside:(L=ie.capsule.inside)!=null?L:!1});if(ie.plane)return this._importPlaneCollider(V,{offset:new A().fromArray((x=ie.plane.offset)!=null?x:[0,0,0]),normal:new A().fromArray((M=ie.plane.normal)!=null?M:[0,0,1])})}}if(Y.sphere)return this._importSphereCollider(V,{offset:new A().fromArray((C=Y.sphere.offset)!=null?C:[0,0,0]),radius:(U=Y.sphere.radius)!=null?U:0,inside:!1});if(Y.capsule)return this._importCapsuleCollider(V,{offset:new A().fromArray((O=Y.capsule.offset)!=null?O:[0,0,0]),radius:(D=Y.capsule.radius)!=null?D:0,tail:new A().fromArray((G=Y.capsule.tail)!=null?G:[0,0,0]),inside:!1});console.warn(`VRMSpringBoneLoaderPlugin: The collider #${p} has no valid shape. Skipping the collider`)}),g=(r=u.colliderGroups)==null?void 0:r.map((_,p)=>{var m;return{colliders:((m=_.colliders)!=null?m:[]).map(S=>{const v=f==null?void 0:f[S];return v==null?(console.warn(`VRMSpringBoneLoaderPlugin: The collider group #${p} attempted to reference a collider #${S} but not found. Skipping the collider`),null):v}).filter(S=>S!=null),name:_.name}});return(o=u.springs)==null||o.forEach((_,p)=>{var m;const y=_.joints,S=(m=_.colliderGroups)==null?void 0:m.map(R=>{const w=g==null?void 0:g[R];return w==null?(console.warn(`VRMSpringBoneLoaderPlugin: The spring #${p} attempted to reference a collider group #${R} but not found. Skipping the collider group`),null):w}).filter(R=>R!=null),v=_.center!=null?h[_.center]:void 0;let E;y.forEach(R=>{if(E){const w=E.node,L=h[w],x=R.node,M=h[x],C={hitRadius:E.hitRadius,dragForce:E.dragForce,gravityPower:E.gravityPower,stiffness:E.stiffness,gravityDir:E.gravityDir!=null?new A().fromArray(E.gravityDir):void 0},U=this._importJoint(L,M,C,S);v&&(U.center=v),c.addJoint(U)}E=R})}),c.setInitState(),c})}_v0Import(e){return ia(this,null,function*(){var t,n,s;const r=e.parser.json;if(!(((t=r.extensionsUsed)==null?void 0:t.indexOf("VRM"))!==-1))return null;const a=(n=r.extensions)==null?void 0:n.VRM,l=a==null?void 0:a.secondaryAnimation;if(!l)return null;const c=l==null?void 0:l.boneGroups;if(!c)return null;const h=new sf,u=yield e.parser.getDependencies("node"),d=(s=l.colliderGroups)==null?void 0:s.map((f,g)=>{var _;const p=u[f.node];return p==null?(console.warn(`VRMSpringBoneLoaderPlugin: The collider group #${g} attempted to reference a node #${f.node} but not found. Skipping the collider group`),null):{colliders:((_=f.colliders)!=null?_:[]).map((y,S)=>{var v,E,R;const w=new A(0,0,0);return y.offset&&w.set((v=y.offset.x)!=null?v:0,(E=y.offset.y)!=null?E:0,y.offset.z?-y.offset.z:0),this._importSphereCollider(p,{offset:w,radius:(R=y.radius)!=null?R:0,inside:!1})})}});return c==null||c.forEach((f,g)=>{const _=f.bones;_&&_.forEach(p=>{var m,y,S,v;const E=u[p];if(E==null){console.warn(`VRMSpringBoneLoaderPlugin: The spring bone group #${g} attempted to reference a node #${p} but not found. Skipping the node`);return}const R=new A;f.gravityDir?R.set((m=f.gravityDir.x)!=null?m:0,(y=f.gravityDir.y)!=null?y:0,(S=f.gravityDir.z)!=null?S:0):R.set(0,-1,0);const w=f.center!=null?u[f.center]:void 0,L={hitRadius:f.hitRadius,dragForce:f.dragForce,gravityPower:f.gravityPower,stiffness:f.stiffiness,gravityDir:R},x=(v=f.colliderGroups)==null?void 0:v.map(M=>{const C=d==null?void 0:d[M];return C==null?(console.warn(`VRMSpringBoneLoaderPlugin: The spring #${g} attempted to reference a collider group #${M} but not found. Skipping the collider group`),null):C}).filter(M=>M!=null);E.traverse(M=>{var C;const U=(C=M.children[0])!=null?C:null,O=this._importJoint(M,U,L,x);w&&(O.center=w),h.addJoint(O)})})}),e.scene.updateMatrixWorld(),h.setInitState(),h})}_importJoint(e,t,n,s){const r=new Pb(e,t,n,s);if(this.jointHelperRoot){const o=new wb(r);this.jointHelperRoot.add(o),o.renderOrder=this.jointHelperRoot.renderOrder}return r}_importSphereCollider(e,t){const n=new Wp(t),s=new Hl(n);if(e.add(s),this.colliderHelperRoot){const r=new zl(s);this.colliderHelperRoot.add(r),r.renderOrder=this.colliderHelperRoot.renderOrder}return s}_importCapsuleCollider(e,t){const n=new Hp(t),s=new Hl(n);if(e.add(s),this.colliderHelperRoot){const r=new zl(s);this.colliderHelperRoot.add(r),r.renderOrder=this.colliderHelperRoot.renderOrder}return s}_importPlaneCollider(e,t){const n=new Gp(t),s=new Hl(n);if(e.add(s),this.colliderHelperRoot){const r=new zl(s);this.colliderHelperRoot.add(r),r.renderOrder=this.colliderHelperRoot.renderOrder}return s}};Xp.EXTENSION_NAME="VRMC_springBone";var Db=Xp,kb=class{get name(){return"VRMLoaderPlugin"}constructor(i,e){var t,n,s,r,o,a,l,c,h,u;this.parser=i;const d=e==null?void 0:e.helperRoot,f=e==null?void 0:e.autoUpdateHumanBones;this.expressionPlugin=(t=e==null?void 0:e.expressionPlugin)!=null?t:new J1(i),this.firstPersonPlugin=(n=e==null?void 0:e.firstPersonPlugin)!=null?n:new eS(i),this.humanoidPlugin=(s=e==null?void 0:e.humanoidPlugin)!=null?s:new aS(i,{helperRoot:d,autoUpdateHumanBones:f}),this.lookAtPlugin=(r=e==null?void 0:e.lookAtPlugin)!=null?r:new SS(i,{helperRoot:d}),this.metaPlugin=(o=e==null?void 0:e.metaPlugin)!=null?o:new TS(i),this.mtoonMaterialPlugin=(a=e==null?void 0:e.mtoonMaterialPlugin)!=null?a:new VS(i),this.materialsHDREmissiveMultiplierPlugin=(l=e==null?void 0:e.materialsHDREmissiveMultiplierPlugin)!=null?l:new HS(i),this.materialsV0CompatPlugin=(c=e==null?void 0:e.materialsV0CompatPlugin)!=null?c:new $S(i),this.springBonePlugin=(h=e==null?void 0:e.springBonePlugin)!=null?h:new Db(i,{colliderHelperRoot:d,jointHelperRoot:d}),this.nodeConstraintPlugin=(u=e==null?void 0:e.nodeConstraintPlugin)!=null?u:new gb(i,{helperRoot:d})}beforeRoot(){return ea(this,null,function*(){yield this.materialsV0CompatPlugin.beforeRoot(),yield this.mtoonMaterialPlugin.beforeRoot()})}loadMesh(i){return ea(this,null,function*(){return yield this.mtoonMaterialPlugin.loadMesh(i)})}getMaterialType(i){const e=this.mtoonMaterialPlugin.getMaterialType(i);return e!=null?e:null}extendMaterialParams(i,e){return ea(this,null,function*(){yield this.materialsHDREmissiveMultiplierPlugin.extendMaterialParams(i,e),yield this.mtoonMaterialPlugin.extendMaterialParams(i,e)})}afterRoot(i){return ea(this,null,function*(){yield this.metaPlugin.afterRoot(i),yield this.humanoidPlugin.afterRoot(i),yield this.expressionPlugin.afterRoot(i),yield this.lookAtPlugin.afterRoot(i),yield this.firstPersonPlugin.afterRoot(i),yield this.springBonePlugin.afterRoot(i),yield this.nodeConstraintPlugin.afterRoot(i),yield this.mtoonMaterialPlugin.afterRoot(i);const e=i.userData.vrmMeta,t=i.userData.vrmHumanoid;if(e&&t){const n=new AS({scene:i.scene,expressionManager:i.userData.vrmExpressionManager,firstPerson:i.userData.vrmFirstPerson,humanoid:t,lookAt:i.userData.vrmLookAt,meta:e,materials:i.userData.vrmMToonMaterials,springBoneManager:i.userData.vrmSpringBoneManager,nodeConstraintManager:i.userData.vrmNodeConstraintManager});i.userData.vrm=n}})}};function Ob(i){const e=new Set;return i.traverse(t=>{if(!t.isMesh)return;const n=t;e.add(n)}),e}function of(i,e,t){if(e.size===1){const o=e.values().next().value;if(o.weight===1)return i[o.index]}const n=new Float32Array(i[0].count*3);let s=0;if(t)s=1;else for(const o of e)s+=o.weight;for(const o of e){const a=i[o.index],l=o.weight/s;for(let c=0;c<a.count;c++)n[c*3+0]+=a.getX(c)*l,n[c*3+1]+=a.getY(c)*l,n[c*3+2]+=a.getZ(c)*l}return new it(n,3)}function Fb(i){var e;const t=Ob(i.scene),n=new Map,s=(e=i.expressionManager)==null?void 0:e.expressionMap;if(s!=null)for(const[r,o]of Object.entries(s)){const a=new Set;for(const l of o.binds)if(l instanceof Pa){if(l.weight!==0)for(const c of l.primitives){let h=n.get(c);h==null&&(h=new Map,n.set(c,h));let u=h.get(r);u==null&&(u=new Set,h.set(r,u)),u.add(l)}a.add(l)}for(const l of a)o.deleteBind(l)}for(const r of t){const o=n.get(r);if(o==null)continue;const a=r.geometry.morphAttributes;r.geometry.morphAttributes={};const l=r.geometry.clone();r.geometry=l;const c=l.morphTargetsRelative,h=a.position!=null,u=a.normal!=null,d={},f={},g=[];if(h||u){h&&(d.position=[]),u&&(d.normal=[]);let _=0;for(const[p,m]of o)h&&(d.position[_]=of(a.position,m,c)),u&&(d.normal[_]=of(a.normal,m,c)),s==null||s[p].addBind(new Pa({index:_,weight:1,primitives:[r]})),f[p]=_,g.push(0),_++}l.morphAttributes=d,r.morphTargetDictionary=f,r.morphTargetInfluences=g}}function Ia(i,e,t){if(i.getComponent)return i.getComponent(e,t);{let n=i.array[e*i.itemSize+t];return i.normalized&&(n=Dt.denormalize(n,i.array)),n}}function jp(i,e,t,n){i.setComponent?i.setComponent(e,t,n):(i.normalized&&(n=Dt.normalize(n,i.array)),i.array[e*i.itemSize+t]=n)}function Bb(i){var e;const t=Vb(i),n=new Set;for(const u of t)n.has(u.geometry)&&(u.geometry=jb(u.geometry)),n.add(u.geometry);const s=new Map;for(const u of n){const d=u.getAttribute("skinIndex"),f=(e=s.get(d))!=null?e:new Map;s.set(d,f);const g=u.getAttribute("skinWeight"),_=zb(d,g);f.set(g,_)}const r=new Map;for(const u of t){const d=Hb(u,s);r.set(u,d)}const o=[];for(const[u,d]of r){let f=!1;for(const g of o)if(Gb(d,g.boneInverseMap)){f=!0,g.meshes.add(u);for(const[p,m]of d)g.boneInverseMap.set(p,m);break}f||o.push({boneInverseMap:d,meshes:new Set([u])})}const a=new Map,l=new Wl,c=new Wl,h=new Wl;for(const u of o){const{boneInverseMap:d,meshes:f}=u,g=Array.from(d.keys()),_=Array.from(d.values()),p=new Yi(g,_),m=c.getOrCreate(p);for(const y of f){const S=y.geometry.getAttribute("skinIndex"),v=l.getOrCreate(S),E=y.skeleton.bones,R=E.map(x=>h.getOrCreate(x)).join(","),w=`${v};${m};${R}`;let L=a.get(w);L==null&&(L=S.clone(),Wb(L,E,g),a.set(w,L)),y.geometry.setAttribute("skinIndex",L)}for(const y of f)y.bind(p,new Oe)}}function Vb(i){const e=new Set;return i.traverse(t=>{if(!t.isSkinnedMesh)return;const n=t;e.add(n)}),e}function zb(i,e){const t=new Set;for(let n=0;n<i.count;n++)for(let s=0;s<i.itemSize;s++){const r=Ia(i,n,s);Ia(e,n,s)!==0&&t.add(r)}return t}function Hb(i,e){const t=new Map,n=i.skeleton,s=i.geometry,r=s.getAttribute("skinIndex"),o=s.getAttribute("skinWeight"),a=e.get(r),l=a==null?void 0:a.get(o);if(!l)throw new Error("Unreachable. attributeUsedIndexSetMap does not know the skin index attribute or the skin weight attribute.");for(const c of l)t.set(n.bones[c],n.boneInverses[c]);return t}function Gb(i,e){for(const[t,n]of i.entries()){const s=e.get(t);if(s!=null&&!Xb(n,s))return!1}return!0}function Wb(i,e,t){const n=new Map;for(const r of e)n.set(r,n.size);const s=new Map;for(const[r,o]of t.entries()){const a=n.get(o);s.set(a,r)}for(let r=0;r<i.count;r++)for(let o=0;o<i.itemSize;o++){const a=Ia(i,r,o),l=s.get(a);jp(i,r,o,l)}i.needsUpdate=!0}function Xb(i,e,t){if(t=t||1e-4,i.elements.length!=e.elements.length)return!1;for(let n=0,s=i.elements.length;n<s;n++)if(Math.abs(i.elements[n]-e.elements[n])>t)return!1;return!0}var Wl=class{constructor(){this._objectIndexMap=new Map,this._index=0}get(i){return this._objectIndexMap.get(i)}getOrCreate(i){let e=this._objectIndexMap.get(i);return e==null&&(e=this._index,this._objectIndexMap.set(i,e),this._index++),e}};function jb(i){var e,t,n,s;const r=new Rt;r.name=i.name,r.setIndex(i.index);for(const[o,a]of Object.entries(i.attributes))r.setAttribute(o,a);for(const[o,a]of Object.entries(i.morphAttributes)){const l=o;r.morphAttributes[l]=a.concat()}r.morphTargetsRelative=i.morphTargetsRelative,r.groups=[];for(const o of i.groups)r.addGroup(o.start,o.count,o.materialIndex);return r.boundingSphere=(t=(e=i.boundingSphere)==null?void 0:e.clone())!=null?t:null,r.boundingBox=(s=(n=i.boundingBox)==null?void 0:n.clone())!=null?s:null,r.drawRange.start=i.drawRange.start,r.drawRange.count=i.drawRange.count,r.userData=i.userData,r}function af(i){if(Object.values(i).forEach(e=>{e!=null&&e.isTexture&&e.dispose()}),i.isShaderMaterial){const e=i.uniforms;e&&Object.values(e).forEach(t=>{const n=t.value;n!=null&&n.isTexture&&n.dispose()})}i.dispose()}function qb(i){const e=i.geometry;e&&e.dispose();const t=i.skeleton;t&&t.dispose();const n=i.material;n&&(Array.isArray(n)?n.forEach(s=>af(s)):n&&af(n))}function Yb(i){i.traverse(qb)}function $b(i,e){var t,n;console.warn("VRMUtils.removeUnnecessaryJoints: removeUnnecessaryJoints is deprecated. Use combineSkeletons instead. combineSkeletons contributes more to the performance improvement. This function will be removed in the next major version.");const s=(t=e==null?void 0:e.experimentalSameBoneCounts)!=null?t:!1,r=[];i.traverse(l=>{l.type==="SkinnedMesh"&&r.push(l)});const o=new Map;let a=0;for(const l of r){const h=l.geometry.getAttribute("skinIndex");if(o.has(h))continue;const u=new Map,d=new Map;for(let f=0;f<h.count;f++)for(let g=0;g<h.itemSize;g++){const _=Ia(h,f,g);let p=u.get(_);p==null&&(p=u.size,u.set(_,p),d.set(p,_)),jp(h,f,g,p)}h.needsUpdate=!0,o.set(h,d),a=Math.max(a,u.size)}for(const l of r){const h=l.geometry.getAttribute("skinIndex"),u=o.get(h),d=[],f=[],g=s?a:u.size;for(let p=0;p<g;p++){const m=(n=u.get(p))!=null?n:0;d.push(l.skeleton.bones[m]),f.push(l.skeleton.boneInverses[m])}const _=new Yi(d,f);l.bind(_,new Oe)}}function Kb(i,e){const t=i.position.count,n=new Array(t);let s=0;const r=e.array;for(let o=0;o<r.length;o++){const a=r[o];n[a]||(n[a]=!0,s++)}return{isVertexUsed:n,vertexCount:t,verticesUsed:s}}function Zb(i){const e=[],t=[];let n=0;for(let s=0;s<i.length;s++)if(i[s]){const r=n++;e[s]=r,t[r]=s}return{originalIndexNewIndexMap:e,newIndexOriginalIndexMap:t}}function Jb(i,e){var t,n,s,r;e.name=i.name,e.morphTargetsRelative=i.morphTargetsRelative,i.groups.forEach(o=>{e.addGroup(o.start,o.count,o.materialIndex)}),e.boundingBox=(n=(t=i.boundingBox)==null?void 0:t.clone())!=null?n:null,e.boundingSphere=(r=(s=i.boundingSphere)==null?void 0:s.clone())!=null?r:null,e.setDrawRange(i.drawRange.start,i.drawRange.count),e.userData=i.userData}function Qb(i,e,t){const n=e.array,s=new n.constructor(n.length);for(let r=0;r<n.length;r++){const o=n[r];s[r]=t[o]}i.setIndex(new it(s,e.itemSize,e.normalized))}function Ua(i,e,t){const n=i.constructor,s=new n(e.length*t);let r=!0;for(let o=0;o<e.length;o++){const l=e[o]*t,c=o*t;for(let h=0;h<t;h++){const u=i[l+h];s[c+h]=u,r=r&&u===0}}return[s,r]}function ew(i){var e;const t=new Map,n=[];for(const[s,r]of Object.entries(i))if(r.isInterleavedBufferAttribute){const o=r,a=o.data,l=(e=t.get(a))!=null?e:[];t.set(a,l),l.push([s,o])}else{const o=r;n.push([s,o])}return[t,n]}function tw(i,e,t){const[n,s]=ew(e);for(const[r,o]of n){const a=r.array,{stride:l}=r,[c]=Ua(a,t,l),h=new Mh(c,l);h.setUsage(r.usage);for(const[u,d]of o){const{itemSize:f,offset:g,normalized:_}=d,p=new Mo(h,f,g,_);i.setAttribute(u,p)}}for(const[r,o]of s){const a=o.array,{itemSize:l,normalized:c}=o,[h]=Ua(a,t,l);i.setAttribute(r,new it(h,l,c))}}function nw(i){var e;const t=new Map,n=[];for(const[s,r]of Object.entries(i)){const o=s;for(let a=0;a<r.length;a++){const l=r[a];if(l.isInterleavedBufferAttribute){const c=l,h=c.data,u=(e=t.get(h))!=null?e:[];t.set(h,u),u.push([o,a,c])}else{const c=l;n.push([o,a,c])}}}return[t,n]}function iw(i,e,t){var n,s;let r=!0;const[o,a]=nw(e),l={};for(const[c,h]of o){const u=c.array,{stride:d}=c,[f,g]=Ua(u,t,d);r=r&&g;const _=new Mh(f,d);_.setUsage(c.usage);for(const[p,m,y]of h){const{itemSize:S,offset:v,normalized:E}=y,R=new Mo(_,S,v,E);(n=l[p])!=null||(l[p]=[]),l[p][m]=R}}for(const[c,h,u]of a){const d=u,f=d.array,{itemSize:g,normalized:_}=d,[p,m]=Ua(f,t,g);r=r&&m,(s=l[c])!=null||(l[c]=[]),l[c][h]=new it(p,g,_)}i.morphAttributes=r?{}:l}function sw(i){const e=new Map;i.traverse(t=>{if(!t.isMesh)return;const n=t,s=n.geometry,r=s.index;if(r==null)return;const o=e.get(s);if(o!=null){n.geometry=o;return}const{isVertexUsed:a,vertexCount:l,verticesUsed:c}=Kb(s.attributes,r);if(c===l)return;const{originalIndexNewIndexMap:h,newIndexOriginalIndexMap:u}=Zb(a),d=new Rt;Jb(s,d),e.set(s,d),Qb(d,r,h),tw(d,s.attributes,u),iw(d,s.morphAttributes,u),n.geometry=d}),Array.from(e.keys()).forEach(t=>{t.dispose()})}function rw(i){var e;((e=i.meta)==null?void 0:e.metaVersion)==="0"&&(i.scene.rotation.y=Math.PI)}var $i=class{constructor(){}};$i.combineMorphs=Fb;$i.combineSkeletons=Bb;$i.deepDispose=Yb;$i.removeUnnecessaryJoints=$b;$i.removeUnnecessaryVertices=sw;$i.rotateVRM0=rw;const Yt=Math.PI*2,Oi=i=>Math.min(1,Math.max(0,i)),us=(i,e,t)=>{const n=Oi((t-i)/(e-i));return n*n*(3-2*n)},$t=(i,e,t)=>i+(e-i)*t;function ow(i,e){const t=[],n=new Oe().copy(i.scene.matrixWorld).invert(),s=new Oe,r=new A;return i.scene.traverse(o=>{if(!o.isMesh||!o.geometry||!o.geometry.attributes.position||(Array.isArray(o.material)?o.material:[o.material]).every(c=>e((c.name||"").replace(" (Outline)",""))))return;s.multiplyMatrices(n,o.matrixWorld);const l=o.geometry.attributes.position;for(let c=0;c<l.count;c++)o.isSkinnedMesh?o.getVertexPosition(c,r):r.fromBufferAttribute(l,c),r.applyMatrix4(s),t.push(r.x,r.y,r.z)}),new Float32Array(t)}function aw(i,e){const t=i.length;if(!i.some(s=>s>0))return i.fill(e);for(let s=0;s<t;s++){if(i[s]>0)continue;let r=1,o=1;for(;i[(s-r+t)%t]<=0;)r++;for(;i[(s+o)%t]<=0;)o++;i[s]=$t(i[(s-r+t)%t],i[(s+o)%t],r/(r+o))}const n=i.map((s,r)=>Math.max(i[(r+t-1)%t],i[r],i[(r+1)%t]));return n.map((s,r)=>(n[(r+t-1)%t]+2*n[r]+n[(r+1)%t])/4)}function kr(i,e,t,n,s,r,o=48,a=.1){const l=new Float32Array(o).fill(-1);for(let c=0;c<i.length;c+=3){const h=i[c],u=i[c+1],d=i[c+2];if(u<e||u>t||!r(h,u,d))continue;const f=h-n,g=d-s,_=Math.hypot(f,g);let p=Math.atan2(f,g);p<0&&(p+=Yt);const m=Math.round(p/Yt*o)%o;_>l[m]&&(l[m]=_)}return aw(l,a)}const Di=(i,e)=>{const t=i.length,n=(e/Yt*t%t+t)%t,s=Math.floor(n),r=n-s;return i[s]*(1-r)+i[(s+1)%t]*r};class lf{constructor(){this.pos=[],this.nor=[],this.uv=[],this.si=[],this.sw=[],this.idx=[]}vert(e,t,n,s){this.pos.push(e[0],e[1],e[2]),this.nor.push(t[0],t[1],t[2]),this.uv.push(n[0],n[1]);const r=s.slice().sort((a,l)=>l[1]-a[1]).slice(0,4);let o=0;for(const a of r)o+=a[1];for(let a=0;a<4;a++)this.si.push(r[a]?r[a][0]:0),this.sw.push(r[a]?r[a][1]/o:0);return this.pos.length/3-1}grid({rows:e,cols:t,wrap:n=!1,P:s,C:r,UV:o,W:a,thick:l,capTop:c=!0,capBot:h=!0}){const u=new A,d=new A,f=new A,g=[],_=(w,L)=>s[w*t+(n?(L%t+t)%t:Math.min(t-1,Math.max(0,L)))];for(let w=0;w<e;w++)for(let L=0;L<t;L++){const x=_(w,L+1),M=_(w,L-1),C=_(Math.min(e-1,w+1),L),U=_(Math.max(0,w-1),L);d.set(x[0]-M[0],x[1]-M[1],x[2]-M[2]),f.set(C[0]-U[0],C[1]-U[1],C[2]-U[2]),u.crossVectors(d,f).normalize();const O=s[w*t+L],D=r[w];u.x*(O[0]-D[0])+u.y*(O[1]-D[1])+u.z*(O[2]-D[2])<0&&u.negate(),g.push([u.x,u.y,u.z])}const p=l/2,m=(w,L)=>{const x=s[w],M=g[w];return[x[0]+M[0]*p*L,x[1]+M[1]*p*L,x[2]+M[2]*p*L]},y=w=>[-w[0],-w[1],-w[2]],S=[],v=[];for(let w=0;w<e*t;w++)S.push(this.vert(m(w,1),g[w],o[w],a[w])),v.push(this.vert(m(w,-1),y(g[w]),o[w],a[w]));const E=n?t:t-1;for(let w=0;w<e-1;w++)for(let L=0;L<E;L++){const x=w*t+L,M=w*t+(L+1)%t,C=(w+1)*t+(L+1)%t,U=(w+1)*t+L,O=s[x],D=s[M],G=s[U];d.set(D[0]-O[0],D[1]-O[1],D[2]-O[2]),f.set(G[0]-O[0],G[1]-O[1],G[2]-O[2]),u.crossVectors(d,f);const V=u.x*g[x][0]+u.y*g[x][1]+u.z*g[x][2]<0,Y=(B,Q)=>{Q?this.idx.push(B[x],B[M],B[C],B[x],B[C],B[U]):this.idx.push(B[x],B[C],B[M],B[x],B[U],B[C])};Y(S,!V),Y(v,V)}const R=(w,L)=>{const x=s[w],M=s[L];d.set(M[0]-x[0],M[1]-x[1],M[2]-x[2]);const C=g[w];f.set(C[0],C[1],C[2]),u.crossVectors(d,f).normalize();const U=[(x[0]+M[0])/2,(x[1]+M[1])/2,(x[2]+M[2])/2],O=s[Math.floor(e/2)*t+Math.floor(t/2)];!n&&u.x*(U[0]-O[0])+u.y*(U[1]-O[1])+u.z*(U[2]-O[2])<0&&u.negate();const D=[u.x,u.y,u.z],G=this.vert(m(w,1),D,o[w],a[w]),V=this.vert(m(L,1),D,o[L],a[L]),Y=this.vert(m(L,-1),D,o[L],a[L]),B=this.vert(m(w,-1),D,o[w],a[w]);this.idx.push(G,V,Y,G,Y,B,G,Y,V,G,B,Y)};for(let w=0;w<E;w++)c&&R(w,(w+1)%t),h&&R((e-1)*t+w,(e-1)*t+(w+1)%t);if(!n)for(let w=0;w<e-1;w++)R(w*t,(w+1)*t),R(w*t+t-1,(w+1)*t+t-1)}build(){const e=new Rt;return e.setAttribute("position",new Ht(this.pos,3)),e.setAttribute("normal",new Ht(this.nor,3)),e.setAttribute("uv",new Ht(this.uv,2)),e.setAttribute("skinIndex",new Fa(this.si,4)),e.setAttribute("skinWeight",new Ht(this.sw,4)),e.setIndex(this.idx),e.computeBoundingSphere(),e}}function lw(i){const e=i.clone();e.deleteAttribute("normal"),e.deleteAttribute("uv");const t=Ih(e,1e-5);return t.computeVertexNormals(),t}function qp(i,e=!1){const t=new bh(i);return t.flipY=!1,t.anisotropy=4,t.generateMipmaps=!0,t.minFilter=Qn,e&&(t.wrapS=t.wrapT=Ms),t.needsUpdate=!0,t}const cw=i=>()=>(i=i*16807%2147483647)/2147483647;function hw(i,e,t,n,s){const o=document.createElement("canvas");o.width=o.height=1024;const a=o.getContext("2d"),l=cw(7+i.length*13);a.setTransform(1024/t,0,0,1024/n,0,0);const c=(d,f,g=0,_=n)=>{const p=a.createLinearGradient(0,g,0,_);return p.addColorStop(0,d),p.addColorStop(1,f),p};let h="#141012",u="#c9962e";if(i==="fire"){a.fillStyle=c("#a3221a","#5e0d0a"),a.fillRect(0,0,t,n);const d=(g,_,p,m,y)=>{a.beginPath(),a.moveTo(g-_/2,n+.02),a.bezierCurveTo(g-_*.55,n-p*.45,g+m*.2-_*.25,n-p*.7,g+m,n-p),a.bezierCurveTo(g+m*.3+_*.2,n-p*.62,g+_*.6,n-p*.4,g+_/2,n+.02),a.closePath(),a.fill(),y&&a.stroke()},f=[];for(let g=-.05;g<t+.1;g+=.075+l()*.04)f.push([g,.09+l()*.05,.16+l()*.2,(l()-.5)*.08]);a.lineJoin="round",a.strokeStyle="#2a0504",a.lineWidth=.007,a.fillStyle="#ff6a12";for(const g of f)d(g[0],g[1],g[2],g[3],!0);a.fillStyle="#ffb02a";for(const g of f)d(g[0],g[1]*.62,g[2]*.68,g[3]*.7,!1);a.fillStyle="#fff1a0";for(const g of f)d(g[0],g[1]*.3,g[2]*.36,g[3]*.4,!1);a.fillStyle="#ffb02a";for(let g=0;g<40;g++){const _=l()*t,p=n-.22-l()*.25;a.beginPath(),a.ellipse(_,p,.006+l()*.006,.01+l()*.008,l(),0,Yt),a.fill()}}else if(i==="water"){a.fillStyle="#163a72",a.fillRect(0,0,t,n);const d=.052,f=d*.5;for(let g=0,_=-d;_<n+d;g++,_+=f){const p=Oi(_/n),m=`rgb(${$t(22,30,p)|0},${$t(58,92,p)|0},${$t(114,160,p)|0})`;for(let y=g%2?0:d,S=0;y<t+d*2&&S<60;y+=d*2,S++){a.beginPath(),a.arc(y,_,d,Math.PI,Yt),a.lineTo(y+d,_+1e-4),a.closePath(),a.fillStyle=m,a.fill();for(let v=0;v<4;v++)a.beginPath(),a.arc(y,_,d*(1-v*.22),Math.PI,Yt),a.strokeStyle=v%2?"rgba(160,210,255,0.85)":"rgba(235,248,255,0.95)",a.lineWidth=v===0?.004:.0028,a.stroke()}}a.fillStyle="rgba(230,245,255,0.9)";for(let g=0;g<t;g+=.06)a.beginPath(),a.arc(g,n-.01,.03,Math.PI,Yt),a.fill();h="#e9f1f8",u="#2a5d9a"}else if(i==="thunder"){a.fillStyle=c("#f0be2a","#c98a10"),a.fillRect(0,0,t,n),a.strokeStyle="rgba(120,70,0,0.55)",a.lineWidth=.005,a.lineJoin="miter";for(let f=.08;f<n-.25;f+=.11)for(let g=Math.round(f/.11)%2*.07+.03;g<t;g+=.14)a.beginPath(),a.moveTo(g-.012,f-.03),a.lineTo(g+.008,f-.004),a.lineTo(g-.006,f+.002),a.lineTo(g+.014,f+.03),a.stroke();const d=(f,g,_,p,m)=>{a.beginPath();for(let y=-.05,S=0;y<t+.1;y+=_,S++)a.lineTo(y,f+(S%2?g:-g));a.strokeStyle=p,a.lineWidth=m,a.stroke()};a.fillStyle="#16120a",a.fillRect(0,n-.2,t,.2),a.lineJoin="miter",d(n-.14,.035,.05,"#fff6c8",.016),d(n-.06,.025,.04,"#f0be2a",.012),a.fillStyle="#fff6c8",a.fillRect(0,n-.205,t,.008),h="#16120a",u="#fff6c8"}else{a.fillStyle=c("#2f8150","#1b5432"),a.fillRect(0,0,t,n);const d=.075,f=d*Math.sqrt(3)/2;a.strokeStyle="rgba(200,255,220,0.55)",a.lineWidth=.0028;for(let _=-1,p=-f;p<n+f;_++,p+=f)for(let m=(_%2?d/2:0)-d;m<t+d;m+=d)for(const y of[1,-1]){const S=y>0?[[m,p+f],[m+d,p+f],[m+d/2,p]]:[[m+d/2,p],[m+d*1.5,p],[m+d,p+f]],v=(S[0][0]+S[1][0]+S[2][0])/3,E=(S[0][1]+S[1][1]+S[2][1])/3;a.beginPath(),a.moveTo(...S[0]),a.lineTo(...S[1]),a.lineTo(...S[2]),a.closePath();for(const R of S)a.moveTo(v,E),a.lineTo(R[0],R[1]);a.stroke()}const g=a.createLinearGradient(0,n-.25,0,n);g.addColorStop(0,"rgba(235,250,240,0)"),g.addColorStop(1,"rgba(235,250,240,0.85)"),a.fillStyle=g,a.fillRect(0,n-.25,t,.25),a.strokeStyle="rgba(255,255,255,0.9)",a.lineCap="round";for(let _=0;_<14;_++){const p=l()*t,m=n-.04-l()*.16,y=.12+l()*.15;a.lineWidth=.006+l()*.006,a.beginPath(),a.moveTo(p,m),a.bezierCurveTo(p+y*.3,m-.03,p+y*.7,m+.03,p+y,m-.01),a.stroke()}h="#eaf3ec",u="#1b5432"}a.fillStyle=h,a.fillRect(0,0,s,n),a.fillRect(t-s,0,s,n),a.fillStyle=u,a.fillRect(s-.004,0,.004,n),a.fillRect(t-s,0,.004,n),a.fillStyle="rgba(0,0,0,0.06)";for(let d=0;d<t;d+=.09)a.fillRect(d,0,.012,n);return qp(o)}function uw(i){const n=document.createElement("canvas");n.width=512,n.height=256;const s=n.getContext("2d"),r=new pe(i.pants),o=r.clone().multiplyScalar(.6),a=r.clone().lerp(new pe("#ffffff"),.12);s.fillStyle="#"+r.getHexString(),s.fillRect(0,0,512/2,256);for(let h=0;h<16;h++){const u=h/16*256;s.fillStyle="#"+o.getHexString(),s.fillRect(u,0,3,256),s.fillStyle="#"+a.getHexString(),s.fillRect(u+3,0,2,256)}const l=new pe(i.wrap);s.fillStyle="#"+l.getHexString(),s.fillRect(512/2,0,512/4,256),s.strokeStyle="#"+l.clone().multiplyScalar(.72).getHexString(),s.lineWidth=2.5;for(let h=-256;h<256*2;h+=22)s.beginPath(),s.moveTo(512/2,h),s.lineTo(512*.75,h+40),s.stroke();const c=new pe(i.belt);return s.fillStyle="#"+c.getHexString(),s.fillRect(512*.75,0,512/4,256),s.fillStyle="#"+c.clone().multiplyScalar(.7).getHexString(),s.fillRect(512*.75,256*.45,512/4,256*.1),qp(n)}const Xl=new A(0,-9.8,0);class dw{constructor(e,t,n,s,r){this.A=e,this.Bn=t,this.pivot=n.clone(),this.mid=s.clone(),this.tip=r.clone(),this.dA=s.clone().sub(n).normalize(),this.dB=r.clone().sub(s).normalize(),this.M=new A,this.Mp=new A,this.T=new A,this.Tp=new A,this.init=!1}}class fw{constructor(e,t){this.bone=e,this.rest=e.position.clone(),this.max=t,this.X=new A,this.Xp=new A,this.init=!1}}function pw(i){const{vrm:e,bone:t,S:n,ch:s,rim:r,toonMat:o,OUTLINE:a}=i,l=s.colors,c=e.scene,h=j=>c.worldToLocal(t(j).getWorldPosition(new A)),u=j=>e.humanoid.getNormalizedBoneNode(j),d=h("Hips"),f=u("spine")?h("Spine"):d,g=h("Spine1"),_=u("upperChest")?h("Spine2"):null,p=h("Neck"),m=h("LeftArm"),y=h("LeftForeArm"),S=h("LeftHand"),v=h("LeftUpLeg"),E=h("LeftLeg"),R=h("LeftFoot"),w=h("RightArm"),L=h("RightForeArm"),x=h("RightHand"),M=h("RightUpLeg"),C=h("RightLeg"),U=h("RightFoot"),O=(Math.abs(m.x)+Math.abs(w.x))/2,D=O/.16,G=[[d.y,d.z],[f.y,f.z],[g.y,g.z],..._?[[_.y,_.z]]:[],[p.y,p.z]].sort((j,q)=>j[0]-q[0]),V=j=>{if(j<=G[0][0])return G[0][1];for(let q=0;q<G.length-1;q++)if(j<=G[q+1][0])return $t(G[q][1],G[q+1][1],(j-G[q][0])/(G[q+1][0]-G[q][0]));return G[G.length-1][1]},Y=[],B=new Map,Q=j=>j?(B.has(j)||(B.set(j,Y.length),Y.push(j)),B.get(j)):-1,ie=[[d.y,Q(u("hips"))],...u("spine")?[[f.y,Q(u("spine"))]]:[],[g.y,Q(u("chest"))],..._?[[_.y,Q(u("upperChest"))]]:[]],Se=ie.map(([j],q)=>q===0?j:q===ie.length-1?j+.06:(j+ie[q+1][0])/2),$e=j=>{if(j<=Se[0])return[[ie[0][1],1]];for(let q=0;q<Se.length-1;q++)if(j<=Se[q+1]){const ue=(j-Se[q])/(Se[q+1]-Se[q]);return[[ie[q][1],1-ue],[ie[q+1][1],ue]]}return[[ie[ie.length-1][1],1]]},ht=(j,q)=>j.map(([ue,et])=>[ue,et*q]),at={pend:[],jig:[],legs:[]},lt=[],K=[],ee=[],be=(j,q)=>{c.updateMatrixWorld(!0);const ue=new Yi(Y.slice());for(const[et,Ze]of[[j,q],[lw(j),a]]){const ze=new co(et,Ze);ze.frustumCulled=!1,c.add(ze),ze.updateMatrixWorld(!0),ze.bind(ue,ze.matrixWorld),lt.push(ze)}},Ae=(j=>q=>Math.abs(q)<j)(O+.012),Qe=p.y-.006,Ut=(m.y+w.y)/2,I=d.y-(d.y-(E.y+C.y)/2)*.8,St=kr(n,p.y-.035,p.y+.012,0,V(p.y),Ae,48,.06),Fe=32,Ne=new Float32Array(48*Fe).fill(-1);for(let j=0;j<n.length;j+=3){const q=n[j],ue=n[j+1],et=n[j+2];if(ue<Ut-.06||ue>Qe+.02||!Ae(q))continue;const Ze=et-V(ue),ze=Math.hypot(q,Ze);let rt=Math.atan2(q,Ze);rt<0&&(rt+=Yt);const Ye=Math.round(rt/Yt*48)%48,nt=Math.min(Fe-1,Math.round(ze/.01));ue>Ne[Ye*Fe+nt]&&(Ne[Ye*Fe+nt]=ue)}const Re=(j,q)=>{const ue=Math.round((j/Yt*48%48+48)%48)%48,et=Math.round(q/.01);let Ze=-1;for(let ze=-1;ze<=2;ze++)for(let rt=-1;rt<=1;rt++){const Ye=(ue+rt+48)%48,nt=et+ze;nt>=0&&nt<Fe&&(Ze=Math.max(Ze,Ne[Ye*Fe+nt]))}return Ze},pt=Ut+.04*D,Me=17,Ge=[];for(let j=0;j<Me;j++)Ge.push($t(pt,I,Math.pow(j/(Me-1),1.05)));const Bt=j=>(j>E.y?$t(.12,.135,Oi((v.y+.07-j)/(v.y+.07-E.y))):.135)*D+.012,kt=(j,q)=>{const ue=Bt(q),et=Math.sin(j),Ze=Math.cos(j);let ze=0;for(const rt of[v,M]){const Ye=rt.x,nt=rt.z-V(q),Vt=et*Ye+Ze*nt,T=Vt*Vt-(Ye*Ye+nt*nt)+ue*ue;T>=0&&(ze=Math.max(ze,Vt+Math.sqrt(T)))}return ze},P=[];let b=null;for(let j=0;j<Me;j++){const q=Ge[j],ue=j===0?[Ut-.03,Ut+.09]:[q-.035,q+.035],et=q<d.y+.05;let Ze=kr(n,ue[0],ue[1],0,V(q),et?()=>!0:Ae,48,.15);if(Ze=Ze.map(ze=>ze+.024),et&&(Ze=Ze.map((ze,rt)=>Math.max(ze,kt(rt/48*Yt,q)+.018))),b&&j>1&&(Ze=Ze.map((ze,rt)=>Math.max(ze,b[rt]))),q<d.y){const ze=(d.y-q)*.09;Ze=Ze.map((rt,Ye)=>rt+ze*(.6+.4*Math.abs(Math.cos(Ye/48*Yt))))}P.push(Ze),b=Ze}const z=j=>{const q=Oi((pt-j)/(pt-I));return(q<.3?$t(.07,.058,q/.3):$t(.058,.11,(q-.3)/.7))*D},$=(j,q)=>{for(let ue=.05;ue<1.5;ue+=.01)if(Di(j,ue)*Math.sin(ue)>=q&&Di(j,Yt-ue)*Math.sin(ue)>=q)return ue;return 1.2},Z=45,X=[],Ce=.95;X.push({y:Qe+.02*D,r:St.map(j=>j+.02),a0:Ce+.06}),X.push({y:Qe,r:St.map(j=>j+.02),a0:Ce});const re=$(P[0],z(pt));for(const j of[.3,.6,.85])X.push({yoke:j,r:St.map((q,ue)=>$t(q+.02,P[0][ue],Math.pow(j,.8))),a0:$t(Ce,re,j)});for(let j=0;j<Me;j++)X.push({y:Ge[j],r:P[j],a0:$(P[j],z(Ge[j]))});const we=X.length,xe=[],se=[];for(let j=0;j<we;j++){const q=X[j],ue=q.a0;let et=q.y;for(let Ze=0;Ze<Z;Ze++){const ze=ue+(Yt-2*ue)*Ze/(Z-1),rt=Di(q.r,ze);let Ye=et;if(q.yoke!==void 0){const nt=$t(Qe,pt,q.yoke*q.yoke*.7+q.yoke*.3);Ye=Math.max(nt,Re(ze,rt-.024)+.02),Ye=Math.min(Ye,Qe)}xe.push([rt*Math.sin(ze),Ye,V(Ye)+rt*Math.cos(ze)])}se.push([0,q.y!==void 0?q.y:pt,V(q.y!==void 0?q.y:pt)])}for(let j=0;j<we;j++)if(X[j].yoke!==void 0){let q=0;for(let ue=0;ue<Z;ue++)q+=xe[j*Z+ue][1];se[j][1]=q/Z-.05}const me=(Z-1)/2,Ue=[0];for(let j=1;j<we;j++){const q=xe[(j-1)*Z+me],ue=xe[j*Z+me];Ue.push(Ue[j-1]+Math.hypot(q[0]-ue[0],q[1]-ue[1],q[2]-ue[2]))}const Ee=Ue[we-1];let fe=0;{const j=X.findIndex(q=>q.y===Ge[3]);for(let q=1;q<Z;q++){const ue=xe[j*Z+q-1],et=xe[j*Z+q];fe+=Math.hypot(ue[0]-et[0],ue[2]-et[2])}}const qe=[],N=[],oe=Q(u("leftShoulder")),ae=Q(u("rightShoulder")),_e=8,ne=[],J=[],ve=d.y+.03,We=.45,_t=u("hips"),mt=kr(n,d.y-.02,d.y+.06,0,V(d.y),Ae,48,.15);for(let j=0;j<_e;j++){const q=(j+.5)/_e*Yt,ue=Di(mt,q)+.02,et=new A(ue*Math.sin(q),ve,V(ve)+ue*Math.cos(q)),Ze=Di(P[Me-1],q),ze=new A(Ze*Math.sin(q),I,V(I)+Ze*Math.cos(q)),rt=new A().lerpVectors(et,ze,We),Ye=new $r;Ye.name="hemA"+j,Ye.position.copy(et).sub(d),_t.add(Ye);const nt=new $r;nt.name="hemB"+j,nt.position.copy(rt).sub(et),Ye.add(nt),ne.push(Q(Ye)),J.push(Q(nt)),at.pend.push(new dw(Ye,nt,et.clone().sub(d),rt.clone().sub(d),ze.clone().sub(d)))}for(let j=0;j<we;j++)for(let q=0;q<Z;q++){const ue=xe[j*Z+q],et=X[j],Ze=et.a0+(Yt-2*et.a0)*q/(Z-1);qe.push([q/(Z-1),Ue[j]/Ee]);let ze=$e(ue[1]);const rt=.65*us(.45*O,.95*O,Math.abs(ue[0]))*us(Ut-.12,Ut-.02,ue[1]);rt>0&&(ze=[...ht(ze,1-rt),[ue[0]>0?oe:ae,rt]]);const Ye=us(ve,ve-.16,ue[1]);if(Ye>0){const nt=Ze/Yt*_e-.5,Vt=(Math.floor(nt)%_e+_e)%_e,T=nt-Math.floor(nt),k=(ve-ue[1])/(ve-I),H=us(We-.12,We+.15,k),W=(Vt+1)%_e;ze=[...ht(ze,1-Ye),[ne[Vt],Ye*(1-T)*(1-H)],[ne[W],Ye*T*(1-H)],[J[Vt],Ye*(1-T)*H],[J[W],Ye*T*H]]}N.push(ze)}const gn=new lf;gn.grid({rows:we,cols:Z,P:xe,C:se,UV:qe,W:N,thick:.012});for(const[j,q,ue,et,Ze]of[[1,m,y,S,"left"],[-1,w,L,x,"right"]]){const ze=q.x-j*.035,rt=et.x-j*.03,Ye=13,nt=20,Vt=Te=>{const Ve=(Te-q.x)/(ue.x-q.x);return Ve<=1?new A().lerpVectors(q,ue,Math.max(0,Ve)):new A().lerpVectors(ue,et,Math.min(1,(Te-ue.x)/(et.x-ue.x)))},T=Q(u(Ze+"Shoulder")),k=Q(u(Ze+"UpperArm")),H=Q(u(Ze+"LowerArm")),W=u(Ze+"LowerArm"),F=new $r;F.name=Ze+"SleeveDrop",F.position.set((et.x-ue.x)*.45,-.08,0),W.add(F);const te=Q(F);at.jig.push(new fw(F,.07));const ge=[],le=[],ce=[],ye=[],Ie=Math.abs(rt-ze);for(let Te=0;Te<Ye;Te++){const Ve=$t(ze,rt,Te/(Ye-1)),ct=Vt(Ve);let Ct=.04;for(let ut=0;ut<n.length;ut+=3){const st=n[ut];if(Math.abs(st-Ve)>.02||st*j<O*.8)continue;const Nt=n[ut+1]-ct.y,Sn=n[ut+2]-ct.z,zt=Math.hypot(Nt,Sn);zt<.085&&zt>Ct&&(Ct=zt)}const bt=Te/(Ye-1),Mt=Math.max(.062*D,Ct+.022)+bt*.012,Le=.13*D*Math.pow(bt,.8);for(let ut=0;ut<nt;ut++){const st=ut/nt*Yt,Nt=Math.cos(st),Sn=Math.sin(st),zt=Nt>=0?Mt*Nt:(Mt+Le)*Nt,bn=Mt*Sn*(Nt<0?1-.25*-Nt*(Le/(.13*D)):1);ge.push([Ve,ct.y+zt,ct.z+bn]),ce.push([.32+ut/nt*.34,1-Ie/Ee+bt*(Ie/Ee)]);const vt=(Ve-ue.x)*j;let jt=vt<-.04?[[k,1]]:vt>.04?[[H,1]]:[[k,.5-vt/.08],[H,.5+vt/.08]];const Gt=.5*us(.02,-.03,(Ve-q.x)*j);Gt>0&&(jt=[...ht(jt,1-Gt),[T,Gt]]);const Ot=Nt<0?Math.pow(-Nt,1.2)*Oi(Le/(.1*D))*.85:0;Ot>0&&(jt=[...ht(jt,1-Ot),[te,Ot]]),ye.push(jt)}le.push([ct.x,ct.y,ct.z])}gn.grid({rows:Ye,cols:nt,wrap:!0,P:ge,C:le,UV:ce,W:ye,thick:.01,capTop:!1})}const yn=.04*D,yi=hw(s.id,l,fe,Ee,yn);ee.push(yi);const wn=o("#ffffff",r);wn.map=yi,K.push(wn),be(gn.build(),wn);const ri=new lf;for(const[j,q,ue,et,Ze]of[[1,v,E,R,"left"],[-1,M,C,U,"right"]]){const ze=Q(_t),rt=Q(u(Ze+"UpperLeg")),Ye=Q(u(Ze+"LowerLeg")),nt=d.y+.07,Vt=$t(ue.y,et.y,.5),T=et.y+.035,k=le=>le>=q.y?new A(q.x,le,q.z):le>=ue.y?new A().lerpVectors(q,ue,(q.y-le)/(q.y-ue.y)):new A().lerpVectors(ue,et,(ue.y-le)/(ue.y-et.y)),H=le=>le*j>-.005,W=(le,ce)=>{const ye=k(le);return kr(n,le-ce,le+ce,ye.x,ye.z,(Ie,Te,Ve)=>H(Ie)&&Math.hypot(Ie-ye.x,Ve-ye.z)<.2,32,.07)},F=(le,ce,ye,Ie,Te,Ve,ct,Ct,bt)=>{const Le=[],ut=[],st=[],Nt=[];for(let Sn=0;Sn<ye;Sn++){const zt=Sn/(ye-1),bn=$t(le,ce,zt),vt=k(bn),jt=W(bn,.03);for(let Gt=0;Gt<24;Gt++){const Ot=Gt/24*Yt,rn=Ie(zt,bn,Di(jt,Ot),Ot);Le.push([vt.x+rn*Math.sin(Ot),bn,vt.z+rn*Math.cos(Ot)]),st.push([$t(Te,Ve,Gt/24),zt]),Nt.push(ct(bn))}ut.push([vt.x,bn,vt.z])}ri.grid({rows:ye,cols:24,wrap:!0,P:Le,C:ut,UV:st,W:Nt,thick:.008,capTop:Ct,capBot:bt})},te=ue.y;F(nt,Vt,16,(le,ce,ye,Ie)=>{const Te=ce>te?$t(.12,.135,Oi((q.y+.07-ce)/(q.y+.07-te))):$t(.135,.07,Math.pow(Oi((te-ce)/(te-Vt)),1.6)),Ve=ce>q.y?0:.01*Math.max(0,Math.sin(Ie+(j>0?.3:-.3)));return Math.max(Te*D+Ve,ye+(ce<te-(te-Vt)*.7?.012:.025))},.01,.49,le=>{const ce=us(q.y+.05,q.y-.1,le),ye=us(te+.05,te-.05,le);return[[ze,1-ce],[rt,ce*(1-ye)],[Ye,ce*ye]]},!0,!1),F(Vt+.025,T,6,(le,ce,ye)=>ye+.012-le*.003,.51,.74,()=>[[Ye,1]],!0,!0)}{const j=$t(d.y,f.y,.6)+.02,q=4,ue=40,et=[],Ze=[],ze=[],rt=[];for(let Ye=0;Ye<q;Ye++){const nt=j+.035-.07*Ye/(q-1),Vt=kr(n,nt-.03,nt+.03,0,V(nt),Ae,48,.13);for(let T=0;T<ue;T++){const k=T/ue*Yt,H=Di(Vt,k)+.014;et.push([H*Math.sin(k),nt,V(nt)+H*Math.cos(k)]),ze.push([.76+T/ue*.23,Ye/(q-1)]),rt.push($e(nt))}Ze.push([0,nt,V(nt)])}ri.grid({rows:q,cols:ue,wrap:!0,P:et,C:Ze,UV:ze,W:rt,thick:.01})}const Ki=uw(l);ee.push(Ki);const Si=o("#ffffff",r);Si.map=Ki,K.push(Si),be(ri.build(),Si);for(const j of["left","right"])at.legs.push([u(j+"UpperLeg"),u(j+"LowerLeg"),.145*D],[u(j+"LowerLeg"),u(j+"Foot"),.12*D]);at.hips=_t;const bi={hipsHalf:Di(mt,Math.PI/2),hemY:I,Wm:fe,Hm:Ee};return{meshes:lt,mats:K,texs:ee,physics:at,info:bi,update:j=>gw(at,j),reset:()=>{for(const j of at.pend)j.init=!1;for(const j of at.jig)j.init=!1}}}const jl=new Pe,mw=new A(0,0,1),Ks=new Pe,Or=new A,ki=new A,tn=new A,Vn=new A,Wt=new A,fi=new A,sa=new A,cf=new Pe,Fr=new A,Br=new A;function ql(i,e,t,n){Fr.subVectors(t,e);const s=Fr.lengthSq(),r=s>0?Oi(Br.subVectors(i,e).dot(Fr)/s):0;Fr.multiplyScalar(r).add(e),Br.subVectors(i,Fr);const o=Br.length();return o>=n||o<1e-6?0:(Br.multiplyScalar((n-o)/o),i.add(Br),n-o)}function gw(i,e){if(!e)return;const t=1/60,n=new A;i.hips.getWorldScale(n);const s=n.x,r=i.legs.map(([a,l,c])=>[a.getWorldPosition(new A),l.getWorldPosition(new A),c*s]),o=new Pe;for(let a=0;a<e;a++){i.pend[0].A.parent.getWorldQuaternion(Ks),Vn.set(0,0,1).applyQuaternion(Ks),Vn.y=0,Vn.lengthSq()<1e-4&&Vn.set(0,1,0).applyQuaternion(Ks).negate().setY(0),jl.setFromUnitVectors(mw,Vn.normalize());for(const c of i.pend){const h=c.A.parent;h.localToWorld(ki.copy(c.pivot)),tn.subVectors(c.mid,c.pivot).applyQuaternion(jl).multiplyScalar(s).add(ki),fi.copy(c.mid),h.localToWorld(fi),tn.lerp(fi,.3);const u=tn.distanceTo(ki),d=c.tip.distanceTo(c.mid)*s;Or.subVectors(c.tip,c.mid).applyQuaternion(jl).multiplyScalar(s).add(tn),(!c.init||c.M.distanceTo(tn)>u||c.T.distanceTo(Or)>(u+d)*1.2)&&(c.M.copy(tn),c.Mp.copy(tn),c.T.copy(Or),c.Tp.copy(Or),c.init=!0),Vn.subVectors(c.M,c.Mp).multiplyScalar(.84),c.Mp.copy(c.M),c.M.add(Vn).addScaledVector(Xl,t*t*s*.5),c.M.lerp(tn,.16),Vn.subVectors(c.T,c.Tp).multiplyScalar(.86),c.Tp.copy(c.T),c.T.add(Vn).addScaledVector(Xl,t*t*s),fi.subVectors(Or,tn).add(c.M),c.T.lerp(fi,.07);for(const[g,_,p]of r)ql(c.M,g,_,p),ql(c.T,g,_,p),Wt.lerpVectors(c.M,c.T,.5),sa.copy(Wt),ql(Wt,g,_,p)>0&&(Wt.sub(sa),c.T.add(Wt),c.M.addScaledVector(Wt,.5));Wt.subVectors(c.M,ki).normalize(),fi.subVectors(tn,ki).normalize(),Math.acos(Math.min(1,Math.max(-1,Wt.dot(fi))))>1.22&&(sa.crossVectors(fi,Wt).normalize(),Wt.copy(fi).applyAxisAngle(sa,1.22)),c.M.copy(ki).addScaledVector(Wt,u),Wt.subVectors(c.T,c.M).setLength(d),c.T.copy(c.M).add(Wt)}for(const c of i.jig){c.bone.parent.localToWorld(tn.copy(c.rest)),(!c.init||c.X.distanceTo(tn)>.5)&&(c.X.copy(tn),c.Xp.copy(tn),c.init=!0),Vn.subVectors(c.X,c.Xp).multiplyScalar(.84),c.Xp.copy(c.X),c.X.add(Vn).addScaledVector(Xl,t*t*s*.5),c.X.lerp(tn,.16),Wt.subVectors(c.X,tn);const u=c.max*s;Wt.length()>u&&(Wt.setLength(u),c.X.copy(tn).add(Wt))}}for(const a of i.pend){const l=a.A.parent;l.getWorldQuaternion(Ks),o.copy(Ks).invert(),l.localToWorld(ki.copy(a.pivot)),Wt.subVectors(a.M,ki).applyQuaternion(o).normalize(),a.A.quaternion.setFromUnitVectors(a.dA,Wt),cf.copy(Ks).multiply(a.A.quaternion).invert(),Wt.subVectors(a.T,a.M).applyQuaternion(cf).normalize(),a.Bn.quaternion.setFromUnitVectors(a.dB,Wt)}for(const a of i.jig)a.bone.position.copy(a.bone.parent.worldToLocal(tn.copy(a.X)))}const Na={Hips:"hips",Spine:"spine",Spine1:"chest",Spine2:"upperChest",Neck:"neck",Head:"head"};for(const[i,e]of[["Left","left"],["Right","right"]]){Object.assign(Na,{[i+"Shoulder"]:e+"Shoulder",[i+"Arm"]:e+"UpperArm",[i+"ForeArm"]:e+"LowerArm",[i+"Hand"]:e+"Hand",[i+"UpLeg"]:e+"UpperLeg",[i+"Leg"]:e+"LowerLeg",[i+"Foot"]:e+"Foot",[i+"ToeBase"]:e+"Toes",[i+"HandThumb1"]:e+"ThumbMetacarpal",[i+"HandThumb2"]:e+"ThumbProximal",[i+"HandThumb3"]:e+"ThumbDistal"});for(const[t,n]of[["Index","Index"],["Middle","Middle"],["Ring","Ring"],["Pinky","Little"]])Object.assign(Na,{[i+"Hand"+t+"1"]:e+n+"Proximal",[i+"Hand"+t+"2"]:e+n+"Intermediate",[i+"Hand"+t+"3"]:e+n+"Distal"})}const Yp={girl:{url:"models/vrm/girl.vrm",remove:[],removeMats:["Bottoms_01_CLOTH"],hair:["Hair_00_HAIR","HairBack_00_HAIR"],eyes:["EyeIris_00_EYE"],uniform:["Tops_01_CLOTH"],hakama:["Bottoms_01_CLOTH"],shoes:["Shoes_01_CLOTH"],skin:["Body_00_SKIN","Face_00_SKIN"]},boy:{url:"models/vrm/boy.vrm",remove:["robo_arm_1","robo_arm_2","robo_arm_3","wear_3","wear_5","wear_6","wear_7","wear_8","wear_9","wear_10","wear_11","wear_12"],removeMats:[],hair:["hair"],eyes:["eye"],uniform:["huku_bake","body_nm"],hakama:[],shoes:[],skin:["body_bake"]}},Yl={},ra={},$p=i=>Yl[i]||(Yl[i]=fetch(i).then(e=>{if(!e.ok)throw new Error(i+" "+e.status);return e.arrayBuffer()})),_w=i=>Promise.all(Object.values(Yp).map(e=>$p(i+e.url)));function vw(i){const e=Qc(),t=e.scene;t.updateMatrixWorld(!0),i.scene.updateMatrixWorld(!0);const n=new A,s=t.getObjectByName("mixamorigHips").getWorldPosition(n).y,o=(i.humanoid.getNormalizedBoneNode("hips").getWorldPosition(n).y-i.scene.getWorldPosition(new A).y)/s,a=new Pe,l=new Pe,c=new Pe;return e.animations.map(h=>{const u=[];for(const d of h.tracks){const[f,g]=d.name.split("."),_=Na[f.replace("mixamorig","")],p=_&&i.humanoid.getNormalizedBoneNode(_);if(!p)continue;const m=t.getObjectByName(f);if(m.getWorldQuaternion(a).invert(),m.parent.getWorldQuaternion(l),g==="quaternion"){const y=new Float32Array(d.values.length);for(let S=0;S<y.length;S+=4)c.fromArray(d.values,S),c.premultiply(l).multiply(a),c.toArray(y,S);u.push(new bs(p.name+".quaternion",d.times.slice(),y))}else g==="position"&&_==="hips"&&u.push(new ws(p.name+".position",d.times.slice(),Array.from(d.values,y=>y*o)))}return new Aa(h.name,h.duration,u)})}function xw(i,e=.62){const t=i.image;if(!t||!t.width)return i;const n=Math.min(t.width,512),s=Math.round(t.height*n/t.width),r=document.createElement("canvas");r.width=n,r.height=s;const o=r.getContext("2d");o.drawImage(t,0,0,n,s);const a=o.getImageData(0,0,n,s),l=a.data;let c=0,h=0;for(let f=0;f<l.length;f+=4)l[f+3]>10&&(c+=.3*l[f]+.59*l[f+1]+.11*l[f+2],h++);const u=e*255/Math.max(8,c/Math.max(1,h));for(let f=0;f<l.length;f+=4){const g=Math.min(255,Math.pow((.3*l[f]+.59*l[f+1]+.11*l[f+2])*u/255,.9)*255);l[f]=l[f+1]=l[f+2]=g}o.putImageData(a,0,0);const d=new bh(r);for(const f of["flipY","wrapS","wrapT","colorSpace","channel","magFilter","minFilter"])d[f]=i[f];return d.offset.copy(i.offset),d.repeat.copy(i.repeat),d.rotation=i.rotation,d.center.copy(i.center),d.needsUpdate=!0,d}function Vr(i,e,t=.5,n=.62){!i||!i.isMToonMaterial||(i.map&&(i.map=xw(i.map,n)),i.shadeMultiplyTexture&&(i.shadeMultiplyTexture=null),i.color.setRGB(e[0],e[1],e[2]),i.shadeColorFactor.setRGB(e[0]*t,e[1]*t,e[2]*t*1.15),i.outlineColorFactor&&i.outlineColorFactor.setRGB(e[0]*.18,e[1]*.18,e[2]*.2),i.needsUpdate=!0)}async function Mw(i,e,t){var l;const n=Yp[e.vrm.model],s=await $p(t+n.url),r=new xp;r.register(c=>new kb(c));const o=await r.parseAsync(s.slice(0),t+"models/vrm/"),a=o.userData.vrm;return $i.removeUnnecessaryVertices(o.scene),a.scene.traverse(c=>{c.frustumCulled=!1}),ra[l=e.vrm.model]||(ra[l]=vw(a)),new Sw(i,e,a,n,ra[e.vrm.model])}const hf=new A,yw=["angry","happy","sad","surprised","blink","relaxed"];class Sw extends wp{constructor(e,t,n,s,r){super(e,t,!0),this.vrm=n,this.def=s,this.isVrm=!0,this.group=new Ft,this.pivot=new Ft,this.inner=new Ft,this.group.add(this.pivot),this.pivot.add(this.inner),this.pivot.position.y=.55,this.inner.position.y=-.55,this.bone=u=>n.humanoid.getNormalizedBoneNode(Na[u])||n.humanoid.getNormalizedBoneNode(u==="Spine2"?"chest":"hips"),n.scene.updateMatrixWorld(!0);const o=this.bone("Hips").getWorldPosition(hf).y;this.s=.97/o,this.inner.scale.setScalar(this.s),this.inner.add(n.scene),e.add(this.group);const a=[];n.scene.traverse(u=>{u.isMesh&&(s.remove.includes(u.name)||s.removeMats.includes(((Array.isArray(u.material)?u.material[0]:u.material).name||"").replace(" (Outline)","")))&&a.push(u)});for(const u of a)u.parent.remove(u);const l=t.vrm,c=t.colors,h=u=>{const d=new pe(u);return[d.r,d.g,d.b]};this.vrmMats=[],this.baseEmis=new Map,n.scene.traverse(u=>{if(u.isMesh)for(const d of Array.isArray(u.material)?u.material:[u.material]){const f=(d.name||"").replace(" (Outline)","");s.hair.includes(f)?(Vr(d,l.hair,.72,.72),"shadingShiftFactor"in d&&(d.shadingShiftFactor=Math.max(d.shadingShiftFactor,.15)),d.emissive&&this.baseEmis.set(d,l.hair.map(g=>g*.16))):s.eyes.includes(f)?Vr(d,l.eyes,.6,.45):s.uniform.includes(f)?Vr(d,[.1,.1,.13],.6,.7):s.hakama.includes(f)?Vr(d,h(c.pants),.55):s.shoes.includes(f)?Vr(d,[.12,.1,.09],.6):s.skin.includes(f)&&d.isMToonMaterial&&(d.shadeColorFactor.setRGB(.86,.72,.7),d.map&&(d.shadeMultiplyTexture=d.map),d.needsUpdate=!0),d.isMToonMaterial&&!d.name.includes("Outline")&&this.vrmMats.push(d)}}),this.rim={value:new A(...t.rim).multiplyScalar(.5)},this.mats={blade:zi(c.blade,this.rim)},this.buildOutfit(),this.mixer=new np(n.scene),this.clips={},this.actions={};for(const u of r){this.clips[u.name]=u;const d=this.mixer.clipAction(u);d.play(),d.paused=!0,d.enabled=!1,d.setEffectiveWeight(0),this.actions[u.name]=d}this.look=new At,e.add(this.look),n.lookAt&&(n.lookAt.target=this.look),this.expr=Object.fromEntries(yw.map(u=>[u,0])),this.blinkT=2,this.root=new Float32Array(16),this.lastSync=performance.now(),this.reset()}buildOutfit(){var d,f;const e=this.ch.colors,t=this.def,n=g=>this.vrm.scene.worldToLocal(this.bone(g).getWorldPosition(new A));this.group.updateMatrixWorld(!0);const s=ow(this.vrm,g=>t.hair.includes(g));this.garments=pw({vrm:this.vrm,bone:this.bone,S:s,ch:this.ch,rim:this.rim,toonMat:zi,OUTLINE:uo}),n("Hips");const r=n("LeftUpLeg"),o=new Map,a=(g,_,p)=>{const m=g+"|"+_;o.has(m)||o.set(m,{bone:g,color:_,g:new on}),p(o.get(m).g)},l=Math.max(Math.abs(r.x)+.11,this.garments.info.hipsHalf+.03);{const g=new Pe().setFromUnitVectors(new A(0,0,1),new A(.12,-.4,-1).normalize()),_=new A(l*.95,.04,.1);a("Hips","tsuka",p=>{const m=p.v.length;p.box(0,0,.36,.04,.045,.8),(p.rot||(p.rot=[])).push([m,p.v.length,g,_])}),a("Hips","tsuba",p=>{const m=p.v.length;p.box(0,0,0,.045,.05,.035),(p.rot||(p.rot=[])).push([m,p.v.length,g,_])})}this.meshes=[...this.garments.meshes],this.outMats={haori:this.garments.mats[0],lower:this.garments.mats[1]};for(const{bone:g,color:_,g:p}of o.values()){for(const[L,x,M,C]of p.rot||[]){const U=new A,O=new A;for(let D=L;D<x;D+=3)U.set(p.v[D],p.v[D+1],p.v[D+2]).applyQuaternion(M),C&&U.add(C),p.v[D]=U.x,p.v[D+1]=U.y,p.v[D+2]=U.z,O.set(p.n[D],p.n[D+1],p.n[D+2]).applyQuaternion(M),p.n[D]=O.x,p.n[D+1]=O.y,p.n[D+2]=O.z}const m=p.build(),y=(d=this.outMats)[_]||(d[_]=zi(e[_],this.rim)),S=this.bone(g),v=new wt(m,y);v.frustumCulled=!1,S.add(v),this.meshes.push(v);const E=m.clone();E.deleteAttribute("normal");const R=Ih(E,1e-4);R.computeVertexNormals();const w=new wt(R,uo);w.frustumCulled=!1,S.add(w),this.meshes.push(w)}const c=Qc().scene.getObjectByName("mixamorigRightHand");Qc().scene.updateMatrixWorld(!0);const h=new Ft;c.getWorldQuaternion(h.quaternion),h.scale.setScalar(1/this.s),this.bone("RightHand").add(h),this.bladePivot=new Ft,this.bladePivot.position.copy(bp),h.add(this.bladePivot);const u={blade:new on,tsuka:new on,tsuba:new on};u.tsuka.box(0,0,-.09,.034,.04,.3),u.tsuba.box(0,0,.075,.095,.085,.016);{const _=gs.base-.06,p=gs.tip;for(let m=0;m<5;m++){const y=_+(p-_)*m/5,S=_+(p-_)*(m+1)/5,v=(y+S)/2;u.blade.box(0,.03*v*v,v,.009,m===4?.022:.034,S-y+.004)}}for(const[g,_]of Object.entries(u)){for(let m=0;m<_.v.length;m+=3){const y=new A(_.v[m],_.v[m+1],_.v[m+2]).applyQuaternion(Qr),S=new A(_.n[m],_.n[m+1],_.n[m+2]).applyQuaternion(Qr);_.v[m]=y.x,_.v[m+1]=y.y,_.v[m+2]=y.z,_.n[m]=S.x,_.n[m+1]=S.y,_.n[m+2]=S.z}const p=new wt(_.build(),g==="blade"?this.mats.blade:(f=this.outMats)[g]||(f[g]=zi(e[g],this.rim)));p.frustumCulled=!1,this.bladePivot.add(p),this.meshes.push(p)}this.bladeAdj={};for(const[g,_]of Object.entries(bw()))this.bladeAdj[g]=new Pe().setFromUnitVectors(Ca,new A(..._).normalize())}apply(){super.apply(),this.vrm.humanoid.update()}step(e,t,n){if(super.step(e,t,n),this.steps=(this.steps||0)+1,n){const o=n.f[1-e.idx];this.look.position.set(o.x,1.35,o.z)}const s=e.state,r={angry:0,happy:0,sad:0,surprised:0,relaxed:0,blink:0};s==="attack"||s==="ougi"||s==="ougiCast"||s==="ougiStrike"?r.angry=.85:s==="hitstun"||s==="parried"||s==="launched"?r.surprised=.9:s==="blockstun"?r.angry=.5:s==="down"||s==="ko"||s==="ougiHeld"?(r.sad=.8,r.blink=s==="ko"?1:.4):s==="win"?r.happy=1:(s==="guard"||e.guard)&&(r.angry=.35),this.blinkT-=1/60,this.blinkT<0&&(r.blink=Math.max(r.blink,1),this.blinkT<-.1&&(this.blinkT=2+Math.random()*3));for(const o in r)this.expr[o]+=(r[o]-this.expr[o])*.35}sync(e,t){const n=performance.now();Math.min(.05,(n-this.lastSync)/1e3),this.lastSync=n;for(const a of this.vrmMats)if(a.emissive){const l=this.baseEmis.get(a);a.emissive.setRGB(t[0]+(l?l[0]:0),t[1]+(l?l[1]:0),t[2]+(l?l[2]:0))}for(const a in this.outMats)this.outMats[a].emissive.setRGB(t[0],t[1],t[2]);const s=this.ch.glow;this.mats.blade.emissive.setRGB(t[0]+s[0]*1.8,t[1]+s[1]*1.8,t[2]+s[2]*1.8);const r=this.vrm.expressionManager;if(r)for(const a in this.expr)r.setValue(a,this.expr[a]);const o=Math.min(4,this.steps||0);if(this.steps=0,o>0){this.group.updateMatrixWorld(!0);const a=this.bone("Hips").getWorldPosition(hf);(!this.lastHip||this.lastHip.distanceTo(a)>.45*o)&&(this.vrm.springBoneManager&&this.vrm.springBoneManager.reset(),this.garments.reset()),(this.lastHip||(this.lastHip=new A)).copy(a),this.garments.update(o),this.vrm.update(o/60)}else r&&r.update()}dispose(){this.scene.remove(this.group),this.scene.remove(this.look);for(const e of this.meshes)e.geometry.dispose();for(const e in this.outMats)this.outMats[e].dispose();for(const e of this.garments.texs)e.dispose();this.mats.blade.dispose(),this.mixer.stopAllAction(),$i.deepDispose(this.vrm.scene)}}const bw=()=>Sp,Da={shrine:{name:"대나무숲 신사",build:Ny},ruins:{name:"석양 유적",build:Ey}};gt.enabled=!1;class ww{constructor(e){const t=new _y({canvas:e,antialias:!0,powerPreference:"high-performance",alpha:!1});t.outputColorSpace=pn,t.setClearColor(new pe(...Zr),1),this.renderer=t,this.scene=new j0,this.scene.fog=new xh(new pe(...Zr),Wr[0],Wr[1]),this.lights=My(this.scene),this.setStage("shrine"),this.particles=new Fy(this.scene),this.hitfx=new n1(this.scene),this.elfx=new s1(this.scene),this.camera=new By,this.fx=[0,1].map(n=>({anim:new ud(n),flash:0,flashCol:[1,1,1],hpLag:Ts,lagDelay:0})),this.setCharacters([ln[1],ln[0]]),this.warmup(),this.modelState="loading",X1("./models/swordsman.glb").then(()=>{this.modelState="ready",this.setCharacters(this.fx.map(n=>n.ch),!0),this.warmup(),_w("./").then(()=>{this.vrmReady=!0,this.setCharacters(this.fx.map(n=>n.ch),!0)}).catch(n=>console.warn("VRM 캐릭터를 불러오지 못했어요",n)),this.sim&&this.fx.forEach((n,s)=>{n.anim.reset(),n.anim.fk(this.sim.f[s])})}).catch(n=>{console.warn("검객 모델을 불러오지 못해 박스 검객으로 표시합니다",n),this.modelState="failed"}),this.emit=[0,0,0],this.shadows=[[0,0,.62],[0,0,.62]],this.resize()}setCharacters(e,t=!1){e.forEach((n,s)=>{const r=this.fx[s];if(r.ch===n&&!t)return;r.char&&r.char.dispose(),r.trail&&r.trail.dispose(),r.ch=n,r.trail=new Jy(this.scene,n),bd()?r.char=r.anim=new wp(this.scene,n):(r.anim=new ud(s),r.char=new fp(this.scene,n)),this.sim&&r.anim.fk(this.sim.f[s]);const o=r.token=(r.token||0)+1;this.vrmReady&&n.vrm&&bd()&&Mw(this.scene,n,"./").then(a=>{if(r.token!==o){a.dispose();return}r.char.dispose(),r.char=r.anim=a,this.sim&&a.fk(this.sim.f[s]),this.warmup()}).catch(a=>console.warn("VRM 캐릭터 생성 실패",a))})}setStage(e){if(this.stageId===e)return;this.arena&&this.arena.dispose(),this.stageId=e,this.arena=(Da[e]||Da.shrine).build(this.scene);const t=this.arena.env,n=this.lights;n.hemi.color.setRGB(...t.sky),n.hemi.groundColor.setRGB(...t.gnd),n.sun.color.setRGB(...t.sunCol),n.sun.position.set(...t.sun),this.scene.fog.color.setRGB(...t.fog),t.fogRange?(this.scene.fog.near=t.fogRange[0],this.scene.fog.far=t.fogRange[1]):(this.scene.fog.near=Wr[0],this.scene.fog.far=Wr[1]),this.renderer.setClearColor(new pe(...t.fog),1)}warmup(){const e=[];this.scene.traverse(t=>{t.visible||(e.push(t),t.visible=!0)});try{this.renderer.compile(this.scene,this.camera.cam)}catch(t){console.warn(t)}for(const t of e)t.visible=!1}adapt(e){this.dtAvg=(this.dtAvg||1/60)*.95+e*.05,this.slowT=this.dtAvg>1/50?(this.slowT||0)+e:0,this.slowT>2&&this.dpr>1&&(this.dpr=Math.max(1,this.dpr-.25),this.slowT=0,this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(Math.max(1,innerWidth),Math.max(1,innerHeight),!1))}resize(){const e=Math.max(1,innerWidth),t=Math.max(1,innerHeight);this.dpr||(this.dpr=Math.min(window.devicePixelRatio||1,2)),this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(e,t,!1),this.portrait=t>e,this.camera.cam.aspect=e/t}resetRound(e){this.sim=e,this.fx.forEach((t,n)=>{t.anim.reset(),t.anim.fk(e.f[n]),t.trail.clear(),t.flash=0,t.hpLag=Ts,t.lagDelay=0}),this.camera.snap=!0,this.camera.cine=null}hitFlash(e,t,n){const s=this.fx[e];s.flash=t,s.flashCol=n}strokeAngle(e){const t=this.fx[e].trail.samples.filter(Boolean);if(t.length<2)return 0;const n=this.camera.cam,s=new A(...t[Math.min(3,t.length-1)].t).project(n),r=new A(...t[0].t).project(n);return Math.atan2(r.y-s.y,(r.x-s.x)*n.aspect)}limbPos(e,t){return this.fx[e].anim.limbPos(t)}center(e){return this.fx[e].anim.center()}screenPos(e,t=.75){const n=this.center(e),s=(this._sp||(this._sp=new A)).set(n[0],n[1]+t,n[2]).project(this.camera.cam);return[(s.x*.5+.5)*innerWidth,(-s.y*.5+.5)*innerHeight,s.z<1]}onStep(e,t,n){if(this.sim=e,this.arena.env.ambient==="shrine"?this.particles.shrineAmbient(this.arena.braziers):(this.particles.flames(this.arena.braziers),this.particles.embers()),this.particles.update(1/60),this.camera.shake>0&&(this.camera.shake*=.86),!!t)for(let s=0;s<2;s++){const r=e.f[s],o=this.fx[s];o.flash>0&&o.flash--,o.hpLag>r.hp?o.lagDelay>0?o.lagDelay--:o.hpLag=Math.max(r.hp,o.hpLag-.7):o.hpLag=r.hp,o.anim.step(r,n,e);const a=r.state==="attack"&&r.move,l=!!a&&r.f>=a.startup-3&&r.f<=a.startup+a.active+2;if(o.trail.push(l,o.anim),l&&this.particles.elementSwing(o.anim.bladePoint(1),o.ch.id),o.ch.id==="thunder"&&(l||r.state==="ougi"||r.state==="ougiCast"||r.state==="ougiStrike")&&Math.random()<.35&&this.elfx.crackle(o.anim.center()),r.state==="ougiCast"||r.state==="ougiStrike"||r.state==="ougi"&&r.f<22){const c=o.anim.center();this.particles.elementSwing([c[0]+(Math.random()-.5)*.6,c[1]-.6+Math.random()*1.2,c[2]+(Math.random()-.5)*.6],o.ch.id),this.particles.elementSwing(o.anim.bladePoint(Math.random()),o.ch.id)}r.state==="ougiStrike"&&(o.trail.samples[0]={b:o.anim.bladePoint(-.05),t:o.anim.bladePoint(1.3)})}}render(e,t,n,s){this.adapt(e);const r=this.me||0,o=n.f[r],a=n.f[1-r];this.camera.cine&&this.camera.cine.t>50&&!n.cine&&(this.camera.cine=null),this.camera.update(e,t,o,a,this.fx[r].anim.rootH,this.portrait,s,n);for(let h=0;h<2;h++){const u=n.f[h],d=this.fx[h],f=d.flash>0?d.flash/5:0,g=d.flashCol,_=this.emit;if(f)_[0]=g[0]*f*.7,_[1]=g[1]*f*.7,_[2]=g[2]*f*.7;else if(u.armorOn){const m=.25+.15*Math.sin(t*30);_[0]=m,_[1]=m*.5,_[2]=m*.1}else u.state==="parried"?(_[0]=.15,_[1]=.12,_[2]=.02):_[0]=_[1]=_[2]=0;d.char.sync(d.anim,_);const p=d.anim.root;this.shadows[h][0]=p[12],this.shadows[h][1]=p[14],this.shadows[h][2]=.62-Math.min(.25,u.y*.1)}for(const h of this.fx)h.trail.update(t);const l=this.camera.cam;this.hitfx.update(e,l),this.elfx.update(e,t,l),this.arena.update(t,l,this.camera.eye,this.shadows);const c=Math.tan(Dt.degToRad(l.fov)/2);this.particles.upload(this.renderer.domElement.height/(2*c)),this.renderer.render(this.scene,l)}}const Pt=i=>document.querySelector(i),De=(i,e)=>Pt(i).classList.toggle("hide",!e),Tw=(i,e)=>i.f[e];class Ew{constructor(){this.hp=[Pt("#hp0"),Pt("#hp1")],this.lag=[Pt("#lag0"),Pt("#lag1")],this.st=[Pt("#st0"),Pt("#st1")],this.stb=[Pt("#stb0"),Pt("#stb1")],this.hpb=[Pt("#hpb0"),Pt("#hpb1")],this.tr=[Pt("#tr0"),Pt("#tr1")],this.trS=["",""],this.ki=[Pt("#ki0"),Pt("#ki1")],this.kib=[Pt("#kib0"),Pt("#kib1")],this.ougiBtn=Pt("#ougiBtn"),this.me=0,this.timer=Pt("#timer"),this.flashEl=Pt("#flash"),this.flashV=0,this.lastT=""}call(e,t,n){const s=Pt(e===0?"#cL":"#cR");if(n.startsWith("combo")){const o=s.querySelector(".combo");o&&o.remove()}for(;s.children.length>=3;)s.firstChild.remove();const r=document.createElement("div");r.className="call "+n,r.textContent=t,s.appendChild(r),setTimeout(()=>r.remove(),900)}tip(e,t=390){const n=Pt("#tip");n.innerHTML=e,n.classList.remove("hide"),this.tipLeft=t,this.tipFrame=-1}tipTick(e){this.tipLeft&&(this.tipFrame>=0&&e.frame!==this.tipFrame&&(this.tipLeft=Math.max(0,this.tipLeft-Math.max(0,e.frame-this.tipFrame))),this.tipFrame=e.frame,(!this.tipLeft||e.phase!=="fight")&&(this.tipLeft=0,Pt("#tip").classList.add("hide")))}banner(e,t=""){const n=Pt("#banner");if(n.innerHTML="",!e)return;const s=document.createElement("span");s.textContent=e,t&&(s.className=t),n.appendChild(s)}flash(e){this.flashV=Math.max(this.flashV,e)}impact(){const e=document.querySelector("#impact");e.style.opacity="1",requestAnimationFrame(()=>requestAnimationFrame(()=>requestAnimationFrame(()=>{e.style.opacity="0"})))}speedLines(){const e=document.querySelector("#speedlines");e.classList.remove("on"),e.offsetWidth,e.classList.add("on")}hitBar(e,t){const n=this.hpb[this.side(e)];n.classList.remove("shake","shake2"),n.offsetWidth,n.classList.add(t?"shake2":"shake")}side(e){return e===this.me?0:1}pips(e){for(let t=0;t<2;t++){const n=t===0?this.me:1-this.me;Pt("#pip"+t).innerHTML='<span class="pip'+(e[n]>0?" on":"")+'"></span><span class="pip'+(e[n]>1?" on":"")+'"></span>'}}update(e,t,n){if(this.flashV>0?(this.flashEl.style.opacity=this.flashV.toFixed(2),this.flashV=Math.max(0,this.flashV-.04)):this.flashEl.style.opacity!=="0"&&(this.flashEl.style.opacity="0"),n==="demo"){this.tipLeft&&(this.tipLeft=0,Pt("#tip").classList.add("hide"));return}this.tipTick(e);for(let l=0;l<2;l++){const c=l===0?this.me:1-this.me,h=e.f[c];this.hp[l].style.transform=`scaleX(${(h.hp/Ts).toFixed(4)})`,this.lag[l].style.transform=`scaleX(${(t[c].hpLag/Ts).toFixed(4)})`,this.st[l].style.transform=`scaleX(${(h.st/100).toFixed(3)})`,this.stb[l].classList.toggle("ex",h.exhaust),this.hpb[l].classList.toggle("low",h.hp<30),this.ki[l].style.transform=`scaleX(${(h.ki/100).toFixed(3)})`,this.kib[l].classList.toggle("full",h.ki>=100);const u=h.S.traits;let d="";u.heat?d='<span class="pip'+(h.heat>0?" on":"")+'"></span><span class="pip'+(h.heat>1?" on":"")+'"></span><span class="pip'+(h.heat>2?" on":"")+'"></span>'+(h.heat>=u.heat?" 작열":""):u.iai&&h.iaiReady?d='<span class="tag th">⚡ 발도</span>':u.mirror&&h.state==="attack"&&h.move&&h.move.counter?d='<span class="tag wa">🌊 물거울</span>':u.rollAtk&&h.state==="roll"&&(d='<span class="tag wi">🍃 선풍</span>'),d!==this.trS[l]&&(this.tr[l].innerHTML=d,this.trS[l]=d,this.tr[l].classList.toggle("full",!!(u.heat&&h.heat>=u.heat)))}{const l=Tw(e,this.me),c=l.S.skill,h=c==="erupt"?l.heat>0:c==="iai"?!l.iaiReady:c==="dash"?l.st>=10&&!l.exhaust:!!c;h!==this.skRd&&(this.skRd=h,Pt("#skillBtn").classList.toggle("ready",h))}const s=e.f[this.me],r=s.ki>=100&&e.phase==="fight"&&!e.cine;r!==!this.ougiBtn.classList.contains("hide")&&this.ougiBtn.classList.toggle("hide",!r);const o=e.mode==="practice",a=o?"∞":String(Math.ceil(e.timer));a!==this.lastT&&(this.timer.textContent=a,this.lastT=a,this.timer.classList.toggle("urgent",!o&&e.timer<=10))}}class Aw{constructor({joyZone:e,joyBase:t,joyKnob:n,pad:s,slashPad:r,canPress:o,onAnyTouch:a}){this.canPress=o,this.keys={},this.joy={id:null,cx:0,cy:0,x:0,y:0},this.guard=!1,this.gp=!1,this.roll=!1,this.rollDir=null,this.btns=[],this.ougi=!1,this.sk=!1,this.score=-1,this.el={joyZone:e,joyBase:t,joyKnob:n};const l=()=>a&&a();s.querySelectorAll(".btn").forEach(_=>{const p=_.dataset.k,m=S=>{S.preventDefault(),l(),_.classList.add("on"),p==="guard"?this.setGuard(!0):p==="roll"?this.roll=!0:p==="ougi"?this.ougi=!0:p==="skill"&&(this.sk=!0)},y=S=>{S.preventDefault(),_.classList.remove("on"),p==="guard"&&this.setGuard(!1)};_.addEventListener("pointerdown",m),_.addEventListener("pointerup",y),_.addEventListener("pointercancel",y),_.addEventListener("pointerleave",y)}),this.initSlashPad(r,l);const c=e,h=t,u=n,d=this.joy;c.addEventListener("pointerdown",_=>{if(_.preventDefault(),l(),d.id!==null)return;d.id=_.pointerId;try{c.setPointerCapture(_.pointerId)}catch{}const p=c.getBoundingClientRect();d.cx=_.clientX-p.left,d.cy=_.clientY-p.top,d.t0=performance.now(),d.peak=0,d.lx=0,d.ly=0,h.style.left=d.cx+"px",h.style.top=d.cy+"px",d.x=d.y=0,u.style.transform=""}),c.addEventListener("pointermove",_=>{if(_.pointerId!==d.id)return;_.preventDefault();const p=c.getBoundingClientRect();let m=_.clientX-p.left-d.cx,y=_.clientY-p.top-d.cy;const S=Math.hypot(m,y),v=52;S>v&&(m*=v/S,y*=v/S),u.style.transform=`translate(${m}px,${y}px)`;let E=m/v,R=-y/v;Math.hypot(E,R)<.2&&(E=0,R=0),d.x=E,d.y=R;const w=Math.hypot(E,R);w>d.peak&&(d.peak=w),w>.5&&(d.lx=E/w,d.ly=R/w)});const f=_=>{_.pointerId===d.id&&(_.type==="pointerup"&&performance.now()-d.t0<230&&d.peak>.8&&(this.roll=!0,this.rollDir=[d.lx,d.ly]),d.id=null,d.x=d.y=0,this.joyHome())};c.addEventListener("pointerup",f),c.addEventListener("pointercancel",f);const g={u:["t",0],i:["h",0],y:["h",Math.PI],o:["u",0],k:["d",0],j:["l",0]};addEventListener("keydown",_=>{const p=_.key.toLowerCase();this.keys[p]||(this.keys[p]=!0,g[p]&&this.pressAtk(g[p][0],g[p][1]),p===" "&&(this.roll=!0,_.preventDefault()),p==="p"&&(this.ougi=!0),p==="e"&&(this.sk=!0),(p==="l"||p==="shift")&&this.setGuard(!0),p==="escape"&&this.onEscape&&this.onEscape())}),addEventListener("keyup",_=>{const p=_.key.toLowerCase();this.keys[p]=!1,(p==="l"||p==="shift")&&this.setGuard(!1)}),addEventListener("blur",()=>{this.keys={},this.setGuard(!1)})}stick(){const e=this.joy,t=this.keys;if(e.id!==null)return[e.x,e.y];const n=(t.d||t.arrowright?1:0)-(t.a||t.arrowleft?1:0),s=(t.w||t.arrowup?1:0)-(t.s||t.arrowdown?1:0),r=Math.hypot(n,s);return r>1?[n/r,s/r]:[n,s]}pressAtk(e,t=0){if(!this.canPress())return;const[n,s]=this.stick();this.btns.push({b:e,dir:zy(n,s),a:Math.round(t*100)/100}),this.btns.length>4&&this.btns.shift()}initSlashPad(e,t){const n={id:null,x:0,y:0,fired:!1},s=()=>Math.max(18,e.clientWidth*.12),r=c=>{const h=e.getBoundingClientRect();return[c.clientX-h.left,c.clientY-h.top]},o=(c,h,u,d=0,f=0)=>{const g=document.createElement("div");g.className=c,g.style.left=h+"px",g.style.top=u+"px",d&&(g.style.width=d+"px",g.style.transform=`rotate(${-f}rad)`),e.appendChild(g),setTimeout(()=>g.remove(),400)},a=()=>{n.fired||(n.fired=!0,this.pressAtk("t"),o("tapfx",n.x,n.y))};e.addEventListener("pointerdown",c=>{if(c.preventDefault(),t(),n.id===null){n.id=c.pointerId,[n.x,n.y]=r(c),n.fired=!1;try{e.setPointerCapture(c.pointerId)}catch{}e.classList.add("on")}}),e.addEventListener("pointermove",c=>{if(c.pointerId!==n.id||n.fired)return;c.preventDefault();const[h,u]=r(c),d=h-n.x,f=u-n.y,g=Math.hypot(d,f);if(g<s())return;n.fired=!0;const _=Math.atan2(-f,d),p=_*180/Math.PI;let m;Math.abs(p)<=28||Math.abs(p)>=152?m="h":p>0?m="u":m=p<=-55&&p>=-125?"d":"l",this.pressAtk(m,_),o("stroke",n.x,n.y,Math.max(g,e.clientWidth*.45),_)});const l=c=>{c.pointerId===n.id&&(c.type==="pointerup"&&a(),n.id=null,e.classList.remove("on"))};e.addEventListener("pointerup",l),e.addEventListener("pointercancel",l)}setGuard(e){e&&!this.guard&&(this.gp=!0),this.guard=e}clear(){this.btns.length=0,this.guard=!1,this.gp=!1,this.roll=!1,this.rollDir=null,this.ougi=!1,this.sk=!1,this.score=-1}setScore(e){this.score=e}consume(){let[e,t]=this.stick();this.roll&&this.rollDir&&([e,t]=this.rollDir);const n={mx:e,my:t,guard:this.guard,gp:this.gp,roll:this.roll,btns:this.btns,ougi:this.ougi,sk:this.sk};return this.score>=0&&(n.score=this.score),this.btns=[],this.gp=!1,this.roll=!1,this.rollDir=null,this.ougi=!1,this.sk=!1,this.score=-1,n}joyHome(){const{joyZone:e,joyBase:t,joyKnob:n}=this.el,s=e.getBoundingClientRect();t.style.left=Math.max(90,s.width*.32)+"px",t.style.top=s.height-Math.max(95,s.height*.38)+"px",n.style.transform=""}}const Rw=12,uf=100,$l={startup:14,active:8,recovery:46,range:2.1,arc:1.2,speed:.16};class df{constructor(e,t){this.idx=e,this.sim=t,this.reset(0,0,0)}reset(e,t,n){Object.assign(this,{x:e,z:t,y:0,vy:0,vx:0,vz:0,yaw:n,hp:Ts,st:100,stDelay:0,exhaust:!1,state:"idle",f:0,stun:0,move:null,hitDone:!1,pendingChain:null,guard:!1,crouch:!1,lastGuardPress:-99,juggle:0,combo:0,rollDir:[0,0],rollAxis:"x",rollSign:1,armorOn:!1,hitLevel:"high",moveUid:0,launchUid:0,idleF:0,moveStart:0,chainStart:0,chainN:0,pendingNamed:!1,gesture:"h",swipeAng:0,wk:0,wmx:0,wmy:0,wph:0,ki:0,heat:0,iaiF:0,iaiReady:!1,hitAt:-99,jfWin:0,pendingJF:!1,fx:"",eruptN:0,rollCircle:0,wasPunished:!1})}get S(){return Lh(this.style)}get mv(){return Ga(this.style)}resolve(e,t){return pp(e,t,this.style)}invuln(){const e=this.state,t=this.f,n=this.rollCircle?[1,24]:this.S.roll.inv;return e==="roll"&&t>=n[0]&&t<=n[1]||e==="down"||e==="getup"&&t<14||e==="ko"||e==="win"||e==="ougi"&&t<=$l.startup+$l.active||e==="ougiCast"||e==="ougiStrike"||e==="ougiHeld"||e==="ougiEnd"&&t<10}isCrouching(){return(this.state==="idle"||this.state==="blockstun")&&this.crouch}canBlock(){return this.state==="idle"&&this.guard||this.state==="blockstun"}takeBuf(e,t){const n=e.buf,s=this.sim.frame;for(;n.length&&s-n[0].t>t;)n.shift();return n.length?n.shift():null}useSt(e,t){this.st-=e,this.st<=0&&(this.st=0,this.exhaust=!0),this.stDelay=Math.max(this.stDelay,t)}startMove(e,t=!1,n=!1,s=""){const r=this.mv[e],o=this.S;this.chainStart=t?this.chainStart:this.sim.frame,this.chainN=t?this.chainN+1:0,this.state="attack",this.move=r,this.f=0,this.hitDone=!1,this.pendingChain=null,this.useSt(r.stam,30),this.moveUid=++this.sim.uid,this.moveStart=this.sim.frame,this.guard=!1,this.crouch=!1,this.armorOn=!1,this.hitAt=-99,this.iaiF=0,this.iaiReady=!1,!s&&o.traits.heat&&this.heat>=o.traits.heat&&o.traits.blaze.includes(e)&&(s="blaze",this.heat=0),this.fx=s,s&&this.sim.emit({t:s,i:this.idx,move:e}),s==="jf"?this.f=Math.floor(r.startup*(n?.5:.7)):s==="iai"&&e!=="iai_flash"?this.f=Math.floor(r.startup*.4):t&&!n&&(this.f=Math.floor(r.startup*o.flowSkip))}startOugi(){this.state="ougi",this.f=0,this.ki=0,this.hitDone=!1,this.move=null,this.guard=!1,this.crouch=!1,this.moveUid=++this.sim.uid,this.sim.emit({t:"ougiDash",i:this.idx})}gainKi(e){this.ki=Math.min(uf,this.ki+e)}useSkill(e,t,n){const s=this.S.skill,r=this.sim;if(s==="erupt"){if(this.heat<1)return r.emit({t:"skillFail",i:this.idx}),!1;const o=this.heat;return this.heat=0,this.eruptN=o,this.startMove("f_erupt",!1,!1,o>=3?"blaze":"erupt"),!0}return s==="mirror"?(this.startMove("mirror"),!0):s==="iai"?(this.iaiReady||(this.iaiReady=!0,this.iaiF=this.S.traits.iai,r.emit({t:"iaiReady",i:this.idx})),!1):s==="dash"?this.st<10||this.exhaust?!1:(this.startRoll(e,t,n),this.rollCircle=Math.abs(e.mx)>.3?Math.sign(e.mx):this.sim.frame%2?1:-1,r.emit({t:"windDash",i:this.idx}),!0):!1}startRoll(e,t,n){let s=e.mx,r=e.my;Math.hypot(s,r)<.3&&(s=0,r=-1);const o=-n,a=t,l=t*r+o*s,c=n*r+a*s,h=Math.hypot(l,c)||1;this.rollDir=[l/h,c/h],Math.abs(r)>=Math.abs(s)?(this.rollAxis="x",this.rollSign=r>=0?1:-1):(this.rollAxis="z",this.rollSign=s>0?1:-1),this.state="roll",this.f=0,this.rollCircle=0,this.useSt(this.S.roll.stam,35),this.guard=!1,this.crouch=!1,this.move=null,this.iaiF=0,this.iaiReady=!1,this.sim.emit({t:"roll",i:this.idx})}update(e,t){const n=this.sim;this.f++,this.wk=0;const s=t.x-this.x,r=t.z-this.z,o=Math.hypot(s,r)||.001,a=s/o,l=r/o,c=Math.atan2(a,l);switch(e.guardPressed&&(this.lastGuardPress=n.frame),this.x+=this.vx*un,this.z+=this.vz*un,this.vx*=.84,this.vz*=.84,this.stDelay>0?this.stDelay--:this.state!=="attack"&&this.state!=="roll"&&(this.st=Math.min(100,this.st+(this.guard?.2:.6)),this.exhaust&&this.st>=30&&(this.exhaust=!1)),this.state!=="launched"&&(this.juggle=0),this.state){case"idle":{if(this.idleF++,this.combo&&(this.combo=0),this.guard=e.guard&&!this.exhaust,this.crouch=this.guard&&e.my<-.45,this.yaw=Gr(this.yaw,c,.3),n.frame-e.ougiPressed<=6&&this.ki>=uf){e.ougiPressed=-99,this.startOugi();break}if(n.frame-e.rollPressed<=6&&!this.exhaust&&this.st>=10){e.rollPressed=-99,this.startRoll(e,a,l);break}if(n.frame-e.skillPressed<=6&&(e.skillPressed=-99,this.useSkill(e,a,l)))break;const u=this.S;u.traits.iai&&(Math.hypot(e.mx,e.my)<.18&&!this.guard?++this.iaiF===u.traits.iai&&(this.iaiReady=!0,n.emit({t:"iaiReady",i:this.idx})):this.iaiF&&(this.iaiF=0,this.iaiReady=!1));const d=this.takeBuf(e,10);if(d){let f=this.resolve(d.b,d.dir),g="";this.iaiReady&&(g="iai",d.b==="t"&&(f="iai_flash")),this.startMove(f,!1,!1,g),this.swipeAng=d.a||0;break}this.crouch?this.wk=2:this.walk(e,t,o,a,l);break}case"attack":{const h=this.move,u=this.f;if(u<h.startup&&(this.yaw=Gr(this.yaw,c,h.track)),u<=h.startup+h.active&&o>.8){const g=h.lunge/(h.startup+h.active);this.x+=Math.sin(this.yaw)*g,this.z+=Math.cos(this.yaw)*g}u===h.startup-2&&!h.noHit&&n.emit({t:"whoosh",i:this.idx,move:h.id}),u===h.startup+h.active&&!this.hitDone&&!h.noHit&&n.emit({t:"whiff",i:this.idx,move:h.id,rec:h.total-u}),this.armorOn=!!(h.armor&&u>=h.armor[0]&&u<=h.armor[1]);const d=this.S;if(!this.pendingChain&&!h.noHit&&u>=2&&u<=h.startup+h.active+Rw&&this.chainN<d.maxChain-1){const g=e.buf;for(let _=0;_<g.length;_++){const p=g[_];if(p.t<this.chainStart+2)continue;const m=h.chain&&h.chain[p.b];this.pendingChain=m||this.resolve(p.b,p.dir),this.pendingNamed=!!m,this.pendingJF=!!d.traits.jf&&this.hitAt>=0&&p.t>this.hitAt&&p.t<=this.hitAt+this.jfWin,this.pendingAng=p.a||0,g.splice(_,1);break}}if(this.pendingChain&&u>=h.startup+h.active+1){this.startMove(this.pendingChain,!0,this.pendingNamed,this.pendingJF?"jf":""),this.swipeAng=this.pendingAng;break}const f=d.traits.rollCancel;if(f&&this.hitDone&&u>h.startup+h.active&&n.frame-e.rollPressed<=6&&!this.exhaust&&this.st>=f){e.rollPressed=-99,this.startRoll(e,a,l),n.emit({t:"windStep",i:this.idx});break}u>=h.total&&(this.state="idle",this.f=0,this.move=null,this.idleF=0);break}case"ougi":{const h=$l,u=this.f;if(u<h.startup+h.active&&o>.9&&(this.yaw=Gr(this.yaw,c,.25),this.x+=Math.sin(this.yaw)*h.speed,this.z+=Math.cos(this.yaw)*h.speed),u>=h.startup&&u<h.startup+h.active&&!this.hitDone){const d=Math.sin(this.yaw),f=Math.cos(this.yaw),g=Math.acos(Math.max(-1,Math.min(1,a*d+l*f))),_=!t.invuln()&&t.state!=="launched";if(o<=h.range&&g<=h.arc&&_){this.hitDone=!0,n.startCine(this,t);break}}u>=h.startup+h.active+h.recovery&&(this.state="idle",this.f=0,this.idleF=0);break}case"ougiEnd":this.f>=24&&(this.state="idle",this.f=0,this.idleF=0);break;case"hitstun":case"blockstun":case"parried":this.f>=this.stun&&(this.state="idle",this.f=0,this.idleF=0);break;case"launched":this.vy-=18*un,this.y+=this.vy*un,this.y<=0&&this.vy<0&&(this.y=0,this.vy=0,this.state=this.hp<=0?"ko":"down",this.f=0,n.emit({t:"land",i:this.idx,x:this.x,z:this.z}));break;case"down":if(this.hp<=0){this.state="ko";break}(this.f>=42||this.f>=12&&n.frame-e.rollPressed<=6)&&(e.rollPressed=-99,this.state="getup",this.f=0);break;case"getup":this.f>=20&&(this.state="idle",this.f=0,this.idleF=0);break;case"roll":{const h=this.S.roll,u=Vi(this.f/(h.dur*.77),0,1),d=h.speed*(this.rollCircle?1.2:1)*Math.pow(1-u,.6);if(this.rollCircle){let g=-l*this.rollCircle*.8+a*.35,_=a*this.rollCircle*.8+l*.35;o<1.1&&(g=-l*this.rollCircle,_=a*this.rollCircle);const p=Math.hypot(g,_)||1;this.rollDir=[g/p,_/p]}this.x+=this.rollDir[0]*d*un,this.z+=this.rollDir[1]*d*un;const f=this.S.traits.rollAtk;if(f&&this.f>=f[0]&&this.f<=f[1]){const g=this.takeBuf(e,8);if(g){this.yaw=c,this.startMove("gale"),this.swipeAng=g.a||0,n.emit({t:"gale",i:this.idx});break}}this.f>=h.dur&&(this.state="idle",this.f=0,this.idleF=0,this.rollCircle=0);break}}this.state!=="idle"&&(this.idleF=0)}walk(e,t,n,s,r){let o=e.mx,a=e.my;const l=Math.hypot(o,a);if(l<.18){this.wk=1;return}l>1&&(o/=l,a/=l);const c=this.S.walk,h=this.guard,u=(h?1.2:a>0?3:2.4)*c,d=(h?1.2:2.7)*c;let f=this.x-t.x,g=this.z-t.z;const _=Math.max(.75,n-a*u*un);f+=-r*o*d*un,g+=s*o*d*un;const p=Math.hypot(f,g)||1;this.x=t.x+f/p*_,this.z=t.z+g/p*_,this.wk=3,this.wmx=o,this.wmy=a,this.wph=(Math.abs(a)*u+Math.abs(o)*d)*un*4.2}takeHit(e,t,n){let s=this.x-e.x,r=this.z-e.z;const o=Math.hypot(s,r)||1;s/=o,r/=o;const a=this.state==="launched",l=e.S,c=!n&&(this.state==="attack"&&this.move&&this.f>=this.move.startup+this.move.active||this.state==="parried");this.wasPunished=c;let h=t.dmg*(n?l.counterMul:c?1.2:1)*this.S.taken;return t.id==="f_erupt"&&(h+=4*e.eruptN),e.fx==="blaze"?h*=1.4:e.fx==="jf"?h*=1.3:e.fx==="iai"&&(h*=1.2),e.chainN>=l.scaleFrom&&e.fx!=="jf"&&(h*=Math.max(.5,1-.15*(e.chainN-l.scaleFrom+1))),this.iaiF=0,this.iaiReady=!1,a&&(this.juggle++,h*=Math.max(.3,1-.15*this.juggle)),this.hp=Math.max(0,this.hp-h),this.guard=!1,this.crouch=!1,this.move=null,a?(this.vy=Math.max(this.vy,4.4*Math.pow(.88,this.juggle)),t.knockdown&&(this.vy=Math.max(this.vy,3.4)),this.vx=s*2.2,this.vz=r*2.2):t.launch?(this.state="launched",this.f=0,this.y=.02,this.vy=t.launch,this.vx=s*1.1,this.vz=r*1.1,this.launchUid=++this.sim.uid,this.yaw=Math.atan2(-s,-r)):t.knockdown||this.hp<=0?(this.state="launched",this.f=0,this.y=.02,this.vy=this.hp<=0?3.6:3.3,this.juggle=3,this.vx=s*4.2,this.vz=r*4.2,this.launchUid=++this.sim.uid,this.yaw=Math.atan2(-s,-r)):(this.state="hitstun",this.f=0,this.stun=t.hitstun+(n?8:0)+(c?6:0)+(e.fx==="jf"?6:0),this.hitLevel=t.level,this.vx=s*t.push,this.vz=r*t.push,this.yaw=Gr(this.yaw,Math.atan2(-s,-r),.6)),h}takeBlock(e,t){let n=this.x-e.x,s=this.z-e.z;const r=Math.hypot(n,s)||1;n/=r,s/=r;const o=this.crouch;return this.state="blockstun",this.f=0,this.stun=t.blockstun,this.crouch=o,this.vx=n*t.bpush,this.vz=s*t.bpush,this.useSt(t.chip,40),this.iaiF=0,this.iaiReady=!1,e.fx==="blaze"&&(this.st=0),this.st<=0?(this.state="hitstun",this.stun=48,this.hitLevel="stagger",this.crouch=!1,!0):!1}}function ff(i,e,t){const n=e.move;if(!(e.state==="attack"&&n&&!n.noHit&&!e.hitDone&&e.f>=n.startup&&e.f<n.startup+n.active)||t.invuln())return null;const s=t.x-e.x,r=t.z-e.z,o=Math.hypot(s,r)||.001,a=t.state==="launched";if(o>n.range+.3+(a?.3:0))return null;const l=Math.sin(e.yaw),c=Math.cos(e.yaw);if(o>.55&&Math.acos(Vi((s*l+r*c)/o,-1,1))>n.arc||a&&t.y>2.8||!a&&n.level==="high"&&t.isCrouching()||!a&&n.level==="low"&&t.state==="attack"&&t.move&&t.move.air&&t.f>=t.move.air[0]&&t.f<=t.move.air[1])return null;const h=t.state==="attack"&&t.move&&t.f<t.move.startup,u=t.state==="attack"&&t.move;if(!a&&u&&u.counter&&t.f>=u.startup&&t.f<u.startup+u.active)return n.level==="low"?{type:"hit",counter:!0,air:a,m:n}:{type:"mirror",m:n};if(!a&&t.state==="attack"&&t.armorOn)return{type:"armor",m:n};const d=Math.sin(t.yaw),f=Math.cos(t.yaw),g=(-s*d-r*f)/o>-.2;return!a&&t.canBlock()&&g&&(n.level==="low"?t.crouch:!t.crouch)?t.state==="idle"&&i.frame-t.lastGuardPress<=t.S.parryWin?{type:"parry",m:n}:{type:"block",m:n}:{type:"hit",counter:h,air:a,m:n}}function pf(i,e,t,n){const s=n.m;e.hitDone=!0;const r={a:e.idx,d:t.idx,move:s.id,limb:s.limb,level:s.level,dmg:s.dmg,fx:e.fx},o=e.S.traits.heat;if(o&&(n.type==="hit"||n.type==="block")&&e.fx!=="blaze"&&e.heat<o&&(e.heat++,i.emit({t:"heat",i:e.idx,n:e.heat})),n.type==="hit"){const a=t.takeHit(e,s,n.counter);t.combo++,e.gainKi(a*.9),t.gainKi(a*1.1),i.hitstop=Math.max(i.hitstop,s.hitstop+(n.counter?3:0)),e.hitAt=i.frame,e.jfWin=i.hitstop+(e.S.traits.jf||0),i.emit({t:"hit",...r,punish:!!t.wasPunished,counter:!!n.counter,air:!!n.air,launch:!!s.launch&&!n.air,combo:t.combo,dealt:a,ko:t.hp<=0})}else if(n.type==="block"){const a=t.takeBlock(e,s);e.gainKi(2),t.gainKi(4),i.hitstop=Math.max(i.hitstop,a?10:5),e.vx-=Math.sin(e.yaw)*s.bpush*.4,e.vz-=Math.cos(e.yaw)*s.bpush*.4,i.emit({t:"block",...r,brk:a,adv:a?40:(e.move?e.move.total-e.f:0)-t.stun})}else n.type==="parry"?(e.state="parried",e.f=0,e.stun=t.S.parriedStun,e.move=null,t.state="idle",t.f=0,t.lastGuardPress=-99,t.st=Math.min(100,t.st+15),t.gainKi(12),i.hitstop=Math.max(i.hitstop,14),i.emit({t:"parry",...r})):n.type==="mirror"?(e.state="parried",e.f=0,e.stun=40,e.move=null,t.startMove("mirror_cut",!1,!0),t.gainKi(10),i.hitstop=Math.max(i.hitstop,12),i.emit({t:"mirror",...r})):n.type==="armor"&&(t.hp=Math.max(0,t.hp-s.dmg*.6),i.hitstop=Math.max(i.hitstop,6),i.emit({t:"armor",...r}))}const oh=()=>({mx:0,my:0,guard:!1,guardPressed:!1,rollPressed:-99,ougiPressed:-99,skillPressed:-99,score:-1,buf:[]}),oa=()=>oh(),Zs={draw:150,strike:54,dmgMin:16,dmgMax:34,autoScore:35},mf=60,aa=2;class gf{constructor({mode:e="match",seed:t=1}={}){this.mode=e,this.seed=t,this.rng=Ha(t),this.frame=0,this.uid=0,this.hitstop=0,this.round=1,this.wins=[0,0],this.timer=mf,this.phase="intro",this.phaseT=0,this.winner=-1,this.roundSeq=0,this.cine=null,this.f=[new df(0,this),new df(1,this)],this.ins=[oh(),oh()],this.events=[],this.listeners=[],this.startRound()}emit(e){e.frame=this.frame,this.events.push(e);for(const t of this.listeners)t(e)}on(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}drainEvents(){const e=this.events;return this.events=[],e}get over(){return this.phase==="over"}live(){return this.phase==="fight"}startRound(){const[e,t]=this.f;e.reset(0,-2.4,0),t.reset(0,2.4,Math.PI),this.timer=mf,this.phase=this.mode==="demo"?"fight":"intro",this.phaseT=0,this.winner=-1,this.hitstop=0,this.roundSeq++,this.cine=null;for(const n of this.ins)n.buf.length=0;this.emit({t:"round",round:this.round})}ingest(e,t,n){if(t&&(t.gp&&(e.guardPressed=!0),t.roll&&(e.rollPressed=this.frame),t.ougi&&(e.ougiPressed=this.frame),t.sk&&(e.skillPressed=this.frame),t.score!==void 0&&t.score!==null&&t.score>=0&&(e.score=Math.max(0,Math.min(100,Math.round(t.score)))),e.mx=t.mx||0,e.my=t.my||0,e.guard=!!t.guard,n&&t.btns))for(const s of t.btns)e.buf.push({b:s.b,dir:s.dir,a:s.a||0,t:this.frame}),e.buf.length>4&&e.buf.shift()}step(e=[null,null]){this.frame++;const t=this.phase==="fight";if(this.ingest(this.ins[0],e[0],t),this.ingest(this.ins[1],e[1],t),t||(this.ins[0].buf.length=0,this.ins[1].buf.length=0),this.hitstop>0)return this.hitstop--,!1;if(this.cine)return this.stepCine(),!0;const[n,s]=this.f;if(this.phase==="over")return n.update(oa(),s),s.update(oa(),n),this.sep(),!0;const r=t?this.ins[0]:oa(),o=t?this.ins[1]:oa();if(n.update(r,s),s.update(o,n),this.ins[0].guardPressed=!1,this.ins[1].guardPressed=!1,t){const a=ff(this,n,s),l=ff(this,s,n);a&&pf(this,n,s,a),l&&pf(this,s,n,l)}return this.sep(),this.rounds(),!0}setStyles(e){e.forEach((t,n)=>{this.f[n].style=t})}startCine(e,t){this.cine={a:e.idx,d:t.idx,f:0,score:-1,strikeF:-1},this.ins[e.idx].score=-1,e.state="ougiCast",e.f=0,e.vx=e.vz=0,t.state="ougiHeld",t.f=0,t.vx=t.vz=0,t.guard=!1,t.crouch=!1,t.move=null,t.y=0,t.vy=0;const n=t.x-e.x,s=t.z-e.z;e.yaw=Math.atan2(n,s),t.yaw=Math.atan2(-n,-s),this.emit({t:"ougiStart",a:e.idx,d:t.idx})}stepCine(){const e=this.cine,t=this.f[e.a],n=this.f[e.d];if(e.f++,t.f++,n.f++,e.strikeF<0){const s=this.ins[e.a].score;(s>=0||e.f>=Zs.draw)&&(e.score=s>=0?s:Zs.autoScore,e.strikeF=e.f,t.state="ougiStrike",t.f=0,this.emit({t:"ougiStrike",a:e.a,d:e.d,score:e.score}));return}if(e.f-e.strikeF>=Zs.strike){const s=Zs.dmgMin+(Zs.dmgMax-Zs.dmgMin)*(e.score/100);n.hp=Math.max(0,n.hp-s);let r=n.x-t.x,o=n.z-t.z;const a=Math.hypot(r,o)||1;r/=a,o/=a,n.state="launched",n.f=0,n.y=.02,n.vy=6.5,n.juggle=3,n.vx=r*4.5,n.vz=o*4.5,n.launchUid=++this.uid,t.style==="thunder"?(t.x=n.x+r*1.6,t.z=n.z+o*1.6,t.yaw=Math.atan2(-r,-o),n.vx=-r*.6,n.vz=-o*.6,n.vy=4.2):t.style==="wind"?(n.vy=8.5,n.vx=r*2.5,n.vz=o*2.5):t.style==="fire"&&(n.vy=3.5,n.vx=r*6,n.vz=o*6),t.state="ougiEnd",t.f=0,this.cine=null,this.hitstop=14,this.emit({t:"ougiHit",a:e.a,d:e.d,score:e.score,dmg:s,ko:n.hp<=0})}}serialize(){const e=this.f.map(t=>{const n={};for(const s in t)s!=="sim"&&(n[s]=s==="move"?t.move?t.move.id:null:t[s]);return n});return JSON.parse(JSON.stringify({frame:this.frame,uid:this.uid,hitstop:this.hitstop,round:this.round,wins:this.wins,timer:this.timer,phase:this.phase,phaseT:this.phaseT,winner:this.winner,roundSeq:this.roundSeq,rng:this.rng.getState(),cine:this.cine||null,ins:this.ins,f:e}))}load(e){for(const t of["frame","uid","hitstop","round","timer","phase","phaseT","winner","roundSeq"])this[t]=e[t];this.wins=e.wins.slice(),this.rng.setState(e.rng),this.cine=e.cine?{...e.cine}:null,this.ins=JSON.parse(JSON.stringify(e.ins)),e.f.forEach((t,n)=>{const s=this.f[n];Object.assign(s,JSON.parse(JSON.stringify(t))),s.move=t.move?Ga(t.style)[t.move]:null,s.sim=this})}hash(){const e=JSON.stringify(this.serialize());let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}rounds(){const e=this.f;if(this.phase==="intro")this.phaseT++,this.phaseT===60&&this.emit({t:"fight"}),this.phaseT>=84&&(this.phase="fight");else if(this.phase==="fight"){if(this.mode==="practice")for(const s of e)s.state==="idle"&&s.idleF>50&&s.hp<Ts&&(s.hp=Ts);else this.timer=Math.max(0,this.timer-un);const t=e[0].hp<=0,n=e[1].hp<=0;if(t||n||this.timer<=0){let s=-1;if(t&&!n)s=1;else if(n&&!t)s=0;else if(!t&&!n){const r=e[0].hp,o=e[1].hp;s=r>o?0:o>r?1:-1}this.phase="ko",this.phaseT=0,this.winner=s,s>=0&&this.wins[s]++,this.emit({t:"ko",winner:s,timeout:!(t||n)})}}else if(this.phase==="ko"){if(this.phaseT++,this.phaseT>=60&&this.winner>=0){const t=e[this.winner];t.state==="idle"&&(t.state="win",t.f=0)}this.phaseT>=170&&(this.mode==="demo"?(this.round++,(this.wins[0]>=aa||this.wins[1]>=aa)&&(this.wins=[0,0]),this.startRound()):this.wins[0]>=aa||this.wins[1]>=aa?(this.phase="over",this.emit({t:"matchEnd",winner:this.wins[0]>this.wins[1]?0:1,wins:this.wins.slice()})):(this.round++,this.startRound()))}}sep(){const[e,t]=this.f,n=t.x-e.x,s=t.z-e.z,r=Math.hypot(n,s);if(r<.7&&e.y<.9&&t.y<.9&&e.state!=="roll"&&t.state!=="roll"){const o=(.7-r)/2,a=r>.001?n/r:1,l=r>.001?s/r:0;e.x-=a*o,e.z-=l*o,t.x+=a*o,t.z+=l*o}for(const o of this.f){const a=Math.hypot(o.x,o.z);a>El&&(o.x*=El/a,o.z*=El/a)}}}const In=.45,Kp={practice:{idle:!0},easy:{jf:.2,ougi:.01,ougiSkill:.35,flow:.15,react:22,block:.25,dodge:.05,lowRead:.2,duck:0,parry:0,punish:.15,juggle:.25,aggro:.35,tempo:1.5},normal:{jf:.5,ougi:.03,ougiSkill:.55,flow:.4,react:14,block:.5,dodge:.12,lowRead:.45,duck:.05,parry:.05,punish:.5,juggle:.65,aggro:.5,tempo:1},hard:{jf:.85,ougi:.06,ougiSkill:.7,flow:.7,react:8,block:.72,dodge:.18,lowRead:.7,duck:.15,parry:.2,punish:.9,juggle:.95,aggro:.6,tempo:.7}};class la{constructor(e,t,n){this.sim=e,this.idx=t,this.L=Kp[n],this.lv=n,this.rng=Ha((e.seed||1)*31+t*7919),this.intent="approach",this.iT=0,this.watch=-1,this.plan=null,this.queue=[],this.sd=1,this.punished=-1,this.juggled=-1,this.flowed=-1,this.atk=null,this.waitG=!1,this.roundSeq=-1}get me(){return this.sim.f[this.idx]}get op(){return this.sim.f[1-this.idx]}input(){var t;const e=this.sim;if(e.roundSeq!==this.roundSeq&&(this.roundSeq=e.roundSeq,this.queue=[],this.plan=null),e.phase!=="fight"||e.hitstop>0)return null;if(e.cine){const n=e.cine;return n.a===this.idx&&n.strikeF<0&&n.f===70?{mx:0,my:0,guard:!1,gp:!1,roll:!1,btns:[],score:Math.round(100*Math.min(1,((t=this.L.ougiSkill)!=null?t:.6)+this.rng()*.25))}:null}return this.update(e.frame+1)}update(e){var g,_,p;const t=this.me,n=this.op,s=this.L,r=this.rng,o={mx:0,my:0,guard:!1,gp:!1,roll:!1,btns:[]};if(s.idle)return o;const a=(m,y)=>o.btns.push({b:m,dir:y,a:m==="h"&&r()<.5?3.14:0}),l=Math.hypot(n.x-t.x,n.z-t.z);for(;this.queue.length&&this.queue[0].t<=e;){const m=this.queue.shift();a(m.b,m.d)}let c=0,h=0,u=!1,d=!1;const f=t.S.traits;if(n.state==="attack"&&n.move&&n.move.counter&&t.state==="idle"&&this.watch!==n.moveUid)return this.watch=n.moveUid,this.plan=null,r()<s.lowRead&&l<1.9+In&&a("l","n"),this.finish(o,0,-.6,!1,!1);if(n.state==="attack"&&n.move&&!n.move.counter){const m=s.react>n.move.startup-3;if(this.watch!==n.moveUid&&n.f>=(m?Math.max(2,n.move.startup-5):s.react)){this.watch=n.moveUid;const y=n.move,S=r()*(m?1.7:1);if(this.plan=null,t.state==="idle"||t.state==="blockstun"){const v=s.dodge+(f.rollAtk?.06:0);if(f.mirror&&t.state==="idle"&&y.level!=="low"&&y.startup-n.f>=4&&S<(s.parry+.1)*1.6)a("t","b");else if(S<v&&t.st>30&&t.state==="idle")this.sd=r()<.5?1:-1,o.roll=!0,c=this.sd,f.rollAtk&&r()<s.flow&&this.queue.push({t:e+8,b:"h",d:"n"});else if(S<s.dodge+s.block){const E=y.level==="low"?r()<s.lowRead:y.level==="high"&&r()<s.duck;this.plan={uid:n.moveUid,crouch:E,parry:r()<s.parry,pressed:!1}}}}}else this.plan=null;if(this.plan&&n.state==="attack"&&n.moveUid===this.plan.uid){const m=n.move;if(this.plan.parry){const y=m.startup-n.f;!this.plan.pressed&&y<=3&&(o.gp=!0,this.plan.pressed=!0),u=this.plan.pressed}else u=!0;d=this.plan.crouch&&u}if(t.state==="attack"&&t.move&&t.hitDone&&this.flowed!==t.moveUid&&t.chainN<t.S.maxChain-2)if(this.flowed=t.moveUid,r()<((g=s.flow)!=null?g:s.aggro)){const m=[["t","n"],["h","n"],["l","n"],["d","n"],["h","s"],["l","b"]],y=m[r()*m.length|0];f.jf&&r()>=((_=s.jf)!=null?_:.5)?this.queue.push({t:e+5+(r()*4|0),b:y[0],d:y[1]}):a(y[0],y[1])}else f.rollCancel&&n.state==="blockstun"&&r()<s.flow&&(o.roll=!0,this.sd=r()<.5?1:-1,c=this.sd);if(t.state==="idle"&&!u&&t.ki>=100&&l<2&&n.state!=="roll"&&r()<((p=s.ougi)!=null?p:.03)&&(o.ougi=!0),t.state==="idle"&&!u)if(n.state==="attack"&&n.move&&n.f>=n.move.startup+n.move.active&&n.move.total-n.f>9&&l<1.9+In&&this.punished!==n.moveUid)this.punished=n.moveUid,r()<s.punish&&(n.move.total-n.f>17&&l<1.5+In?a("u","f"):a("t","n"));else if(n.state==="parried"&&l<2+In&&this.punished!==-n.f-1e3)this.punished=-n.f-1e3,n.f<6&&a("u","f");else if(n.state==="launched"&&l<2.4+In&&n.y<1.4&&this.juggled!==n.launchUid&&n.vy<1)this.juggled=n.launchUid,r()<s.juggle&&(a("t","n"),this.queue.push({t:e+9,b:"h",d:"n"},{t:e+21,b:"h",d:"n"}));else switch(--this.iT<=0&&this.pick(l),this.intent){case"approach":h=1;break;case"back":h=-1;break;case"circle":c=this.sd,h=l>2.4?.5:0;break;case"wait":u=this.waitG;break;case"iai":t.iaiReady&&l<this.atk.r&&(a("t","n"),this.intent="wait",this.waitG=!1,this.iT=(14+r()*16)*s.tempo);break;case"attack":l<this.atk.r?(a(this.atk.b,this.atk.d),this.intent="wait",this.waitG=r()<.5,this.iT=(12+r()*22)*s.tempo):h=1;break}return t.state==="blockstun"&&this.plan&&(u=!0),this.skill&&t.state==="idle"&&(o.sk=!0,this.skill=!1),this.finish(o,c,h,u,d)}finish(e,t,n,s,r){return e.mx=t||(e.roll?this.sd:0),e.my=r?-1:n,e.guard=s,e}pick(e){const t=this.L,n=this.rng,s=n(),r=this.me,o=r.S.ai||{pref:2,circle:.2,wait:.2},a=Ga(r.style),l=u=>{const[d,f]=u.split(":");return[d,f||"n"]},c=t.aggro+(o.aggro||0);this.sd=n()<.5?1:-1;let h=30;if(r.st<20)this.intent="back",h=30;else if(r.S.skill==="iai"&&e>2.2+In&&e<4.2+In&&s<c*.5)this.atk={r:a.iai_flash.range+a.iai_flash.lunge*.8},this.intent="iai",this.skill=!0,h=70;else if(r.S.skill==="erupt"&&r.heat>=2&&e<1.4+In&&s<c)this.skill=!0,this.intent="wait",this.waitG=!1,h=10;else if(r.S.skill==="dash"&&e<3.2+In&&s<.12)this.skill=!0,this.intent="circle",h=16;else if(e>o.pref+1.2+In)this.intent=s<.8-o.circle*.5?"approach":"circle",h=20+n()*30;else if(e<o.pref-.9&&s<.35)this.intent="back",h=12+n()*14;else if(e>.95+In*.4)if(s<c){const u=o.near?o.near.map(l):[["t","n"],["h","n"],["l","n"],["u","f"],["h","s"]],d=o.far?o.far.map(l):[["d","n"],["t","f"],["l","b"],["h","s"],["d","b"]],f=r.S.traits.heat&&r.heat>=r.S.traits.heat?[["d","n"],["h","f"]]:e<1.55+In?u:d,g=f[n()*f.length|0],_=pp(g[0],g[1],r.style);this.atk={b:g[0],d:g[1],r:a[_].range+a[_].lunge*.6+.2},this.intent="attack",h=40}else s<c+o.circle?(this.intent="circle",h=18+n()*25):s<c+o.circle+o.wait?(this.intent="wait",this.waitG=n()<.6,h=14+n()*24):(this.intent="back",h=10+n()*15);else s<.6?(this.atk={b:"t",d:"n",r:9},this.intent="attack"):this.intent="back",h=14;this.iT=h*(t.tempo||1)}}const Xe={ctx:null,muted:!1,init(){if(this.ctx){this.ctx.state!=="running"&&this.ctx.resume&&this.ctx.resume();return}try{const i=window.AudioContext||window.webkitAudioContext;this.ctx=new i;const e=this.ctx;this.comp=e.createDynamicsCompressor(),this.comp.threshold.value=-14,this.comp.ratio.value=6,this.comp.connect(e.destination),this.out=e.createGain(),this.out.gain.value=.6,this.out.connect(this.comp),this.rev=e.createConvolver();const t=e.sampleRate*1.3|0,n=e.createBuffer(2,t,e.sampleRate);for(let a=0;a<2;a++){const l=n.getChannelData(a);for(let c=0;c<t;c++)l[c]=(Math.random()*2-1)*Math.pow(1-c/t,3)}this.rev.buffer=n,this.revIn=e.createGain(),this.revIn.gain.value=.35,this.revIn.connect(this.rev),this.rev.connect(this.out);const s=e.sampleRate*.8|0;this.nb=e.createBuffer(1,s,e.sampleRate);const r=this.nb.getChannelData(0);for(let a=0;a<s;a++)r[a]=Math.random()*2-1;this.shaper=e.createWaveShaper();const o=new Float32Array(1024);for(let a=0;a<1024;a++){const l=a/512-1;o[a]=Math.tanh(l*3)}this.shaper.curve=o,this.shaper.connect(this.out)}catch{this.ctx=null}},dest(i){return i?[this.out,this.revIn]:[this.out]},noise(i,e,t,n,s,r,o=0,a=!1,l=!1){const c=this.ctx,h=c.currentTime+o,u=c.createBufferSource();u.buffer=this.nb,u.playbackRate.value=.8+Math.random()*.4;const d=c.createBiquadFilter();d.type=e,d.frequency.setValueAtTime(t,h),d.frequency.exponentialRampToValueAtTime(Math.max(20,n),h+i),d.Q.value=s;const f=c.createGain();if(f.gain.setValueAtTime(1e-4,h),f.gain.exponentialRampToValueAtTime(r,h+.005),f.gain.exponentialRampToValueAtTime(.001,h+i),u.connect(d),d.connect(f),l)f.connect(this.shaper);else for(const g of this.dest(a))f.connect(g);u.start(h),u.stop(h+i+.05)},tone(i,e,t,n,s,r=0,o=!1){const a=this.ctx,l=a.currentTime+r,c=a.createOscillator();c.type=n,c.frequency.setValueAtTime(i,l),c.frequency.exponentialRampToValueAtTime(Math.max(20,e),l+t);const h=a.createGain();h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(s,l+.004),h.gain.exponentialRampToValueAtTime(.001,l+t),c.connect(h);for(const u of this.dest(o))h.connect(u);c.start(l),c.stop(l+t+.05)},metal(i,e,t,n=!0){const s=(this.ctx?this.ctx.sampleRate:44100)*.45;for(const[r,o]of[[1,1],[2.76,.6],[5.4,.4],[8.93,.25],[13.3,.15]])i*r<s&&this.tone(i*r,i*r*.995,e*(1.2-r*.05),"sine",t*o*.35,0,n)},play(i,e={}){if(!this.ctx||this.muted)return;const t=e.power||8;try{switch(i){case"whoosh":{const n=t>=12;this.noise(n?.24:.15,"bandpass",n?300:500,n?1600:2600,2.2,n?.4:.28),this.noise(.1,"highpass",5e3,8e3,.7,.08,.04);break}case"hit":this.noise(.06,"highpass",4e3,2500,.8,.7),this.noise(.16,"bandpass",1800,500,1.4,.8),this.tone(150,55,.14,"sine",.9);break;case"heavy":this.noise(.08,"highpass",3500,2e3,.8,.8),this.noise(.3,"bandpass",1400,180,1.1,1,0,!1,!0),this.tone(110,32,.32,"sine",1),this.tone(55,30,.4,"triangle",.5,.01);break;case"counter":this.play("heavy"),this.metal(880,.5,.5);break;case"block":this.metal(620+Math.random()*80,.35,.9),this.noise(.05,"highpass",3e3,2e3,.7,.6);break;case"guardbreak":this.metal(330,.7,1),this.noise(.25,"lowpass",1200,150,.7,.9,0,!0),this.tone(90,35,.4,"sine",.9);break;case"parry":this.metal(1250,1.1,1.1),this.metal(1880,.8,.5),this.noise(.08,"highpass",6e3,4e3,.5,.6);break;case"roll":this.noise(.22,"lowpass",900,200,.7,.32);break;case"land":this.tone(90,38,.3,"sine",.9),this.noise(.25,"lowpass",600,120,.7,.6,0,!0);break;case"ko":this.tone(70,25,1.2,"sine",1),this.noise(.9,"lowpass",900,60,.6,.8,0,!0),this.metal(440,1.4,.6);break;case"bell":this.metal(660,1.2,.7);break;case"draw":this.noise(.35,"bandpass",3e3,7e3,6,.25),this.metal(2400,.4,.25);break;case"sheath":this.noise(.2,"bandpass",6e3,2500,5,.2),this.tone(1800,1700,.06,"triangle",.3,.22);break;case"ui":this.tone(660,880,.07,"triangle",.22);break;case"el_fire":this.noise(.35,"lowpass",2500,300,.8,.45);for(let n=0;n<5;n++)this.noise(.03,"highpass",3e3,2e3,1,.3,.03+Math.random()*.2);break;case"el_water":this.noise(.3,"bandpass",2200,400,1.5,.5);for(let n=0;n<3;n++)this.tone(500+Math.random()*600,1200+Math.random()*800,.07,"sine",.25,.05+n*.05);break;case"el_thunder":this.noise(.12,"highpass",2500,1500,.6,.9),this.noise(.6,"lowpass",400,60,.6,.7,.05,!0);break;case"el_wind":this.noise(.45,"bandpass",600,2400,4,.4),this.noise(.4,"bandpass",1200,400,4,.25,.05);break}}catch{}}},_f=180,Zp="nfbs",Jp="thudl";function Cw(i){const e={mx:Math.round((i.mx||0)*100)/100,my:Math.round((i.my||0)*100)/100,guard:!!i.guard,gp:!!i.gp,roll:!!i.roll,ougi:!!i.ougi,sk:!!i.sk,btns:[]};i.score!==void 0&&i.score!==null&&i.score>=0&&(e.score=Math.round(i.score));for(const t of i.btns||[])e.btns.push({b:t.b,dir:t.dir,a:Math.round((t.a||0)*100)/100});return e}function Pw(i){var t;const e=(i.guard?1:0)|(i.gp?2:0)|(i.roll?4:0)|(i.ougi?8:0)|(i.sk?16:0);return[Math.round(i.mx*100),Math.round(i.my*100),e,(t=i.score)!=null?t:-1,...i.btns.map(n=>Jp.indexOf(n.b)*4+Zp.indexOf(n.dir)+Math.round(n.a*100)*32)]}function Lw(i){const[e,t,n,s,...r]=i,o={mx:e/100,my:t/100,guard:!!(n&1),gp:!!(n&2),roll:!!(n&4),ougi:!!(n&8),sk:!!(n&16),btns:[]};s>=0&&(o.score=s);for(const a of r){const l=(a%32+32)%32,c=(a-l)/32;o.btns.push({b:Jp[l>>2],dir:Zp[l&3],a:c/100})}return o}const vf=()=>({mx:0,my:0,guard:!1,gp:!1,roll:!1,ougi:!1,sk:!1,btns:[]});class Iw{constructor({me:e,delay:t=5,send:n}){this.me=e,this.delay=t,this.send=n,this.inputs=[new Map,new Map];for(let s=1;s<=t;s++)this.inputs[0].set(s,vf()),this.inputs[1].set(s,vf());this.nextLocal=t+1,this.myHash=new Map,this.pendingSnap=new Map,this.resyncs=0,this.stallFrames=0}needLocal(e){return this.nextLocal<=e+1+this.delay}produce(e){const t=this.nextLocal++,n=Cw(e);this.inputs[this.me].set(t,n),this.send({k:"i",f:t,d:Pw(n)})}canStep(e){return this.inputs[0].has(e)&&this.inputs[1].has(e)}get(e){return[this.inputs[0].get(e),this.inputs[1].get(e)]}receive(e){e.k==="i"?this.inputs[1-this.me].set(e.f,Lw(e.d)):e.k==="s"&&this.me===1&&this.pendingSnap.set(e.f,e)}afterStep(e){const t=e.frame;for(const n of this.inputs)n.delete(t-600);if(t%_f!==0)return this.applyLateSnap(e);if(this.me===0)return this.send({k:"s",f:t,h:e.hash(),s:e.serialize()}),null;this.myHash.set(t,e.hash());for(const n of this.myHash.keys())n<t-_f*3&&this.myHash.delete(n);return this.applyLateSnap(e)}applyLateSnap(e){if(this.me!==1||!this.pendingSnap.size)return null;let t=null;for(const[n,s]of[...this.pendingSnap]){if(n>e.frame||(this.pendingSnap.delete(n),this.myHash.get(n)===s.h))continue;const o=e.frame;for(e.load(s.s);e.frame<o&&this.canStep(e.frame+1);)e.step(this.get(e.frame+1)),e.drainEvents();this.resyncs++,t="replayed"}return t}}const Qp=48,Uw=(i,e,t)=>[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t];function em(i,e=Qp){const t=[0];for(let r=1;r<i.length;r++)t.push(t[r-1]+Math.hypot(i[r][0]-i[r-1][0],i[r][1]-i[r-1][1]));const n=[],s=t[t.length-1]||1;for(let r=0;r<e;r++){const o=s*r/(e-1);let a=1;for(;a<t.length-1&&t[a]<o;)a++;n.push(Uw(i[a-1],i[a],(o-t[a-1])/Math.max(1e-9,t[a]-t[a-1])))}return n}const fo={fire:{name:"원",closed:!0,pts:Array.from({length:65},(i,e)=>{const t=e/64*Math.PI*2-Math.PI/2;return[Math.cos(t),Math.sin(t)]})},water:{name:"물결",pts:Array.from({length:65},(i,e)=>{const t=-1+2*e/64;return[t,-.45*Math.sin(t*Math.PI*1.5)]})},thunder:{name:"번개",pts:[[-.35,-1],[.45,-.15],[-.25,.05],[.4,1]]},wind:{name:"소용돌이",pts:Array.from({length:81},(i,e)=>{const t=e/80,n=t*Math.PI*3.2,s=1-t*.82;return[Math.cos(n)*s,Math.sin(n)*s]})}};for(const i of Object.values(fo))i.res=em(i.pts);function xf(i){const e=i.reduce((s,r)=>s+r[0],0)/i.length,t=i.reduce((s,r)=>s+r[1],0)/i.length;let n=1e-6;for(const s of i)n=Math.max(n,Math.abs(s[0]-e),Math.abs(s[1]-t));return i.map(s=>[(s[0]-e)/n,(s[1]-t)/n])}const Nw=(i,e)=>i.reduce((t,n,s)=>t+Math.hypot(n[0]-e[s][0],n[1]-e[s][1]),0)/i.length;function Dw(i,e){if(!e||e.length<6)return 0;const t=fo[i],n=xf(em(e));let s=0;for(let l=1;l<e.length;l++)s+=Math.hypot(e[l][0]-e[l-1][0],e[l][1]-e[l-1][1]);if(s<40)return 0;const r=xf(t.res),o=[];for(const l of[1,-1]){const c=r.map(h=>[h[0]*l,h[1]]);if(o.push(c,c.slice().reverse()),t.closed)for(let h=4;h<Qp;h+=4){const u=c.slice(h).concat(c.slice(0,h));o.push(u,u.slice().reverse())}}const a=Math.min(...o.map(l=>Nw(n,l)));return Math.round(Math.max(0,Math.min(1,1-(a-.12)/.5))*100)}const Mf=i=>i>=85?"완벽!":i>=65?"훌륭함":i>=40?"좋음":"아쉬움",Un=i=>document.querySelector(i);class kw{constructor(){this.layer=Un("#ougiLayer"),this.cv=Un("#drawCv"),this.g=this.cv.getContext("2d"),this.active=!1,this.pts=[],this.drawing=!1,this.onScore=null;const e=n=>{const s=this.cv.getBoundingClientRect();return[n.clientX-s.left,n.clientY-s.top]};this.cv.addEventListener("pointerdown",n=>{if(!(!this.mine||this.done)){n.preventDefault(),this.drawing=!0,this.pts=[e(n)];try{this.cv.setPointerCapture(n.pointerId)}catch{}}}),this.cv.addEventListener("pointermove",n=>{this.drawing&&(n.preventDefault(),this.pts.push(e(n)))});const t=()=>{this.drawing&&(this.drawing=!1,this.finish())};this.cv.addEventListener("pointerup",t),this.cv.addEventListener("pointercancel",t)}start(e,t,n){this.ch=e,this.mine=t,this.onScore=n,this.done=!1,this.pts=[],this.t=0,this.active=!0;const s=r1(e.trail[1]);this.layer.style.setProperty("--ec",s),this.col=s,Un("#ciStyle").textContent=`${e.style} 오의`,Un("#ciName").textContent=e.ougi.name,Un("#ciHanja").textContent=e.ougi.hanja;const r=Un("#cutin");r.style.animation="none",r.offsetWidth,r.style.animation="",Un("#drawGrade").textContent="",Un("#drawHint").textContent=t?`화면에 ${fo[e.ougi.shape].name}을(를) 그리세요!`:`${e.name}의 오의!`,this.layer.classList.remove("hide"),this.cv.classList.toggle("on",t),this.resize()}resize(){const e=Math.min(2,devicePixelRatio||1);this.cv.width=innerWidth*e,this.cv.height=innerHeight*e,this.dpr=e}finish(){if(this.done)return;this.done=!0;const e=Dw(this.ch.ougi.shape,this.pts);Un("#drawGrade").textContent=`${Mf(e)} ${e}`,Un("#drawHint").textContent="",this.onScore&&this.onScore(e)}showScore(e){this.done=!0,Un("#drawGrade").textContent=`${Mf(e)} ${e}`,Un("#drawHint").textContent=""}hide(){this.active=!1,this.layer.classList.add("hide"),this.cv.classList.remove("on"),this.drawing=!1}update(e){if(!this.active)return;this.t+=e;const t=this.g,n=this.dpr,s=this.cv.width,r=this.cv.height,o=fo[this.ch.ougi.shape];t.clearRect(0,0,s,r);const a=s/2,l=r*.52,c=Math.min(s,r)*.3,h=o.res.map(u=>[a+u[0]*c,l+u[1]*c]);if(t.lineCap="round",t.lineJoin="round",t.setLineDash([10*n,12*n]),t.lineWidth=6*n,t.strokeStyle="rgba(255,255,255,.28)",t.beginPath(),h.forEach((u,d)=>d?t.lineTo(u[0],u[1]):t.moveTo(u[0],u[1])),t.stroke(),t.setLineDash([]),!this.mine||!this.drawing&&!this.done&&this.pts.length===0){const u=Math.min(h.length,Math.floor(this.t*.9%1.4/1*h.length));this.glow(h.slice(0,Math.max(2,u)),this.mine?.45:1)}this.pts.length>1&&this.glow(this.pts.map(u=>[u[0]*n,u[1]*n]),1)}glow(e,t){const n=this.g,s=this.dpr;for(const[r,o,a]of[[22,.25,this.col],[12,.6,this.col],[4,1,"#fff"]])n.globalAlpha=o*t,n.strokeStyle=a,n.lineWidth=r*s,n.beginPath(),e.forEach((l,c)=>c?n.lineTo(l[0],l[1]):n.moveTo(l[0],l[1])),n.stroke();n.globalAlpha=1}}const Ow={practice:"연습",easy:"쉬움",normal:"보통",hard:"어려움"},Fw={practice:"연습 인형",easy:"CPU · 쉬움",normal:"CPU · 보통",hard:"CPU · 어려움"};class Bw{constructor({view:e,hud:t,input:n}){this.view=e,this.hud=t,this.input=n,this.mode="demo",this.diff="normal",this.auto=!1,this.paused=!1,this.slow=0,this.t=0,this.acc=0,this.speed=1,this.stats={hits:0,maxCombo:0,parries:0},this.sim=null,this.ctrl=[null,null],this.chars=[ln[0],ln[1]],this.me=0,this.ougiUI=new kw,this.net=null,this.ls=null}setMe(e){this.me=e,this.hud.me=e,this.view.me=e}applyChars(){this.view.setCharacters(this.chars),this.view.warmup();const e=n=>"#"+n.map(s=>Math.round(Math.min(1,s)*255).toString(16).padStart(2,"0")).join("");document.documentElement.style.setProperty("--el",e(this.chars[0].trail[1])),document.querySelector("#p1Name").textContent=this.chars[this.me].name;const t=this.chars[this.me].combat.skill;document.querySelector("#skillIc").textContent=t.ic,document.querySelector("#skillNm").textContent=t.nm,document.documentElement.style.setProperty("--el",e(this.chars[this.me].trail[1]))}newSim(e){const t=Math.random()*2147483648|0;this.sim=new gf({mode:e,seed:t}),this.sim.setStyles(this.chars.map(n=>n.id)),this.handle(this.sim.drainEvents())}startDemo(){this.endOnline(),this.setMe(0),this.ougiUI.hide(),this.mode="demo",Xe.muted=!0;const e=Math.random()*ln.length|0,t=(e+1+(Math.random()*(ln.length-1)|0))%ln.length;this.chars=[ln[e],ln[t]],this.applyChars(),this.newSim("demo"),this.ctrl=[new la(this.sim,0,"normal"),new la(this.sim,1,"normal")],De("#hud",!1),De("#controls",!1),De("#pauseBtn",!1),De("#title",!0),this.hud.banner("")}startMatch(){this.setMe(0),this.ougiUI.hide(),this.mode=this.diff==="practice"?"practice":"match",Xe.muted=!1,this.paused=!1,this.slow=0,this.stats={hits:0,maxCombo:0,parries:0},this.input.clear(),this.applyChars(),this.newSim(this.mode),this.ctrl=[this.auto?new la(this.sim,0,"normal"):null,new la(this.sim,1,this.diff)],De("#title",!1),De("#result",!1),De("#hud",!0),De("#controls",!0),De("#pauseBtn",!0),document.querySelector("#cpuName").textContent=`${this.chars[1].name} · ${Ow[this.diff]}`,this.input.joyHome()}startOnline({me:e,seed:t,chars:n,transport:s,delay:r=5}){this.setMe(e),this.ougiUI.hide(),this.mode="online",Xe.muted=!1,this.paused=!1,this.slow=0,this.stats={hits:0,maxCombo:0,parries:0},this.input.clear(),this.net=s,this.chars=n,this.applyChars(),this.sim=new gf({mode:"online",seed:t}),this.sim.setStyles(n.map(o=>o.id)),this.handle(this.sim.drainEvents()),this.ctrl=[null,null],this.ls=new Iw({me:e,delay:r,send:o=>s.send(o)}),De("#title",!1),De("#result",!1),De("#charSel",!1),De("#online",!1),De("#hud",!0),De("#controls",!0),De("#pauseBtn",!1),document.querySelector("#cpuName").textContent=`${n[1-e].name} · 온라인`,this.input.joyHome(),this.rematch=[!1,!1]}onNet(e){return e.k==="i"||e.k==="s"?(this.ls&&this.ls.receive(e),!0):e.k==="rematch"?(this.rematch[1-this.me]=!0,this.tryRematch(),!0):!1}tryRematch(){if(!(this.rematch[0]&&this.rematch[1])||this.me!==0)return;const e=Math.random()*2**31|0;this.net.send({k:"start",seed:e,chars:this.chars.map(t=>t.id)}),this.startOnline({me:0,seed:e,chars:this.chars,transport:this.net})}endOnline(){if(this.net){const e=this.net;this.net=null,this.ls=null;try{e.close()}catch{}}}showResult(){const e=this.sim.wins[this.me]>this.sim.wins[1-this.me];this.ougiUI.hide(),De("#controls",!1),De("#pauseBtn",!1);const t=document.querySelector("#resText");t.textContent=e?"승리!":"패배",t.className="res "+(e?"win":"lose");const n=this.mode==="online"?"온라인":Fw[this.diff];document.querySelector("#resSub").textContent=`${this.chars[this.me].name} vs ${this.chars[1-this.me].name} · ${n} · 최대 콤보 ${this.stats.maxCombo} · 패링 ${this.stats.parries}회`,document.querySelector("#againBtn").textContent=this.mode==="online"?"한 판 더 (상대 동의 필요)":"다시 하기",this.mode="result",De("#result",!0)}togglePause(){this.mode==="demo"||this.mode==="result"||this.mode==="online"||(this.paused=!this.paused,De("#pause",this.paused),this.paused||De("#moves",!1),this.input.clear())}canPress(){return(this.mode==="match"||this.mode==="practice"||this.mode==="online")&&!this.paused&&this.sim&&this.sim.phase==="fight"&&!this.sim.cine}step(){const e=this.sim;if(this.mode==="online"||this.mode==="result"&&this.ls){const r=this.ls;if(this.mode==="online"&&r.needLocal(e.frame)&&r.produce(this.input.consume()),this.mode==="result")return e.step([null,null]),this.handle(e.drainEvents()),this.view.onStep(e,!0,this.t),!0;if(!r.canStep(e.frame+1))return r.stallFrames++,!1;r.stallFrames=0;const o=e.step(r.get(e.frame+1)),a=r.afterStep(e);return e.frame%60===0&&((this.hashLog||(this.hashLog={}))[e.frame]=e.hash()),this.handle(e.drainEvents()),this.view.onStep(e,o,this.t),a==="replayed"&&this.view.fx.forEach((l,c)=>l.anim.fk(e.f[c])),!0}this.ctrl[this.me];const t=this.ctrl[0]?this.ctrl[0].input():this.input.consume(),n=this.ctrl[1]?this.ctrl[1].input():this.input.consume(),s=e.step([t,n]);return this.handle(e.drainEvents()),this.view.onStep(e,s,this.t),!0}sparkPos(e,t,n){const s=this.view.limbPos(e,n),r=this.view.center(t);return[Xt(s[0],r[0],.25),Xt(s[1],r[1],.15),Xt(s[2],r[2],.25)]}handle(e){const t=this.view,n=this.hud,s=t.particles,r=t.hitfx,o=t.camera,a=this.mode!=="demo",l=(h,u,d)=>{if(o.shake=Math.max(o.shake,h),u!==void 0){const f=this.sim.f[u],g=this.sim.f[d],_=g.x-f.x,p=g.z-f.z,m=Math.hypot(_,p)||1;o.shakeDir=[_/m,.3,p/m]}},c=h=>t.fx[h].ch.trail[1];for(const h of e)switch(h.t){case"hit":{const u=this.sparkPos(h.a,h.d,h.limb),d=t.fx[h.a].ch.id,f=h.dmg>=12||h.counter;t.hitFlash(h.d,5,h.counter?[1,.35,.2]:[1,1,1]),t.fx[h.d].lagDelay=40,s.sparks(u,h.counter?"counter":"hit",h.dmg),s.elementBurst(u,d,h.dmg+(h.counter?4:0));{const g=this.sim.f[h.a],_=this.sim.f[h.d],p=_.x-g.x,m=_.z-g.z,y=Math.hypot(p,m)||1;t.elfx.hit(d,u,[p/y,0,m/y],h.dmg+(h.counter?4:0))}if(r.stroke(u,t.strokeAngle(h.a),c(h.a),.9+h.dmg*.04+(h.counter?.4:0),f?.9:.6),r.ring(u,c(h.a),f?1.5:1),(h.move==="slash_down"||h.move==="helm"||h.move==="sweep"||h.ko)&&r.ring([this.sim.f[h.d].x,0,this.sim.f[h.d].z],c(h.a),1.3,!0),l(f?.2:.09,h.a,h.d),o.punch=Math.max(o.punch,(f?6:2.5)+(h.counter?3:0)),Xe.play(h.counter?"counter":h.dmg>=12?"heavy":"hit"),Xe.play("el_"+d),a&&(n.hitBar(h.d,f),h.counter?(n.call(n.side(h.a),"카운터!","red"),n.impact()):h.punish&&(n.call(n.side(h.a),"반격!","gold"),h.a===this.me&&n.impact()),h.a===this.me&&(this.turnLeft=0),f&&n.speedLines(),h.launch&&n.call(n.side(h.a),"띄우기!","gold"),h.combo>=2&&n.call(n.side(h.a),h.combo+" 히트","combo"+(h.combo>=4?" big":"")),h.a===this.me&&(this.stats.hits++,this.stats.maxCombo=Math.max(this.stats.maxCombo,h.combo)),h.d===this.me&&navigator.vibrate))try{navigator.vibrate(h.dmg>=12?40:20)}catch{}h.ko&&(this.slow=Math.max(this.slow,1.3),o.cine={t:1.6,side:Math.random()<.5?1:-1},a&&n.impact());break}case"block":{a&&!h.brk&&(h.d===this.me&&h.adv>=4?this.turn("지금 반격!",h.adv+8):h.a===this.me&&h.adv>=8&&this.turn("막혔다! 가드",h.adv,!0));const u=this.sparkPos(h.a,h.d,h.limb);t.hitFlash(h.d,3,[.4,.7,1]),s.sparks(u,h.brk?"armor":"block"),r.ring(u,h.brk?[1,.5,.2]:[.6,.85,1],h.brk?1.4:.7),h.brk&&r.stroke(u,t.strokeAngle(h.a),[1,.5,.2],1.6,1),l(h.brk?.15:.04,h.a,h.d),Xe.play(h.brk?"guardbreak":"block"),a&&h.brk&&(n.call(n.side(h.a),"가드 브레이크!","red"),n.hitBar(h.d,!0));break}case"whiff":{const u=this.sim.f[h.i],d=this.sim.f[1-h.i];a&&h.i!==this.me&&h.rec>=10&&Math.hypot(u.x-d.x,u.z-d.z)<3.4&&this.turn("빈틈! 지금",h.rec);break}case"parry":{a&&h.d===this.me&&this.turn("패링! 지금",44);const u=this.sparkPos(h.a,h.d,h.limb);t.hitFlash(h.a,6,[1,.9,.5]),s.sparks(u,"parry"),Xe.play("parry"),r.ring(u,[1,.85,.4],2),r.stroke(u,t.strokeAngle(h.a)+Math.PI/2,[1,.9,.6],1.8,1.5),this.slow=Math.max(this.slow,.45),l(.1),o.punch=Math.max(o.punch,5),n.flash(.35),a&&(n.call(n.side(h.d),"패링!","gold"),h.d===this.me&&this.stats.parries++);break}case"armor":{const u=this.sparkPos(h.a,h.d,h.limb);t.fx[h.d].lagDelay=40,t.hitFlash(h.d,6,[1,.6,.2]),s.sparks(u,"armor"),r.ring(u,[1,.55,.2],1.2),Xe.play("heavy"),a&&n.call(n.side(h.d),"슈퍼아머","gold");break}case"heat":s.elementBurst(t.center(h.i),"fire",4+h.n*3),h.n>=3&&(Xe.play("el_fire"),a&&n.call(n.side(h.i),"불씨 3 · 작열 준비","gold"));break;case"blaze":{const u=t.center(h.i);s.elementBurst(u,"fire",26),r.ring(u,[1,.45,.1],2),t.hitFlash(h.i,10,[1,.5,.1]),Xe.play("el_fire"),Xe.play("whoosh",{power:16}),l(.08),a&&n.call(n.side(h.i),"작열!","red");break}case"erupt":{const u=t.center(h.i);s.elementBurst(u,"fire",22),r.ring([u[0],.1,u[2]],[1,.5,.15],2.2,!0),Xe.play("el_fire"),l(.1),a&&n.call(n.side(h.i),"화염 해방!","red");break}case"windDash":{const u=t.center(h.i);s.elementBurst(u,"wind",12),Xe.play("el_wind"),a&&n.call(n.side(h.i),"질풍!","gold");break}case"skillFail":a&&h.i===this.me&&n.call(0,"불씨가 없어요","combo");break;case"iaiReady":Xe.play("sheath"),s.elementBurst(t.center(h.i),"thunder",5);break;case"iai":{const u=t.center(h.i);Xe.play("draw"),Xe.play("el_thunder"),t.elfx.crackle(u),r.ring(u,[.6,.85,1],1.4),t.hitFlash(h.i,6,[.6,.85,1]),a&&(n.call(n.side(h.i),h.move==="iai_flash"?"발도 일섬!":"발도!","gold"),n.speedLines());break}case"jf":{const u=t.center(h.i);t.elfx.crackle(u),t.elfx.crackle(u),s.elementBurst(u,"thunder",12),t.hitFlash(h.i,6,[.6,.85,1]),Xe.play("el_thunder"),n.flash(.18),a&&n.call(n.side(h.i),"뇌속!","gold");break}case"mirror":{const u=this.sparkPos(h.a,h.d,h.limb);s.sparks(u,"parry"),s.elementBurst(u,"water",18),r.ring(u,[.4,.75,1],2),r.ring([this.sim.f[h.d].x,0,this.sim.f[h.d].z],[.4,.75,1],1.8,!0),t.hitFlash(h.d,8,[.5,.8,1]),Xe.play("parry"),Xe.play("el_water"),this.slow=Math.max(this.slow,.4),l(.1),o.punch=Math.max(o.punch,5),n.flash(.25),a&&n.call(n.side(h.d),"물거울!","gold");break}case"gale":{const u=t.center(h.i);s.elementBurst(u,"wind",14),r.ring([u[0],.2,u[2]],[.5,1,.7],1.6,!0),Xe.play("el_wind"),a&&n.call(n.side(h.i),"선풍!","gold");break}case"windStep":s.elementBurst(t.center(h.i),"wind",6),Xe.play("whoosh",{power:6});break;case"land":s.sparks([h.x,0,h.z],"dust"),r.ring([h.x,0,h.z],[.8,.7,.6],1,!0),Xe.play("land"),l(.08);break;case"whoosh":{const u=this.sim.f[h.i].mv[h.move];Xe.play("whoosh",{power:u?u.dmg:8});break}case"roll":Xe.play("roll");break;case"round":t.resetRound(this.sim),a&&(n.banner(this.sim.mode==="practice"?"연습":"ROUND "+h.round),Xe.play("bell"),setTimeout(()=>Xe.play("draw"),450)),n.pips(this.sim.wins);break;case"fight":a&&(n.banner("FIGHT!","fight"),Xe.play("bell"),this.sim.round<=2&&this.mode!=="demo"&&n.tip(this.chars[this.me].combat.tip,400));break;case"ko":a&&(n.banner(h.timeout?"TIME":"K.O.","ko"),Xe.play(h.timeout?"bell":"ko"),h.winner>=0&&setTimeout(()=>Xe.play("sheath"),2100)),n.pips(this.sim.wins);break;case"matchEnd":(this.mode==="match"||this.mode==="practice"||this.mode==="online")&&this.showResult();break;case"ougiDash":Xe.play("whoosh",{power:14}),t.hitFlash(h.i,8,t.fx[h.i].ch.trail[1]),r.ring(t.center(h.i),c(h.i),1.6);break;case"ougiStart":{const u=t.fx[h.a].ch,d=h.a===this.me&&(this.mode==="online"||!this.ctrl[h.a]);this.ougiUI.start(u,d&&a,f=>this.input.setScore(f)),Xe.play("parry"),Xe.play("el_"+u.id),n.flash(.5),o.cine={t:99,mode:"cast",a:h.a};break}case"ougiStrike":{this.ougiUI.showScore(h.score),setTimeout(()=>this.ougiUI.hide(),600),o.cine={t:99,mode:"strike",a:h.a},this.ougiStrikeFx(h.a,h.d,h.score),a&&(n.speedLines(),setTimeout(()=>n.speedLines(),450)),this.ougiTime=this.t;break}case"ougiHit":{const u=t.center(h.d),d=t.fx[h.a].ch.id,f=c(h.a);s.elementBurst(u,d,20),s.sparks(u,"counter",14);{const g=this.sim.f[h.a],_=this.sim.f[h.d];t.elfx.ougiBurst(d,[g.x,0,g.z],[_.x,0,_.z])}r.ring(u,f,2.4),r.ring([u[0],0,u[2]],f,2.2,!0);for(let g=0;g<2;g++)r.stroke(u,Math.random()*Math.PI,f,1.7+g*.4,.9);l(.35,h.a,h.d),o.punch=10,n.impact(),a&&n.speedLines(),Xe.play("ko"),Xe.play("el_"+d),t.hitFlash(h.d,8,[1,1,1]),t.fx[h.d].lagDelay=60,this.slow=Math.max(this.slow,.8),o.cine={t:1.4,side:Math.random()<.5?1:-1},a&&(n.call(n.side(h.a),`오의 ${Math.round(h.dmg)}`,"gold"),n.hitBar(h.d,!0));break}}}ougiStrikeFx(e,t,n){const s=this.view,r=s.fx[e].ch,o=fo[r.ougi.shape].res,a=this.sim.f[t],l=s.camera.cam.matrixWorld.elements,c=[l[0],l[1],l[2]],h=[l[4],l[5],l[6]],u={fire:380,water:120,thunder:260,wind:150}[r.id]||200;setTimeout(()=>{s.elfx.ougiShape(r.id,[a.x,1.15,a.z],c,h,o,1.15+n/250),s.particles.elementBurst([a.x,1.1,a.z],r.id,18),Xe.play("el_"+r.id),Xe.play("whoosh",{power:14})},u)}turn(e,t,n=!1){this.turnText=e,this.turnLeft=this.turnMax=Math.max(8,t),this.turnBad=n,this.turnFrame=this.sim.frame,this.turnShown=""}cues(){const e=this.sim,t=c=>document.querySelector(c),n=this.mode!=="demo"&&this.mode!=="result"&&e&&e.phase==="fight"&&!e.cine,s=e&&e.f[1-this.me],r=s&&s.move,o=t("#warn");if(n&&s.state==="attack"&&r&&!r.noHit&&s.f<r.startup+r.active){const[c,h,u]=this.view.screenPos(1-this.me,.15),d=Math.min(innerHeight-150,Math.max(150,h));if(u){const f=r.level,g=r.id+f;this.warnKey!==g&&(this.warnKey=g,o.className=f,t("#warnT").textContent={high:"상단",mid:"중단",low:"하단"}[f],t("#warnS").textContent=(r.armor?"아머 · ":"")+{high:"앉으면 피함",mid:"서서 막기",low:"앉아서 막기"}[f]),o.style.left=c.toFixed(0)+"px",o.style.top=d.toFixed(0)+"px",o.style.setProperty("--p",Math.max(0,1-s.f/r.startup).toFixed(3))}else o.className="hide"}else this.warnKey!==null&&(this.warnKey=null,o.className="hide");const l=t("#turn");n&&this.turnLeft>0?(this.turnLeft-=Math.max(0,e.frame-this.turnFrame),this.turnFrame=e.frame,this.turnShown!==this.turnText&&(this.turnShown=this.turnText,t("#turnT").textContent=this.turnText,l.className=this.turnBad?"bad":""),l.style.setProperty("--p",Math.max(0,this.turnLeft/this.turnMax).toFixed(3)),this.turnLeft<=0&&(l.className="hide")):l.className!=="hide"&&(l.className="hide",this.turnLeft=0)}frame(e){if(!this.paused&&!this.freeze){const n=(this.slow>0?.3:1)*this.speed;this.slow>0&&(this.slow-=e),this.t+=e*n,this.acc+=e*n;let s=0;for(;this.acc>=un&&s<5;){if(!this.step()){this.acc=Math.min(this.acc,un*3);break}this.acc-=un,s++}s>=5&&(this.acc=0)}this.view.render(e,this.t,this.sim,this.mode==="demo"||this.mode==="result"),this.hud.update(this.sim,this.view.fx,this.mode),this.cues(),this.ougiUI.update(e);const t=document.querySelector("#netBadge");t&&t.classList.toggle("hide",!(this.ls&&this.mode==="online"&&this.ls.stallFrames>30))}}const Vw="modulepreload",zw=function(i,e){return new URL(i,e).href},yf={},tm=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let c=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=c(t.map(h=>{if(h=zw(h,n),h in yf)return;yf[h]=!0;const u=h.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(n)for(let g=o.length-1;g>=0;g--){const _=o[g];if(_.href===h&&(!u||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Vw,u||(f.as="script"),f.crossOrigin="",f.href=h,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((g,_)=>{f.addEventListener("load",g),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},nm="lockon-fighter-v1-",im=()=>String(1e3+Math.floor(Math.random()*9e3)),sm=[{urls:["stun:stun.l.google.com:19302","stun:stun1.l.google.com:19302"]},{urls:"stun:global.stun.twilio.com:3478"},{urls:["turn:openrelay.metered.ca:80","turn:openrelay.metered.ca:443","turn:openrelay.metered.ca:443?transport=tcp"],username:"openrelayproject",credential:"openrelayproject"}];function rm(i,e){let t=()=>{},n=()=>{},s=!1;i.on("data",o=>t(typeof o=="string"?JSON.parse(o):o));const r=()=>{s||(s=!0,n())};return i.on("close",r),i.on("error",r),e.on("disconnected",r),{send:o=>{i.open&&i.send(JSON.stringify(o))},onMessage:o=>{t=o},onClose:o=>{n=o},close:()=>{s=!0;try{i.close(),e.destroy()}catch{}}}}async function Hw(i="peer"){if(i==="local")return Ww();const{Peer:e}=await tm(async()=>{const{Peer:t}=await import("./bundler-DNPxrClw.js");return{Peer:t}},[],import.meta.url);for(let t=0;t<4;t++){const n=im(),s=new e(nm+n,{config:{iceServers:sm}}),r=await new Promise(a=>{s.on("open",()=>a(!0)),s.on("error",l=>a(l.type==="unavailable-id"?!1:l))});if(r===!1){s.destroy();continue}if(r!==!0)throw s.destroy(),new Error("연결 서버에 접속하지 못했어요 ("+(r.type||r)+")");const o=new Promise(a=>s.on("connection",l=>l.on("open",()=>a(rm(l,s)))));return{code:n,connected:o,cancel:()=>s.destroy()}}throw new Error("방 번호를 만들지 못했어요. 다시 시도해 주세요.")}async function Gw(i,e="peer"){if(e==="local")return Xw(i);const{Peer:t}=await tm(async()=>{const{Peer:s}=await import("./bundler-DNPxrClw.js");return{Peer:s}},[],import.meta.url),n=new t({config:{iceServers:sm}});return await new Promise((s,r)=>{n.on("open",s),n.on("error",o=>r(new Error("연결 서버에 접속하지 못했어요 ("+o.type+")")))}),new Promise((s,r)=>{const o=n.connect(nm+i,{reliable:!0,serialization:"raw"}),a=setTimeout(()=>{n.destroy(),r(new Error("방을 찾지 못했어요. 번호를 확인해 주세요."))},15e3);n.on("error",l=>{clearTimeout(a),n.destroy(),r(new Error(l.type==="peer-unavailable"?"그 번호의 방이 없어요.":"연결 실패 ("+l.type+")"))}),o.on("open",()=>{clearTimeout(a),s(rm(o,n))})})}function om(i,e){let t=()=>{},n=()=>{};return i.onmessage=s=>{s.data.from!==e&&(s.data.bye?n():s.data.m&&t(s.data.m))},{send:s=>i.postMessage({from:e,m:s}),onMessage:s=>{t=s},onClose:s=>{n=s},close:()=>{i.postMessage({from:e,bye:1}),i.close()}}}async function Ww(){const i=im(),e=new BroadcastChannel("lof-"+i),t=new Promise(n=>{const s=r=>{r.data.hello==="guest"&&(e.postMessage({from:"host",hello:"host"}),e.removeEventListener("message",s),n(om(e,"host")))};e.addEventListener("message",s)});return{code:i,connected:t,cancel:()=>e.close()}}async function Xw(i){const e=new BroadcastChannel("lof-"+i);return new Promise((t,n)=>{const s=setTimeout(()=>n(new Error("그 번호의 방이 없어요.")),4e3),r=o=>{o.data.hello==="host"&&(clearTimeout(s),e.removeEventListener("message",r),t(om(e,"guest")))};e.addEventListener("message",r),e.postMessage({from:"guest",hello:"guest"})})}const tt=i=>document.querySelector(i);function jw(i){De("#title",!1),tt("#fatalMsg").textContent=i,De("#fatal",!0)}let Es;try{Es=new ww(tt("#c"))}catch(i){throw console.error(i),jw("이 기기에서 WebGL을 사용할 수 없어요."),i}const kh=new Ew;let je;const Oh=new Aw({joyZone:tt("#joyZone"),joyBase:tt("#joyBase"),joyKnob:tt("#joyKnob"),pad:tt("#pad"),slashPad:tt("#slashPad"),canPress:()=>je.canPress(),onAnyTouch:()=>Xe.init()});je=new Bw({view:Es,hud:kh,input:Oh});Oh.onEscape=()=>je.togglePause();tt("#ver").textContent="v0.1.0-655c5b2";document.querySelectorAll("#diffRow .ui").forEach(i=>i.addEventListener("click",()=>{document.querySelectorAll("#diffRow .ui").forEach(e=>e.classList.remove("sel")),i.classList.add("sel"),je.diff=i.dataset.d,Xe.init(),Xe.muted=!1,Xe.play("ui"),Xe.muted=je.mode==="demo"}));const po=[["보통",1],["느리게",.85],["아주 느리게",.72],["빠르게",1.15]];let ar=0;try{ar=Math.max(0,po.findIndex(i=>String(i[1])===localStorage.getItem("lof.speed")))}catch{}const am=()=>{je.speed=po[ar][1],tt("#speedBtn").textContent="속도: "+po[ar][0]};am();tt("#speedBtn").addEventListener("click",()=>{ar=(ar+1)%po.length,am();try{localStorage.setItem("lof.speed",String(po[ar][1]))}catch{}});const mo=Object.keys(Da);let lr=0;try{lr=Math.max(0,mo.indexOf(localStorage.getItem("lof.stage")))}catch{}const lm=()=>{Es.setStage(mo[lr]),Es.warmup(),tt("#stageBtn").textContent="경기장: "+Da[mo[lr]].name};lm();tt("#stageBtn").addEventListener("click",()=>{lr=(lr+1)%mo.length,lm();try{localStorage.setItem("lof.stage",mo[lr])}catch{}});let Fh="#title",Hi=0;const cm=i=>`<div class="ti-h" style="color:var(--el)">${i.icon} ${i.name} — ${i.style}</div>`+i.combat.traits.map(([e,t])=>`<div class="it"><span class="k">${e}</span><span class="d">${t}</span></div>`).join(""),qw=[["t","탭"],["h","← / →"],["u","↑"],["d","↓"],["l","↙ ↘"],["ft","앞 + 탭"],["fh","앞 + 가로"],["bt","뒤 + 탭"],["bl","뒤 + ↙↘"],["sh","옆 + 가로"],["bd","뒤 + ↓"]],Sf={high:["h","상단"],mid:["m","중단"],low:["l","하단"]},Yw=i=>{const e=Lh(i.id),t=Ga(i.id),n=new Set,s=[],r=(h,u,d="")=>s.push(`<tr><td class="k">${h}</td><td class="n">${u.noHit?"":`<span class="lv ${Sf[u.level][0]}">${Sf[u.level][1]}</span>`}${u.name}</td><td class="d">${u.desc||""}${d}</td></tr>`);for(const[h,u]of qw){const d=e.cmd[h];!d||n.has(d)||(n.add(d),r(u,t[d]))}let o=e.cmd.t,a="탭",l=0;const c=[];for(;t[o]&&t[o].chain&&t[o].chain.h&&l++<5;)o=t[o].chain.h,c.push(t[o].name),a+=" → 가로";return c.length&&r(a,t[o]," ("+c.join(" → ")+")"),`<table class="mvtab">${s.join("")}</table>`},hm=()=>{tt("#movesChars").innerHTML=ln.map(i=>`<div class="mvc" style="--c2:${i.colors.accent}">${cm(i)}${Yw(i)}</div>`).join("")};function Bh(){tt("#cards").innerHTML=ln.map((i,e)=>{const t=n=>"#"+n.map(s=>Math.round(Math.min(1,s)*255).toString(16).padStart(2,"0")).join("");return`<div class="card${e===Hi?" sel":""}" data-i="${e}" style="--c1:${i.colors.gi};--c2:${t(i.trail[1])}">
      ${e===Hi?'<span class="tag2">나</span>':""}<div class="ic">${i.icon}</div><div class="el">${i.element} 원소</div>
      <div class="nm">${i.name}</div><div class="st">${i.style} · ${i.combat.type}</div>
      <div class="diff">난이도 ${"★".repeat(i.combat.diff)}${"☆".repeat(4-i.combat.diff)}</div>
      <div class="stats">${["공격","맷집","속도","기동"].map((n,s)=>`<div class="sr"><span>${n}</span><i style="--v:${i.combat.stats[s]/5}"></i></div>`).join("")}</div>
      <div class="ds">${i.desc}</div></div>`}).join(""),tt("#charInfo").innerHTML=cm(ln[Hi]),document.querySelectorAll("#cards .card").forEach(i=>i.addEventListener("click",()=>{Hi=+i.dataset.i,Xe.muted=!1,Xe.play("ui"),Xe.muted=je.mode==="demo",Bh()}))}tt("#startBtn").addEventListener("click",()=>{Xe.init(),It=null,Bh(),tt("#fightBtn").textContent="대전 시작",tt("#fightBtn").disabled=!1,De("#title",!1),De("#charSel",!0)});tt("#charBack").addEventListener("click",()=>{It&&Vh(),De("#charSel",!1),De("#title",!0)});tt("#fightBtn").addEventListener("click",()=>{if(Xe.init(),It){It.picks[It.role]=ln[Hi].id,It.t.send({k:"pick",ch:ln[Hi].id}),tt("#fightBtn").textContent="상대 기다리는 중…",tt("#fightBtn").disabled=!0,fm();return}const i=ln.filter((e,t)=>t!==Hi);je.chars=[ln[Hi],i[Math.random()*i.length|0]],De("#charSel",!1),je.startMatch()});const um=new URLSearchParams(location.search).get("net")==="local"?"local":"peer";let It=null,Fi=null;const vs=i=>{tt("#olStatus").textContent=i};function $w(){De("#olMenu",!0),De("#olWait",!1),vs(""),tt("#olCode").value=""}tt("#onlineBtn").addEventListener("click",()=>{Xe.init(),$w(),De("#title",!1),De("#online",!0)});tt("#olBack").addEventListener("click",()=>{Fi&&(Fi.cancel(),Fi=null),Vh(),De("#online",!1),De("#title",!0)});tt("#olHost").addEventListener("click",async()=>{vs("방 만드는 중…");try{Fi=await Hw(um),De("#olMenu",!1),De("#olWait",!0),tt("#olRoom").textContent=Fi.code,vs("친구를 기다리는 중…");const i=Fi,e=await i.connected;if(Fi!==i)return;Fi=null,dm(e,0)}catch(i){vs(i.message),De("#olMenu",!0),De("#olWait",!1)}});tt("#olJoin").addEventListener("click",async()=>{const i=tt("#olCode").value.trim();if(!/^\d{4}$/.test(i)){vs("방 번호 4자리를 입력하세요.");return}vs("연결 중…");try{dm(await Gw(i,um),1)}catch(e){vs(e.message)}});function dm(i,e){It={t:i,role:e,picks:[null,null]},i.onMessage(t=>Kw(t)),i.onClose(()=>Zw()),i.send({k:"hello",v:"0.1.0-655c5b2"}),Xe.play("bell"),De("#online",!1),Bh(),tt("#fightBtn").textContent="준비 완료",tt("#fightBtn").disabled=!1,De("#charSel",!0)}function Kw(i){je.onNet(i)||It&&(i.k==="hello"&&i.v!=="0.1.0-655c5b2"&&kh.banner("버전이 달라요 — 둘 다 새로고침","ko"),i.k==="pick"&&(It.picks[1-It.role]=i.ch,fm()),i.k==="start"&&It.role===1&&(De("#charSel",!1),De("#result",!1),je.startOnline({me:1,seed:i.seed,chars:i.chars.map(e=>vp[e]),transport:It.t})))}function fm(){if(!It||It.role!==0||!It.picks[0]||!It.picks[1])return;const i=Math.random()*2**31|0,e=It.picks.map(t=>vp[t]);It.t.send({k:"start",seed:i,chars:It.picks}),De("#charSel",!1),je.startOnline({me:0,seed:i,chars:e,transport:It.t})}function Vh(){if(It){try{It.t.close()}catch{}It=null}je.net=null,je.ls=null}function Zw(){It&&(It=null,je.net=null,(je.mode==="online"||je.mode==="result"||!tt("#charSel").classList.contains("hide"))&&(kh.banner("상대와 연결이 끊겼어요","ko"),setTimeout(()=>{De("#charSel",!1),De("#result",!1),je.ls=null,je.startDemo()},1800)))}tt("#movesBtn").addEventListener("click",()=>{hm(),Fh="#title",De("#title",!1),De("#moves",!0)});tt("#movesClose").addEventListener("click",()=>{De("#moves",!1),De(Fh,!0)});tt("#pauseBtn").addEventListener("click",()=>je.togglePause());tt("#resumeBtn").addEventListener("click",()=>je.togglePause());tt("#pMoves").addEventListener("click",()=>{hm(),Fh="#pause",De("#pause",!1),De("#moves",!0)});tt("#pQuit").addEventListener("click",()=>{De("#pause",!1),je.paused=!1,je.startDemo()});tt("#againBtn").addEventListener("click",()=>{if(je.ls&&It){je.rematch[je.me]=!0,It.t.send({k:"rematch"}),tt("#againBtn").textContent="상대 기다리는 중…",je.tryRematch();return}De("#result",!1),je.startMatch()});tt("#rQuit").addEventListener("click",()=>{De("#result",!1),Vh(),je.startDemo()});document.addEventListener("visibilitychange",()=>{document.hidden&&(je.mode==="match"||je.mode==="practice")&&!je.paused&&je.togglePause()});document.addEventListener("gesturestart",i=>i.preventDefault());document.addEventListener("dblclick",i=>i.preventDefault());function Jw(){tt("#orientNote").classList.toggle("hide",innerWidth>innerHeight)}function zh(){Es.resize(),Jw(),je.mode!=="demo"&&Oh.joyHome()}addEventListener("resize",zh);addEventListener("orientationchange",()=>setTimeout(zh,200));zh();const xr={};for(const i of["frame","phase","phaseT","round","wins","timer","hitstop","winner"])Object.defineProperty(xr,i,{get:()=>je.sim[i]});for(const i of["mode","diff","paused","freeze","auto","stats","t","slow"])Object.defineProperty(xr,i,{get:()=>je[i],set:e=>{je[i]=e}});Object.defineProperty(xr,"f",{get:()=>je.sim.f});Object.defineProperty(xr,"sim",{get:()=>je.sim});Object.defineProperty(xr,"ctrl",{get:()=>je.ctrl});window.__G=xr;window.__game=je;Object.defineProperty(window,"__F",{get:()=>je.sim.f,configurable:!0});window.__AIL=Kp;window.__MV=qi;window.__step=i=>{for(let e=0;e<i;e++)je.step()};const ah=new URLSearchParams(location.search);ah.has("auto")?(je.auto=!0,je.diff=ah.get("auto")||"normal",je.startMatch()):je.startDemo();let eo=null,Kl=0,ca=0;ah.has("fps")&&(eo=document.createElement("div"),eo.style.cssText="position:fixed;left:50%;top:calc(env(safe-area-inset-top) + 80px);transform:translateX(-50%);z-index:20;font:12px monospace;background:#000a;padding:2px 6px;border-radius:4px;pointer-events:none",document.body.appendChild(eo));let bf=performance.now();function pm(i){requestAnimationFrame(pm);let e=(i-bf)/1e3;if(bf=i,e>.1&&(e=.1),e<0&&(e=0),je.frame(e),eo&&(Kl++,ca+=e,ca>=.5)){const t=Es.renderer.info.render;eo.textContent=`${Math.round(Kl/ca)}fps · 해상도x${Es.dpr} · draw ${t.calls}`,Kl=0,ca=0}}requestAnimationFrame(pm);
