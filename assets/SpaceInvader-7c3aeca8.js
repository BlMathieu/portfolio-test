import{j as u,o as v,c as g,b as a}from"./index-bfb6fc1c.js";const y=""+new URL("vaisseau-32658d30.png",import.meta.url).href;const x={__name:"SpaceInvader",setup(h){return u(()=>{const c=document.querySelector("#listeMonstre"),n=document.querySelector("#vaisseau");n.src="./../space/vaisseau.png";let d=document.querySelector("#space"),l=new Array,r=new Array;const p=document.querySelector("#space");function m(){let e=[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1],[1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1],[1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1],[1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1],[1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0],[1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1],[1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1],[1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1],[1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0]];for(let s=0;s<e.length;s++){let o=document.createElement("div");o.classList.add("divMonstre"),c.appendChild(o);for(let i=0;i<e[0].length;i++)if(e[s][i]===1){let t=document.createElement("img");t.src="./../space/monstre.png",t.classList.add("monstre"),t.style.paddingLeft="5px",l.push(t),o.appendChild(t)}else{let t=document.createElement("img");t.src="./../space/monstre.png",t.classList.add("monstre"),t.style.visibility="hidden",t.style.paddingLeft="5px",o.appendChild(t)}}}function f(){for(let e=0;e<r.length;e++){const s=r[e];if(s.offsetTop<=d.offsetTop)s.remove();else{s.style.top=s.offsetTop-10+"px";for(let o=0;o<l.length;o++){const i=l[o],t=s.offsetLeft>=i.offsetLeft&&s.offsetLeft<=i.offsetLeft+i.offsetWidth;i.offsetTop>=s.offsetTop&&t&&(r[e].remove(),l[o].style.visibility="hidden",l.splice(l.indexOf(l[o]),1))}}}}m(),f(),setInterval(()=>{f()},1e3/60),p.onclick=()=>{let e=document.createElement("img");e.src="./../space/missile.png",e.classList.add("missile"),e.style.left=n.offsetLeft+10+"px",e.style.top=n.offsetTop-10+"px",r.push(e),d.appendChild(e)},p.addEventListener("mousemove",e=>{e.pageX<window.innerWidth+n.offsetWidth*.5&&(n.style.left=Number(e.pageX)-65+"px")})}),(c,n)=>(v(),g("section",null,n[0]||(n[0]=[a("div",{id:"space"},[a("div",{id:"listeMonstre"}),a("div",{id:"footerSpace"},[a("img",{id:"vaisseau",src:y})])],-1)])))}};export{x as default};
