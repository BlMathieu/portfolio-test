import{l as u,o as v,c as _,e as a}from"./index-9305dcd5.js";const g=""+new URL("vaisseau-32658d30.png",import.meta.url).href;const h=a("div",{id:"space"},[a("div",{id:"listeMonstre"}),a("div",{id:"footerSpace"},[a("img",{id:"vaisseau",src:g})])],-1),y=[h],S={__name:"SpaceInvader",setup(L){return u(()=>{const d=document.querySelector("#listeMonstre"),l=document.querySelector("#vaisseau");l.src="./../space/vaisseau.png";let r=document.querySelector("#space"),i=new Array,c=new Array;const p=document.querySelector("#space");function m(){let e=[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1],[1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1],[1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1],[1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1],[1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0],[1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1],[1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1],[1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1],[1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0]];for(let s=0;s<e.length;s++){let o=document.createElement("div");o.classList.add("divMonstre"),d.appendChild(o);for(let n=0;n<e[0].length;n++)if(e[s][n]===1){let t=document.createElement("img");t.src="./../space/monstre.png",t.classList.add("monstre"),t.style.paddingLeft="5px",i.push(t),o.appendChild(t)}else{let t=document.createElement("img");t.src="./../space/monstre.png",t.classList.add("monstre"),t.style.visibility="hidden",t.style.paddingLeft="5px",o.appendChild(t)}}}function f(){for(let e=0;e<c.length;e++){const s=c[e];if(s.offsetTop<=r.offsetTop)s.remove();else{s.style.top=s.offsetTop-10+"px";for(let o=0;o<i.length;o++){const n=i[o],t=s.offsetLeft>=n.offsetLeft&&s.offsetLeft<=n.offsetLeft+n.offsetWidth;n.offsetTop>=s.offsetTop&&t&&(c[e].remove(),i[o].style.visibility="hidden",i.splice(i.indexOf(i[o]),1))}}}}m(),f(),setInterval(()=>{f()},1e3/60),p.onclick=()=>{let e=document.createElement("img");e.src="./../space/missile.png",e.classList.add("missile"),e.style.left=l.offsetLeft+10+"px",e.style.top=l.offsetTop-10+"px",c.push(e),r.appendChild(e)},p.addEventListener("mousemove",e=>{e.pageX<window.innerWidth+l.offsetWidth*.5&&(l.style.left=Number(e.pageX)-65+"px")})}),(d,l)=>(v(),_("section",null,y))}};export{S as default};
