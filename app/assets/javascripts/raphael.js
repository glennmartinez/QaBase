
(functiona){var b="0.3.4",c="hasOwnProperty",d=/[\.\/]/,e="*",f=functi
(on){},g=functiona,b){return a-b},h,i,j={n:{}},k=functiona,b){var c=j,
(d=i,e=Array.prototype.slice.callarguments,2),f=k.listenersa),l=0,m=!1
(,n,o=[],p={},q=[],r=h,s=[];h=a,i=0;forvar
(t=0,u=f.length;t<u;t++)"zIndex"in f[t]&&o.pushf[t].zIndex),f[t].zInde
(x<0&&p[f[t].zIndex]=f[t]));o.sortg);whileo[l]<0){n=p[o[l++]],q.pushn.
(applyb,e));ifi){i=d;return q}}fort=0;t<u;t++){n=f[t];if"zIndex"in n)i
(fn.zIndex==o[l]){q.pushn.applyb,e));ifi)break;do{l++,n=p[o[l]],n&&q.p
(ushn.applyb,e));ifi)break}whilen)}else
(p[n.zIndex]=n;else{q.pushn.applyb,e));ifi)break}}i=d,h=r;return
(q.length?q:null};k.listeners=functiona){var b=a.splitd),c=j,f,g,h,i,k
(,l,m,n,o=[c],p=[];fori=0,k=b.length;i<k;i++){n=[];forl=0,m=o.length;l
(<m;l++){c=o[l].n,g=[c[b[i]],c[e]],h=2;whileh--)f=g[h],f&&n.pushf),p=p
(.concatf.f||[]))}o=n}return p},k.on=functiona,b){var
(c=a.splitd),e=j;forvar g=0,h=c.length;g<h;g++)e=e.n,!e[c[g]]&&e[c[g]]
(={n:{}}),e=e[c[g]];e.f=e.f||[];forg=0,h=e.f.length;g<h;g++)ife.f[g]==
(b)return f;e.f.pushb);return functiona){+a==+a&&b.zIndex=+a)}},k.stop
(=function){i=1},k.nt=functiona){ifa)returnnew
(RegExp"?:\\.|\\/|^)"+a+"?:\\.|\\/|$)")).testh);return
(h},k.off=k.unbind=functiona,b){var f=a.splitd),g,h,i,k,l,m,n,o=[j];fo
(rk=0,l=f.length;k<l;k++)form=0;m<o.length;m+=i.length-2){i=[m,1],g=o[
(m].n;iff[k]!=e)g[f[k]]&&i.pushg[f[k]]);else forh in g)g[c]h)&&i.pushg
([h]);o.splice.applyo,i)}fork=0,l=o.length;k<l;k++){g=o[k];whileg.n){i
(fb){ifg.f){form=0,n=g.f.length;m<n;m++)ifg.f[m]==b){g.f.splicem,1);br
(eak}!g.f.length&&delete g.f}forh in g.n)ifg.n[c]h)&&g.n[h].f){var p=g
(.n[h].f;form=0,n=p.length;m<n;m++)ifp[m]==b){p.splicem,1);break}!p.le
(ngth&&delete g.n[h].f}}else{delete g.f;forh in
(g.n)g.n[c]h)&&g.n[h].f&&delete
(g.n[h].f}g=g.n}}},k.once=functiona,b){var c=function){var
(d=b.applythis,arguments);k.unbinda,c);return d};return
(k.ona,c)},k.version=b,k.toString=function){return"You are running Eve
("+b},typeof
(module!="undefined"&&module.exports?module.exports=k:typeof
(define!="undefined"?define"eve",[],function){return
(k}):a.eve=k})this),function){function cFa){forvar
(b=0;b<cy.length;b++)cy[b].el.paper==a&&cy.spliceb--,1)}function
(cEb,d,e,f,h,i){e=Qe);var j,k,l,m=[],o,p,q,t=b.ms,u={},v={},w={};iff)f
(ory=0,z=cy.length;y<z;y++){var x=cy[y];ifx.el.id==d.id&&x.anim==b){x.
(percent!=e?cy.splicey,1),l=1):k=x,d.attrx.totalOrigin);break}}else
(f=+v;forvar y=0,z=b.percents.length;y<z;y++){ifb.percents[y]==e||b.pe
(rcents[y]>f*b.top){e=b.percents[y],p=b.percents[y-1]||0,t=t/b.top*e-p
(),o=b.percents[y+1],j=b.anim[e];break}f&&d.attrb.anim[b.percents[y]])
(}if!!j){if!k){forvar A in j)ifj[g]A))ifU[g]A)||d.paper.customAttribut
(es[g]A)){u[A]=d.attrA),u[A]==null&&u[A]=T[A]),v[A]=j[A];switchU[A]){c
(ase C:w[A]=v[A]-u[A])/t;break;case"colour":u[A]=a.getRGBu[A]);var B=a
(.getRGBv[A]);w[A]={r:B.r-u[A].r)/t,g:B.g-u[A].g)/t,b:B.b-u[A].b)/t};b
(reak;case"path":var D=bRu[A],v[A]),E=D[1];u[A]=D[0],w[A]=[];fory=0,z=
(u[A].length;y<z;y++){w[A][y]=[0];forvar F=1,G=u[A][y].length;F<G;F++)
(w[A][y][F]=E[y][F]-u[A][y][F])/t}break;case"transform":var H=d._,I=ca
(H[A],v[A]);ifI){u[A]=I.from,v[A]=I.to,w[A]=[],w[A].real=!0;fory=0,z=u
([A].length;y<z;y++){w[A][y]=[u[A][y][0]];forF=1,G=u[A][y].length;F<G;
(F++)w[A][y][F]=v[A][y][F]-u[A][y][F])/t}}else{var J=d.matrix||new
(cb,K={_:{transform:H.transform},getBBox:function){return d.getBBox1)}
(};u[A]=[J.a,J.b,J.c,J.d,J.e,J.f],b$K,v[A]),v[A]=K._.transform,w[A]=[K
(.matrix.a-J.a)/t,K.matrix.b-J.b)/t,K.matrix.c-J.c)/t,K.matrix.d-J.d)/
(t,K.matrix.e-J.e)/t,K.matrix.f-J.f)/t]}break;case"csv":var
(L=rj[A])[s]c),M=ru[A])[s]c);ifA=="clip-rect"){u[A]=M,w[A]=[],y=M.leng
(th;whiley--)w[A][y]=L[y]-u[A][y])/t}v[A]=L;break;default:L=[][n]j[A])
(,M=[][n]u[A]),w[A]=[],y=d.paper.customAttributes[A].length;whiley--)w
([A][y]=L[y]||0)-M[y]||0))/t}}var O=j.easing,P=a.easing_formulas[O];if
(!P){P=rO).matchN);ifP&&P.length==5){var R=P;P=functiona){return
(cCa,+R[1],+R[2],+R[3],+R[4],t)}}else P=bf}q=j.start||b.start||+new Da
(te),x={anim:b,percent:e,timestamp:q,start:q+b.del||0),status:0,initst
(atus:f||0,stop:!1,ms:t,easing:P,from:u,diff:w,to:v,el:d,callback:j.ca
(llback,prev:p,next:o,repeat:i||b.times,origin:d.attr),totalOrigin:h},
(cy.pushx);iff&&!k&&!l){x.stop=!0,x.start=new
(Date-t*f;ifcy.length==1)return cA)}l&&x.start=new
(Date-x.ms*f),cy.length==1&&czcA)}else k.initstatus=f,k.start=new
(Date-k.ms*f;eve"raphael.anim.start."+d.id,d,b)}}function cDa,b){var
(c=[],d={};this.ms=b,this.times=1;ifa){forvar e in a)a[g]e)&&d[Qe)]=a[
(e],c.pushQe)));c.sortbd)}this.anim=d,this.top=c[c.length-1],this.perc
(ents=c}function cCa,b,c,d,e,f){function oa,b){var
(c,d,e,f,j,k;fore=a,k=0;k<8;k++){f=me)-a;ifzf)<b)return
(e;j=3*i*e+2*h)*e+g;ifzj)<1e-6)break;e=e-f/j}c=0,d=1,e=a;ife<c)return
(c;ife>d)return d;whilec<d){f=me);ifzf-a)<b)return
(e;a>f?c=e:d=e,e=d-c)/2+c}return e}function na,b){var
(c=oa,b);returnl*c+k)*c+j)*c}function ma){returni*a+h)*a+g)*a}var
(g=3*b,h=3*d-b)-g,i=1-g-h,j=3*c,k=3*e-c)-j,l=1-j-k;return
(na,1/200*f))}function cq){return this.x+q+this.y+q+this.width+" Ã—
("+this.height}function cp){return this.x+q+this.y}function cba,b,c,d,
(e,f){a!=null?this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f
(=+f):this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function
(bHb,c,d){b=a._path2curveb),c=a._path2curvec);var
(e,f,g,h,i,j,k,l,m,n,o=d?0:[];forvar p=0,q=b.length;p<q;p++){var r=b[p
(];ifr[0]=="M")e=i=r[1],f=j=r[2];else{r[0]=="C"?m=[e,f].concatr.slice1
()),e=m[6],f=m[7]):m=[e,f,e,f,i,j,i,j],e=i,f=j);forvar
(s=0,t=c.length;s<t;s++){var u=c[s];ifu[0]=="M")g=k=u[1],h=l=u[2];else
({u[0]=="C"?n=[g,h].concatu.slice1)),g=n[6],h=n[7]):n=[g,h,g,h,k,l,k,l
(],g=k,h=l);var v=bGm,n,d);ifd)o+=v;else{forvar w=0,x=v.length;w<x;w++
()v[w].segment1=p,v[w].segment2=s,v[w].bez1=m,v[w].bez2=n;o=o.concatv)
(}}}}}return o}function bGb,c,d){var
(e=a.bezierBBoxb),f=a.bezierBBoxc);if!a.isBBoxIntersecte,f))return
(d?0:[];var g=bB.apply0,b),h=bB.apply0,c),i=~~g/5),j=~~h/5),k=[],l=[],
(m={},n=d?0:[];forvar o=0;o<i+1;o++){var p=a.findDotsAtSegment.applya,
(b.concato/i));k.push{x:p.x,y:p.y,t:o/i})}foro=0;o<j+1;o++)p=a.findDot
(sAtSegment.applya,c.concato/j)),l.push{x:p.x,y:p.y,t:o/j});foro=0;o<i
(;o++)forvar q=0;q<j;q++){var r=k[o],s=k[o+1],t=l[q],u=l[q+1],v=zs.x-r
(.x)<.001?"y":"x",w=zu.x-t.x)<.001?"y":"x",x=bDr.x,r.y,s.x,s.y,t.x,t.y
(,u.x,u.y);ifx){ifm[x.x.toFixed4)]==x.y.toFixed4))continue;m[x.x.toFix
(ed4)]=x.y.toFixed4);var y=r.t+zx[v]-r[v])/s[v]-r[v]))*s.t-r.t),A=t.t+
(zx[w]-t[w])/u[w]-t[w]))*u.t-t.t);y>=0&&y<=1&&A>=0&&A<=1&&d?n++:n.push
({x:x.x,y:x.y,t1:y,t2:A}))}}return n}function bFa,b){return
(bGa,b,1)}function bEa,b){return bGa,b)}function bDa,b,c,d,e,f,g,h){if
(!xa,c)<ye,g)||ya,c)>xe,g)||xb,d)<yf,h)||yb,d)>xf,h))){var i=a*d-b*c)*
(e-g)-a-c)*e*h-f*g),j=a*d-b*c)*f-h)-b-d)*e*h-f*g),k=a-c)*f-h)-b-d)*e-g
();if!k)return;var l=i/k,m=j/k,n=+l.toFixed2),o=+m.toFixed2);ifn<+ya,c
().toFixed2)||n>+xa,c).toFixed2)||n<+ye,g).toFixed2)||n>+xe,g).toFixed
(2)||o<+yb,d).toFixed2)||o>+xb,d).toFixed2)||o<+yf,h).toFixed2)||o>+xf
(,h).toFixed2))return;return{x:l,y:m}}}function
(bCa,b,c,d,e,f,g,h,i){if!i<0||bBa,b,c,d,e,f,g,h)<i)){var j=1,k=j/2,l=j
(-k,m,n=.01;m=bBa,b,c,d,e,f,g,h,l);whilezm-i)>n)k/=2,l+=m<i?1:-1)*k,m=
(bBa,b,c,d,e,f,g,h,l);return l}}function
(bBa,b,c,d,e,f,g,h,i){i==null&&i=1),i=i>1?1:i<0?0:i;var j=i/2,k=12,l=[
(-0.1252,.1252,-0.3678,.3678,-0.5873,.5873,-0.7699,.7699,-0.9041,.9041
(,-0.9816,.9816],m=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1
(069,.1069,.0472,.0472],n=0;forvar o=0;o<k;o++){var p=j*l[o]+j,q=bAp,a
(,c,e,g),r=bAp,b,d,f,h),s=q*q+r*r;n+=m[o]*w.sqrts)}return j*n}function
(bAa,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return
(a*g-3*b+3*c}function bya,b){var c=[];forvar
(d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y
(:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3
(]={x:+a[0],y:+a[1]}:e-2==d&&f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a
([3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||f[0]={x:+a[d],y:
(+a[d+1]}),c.push["C",-f[0].x+6*f[1].x+f[2].x)/6,-f[0].y+6*f[1].y+f[2]
(.y)/6,f[1].x+6*f[2].x-f[3].x)/6,f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2]
(.y])}return c}function bx){return this.hex}function bva,b,c){function
(d){var e=Array.prototype.slice.callarguments,0),f=e.join"â€"),h=d.ca
(che=d.cache||{},i=d.count=d.count||[];ifh[g]f)){bui,f);return
(c?ch[f]):h[f]}i.length>=1e3&&delete
(h[i.shift)],i.pushf),h[f]=a[m]b,e);return c?ch[f]):h[f]}return
(d}function bua,b){forvar c=0,d=a.length;c<d;c++)ifa[c]===b)return
(a.pusha.splicec,1)[0])}function bma){ifObjecta)!==a)return a;var
(b=new a.constructor;forvar c in a)a[g]c)&&b[c]=bma[c]));return
(b}function ac){ifa.isc,"function"))return
(b?c):eve.on"raphael.DOMload",c);ifa.isc,E))return
(a._engine.create[m]a,c.splice0,3+a.isc[0],C))).addc);var d=Array.prot
(otype.slice.callarguments,0);ifa.isd[d.length-1],"function")){var
(e=d.pop);return b?e.calla._engine.create[m]a,d)):eve.on"raphael.DOMlo
(ad",function){e.calla._engine.create[m]a,d))})}return
(a._engine.create[m]a,arguments)}a.version="2.1.0",a.eve=eve;var
(b,c=/[, ]+/,d={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},e=/\{
(\d+)\}/g,f="prototype",g="hasOwnProperty",h={doc:document,win:window}
(,i={was:Object.prototype[g].callh.win,"Raphael"),is:h.win.Raphael},j=
(function){this.ca=this.customAttributes={}},k,l="appendChild",m="appl
(y",n="concat",o="createTouch"in h.doc,p="",q="
(",r=String,s="split",t="click dblclick mousedown mousemove mouseout
(mouseover mouseup touchstart touchmove touchend touchcancel"[s]q),u={
(mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},v=r.
(prototype.toLowerCase,w=Math,x=w.max,y=w.min,z=w.abs,A=w.pow,B=w.PI,C
(="number",D="string",E="array",F="toString",G="fill",H=Object.prototy
(pe.toString,I={},J="push",K=a._ISURL=/^url\['"]?[^\)]+?)['"]?\)$/i,L=
(/^\s*#[a-f\d]{6})|#[a-f\d]{3})|rgba?\\s*[\d\.]+%?\s*,\s*[\d\.]+%?\s*,
(\s*[\d\.]+%??:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\\s*[\d\.]+?:deg|\xb0|%)?
(\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\\s*[
(\d\.]+?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+?:%?\s*,\s*[\d\.]+)
(?)%?\s*\))\s*$/i,M={NaN:1,Infinity:1,"-Infinity":1},N=/^?:cubic-)?bez
(ier\[^,]+),[^,]+),[^,]+),[^\)]+)\)/,O=w.round,P="setAttribute",Q=pars
(eFloat,R=parseInt,S=r.prototype.toUpperCase,T=a._availableAttrs
(={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9
(1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-
(opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-
(size":"10","font-style":"normal","font-
(weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-
(spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000
(","stroke-dasharray":"","stroke-linecap":"butt","stroke-
(linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-
(width":1,target:"_blank","text-anchor":"middle",title:"Raphael",trans
(form:"",width:0,x:0,y:0},U=a._availableAnimAttrs={blur:C,"clip-
(rect":"csv",cx:C,cy:C,fill:"colour","fill-opacity":C,"font-
(size":C,height:C,opacity:C,path:"path",r:C,rx:C,ry:C,stroke:"colour
(","stroke-opacity":C,"stroke-width":C,transform:"transform",width:C,x
(:C,y:C},V=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u200
(2\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u
(2028\u2029]/g,W=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u200
(1\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u
(3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2
(001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f
(\u3000\u2028\u2029]*/,X={hs:1,rg:1},Y=/,?[achlmqrstvxz]),?/gi,Z=/[ach
(lmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002
(\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2
(028\u2029,]*-?\d*\.?\d*?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1
(680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009
(\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0
(\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2
(009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,$=/[rstm])[\x09\x0a\x
(0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2
(006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*-?\d*\.?\
(d*?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001
(\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3
(000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2
(001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f
(\u3000\u2028\u2029]*)+)/ig,_=/-?\d*\.?\d*?:e[\-+]?\d+)?)[\x09\x0a\x0b
(\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u200
(6\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\
(x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u
(2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig,ba=a.
(_radial_gradient=/^r?:\[^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u18
(0e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\
(u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u
(180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200
(a\u202f\u205f\u3000\u2028\u2029]*[^\)]+?)\))?/,bb={},bc=functiona,b){
(return a.key-b.key},bd=functiona,b){return
(Qa)-Qb)},be=function){},bf=functiona){return a},bg=a._rectPath=functi
(ona,b,c,d,e){ife)return[["M",a+e,b],["l",c-e*2,0],["a",e,e,0,0,1,e,e]
(,["l",0,d-e*2],["a",e,e,0,0,1,-e,e],["l",e*2-c,0],["a",e,e,0,0,1,-e,-
(e],["l",0,e*2-d],["a",e,e,0,0,1,e,-e],["z"]];return[["M",a,b],["l",c,
(0],["l",0,d],["l",-c,0],["z"]]},bh=functiona,b,c,d){d==null&&d=c);ret
(urn[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d]
(,["z"]]},bi=a._getPath={path:functiona){return
(a.attr"path")},circle:functiona){var b=a.attrs;return
(bhb.cx,b.cy,b.r)},ellipse:functiona){var b=a.attrs;return
(bhb.cx,b.cy,b.rx,b.ry)},rect:functiona){var b=a.attrs;return
(bgb.x,b.y,b.width,b.height,b.r)},image:functiona){var
(b=a.attrs;return bgb.x,b.y,b.width,b.height)},text:functiona){var
(b=a._getBBox);return
(bgb.x,b.y,b.width,b.height)}},bj=a.mapPath=functiona,b){if!b)return
(a;var c,d,e,f,g,h,i;a=bRa);fore=0,g=a.length;e<g;e++){i=a[e];forf=1,h
(=i.length;f<h;f+=2)c=b.xi[f],i[f+1]),d=b.yi[f],i[f+1]),i[f]=c,i[f+1]=
(d}return a};a._g=h,a.type=h.win.SVGAngle||h.doc.implementation.hasFea
(ture"http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":
("VML";ifa.type=="VML"){var
(bk=h.doc.createElement"div"),bl;bk.innerHTML='<v:shape adj="1"/>',bl=
(bk.firstChild,bl.style.behavior="url#default#VML)";if!bl||typeof
(bl.adj!="object")return a.type=p;bk=null}a.svg=!a.vml=a.type=="VML"),
(a._Paper=j,a.fn=k=j.prototype=a.prototype,a._id=0,a._oid=0,a.is=funct
(iona,b){b=v.callb);ifb=="finite")return!M[g]+a);ifb=="array")return a
(instanceof Array;return b=="null"&&a===null||b==typeof a&&a!==null||b
(=="object"&&a===Objecta)||b=="array"&&Array.isArray&&Array.isArraya)|
(|H.calla).slice8,-1).toLowerCase)==b},a.angle=functionb,c,d,e,f,g){if
(f==null){var h=b-d,i=c-e;if!h&&!i)return
(0;return180+w.atan2-i,-h)*180/B+360)%360}return
(a.angleb,c,f,g)-a.angled,e,f,g)},a.rad=functiona){return
(a%360*B/180},a.deg=functiona){return a*180/B%360},a.snapTo=functionb,
(c,d){d=a.isd,"finite")?d:10;ifa.isb,E)){var
(e=b.length;whilee--)ifzb[e]-c)<=d)return b[e]}else{b=+b;var
(f=c%b;iff<d)return c-f;iff>b-d)return c-f+b}return c};var
(bn=a.createUUID=functiona,b){return function){return"xxxxxxxx-xxxx-
(4xxx-yxxx-
(xxxxxxxxxxxx".replacea,b).toUpperCase)}}/[xy]/g,functiona){var
(b=w.random)*16|0,c=a=="x"?b:b&3|8;return c.toString16)});a.setWindow=
(functionb){eve"raphael.setWindow",a,h.win,b),h.win=b,h.doc=h.win.docu
(ment,a._engine.initWin&&a._engine.initWinh.win)};var
(bo=functionb){ifa.vml){var c=/^\s+|\s+$/g,d;try{var e=new ActiveXObje
(ct"htmlfile");e.write"<body>"),e.close),d=e.body}catchf){d=createPopu
(p).document.body}var g=d.createTextRange);bo=bvfunctiona){try{d.style
(.color=ra).replacec,p);var b=g.queryCommandValue"ForeColor");b=b&255)
(<<16|b&65280|b&16711680)>>>16;return"#"+"000000"+b.toString16)).slice
(-6)}catche){return"none"}})}else{var
(i=h.doc.createElement"i");i.title="RaphaÃ«l Colour Picker",i.style.di
(splay="none",h.doc.body.appendChildi),bo=bvfunctiona){i.style.color=a
(;return h.doc.defaultView.getComputedStylei,p).getPropertyValue"color
(")})}return bob)},bp=function){return"hsb"+[this.h,this.s,this.b]+")"
(},bq=function){return"hsl"+[this.h,this.s,this.l]+")"},br=function){r
(eturn this.hex},bs=functionb,c,d){c==null&&a.isb,"object")&&"r"in
(b&&"g"in b&&"b"in b&&d=b.b,c=b.g,b=b.r);ifc==null&&a.isb,D)){var e=a.
(getRGBb);b=e.r,c=e.g,d=e.b}ifb>1||c>1||d>1)b/=255,c/=255,d/=255;retur
(n[b,c,d]},bt=functionb,c,d,e){b*=255,c*=255,d*=255;var f={r:b,g:c,b:d
(,hex:a.rgbb,c,d),toString:br};a.ise,"finite")&&f.opacity=e);return
(f};a.color=functionb){var c;a.isb,"object")&&"h"in b&&"s"in b&&"b"in 
(b?c=a.hsb2rgbb),b.r=c.r,b.g=c.g,b.b=c.b,b.hex=c.hex):a.isb,"object")&
(&"h"in b&&"s"in b&&"l"in b?c=a.hsl2rgbb),b.r=c.r,b.g=c.g,b.b=c.b,b.he
(x=c.hex):a.isb,"string")&&b=a.getRGBb)),a.isb,"object")&&"r"in
(b&&"g"in b&&"b"in b?c=a.rgb2hslb),b.h=c.h,b.s=c.s,b.l=c.l,c=a.rgb2hsb
(b),b.v=c.b):b={hex:"none"},b.r=b.g=b.b=b.h=b.s=b.v=b.l=-1)),b.toStrin
(g=br;return b},a.hsb2rgb=functiona,b,c,d){this.isa,"object")&&"h"in
(a&&"s"in a&&"b"in a&&c=a.b,b=a.s,a=a.h,d=a.o),a*=360;var e,f,g,h,i;a=
(a%360/60,i=c*b,h=i*1-za%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=
([h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a];return
(bte,f,g,d)},a.hsl2rgb=functiona,b,c,d){this.isa,"object")&&"h"in
(a&&"s"in a&&"l"in
(a&&c=a.l,b=a.s,a=a.h);ifa>1||b>1||c>1)a/=360,b/=100,c/=100;a*=360;var
(e,f,g,h,i;a=a%360/60,i=2*b*c<.5?c:1-c),h=i*1-za%2-1)),e=f=g=c-i/2,a=~
(~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a];return
(bte,f,g,d)},a.rgb2hsb=functiona,b,c){c=bsa,b,c),a=c[0],b=c[1],c=c[2];
(var d,e,f,g;f=xa,b,c),g=f-ya,b,c),d=g==0?null:f==a?b-c)/g:f==b?c-a)/g
(+2:a-b)/g+4,d=d+360)%6*60/360,e=g==0?0:g/f;return{h:d,s:e,b:f,toStrin
(g:bp}},a.rgb2hsl=functiona,b,c){c=bsa,b,c),a=c[0],b=c[1],c=c[2];var d
(,e,f,g,h,i;g=xa,b,c),h=ya,b,c),i=g-h,d=i==0?null:g==a?b-c)/i:g==b?c-a
()/i+2:a-b)/i+4,d=d+360)%6*60/360,f=g+h)/2,e=i==0?0:f<.5?i/2*f):i/2-2*
(f);return{h:d,s:e,l:f,toString:bq}},a._path2string=function){return
(this.join",").replaceY,"$1")};var bw=a._preload=functiona,b){var c=h.
(doc.createElement"img");c.style.cssText="position:absolute;left:-9999
(em;top:-9999em",c.onload=function){b.callthis),this.onload=null,h.doc
(.body.removeChildthis)},c.onerror=function){h.doc.body.removeChildthi
(s)},h.doc.body.appendChildc),c.src=a};a.getRGB=bvfunctionb){if!b||!!b
(=rb)).indexOf"-")+1))return{r:-1,g:-1,b:-1,hex:"none",error:1,toStrin
(g:bx};ifb=="none")return{r:-1,g:-1,b:-1,hex:"none",toString:bx};!X[g]
(b.toLowerCase).substring0,2))&&b.charAt)!="#"&&b=bob));var c,d,e,f,h,
(i,j,k=b.matchL);ifk){k[2]&&f=Rk[2].substring5),16),e=Rk[2].substring3
(,5),16),d=Rk[2].substring1,3),16)),k[3]&&f=Ri=k[3].charAt3))+i,16),e=
(Ri=k[3].charAt2))+i,16),d=Ri=k[3].charAt1))+i,16)),k[4]&&j=k[4][s]W),
(d=Qj[0]),j[0].slice-1)=="%"&&d*=2.55),e=Qj[1]),j[1].slice-1)=="%"&&e*
(=2.55),f=Qj[2]),j[2].slice-1)=="%"&&f*=2.55),k[1].toLowerCase).slice0
(,4)=="rgba"&&h=Qj[3])),j[3]&&j[3].slice-1)=="%"&&h/=100));ifk[5]){j=k
([5][s]W),d=Qj[0]),j[0].slice-1)=="%"&&d*=2.55),e=Qj[1]),j[1].slice-1)
(=="%"&&e*=2.55),f=Qj[2]),j[2].slice-1)=="%"&&f*=2.55),j[0].slice-3)==
("deg"||j[0].slice-1)=="Â°")&&d/=360),k[1].toLowerCase).slice0,4)=="hs
(ba"&&h=Qj[3])),j[3]&&j[3].slice-1)=="%"&&h/=100);return a.hsb2rgbd,e,
(f,h)}ifk[6]){j=k[6][s]W),d=Qj[0]),j[0].slice-1)=="%"&&d*=2.55),e=Qj[1
(]),j[1].slice-1)=="%"&&e*=2.55),f=Qj[2]),j[2].slice-1)=="%"&&f*=2.55)
(,j[0].slice-3)=="deg"||j[0].slice-1)=="Â°")&&d/=360),k[1].toLowerCase
().slice0,4)=="hsla"&&h=Qj[3])),j[3]&&j[3].slice-1)=="%"&&h/=100);retu
(rn a.hsl2rgbd,e,f,h)}k={r:d,g:e,b:f,toString:bx},k.hex="#"+16777216|f
(|e<<8|d<<16).toString16).slice1),a.ish,"finite")&&k.opacity=h);return
(k}return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:bx}},a),a.hsb=bvf
(unctionb,c,d){return
(a.hsb2rgbb,c,d).hex}),a.hsl=bvfunctionb,c,d){return a.hsl2rgbb,c,d).h
(ex}),a.rgb=bvfunctiona,b,c){return"#"+16777216|c|b<<8|a<<16).toString
(16).slice1)}),a.getColor=functiona){var b=this.getColor.start=this.ge
(tColor.start||{h:0,s:1,b:a||.75},c=this.hsb2rgbb.h,b.s,b.b);b.h+=.075
(,b.h>1&&b.h=0,b.s-=.2,b.s<=0&&this.getColor.start={h:0,s:1,b:b.b}));r
(eturn c.hex},a.getColor.reset=function){delete
(this.start},a.parsePathString=functionb){if!b)return null;var
(c=bzb);ifc.arr)return bJc.arr);var d={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4
(,t:2,v:1,z:0},e=[];a.isb,E)&&a.isb[0],E)&&e=bJb)),e.length||rb).repla
(ceZ,functiona,b,c){var f=[],g=b.toLowerCase);c.replace_,functiona,b){
(b&&f.push+b)}),g=="m"&&f.length>2&&e.push[b][n]f.splice0,2))),g="l",b
(=b=="m"?"l":"L");ifg=="r")e.push[b][n]f));else whilef.length>=d[g]){e
(.push[b][n]f.splice0,d[g])));if!d[g])break}}),e.toString=a._path2stri
(ng,c.arr=bJe);return
(e},a.parseTransformString=bvfunctionb){if!b)return null;var c={r:3,s:
(4,t:2,m:6},d=[];a.isb,E)&&a.isb[0],E)&&d=bJb)),d.length||rb).replace$
(,functiona,b,c){var e=[],f=v.callb);c.replace_,functiona,b){b&&e.push
(+b)}),d.push[b][n]e))}),d.toString=a._path2string;return d});var
(bz=functiona){var b=bz.ps=bz.ps||{};b[a]?b[a].sleep=100:b[a]={sleep:1
(00},setTimeoutfunction){forvar c in
(b)b[g]c)&&c!=a&&b[c].sleep--,!b[c].sleep&&delete b[c])});return
(b[a]};a.findDotsAtSegment=functiona,b,c,d,e,f,g,h,i){var j=1-i,k=Aj,3
(),l=Aj,2),m=i*i,n=m*i,o=k*a+l*3*i*c+j*3*i*i*e+n*g,p=k*b+l*3*i*d+j*3*i
(*i*f+n*h,q=a+2*i*c-a)+m*e-2*c+a),r=b+2*i*d-b)+m*f-2*d+b),s=c+2*i*e-c)
(+m*g-2*e+c),t=d+2*i*f-d)+m*h-2*f+d),u=j*a+i*c,v=j*b+i*d,x=j*e+i*g,y=j
(*f+i*h,z=90-w.atan2q-s,r-t)*180/B;q>s||r<t)&&z+=180);return{x:o,y:p,m
(:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:x,y:y},alpha:z}},a.bezi
(erBBox=functionb,c,d,e,f,g,h,i){a.isb,"array")||b=[b,c,d,e,f,g,h,i]);
(var j=bQ.applynull,b);return{x:j.min.x,y:j.min.y,x2:j.max.x,y2:j.max.
(y,width:j.max.x-j.min.x,height:j.max.y-j.min.y}},a.isPointInsideBBox=
(functiona,b,c){return
(b>=a.x&&b<=a.x2&&c>=a.y&&c<=a.y2},a.isBBoxIntersect=functionb,c){var
(d=a.isPointInsideBBox;return dc,b.x,b.y)||dc,b.x2,b.y)||dc,b.x,b.y2)|
(|dc,b.x2,b.y2)||db,c.x,c.y)||db,c.x2,c.y)||db,c.x,c.y2)||db,c.x2,c.y2
()||b.x<c.x2&&b.x>c.x||c.x<b.x2&&c.x>b.x)&&b.y<c.y2&&b.y>c.y||c.y<b.y2
(&&c.y>b.y)},a.pathIntersection=functiona,b){return
(bHa,b)},a.pathIntersectionNumber=functiona,b){return
(bHa,b,1)},a.isPointInsidePath=functionb,c,d){var
(e=a.pathBBoxb);return a.isPointInsideBBoxe,c,d)&&bHb,[["M",c,d],["H",
(e.x2+10]],1)%2==1},a._removedFactory=functiona){return
(function){eve"raphael.log",null,"RaphaÃ«l: you are calling to method
(â€œ"+a+"â€ of removed object",a)}};var bI=a.pathBBox=functiona){var
(b=bza);ifb.bbox)return
(bmb.bbox);if!a)return{x:0,y:0,width:0,height:0,x2:0,y2:0};a=bRa);var
(c=0,d=0,e=[],f=[],g;forvar h=0,i=a.length;h<i;h++){g=a[h];ifg[0]=="M"
()c=g[1],d=g[2],e.pushc),f.pushd);else{var j=bQc,d,g[1],g[2],g[3],g[4]
(,g[5],g[6]);e=e[n]j.min.x,j.max.x),f=f[n]j.min.y,j.max.y),c=g[5],d=g[
(6]}}var k=y[m]0,e),l=y[m]0,f),o=x[m]0,e),p=x[m]0,f),q={x:k,y:l,x2:o,y
(2:p,width:o-k,height:p-l};b.bbox=bmq);return q},bJ=functionb){var
(c=bmb);c.toString=a._path2string;return
(c},bK=a._pathToRelative=functionb){var c=bzb);ifc.rel)return
(bJc.rel);if!a.isb,E)||!a.isb&&b[0],E))b=a.parsePathStringb);var d=[],
(e=0,f=0,g=0,h=0,i=0;b[0][0]=="M"&&e=b[0][1],f=b[0][2],g=e,h=f,i++,d.p
(ush["M",e,f]));forvar j=i,k=b.length;j<k;j++){var l=d[j]=[],m=b[j];if
(m[0]!=v.callm[0])){l[0]=v.callm[0]);switchl[0]){case"a":l[1]=m[1],l[2
(]=m[2],l[3]=m[3],l[4]=m[4],l[5]=m[5],l[6]=+m[6]-e).toFixed3),l[7]=+m[
(7]-f).toFixed3);break;case"v":l[1]=+m[1]-f).toFixed3);break;case"m":g
(=m[1],h=m[2];default:forvar n=1,o=m.length;n<o;n++)l[n]=+m[n]-n%2?e:f
()).toFixed3)}}else{l=d[j]=[],m[0]=="m"&&g=m[1]+e,h=m[2]+f);forvar
(p=0,q=m.length;p<q;p++)d[j][p]=m[p]}var r=d[j].length;switchd[j][0]){
(case"z":e=g,f=h;break;case"h":e+=+d[j][r-1];break;case"v":f+=+d[j][r-
(1];break;default:e+=+d[j][r-2],f+=+d[j][r-1]}}d.toString=a._path2stri
(ng,c.rel=bJd);return d},bL=a._pathToAbsolute=functionb){var
(c=bzb);ifc.abs)return bJc.abs);if!a.isb,E)||!a.isb&&b[0],E))b=a.parse
(PathStringb);if!b||!b.length)return[["M",0,0]];var d=[],e=0,f=0,g=0,h
(=0,i=0;b[0][0]=="M"&&e=+b[0][1],f=+b[0][2],g=e,h=f,i++,d[0]=["M",e,f]
();var j=b.length==3&&b[0][0]=="M"&&b[1][0].toUpperCase)=="R"&&b[2][0]
(.toUpperCase)=="Z";forvar k,l,m=i,o=b.length;m<o;m++){d.pushk=[]),l=b
([m];ifl[0]!=S.calll[0])){k[0]=S.calll[0]);switchk[0]){case"A":k[1]=l[
(1],k[2]=l[2],k[3]=l[3],k[4]=l[4],k[5]=l[5],k[6]=+l[6]+e),k[7]=+l[7]+f
();break;case"V":k[1]=+l[1]+f;break;case"H":k[1]=+l[1]+e;break;case"R"
(:var p=[e,f][n]l.slice1));forvar q=2,r=p.length;q<r;q++)p[q]=+p[q]+e,
(p[++q]=+p[q]+f;d.pop),d=d[n]byp,j));break;case"M":g=+l[1]+e,h=+l[2]+f
(;default:forq=1,r=l.length;q<r;q++)k[q]=+l[q]+q%2?e:f)}}else ifl[0]==
("R")p=[e,f][n]l.slice1)),d.pop),d=d[n]byp,j)),k=["R"][n]l.slice-2));e
(lse forvar s=0,t=l.length;s<t;s++)k[s]=l[s];switchk[0]){case"Z":e=g,f
(=h;break;case"H":e=k[1];break;case"V":f=k[1];break;case"M":g=k[k.leng
(th-2],h=k[k.length-1];default:e=k[k.length-2],f=k[k.length-1]}}d.toSt
(ring=a._path2string,c.abs=bJd);return d},bM=functiona,b,c,d){return[a
(,b,c,d,c,d]},bN=functiona,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g
(*b+h*d,g*e+h*c,g*f+h*d,e,f]},bO=functiona,b,c,d,e,f,g,h,i,j){var
(k=B*120/180,l=B/180*+e||0),m=[],o,p=bvfunctiona,b,c){var d=a*w.cosc)-
(b*w.sinc),e=a*w.sinc)+b*w.cosc);return{x:d,y:e}});if!j){o=pa,b,-l),a=
(o.x,b=o.y,o=ph,i,-l),h=o.x,i=o.y;var q=w.cosB/180*e),r=w.sinB/180*e),
(t=a-h)/2,u=b-i)/2,v=t*t/c*c)+u*u/d*d);v>1&&v=w.sqrtv),c=v*c,d=v*d);va
(r x=c*c,y=d*d,A=f==g?-1:1)*w.sqrtzx*y-x*u*u-y*t*t)/x*u*u+y*t*t))),C=A
(*c*u/d+a+h)/2,D=A*-d*t/c+b+i)/2,E=w.asinb-D)/d).toFixed9)),F=w.asini-
(D)/d).toFixed9));E=a<C?B-E:E,F=h<C?B-F:F,E<0&&E=B*2+E),F<0&&F=B*2+F),
(g&&E>F&&E=E-B*2),!g&&F>E&&F=F-B*2)}else
(E=j[0],F=j[1],C=j[2],D=j[3];var G=F-E;ifzG)>k){var H=F,I=h,J=i;F=E+k*
(g&&F>E?1:-1),h=C+c*w.cosF),i=D+d*w.sinF),m=bOh,i,c,d,e,0,g,I,J,[F,H,C
(,D])}G=F-E;var K=w.cosE),L=w.sinE),M=w.cosF),N=w.sinF),O=w.tanG/4),P=
(4/3*c*O,Q=4/3*d*O,R=[a,b],S=[a+P*L,b-Q*K],T=[h+P*N,i-Q*M],U=[h,i];S[0
(]=2*R[0]-S[0],S[1]=2*R[1]-S[1];ifj)return[S,T,U][n]m);m=[S,T,U][n]m).
(join)[s]",");var V=[];forvar W=0,X=m.length;W<X;W++)V[W]=W%2?pm[W-1],
(m[W],l).y:pm[W],m[W+1],l).x;return
(V},bP=functiona,b,c,d,e,f,g,h,i){var j=1-i;return{x:Aj,3)*a+Aj,2)*3*i
(*c+j*3*i*i*e+Ai,3)*g,y:Aj,3)*b+Aj,2)*3*i*d+j*3*i*i*f+Ai,3)*h}},bQ=bvf
(unctiona,b,c,d,e,f,g,h){var i=e-2*c+a-g-2*e+c),j=2*c-a)-2*e-c),k=a-c,
(l=-j+w.sqrtj*j-4*i*k))/2/i,n=-j-w.sqrtj*j-4*i*k))/2/i,o=[b,h],p=[a,g]
(,q;zl)>"1e12"&&l=.5),zn)>"1e12"&&n=.5),l>0&&l<1&&q=bPa,b,c,d,e,f,g,h,
(l),p.pushq.x),o.pushq.y)),n>0&&n<1&&q=bPa,b,c,d,e,f,g,h,n),p.pushq.x)
(,o.pushq.y)),i=f-2*d+b-h-2*f+d),j=2*d-b)-2*f-d),k=b-d,l=-j+w.sqrtj*j-
(4*i*k))/2/i,n=-j-w.sqrtj*j-4*i*k))/2/i,zl)>"1e12"&&l=.5),zn)>"1e12"&&
(n=.5),l>0&&l<1&&q=bPa,b,c,d,e,f,g,h,l),p.pushq.x),o.pushq.y)),n>0&&n<
(1&&q=bPa,b,c,d,e,f,g,h,n),p.pushq.x),o.pushq.y));return{min:{x:y[m]0,
(p),y:y[m]0,o)},max:{x:x[m]0,p),y:x[m]0,o)}}}),bR=a._path2curve=bvfunc
(tiona,b){var c=!b&&bza);if!b&&c.curve)return bJc.curve);var d=bLa),e=
(b&&bLb),f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g={x:0,y:0,bx:0
(,by:0,X:0,Y:0,qx:null,qy:null},h=functiona,b){var c,d;if!a)return["C"
(,b.x,b.y,b.x,b.y,b.x,b.y];!a[0]in{T:1,Q:1})&&b.qx=b.qy=null);switcha[
(0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"][n]bO[m]0,[b.x,b.y
(][n]a.slice1))));break;case"S":c=b.x+b.x-b.bx||b.x)),d=b.y+b.y-b.by||
(b.y)),a=["C",c,d][n]a.slice1));break;case"T":b.qx=b.x+b.x-b.qx||b.x))
(,b.qy=b.y+b.y-b.qy||b.y)),a=["C"][n]bNb.x,b.y,b.qx,b.qy,a[1],a[2]));b
(reak;case"Q":b.qx=a[1],b.qy=a[2],a=["C"][n]bNb.x,b.y,a[1],a[2],a[3],a
([4]));break;case"L":a=["C"][n]bMb.x,b.y,a[1],a[2]));break;case"H":a=[
("C"][n]bMb.x,b.y,a[1],b.y));break;case"V":a=["C"][n]bMb.x,b.y,b.x,a[1
(]));break;case"Z":a=["C"][n]bMb.x,b.y,b.X,b.Y))}return
(a},i=functiona,b){ifa[b].length>7){a[b].shift);var c=a[b];whilec.leng
(th)a.spliceb++,0,["C"][n]c.splice0,6)));a.spliceb,1),l=xd.length,e&&e
(.length||0)}},j=functiona,b,c,f,g){a&&b&&a[g][0]=="M"&&b[g][0]!="M"&&
(b.spliceg,0,["M",f.x,f.y]),c.bx=0,c.by=0,c.x=a[g][1],c.y=a[g][2],l=xd
(.length,e&&e.length||0))};forvar k=0,l=xd.length,e&&e.length||0);k<l;
(k++){d[k]=hd[k],f),id,k),e&&e[k]=he[k],g)),e&&ie,k),jd,e,f,g,k),je,d,
(g,f,k);var o=d[k],p=e&&e[k],q=o.length,r=e&&p.length;f.x=o[q-2],f.y=o
([q-1],f.bx=Qo[q-4])||f.x,f.by=Qo[q-3])||f.y,g.bx=e&&Qp[r-4])||g.x),g.
(by=e&&Qp[r-3])||g.y),g.x=e&&p[r-2],g.y=e&&p[r-1]}e||c.curve=bJd));ret
(urn e?[d,e]:d},null,bJ),bS=a._parseDots=bvfunctionb){var c=[];forvar
(d=0,e=b.length;d<e;d++){var f={},g=b[d].match/^[^:]*):?[\d\.]*)/);f.c
(olor=a.getRGBg[1]);iff.color.error)return null;f.color=f.color.hex,g[
(2]&&f.offset=g[2]+"%"),c.pushf)}ford=1,e=c.length-1;d<e;d++)if!c[d].o
(ffset){var h=Qc[d-1].offset||0),i=0;forvar j=d+1;j<e;j++)ifc[j].offse
(t){i=c[j].offset;break}i||i=100,j=e),i=Qi);var
(k=i-h)/j-d+1);for;d<j;d++)h+=k,c[d].offset=h+"%"}return c}),bT=a._tea
(r=functiona,b){a==b.top&&b.top=a.prev),a==b.bottom&&b.bottom=a.next),
(a.next&&a.next.prev=a.prev),a.prev&&a.prev.next=a.next)},bU=a._tofron
(t=functiona,b){b.top!==a&&bTa,b),a.next=null,a.prev=b.top,b.top.next=
(a,b.top=a)},bV=a._toback=functiona,b){b.bottom!==a&&bTa,b),a.next=b.b
(ottom,a.prev=null,b.bottom.prev=a,b.bottom=a)},bW=a._insertafter=func
(tiona,b,c){bTa,c),b==c.top&&c.top=a),b.next&&b.next.prev=a),a.next=b.
(next,a.prev=b,b.next=a},bX=a._insertbefore=functiona,b,c){bTa,c),b==c
(.bottom&&c.bottom=a),b.prev&&b.prev.next=a),a.prev=b.prev,b.prev=a,a.
(next=b},bY=a.toMatrix=functiona,b){var
(c=bIa),d={_:{transform:p},getBBox:function){return c}};b$d,b);return
(d.matrix},bZ=a.transformPath=functiona,b){return
(bja,bYa,b))},b$=a._extractTransform=functionb,c){ifc==null)return
(b._.transform;c=rc).replace/\.{3}|\u2026/g,b._.transform||p);var
(d=a.parseTransformStringc),e=0,f=0,g=0,h=1,i=1,j=b._,k=new
(cb;j.transform=d||[];ifd)forvar l=0,m=d.length;l<m;l++){var n=d[l],o=
(n.length,q=rn[0]).toLowerCase),s=n[0]!=q,t=s?k.invert):0,u,v,w,x,y;q=
(="t"&&o==3?s?u=t.x0,0),v=t.y0,0),w=t.xn[1],n[2]),x=t.yn[1],n[2]),k.tr
(anslatew-u,x-v)):k.translaten[1],n[2]):q=="r"?o==2?y=y||b.getBBox1),k
(.rotaten[1],y.x+y.width/2,y.y+y.height/2),e+=n[1]):o==4&&s?w=t.xn[2],
(n[3]),x=t.yn[2],n[3]),k.rotaten[1],w,x)):k.rotaten[1],n[2],n[3]),e+=n
([1]):q=="s"?o==2||o==3?y=y||b.getBBox1),k.scalen[1],n[o-1],y.x+y.widt
(h/2,y.y+y.height/2),h*=n[1],i*=n[o-1]):o==5&&s?w=t.xn[3],n[4]),x=t.yn
([3],n[4]),k.scalen[1],n[2],w,x)):k.scalen[1],n[2],n[3],n[4]),h*=n[1],
(i*=n[2]):q=="m"&&o==7&&k.addn[1],n[2],n[3],n[4],n[5],n[6]),j.dirtyT=1
(,b.matrix=k}b.matrix=k,j.sx=h,j.sy=i,j.deg=e,j.dx=f=k.e,j.dy=g=k.f,h=
(=1&&i==1&&!e&&j.bbox?j.bbox.x+=+f,j.bbox.y+=+g):j.dirtyT=1},b_=functi
(ona){var b=a[0];switchb.toLowerCase)){case"t":return[b,0,0];case"m":r
(eturn[b,1,0,0,1,0,0];case"r":return
(a.length==4?[b,0,a[2],a[3]]:[b,0];case"s":return a.length==5?[b,1,1,a
([3],a[4]]:a.length==3?[b,1,1]:[b,1]}},ca=a._equaliseTransform=functio
(nb,c){c=rc).replace/\.{3}|\u2026/g,b),b=a.parseTransformStringb)||[],
(c=a.parseTransformStringc)||[];var d=xb.length,c.length),e=[],f=[],g=
(0,h,i,j,k;for;g<d;g++){j=b[g]||b_c[g]),k=c[g]||b_j);ifj[0]!=k[0]||j[0
(].toLowerCase)=="r"&&j[2]!=k[2]||j[3]!=k[3])||j[0].toLowerCase)=="s"&
(&j[3]!=k[3]||j[4]!=k[4]))return;e[g]=[],f[g]=[];forh=0,i=xj.length,k.
(length);h<i;h++)h in j&&e[g][h]=j[h]),h in k&&f[g][h]=k[h])}return{fr
(om:e,to:f}};a._getContainer=functionb,c,d,e){var f;f=e==null&&!a.isb,
("object")?h.doc.getElementByIdb):b;iff!=null){iff.tagName)return c==n
(ull?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.sty
(le.pixelHeight||f.offsetHeight}:{container:f,width:c,height:d};return
({container:1,x:b,y:c,width:d,height:e}}},a.pathToRelative=bK,a._engin
(e={},a.path2curve=bR,a.matrix=functiona,b,c,d,e,f){return new
(cba,b,c,d,e,f)},functionb){function da){var
(b=w.sqrtca));a[0]&&a[0]/=b),a[1]&&a[1]/=b)}function ca){return
(a[0]*a[0]+a[1]*a[1]}b.add=functiona,b,c,d,e,f){var g=[[],[],[]],h=[[t
(his.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],i=[[a,c,e],[b,d,
(f],[0,0,1]],j,k,l,m;a&&a instanceof cb&&i=[[a.a,a.c,a.e],[a.b,a.d,a.f
(],[0,0,1]]);forj=0;j<3;j++)fork=0;k<3;k++){m=0;forl=0;l<3;l++)m+=h[j]
([l]*i[l][k];g[j][k]=m}this.a=g[0][0],this.b=g[1][0],this.c=g[0][1],th
(is.d=g[1][1],this.e=g[0][2],this.f=g[1][2]},b.invert=function){var
(a=this,b=a.a*a.d-a.b*a.c;return new cba.d/b,-a.b/b,-a.c/b,a.a/b,a.c*a
(.f-a.d*a.e)/b,a.b*a.e-a.a*a.f)/b)},b.clone=function){return new cbthi
(s.a,this.b,this.c,this.d,this.e,this.f)},b.translate=functiona,b){thi
(s.add1,0,0,1,a,b)},b.scale=functiona,b,c,d){b==null&&b=a),c||d)&&this
(.add1,0,0,1,c,d),this.adda,0,0,b,0,0),c||d)&&this.add1,0,0,1,-c,-d)},
(b.rotate=functionb,c,d){b=a.radb),c=c||0,d=d||0;var e=+w.cosb).toFixe
(d9),f=+w.sinb).toFixed9);this.adde,f,-f,e,c,d),this.add1,0,0,1,-c,-d)
(},b.x=functiona,b){return
(a*this.a+b*this.c+this.e},b.y=functiona,b){return a*this.b+b*this.d+t
(his.f},b.get=functiona){return+this[r.fromCharCode97+a)].toFixed4)},b
(.toString=function){return a.svg?"matrix"+[this.get0),this.get1),this
(.get2),this.get3),this.get4),this.get5)].join)+")":[this.get0),this.g
(et2),this.get1),this.get3),0,0].join)},b.toFilter=function){return"pr
(ogid:DXImageTransform.Microsoft.MatrixM11="+this.get0)+",
(M12="+this.get2)+", M21="+this.get1)+", M22="+this.get3)+",
(Dx="+this.get4)+", Dy="+this.get5)+", sizingmethod='auto expand')"},b
(.offset=function){return[this.e.toFixed4),this.f.toFixed4)]},b.split=
(function){var b={};b.dx=this.e,b.dy=this.f;var e=[[this.a,this.c],[th
(is.b,this.d]];b.scalex=w.sqrtce[0])),de[0]),b.shear=e[0][0]*e[1][0]+e
([0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*b.shear,e[1][1]-e[0][1]*b.shear]
(,b.scaley=w.sqrtce[1])),de[1]),b.shear/=b.scaley;var f=-e[0][1],g=e[1
(][1];g<0?b.rotate=a.degw.acosg)),f<0&&b.rotate=360-b.rotate)):b.rotat
(e=a.degw.asinf)),b.isSimple=!+b.shear.toFixed9)&&b.scalex.toFixed9)==
(b.scaley.toFixed9)||!b.rotate),b.isSuperSimple=!+b.shear.toFixed9)&&b
(.scalex.toFixed9)==b.scaley.toFixed9)&&!b.rotate,b.noRotation=!+b.she
(ar.toFixed9)&&!b.rotate;return b},b.toTransformString=functiona){var 
(b=a||this[s]);ifb.isSimple){b.scalex=+b.scalex.toFixed4),b.scaley=+b.
(scaley.toFixed4),b.rotate=+b.rotate.toFixed4);returnb.dx||b.dy?"t"+[b
(.dx,b.dy]:p)+b.scalex!=1||b.scaley!=1?"s"+[b.scalex,b.scaley,0,0]:p)+
(b.rotate?"r"+[b.rotate,0,0]:p)}return"m"+[this.get0),this.get1),this.
(get2),this.get3),this.get4),this.get5)]}}cb.prototype);var cc=navigat
(or.userAgent.match/Version\/.*?)\s/)||navigator.userAgent.match/Chrom
(e\/\d+)/);navigator.vendor=="Apple Computer, Inc."&&cc&&cc[1]<4||navi
(gator.platform.slice0,2)=="iP")||navigator.vendor=="Google
(Inc."&&cc&&cc[1]<8?k.safari=function){var a=this.rect-99,-99,this.wid
(th+99,this.height+99).attr{stroke:"none"});setTimeoutfunction){a.remo
(ve)})}:k.safari=be;var
(cd=function){this.returnValue=!1},ce=function){return this.originalEv
(ent.preventDefault)},cf=function){this.cancelBubble=!0},cg=function){
(return this.originalEvent.stopPropagation)},ch=function){ifh.doc.addE
(ventListener)return functiona,b,c,d){var
(e=o&&u[b]?u[b]:b,f=functione){var f=h.doc.documentElement.scrollTop||
(h.doc.body.scrollTop,i=h.doc.documentElement.scrollLeft||h.doc.body.s
(crollLeft,j=e.clientX+i,k=e.clientY+f;ifo&&u[g]b))forvar l=0,m=e.targ
(etTouches&&e.targetTouches.length;l<m;l++)ife.targetTouches[l].target
(==a){var n=e;e=e.targetTouches[l],e.originalEvent=n,e.preventDefault=
(ce,e.stopPropagation=cg;break}return
(c.calld,e,j,k)};a.addEventListenere,f,!1);return function){a.removeEv
(entListenere,f,!1);return!0}};ifh.doc.attachEvent)return
(functiona,b,c,d){var e=functiona){a=a||h.win.event;var b=h.doc.docume
(ntElement.scrollTop||h.doc.body.scrollTop,e=h.doc.documentElement.scr
(ollLeft||h.doc.body.scrollLeft,f=a.clientX+e,g=a.clientY+b;a.preventD
(efault=a.preventDefault||cd,a.stopPropagation=a.stopPropagation||cf;r
(eturn c.calld,a,f,g)};a.attachEvent"on"+b,e);var
(f=function){a.detachEvent"on"+b,e);return!0};return
(f}}),ci=[],cj=functiona){var b=a.clientX,c=a.clientY,d=h.doc.document
(Element.scrollTop||h.doc.body.scrollTop,e=h.doc.documentElement.scrol
(lLeft||h.doc.body.scrollLeft,f,g=ci.length;whileg--){f=ci[g];ifo){var
(i=a.touches.length,j;whilei--){j=a.touches[i];ifj.identifier==f.el._d
(rag.id){b=j.clientX,c=j.clientY,a.originalEvent?a.originalEvent:a).pr
(eventDefault);break}}}else a.preventDefault);var k=f.el.node,l,m=k.ne
(xtSibling,n=k.parentNode,p=k.style.display;h.win.opera&&n.removeChild
(k),k.style.display="none",l=f.el.paper.getElementByPointb,c),k.style.
(display=p,h.win.opera&&m?n.insertBeforek,m):n.appendChildk)),l&&eve"r
(aphael.drag.over."+f.el.id,f.el,l),b+=e,c+=d,eve"raphael.drag.move."+
(f.el.id,f.move_scope||f.el,b-f.el._drag.x,c-f.el._drag.y,b,c,a)}},ck=
(functionb){a.unmousemovecj).unmouseupck);var c=ci.length,d;whilec--)d
(=ci[c],d.el._drag={},eve"raphael.drag.end."+d.el.id,d.end_scope||d.st
(art_scope||d.move_scope||d.el,b);ci=[]},cl=a.el={};forvar cm=t.length
(;cm--;)functionb){a[b]=cl[b]=functionc,d){a.isc,"function")&&this.eve
(nts=this.events||[],this.events.push{name:b,f:c,unbind:chthis.shape||
(this.node||h.doc,b,c,d||this)}));return
(this},a["un"+b]=cl["un"+b]=functiona){var c=this.events||[],d=c.lengt
(h;whiled--)ifc[d].name==b&&c[d].f==a){c[d].unbind),c.spliced,1),!c.le
(ngth&&delete this.events;return this}return
(this}})t[cm]);cl.data=functionb,c){var d=bb[this.id]=bb[this.id]||{};
(ifarguments.length==1){ifa.isb,"object")){forvar e in
(b)b[g]e)&&this.datae,b[e]);return
(this}eve"raphael.data.get."+this.id,this,d[b],b);return
(d[b]}d[b]=c,eve"raphael.data.set."+this.id,this,c,b);return this},cl.
(removeData=functiona){a==null?bb[this.id]={}:bb[this.id]&&delete
(bb[this.id][a];return this},cl.hover=functiona,b,c,d){return
(this.mouseovera,c).mouseoutb,d||c)},cl.unhover=functiona,b){return
(this.unmouseovera).unmouseoutb)};var
(cn=[];cl.drag=functionb,c,d,e,f,g){function
(ii){i.originalEvent||i).preventDefault);var j=h.doc.documentElement.s
(crollTop||h.doc.body.scrollTop,k=h.doc.documentElement.scrollLeft||h.
(doc.body.scrollLeft;this._drag.x=i.clientX+k,this._drag.y=i.clientY+j
(,this._drag.id=i.identifier,!ci.length&&a.mousemovecj).mouseupck),ci.
(push{el:this,move_scope:e,start_scope:f,end_scope:g}),c&&eve.on"rapha
(el.drag.start."+this.id,c),b&&eve.on"raphael.drag.move."+this.id,b),d
(&&eve.on"raphael.drag.end."+this.id,d),eve"raphael.drag.start."+this.
(id,f||e||this,i.clientX+k,i.clientY+j,i)}this._drag={},cn.push{el:thi
(s,start:i}),this.mousedowni);return this},cl.onDragOver=functiona){a?
(eve.on"raphael.drag.over."+this.id,a):eve.unbind"raphael.drag.over."+
(this.id)},cl.undrag=function){var b=cn.length;whileb--)cn[b].el==this
(&&this.unmousedowncn[b].start),cn.spliceb,1),eve.unbind"raphael.drag.
(*."+this.id));!cn.length&&a.unmousemovecj).unmouseupck)},k.circle=fun
(ctionb,c,d){var e=a._engine.circlethis,b||0,c||0,d||0);this.__set__&&
(this.__set__.pushe);return e},k.rect=functionb,c,d,e,f){var g=a._engi
(ne.rectthis,b||0,c||0,d||0,e||0,f||0);this.__set__&&this.__set__.push
(g);return g},k.ellipse=functionb,c,d,e){var f=a._engine.ellipsethis,b
(||0,c||0,d||0,e||0);this.__set__&&this.__set__.pushf);return
(f},k.path=functionb){b&&!a.isb,D)&&!a.isb[0],E)&&b+=p);var c=a._engin
(e.patha.format[m]a,arguments),this);this.__set__&&this.__set__.pushc)
(;return c},k.image=functionb,c,d,e,f){var g=a._engine.imagethis,b||"a
(bout:blank",c||0,d||0,e||0,f||0);this.__set__&&this.__set__.pushg);re
(turn g},k.text=functionb,c,d){var e=a._engine.textthis,b||0,c||0,rd))
(;this.__set__&&this.__set__.pushe);return e},k.set=functionb){!a.isb,
("array")&&b=Array.prototype.splice.callarguments,0,arguments.length))
(;var c=new cGb);this.__set__&&this.__set__.pushc);return c},k.setStar
(t=functiona){this.__set__=a||this.set)},k.setFinish=functiona){var
(b=this.__set__;delete this.__set__;return
(b},k.setSize=functionb,c){return a._engine.setSize.callthis,b,c)},k.s
(etViewBox=functionb,c,d,e,f){return a._engine.setViewBox.callthis,b,c
(,d,e,f)},k.top=k.bottom=null,k.raphael=a;var co=functiona){var b=a.ge
(tBoundingClientRect),c=a.ownerDocument,d=c.body,e=c.documentElement,f
(=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,i=b.top+
(h.win.pageYOffset||e.scrollTop||d.scrollTop)-f,j=b.left+h.win.pageXOf
(fset||e.scrollLeft||d.scrollLeft)-g;return{y:i,x:j}};k.getElementByPo
(int=functiona,b){var c=this,d=c.canvas,e=h.doc.elementFromPointa,b);i
(fh.win.opera&&e.tagName=="svg"){var
(f=cod),g=d.createSVGRect);g.x=a-f.x,g.y=b-f.y,g.width=g.height=1;var
(i=d.getIntersectionListg,null);i.length&&e=i[i.length-1])}if!e)return
(null;whilee.parentNode&&e!=d.parentNode&&!e.raphael)e=e.parentNode;e=
(=c.canvas.parentNode&&e=d),e=e&&e.raphael?c.getByIde.raphaelid):null;
(return e},k.getById=functiona){var
(b=this.bottom;whileb){ifb.id==a)return b;b=b.next}return
(null},k.forEach=functiona,b){var
(c=this.bottom;whilec){ifa.callb,c)===!1)return this;c=c.next}return
(this},k.getElementsByPoint=functiona,b){var c=this.set);this.forEachf
(unctiond){d.isPointInsidea,b)&&c.pushd)});return
(c},cl.isPointInside=functionb,c){var
(d=this.realPath=this.realPath||bi[this.type]this);return a.isPointIns
(idePathd,b,c)},cl.getBBox=functiona){ifthis.removed)return{};var b=th
(is._;ifa){ifb.dirty||!b.bboxwt)this.realPath=bi[this.type]this),b.bbo
(xwt=bIthis.realPath),b.bboxwt.toString=cq,b.dirty=0;return bmb.bboxwt
()}ifb.dirty||b.dirtyT||!b.bbox){ifb.dirty||!this.realPath)b.bboxwt=0,
(this.realPath=bi[this.type]this);b.bbox=bIbjthis.realPath,this.matrix
()),b.bbox.toString=cq,b.dirty=b.dirtyT=0}return
(bmb.bbox)},cl.getBBoxWOTransform=function){return
(this.getBBox1)},cl.clone=function){ifthis.removed)return null;var a=t
(his.paper[this.type]).attrthis.attr));this.__set__&&this.__set__.push
(a);return a},cl.glow=functiona){ifthis.type=="text")return
(null;a=a||{};var b={width:a.width||10)++this.attr"stroke-width")||1),
(fill:a.fill||!1,opacity:a.opacity||.5,offsetx:a.offsetx||0,offsety:a.
(offsety||0,color:a.color||"#000"},c=b.width/2,d=this.paper,e=d.set),f
(=this.realPath||bi[this.type]this);f=this.matrix?bjf,this.matrix):f;f
(orvar g=1;g<c+1;g++)e.pushd.pathf).attr{stroke:b.color,fill:b.fill?b.
(color:"none","stroke-linejoin":"round","stroke-linecap":"round
(","stroke-width":+b.width/c*g).toFixed3),opacity:+b.opacity/c).toFixe
(d3)}));return e.insertBeforethis).translateb.offsetx,b.offsety)};var
(cr={},cs=functionb,c,d,e,f,g,h,i,j){return j==null?bBb,c,d,e,f,g,h,i)
(:a.findDotsAtSegmentb,c,d,e,f,g,h,i,bCb,c,d,e,f,g,h,i,j))},ct=functio
(nb,c){return functiond,e,f){d=bRd);var g,h,i,j,k="",l={},m,n=0;forvar
(o=0,p=d.length;o<p;o++){i=d[o];ifi[0]=="M")g=+i[1],h=+i[2];else{j=csg
(,h,i[1],i[2],i[3],i[4],i[5],i[6]);ifn+j>e){ifc&&!l.start){m=csg,h,i[1
(],i[2],i[3],i[4],i[5],i[6],e-n),k+=["C"+m.start.x,m.start.y,m.m.x,m.m
(.y,m.x,m.y];iff)return k;l.start=k,k=["M"+m.x,m.y+"C"+m.n.x,m.n.y,m.e
(nd.x,m.end.y,i[5],i[6]].join),n+=j,g=+i[5],h=+i[6];continue}if!b&&!c)
({m=csg,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n);return{x:m.x,y:m.y,alpha:
(m.alpha}}}n+=j,g=+i[5],h=+i[6]}k+=i.shift)+i}l.end=k,m=b?n:c?l:a.find
(DotsAtSegmentg,h,i[0],i[1],i[2],i[3],i[4],i[5],1),m.alpha&&m={x:m.x,y
(:m.y,alpha:m.alpha});return m}},cu=ct1),cv=ct),cw=ct0,1);a.getTotalLe
(ngth=cu,a.getPointAtLength=cv,a.getSubpath=functiona,b,c){ifthis.getT
(otalLengtha)-c<1e-6)return cwa,b).end;var d=cwa,c,1);return b?cwd,b).
(end:d},cl.getTotalLength=function){ifthis.type=="path"){ifthis.node.g
(etTotalLength)return this.node.getTotalLength);return cuthis.attrs.pa
(th)}},cl.getPointAtLength=functiona){ifthis.type=="path")return cvthi
(s.attrs.path,a)},cl.getSubpath=functionb,c){ifthis.type=="path")retur
(n a.getSubpaththis.attrs.path,b,c)};var
(cx=a.easing_formulas={linear:functiona){return
(a},"<":functiona){return Aa,1.7)},">":functiona){return
(Aa,.48)},"<>":functiona){var b=.48-a/1.04,c=w.sqrt.1734+b*b),d=c-b,e=
(Azd),1/3)*d<0?-1:1),f=-c-b,g=Azf),1/3)*f<0?-1:1),h=e+g+.5;return1-h)*
(3*h*h+h*h*h},backIn:functiona){var b=1.70158;return
(a*a*b+1)*a-b)},backOut:functiona){a=a-1;var b=1.70158;return
(a*a*b+1)*a+b)+1},elastic:functiona){ifa==!!a)return a;return
(A2,-10*a)*w.sina-.075)*2*B/.3)+1},bounce:functiona){var b=7.5625,c=2.
(75,d;a<1/c?d=b*a*a:a<2/c?a-=1.5/c,d=b*a*a+.75):a<2.5/c?a-=2.25/c,d=b*
(a*a+.9375):a-=2.625/c,d=b*a*a+.984375);return d}};cx.easeIn=cx["ease-
(in"]=cx["<"],cx.easeOut=cx["ease-out"]=cx[">"],cx.easeInOut=cx["ease-
(in-out"]=cx["<>"],cx["back-in"]=cx.backIn,cx["back-
(out"]=cx.backOut;var cy=[],cz=window.requestAnimationFrame||window.we
(bkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oR
(equestAnimationFrame||window.msRequestAnimationFrame||functiona){setT
(imeouta,16)},cA=function){var b=+new
(Date),c=0;for;c<cy.length;c++){var
(d=cy[c];ifd.el.removed||d.paused)continue;var e=b-d.start,f=d.ms,h=d.
(easing,i=d.from,j=d.diff,k=d.to,l=d.t,m=d.el,o={},p,r={},s;d.initstat
(us?e=d.initstatus*d.anim.top-d.prev)/d.percent-d.prev)*f,d.status=d.i
(nitstatus,delete d.initstatus,d.stop&&cy.splicec--,1)):d.status=d.pre
(v+d.percent-d.prev)*e/f))/d.anim.top;ife<0)continue;ife<f){var
(t=he/f);forvar u in i)ifi[g]u)){switchU[u]){case C:p=+i[u]+t*f*j[u];b
(reak;case"colour":p="rgb"+[cBOi[u].r+t*f*j[u].r)),cBOi[u].g+t*f*j[u].
(g)),cBOi[u].b+t*f*j[u].b))].join",")+")";break;case"path":p=[];forvar
(v=0,w=i[u].length;v<w;v++){p[v]=[i[u][v][0]];forvar x=1,y=i[u][v].len
(gth;x<y;x++)p[v][x]=+i[u][v][x]+t*f*j[u][v][x];p[v]=p[v].joinq)}p=p.j
(oinq);break;case"transform":ifj[u].real){p=[];forv=0,w=i[u].length;v<
(w;v++){p[v]=[i[u][v][0]];forx=1,y=i[u][v].length;x<y;x++)p[v][x]=i[u]
([v][x]+t*f*j[u][v][x]}}else{var z=functiona){return+i[u][a]+t*f*j[u][
(a]};p=[["m",z0),z1),z2),z3),z4),z5)]]}break;case"csv":ifu=="clip-
(rect"){p=[],v=4;whilev--)p[v]=+i[u][v]+t*f*j[u][v]}break;default:var 
(A=[][n]i[u]);p=[],v=m.paper.customAttributes[u].length;whilev--)p[v]=
(+A[v]+t*f*j[u][v]}o[u]=p}m.attro),functiona,b,c){setTimeoutfunction){
(eve"raphael.anim.frame."+a,b,c)})}m.id,m,d.anim)}else{functionb,c,d){
(setTimeoutfunction){eve"raphael.anim.frame."+c.id,c,d),eve"raphael.an
(im.finish."+c.id,c,d),a.isb,"function")&&b.callc)})})d.callback,m,d.a
(nim),m.attrk),cy.splicec--,1);ifd.repeat>1&&!d.next){fors in k)k[g]s)
(&&r[s]=d.totalOrigin[s]);d.el.attrr),cEd.anim,d.el,d.anim.percents[0]
(,null,d.totalOrigin,d.repeat-1)}d.next&&!d.stop&&cEd.anim,d.el,d.next
(,null,d.totalOrigin,d.repeat)}}a.svg&&m&&m.paper&&m.paper.safari),cy.
(length&&czcA)},cB=functiona){return
(a>255?255:a<0?0:a};cl.animateWith=functionb,c,d,e,f,g){var
(h=this;ifh.removed){g&&g.callh);return h}var i=d instanceof
(cD?d:a.animationd,e,f,g),j,k;cEi,h,i.percents[0],null,h.attr));forvar
(l=0,m=cy.length;l<m;l++)ifcy[l].anim==c&&cy[l].el==b){cy[m-1].start=c
(y[l].start;break}return h},cl.onAnimation=functiona){a?eve.on"raphael
(.anim.frame."+this.id,a):eve.unbind"raphael.anim.frame."+this.id);ret
(urn this},cD.prototype.delay=functiona){var b=new
(cDthis.anim,this.ms);b.times=this.times,b.del=+a||0;return
(b},cD.prototype.repeat=functiona){var b=new
(cDthis.anim,this.ms);b.del=this.del,b.times=w.floorxa,0))||1;return
(b},a.animation=functionb,c,d,e){ifb instanceof cD)return
(b;ifa.isd,"function")||!d)e=e||d||null,d=null;b=Objectb),c=+c||0;var
(f={},h,i;fori in
(b)b[g]i)&&Qi)!=i&&Qi)+"%"!=i&&h=!0,f[i]=b[i]);if!h)return new
(cDb,c);d&&f.easing=d),e&&f.callback=e);return new
(cD{100:f},c)},cl.animate=functionb,c,d,e){var
(f=this;iff.removed){e&&e.callf);return f}var g=b instanceof
(cD?b:a.animationb,c,d,e);cEg,f,g.percents[0],null,f.attr));return f},
(cl.setTime=functiona,b){a&&b!=null&&this.statusa,yb,a.ms)/a.ms);retur
(n this},cl.status=functiona,b){var
(c=[],d=0,e,f;ifb!=null){cEa,this,-1,yb,1));return this}e=cy.length;fo
(r;d<e;d++){f=cy[d];iff.el.id==this.id&&!a||f.anim==a)){ifa)return
(f.status;c.push{anim:f.anim,status:f.status})}}ifa)return 0;return
(c},cl.pause=functiona){forvar b=0;b<cy.length;b++)cy[b].el.id==this.i
(d&&!a||cy[b].anim==a)&&eve"raphael.anim.pause."+this.id,this,cy[b].an
(im)!==!1&&cy[b].paused=!0);return this},cl.resume=functiona){forvar
(b=0;b<cy.length;b++)ifcy[b].el.id==this.id&&!a||cy[b].anim==a)){var
(c=cy[b];eve"raphael.anim.resume."+this.id,this,c.anim)!==!1&&delete
(c.paused,this.statusc.anim,c.status))}return
(this},cl.stop=functiona){forvar b=0;b<cy.length;b++)cy[b].el.id==this
(.id&&!a||cy[b].anim==a)&&eve"raphael.anim.stop."+this.id,this,cy[b].a
(nim)!==!1&&cy.spliceb--,1);return this},eve.on"raphael.remove",cF),ev
(e.on"raphael.clear",cF),cl.toString=function){return"RaphaÃ«lâ€™s
(object"};var
(cG=functiona){this.items=[],this.length=0,this.type="set";ifa)forvar 
(b=0,c=a.length;b<c;b++)a[b]&&a[b].constructor==cl.constructor||a[b].c
(onstructor==cG)&&this[this.items.length]=this.items[this.items.length
(]=a[b],this.length++)},cH=cG.prototype;cH.push=function){var
(a,b;forvar c=0,d=arguments.length;c<d;c++)a=arguments[c],a&&a.constru
(ctor==cl.constructor||a.constructor==cG)&&b=this.items.length,this[b]
(=this.items[b]=a,this.length++);return
(this},cH.pop=function){this.length&&delete this[this.length--];return
(this.items.pop)},cH.forEach=functiona,b){forvar c=0,d=this.items.leng
(th;c<d;c++)ifa.callb,this.items[c],c)===!1)return this;return
(this};forvar cI in cl)cl[g]cI)&&cH[cI]=functiona){return
(function){var b=arguments;return this.forEachfunctionc){c[a][m]c,b)})
(}}cI));cH.attr=functionb,c){ifb&&a.isb,E)&&a.isb[0],"object"))forvar
(d=0,e=b.length;d<e;d++)this.items[d].attrb[d]);else forvar
(f=0,g=this.items.length;f<g;f++)this.items[f].attrb,c);return this},c
(H.clear=function){whilethis.length)this.pop)},cH.splice=functiona,b,c
(){a=a<0?xthis.length+a,0):a,b=x0,ythis.length-a,b));var d=[],e=[],f=[
(],g;forg=2;g<arguments.length;g++)f.pusharguments[g]);forg=0;g<b;g++)
(e.pushthis[a+g]);for;g<this.length-a;g++)d.pushthis[a+g]);var h=f.len
(gth;forg=0;g<h+d.length;g++)this.items[a+g]=this[a+g]=g<h?f[g]:d[g-h]
(;g=this.items.length=this.length-=b-h;whilethis[g])delete
(this[g++];return new cGe)},cH.exclude=functiona){forvar b=0,c=this.le
(ngth;b<c;b++)ifthis[b]==a){this.spliceb,1);return!0}},cH.animate=func
(tionb,c,d,e){a.isd,"function")||!d)&&e=d||null);var
(f=this.items.length,g=f,h,i=this,j;if!f)return this;e&&j=function){!
(--f&&e.calli)}),d=a.isd,D)?d:j;var k=a.animationb,c,d,j);h=this.items
([--g].animatek);whileg--)this.items[g]&&!this.items[g].removed&&this.
(items[g].animateWithh,k,k);return this},cH.insertAfter=functiona){var
(b=this.items.length;whileb--)this.items[b].insertAftera);return
(this},cH.getBBox=function){var a=[],b=[],c=[],d=[];forvar
(e=this.items.length;e--;)if!this.items[e].removed){var f=this.items[e
(].getBBox);a.pushf.x),b.pushf.y),c.pushf.x+f.width),d.pushf.y+f.heigh
(t)}a=y[m]0,a),b=y[m]0,b),c=x[m]0,c),d=x[m]0,d);return{x:a,y:b,x2:c,y2
(:d,width:c-a,height:d-b}},cH.clone=functiona){a=new cG;forvar
(b=0,c=this.items.length;b<c;b++)a.pushthis.items[b].clone));return
(a},cH.toString=function){return"RaphaÃ«lâ€˜s
(set"},a.registerFont=functiona){if!a.face)return
(a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face
(["font-family"];forvar d in a.face)a.face[g]d)&&b.face[d]=a.face[d]);
(this.fonts[c]?this.fonts[c].pushb):this.fonts[c]=[b];if!a.svg){b.face
(["units-per-em"]=Ra.face["units-per-em"],10);forvar e in
(a.glyphs)ifa.glyphs[g]e)){var f=a.glyphs[e];b.glyphs[e]={w:f.w,k:{},d
(:f.d&&"M"+f.d.replace/[mlcxtrv]/g,functiona){return{l:"L",c:"C",x:"z"
(,t:"m",r:"l",v:"c"}[a]||"M"})+"z"};iff.k)forvar h in
(f.k)f[g]h)&&b.glyphs[e].k[h]=f.k[h])}}return a},k.getFont=functionb,c
(,d,e){e=e||"normal",d=d||"normal",c=+c||{normal:400,bold:700,lighter:
(300,bolder:800}[c]||400;if!!a.fonts){var f=a.fonts[b];if!f){var h=new
(RegExp"^|\\s)"+b.replace/[^\w\d\s+!~.:_-]/g,p)+"\\s|$)","i");forvar i
(in a.fonts)ifa.fonts[g]i)&&h.testi)){f=a.fonts[i];break}}var
(j;iff)forvar k=0,l=f.length;k<l;k++){j=f[k];ifj.face["font-
(weight"]==c&&j.face["font-style"]==d||!j.face["font-style"])&&j.face
(["font-stretch"]==e)break}return
(j}},k.print=functionb,d,e,f,g,h,i){h=h||"middle",i=xyi||0,1),-1);var 
(j=re)[s]p),k=0,l=0,m=p,n;a.isf,e)&&f=this.getFontf));iff){n=g||16)/f.
(face["units-per-em"];var
(o=f.face.bbox[s]c),q=+o[0],t=o[3]-o[1],u=0,v=+o[1]+h=="baseline"?t+
(+f.face.descent:t/2);forvar
(w=0,z=j.length;w<z;w++){ifj[w]=="\n")k=0,B=0,l=0,u+=t;else{var A=l&&f
(.glyphs[j[w-1]]||{},B=f.glyphs[j[w]];k+=l?A.w||f.w)+A.k&&A.k[j[w]]||0
()+f.w*i:0,l=1}B&&B.d&&m+=a.transformPathB.d,["t",k*n,u*n,"s",n,n,q,v,
("t",b-q)/n,d-v)/n]))}}return this.pathm).attr{fill:"#000",stroke:"non
(e"})},k.add=functionb){ifa.isb,"array")){var c=this.set),e=0,f=b.leng
(th,h;for;e<f;e++)h=b[e]||{},d[g]h.type)&&c.pushthis[h.type]).attrh))}
(return c},a.format=functionb,c){var d=a.isc,E)?[0][n]c):arguments;b&&
(a.isb,D)&&d.length-1&&b=b.replacee,functiona,b){return
(d[++b]==null?p:d[b]}));return b||p},a.fullfill=function){var a=/\{[^\
(}]+)\}/g,b=/?:?:^|\.).+?)?=\[|\.|$|\)|\['|").+?)\2\])\\))?/g,c=functi
(ona,c,d){var e=d;c.replaceb,functiona,b,c,d,f){b=b||d,e&&b in
(e&&e=e[b]),typeof
(e=="function"&&f&&e=e)))}),e=e==null||e==d?a:e)+"";return e};return
(functionb,d){return Stringb).replacea,functiona,b){return
(ca,b,d)})}}),a.ninja=function){i.was?h.win.Raphael=i.is:delete
(Raphael;return a},a.st=cH,functionb,c,d){function e){/in/.testb.ready
(State)?setTimeoute,9):a.eve"raphael.DOMload")}b.readyState==null&&b.a
(ddEventListener&&b.addEventListenerc,d=function){b.removeEventListene
(rc,d,!1),b.readyState="complete"},!1),b.readyState="loading"),e)}docu
(ment,"DOMContentLoaded"),i.was?h.win.Raphael=a:Raphael=a,eve.on"rapha
(el.DOMload",function){b=!0})}),window.Raphael.svg&&functiona){var b="
(hasOwnProperty",c=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.a
(bs,i=f.pow,j=/[, ]+/,k=a.eve,l="",m="
(",n="http://www.w3.org/1999/xlink",o={block:"M5,0 0,2.5
(5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5
(2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5
(2.5,2.5,0,0,1,2.5,0z"},p={};a.toString=function){return"Your browser
(supports SVG.\nYou are running RaphaÃ«l "+this.version};var
(q=functiond,e){ife){typeof d=="string"&&d=qd));forvar f in e)e[b]f)&&
(f.substring0,6)=="xlink:"?d.setAttributeNSn,f.substring6),ce[f])):d.s
(etAttributef,ce[f])))}else d=a._g.doc.createElementNS"http://www.w3.o
(rg/2000/svg",d),d.style&&d.style.webkitTapHighlightColor="rgba0,0,0,0
()");return d},r=functionb,e){var j="linear",k=b.id+e,m=.5,n=.5,o=b.no
(de,p=b.paper,r=o.style,s=a._g.doc.getElementByIdk);if!s){e=ce).replac
(ea._radial_gradient,functiona,b,c){j="radial";ifb&&c){m=db),n=dc);var
(e=n>.5)*2-1;im-.5,2)+in-.5,2)>.25&&n=f.sqrt.25-im-.5,2))*e+.5)&&n!=.5
(&&n=n.toFixed5)-1e-5*e)}return
(l}),e=e.split/\s*\-\s*/);ifj=="linear"){var
(t=e.shift);t=-dt);ifisNaNt))return null;var u=[0,0,f.cosa.radt)),f.si
(na.radt))],v=1/ghu[2]),hu[3]))||1);u[2]*=v,u[3]*=v,u[2]<0&&u[0]=-u[2]
(,u[2]=0),u[3]<0&&u[1]=-u[3],u[3]=0)}var w=a._parseDotse);if!w)return 
(null;k=k.replace/[\\)\s,\xb0#]/g,"_"),b.gradient&&k!=b.gradient.id&&p
(.defs.removeChildb.gradient),delete b.gradient);if!b.gradient){s=qj+"
(Gradient",{id:k}),b.gradient=s,qs,j=="radial"?{fx:m,fy:n}:{x1:u[0],y1
(:u[1],x2:u[2],y2:u[3],gradientTransform:b.matrix.invert)}),p.defs.app
(endChilds);forvar x=0,y=w.length;x<y;x++)s.appendChildq"stop",{offset
(:w[x].offset?w[x].offset:x?"100%":"0%","stop-
(color":w[x].color||"#fff"}))}}qo,{fill:"url#"+k+")",opacity:1,"fill-
(opacity":1}),r.fill=l,r.opacity=1,r.fillOpacity=1;return
(1},s=functiona){var
(b=a.getBBox1);qa.pattern,{patternTransform:a.matrix.invert)+"
(translate"+b.x+","+b.y+")"})},t=functiond,e,f){ifd.type=="path"){var 
(g=ce).toLowerCase).split"-"),h=d.paper,i=f?"end":"start",j=d.node,k=d
(.attrs,m=k["stroke-width"],n=g.length,r="classic",s,t,u,v,w,x=3,y=3,z
(=5;whilen--)switchg[n]){case"block":case"classic":case"oval":case"dia
(mond":case"open":case"none":r=g[n];break;case"wide":y=5;break;case"na
(rrow":y=2;break;case"long":x=5;break;case"short":x=2}r=="open"?x+=2,y
(+=2,z+=2,u=1,v=f?4:1,w={fill:"none",stroke:k.stroke}):v=u=x/2,w={fill
(:k.stroke,stroke:"none"}),d._.arrows?f?d._.arrows.endPath&&p[d._.arro
(ws.endPath]--,d._.arrows.endMarker&&p[d._.arrows.endMarker]--):d._.ar
(rows.startPath&&p[d._.arrows.startPath]--,d._.arrows.startMarker&&p[d
(._.arrows.startMarker]--):d._.arrows={};ifr!="none"){var A="raphael-
(marker-"+r,B="raphael-marker-"+i+r+x+y;a._g.doc.getElementByIdA)?p[A]
(++:h.defs.appendChildqq"path"),{"stroke-
(linecap":"round",d:o[r],id:A})),p[A]=1);var C=a._g.doc.getElementById
(B),D;C?p[B]++,D=C.getElementsByTagName"use")[0]):C=qq"marker"),{id:B,
(markerHeight:y,markerWidth:x,orient:"auto",refX:v,refY:y/2}),D=qq"use
("),{"xlink:href":"#"+A,transform:f?"rotate180 "+x/2+" "+y/2+")
(":l)+"scale"+x/z+","+y/z+")","stroke-width":1/x/z+y/z)/2)).toFixed4)}
(),C.appendChildD),h.defs.appendChildC),p[B]=1),qD,w);var F=u*r!="diam
(ond"&&r!="oval");f?s=d._.arrows.startdx*m||0,t=a.getTotalLengthk.path
()-F*m):s=F*m,t=a.getTotalLengthk.path)-d._.arrows.enddx*m||0)),w={},w
(["marker-"+i]="url#"+B+")";ift||s)w.d=Raphael.getSubpathk.path,s,t);q
(j,w),d._.arrows[i+"Path"]=A,d._.arrows[i+"Marker"]=B,d._.arrows[i+"dx
("]=F,d._.arrows[i+"Type"]=r,d._.arrows[i+"String"]=e}else f?s=d._.arr
(ows.startdx*m||0,t=a.getTotalLengthk.path)-s):s=0,t=a.getTotalLengthk
(.path)-d._.arrows.enddx*m||0)),d._.arrows[i+"Path"]&&qj,{d:Raphael.ge
(tSubpathk.path,s,t)}),delete d._.arrows[i+"Path"],delete
(d._.arrows[i+"Marker"],delete d._.arrows[i+"dx"],delete
(d._.arrows[i+"Type"],delete d._.arrows[i+"String"];forw in
(p)ifp[b]w)&&!p[w]){var G=a._g.doc.getElementByIdw);G&&G.parentNode.re
(moveChildG)}}},u={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],
("-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],
("--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},v=functiona,b,d){b=u[cb).toLowe
(rCase)];ifb){var e=a.attrs["stroke-
(width"]||"1",f={round:e,square:e,butt:0}[a.attrs["stroke-linecap"]||d
(["stroke-linecap"]]||0,g=[],h=b.length;whileh--)g[h]=b[h]*e+h%2?1:-1)
(*f;qa.node,{"stroke-dasharray":g.join",")})}};k.on"raphael.util.attr.
(blur",functiona){this.blura)}),k.on"raphael.util.attr.cursor",functio
(na){this.node.style.cursor=a});var w=functiond,f){var i=d.node,m=d.at
(trs,o=i.style.visibility;i.style.visibility="hidden";forvar p in f){k
("raphael.util.attr."+p,d,f[p]);iff[b]p)){if!a._availableAttrs[b]p))co
(ntinue;var u=f[p];m[p]=u;switchp){case"blur":d.bluru);break;case"href
(":case"title":case"target":var
(w=i.parentNode;ifw.tagName.toLowerCase)!="a"){var x=q"a");w.insertBef
(orex,i),x.appendChildi),w=x}p=="target"?w.setAttributeNSn,"show",u=="
(blank"?"new":u):w.setAttributeNSn,p,u);break;case"cursor":break;case"
(transform":d.transformu);break;case"arrow-start":td,u);break;case
("arrow-end":td,u,1);break;case"clip-rect":var z=cu).splitj);ifz.lengt
(h==4){d.clip&&d.clip.parentNode.parentNode.removeChildd.clip.parentNo
(de);var A=q"clipPath"),B=q"rect");A.id=a.createUUID),qB,{x:z[0],y:z[1
(],width:z[2],height:z[3]}),A.appendChildB),d.paper.defs.appendChildA)
(,qi,{"clip-path":"url#"+A.id+")"}),d.clip=B}if!u){var
(C=i.getAttribute"clip-path");ifC){var D=a._g.doc.getElementByIdC.repl
(ace/^url\#|\)$)/g,l));D&&D.parentNode.removeChildD),qi,{"clip-
(path":l}),delete d.clip}}break;case"path":d.type=="path"&&qi,{d:u?m.p
(ath=a._pathToAbsoluteu):"M0,0"}),d._.dirty=1,d._.arrows&&"startString
("in d._.arrows&&td,d._.arrows.startString),"endString"in d._.arrows&&
(td,d._.arrows.endString,1)));break;case"width":i.setAttributep,u),d._
(.dirty=1;ifm.fx)p="x",u=m.x;else break;case"x":m.fx&&u=-m.x-m.width||
(0));case"rx":ifp=="rx"&&d.type=="rect")break;case"cx":i.setAttributep
(,u),d.pattern&&sd),d._.dirty=1;break;case"height":i.setAttributep,u),
(d._.dirty=1;ifm.fy)p="y",u=m.y;else break;case"y":m.fy&&u=-m.y-m.heig
(ht||0));case"ry":ifp=="ry"&&d.type=="rect")break;case"cy":i.setAttrib
(utep,u),d.pattern&&sd),d._.dirty=1;break;case"r":d.type=="rect"?qi,{r
(x:u,ry:u}):i.setAttributep,u),d._.dirty=1;break;case"src":d.type=="im
(age"&&i.setAttributeNSn,"href",u);break;case"stroke-width":ifd._.sx!=
(1||d._.sy!=1)u/=ghd._.sx),hd._.sy))||1;d.paper._vbSize&&u*=d.paper._v
(bSize),i.setAttributep,u),m["stroke-dasharray"]&&vd,m["stroke-
(dasharray"],f),d._.arrows&&"startString"in
(d._.arrows&&td,d._.arrows.startString),"endString"in
(d._.arrows&&td,d._.arrows.endString,1));break;case"stroke-
(dasharray":vd,u,f);break;case"fill":var
(F=cu).matcha._ISURL);ifF){A=q"pattern");var G=q"image");A.id=a.create
(UUID),qA,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),qG
(,{x:0,y:0,"xlink:href":F[1]}),A.appendChildG),functionb){a._preloadF[
(1],function){var a=this.offsetWidth,c=this.offsetHeight;qb,{width:a,h
(eight:c}),qG,{width:a,height:c}),d.paper.safari)})}A),d.paper.defs.ap
(pendChildA),qi,{fill:"url#"+A.id+")"}),d.pattern=A,d.pattern&&sd);bre
(ak}var H=a.getRGBu);if!H.error)delete f.gradient,delete m.gradient,!a
(.ism.opacity,"undefined")&&a.isf.opacity,"undefined")&&qi,{opacity:m.
(opacity}),!a.ism["fill-opacity"],"undefined")&&a.isf["fill-
(opacity"],"undefined")&&qi,{"fill-opacity":m["fill-opacity"]});else i
(fd.type=="circle"||d.type=="ellipse"||cu).charAt)!="r")&&rd,u)){if"op
(acity"in m||"fill-opacity"in m){var I=a._g.doc.getElementByIdi.getAtt
(ribute"fill").replace/^url\#|\)$/g,l));ifI){var
(J=I.getElementsByTagName"stop");qJ[J.length-1],{"stop-
(opacity":"opacity"in m?m.opacity:1)*"fill-opacity"in m?m["fill-
(opacity"]:1)})}}m.gradient=u,m.fill="none";break}H[b]"opacity")&&qi
(,{"fill-opacity":H.opacity>1?H.opacity/100:H.opacity});case"stroke":H
(=a.getRGBu),i.setAttributep,H.hex),p=="stroke"&&H[b]"opacity")&&qi
(,{"stroke-opacity":H.opacity>1?H.opacity/100:H.opacity}),p=="stroke"&
(&d._.arrows&&"startString"in
(d._.arrows&&td,d._.arrows.startString),"endString"in d._.arrows&&td,d
(._.arrows.endString,1));break;case"gradient":d.type=="circle"||d.type
(=="ellipse"||cu).charAt)!="r")&&rd,u);break;case"opacity":m.gradient&
(&!m[b]"stroke-opacity")&&qi,{"stroke-opacity":u>1?u/100:u});case
("fill-opacity":ifm.gradient){I=a._g.doc.getElementByIdi.getAttribute"
(fill").replace/^url\#|\)$/g,l)),I&&J=I.getElementsByTagName"stop"),qJ
([J.length-1],{"stop-opacity":u}));break};default:p=="font-
(size"&&u=eu,10)+"px");var K=p.replace/\-.)/g,functiona){return a.subs
(tring1).toUpperCase)});i.style[K]=u,d._.dirty=1,i.setAttributep,u)}}}
(yd,f),i.style.visibility=o},x=1.2,y=functiond,f){ifd.type=="text"&&!!
(f[b]"text")||f[b]"font")||f[b]"font-size")||f[b]"x")||f[b]"y"))){var 
(g=d.attrs,h=d.node,i=h.firstChild?ea._g.doc.defaultView.getComputedSt
(yleh.firstChild,l).getPropertyValue"font-size"),10):10;iff[b]"text"))
({g.text=f.text;whileh.firstChild)h.removeChildh.firstChild);var
(j=cf.text).split"\n"),k=[],m;forvar n=0,o=j.length;n<o;n++)m=q"tspan"
(),n&&qm,{dy:i*x,x:g.x}),m.appendChilda._g.doc.createTextNodej[n])),h.
(appendChildm),k[n]=m}else{k=h.getElementsByTagName"tspan");forn=0,o=k
(.length;n<o;n++)n?qk[n],{dy:i*x,x:g.x}):qk[0],{dy:0})}qh,{x:g.x,y:g.y
(}),d._.dirty=1;var p=d._getBBox),r=g.y-p.y+p.height/2);r&&a.isr,"fini
(te")&&qk[0],{dy:r})}},z=functionb,c){var d=0,e=0;this[0]=this.node=b,
(b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.matrix=a.matri
(x),this.realPath=null,this.paper=c,this.attrs=this.attrs||{},this._={
(transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!c.bottom&&c.bottom=t
(his),this.prev=c.top,c.top&&c.top.next=this),c.top=this,this.next=nul
(l},A=a.el;z.prototype=A,A.constructor=z,a._engine.path=functiona,b){v
(ar c=q"path");b.canvas&&b.canvas.appendChildc);var d=new
(zc,b);d.type="path",wd,{fill:"none",stroke:"#000",path:a});return
(d},A.rotate=functiona,b,e){ifthis.removed)return this;a=ca).splitj),a
(.length-1&&b=da[1]),e=da[2])),a=da[0]),e==null&&b=e);ifb==null||e==nu
(ll){var f=this.getBBox1);b=f.x+f.width/2,e=f.y+f.height/2}this.transf
(ormthis._.transform.concat[["r",a,b,e]]));return
(this},A.scale=functiona,b,e,f){ifthis.removed)return this;a=ca).split
(j),a.length-1&&b=da[1]),e=da[2]),f=da[3])),a=da[0]),b==null&&b=a),f==
(null&&e=f);ife==null||f==null)var g=this.getBBox1);e=e==null?g.x+g.wi
(dth/2:e,f=f==null?g.y+g.height/2:f,this.transformthis._.transform.con
(cat[["s",a,b,e,f]]));return
(this},A.translate=functiona,b){ifthis.removed)return this;a=ca).split
(j),a.length-1&&b=da[1])),a=da[0])||0,b=+b||0,this.transformthis._.tra
(nsform.concat[["t",a,b]]));return this},A.transform=functionc){var
(d=this._;ifc==null)return d.transform;a._extractTransformthis,c),this
(.clip&&qthis.clip,{transform:this.matrix.invert)}),this.pattern&&sthi
(s),this.node&&qthis.node,{transform:this.matrix});ifd.sx!=1||d.sy!=1)
({var e=this.attrs[b]"stroke-width")?this.attrs["stroke-
(width"]:1;this.attr{"stroke-width":e})}return this},A.hide=function){
(!this.removed&&this.paper.safarithis.node.style.display="none");retur
(n this},A.show=function){!this.removed&&this.paper.safarithis.node.st
(yle.display="");return
(this},A.remove=function){if!this.removed&&!!this.node.parentNode){var
(b=this.paper;b.__set__&&b.__set__.excludethis),k.unbind"raphael.*.*."
(+this.id),this.gradient&&b.defs.removeChildthis.gradient),a._tearthis
(,b),this.node.parentNode.tagName.toLowerCase)=="a"?this.node.parentNo
(de.parentNode.removeChildthis.node.parentNode):this.node.parentNode.r
(emoveChildthis.node);forvar c in this)this[c]=typeof this[c]=="functi
(on"?a._removedFactoryc):null;this.removed=!0}},A._getBBox=function){i
(fthis.node.style.display=="none"){this.show);var a=!0}var b={};try{b=
(this.node.getBBox)}catchc){}finally{b=b||{}}a&&this.hide);return
(b},A.attr=functionc,d){ifthis.removed)return this;ifc==null){var
(e={};forvar f in this.attrs)this.attrs[b]f)&&e[f]=this.attrs[f]);e.gr
(adient&&e.fill=="none"&&e.fill=e.gradient)&&delete
(e.gradient,e.transform=this._.transform;return e}ifd==null&&a.isc,"st
(ring")){ifc=="fill"&&this.attrs.fill=="none"&&this.attrs.gradient)ret
(urn this.attrs.gradient;ifc=="transform")return this._.transform;var
(g=c.splitj),h={};forvar i=0,l=g.length;i<l;i++)c=g[i],c in this.attrs
(?h[c]=this.attrs[c]:a.isthis.paper.customAttributes[c],"function")?h[
(c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];retur
(n l-1?h:h[g[0]]}ifd==null&&a.isc,"array")){h={};fori=0,l=c.length;i<l
(;i++)h[c[i]]=this.attrc[i]);return h}ifd!=null){var m={};m[c]=d}else
(c!=null&&a.isc,"object")&&m=c);forvar n in
(m)k"raphael.attr."+n+"."+this.id,this,m[n]);forn in this.paper.custom
(Attributes)ifthis.paper.customAttributes[b]n)&&m[b]n)&&a.isthis.paper
(.customAttributes[n],"function")){var o=this.paper.customAttributes[n
(].applythis,[].concatm[n]));this.attrs[n]=m[n];forvar p in
(o)o[b]p)&&m[p]=o[p])}wthis,m);return
(this},A.toFront=function){ifthis.removed)return this;this.node.parent
(Node.tagName.toLowerCase)=="a"?this.node.parentNode.parentNode.append
(Childthis.node.parentNode):this.node.parentNode.appendChildthis.node)
(;var b=this.paper;b.top!=this&&a._tofrontthis,b);return
(this},A.toBack=function){ifthis.removed)return this;var b=this.node.p
(arentNode;b.tagName.toLowerCase)=="a"?b.parentNode.insertBeforethis.n
(ode.parentNode,this.node.parentNode.parentNode.firstChild):b.firstChi
(ld!=this.node&&b.insertBeforethis.node,this.node.parentNode.firstChil
(d),a._tobackthis,this.paper);var c=this.paper;return
(this},A.insertAfter=functionb){ifthis.removed)return this;var c=b.nod
(e||b[b.length-1].node;c.nextSibling?c.parentNode.insertBeforethis.nod
(e,c.nextSibling):c.parentNode.appendChildthis.node),a._insertafterthi
(s,b,this.paper);return
(this},A.insertBefore=functionb){ifthis.removed)return this;var c=b.no
(de||b[0].node;c.parentNode.insertBeforethis.node,c),a._insertbeforeth
(is,b,this.paper);return this},A.blur=functionb){var
(c=this;if+b!==0){var d=q"filter"),e=q"feGaussianBlur");c.attrs.blur=b
(,d.id=a.createUUID),qe,{stdDeviation:+b||1.5}),d.appendChilde),c.pape
(r.defs.appendChildd),c._blur=d,qc.node,{filter:"url#"+d.id+")"})}else
(c._blur&&c._blur.parentNode.removeChildc._blur),delete c._blur,delete
(c.attrs.blur),c.node.removeAttribute"filter")},a._engine.circle=funct
(iona,b,c,d){var e=q"circle");a.canvas&&a.canvas.appendChilde);var
(f=new ze,a);f.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"},f.type=
("circle",qe,f.attrs);return
(f},a._engine.rect=functiona,b,c,d,e,f){var
(g=q"rect");a.canvas&&a.canvas.appendChildg);var h=new zg,a);h.attrs={
(x:b,y:c,width:d,height:e,r:f||0,rx:f||0,ry:f||0,fill:"none",stroke:"#
(000"},h.type="rect",qg,h.attrs);return
(h},a._engine.ellipse=functiona,b,c,d,e){var
(f=q"ellipse");a.canvas&&a.canvas.appendChildf);var g=new zf,a);g.attr
(s={cx:b,cy:c,rx:d,ry:e,fill:"none",stroke:"#000"},g.type="ellipse",qf
(,g.attrs);return g},a._engine.image=functiona,b,c,d,e,f){var g=q"imag
(e");qg,{x:c,y:d,width:e,height:f,preserveAspectRatio:"none"}),g.setAt
(tributeNSn,"href",b),a.canvas&&a.canvas.appendChildg);var h=new
(zg,a);h.attrs={x:c,y:d,width:e,height:f,src:b},h.type="image";return
(h},a._engine.text=functionb,c,d,e){var
(f=q"text");b.canvas&&b.canvas.appendChildf);var g=new
(zf,b);g.attrs={x:c,y:d,"text-anchor":"middle",text:e,font:a._availabl
(eAttrs.font,stroke:"none",fill:"#000"},g.type="text",wg,g.attrs);retu
(rn g},a._engine.setSize=functiona,b){this.width=a||this.width,this.he
(ight=b||this.height,this.canvas.setAttribute"width",this.width),this.
(canvas.setAttribute"height",this.height),this._viewBox&&this.setViewB
(ox.applythis,this._viewBox);return
(this},a._engine.create=function){var b=a._getContainer.apply0,argumen
(ts),c=b&&b.container,d=b.x,e=b.y,f=b.width,g=b.height;if!c)throw new
(Error"SVG container not found.");var h=q"svg"),i="overflow:hidden;",j
(;d=d||0,e=e||0,f=f||512,g=g||342,qh,{height:g,version:1.1,width:f,xml
(ns:"http://www.w3.org/2000/svg"}),c==1?h.style.cssText=i+"position:ab
(solute;left:"+d+"px;top:"+e+"px",a._g.doc.body.appendChildh),j=1):h.s
(tyle.cssText=i+"position:relative",c.firstChild?c.insertBeforeh,c.fir
(stChild):c.appendChildh)),c=new a._Paper,c.width=f,c.height=g,c.canva
(s=h,c.clear),c._left=c._top=0,j&&c.renderfix=function){}),c.renderfix
();return c},a._engine.setViewBox=functiona,b,c,d,e){k"raphael.setView
(Box",this,this._viewBox,[a,b,c,d,e]);var f=gc/this.width,d/this.heigh
(t),h=this.top,i=e?"meet":"xMinYMin",j,l;a==null?this._vbSize&&f=1),de
(lete this._vbSize,j="0 0 "+this.width+m+this.height):this._vbSize=f,j
(=a+m+b+m+c+m+d),qthis.canvas,{viewBox:j,preserveAspectRatio:i});while
(f&&h)l="stroke-width"in h.attrs?h.attrs["stroke-width"]:1,h.attr
({"stroke-width":l}),h._.dirty=1,h._.dirtyT=1,h=h.prev;this._viewBox=[
(a,b,c,d,!!e];return this},a.prototype.renderfix=function){var a=this.
(canvas,b=a.style,c;try{c=a.getScreenCTM)||a.createSVGMatrix)}catchd){
(c=a.createSVGMatrix)}var e=-c.e%1,f=-c.f%1;ife||f)e&&this._left=this.
(_left+e)%1,b.left=this._left+"px"),f&&this._top=this._top+f)%1,b.top=
(this._top+"px")},a.prototype.clear=function){a.eve"raphael.clear",thi
(s);var b=this.canvas;whileb.firstChild)b.removeChildb.firstChild);thi
(s.bottom=this.top=null,this.desc=q"desc")).appendChilda._g.doc.create
(TextNode"Created with RaphaÃ«l "+a.version)),b.appendChildthis.desc),
(b.appendChildthis.defs=q"defs"))},a.prototype.remove=function){k"raph
(ael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.remo
(veChildthis.canvas);forvar b in this)this[b]=typeof
(this[b]=="function"?a._removedFactoryb):null};var B=a.st;forvar C in
(A)A[b]C)&&!B[b]C)&&B[C]=functiona){return function){var
(b=arguments;return this.forEachfunctionc){c[a].applyc,b)})}}C))}windo
(w.Raphael),window.Raphael.vml&&functiona){var b="hasOwnProperty",c=St
(ring,d=parseFloat,e=Math,f=e.round,g=e.max,h=e.min,i=e.abs,j="fill",k
(=/[, ]+/,l=a.eve,m=" progid:DXImageTransform.Microsoft",n=" ",o="",p=
({M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},q=/[clmz]),?[^clmz]
(*)/gi,r=/ progid:\S+Blur\[^\)]+\)/g,s=/-?[^,\s-]+/g,t="position:absol
(ute;left:0;top:0;width:1px;height:1px",u=21600,v={path:1,rect:1,image
(:1},w={circle:1,ellipse:1},x=functionb){var d=/[ahqstv]/ig,e=a._pathT
(oAbsolute;cb).matchd)&&e=a._path2curve),d=/[clmz]/g;ife==a._pathToAbs
(olute&&!cb).matchd)){var g=cb).replaceq,functiona,b,c){var d=[],e=b.t
(oLowerCase)=="m",g=p[b];c.replaces,functiona){e&&d.length==2&&g+=d+p[
(b=="m"?"l":"L"],d=[]),d.pushfa*u))});return g+d});return g}var
(h=eb),i,j;g=[];forvar k=0,l=h.length;k<l;k++){i=h[k],j=h[k][0].toLowe
(rCase),j=="z"&&j="x");forvar
(m=1,r=i.length;m<r;m++)j+=fi[m]*u)+m!=r-1?",":o);g.pushj)}return
(g.joinn)},y=functionb,c,d){var e=a.matrix);e.rotate-b,.5,.5);return{d
(x:e.xc,d),dy:e.yc,d)}},z=functiona,b,c,d,e,f){var g=a._,h=a.matrix,k=
(g.fillpos,l=a.node,m=l.style,o=1,p="",q,r=u/b,s=u/c;m.visibility="hid
(den";if!!b&&!!c){l.coordsize=ir)+n+is),m.rotation=f*b*c<0?-1:1);iff){
(var t=yf,d,e);d=t.dx,e=t.dy}b<0&&p+="x"),c<0&&p+="
(y")&&o=-1),m.flip=p,l.coordorigin=d*-r+n+e*-s;ifk||g.fillsize){var v=
(l.getElementsByTagNamej);v=v&&v[0],l.removeChildv),k&&t=yf,h.xk[0],k[
(1]),h.yk[0],k[1])),v.position=t.dx*o+n+t.dy*o),g.fillsize&&v.size=g.f
(illsize[0]*ib)+n+g.fillsize[1]*ic)),l.appendChildv)}m.visibility="vis
(ible"}};a.toString=function){return"Your browser doesnâ€™t support
(SVG. Falling down to VML.\nYou are running RaphaÃ«l
("+this.version};var A=functiona,b,d){var e=cb).toLowerCase).split"-")
(,f=d?"end":"start",g=e.length,h="classic",i="medium",j="medium";while
(g--)switche[g]){case"block":case"classic":case"oval":case"diamond":ca
(se"open":case"none":h=e[g];break;case"wide":case"narrow":j=e[g];break
(;case"long":case"short":i=e[g]}var k=a.node.getElementsByTagName"stro
(ke")[0];k[f+"arrow"]=h,k[f+"arrowlength"]=i,k[f+"arrowwidth"]=j},B=fu
(nctione,i){e.attrs=e.attrs||{};var l=e.node,m=e.attrs,p=l.style,q,r=v
([e.type]&&i.x!=m.x||i.y!=m.y||i.width!=m.width||i.height!=m.height||i
(.cx!=m.cx||i.cy!=m.cy||i.rx!=m.rx||i.ry!=m.ry||i.r!=m.r),s=w[e.type]&
(&m.cx!=i.cx||m.cy!=i.cy||m.r!=i.r||m.rx!=i.rx||m.ry!=i.ry),t=e;forvar
(y in i)i[b]y)&&m[y]=i[y]);r&&m.path=a._getPath[e.type]e),e._.dirty=1)
(,i.href&&l.href=i.href),i.title&&l.title=i.title),i.target&&l.target=
(i.target),i.cursor&&p.cursor=i.cursor),"blur"in i&&e.bluri.blur);ifi.
(path&&e.type=="path"||r)l.path=x~cm.path).toLowerCase).indexOf"r")?a.
(_pathToAbsolutem.path):m.path),e.type=="image"&&e._.fillpos=[m.x,m.y]
(,e._.fillsize=[m.width,m.height],ze,1,1,0,0,0));"transform"in
(i&&e.transformi.transform);ifs){var B=+m.cx,D=+m.cy,E=+m.rx||+m.r||0,
(G=+m.ry||+m.r||0;l.path=a.format"ar{0},{1},{2},{3},{4},{1},{4},{1}x",
(fB-E)*u),fD-G)*u),fB+E)*u),fD+G)*u),fB*u))}if"clip-rect"in i){var
(H=ci["clip-rect"]).splitk);ifH.length==4){H[2]=+H[2]+
(+H[0],H[3]=+H[3]+ +H[1];var I=l.clipRect||a._g.doc.createElement"div"
(),J=I.style;J.clip=a.format"rect{1}px {2}px {3}px {0}px)",H),l.clipRe
(ct||J.position="absolute",J.top=0,J.left=0,J.width=e.paper.width+"px"
(,J.height=e.paper.height+"px",l.parentNode.insertBeforeI,l),I.appendC
(hildl),l.clipRect=I)}i["clip-
(rect"]||l.clipRect&&l.clipRect.style.clip="auto")}ife.textpath){var
(K=e.textpath.style;i.font&&K.font=i.font),i["font-
(family"]&&K.fontFamily='"'+i["font-
(family"].split",")[0].replace/^['"]+|['"]+$/g,o)+'"'),i["font-
(size"]&&K.fontSize=i["font-size"]),i["font-weight"]&&K.fontWeight=i
(["font-weight"]),i["font-style"]&&K.fontStyle=i["font-style
("])}"arrow-start"in i&&At,i["arrow-start"]),"arrow-end"in i&&At,i
(["arrow-end"],1);ifi.opacity!=null||i["stroke-
(width"]!=null||i.fill!=null||i.src!=null||i.stroke!=null||i["stroke-
(width"]!=null||i["stroke-opacity"]!=null||i["fill-opacity"]!=null||i
(["stroke-dasharray"]!=null||i["stroke-miterlimit"]!=null||i["stroke-
(linejoin"]!=null||i["stroke-linecap"]!=null){var L=l.getElementsByTag
(Namej),M=!1;L=L&&L[0],!L&&M=L=Fj)),e.type=="image"&&i.src&&L.src=i.sr
(c),i.fill&&L.on=!0);ifL.on==null||i.fill=="none"||i.fill===null)L.on=
(!1;ifL.on&&i.fill){var N=ci.fill).matcha._ISURL);ifN){L.parentNode==l
(&&l.removeChildL),L.rotate=!0,L.src=N[1],L.type="tile";var O=e.getBBo
(x1);L.position=O.x+n+O.y,e._.fillpos=[O.x,O.y],a._preloadN[1],functio
(n){e._.fillsize=[this.offsetWidth,this.offsetHeight]})}else L.color=a
(.getRGBi.fill).hex,L.src=o,L.type="solid",a.getRGBi.fill).error&&t.ty
(pe in{circle:1,ellipse:1}||ci.fill).charAt)!="r")&&Ct,i.fill,L)&&m.fi
(ll="none",m.gradient=i.fill,L.rotate=!1)}if"fill-opacity"in
(i||"opacity"in i){var P=+m["fill-opacity"]+1||2)-1)*+m.opacity+1||2)-
(1)*+a.getRGBi.fill).o+1||2)-1);P=hgP,0),1),L.opacity=P,L.src&&L.color
(="none")}l.appendChildL);var Q=l.getElementsByTagName"stroke")&&l.get
(ElementsByTagName"stroke")[0],T=!1;!Q&&T=Q=F"stroke"));ifi.stroke&&i.
(stroke!="none"||i["stroke-width"]||i["stroke-opacity"]!=null||i
(["stroke-dasharray"]||i["stroke-miterlimit"]||i["stroke-linejoin"]||i
(["stroke-linecap"])Q.on=!0;i.stroke=="none"||i.stroke===null||Q.on==n
(ull||i.stroke==0||i["stroke-width"]==0)&&Q.on=!1);var
(U=a.getRGBi.stroke);Q.on&&i.stroke&&Q.color=U.hex),P=+m["stroke-
(opacity"]+1||2)-1)*+m.opacity+1||2)-1)*+U.o+1||2)-1);var V=di
(["stroke-width"])||1)*.75;P=hgP,0),1),i["stroke-width"]==null&&V=m
(["stroke-width"]),i["stroke-
(width"]&&Q.weight=V),V&&V<1&&P*=V)&&Q.weight=1),Q.opacity=P,i
(["stroke-linejoin"]&&Q.joinstyle=i["stroke-
(linejoin"]||"miter"),Q.miterlimit=i["stroke-miterlimit"]||8,i
(["stroke-linecap"]&&Q.endcap=i["stroke-linecap"]=="butt"?"flat":i
(["stroke-linecap"]=="square"?"square":"round");ifi["stroke-
(dasharray"]){var W={"-":"shortdash",".":"shortdot","-.":"shortdashdot
(","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .
(":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};Q.dashstyle=
(W[b]i["stroke-dasharray"])?W[i["stroke-dasharray"]]:o}T&&l.appendChil
(dQ)}ift.type=="text"){t.paper.canvas.style.display=o;var X=t.paper.sp
(an,Y=100,Z=m.font&&m.font.match/\d+?:\.\d*)??=px)/);p=X.style,m.font&
(&p.font=m.font),m["font-family"]&&p.fontFamily=m["font-family"]),m
(["font-weight"]&&p.fontWeight=m["font-weight"]),m["font-
(style"]&&p.fontStyle=m["font-style"]),Z=dm["font-size"]||Z&&Z[0])||10
(,p.fontSize=Z*Y+"px",t.textpath.string&&X.innerHTML=ct.textpath.strin
(g).replace/</g,"&#60;").replace/&/g,"&#38;").replace/\n/g,"<br>"));va
(r $=X.getBoundingClientRect);t.W=m.w=$.right-$.left)/Y,t.H=m.h=$.bott
(om-$.top)/Y,t.X=m.x,t.Y=m.y+t.H/2,"x"in i||"y"in i)&&t.path.v=a.forma
(t"m{0},{1}l{2},{1}",fm.x*u),fm.y*u),fm.x*u)+1));var
(_=["x","y","text","font","font-family","font-weight","font-style
(","font-size"];forvar ba=0,bb=_.length;ba<bb;ba++)if_[ba]in
(i){t._.dirty=1;break}switchm["text-
(anchor"]){case"start":t.textpath.style["v-text-
(align"]="left",t.bbx=t.W/2;break;case"end":t.textpath.style["v-text-
(align"]="right",t.bbx=-t.W/2;break;default:t.textpath.style["v-text-
(align"]="center",t.bbx=0}t.textpath.style["v-text-
(kern"]=!0}},C=functionb,f,g){b.attrs=b.attrs||{};var
(h=b.attrs,i=Math.pow,j,k,l="linear",m=".5 .5";b.attrs.gradient=f,f=cf
().replacea._radial_gradient,functiona,b,c){l="radial",b&&c&&b=db),c=d
(c),ib-.5,2)+ic-.5,2)>.25&&c=e.sqrt.25-ib-.5,2))*c>.5)*2-1)+.5),m=b+n+
(c);return o}),f=f.split/\s*\-\s*/);ifl=="linear"){var
(p=f.shift);p=-dp);ifisNaNp))return null}var
(q=a._parseDotsf);if!q)return null;b=b.shape||b.node;ifq.length){b.rem
(oveChildg),g.on=!0,g.method="none",g.color=q[0].color,g.color2=q[q.le
(ngth-1].color;var r=[];forvar s=0,t=q.length;s<t;s++)q[s].offset&&r.p
(ushq[s].offset+n+q[s].color);g.colors=r.length?r.join):"0% "+g.color,
(l=="radial"?g.type="gradientTitle",g.focus="100%",g.focussize="0 0",g
(.focusposition=m,g.angle=0):g.type="gradient",g.angle=270-p)%360),b.a
(ppendChildg)}return 1},D=functionb,c){this[0]=this.node=b,b.raphael=!
(0,this.id=a._oid++,b.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={
(},this.paper=c,this.matrix=a.matrix),this._={transform:[],sx:1,sy:1,d
(x:0,dy:0,deg:0,dirty:1,dirtyT:1},!c.bottom&&c.bottom=this),this.prev=
(c.top,c.top&&c.top.next=this),c.top=this,this.next=null},E=a.el;D.pro
(totype=E,E.constructor=D,E.transform=functionb){ifb==null)return
(this._.transform;var d=this.paper._viewBoxShift,e=d?"s"+[d.scale,d.sc
(ale]+"-1-1t"+[d.dx,d.dy]:o,f;d&&f=b=cb).replace/\.{3}|\u2026/g,this._
(.transform||o)),a._extractTransformthis,e+b);var g=this.matrix.clone)
(,h=this.skew,i=this.node,j,k=~cthis.attrs.fill).indexOf"-"),l=!cthis.
(attrs.fill).indexOf"url");g.translate-0.5,-0.5);ifl||k||this.type=="i
(mage"){h.matrix="1 0 0 1",h.offset="0 0",j=g.split);ifk&&j.noRotation
(||!j.isSimple){i.style.filter=g.toFilter);var m=this.getBBox),p=this.
(getBBox1),q=m.x-p.x,r=m.y-p.y;i.coordorigin=q*-u+n+r*-u,zthis,1,1,q,r
(,0)}else
(i.style.filter=o,zthis,j.scalex,j.scaley,j.dx,j.dy,j.rotate)}else i.s
(tyle.filter=o,h.matrix=cg),h.offset=g.offset);f&&this._.transform=f);
(return this},E.rotate=functiona,b,e){ifthis.removed)return this;ifa!=
(null){a=ca).splitk),a.length-1&&b=da[1]),e=da[2])),a=da[0]),e==null&&
(b=e);ifb==null||e==null){var f=this.getBBox1);b=f.x+f.width/2,e=f.y+f
(.height/2}this._.dirtyT=1,this.transformthis._.transform.concat[["r",
(a,b,e]]));return
(this}},E.translate=functiona,b){ifthis.removed)return this;a=ca).spli
(tk),a.length-1&&b=da[1])),a=da[0])||0,b=+b||0,this._.bbox&&this._.bbo
(x.x+=a,this._.bbox.y+=b),this.transformthis._.transform.concat[["t",a
(,b]]));return this},E.scale=functiona,b,e,f){ifthis.removed)return th
(is;a=ca).splitk),a.length-1&&b=da[1]),e=da[2]),f=da[3]),isNaNe)&&e=nu
(ll),isNaNf)&&f=null)),a=da[0]),b==null&&b=a),f==null&&e=f);ife==null|
(|f==null)var g=this.getBBox1);e=e==null?g.x+g.width/2:e,f=f==null?g.y
(+g.height/2:f,this.transformthis._.transform.concat[["s",a,b,e,f]])),
(this._.dirtyT=1;return this},E.hide=function){!this.removed&&this.nod
(e.style.display="none");return this},E.show=function){!this.removed&&
(this.node.style.display=o);return this},E._getBBox=function){ifthis.r
(emoved)return{};return{x:this.X+this.bbx||0)-this.W/2,y:this.Y-this.H
(,width:this.W,height:this.H}},E.remove=function){if!this.removed&&!!t
(his.node.parentNode){this.paper.__set__&&this.paper.__set__.excludeth
(is),a.eve.unbind"raphael.*.*."+this.id),a._tearthis,this.paper),this.
(node.parentNode.removeChildthis.node),this.shape&&this.shape.parentNo
(de.removeChildthis.shape);forvar b in this)this[b]=typeof this[b]=="f
(unction"?a._removedFactoryb):null;this.removed=!0}},E.attr=functionc,
(d){ifthis.removed)return this;ifc==null){var e={};forvar f in this.at
(trs)this.attrs[b]f)&&e[f]=this.attrs[f]);e.gradient&&e.fill=="none"&&
(e.fill=e.gradient)&&delete
(e.gradient,e.transform=this._.transform;return e}ifd==null&&a.isc,"st
(ring")){ifc==j&&this.attrs.fill=="none"&&this.attrs.gradient)return
(this.attrs.gradient;var g=c.splitk),h={};forvar
(i=0,m=g.length;i<m;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is
(this.paper.customAttributes[c],"function")?h[c]=this.paper.customAttr
(ibutes[c].def:h[c]=a._availableAttrs[c];return m-1?h:h[g[0]]}ifthis.a
(ttrs&&d==null&&a.isc,"array")){h={};fori=0,m=c.length;i<m;i++)h[c[i]]
(=this.attrc[i]);return h}var
(n;d!=null&&n={},n[c]=d),d==null&&a.isc,"object")&&n=c);forvar o in
(n)l"raphael.attr."+o+"."+this.id,this,n[o]);ifn){foro in this.paper.c
(ustomAttributes)ifthis.paper.customAttributes[b]o)&&n[b]o)&&a.isthis.
(paper.customAttributes[o],"function")){var p=this.paper.customAttribu
(tes[o].applythis,[].concatn[o]));this.attrs[o]=n[o];forvar q in p)p[b
(]q)&&n[q]=p[q])}n.text&&this.type=="text"&&this.textpath.string=n.tex
(t),Bthis,n)}return this},E.toFront=function){!this.removed&&this.node
(.parentNode.appendChildthis.node),this.paper&&this.paper.top!=this&&a
(._tofrontthis,this.paper);return
(this},E.toBack=function){ifthis.removed)return this;this.node.parentN
(ode.firstChild!=this.node&&this.node.parentNode.insertBeforethis.node
(,this.node.parentNode.firstChild),a._tobackthis,this.paper));return
(this},E.insertAfter=functionb){ifthis.removed)return this;b.construct
(or==a.st.constructor&&b=b[b.length-1]),b.node.nextSibling?b.node.pare
(ntNode.insertBeforethis.node,b.node.nextSibling):b.node.parentNode.ap
(pendChildthis.node),a._insertafterthis,b,this.paper);return
(this},E.insertBefore=functionb){ifthis.removed)return this;b.construc
(tor==a.st.constructor&&b=b[0]),b.node.parentNode.insertBeforethis.nod
(e,b.node),a._insertbeforethis,b,this.paper);return
(this},E.blur=functionb){var c=this.node.runtimeStyle,d=c.filter;d=d.r
(eplacer,o),+b!==0?this.attrs.blur=b,c.filter=d+n+m+".Blurpixelradius=
("++b||1.5)+")",c.margin=a.format"-{0}px 0 0
(-{0}px",f+b||1.5))):c.filter=d,c.margin=0,delete
(this.attrs.blur)},a._engine.path=functiona,b){var c=F"shape");c.style
(.cssText=t,c.coordsize=u+n+u,c.coordorigin=b.coordorigin;var d=new Dc
(,b),e={fill:"none",stroke:"#000"};a&&e.path=a),d.type="path",d.path=[
(],d.Path=o,Bd,e),b.canvas.appendChildc);var
(f=F"skew");f.on=!0,c.appendChildf),d.skew=f,d.transformo);return
(d},a._engine.rect=functionb,c,d,e,f,g){var h=a._rectPathc,d,e,f,g),i=
(b.pathh),j=i.attrs;i.X=j.x=c,i.Y=j.y=d,i.W=j.width=e,i.H=j.height=f,j
(.r=g,j.path=h,i.type="rect";return
(i},a._engine.ellipse=functiona,b,c,d,e){var f=a.path),g=f.attrs;f.X=b
(-d,f.Y=c-e,f.W=d*2,f.H=e*2,f.type="ellipse",Bf,{cx:b,cy:c,rx:d,ry:e})
(;return f},a._engine.circle=functiona,b,c,d){var e=a.path),f=e.attrs;
(e.X=b-d,e.Y=c-d,e.W=e.H=d*2,e.type="circle",Be,{cx:b,cy:c,r:d});retur
(n e},a._engine.image=functionb,c,d,e,f,g){var h=a._rectPathd,e,f,g),i
(=b.pathh).attr{stroke:"none"}),k=i.attrs,l=i.node,m=l.getElementsByTa
(gNamej)[0];k.src=c,i.X=k.x=d,i.Y=k.y=e,i.W=k.width=f,i.H=k.height=g,k
(.path=h,i.type="image",m.parentNode==l&&l.removeChildm),m.rotate=!0,m
(.src=c,m.type="tile",i._.fillpos=[d,e],i._.fillsize=[f,g],l.appendChi
(ldm),zi,1,1,0,0,0);return i},a._engine.text=functionb,d,e,g){var h=F"
(shape"),i=F"path"),j=F"textpath");d=d||0,e=e||0,g=g||"",i.v=a.format"
(m{0},{1}l{2},{1}",fd*u),fe*u),fd*u)+1),i.textpathok=!0,j.string=cg),j
(.on=!0,h.style.cssText=t,h.coordsize=u+n+u,h.coordorigin="0 0";var
(k=new Dh,b),l={fill:"#000",stroke:"none",font:a._availableAttrs.font,
(text:g};k.shape=h,k.path=i,k.textpath=j,k.type="text",k.attrs.text=cg
(),k.attrs.x=d,k.attrs.y=e,k.attrs.w=1,k.attrs.h=1,Bk,l),h.appendChild
(j),h.appendChildi),b.canvas.appendChildh);var
(m=F"skew");m.on=!0,h.appendChildm),k.skew=m,k.transformo);return
(k},a._engine.setSize=functionb,c){var d=this.canvas.style;this.width=
(b,this.height=c,b==+b&&b+="px"),c==+c&&c+="px"),d.width=b,d.height=c,
(d.clip="rect0 "+b+" "+c+" 0)",this._viewBox&&a._engine.setViewBox.app
(lythis,this._viewBox);return this},a._engine.setViewBox=functionb,c,d
(,e,f){a.eve"raphael.setViewBox",this,this._viewBox,[b,c,d,e,f]);var h
(=this.width,i=this.height,j=1/gd/h,e/i),k,l;f&&k=i/e,l=h/d,d*k<h&&b-=
(h-d*k)/2/k),e*l<i&&c-=i-e*l)/2/l)),this._viewBox=[b,c,d,e,!!f],this._
(viewBoxShift={dx:-b,dy:-c,scale:j},this.forEachfunctiona){a.transform
("...")});return this};var F;a._engine.initWin=functiona){var b=a.docu
(ment;b.createStyleSheet).addRule".rvml","behavior:url#default#VML)");
(try{!b.namespaces.rvml&&b.namespaces.add"rvml","urn:schemas-
(microsoft-com:vml"),F=functiona){return b.createElement"<rvml:"+a+'
(class="rvml">')}}catchc){F=functiona){return b.createElement"<"+a+'
(xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},a._engine.in
(itWina._g.win),a._engine.create=function){var b=a._getContainer.apply
(0,arguments),c=b.container,d=b.height,e,f=b.width,g=b.x,h=b.y;if!c)th
(row new Error"VML container not found.");var i=new a._Paper,j=i.canva
(s=a._g.doc.createElement"div"),k=j.style;g=g||0,h=h||0,f=f||512,d=d||
(342,i.width=f,i.height=d,f==+f&&f+="px"),d==+d&&d+="px"),i.coordsize=
(u*1e3+n+u*1e3,i.coordorigin="0 0",i.span=a._g.doc.createElement"span"
(),i.span.style.cssText="position:absolute;left:-9999em;top:-9999em;pa
(dding:0;margin:0;line-height:1;",j.appendChildi.span),k.cssText=a.for
(mat"top:0;left:0;width:{0};height:{1};display:inline-
(block;position:relative;clip:rect0 {0} {1} 0);overflow:hidden",f,d),c
(==1?a._g.doc.body.appendChildj),k.left=g+"px",k.top=h+"px",k.position
(="absolute"):c.firstChild?c.insertBeforej,c.firstChild):c.appendChild
(j),i.renderfix=function){};return i},a.prototype.clear=function){a.ev
(e"raphael.clear",this),this.canvas.innerHTML=o,this.span=a._g.doc.cre
(ateElement"span"),this.span.style.cssText="position:absolute;left:-99
(99em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",th
(is.canvas.appendChildthis.span),this.bottom=this.top=null},a.prototyp
(e.remove=function){a.eve"raphael.remove",this),this.canvas.parentNode
(.removeChildthis.canvas);forvar b in this)this[b]=typeof
(this[b]=="function"?a._removedFactoryb):null;return!0};var
(G=a.st;forvar H in E)E[b]H)&&!G[b]H)&&G[H]=functiona){return
(function){var b=arguments;return
(this.forEachfunctionc){c[a].applyc,b)})}}H))}window.Raphael)
