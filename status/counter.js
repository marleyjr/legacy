        
/**
 * Apple-Style Flip Counter
 * ------------------------
 *
 * Copyright (c) 2010 Chris Nanney
 * http://cnanney.com/journal/code/apple-style-counter-revisited/
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 */
var flipCounter=function(y,H){function t(){j=c.value.toString();c.value+=c.inc;h=c.value.toString();o(j,h);if(c.auto===true)k=setTimeout(t,c.pace)}function z(a,d,b){var e=c.value,f=typeof d=="undefined"?false:d,g=typeof b=="undefined"?1:b;f===true&&g--;if(e!=a){j=c.value.toString();c.auto=true;if(e+c.inc<=a&&g!=0)e+=c.inc;else e=a;c.value=e;h=c.value.toString();o(j,h);k=setTimeout(function(){z(a,f,g)},c.pace)}else c.auto=false}function o(a,d){u=A(a);v=A(d);if(d.length>a.length)for(var b=d.length-
a.length;b>0;){var e=v[d.length-b],f=Number(d.length-b+1)-1;f%3==0&&jQuery(i).prepend('<ul class="cd"><li class="s"></li></ul>');jQuery(i).prepend('<ul class="cd" id="d'+f+'"><li class="t"></li><li class="b"></li></ul>');jQuery(i+" #d"+f+" li.t").css({"background-position":"0 -"+e*p+"px"});jQuery(i+" #d"+f+" li.b").css({"background-position":"0 -"+e*m+"px"});b--}if(d.length<a.length)for(b=a.length-d.length;b>0;){jQuery(i+" #d"+(a.length-b)).remove();e=jQuery(i+" li").first();e.hasClass("s")&&e.parent("ul").remove();
b--}for(b=0;b<u.length;b++)v[b]!=u[b]&&I(b,u[b],v[b])}function I(a,d,b){function e(){if(g<7){n=g<3?"t":"b";jQuery(i+" #d"+a+" li."+n).css("background-position",q[g]);g++;g!=3?setTimeout(e,f):e()}}var f,g=0,n,q=["-"+r+"px -"+d*p+"px",r*-2+"px -"+d*p+"px","0 -"+b*p+"px","-"+r+"px -"+d*m+"px",r*-2+"px -"+b*m+"px",r*-3+"px -"+b*m+"px","0 -"+b*m+"px"];if(c.auto===true&&c.pace<=300)switch(a){case 0:f=c.pace/6;break;case 1:f=c.pace/5;break;case 2:f=c.pace/4;break;case 3:f=c.pace/3;break;default:f=c.pace/
2}else f=80;f=f>80?80:f;e()}function A(a){for(var d=[],b=0;b<a.length;b++){E=a.length-(b+1);F=a.length-b;d[b]=a.substring(E,F)}return d}function G(a,d,b,e,f){var g={result:true};g.cond1=a/d>=1?true:false;g.cond2=d*b<=a?true:false;g.cond3=Math.abs(d*b-a)<=5?true:false;g.cond4=Math.abs(d*e-f)<=100?true:false;g.cond5=d*e<=f?true:false;for(a=1;a<=5;a++)if(g["cond"+a]===false)g.result=false;return g}function l(a){return!isNaN(parseFloat(a))&&isFinite(a)}function B(){clearTimeout(k);k=null}var w={value:0,
inc:1,pace:1E3,auto:true,debug:false},c=H||{},i=y&&y!=""?"#"+y:"#counter",s;for(s in w)c[s]=s in c?c[s]:w[s];var p=39,m=64,r=53,u=[],v=[],E,F,j,h,k=null;this.setValue=function(a){if(l(a)){j=c.value.toString();h=a.toString();c.value=a;o(j,h)}return this};this.setIncrement=function(a){c.inc=l(a)?a:w.inc;return this};this.setPace=function(a){c.pace=l(a)?a:w.pace;return this};this.setAuto=function(a){if(a&&!c.atuo){c.auto=true;t()}if(!a&&c.auto){k&&B();c.auto=false}return this};this.step=function(){c.auto||
t();return this};this.add=function(a){if(l(a)){j=c.value.toString();c.value+=a;h=c.value.toString();o(j,h)}return this};this.subtract=function(a){if(l(a)){j=c.value.toString();c.value-=a;if(c.value>=0)h=c.value.toString();else{h="0";c.value=0}o(j,h)}return this};this.incrementTo=function(a,d,b){k&&B();if(typeof d!="undefined"){d=l(d)?d*1E3:1E4;b=typeof b!="undefined"&&l(b)?b:c.pace;var e=typeof a!="undefined"&&l(a)?a-c.value:0,f,g,n,q,C,D=0,x={pace:0,inc:0};b=d/e>b?Math.round(d/e/10)*10:b;f=Math.floor(d/
b);g=Math.round(e/f);n=Math.abs(e-f*g)+Math.abs(f*b-d);C=G(e,f,g,b,d);if(e>0){for(;C.result===false&&D<100;){b+=10;f=Math.floor(d/b);g=Math.round(e/f);q=Math.abs(e-f*g)+Math.abs(f*b-d);C=G(e,f,g,b,d);if(q<n){n=q;x.pace=b;x.inc=g}D++}if(D==100){c.inc=x.inc;c.pace=x.pace}else{c.inc=g;c.pace=b}z(a,true,f)}}else z(a)};this.getValue=function(){return c.value};this.stop=function(){k&&B();return this};(function(a){for(var d=a.toString().length,b=1,e=0;e<d;e++){jQuery(i).prepend('<ul class="cd" id="d'+e+
'"><li class="t"></li><li class="b"></li></ul>');b!=d&&b%3==0&&jQuery(i).prepend('<ul class="cd"><li class="s"></li></ul>');b++}a=A(a.toString());for(e=0;e<d;e++){jQuery(i+" #d"+e+" li.t").css({"background-position":"0 -"+a[e]*p+"px"});jQuery(i+" #d"+e+" li.b").css({"background-position":"0 -"+a[e]*m+"px"})}if(c.auto===true)k=setTimeout(t,c.pace)})(c.value)};        
        