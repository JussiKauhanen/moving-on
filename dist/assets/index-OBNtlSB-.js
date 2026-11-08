(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Sa="180",bh=0,sl=1,wh=2,Mc=1,yc=2,Pn=3,qn=0,Pt=1,Nt=2,Gn=0,Bi=1,ys=2,rl=3,ol=4,Ah=5,ai=100,Rh=101,Ch=102,Ph=103,Lh=104,Dh=200,Ih=201,Uh=202,Nh=203,wo=204,Ao=205,Fh=206,Oh=207,Bh=208,zh=209,kh=210,Vh=211,Hh=212,Gh=213,Wh=214,Ro=0,Co=1,Po=2,Vi=3,Lo=4,Do=5,Io=6,Uo=7,Ea=0,Xh=1,qh=2,Wn=0,Yh=1,$h=2,Zh=3,Sc=4,Jh=5,Kh=6,jh=7,Ec=300,Hi=301,Gi=302,No=303,Fo=304,Lr=306,Oo=1e3,ci=1001,Bo=1002,Lt=1003,Qh=1004,zs=1005,xn=1006,Hr=1007,hi=1008,Sn=1009,Tc=1010,bc=1011,Ss=1012,Ta=1013,fi=1014,Mn=1015,$i=1016,ba=1017,wa=1018,Es=1020,wc=35902,Ac=35899,Rc=1021,Cc=1022,rn=1023,Ts=1026,bs=1027,Aa=1028,Ra=1029,Pc=1030,Ca=1031,Pa=1033,mr=33776,gr=33777,vr=33778,_r=33779,zo=35840,ko=35841,Vo=35842,Ho=35843,Go=36196,Wo=37492,Xo=37496,qo=37808,Yo=37809,$o=37810,Zo=37811,Jo=37812,Ko=37813,jo=37814,Qo=37815,ea=37816,ta=37817,na=37818,ia=37819,sa=37820,ra=37821,oa=36492,aa=36494,la=36495,ca=36283,ha=36284,ua=36285,da=36286,eu=3200,Lc=3201,Dr=0,tu=1,kn="",Gt="srgb",Wi="srgb-linear",Sr="linear",at="srgb",xi=7680,al=519,nu=512,iu=513,su=514,Dc=515,ru=516,ou=517,au=518,lu=519,ll=35044,La=35048,cl="300 es",yn=2e3,Er=2001;class Zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hl=1234567;const ps=Math.PI/180,Xi=180/Math.PI;function gi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function Je(i,e,t){return Math.max(e,Math.min(t,i))}function Da(i,e){return(i%e+e)%e}function cu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function hu(i,e,t){return i!==e?(t-i)/(e-i):0}function ms(i,e,t){return(1-t)*i+t*e}function uu(i,e,t,n){return ms(i,e,1-Math.exp(-t*n))}function du(i,e=1){return e-Math.abs(Da(i,e*2)-e)}function fu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function pu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function mu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function gu(i,e){return i+Math.random()*(e-i)}function vu(i){return i*(.5-Math.random())}function _u(i){i!==void 0&&(hl=i);let e=hl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xu(i){return i*ps}function Mu(i){return i*Xi}function yu(i){return(i&i-1)===0&&i!==0}function Su(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Eu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tu(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ui(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const pn={DEG2RAD:ps,RAD2DEG:Xi,generateUUID:gi,clamp:Je,euclideanModulo:Da,mapLinear:cu,inverseLerp:hu,lerp:ms,damp:uu,pingpong:du,smoothstep:fu,smootherstep:pu,randInt:mu,randFloat:gu,randFloatSpread:vu,seededRandom:_u,degToRad:xu,radToDeg:Mu,isPowerOfTwo:yu,ceilPowerOfTwo:Su,floorPowerOfTwo:Eu,setQuaternionFromProperEuler:Tu,normalize:Bt,denormalize:Ui};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ns{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*x,T=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const C=Math.sqrt(S),R=Math.atan2(C,p*T);m=Math.sin(m*R)/C,a=Math.sin(a*R)/C}const v=a*T;if(l=l*m+d*v,c=c*m+f*v,h=h*m+g*v,u=u*m+x*v,m===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ul.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ul.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gr.copy(this).projectOnVector(e),this.sub(Gr)}reflect(e){return this.sub(Gr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gr=new U,ul=new Ns;class Ye{constructor(e,t,n,s,r,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],T=s[1],S=s[4],v=s[7],C=s[2],R=s[5],P=s[8];return r[0]=o*x+a*T+l*C,r[3]=o*m+a*S+l*R,r[6]=o*p+a*v+l*P,r[1]=c*x+h*T+u*C,r[4]=c*m+h*S+u*R,r[7]=c*p+h*v+u*P,r[2]=d*x+f*T+g*C,r[5]=d*m+f*S+g*R,r[8]=d*p+f*v+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wr.makeScale(e,t)),this}rotate(e){return this.premultiply(Wr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wr=new Ye;function Ic(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bu(){const i=Tr("canvas");return i.style.display="block",i}const dl={};function ws(i){i in dl||(dl[i]=!0,console.warn(i))}function wu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const fl=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pl=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Au(){const i={enabled:!0,workingColorSpace:Wi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===at&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===kn?Sr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ws("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ws("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wi]:{primaries:e,whitePoint:n,transfer:Sr,toXYZ:fl,fromXYZ:pl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:at,toXYZ:fl,fromXYZ:pl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}const tt=Au();function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Mi;class Ru{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mi===void 0&&(Mi=Tr("canvas")),Mi.width=e.width,Mi.height=e.height;const s=Mi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Mi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Tr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=In(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(In(t[n]/255)*255):t[n]=In(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cu=0;class Ia{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Xr(s[o].image)):r.push(Xr(s[o]))}else r=Xr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Xr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ru.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pu=0;const qr=new U;class Ft extends Zi{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=ci,s=ci,r=xn,o=hi,a=rn,l=Sn,c=Ft.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=gi(),this.name="",this.source=new Ia(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qr).x}get height(){return this.source.getSize(qr).y}get depth(){return this.source.getSize(qr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ec)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oo:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case Bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oo:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case Bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Ec;Ft.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,s=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(f+1)/2,C=(p+1)/2,R=(h+d)/4,P=(u+x)/4,w=(g+m)/4;return S>v&&S>C?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=R/n,r=P/n):v>C?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=R/s,r=w/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=P/r,s=w/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-x)/T,this.z=(d-h)/T,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lu extends Zi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Ft(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ia(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends Lu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Uc extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Du extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(e.matrixWorld),this.union(ks)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(is),Vs.subVectors(this.max,is),yi.subVectors(e.a,is),Si.subVectors(e.b,is),Ei.subVectors(e.c,is),Un.subVectors(Si,yi),Nn.subVectors(Ei,Si),Kn.subVectors(yi,Ei);let t=[0,-Un.z,Un.y,0,-Nn.z,Nn.y,0,-Kn.z,Kn.y,Un.z,0,-Un.x,Nn.z,0,-Nn.x,Kn.z,0,-Kn.x,-Un.y,Un.x,0,-Nn.y,Nn.x,0,-Kn.y,Kn.x,0];return!Yr(t,yi,Si,Ei,Vs)||(t=[1,0,0,0,1,0,0,0,1],!Yr(t,yi,Si,Ei,Vs))?!1:(Hs.crossVectors(Un,Nn),t=[Hs.x,Hs.y,Hs.z],Yr(t,yi,Si,Ei,Vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bn=[new U,new U,new U,new U,new U,new U,new U,new U],cn=new U,ks=new vi,yi=new U,Si=new U,Ei=new U,Un=new U,Nn=new U,Kn=new U,is=new U,Vs=new U,Hs=new U,jn=new U;function Yr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){jn.fromArray(i,r);const a=s.x*Math.abs(jn.x)+s.y*Math.abs(jn.y)+s.z*Math.abs(jn.z),l=e.dot(jn),c=t.dot(jn),h=n.dot(jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Iu=new vi,ss=new U,$r=new U;class Ji{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Iu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ss.subVectors(e,this.center);const t=ss.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ss,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($r.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ss.copy(e.center).add($r)),this.expandByPoint(ss.copy(e.center).sub($r))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const wn=new U,Zr=new U,Gs=new U,Fn=new U,Jr=new U,Ws=new U,Kr=new U;class Nc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Zr.copy(e).add(t).multiplyScalar(.5),Gs.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(Zr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Gs),a=Fn.dot(this.direction),l=-Fn.dot(Gs),c=Fn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Zr).addScaledVector(Gs,d),f}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,n,s,r){Jr.subVectors(t,e),Ws.subVectors(n,e),Kr.crossVectors(Jr,Ws);let o=this.direction.dot(Kr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fn.subVectors(this.origin,e);const l=a*this.direction.dot(Ws.crossVectors(Fn,Ws));if(l<0)return null;const c=a*this.direction.dot(Jr.cross(Fn));if(c<0||l+c>o)return null;const h=-a*Fn.dot(Kr);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,g,x,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,g,x,m)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ti.setFromMatrixColumn(e,0).length(),r=1/Ti.setFromMatrixColumn(e,1).length(),o=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uu,e,Nu)}lookAt(e,t,n){const s=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),On.crossVectors(n,Jt),On.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),On.crossVectors(n,Jt)),On.normalize(),Xs.crossVectors(Jt,On),s[0]=On.x,s[4]=Xs.x,s[8]=Jt.x,s[1]=On.y,s[5]=Xs.y,s[9]=Jt.y,s[2]=On.z,s[6]=Xs.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],T=n[3],S=n[7],v=n[11],C=n[15],R=s[0],P=s[4],w=s[8],y=s[12],M=s[1],L=s[5],b=s[9],I=s[13],N=s[2],B=s[6],z=s[10],X=s[14],F=s[3],ne=s[7],he=s[11],xe=s[15];return r[0]=o*R+a*M+l*N+c*F,r[4]=o*P+a*L+l*B+c*ne,r[8]=o*w+a*b+l*z+c*he,r[12]=o*y+a*I+l*X+c*xe,r[1]=h*R+u*M+d*N+f*F,r[5]=h*P+u*L+d*B+f*ne,r[9]=h*w+u*b+d*z+f*he,r[13]=h*y+u*I+d*X+f*xe,r[2]=g*R+x*M+m*N+p*F,r[6]=g*P+x*L+m*B+p*ne,r[10]=g*w+x*b+m*z+p*he,r[14]=g*y+x*I+m*X+p*xe,r[3]=T*R+S*M+v*N+C*F,r[7]=T*P+S*L+v*B+C*ne,r[11]=T*w+S*b+v*z+C*he,r[15]=T*y+S*I+v*X+C*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],T=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,S=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,v=h*x*c-g*u*c+g*a*f-o*x*f-h*a*p+o*u*p,C=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,R=t*T+n*S+s*v+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=T*P,e[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*P,e[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*p+n*l*p)*P,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*P,e[4]=S*P,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*P,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*P,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*P,e[8]=v*P,e[9]=(g*u*r-h*x*r-g*n*f+t*x*f+h*n*p-t*u*p)*P,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*p+t*a*p)*P,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*P,e[12]=C*P,e[13]=(h*x*s-g*u*s+g*n*d-t*x*d-h*n*m+t*u*m)*P,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*m-t*a*m)*P,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*P,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,T=l*c,S=l*h,v=l*u,C=n.x,R=n.y,P=n.z;return s[0]=(1-(x+p))*C,s[1]=(f+v)*C,s[2]=(g-S)*C,s[3]=0,s[4]=(f-v)*R,s[5]=(1-(d+p))*R,s[6]=(m+T)*R,s[7]=0,s[8]=(g+S)*P,s[9]=(m-T)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ti.set(s[0],s[1],s[2]).length();const o=Ti.set(s[4],s[5],s[6]).length(),a=Ti.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],hn.copy(this);const c=1/r,h=1/o,u=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,t.setFromRotationMatrix(hn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=yn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===yn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Er)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=yn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===yn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Er)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ti=new U,hn=new ht,Uu=new U(0,0,0),Nu=new U(1,1,1),On=new U,Xs=new U,Jt=new U,ml=new ht,gl=new Ns;class gn{constructor(e=0,t=0,n=0,s=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ml.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ml,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gl.setFromEuler(this),this.setFromQuaternion(gl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class Fc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fu=0;const vl=new U,bi=new Ns,An=new ht,qs=new U,rs=new U,Ou=new U,Bu=new Ns,_l=new U(1,0,0),xl=new U(0,1,0),Ml=new U(0,0,1),yl={type:"added"},zu={type:"removed"},wi={type:"childadded",child:null},jr={type:"childremoved",child:null};class gt extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new U,t=new gn,n=new Ns,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ye}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.multiply(bi),this}rotateOnWorldAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.premultiply(bi),this}rotateX(e){return this.rotateOnAxis(_l,e)}rotateY(e){return this.rotateOnAxis(xl,e)}rotateZ(e){return this.rotateOnAxis(Ml,e)}translateOnAxis(e,t){return vl.copy(e).applyQuaternion(this.quaternion),this.position.add(vl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_l,e)}translateY(e){return this.translateOnAxis(xl,e)}translateZ(e){return this.translateOnAxis(Ml,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qs.copy(e):qs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(rs,qs,this.up):An.lookAt(qs,rs,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),bi.setFromRotationMatrix(An),this.quaternion.premultiply(bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yl),wi.child=e,this.dispatchEvent(wi),wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zu),jr.child=e,this.dispatchEvent(jr),jr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yl),wi.child=e,this.dispatchEvent(wi),wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,e,Ou),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,Bu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}gt.DEFAULT_UP=new U(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new U,Rn=new U,Qr=new U,Cn=new U,Ai=new U,Ri=new U,Sl=new U,eo=new U,to=new U,no=new U,io=new rt,so=new rt,ro=new rt;class dn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),un.subVectors(e,t),s.cross(un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){un.subVectors(s,t),Rn.subVectors(n,t),Qr.subVectors(e,t);const o=un.dot(un),a=un.dot(Rn),l=un.dot(Qr),c=Rn.dot(Rn),h=Rn.dot(Qr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(o,Cn.y),l.addScaledVector(a,Cn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return io.setScalar(0),so.setScalar(0),ro.setScalar(0),io.fromBufferAttribute(e,t),so.fromBufferAttribute(e,n),ro.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(io,r.x),o.addScaledVector(so,r.y),o.addScaledVector(ro,r.z),o}static isFrontFacing(e,t,n,s){return un.subVectors(n,t),Rn.subVectors(e,t),un.cross(Rn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),un.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Ai.subVectors(s,n),Ri.subVectors(r,n),eo.subVectors(e,n);const l=Ai.dot(eo),c=Ri.dot(eo);if(l<=0&&c<=0)return t.copy(n);to.subVectors(e,s);const h=Ai.dot(to),u=Ri.dot(to);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ai,o);no.subVectors(e,r);const f=Ai.dot(no),g=Ri.dot(no);if(g>=0&&f<=g)return t.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ri,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Sl.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Sl,a);const p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(Ai,o).addScaledVector(Ri,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function oo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ae{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=Da(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=oo(o,r,e+1/3),this.g=oo(o,r,e),this.b=oo(o,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=Oc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return tt.workingToColorSpace(Ut.copy(this),e),Math.round(Je(Ut.r*255,0,255))*65536+Math.round(Je(Ut.g*255,0,255))*256+Math.round(Je(Ut.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Ut.copy(this),t);const n=Ut.r,s=Ut.g,r=Ut.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Gt){tt.workingToColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,s=Ut.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(Ys);const n=ms(Bn.h,Ys.h,t),s=ms(Bn.s,Ys.s,t),r=ms(Bn.l,Ys.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Ae;Ae.NAMES=Oc;let ku=0;class $n extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=Bi,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wo,this.blendDst=Ao,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ao&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wt extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new U,$s=new ue;let Vu=0;class Qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ll,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$s.fromBufferAttribute(this,t),$s.applyMatrix3(e),this.setXY(t,$s.x,$s.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ll&&(e.usage=this.usage),e}}class Bc extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class zc extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class We extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Hu=0;const nn=new ht,ao=new gt,Ci=new U,Kt=new vi,os=new vi,Rt=new U;class vt extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ic(e)?zc:Bc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,n){return nn.makeTranslation(e,t,n),this.applyMatrix4(nn),this}scale(e,t,n){return nn.makeScale(e,t,n),this.applyMatrix4(nn),this}lookAt(e){return ao.lookAt(e),ao.updateMatrix(),this.applyMatrix4(ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new We(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];os.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(Kt.min,os.min),Kt.expandByPoint(Rt),Rt.addVectors(Kt.max,os.max),Kt.expandByPoint(Rt)):(Kt.expandByPoint(os.min),Kt.expandByPoint(os.max))}Kt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Rt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Rt.fromBufferAttribute(a,c),l&&(Ci.fromBufferAttribute(e,c),Rt.add(Ci)),s=Math.max(s,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<n.count;w++)a[w]=new U,l[w]=new U;const c=new U,h=new U,u=new U,d=new ue,f=new ue,g=new ue,x=new U,m=new U;function p(w,y,M){c.fromBufferAttribute(n,w),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,w),f.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),a[w].add(x),a[y].add(x),a[M].add(x),l[w].add(m),l[y].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let w=0,y=T.length;w<y;++w){const M=T[w],L=M.start,b=M.count;for(let I=L,N=L+b;I<N;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const S=new U,v=new U,C=new U,R=new U;function P(w){C.fromBufferAttribute(s,w),R.copy(C);const y=a[w];S.copy(y),S.sub(C.multiplyScalar(C.dot(y))).normalize(),v.crossVectors(R,y);const L=v.dot(l[w])<0?-1:1;o.setXYZW(w,S.x,S.y,S.z,L)}for(let w=0,y=T.length;w<y;++w){const M=T[w],L=M.start,b=M.count;for(let I=L,N=L+b;I<N;I+=3)P(e.getX(I+0)),P(e.getX(I+1)),P(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Qt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const El=new ht,Qn=new Nc,Zs=new Ji,Tl=new U,Js=new U,Ks=new U,js=new U,lo=new U,Qs=new U,bl=new U,er=new U;class Qe extends gt{constructor(e=new vt,t=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(lo.fromBufferAttribute(u,e),o?Qs.addScaledVector(lo,h):Qs.addScaledVector(lo.sub(t),h))}t.add(Qs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(r),Qn.copy(e.ray).recast(e.near),!(Zs.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Zs,Tl)===null||Qn.origin.distanceToSquared(Tl)>(e.far-e.near)**2))&&(El.copy(r).invert(),Qn.copy(e.ray).applyMatrix4(El),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=T,C=S;v<C;v+=3){const R=a.getX(v),P=a.getX(v+1),w=a.getX(v+2);s=tr(this,p,e,n,c,h,u,R,P,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const T=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);s=tr(this,o,e,n,c,h,u,T,S,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=T,C=S;v<C;v+=3){const R=v,P=v+1,w=v+2;s=tr(this,p,e,n,c,h,u,R,P,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const T=m,S=m+1,v=m+2;s=tr(this,o,e,n,c,h,u,T,S,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Gu(i,e,t,n,s,r,o,a){let l;if(e.side===Pt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===qn,a),l===null)return null;er.copy(a),er.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(er);return c<t.near||c>t.far?null:{distance:c,point:er.clone(),object:i}}function tr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Js),i.getVertexPosition(l,Ks),i.getVertexPosition(c,js);const h=Gu(i,e,t,n,Js,Ks,js,bl);if(h){const u=new U;dn.getBarycoord(bl,Js,Ks,js,u),s&&(h.uv=dn.getInterpolatedAttribute(s,a,l,c,u,new ue)),r&&(h.uv1=dn.getInterpolatedAttribute(r,a,l,c,u,new ue)),o&&(h.normal=dn.getInterpolatedAttribute(o,a,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new U,materialIndex:0};dn.getNormal(Js,Ks,js,d.normal),h.face=d,h.barycoord=u}return h}class Ki extends vt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(u,2));function g(x,m,p,T,S,v,C,R,P,w,y){const M=v/P,L=C/w,b=v/2,I=C/2,N=R/2,B=P+1,z=w+1;let X=0,F=0;const ne=new U;for(let he=0;he<z;he++){const xe=he*L-I;for(let Ue=0;Ue<B;Ue++){const Xe=Ue*M-b;ne[x]=Xe*T,ne[m]=xe*S,ne[p]=N,c.push(ne.x,ne.y,ne.z),ne[x]=0,ne[m]=0,ne[p]=R>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(Ue/P),u.push(1-he/w),X+=1}}for(let he=0;he<w;he++)for(let xe=0;xe<P;xe++){const Ue=d+xe+B*he,Xe=d+xe+B*(he+1),nt=d+(xe+1)+B*(he+1),Ke=d+(xe+1)+B*he;l.push(Ue,Xe,Ke),l.push(Xe,nt,Ke),F+=6}a.addGroup(f,F,y),f+=F,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function zt(i){const e={};for(let t=0;t<i.length;t++){const n=qi(i[t]);for(const s in n)e[s]=n[s]}return e}function Wu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function kc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Xu={clone:qi,merge:zt};var qu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qu,this.fragmentShader=Yu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qi(e.uniforms),this.uniformsGroups=Wu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Vc extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new U,wl=new ue,Al=new ue;class kt extends Vc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xi*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,wl,Al),t.subVectors(Al,wl)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ps*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Pi=-90,Li=1;class $u extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new kt(Pi,Li,e,t);s.layers=this.layers,this.add(s);const r=new kt(Pi,Li,e,t);r.layers=this.layers,this.add(r);const o=new kt(Pi,Li,e,t);o.layers=this.layers,this.add(o);const a=new kt(Pi,Li,e,t);a.layers=this.layers,this.add(a);const l=new kt(Pi,Li,e,t);l.layers=this.layers,this.add(l);const c=new kt(Pi,Li,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Hc extends Ft{constructor(e=[],t=Hi,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zu extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Hc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ki(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:Gn});r.uniforms.tEquirect.value=t;const o=new Qe(s,r),a=t.minFilter;return t.minFilter===hi&&(t.minFilter=xn),new $u(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class pt extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ju={type:"move"};class co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ju)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ir{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ae(e),this.near=t,this.far=n}clone(){return new Ir(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ur extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Gc extends Ft{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Lt,h=Lt,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rl extends Qt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Di=new ht,Cl=new ht,nr=[],Pl=new vi,Ku=new ht,as=new Qe,ls=new Ji;class Vn extends Qe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ku)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),Pl.copy(e.boundingBox).applyMatrix4(Di),this.boundingBox.union(Pl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),ls.copy(e.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(ls)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(as.geometry=this.geometry,as.material=this.material,as.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ls.copy(this.boundingSphere),ls.applyMatrix4(n),e.ray.intersectsSphere(ls)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Di),Cl.multiplyMatrices(n,Di),as.matrixWorld=Cl,as.raycast(e,nr);for(let o=0,a=nr.length;o<a;o++){const l=nr[o];l.instanceId=r,l.object=this,t.push(l)}nr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gc(new Float32Array(s*this.count),s,this.count,Aa,Mn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ho=new U,ju=new U,Qu=new Ye;class ri{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ho.subVectors(n,t).cross(ju.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ho),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qu.getNormalMatrix(e),s=this.coplanarPoint(ho).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new Ji,ed=new ue(.5,.5),ir=new U;class Ua{constructor(e=new ri,t=new ri,n=new ri,s=new ri,r=new ri,o=new ri){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],T=r[12],S=r[13],v=r[14],C=r[15];if(s[0].setComponents(c-o,f-h,p-g,C-T).normalize(),s[1].setComponents(c+o,f+h,p+g,C+T).normalize(),s[2].setComponents(c+a,f+u,p+x,C+S).normalize(),s[3].setComponents(c-a,f-u,p-x,C-S).normalize(),n)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,f-d,p-m,C-v).normalize();else if(s[4].setComponents(c-l,f-d,p-m,C-v).normalize(),t===yn)s[5].setComponents(c+l,f+d,p+m,C+v).normalize();else if(t===Er)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){ei.center.set(0,0,0);const t=ed.distanceTo(e.center);return ei.radius=.7071067811865476+t,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ir.x=s.normal.x>0?e.max.x:e.min.x,ir.y=s.normal.y>0?e.max.y:e.min.y,ir.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wc extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ll=new ht,fa=new Nc,sr=new Ji,rr=new U;class td extends gt{constructor(e=new vt,t=new Wc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(s),sr.radius+=r,e.ray.intersectsSphere(sr)===!1)return;Ll.copy(s).invert(),fa.copy(e.ray).applyMatrix4(Ll);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){const m=c.getX(g);rr.fromBufferAttribute(u,m),Dl(rr,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)rr.fromBufferAttribute(u,g),Dl(rr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Dl(i,e,t,n,s,r,o){const a=fa.distanceSqToPoint(i);if(a<t){const l=new U;fa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Xc extends Ft{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Na extends Ft{constructor(e,t,n=fi,s,r,o,a=Lt,l=Lt,c,h=Ts,u=1){if(h!==Ts&&h!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ia(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qc extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class gs extends vt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new U,h=new ue;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new We(o,3)),this.setAttribute("normal",new We(a,3)),this.setAttribute("uv",new We(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Xn extends vt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const x=[],m=n/2;let p=0;T(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new We(u,3)),this.setAttribute("normal",new We(d,3)),this.setAttribute("uv",new We(f,2));function T(){const v=new U,C=new U;let R=0;const P=(t-e)/n;for(let w=0;w<=r;w++){const y=[],M=w/r,L=M*(t-e)+e;for(let b=0;b<=s;b++){const I=b/s,N=I*l+a,B=Math.sin(N),z=Math.cos(N);C.x=L*B,C.y=-M*n+m,C.z=L*z,u.push(C.x,C.y,C.z),v.set(B,P,z).normalize(),d.push(v.x,v.y,v.z),f.push(I,1-M),y.push(g++)}x.push(y)}for(let w=0;w<s;w++)for(let y=0;y<r;y++){const M=x[y][w],L=x[y+1][w],b=x[y+1][w+1],I=x[y][w+1];(e>0||y!==0)&&(h.push(M,L,I),R+=3),(t>0||y!==r-1)&&(h.push(L,b,I),R+=3)}c.addGroup(p,R,0),p+=R}function S(v){const C=g,R=new ue,P=new U;let w=0;const y=v===!0?e:t,M=v===!0?1:-1;for(let b=1;b<=s;b++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const L=g;for(let b=0;b<=s;b++){const N=b/s*l+a,B=Math.cos(N),z=Math.sin(N);P.x=y*z,P.y=m*M,P.z=y*B,u.push(P.x,P.y,P.z),d.push(0,M,0),R.x=B*.5+.5,R.y=z*.5*M+.5,f.push(R.x,R.y),g++}for(let b=0;b<s;b++){const I=C+b,N=L+b;v===!0?h.push(N,N+1,I):h.push(N+1,N,I),w+=3}c.addGroup(p,w,v===!0?1:2),p+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vs extends Xn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new vs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fa extends vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new We(r,3)),this.setAttribute("normal",new We(r.slice(),3)),this.setAttribute("uv",new We(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(T){const S=new U,v=new U,C=new U;for(let R=0;R<t.length;R+=3)f(t[R+0],S),f(t[R+1],v),f(t[R+2],C),l(S,v,C,T)}function l(T,S,v,C){const R=C+1,P=[];for(let w=0;w<=R;w++){P[w]=[];const y=T.clone().lerp(v,w/R),M=S.clone().lerp(v,w/R),L=R-w;for(let b=0;b<=L;b++)b===0&&w===R?P[w][b]=y:P[w][b]=y.clone().lerp(M,b/L)}for(let w=0;w<R;w++)for(let y=0;y<2*(R-w)-1;y++){const M=Math.floor(y/2);y%2===0?(d(P[w][M+1]),d(P[w+1][M]),d(P[w][M])):(d(P[w][M+1]),d(P[w+1][M+1]),d(P[w+1][M]))}}function c(T){const S=new U;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(T),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function h(){const T=new U;for(let S=0;S<r.length;S+=3){T.x=r[S+0],T.y=r[S+1],T.z=r[S+2];const v=m(T)/2/Math.PI+.5,C=p(T)/Math.PI+.5;o.push(v,1-C)}g(),u()}function u(){for(let T=0;T<o.length;T+=6){const S=o[T+0],v=o[T+2],C=o[T+4],R=Math.max(S,v,C),P=Math.min(S,v,C);R>.9&&P<.1&&(S<.2&&(o[T+0]+=1),v<.2&&(o[T+2]+=1),C<.2&&(o[T+4]+=1))}}function d(T){r.push(T.x,T.y,T.z)}function f(T,S){const v=T*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function g(){const T=new U,S=new U,v=new U,C=new U,R=new ue,P=new ue,w=new ue;for(let y=0,M=0;y<r.length;y+=9,M+=6){T.set(r[y+0],r[y+1],r[y+2]),S.set(r[y+3],r[y+4],r[y+5]),v.set(r[y+6],r[y+7],r[y+8]),R.set(o[M+0],o[M+1]),P.set(o[M+2],o[M+3]),w.set(o[M+4],o[M+5]),C.copy(T).add(S).add(v).divideScalar(3);const L=m(C);x(R,M+0,T,L),x(P,M+2,S,L),x(w,M+4,v,L)}}function x(T,S,v,C){C<0&&T.x===1&&(o[S]=T.x-1),v.x===0&&v.z===0&&(o[S]=C/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function p(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.vertices,e.indices,e.radius,e.details)}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ue:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new U,s=[],r=[],o=[],a=new U,l=new ht;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Je(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Je(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Oa extends En{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ue){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class nd extends Oa{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ba(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const or=new U,uo=new Ba,fo=new Ba,po=new Ba;class Yc extends En{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(or.subVectors(s[0],s[1]).add(s[0]),c=or);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(or.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=or),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),uo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),fo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),po.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(uo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),fo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),po.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(uo.calc(l),fo.calc(l),po.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Il(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function id(i,e){const t=1-i;return t*t*e}function sd(i,e){return 2*(1-i)*i*e}function rd(i,e){return i*i*e}function _s(i,e,t,n){return id(i,e)+sd(i,t)+rd(i,n)}function od(i,e){const t=1-i;return t*t*t*e}function ad(i,e){const t=1-i;return 3*t*t*i*e}function ld(i,e){return 3*(1-i)*i*i*e}function cd(i,e){return i*i*i*e}function xs(i,e,t,n,s){return od(i,e)+ad(i,t)+ld(i,n)+cd(i,s)}class $c extends En{constructor(e=new ue,t=new ue,n=new ue,s=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ue){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xs(e,s.x,r.x,o.x,a.x),xs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hd extends En{constructor(e=new U,t=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new U){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xs(e,s.x,r.x,o.x,a.x),xs(e,s.y,r.y,o.y,a.y),xs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zc extends En{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ud extends En{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jc extends En{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(_s(e,s.x,r.x,o.x),_s(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kc extends En{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(_s(e,s.x,r.x,o.x),_s(e,s.y,r.y,o.y),_s(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jc extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Il(a,l.x,c.x,h.x,u.x),Il(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ue().fromArray(s))}return this}}var br=Object.freeze({__proto__:null,ArcCurve:nd,CatmullRomCurve3:Yc,CubicBezierCurve:$c,CubicBezierCurve3:hd,EllipseCurve:Oa,LineCurve:Zc,LineCurve3:ud,QuadraticBezierCurve:Jc,QuadraticBezierCurve3:Kc,SplineCurve:jc});class dd extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new br[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new br[s.type]().fromJSON(s))}return this}}class pa extends dd{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Zc(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Jc(this.currentPoint.clone(),new ue(e,t),new ue(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new $c(this.currentPoint.clone(),new ue(e,t),new ue(n,s),new ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new jc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new Oa(e,t,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Fs extends pa{constructor(e){super(e),this.uuid=gi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new pa().fromJSON(s))}return this}}function fd(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Qc(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=_d(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<s;d+=t){const f=i[d],g=i[d+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return As(r,o,t,a,l,c,0),o}function Qc(i,e,t,n,s){let r;if(s===Cd(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Ul(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Ul(o/n|0,i[o],i[o+1],r);return r&&Yi(r,r.next)&&(Cs(r),r=r.next),r}function pi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Yi(t,t.next)||yt(t.prev,t,t.next)===0)){if(Cs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function As(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Ed(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?md(i,n,s,r):pd(i)){e.push(l.i,i.i,c.i),Cs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=gd(pi(i),e),As(i,e,t,n,s,r,2)):o===2&&vd(i,e,t,n,s,r):As(pi(i),e,t,n,s,r,1);break}}}function pd(i){const e=i.prev,t=i,n=i.next;if(yt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ds(s,a,r,l,o,c,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function md(i,e,t,n){const s=i.prev,r=i,o=i.next;if(yt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(h,u,d),x=Math.max(a,l,c),m=Math.max(h,u,d),p=ma(f,g,e,t,n),T=ma(x,m,e,t,n);let S=i.prevZ,v=i.nextZ;for(;S&&S.z>=p&&v&&v.z<=T;){if(S.x>=f&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&ds(a,h,l,u,c,d,S.x,S.y)&&yt(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ds(a,h,l,u,c,d,v.x,v.y)&&yt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&ds(a,h,l,u,c,d,S.x,S.y)&&yt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=T;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ds(a,h,l,u,c,d,v.x,v.y)&&yt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function gd(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Yi(n,s)&&th(n,t,t.next,s)&&Rs(n,s)&&Rs(s,n)&&(e.push(n.i,t.i,s.i),Cs(t),Cs(t.next),t=i=s),t=t.next}while(t!==i);return pi(t)}function vd(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&wd(o,a)){let l=nh(o,a);o=pi(o,o.next),l=pi(l,l.next),As(o,e,t,n,s,r,0),As(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function _d(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Qc(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(bd(c))}s.sort(xd);for(let r=0;r<s.length;r++)t=Md(s[r],t);return t}function xd(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Md(i,e){const t=yd(i,e);if(!t)return e;const n=nh(t,i);return pi(n,n.next),pi(t,t.next)}function yd(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(Yi(i,t))return t;do{if(Yi(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&eh(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const u=Math.abs(s-t.y)/(n-t.x);Rs(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Sd(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Sd(i,e){return yt(i.prev,i,e.prev)<0&&yt(e.next,i,i.next)<0}function Ed(i,e,t,n){let s=i;do s.z===0&&(s.z=ma(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Td(s)}function Td(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function ma(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function bd(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function eh(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function ds(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&eh(i,e,t,n,s,r,o,a)}function wd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ad(i,e)&&(Rs(i,e)&&Rs(e,i)&&Rd(i,e)&&(yt(i.prev,i,e.prev)||yt(i,e.prev,e))||Yi(i,e)&&yt(i.prev,i,i.next)>0&&yt(e.prev,e,e.next)>0)}function yt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Yi(i,e){return i.x===e.x&&i.y===e.y}function th(i,e,t,n){const s=lr(yt(i,e,t)),r=lr(yt(i,e,n)),o=lr(yt(t,n,i)),a=lr(yt(t,n,e));return!!(s!==r&&o!==a||s===0&&ar(i,t,e)||r===0&&ar(i,n,e)||o===0&&ar(t,i,n)||a===0&&ar(t,e,n))}function ar(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function lr(i){return i>0?1:i<0?-1:0}function Ad(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&th(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Rs(i,e){return yt(i.prev,i,i.next)<0?yt(i,e,i.next)>=0&&yt(i,i.prev,e)>=0:yt(i,e,i.prev)<0||yt(i,i.next,e)<0}function Rd(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function nh(i,e){const t=ga(i.i,i.x,i.y),n=ga(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ul(i,e,t,n){const s=ga(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Cs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ga(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cd(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Pd{static triangulate(e,t,n=2){return fd(e,t,n)}}class Ln{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Ln.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Nl(e),Fl(n,e);let o=e.length;t.forEach(Nl);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Fl(n,t[l]);const a=Pd.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Nl(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Fl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Nr extends vt{constructor(e=new Fs([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new We(s,3)),this.setAttribute("uv",new We(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:Ld;let S,v=!1,C,R,P,w;p&&(S=p.getSpacedPoints(h),v=!0,d=!1,C=p.computeFrenetFrames(h,!1),R=new U,P=new U,w=new U),d||(m=0,f=0,g=0,x=0);const y=a.extractPoints(c);let M=y.shape;const L=y.holes;if(!Ln.isClockWise(M)){M=M.reverse();for(let te=0,Q=L.length;te<Q;te++){const j=L[te];Ln.isClockWise(j)&&(L[te]=j.reverse())}}function I(te){const j=10000000000000001e-36;let K=te[0];for(let pe=1;pe<=te.length;pe++){const re=pe%te.length,me=te[re],He=me.x-K.x,Ve=me.y-K.y,A=He*He+Ve*Ve,_=Math.max(Math.abs(me.x),Math.abs(me.y),Math.abs(K.x),Math.abs(K.y)),G=j*_*_;if(A<=G){te.splice(re,1),pe--;continue}K=me}}I(M),L.forEach(I);const N=L.length,B=M;for(let te=0;te<N;te++){const Q=L[te];M=M.concat(Q)}function z(te,Q,j){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(Q,j)}const X=M.length;function F(te,Q,j){let K,pe,re;const me=te.x-Q.x,He=te.y-Q.y,Ve=j.x-te.x,A=j.y-te.y,_=me*me+He*He,G=me*A-He*Ve;if(Math.abs(G)>Number.EPSILON){const Z=Math.sqrt(_),ie=Math.sqrt(Ve*Ve+A*A),J=Q.x-He/Z,De=Q.y+me/Z,fe=j.x-A/ie,Ce=j.y+Ve/ie,Pe=((fe-J)*A-(Ce-De)*Ve)/(me*A-He*Ve);K=J+me*Pe-te.x,pe=De+He*Pe-te.y;const oe=K*K+pe*pe;if(oe<=2)return new ue(K,pe);re=Math.sqrt(oe/2)}else{let Z=!1;me>Number.EPSILON?Ve>Number.EPSILON&&(Z=!0):me<-Number.EPSILON?Ve<-Number.EPSILON&&(Z=!0):Math.sign(He)===Math.sign(A)&&(Z=!0),Z?(K=-He,pe=me,re=Math.sqrt(_)):(K=me,pe=He,re=Math.sqrt(_/2))}return new ue(K/re,pe/re)}const ne=[];for(let te=0,Q=B.length,j=Q-1,K=te+1;te<Q;te++,j++,K++)j===Q&&(j=0),K===Q&&(K=0),ne[te]=F(B[te],B[j],B[K]);const he=[];let xe,Ue=ne.concat();for(let te=0,Q=N;te<Q;te++){const j=L[te];xe=[];for(let K=0,pe=j.length,re=pe-1,me=K+1;K<pe;K++,re++,me++)re===pe&&(re=0),me===pe&&(me=0),xe[K]=F(j[K],j[re],j[me]);he.push(xe),Ue=Ue.concat(xe)}let Xe;if(m===0)Xe=Ln.triangulateShape(B,L);else{const te=[],Q=[];for(let j=0;j<m;j++){const K=j/m,pe=f*Math.cos(K*Math.PI/2),re=g*Math.sin(K*Math.PI/2)+x;for(let me=0,He=B.length;me<He;me++){const Ve=z(B[me],ne[me],re);ve(Ve.x,Ve.y,-pe),K===0&&te.push(Ve)}for(let me=0,He=N;me<He;me++){const Ve=L[me];xe=he[me];const A=[];for(let _=0,G=Ve.length;_<G;_++){const Z=z(Ve[_],xe[_],re);ve(Z.x,Z.y,-pe),K===0&&A.push(Z)}K===0&&Q.push(A)}}Xe=Ln.triangulateShape(te,Q)}const nt=Xe.length,Ke=g+x;for(let te=0;te<X;te++){const Q=d?z(M[te],Ue[te],Ke):M[te];v?(P.copy(C.normals[0]).multiplyScalar(Q.x),R.copy(C.binormals[0]).multiplyScalar(Q.y),w.copy(S[0]).add(P).add(R),ve(w.x,w.y,w.z)):ve(Q.x,Q.y,0)}for(let te=1;te<=h;te++)for(let Q=0;Q<X;Q++){const j=d?z(M[Q],Ue[Q],Ke):M[Q];v?(P.copy(C.normals[te]).multiplyScalar(j.x),R.copy(C.binormals[te]).multiplyScalar(j.y),w.copy(S[te]).add(P).add(R),ve(w.x,w.y,w.z)):ve(j.x,j.y,u/h*te)}for(let te=m-1;te>=0;te--){const Q=te/m,j=f*Math.cos(Q*Math.PI/2),K=g*Math.sin(Q*Math.PI/2)+x;for(let pe=0,re=B.length;pe<re;pe++){const me=z(B[pe],ne[pe],K);ve(me.x,me.y,u+j)}for(let pe=0,re=L.length;pe<re;pe++){const me=L[pe];xe=he[pe];for(let He=0,Ve=me.length;He<Ve;He++){const A=z(me[He],xe[He],K);v?ve(A.x,A.y+S[h-1].y,S[h-1].x+j):ve(A.x,A.y,u+j)}}}k(),$();function k(){const te=s.length/3;if(d){let Q=0,j=X*Q;for(let K=0;K<nt;K++){const pe=Xe[K];Se(pe[2]+j,pe[1]+j,pe[0]+j)}Q=h+m*2,j=X*Q;for(let K=0;K<nt;K++){const pe=Xe[K];Se(pe[0]+j,pe[1]+j,pe[2]+j)}}else{for(let Q=0;Q<nt;Q++){const j=Xe[Q];Se(j[2],j[1],j[0])}for(let Q=0;Q<nt;Q++){const j=Xe[Q];Se(j[0]+X*h,j[1]+X*h,j[2]+X*h)}}n.addGroup(te,s.length/3-te,0)}function $(){const te=s.length/3;let Q=0;se(B,Q),Q+=B.length;for(let j=0,K=L.length;j<K;j++){const pe=L[j];se(pe,Q),Q+=pe.length}n.addGroup(te,s.length/3-te,1)}function se(te,Q){let j=te.length;for(;--j>=0;){const K=j;let pe=j-1;pe<0&&(pe=te.length-1);for(let re=0,me=h+m*2;re<me;re++){const He=X*re,Ve=X*(re+1),A=Q+K+He,_=Q+pe+He,G=Q+pe+Ve,Z=Q+K+Ve;Be(A,_,G,Z)}}}function ve(te,Q,j){l.push(te),l.push(Q),l.push(j)}function Se(te,Q,j){Ze(te),Ze(Q),Ze(j);const K=s.length/3,pe=T.generateTopUV(n,s,K-3,K-2,K-1);D(pe[0]),D(pe[1]),D(pe[2])}function Be(te,Q,j,K){Ze(te),Ze(Q),Ze(K),Ze(Q),Ze(j),Ze(K);const pe=s.length/3,re=T.generateSideWallUV(n,s,pe-6,pe-3,pe-2,pe-1);D(re[0]),D(re[1]),D(re[3]),D(re[1]),D(re[2]),D(re[3])}function Ze(te){s.push(l[te*3+0]),s.push(l[te*3+1]),s.push(l[te*3+2])}function D(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Dd(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new br[s.type]().fromJSON(s)),new Nr(n,e.options)}}const Ld={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ue(r,o),new ue(a,l),new ue(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ue(o,1-l),new ue(c,1-u),new ue(d,1-g),new ue(x,1-p)]:[new ue(a,1-l),new ue(h,1-u),new ue(f,1-g),new ue(m,1-p)]}};function Dd(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class on extends Fa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new on(e.radius,e.detail)}}class ji extends vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const T=p*d-o;for(let S=0;S<c;S++){const v=S*u-r;g.push(v,-T,0),x.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const S=T+c*p,v=T+c*(p+1),C=T+1+c*(p+1),R=T+1+c*p;f.push(S,v,R),f.push(v,C,R)}this.setIndex(f),this.setAttribute("position",new We(g,3)),this.setAttribute("normal",new We(x,3)),this.setAttribute("uv",new We(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.width,e.height,e.widthSegments,e.heightSegments)}}class za extends vt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/s,f=new U,g=new ue;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){const m=x*(n+1);for(let p=0;p<n;p++){const T=p+m,S=T,v=T+n+1,C=T+n+2,R=T+1;a.push(S,v,R),a.push(v,C,R)}}this.setIndex(a),this.setAttribute("position",new We(l,3)),this.setAttribute("normal",new We(c,3)),this.setAttribute("uv",new We(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ka extends vt{constructor(e=new Fs([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new We(s,3)),this.setAttribute("normal",new We(r,3)),this.setAttribute("uv",new We(o,2));function c(h){const u=s.length/3,d=h.extractPoints(t);let f=d.shape;const g=d.holes;Ln.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const T=g[m];Ln.isClockWise(T)===!0&&(g[m]=T.reverse())}const x=Ln.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const T=g[m];f=f.concat(T)}for(let m=0,p=f.length;m<p;m++){const T=f[m];s.push(T.x,T.y,0),r.push(0,0,1),o.push(T.x,T.y)}for(let m=0,p=x.length;m<p;m++){const T=x[m],S=T[0]+u,v=T[1]+u,C=T[2]+u;n.push(S,v,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Id(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new ka(n,e.curveSegments)}}function Id(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class Ps extends vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new U,d=new U,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const T=[],S=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){const R=C/t;u.x=-e*Math.cos(s+R*r)*Math.sin(o+S*a),u.y=e*Math.cos(o+S*a),u.z=e*Math.sin(s+R*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(R+v,1-S),T.push(c++)}h.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){const S=h[p][T+1],v=h[p][T],C=h[p+1][T],R=h[p+1][T+1];(p!==0||o>0)&&f.push(S,v,R),(p!==n-1||l<Math.PI)&&f.push(v,C,R)}this.setIndex(f),this.setAttribute("position",new We(g,3)),this.setAttribute("normal",new We(x,3)),this.setAttribute("uv",new We(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ls extends vt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new U,u=new U,d=new U;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const x=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,T=(s+1)*f+g;o.push(x,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new We(a,3)),this.setAttribute("normal",new We(l,3)),this.setAttribute("uv",new We(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Va extends vt{constructor(e=new Kc(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new U,l=new U,c=new ue;let h=new U;const u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new We(u,3)),this.setAttribute("normal",new We(d,3)),this.setAttribute("uv",new We(f,2));function x(){for(let S=0;S<t;S++)m(S);m(r===!1?t:0),T(),p()}function m(S){h=e.getPointAt(S/t,h);const v=o.normals[S],C=o.binormals[S];for(let R=0;R<=s;R++){const P=R/s*Math.PI*2,w=Math.sin(P),y=-Math.cos(P);l.x=y*v.x+w*C.x,l.y=y*v.y+w*C.y,l.z=y*v.z+w*C.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=t;S++)for(let v=1;v<=s;v++){const C=(s+1)*(S-1)+(v-1),R=(s+1)*S+(v-1),P=(s+1)*S+v,w=(s+1)*(S-1)+v;g.push(C,R,w),g.push(R,P,w)}}function T(){for(let S=0;S<=t;S++)for(let v=0;v<=s;v++)c.x=S/t,c.y=v/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Va(new br[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class wr extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dr,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ud extends $n{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ae(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dr,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class ih extends $n{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dr,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sh extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nd extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Fr extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ha extends Fr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const mo=new ht,Ol=new U,Bl=new U;class Ga{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ua,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ol.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ol),Bl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bl),t.updateMatrixWorld(),mo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fd extends Ga{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Xi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Od extends Fr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Fd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const zl=new ht,cs=new U,go=new U;class Bd extends Ga{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),cs.setFromMatrixPosition(e.matrixWorld),n.position.copy(cs),go.copy(n.position),go.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(go),n.updateMatrixWorld(),s.makeTranslation(-cs.x,-cs.y,-cs.z),zl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl,n.coordinateSystem,n.reversedDepth)}}class xr extends Fr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Bd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Wa extends Vc{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class zd extends Ga{constructor(){super(new Wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rh extends Fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new zd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class kd extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Vd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function kl(i,e,t,n){const s=Hd(n);switch(t){case Rc:return i*e;case Aa:return i*e/s.components*s.byteLength;case Ra:return i*e/s.components*s.byteLength;case Pc:return i*e*2/s.components*s.byteLength;case Ca:return i*e*2/s.components*s.byteLength;case Cc:return i*e*3/s.components*s.byteLength;case rn:return i*e*4/s.components*s.byteLength;case Pa:return i*e*4/s.components*s.byteLength;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vr:case _r:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ko:case Ho:return Math.max(i,16)*Math.max(e,8)/4;case zo:case Vo:return Math.max(i,8)*Math.max(e,8)/2;case Go:case Wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case jo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ea:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ta:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case na:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ia:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case sa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ra:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case oa:case aa:case la:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ca:case ha:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ua:case da:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hd(i){switch(i){case Sn:case Tc:return{byteLength:1,components:1};case Ss:case bc:case $i:return{byteLength:2,components:1};case ba:case wa:return{byteLength:2,components:4};case fi:case Ta:case Mn:return{byteLength:4,components:1};case wc:case Ac:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sa);function oh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Gd(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xd=`#ifdef USE_ALPHAHASH
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
#endif`,qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$d=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jd=`#ifdef USE_AOMAP
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
#endif`,Kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jd=`#ifdef USE_BATCHING
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
#endif`,Qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sf=`#ifdef USE_IRIDESCENCE
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
#endif`,rf=`#ifdef USE_BUMPMAP
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pf=`#define PI 3.141592653589793
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
} // validated`,mf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gf=`vec3 transformedNormal = objectNormal;
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
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ef=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,wf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Df=`#ifdef USE_GRADIENTMAP
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
}`,If=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ff=`uniform bool receiveShadow;
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
#endif`,Of=`#ifdef USE_ENVMAP
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
#endif`,Bf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hf=`PhysicalMaterial material;
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
#endif`,Gf=`struct PhysicalMaterial {
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
}`,Wf=`
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
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
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
#endif`,qf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$f=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ep=`#if defined( USE_POINTS_UV )
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
#endif`,tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`#ifdef USE_MORPHTARGETS
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
#endif`,ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fp=`#ifdef USE_NORMALMAP
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
#endif`,pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ep=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cp=`float getShadowMask() {
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
}`,Pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ip=`#ifdef USE_SKINNING
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
#endif`,Up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Op=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,zp=`#ifdef USE_TRANSMISSION
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xp=`uniform sampler2D t2D;
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
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`#include <common>
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
}`,Kp=`#if DEPTH_PACKING == 3200
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
}`,jp=`#define DISTANCE
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
}`,Qp=`#define DISTANCE
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
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`uniform float scale;
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
}`,im=`uniform vec3 diffuse;
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
}`,sm=`#include <common>
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
}`,rm=`uniform vec3 diffuse;
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
}`,om=`#define LAMBERT
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
}`,am=`#define LAMBERT
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
}`,lm=`#define MATCAP
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
}`,cm=`#define MATCAP
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
}`,hm=`#define NORMAL
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
}`,um=`#define NORMAL
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
}`,dm=`#define PHONG
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
}`,fm=`#define PHONG
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
}`,pm=`#define STANDARD
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
}`,mm=`#define STANDARD
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
}`,gm=`#define TOON
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
}`,vm=`#define TOON
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
}`,_m=`uniform float size;
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
}`,xm=`uniform vec3 diffuse;
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
}`,Mm=`#include <common>
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
}`,ym=`uniform vec3 color;
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
}`,Sm=`uniform float rotation;
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
}`,Em=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Wd,alphahash_pars_fragment:Xd,alphamap_fragment:qd,alphamap_pars_fragment:Yd,alphatest_fragment:$d,alphatest_pars_fragment:Zd,aomap_fragment:Jd,aomap_pars_fragment:Kd,batching_pars_vertex:jd,batching_vertex:Qd,begin_vertex:ef,beginnormal_vertex:tf,bsdfs:nf,iridescence_fragment:sf,bumpmap_pars_fragment:rf,clipping_planes_fragment:of,clipping_planes_pars_fragment:af,clipping_planes_pars_vertex:lf,clipping_planes_vertex:cf,color_fragment:hf,color_pars_fragment:uf,color_pars_vertex:df,color_vertex:ff,common:pf,cube_uv_reflection_fragment:mf,defaultnormal_vertex:gf,displacementmap_pars_vertex:vf,displacementmap_vertex:_f,emissivemap_fragment:xf,emissivemap_pars_fragment:Mf,colorspace_fragment:yf,colorspace_pars_fragment:Sf,envmap_fragment:Ef,envmap_common_pars_fragment:Tf,envmap_pars_fragment:bf,envmap_pars_vertex:wf,envmap_physical_pars_fragment:Of,envmap_vertex:Af,fog_vertex:Rf,fog_pars_vertex:Cf,fog_fragment:Pf,fog_pars_fragment:Lf,gradientmap_pars_fragment:Df,lightmap_pars_fragment:If,lights_lambert_fragment:Uf,lights_lambert_pars_fragment:Nf,lights_pars_begin:Ff,lights_toon_fragment:Bf,lights_toon_pars_fragment:zf,lights_phong_fragment:kf,lights_phong_pars_fragment:Vf,lights_physical_fragment:Hf,lights_physical_pars_fragment:Gf,lights_fragment_begin:Wf,lights_fragment_maps:Xf,lights_fragment_end:qf,logdepthbuf_fragment:Yf,logdepthbuf_pars_fragment:$f,logdepthbuf_pars_vertex:Zf,logdepthbuf_vertex:Jf,map_fragment:Kf,map_pars_fragment:jf,map_particle_fragment:Qf,map_particle_pars_fragment:ep,metalnessmap_fragment:tp,metalnessmap_pars_fragment:np,morphinstance_vertex:ip,morphcolor_vertex:sp,morphnormal_vertex:rp,morphtarget_pars_vertex:op,morphtarget_vertex:ap,normal_fragment_begin:lp,normal_fragment_maps:cp,normal_pars_fragment:hp,normal_pars_vertex:up,normal_vertex:dp,normalmap_pars_fragment:fp,clearcoat_normal_fragment_begin:pp,clearcoat_normal_fragment_maps:mp,clearcoat_pars_fragment:gp,iridescence_pars_fragment:vp,opaque_fragment:_p,packing:xp,premultiplied_alpha_fragment:Mp,project_vertex:yp,dithering_fragment:Sp,dithering_pars_fragment:Ep,roughnessmap_fragment:Tp,roughnessmap_pars_fragment:bp,shadowmap_pars_fragment:wp,shadowmap_pars_vertex:Ap,shadowmap_vertex:Rp,shadowmask_pars_fragment:Cp,skinbase_vertex:Pp,skinning_pars_vertex:Lp,skinning_vertex:Dp,skinnormal_vertex:Ip,specularmap_fragment:Up,specularmap_pars_fragment:Np,tonemapping_fragment:Fp,tonemapping_pars_fragment:Op,transmission_fragment:Bp,transmission_pars_fragment:zp,uv_pars_fragment:kp,uv_pars_vertex:Vp,uv_vertex:Hp,worldpos_vertex:Gp,background_vert:Wp,background_frag:Xp,backgroundCube_vert:qp,backgroundCube_frag:Yp,cube_vert:$p,cube_frag:Zp,depth_vert:Jp,depth_frag:Kp,distanceRGBA_vert:jp,distanceRGBA_frag:Qp,equirect_vert:em,equirect_frag:tm,linedashed_vert:nm,linedashed_frag:im,meshbasic_vert:sm,meshbasic_frag:rm,meshlambert_vert:om,meshlambert_frag:am,meshmatcap_vert:lm,meshmatcap_frag:cm,meshnormal_vert:hm,meshnormal_frag:um,meshphong_vert:dm,meshphong_frag:fm,meshphysical_vert:pm,meshphysical_frag:mm,meshtoon_vert:gm,meshtoon_frag:vm,points_vert:_m,points_frag:xm,shadow_vert:Mm,shadow_frag:ym,sprite_vert:Sm,sprite_frag:Em},Me={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},_n={basic:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ae(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:zt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:zt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ae(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:zt([Me.points,Me.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:zt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:zt([Me.common,Me.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:zt([Me.sprite,Me.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:zt([Me.common,Me.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:zt([Me.lights,Me.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};_n.physical={uniforms:zt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const cr={r:0,b:0,g:0},ti=new gn,Tm=new ht;function bm(i,e,t,n,s,r,o){const a=new Ae(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function x(S){let v=!1;const C=g(S);C===null?p(a,l):C&&C.isColor&&(p(C,1),v=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,v){const C=g(v);C&&(C.isCubeTexture||C.mapping===Lr)?(h===void 0&&(h=new Qe(new Ki(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:qi(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,P,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ti.copy(v.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Tm.makeRotationFromEuler(ti)),h.material.toneMapped=tt.getTransfer(C.colorSpace)!==at,(u!==C||d!==C.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=C,d=C.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Qe(new ji(2,2),new ln({name:"BackgroundMaterial",uniforms:qi(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=tt.getTransfer(C.colorSpace)!==at,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||d!==C.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=C,d=C.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,v){S.getRGB(cr,kc(i)),n.buffers.color.setClear(cr.r,cr.g,cr.b,v,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:x,addToRenderList:m,dispose:T}}function wm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,L,b,I,N){let B=!1;const z=u(I,b,L);r!==z&&(r=z,c(r.object)),B=f(M,I,b,N),B&&g(M,I,b,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,v(M,L,b,I),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,L,b){const I=b.wireframe===!0;let N=n[M.id];N===void 0&&(N={},n[M.id]=N);let B=N[L.id];B===void 0&&(B={},N[L.id]=B);let z=B[I];return z===void 0&&(z=d(l()),B[I]=z),z}function d(M){const L=[],b=[],I=[];for(let N=0;N<t;N++)L[N]=0,b[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:b,attributeDivisors:I,object:M,attributes:{},index:null}}function f(M,L,b,I){const N=r.attributes,B=L.attributes;let z=0;const X=b.getAttributes();for(const F in X)if(X[F].location>=0){const he=N[F];let xe=B[F];if(xe===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor)),he===void 0||he.attribute!==xe||xe&&he.data!==xe.data)return!0;z++}return r.attributesNum!==z||r.index!==I}function g(M,L,b,I){const N={},B=L.attributes;let z=0;const X=b.getAttributes();for(const F in X)if(X[F].location>=0){let he=B[F];he===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));const xe={};xe.attribute=he,he&&he.data&&(xe.data=he.data),N[F]=xe,z++}r.attributes=N,r.attributesNum=z,r.index=I}function x(){const M=r.newAttributes;for(let L=0,b=M.length;L<b;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const b=r.newAttributes,I=r.enabledAttributes,N=r.attributeDivisors;b[M]=1,I[M]===0&&(i.enableVertexAttribArray(M),I[M]=1),N[M]!==L&&(i.vertexAttribDivisor(M,L),N[M]=L)}function T(){const M=r.newAttributes,L=r.enabledAttributes;for(let b=0,I=L.length;b<I;b++)L[b]!==M[b]&&(i.disableVertexAttribArray(b),L[b]=0)}function S(M,L,b,I,N,B,z){z===!0?i.vertexAttribIPointer(M,L,b,N,B):i.vertexAttribPointer(M,L,b,I,N,B)}function v(M,L,b,I){x();const N=I.attributes,B=b.getAttributes(),z=L.defaultAttributeValues;for(const X in B){const F=B[X];if(F.location>=0){let ne=N[X];if(ne===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),ne!==void 0){const he=ne.normalized,xe=ne.itemSize,Ue=e.get(ne);if(Ue===void 0)continue;const Xe=Ue.buffer,nt=Ue.type,Ke=Ue.bytesPerElement,k=nt===i.INT||nt===i.UNSIGNED_INT||ne.gpuType===Ta;if(ne.isInterleavedBufferAttribute){const $=ne.data,se=$.stride,ve=ne.offset;if($.isInstancedInterleavedBuffer){for(let Se=0;Se<F.locationSize;Se++)p(F.location+Se,$.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Se=0;Se<F.locationSize;Se++)m(F.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Se=0;Se<F.locationSize;Se++)S(F.location+Se,xe/F.locationSize,nt,he,se*Ke,(ve+xe/F.locationSize*Se)*Ke,k)}else{if(ne.isInstancedBufferAttribute){for(let $=0;$<F.locationSize;$++)p(F.location+$,ne.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let $=0;$<F.locationSize;$++)m(F.location+$);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let $=0;$<F.locationSize;$++)S(F.location+$,xe/F.locationSize,nt,he,xe*Ke,xe/F.locationSize*$*Ke,k)}}else if(z!==void 0){const he=z[X];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(F.location,he);break;case 3:i.vertexAttrib3fv(F.location,he);break;case 4:i.vertexAttrib4fv(F.location,he);break;default:i.vertexAttrib1fv(F.location,he)}}}}T()}function C(){w();for(const M in n){const L=n[M];for(const b in L){const I=L[b];for(const N in I)h(I[N].object),delete I[N];delete L[b]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const b in L){const I=L[b];for(const N in I)h(I[N].object),delete I[N];delete L[b]}delete n[M.id]}function P(M){for(const L in n){const b=n[L];if(b[M.id]===void 0)continue;const I=b[M.id];for(const N in I)h(I[N].object),delete I[N];delete b[M.id]}}function w(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function Am(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Rm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==rn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const w=P===$i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Sn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Mn&&!w)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:C,maxSamples:R}}function Cm(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new ri,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const T=r?0:n,S=T*4;let v=p.clippingState||null;l.value=v,v=h(g,d,S,f);for(let C=0;C!==S;++C)v[C]=t[C];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=f;S!==x;++S,v+=4)o.copy(u[S]).applyMatrix4(T,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Pm(i){let e=new WeakMap;function t(o,a){return a===No?o.mapping=Hi:a===Fo&&(o.mapping=Gi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===No||a===Fo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Zu(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Fi=4,Vl=[.125,.215,.35,.446,.526,.582],li=20,vo=new Wa,Hl=new Ae;let _o=null,xo=0,Mo=0,yo=!1;const oi=(1+Math.sqrt(5))/2,Ii=1/oi,Gl=[new U(-oi,Ii,0),new U(oi,Ii,0),new U(-Ii,0,oi),new U(Ii,0,oi),new U(0,oi,-Ii),new U(0,oi,Ii),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Lm=new U;class Wl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=Lm}=r;_o=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_o,xo,Mo),this._renderer.xr.enabled=yo,e.scissorTest=!1,hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_o=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:$i,format:rn,colorSpace:Wi,depthBuffer:!1},s=Xl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dm(r)),this._blurMaterial=Im(r,e,t)}return s}_compileMaterial(e){const t=new Qe(this._lodPlanes[0],e);this._renderer.compile(t,vo)}_sceneToCubeUV(e,t,n,s,r){const l=new kt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Hl),u.toneMapping=Wn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const x=new Wt({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),m=new Qe(new Ki,x);let p=!1;const T=e.background;T?T.isColor&&(x.color.copy(T),e.background=null,p=!0):(x.color.copy(Hl),p=!0);for(let S=0;S<6;S++){const v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));const C=this._cubeSize;hr(s,v*C,S>2?C:0,C,C),u.setRenderTarget(s),p&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Hi||e.mapping===Gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ql());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Qe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;hr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,vo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Gl[(s-r-1)%Gl.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Qe(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*li-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):li;m>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${li}`);const p=[];let T=0;for(let P=0;P<li;++P){const w=P/x,y=Math.exp(-w*w/2);p.push(y),P===0?T+=y:P<m&&(T+=2*y)}for(let P=0;P<p.length;P++)p[P]=p[P]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const v=this._sizeLods[s],C=3*v*(s>S-Fi?s-S+Fi:0),R=4*(this._cubeSize-v);hr(t,C,R,3*v,2*v),l.setRenderTarget(t),l.render(u,vo)}}function Dm(i){const e=[],t=[],n=[];let s=i;const r=i-Fi+1+Vl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Fi?l=Vl[o-i+Fi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,T=new Float32Array(x*g*f),S=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let R=0;R<f;R++){const P=R%3*2/3-1,w=R>2?0:-1,y=[P,w,0,P+2/3,w,0,P+2/3,w+1,0,P,w,0,P+2/3,w+1,0,P,w+1,0];T.set(y,x*g*R),S.set(d,m*g*R);const M=[R,R,R,R,R,R];v.set(M,p*g*R)}const C=new vt;C.setAttribute("position",new Qt(T,x)),C.setAttribute("uv",new Qt(S,m)),C.setAttribute("faceIndex",new Qt(v,p)),e.push(C),s>Fi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xl(i,e,t){const n=new Yn(i,e,t);return n.texture.mapping=Lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Im(i,e,t){const n=new Float32Array(li),s=new U(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function ql(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Yl(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Xa(){return`

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
	`}function Um(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===No||l===Fo,h=l===Hi||l===Gi;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Wl(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Wl(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Nm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ws("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Fm(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let x=0;if(f!==null){const T=f.array;x=f.version;for(let S=0,v=T.length;S<v;S+=3){const C=T[S+0],R=T[S+1],P=T[S+2];d.push(C,R,R,P,P,C)}}else if(g!==void 0){const T=g.array;x=g.version;for(let S=0,v=T.length/3-1;S<v;S+=3){const C=S+0,R=S+1,P=S+2;d.push(C,R,R,P,P,C)}}else return;const m=new(Ic(d)?zc:Bc)(d,1);m.version=x;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Om(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*x[T];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Bm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function zm(i,e,t){const n=new WeakMap,s=new rt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let C=a.attributes.position.count*v,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const P=new Float32Array(C*R*4*u),w=new Uc(P,C,R,u);w.type=Mn,w.needsUpdate=!0;const y=v*4;for(let L=0;L<u;L++){const b=p[L],I=T[L],N=S[L],B=C*R*4*L;for(let z=0;z<b.count;z++){const X=z*y;g===!0&&(s.fromBufferAttribute(b,z),P[B+X+0]=s.x,P[B+X+1]=s.y,P[B+X+2]=s.z,P[B+X+3]=0),x===!0&&(s.fromBufferAttribute(I,z),P[B+X+4]=s.x,P[B+X+5]=s.y,P[B+X+6]=s.z,P[B+X+7]=0),m===!0&&(s.fromBufferAttribute(N,z),P[B+X+8]=s.x,P[B+X+9]=s.y,P[B+X+10]=s.z,P[B+X+11]=N.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new ue(C,R)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function km(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const ah=new Ft,$l=new Na(1,1),lh=new Uc,ch=new Du,hh=new Hc,Zl=[],Jl=[],Kl=new Float32Array(16),jl=new Float32Array(9),Ql=new Float32Array(4);function Qi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Zl[s];if(r===void 0&&(r=new Float32Array(s),Zl[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Or(i,e){let t=Jl[e];t===void 0&&(t=new Int32Array(e),Jl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function Wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function Xm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;Ql.set(n),i.uniformMatrix2fv(this.addr,!1,Ql),At(t,n)}}function qm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;jl.set(n),i.uniformMatrix3fv(this.addr,!1,jl),At(t,n)}}function Ym(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;Kl.set(n),i.uniformMatrix4fv(this.addr,!1,Kl),At(t,n)}}function $m(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function Jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function Km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function jm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function e0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function t0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function n0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?($l.compareFunction=Dc,r=$l):r=ah,t.setTexture2D(e||r,s)}function i0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ch,s)}function s0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||hh,s)}function r0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||lh,s)}function o0(i){switch(i){case 5126:return Vm;case 35664:return Hm;case 35665:return Gm;case 35666:return Wm;case 35674:return Xm;case 35675:return qm;case 35676:return Ym;case 5124:case 35670:return $m;case 35667:case 35671:return Zm;case 35668:case 35672:return Jm;case 35669:case 35673:return Km;case 5125:return jm;case 36294:return Qm;case 36295:return e0;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}function a0(i,e){i.uniform1fv(this.addr,e)}function l0(i,e){const t=Qi(e,this.size,2);i.uniform2fv(this.addr,t)}function c0(i,e){const t=Qi(e,this.size,3);i.uniform3fv(this.addr,t)}function h0(i,e){const t=Qi(e,this.size,4);i.uniform4fv(this.addr,t)}function u0(i,e){const t=Qi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function d0(i,e){const t=Qi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function f0(i,e){const t=Qi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function p0(i,e){i.uniform1iv(this.addr,e)}function m0(i,e){i.uniform2iv(this.addr,e)}function g0(i,e){i.uniform3iv(this.addr,e)}function v0(i,e){i.uniform4iv(this.addr,e)}function _0(i,e){i.uniform1uiv(this.addr,e)}function x0(i,e){i.uniform2uiv(this.addr,e)}function M0(i,e){i.uniform3uiv(this.addr,e)}function y0(i,e){i.uniform4uiv(this.addr,e)}function S0(i,e,t){const n=this.cache,s=e.length,r=Or(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ah,r[o])}function E0(i,e,t){const n=this.cache,s=e.length,r=Or(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ch,r[o])}function T0(i,e,t){const n=this.cache,s=e.length,r=Or(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||hh,r[o])}function b0(i,e,t){const n=this.cache,s=e.length,r=Or(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||lh,r[o])}function w0(i){switch(i){case 5126:return a0;case 35664:return l0;case 35665:return c0;case 35666:return h0;case 35674:return u0;case 35675:return d0;case 35676:return f0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return v0;case 5125:return _0;case 36294:return x0;case 36295:return M0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return E0;case 35680:case 36300:case 36308:case 36293:return T0;case 36289:case 36303:case 36311:case 36292:return b0}}class A0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=o0(t.type)}}class R0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=w0(t.type)}}class C0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const So=/(\w+)(\])?(\[|\.)?/g;function ec(i,e){i.seq.push(e),i.map[e.id]=e}function P0(i,e,t){const n=i.name,s=n.length;for(So.lastIndex=0;;){const r=So.exec(n),o=So.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ec(t,c===void 0?new A0(a,i,e):new R0(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new C0(a),ec(t,u)),t=u}}}class Mr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);P0(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function tc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const L0=37297;let D0=0;function I0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const nc=new Ye;function U0(i){tt._getMatrix(nc,tt.workingColorSpace,i);const e=`mat3( ${nc.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case Sr:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ic(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+I0(i.getShaderSource(e),a)}else return r}function N0(i,e){const t=U0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function F0(i,e){let t;switch(e){case Yh:t="Linear";break;case $h:t="Reinhard";break;case Zh:t="Cineon";break;case Sc:t="ACESFilmic";break;case Kh:t="AgX";break;case jh:t="Neutral";break;case Jh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ur=new U;function O0(){tt.getLuminanceCoefficients(ur);const i=ur.x.toFixed(4),e=ur.y.toFixed(4),t=ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function z0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function k0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function fs(i){return i!==""}function sc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const V0=/^[ \t]*#include +<([\w\d./]+)>/gm;function va(i){return i.replace(V0,G0)}const H0=new Map;function G0(i,e){let t=$e[e];if(t===void 0){const n=H0.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return va(t)}const W0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oc(i){return i.replace(W0,X0)}function X0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ac(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function q0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Mc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===yc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pn&&(e="SHADOWMAP_TYPE_VSM"),e}function Y0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hi:case Gi:e="ENVMAP_TYPE_CUBE";break;case Lr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $0(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Gi&&(e="ENVMAP_MODE_REFRACTION"),e}function Z0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ea:e="ENVMAP_BLENDING_MULTIPLY";break;case Xh:e="ENVMAP_BLENDING_MIX";break;case qh:e="ENVMAP_BLENDING_ADD";break}return e}function J0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function K0(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=q0(t),c=Y0(t),h=$0(t),u=Z0(t),d=J0(t),f=B0(t),g=z0(r),x=s.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fs).join(`
`),p.length>0&&(p+=`
`)):(m=[ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),p=[ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Wn?F0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,N0("linearToOutputTexel",t.outputColorSpace),O0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fs).join(`
`)),o=va(o),o=sc(o,t),o=rc(o,t),a=va(a),a=sc(a,t),a=rc(a,t),o=oc(o),a=oc(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=T+m+o,v=T+p+a,C=tc(s,s.VERTEX_SHADER,S),R=tc(s,s.FRAGMENT_SHADER,v);s.attachShader(x,C),s.attachShader(x,R),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(L){if(i.debug.checkShaderErrors){const b=s.getProgramInfoLog(x)||"",I=s.getShaderInfoLog(C)||"",N=s.getShaderInfoLog(R)||"",B=b.trim(),z=I.trim(),X=N.trim();let F=!0,ne=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,R);else{const he=ic(s,C,"vertex"),xe=ic(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+he+`
`+xe)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(z===""||X==="")&&(ne=!1);ne&&(L.diagnostics={runnable:F,programLog:B,vertexShader:{log:z,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(C),s.deleteShader(R),w=new Mr(s,x),y=k0(s,x)}let w;this.getUniforms=function(){return w===void 0&&P(this),w};let y;this.getAttributes=function(){return y===void 0&&P(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,L0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=D0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=R,this}let j0=0;class Q0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new eg(e),t.set(e,n)),n}}class eg{constructor(e){this.id=j0++,this.code=e,this.usedTimes=0}}function tg(i,e,t,n,s,r,o){const a=new Fc,l=new Q0,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,L,b,I){const N=b.fog,B=I.geometry,z=y.isMeshStandardMaterial?b.environment:null,X=(y.isMeshStandardMaterial?t:e).get(y.envMap||z),F=X&&X.mapping===Lr?X.image.height:null,ne=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const he=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,xe=he!==void 0?he.length:0;let Ue=0;B.morphAttributes.position!==void 0&&(Ue=1),B.morphAttributes.normal!==void 0&&(Ue=2),B.morphAttributes.color!==void 0&&(Ue=3);let Xe,nt,Ke,k;if(ne){const it=_n[ne];Xe=it.vertexShader,nt=it.fragmentShader}else Xe=y.vertexShader,nt=y.fragmentShader,l.update(y),Ke=l.getVertexShaderID(y),k=l.getFragmentShaderID(y);const $=i.getRenderTarget(),se=i.state.buffers.depth.getReversed(),ve=I.isInstancedMesh===!0,Se=I.isBatchedMesh===!0,Be=!!y.map,Ze=!!y.matcap,D=!!X,te=!!y.aoMap,Q=!!y.lightMap,j=!!y.bumpMap,K=!!y.normalMap,pe=!!y.displacementMap,re=!!y.emissiveMap,me=!!y.metalnessMap,He=!!y.roughnessMap,Ve=y.anisotropy>0,A=y.clearcoat>0,_=y.dispersion>0,G=y.iridescence>0,Z=y.sheen>0,ie=y.transmission>0,J=Ve&&!!y.anisotropyMap,De=A&&!!y.clearcoatMap,fe=A&&!!y.clearcoatNormalMap,Ce=A&&!!y.clearcoatRoughnessMap,Pe=G&&!!y.iridescenceMap,oe=G&&!!y.iridescenceThicknessMap,Te=Z&&!!y.sheenColorMap,ze=Z&&!!y.sheenRoughnessMap,Ie=!!y.specularMap,ye=!!y.specularColorMap,qe=!!y.specularIntensityMap,O=ie&&!!y.transmissionMap,ce=ie&&!!y.thicknessMap,ge=!!y.gradientMap,we=!!y.alphaMap,ae=y.alphaTest>0,ee=!!y.alphaHash,Le=!!y.extensions;let Ge=Wn;y.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ge=i.toneMapping);const ut={shaderID:ne,shaderType:y.type,shaderName:y.name,vertexShader:Xe,fragmentShader:nt,defines:y.defines,customVertexShaderID:Ke,customFragmentShaderID:k,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Se,batchingColor:Se&&I._colorsTexture!==null,instancing:ve,instancingColor:ve&&I.instanceColor!==null,instancingMorph:ve&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Wi,alphaToCoverage:!!y.alphaToCoverage,map:Be,matcap:Ze,envMap:D,envMapMode:D&&X.mapping,envMapCubeUVHeight:F,aoMap:te,lightMap:Q,bumpMap:j,normalMap:K,displacementMap:d&&pe,emissiveMap:re,normalMapObjectSpace:K&&y.normalMapType===tu,normalMapTangentSpace:K&&y.normalMapType===Dr,metalnessMap:me,roughnessMap:He,anisotropy:Ve,anisotropyMap:J,clearcoat:A,clearcoatMap:De,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ce,dispersion:_,iridescence:G,iridescenceMap:Pe,iridescenceThicknessMap:oe,sheen:Z,sheenColorMap:Te,sheenRoughnessMap:ze,specularMap:Ie,specularColorMap:ye,specularIntensityMap:qe,transmission:ie,transmissionMap:O,thicknessMap:ce,gradientMap:ge,opaque:y.transparent===!1&&y.blending===Bi&&y.alphaToCoverage===!1,alphaMap:we,alphaTest:ae,alphaHash:ee,combine:y.combine,mapUv:Be&&x(y.map.channel),aoMapUv:te&&x(y.aoMap.channel),lightMapUv:Q&&x(y.lightMap.channel),bumpMapUv:j&&x(y.bumpMap.channel),normalMapUv:K&&x(y.normalMap.channel),displacementMapUv:pe&&x(y.displacementMap.channel),emissiveMapUv:re&&x(y.emissiveMap.channel),metalnessMapUv:me&&x(y.metalnessMap.channel),roughnessMapUv:He&&x(y.roughnessMap.channel),anisotropyMapUv:J&&x(y.anisotropyMap.channel),clearcoatMapUv:De&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:ze&&x(y.sheenRoughnessMap.channel),specularMapUv:Ie&&x(y.specularMap.channel),specularColorMapUv:ye&&x(y.specularColorMap.channel),specularIntensityMapUv:qe&&x(y.specularIntensityMap.channel),transmissionMapUv:O&&x(y.transmissionMap.channel),thicknessMapUv:ce&&x(y.thicknessMap.channel),alphaMapUv:we&&x(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(K||Ve),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(Be||we),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:se,skinning:I.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ue,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Be&&y.map.isVideoTexture===!0&&tt.getTransfer(y.map.colorSpace)===at,decodeVideoTextureEmissive:re&&y.emissiveMap.isVideoTexture===!0&&tt.getTransfer(y.emissiveMap.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Nt,flipSided:y.side===Pt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Le&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&y.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)M.push(L),M.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(T(M,y),S(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function T(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const M=g[y.type];let L;if(M){const b=_n[M];L=Xu.clone(b.uniforms)}else L=y.uniforms;return L}function C(y,M){let L;for(let b=0,I=h.length;b<I;b++){const N=h[b];if(N.cacheKey===M){L=N,++L.usedTimes;break}}return L===void 0&&(L=new K0(i,M,y,r),h.push(L)),L}function R(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function P(y){l.remove(y)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:C,releaseProgram:R,releaseShaderCache:P,programs:h,dispose:w}}function ng(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ig(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function lc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,g,x,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,d,f,g,x,m){const p=o(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,x,m){const p=o(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||ig),n.length>1&&n.sort(d||lc),s.length>1&&s.sort(d||lc)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function sg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new cc,i.set(n,[o])):s>=r.length?(o=new cc,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function rg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ae};break;case"SpotLight":t={position:new U,direction:new U,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function og(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ag=0;function lg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function cg(i){const e=new rg,t=og(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,r=new ht,o=new ht;function a(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,T=0,S=0,v=0,C=0,R=0,P=0;c.sort(lg);for(let y=0,M=c.length;y<M;y++){const L=c[y],b=L.color,I=L.intensity,N=L.distance,B=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=b.r*I,u+=b.g*I,d+=b.b*I;else if(L.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(L.sh.coefficients[z],I);P++}else if(L.isDirectionalLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const X=L.shadow,F=t.get(L);F.shadowIntensity=X.intensity,F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,n.directionalShadow[f]=F,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=L.shadow.matrix,T++}n.directional[f]=z,f++}else if(L.isSpotLight){const z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(b).multiplyScalar(I),z.distance=N,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,n.spot[x]=z;const X=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,X.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[x]=X.matrix,L.castShadow){const F=t.get(L);F.shadowIntensity=X.intensity,F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,n.spotShadow[x]=F,n.spotShadowMap[x]=B,v++}x++}else if(L.isRectAreaLight){const z=e.get(L);z.color.copy(b).multiplyScalar(I),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=z,m++}else if(L.isPointLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){const X=L.shadow,F=t.get(L);F.shadowIntensity=X.intensity,F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,F.shadowCameraNear=X.camera.near,F.shadowCameraFar=X.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=L.shadow.matrix,S++}n.point[g]=z,g++}else if(L.isHemisphereLight){const z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(I),z.groundColor.copy(L.groundColor).multiplyScalar(I),n.hemi[p]=z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const w=n.hash;(w.directionalLength!==f||w.pointLength!==g||w.spotLength!==x||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==T||w.numPointShadows!==S||w.numSpotShadows!==v||w.numSpotMaps!==C||w.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,w.directionalLength=f,w.pointLength=g,w.spotLength=x,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=T,w.numPointShadows=S,w.numSpotShadows=v,w.numSpotMaps=C,w.numLightProbes=P,n.version=ag++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const S=c[p];if(S.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(S.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function hc(i){const e=new cg(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function hg(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new hc(i),e.set(s,[a])):r>=o.length?(a=new hc(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const ug=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dg=`uniform sampler2D shadow_pass;
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
}`;function fg(i,e,t){let n=new Ua;const s=new ue,r=new ue,o=new rt,a=new sh({depthPacking:Lc}),l=new Nd,c={},h=t.maxTextureSize,u={[qn]:Pt,[Pt]:qn,[Nt]:Nt},d=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:ug,fragmentShader:dg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new vt;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Qe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mc;let p=this.type;this.render=function(R,P,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),b=i.state;b.setBlending(Gn),b.buffers.depth.getReversed()===!0?b.buffers.color.setClear(0,0,0,0):b.buffers.color.setClear(1,1,1,1),b.buffers.depth.setTest(!0),b.setScissorTest(!1);const I=p!==Pn&&this.type===Pn,N=p===Pn&&this.type!==Pn;for(let B=0,z=R.length;B<z;B++){const X=R[B],F=X.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const ne=F.getFrameExtents();if(s.multiply(ne),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,F.mapSize.y=r.y)),F.map===null||I===!0||N===!0){const xe=this.type!==Pn?{minFilter:Lt,magFilter:Lt}:{};F.map!==null&&F.map.dispose(),F.map=new Yn(s.x,s.y,xe),F.map.texture.name=X.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const he=F.getViewportCount();for(let xe=0;xe<he;xe++){const Ue=F.getViewport(xe);o.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),b.viewport(o),F.updateMatrices(X,xe),n=F.getFrustum(),v(P,w,F.camera,X,this.type)}F.isPointLightShadow!==!0&&this.type===Pn&&T(F,w),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,M,L)};function T(R,P){const w=e.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Yn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(P,null,w,d,x,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(P,null,w,f,x,null)}function S(R,P,w,y){let M=null;const L=w.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)M=L;else if(M=w.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const b=M.uuid,I=P.uuid;let N=c[b];N===void 0&&(N={},c[b]=N);let B=N[I];B===void 0&&(B=M.clone(),N[I]=B,P.addEventListener("dispose",C)),M=B}if(M.visible=P.visible,M.wireframe=P.wireframe,y===Pn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const b=i.properties.get(M);b.light=w}return M}function v(R,P,w,y,M){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Pn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,R.matrixWorld);const I=e.update(R),N=R.material;if(Array.isArray(N)){const B=I.groups;for(let z=0,X=B.length;z<X;z++){const F=B[z],ne=N[F.materialIndex];if(ne&&ne.visible){const he=S(R,ne,y,M);R.onBeforeShadow(i,R,P,w,I,he,F),i.renderBufferDirect(w,null,I,he,R,F),R.onAfterShadow(i,R,P,w,I,he,F)}}}else if(N.visible){const B=S(R,N,y,M);R.onBeforeShadow(i,R,P,w,I,B,null),i.renderBufferDirect(w,null,I,B,R,null),R.onAfterShadow(i,R,P,w,I,B,null)}}const b=R.children;for(let I=0,N=b.length;I<N;I++)v(b[I],P,w,y,M)}function C(R){R.target.removeEventListener("dispose",C);for(const w in c){const y=c[w],M=R.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const pg={[Ro]:Co,[Po]:Io,[Lo]:Uo,[Vi]:Do,[Co]:Ro,[Io]:Po,[Uo]:Lo,[Do]:Vi};function mg(i,e){function t(){let O=!1;const ce=new rt;let ge=null;const we=new rt(0,0,0,0);return{setMask:function(ae){ge!==ae&&!O&&(i.colorMask(ae,ae,ae,ae),ge=ae)},setLocked:function(ae){O=ae},setClear:function(ae,ee,Le,Ge,ut){ut===!0&&(ae*=Ge,ee*=Ge,Le*=Ge),ce.set(ae,ee,Le,Ge),we.equals(ce)===!1&&(i.clearColor(ae,ee,Le,Ge),we.copy(ce))},reset:function(){O=!1,ge=null,we.set(-1,0,0,0)}}}function n(){let O=!1,ce=!1,ge=null,we=null,ae=null;return{setReversed:function(ee){if(ce!==ee){const Le=e.get("EXT_clip_control");ee?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ce=ee;const Ge=ae;ae=null,this.setClear(Ge)}},getReversed:function(){return ce},setTest:function(ee){ee?$(i.DEPTH_TEST):se(i.DEPTH_TEST)},setMask:function(ee){ge!==ee&&!O&&(i.depthMask(ee),ge=ee)},setFunc:function(ee){if(ce&&(ee=pg[ee]),we!==ee){switch(ee){case Ro:i.depthFunc(i.NEVER);break;case Co:i.depthFunc(i.ALWAYS);break;case Po:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case Lo:i.depthFunc(i.EQUAL);break;case Do:i.depthFunc(i.GEQUAL);break;case Io:i.depthFunc(i.GREATER);break;case Uo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=ee}},setLocked:function(ee){O=ee},setClear:function(ee){ae!==ee&&(ce&&(ee=1-ee),i.clearDepth(ee),ae=ee)},reset:function(){O=!1,ge=null,we=null,ae=null,ce=!1}}}function s(){let O=!1,ce=null,ge=null,we=null,ae=null,ee=null,Le=null,Ge=null,ut=null;return{setTest:function(it){O||(it?$(i.STENCIL_TEST):se(i.STENCIL_TEST))},setMask:function(it){ce!==it&&!O&&(i.stencilMask(it),ce=it)},setFunc:function(it,Tn,vn){(ge!==it||we!==Tn||ae!==vn)&&(i.stencilFunc(it,Tn,vn),ge=it,we=Tn,ae=vn)},setOp:function(it,Tn,vn){(ee!==it||Le!==Tn||Ge!==vn)&&(i.stencilOp(it,Tn,vn),ee=it,Le=Tn,Ge=vn)},setLocked:function(it){O=it},setClear:function(it){ut!==it&&(i.clearStencil(it),ut=it)},reset:function(){O=!1,ce=null,ge=null,we=null,ae=null,ee=null,Le=null,Ge=null,ut=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,T=null,S=null,v=null,C=null,R=null,P=new Ae(0,0,0),w=0,y=!1,M=null,L=null,b=null,I=null,N=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,X=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(F)[1]),z=X>=1):F.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),z=X>=2);let ne=null,he={};const xe=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),Xe=new rt().fromArray(xe),nt=new rt().fromArray(Ue);function Ke(O,ce,ge,we){const ae=new Uint8Array(4),ee=i.createTexture();i.bindTexture(O,ee),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<ge;Le++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(ce+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return ee}const k={};k[i.TEXTURE_2D]=Ke(i.TEXTURE_2D,i.TEXTURE_2D,1),k[i.TEXTURE_CUBE_MAP]=Ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[i.TEXTURE_2D_ARRAY]=Ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),k[i.TEXTURE_3D]=Ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(i.DEPTH_TEST),o.setFunc(Vi),j(!1),K(sl),$(i.CULL_FACE),te(Gn);function $(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function se(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function ve(O,ce){return u[O]!==ce?(i.bindFramebuffer(O,ce),u[O]=ce,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ce),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function Se(O,ce){let ge=f,we=!1;if(O){ge=d.get(ce),ge===void 0&&(ge=[],d.set(ce,ge));const ae=O.textures;if(ge.length!==ae.length||ge[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Le=ae.length;ee<Le;ee++)ge[ee]=i.COLOR_ATTACHMENT0+ee;ge.length=ae.length,we=!0}}else ge[0]!==i.BACK&&(ge[0]=i.BACK,we=!0);we&&i.drawBuffers(ge)}function Be(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const Ze={[ai]:i.FUNC_ADD,[Rh]:i.FUNC_SUBTRACT,[Ch]:i.FUNC_REVERSE_SUBTRACT};Ze[Ph]=i.MIN,Ze[Lh]=i.MAX;const D={[Dh]:i.ZERO,[Ih]:i.ONE,[Uh]:i.SRC_COLOR,[wo]:i.SRC_ALPHA,[kh]:i.SRC_ALPHA_SATURATE,[Bh]:i.DST_COLOR,[Fh]:i.DST_ALPHA,[Nh]:i.ONE_MINUS_SRC_COLOR,[Ao]:i.ONE_MINUS_SRC_ALPHA,[zh]:i.ONE_MINUS_DST_COLOR,[Oh]:i.ONE_MINUS_DST_ALPHA,[Vh]:i.CONSTANT_COLOR,[Hh]:i.ONE_MINUS_CONSTANT_COLOR,[Gh]:i.CONSTANT_ALPHA,[Wh]:i.ONE_MINUS_CONSTANT_ALPHA};function te(O,ce,ge,we,ae,ee,Le,Ge,ut,it){if(O===Gn){x===!0&&(se(i.BLEND),x=!1);return}if(x===!1&&($(i.BLEND),x=!0),O!==Ah){if(O!==m||it!==y){if((p!==ai||v!==ai)&&(i.blendEquation(i.FUNC_ADD),p=ai,v=ai),it)switch(O){case Bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.ONE,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ol:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case rl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ol:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}T=null,S=null,C=null,R=null,P.set(0,0,0),w=0,m=O,y=it}return}ae=ae||ce,ee=ee||ge,Le=Le||we,(ce!==p||ae!==v)&&(i.blendEquationSeparate(Ze[ce],Ze[ae]),p=ce,v=ae),(ge!==T||we!==S||ee!==C||Le!==R)&&(i.blendFuncSeparate(D[ge],D[we],D[ee],D[Le]),T=ge,S=we,C=ee,R=Le),(Ge.equals(P)===!1||ut!==w)&&(i.blendColor(Ge.r,Ge.g,Ge.b,ut),P.copy(Ge),w=ut),m=O,y=!1}function Q(O,ce){O.side===Nt?se(i.CULL_FACE):$(i.CULL_FACE);let ge=O.side===Pt;ce&&(ge=!ge),j(ge),O.blending===Bi&&O.transparent===!1?te(Gn):te(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const we=O.stencilWrite;a.setTest(we),we&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),re(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):se(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(O){M!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),M=O)}function K(O){O!==bh?($(i.CULL_FACE),O!==L&&(O===sl?i.cullFace(i.BACK):O===wh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):se(i.CULL_FACE),L=O}function pe(O){O!==b&&(z&&i.lineWidth(O),b=O)}function re(O,ce,ge){O?($(i.POLYGON_OFFSET_FILL),(I!==ce||N!==ge)&&(i.polygonOffset(ce,ge),I=ce,N=ge)):se(i.POLYGON_OFFSET_FILL)}function me(O){O?$(i.SCISSOR_TEST):se(i.SCISSOR_TEST)}function He(O){O===void 0&&(O=i.TEXTURE0+B-1),ne!==O&&(i.activeTexture(O),ne=O)}function Ve(O,ce,ge){ge===void 0&&(ne===null?ge=i.TEXTURE0+B-1:ge=ne);let we=he[ge];we===void 0&&(we={type:void 0,texture:void 0},he[ge]=we),(we.type!==O||we.texture!==ce)&&(ne!==ge&&(i.activeTexture(ge),ne=ge),i.bindTexture(O,ce||k[O]),we.type=O,we.texture=ce)}function A(){const O=he[ne];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(O){Xe.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Xe.copy(O))}function ze(O){nt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),nt.copy(O))}function Ie(O,ce){let ge=c.get(ce);ge===void 0&&(ge=new WeakMap,c.set(ce,ge));let we=ge.get(O);we===void 0&&(we=i.getUniformBlockIndex(ce,O.name),ge.set(O,we))}function ye(O,ce){const we=c.get(ce).get(O);l.get(ce)!==we&&(i.uniformBlockBinding(ce,we,O.__bindingPointIndex),l.set(ce,we))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ne=null,he={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,T=null,S=null,v=null,C=null,R=null,P=new Ae(0,0,0),w=0,y=!1,M=null,L=null,b=null,I=null,N=null,Xe.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:se,bindFramebuffer:ve,drawBuffers:Se,useProgram:Be,setBlending:te,setMaterial:Q,setFlipSided:j,setCullFace:K,setLineWidth:pe,setPolygonOffset:re,setScissorTest:me,activeTexture:He,bindTexture:Ve,unbindTexture:A,compressedTexImage2D:_,compressedTexImage3D:G,texImage2D:Pe,texImage3D:oe,updateUBOMapping:Ie,uniformBlockBinding:ye,texStorage2D:fe,texStorage3D:Ce,texSubImage2D:Z,texSubImage3D:ie,compressedTexSubImage2D:J,compressedTexSubImage3D:De,scissor:Te,viewport:ze,reset:qe}}function gg(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,_){return f?new OffscreenCanvas(A,_):Tr("canvas")}function x(A,_,G){let Z=1;const ie=Ve(A);if((ie.width>G||ie.height>G)&&(Z=G/Math.max(ie.width,ie.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const J=Math.floor(Z*ie.width),De=Math.floor(Z*ie.height);u===void 0&&(u=g(J,De));const fe=_?g(J,De):u;return fe.width=J,fe.height=De,fe.getContext("2d").drawImage(A,0,0,J,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+De+")."),fe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(A,_,G,Z,ie=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=_;if(_===i.RED&&(G===i.FLOAT&&(J=i.R32F),G===i.HALF_FLOAT&&(J=i.R16F),G===i.UNSIGNED_BYTE&&(J=i.R8)),_===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.R8UI),G===i.UNSIGNED_SHORT&&(J=i.R16UI),G===i.UNSIGNED_INT&&(J=i.R32UI),G===i.BYTE&&(J=i.R8I),G===i.SHORT&&(J=i.R16I),G===i.INT&&(J=i.R32I)),_===i.RG&&(G===i.FLOAT&&(J=i.RG32F),G===i.HALF_FLOAT&&(J=i.RG16F),G===i.UNSIGNED_BYTE&&(J=i.RG8)),_===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RG8UI),G===i.UNSIGNED_SHORT&&(J=i.RG16UI),G===i.UNSIGNED_INT&&(J=i.RG32UI),G===i.BYTE&&(J=i.RG8I),G===i.SHORT&&(J=i.RG16I),G===i.INT&&(J=i.RG32I)),_===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RGB8UI),G===i.UNSIGNED_SHORT&&(J=i.RGB16UI),G===i.UNSIGNED_INT&&(J=i.RGB32UI),G===i.BYTE&&(J=i.RGB8I),G===i.SHORT&&(J=i.RGB16I),G===i.INT&&(J=i.RGB32I)),_===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),G===i.UNSIGNED_INT&&(J=i.RGBA32UI),G===i.BYTE&&(J=i.RGBA8I),G===i.SHORT&&(J=i.RGBA16I),G===i.INT&&(J=i.RGBA32I)),_===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),_===i.RGBA){const De=ie?Sr:tt.getTransfer(Z);G===i.FLOAT&&(J=i.RGBA32F),G===i.HALF_FLOAT&&(J=i.RGBA16F),G===i.UNSIGNED_BYTE&&(J=De===at?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(A,_){let G;return A?_===null||_===fi||_===Es?G=i.DEPTH24_STENCIL8:_===Mn?G=i.DEPTH32F_STENCIL8:_===Ss&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===fi||_===Es?G=i.DEPTH_COMPONENT24:_===Mn?G=i.DEPTH_COMPONENT32F:_===Ss&&(G=i.DEPTH_COMPONENT16),G}function C(A,_){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Lt&&A.minFilter!==xn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function R(A){const _=A.target;_.removeEventListener("dispose",R),w(_),_.isVideoTexture&&h.delete(_)}function P(A){const _=A.target;_.removeEventListener("dispose",P),M(_)}function w(A){const _=n.get(A);if(_.__webglInit===void 0)return;const G=A.source,Z=d.get(G);if(Z){const ie=Z[_.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&y(A),Object.keys(Z).length===0&&d.delete(G)}n.remove(A)}function y(A){const _=n.get(A);i.deleteTexture(_.__webglTexture);const G=A.source,Z=d.get(G);delete Z[_.__cacheKey],o.memory.textures--}function M(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let ie=0;ie<_.__webglFramebuffer[Z].length;ie++)i.deleteFramebuffer(_.__webglFramebuffer[Z][ie]);else i.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[Z]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const G=A.textures;for(let Z=0,ie=G.length;Z<ie;Z++){const J=n.get(G[Z]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(G[Z])}n.remove(A)}let L=0;function b(){L=0}function I(){const A=L;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function N(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function B(A,_){const G=n.get(A);if(A.isVideoTexture&&me(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(G,A,_);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+_)}function z(A,_){const G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){k(G,A,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+_)}function X(A,_){const G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){k(G,A,_);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+_)}function F(A,_){const G=n.get(A);if(A.version>0&&G.__version!==A.version){$(G,A,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+_)}const ne={[Oo]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[Bo]:i.MIRRORED_REPEAT},he={[Lt]:i.NEAREST,[Qh]:i.NEAREST_MIPMAP_NEAREST,[zs]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[Hr]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},xe={[nu]:i.NEVER,[lu]:i.ALWAYS,[iu]:i.LESS,[Dc]:i.LEQUAL,[su]:i.EQUAL,[au]:i.GEQUAL,[ru]:i.GREATER,[ou]:i.NOTEQUAL};function Ue(A,_){if(_.type===Mn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===xn||_.magFilter===Hr||_.magFilter===zs||_.magFilter===hi||_.minFilter===xn||_.minFilter===Hr||_.minFilter===zs||_.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ne[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ne[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ne[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,he[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,he[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,xe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Lt||_.minFilter!==zs&&_.minFilter!==hi||_.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Xe(A,_){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));const Z=_.source;let ie=d.get(Z);ie===void 0&&(ie={},d.set(Z,ie));const J=N(_);if(J!==A.__cacheKey){ie[J]===void 0&&(ie[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ie[J].usedTimes++;const De=ie[A.__cacheKey];De!==void 0&&(ie[A.__cacheKey].usedTimes--,De.usedTimes===0&&y(_)),A.__cacheKey=J,A.__webglTexture=ie[J].texture}return G}function nt(A,_,G){return Math.floor(Math.floor(A/G)/_)}function Ke(A,_,G,Z){const J=A.updateRanges;if(J.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,G,Z,_.data);else{J.sort((oe,Te)=>oe.start-Te.start);let De=0;for(let oe=1;oe<J.length;oe++){const Te=J[De],ze=J[oe],Ie=Te.start+Te.count,ye=nt(ze.start,_.width,4),qe=nt(Te.start,_.width,4);ze.start<=Ie+1&&ye===qe&&nt(ze.start+ze.count-1,_.width,4)===ye?Te.count=Math.max(Te.count,ze.start+ze.count-Te.start):(++De,J[De]=ze)}J.length=De+1;const fe=i.getParameter(i.UNPACK_ROW_LENGTH),Ce=i.getParameter(i.UNPACK_SKIP_PIXELS),Pe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let oe=0,Te=J.length;oe<Te;oe++){const ze=J[oe],Ie=Math.floor(ze.start/4),ye=Math.ceil(ze.count/4),qe=Ie%_.width,O=Math.floor(Ie/_.width),ce=ye,ge=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,qe,O,ce,ge,G,Z,_.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,fe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ce),i.pixelStorei(i.UNPACK_SKIP_ROWS,Pe)}}function k(A,_,G){let Z=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=i.TEXTURE_3D);const ie=Xe(A,_),J=_.source;t.bindTexture(Z,A.__webglTexture,i.TEXTURE0+G);const De=n.get(J);if(J.version!==De.__version||ie===!0){t.activeTexture(i.TEXTURE0+G);const fe=tt.getPrimaries(tt.workingColorSpace),Ce=_.colorSpace===kn?null:tt.getPrimaries(_.colorSpace),Pe=_.colorSpace===kn||fe===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let oe=x(_.image,!1,s.maxTextureSize);oe=He(_,oe);const Te=r.convert(_.format,_.colorSpace),ze=r.convert(_.type);let Ie=S(_.internalFormat,Te,ze,_.colorSpace,_.isVideoTexture);Ue(Z,_);let ye;const qe=_.mipmaps,O=_.isVideoTexture!==!0,ce=De.__version===void 0||ie===!0,ge=J.dataReady,we=C(_,oe);if(_.isDepthTexture)Ie=v(_.format===bs,_.type),ce&&(O?t.texStorage2D(i.TEXTURE_2D,1,Ie,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Ie,oe.width,oe.height,0,Te,ze,null));else if(_.isDataTexture)if(qe.length>0){O&&ce&&t.texStorage2D(i.TEXTURE_2D,we,Ie,qe[0].width,qe[0].height);for(let ae=0,ee=qe.length;ae<ee;ae++)ye=qe[ae],O?ge&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ye.width,ye.height,Te,ze,ye.data):t.texImage2D(i.TEXTURE_2D,ae,Ie,ye.width,ye.height,0,Te,ze,ye.data);_.generateMipmaps=!1}else O?(ce&&t.texStorage2D(i.TEXTURE_2D,we,Ie,oe.width,oe.height),ge&&Ke(_,oe,Te,ze)):t.texImage2D(i.TEXTURE_2D,0,Ie,oe.width,oe.height,0,Te,ze,oe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){O&&ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Ie,qe[0].width,qe[0].height,oe.depth);for(let ae=0,ee=qe.length;ae<ee;ae++)if(ye=qe[ae],_.format!==rn)if(Te!==null)if(O){if(ge)if(_.layerUpdates.size>0){const Le=kl(ye.width,ye.height,_.format,_.type);for(const Ge of _.layerUpdates){const ut=ye.data.subarray(Ge*Le/ye.data.BYTES_PER_ELEMENT,(Ge+1)*Le/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,Ge,ye.width,ye.height,1,Te,ut)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,ye.width,ye.height,oe.depth,Te,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,Ie,ye.width,ye.height,oe.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,ye.width,ye.height,oe.depth,Te,ze,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,Ie,ye.width,ye.height,oe.depth,0,Te,ze,ye.data)}else{O&&ce&&t.texStorage2D(i.TEXTURE_2D,we,Ie,qe[0].width,qe[0].height);for(let ae=0,ee=qe.length;ae<ee;ae++)ye=qe[ae],_.format!==rn?Te!==null?O?ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,ye.width,ye.height,Te,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,Ie,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ge&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ye.width,ye.height,Te,ze,ye.data):t.texImage2D(i.TEXTURE_2D,ae,Ie,ye.width,ye.height,0,Te,ze,ye.data)}else if(_.isDataArrayTexture)if(O){if(ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Ie,oe.width,oe.height,oe.depth),ge)if(_.layerUpdates.size>0){const ae=kl(oe.width,oe.height,_.format,_.type);for(const ee of _.layerUpdates){const Le=oe.data.subarray(ee*ae/oe.data.BYTES_PER_ELEMENT,(ee+1)*ae/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,oe.width,oe.height,1,Te,ze,Le)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Te,ze,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,oe.width,oe.height,oe.depth,0,Te,ze,oe.data);else if(_.isData3DTexture)O?(ce&&t.texStorage3D(i.TEXTURE_3D,we,Ie,oe.width,oe.height,oe.depth),ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Te,ze,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,oe.width,oe.height,oe.depth,0,Te,ze,oe.data);else if(_.isFramebufferTexture){if(ce)if(O)t.texStorage2D(i.TEXTURE_2D,we,Ie,oe.width,oe.height);else{let ae=oe.width,ee=oe.height;for(let Le=0;Le<we;Le++)t.texImage2D(i.TEXTURE_2D,Le,Ie,ae,ee,0,Te,ze,null),ae>>=1,ee>>=1}}else if(qe.length>0){if(O&&ce){const ae=Ve(qe[0]);t.texStorage2D(i.TEXTURE_2D,we,Ie,ae.width,ae.height)}for(let ae=0,ee=qe.length;ae<ee;ae++)ye=qe[ae],O?ge&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Te,ze,ye):t.texImage2D(i.TEXTURE_2D,ae,Ie,Te,ze,ye);_.generateMipmaps=!1}else if(O){if(ce){const ae=Ve(oe);t.texStorage2D(i.TEXTURE_2D,we,Ie,ae.width,ae.height)}ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,ze,oe)}else t.texImage2D(i.TEXTURE_2D,0,Ie,Te,ze,oe);m(_)&&p(Z),De.__version=J.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function $(A,_,G){if(_.image.length!==6)return;const Z=Xe(A,_),ie=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+G);const J=n.get(ie);if(ie.version!==J.__version||Z===!0){t.activeTexture(i.TEXTURE0+G);const De=tt.getPrimaries(tt.workingColorSpace),fe=_.colorSpace===kn?null:tt.getPrimaries(_.colorSpace),Ce=_.colorSpace===kn||De===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Pe=_.isCompressedTexture||_.image[0].isCompressedTexture,oe=_.image[0]&&_.image[0].isDataTexture,Te=[];for(let ee=0;ee<6;ee++)!Pe&&!oe?Te[ee]=x(_.image[ee],!0,s.maxCubemapSize):Te[ee]=oe?_.image[ee].image:_.image[ee],Te[ee]=He(_,Te[ee]);const ze=Te[0],Ie=r.convert(_.format,_.colorSpace),ye=r.convert(_.type),qe=S(_.internalFormat,Ie,ye,_.colorSpace),O=_.isVideoTexture!==!0,ce=J.__version===void 0||Z===!0,ge=ie.dataReady;let we=C(_,ze);Ue(i.TEXTURE_CUBE_MAP,_);let ae;if(Pe){O&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,qe,ze.width,ze.height);for(let ee=0;ee<6;ee++){ae=Te[ee].mipmaps;for(let Le=0;Le<ae.length;Le++){const Ge=ae[Le];_.format!==rn?Ie!==null?O?ge&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Le,0,0,Ge.width,Ge.height,Ie,Ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Le,qe,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Le,0,0,Ge.width,Ge.height,Ie,ye,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Le,qe,Ge.width,Ge.height,0,Ie,ye,Ge.data)}}}else{if(ae=_.mipmaps,O&&ce){ae.length>0&&we++;const ee=Ve(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,qe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(oe){O?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Te[ee].width,Te[ee].height,Ie,ye,Te[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,qe,Te[ee].width,Te[ee].height,0,Ie,ye,Te[ee].data);for(let Le=0;Le<ae.length;Le++){const ut=ae[Le].image[ee].image;O?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Le+1,0,0,ut.width,ut.height,Ie,ye,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Le+1,qe,ut.width,ut.height,0,Ie,ye,ut.data)}}else{O?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ie,ye,Te[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,qe,Ie,ye,Te[ee]);for(let Le=0;Le<ae.length;Le++){const Ge=ae[Le];O?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Le+1,0,0,Ie,ye,Ge.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Le+1,qe,Ie,ye,Ge.image[ee])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),J.__version=ie.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function se(A,_,G,Z,ie,J){const De=r.convert(G.format,G.colorSpace),fe=r.convert(G.type),Ce=S(G.internalFormat,De,fe,G.colorSpace),Pe=n.get(_),oe=n.get(G);if(oe.__renderTarget=_,!Pe.__hasExternalTextures){const Te=Math.max(1,_.width>>J),ze=Math.max(1,_.height>>J);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,J,Ce,Te,ze,_.depth,0,De,fe,null):t.texImage2D(ie,J,Ce,Te,ze,0,De,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),re(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ie,oe.__webglTexture,0,pe(_)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ie,oe.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(A,_,G){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){const Z=_.depthTexture,ie=Z&&Z.isDepthTexture?Z.type:null,J=v(_.stencilBuffer,ie),De=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=pe(_);re(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,J,_.width,_.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,J,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,J,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,A)}else{const Z=_.textures;for(let ie=0;ie<Z.length;ie++){const J=Z[ie],De=r.convert(J.format,J.colorSpace),fe=r.convert(J.type),Ce=S(J.internalFormat,De,fe,J.colorSpace),Pe=pe(_);G&&re(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,Ce,_.width,_.height):re(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,Ce,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Ce,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(A,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(_.depthTexture);Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),B(_.depthTexture,0);const ie=Z.__webglTexture,J=pe(_);if(_.depthTexture.format===Ts)re(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(_.depthTexture.format===bs)re(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Be(A){const _=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){const ie=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",ie)};Z.addEventListener("dispose",ie),_.__depthDisposeCallback=ie}_.__boundDepthTexture=Z}if(A.depthTexture&&!_.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Z=A.texture.mipmaps;Z&&Z.length>0?Se(_.__webglFramebuffer[0],A):Se(_.__webglFramebuffer,A)}else if(G){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=i.createRenderbuffer(),ve(_.__webglDepthbuffer[Z],A,!1);else{const ie=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,J)}}else{const Z=A.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ve(_.__webglDepthbuffer,A,!1);else{const ie=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,J)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(A,_,G){const Z=n.get(A);_!==void 0&&se(Z.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Be(A)}function D(A){const _=A.texture,G=n.get(A),Z=n.get(_);A.addEventListener("dispose",P);const ie=A.textures,J=A.isWebGLCubeRenderTarget===!0,De=ie.length>1;if(De||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=_.version,o.memory.textures++),J){G.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0){G.__webglFramebuffer[fe]=[];for(let Ce=0;Ce<_.mipmaps.length;Ce++)G.__webglFramebuffer[fe][Ce]=i.createFramebuffer()}else G.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){G.__webglFramebuffer=[];for(let fe=0;fe<_.mipmaps.length;fe++)G.__webglFramebuffer[fe]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(De)for(let fe=0,Ce=ie.length;fe<Ce;fe++){const Pe=n.get(ie[fe]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&re(A)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const Ce=ie[fe];G.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[fe]);const Pe=r.convert(Ce.format,Ce.colorSpace),oe=r.convert(Ce.type),Te=S(Ce.internalFormat,Pe,oe,Ce.colorSpace,A.isXRRenderTarget===!0),ze=pe(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Te,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,G.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ve(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,_);for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ce=0;Ce<_.mipmaps.length;Ce++)se(G.__webglFramebuffer[fe][Ce],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ce);else se(G.__webglFramebuffer[fe],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let fe=0,Ce=ie.length;fe<Ce;fe++){const Pe=ie[fe],oe=n.get(Pe);let Te=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Te=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,oe.__webglTexture),Ue(Te,Pe),se(G.__webglFramebuffer,A,Pe,i.COLOR_ATTACHMENT0+fe,Te,0),m(Pe)&&p(Te)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,Z.__webglTexture),Ue(fe,_),_.mipmaps&&_.mipmaps.length>0)for(let Ce=0;Ce<_.mipmaps.length;Ce++)se(G.__webglFramebuffer[Ce],A,_,i.COLOR_ATTACHMENT0,fe,Ce);else se(G.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,fe,0);m(_)&&p(fe),t.unbindTexture()}A.depthBuffer&&Be(A)}function te(A){const _=A.textures;for(let G=0,Z=_.length;G<Z;G++){const ie=_[G];if(m(ie)){const J=T(A),De=n.get(ie).__webglTexture;t.bindTexture(J,De),p(J),t.unbindTexture()}}}const Q=[],j=[];function K(A){if(A.samples>0){if(re(A)===!1){const _=A.textures,G=A.width,Z=A.height;let ie=i.COLOR_BUFFER_BIT;const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(A),fe=_.length>1;if(fe)for(let Pe=0;Pe<_.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const Ce=A.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Pe=0;Pe<_.length;Pe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[Pe]);const oe=n.get(_[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,G,Z,0,0,G,Z,ie,i.NEAREST),l===!0&&(Q.length=0,j.length=0,Q.push(i.COLOR_ATTACHMENT0+Pe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Q.push(J),j.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let Pe=0;Pe<_.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,De.__webglColorRenderbuffer[Pe]);const oe=n.get(_[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function pe(A){return Math.min(s.maxSamples,A.samples)}function re(A){const _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function me(A){const _=o.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function He(A,_){const G=A.colorSpace,Z=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Wi&&G!==kn&&(tt.getTransfer(G)===at?(Z!==rn||ie!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),_}function Ve(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=b,this.setTexture2D=B,this.setTexture2DArray=z,this.setTexture3D=X,this.setTextureCube=F,this.rebindTextures=Ze,this.setupRenderTarget=D,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=se,this.useMultisampledRTT=re}function vg(i,e){function t(n,s=kn){let r;const o=tt.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===ba)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ac)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Tc)return i.BYTE;if(n===bc)return i.SHORT;if(n===Ss)return i.UNSIGNED_SHORT;if(n===Ta)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===$i)return i.HALF_FLOAT;if(n===Rc)return i.ALPHA;if(n===Cc)return i.RGB;if(n===rn)return i.RGBA;if(n===Ts)return i.DEPTH_COMPONENT;if(n===bs)return i.DEPTH_STENCIL;if(n===Aa)return i.RED;if(n===Ra)return i.RED_INTEGER;if(n===Pc)return i.RG;if(n===Ca)return i.RG_INTEGER;if(n===Pa)return i.RGBA_INTEGER;if(n===mr||n===gr||n===vr||n===_r)if(o===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zo||n===ko||n===Vo||n===Ho)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Go||n===Wo||n===Xo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Go||n===Wo)return o===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xo)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qo||n===Yo||n===$o||n===Zo||n===Jo||n===Ko||n===jo||n===Qo||n===ea||n===ta||n===na||n===ia||n===sa||n===ra)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qo)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yo)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$o)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zo)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jo)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ko)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jo)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qo)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ea)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ta)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===na)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ia)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sa)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ra)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oa||n===aa||n===la)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===oa)return o===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===aa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===la)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ca||n===ha||n===ua||n===da)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ca)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ha)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===da)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const _g=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xg=`
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

}`;class Mg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new qc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ln({vertexShader:_g,fragmentShader:xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qe(new ji(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yg extends Zi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",m=new Mg,p={},T=t.getContextAttributes();let S=null,v=null;const C=[],R=[],P=new ue;let w=null;const y=new kt;y.viewport=new rt;const M=new kt;M.viewport=new rt;const L=[y,M],b=new kd;let I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let $=C[k];return $===void 0&&($=new co,C[k]=$),$.getTargetRaySpace()},this.getControllerGrip=function(k){let $=C[k];return $===void 0&&($=new co,C[k]=$),$.getGripSpace()},this.getHand=function(k){let $=C[k];return $===void 0&&($=new co,C[k]=$),$.getHandSpace()};function B(k){const $=R.indexOf(k.inputSource);if($===-1)return;const se=C[$];se!==void 0&&(se.update(k.inputSource,k.frame,c||o),se.dispatchEvent({type:k.type,data:k.inputSource}))}function z(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",X);for(let k=0;k<C.length;k++){const $=R[k];$!==null&&(R[k]=null,C[k].disconnect($))}I=null,N=null,m.reset();for(const k in p)delete p[k];e.setRenderTarget(S),f=null,d=null,u=null,s=null,v=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",z),s.addEventListener("inputsourceschange",X),T.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,ve=null,Se=null;T.depth&&(Se=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=T.stencil?bs:Ts,ve=T.stencil?Es:fi);const Be={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Yn(d.textureWidth,d.textureHeight,{format:rn,type:Sn,depthTexture:new Na(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const se={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Yn(f.framebufferWidth,f.framebufferHeight,{format:rn,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ke.setContext(s),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(k){for(let $=0;$<k.removed.length;$++){const se=k.removed[$],ve=R.indexOf(se);ve>=0&&(R[ve]=null,C[ve].disconnect(se))}for(let $=0;$<k.added.length;$++){const se=k.added[$];let ve=R.indexOf(se);if(ve===-1){for(let Be=0;Be<C.length;Be++)if(Be>=R.length){R.push(se),ve=Be;break}else if(R[Be]===null){R[Be]=se,ve=Be;break}if(ve===-1)break}const Se=C[ve];Se&&Se.connect(se)}}const F=new U,ne=new U;function he(k,$,se){F.setFromMatrixPosition($.matrixWorld),ne.setFromMatrixPosition(se.matrixWorld);const ve=F.distanceTo(ne),Se=$.projectionMatrix.elements,Be=se.projectionMatrix.elements,Ze=Se[14]/(Se[10]-1),D=Se[14]/(Se[10]+1),te=(Se[9]+1)/Se[5],Q=(Se[9]-1)/Se[5],j=(Se[8]-1)/Se[0],K=(Be[8]+1)/Be[0],pe=Ze*j,re=Ze*K,me=ve/(-j+K),He=me*-j;if($.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(He),k.translateZ(me),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Se[10]===-1)k.projectionMatrix.copy($.projectionMatrix),k.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Ve=Ze+me,A=D+me,_=pe-He,G=re+(ve-He),Z=te*D/A*Ve,ie=Q*D/A*Ve;k.projectionMatrix.makePerspective(_,G,Z,ie,Ve,A),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function xe(k,$){$===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices($.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let $=k.near,se=k.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(se=m.depthFar)),b.near=M.near=y.near=$,b.far=M.far=y.far=se,(I!==b.near||N!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,N=b.far),b.layers.mask=k.layers.mask|6,y.layers.mask=b.layers.mask&3,M.layers.mask=b.layers.mask&5;const ve=k.parent,Se=b.cameras;xe(b,ve);for(let Be=0;Be<Se.length;Be++)xe(Se[Be],ve);Se.length===2?he(b,y,M):b.projectionMatrix.copy(y.projectionMatrix),Ue(k,b,ve)};function Ue(k,$,se){se===null?k.matrix.copy($.matrixWorld):(k.matrix.copy(se.matrixWorld),k.matrix.invert(),k.matrix.multiply($.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy($.projectionMatrix),k.projectionMatrixInverse.copy($.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Xi*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(b)},this.getCameraTexture=function(k){return p[k]};let Xe=null;function nt(k,$){if(h=$.getViewerPose(c||o),g=$,h!==null){const se=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ve=!1;se.length!==b.cameras.length&&(b.cameras.length=0,ve=!0);for(let D=0;D<se.length;D++){const te=se[D];let Q=null;if(f!==null)Q=f.getViewport(te);else{const K=u.getViewSubImage(d,te);Q=K.viewport,D===0&&(e.setRenderTargetTextures(v,K.colorTexture,K.depthStencilTexture),e.setRenderTarget(v))}let j=L[D];j===void 0&&(j=new kt,j.layers.enable(D),j.viewport=new rt,L[D]=j),j.matrix.fromArray(te.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(te.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Q.x,Q.y,Q.width,Q.height),D===0&&(b.matrix.copy(j.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ve===!0&&b.cameras.push(j)}const Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const D=u.getDepthInformation(se[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(Se&&Se.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let D=0;D<se.length;D++){const te=se[D].camera;if(te){let Q=p[te];Q||(Q=new qc,p[te]=Q);const j=u.getCameraImage(te);Q.sourceTexture=j}}}}for(let se=0;se<C.length;se++){const ve=R[se],Se=C[se];ve!==null&&Se!==void 0&&Se.update(ve,$,c||o)}Xe&&Xe(k,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const Ke=new oh;Ke.setAnimationLoop(nt),this.setAnimationLoop=function(k){Xe=k},this.dispose=function(){}}}const ni=new gn,Sg=new ht;function Eg(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,kc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Pt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Pt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),S=T.envMap,v=T.envMapRotation;S&&(m.envMap.value=S,ni.copy(v),ni.x*=-1,ni.y*=-1,ni.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),m.envMapRotation.value.setFromMatrix4(Sg.makeRotationFromEuler(ni)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Tg(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){const v=S.program;n.uniformBlockBinding(T,v)}function c(T,S){let v=s[T.id];v===void 0&&(g(T),v=h(T),s[T.id]=v,T.addEventListener("dispose",m));const C=S.program;n.updateUBOMapping(T,C);const R=e.render.frame;r[T.id]!==R&&(d(T),r[T.id]=R)}function h(T){const S=u();T.__bindingPointIndex=S;const v=i.createBuffer(),C=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const S=s[T.id],v=T.uniforms,C=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let R=0,P=v.length;R<P;R++){const w=Array.isArray(v[R])?v[R]:[v[R]];for(let y=0,M=w.length;y<M;y++){const L=w[y];if(f(L,R,y,C)===!0){const b=L.__offset,I=Array.isArray(L.value)?L.value:[L.value];let N=0;for(let B=0;B<I.length;B++){const z=I[B],X=x(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,b+N,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,N),N+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,b,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(T,S,v,C){const R=T.value,P=S+"_"+v;if(C[P]===void 0)return typeof R=="number"||typeof R=="boolean"?C[P]=R:C[P]=R.clone(),!0;{const w=C[P];if(typeof R=="number"||typeof R=="boolean"){if(w!==R)return C[P]=R,!0}else if(w.equals(R)===!1)return w.copy(R),!0}return!1}function g(T){const S=T.uniforms;let v=0;const C=16;for(let P=0,w=S.length;P<w;P++){const y=Array.isArray(S[P])?S[P]:[S[P]];for(let M=0,L=y.length;M<L;M++){const b=y[M],I=Array.isArray(b.value)?b.value:[b.value];for(let N=0,B=I.length;N<B;N++){const z=I[N],X=x(z),F=v%C,ne=F%X.boundary,he=F+ne;v+=ne,he!==0&&C-he<X.storage&&(v+=C-he),b.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=v,v+=X.storage}}}const R=v%C;return R>0&&(v+=C-R),T.__size=v,T.__cache={},this}function x(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){const S=T.target;S.removeEventListener("dispose",m);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class bg{constructor(e={}){const{canvas:t=bu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const T=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let C=!1;this._outputColorSpace=Gt;let R=0,P=0,w=null,y=-1,M=null;const L=new rt,b=new rt;let I=null;const N=new Ae(0);let B=0,z=t.width,X=t.height,F=1,ne=null,he=null;const xe=new rt(0,0,z,X),Ue=new rt(0,0,z,X);let Xe=!1;const nt=new Ua;let Ke=!1,k=!1;const $=new ht,se=new U,ve=new rt,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function Ze(){return w===null?F:1}let D=n;function te(E,V){return t.getContext(E,V)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sa}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",ae,!1),D===null){const V="webgl2";if(D=te(V,E),D===null)throw te(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Q,j,K,pe,re,me,He,Ve,A,_,G,Z,ie,J,De,fe,Ce,Pe,oe,Te,ze,Ie,ye,qe;function O(){Q=new Nm(D),Q.init(),Ie=new vg(D,Q),j=new Rm(D,Q,e,Ie),K=new mg(D,Q),j.reversedDepthBuffer&&d&&K.buffers.depth.setReversed(!0),pe=new Bm(D),re=new ng,me=new gg(D,Q,K,re,j,Ie,pe),He=new Pm(v),Ve=new Um(v),A=new Gd(D),ye=new wm(D,A),_=new Fm(D,A,pe,ye),G=new km(D,_,A,pe),oe=new zm(D,j,me),fe=new Cm(re),Z=new tg(v,He,Ve,Q,j,ye,fe),ie=new Eg(v,re),J=new sg,De=new hg(Q),Pe=new bm(v,He,Ve,K,G,f,l),Ce=new fg(v,G,j),qe=new Tg(D,pe,j,K),Te=new Am(D,Q,pe),ze=new Om(D,Q,pe),pe.programs=Z.programs,v.capabilities=j,v.extensions=Q,v.properties=re,v.renderLists=J,v.shadowMap=Ce,v.state=K,v.info=pe}O();const ce=new yg(v,D);this.xr=ce,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Q.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Q.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(E){E!==void 0&&(F=E,this.setSize(z,X,!1))},this.getSize=function(E){return E.set(z,X)},this.setSize=function(E,V,q=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=E,X=V,t.width=Math.floor(E*F),t.height=Math.floor(V*F),q===!0&&(t.style.width=E+"px",t.style.height=V+"px"),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(z*F,X*F).floor()},this.setDrawingBufferSize=function(E,V,q){z=E,X=V,F=q,t.width=Math.floor(E*q),t.height=Math.floor(V*q),this.setViewport(0,0,E,V)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(xe)},this.setViewport=function(E,V,q,Y){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,V,q,Y),K.viewport(L.copy(xe).multiplyScalar(F).round())},this.getScissor=function(E){return E.copy(Ue)},this.setScissor=function(E,V,q,Y){E.isVector4?Ue.set(E.x,E.y,E.z,E.w):Ue.set(E,V,q,Y),K.scissor(b.copy(Ue).multiplyScalar(F).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(E){K.setScissorTest(Xe=E)},this.setOpaqueSort=function(E){ne=E},this.setTransparentSort=function(E){he=E},this.getClearColor=function(E){return E.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(E=!0,V=!0,q=!0){let Y=0;if(E){let H=!1;if(w!==null){const le=w.texture.format;H=le===Pa||le===Ca||le===Ra}if(H){const le=w.texture.type,Ee=le===Sn||le===fi||le===Ss||le===Es||le===ba||le===wa,Re=Pe.getClearColor(),be=Pe.getClearAlpha(),Oe=Re.r,ke=Re.g,Ne=Re.b;Ee?(g[0]=Oe,g[1]=ke,g[2]=Ne,g[3]=be,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Oe,x[1]=ke,x[2]=Ne,x[3]=be,D.clearBufferiv(D.COLOR,0,x))}else Y|=D.COLOR_BUFFER_BIT}V&&(Y|=D.DEPTH_BUFFER_BIT),q&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Pe.dispose(),J.dispose(),De.dispose(),re.dispose(),He.dispose(),Ve.dispose(),G.dispose(),ye.dispose(),qe.dispose(),Z.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",vn),ce.removeEventListener("sessionend",ja),Zn.stop()};function ge(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=pe.autoReset,V=Ce.enabled,q=Ce.autoUpdate,Y=Ce.needsUpdate,H=Ce.type;O(),pe.autoReset=E,Ce.enabled=V,Ce.autoUpdate=q,Ce.needsUpdate=Y,Ce.type=H}function ae(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ee(E){const V=E.target;V.removeEventListener("dispose",ee),Le(V)}function Le(E){Ge(E),re.remove(E)}function Ge(E){const V=re.get(E).programs;V!==void 0&&(V.forEach(function(q){Z.releaseProgram(q)}),E.isShaderMaterial&&Z.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,q,Y,H,le){V===null&&(V=Se);const Ee=H.isMesh&&H.matrixWorld.determinant()<0,Re=xh(E,V,q,Y,H);K.setMaterial(Y,Ee);let be=q.index,Oe=1;if(Y.wireframe===!0){if(be=_.getWireframeAttribute(q),be===void 0)return;Oe=2}const ke=q.drawRange,Ne=q.attributes.position;let je=ke.start*Oe,ot=(ke.start+ke.count)*Oe;le!==null&&(je=Math.max(je,le.start*Oe),ot=Math.min(ot,(le.start+le.count)*Oe)),be!==null?(je=Math.max(je,0),ot=Math.min(ot,be.count)):Ne!=null&&(je=Math.max(je,0),ot=Math.min(ot,Ne.count));const St=ot-je;if(St<0||St===1/0)return;ye.setup(H,Y,Re,q,be);let ft,ct=Te;if(be!==null&&(ft=A.get(be),ct=ze,ct.setIndex(ft)),H.isMesh)Y.wireframe===!0?(K.setLineWidth(Y.wireframeLinewidth*Ze()),ct.setMode(D.LINES)):ct.setMode(D.TRIANGLES);else if(H.isLine){let Fe=Y.linewidth;Fe===void 0&&(Fe=1),K.setLineWidth(Fe*Ze()),H.isLineSegments?ct.setMode(D.LINES):H.isLineLoop?ct.setMode(D.LINE_LOOP):ct.setMode(D.LINE_STRIP)}else H.isPoints?ct.setMode(D.POINTS):H.isSprite&&ct.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ws("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))ct.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Fe=H._multiDrawStarts,_t=H._multiDrawCounts,et=H._multiDrawCount,$t=be?A.get(be).bytesPerElement:1,_i=re.get(Y).currentProgram.getUniforms();for(let Zt=0;Zt<et;Zt++)_i.setValue(D,"_gl_DrawID",Zt),ct.render(Fe[Zt]/$t,_t[Zt])}else if(H.isInstancedMesh)ct.renderInstances(je,St,H.count);else if(q.isInstancedBufferGeometry){const Fe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,_t=Math.min(q.instanceCount,Fe);ct.renderInstances(je,St,_t)}else ct.render(je,St)};function ut(E,V,q){E.transparent===!0&&E.side===Nt&&E.forceSinglePass===!1?(E.side=Pt,E.needsUpdate=!0,Bs(E,V,q),E.side=qn,E.needsUpdate=!0,Bs(E,V,q),E.side=Nt):Bs(E,V,q)}this.compile=function(E,V,q=null){q===null&&(q=E),p=De.get(q),p.init(V),S.push(p),q.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),E!==q&&E.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const Y=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const le=H.material;if(le)if(Array.isArray(le))for(let Ee=0;Ee<le.length;Ee++){const Re=le[Ee];ut(Re,q,H),Y.add(Re)}else ut(le,q,H),Y.add(le)}),p=S.pop(),Y},this.compileAsync=function(E,V,q=null){const Y=this.compile(E,V,q);return new Promise(H=>{function le(){if(Y.forEach(function(Ee){re.get(Ee).currentProgram.isReady()&&Y.delete(Ee)}),Y.size===0){H(E);return}setTimeout(le,10)}Q.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let it=null;function Tn(E){it&&it(E)}function vn(){Zn.stop()}function ja(){Zn.start()}const Zn=new oh;Zn.setAnimationLoop(Tn),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(E){it=E,ce.setAnimationLoop(E),E===null?Zn.stop():Zn.start()},ce.addEventListener("sessionstart",vn),ce.addEventListener("sessionend",ja),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(V),V=ce.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,V,w),p=De.get(E,S.length),p.init(V),S.push(p),$.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),nt.setFromProjectionMatrix($,yn,V.reversedDepth),k=this.localClippingEnabled,Ke=fe.init(this.clippingPlanes,k),m=J.get(E,T.length),m.init(),T.push(m),ce.enabled===!0&&ce.isPresenting===!0){const le=v.xr.getDepthSensingMesh();le!==null&&kr(le,V,-1/0,v.sortObjects)}kr(E,V,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ne,he),Be=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Be&&Pe.addToRenderList(m,E),this.info.render.frame++,Ke===!0&&fe.beginShadows();const q=p.state.shadowsArray;Ce.render(q,E,V),Ke===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,H=m.transmissive;if(p.setupLights(),V.isArrayCamera){const le=V.cameras;if(H.length>0)for(let Ee=0,Re=le.length;Ee<Re;Ee++){const be=le[Ee];el(Y,H,E,be)}Be&&Pe.render(E);for(let Ee=0,Re=le.length;Ee<Re;Ee++){const be=le[Ee];Qa(m,E,be,be.viewport)}}else H.length>0&&el(Y,H,E,V),Be&&Pe.render(E),Qa(m,E,V);w!==null&&P===0&&(me.updateMultisampleRenderTarget(w),me.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(v,E,V),ye.resetDefaultState(),y=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],Ke===!0&&fe.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function kr(E,V,q,Y){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||nt.intersectsSprite(E)){Y&&ve.setFromMatrixPosition(E.matrixWorld).applyMatrix4($);const Ee=G.update(E),Re=E.material;Re.visible&&m.push(E,Ee,Re,q,ve.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||nt.intersectsObject(E))){const Ee=G.update(E),Re=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ve.copy(E.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),ve.copy(Ee.boundingSphere.center)),ve.applyMatrix4(E.matrixWorld).applyMatrix4($)),Array.isArray(Re)){const be=Ee.groups;for(let Oe=0,ke=be.length;Oe<ke;Oe++){const Ne=be[Oe],je=Re[Ne.materialIndex];je&&je.visible&&m.push(E,Ee,je,q,ve.z,Ne)}}else Re.visible&&m.push(E,Ee,Re,q,ve.z,null)}}const le=E.children;for(let Ee=0,Re=le.length;Ee<Re;Ee++)kr(le[Ee],V,q,Y)}function Qa(E,V,q,Y){const H=E.opaque,le=E.transmissive,Ee=E.transparent;p.setupLightsView(q),Ke===!0&&fe.setGlobalState(v.clippingPlanes,q),Y&&K.viewport(L.copy(Y)),H.length>0&&Os(H,V,q),le.length>0&&Os(le,V,q),Ee.length>0&&Os(Ee,V,q),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function el(E,V,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Yn(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?$i:Sn,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const le=p.state.transmissionRenderTarget[Y.id],Ee=Y.viewport||L;le.setSize(Ee.z*v.transmissionResolutionScale,Ee.w*v.transmissionResolutionScale);const Re=v.getRenderTarget(),be=v.getActiveCubeFace(),Oe=v.getActiveMipmapLevel();v.setRenderTarget(le),v.getClearColor(N),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),Be&&Pe.render(q);const ke=v.toneMapping;v.toneMapping=Wn;const Ne=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),Ke===!0&&fe.setGlobalState(v.clippingPlanes,Y),Os(E,q,Y),me.updateMultisampleRenderTarget(le),me.updateRenderTargetMipmap(le),Q.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let ot=0,St=V.length;ot<St;ot++){const ft=V[ot],ct=ft.object,Fe=ft.geometry,_t=ft.material,et=ft.group;if(_t.side===Nt&&ct.layers.test(Y.layers)){const $t=_t.side;_t.side=Pt,_t.needsUpdate=!0,tl(ct,q,Y,Fe,_t,et),_t.side=$t,_t.needsUpdate=!0,je=!0}}je===!0&&(me.updateMultisampleRenderTarget(le),me.updateRenderTargetMipmap(le))}v.setRenderTarget(Re,be,Oe),v.setClearColor(N,B),Ne!==void 0&&(Y.viewport=Ne),v.toneMapping=ke}function Os(E,V,q){const Y=V.isScene===!0?V.overrideMaterial:null;for(let H=0,le=E.length;H<le;H++){const Ee=E[H],Re=Ee.object,be=Ee.geometry,Oe=Ee.group;let ke=Ee.material;ke.allowOverride===!0&&Y!==null&&(ke=Y),Re.layers.test(q.layers)&&tl(Re,V,q,be,ke,Oe)}}function tl(E,V,q,Y,H,le){E.onBeforeRender(v,V,q,Y,H,le),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(v,V,q,Y,E,le),H.transparent===!0&&H.side===Nt&&H.forceSinglePass===!1?(H.side=Pt,H.needsUpdate=!0,v.renderBufferDirect(q,V,Y,H,E,le),H.side=qn,H.needsUpdate=!0,v.renderBufferDirect(q,V,Y,H,E,le),H.side=Nt):v.renderBufferDirect(q,V,Y,H,E,le),E.onAfterRender(v,V,q,Y,H,le)}function Bs(E,V,q){V.isScene!==!0&&(V=Se);const Y=re.get(E),H=p.state.lights,le=p.state.shadowsArray,Ee=H.state.version,Re=Z.getParameters(E,H.state,le,V,q),be=Z.getProgramCacheKey(Re);let Oe=Y.programs;Y.environment=E.isMeshStandardMaterial?V.environment:null,Y.fog=V.fog,Y.envMap=(E.isMeshStandardMaterial?Ve:He).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?V.environmentRotation:E.envMapRotation,Oe===void 0&&(E.addEventListener("dispose",ee),Oe=new Map,Y.programs=Oe);let ke=Oe.get(be);if(ke!==void 0){if(Y.currentProgram===ke&&Y.lightsStateVersion===Ee)return il(E,Re),ke}else Re.uniforms=Z.getUniforms(E),E.onBeforeCompile(Re,v),ke=Z.acquireProgram(Re,be),Oe.set(be,ke),Y.uniforms=Re.uniforms;const Ne=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ne.clippingPlanes=fe.uniform),il(E,Re),Y.needsLights=yh(E),Y.lightsStateVersion=Ee,Y.needsLights&&(Ne.ambientLightColor.value=H.state.ambient,Ne.lightProbe.value=H.state.probe,Ne.directionalLights.value=H.state.directional,Ne.directionalLightShadows.value=H.state.directionalShadow,Ne.spotLights.value=H.state.spot,Ne.spotLightShadows.value=H.state.spotShadow,Ne.rectAreaLights.value=H.state.rectArea,Ne.ltc_1.value=H.state.rectAreaLTC1,Ne.ltc_2.value=H.state.rectAreaLTC2,Ne.pointLights.value=H.state.point,Ne.pointLightShadows.value=H.state.pointShadow,Ne.hemisphereLights.value=H.state.hemi,Ne.directionalShadowMap.value=H.state.directionalShadowMap,Ne.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ne.spotShadowMap.value=H.state.spotShadowMap,Ne.spotLightMatrix.value=H.state.spotLightMatrix,Ne.spotLightMap.value=H.state.spotLightMap,Ne.pointShadowMap.value=H.state.pointShadowMap,Ne.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=ke,Y.uniformsList=null,ke}function nl(E){if(E.uniformsList===null){const V=E.currentProgram.getUniforms();E.uniformsList=Mr.seqWithValue(V.seq,E.uniforms)}return E.uniformsList}function il(E,V){const q=re.get(E);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.batchingColor=V.batchingColor,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function xh(E,V,q,Y,H){V.isScene!==!0&&(V=Se),me.resetTextureUnits();const le=V.fog,Ee=Y.isMeshStandardMaterial?V.environment:null,Re=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Wi,be=(Y.isMeshStandardMaterial?Ve:He).get(Y.envMap||Ee),Oe=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ke=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ne=!!q.morphAttributes.position,je=!!q.morphAttributes.normal,ot=!!q.morphAttributes.color;let St=Wn;Y.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(St=v.toneMapping);const ft=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ct=ft!==void 0?ft.length:0,Fe=re.get(Y),_t=p.state.lights;if(Ke===!0&&(k===!0||E!==M)){const Ot=E===M&&Y.id===y;fe.setState(Y,E,Ot)}let et=!1;Y.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==_t.state.version||Fe.outputColorSpace!==Re||H.isBatchedMesh&&Fe.batching===!1||!H.isBatchedMesh&&Fe.batching===!0||H.isBatchedMesh&&Fe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Fe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Fe.instancing===!1||!H.isInstancedMesh&&Fe.instancing===!0||H.isSkinnedMesh&&Fe.skinning===!1||!H.isSkinnedMesh&&Fe.skinning===!0||H.isInstancedMesh&&Fe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Fe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Fe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Fe.instancingMorph===!1&&H.morphTexture!==null||Fe.envMap!==be||Y.fog===!0&&Fe.fog!==le||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==fe.numPlanes||Fe.numIntersection!==fe.numIntersection)||Fe.vertexAlphas!==Oe||Fe.vertexTangents!==ke||Fe.morphTargets!==Ne||Fe.morphNormals!==je||Fe.morphColors!==ot||Fe.toneMapping!==St||Fe.morphTargetsCount!==ct)&&(et=!0):(et=!0,Fe.__version=Y.version);let $t=Fe.currentProgram;et===!0&&($t=Bs(Y,V,H));let _i=!1,Zt=!1,ns=!1;const xt=$t.getUniforms(),en=Fe.uniforms;if(K.useProgram($t.program)&&(_i=!0,Zt=!0,ns=!0),Y.id!==y&&(y=Y.id,Zt=!0),_i||M!==E){K.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),xt.setValue(D,"projectionMatrix",E.projectionMatrix),xt.setValue(D,"viewMatrix",E.matrixWorldInverse);const Ht=xt.map.cameraPosition;Ht!==void 0&&Ht.setValue(D,se.setFromMatrixPosition(E.matrixWorld)),j.logarithmicDepthBuffer&&xt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&xt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Zt=!0,ns=!0)}if(H.isSkinnedMesh){xt.setOptional(D,H,"bindMatrix"),xt.setOptional(D,H,"bindMatrixInverse");const Ot=H.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),xt.setValue(D,"boneTexture",Ot.boneTexture,me))}H.isBatchedMesh&&(xt.setOptional(D,H,"batchingTexture"),xt.setValue(D,"batchingTexture",H._matricesTexture,me),xt.setOptional(D,H,"batchingIdTexture"),xt.setValue(D,"batchingIdTexture",H._indirectTexture,me),xt.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&xt.setValue(D,"batchingColorTexture",H._colorsTexture,me));const tn=q.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&oe.update(H,q,$t),(Zt||Fe.receiveShadow!==H.receiveShadow)&&(Fe.receiveShadow=H.receiveShadow,xt.setValue(D,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(en.envMap.value=be,en.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&V.environment!==null&&(en.envMapIntensity.value=V.environmentIntensity),Zt&&(xt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Fe.needsLights&&Mh(en,ns),le&&Y.fog===!0&&ie.refreshFogUniforms(en,le),ie.refreshMaterialUniforms(en,Y,F,X,p.state.transmissionRenderTarget[E.id]),Mr.upload(D,nl(Fe),en,me)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Mr.upload(D,nl(Fe),en,me),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&xt.setValue(D,"center",H.center),xt.setValue(D,"modelViewMatrix",H.modelViewMatrix),xt.setValue(D,"normalMatrix",H.normalMatrix),xt.setValue(D,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ot=Y.uniformsGroups;for(let Ht=0,Vr=Ot.length;Ht<Vr;Ht++){const Jn=Ot[Ht];qe.update(Jn,$t),qe.bind(Jn,$t)}}return $t}function Mh(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function yh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,V,q){const Y=re.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),re.get(E.texture).__webglTexture=V,re.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,V){const q=re.get(E);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0};const Sh=D.createFramebuffer();this.setRenderTarget=function(E,V=0,q=0){w=E,R=V,P=q;let Y=!0,H=null,le=!1,Ee=!1;if(E){const be=re.get(E);if(be.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(D.FRAMEBUFFER,null),Y=!1;else if(be.__webglFramebuffer===void 0)me.setupRenderTarget(E);else if(be.__hasExternalTextures)me.rebindTextures(E,re.get(E.texture).__webglTexture,re.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ne=E.depthTexture;if(be.__boundDepthTexture!==Ne){if(Ne!==null&&re.has(Ne)&&(E.width!==Ne.image.width||E.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(E)}}const Oe=E.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ee=!0);const ke=re.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[V])?H=ke[V][q]:H=ke[V],le=!0):E.samples>0&&me.useMultisampledRTT(E)===!1?H=re.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?H=ke[q]:H=ke,L.copy(E.viewport),b.copy(E.scissor),I=E.scissorTest}else L.copy(xe).multiplyScalar(F).floor(),b.copy(Ue).multiplyScalar(F).floor(),I=Xe;if(q!==0&&(H=Sh),K.bindFramebuffer(D.FRAMEBUFFER,H)&&Y&&K.drawBuffers(E,H),K.viewport(L),K.scissor(b),K.setScissorTest(I),le){const be=re.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+V,be.__webglTexture,q)}else if(Ee){const be=V;for(let Oe=0;Oe<E.textures.length;Oe++){const ke=re.get(E.textures[Oe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Oe,ke.__webglTexture,q,be)}}else if(E!==null&&q!==0){const be=re.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,be.__webglTexture,q)}y=-1},this.readRenderTargetPixels=function(E,V,q,Y,H,le,Ee,Re=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=re.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(be=be[Ee]),be){K.bindFramebuffer(D.FRAMEBUFFER,be);try{const Oe=E.textures[Re],ke=Oe.format,Ne=Oe.type;if(!j.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-Y&&q>=0&&q<=E.height-H&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Re),D.readPixels(V,q,Y,H,Ie.convert(ke),Ie.convert(Ne),le))}finally{const Oe=w!==null?re.get(w).__webglFramebuffer:null;K.bindFramebuffer(D.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(E,V,q,Y,H,le,Ee,Re=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=re.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(be=be[Ee]),be)if(V>=0&&V<=E.width-Y&&q>=0&&q<=E.height-H){K.bindFramebuffer(D.FRAMEBUFFER,be);const Oe=E.textures[Re],ke=Oe.format,Ne=Oe.type;if(!j.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.bufferData(D.PIXEL_PACK_BUFFER,le.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Re),D.readPixels(V,q,Y,H,Ie.convert(ke),Ie.convert(Ne),0);const ot=w!==null?re.get(w).__webglFramebuffer:null;K.bindFramebuffer(D.FRAMEBUFFER,ot);const St=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await wu(D,St,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,le),D.deleteBuffer(je),D.deleteSync(St),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,V=null,q=0){const Y=Math.pow(2,-q),H=Math.floor(E.image.width*Y),le=Math.floor(E.image.height*Y),Ee=V!==null?V.x:0,Re=V!==null?V.y:0;me.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,Ee,Re,H,le),K.unbindTexture()};const Eh=D.createFramebuffer(),Th=D.createFramebuffer();this.copyTextureToTexture=function(E,V,q=null,Y=null,H=0,le=null){le===null&&(H!==0?(ws("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=H,H=0):le=0);let Ee,Re,be,Oe,ke,Ne,je,ot,St;const ft=E.isCompressedTexture?E.mipmaps[le]:E.image;if(q!==null)Ee=q.max.x-q.min.x,Re=q.max.y-q.min.y,be=q.isBox3?q.max.z-q.min.z:1,Oe=q.min.x,ke=q.min.y,Ne=q.isBox3?q.min.z:0;else{const tn=Math.pow(2,-H);Ee=Math.floor(ft.width*tn),Re=Math.floor(ft.height*tn),E.isDataArrayTexture?be=ft.depth:E.isData3DTexture?be=Math.floor(ft.depth*tn):be=1,Oe=0,ke=0,Ne=0}Y!==null?(je=Y.x,ot=Y.y,St=Y.z):(je=0,ot=0,St=0);const ct=Ie.convert(V.format),Fe=Ie.convert(V.type);let _t;V.isData3DTexture?(me.setTexture3D(V,0),_t=D.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(me.setTexture2DArray(V,0),_t=D.TEXTURE_2D_ARRAY):(me.setTexture2D(V,0),_t=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,V.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,V.unpackAlignment);const et=D.getParameter(D.UNPACK_ROW_LENGTH),$t=D.getParameter(D.UNPACK_IMAGE_HEIGHT),_i=D.getParameter(D.UNPACK_SKIP_PIXELS),Zt=D.getParameter(D.UNPACK_SKIP_ROWS),ns=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ft.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ft.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Oe),D.pixelStorei(D.UNPACK_SKIP_ROWS,ke),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ne);const xt=E.isDataArrayTexture||E.isData3DTexture,en=V.isDataArrayTexture||V.isData3DTexture;if(E.isDepthTexture){const tn=re.get(E),Ot=re.get(V),Ht=re.get(tn.__renderTarget),Vr=re.get(Ot.__renderTarget);K.bindFramebuffer(D.READ_FRAMEBUFFER,Ht.__webglFramebuffer),K.bindFramebuffer(D.DRAW_FRAMEBUFFER,Vr.__webglFramebuffer);for(let Jn=0;Jn<be;Jn++)xt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,re.get(E).__webglTexture,H,Ne+Jn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,re.get(V).__webglTexture,le,St+Jn)),D.blitFramebuffer(Oe,ke,Ee,Re,je,ot,Ee,Re,D.DEPTH_BUFFER_BIT,D.NEAREST);K.bindFramebuffer(D.READ_FRAMEBUFFER,null),K.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||re.has(E)){const tn=re.get(E),Ot=re.get(V);K.bindFramebuffer(D.READ_FRAMEBUFFER,Eh),K.bindFramebuffer(D.DRAW_FRAMEBUFFER,Th);for(let Ht=0;Ht<be;Ht++)xt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,tn.__webglTexture,H,Ne+Ht):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,tn.__webglTexture,H),en?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ot.__webglTexture,le,St+Ht):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ot.__webglTexture,le),H!==0?D.blitFramebuffer(Oe,ke,Ee,Re,je,ot,Ee,Re,D.COLOR_BUFFER_BIT,D.NEAREST):en?D.copyTexSubImage3D(_t,le,je,ot,St+Ht,Oe,ke,Ee,Re):D.copyTexSubImage2D(_t,le,je,ot,Oe,ke,Ee,Re);K.bindFramebuffer(D.READ_FRAMEBUFFER,null),K.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else en?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(_t,le,je,ot,St,Ee,Re,be,ct,Fe,ft.data):V.isCompressedArrayTexture?D.compressedTexSubImage3D(_t,le,je,ot,St,Ee,Re,be,ct,ft.data):D.texSubImage3D(_t,le,je,ot,St,Ee,Re,be,ct,Fe,ft):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,le,je,ot,Ee,Re,ct,Fe,ft.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,le,je,ot,ft.width,ft.height,ct,ft.data):D.texSubImage2D(D.TEXTURE_2D,le,je,ot,Ee,Re,ct,Fe,ft);D.pixelStorei(D.UNPACK_ROW_LENGTH,et),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,$t),D.pixelStorei(D.UNPACK_SKIP_PIXELS,_i),D.pixelStorei(D.UNPACK_SKIP_ROWS,Zt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ns),le===0&&V.generateMipmaps&&D.generateMipmap(_t),K.unbindTexture()},this.initRenderTarget=function(E){re.get(E).__webglFramebuffer===void 0&&me.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?me.setTextureCube(E,0):E.isData3DTexture?me.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?me.setTexture2DArray(E,0):me.setTexture2D(E,0),K.unbindTexture()},this.resetState=function(){R=0,P=0,w=null,K.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const wg=[{id:"gnome",kind:"gnome",position:[-5,.02,10],title:"The seventh gardener",meta:"CHIPPED CERAMIC · NO DATE",text:"Six small tally marks have been scratched into his hat. Under the base, in careful pencil: “Please turn him away from the windows before you leave.”",color:"#b16e53"},{id:"drawing",kind:"drawing",position:[6,.03,9],title:"Everybody in the garden",meta:"WAX CRAYON ON FOLDED PAPER",text:"A child has drawn the house, the flower beds and seven smiling people. One figure is on the other side of the upstairs window. The same yellow crayon has been pressed over its face until the paper tore.",paper:"drawing"},{id:"newspaper",kind:"newspaper",position:[-14,.025,3],title:"A prize-winning garden",meta:"THE BRIAR GAZETTE · 14 JUNE 1986",text:"“LOCAL FAMILY WINS GARDEN PRIZE FOR SEVENTH YEAR.” The photograph has been cut out. A smaller notice on the reverse asks for information about a missing groundskeeper. Someone has circled the date.",paper:"newspaper"},{id:"blue-car",kind:"toycar",position:[10,.04,8],title:"The last little bus",meta:"BLUE DIE-CAST TOY · ROUTE 8",text:"A tiny blue bus with one wheel missing. Its painted destination reads BRIAR HOUSE. The route number is the same as the bus that brought you here.",color:"#608c9b"},{id:"red-car",kind:"toycar",position:[-6,.04,-7],title:"A car for the journey home",meta:"RED DIE-CAST TOY · INITIALS E.M.",text:"The paint has worn away where a small thumb used to rest. A scrap of paper is tucked inside: “When the flowers sleep, we can go.”",color:"#b76d57"},{id:"garden-plan",kind:"drawing",position:[15,.025,0],title:"A different arrangement",meta:"A CHILD’S MAP · THE BACK OF A SHOP RECEIPT",text:"The garden is almost right. The shed is there, and the little shelter, and the well. But the house has been crossed out. In its place, a child has drawn a gate.",paper:"plan"},{id:"key",kind:"key",position:[-12,.03,12],title:"The small brass key",meta:"A PAPER TAG READING “SPARE”",text:"Too small for the front door. The teeth are polished bright, although the bow is green with age. The tag has another word beneath “spare”, rubbed away by years of handling."},{id:"cassette",kind:"cassette",position:[13,.03,-14],title:"Sunday, in the garden",meta:"HOME RECORDING · SIDE B",text:"The label is written twice in different hands. Beneath “Birds, June”, someone has added: “That is not a bird. Do not play this in the house.” The tape is wound all the way to the end."}].map(i=>({...i,buried:!0,lore:!0,revealRadius:.72,label:i.paper?"Examine the paper":`Pick up ${i.title.toLowerCase()}`})),Xt={id:"garden",title:"The garden at Briar House",chapter:"Mowing on",seed:731,bounds:{minX:-18,maxX:18,minZ:-23,maxZ:21},spawn:[0,1.68,19.5],yaw:0,day:{startHour:9,endHour:19,durationSeconds:1080,targetCleared:.9},palette:{morning:{top:"#f2dcf2",bottom:"#fff3df",fog:"#f8e1e8",sun:"#fff0e0",sunIntensity:2.7,hemiSky:"#fff0f6",hemiGround:"#5d5fa8",hemiIntensity:1.6,cloud:"#ffffff"},dusk:{top:"#4c4486",bottom:"#f08d78",fog:"#b07590",sun:"#ff9466",sunIntensity:1.1,hemiSky:"#f6c6d6",hemiGround:"#3a4677",hemiIntensity:1,cloud:"#f2a7a2"}},house:{position:[3,-16],width:11,depth:8,height:6.4},shed:{position:[-12,-10],width:5.5,depth:5,height:3.3},utility:{position:[13,-6],width:4,depth:3.6,height:2.8},gate:{z:16,width:3.8},path:[[0,17],[0,12],[-.5,8],[.5,4],[0,0],[1,-5],[3,-10]],flowerbeds:[{position:[-6,1],radius:1.9,color:"#e9ad94"},{position:[8,3],radius:2,color:"#d4bcdb"},{position:[10,-10],radius:1.4,color:"#ede2af"}],trees:[[-15,11,1.1],[14,11,1.3],[-16,-2,1],[16,-17,1.2],[-7,-21,1],[10,-22,1.2]],grass:{minX:-16.8,maxX:16.8,minZ:-21.8,maxZ:14.6,spacing:.177,height:[1.1,1.85]},points:[...wg,{id:"note",kind:"note",position:[-13.55,1.45,-11.9],label:"Read the gardener’s note"},{id:"clippers",kind:"clippers",position:[-11.2,.99,-11.25],label:"Take the rusty clippers"},{id:"oil",kind:"oil",position:[12.1,1.05,-6.7],label:"Pick up the oil can"},{id:"stone",kind:"stone",position:[13.6,1.03,-6.7],label:"Pick up the whetstone"},{id:"charm",kind:"charm",position:[-8,.2,7],label:"Pick up the brass cricket",buried:!0},{id:"well",kind:"well",position:[-10,.85,-2.5],label:"Look into the old well",actions:[["E","Look in"],["F","Climb down"]]},{id:"house",kind:"house",position:[3,1.4,-11.9],label:"Try the front door"},{id:"gate",kind:"gate",position:[0,1.1,16],label:"Open the garden gate"}]};function Ag(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new vt;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=uc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);const g=uc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function uc(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new Qt(o,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){const x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}const Eo=new Map,Ar=new Gc(new Uint8Array([75,75,75,255,165,165,165,255,255,255,255,255]),3,1,rn);Ar.minFilter=Ar.magFilter=Lt;Ar.needsUpdate=!0;function Hn(i){return Eo.has(i)||Eo.set(i,new Ud({color:i,gradientMap:Ar})),Eo.get(i)}function Dn(i,e,t,n=[0,0,0],s=[0,0,0]){const r=new Qe(e,typeof t=="string"?Hn(t):t);return r.position.set(...n),r.rotation.set(...s),r.castShadow=r.receiveShadow=!0,i.add(r),r}function _e(i,e,t,n,s){return Dn(i,new Ki(...e),t,n,s)}function Et(i,e,t,n,s=[1,1,1],r=0){const o=Dn(i,new on(e,r),t,n);return o.scale.set(...s),o}function st(i,e,t,n,s,r,o=8,a){return Dn(i,new Xn(e,t,n,o),s,r,a)}function hs(i,e,t,n,s){const r=new U(...e),o=new U(...t),a=o.clone().sub(r),l=st(i,n,n*1.1,a.length(),s,r.add(o).multiplyScalar(.5).toArray(),6);return l.quaternion.setFromUnitVectors(new U(0,1,0),a.normalize()),l}function To(i,e,t,n,s,r){const o=new Fs;o.moveTo(-e/2,0),o.lineTo(e/2,0),o.lineTo(0,n),o.closePath();const a=new Nr(o,{depth:t,bevelEnabled:!1});return Dn(i,a,r,[0,s,-t/2])}function Rg(i){i.updateMatrixWorld(!0);const e=new Map;i.traverse(n=>{if(!n.isMesh)return;const s=n.material.uuid;e.has(s)||e.set(s,{mat:n.material,geos:[]});let r=n.geometry.clone();r.applyMatrix4(n.matrixWorld),r.index&&(r=r.toNonIndexed()),r.deleteAttribute("uv"),e.get(s).geos.push(r)});const t=new pt;for(const{mat:n,geos:s}of e.values()){const r=Ag(s),o=new Qe(r,n);o.castShadow=o.receiveShadow=!0,t.add(o),s.forEach(a=>a.dispose())}return i.traverse(n=>{n.isMesh&&n.geometry.dispose()}),t}function uh(i,e=!0){const t=new pt;i.add(t);const n=[];for(let s of[-1,1]){const r=new pt;t.add(r),n.push(r),r.rotation.z=s*.35,_e(r,[.075,.4,.07],"#89705b",[0,-.23,0]),_e(r,[.11,.22,.095],"#386c65",[0,-.35,0]);const o=new Fs;o.moveTo(-.055,0),o.lineTo(.055,0),o.lineTo(.025,.47),o.lineTo(-.028,.53),o.closePath(),Dn(r,new Nr(o,{depth:.035,bevelEnabled:!1}),e?"#9aaea8":"#ced8c7",[0,0,-.015]),e&&(_e(r,[.045,.12,.039],"#986c4e",[.008,.15,.006]),_e(r,[.028,.065,.039],"#986c4e",[-.012,.32,.006])),_e(r,[.012,.32,.038],"#d3d9c9",[-.035,.19,.004],[0,0,-.04])}return st(t,.055,.055,.07,"#d4b995",[0,0,.03],10,[Math.PI/2,0,0]),t.userData.halves=n,t}function Cg(i){const e=document.createElement("canvas");e.width=512,e.height=640;const t=e.getContext("2d");t.fillStyle="#dfd1a8",t.fillRect(0,0,512,640),t.fillStyle="#c5b88f";for(let n=0;n<160;n++){const s=n*97%512,r=n*193%640;t.fillRect(s,r,1+n%3,1)}if(t.strokeStyle="#b5aa8990",t.lineWidth=2,t.beginPath(),t.moveTo(252,0),t.lineTo(259,640),t.moveTo(0,321),t.lineTo(512,315),t.stroke(),i.paper==="newspaper"){t.fillStyle="#4d5148",t.textAlign="center",t.font="bold 31px Georgia",t.fillText("THE BRIAR GAZETTE",256,64),t.font="14px Georgia",t.fillText("SATURDAY, 14 JUNE 1986",256,94),t.fillRect(34,110,444,3),t.font="bold 26px Georgia",t.fillText("A GARDEN TO REMEMBER",256,157),t.font="16px Georgia",t.fillText("Local family takes the prize once again",256,188),t.fillStyle="#6b6a5c",t.fillRect(51,215,410,185),t.fillStyle="#d1c29c",t.fillRect(57,221,398,173),t.strokeStyle="#7d7763",t.setLineDash([5,4]),t.strokeRect(58,222,396,171),t.setLineDash([]),t.fillStyle="#55574c";for(let n=0;n<3;n++)for(let s=0;s<17;s++)t.fillRect(38+n*148,432+s*8,122-s*17%35,2);t.font="bold 15px Georgia",t.textAlign="left",t.fillText("MISSING SINCE MONDAY",40,597),t.strokeStyle="#936451",t.strokeRect(29,575,270,35)}else{t.lineCap="round",t.lineWidth=5,t.strokeStyle="#9d6954",t.strokeRect(126,195,260,245),t.beginPath(),t.moveTo(98,197),t.lineTo(254,87),t.lineTo(410,197),t.stroke(),t.strokeStyle="#587f84",t.strokeRect(167,231,54,65),t.strokeRect(286,231,54,65),t.strokeRect(239,342,52,97),t.strokeStyle="#7c935b";for(let n=0;n<26;n++){let s=21+n*19;t.beginPath(),t.moveTo(s,540),t.lineTo(s-7,513-n%4*8),t.moveTo(s,540),t.lineTo(s+8,510),t.stroke()}if(i.paper==="plan"){t.strokeStyle="#736f8a";for(let n=0;n<6;n++)t.beginPath(),t.moveTo(111+n*18,160),t.lineTo(365+n*6,450),t.stroke();t.strokeStyle="#668167",t.strokeRect(185,355,146,145);for(let n=0;n<5;n++)t.beginPath(),t.moveTo(199+n*29,355),t.lineTo(199+n*29,500),t.stroke()}else{t.strokeStyle="#746987";for(let n=0;n<6;n++){const s=55+n*79,r=460+n%2*20;t.beginPath(),t.arc(s,r,13,0,6.28),t.moveTo(s,r+14),t.lineTo(s,r+55),t.moveTo(s-16,r+31),t.lineTo(s+16,r+31),t.stroke()}t.fillStyle="#d0a64d";for(let n=0;n<12;n++)t.fillRect(293+n%3*8,244+n*2,25,5)}t.fillStyle="#7e7763",t.font="italic 23px Georgia",t.textAlign="center",t.fillText(i.paper==="plan"?"the way home":"everybody is here",256,593)}return e}function Pg(i,e){if(e.paper){const t=Cg(e),n=new Xc(t);n.colorSpace=Gt;const s=new Qe(new ji(.42,.53),new wr({map:n,side:Nt,roughness:1}));s.rotation.set(-Math.PI/2,0,e.paper==="newspaper"?.3:-.25),s.position.y=.025,s.receiveShadow=!0,i.add(s),i.userData.artwork=t.toDataURL()}else if(e.kind==="gnome"){st(i,.13,.18,.27,"#698478",[0,.15,0]),Et(i,.105,"#cdb993",[0,.35,0]),st(i,0,.13,.26,e.color,[0,.52,0]),Et(i,.075,"#dfd9bc",[0,.3,.09],[1,1.4,.4]),Et(i,.035,"#bc9773",[0,.36,.12]);for(const t of[-.055,.055])Et(i,.012,"#39494a",[t,.39,.085]);for(const t of[-.1,.1])Et(i,.075,"#485856",[t,.035,.07],[1,.5,1.4])}else if(e.kind==="toycar"){_e(i,[.23,.1,.43],e.color,[0,.1,0]),_e(i,[.2,.13,.28],e.color,[0,.2,-.02]),_e(i,[.205,.085,.12],"#7caaaa",[0,.21,-.04]);for(const t of[-.13,.13])for(const n of[-.13,.13])st(i,.047,.047,.03,"#374944",[t,.06,n],8,[0,0,Math.PI/2]);_e(i,[.17,.035,.01],"#ddd0a4",[0,.09,.22])}else if(e.kind==="key"){const t=new Qe(new Ls(.065,.018,6,12),new wr({color:"#b6a15e",metalness:.45,roughness:.6}));t.rotation.x=-Math.PI/2,i.add(t),_e(i,[.027,.024,.2],"#b6a15e",[0,0,.14]),_e(i,[.065,.024,.03],"#b6a15e",[.025,0,.22])}else{_e(i,[.32,.045,.21],"#52595b",[0,.03,0]),_e(i,[.27,.005,.13],"#d5c7a3",[0,.056,0]);for(const t of[-.075,.075])st(i,.032,.032,.006,"#343e40",[t,.062,0],10);for(let t=0;t<3;t++)_e(i,[.16-t*.025,.006,.005],"#787562",[0,.065,-.045+t*.012])}}function es(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const ts=(i,e,t)=>Math.max(e,Math.min(t,i));function Lg(i,e,t,n){const s=n[0]-t[0],r=n[1]-t[1],o=ts(((i-t[0])*s+(e-t[1])*r)/(s*s+r*r||1),0,1);return Math.hypot(i-t[0]-o*s,e-t[1]-o*r)}function Dg(i,e,t,n=0){return Math.abs(i-t.position[0])<t.width/2+n&&Math.abs(e-t.position[1])<t.depth/2+n}function Ig(i,e,t){if([t.house,t.shed,t.utility].some(s=>Dg(i,e,s,.45))||t.flowerbeds.some(s=>Math.hypot(i-s.position[0],e-s.position[1])<s.radius+.22)||t.path.slice(1).some((s,r)=>Lg(i,e,t.path[r],s)<.82))return!1;const n=t.points.find(s=>s.kind==="well");return!(n&&Math.hypot(i-n.position[0],e-n.position[2])<1.25)}const dr={id:"gardener",name:"The gardener",branch:"Origin",description:"A pair of willing hands and a long day ahead.",nodes:[[0,0]]},Ni=[{id:"hands",name:"A practiced hand",branch:"grass",badge:"speed",description:"30% less time between pulls.",cost:30,max:3,nodes:[[-1.1,-.9],[-1.5,-1.8],[-1.9,-2.7]]},{id:"roots",name:"Light fingers",branch:"grass",badge:"speed",description:"Another 12% less time between pulls.",cost:90,max:1,parent:"hands",parentLevel:3,nodes:[[-2.3,-3.6]]},{id:"critical",name:"A perfect moment",branch:"grass",badge:"power",description:"Each cut has a 7% chance to build into a power cut: a 3× cut that blasts the grass outward.",cost:100,max:1,nodes:[[0,-1.2]]},{id:"luck",name:"Trust your instinct",branch:"grass",badge:"chance",description:"+6% power-cut chance.",cost:160,max:3,parent:"critical",nodes:[[0,-2.1],[0,-3],[0,-3.9]]},{id:"clipping",name:"Find your rhythm",branch:"grass",badge:"speed",description:"22% less time between snips.",cost:65,max:3,needs:"clippers",nodes:[[1.1,-.9],[1.5,-1.8],[1.9,-2.7]]},{id:"reach",name:"A wider sweep",branch:"grass",badge:"more",description:"Each snip cuts 3 more blades and reaches 8 cm wider.",cost:110,max:3,parent:"clipping",parentLevel:3,needs:"clippers",nodes:[[2.3,-3.6],[2.7,-4.5],[3.1,-5.4]]},{id:"spores",name:"Something spreading",branch:"spore",badge:null,description:"Your cuts release spores. They wither a small patch, then rest before they can spread again.",cost:140,max:1,needs:"spores",nodes:[[-1.4,0]]},{id:"spread",name:"Deep roots",branch:"spore",badge:"reach",description:"Each release spreads much farther before it burns out.",cost:200,max:3,parent:"spores",nodes:[[-2.4,-.35],[-3.4,-.55],[-4.4,-.65]]},{id:"sporeRate",name:"Restless spores",branch:"spore",badge:"speed",description:"Spores are ready again sooner, and wither grass faster.",cost:180,max:3,parent:"spores",nodes:[[-2.4,.65],[-3.4,.95],[-4.4,1.15]]}],bo=[{id:"charm",name:"Brass cricket",description:"+3% power-cut chance once power cuts are learned.",nodes:[[1.4,0]]}];function Br(i,e){return Math.round(i.cost*(1+e*.7))}function Rr(i,e){return(!i.parent||(e.skills[i.parent]||0)>=(i.parentLevel||1))&&(!i.needs||e.items.has(i.needs))}function _a(i,e){return(e.skills[i.id]||0)<i.max&&e.compost>=Br(i,e.skills[i.id]||0)&&Rr(i,e)}function qa(i){const e=i.skills.spread||0,t=i.skills.sporeRate||0;return{cooldown:30*Math.pow(.7,t),budget:10+e*22,radius:.45+e*.12,wither:2.6*Math.pow(.82,t)}}function Ug(i){const e=i.tool==="clippers";return{cooldown:e?.46*Math.pow(.78,i.skills.clipping||0)*(i.items.has("oil")?.92:1):.42*Math.pow(.7,i.skills.hands||0)*(i.skills.roots?.88:1),radius:e?.63+(i.items.has("stone")?.05:0)+(i.skills.reach||0)*.08:.32,limit:e?9+(i.items.has("stone")?1:0)+(i.skills.reach||0)*3:1,critChance:i.skills.critical?.07+(i.skills.luck||0)*.06+(i.items.has("charm")?.03:0):0}}function Ng(i){const e=Ni.filter(s=>(i.skills[s.id]||0)<s.max&&Rr(s,i)),t=e.filter(s=>_a(s,i)).length,n=e.length?Math.max(0,Math.min(...e.map(s=>Br(s,i.skills[s.id]||0)-i.compost))):null;return{available:t,remaining:n}}function Fg(){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d"),n=es(91),s=[{tones:["#3b7277","#47807c","#356670"],count:150,reach:.9,lift:.06},{tones:["#5fa695","#70b8a0","#549a90"],count:140,reach:.8,lift:-.06},{tones:["#97d4ae","#b0e0b4","#86c8a8"],count:105,reach:.7,lift:-.16},{tones:["#d4e7a6","#bfe0a8","#eef0b8"],count:38,reach:.5,lift:-.3}];for(const o of s)for(let a=0;a<o.count;a++){const l=n()*Math.PI*2,c=Math.sqrt(n())*o.reach*256*.45,h=256/2+Math.cos(l)*c-o.lift*256*.25,u=256/2+Math.sin(l)*c*.82+o.lift*256*.45;t.save(),t.translate(h,u),t.rotate(-.9+n()*.9),t.fillStyle=o.tones[Math.floor(n()*o.tones.length)];const d=7+n()*12,f=16+n()*26;t.beginPath(),t.moveTo(-d*.5,-f*.5),t.lineTo(d*.35,-f*.55),t.lineTo(d*.55,f*.1),t.lineTo(d*.1,f*.55),t.lineTo(-d*.4,f*.3),t.lineTo(-d*.15,0),t.closePath(),t.fill(),t.restore()}const r=new Xc(e);return r.colorSpace=Gt,r.magFilter=Lt,r.generateMipmaps=!0,r}class Og{constructor(e,t){this.time={value:0};const n=[];for(let u=0;u<3;u++){const d=new ji(1,1);d.rotateY(u*Math.PI/3),n.push(d)}const s=Bg(n),r=s.attributes.normal;for(let u=0;u<r.count;u++){const d=s.attributes.position.getY(u);r.setXYZ(u,0,.6+d*.8,.35)}const o=Fg(),a=new ih({map:o,alphaTest:.5,side:Nt});a.onBeforeCompile=u=>{u.uniforms.uTime=this.time,u.vertexShader=`uniform float uTime;
`+u.vertexShader,u.vertexShader=u.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float leafPhase = instanceMatrix[3].x * .37 + instanceMatrix[3].z * .23;
        transformed.x += sin(uTime * 1.1 + leafPhase) * .035 * (position.y + .5);
        transformed.z += cos(uTime * .9 + leafPhase) * .03 * (position.y + .5);`)},this.mesh=new Vn(s,a,t.length),this.mesh.customDepthMaterial=new sh({depthPacking:Lc,map:o,alphaTest:.5});const l=new gt,c=new Ae,h=es(17);t.forEach((u,d)=>{l.position.set(u.x,u.y,u.z),l.rotation.set(0,h()*Math.PI,(h()-.5)*.3),l.scale.set(u.size,u.size*.86,u.size),l.updateMatrix(),this.mesh.setMatrixAt(d,l.matrix),c.set(u.tint||"#ffffff"),this.mesh.setColorAt(d,c)}),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,e.add(this.mesh)}}function Bg(i){const e=[],t=[],n=[],s=[];let r=0;for(const a of i){e.push(...a.attributes.position.array),t.push(...a.attributes.normal.array),n.push(...a.attributes.uv.array);for(const l of a.index.array)s.push(l+r);r+=a.attributes.position.count}const o=new vt;return o.setAttribute("position",new We(e,3)),o.setAttribute("normal",new We(t,3)),o.setAttribute("uv",new We(n,2)),o.setIndex(s),o}function zg(i,e){const t=new pt,n=es(e.seed),s=[],r=[],o=[],a=[],l=(b,I,N,B)=>s.push({x:b,z:I,w:N,d:B});_e(t,[220,.35,220],"#5f7f6c",[0,-.25,0]),_e(t,[35,.06,37],"#6f8a5e",[0,-.035,-3.5]),_e(t,[160,.08,5.5],"#b2a393",[0,-.02,21]);for(let b=-70;b<75;b+=5)_e(t,[2,.012,.13],"#dfcbb0",[b,.03,21]);for(let b=0;b<e.path.length-1;b++){let I=e.path[b],N=e.path[b+1],B=Math.hypot(N[0]-I[0],N[1]-I[1]);for(let z=0;z<B;z+=.72)for(let X of[-1,1]){const F=I[0]+(N[0]-I[0])*z/B+X*.36,ne=I[1]+(N[1]-I[1])*z/B;let he=st(t,.44,.47,.09,["#bcb69b","#a9ac94","#d0c2a7"][Math.floor(n()*3)],[F,.03,ne],5);he.rotation.y=n()*3,he.scale.z=.78}}function c(b,I,N,B,z=1.25,X=1.7){_e(b,[z+.22,X+.22,.16],"#d4b99e",[I,N,B]),_e(b,[z,X,.18],"#29494b",[I,N,B+.06]),_e(b,[.07,X,.09],"#bba58b",[I,N,B+.18]),_e(b,[z,.07,.09],"#bba58b",[I,N,B+.18]),_e(b,[z+.4,.13,.36],"#dbb79a",[I,N-X/2-.13,B+.05]);for(const F of[-1,1]){_e(b,[.45,X+.15,.1],"#758f82",[I+F*(z/2+.36),N,B]);for(let ne=0;ne<6;ne++)_e(b,[.38,.035,.08],"#4e736b",[I+F*(z/2+.36),N-.65+ne*.25,B+.065])}}const h=e.house,u=new pt;t.add(u),u.position.set(h.position[0],0,h.position[1]),_e(u,[h.width,.38,h.depth],"#7a8278",[0,.19,0]),_e(u,[h.width,h.height,h.depth],"#bd8270",[0,h.height/2+.3,0]);for(let b=.7;b<h.height;b+=.42)_e(u,[h.width+.03,.035,h.depth+.035],"#ac7565",[0,b,0]);To(u,h.width+1,h.depth+1,2.5,h.height+.3,"#64665d");for(let b=0;b<7;b++)for(let I of[-1,1])_e(u,[.13,.14,h.depth+1.12],"#77796a",[I*(h.width/2+.5)*(1-b/7),h.height+.3+b*2.5/7,0],[0,0,I*-.42]);_e(u,[1.1,2.5,1.1],"#9c7266",[2,8.1,-1]),_e(u,[1.35,.22,1.35],"#bb9d85",[2,9.2,-1]),c(u,-3.3,2.1,h.depth/2+.06),c(u,3.3,2.1,h.depth/2+.06),c(u,-3.3,4.85,h.depth/2+.06,1.1,1.35),c(u,0,4.85,h.depth/2+.06,1.1,1.35),c(u,3.3,4.85,h.depth/2+.06,1.1,1.35),_e(u,[1.7,2.8,.18],"#d4b99e",[0,1.65,h.depth/2+.08]),_e(u,[1.4,2.6,.2],"#385957",[0,1.55,h.depth/2+.18]),_e(u,[.9,.9,.05],"#233d40",[0,2.2,h.depth/2+.3]),Et(u,.06,"#d9b067",[.5,1.4,h.depth/2+.33]),_e(u,[5.3,.25,2.1],"#a7a08a",[0,.2,h.depth/2+.8]),_e(u,[3,.14,.65],"#bbb398",[0,.07,h.depth/2+2]),_e(u,[5.7,.2,2.6],"#62685b",[0,3.25,h.depth/2+1],[.09,0,0]);for(let b of[-2.35,2.35])_e(u,[.14,3,.14],"#c6b298",[b,1.7,h.depth/2+1.9]);_e(u,[1.5,.16,.1],"#a38b71",[-3.3,1.8,h.depth/2+.32],[0,0,.22]);for(let b=0;b<35;b++){let I=-h.width/2+n()*1.2,N=n()*4;Et(u,.17+n()*.15,"#607d62",[I,N,h.depth/2+.12],[1,.6,1])}l(h.position[0],h.position[1],h.width+.1,h.depth+.1);const d=_e(i,[.24,.65,.06],"#182b30",[h.position[0],4.8,h.position[1]+h.depth/2+.2]);d.visible=!1;function f(b,I=!1){const N=new pt;t.add(N),N.position.set(b.position[0],0,b.position[1]);const{width:B,depth:z,height:X}=b;_e(N,[B,.15,z],"#8b8970",[0,.075,0]),_e(N,[B,X,.15],I?"#8a9a85":"#8f9680",[0,X/2,-z/2]);for(let F of[-1,1])_e(N,[.16,X,z],"#7d8976",[F*B/2,X/2,0]),l(b.position[0]+F*B/2,b.position[1],.18,z);l(b.position[0],b.position[1]-z/2,B,.18);for(let F=-B/2+.18;F<B/2;F+=.38)_e(N,[.035,X,.06],"#62796c",[F,X/2,-z/2+.1]);To(N,B+.5,z+.6,.95,X,"#596c62");for(let F of[-1,1])_e(N,[.75,X,.18],"#8f9680",[F*(B/2-.37),X/2,z/2]),l(b.position[0]+F*(B/2-.37),b.position[1]+z/2,.75,.18);_e(N,[B,.24,.2],"#b1ac8b",[0,X-.1,z/2+.06]),_e(N,[B-1,.15,.82],"#b9a27c",[0,.9,-z/2+.9]);for(let F of[-B/2+.8,B/2-.8])_e(N,[.11,.9,.6],"#716f58",[F,.45,-z/2+.9]);_e(N,[1.5,.1,.4],"#a28f6a",[0,2,-z/2+.3]);for(let F=0;F<3;F++)st(N,.13,.1,.28,["#b38b68","#8a9b81","#d1b68a"][F],[-.5+F*.45,2.18,-z/2+.3]);I||(_e(N,[1.2,2.6,.1],"#788975",[B/2+.35,1.3,z/2+.25],[0,-.6,.02]),_e(N,[.8,.09,.11],"#b4ae8c",[B/2+.35,1.2,z/2+.28],[0,-.6,.2]))}f(e.shed),f(e.utility,!0);function g(b,I){let N=Math.hypot(I[0]-b[0],I[1]-b[1]),B=(b[0]+I[0])/2,z=(b[1]+I[1])/2,X=-Math.atan2(I[1]-b[1],I[0]-b[0]);for(let F of[.45,1])_e(t,[N,.12,.12],"#bdba9a",[B,F,z],[0,X,0]);for(let F=0;F<=N;F+=.6){const ne=b[0]+(I[0]-b[0])*F/N,he=b[1]+(I[1]-b[1])*F/N;_e(t,[.18,1.35,.16],"#d4ccb0",[ne,.675,he],[0,X,n()*.04])}}const{minX:x,maxX:m,minZ:p}=e.bounds,T=e.gate.z,S=e.gate.width,v=S/2;g([x,T],[-v,T]),g([v,T],[m,T]),g([x,T],[x,p]),g([m,T],[m,p]),g([x,p],[m,p]),l((x-v)/2,T,-v-x,.22),l((m+v)/2,T,m-v,.22);const C=new pt;i.add(C),C.position.set(-v,0,T);const R=Math.max(2,Math.round(S/.55));for(let b=0;b<R;b++)_e(C,[.22,1.22,.15],"#738a75",[.2+b*(S-.4)/(R-1),.61,0]);for(let b of[.3,.95])_e(C,[S,.13,.13],"#a5ab86",[v,b,0]);hs(C,[.1,.25,.08],[S-.1,1,.08],.06,"#a5ab86");for(let b of[-v-.15,v+.15])_e(t,[.28,1.75,.28],"#d4c9a9",[b,.875,T]),Et(t,.2,"#d4c9a9",[b,1.78,T]);for(const b of e.flowerbeds){const[I,N]=b.position;st(t,b.radius,b.radius,.11,"#596853",[I,.03,N],24);const B=Math.round(b.radius*15);for(let z=0;z<B;z++){let X=z/B*Math.PI*2;const F=Et(t,.23,["#a9ad99","#c2bda1","#949e8d"][z%3],[I+Math.cos(X)*b.radius,.13,N+Math.sin(X)*b.radius],[1,.62,.8]);F.rotation.y=n()*5}for(let z=0;z<45;z++){let X=n()*6.28,F=Math.sqrt(n())*(b.radius-.3),ne=I+Math.cos(X)*F,he=N+Math.sin(X)*F,xe=.3+n()*.45;o.push({x:ne,z:he,height:xe,color:b.color,flower:!0,cut:!1})}}function P(b,I,N=1,B=!1){const z=(5+n()*2)*N,X=B?"#6a6f9a":"#5a5f86";hs(t,[b,0,I],[b+.2,z,I],.2*N,X);for(let F=0;F<7;F++){let ne=F*2.4,he=(1+n())*N,xe=z-1+n()*2;const Ue=b+Math.cos(ne)*he,Xe=I+Math.sin(ne)*he;hs(t,[b,z*.6,I],[Ue,xe,Xe],.08*N,X),(!B||F%2)&&Et(t,.75*N,"#3d6e70",[Ue,xe-.1*N,Xe],[1,.75,1]),a.push({x:Ue,y:xe,z:Xe,size:(3.1+n()*1.2)*N,tint:["#ffffff","#e6f4ec","#f6f0dc","#d8ebe6"][F%4]}),!B&&F%2&&a.push({x:Ue+(n()-.5)*N,y:xe+.7*N,z:Xe+(n()-.5)*N,size:(2.2+n())*N,tint:"#f4f6e2"})}B||l(b,I,.65*N,.65*N)}e.trees.forEach(b=>P(...b));for(let b=0;b<50;b++){let I=b/50*Math.PI*2;P(Math.sin(I)*(29+n()*13),Math.cos(I)*(29+n()*13)-5,1.1+n()*.65,!0)}for(let b=0;b<48;b++){let I=b/48*6.28;Et(t,4+n()*4,"#7d9f9a",[Math.sin(I)*70,1,Math.cos(I)*65],[2,.5,1.5],1)}const w=e.points.find(b=>b.id==="well").position;st(t,1,1.05,.8,"#9b9f8e",[w[0],.4,w[2]],12),st(t,.72,.72,.04,"#263e3e",[w[0],.82,w[2]],16);for(let b=0;b<9;b++){let I=b/9*6.28;Et(t,.27,"#b2b5a0",[w[0]+Math.cos(I)*.88,.83,w[2]+Math.sin(I)*.88],[1,.5,1])}const y=new pt;y.position.set(w[0],0,w[2]),t.add(y);for(const b of[-1,1])_e(y,[.16,2.3,.16],"#6d5a48",[b*.98,1.15,0]);_e(y,[2.3,.16,.18],"#7b6650",[0,2.3,0]),To(y,2.6,1.3,.55,2.35,"#5d5266"),st(y,.09,.09,1.2,"#8a7356",[0,1.95,0],8,[0,0,Math.PI/2]),st(y,.025,.025,1.9,"#b39a6c",[0,1,0],5),l(w[0],w[2],1.9,1.9),_e(t,[2.2,.15,.65],"#a88c68",[12,.6,8]),_e(t,[2.2,.5,.1],"#9b8466",[12,1,8.3],[.12,0,0]);for(let b of[11.2,12.8])_e(t,[.12,.6,.5],"#4c655d",[b,.3,8]);l(12,8,2.2,.8);for(let b=0;b<100;b++){let I=n()*34-17,N=n()*35-20;Et(t,.07+n()*.09,["#c5ac69","#9a9c62","#889275"][b%3],[I,.02,N],[1,.1,.55])}for(let b=0;b<8;b++){let I=-15+n()*2,N=8+n()*2;st(t,.025,.035,.18,"#d4c6a0",[I,.1,N]),Et(t,.13,"#b6896a",[I,.21,N],[1,.45,1])}st(t,.38,.25,.6,"#b68467",[-9,.3,-7],9),st(t,.32,.32,.02,"#54664f",[-9,.61,-7],9),_e(t,[.1,2.8,.1],"#5a7169",[4.5,1.4,19]),_e(t,[.75,.85,.12],"#d1c7a4",[4.5,2.4,19]),_e(t,[.45,.27,.14],"#5b7c6a",[4.5,2.45,19.01]),i.add(Rg(t));const M=new Og(i,a);for(const b of e.points){const I=new pt;if(I.position.set(...b.position),i.add(I),b.lore&&Pg(I,b),I.visible=!b.buried,b.kind==="note"){_e(I,[.52,.64,.02],"#eee0b6",[0,0,0]);for(let N=0;N<5;N++)_e(I,[.32-N*.025,.015,.025],"#a79a7b",[0,.17-N*.07,.015])}if(b.kind==="clippers"){const N=uh(I);N.rotation.set(-Math.PI/2,0,.6),N.scale.setScalar(.85)}if(b.kind==="oil"&&(_e(I,[.25,.33,.19],"#bb8e4d",[0,.13,0]),hs(I,[.08,.25,0],[.25,.47,0],.028,"#bfbb9e"),st(I,.05,.06,.12,"#6b7e66",[0,.35,0])),b.kind==="stone"&&_e(I,[.38,.1,.19],"#abb0a4",[0,0,0],[0,.3,0]),b.kind==="charm"&&(Et(I,.16,"#e5be62",[0,.15,0],[.65,.6,1.3]),hs(I,[-.15,.1,-.1],[.14,.1,.1],.025,"#e5be62")),b.kind==="spores")for(let N=0;N<4;N++){let B=N*.13-.2;st(I,.028,.035,.22,"#bbc9ab",[B,.1,0]),Et(I,.11,"#b2c6a7",[B,.24,0],[1,.6,1])}r.push({...b,object:I,position:new U(...b.position),taken:!1,revealed:!b.buried})}const L=new pt;i.add(L),L.position.set(-7,0,21),_e(L,[6,2.7,2.4],"#d4b77d",[0,1.7,0]),_e(L,[6,.65,2.45],"#6b8b7f",[0,.9,0]),_e(L,[6,.15,2.5],"#e5d7b4",[0,2,0]);for(let b=-2.4;b<3;b+=1)for(let I of[-1.22,1.22])_e(L,[.78,.8,.04],"#456765",[b,2.2,I]);for(let b of[-2,2])for(let I of[-1.17,1.17])st(L,.48,.48,.18,"#344843",[b,.5,I],12,[Math.PI/2,0,0]);return{colliders:s,interactables:r,gate:C,bus:L,watcher:d,flowerData:o,foliage:M}}class kg{constructor(e,t){this.plants=t,this.cutCount=0,this.dummy=new gt;const n=new Xn(.022,.022,1,5);n.translate(0,.5,0),this.parts=[new Vn(n,Hn("#4f7957"),t.length),new Vn(new on(.13),Hn("#ffffff"),t.length),new Vn(new on(.05),Hn("#e3bf67"),t.length),new Vn(new on(.12),Hn("#718d60"),t.length)],this.plants.forEach((s,r)=>{s.index=r,this.transform(s),this.parts[1].setColorAt(r,new Ae(s.color))});for(const s of this.parts)s.castShadow=s.receiveShadow=!0,s.instanceMatrix.setUsage(La),s.frustumCulled=!1,e.add(s)}transform(e){const t=[[1,e.height,1],[1,.45,1],[1,1,1],[1,.25,.6]],n=[[e.x,0,e.z],[e.x,e.height,e.z],[e.x,e.height+.05,e.z],[e.x+.07,e.height*.45,e.z]];this.parts.forEach((s,r)=>{this.dummy.position.set(...n[r]),this.dummy.scale.set(...t[r]),e.cut&&this.dummy.scale.setScalar(0),this.dummy.updateMatrix(),s.setMatrixAt(e.index,this.dummy.matrix),s.instanceMatrix.needsUpdate=!0})}near(e,t,n){return this.plants.filter(s=>!s.cut&&Math.hypot(s.x-e,s.z-t)<n)}remove(e){e.cut||(e.cut=!0,this.cutCount++,this.transform(e))}}class Vg{constructor(e){this.group=new pt,this.group.visible=!1,this.group.renderOrder=-1,e.add(this.group);const t=es(1313),n=new Wt({color:"#2a2340",transparent:!0,opacity:0,fog:!1,depthWrite:!1}),s=new Wt({color:"#16152a",transparent:!0,opacity:0,fog:!1,depthWrite:!1}),r=new Wt({color:"#c9c39a",transparent:!0,opacity:0,fog:!1,depthWrite:!1}),o=new Wt({color:"#0b0a14",transparent:!0,opacity:0,fog:!1,depthWrite:!1}),a=new Wt({color:"#272b47",transparent:!0,opacity:0,fog:!1,depthWrite:!1});this.materials={flesh:n,shade:s,eye:r,pupil:o,cloud:a},this.body=new pt,this.group.add(this.body);for(let l=0;l<16;l++){const c=new on(1,2),h=c.attributes.position;for(let f=0;f<h.count;f++){const g=h.getX(f),x=h.getY(f),m=h.getZ(f),p=1+Math.sin(g*4+l)*.12+Math.sin(x*5-l)*.1;h.setXYZ(f,g*p,x*p,m*p)}const u=new Qe(c,l%3?n:s),d=l/16*Math.PI*2+t();u.position.set(Math.cos(d)*(6+t()*9),Math.sin(d*2)*4+t()*4,(t()-.5)*6),u.scale.set(7+t()*7,5+t()*5,6),this.body.add(u)}this.tendrils=[];for(let l=0;l<9;l++){const c=(l-4)*4.2+(t()-.5)*2,h=18+t()*20,u=[];for(let x=0;x<=6;x++){const m=x/6;u.push(new U(c+Math.sin(m*3+l)*3*m,-4-m*h,Math.cos(m*2.5+l)*2*m))}const d=new Yc(u),f=new Qe(new Va(d,24,.9+t()*.6,5),l%2?n:s),g=new pt;g.add(f),g.userData.phase=t()*6,this.body.add(g),this.tendrils.push(g)}this.eyes=[];for(let l=0;l<8;l++){const c=new pt,h=.5+t()*1.1;c.position.set((t()-.5)*34,(t()-.35)*14,5+t()*2);const u=new Qe(new Ps(h,12,8),r);u.scale.set(1.5,1,.4);const d=new Qe(new Ps(h*.55,10,6),o);d.scale.set(.35,1.5,.3),d.position.z=h*.35,c.add(u,d),c.userData.delay=t()*.5,this.body.add(c),this.eyes.push(c)}for(let l=0;l<14;l++){const c=new Qe(new on(1,2),a);c.position.set((t()-.5)*60,-8+t()*16,10+t()*6),c.scale.set(12+t()*12,3+t()*3,4),this.group.add(c)}}place(e,t){const n=new U(-Math.sin(t)*Math.cos(.95),Math.sin(.95),-Math.cos(t)*Math.cos(.95));this.group.position.copy(e.position).addScaledVector(n,92),this.group.lookAt(e.position),this.group.scale.setScalar(2.3)}update(e,t){if(this.group.visible=t>.001,!this.group.visible)return;const n=this.materials;n.flesh.opacity=.42*t,n.shade.opacity=.55*t,n.cloud.opacity=.8*t,n.eye.opacity=.2*t,n.pupil.opacity=.35*t,this.body.position.y=Math.sin(e*.8)*1.2,this.body.rotation.z=Math.sin(e*.3)*.04;for(const s of this.tendrils)s.rotation.z=Math.sin(e*1.4+s.userData.phase)*.12;for(const s of this.eyes){const r=pn.smoothstep(e,.85+s.userData.delay,1.15+s.userData.delay);s.scale.y=Math.max(.05,r)}}}const ii=(i,e,t)=>pn.smoothstep(t,i,e);class Hg{constructor({player:e,camera:t,sky:n,sun:s,hemi:r,scene:o,renderer:a,audio:l,veil:c,hud:h,clouds:u}){Object.assign(this,{player:e,camera:t,sky:n,sun:s,hemi:r,scene:o,renderer:a,audio:l,veil:c,hud:h,clouds:u}),this.horror=new Vg(o),this.active=!1,this.elapsed=0}start(){this.active||(this.active=!0,this.elapsed=0,this.saved={position:this.camera.position.clone(),yaw:this.player.yaw,pitch:this.player.pitch,top:this.sky.material.uniforms.top.value.clone(),bottom:this.sky.material.uniforms.bottom.value.clone(),fog:this.scene.fog.color.clone(),sun:this.sun.intensity,hemi:this.hemi.intensity,exposure:this.renderer.toneMappingExposure,cloud:this.clouds?.material.color.clone()},this.horror.place(this.camera,this.saved.yaw),this.player.enabled=!1,this.player.keys.clear(),this.player.velocity.set(0,0,0),this.hud.style.opacity="0",this.veil.hidden=!1,this.groaned=!1,this.audio.unsettle())}update(e){if(!this.active)return;this.elapsed+=e;const t=this.elapsed,n=ii(.2,1.25,t),s=ii(3.3,5.4,t),r=ii(0,.8,t)*(1-s);this.sky.material.uniforms.top.value.copy(this.saved.top).lerp(new Ae("#090e20"),r),this.sky.material.uniforms.bottom.value.copy(this.saved.bottom).lerp(new Ae("#101628"),r),this.scene.fog.color.copy(this.saved.fog).lerp(new Ae("#0b1420"),r),this.sun.intensity=this.saved.sun*(1-r*.99),this.hemi.intensity=this.saved.hemi*(1-r*.94),this.renderer.toneMappingExposure=this.saved.exposure*(1-r*.5),this.clouds&&this.clouds.material.color.copy(this.saved.cloud).lerp(new Ae("#1b1d33"),r);const o=n*(1-s);this.camera.position.copy(this.saved.position),this.camera.position.y-=o*1.05,this.camera.rotation.set(pn.lerp(this.saved.pitch,.95,o),this.saved.yaw+o*.12,o*.28,"YXZ"),this.horror.update(t,ii(.7,1.05,t)*(1-ii(1.45,1.8,t))),t>.95&&!this.groaned&&(this.groaned=!0,this.audio.groan?.()),this.veil.style.opacity=String(ii(1.45,2.1,t)*(1-ii(3.3,5,t))),t>=5.4&&(this.active=!1,this.player.enabled=!0,this.player.yaw=this.saved.yaw,this.player.pitch=this.saved.pitch,this.player.keys.clear(),this.player.velocity.set(0,0,0),this.camera.position.copy(this.saved.position),this.player.orient(),this.hud.style.opacity="",this.veil.hidden=!0,this.horror.update(0,0),this.clouds&&this.clouds.material.color.copy(this.saved.cloud))}}class Gg{constructor(e,t){this.level=t,this.tufts=[],this.cells=new Map,this.cutCount=0,this.infected=new Set,this.time={value:0};const n=es(t.seed+5),s=t.grass;for(let u=s.minX;u<s.maxX;u+=s.spacing)for(let d=s.minZ;d<s.maxZ;d+=s.spacing){const f=u+(n()-.5)*s.spacing*.9,g=d+(n()-.5)*s.spacing*.9;if(!Ig(f,g,t))continue;const x={x:f,z:g,height:s.height[0]+n()*(s.height[1]-s.height[0]),angle:n()*6.28,width:.7+n()*.65,cut:!1,infection:0,index:this.tufts.length};this.tufts.push(x);const m=this.key(f,g);this.cells.has(m)||this.cells.set(m,[]),this.cells.get(m).push(x)}const r=[],o=[];for(let u=0;u<1;u++){const d=u*2.399,f=.03+u*.018,g=Math.cos(d)*f,x=Math.sin(d)*f,m=Math.cos(d)*.09,p=Math.sin(d)*.09,T=Math.cos(d)*.25,S=Math.sin(d)*.25,v=.65+n()*.4,C=[[g-m,0,x-p],[g+m,0,x+p],[g+m*.5+T*.4,v*.55,x+p*.5+S*.4],[g-m*.5+T*.4,v*.55,x-p*.5+S*.4],[g+T,v,x+S]];for(const R of[0,1,2,0,2,3,3,2,4]){r.push(...C[R]);const P=R<2?.59:R===4?1:.87;o.push(P,P,P)}}const a=new vt;a.setAttribute("position",new We(r,3)),a.setAttribute("color",new We(o,3)),a.computeVertexNormals();const l=new wr({color:"#ffffff",roughness:1,side:Nt,vertexColors:!0});this.shockUniform={value:new rt(0,0,-100,0)},l.onBeforeCompile=u=>{u.uniforms.uTime=this.time,u.uniforms.uShock=this.shockUniform,u.vertexShader=`uniform float uTime;
uniform vec4 uShock;
`+u.vertexShader,u.vertexShader=u.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float phase = instanceMatrix[3].x * .7 + instanceMatrix[3].z * .47;
      float wave = sin(uTime * 1.65 + phase) * .09 + sin(uTime * 2.8 + phase * 1.7) * .035;
      transformed.x += wave * position.y * position.y;
      transformed.z += cos(uTime * 1.3 + phase) * .045 * position.y;
    `).replace("#include <color_vertex>",`#include <color_vertex>
      // Cool teal roots under warm, sunlit tips.
      vColor.rgb *= mix(vec3(.38, .6, .72), vec3(1.), smoothstep(0., .85, position.y));
    `).replace("#include <project_vertex>",`vec4 mvPosition = vec4(transformed, 1.0);
      #ifdef USE_INSTANCING
        mvPosition = instanceMatrix * mvPosition;
      #endif
      // A travelling ring flattens blades outward, then lets them spring back.
      float shockAge = uTime - uShock.z;
      if (shockAge > 0. && shockAge < 3.5) {
        vec2 fromShock = instanceMatrix[3].xz - uShock.xy;
        float dist = length(fromShock);
        float front = shockAge * 10.5;
        float ring = exp(-pow((dist - front) / 1.15, 2.));
        float behind = step(dist, front) * exp(-(front - dist) * .45) * cos((front - dist) * 1.7) * .4;
        float fade = exp(-shockAge * 1.25) * (1. - smoothstep(6., 15., dist)) * uShock.w;
        float push = (ring + behind) * fade;
        float bend = position.y * position.y;
        mvPosition.xz += fromShock / max(dist, .001) * push * bend * .95;
        mvPosition.y -= abs(push) * bend * .38;
      }
      mvPosition = modelViewMatrix * mvPosition;
      gl_Position = projectionMatrix * mvPosition;`)},this.mesh=new Vn(a,l,this.tufts.length),this.mesh.instanceMatrix.setUsage(La),this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,this.dummy=new gt;const c=new Ae,h=["#b9c66c","#94bd78","#cfcb7c","#78ad86","#a8c56e","#d9d48c"];for(const u of this.tufts)this.setTransform(u),c.set(h[Math.floor(n()*h.length)]),this.mesh.setColorAt(u.index,c);this.mesh.instanceMatrix.needsUpdate=!0,e.add(this.mesh)}shock(e,t,n=1){this.shockUniform.value.set(e,t,this.time.value,n)}key(e,t){return`${Math.floor(e/2)},${Math.floor(t/2)}`}setTransform(e){this.dummy.position.set(e.x,.025,e.z),this.dummy.rotation.set(0,e.angle,0),this.dummy.scale.set(e.cut?.5:e.width,e.cut?.065:e.height,1),this.dummy.updateMatrix(),this.mesh.setMatrixAt(e.index,this.dummy.matrix)}near(e,t,n){const s=[];for(let r=Math.floor((e-n)/2);r<=Math.floor((e+n)/2);r++)for(let o=Math.floor((t-n)/2);o<=Math.floor((t+n)/2);o++)for(const a of this.cells.get(`${r},${o}`)||[])!a.cut&&Math.hypot(a.x-e,a.z-t)<n&&s.push(a);return s}cut(e,t,n,s){const r=this.near(e,t,n).sort((o,a)=>Math.hypot(o.x-e,o.z-t)-Math.hypot(a.x-e,a.z-t)).slice(0,s);for(const o of r)this.remove(o);return r}remove(e){e.cut||(e.cut=!0,this.cutCount++,this.infected.delete(e),this.setTransform(e),this.mesh.setColorAt(e.index,new Ae("#5f7d66")),this.mesh.instanceColor.needsUpdate=!0,this.mesh.instanceMatrix.needsUpdate=!0)}infect(e,t,n,s=12,r=5){const o={left:s};let a=0;const l=this.near(e,t,n).filter(c=>!c.infection).sort((c,h)=>Math.hypot(c.x-e,c.z-t)-Math.hypot(h.x-e,h.z-t));for(const c of l){if(o.left<=0||a++>=r)break;this.seed(c,o)}return o}seed(e,t){t.left--,e.infection=.001,e.outbreak=t,this.infected.add(e)}update(e,t,n=2.6){this.time.value=t;const s=[];let r=!1;for(const o of[...this.infected])if(o.infection+=e/n,o.infection>=1){const a=o.outbreak;if(this.remove(o),s.push(o),a&&a.left>0){const l=this.near(o.x,o.z,.42).filter(c=>!c.infection).sort((c,h)=>Math.hypot(c.x-o.x,c.z-o.z)-Math.hypot(h.x-o.x,h.z-o.z)).slice(0,2);for(const c of l)a.left>0&&this.seed(c,a)}}else o.infection>.4&&!o.tinted&&(o.tinted=!0,this.mesh.setColorAt(o.index,new Ae("#6d6378")),r=!0);return r&&(this.mesh.instanceColor.needsUpdate=!0),s}}const us=i=>1-(1-i)**3;function Wg(i){return i==="clippers"?.23:.38}function Xg(i,e){const t=ts(i,0,1);if(e==="clippers"){const r=t<.12?-.12*t/.12:t<.23?-.12+1.12*us((t-.12)/.11):t<.35?1:1-us((t-.35)/.65);return{close:r,reach:Math.max(0,r),lift:0,grip:Math.max(0,r)}}const n=t<.38?us(t/.38):1-us((t-.38)/.62),s=t<.38?0:Math.sin((t-.38)/.62*Math.PI);return{close:0,reach:n,lift:s,grip:t<.27?0:t<.38?(t-.27)/.11:1-us((t-.38)/.62)}}class qg{constructor(){this.scene=new Ur,this.camera=new kt(55,innerWidth/innerHeight,.01,10),this.scene.add(new Ha("#fff4d4","#5c8178",1.8));const e=new rh("#ffe2b0",1.6);e.position.set(-2,3,2),this.scene.add(e),this.root=new pt,this.scene.add(this.root),this.root.position.set(0,-.5,-.85),this.arms=[],this.fingers=[],this.heldBlades=[],this.holding=!1,this.nextHand=0,this.activeHand=0,this.elapsed=2,this.duration=.42,this.critical=0,this.charge=0;for(let t of[-1,1]){const n=new pt;this.root.add(n),n.position.set(t*.34,-.04,.12),n.rotation.set(-.55,0,t*-.25),st(n,.12,.165,.65,"#536e64",[0,-.34,.055],8),st(n,.145,.145,.105,"#c39058",[0,-.035,0],8),st(n,.147,.147,.026,"#dfb075",[0,.012,0],8),Et(n,.115,"#3c5059",[0,.095,0],[.82,1.18,.7],1),_e(n,[.12,.018,.025],"#657d7e",[0,.11,.076]);const s=[];for(let a=0;a<4;a++)s.push(_e(n,[.036,.11,.055],"#415863",[-.059+a*.039,.19,-.012],[.25,0,0]));this.fingers.push(s),_e(n,[.045,.1,.065],"#374c56",[t*-.1,.08,-.025],[0,0,t*-.6]);const r=new vt;r.setAttribute("position",new We([-.018,0,0,.018,0,0,.04,.3,0],3));const o=new Qe(r,new Wt({color:"#8dba60",side:Nt}));o.position.set(0,.18,-.055),o.visible=!1,n.add(o),this.heldBlades.push(o),this.arms.push(n)}this.clippers=uh(this.root),this.clippers.position.set(0,.12,-.12),this.clippers.rotation.x=-.7,this.clippers.scale.setScalar(.85),this.clippers.visible=!1,this.glow=new xr("#ffb34c",0,2),this.glow.position.set(0,0,-.3),this.scene.add(this.glow)}swing(e,t=!1,n="hands"){return this.elapsed=0,this.holding=!1,this.duration=e,this.critical=t?1:0,n==="hands"&&(this.activeHand=this.nextHand,this.nextHand=1-this.nextHand),e*Wg(n)}update(e,t,n,s){this.elapsed+=e;const r=Math.min(1,this.elapsed/this.duration),o=Xg(r,n),a=n==="clippers";this.clippers.visible=a;const l=s?Math.sin(t*9)*.008:Math.sin(t*1.7)*.004,c=a&&r>.23?Math.exp(-(r-.23)*13)*Math.sin((r-.23)*35):0;if(this.root.position.set(0,-.5+l+(a?o.reach*.045:0),-.85-(a?o.reach*.035:0)),this.root.rotation.z=a?c*.012:0,this.charge>0){const h=this.charge,u=h*h*.012;this.root.position.x+=(Math.random()-.5)*u,this.root.position.y+=-h*.07+(Math.random()-.5)*u,this.root.position.z+=h*.12,this.root.rotation.x=h*.18}else this.root.rotation.x=0;for(let h=0;h<2;h++){const u=h?1:-1,d=this.arms[h],f=a||h===this.activeHand?o.reach:0,g=!a&&h===this.activeHand?o.lift:0;d.position.set(u*((a?.22:.34)-f*(a?.12:.22)),(a?-.15:-.04)-f*.03+g*.22,(a?.04:.12)-(a?0:f*.19)+g*.08),d.rotation.set(-.55-f*.4+g*.3,0,u*(-.25+f*.3));const x=a?.8:h===this.activeHand?o.grip:0;this.heldBlades[h].visible=!a&&this.holding&&h===this.activeHand&&r>.38&&r<.86,this.fingers[h].forEach(m=>{m.rotation.x=.25+x*1.35,m.position.z=-.012-x*.02})}this.clippers.userData.halves.forEach((h,u)=>h.rotation.z=(u?1:-1)*(.39-o.close*.385)),this.clippers.position.y=.12+c*.012,this.glow.intensity=this.critical*Math.max(0,o.reach)*5+this.charge*this.charge*6}resize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}render(e){e.clearDepth(),e.render(this.scene,this.camera)}}class Yg{constructor(e,t,n,s){this.camera=e,this.level=t,this.world=n,this.canvas=s,this.keys=new Set,this.enabled=!0,this.area=null,this.yaw=0,this.pitch=-.08,this.velocity=new U,this.walkTime=0,this.moving=!1,this.sensitivity=.0021,this.bob=!0,this.reset(),addEventListener("keydown",r=>{r.target instanceof HTMLInputElement||(this.keys.add(r.code),["Space","Tab","ArrowUp","ArrowDown"].includes(r.code)&&r.preventDefault())}),addEventListener("keyup",r=>this.keys.delete(r.code)),addEventListener("blur",()=>this.keys.clear()),document.addEventListener("pointerlockchange",()=>{this.locked||(this.keys.clear(),this.velocity.set(0,0,0))}),addEventListener("mousemove",r=>{this.locked&&this.enabled&&(this.yaw-=r.movementX*this.sensitivity,this.pitch=ts(this.pitch-r.movementY*this.sensitivity,-1.35,1.2))})}get locked(){return document.pointerLockElement===this.canvas}async lock(){try{return await this.canvas.requestPointerLock(),this.locked}catch{return!1}}reset(){this.camera.position.set(...this.level.spawn),this.yaw=this.level.yaw,this.pitch=-.08,this.velocity.set(0,0,0),this.orient()}orient(){this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ")}blocked(e,t){if(this.area)return!this.area.walkable(e,t)||this.area.colliders.some(r=>Math.abs(e-r.x)<r.w/2+.28&&Math.abs(t-r.z)<r.d/2+.28);const s=this.level.bounds;return e<s.minX+.28||e>s.maxX-.28||t<s.minZ+.28||t>s.maxZ-.28||!this.world.gateOpen&&Math.abs(t-this.level.gate.z)<.28+.12&&Math.abs(e)<this.level.gate.width/2?!0:this.world.colliders.some(r=>Math.abs(e-r.x)<r.w/2+.28&&Math.abs(t-r.z)<r.d/2+.28)}update(e){if(!this.enabled){this.moving=!1;return}if(this.orient(),!this.locked){this.moving=!1;return}const t=Number(this.keys.has("KeyW")||this.keys.has("ArrowUp"))-Number(this.keys.has("KeyS")||this.keys.has("ArrowDown")),n=Number(this.keys.has("KeyD")||this.keys.has("ArrowRight"))-Number(this.keys.has("KeyA")||this.keys.has("ArrowLeft")),s=Math.hypot(t,n)||1,r=this.keys.has("ShiftLeft")?4.5:2.7,o=(-Math.sin(this.yaw)*t+Math.cos(this.yaw)*n)/s*r,a=(-Math.cos(this.yaw)*t-Math.sin(this.yaw)*n)/s*r;this.velocity.x=pn.damp(this.velocity.x,o,12,e),this.velocity.z=pn.damp(this.velocity.z,a,12,e);const l=this.camera.position,c=this.velocity.x*e,h=this.velocity.z*e;this.blocked(l.x+c,l.z)||(l.x+=c),this.blocked(l.x,l.z+h)||(l.z+=h),this.moving=Math.hypot(c,h)>.007,this.walkTime+=this.moving?e*r*2.7:0,l.y=1.68+(this.bob&&this.moving?Math.sin(this.walkTime)*.025:0)}}class $g{constructor(e){this.particles=[],this.dummy=new gt,this.puffs=new Vn(new on(1,1),new Wt({color:"#e8e5cb",transparent:!0,opacity:.32,depthWrite:!1}),140);const t=new vt;t.setAttribute("position",new We([-.012,0,0,.012,0,0,.024,.12,0],3)),this.slivers=new Vn(t,new Wt({color:"#78945d",side:Nt}),140),this.rings=[];for(let n=0;n<3;n++){const s=new Qe(new za(.86,1,48),new Wt({color:n?"#fff0b8":"#ffc35a",transparent:!0,opacity:0,depthWrite:!1,blending:ys,side:Nt}));s.rotation.x=-Math.PI/2,s.visible=!1,s.userData={age:1,delay:0},e.add(s),this.rings.push(s)}for(const n of[this.puffs,this.slivers])n.instanceMatrix.setUsage(La),n.frustumCulled=!1,n.count=0,e.add(n)}burst(e,t=!1,n=!1){if(!e.length)return;const s=n?2:Math.min(t?12:7,2+Math.ceil(Math.sqrt(e.length)));for(let r=0;r<s;r++){const o=e[Math.floor(r*e.length/s)],a=.3+Math.random()*.18;this.particles.push({kind:"puff",x:o.x,y:.25+Math.random()*.15,z:o.z,vx:(Math.random()-.5)*.5,vy:.3+Math.random()*.2,vz:(Math.random()-.5)*.5,life:a,max:a,size:(n?.07:.11)+Math.random()*.06,color:t?"#f5d299":"#e8e5cb"})}for(let r=0;r<(n?0:Math.min(t?7:3,e.length));r++){const o=e[Math.floor(Math.random()*e.length)],a=.2+Math.random()*.17;this.particles.push({kind:"sliver",x:o.x,y:.3,z:o.z,vx:(Math.random()-.5)*1.2,vy:.55+Math.random()*.6,vz:(Math.random()-.5)*1.2,life:a,max:a,size:.7,color:t?"#ffba54":"#78945d"})}this.particles=this.particles.slice(-140)}powerBurst(e,t){this.rings.forEach((n,s)=>{n.position.set(e,.7+s*.12,t),n.userData={age:0,delay:s*.09,speed:1-s*.18},n.visible=!0});for(let n=0;n<34;n++){const s=n/34*Math.PI*2+Math.random()*.2,r=3.5+Math.random()*4,o=.45+Math.random()*.35;this.particles.push({kind:"sliver",x:e+Math.cos(s)*.4,y:.35+Math.random()*.3,z:t+Math.sin(s)*.4,vx:Math.cos(s)*r,vy:1.6+Math.random()*2.2,vz:Math.sin(s)*r,life:o,max:o,size:.9+Math.random()*.6,color:n%3?"#9cc56c":"#ffd36e"})}for(let n=0;n<14;n++){const s=n/14*Math.PI*2,r=.5+Math.random()*.25;this.particles.push({kind:"puff",x:e+Math.cos(s)*.6,y:.25,z:t+Math.sin(s)*.6,vx:Math.cos(s)*2.6,vy:.35,vz:Math.sin(s)*2.6,life:r,max:r,size:.18+Math.random()*.1,color:"#f7e2b0"})}this.particles=this.particles.slice(-140)}update(e){for(const s of this.rings){const r=s.userData;if(!s.visible)continue;r.age+=e;const o=Math.max(0,r.age-r.delay)/.75;if(o>=1){s.visible=!1;continue}const a=1-Math.pow(1-o,3);s.scale.setScalar(.3+a*8.5*r.speed),s.material.opacity=(r.age<r.delay?0:1)*(1-o)*.85}this.particles=this.particles.filter(s=>s.life>0);let t=0,n=0;for(const s of this.particles){s.life-=e;const r=1-Math.max(0,s.life)/s.max;s.x+=s.vx*e,s.y+=s.vy*e,s.z+=s.vz*e,s.kind==="sliver"&&(s.vy-=5*e),this.dummy.position.set(s.x,s.y,s.z),this.dummy.rotation.set(r*2,s.x,s.kind==="sliver"?r*3:0);const o=s.kind==="puff"?s.size*(.5+r*1.7)*Math.pow(1-r,.5):s.size*(1-r);this.dummy.scale.set(o,o*(s.kind==="puff"?.8:1),o),this.dummy.updateMatrix();const a=s.kind==="puff"?this.puffs:this.slivers,l=s.kind==="puff"?t++:n++;a.setMatrixAt(l,this.dummy.matrix),a.setColorAt(l,new Ae(s.color))}this.puffs.count=t,this.slivers.count=n;for(const s of[this.puffs,this.slivers])s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0)}}class Zg{constructor(e,t){this.points=e,this.grass=t,this.lastCut=-1;for(const n of e)n.buried&&(n.revealed=!1,n.object.visible=!1,n.coverAtStart=t.near(n.position.x,n.position.z,n.revealRadius||.72).length)}update(){if(this.lastCut!==this.grass.cutCount){this.lastCut=this.grass.cutCount;for(const e of this.points){if(!e.buried||e.revealed||e.taken)continue;const t=this.grass.near(e.position.x,e.position.z,e.revealRadius||.72).length;e.coverAtStart>0&&t<=Math.floor(e.coverAtStart*.1)&&(e.revealed=!0,e.object.visible=!0)}}}}class Jg{constructor(e,t){this.ctx=e,this.volume=.55,this.index=0,this.nextChord=e.currentTime+3,this.nextNote=e.currentTime+4,this.noteIndex=0,this.output=e.createGain(),this.output.gain.value=.12,this.output.connect(t);const n=e.createConvolver(),s=e.createBuffer(2,e.sampleRate*3,e.sampleRate);for(let o=0;o<2;o++){const a=s.getChannelData(o);let l=0;for(let c=0;c<a.length;c++)l=l*.7+(Math.random()*2-1)*.3,a[c]=l*Math.pow(1-c/a.length,3)*.38}n.buffer=s;const r=e.createGain();r.gain.value=.3,n.connect(r).connect(this.output),this.reverb=n,this.chords=[[146.83,220,277.18,329.63],[130.81,196,246.94,293.66],[123.47,185,220,293.66],[110,164.81,220,277.18]],this.melody=[2,4,3,1,2,0,3,1]}voice(e,t,n,s,r="sine",o=0){const a=this.ctx.createOscillator(),l=this.ctx.createGain(),c=this.ctx.createBiquadFilter(),h=this.ctx.createStereoPanner();a.type=r,a.frequency.value=e,a.detune.value=(Math.random()-.5)*4,c.type="lowpass",c.frequency.value=r==="triangle"?700:1800,h.pan.value=o,l.gain.setValueAtTime(1e-4,t),l.gain.exponentialRampToValueAtTime(s,t+(r==="triangle"?1.9:.025)),l.gain.exponentialRampToValueAtTime(1e-4,t+n),a.connect(c).connect(l).connect(h),h.connect(this.output),h.connect(this.reverb),a.start(t),a.stop(t+n+.1),a.onended=()=>{a.disconnect(),c.disconnect(),l.disconnect(),h.disconnect()}}update(e,t){const n=this.ctx.currentTime;if(this.output.gain.setTargetAtTime(t?0:this.volume*(e?.08:.23),n,t?.12:.8),!(e||t)&&(this.nextChord<n-.5&&(this.nextChord=n+.1),this.nextNote<n-.5&&(this.nextNote=n+1),n+.15>=this.nextChord&&(this.chords[this.index%4].forEach((r,o)=>this.voice(r,this.nextChord,16,.1,"triangle",(o-1.5)*.27)),this.index++,this.nextChord+=12),n+.1>=this.nextNote)){const s=this.chords[Math.max(0,this.index-1)%4],r=this.melody[this.noteIndex++%8],o=r===4?s[0]*4:s[r]*2;this.voice(o,this.nextNote,4.8,.15,"sine",Math.sin(this.noteIndex*1.7)*.4),this.nextNote+=this.noteIndex%3===0?4.8:2.4}}}const Kg={pull:"pull.ogg",step:"step.ogg",pickup:"pickup.ogg"};class jg{constructor(){this.volume=.6,this.muted=!1,this.buffers={},this.lastBird=0,this.lastStep=0,this.musicVolume=.55}async init(){if(this.ctx){await this.ctx.resume();return}this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.master.gain.value=this.volume,this.master.connect(this.ctx.destination),await this.ctx.resume();for(const[o,a]of Object.entries(Kg))fetch(`./audio/${a}`).then(l=>{if(!l.ok)throw new Error("sample unavailable");return l.arrayBuffer()}).then(l=>this.ctx.decodeAudioData(l)).then(l=>this.buffers[o]=l).catch(()=>{});this.noiseBuffer=this.ctx.createBuffer(1,this.ctx.sampleRate*3,this.ctx.sampleRate);const e=this.noiseBuffer.getChannelData(0);let t=0;for(let o=0;o<e.length;o++)t=(t+Math.random()*.04-.02)/1.02,e[o]=t*3;this.snipBuffer=this.ctx.createBuffer(1,this.ctx.sampleRate,this.ctx.sampleRate);const n=this.snipBuffer.getChannelData(0);for(let o=0;o<n.length;o++)n[o]=Math.random()*2-1;const s=this.ctx.createBufferSource();s.buffer=this.noiseBuffer,s.loop=!0;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=650,this.wind=this.ctx.createGain(),this.wind.gain.value=.16,s.connect(r).connect(this.wind).connect(this.master),s.start(),this.music=new Jg(this.ctx,this.master),this.music.volume=this.musicVolume}setMusicVolume(e){this.musicVolume=e,this.music&&(this.music.volume=e)}setVolume(e){this.volume=e,this.sync()}toggle(){return this.muted=!this.muted,this.sync(),this.muted}sync(){this.master&&this.master.gain.setTargetAtTime(this.muted?0:this.volume,this.ctx.currentTime,.1)}sample(e,t=.3,n=1){if(!this.ctx||!this.buffers[e])return!1;const s=this.ctx.createBufferSource();s.buffer=this.buffers[e],s.playbackRate.value=n;const r=this.ctx.createGain();return r.gain.value=t,s.connect(r).connect(this.master),s.start(),!0}tone(e,t,n=.1,s="sine",r=e){if(!this.ctx)return;const o=this.ctx.currentTime,a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type=s,a.frequency.setValueAtTime(e,o),a.frequency.exponentialRampToValueAtTime(Math.max(1,r),o+t),l.gain.setValueAtTime(.001,o),l.gain.exponentialRampToValueAtTime(Math.max(.001,n),o+.01),l.gain.exponentialRampToValueAtTime(.001,o+t),a.connect(l).connect(this.master),a.start(),a.stop(o+t+.02)}noise(e,t,n=1500){if(!this.ctx||!this.noiseBuffer)return;let s=this.ctx.createBufferSource();s.buffer=this.noiseBuffer,s.playbackRate.value=1+Math.random();let r=this.ctx.createBiquadFilter();r.type="highpass",r.frequency.value=n;let o=this.ctx.createGain();o.gain.setValueAtTime(t,this.ctx.currentTime),o.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+e),s.connect(r).connect(o).connect(this.master),s.start(0,Math.random()),s.stop(this.ctx.currentTime+e)}snip(e=0){if(!this.ctx||!this.snipBuffer)return;const t=this.ctx.currentTime,n=.94+Math.random()*.12,s=(r,o,a,l)=>{const c=this.ctx.createBufferSource(),h=this.ctx.createBiquadFilter(),u=this.ctx.createGain();c.buffer=this.snipBuffer,c.playbackRate.value=n,h.type="bandpass",h.Q.value=.65,h.frequency.setValueAtTime(a,t+r),h.frequency.exponentialRampToValueAtTime(a*.65,t+r+o),u.gain.setValueAtTime(1e-4,t+r),u.gain.exponentialRampToValueAtTime(l,t+r+.002),u.gain.exponentialRampToValueAtTime(1e-4,t+r+o),c.connect(h).connect(u).connect(this.master),c.start(t+r,Math.random()*.6),c.stop(t+r+o+.01)};s(0,.045,4800,.32),s(.052,.026,6200,.11),e&&s(.008,.09,2300,.07+Math.min(e,15)*.003)}cut(e,t,n=!1){e==="clippers"?this.snip(t):(this.sample("pull",.22,1.15+Math.random()*.14),this.noise(.1,.45,650),this.tone(135,.045,.045,"sine",75))}unsettle(){if(this.tone(53,1.9,.14,"sine",32),this.tone(57,1.7,.1,"sine",34),!this.ctx||!this.snipBuffer)return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource(),n=this.ctx.createBiquadFilter(),s=this.ctx.createGain();t.buffer=this.snipBuffer,t.loop=!0,n.type="lowpass",n.frequency.setValueAtTime(1100,e),n.frequency.exponentialRampToValueAtTime(60,e+1.2),s.gain.setValueAtTime(.001,e),s.gain.exponentialRampToValueAtTime(.18,e+.55),s.gain.exponentialRampToValueAtTime(.001,e+1.35),t.connect(n).connect(s).connect(this.master),t.start(),t.stop(e+1.4)}pickup(){this.sample("pickup",.4,1.2),[523,659,784].forEach((e,t)=>setTimeout(()=>this.tone(e,.24,.09),t*90))}bus(){if(!this.ctx||!this.noiseBuffer||!this.snipBuffer)return;const e=this.ctx,t=e.currentTime,n=e.createGain(),s=e.createStereoPanner(),r=e.createBiquadFilter();s.pan.setValueAtTime(-.25,t),s.pan.linearRampToValueAtTime(-.95,t+6.5),r.type="lowpass",r.frequency.setValueAtTime(620,t),r.frequency.exponentialRampToValueAtTime(85,t+7),n.gain.setValueAtTime(.001,t),n.gain.exponentialRampToValueAtTime(.34,t+.2),n.gain.setValueAtTime(.34,t+1),n.gain.exponentialRampToValueAtTime(.001,t+8),n.connect(r).connect(s).connect(this.master);for(const u of[1,2,3]){const d=e.createOscillator(),f=e.createGain();d.type=u===1?"triangle":"sine",f.gain.value=.24/u;const g=34*u;d.frequency.setValueAtTime(g,t),d.frequency.linearRampToValueAtTime(g*1.9,t+2),d.frequency.linearRampToValueAtTime(g*1.25,t+2.3),d.frequency.linearRampToValueAtTime(g*2.1,t+4.3),d.frequency.exponentialRampToValueAtTime(g*.8,t+8),d.connect(f).connect(n),d.start(),d.stop(t+8.2),d.onended=()=>{d.disconnect(),f.disconnect()}}const o=e.createBufferSource(),a=e.createGain();o.buffer=this.noiseBuffer,o.loop=!0,a.gain.value=.7,o.connect(a).connect(n),o.start(),o.stop(t+8.2);const l=e.createBufferSource(),c=e.createBiquadFilter(),h=e.createGain();l.buffer=this.snipBuffer,c.type="bandpass",c.frequency.value=1800,c.Q.value=.5,h.gain.setValueAtTime(.07,t),h.gain.exponentialRampToValueAtTime(1e-4,t+.8),l.connect(c).connect(h).connect(s),l.start(),l.stop(t+.85),o.onended=()=>{o.disconnect(),a.disconnect(),n.disconnect(),r.disconnect(),s.disconnect()},l.onended=()=>{l.disconnect(),c.disconnect(),h.disconnect()}}grit(e=3){if(this._grit?.amount===e)return this._grit.curve;const t=new Float32Array(1024);for(let n=0;n<1024;n++){const s=n/1023*2-1;t[n]=Math.tanh(s*e)}return this._grit={amount:e,curve:t},t}powerUp(e=.34){if(!this.ctx)return;const t=this.ctx,n=t.currentTime,s=n+e,r=t.createBiquadFilter(),o=t.createWaveShaper(),a=t.createGain();r.type="lowpass",r.Q.value=4,r.frequency.setValueAtTime(110,n),r.frequency.exponentialRampToValueAtTime(520,s),o.curve=this.grit(2.5),a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(.32,s-.03),a.gain.exponentialRampToValueAtTime(1e-4,s+.06),r.connect(o).connect(a).connect(this.master);for(const[l,c,h]of[["sawtooth",46,0],["sawtooth",46,14],["sine",34,0]]){const u=t.createOscillator();u.type=l,u.detune.value=h,u.frequency.setValueAtTime(c,n),u.frequency.exponentialRampToValueAtTime(c*1.6,s),u.connect(r),u.start(n),u.stop(s+.1)}if(this.noiseBuffer){const l=t.createBufferSource(),c=t.createBiquadFilter(),h=t.createGain();l.buffer=this.noiseBuffer,l.loop=!0,c.type="lowpass",c.frequency.setValueAtTime(180,n),c.frequency.exponentialRampToValueAtTime(700,s),h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(.9,s),h.gain.exponentialRampToValueAtTime(1e-4,s+.05),l.connect(c).connect(h).connect(this.master),l.start(n),l.stop(s+.1)}}whoosh(){if(!this.ctx||!this.snipBuffer)return;const e=this.ctx,t=e.currentTime,n=e.createOscillator(),s=e.createGain();n.type="sine",n.frequency.setValueAtTime(95,t),n.frequency.exponentialRampToValueAtTime(28,t+.55),s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.75,t+.008),s.gain.exponentialRampToValueAtTime(1e-4,t+.7),n.connect(s).connect(this.master),n.start(t),n.stop(t+.75);const r=e.createBufferSource(),o=e.createBiquadFilter(),a=e.createWaveShaper(),l=e.createGain();r.buffer=this.snipBuffer,o.type="lowpass",o.frequency.setValueAtTime(1800,t),o.frequency.exponentialRampToValueAtTime(220,t+.25),a.curve=this.grit(6),l.gain.setValueAtTime(1e-4,t),l.gain.exponentialRampToValueAtTime(.22,t+.004),l.gain.exponentialRampToValueAtTime(1e-4,t+.3),r.connect(o).connect(a).connect(l).connect(this.master),r.start(t,Math.random()*.5),r.stop(t+.32);for(const c of[-1,1]){const h=e.createBufferSource(),u=e.createBiquadFilter(),d=e.createGain(),f=e.createStereoPanner();h.buffer=this.snipBuffer,h.loop=!0,h.playbackRate.value=c<0?.85:1,u.type="bandpass",u.Q.value=.8,u.frequency.setValueAtTime(1100,t),u.frequency.exponentialRampToValueAtTime(140,t+.9),d.gain.setValueAtTime(1e-4,t),d.gain.exponentialRampToValueAtTime(.3,t+.05),d.gain.exponentialRampToValueAtTime(1e-4,t+1.1),f.pan.setValueAtTime(0,t),f.pan.linearRampToValueAtTime(c*.85,t+.8),h.connect(u).connect(d).connect(f).connect(this.master),h.start(t,Math.random()),h.stop(t+1.15)}}scratch(){if(!this.ctx||!this.snipBuffer)return;const e=this.ctx,t=e.currentTime,n=e.createBufferSource(),s=e.createBiquadFilter(),r=e.createGain(),o=.03+Math.random()*.05;n.buffer=this.snipBuffer,n.playbackRate.value=.6+Math.random()*.5,s.type="bandpass",s.Q.value=1.4,s.frequency.value=2600+Math.random()*2200,r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(.05+Math.random()*.04,t+.008),r.gain.exponentialRampToValueAtTime(1e-4,t+o),n.connect(s).connect(r).connect(this.master),n.start(t,Math.random()*.8),n.stop(t+o+.01)}pageTurn(){this.noise(.18,.18,1800),setTimeout(()=>this.noise(.12,.08,3e3),90)}wellLook(){if(!this.ctx||!this.snipBuffer)return;const e=this.ctx,t=e.currentTime;this.tone(61,4,.07,"sine",58),this.tone(64.5,4,.05,"sine",63);for(let n=0;n<3;n++){const s=e.createBufferSource(),r=e.createBiquadFilter(),o=e.createGain(),a=t+.6+n*.55+Math.random()*.2;s.buffer=this.snipBuffer,s.loop=!0,s.playbackRate.value=.5,r.type="bandpass",r.Q.value=6;const l=700+Math.random()*900;r.frequency.setValueAtTime(l,a),r.frequency.linearRampToValueAtTime(l*(.6+Math.random()*.8),a+.5),o.gain.setValueAtTime(1e-4,a),o.gain.exponentialRampToValueAtTime(.09,a+.18),o.gain.exponentialRampToValueAtTime(1e-4,a+.55),s.connect(r).connect(o).connect(this.master),s.start(a,Math.random()),s.stop(a+.6)}setTimeout(()=>this.drip(.5),1900)}drip(e=1){if(!this.ctx)return;const t=this.ctx,n=t.currentTime,s=t.createStereoPanner();s.pan.value=Math.random()*1.6-.8,s.connect(this.master);const r=900+Math.random()*900;[0,.19,.41].forEach((o,a)=>{const l=t.createOscillator(),c=t.createGain(),h=n+o;l.type="sine",l.frequency.setValueAtTime(r*1.6,h),l.frequency.exponentialRampToValueAtTime(r*.55,h+.09);const u=.07*e*Math.pow(.32,a);c.gain.setValueAtTime(1e-4,h),c.gain.exponentialRampToValueAtTime(u,h+.004),c.gain.exponentialRampToValueAtTime(1e-4,h+.16),l.connect(c).connect(s),l.start(h),l.stop(h+.2)})}spores(){this.noise(.35,.25,300),this.tone(150,.5,.05,"sine",70),setTimeout(()=>this.noise(.5,.08,2200),80)}rope(){this.tone(210,.5,.05,"triangle",150),setTimeout(()=>this.tone(180,.6,.04,"triangle",120),380),this.noise(.9,.22,400)}groan(){if(!this.ctx)return;const e=this.ctx,t=e.currentTime,n=e.createOscillator(),s=e.createOscillator(),r=e.createGain(),o=e.createBiquadFilter(),a=e.createGain();n.type="sawtooth",n.frequency.setValueAtTime(46,t),n.frequency.exponentialRampToValueAtTime(33,t+2.4),s.frequency.value=5.5,r.gain.value=2.5,s.connect(r).connect(n.frequency),o.type="lowpass",o.frequency.value=180,a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(.12,t+.5),a.gain.exponentialRampToValueAtTime(1e-4,t+2.4),n.connect(o).connect(a).connect(this.master),n.start(t),s.start(t),n.stop(t+2.5),s.stop(t+2.5)}setUnderground(e){if(this.underground=e,!!this.ctx){if(!this.cave){const t=this.ctx,n=t.createBufferSource(),s=t.createBiquadFilter(),r=t.createOscillator(),o=t.createGain();this.cave=t.createGain(),this.cave.gain.value=0,n.buffer=this.noiseBuffer,n.loop=!0,n.playbackRate.value=.35,s.type="lowpass",s.frequency.value=160,r.frequency.value=49,o.gain.value=.05,n.connect(s).connect(this.cave),r.connect(o).connect(this.cave),this.cave.connect(this.master),n.start(),r.start()}this.cave.gain.setTargetAtTime(e?.5:0,this.ctx.currentTime,.6)}}creak(){this.tone(170,.65,.08,"triangle",100),this.noise(.4,.3,700)}eerie(){this.tone(74,3,.06,"sine",72),this.tone(78,3,.04,"sine",76)}update(e,t,n,s,r,o=!1){if(!(!this.ctx||!this.wind)&&(this.wind.gain.setTargetAtTime(o?0:r?.035:this.underground?.012:.1+Math.sin(t*.2)*.025,this.ctx.currentTime,.4),this.music?.update(r,o||this.underground),!(r||o))){if(n&&t-this.lastStep>.43&&(this.lastStep=t,this.sample("step",.16,.85+Math.random()*.25)||this.noise(.09,.4,100)),this.underground){t-(this.lastDrip||0)>(this.nextDrip||2)&&(this.lastDrip=t,this.nextDrip=.8+Math.random()*3.2,this.drip(.5+Math.random()*.6));return}if(t-this.lastBird>7+Math.random()*7&&s<.72){this.lastBird=t;const a=1600+Math.random()*900;this.tone(a,.12,.025,"sine",a*1.3),setTimeout(()=>this.tone(a*1.1,.17,.02,"sine",a),180)}}}}const Ya={pixelHeight:540,exposure:1.12,glow:.5,sky:1.75,lift:.16,liftColor:"#7073c4",levels:48,dither:0,saturation:1.1,shadowTint:"#3d3fa6",highlightTint:"#fff0f2",split:.34,outline:.3,outlineColor:"#2c3060",outlineFar:40,aberration:2.6,scanlines:0,grain:.012,vignette:.22},Qg="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }",ev=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tColor;
uniform sampler2D tDepth;
uniform vec2 lowRes;
uniform float time, exposure, glow, lift, levels, dither, saturation, split, outline, outlineFar;
uniform float aberration, scanlines, grain, vignette, cameraNear, cameraFar, flash, warp;
uniform vec3 liftColor, shadowTint, highlightTint, outlineColor, flashColor;

float viewDepth(vec2 uv) {
  float z = texture2D(tDepth, uv).x * 2. - 1.;
  return (2. * cameraNear * cameraFar) / (cameraFar + cameraNear - z * (cameraFar - cameraNear));
}
vec3 aces(vec3 color) {
  // Same fitted ACES curve three.js uses, applied manually so grading happens after it.
  const mat3 m1 = mat3(0.59719, 0.07600, 0.02840, 0.35458, 0.90834, 0.13383, 0.04823, 0.01566, 0.83777);
  const mat3 m2 = mat3(1.60475, -0.10208, -0.00327, -0.53108, 1.10813, -0.07276, -0.07367, -0.00605, 1.07602);
  color *= 1.0 / 0.6;
  color = m1 * color;
  vec3 a = color * (color + 0.0245786) - 0.000090537;
  vec3 b = color * (0.983729 * color + 0.4329510) + 0.238081;
  return clamp(m2 * (a / b), 0., 1.);
}
vec3 toSRGB(vec3 c) {
  return mix(c * 12.92, 1.055 * pow(c, vec3(1. / 2.4)) - 0.055, step(0.0031308, c));
}
float bayer4(vec2 p) {
  p = mod(p, 4.);
  float x = p.x, y = p.y;
  float a = mod(x, 2.), b = mod(y, 2.);
  float lo = 2. * a + 3. * b - 4. * a * b; // 2x2 Bayer: 0 2 / 3 1
  vec2 q = floor(p / 2.);
  float hi = 2. * q.x + 3. * q.y - 4. * q.x * q.y;
  return (4. * lo + hi + 0.5) / 16.;
}
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

void main() {
  vec2 uv = vUv;
  // A gentle, breathing lens warp used by the power cut.
  vec2 c = uv - 0.5;
  uv = 0.5 + c * (1. - warp * 0.06 * (1. - dot(c, c) * 2.));
  vec2 px = 1. / lowRes;
  vec2 cell = floor(uv * lowRes);
  vec2 cuv = (cell + 0.5) * px;
  vec2 fromCenter = uv - 0.5;
  vec2 fringe = fromCenter * length(fromCenter) * 2. * aberration * px * (1. + warp * 2.);
  vec3 col = vec3(
    texture2D(tColor, uv + fringe).r,
    texture2D(tColor, uv).g,
    texture2D(tColor, uv - fringe).b
  );
  // Ink outlines: the nearer side of a depth step is darkened toward ink.
  float d = viewDepth(cuv);
  float dn = max(
    max(viewDepth(cuv + vec2(px.x, 0.)), viewDepth(cuv - vec2(px.x, 0.))),
    max(viewDepth(cuv + vec2(0., px.y)), viewDepth(cuv - vec2(0., px.y)))
  );
  float edge = smoothstep(0.06, 0.22, (dn - d) / max(d, 0.001)) * (1. - smoothstep(outlineFar * 0.45, outlineFar, d));

  col *= exposure;
  col = toSRGB(aces(col));
  // Overblown light: bright areas wash out towards white.
  float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(col, vec3(1.), smoothstep(0.55, 1.0, lum) * glow);
  col = mix(col, liftColor, lift * (1. - smoothstep(0., 0.75, lum)));
  col = mix(col, col * outlineColor * 1.6, edge * outline);
  float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(vec3(l), col, saturation);
  vec3 sT = shadowTint - dot(shadowTint, vec3(1. / 3.));
  vec3 hT = highlightTint - dot(highlightTint, vec3(1. / 3.));
  col += sT * split * 2.2 * (1. - l) * (1. - l) + hT * split * l * l;
  col = mix(col, flashColor, flash);

  float b = bayer4(cell) - 0.5;
  col = floor(clamp(col, 0., 1.) * levels + 0.5 + b * dither) / levels;

  col *= 1. - vignette * pow(clamp(length(fromCenter) * 1.25, 0., 1.), 2.4);
  float line = 0.5 + 0.5 * cos(gl_FragCoord.y * 3.14159265 * 0.6667);
  col *= 1. - scanlines * line;
  col += (hash(gl_FragCoord.xy + fract(time * 7.1) * 91.) - 0.5) * grain;
  gl_FragColor = vec4(clamp(col, 0., 1.), 1.);
}`;class tv{constructor(e,t,n=Ya){this.renderer=e,this.camera=t,this.look=n,this.enabled=!0,this.target=new Yn(4,4,{type:$i,minFilter:Lt,magFilter:Lt,depthBuffer:!0,depthTexture:new Na(4,4)}),this.material=new ln({vertexShader:Qg,fragmentShader:ev,depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{tColor:{value:this.target.texture},tDepth:{value:this.target.depthTexture},lowRes:{value:new ue(4,4)},time:{value:0},exposure:{value:1},glow:{value:n.glow},lift:{value:n.lift},liftColor:{value:new Ae(n.liftColor)},cameraNear:{value:t.near},cameraFar:{value:t.far},levels:{value:n.levels},dither:{value:n.dither},saturation:{value:n.saturation},split:{value:n.split},shadowTint:{value:new Ae(n.shadowTint)},highlightTint:{value:new Ae(n.highlightTint)},outline:{value:n.outline},outlineColor:{value:new Ae(n.outlineColor)},outlineFar:{value:n.outlineFar},aberration:{value:n.aberration},scanlines:{value:n.scanlines},grain:{value:n.grain},vignette:{value:n.vignette},flash:{value:0},flashColor:{value:new Ae("#fff1c9")},warp:{value:0}}});for(const r of["shadowTint","highlightTint","outlineColor","liftColor"])this.material.uniforms[r].value.set(n[r]).convertLinearToSRGB();this.material.uniforms.flashColor.value.convertLinearToSRGB();const s=new vt;s.setAttribute("position",new We([-1,-1,0,3,-1,0,-1,3,0],3)),s.setAttribute("uv",new We([0,0,2,0,0,2],2)),this.quad=new Qe(s,this.material),this.quad.frustumCulled=!1,this.scene=new Ur,this.scene.add(this.quad),this.ortho=new Wa(-1,1,1,-1,0,1),this.resize(innerWidth,innerHeight)}setShadowTint(e=this.look.shadowTint){this.material.uniforms.shadowTint.value.set(e).convertLinearToSRGB()}resize(e,t){const n=Math.max(120,Math.round(Math.min(this.look.pixelHeight,t))),s=Math.max(160,Math.round(n*e/t));this.target.setSize(s,n),this.material.uniforms.lowRes.value.set(s,n)}begin(){const e=this.renderer;e.setRenderTarget(this.enabled?this.target:null),e.clear()}end(e){if(!this.enabled)return;const t=this.material.uniforms,n=this.renderer;t.time.value=e,t.exposure.value=n.toneMappingExposure*this.look.exposure,t.cameraNear.value=this.camera.near,t.cameraFar.value=this.camera.far,n.setRenderTarget(null),n.clear(),n.render(this.scene,this.ortho)}}const Mt={spawn:[.9,1.68,4.3],yaw:.12,shadowTint:"#5a2a5e",pitch:-.12,rope:[0,3.15],pool:{position:[1.7,-2.4],radius:[4.6,3.1]},pillar:[2.6,-2.9],pod:[-4.1,-3.4],floor:{center:[0,-.4],radius:[7.6,6.7]}},dc=["#4a3550","#56405e","#664f6e","#4f3a56"];function nv(i){return new ln({transparent:!0,depthWrite:!1,uniforms:{uTime:i,deep:{value:new Ae("#0f6f86")},shallow:{value:new Ae("#3fe0d6")},fogColor:{value:new Ae("#1c1630")}},vertexShader:"varying vec2 vUv; varying vec3 vWorld; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position,1.); vWorld = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime; uniform vec3 deep; uniform vec3 shallow;
      varying vec2 vUv; varying vec3 vWorld;
      void main(){
        float r = length(vUv - .5) * 2.;
        float bands = sin(vWorld.x * 2.1 + uTime * .7 + sin(vWorld.z * 1.7 + uTime * .5) * 1.4);
        float glints = smoothstep(.88, 1., bands) * .35;
        vec3 c = mix(shallow, deep, smoothstep(.25, 1., 1. - r) * .75);
        c += glints;
        c = mix(c, shallow * 1.2, smoothstep(.82, 1., r) * .6);
        gl_FragColor = vec4(c, .86);
        #include <colorspace_fragment>
      }`})}function fc(i,e){return new ln({transparent:!0,depthWrite:!1,blending:ys,side:Nt,uniforms:{color:{value:new Ae(i)},strength:{value:e},uTime:{value:0}},vertexShader:`varying float vY; varying vec3 vNormalV; varying vec3 vView;
      void main(){ vY = uv.y; vec4 mv = modelViewMatrix * vec4(position,1.); vView = normalize(-mv.xyz); vNormalV = normalize(normalMatrix * normal); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 color; uniform float strength; uniform float uTime;
      varying float vY; varying vec3 vNormalV; varying vec3 vView;
      void main(){
        float facing = pow(abs(dot(vNormalV, vView)), 1.6);
        float fade = smoothstep(0., .55, vY) * (.55 + .45 * vY);
        float flicker = .92 + .08 * sin(uTime * 1.3 + vY * 6.);
        gl_FragColor = vec4(color * facing * fade * strength * flicker, 1.);
      }`})}class iv{constructor(){this.scene=new Ur,this.scene.background=new Ae("#170f1c"),this.scene.fog=new Ir("#24182e",7,26),this.time={value:0},this.interactables=[],this.colliders=[];const e=es(404),t=this.scene,n=new pt;t.add(n),t.add(new Ha("#c39ad0","#2a1a30",1.25));const s=new xr("#7fd0d8",2.6,9,1.4);s.position.set(Mt.pool.position[0],1.4,Mt.pool.position[1]),t.add(s);const r=new xr("#b9c7e6",3,6,1.5);r.position.set(Mt.rope[0],5,Mt.rope[1]),t.add(r);const[o,a]=Mt.pool.position,[l,c]=Mt.pool.radius,h=new Fs;h.absellipse(0,0,11,10,0,Math.PI*2);const u=new pa;u.absellipse(o,-a,l,c,0,Math.PI*2,!0),h.holes.push(u);const d=Dn(n,new ka(h,48),"#56405e",[0,0,0],[-Math.PI/2,0,0]);d.receiveShadow=!0,Dn(n,new gs(1,40),"#0d2a3a",[o,-1.4,a],[-Math.PI/2,0,0]).scale.set(l,c,1);const g=new Qe(new Xn(1,.9,1.4,40,1,!0),new Wt({color:"#123446",side:Pt}));g.position.set(o,-.7,a),g.scale.set(l,1,c),n.add(g),this.water=new Qe(new gs(1,48),nv(this.time)),this.water.rotation.x=-Math.PI/2,this.water.position.set(o,-.08,a),this.water.scale.set(l,c,1),this.water.renderOrder=2,t.add(this.water);for(let k=0;k<34;k++){const $=k/34*Math.PI*2;Et(n,.28+e()*.22,dc[k%4],[o+Math.cos($)*l*1.02,.02,a+Math.sin($)*c*1.02],[1.3,.45,1])}this.colliders.push({x:o,z:a,w:l*2-.6,d:c*1.15},{x:o,z:a,w:l*1.35,d:c*2-.5});const x=new on(1,5),m=x.attributes.position,p=[],T=new U;for(let k=0;k<m.count;k++){T.fromBufferAttribute(m,k);const $=Math.sin(T.x*7.1+T.y*3.3)*.05+Math.sin(T.z*9.3-T.y*4.1)*.04+Math.sin((T.x+T.z)*15.7)*.02;T.multiplyScalar(1+$),m.setXYZ(k,T.x,T.y,T.z)}const S=new Qe(x,new ih({vertexColors:!0,side:Pt,flatShading:!0})),v=S.geometry.attributes.position;for(let k=0;k<v.count;k+=3){const $=(v.getY(k)+v.getY(k+1)+v.getY(k+2))/3,se=Math.floor(($*6.5+10)*1.6+Math.sin(k*.37)*.35),ve=new Ae(["#4a3550","#5e4566","#735a7a","#523d5a","#806a8a"][(se%5+5)%5]);for(let Se=0;Se<3;Se++)p.push(ve.r,ve.g,ve.b)}S.geometry.setAttribute("color",new We(p,3)),S.geometry.computeVertexNormals(),S.scale.set(10.5,6.6,9.6),S.position.y=1.4,S.receiveShadow=!0,t.add(S);const C=(k,$,se,ve,Se)=>{const Be=new Qe(new gs(ve,18),new Wt({color:Se,fog:!1}));Be.rotation.x=Math.PI/2,Be.position.set(k,se,$),t.add(Be);const Ze=new Qe(new Ls(ve*1.08,ve*.28,6,18),Hn("#2c2540"));Ze.rotation.x=Math.PI/2,Ze.position.set(k,se-.05,$),t.add(Ze)};C(Mt.rope[0],Mt.rope[1],7.25,.55,"#c9d3ea"),C(Mt.pod[0],Mt.pod[1],6.55,.95,"#fff3da");const R=(k,$)=>{const se=k/10.5,ve=$/9.6;return 1.4+6.6*Math.sqrt(Math.max(0,1-se*se-ve*ve))-.3};for(let k=0;k<46;k++){const $=e()*Math.PI*2,se=2+e()*6.8,ve=Math.cos($)*se,Se=Math.sin($)*se*.9;if(Math.hypot(ve-Mt.pod[0],Se-Mt.pod[1])<1.6||Math.hypot(ve-Mt.rope[0],Se-Mt.rope[1])<1.2)continue;const Be=.6+e()*(se>5?2.6:1.4),Ze=.12+e()*.3,D=R(ve,Se),te=Dn(n,new vs(Ze,Be,6),e()>.7?"#7a5470":dc[k%4],[ve,D-Be/2+.15,Se],[Math.PI,e()*3,0]);te.castShadow=!1}const P=(k,$,se,ve,Se=!0)=>{const Be=Math.max(2,Math.round(se/.55));for(let Ze=0;Ze<Be;Ze++){const D=Ze/Be,te=ve*(1-D*.78);st(n,te*.82,te,se/Be+.02,["#a65f3e","#c27448","#d98b55","#b06a44"][Ze%4],[k,se/Be*(Ze+.5),$],7)}Dn(n,new vs(ve*.24,se*.35,6),"#c98458",[k,se+se*.15,$]),Se&&this.colliders.push({x:k,z:$,w:ve*1.6,d:ve*1.6})};P(-6.4,1.6,2.8,.75),P(-5.6,2.6,1.6,.45),P(-7,3.4,3.6,.85),P(6.2,2.4,2.4,.6),P(5.2,3.6,1.3,.4),P(6.8,-1.2,3.2,.7),P(-2.4,-6.1,2.2,.55),P(4.4,-5.6,1.8,.5);for(let k=0;k<14;k++){const $=e()*Math.PI*2,se=Math.cos($)*(6.2+e()*1.6),ve=Math.sin($)*(5.6+e()*1.4)-.4;P(se,ve,.4+e()*1.1,.18+e()*.2,!1)}const[w,y]=Mt.pillar,M=new pt,L=[[.95,.5],[.8,.55],[.88,.45],[.66,.6],[.58,.5],[.42,.55],[.3,.45]];let b=-.1;L.forEach(([k,$],se)=>{st(M,k,k*1.08,$,"#6a5578",[0,b+$/2,0],7,[0,se*.6,0]),st(M,k*1.12,k*1.16,.1,"#d9773c",[0,b+.05,0],7,[0,se*.6,0]),b+=$}),st(M,.12,.3,.5,"#5a4d74",[.05,b+.2,0],6),M.position.set(w,0,y),n.add(M);const I=M.clone();I.scale.y=-.85,I.position.y=-.16,I.traverse(k=>{k.isMesh&&(k.material=Hn("#2b3a55"))}),t.add(I);const N=Et(n,.5,"#4a4062",[o-1.6,-.05,a+.9],[1.4,.35,1]);N.castShadow=!1,_e(n,[.9,.08,.55],"#c0703f",[o-1.6,.06,a+.9],[0,.4,0]);const[B,z]=Mt.rope;st(n,.035,.035,7.2,"#a48d5f",[B,3.65,z],6);for(let k=0;k<6;k++)Et(n,.06,"#8a7448",[B,.6+k*1.15,z],[1,1.4,1]);st(n,.25,.3,.1,"#8a7448",[B+.15,.05,z+.1],8),this.wellShaft=new Qe(new Xn(.55,1.1,7.1,20,1,!0),fc("#9fb3e0",.18)),this.wellShaft.position.set(B,3.65,z),t.add(this.wellShaft);const[X,F]=Mt.pod;Et(n,1.1,"#334d4a",[X,-.25,F],[1.3,.55,1.15],1);for(let k=0;k<16;k++){const $=e()*Math.PI*2,se=.4+e()*.9;Et(n,.06+e()*.06,k%3?"#5f8f6c":"#a7cf8a",[X+Math.cos($)*se,.25-se*.18,F+Math.sin($)*se],[1,.6,1])}this.colliders.push({x:X,z:F,w:1.4,d:1.4});const ne=new pt;ne.position.set(X,.36,F),this.podGlow=new wr({color:"#e8e0c4",emissive:"#a6d98c",emissiveIntensity:.6,roughness:.8,flatShading:!0});const he=new Qe(new on(.26,1),this.podGlow);he.scale.set(1,1.4,1),he.position.y=.3,ne.add(he);for(let k=0;k<4;k++){const $=new Qe(new Ls(.265-Math.abs(k-1.5)*.04,.025,5,14),Hn("#b9a77e"));$.rotation.x=Math.PI/2,$.position.y=.12+k*.12,ne.add($)}st(ne,.03,.06,.22,"#6e8a5c",[0,.02,0],6);const xe=new Qe(new vs(.1,.16,6),this.podGlow);xe.position.y=.72,ne.add(xe),t.add(ne),this.pod=ne,this.podLight=new xr("#b8ef9a",2.2,3.5,1.6),this.podLight.position.set(X,.9,F),t.add(this.podLight);const Ue=new Od("#ffe7c2",70,11,.36,.55,1.4);Ue.position.set(X,6.5,F),Ue.target.position.set(X,0,F),Ue.castShadow=!0,Ue.shadow.mapSize.set(512,512),t.add(Ue,Ue.target),this.shaft=new Qe(new Xn(.85,1.75,6.6,28,1,!0),fc("#ffe2b4",.42)),this.shaft.position.set(X,3.3,F),t.add(this.shaft);const Xe=150,nt=new Float32Array(Xe*3);this.moteSeeds=[];for(let k=0;k<Xe;k++)this.moteSeeds.push([e()*Math.PI*2,e(),e()]);const Ke=new vt;Ke.setAttribute("position",new Qt(nt,3)),this.motes=new td(Ke,new Wc({color:"#fff0cf",size:.035,transparent:!0,opacity:.85,blending:ys,depthWrite:!1})),this.motes.frustumCulled=!1,t.add(this.motes),n.traverse(k=>{k.isMesh&&(k.receiveShadow=!0)}),this.interactables.push({id:"spores",kind:"sporepod",label:"Take the sporepod",object:ne,position:new U(X,.8,F),taken:!1,revealed:!0,reach:3.2},{id:"rope",kind:"rope",label:"Climb back up",object:null,position:new U(B,1.4,z),taken:!1,revealed:!0,wide:!0})}walkable(e,t){const{center:n,radius:s}=Mt.floor;return((e-n[0])/s[0])**2+((t-n[1])/s[1])**2<1}get area(){return{colliders:this.colliders,walkable:(e,t)=>this.walkable(e,t)}}update(e,t){this.time.value=t,this.shaft.material.uniforms.uTime.value=t,this.wellShaft.material.uniforms.uTime.value=t+4;const n=.5+.5*Math.sin(t*1.6);this.podGlow.emissiveIntensity=.35+n*.55,this.podLight.intensity=this.pod.visible?1.4+n*1.6:0,this.pod.rotation.y=Math.sin(t*.4)*.15,this.pod.scale.setScalar(1+n*.035);const s=this.motes.geometry.attributes.position,[r,o]=Mt.pod;this.moteSeeds.forEach(([a,l,c],h)=>{const u=(l*6+t*.12*(.5+c))%6+.2,d=(.4+c*.9)*(.55+(6.6-u)/9),f=a+t*.05*(c-.5);s.setXYZ(h,r+Math.cos(f)*d,6.4-u,o+Math.sin(f)*d*.9)}),s.needsUpdate=!0}}const pc={grass:`<path d="M12 22.5V6.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
    <ellipse cx="12" cy="4.6" rx="1.7" ry="3"/>
    ${[8.6,12.8,17].map(i=>`<ellipse cx="9.4" cy="${i}" rx="1.6" ry="2.9" transform="rotate(-38 9.4 ${i})"/>
    <ellipse cx="14.6" cy="${i}" rx="1.6" ry="2.9" transform="rotate(38 14.6 ${i})"/>`).join("")}`,spore:`<path d="M12 1.5c-3.6 0-6.2 4.2-6.2 9.4 0 1.2.9 2.1 2.1 2.1h8.2c1.2 0 2.1-.9 2.1-2.1 0-5.2-2.6-9.4-6.2-9.4Z"/>
    <path d="M9.7 13.6h4.6l.7 7.2c0 .9-.7 1.7-1.6 1.7h-2.8c-.9 0-1.6-.8-1.6-1.7Z"/>
    <g class="hole"><circle cx="10" cy="6" r="1.1"/><circle cx="13.6" cy="8.4" r="1.2"/><circle cx="9.3" cy="10" r=".9"/><circle cx="14.5" cy="4.6" r=".8"/><circle cx="12" cy="11" r=".7"/></g>`,skull:`<path d="M12 1.5c-5 0-8.8 3.6-8.8 8.4 0 2.9 1.4 5.2 3.5 6.5v3.4c0 1.2 1 2.2 2.2 2.2h6.2c1.2 0 2.2-1 2.2-2.2v-3.4c2.1-1.3 3.5-3.6 3.5-6.5 0-4.8-3.8-8.4-8.8-8.4Z"/>
    <g class="hole"><ellipse cx="8.5" cy="11" rx="2.5" ry="2.7"/><ellipse cx="15.5" cy="11" rx="2.5" ry="2.7"/><path d="M12 14.2l-1.3 2.6h2.6Z"/>
    <rect x="9.6" y="19" width=".9" height="3"/><rect x="11.55" y="19" width=".9" height="3"/><rect x="13.5" y="19" width=".9" height="3"/></g>`,cricket:`<ellipse cx="11" cy="13.5" rx="6.5" ry="2.6"/><circle cx="18" cy="12.3" r="2"/>
    <path d="M19 10.6 23 3.5M18 10.5 20.5 2.8M9 15.5 6 21M12 15.8 13.5 21M14 12 9 6.5 3.5 17.5" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>`},mc={speed:'<path d="M2.5 1h7M2.5 11h7M3.2 1.2c0 3.2 5.6 3 5.6 4.8S3.2 7.6 3.2 10.8M8.8 1.2c0 3.2-5.6 3-5.6 4.8s5.6 1.6 5.6 4.8" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M4.2 9.6h3.6L6 7.6Z"/>',more:'<path d="M6 1.5v9M1.5 6h9" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',chance:'<circle cx="3" cy="3" r="1.8"/><circle cx="9" cy="9" r="1.8"/><path d="M10 2 2 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',reach:'<circle cx="6" cy="6" r="3.8" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="1.6 1.4"/><circle cx="6" cy="6" r="1.3"/><path d="M6 0v1.6M6 10.4V12M0 6h1.6M10.4 6H12" stroke="currentColor" stroke-width="1.2"/>',power:'<path d="M7.2 0 1.8 7h3.6L4.2 12l6-7.6H6.6Z"/>'};function yr(i){return`<svg class="tree-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${pc[i]||pc.grass}</svg>`}function sv(i){return!i||!mc[i]?"":`<svg class="tree-badge" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">${mc[i]}</svg>`}const fr=54,rv={clippers:"Find the clippers",spores:"Find the sporepod"};function ov({canvas:i,state:e,onBuy:t}){i.replaceChildren();const n=[dr,...Ni,...bo].flatMap(w=>w.nodes),s=n.map(w=>w[0]),r=n.map(w=>w[1]),[o,a,l,c]=[Math.min(...s),Math.max(...s),Math.min(...r),Math.max(...r)],h=i.clientWidth||900,u=i.clientHeight||520,d=Math.min((h-fr*2)/(a-o||1),(u-fr*1.6)/(c-l||1),96),f=h/2-(o+a)/2*d,g=u/2-(l+c)/2*d,x=([w,y])=>[f+w*d,g+y*d],m="http://www.w3.org/2000/svg",p=document.createElementNS(m,"svg");p.setAttribute("class","tree-lines"),p.setAttribute("width",h),p.setAttribute("height",u);const T=(w,y,M)=>{const L=document.createElementNS(m,"line"),[b,I]=x(w),[N,B]=x(y);Object.entries({x1:b,y1:I,x2:N,y2:B}).forEach(([z,X])=>L.setAttribute(z,X)),L.setAttribute("class",M),p.append(L)},S=w=>w.parent?Ni.find(M=>M.id===w.parent).nodes[(w.parentLevel||1)-1]:dr.nodes[0];for(const w of Ni){const y=e.skills[w.id]||0;w.nodes.forEach((M,L)=>{const b=L?w.nodes[L-1]:S(w);T(b,M,`${w.branch} ${L<y?"lit":"dim"}`)})}for(const w of bo)T(dr.nodes[0],w.nodes[0],`item ${e.items.has(w.id)?"lit":"dim"}`);i.append(p);const v=document.createElement("div");v.className="tree-tip",v.hidden=!0;const C=(w,y)=>{v.innerHTML=y,v.hidden=!1;const M=parseFloat(w.style.left),L=parseFloat(w.style.top),b=M>h*.62;v.style.left=`${b?M-fr/2-14:M+fr/2+14}px`,v.style.top=`${Math.min(Math.max(L,70),u-70)}px`,v.classList.toggle("to-left",b)},R=(w,y)=>{const[M,L]=x(y);w.style.left=`${M}px`,w.style.top=`${L}px`},P=document.createElement("div");P.className="tree-root",P.innerHTML=yr("skull"),R(P,dr.nodes[0]),i.append(P);for(const w of bo){const y=e.items.has(w.id),M=document.createElement("div");M.className=`tile item ${y?"found":"unknown"}`,M.innerHTML=yr("cricket"),R(M,w.nodes[0]),M.addEventListener("pointerenter",()=>C(M,y?`<b>${w.name}</b><p>${w.description}</p><small>Found in the grass</small>`:"<b>Something small</b><p>Buried somewhere in the lawn.</p>")),M.addEventListener("pointerleave",()=>v.hidden=!0),i.append(M)}for(const w of Ni){const y=e.skills[w.id]||0,M=w.branch==="spore"?"spore":"grass";w.nodes.forEach((L,b)=>{const I=b<y,N=b===y,B=N&&Rr(w,e),z=N&&_a(w,e),X=I?"owned":z?"available":B?"next":"locked",F=document.createElement("button");F.type="button",F.className=`tile ${w.branch} ${X}`,(N||b===w.max-1&&y>=w.max)&&(F.dataset.skill=w.id),F.dataset.level=String(b+1),F.setAttribute("aria-label",`${w.name}, level ${b+1} of ${w.max}${I?", learned":""}`),F.innerHTML=yr(M)+sv(w.badge),R(F,L);const ne=Br(w,b),he=w.needs&&!e.items.has(w.needs)?rv[w.needs]:w.parent&&!Rr(w,e)?`Needs ${Ni.find(Ue=>Ue.id===w.parent).name}${w.parentLevel>1?` ${["","I","II","III"][w.parentLevel]}`:""}`:null,xe=I?'<small class="learned">Learned</small>':he?`<small class="needs">${he}</small>`:b>y?'<small class="needs">Learn the one before it first</small>':`<small class="cost ${z?"":"short"}"><em>${ne.toLocaleString()}</em> clippings${z?" · click to learn":""}</small>`;F.addEventListener("pointerenter",()=>C(F,`<span class="tip-level">${w.max>1?`${["","I","II","III"][b+1]} of ${["","I","II","III"][w.max]}`:""}</span><b>${w.name}</b><p>${w.description}</p>${xe}`)),F.addEventListener("focus",()=>F.dispatchEvent(new Event("pointerenter"))),F.addEventListener("pointerleave",()=>v.hidden=!0),F.addEventListener("blur",()=>v.hidden=!0),F.addEventListener("click",()=>{N&&_a(w,e)&&t(w)}),i.append(F)})}i.append(v)}class av{constructor({panel:e,audio:t,entries:n}){this.panel=e,this.audio=t,this.entries=n,this.pages=[],this.index=-1,this.timer=null,this.page=e.querySelector(".diary-body"),this.date=e.querySelector(".diary-date"),this.count=e.querySelector(".diary-count"),this.prev=e.querySelector(".diary-prev"),this.next=e.querySelector(".diary-next"),this.prev.addEventListener("click",()=>this.turn(-1)),this.next.addEventListener("click",()=>this.turn(1)),this.page.addEventListener("click",()=>this.finish())}has(e){return this.pages.some(t=>t.id===e)}write(e,t){this.has(e)||this.pages.push({id:e,stamp:t}),this.index=this.pages.findIndex(n=>n.id===e),this.show(!0)}turn(e){const t=this.index+e;t<0||t>=this.pages.length||(this.index=t,this.audio.pageTurn?.(),this.show(!1))}get writing(){return!!this.timer}show(e){this.stop();const{id:t,stamp:n}=this.pages[this.index],s=this.entries[t];this.date.textContent=n,this.count.textContent=`${this.index+1} / ${this.pages.length}`,this.prev.disabled=this.index===0,this.next.disabled=this.index===this.pages.length-1,this.page.replaceChildren();const r=[];for(const c of s.parts)if(c.note){const h=document.createElement("div");h.className="diary-note";for(const u of c.note){const d=document.createElement("p");d.textContent=u,h.append(d)}this.page.append(h),r.push({slip:h})}else for(const h of c.text){const u=document.createElement("p");this.page.append(u),r.push({p:u,text:h})}for(const c of r)c.p?c.p.textContent=c.text:c.slip.classList.add("shown");if(!e)return;const o=r.reduce((c,h)=>c+(h.text?.length||0),0),a=Math.min(70,Math.round(o/5));let l=0;this.timer=setInterval(()=>{l%5!==4&&this.audio.scratch?.(),++l>=a&&this.stop()},55)}finish(){this.stop()}stop(){clearInterval(this.timer),this.timer=null}}const lv={arrival:{parts:[{text:["First real job!","The bus left me right at the gate of Briar House. Nobody has lived here for a long time. The grass is up to my knees and every window is dark.","I don't care. I'm going to make this garden beautiful again. Clippers, a bit of patience, done by dusk."]}]},note:{parts:[{text:["Found a note pinned up in the shed. Somebody called M. left it for me:"]},{note:["The tools in here are yours to use. The clippers are a bit stiff — there's oil and a stone in the little shelter across the garden.","Mind the flower beds. Pull what you can. A little care makes all the difference.","You needn't go into the house. No matter what you hear.","— M."]},{text:["No matter what you hear.","Funny. It's so quiet here I can hear my own heartbeat."]}]}},ki={charge:.34,radius:1.9,limit:3,fov:64},de=i=>document.getElementById(i),zr=de("game");let Vt;try{Vt=new bg({canvas:zr,antialias:!1,powerPreference:"high-performance"})}catch(i){throw de("loading").innerHTML="<p>This garden needs WebGL 2. Please enable hardware acceleration and open it in a modern desktop browser.</p>",i}Vt.setSize(innerWidth,innerHeight);Vt.setPixelRatio(Math.min(devicePixelRatio,1.6));Vt.shadowMap.enabled=!0;Vt.shadowMap.type=yc;Vt.toneMapping=Sc;Vt.toneMappingExposure=1.03;Vt.autoClear=!1;const an=Xt.palette,Dt=new Ur;Dt.background=new Ae(an.morning.fog);Dt.fog=new Ir(an.morning.fog,24,98);const lt=new kt(64,innerWidth/innerHeight,.05,150),Ms=new Ha(an.morning.hemiSky,an.morning.hemiGround,an.morning.hemiIntensity);Dt.add(Ms);const qt=new rh(an.morning.sun,an.morning.sunIntensity);qt.position.set(-20,29,13);qt.castShadow=!0;qt.shadow.mapSize.set(2048,2048);Object.assign(qt.shadow.camera,{left:-31,right:31,top:31,bottom:-31,near:1,far:95});qt.shadow.normalBias=.055;qt.shadow.bias=-2e-4;qt.shadow.radius=3;Dt.add(qt);qt.target.position.set(0,0,-4);Dt.add(qt.target);const Cr=new Qe(new Ps(120,32,16),new ln({side:Pt,depthWrite:!1,uniforms:{top:{value:new Ae(an.morning.top)},bottom:{value:new Ae(an.morning.bottom)},brightness:{value:Ya.sky}},vertexShader:"varying vec3 vPosition; void main(){vPosition=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vPosition; uniform vec3 top; uniform vec3 bottom; uniform float brightness; void main(){float t=smoothstep(-5.,95.,vPosition.y);gl_FragColor=vec4(mix(bottom,top,t)*brightness,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`}));Dt.add(Cr);const $a=new pt;Dt.add($a);const Za=new Wt({color:an.morning.cloud,transparent:!0,opacity:.7});for(let i=0;i<15;i++){const e=new pt;e.position.set(Math.sin(i*2.4)*65,22+i%4*3,Math.cos(i*2.4)*65);for(let t=0;t<4;t++){const n=new Qe(new on(3.5,1),Za);n.position.set(t*3,Math.sin(t*2)*1.4,0),n.scale.set(1.5,.45,1),e.add(n)}$a.add(e)}const Ct=zg(Dt,Xt),mn=new Gg(Dt,Xt),gc=new kg(Dt,Ct.flowerData),Ds=new $g(Dt),sn=new qg,mt=new jg,dt=new Yg(lt,Xt,Ct,zr),ui=new tv(Vt,lt),Is=new iv,cv=new Zg(Ct.interactables,mn),jt=new Hg({player:dt,camera:lt,sky:Cr,sun:qt,hemi:Ms,scene:Dt,renderer:Vt,audio:mt,veil:de("flower-veil"),hud:de("hud"),clouds:{material:Za}}),di=new av({panel:de("diary-panel"),audio:mt,entries:lv});function hv(){const i=ts(W.dayTime/Xt.day.durationSeconds,0,1),e=Xt.day.startHour+(Xt.day.endHour-Xt.day.startHour)*i;return`Day one · ${String(Math.floor(e)).padStart(2,"0")}:${String(Math.floor(e%1*60)).padStart(2,"0")}`}function dh(i){Yt("diary"),di.write(i,hv())}const W={started:!1,ended:!1,modal:null,tool:"hands",items:new Set,skills:{},score:0,compost:0,dayTime:0,totalTime:0,cooldown:0,held:!1,power:null,sporeCooldown:0,kick:0,flash:0,hitstop:0,underground:!1,transition:!1,surface:null,followed:!1,action:null,readNote:!1,horror:0,restored:!1};let bt=null,Pr,vc=0,fh=null;const Oi=new U,pr=new U;document.body.classList.add("menu");function fn(i,e=4200){clearTimeout(Pr),de("toast").textContent=i,de("toast").classList.add("show"),Pr=setTimeout(()=>de("toast").classList.remove("show"),e)}function Yt(i){W.modal=i,W.action=null,W.held=!1,i&&(clearTimeout(Pr),de("toast").classList.remove("show")),W.modal!=="diary"&&di.finish();for(const e of["pause","diary","journal","lore","end"])de(`${e}-panel`).hidden=e!==i;de("overlay").hidden=!i,i&&(document.exitPointerLock(),i==="journal"&&Ka())}function Us(){W.ended||(Yt(null),dt.lock().then(i=>{i||(Yt("pause"),fn("Click “Back to the garden” to capture the mouse."))}))}function uv(){mt.init().then(()=>mt.bus()).catch(()=>fn("Sound is unavailable, but the garden is ready.")),W.started=!0,dt.reset(),de("title-screen").hidden=!0,de("postcard").hidden=!0,de("hud").hidden=!1,document.body.classList.remove("menu"),document.body.classList.add("playing"),de("arrival-fade").hidden=!1,setTimeout(()=>de("arrival-fade").hidden=!0,1700),de("day-intro").hidden=!1,setTimeout(()=>de("day-intro").hidden=!0,5200),setTimeout(()=>{!W.ended&&!W.modal&&!di.has("arrival")&&dh("arrival")},3200),dt.lock().then(i=>{i||Yt("pause")})}de("start").addEventListener("click",uv);de("resume").addEventListener("click",Us);de("restart").addEventListener("click",()=>{de("restart").dataset.confirm==="yes"?location.reload():(de("restart").dataset.confirm="yes",de("restart").textContent="Discard today’s progress and restart? Click again.")});de("again").addEventListener("click",()=>location.reload());de("sound-button").addEventListener("click",()=>{const i=mt.toggle();de("sound-button").innerHTML=`${i?"♩":"♫"} <span>SOUND ${i?"OFF":"ON"}</span>`});de("volume").addEventListener("input",i=>mt.setVolume(Number(i.target.value)/100));de("music-volume").addEventListener("input",i=>mt.setMusicVolume(Number(i.target.value)/100));de("sensitivity").addEventListener("input",i=>dt.sensitivity=Number(i.target.value)*525e-6);de("bob").addEventListener("change",i=>dt.bob=i.target.checked);de("retro").addEventListener("change",i=>ui.enabled=i.target.checked);de("compost-icon").innerHTML=yr("grass");for(const i of document.querySelectorAll("[data-close]"))i.addEventListener("click",Us);de("journal-button").addEventListener("click",()=>{W.started&&!W.ended&&!jt.active&&Yt("journal")});de("lore-close").addEventListener("click",ph);de("lore-back").addEventListener("click",ph);function ph(){fh==="journal"?Yt("journal"):Us()}function mh(i,e=!1){fh=e?"journal":null,de("lore-title").textContent=i.title,de("lore-meta").textContent=i.meta,de("lore-text").textContent=i.text;const t=i.object.userData.artwork;de("lore-art").hidden=!t,t&&(de("lore-art").src=t,de("lore-art").alt=i.title),Yt("lore")}document.addEventListener("pointerlockchange",()=>{W.started&&!W.ended&&!dt.locked&&!W.modal&&Yt("pause")});document.addEventListener("visibilitychange",()=>{document.hidden&&W.started&&!W.ended&&Yt("pause")});addEventListener("blur",()=>{W.held=!1,W.started&&!W.ended&&!W.modal&&Yt("pause")});addEventListener("keydown",i=>{if(!(!W.started||W.ended||i.repeat||jt.active)){if(i.code==="Tab"){i.preventDefault(),W.modal==="journal"?Us():Yt("journal");return}if(W.modal==="diary"&&["KeyJ","KeyE","Space"].includes(i.code)){i.preventDefault(),Us();return}if(i.code==="Escape"&&W.modal&&W.modal!=="pause"){i.preventDefault(),Yt("pause");return}if(!W.modal){if(i.code==="KeyJ"&&di.pages.length){Yt("diary"),di.index=di.pages.length-1,di.show(!1);return}i.code==="Digit1"&&xa("hands"),i.code==="Digit2"&&xa("clippers"),i.code==="KeyE"&&Ma(),i.code==="KeyF"&&bt?.actions&&Ma("F")}}});zr.addEventListener("mousedown",i=>{if(!(i.button!==0||!dt.locked||W.modal||W.ended||jt.active)){if(bt=gh(),bt){W.held=!1,W.action=null,Ma();return}W.held=!0,ya()}});addEventListener("mouseup",()=>W.held=!1);zr.addEventListener("contextmenu",i=>i.preventDefault());function xa(i){if(!jt.active){if(W.action=null,i==="clippers"&&!W.items.has("clippers")){fn("There might be something useful in the shed.");return}W.tool=i,W.held=!1,mi()}}function Ja(i,e){if(W.underground)return!1;const t=Math.ceil(i.distanceTo(e)*8);for(let n=1;n<t;n++){const s=n/t,r=pn.lerp(i.x,e.x,s),o=pn.lerp(i.z,e.z,s);if(Ct.colliders.some(a=>Math.abs(r-a.x)<a.w/2&&Math.abs(o-a.z)<a.d/2))return!0}return!1}function gh(){cv.update(),lt.getWorldDirection(Oi);let i=null,e=-1;const t=W.underground?Is.interactables:Ct.interactables;for(const n of t){if(n.taken||n.id==="gate"&&Ct.gateOpen||n.buried&&!n.revealed)continue;const s=n.position.clone().sub(lt.position),r=s.length(),o=s.normalize().dot(Oi);if(r>(n.reach||3)||o<(n.id==="gate"?.35:n.wide?.75:.975)||!["house","well","gate"].includes(n.id)&&Ja(lt.position,n.position))continue;const a=o-r*.06;a>e&&(e=a,i=n)}return i}function Ma(i="E"){if(!bt||W.modal||!dt.locked||jt.active||W.transition)return;const e=bt;if(!(e.buried&&!e.revealed)){if(W.action=null,W.held=!1,e.id==="gate")Ct.gateOpen=!0,mt.creak(),fn("The latch gives way. The garden is yours for the day.");else if(e.id==="note")W.readNote=!0,dh("note");else if(e.id==="house")mt.creak(),fn("Locked. Your work is out here.",3500);else if(e.id==="well"&&i==="F")_c(!0);else if(e.id==="well")mt.wellLook(),W.wellLooks=(W.wellLooks||0)+1,fn(W.dayTime>500?"Something below stops moving when you look.":W.wellLooks>1?"Far down, a pale light. The rope is long enough to climb. [F]":"The water is very still. Your reflection seems a little late.",5e3);else if(e.id==="rope")_c(!1);else{if(e.taken=!0,e.object.visible=!1,W.items.add(e.id),mt.pickup(),e.lore){mh(e),bt=null,mi();return}fn({clippers:"Rusty clippers. A little stiff, but better than nothing. [2] to equip.",oil:"A few drops of oil. Your clippers now recover 8% sooner.",stone:"A keen edge. A slightly wider cut. One extra blade with each snip.",charm:"A brass cricket, warm to the touch. +3% power-cut chance after unlocking.",spores:"The sporepod is warm, and slowly breathing. A new branch has appeared in your field notes."}[e.id],5200),e.id==="clippers"&&xa("clippers")}bt=null,mi()}}function _c(i){if(W.transition)return;W.transition=!0,W.held=!1,W.action=null,W.power=null,sn.charge=0,bt=null,dt.enabled=!1,dt.keys.clear(),dt.velocity.set(0,0,0),mt.rope();const e=de("travel-fade");e.hidden=!1,e.offsetWidth,e.classList.add("dark"),setTimeout(()=>{i?(W.surface={position:lt.position.clone(),yaw:dt.yaw,pitch:dt.pitch},W.underground=!0,dt.area=Is.area,lt.position.set(...Mt.spawn),dt.yaw=Mt.yaw,dt.pitch=Mt.pitch):(W.underground=!1,dt.area=null,lt.position.copy(W.surface.position),dt.yaw=W.surface.yaw,dt.pitch=-.05),mt.setUnderground(i),ui.setShadowTint(i?Mt.shadowTint:void 0),dt.orient(),e.classList.remove("dark"),setTimeout(()=>{e.hidden=!0,W.transition=!1,dt.enabled=!0,!i&&W.items.has("spores")&&!W.followed&&(W.followed=!0,setTimeout(()=>{fn("It feels like something came up with you.",5600),mt.groan()},1100))},850)},900)}function ya(i=!1){if(W.cooldown>0&&!i||W.action||W.modal||W.ended||W.power&&!i||W.underground||W.transition||jt.active)return;const e=Ug(W);if(lt.getWorldDirection(Oi),Oi.y>.22&&!i)return;const t=ts((lt.position.y-.3)/Math.max(.1,-Oi.y),.65,2.55);if(pr.copy(lt.position).addScaledVector(Oi,t),pr.y=.2,Ja(lt.position,pr))return;W.cooldown=e.cooldown;const n=sn.swing(e.cooldown,i,W.tool);W.action={elapsed:0,contact:n,tool:W.tool,stats:e,critical:i,aim:pr.clone()}}function dv(i){if(W.ended||W.modal||jt.active)return;const{stats:e,critical:t,tool:n,aim:s}=i;if(Ja(lt.position,s)||lt.position.distanceTo(s)>3.5)return;const r=e.radius*(t?ki.radius:1),o=e.limit*(t?ki.limit:1),a=[...mn.near(s.x,s.z,r),...gc.near(s.x,s.z,r)].sort((u,d)=>Math.hypot(u.x-s.x,u.z-s.z)-Math.hypot(d.x-s.x,d.z-s.z)).slice(0,o);let l=!1;const c=[];for(const u of a)u.flower?(gc.remove(u),l=!0):(mn.remove(u),c.push(u));if(mt.cut(n,a.length,t),t&&pv(s),!a.length)return;if(sn.holding=n==="hands"&&c.length>0,vh(c.length),Ds.burst(a,t),l){W.action=null,W.held=!1,W.power=null,sn.charge=0,bt=null,clearTimeout(Pr),de("toast").classList.remove("show"),de("interact").hidden=!0,jt.start();return}const h=de("harvest-pop");if(h.textContent=`+${c.length}${t?"  ✦":""}`,h.classList.remove("pop","power"),h.offsetWidth,h.classList.add(t?"power":"pop"),de("score").classList.remove("score-tick"),de("score").offsetWidth,de("score").classList.add("score-tick"),de("crosshair").classList.remove("cut-hit"),de("crosshair").offsetWidth,de("crosshair").classList.add("cut-hit"),W.skills.spores&&W.sporeCooldown<=0&&c.length){const u=qa(W);mn.infect(s.x,s.z,u.radius+.25,u.budget),W.sporeCooldown=u.cooldown,Ds.burst(c,!1,!0),mt.spores?.()}!t&&!W.power&&Math.random()<e.critChance&&fv(),mi()}function fv(){W.power={elapsed:0},mt.powerUp(ki.charge)}function pv(i){W.power=null,sn.charge=0,mn.shock(i.x,i.z,1),Ds.powerBurst(i.x,i.z),W.kick=1,W.flash=.55,W.hitstop=.07,mt.whoosh()}function vh(i){W.score+=i,W.compost+=i}function Ka(){de("compost").textContent=W.compost.toLocaleString(),de("inventory").textContent=["clippers","oil","stone","charm","spores"].filter(e=>W.items.has(e)).map(e=>({clippers:"Rusty clippers",oil:"Oil can",stone:"Whetstone",charm:"Brass cricket",spores:"Sporepod"})[e]).join(" · ")||"A pair of willing hands.";const i=Ct.interactables.filter(e=>e.lore&&e.taken);de("collection").hidden=!i.length,de("collection-count").textContent=`${i.length} keepsakes`,de("collection-list").replaceChildren();for(const e of i){const t=document.createElement("button");t.className="keepsake",t.dataset.item=e.id,t.textContent=e.title,t.addEventListener("click",()=>mh(e,!0)),de("collection-list").append(t)}ov({canvas:de("skills"),state:W,onBuy(e){const t=W.skills[e.id]||0;W.compost-=Br(e,t),W.skills[e.id]=t+1,e.id,mt.pickup(),Ka(),mi()}})}function mv(){const i=de("spore-meter");if(i.hidden=!W.skills.spores,i.hidden)return;const e=qa(W).cooldown,t=W.sporeCooldown<=0;i.classList.toggle("ready",t);const n=t?1:1-W.sporeCooldown/e;de("spore-clip-rect").setAttribute("y",String(24*(1-n))),de("spore-clip-rect").setAttribute("height",String(24*n)),de("spore-label").textContent=t?"Spores ready":`Spores ${Math.ceil(W.sporeCooldown)}s`}function mi(){mv(),de("score").textContent=W.score.toLocaleString(),de("percentage").textContent=`${(mn.cutCount/mn.tufts.length*100).toFixed(1)}%`;const i=Ng(W);de("next-upgrade").textContent=i.available?`${i.available} upgrade${i.available===1?"":"s"} available`:i.remaining!==null?`Next upgrade in ${i.remaining.toLocaleString()} clippings`:"Explore to find more skills",de("upgrade-label").textContent=i.available?"Choose an upgrade":"Skill tree",de("journal-button").classList.toggle("ready",i.available>0),de("journal-button").setAttribute("aria-label",i.available?`Open skill tree, ${i.available} upgrades available`:"Open skill tree")}function xc(i){W.ended=!0,W.held=!1,Yt("end"),de("end-title").textContent=i?"A little good done.":"The garden can wait.",de("end-eyebrow").textContent=i?"DAY ONE · A JOB WELL DONE":"DAY ONE · EVENING HAS COME",de("end-copy").textContent=i?"The lawn is tidy. Your hands smell of green things. As you leave, an upstairs curtain moves. You decide not to wave.":"The last bus is waiting. You leave a little grass for another day. Behind you, a light comes on in the empty house.",de("end-score").textContent=W.score.toLocaleString(),mt.eerie()}const si=new Ae;function gv(i){W.dayTime+=i;const e=ts(W.dayTime/Xt.day.durationSeconds,0,1),t=Xt.day.startHour+(Xt.day.endHour-Xt.day.startHour)*e;de("time").textContent=`${String(Math.floor(t)).padStart(2,"0")}:${String(Math.floor(t%1*60)).padStart(2,"0")}`;const n=pn.smoothstep(e,.5,1),s=an.morning,r=an.dusk;Cr.material.uniforms.top.value.set(s.top).lerp(si.set(r.top),n),Cr.material.uniforms.bottom.value.set(s.bottom).lerp(si.set(r.bottom),n),Dt.fog.color.set(s.fog).lerp(si.set(r.fog),n).multiplyScalar(Ya.sky),Dt.background.copy(Dt.fog.color),Za.color.set(s.cloud).lerp(si.set(r.cloud),n),qt.color.set(s.sun).lerp(si.set(r.sun),n),Ms.color.set(s.hemiSky).lerp(si.set(r.hemiSky),n),Ms.groundColor.set(s.hemiGround).lerp(si.set(r.hemiGround),n),qt.intensity=pn.lerp(s.sunIntensity,r.sunIntensity,n),Ms.intensity=pn.lerp(s.hemiIntensity,r.hemiIntensity,n),qt.position.set(-20+e*43,29-Math.sin(e*Math.PI/2)*23,13),e>.58&&W.horror===0&&(W.horror=1,mt.eerie(),fn("The birds have gone quiet.",4300)),e>.76&&W.horror===1&&(W.horror=2,Ct.watcher.visible=!0,mt.creak(),fn("Was that a window opening?",4e3)),e>.84&&(Ct.watcher.visible=!1),!W.restored&&mn.cutCount/mn.tufts.length>=Xt.day.targetCleared&&(W.restored=!0,mt.pickup(),fn("The garden is looking like itself again. Time to catch the bus.",5500)),W.restored&&lt.position.z>17?xc(!0):e>=1&&xc(W.restored)}function _h(){requestAnimationFrame(_h);const i=Math.min(vv.getDelta(),.05);W.totalTime+=i;const e=W.totalTime,t=W.started&&!W.modal&&!W.ended&&dt.locked,n=t&&!jt.active&&!W.transition,s=W.hitstop>0?i*.1:i;if(W.hitstop=Math.max(0,W.hitstop-i),!W.started)lt.position.set(10+Math.sin(e*.035)*.35,7.2,21),lt.lookAt(-2,1.1,-7),mn.time.value=e;else{if(dt.update(n?i:0),n){if(gv(i),W.cooldown=Math.max(0,W.cooldown-i),W.action&&(W.action.elapsed+=s,W.action.elapsed>=W.action.contact)){const l=W.action;W.action=null,dv(l)}W.sporeCooldown=Math.max(0,W.sporeCooldown-i);const a=mn.update(i,e,qa(W).wither);if(a.length&&(vh(a.length),Ds.burst(a,!1,!0)),W.power?(W.power.elapsed+=i,sn.charge=Math.min(1,W.power.elapsed/ki.charge),W.power.elapsed>=ki.charge&&!W.power.released&&(W.power.released=!0,sn.charge=0,ya(!0),W.action||(W.power=null))):W.held&&ya(),bt=gh(),de("interact").hidden=!bt,bt){de("interact").classList.toggle("is-eye",!!bt.paper||["note","well","house"].includes(bt.id)),de("interact").setAttribute("aria-label",bt.label);const l=bt.actions;de("interact-actions").hidden=!l,l&&de("interact-actions").dataset.for!==bt.id&&(de("interact-actions").dataset.for=bt.id,de("interact-actions").innerHTML=l.map(([c,h])=>`<span><kbd>${c}</kbd>${h}</span>`).join(""))}de("crosshair").hidden=!!bt,de("crosshair").classList.toggle("target",!!bt),Ct.bus.position.x-=i*(4+Math.min(W.dayTime,8)*1.5),Ct.bus.visible=Ct.bus.position.x>-100}Ct.gateOpen&&(Ct.gate.rotation.y=pn.damp(Ct.gate.rotation.y,-1.7,5,i)),sn.update(n?s:0,e,W.tool,n&&dt.moving)}W.kick=Math.max(0,W.kick-i*2.3),W.flash=Math.max(0,W.flash-i*3.2);const r=W.kick*W.kick,o=ki.fov-sn.charge*4.5+r*11;Math.abs(lt.fov-o)>.01&&(lt.fov=o,lt.updateProjectionMatrix()),r>.001&&n&&(lt.rotation.x+=(Math.random()-.5)*r*.035,lt.rotation.z+=(Math.random()-.5)*r*.03),ui.material.uniforms.flash.value=W.flash,ui.material.uniforms.warp.value=sn.charge*.6+r,jt.update(t?i:0),Ds.update(n?s:0),$a.rotation.y=e*.001,Ct.foliage.time.value=e,W.underground&&Is.update(i,e),mt.update(i,e,n&&dt.moving,W.dayTime/Xt.day.durationSeconds,!n,jt.active),e-vc>.15&&(vc=e,mi()),ui.begin(),Vt.render(W.underground?Is.scene:Dt,lt),W.started&&(!jt.active||jt.elapsed>4.7)&&sn.render(Vt),ui.end(e)}const vv=new Vd;addEventListener("resize",()=>{lt.aspect=innerWidth/innerHeight,lt.updateProjectionMatrix(),Vt.setSize(innerWidth,innerHeight),sn.resize(innerWidth,innerHeight),ui.resize(innerWidth,innerHeight),W.modal==="journal"&&Ka()});mi();Vt.compile(Dt,lt);Vt.compile(Is.scene,lt);de("loading").style.opacity="0";setTimeout(()=>de("loading").hidden=!0,800);_h();
