import{n as e}from"./rolldown-runtime-jpDsebLB.js";import{A as t,C as n,D as r,E as i,O as a,S as o,T as s,_ as c,a as l,b as u,c as d,d as f,f as p,g as m,h,i as g,j as _,k as v,l as y,m as b,n as x,o as S,p as C,r as w,s as T,t as ee,u as E,v as D,w as O,x as k,y as A}from"./react-vendor-6xAwep1X.js";import{t as j}from"./bootstrap-vendor-CBi0Iu4n.js";import{t as M}from"./vendor-DChmyKvI.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var N=e(_(),1),P=t(),te=v(),F=n(),I=(0,N.createContext)(),ne=()=>{let e=(0,te.c)(1),t=(0,N.useContext)(I);if(!t){console.error(`useCart must be used within a CartProvider`);let t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t={cartItems:[],addToCart:R,removeFromCart:z,updateQuantity:B,clearCart:V,getCartTotal:H,getCartCount:U},e[0]=t):t=e[0],t}return t},L=e=>{let t=(0,te.c)(23),{children:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=[],t[0]=r):r=t[0];let[i,a]=(0,N.useState)(r),o,s;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(o=()=>{try{let e=localStorage.getItem(`cart`);e&&a(JSON.parse(e))}catch(e){console.error(`Error loading cart from localStorage:`,e),localStorage.removeItem(`cart`)}},s=[],t[1]=o,t[2]=s):(o=t[1],s=t[2]),(0,N.useEffect)(o,s);let c,l;t[3]===i?(c=t[4],l=t[5]):(c=()=>{try{localStorage.setItem(`cart`,JSON.stringify(i))}catch{}},l=[i],t[3]=i,t[4]=c,t[5]=l),(0,N.useEffect)(c,l);let u;t[6]===i?u=t[7]:(u=e=>{if(!(!e||!e.id))if(i.find(t=>t.id===e.id))a(t=>t.map(t=>t.id===e.id?{...t,quantity:t.quantity+1}:t));else{let t;if(typeof e.price==`string`){let n=e.price.replace(/[^\d]/g,``).trim();t=parseInt(n)||0}else t=e.price||0;let n={id:e.id,name:e.name||`Unknown Product`,price:t,quantity:1,image:e.image||null,category:e.category||`unknown`};a(e=>[...e,n])}},t[6]=i,t[7]=u);let d=u,f;t[8]===Symbol.for(`react.memo_cache_sentinel`)?(f=e=>{a(t=>t.filter(t=>t.id!==e))},t[8]=f):f=t[8];let p=f,m;t[9]===Symbol.for(`react.memo_cache_sentinel`)?(m=(e,t)=>{t===0?p(e):a(n=>n.map(n=>n.id===e?{...n,quantity:t}:n))},t[9]=m):m=t[9];let h=m,g;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(g=()=>{a([])},t[10]=g):g=t[10];let _=g,v;t[11]===i?v=t[12]:(v=()=>i.reduce(W,0),t[11]=i,t[12]=v);let y=v,b;t[13]===i?b=t[14]:(b=()=>i.reduce(re,0),t[13]=i,t[14]=b);let x=b,S;t[15]!==d||t[16]!==i||t[17]!==x||t[18]!==y?(S={cartItems:i,addToCart:d,removeFromCart:p,updateQuantity:h,clearCart:_,getCartTotal:y,getCartCount:x},t[15]=d,t[16]=i,t[17]=x,t[18]=y,t[19]=S):S=t[19];let C=S,w;return t[20]!==n||t[21]!==C?(w=(0,F.jsx)(I.Provider,{value:C,children:n}),t[20]=n,t[21]=C,t[22]=w):w=t[22],w};function R(){return console.error(`addToCart not available - CartContext not found`)}function z(){return console.error(`removeFromCart not available - CartContext not found`)}function B(){return console.error(`updateQuantity not available - CartContext not found`)}function V(){return console.error(`clearCart not available - CartContext not found`)}function H(){return 0}function U(){return 0}function W(e,t){return e+t.price*t.quantity}function re(e,t){return e+t.quantity}j();var G=e(M(),1),K=`/leathers/assets/c1-DmpJLeq7.jpg`,ie=`data:image/jpeg;base64,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`,ae=`/leathers/assets/s2-6p91qmai.jpg`,q=`/leathers/assets/s3-CKmGfHwb.jpg`,oe=`/leathers/assets/s4-hXu3Unu1.jpg`,se=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgArADIAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/VH/AD0o/wA9KPzo/OgA/wA9KP8APSj86PzoAP8APSj/AD0o/Oj86AD/AD0o/wA9KPzo/OgA/wA9KP8APSj86PzoAP8APSj/AD0o/Oj86AOa1r4k+F/DvifT/Dupa3aWet36CS3spG/eOpfYrH+6Gc7QWxubgZPFdL/npXk/gPwxbeJtZ+LepXQ3y61qzaUJ/wCJLW3tYoVjB9FlNy4/2pGNeieFNUk1zwvo+pTDbLeWcNw4XoGdAxx+dAGp/npR/npR+dH50AH+elH+elH50fnQAf56Uf56UfnR+dAB/npR/npR+dH50AH+elH+elH50fnQAf56UUfnRQAv50fnSZHvRke9AC/nR+dJke9GR70AL+dH50mR70ZHvQAv50fnSZHvRke9AC/nR+dJke9GR70AL+dH50mR70ZHvQBwPwSG/wAIalcH5muPEWuSbv7y/wBqXIQ/98KtbHw5c/8ACKpD/DaXd5ZJj+5DdSxL/wCOoKxvgOd3wr0iY9biS6uc+vmXMr5/8erW+HzGKy1m0b71trN9n/tpM04/SYUAdV+dH50mR70ZHvQAv50fnSZHvRke9AC/nR+dJke9GR70AL+dH50mR70ZHvQAv50fnSZHvRke9AC/nRSZHvRQAv50fnSceho49DQAv50fnSceho49DQAv50fnSceho49DQAv50fnSceho49DQAv50fnSceho49DQAv50HgUnHoayPGGqLofhHW9RbhbOxnuCfQJGzf0oA5z4DwmL4KeBCclpdFtJ2/wB54lc/qxqTwFqiXXjP4kWWNslprUBx6q+m2ZB/PePwrX+Hujv4e8A+GtKlXbJY6ZbWzD0KRKp/lXH+BWEPx1+KVtz89vo93j/eimjz/wCQP0oA9Q/Oj86Tj0NHHoaAF/Oj86Tj0NHHoaAF/Oj86Tj0NHHoaAF/Oj86Tj0NHHoaAF/Oj86Tj0NHHoaAF/Oik49DRQAY9qMe1GPajHtQAY9qMe1GPajHtQAY9qMe1GPajHtQAY9qMe1GPajHtQAY9qMe1GPajHtQAY9q8z/aK8UWnhv4W6hbXVzbWf8AbrpoST3cvlxxG5zG0hbB+4hd8HGdmMjNemY9q+b/ANubwnbeN/A/w/0S4UF7/wAcaVbRbnKrlzIrbsdRsL8UAfSGPavLNDxYftOeMYj/AMxHwppFwg94brUEf9JY/wA69Tx7V5B4oP8AYn7U3gK8B/d634b1bS3TtvhmtLiM/wDfPn/nQB6/j2ox7UY9qMe1ABj2ox7UY9qMe1ABj2ox7UY9qMe1ABj2ox7UY9qMe1ABj2ox7UY9qMe1ABj2oox7UUAGPajHtS49qMe1ACY9qMe1Lj2ox7UAJj2ox7UuPajHtQAmPajHtS49qMe1ACY9qMe1Lj2ox7UAJj2rwv8Aaoi82f4NJ0P/AAsXSWH4JcH+QNe649q8C/a1spb3/hUEUF9NYSv8QNMRZIMEglJznn2DD8TQB75j2rxX44ynSfi/8CNVPEf/AAkV5pr+/wBo0y6Cj/vqNT+Fe149q+dP2x9SbRbz4E3qnb/xc7SLdv8AdljuIz+jGgD6Kx7UY9qXHtRj2oATHtRj2pce1GPagBMe1GPalx7UY9qAEx7UY9qXHtRj2oATHtRj2pce1GPagBMe1FLj2ooAT8qPyox9KMfSgA/Kj8qMfSjH0oAPyo/KjH0ox9KAD8qPyox9KMfSgA/Kj8qMfSjH0oAPyrx74/aSNZ8VfBiDzMFPGsVwIwud3lWF7Ln2wENew4+leTfFO6D/ABp+Cthgbjqep3ufaPTLiP8AncCgD1n8q+Xv+Cgkn2H4bfD7Vc4Ol+PtGvQfTa7j/wBmr6hx9K+Uv+Cm0Uq/so6teQcS2GqWF0rDsROoB/NhQB9W/lR+VVdLv49W0yzvoceVcwpMnP8ACygj+dWsfSgA/Kj8qMfSjH0oAPyo/KjH0ox9KAD8qPyox9KMfSgA/Kj8qMfSjH0oAPyoox9KKAD8qPyowPajA9qAD8qPyowPajA9qAD8qPyowPajA9qAD8qPyowPajA9qAD8qPyowPajA9qAD8q8E+MGvWmi/tRfBNr6eO1tF03xFK80rbUXEVoBkn6n8697wPavi/4qa1p/xo/4KC+A/h7LbJJZ+B9LudVvvOUETSTxRt5YGRwB9nOec5YYxmgDv739ufw1PrV3p3hj4f8AxE8ci1kMUt34f8OtLCGBwR87owIPHKivLf2uP2ifDXxY/Zm8deGbnQvFHgzxDJb2tzBpvivRZbGSRY7yAsUY5Q46fe5zxX29a2kFjbRW9tDHb28ShI4olCoijoABwB7V8tf8FMPDqa3+yxqt028HSdQtb1DGcEMWMI/D99z7UxHtvwB1ga/8C/h5qOctc+H7CRs/3jbpu/XNd7+VfP8A+wNrM2v/ALIvw5ubiYzyJZy225jkgRTyRBT9NmB7AV9AYHtSGH5UflRge1GB7UAH5UflRge1GB7UAH5UflRge1GB7UAH5UflRge1GB7UAH5UUYHtRQAufpRn6UZ96M+9ABn6UZ+lGfejPvQAZ+lGfpRn3oz70AGfpRn6UZ96M+9AHz1+3V8Yde+C/wACJdW8N3R0/Vb/AFK20tL9EV3tUkLF5FDAjdtQgEjgtnqK/KvUvj98YYLqR4fix4ykBOeNbuQPy34r9I/+CoZiP7KWobiPNGrWLRA9d3m/4E1+XOowLBZwMB8zDofpVIlmi37SvxmIJ/4Wp4xBH/Ucuf8A4uuUm+J3jmLxE/jCHxjrsfjG4PkS65FqMq3rx7VQK0obeRtVRjPRQO1VJiAXIUc9RiqyTGPAKkruyOP9nFVYm51T/tAfGWUBn+K3jZj76/dD/wBqVi+I/i98TfEmnSabr3xD8V6xo87J9osb7Wbm4glAYMN0bOVbDAHkcEA9qznYY5GOaU4kjfHLYyKLIZqW/wAT/Gunwx6foPirxDpOlRqPLsbLU54YEJ5baisFGSSTgckk0q+KfG+rOVu/FuuTE9fN1Kdv5tWbYXWwjIOQ3f0H+TWxYzK1wDyDnk0rAeofALxx4g+F3xa8B6hYa7qQub3XbG0uY2vJClxBJOiSxOhOGDIzdRwcEcgGv2/z9K/DD4YaPL4h+OXwl0+IFvM8V6fv9QizqzH8FUmv3Pz71LKQZ+lGfpRn3oz70hhn6UZ+lGfejPvQAZ+lGfpRn3oz70AGfpRRn3ooATP0oz9KM+9GfegAz9KM/SjPvRn3oAM/SjP0oz70Z96ADP0oz9KM+9GfegD4q/4KOpdeNfgl4rura7MWh+ELixMqKgIvL+W6gQpuPQQxSZOOrTYJzGRX5s6rIJrWE9AB27V+sX/BRGKG0/Y/8axQxpEslxYttRQoLNfwux47k5JPckmvyQvZgtjCp6lapEMxWyHbng9ailICgHkdKJZMMagd8irEI7HrzT4n2rj1qGRuOvNN80j6UDLsXzL7+tXrBiLlelZUc+PpVu0n3XCHPfOaQHt37P8A8/7THwhjUmND4htnJBKnIPTPv0x3yRX7a5+lfhL8NNSOmfHP4UX4bZ5PijTXY57faY8/pn86/drPvUMpBn6UZ+lGfejPvSGGfpRn6UZ96M+9ABn6UZ+lGfejPvQAZ+lFGfeigBaKM+9GfegAooz70Z96ACijPvRn3oAKKM+9GfegD5d/4KT3Hkfsn6+p/wCWt/p8eD3/ANJQ/wBK/InUrnJReiqMCv1Y/wCCpl6bX9mGKNc/6R4gsYzj0HmP/wCyV+R2o3/mTHn8c1SJY2aTJOahMozVWW6BP3qhN0uDzTEXHn96VZc49azmul7Gl+1D6UAaJnABz9KdDfeXKrA9+uazTOGHJzVi2vbWGFY5NPimcdZC7An8jigZ2ei6v5XivwleFgq2+r2khIPTEqkGv6EK/m4NxItoVRiHQq6EdipzkV/Rt4b1U634e0vUWXY15axXBX0LoGx+tSxo0aKM+9GfekMKKM+9GfegAooz70Z96ACijPvRQAUUY9zRj3NABRRj3NGPc0AFFGPc0Y9zQAUUY9zRj3NAHl37SHwD0r9pH4X3fg3Vr640sPNHd21/bKHe3nTO1tp4YYLArxkMeQcGvhO6/wCCOmuvI3l/FayZM8FtEdSfw841+nuPc0Y9zQB+W8n/AARs8Q4yvxS09j6HSHH/ALUqrJ/wRt8Vj7nxM0lvZtOlH/sxr9Use5ox7mmKx+V1v/wRs8Uk/vviZpSD/pnpsjfzcVdj/wCCNWtj73xWsx9NFY/+1q/UTHuaMe5oCx+YUf8AwRo1MHLfFqAH20En/wBr0r/8EbdV3fL8WbYj1OgsP/a9fp5j3NGPc0gsfmx4Z/4I6Lb61aS6/wDFF73SkkDT2tho/kyzLnlRI0zBM+u0/Sv0jtreO0t4oIUEcMShERRwqgYAFSY9zRj3NAwoox7mjHuaACijHuaMe5oAKKMe5ox7mgAoox7migD/2Q==`,J=`/leathers/assets/b2-BgYR50Ru.jpg`,ce=`/leathers/assets/b3-dhhEK1SL.jpg`,le=`/leathers/assets/b4-B6g0j3WN.jpg`,ue=`/leathers/assets/b5-D__gg3ib.jpg`,de=`/leathers/assets/b6-D5VBB2VJ.jpg`,fe=`/leathers/assets/b7-CYWS2UtT.jpg`,pe=`/leathers/assets/t1-SL6APrK8.jpg`,me=`data:image/jpeg;base64,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`,he=`/leathers/assets/t3-1tKBuIzM.jpg`,ge=()=>{let e=(0,te.c)(41),[t,n]=(0,N.useState)(``),[r,i]=(0,N.useState)(!1),a;e[0]===t?a=e[1]:(a=e=>{e.preventDefault(),t&&(i(!0),setTimeout(()=>{i(!1),n(``)},3e3))},e[0]=t,e[1]=a);let c=a,u;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(u=(0,F.jsx)(`div`,{className:`footer-overlay`}),e[2]=u):u=e[2];let d,p;e[3]===Symbol.for(`react.memo_cache_sentinel`)?(d=(0,F.jsx)(`div`,{className:`brand-logo mb-3`,children:(0,F.jsxs)(`h2`,{className:`mb-0`,children:[(0,F.jsx)(`span`,{className:`brand-leather`,children:`LEATHER`}),(0,F.jsx)(`span`,{className:`brand-luxe`,children:`LUXE`})]})}),p=(0,F.jsx)(`p`,{className:`footer-description`,children:`Crafting premium leather goods with exceptional quality and timeless elegance. Experience luxury in every stitch.`}),e[3]=d,e[4]=p):(d=e[3],p=e[4]);let h;e[5]===Symbol.for(`react.memo_cache_sentinel`)?(h=(0,F.jsx)(`a`,{href:`#`,className:`social-link`,"aria-label":`Facebook`,children:(0,F.jsx)(y,{})}),e[5]=h):h=e[5];let g;e[6]===Symbol.for(`react.memo_cache_sentinel`)?(g=(0,F.jsx)(`a`,{href:`#`,className:`social-link`,"aria-label":`Instagram`,children:(0,F.jsx)(f,{})}),e[6]=g):g=e[6];let _;e[7]===Symbol.for(`react.memo_cache_sentinel`)?(_=(0,F.jsx)(`a`,{href:`#`,className:`social-link`,"aria-label":`LinkedIn`,children:(0,F.jsx)(C,{})}),e[7]=_):_=e[7];let v;e[8]===Symbol.for(`react.memo_cache_sentinel`)?(v=(0,F.jsx)(`a`,{href:`#`,className:`social-link`,"aria-label":`YouTube`,children:(0,F.jsx)(o,{})}),e[8]=v):v=e[8];let b;e[9]===Symbol.for(`react.memo_cache_sentinel`)?(b=(0,F.jsxs)(`div`,{className:`footer-brand`,"data-aos":`fade-up`,children:[d,p,(0,F.jsxs)(`div`,{className:`social-links`,children:[h,g,_,v,(0,F.jsx)(`a`,{href:`#`,className:`social-link`,"aria-label":`Pinterest`,children:(0,F.jsx)(m,{})})]})]}),e[9]=b):b=e[9];let x;e[10]===Symbol.for(`react.memo_cache_sentinel`)?(x=(0,F.jsx)(`h4`,{className:`footer-title`,children:`Quick Links`}),e[10]=x):x=e[10];let S;e[11]===Symbol.for(`react.memo_cache_sentinel`)?(S=(0,F.jsxs)(`div`,{className:`footer-column`,"data-aos":`fade-up`,"data-aos-delay":`100`,children:[x,(0,F.jsxs)(`ul`,{className:`footer-links`,children:[(0,F.jsx)(`li`,{children:(0,F.jsx)(s,{to:`/`,className:`footer-link`,children:`Home`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(s,{to:`/shop`,className:`footer-link`,children:`Shop`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(s,{to:`/about`,className:`footer-link`,children:`About Us`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(s,{to:`/contact`,className:`footer-link`,children:`Contact`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(s,{to:`/cart`,className:`footer-link`,children:`Cart`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(s,{to:`/login`,className:`footer-link`,children:`Account`})})]})]}),e[11]=S):S=e[11];let w;e[12]===Symbol.for(`react.memo_cache_sentinel`)?(w=(0,F.jsx)(`h4`,{className:`footer-title`,children:`Categories`}),e[12]=w):w=e[12];let T;e[13]===Symbol.for(`react.memo_cache_sentinel`)?(T=(0,F.jsxs)(`div`,{className:`footer-column`,"data-aos":`fade-up`,"data-aos-delay":`200`,children:[w,(0,F.jsxs)(`ul`,{className:`footer-links`,children:[(0,F.jsx)(`li`,{children:(0,F.jsx)(`a`,{href:`#`,className:`footer-link`,children:`Leather Bags`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(`a`,{href:`#`,className:`footer-link`,children:`Wallets & Belts`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(`a`,{href:`#`,className:`footer-link`,children:`Accessories`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(`a`,{href:`#`,className:`footer-link`,children:`Custom Orders`})}),(0,F.jsx)(`li`,{children:(0,F.jsx)(`a`,{href:`#`,className:`footer-link`,children:`New Arrivals`})})]})]}),e[13]=T):T=e[13];let ee;e[14]===Symbol.for(`react.memo_cache_sentinel`)?(ee=(0,F.jsx)(`h4`,{className:`footer-title`,children:`Contact Info`}),e[14]=ee):ee=e[14];let E;e[15]===Symbol.for(`react.memo_cache_sentinel`)?(E=(0,F.jsxs)(`div`,{className:`contact-item`,children:[(0,F.jsx)(`i`,{className:`bi bi-geo-alt-fill contact-icon`}),(0,F.jsx)(`span`,{children:`23 Valluvar Street, Tirupattur, 634560`})]}),e[15]=E):E=e[15];let D;e[16]===Symbol.for(`react.memo_cache_sentinel`)?(D=(0,F.jsxs)(`div`,{className:`contact-item`,children:[(0,F.jsx)(`i`,{className:`bi bi-telephone-fill contact-icon`}),(0,F.jsx)(`span`,{children:`+91 98423 65882`})]}),e[16]=D):D=e[16];let O;e[17]===Symbol.for(`react.memo_cache_sentinel`)?(O=(0,F.jsxs)(`div`,{className:`contact-item`,children:[(0,F.jsx)(`i`,{className:`bi bi-envelope-fill contact-icon`}),(0,F.jsx)(`span`,{children:`luxuryluxe@gmail.com`})]}),e[17]=O):O=e[17];let k;e[18]===Symbol.for(`react.memo_cache_sentinel`)?(k=(0,F.jsxs)(`div`,{className:`footer-column`,"data-aos":`fade-up`,"data-aos-delay":`300`,children:[ee,(0,F.jsxs)(`div`,{className:`contact-info`,children:[E,D,O,(0,F.jsxs)(`div`,{className:`contact-item`,children:[(0,F.jsx)(`i`,{className:`bi bi-clock-fill contact-icon`}),(0,F.jsx)(`span`,{children:`Mon-Fri: 9AM-6PM, Sat: 10AM-4PM`})]})]})]}),e[18]=k):k=e[18];let A,j;e[19]===Symbol.for(`react.memo_cache_sentinel`)?(A=(0,F.jsx)(`h4`,{className:`footer-title`,children:`Newsletter`}),j=(0,F.jsx)(`p`,{className:`newsletter-description`,children:`Subscribe to get special offers, new product announcements, and exclusive deals.`}),e[19]=A,e[20]=j):(A=e[19],j=e[20]);let M;e[21]===Symbol.for(`react.memo_cache_sentinel`)?(M=e=>n(e.target.value),e[21]=M):M=e[21];let P;e[22]===t?P=e[23]:(P=(0,F.jsx)(`input`,{type:`email`,placeholder:`Enter your email`,value:t,onChange:M,required:!0,className:`newsletter-input`}),e[22]=t,e[23]=P);let I;e[24]===Symbol.for(`react.memo_cache_sentinel`)?(I=(0,F.jsx)(`button`,{type:`submit`,className:`newsletter-btn`,children:(0,F.jsx)(l,{style:{width:`22px`,height:`22px`,color:`#ffffff`,fill:`#ffffff`,display:`block`,opacity:1,visibility:`visible`}})}),e[24]=I):I=e[24];let ne;e[25]===P?ne=e[26]:(ne=(0,F.jsxs)(`div`,{className:`newsletter-input-group`,children:[P,I]}),e[25]=P,e[26]=ne);let L;e[27]===r?L=e[28]:(L=r&&(0,F.jsx)(`div`,{className:`newsletter-success`,children:`Successfully subscribed!`}),e[27]=r,e[28]=L);let R;e[29]!==c||e[30]!==ne||e[31]!==L?(R=(0,F.jsx)(`div`,{className:`container position-relative`,children:(0,F.jsxs)(`div`,{className:`footer-content`,children:[b,S,T,k,(0,F.jsxs)(`div`,{className:`footer-column newsletter-column`,"data-aos":`fade-up`,"data-aos-delay":`400`,children:[A,j,(0,F.jsxs)(`form`,{className:`newsletter-form`,onSubmit:c,children:[ne,L]})]})]})}),e[29]=c,e[30]=ne,e[31]=L,e[32]=R):R=e[32];let z;e[33]===Symbol.for(`react.memo_cache_sentinel`)?(z=(0,F.jsx)(`div`,{className:`copyright`,children:(0,F.jsx)(`p`,{children:`© 2026 Leather Luxe. All rights reserved. Crafted with passion for excellence.`})}),e[33]=z):z=e[33];let B;e[34]===Symbol.for(`react.memo_cache_sentinel`)?(B=(0,F.jsx)(`div`,{className:`footer-bottom`,children:(0,F.jsx)(`div`,{className:`container`,children:(0,F.jsxs)(`div`,{className:`footer-bottom-content`,children:[z,(0,F.jsxs)(`div`,{className:`footer-bottom-links`,children:[(0,F.jsx)(`a`,{href:`#`,className:`bottom-link`,children:`Privacy Policy`}),(0,F.jsx)(`a`,{href:`#`,className:`bottom-link`,children:`Terms of Service`}),(0,F.jsx)(`a`,{href:`#`,className:`bottom-link`,children:`Shipping Policy`}),(0,F.jsx)(`a`,{href:`#`,className:`bottom-link`,children:`Refund Policy`}),(0,F.jsx)(`a`,{href:`#`,className:`bottom-link`,children:`FAQ`})]})]})})}),e[34]=B):B=e[34];let V;e[35]===R?V=e[36]:(V=(0,F.jsxs)(`footer`,{className:`footer-section`,children:[u,R,B]}),e[35]=R,e[36]=V);let H,U;e[37]===Symbol.for(`react.memo_cache_sentinel`)?(H=(0,F.jsx)(`div`,{className:`marquee-section`,children:(0,F.jsx)(`div`,{className:`marquee-content`,children:(0,F.jsxs)(`div`,{className:`marquee-track`,children:[(0,F.jsx)(`span`,{className:`marquee-text`,children:`PREMIUM LEATHER PRODUCTS | FREE SHIPPING ON ORDERS OVER $100 | 100% GENUINE LEATHER | 30-DAY RETURN POLICY | HANDCRAFTED QUALITY | WORLDWIDE DELIVERY | LUXURY LEATHER GOODS | SATISFACTION GUARANTEED | EXCLUSIVE DESIGNS | PREMIUM LEATHER PRODUCTS | FREE SHIPPING ON ORDERS OVER $100 | 100% GENUINE LEATHER | 30-DAY RETURN POLICY | HANDCRAFTED QUALITY | WORLDWIDE DELIVERY | LUXURY LEATHER GOODS | SATISFACTION GUARANTEED | EXCLUSIVE DESIGNS`}),(0,F.jsx)(`span`,{className:`marquee-text`,children:`PREMIUM LEATHER PRODUCTS | FREE SHIPPING ON ORDERS OVER $100 | 100% GENUINE LEATHER | 30-DAY RETURN POLICY | HANDCRAFTED QUALITY | WORLDWIDE DELIVERY | LUXURY LEATHER GOODS | SATISFACTION GUARANTEED | EXCLUSIVE DESIGNS | PREMIUM LEATHER PRODUCTS | FREE SHIPPING ON ORDERS OVER $100 | 100% GENUINE LEATHER | 30-DAY RETURN POLICY | HANDCRAFTED QUALITY | WORLDWIDE DELIVERY | LUXURY LEATHER GOODS | SATISFACTION GUARANTEED | EXCLUSIVE DESIGNS`})]})})}),U=(0,F.jsx)(`style`,{jsx:!0,children:`
        .footer-section {
          position: relative;
          background: linear-gradient(135deg, 
            rgba(20, 15, 12, 0.95) 0%, 
            rgba(45, 30, 25, 0.9) 25%,
            rgba(62, 39, 35, 0.85) 50%,
            rgba(80, 50, 40, 0.8) 75%,
            rgba(215, 168, 110, 0.25) 100%);
          backdrop-filter: blur(25px) saturate(180%);
          -webkit-backdrop-filter: blur(25px) saturate(180%);
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          border-bottom: 1px solid rgba(0, 0, 0, 0.3);
          margin-top: 80px;
          overflow: hidden;
          box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.2);
        }

        .footer-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(215, 168, 110, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(62, 39, 35, 0.2) 0%, transparent 50%);
          pointer-events: none;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr 1.5fr;
          gap: 40px;
          padding: 60px 0 40px;
          position: relative;
          z-index: 1;
        }

        .footer-brand {
          max-width: 350px;
        }

        .brand-logo h2 {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .brand-leather {
          color: #D7A86E;
        }

        .brand-luxe {
          color: #ffffff;
        }

        .footer-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 25px;
          font-family: 'Montserrat', sans-serif;
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-link {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          box-shadow: 
            0 4px 15px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .social-link:hover {
          background: rgba(215, 168, 110, 0.25);
          backdrop-filter: blur(15px) saturate(200%);
          -webkit-backdrop-filter: blur(15px) saturate(200%);
          color: #ffffff;
          transform: translateY(-4px) scale(1.05);
          box-shadow: 
            0 8px 30px rgba(215, 168, 110, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.25);
        }

        .footer-column {
          min-width: 0;
        }

        .footer-title {
          color: #ffffff;
          font-family: 'Playfair Display', serif;
          font-weight: 600;
          font-size: 1.2rem;
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 10px;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #D7A86E, transparent);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all 0.3s ease;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          display: inline-block;
        }

        .footer-link:hover {
          color: #D7A86E;
          transform: translateX(5px);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: rgba(255, 255, 255, 0.7);
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
        }

        .contact-icon {
          color: #D7A86E !important;
          margin-top: 2px;
          flex-shrink: 0;
          font-size: 18px !important;
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
          line-height: 1 !important;
        }

        .contact-icon::before {
          color: #D7A86E !important;
          font-size: 18px !important;
        }

        .newsletter-column {
          max-width: 300px;
        }

        .newsletter-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          margin-bottom: 20px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
        }

        .newsletter-form {
          position: relative;
        }

        .newsletter-input-group {
          display: flex;
          position: relative;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(15px) saturate(180%);
          -webkit-backdrop-filter: blur(15px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          overflow: hidden;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .newsletter-input {
          flex: 1;
          padding: 14px 20px;
          background: transparent;
          border: none;
          outline: none;
          color: #ffffff;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          font-weight: 400;
        }

        .newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
          font-weight: 300;
        }

        .newsletter-btn {
          padding: 14px 20px;
          background: linear-gradient(135deg, rgba(215, 168, 110, 0.9), rgba(62, 39, 35, 0.9));
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff !important;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex !important;
          align-items: center;
          justify-content: center;
          min-width: 55px;
          font-size: 1.2rem !important;
          box-shadow: 0 4px 15px rgba(215, 168, 110, 0.2);
          opacity: 1;
          visibility: visible;
        }

        .newsletter-btn svg,
        .newsletter-btn > svg,
        .newsletter-btn > svg:first-child,
        .newsletter-btn > svg:last-child {
          width: 22px !important;
          height: 22px !important;
          fill: #ffffff !important;
          color: #ffffff !important;
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
          min-width: 22px !important;
          min-height: 22px !important;
          position: relative !important;
          z-index: 10 !important;
        }

        /* Force visibility for all SVG elements in newsletter button */
        .newsletter-btn * {
          visibility: visible !important;
          opacity: 1 !important;
        }

        .newsletter-btn svg path {
          fill: #ffffff !important;
        }

        .newsletter-btn i,
        .newsletter-btn .fa,
        .newsletter-btn .fas,
        .newsletter-btn .far {
          color: #ffffff !important;
          font-size: 18px !important;
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
        }

        .newsletter-btn:hover {
          background: linear-gradient(135deg, rgba(62, 39, 35, 0.95), rgba(215, 168, 110, 0.95));
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(215, 168, 110, 0.3);
        }

        .newsletter-success {
          margin-top: 10px;
          color: #4CAF50;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          animation: fadeIn 0.3s ease;
        }

        .payment-section {
          padding: 30px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .payment-title {
          color: #ffffff;
          font-family: 'Playfair Display', serif;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .payment-methods {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .payment-icon {
          width: 52px;
          height: 34px;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.75);
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 0.7rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 4px 15px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .payment-icon:hover {
          background: rgba(215, 168, 110, 0.2);
          backdrop-filter: blur(15px) saturate(200%);
          -webkit-backdrop-filter: blur(15px) saturate(200%);
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 
            0 6px 20px rgba(215, 168, 110, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .footer-bottom {
          background: linear-gradient(135deg, 
            rgba(15, 10, 8, 0.9) 0%, 
            rgba(30, 20, 15, 0.85) 50%,
            rgba(45, 30, 25, 0.8) 100%);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          border-bottom: 1px solid rgba(0, 0, 0, 0.4);
          box-shadow: 0 -5px 25px rgba(0, 0, 0, 0.15);
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          flex-wrap: wrap;
          gap: 20px;
        }

        .copyright p {
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
        }

        .footer-bottom-links {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .bottom-link {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          transition: color 0.3s ease;
        }

        .bottom-link:hover {
          color: #D7A86E;
        }

        .back-to-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(215, 168, 110, 0.9), rgba(62, 39, 35, 0.9));
          backdrop-filter: blur(15px) saturate(180%);
          -webkit-backdrop-filter: blur(15px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff !important;
          cursor: pointer;
          display: flex !important;
          align-items: center;
          justify-content: center;
          box-shadow: 
            0 8px 30px rgba(215, 168, 110, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1000;
          font-size: 1.1rem;
          opacity: 1;
          visibility: visible;
        }

        .back-to-top:hover {
          transform: translateY(-5px) scale(1.05);
          background: linear-gradient(135deg, rgba(62, 39, 35, 0.95), rgba(215, 168, 110, 0.95));
          box-shadow: 
            0 12px 40px rgba(215, 168, 110, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.3);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        .marquee-section {
          background: linear-gradient(135deg, 
            rgba(62, 39, 35, 0.95) 0%, 
            rgba(215, 168, 110, 0.3) 25%,
            rgba(255, 215, 0, 0.2) 50%,
            rgba(215, 168, 110, 0.3) 75%,
            rgba(62, 39, 35, 0.95) 100%);
          backdrop-filter: blur(15px) saturate(180%);
          -webkit-backdrop-filter: blur(15px) saturate(180%);
          border-top: 2px solid rgba(255, 215, 0, 0.4);
          border-bottom: 2px solid rgba(215, 168, 110, 0.4);
          overflow: hidden;
          position: relative;
          padding: 18px 0;
          box-shadow: 
            0 -5px 20px rgba(215, 168, 110, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          width: 100%;
          max-width: 100vw;
        }

        .marquee-content {
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 100vw;
        }

        .marquee-track {
          display: flex;
          animation: marquee 30s linear infinite;
          white-space: nowrap;
          width: max-content;
        }

        .marquee-text {
          background: linear-gradient(90deg, 
            #FFD700 0%, 
            #FFA500 25%, 
            #FFD700 50%, 
            #FFA500 75%, 
            #FFD700 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          padding: 0 50px;
          display: inline-block;
          white-space: nowrap;
          text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
          animation: shimmer 3s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .marquee-section:hover .marquee-track {
          animation-play-state: paused;
        }

        /* Desktop-specific fixes */
        @media (min-width: 991px) {
          .newsletter-btn {
            min-width: 65px !important;
            font-size: 1.3rem !important;
          }
          
          .newsletter-btn svg {
            width: 22px !important;
            height: 22px !important;
            min-width: 22px !important;
            min-height: 22px !important;
          }
          
          .newsletter-btn i,
          .newsletter-btn .fa,
          .newsletter-btn .fas,
          .newsletter-btn .far {
            font-size: 20px !important;
          }
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .footer-content {
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 30px;
          }
          
          .footer-brand {
            grid-column: 1 / -1;
            max-width: 100%;
            text-align: center;
          }
          
          .social-links {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            padding: 40px 0 30px;
          }
          
          .footer-brand {
            grid-column: 1 / -1;
          }
          
          .newsletter-column {
            grid-column: 1 / -1;
            max-width: 100%;
          }
          
          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }
          
          .footer-bottom-links {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 25px;
            padding: 30px 0 20px;
          }
          
          .brand-logo h2 {
            font-size: 1.5rem;
          }
          
          .payment-methods {
            gap: 10px;
          }
          
          .footer-bottom-links {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
          
          .back-to-top {
            bottom: 20px !important;
            right: 20px !important;
            width: 48px !important;
            height: 48px !important;
            display: flex !important;
            opacity: 1 !important;
            visibility: visible !important;
            z-index: 9999 !important;
            color: #ffffff !important;
            font-size: 1rem !important;
          }

          .marquee-section {
            padding: 12px 0;
          }

          .marquee-text {
            font-size: 11px;
            letter-spacing: 1px;
            padding: 0 30px;
          }

          .marquee-track {
            animation: marquee 25s linear infinite;
          }
        }

        @media (max-width: 768px) {
          .marquee-text {
            font-size: 12px;
            letter-spacing: 1.5px;
            padding: 0 40px;
          }

          .marquee-track {
            animation: marquee 28s linear infinite;
          }
        }
      `}),e[37]=H,e[38]=U):(H=e[37],U=e[38]);let W;return e[39]===V?W=e[40]:(W=(0,F.jsxs)(F.Fragment,{children:[V,H,U]}),e[39]=V,e[40]=W),W};function Y(){let e=(0,te.c)(70),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=[],e[0]=t):t=e[0],(0,N.useRef)(t);let n;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=[],e[1]=n):n=e[1];let[,r]=(0,N.useState)(n),i;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(i=[],e[2]=i):i=e[2],(0,N.useState)(i);let a;e[3]===Symbol.for(`react.memo_cache_sentinel`)?(a=[],e[3]=a):a=e[3];let[o,c]=(0,N.useState)(a);(0,N.useState)(!1);let[l,u]=(0,N.useState)(0),{addToCart:d,getCartCount:f}=ne(),p;e[4]===o?p=e[5]:(p=e=>{o.find(t=>t.id===e.id)||c([...o,e])},e[4]=o,e[5]=p);let m=p,h,g;e[6]===Symbol.for(`react.memo_cache_sentinel`)?(h=()=>{G.default.init({duration:1e3,easing:`ease-in-out`,once:!0,offset:100}),fetch(`https://theleatherchef.in/products/manhattan-ikat-office-tote`).then(ve).then(e=>r(Array.isArray(e)?e:[])).catch(e=>{console.log(e),r([])})},g=[],e[6]=h,e[7]=g):(h=e[6],g=e[7]),(0,N.useEffect)(h,g);let _;e[8]===Symbol.for(`react.memo_cache_sentinel`)?(_={backgroundColor:`#3E2723`},e[8]=_):_=e[8];let v;e[9]===Symbol.for(`react.memo_cache_sentinel`)?(v=(0,F.jsxs)(s,{className:`navbar-brand text-white fw-bold`,to:`/`,children:[(0,F.jsx)(`span`,{style:{color:`#D7A86E`},children:`LEATHER`}),(0,F.jsx)(`span`,{style:{color:`#ffffff`},children:`LUXE`})]}),e[9]=v):v=e[9];let y;e[10]===Symbol.for(`react.memo_cache_sentinel`)?(y=(0,F.jsx)(`button`,{className:`navbar-toggler bg-white`,type:`button`,"data-bs-toggle":`collapse`,"data-bs-target":`#mainNavbar`,children:(0,F.jsx)(`span`,{className:`navbar-toggler-icon`})}),e[10]=y):y=e[10];let b;e[11]===Symbol.for(`react.memo_cache_sentinel`)?(b=(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/`,className:`nav-link text-white`,children:`Home`})}),e[11]=b):b=e[11];let x;e[12]===Symbol.for(`react.memo_cache_sentinel`)?(x=(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/shop`,className:`nav-link text-white`,children:`Shop`})}),e[12]=x):x=e[12];let S;e[13]===Symbol.for(`react.memo_cache_sentinel`)?(S=(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/about`,className:`nav-link text-white`,children:`About`})}),e[13]=S):S=e[13];let C;e[14]===Symbol.for(`react.memo_cache_sentinel`)?(C=(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/contact`,className:`nav-link text-white`,children:`Contact`})}),e[14]=C):C=e[14];let w;e[15]===Symbol.for(`react.memo_cache_sentinel`)?(w=(0,F.jsx)(`i`,{className:`fas fa-shopping-cart`}),e[15]=w):w=e[15];let T=`position-absolute top-0 start-100 translate-middle badge rounded-pill cart-badge ${f()===0?``:f()===1?`count-single`:f()<=9?`count-double`:f()<=99?`count-triple`:`count-many`}`,ee=f()===0?`#6c757d`:`#D7A86E`,E=f()===0?`#ffffff`:`#3E2723`,D=f()===0?`0.7`:`1`,O;e[16]!==ee||e[17]!==E||e[18]!==D?(O={backgroundColor:ee,color:E,border:`2px solid #ffffff`,boxShadow:`0 2px 8px rgba(0,0,0,0.2)`,fontWeight:`700`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontFamily:`Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,fontVariantNumeric:`tabular-nums`,letterSpacing:`-0.02em`,lineHeight:`1`,transition:`all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`,opacity:D},e[16]=ee,e[17]=E,e[18]=D,e[19]=O):O=e[19];let k=f(),A;e[20]===Symbol.for(`react.memo_cache_sentinel`)?(A=(0,F.jsx)(`span`,{className:`visually-hidden`,children:`cart items`}),e[20]=A):A=e[20];let j;e[21]!==T||e[22]!==O||e[23]!==k?(j=(0,F.jsx)(`li`,{className:`nav-item mx-2`,children:(0,F.jsxs)(s,{to:`/cart`,className:`btn btn-outline-light position-relative`,children:[w,(0,F.jsxs)(`span`,{className:T,style:O,children:[k,A]})]})}),e[21]=T,e[22]=O,e[23]=k,e[24]=j):j=e[24];let M;e[25]===Symbol.for(`react.memo_cache_sentinel`)?(M=(0,F.jsx)(`li`,{className:`nav-item mx-2`,children:(0,F.jsx)(s,{to:`/login`,className:`btn btn-primary fw-bold`,children:`Login`})}),e[25]=M):M=e[25];let P;e[26]===j?P=e[27]:(P=(0,F.jsx)(`nav`,{className:`navbar navbar-expand-lg px-4 shadow-sm`,style:_,children:(0,F.jsxs)(`div`,{className:`container-fluid`,children:[v,y,(0,F.jsx)(`div`,{className:`collapse navbar-collapse justify-content-end`,id:`mainNavbar`,children:(0,F.jsxs)(`ul`,{className:`navbar-nav align-items-center`,children:[b,x,S,C,j,M]})})]})}),e[26]=j,e[27]=P);let I,L;e[28]===Symbol.for(`react.memo_cache_sentinel`)?(I=(0,F.jsx)(`h1`,{className:`hero-title`,children:`Premium Leather Products`}),L=(0,F.jsx)(`p`,{className:`hero-subtitle`,style:Se,children:`Crafted with style. Designed to last.`}),e[28]=I,e[29]=L):(I=e[28],L=e[29]);let R;e[30]===Symbol.for(`react.memo_cache_sentinel`)?(R=(0,F.jsx)(`section`,{style:ye,children:(0,F.jsx)(`div`,{style:be,children:(0,F.jsxs)(`div`,{className:`hero-content`,style:xe,children:[I,L,(0,F.jsx)(s,{to:`/Shop`,children:(0,F.jsx)(`button`,{className:`btn btn-hero mt-4`,style:Ce,children:`Shop Now`})})]})})}),e[30]=R):R=e[30];let z;e[31]===Symbol.for(`react.memo_cache_sentinel`)?(z={padding:`60px 30px`,borderRadius:`15px`},e[31]=z):z=e[31];let B;e[32]===Symbol.for(`react.memo_cache_sentinel`)?(B=(0,F.jsx)(`h2`,{className:`text-center mb-5`,style:{fontSize:`2.5rem`,fontWeight:`700`,color:`#3E2723`,fontFamily:`'Georgia', serif`},children:`Our Categories`}),e[32]=B):B=e[32];let V;e[33]===Symbol.for(`react.memo_cache_sentinel`)?(V=(0,F.jsx)(`div`,{className:`col-6 col-md-3 col-lg-3 mb-4`,children:(0,F.jsxs)(`div`,{className:`category-item text-center`,children:[(0,F.jsx)(`div`,{className:`category-circle`,style:Z,children:(0,F.jsx)(`img`,{src:ie,alt:`BAG`,style:Q,className:`category-zoom-in`})}),(0,F.jsx)(`h5`,{style:$,className:`category-fade-up`,children:`Bag`})]})}),e[33]=V):V=e[33];let H;e[34]===Symbol.for(`react.memo_cache_sentinel`)?(H=(0,F.jsx)(`div`,{className:`col-6 col-md-3 col-lg-3 mb-4`,children:(0,F.jsxs)(`div`,{className:`category-item text-center`,children:[(0,F.jsx)(`div`,{className:`category-circle`,style:Z,children:(0,F.jsx)(`img`,{src:ae,alt:`WALLET`,style:Q,className:`category-zoom-in`})}),(0,F.jsx)(`h5`,{style:$,className:`category-fade-up`,children:`Wallet`})]})}),e[34]=H):H=e[34];let U;e[35]===Symbol.for(`react.memo_cache_sentinel`)?(U=(0,F.jsx)(`div`,{className:`col-6 col-md-3 col-lg-3 mb-4`,children:(0,F.jsxs)(`div`,{className:`category-item text-center`,children:[(0,F.jsx)(`div`,{className:`category-circle`,style:Z,children:(0,F.jsx)(`img`,{src:q,alt:`BELT`,style:Q,className:`category-zoom-in`})}),(0,F.jsx)(`h5`,{style:$,className:`category-fade-up`,children:`Belt`})]})}),e[35]=U):U=e[35];let W;e[36]===Symbol.for(`react.memo_cache_sentinel`)?(W=(0,F.jsxs)(`div`,{className:`container mt-5`,style:z,children:[B,(0,F.jsxs)(`div`,{className:`row justify-content-center g-4`,children:[V,H,U,(0,F.jsx)(`div`,{className:`col-6 col-md-3 col-lg-3 mb-4`,children:(0,F.jsxs)(`div`,{className:`category-item text-center`,children:[(0,F.jsx)(`div`,{className:`category-circle`,style:Z,children:(0,F.jsx)(`img`,{src:oe,alt:`SHOE`,style:Q,className:`category-zoom-in`})}),(0,F.jsx)(`h5`,{style:$,className:`category-fade-up`,children:`Shoe`})]})})]})]}),e[36]=W):W=e[36];let re;e[37]===Symbol.for(`react.memo_cache_sentinel`)?(re=(0,F.jsx)(`h2`,{className:`text-center mb-5`,style:{fontSize:`2.5rem`,fontWeight:`700`,color:`#3E2723`,fontFamily:`'Georgia', serif`},children:`Best Sellers`}),e[37]=re):re=e[37];let K;e[38]===Symbol.for(`react.memo_cache_sentinel`)?(K=[{id:1,name:`Classic Leather Bag`,price:`₹12,999`,image:se,rating:5},{id:2,name:`Premium Wallet`,price:`₹4,999`,image:J,rating:4},{id:3,name:`Genuine Belt`,price:`₹3,499`,image:ce,rating:5},{id:4,name:`Leather Wallet`,price:`₹8,999`,image:le,rating:4},{id:5,name:`Designer Belt`,price:`₹15,999`,image:ue,rating:5},{id:6,name:`Leather Shoe`,price:`₹7,999`,image:de,rating:4},{id:7,name:`Classic Wallet`,price:`₹2,999`,image:fe,rating:5}],e[38]=K):K=e[38];let Y;e[39]===l?Y=e[40]:(Y=K.filter((e,t)=>l===0?t<4:t>=4),e[39]=l,e[40]=Y);let X;e[41]!==d||e[42]!==m||e[43]!==Y?(X=(0,F.jsx)(`div`,{className:`carousel-track`,style:Te,children:Y.map((e,t)=>(0,F.jsxs)(`div`,{className:`carousel-product-card`,style:Ee,children:[(0,F.jsxs)(`div`,{className:`product-image-container`,style:De,children:[(0,F.jsx)(`img`,{src:e.image,alt:e.name,style:Oe}),(0,F.jsxs)(`div`,{className:`product-actions`,style:ke,children:[(0,F.jsx)(`button`,{style:Ae,onClick:()=>d(e),title:`Add to Cart`,children:`🛒`}),(0,F.jsx)(`button`,{style:Ae,onClick:()=>m(e),title:`Add to Wishlist`,children:`❤️`})]})]}),(0,F.jsxs)(`div`,{className:`product-info`,style:je,children:[(0,F.jsx)(`h6`,{style:Me,children:e.name}),(0,F.jsx)(`p`,{style:Ne,children:e.price})]})]},e.id))}),e[41]=d,e[42]=m,e[43]=Y,e[44]=X):X=e[44];let Pe,Fe;e[45]===Symbol.for(`react.memo_cache_sentinel`)?(Pe={display:`flex`,justifyContent:`center`,marginTop:`20px`,gap:`10px`},Fe=()=>u(0),e[45]=Pe,e[46]=Fe):(Pe=e[45],Fe=e[46]);let Ie=l===0?`#D4AF37`:`#3E2723`,Le;e[47]===Ie?Le=e[48]:(Le=(0,F.jsx)(`button`,{onClick:Fe,style:{background:Ie,color:`#fff`,border:`none`,borderRadius:`5px`,padding:`8px 12px`,cursor:`pointer`,fontSize:`14px`,fontWeight:`600`,transition:`all 0.3s ease`},children:`← Previous`}),e[47]=Ie,e[48]=Le);let Re;e[49]===Symbol.for(`react.memo_cache_sentinel`)?(Re=[0,1],e[49]=Re):Re=e[49];let ze;e[50]===l?ze=e[51]:(ze=Re.map((e,t)=>(0,F.jsx)(`button`,{onClick:()=>u(t),style:{background:l===t?`#D4AF37`:`#3E2723`,color:`#fff`,border:`none`,borderRadius:`5px`,padding:`8px 16px`,cursor:`pointer`,fontSize:`14px`,fontWeight:`600`,transition:`all 0.3s ease`},children:t+1},t)),e[50]=l,e[51]=ze);let Be;e[52]===Symbol.for(`react.memo_cache_sentinel`)?(Be=()=>u(1),e[52]=Be):Be=e[52];let Ve=l===1?`#D4AF37`:`#3E2723`,He;e[53]===Ve?He=e[54]:(He=(0,F.jsx)(`button`,{onClick:Be,style:{background:Ve,color:`#fff`,border:`none`,borderRadius:`5px`,padding:`8px 12px`,cursor:`pointer`,fontSize:`14px`,fontWeight:`600`,transition:`all 0.3s ease`},children:`Next →`}),e[53]=Ve,e[54]=He);let Ue;e[55]!==Le||e[56]!==ze||e[57]!==He?(Ue=(0,F.jsxs)(`div`,{style:Pe,children:[Le,ze,He]}),e[55]=Le,e[56]=ze,e[57]=He,e[58]=Ue):Ue=e[58];let We;e[59]!==X||e[60]!==Ue?(We=(0,F.jsxs)(`div`,{className:`container mt-5 mb-5`,children:[re,(0,F.jsxs)(`div`,{className:`best-sellers-carousel`,style:we,children:[X,Ue]})]}),e[59]=X,e[60]=Ue,e[61]=We):We=e[61];let Ge;e[62]===Symbol.for(`react.memo_cache_sentinel`)?(Ge={padding:`80px 0`},e[62]=Ge):Ge=e[62];let Ke;e[63]===Symbol.for(`react.memo_cache_sentinel`)?(Ke=(0,F.jsx)(`h2`,{className:`text-center mb-5`,"data-aos":`fade-up`,style:{fontSize:`2.5rem`,fontWeight:`700`,color:`#3E2723`,fontFamily:`'Georgia', serif`,textTransform:`uppercase`,letterSpacing:`3px`},children:`What Our Customers Say`}),e[63]=Ke):Ke=e[63];let qe;e[64]===Symbol.for(`react.memo_cache_sentinel`)?(qe=(0,F.jsx)(`p`,{className:`text-center mb-5`,"data-aos":`fade-up`,"data-aos-delay":`200`,style:{fontSize:`1.1rem`,color:`#D4AF37`,fontFamily:`'Arial', sans-serif`,fontStyle:`italic`},children:`Real experiences from real leather enthusiasts`}),e[64]=qe):qe=e[64];let Je,Ye;e[65]===Symbol.for(`react.memo_cache_sentinel`)?(Je=(0,F.jsx)(`div`,{className:`container-fluid mt-5 mb-5`,style:Ge,children:(0,F.jsxs)(`div`,{className:`container`,children:[Ke,qe,(0,F.jsx)(`div`,{className:`row g-4`,children:[{id:1,name:`Sarah Johnson`,location:`Mumbai, India`,image:pe,rating:5,testimonial:`Absolutely love my leather bag! The craftsmanship is exceptional and it's perfect for my daily office commute. Worth every penny!`,product:`Classic Leather Bag`},{id:2,name:`Raj `,location:`Delhi, India`,image:me,rating:5,testimonial:`The quality is outstanding! I've been using this wallet for 6 months and it still looks brand new. The leather ages beautifully.`,product:`Premium Wallet`},{id:3,name:`Preshika`,location:`Bangalore, India`,image:he,rating:4,testimonial:`Best purchase I've made this year! The attention to detail is amazing and customer service was exceptional. Highly recommend!`,product:`Designer Handbag`}].map(_e)})]})}),Ye=(0,F.jsx)(ge,{}),e[65]=Je,e[66]=Ye):(Je=e[65],Ye=e[66]);let Xe;return e[67]!==P||e[68]!==We?(Xe=(0,F.jsxs)(F.Fragment,{children:[P,R,W,We,Je,Ye]}),e[67]=P,e[68]=We,e[69]=Xe):Xe=e[69],Xe}function _e(e,t){return(0,F.jsx)(`div`,{className:`col-12 col-md-4`,"data-aos":`fade-up`,"data-aos-delay":300+t*100,children:(0,F.jsxs)(`div`,{className:`testimonial-card`,style:Pe,children:[(0,F.jsxs)(`div`,{className:`testimonial-header`,style:Fe,children:[(0,F.jsx)(`div`,{className:`customer-image`,style:Ie,children:(0,F.jsx)(`img`,{src:e.image,alt:e.name,style:Le})}),(0,F.jsxs)(`div`,{className:`customer-info`,style:Re,children:[(0,F.jsx)(`h5`,{style:ze,children:e.name}),(0,F.jsx)(`p`,{style:Be,children:e.location}),(0,F.jsx)(`div`,{className:`rating`,style:Ve,children:[...Array(e.rating)].map(X)})]})]}),(0,F.jsxs)(`div`,{className:`testimonial-content`,style:Ue,children:[(0,F.jsx)(`div`,{className:`quote-icon`,style:We,children:`"`}),(0,F.jsx)(`p`,{style:Ge,children:e.testimonial}),(0,F.jsx)(`div`,{className:`product-tag`,style:Ke,children:(0,F.jsxs)(`span`,{style:qe,children:[`Purchased: `,e.product]})})]})]})},e.id)}function X(e,t){return(0,F.jsx)(`span`,{style:He,children:`★`},t)}function ve(e){return e.json()}var ye={height:`80vh`,backgroundImage:`url(${K})`,backgroundSize:`cover`,backgroundPosition:`center`,display:`flex`,alignItems:`center`,justifyContent:`center`},be={color:`white`,padding:`30px`,textAlign:`center`},xe={maxWidth:`800px`,margin:`0 auto`},Se={fontSize:`1.3rem`,fontWeight:`300`,marginBottom:`2rem`,textShadow:`1px 1px 4px rgba(0,0,0,0.8)`,animation:`fadeInUp 1.5s ease-out 0.5s both`,fontFamily:`'Georgia', serif`,fontStyle:`italic`},Ce={padding:`15px 40px`,fontSize:`1.1rem`,fontWeight:`600`,textTransform:`uppercase`,letterSpacing:`2px`,backgroundColor:`#D4AF37`,borderColor:`#D4AF37`,color:`#000`,borderRadius:`0`,transition:`all 0.3s ease`,animation:`fadeInUp 1.5s ease-out 1s both`,boxShadow:`0 4px 15px rgba(212, 175, 55, 0.3)`},Z={width:`140px`,height:`140px`,borderRadius:`50%`,margin:`0 auto 20px auto`,border:`4px solid #fff`,boxShadow:`0 8px 25px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.08)`,transition:`all 0.4s cubic-bezier(0.4, 0, 0.2, 1)`,cursor:`pointer`,backgroundColor:`#f8f9fa`,animation:`floatAnimation 3s ease-in-out infinite`,position:`relative`,overflow:`hidden`},Q={width:`100%`,height:`100%`,objectFit:`cover`},$={fontSize:`0.9rem`,fontWeight:`600`,color:`#3E2723`,margin:`0`,fontFamily:`'Arial', sans-serif`,textTransform:`uppercase`,letterSpacing:`1px`,transition:`all 0.3s ease`},we={position:`relative`,width:`100%`,padding:`30px 0`},Te={display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(250px, 1fr))`,gap:`20px`,padding:`10px`,width:`100%`},Ee={minWidth:`300px`,maxWidth:`300px`,marginRight:`25px`,background:`linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)`,borderRadius:`15px`,boxShadow:`0 8px 30px rgba(0,0,0,0.12), 0 4px 15px rgba(0,0,0,0.08)`,transition:`all 0.4s cubic-bezier(0.4, 0, 0.2, 1)`,cursor:`pointer`,border:`1px solid rgba(0,0,0,0.08)`,position:`relative`},De={position:`relative`,width:`100%`,height:`300px`,backgroundColor:`#f8f9fa`},Oe={width:`100%`,height:`100%`,objectFit:`cover`,transition:`all 0.3s ease`},ke={position:`absolute`,top:`10px`,right:`10px`,display:`flex`,flexDirection:`column`,gap:`8px`,opacity:`0`,transition:`all 0.3s ease`},Ae={width:`35px`,height:`35px`,borderRadius:`50%`,border:`none`,backgroundColor:`#fff`,boxShadow:`0 2px 8px rgba(0,0,0,0.15)`,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`16px`,transition:`all 0.3s ease`},je={padding:`15px`,textAlign:`center`},Me={fontSize:`1rem`,fontWeight:`600`,color:`#333`,marginBottom:`8px`,fontFamily:`'Arial', sans-serif`,textTransform:`uppercase`,letterSpacing:`0.5px`},Ne={fontSize:`1.1rem`,fontWeight:`700`,color:`#000`,margin:`0`,fontFamily:`'Arial', sans-serif`},Pe={background:`linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,249,250,0.9) 100%)`,borderRadius:`20px`,padding:`30px`,boxShadow:`0 15px 35px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.05)`,transition:`all 0.4s cubic-bezier(0.4, 0, 0.2, 1)`,border:`1px solid rgba(212,175,55,0.2)`,height:`100%`,position:`relative`},Fe={display:`flex`,alignItems:`center`,marginBottom:`20px`},Ie={width:`80px`,height:`80px`,borderRadius:`50%`,marginRight:`20px`,border:`3px solid #D4AF37`,boxShadow:`0 4px 15px rgba(212,175,55,0.3)`},Le={width:`100%`,height:`100%`,objectFit:`cover`,transition:`transform 0.3s ease`},Re={flex:1},ze={margin:`0`,fontSize:`1.2rem`,fontWeight:`700`,color:`#3E2723`,fontFamily:`'Georgia', serif`},Be={margin:`5px 0`,color:`#666`,fontSize:`0.9rem`,fontFamily:`'Arial', sans-serif`},Ve={display:`flex`,gap:`2px`},He={color:`#D4AF37`,fontSize:`1rem`,textShadow:`0 0 5px rgba(212,175,55,0.5)`},Ue={position:`relative`,padding:`20px 0`},We={fontSize:`4rem`,color:`rgba(212,175,55,0.2)`,position:`absolute`,top:`-10px`,left:`-10px`,fontFamily:`'Georgia', serif`,lineHeight:`1`},Ge={margin:`0 0 20px 0`,fontSize:`1rem`,lineHeight:`1.6`,color:`#333`,fontStyle:`italic`,fontFamily:`'Georgia', serif`,position:`relative`,zIndex:1},Ke={background:`rgba(212,175,55,0.1)`,border:`1px solid rgba(212,175,55,0.3)`,borderRadius:`20px`,padding:`8px 15px`,display:`inline-block`},qe={fontSize:`0.85rem`,color:`#3E2723`,fontWeight:`600`,fontFamily:`'Arial', sans-serif`},Je=document.createElement(`style`);Je.textContent=`
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .btn-hero:hover {
    background-color: #B8941F !important;
    border-color: #B8941F !important;
    color: #fff !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4) !important;
  }
  
  .hero-title:hover {
    transform: scale(1.02);
    transition: transform 0.3s ease;
  }
  
  .category-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.15);
  }
  
  .category-card:hover .category-image-wrapper img {
    transform: scale(1.08);
    filter: brightness(0.7) blur(5px);
  }
  
  .category-card:hover .category-overlay {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  
  .category-card:hover .category-overlay h3 {
    transform: translateY(0) !important;
    opacity: 1 !important;
  }
  
  .category-image-wrapper:hover .category-overlay {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  
  .category-image-wrapper:hover .category-overlay h3 {
    transform: translateY(0) !important;
    opacity: 1 !important;
  }
  
  .best-seller-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(62,39,35,0.25), 0 8px 20px rgba(0,0,0,0.15);
  }
  
  .best-seller-card:hover .best-seller-image-wrapper img {
    transform: scale(1.1);
    filter: brightness(0.8);
  }
  
  .best-seller-card:hover .best-seller-overlay {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  
  .best-seller-image-wrapper:hover .best-seller-overlay {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  
  .best-seller-card:hover button.btn-dark {
    background-color: #D4AF37 !important;
    border-color: #D4AF37 !important;
    color: #000 !important;
    transform: translateY(-2px);
  }
  
  .category-circle:hover {
    transform: scale(1.2) rotate(8deg);
    box-shadow: 0 20px 40px rgba(62,39,35,0.5);
    animation-play-state: paused;
    border-color: #D7A86E;
  }
  
  .category-circle:hover img {
    transform: scale(1.2);
    filter: brightness(1.1) contrast(1.2);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .category-item:hover h5 {
    color: #D4AF37 !important;
    transform: translateY(-3px) scale(1.05);
    text-shadow: 0 2px 8px rgba(212,175,55,0.3);
  }
  
  .category-item {
    animation: fadeInUp 1.5s ease-out 0.3s both;
  }
  
  .category-item:nth-child(1) {
    animation-delay: 0.3s;
  }
  
  .category-item:nth-child(2) {
    animation-delay: 0.5s;
  }
  
  .category-item:nth-child(3) {
    animation-delay: 0.7s;
  }
    25% {
      transform: translateY(-10px) rotate(2deg);
    }
    50% {
      transform: translateY(0px) rotate(0deg);
    }
    75% {
      transform: translateY(-5px) rotate(-1deg);
    }
  }
  
  @keyframes pulseGlow {
    0%, 100% {
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    50% {
      box-shadow: 0 8px 25px rgba(62,39,35,0.3);
    }
  }
  
  @keyframes autoScroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .carousel-product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }
  
  .carousel-product-card:hover .product-actions {
    opacity: 1 !important;
  }
  
  .carousel-product-card:hover img {
    transform: scale(1.05);
    filter: brightness(0.9);
  }
  
  .carousel-product-card:hover .action-button {
    background-color: #3E2723 !important;
    color: #fff !important;
    transform: scale(1.1);
  }
  
  .best-sellers-carousel:hover .carousel-track {
    animation-play-state: paused;
  }
  
  @media (max-width: 768px) {
    .category-card {
      height: 200px;
    }
    
    .category-overlay h3 {
      font-size: 1.4rem !important;
    }
    
    .best-seller-image-wrapper {
      height: 200px;
    }
    
    .category-circle {
      width: 100px;
      height: 100px;
    }
    
    .btn-hero {
      padding: 12px 25px !important;
      font-size: 0.9rem !important;
      letter-spacing: 1px !important;
      min-width: 120px;
    }
  }
  
  @media (max-width: 576px) {
    .btn-hero {
      padding: 10px 20px !important;
      font-size: 0.85rem !important;
      letter-spacing: 0.5px !important;
      min-width: 100px;
    
    .product-image-container {
      height: 280px;
    }
    
    .carousel-product-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #D4AF37 0%, #3E2723 50%, #D4AF37 100%);
      border-radius: 15px 15px 0 0;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .carousel-product-card:hover::before {
      opacity: 1;
    }
    
    .carousel-product-card::after {
      content: '✨ NEW';
      position: absolute;
      top: 10px;
      left: 10px;
      background: #D4AF37;
      color: #fff;
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 10px;
      font-weight: 700;
      opacity: 0;
      transform: rotate(-15deg);
      transition: all 0.3s ease;
    }
    
    .carousel-product-card:hover::after {
      opacity: 1;
      transform: rotate(0deg) scale(1.1);
    }
  }
  
  @media (max-width: 1200px) {
    .carousel-product-card {
      min-width: 260px;
      max-width: 300px;
    }
    
    .product-image-container {
      height: 260px;
    }
  }
  
  @media (max-width: 992px) {
    .carousel-product-card {
      min-width: 240px;
      max-width: 280px;
    }
    
    .product-image-container {
      height: 240px;
    }
  }
  
  @media (max-width: 768px) {
    .carousel-product-card {
      min-width: 220px;
      max-width: 250px;
      margin-right: 15px;
    }
    
    .product-image-container {
      height: 220px;
    }
    
    .carousel-container {
      padding: 20px 0;
    }
  }
  
  @media (max-width: 576px) {
    .carousel-product-card {
      min-width: 200px;
      max-width: 220px;
      margin-right: 12px;
    }
    
    .product-image-container {
      height: 200px;
    }
    
    .carousel-container {
      padding: 15px 0;
      border-radius: 15px;
    }
  }
  
  // Testimonial Styles
  .testimonial-card {
    background: linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,249,250,0.9) 100%);
    border-radius: "20px";
    padding: "30px";
    box-shadow: "0 15px 35px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.05)";
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
    border: "1px solid rgba(212,175,55,0.2)";
    height: "100%";
    position: "relative";
    overflow: "hidden";
  }
  
  .testimonial-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #D4AF37 0%, #3E2723 50%, #D4AF37 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .testimonial-card:hover::before {
    opacity: 1;
  }
  
  .testimonial-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15), 0 10px 25px rgba(0,0,0,0.1);
  }
  
  .testimonial-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .customer-image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;
    border: 3px solid #D4AF37;
    box-shadow: 0 4px 15px rgba(212,175,55,0.3);
  }
  
  .customer-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .customer-image:hover img {
    transform: scale(1.1);
  }
  
  .customer-info h5 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 700;
    color: #3E2723;
    font-family: 'Georgia', serif;
  }
  
  .customer-info p {
    margin: 5px 0;
    color: #666;
    font-size: 0.9rem;
    font-family: 'Arial', sans-serif;
  }
  
  .rating {
    display: flex;
    gap: 2px;
  }
  
  .rating span {
    color: #D4AF37;
    font-size: 1rem;
    text-shadow: 0 0 5px rgba(212,175,55,0.5);
  }
  
  .testimonial-content {
    position: relative;
    padding: 20px 0;
  }
  
  .quote-icon {
    font-size: 4rem;
    color: rgba(212,175,55,0.2);
    position: absolute;
    top: -10px;
    left: -10px;
    font-family: 'Georgia', serif;
    line-height: 1;
  }
  
  .testimonial-content p {
    margin: 0 0 20px 0;
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
    font-style: italic;
    font-family: 'Georgia', serif;
    position: relative;
    z-index: 1;
  }
  
  .product-tag {
    background: rgba(212,175,55,0.1);
    border: 1px solid rgba(212,175,55,0.3);
    border-radius: 20px;
    padding: 8px 15px;
    display: inline-block;
  }
  
  .product-tag span {
    font-size: 0.85rem;
    color: #3E2723;
    font-weight: 600;
    font-family: 'Arial', sans-serif;
  }
  
  .testimonial-footer {
    margin-top: 20px;
    padding-top: 15px;
    border-top: 1px solid rgba(0,0,0,0.1);
  }
  
  .verified-badge {
    background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
    color: white;
    padding: 5px 12px;
    border-radius: 15px;
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 2px 8px rgba(40,167,69,0.3);
  }
  
  .testimonial-button {
    background: #D4AF37;
    color: #000;
    border: none;
    padding: 15px 35px;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 0;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(212,175,55,0.3);
    font-family: 'Arial', sans-serif;
  }
  
  .testimonial-button:hover {
    background: #B8941F;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(212,175,55,0.4);
    color: #fff;
  }
  
  @media (max-width: 768px) {
    .testimonial-card {
      padding: 20px;
      margin-bottom: 20px;
    }
    
    .customer-image {
      width: 60px;
      height: 60px;
      margin-right: 15px;
    }
    
    .customer-info h5 {
      font-size: 1rem;
    }
    
    .quote-icon {
      font-size: 3rem;
    }
    
    .testimonial-content p {
      font-size: 0.9rem;
    }
  }
`,document.head.appendChild(Je);var Ye=`/leathers/assets/b8-CLNXglBw.jpg`,Xe=`/leathers/assets/b9-ByiPD31Y.jpg`,Ze=`/leathers/assets/b10-CDe8NN5q.jpg`,Qe=`/leathers/assets/b11-CUlxVFyC.jpg`,$e=`/leathers/assets/b12-D4k_6hJV.jpg`,et=`/leathers/assets/b13-BQ2QEuZR.jpg`,tt=`/leathers/assets/b14-Cu9oPuTa.jpg`,nt=`/leathers/assets/b15-w7HanUdd.jpg`,rt=`/leathers/assets/b16-lcN42b51.jpg`,it=`/leathers/assets/b17-DC8-pdtQ.jpg`,at=`/leathers/assets/b18-BvfC2Y-3.jpg`,ot=`/leathers/assets/b19-CuTAEKCv.jpg`,st=`/leathers/assets/b20-BuCtdiHQ.jpg`,ct=`/leathers/assets/b21-BInQXD7H.jpg`,lt=`/leathers/assets/b22-Dyi1U_SK.jpg`,ut=`/leathers/assets/b23-B-c1sFj6.jpg`,dt=`/leathers/assets/b24-BiTsMDCN.jpg`,ft=`/leathers/assets/b25-BnhGS_WN.jpg`,pt=`/leathers/assets/b26-CZuWz9gJ.jpg`,mt=`/leathers/assets/b27-C5j7fy2K.jpg`,ht=`/leathers/assets/b28-FI_21msq.jpg`,gt=`/leathers/assets/b29-BSDsk9jA.jpg`,_t=`/leathers/assets/b30-DlKixEwi.jpg`;function vt(){let e=(0,te.c)(95),[t,n]=(0,N.useState)(`men`),[r,i]=(0,N.useState)(1),{addToCart:a,cartItems:o,getCartCount:c}=ne(),[l,u]=(0,N.useState)(null),[d,f]=(0,N.useState)(0),p;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(p=[],e[0]=p):p=e[0],(0,N.useEffect)(bt,p);let m;e[1]===c?m=e[2]:(m=()=>{f(c())},e[1]=c,e[2]=m);let h;e[3]!==o||e[4]!==c?(h=[o,c],e[3]=o,e[4]=c,e[5]=h):h=e[5],(0,N.useEffect)(m,h);let g;e[6]===Symbol.for(`react.memo_cache_sentinel`)?(g=[{id:8,image:Ye,name:`Premium Leather Jacket`,price:`₹24,999`,category:`men`},{id:9,image:Xe,name:`Classic Leather Coat`,price:`₹32,999`,category:`men`},{id:10,image:Ze,name:`Stylish Leather Vest`,price:`₹16,499`,category:`men`},{id:11,image:Qe,name:`Luxury Leather Blazer`,price:`₹37,499`,category:`men`},{id:12,image:$e,name:`Casual Leather Jacket`,price:`₹20,749`,category:`men`},{id:13,image:et,name:`Vintage Leather Coat`,price:`₹29,249`,category:`men`},{id:14,image:tt,name:`Modern Leather Jacket`,price:`₹23,249`,category:`men`},{id:15,image:nt,name:`Elegant Leather Coat`,price:`₹35,749`,category:`men`},{id:16,image:rt,name:`Sport Leather Jacket`,price:`₹19,074`,category:`men`},{id:17,image:it,name:`Formal Leather Blazer`,price:`₹32,999`,category:`men`},{id:18,image:at,name:`Premium Leather Vest`,price:`₹15,749`,category:`men`},{id:19,image:ot,name:`Designer Leather Coat`,price:`₹49,999`,category:`men`},{id:20,image:st,name:`Exclusive Leather Jacket`,price:`₹41,499`,category:`men`}],e[6]=g):g=e[6];let _=g,v;e[7]===Symbol.for(`react.memo_cache_sentinel`)?(v=[{id:21,image:ct,name:`Elegant Leather Jacket`,price:`₹29,249`,category:`women`},{id:22,image:lt,name:`Fashion Leather Coat`,price:`₹37,499`,category:`women`},{id:23,image:ut,name:`Chic Leather Vest`,price:`₹19,074`,category:`women`},{id:24,image:dt,name:`Luxury Leather Blazer`,price:`₹41,499`,category:`women`},{id:25,image:ft,name:`Stylish Leather Jacket`,price:`₹24,999`,category:`women`},{id:26,image:pt,name:`Classic Leather Coat`,price:`₹32,999`,category:`women`},{id:27,image:mt,name:`Modern Leather Jacket`,price:`₹27,499`,category:`women`},{id:28,image:ht,name:`Designer Leather Coat`,price:`₹45,749`,category:`women`},{id:29,image:gt,name:`Premium Leather Vest`,price:`₹20,749`,category:`women`},{id:30,image:_t,name:`Exclusive Leather Jacket`,price:`₹35,749`,category:`women`}],e[7]=v):v=e[7];let y=t===`men`?_:v,b=Math.ceil(y.length/6),x=r*6,S=x-6,C;e[8]!==y||e[9]!==S||e[10]!==x?(C=y.slice(S,x),e[8]=y,e[9]=S,e[10]=x,e[11]=C):C=e[11];let w=C,T;e[12]===Symbol.for(`react.memo_cache_sentinel`)?(T=e=>{n(e),i(1)},e[12]=T):T=e[12];let ee=T,E;e[13]===Symbol.for(`react.memo_cache_sentinel`)?(E=e=>{i(e)},e[13]=E):E=e[13];let D=E,O;e[14]===Symbol.for(`react.memo_cache_sentinel`)?(O={backgroundColor:`#3E2723`},e[14]=O):O=e[14];let k;e[15]===Symbol.for(`react.memo_cache_sentinel`)?(k=(0,F.jsxs)(s,{className:`navbar-brand text-white fw-bold`,to:`/`,children:[(0,F.jsx)(`span`,{style:{color:`#D7A86E`},children:`LEATHER`}),(0,F.jsx)(`span`,{style:{color:`#ffffff`},children:`LUXE`})]}),e[15]=k):k=e[15];let A;e[16]===Symbol.for(`react.memo_cache_sentinel`)?(A=(0,F.jsx)(`button`,{className:`navbar-toggler bg-white`,type:`button`,"data-bs-toggle":`collapse`,"data-bs-target":`#mainNavbar`,children:(0,F.jsx)(`span`,{className:`navbar-toggler-icon`})}),e[16]=A):A=e[16];let j;e[17]===Symbol.for(`react.memo_cache_sentinel`)?(j=(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/`,className:`nav-link text-white`,children:`Home`})}),e[17]=j):j=e[17];let M;e[18]===Symbol.for(`react.memo_cache_sentinel`)?(M=(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/shop`,className:`nav-link text-white`,children:`Shop`})}),e[18]=M):M=e[18];let P;e[19]===Symbol.for(`react.memo_cache_sentinel`)?(P=(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/about`,className:`nav-link text-white`,children:`About`})}),e[19]=P):P=e[19];let I;e[20]===Symbol.for(`react.memo_cache_sentinel`)?(I=(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/contact`,className:`nav-link text-white`,children:`Contact`})}),e[20]=I):I=e[20];let L;e[21]===Symbol.for(`react.memo_cache_sentinel`)?(L=(0,F.jsx)(`i`,{className:`fas fa-shopping-cart`}),e[21]=L):L=e[21];let R=`position-absolute top-0 start-100 translate-middle badge rounded-pill cart-badge ${d===0?``:d===1?`count-single`:d<=9?`count-double`:d<=99?`count-triple`:`count-many`} ${l?`animate-cart-badge-bounce animate-cart-badge-glow`:``}`,z=d===0?`#6c757d`:`#D7A86E`,B=d===0?`#ffffff`:`#3E2723`,V=d===0?`0.7`:`1`,H;e[22]!==z||e[23]!==B||e[24]!==V?(H={backgroundColor:z,color:B,border:`2px solid #ffffff`,boxShadow:`0 2px 8px rgba(0,0,0,0.2)`,fontWeight:`700`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontFamily:`Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,fontVariantNumeric:`tabular-nums`,letterSpacing:`-0.02em`,lineHeight:`1`,transition:`all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`,opacity:V},e[22]=z,e[23]=B,e[24]=V,e[25]=H):H=e[25];let U;e[26]===Symbol.for(`react.memo_cache_sentinel`)?(U=(0,F.jsx)(`span`,{className:`visually-hidden`,children:`cart items`}),e[26]=U):U=e[26];let W;e[27]!==d||e[28]!==R||e[29]!==H?(W=(0,F.jsx)(`li`,{className:`nav-item mx-2`,children:(0,F.jsxs)(s,{to:`/cart`,className:`btn btn-outline-light position-relative`,children:[L,(0,F.jsxs)(`span`,{className:R,style:H,children:[d,U]})]})}),e[27]=d,e[28]=R,e[29]=H,e[30]=W):W=e[30];let re;e[31]===Symbol.for(`react.memo_cache_sentinel`)?(re=(0,F.jsx)(`li`,{className:`nav-item mx-2`,children:(0,F.jsx)(s,{to:`/login`,className:`btn btn-primary fw-bold`,children:`Login`})}),e[31]=re):re=e[31];let G;e[32]===W?G=e[33]:(G=(0,F.jsx)(`nav`,{className:`navbar navbar-expand-lg px-4 shadow-sm`,style:O,children:(0,F.jsxs)(`div`,{className:`container-fluid`,children:[k,A,(0,F.jsx)(`div`,{className:`collapse navbar-collapse justify-content-end`,id:`mainNavbar`,children:(0,F.jsxs)(`ul`,{className:`navbar-nav align-items-center`,children:[j,M,P,I,W,re]})})]})}),e[32]=W,e[33]=G);let K;e[34]===Symbol.for(`react.memo_cache_sentinel`)?(K=(0,F.jsx)(`br`,{}),e[34]=K):K=e[34];let ie;e[35]===Symbol.for(`react.memo_cache_sentinel`)?(ie=(0,F.jsx)(`div`,{className:`container text-center`,children:(0,F.jsx)(`h3`,{className:` mb-3`,"data-aos":`fade-down`,children:`Premium Leather Collection`})}),e[35]=ie):ie=e[35];let ae=`btn ${t===`men`?`btn-primary`:`btn-outline-primary`} fw-bold py-3`,q;e[36]===Symbol.for(`react.memo_cache_sentinel`)?(q=()=>ee(`men`),e[36]=q):q=e[36];let oe=t===`men`?`#3E2723`:`transparent`,se=t===`men`?`white`:`#3E2723`,J;e[37]!==oe||e[38]!==se?(J={backgroundColor:oe,borderColor:`#3E2723`,color:se},e[37]=oe,e[38]=se,e[39]=J):J=e[39];let ce;e[40]===Symbol.for(`react.memo_cache_sentinel`)?(ce=(0,F.jsx)(`i`,{className:`fas fa-male me-2`}),e[40]=ce):ce=e[40];let le;e[41]!==ae||e[42]!==J?(le=(0,F.jsxs)(`button`,{className:ae,onClick:q,style:J,children:[ce,`Men's Collection`]}),e[41]=ae,e[42]=J,e[43]=le):le=e[43];let ue=`btn ${t===`women`?`btn-primary`:`btn-outline-primary`} fw-bold py-3`,de;e[44]===Symbol.for(`react.memo_cache_sentinel`)?(de=()=>ee(`women`),e[44]=de):de=e[44];let fe=t===`women`?`#3E2723`:`transparent`,pe=t===`women`?`white`:`#3E2723`,me;e[45]!==fe||e[46]!==pe?(me={backgroundColor:fe,borderColor:`#3E2723`,color:pe},e[45]=fe,e[46]=pe,e[47]=me):me=e[47];let he;e[48]===Symbol.for(`react.memo_cache_sentinel`)?(he=(0,F.jsx)(`i`,{className:`fas fa-female me-2`}),e[48]=he):he=e[48];let Y;e[49]!==ue||e[50]!==me?(Y=(0,F.jsxs)(`button`,{className:ue,onClick:de,style:me,children:[he,`Women's Collection`]}),e[49]=ue,e[50]=me,e[51]=Y):Y=e[51];let _e;e[52]!==le||e[53]!==Y?(_e=(0,F.jsx)(`div`,{className:`container mb-5`,children:(0,F.jsx)(`div`,{className:`row justify-content-center`,children:(0,F.jsx)(`div`,{className:`col-md-8`,children:(0,F.jsxs)(`div`,{className:`btn-group w-100`,role:`group`,children:[le,Y]})})})}),e[52]=le,e[53]=Y,e[54]=_e):_e=e[54];let X;e[55]!==a||e[56]!==l||e[57]!==w?(X=(0,F.jsx)(`div`,{className:`container mb-5`,children:(0,F.jsx)(`div`,{className:`row g-4`,children:w.map((e,t)=>(0,F.jsx)(`div`,{className:`col-lg-4 col-md-6`,"data-aos":`fade-up`,"data-aos-delay":t*100,children:(0,F.jsxs)(`div`,{className:`card h-100 border-0 product-card`,style:{backgroundColor:`transparent`},children:[(0,F.jsxs)(`div`,{className:`position-relative overflow-hidden`,children:[(0,F.jsx)(`img`,{src:e.image,className:`card-img-top`,alt:e.name,style:{height:`350px`,objectFit:`cover`,transition:`transform 0.3s ease`}}),(0,F.jsx)(`div`,{className:`position-absolute top-0 end-0 m-3`,children:(0,F.jsx)(`span`,{className:`badge bg-secondary`,children:`New`})})]}),(0,F.jsxs)(`div`,{className:`card-body d-flex flex-column`,children:[(0,F.jsx)(`h5`,{className:`card-title fw-bold`,children:e.name}),(0,F.jsx)(`p`,{className:`card-text text-muted`,children:`Premium quality leather`}),(0,F.jsxs)(`div`,{className:`mt-auto`,children:[(0,F.jsxs)(`div`,{className:`d-flex justify-content-between align-items-center mb-3`,children:[(0,F.jsx)(`span`,{className:`h4 mb-0`,children:e.price}),(0,F.jsxs)(`div`,{className:`text-muted`,children:[(0,F.jsx)(`i`,{className:`fas fa-star`}),(0,F.jsx)(`i`,{className:`fas fa-star`}),(0,F.jsx)(`i`,{className:`fas fa-star`}),(0,F.jsx)(`i`,{className:`fas fa-star`}),(0,F.jsx)(`i`,{className:`fas fa-star-half-alt`})]})]}),(0,F.jsxs)(`button`,{onClick:()=>{a(e),u(e.id),f(yt),setTimeout(()=>{u(null)},2e3)},className:`btn btn-add-to-cart w-100 fw-bold position-relative overflow-hidden ${l===e.id?`added`:``}`,style:{backgroundColor:l===e.id?`#28a745`:`#3E2723`,borderColor:l===e.id?`#28a745`:`#3E2723`,color:`white`},children:[(0,F.jsx)(`span`,{className:`d-flex align-items-center justify-content-center ${l===e.id?`animate-fade-in`:``}`,children:l===e.id?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`i`,{className:`fas fa-check-circle me-2`}),`Added to Cart!`]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`i`,{className:`fas fa-shopping-cart me-2`}),`Add to Cart`]})}),l===e.id&&(0,F.jsx)(`span`,{className:`position-absolute top-0 start-0 w-100 h-100 bg-success opacity-25 animate-pulse`})]})]})]})]})},e.id))})}),e[55]=a,e[56]=l,e[57]=w,e[58]=X):X=e[58];let ve;e[59]===Symbol.for(`react.memo_cache_sentinel`)?(ve={display:`flex`,justifyContent:`center`,marginTop:`20px`,gap:`10px`,flexWrap:`wrap`},e[59]=ve):ve=e[59];let ye;e[60]===r?ye=e[61]:(ye=()=>D(r-1),e[60]=r,e[61]=ye);let be=r===1,xe=r===1?`#3E2723`:`#D4AF37`,Se=r===1?`not-allowed`:`pointer`,Ce=r===1?`0.6`:`1`,Z;e[62]!==xe||e[63]!==Se||e[64]!==Ce?(Z={background:xe,color:`#fff`,border:`none`,borderRadius:`5px`,padding:`8px 12px`,cursor:Se,fontSize:`14px`,fontWeight:`600`,transition:`all 0.3s ease`,opacity:Ce},e[62]=xe,e[63]=Se,e[64]=Ce,e[65]=Z):Z=e[65];let Q;e[66]!==ye||e[67]!==be||e[68]!==Z?(Q=(0,F.jsx)(`button`,{onClick:ye,disabled:be,style:Z,children:`← Previous`}),e[66]=ye,e[67]=be,e[68]=Z,e[69]=Q):Q=e[69];let $;e[70]===b?$=e[71]:($=[...Array(b)],e[70]=b,e[71]=$);let we;e[72]!==r||e[73]!==$?(we=$.map((e,t)=>(0,F.jsx)(`button`,{onClick:()=>D(t+1),style:{background:r===t+1?`#D4AF37`:`#3E2723`,color:`#fff`,border:`none`,borderRadius:`5px`,padding:`8px 16px`,cursor:`pointer`,fontSize:`14px`,fontWeight:`600`,transition:`all 0.3s ease`},children:t+1},t+1)),e[72]=r,e[73]=$,e[74]=we):we=e[74];let Te;e[75]===r?Te=e[76]:(Te=()=>D(r+1),e[75]=r,e[76]=Te);let Ee=r===b,De=r===b?`#3E2723`:`#D4AF37`,Oe=r===b?`not-allowed`:`pointer`,ke=r===b?`0.6`:`1`,Ae;e[77]!==De||e[78]!==Oe||e[79]!==ke?(Ae={background:De,color:`#fff`,border:`none`,borderRadius:`5px`,padding:`8px 12px`,cursor:Oe,fontSize:`14px`,fontWeight:`600`,transition:`all 0.3s ease`,opacity:ke},e[77]=De,e[78]=Oe,e[79]=ke,e[80]=Ae):Ae=e[80];let je;e[81]!==Te||e[82]!==Ee||e[83]!==Ae?(je=(0,F.jsx)(`button`,{onClick:Te,disabled:Ee,style:Ae,children:`Next →`}),e[81]=Te,e[82]=Ee,e[83]=Ae,e[84]=je):je=e[84];let Me;e[85]!==Q||e[86]!==we||e[87]!==je?(Me=(0,F.jsx)(`div`,{className:`container mb-5`,children:(0,F.jsx)(`div`,{className:`text-center`,children:(0,F.jsxs)(`div`,{style:ve,children:[Q,we,je]})})}),e[85]=Q,e[86]=we,e[87]=je,e[88]=Me):Me=e[88];let Ne;e[89]===Symbol.for(`react.memo_cache_sentinel`)?(Ne=(0,F.jsx)(ge,{}),e[89]=Ne):Ne=e[89];let Pe;return e[90]!==G||e[91]!==_e||e[92]!==X||e[93]!==Me?(Pe=(0,F.jsxs)(F.Fragment,{children:[G,K,ie,_e,X,Me,Ne]}),e[90]=G,e[91]=_e,e[92]=X,e[93]=Me,e[94]=Pe):Pe=e[94],Pe}function yt(e){return e+1}function bt(){G.default.init({duration:1e3,once:!0})}var xt=`/leathers/assets/a1-C1_jeEoS.jpg`,St=`/leathers/assets/m1-CI1Qq1uK.jpg`,Ct=`/leathers/assets/m2-BBtYEYND.jpg`,wt=`/leathers/assets/m3-KFeENpSy.jpg`;function Tt(){let e=(0,te.c)(123),{getCartCount:t}=ne(),[n,r]=(0,N.useState)(0),[i,a]=(0,N.useState)(0),o;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=[],e[0]=o):o=e[0],(0,N.useEffect)(Zt,o);let l;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(l=[{src:xt,alt:`Premium Leather Bag`},{src:se,alt:`Leather Wallet`},{src:Ye,alt:`Leather Belt`},{src:K,alt:`Leather Jacket`}],e[1]=l):l=e[1];let u=l,d;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(d=()=>{r(e=>(e+1)%u.length)},e[2]=d):d=e[2];let f=d,m;e[3]===Symbol.for(`react.memo_cache_sentinel`)?(m=()=>{r(e=>(e-1+u.length)%u.length)},e[3]=m):m=e[3];let _=m,v;e[4]===Symbol.for(`react.memo_cache_sentinel`)?(v=[],e[4]=v):v=e[4],(0,N.useEffect)(Xt,v);let y,b;e[5]===Symbol.for(`react.memo_cache_sentinel`)?(y=()=>{let e=0,t=setInterval(()=>{e+=72,e>=9e3?(a(9e3),clearInterval(t)):a(Math.floor(e))},16);return()=>clearInterval(t)},b=[],e[5]=y,e[6]=b):(y=e[5],b=e[6]),(0,N.useEffect)(y,b);let S;e[7]===Symbol.for(`react.memo_cache_sentinel`)?(S={backgroundColor:`#3E2723`},e[7]=S):S=e[7];let C;e[8]===Symbol.for(`react.memo_cache_sentinel`)?(C=(0,F.jsxs)(s,{className:`navbar-brand text-white fw-bold`,to:`/`,children:[(0,F.jsx)(`span`,{style:{color:`#D7A86E`},children:`LEATHER`}),(0,F.jsx)(`span`,{style:{color:`#ffffff`},children:`LUXE`})]}),e[8]=C):C=e[8];let O;e[9]===Symbol.for(`react.memo_cache_sentinel`)?(O=(0,F.jsx)(`button`,{className:`navbar-toggler bg-white`,type:`button`,"data-bs-toggle":`collapse`,"data-bs-target":`#mainNavbar`,children:(0,F.jsx)(`span`,{className:`navbar-toggler-icon`})}),e[9]=O):O=e[9];let j;e[10]===Symbol.for(`react.memo_cache_sentinel`)?(j=(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/`,className:`nav-link text-white`,children:`Home`})}),e[10]=j):j=e[10];let M;e[11]===Symbol.for(`react.memo_cache_sentinel`)?(M=(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/shop`,className:`nav-link text-white`,children:`Shop`})}),e[11]=M):M=e[11];let P;e[12]===Symbol.for(`react.memo_cache_sentinel`)?(P=(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/about`,className:`nav-link text-white`,children:`About`})}),e[12]=P):P=e[12];let I;e[13]===Symbol.for(`react.memo_cache_sentinel`)?(I=(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/contact`,className:`nav-link text-white`,children:`Contact`})}),e[13]=I):I=e[13];let L;e[14]===Symbol.for(`react.memo_cache_sentinel`)?(L=(0,F.jsx)(`i`,{className:`fas fa-shopping-cart`}),e[14]=L):L=e[14];let R;e[15]===Symbol.for(`react.memo_cache_sentinel`)?(R={transform:`translate(25%, -50%)`},e[15]=R):R=e[15];let z;e[16]===t?z=e[17]:(z=t(),e[16]=t,e[17]=z);let B;e[18]===Symbol.for(`react.memo_cache_sentinel`)?(B=(0,F.jsx)(`span`,{className:`visually-hidden`,children:`cart items`}),e[18]=B):B=e[18];let V;e[19]===z?V=e[20]:(V=(0,F.jsx)(`li`,{className:`nav-item mx-2`,children:(0,F.jsxs)(s,{to:`/cart`,className:`btn btn-outline-light position-relative`,children:[L,(0,F.jsxs)(`span`,{className:`position-absolute top-0 start-100 translate-middle-x badge rounded-pill bg-danger`,style:R,children:[z,B]})]})}),e[19]=z,e[20]=V);let H;e[21]===Symbol.for(`react.memo_cache_sentinel`)?(H=(0,F.jsx)(`li`,{className:`nav-item mx-2`,children:(0,F.jsx)(s,{to:`/login`,className:`btn btn-primary fw-bold`,children:`Login`})}),e[21]=H):H=e[21];let U;e[22]===V?U=e[23]:(U=(0,F.jsx)(`nav`,{className:`navbar navbar-expand-lg px-4 shadow-sm`,style:S,children:(0,F.jsxs)(`div`,{className:`container-fluid`,children:[C,O,(0,F.jsx)(`div`,{className:`collapse navbar-collapse justify-content-end`,id:`mainNavbar`,children:(0,F.jsxs)(`ul`,{className:`navbar-nav align-items-center`,children:[j,M,P,I,V,H]})})]})}),e[22]=V,e[23]=U);let W;e[24]===Symbol.for(`react.memo_cache_sentinel`)?(W=(0,F.jsx)(`br`,{}),e[24]=W):W=e[24];let re,G,ie;e[25]===Symbol.for(`react.memo_cache_sentinel`)?(re=(0,F.jsx)(`h3`,{children:`Transform Your Style with Our Expert Leather Craftsmanship`}),G=(0,F.jsx)(`p`,{className:`tagline`,children:`Genuine Leather. Timeless Style.`}),ie=(0,F.jsx)(`p`,{className:`about-description`,children:`We specialize in premium leather products including bags, wallets, belts, and jackets. Every product is designed to last and improve with age, giving you both durability and elegance.`}),e[25]=re,e[26]=G,e[27]=ie):(re=e[25],G=e[26],ie=e[27]);let ae;e[28]===Symbol.for(`react.memo_cache_sentinel`)?(ae=(0,F.jsxs)(`div`,{className:`feature-item`,children:[(0,F.jsx)(`span`,{className:`check-icon`,children:`✓`}),(0,F.jsx)(`span`,{children:`Expert & Professional`})]}),e[28]=ae):ae=e[28];let q;e[29]===Symbol.for(`react.memo_cache_sentinel`)?(q=(0,F.jsxs)(`div`,{className:`feature-item`,children:[(0,F.jsx)(`span`,{className:`check-icon`,children:`✓`}),(0,F.jsx)(`span`,{children:`Premium Quality Materials`})]}),e[29]=q):q=e[29];let oe;e[30]===Symbol.for(`react.memo_cache_sentinel`)?(oe=(0,F.jsxs)(`div`,{className:`feature-item`,children:[(0,F.jsx)(`span`,{className:`check-icon`,children:`✓`}),(0,F.jsx)(`span`,{children:`Satisfaction Guarantee`})]}),e[30]=oe):oe=e[30];let J;e[31]===Symbol.for(`react.memo_cache_sentinel`)?(J=(0,F.jsxs)(`div`,{className:`features-list`,children:[ae,q,oe,(0,F.jsxs)(`div`,{className:`feature-item`,children:[(0,F.jsx)(`span`,{className:`check-icon`,children:`✓`}),(0,F.jsx)(`span`,{children:`Handcrafted Excellence`})]})]}),e[31]=J):J=e[31];let ce;e[32]===Symbol.for(`react.memo_cache_sentinel`)?(ce=(0,F.jsx)(`div`,{className:`col-lg-6`,"data-aos":`fade-right`,children:(0,F.jsxs)(`div`,{className:`hero-content`,children:[re,G,ie,J,(0,F.jsxs)(`div`,{className:`hero-buttons`,children:[(0,F.jsx)(s,{to:`/shop`,className:`btn btn-primary`,children:`Get A Quote`}),(0,F.jsx)(s,{to:`/about`,className:`btn btn-outline-dark`,children:`About Us`})]})]})}),e[32]=ce):ce=e[32];let le=u[n],ue=u[n],de;e[33]!==le.src||e[34]!==ue.alt?(de=(0,F.jsx)(`img`,{src:le.src,alt:ue.alt,className:`main-image img-fluid rounded shadow`}),e[33]=le.src,e[34]=ue.alt,e[35]=de):de=e[35];let fe=i>=9e3?`9k+`:`${Math.floor(i/1e3)}k+`,pe;e[36]===fe?pe=e[37]:(pe=(0,F.jsx)(`span`,{className:`stats-number`,children:fe}),e[36]=fe,e[37]=pe);let me;e[38]===Symbol.for(`react.memo_cache_sentinel`)?(me=(0,F.jsx)(`span`,{className:`stats-text`,children:`Complete Projects`}),e[38]=me):me=e[38];let he;e[39]===pe?he=e[40]:(he=(0,F.jsxs)(`div`,{className:`stats-badge`,children:[pe,me]}),e[39]=pe,e[40]=he);let Y;e[41]===Symbol.for(`react.memo_cache_sentinel`)?(Y=(0,F.jsx)(`button`,{className:`switcher-btn prev-btn`,onClick:_,"aria-label":`Previous image`,children:(0,F.jsx)(x,{})}),e[41]=Y):Y=e[41];let _e;e[42]===Symbol.for(`react.memo_cache_sentinel`)?(_e=(0,F.jsx)(`button`,{className:`switcher-btn next-btn`,onClick:f,"aria-label":`Next image`,children:(0,F.jsx)(w,{})}),e[42]=_e):_e=e[42];let X;e[43]!==de||e[44]!==he?(X=(0,F.jsx)(`div`,{className:`main-image-wrapper`,children:(0,F.jsxs)(`div`,{className:`main-image-container`,children:[de,he,Y,_e]})}),e[43]=de,e[44]=he,e[45]=X):X=e[45];let ve=u[(n+1)%u.length],ye=u[(n+1)%u.length],be;e[46]!==ve.src||e[47]!==ye.alt?(be=(0,F.jsx)(`div`,{className:`secondary-image-container`,children:(0,F.jsx)(`img`,{src:ve.src,alt:ye.alt,className:`secondary-image img-fluid rounded shadow`})}),e[46]=ve.src,e[47]=ye.alt,e[48]=be):be=e[48];let xe=u[(n+2)%u.length],Se=u[(n+2)%u.length],Ce;e[49]!==xe.src||e[50]!==Se.alt?(Ce=(0,F.jsx)(`div`,{className:`tertiary-image-container`,children:(0,F.jsx)(`img`,{src:xe.src,alt:Se.alt,className:`tertiary-image img-fluid rounded shadow`})}),e[49]=xe.src,e[50]=Se.alt,e[51]=Ce):Ce=e[51];let Z;e[52]!==be||e[53]!==Ce?(Z=(0,F.jsxs)(`div`,{className:`side-images`,children:[be,Ce]}),e[52]=be,e[53]=Ce,e[54]=Z):Z=e[54];let Q;e[55]===n?Q=e[56]:(Q=(0,F.jsx)(`div`,{className:`image-dots`,children:u.map((e,t)=>(0,F.jsx)(`button`,{className:`dot ${t===n?`active`:``}`,onClick:()=>r(t),"aria-label":`Go to image ${t+1}`},t))}),e[55]=n,e[56]=Q);let $;e[57]!==X||e[58]!==Z||e[59]!==Q?($=(0,F.jsx)(`section`,{className:`about-hero`,children:(0,F.jsx)(`div`,{className:`container`,children:(0,F.jsxs)(`div`,{className:`row align-items-center`,children:[ce,(0,F.jsx)(`div`,{className:`col-lg-6`,"data-aos":`fade-left`,children:(0,F.jsxs)(`div`,{className:`hero-images-layout`,children:[X,Z,Q]})})]})})}),e[57]=X,e[58]=Z,e[59]=Q,e[60]=$):$=e[60];let we;e[61]===Symbol.for(`react.memo_cache_sentinel`)?(we=(0,F.jsx)(`div`,{className:`parallax-bg`,style:{backgroundImage:`url(${K})`}}),e[61]=we):we=e[61];let Te;e[62]===Symbol.for(`react.memo_cache_sentinel`)?(Te=(0,F.jsx)(`h2`,{className:`mb-5`,children:`Types of Leather We Use`}),e[62]=Te):Te=e[62];let Ee;e[63]===Symbol.for(`react.memo_cache_sentinel`)?(Ee=(0,F.jsx)(`div`,{className:`col-lg-4 col-md-6 col-12`,"data-aos":`fade-up`,children:(0,F.jsxs)(`div`,{className:`leather-card h-100`,children:[(0,F.jsx)(`h4`,{children:`Full-Grain Leather`}),(0,F.jsx)(`p`,{children:`Highest quality leather known for strength and natural texture.`})]})}),e[63]=Ee):Ee=e[63];let De;e[64]===Symbol.for(`react.memo_cache_sentinel`)?(De=(0,F.jsx)(`div`,{className:`col-lg-4 col-md-6 col-12`,"data-aos":`fade-up`,"data-aos-delay":`100`,children:(0,F.jsxs)(`div`,{className:`leather-card h-100`,children:[(0,F.jsx)(`h4`,{children:`Top-Grain Leather`}),(0,F.jsx)(`p`,{children:`Smooth finish with durability and premium appearance.`})]})}),e[64]=De):De=e[64];let Oe;e[65]===Symbol.for(`react.memo_cache_sentinel`)?(Oe=(0,F.jsxs)(`section`,{className:`leather-types`,children:[we,(0,F.jsxs)(`div`,{className:`container text-center`,children:[Te,(0,F.jsxs)(`div`,{className:`row g-4`,children:[Ee,De,(0,F.jsx)(`div`,{className:`col-lg-4 col-md-12 col-12`,"data-aos":`fade-up`,"data-aos-delay":`200`,children:(0,F.jsxs)(`div`,{className:`leather-card h-100`,children:[(0,F.jsx)(`h4`,{children:`Genuine Leather`}),(0,F.jsx)(`p`,{children:`Affordable and stylish leather for everyday use.`})]})})]})]})]}),e[65]=Oe):Oe=e[65];let ke;e[66]===Symbol.for(`react.memo_cache_sentinel`)?(ke=(0,F.jsxs)(`div`,{className:`text-center mb-5`,"data-aos":`fade-up`,children:[(0,F.jsx)(`h2`,{className:`section-title`,children:`Our Crafting Process`}),(0,F.jsx)(`p`,{className:`section-subtitle`,children:`Handcrafted with precision and passion`})]}),e[66]=ke):ke=e[66];let Ae;e[67]===Symbol.for(`react.memo_cache_sentinel`)?(Ae=(0,F.jsxs)(`div`,{className:`craft-icon-wrapper`,children:[(0,F.jsx)(`div`,{className:`craft-icon`,children:(0,F.jsx)(p,{})}),(0,F.jsx)(`div`,{className:`craft-number`,children:`01`})]}),e[67]=Ae):Ae=e[67];let je;e[68]===Symbol.for(`react.memo_cache_sentinel`)?(je=(0,F.jsx)(`div`,{className:`col-lg-4 col-md-6`,"data-aos":`fade-up`,"data-aos-delay":`100`,children:(0,F.jsxs)(`div`,{className:`craft-card`,children:[Ae,(0,F.jsxs)(`div`,{className:`craft-content`,children:[(0,F.jsx)(`h4`,{children:`Ethical Sourcing`}),(0,F.jsx)(`p`,{children:`Premium leather hides from sustainable tanneries`})]})]})}),e[68]=je):je=e[68];let Me;e[69]===Symbol.for(`react.memo_cache_sentinel`)?(Me=(0,F.jsxs)(`div`,{className:`craft-icon-wrapper`,children:[(0,F.jsx)(`div`,{className:`craft-icon`,children:(0,F.jsx)(E,{})}),(0,F.jsx)(`div`,{className:`craft-number`,children:`02`})]}),e[69]=Me):Me=e[69];let Ne;e[70]===Symbol.for(`react.memo_cache_sentinel`)?(Ne=(0,F.jsx)(`div`,{className:`col-lg-4 col-md-6`,"data-aos":`fade-up`,"data-aos-delay":`200`,children:(0,F.jsxs)(`div`,{className:`craft-card`,children:[Me,(0,F.jsxs)(`div`,{className:`craft-content`,children:[(0,F.jsx)(`h4`,{children:`Traditional Tanning`}),(0,F.jsx)(`p`,{children:`Time-honored vegetable tanning techniques`})]})]})}),e[70]=Ne):Ne=e[70];let Pe;e[71]===Symbol.for(`react.memo_cache_sentinel`)?(Pe=(0,F.jsxs)(`div`,{className:`craft-icon-wrapper`,children:[(0,F.jsx)(`div`,{className:`craft-icon`,children:(0,F.jsx)(h,{})}),(0,F.jsx)(`div`,{className:`craft-number`,children:`03`})]}),e[71]=Pe):Pe=e[71];let Fe;e[72]===Symbol.for(`react.memo_cache_sentinel`)?(Fe=(0,F.jsx)(`div`,{className:`col-lg-4 col-md-6`,"data-aos":`fade-up`,"data-aos-delay":`300`,children:(0,F.jsxs)(`div`,{className:`craft-card`,children:[Pe,(0,F.jsxs)(`div`,{className:`craft-content`,children:[(0,F.jsx)(`h4`,{children:`Artistic Design`}),(0,F.jsx)(`p`,{children:`Modern patterns with timeless craftsmanship`})]})]})}),e[72]=Fe):Fe=e[72];let Ie;e[73]===Symbol.for(`react.memo_cache_sentinel`)?(Ie=(0,F.jsxs)(`div`,{className:`craft-icon-wrapper`,children:[(0,F.jsx)(`div`,{className:`craft-icon`,children:(0,F.jsx)(g,{})}),(0,F.jsx)(`div`,{className:`craft-number`,children:`04`})]}),e[73]=Ie):Ie=e[73];let Le;e[74]===Symbol.for(`react.memo_cache_sentinel`)?(Le=(0,F.jsx)(`div`,{className:`col-lg-4 col-md-6`,"data-aos":`fade-up`,"data-aos-delay":`400`,children:(0,F.jsxs)(`div`,{className:`craft-card`,children:[Ie,(0,F.jsxs)(`div`,{className:`craft-content`,children:[(0,F.jsx)(`h4`,{children:`Precision Cutting`}),(0,F.jsx)(`p`,{children:`Meticulously hand-cut by skilled artisans`})]})]})}),e[74]=Le):Le=e[74];let Re;e[75]===Symbol.for(`react.memo_cache_sentinel`)?(Re=(0,F.jsxs)(`div`,{className:`craft-icon-wrapper`,children:[(0,F.jsx)(`div`,{className:`craft-icon`,children:(0,F.jsx)(T,{})}),(0,F.jsx)(`div`,{className:`craft-number`,children:`05`})]}),e[75]=Re):Re=e[75];let ze;e[76]===Symbol.for(`react.memo_cache_sentinel`)?(ze=(0,F.jsx)(`div`,{className:`col-lg-4 col-md-6`,"data-aos":`fade-up`,"data-aos-delay":`500`,children:(0,F.jsxs)(`div`,{className:`craft-card`,children:[Re,(0,F.jsxs)(`div`,{className:`craft-content`,children:[(0,F.jsx)(`h4`,{children:`Expert Stitching`}),(0,F.jsx)(`p`,{children:`Traditional hand-stitching techniques`})]})]})}),e[76]=ze):ze=e[76];let Be;e[77]===Symbol.for(`react.memo_cache_sentinel`)?(Be=(0,F.jsxs)(`div`,{className:`craft-icon-wrapper`,children:[(0,F.jsx)(`div`,{className:`craft-icon`,children:(0,F.jsx)(ee,{})}),(0,F.jsx)(`div`,{className:`craft-number`,children:`06`})]}),e[77]=Be):Be=e[77];let Ve;e[78]===Symbol.for(`react.memo_cache_sentinel`)?(Ve=(0,F.jsx)(`section`,{className:`crafting-process-section`,children:(0,F.jsxs)(`div`,{className:`container`,children:[ke,(0,F.jsxs)(`div`,{className:`row g-4`,children:[je,Ne,Fe,Le,ze,(0,F.jsx)(`div`,{className:`col-lg-4 col-md-6`,"data-aos":`fade-up`,"data-aos-delay":`600`,children:(0,F.jsxs)(`div`,{className:`craft-card`,children:[Be,(0,F.jsxs)(`div`,{className:`craft-content`,children:[(0,F.jsx)(`h4`,{children:`Quality Assurance`}),(0,F.jsx)(`p`,{children:`Rigorous inspection for premium quality`})]})]})})]})]})}),e[78]=Ve):Ve=e[78];let He;e[79]===Symbol.for(`react.memo_cache_sentinel`)?(He=(0,F.jsx)(`h2`,{className:`text-center mb-5`,children:`Why Our Leather?`}),e[79]=He):He=e[79];let Ue;e[80]===Symbol.for(`react.memo_cache_sentinel`)?(Ue=(0,F.jsx)(`div`,{className:`col-md-3`,"data-aos":`fade-up`,children:(0,F.jsxs)(`div`,{className:`why-card`,children:[(0,F.jsx)(D,{className:`icon`}),(0,F.jsx)(`h5`,{children:`Premium Products`}),(0,F.jsx)(`p`,{children:`Bags, wallets & accessories crafted to perfection.`})]})}),e[80]=Ue):Ue=e[80];let We;e[81]===Symbol.for(`react.memo_cache_sentinel`)?(We=(0,F.jsx)(`div`,{className:`col-md-3`,"data-aos":`fade-up`,children:(0,F.jsxs)(`div`,{className:`why-card`,children:[(0,F.jsx)(k,{className:`icon`}),(0,F.jsx)(`h5`,{children:`Expert Craftsmanship`}),(0,F.jsx)(`p`,{children:`Handmade by experienced artisans.`})]})}),e[81]=We):We=e[81];let Ge;e[82]===Symbol.for(`react.memo_cache_sentinel`)?(Ge=(0,F.jsx)(`div`,{className:`col-md-3`,"data-aos":`fade-up`,children:(0,F.jsxs)(`div`,{className:`why-card`,children:[(0,F.jsx)(c,{className:`icon`}),(0,F.jsx)(`h5`,{children:`Sustainable`}),(0,F.jsx)(`p`,{children:`Eco-friendly leather processing.`})]})}),e[82]=Ge):Ge=e[82];let Ke;e[83]===Symbol.for(`react.memo_cache_sentinel`)?(Ke=(0,F.jsx)(`section`,{className:`why-section`,children:(0,F.jsxs)(`div`,{className:`container`,children:[He,(0,F.jsxs)(`div`,{className:`row`,children:[Ue,We,Ge,(0,F.jsx)(`div`,{className:`col-md-3`,"data-aos":`fade-up`,children:(0,F.jsxs)(`div`,{className:`why-card`,children:[(0,F.jsx)(A,{className:`icon`}),(0,F.jsx)(`h5`,{children:`Long Lasting`}),(0,F.jsx)(`p`,{children:`Products that age beautifully over time.`})]})})]})]})}),e[83]=Ke):Ke=e[83];let qe;e[84]===Symbol.for(`react.memo_cache_sentinel`)?(qe=(0,F.jsxs)(`div`,{className:`text-center mb-5`,"data-aos":`fade-up`,children:[(0,F.jsx)(`h2`,{className:`section-title fw-bold mb-3`,style:{color:`#3E2723`},children:`Our Team`}),(0,F.jsx)(`p`,{className:`section-subtitle text-muted`,children:`Meet the talented artisans behind our leather craftsmanship`})]}),e[84]=qe):qe=e[84];let Je;e[85]===Symbol.for(`react.memo_cache_sentinel`)?(Je=(0,F.jsx)(`div`,{className:`team-image-wrapper mb-4`,children:(0,F.jsx)(`img`,{src:St,alt:`Team Member 1`,className:`team-image`,style:{width:`200px`,height:`200px`,borderRadius:`50%`,objectFit:`cover`,border:`4px solid #D7A86E`,boxShadow:`0 8px 25px rgba(215, 168, 110, 0.3)`,display:`block`,margin:`0 auto`}})}),e[85]=Je):Je=e[85];let Xe,Ze;e[86]===Symbol.for(`react.memo_cache_sentinel`)?(Xe=(0,F.jsx)(`h4`,{className:`team-name fw-bold mb-2`,style:{color:`#3E2723`},children:`Mariya`}),Ze=(0,F.jsx)(`p`,{className:`team-role text-muted mb-3`,children:`Master Leather Craftsman`}),e[86]=Xe,e[87]=Ze):(Xe=e[86],Ze=e[87]);let Qe;e[88]===Symbol.for(`react.memo_cache_sentinel`)?(Qe={color:`#3E2723`,transition:`all 0.3s ease`},e[88]=Qe):Qe=e[88];let $e;e[89]===Symbol.for(`react.memo_cache_sentinel`)?($e=(0,F.jsx)(`a`,{href:`#`,className:`social-link text-decoration-none`,style:Qe,onMouseOver:Yt,onMouseOut:Jt,children:(0,F.jsx)(`i`,{className:`bi bi-facebook fs-5`})}),e[89]=$e):$e=e[89];let et;e[90]===Symbol.for(`react.memo_cache_sentinel`)?(et={color:`#3E2723`,transition:`all 0.3s ease`},e[90]=et):et=e[90];let tt;e[91]===Symbol.for(`react.memo_cache_sentinel`)?(tt=(0,F.jsx)(`a`,{href:`#`,className:`social-link text-decoration-none`,style:et,onMouseOver:qt,onMouseOut:Kt,children:(0,F.jsx)(`i`,{className:`bi bi-twitter fs-5`})}),e[91]=tt):tt=e[91];let nt;e[92]===Symbol.for(`react.memo_cache_sentinel`)?(nt={color:`#3E2723`,transition:`all 0.3s ease`},e[92]=nt):nt=e[92];let rt;e[93]===Symbol.for(`react.memo_cache_sentinel`)?(rt=(0,F.jsx)(`a`,{href:`#`,className:`social-link text-decoration-none`,style:nt,onMouseOver:Gt,onMouseOut:Wt,children:(0,F.jsx)(`i`,{className:`bi bi-instagram fs-5`})}),e[93]=rt):rt=e[93];let it;e[94]===Symbol.for(`react.memo_cache_sentinel`)?(it={color:`#3E2723`,transition:`all 0.3s ease`},e[94]=it):it=e[94];let at;e[95]===Symbol.for(`react.memo_cache_sentinel`)?(at=(0,F.jsx)(`div`,{className:`col-lg-4 col-md-6`,"data-aos":`fade-up`,"data-aos-delay":`100`,children:(0,F.jsxs)(`div`,{className:`team-card text-center`,children:[Je,Xe,Ze,(0,F.jsxs)(`div`,{className:`team-social-links d-flex justify-content-center gap-3`,children:[$e,tt,rt,(0,F.jsx)(`a`,{href:`#`,className:`social-link text-decoration-none`,style:it,onMouseOver:Ut,onMouseOut:Ht,children:(0,F.jsx)(`i`,{className:`bi bi-linkedin fs-5`})})]})]})}),e[95]=at):at=e[95];let ot;e[96]===Symbol.for(`react.memo_cache_sentinel`)?(ot=(0,F.jsx)(`div`,{className:`team-image-wrapper mb-4`,children:(0,F.jsx)(`img`,{src:Ct,alt:`Team Member 2`,className:`team-image`,style:{width:`200px`,height:`200px`,borderRadius:`50%`,objectFit:`cover`,border:`4px solid #D7A86E`,boxShadow:`0 8px 25px rgba(215, 168, 110, 0.3)`,display:`block`,margin:`0 auto`}})}),e[96]=ot):ot=e[96];let st,ct;e[97]===Symbol.for(`react.memo_cache_sentinel`)?(st=(0,F.jsx)(`h4`,{className:`team-name fw-bold mb-2`,style:{color:`#3E2723`},children:`Sophia `}),ct=(0,F.jsx)(`p`,{className:`team-role text-muted mb-3`,children:`Lead Designer`}),e[97]=st,e[98]=ct):(st=e[97],ct=e[98]);let lt;e[99]===Symbol.for(`react.memo_cache_sentinel`)?(lt={color:`#3E2723`,transition:`all 0.3s ease`},e[99]=lt):lt=e[99];let ut;e[100]===Symbol.for(`react.memo_cache_sentinel`)?(ut=(0,F.jsx)(`a`,{href:`#`,className:`social-link text-decoration-none`,style:lt,onMouseOver:Vt,onMouseOut:Bt,children:(0,F.jsx)(`i`,{className:`bi bi-facebook fs-5`})}),e[100]=ut):ut=e[100];let dt;e[101]===Symbol.for(`react.memo_cache_sentinel`)?(dt={color:`#3E2723`,transition:`all 0.3s ease`},e[101]=dt):dt=e[101];let ft;e[102]===Symbol.for(`react.memo_cache_sentinel`)?(ft=(0,F.jsx)(`a`,{href:`#`,className:`social-link text-decoration-none`,style:dt,onMouseOver:zt,onMouseOut:Rt,children:(0,F.jsx)(`i`,{className:`bi bi-twitter fs-5`})}),e[102]=ft):ft=e[102];let pt;e[103]===Symbol.for(`react.memo_cache_sentinel`)?(pt={color:`#3E2723`,transition:`all 0.3s ease`},e[103]=pt):pt=e[103];let mt;e[104]===Symbol.for(`react.memo_cache_sentinel`)?(mt=(0,F.jsx)(`a`,{href:`#`,className:`social-link text-decoration-none`,style:pt,onMouseOver:Lt,onMouseOut:It,children:(0,F.jsx)(`i`,{className:`bi bi-instagram fs-5`})}),e[104]=mt):mt=e[104];let ht;e[105]===Symbol.for(`react.memo_cache_sentinel`)?(ht={color:`#3E2723`,transition:`all 0.3s ease`},e[105]=ht):ht=e[105];let gt;e[106]===Symbol.for(`react.memo_cache_sentinel`)?(gt=(0,F.jsx)(`div`,{className:`col-lg-4 col-md-6`,"data-aos":`fade-up`,"data-aos-delay":`200`,children:(0,F.jsxs)(`div`,{className:`team-card text-center`,children:[ot,st,ct,(0,F.jsxs)(`div`,{className:`team-social-links d-flex justify-content-center gap-3`,children:[ut,ft,mt,(0,F.jsx)(`a`,{href:`#`,className:`social-link text-decoration-none`,style:ht,onMouseOver:Ft,onMouseOut:Pt,children:(0,F.jsx)(`i`,{className:`bi bi-linkedin fs-5`})})]})]})}),e[106]=gt):gt=e[106];let _t;e[107]===Symbol.for(`react.memo_cache_sentinel`)?(_t=(0,F.jsx)(`div`,{className:`team-image-wrapper mb-4`,children:(0,F.jsx)(`img`,{src:wt,alt:`Team Member 3`,className:`team-image`,style:{width:`200px`,height:`200px`,borderRadius:`50%`,objectFit:`cover`,border:`4px solid #D7A86E`,boxShadow:`0 8px 25px rgba(215, 168, 110, 0.3)`,display:`block`,margin:`0 auto`}})}),e[107]=_t):_t=e[107];let vt,yt;e[108]===Symbol.for(`react.memo_cache_sentinel`)?(vt=(0,F.jsx)(`h4`,{className:`team-name fw-bold mb-2`,style:{color:`#3E2723`},children:`Jhon`}),yt=(0,F.jsx)(`p`,{className:`team-role text-muted mb-3`,children:`Quality Control Expert`}),e[108]=vt,e[109]=yt):(vt=e[108],yt=e[109]);let bt;e[110]===Symbol.for(`react.memo_cache_sentinel`)?(bt={color:`#3E2723`,transition:`all 0.3s ease`},e[110]=bt):bt=e[110];let Tt;e[111]===Symbol.for(`react.memo_cache_sentinel`)?(Tt=(0,F.jsx)(`a`,{href:`#`,className:`social-link text-decoration-none`,style:bt,onMouseOver:Nt,onMouseOut:Mt,children:(0,F.jsx)(`i`,{className:`bi bi-facebook fs-5`})}),e[111]=Tt):Tt=e[111];let Qt;e[112]===Symbol.for(`react.memo_cache_sentinel`)?(Qt={color:`#3E2723`,transition:`all 0.3s ease`},e[112]=Qt):Qt=e[112];let $t;e[113]===Symbol.for(`react.memo_cache_sentinel`)?($t=(0,F.jsx)(`a`,{href:`#`,className:`social-link text-decoration-none`,style:Qt,onMouseOver:jt,onMouseOut:At,children:(0,F.jsx)(`i`,{className:`bi bi-twitter fs-5`})}),e[113]=$t):$t=e[113];let en;e[114]===Symbol.for(`react.memo_cache_sentinel`)?(en={color:`#3E2723`,transition:`all 0.3s ease`},e[114]=en):en=e[114];let tn;e[115]===Symbol.for(`react.memo_cache_sentinel`)?(tn=(0,F.jsx)(`a`,{href:`#`,className:`social-link text-decoration-none`,style:en,onMouseOver:kt,onMouseOut:Ot,children:(0,F.jsx)(`i`,{className:`bi bi-instagram fs-5`})}),e[115]=tn):tn=e[115];let nn;e[116]===Symbol.for(`react.memo_cache_sentinel`)?(nn={color:`#3E2723`,transition:`all 0.3s ease`},e[116]=nn):nn=e[116];let rn;e[117]===Symbol.for(`react.memo_cache_sentinel`)?(rn=(0,F.jsx)(`section`,{className:`team-section py-5`,children:(0,F.jsxs)(`div`,{className:`container`,children:[qe,(0,F.jsxs)(`div`,{className:`row g-4`,children:[at,gt,(0,F.jsx)(`div`,{className:`col-lg-4 col-md-6`,"data-aos":`fade-up`,"data-aos-delay":`300`,children:(0,F.jsxs)(`div`,{className:`team-card text-center`,children:[_t,vt,yt,(0,F.jsxs)(`div`,{className:`team-social-links d-flex justify-content-center gap-3`,children:[Tt,$t,tn,(0,F.jsx)(`a`,{href:`#`,className:`social-link text-decoration-none`,style:nn,onMouseOver:Dt,onMouseOut:Et,children:(0,F.jsx)(`i`,{className:`bi bi-linkedin fs-5`})})]})]})})]})]})}),e[117]=rn):rn=e[117];let an,on;e[118]===Symbol.for(`react.memo_cache_sentinel`)?(an=(0,F.jsx)(`section`,{className:`cta-section text-center`,children:(0,F.jsxs)(`div`,{className:`container`,children:[(0,F.jsx)(`h2`,{children:`Upgrade Your Style with Leather`}),(0,F.jsx)(`p`,{children:`Shop premium leather products today.`}),(0,F.jsx)(s,{to:`/shop`,className:`btn btn-light mt-3`,children:`Shop Now`})]})}),on=(0,F.jsx)(ge,{}),e[118]=an,e[119]=on):(an=e[118],on=e[119]);let sn;return e[120]!==U||e[121]!==$?(sn=(0,F.jsxs)(F.Fragment,{children:[U,W,$,Oe,Ve,Ke,rn,an,on]}),e[120]=U,e[121]=$,e[122]=sn):sn=e[122],sn}function Et(e){e.currentTarget.style.color=`#3E2723`,e.currentTarget.style.transform=`translateY(0)`}function Dt(e){e.currentTarget.style.color=`#0077b5`,e.currentTarget.style.transform=`translateY(-3px)`}function Ot(e){e.currentTarget.style.color=`#3E2723`,e.currentTarget.style.transform=`translateY(0)`}function kt(e){e.currentTarget.style.color=`#e4405f`,e.currentTarget.style.transform=`translateY(-3px)`}function At(e){e.currentTarget.style.color=`#3E2723`,e.currentTarget.style.transform=`translateY(0)`}function jt(e){e.currentTarget.style.color=`#1da1f2`,e.currentTarget.style.transform=`translateY(-3px)`}function Mt(e){e.currentTarget.style.color=`#3E2723`,e.currentTarget.style.transform=`translateY(0)`}function Nt(e){e.currentTarget.style.color=`#1877f2`,e.currentTarget.style.transform=`translateY(-3px)`}function Pt(e){e.currentTarget.style.color=`#3E2723`,e.currentTarget.style.transform=`translateY(0)`}function Ft(e){e.currentTarget.style.color=`#0077b5`,e.currentTarget.style.transform=`translateY(-3px)`}function It(e){e.currentTarget.style.color=`#3E2723`,e.currentTarget.style.transform=`translateY(0)`}function Lt(e){e.currentTarget.style.color=`#e4405f`,e.currentTarget.style.transform=`translateY(-3px)`}function Rt(e){e.currentTarget.style.color=`#3E2723`,e.currentTarget.style.transform=`translateY(0)`}function zt(e){e.currentTarget.style.color=`#1da1f2`,e.currentTarget.style.transform=`translateY(-3px)`}function Bt(e){e.currentTarget.style.color=`#3E2723`,e.currentTarget.style.transform=`translateY(0)`}function Vt(e){e.currentTarget.style.color=`#1877f2`,e.currentTarget.style.transform=`translateY(-3px)`}function Ht(e){e.currentTarget.style.color=`#3E2723`,e.currentTarget.style.transform=`translateY(0)`}function Ut(e){e.currentTarget.style.color=`#0077b5`,e.currentTarget.style.transform=`translateY(-3px)`}function Wt(e){e.currentTarget.style.color=`#3E2723`,e.currentTarget.style.transform=`translateY(0)`}function Gt(e){e.currentTarget.style.color=`#e4405f`,e.currentTarget.style.transform=`translateY(-3px)`}function Kt(e){e.currentTarget.style.color=`#3E2723`,e.currentTarget.style.transform=`translateY(0)`}function qt(e){e.currentTarget.style.color=`#1da1f2`,e.currentTarget.style.transform=`translateY(-3px)`}function Jt(e){e.currentTarget.style.color=`#3E2723`,e.currentTarget.style.transform=`translateY(0)`}function Yt(e){e.currentTarget.style.color=`#1877f2`,e.currentTarget.style.transform=`translateY(-3px)`}function Xt(){G.default.init({duration:1e3,once:!0})}function Zt(){let e=document.createElement(`link`);return e.rel=`stylesheet`,e.href=`https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css`,document.head.appendChild(e),()=>{document.head.removeChild(e)}}function Qt(){let e=(0,te.c)(117),{getCartCount:t}=ne(),n;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(n=[],e[0]=n):n=e[0],(0,N.useEffect)(vn,n);let r;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(r=[],e[1]=r):r=e[1],(0,N.useEffect)(_n,r);let i;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(i={name:``,email:``,phone:``,subject:``,message:``},e[2]=i):i=e[2];let[a,o]=(0,N.useState)(i),[c,l]=(0,N.useState)(``),[u,d]=(0,N.useState)(!1),f;e[3]===Symbol.for(`react.memo_cache_sentinel`)?(f=[],e[3]=f):f=e[3],(0,N.useEffect)(gn,f);let p;e[4]===Symbol.for(`react.memo_cache_sentinel`)?(p=e=>{let{name:t,value:n}=e.target;o(e=>({...e,[t]:n}))},e[4]=p):p=e[4];let m=p,h;e[5]===Symbol.for(`react.memo_cache_sentinel`)?(h=async e=>{e.preventDefault(),d(!0),setTimeout(()=>{l(`success`),o({name:``,email:``,phone:``,subject:``,message:``}),d(!1),setTimeout(()=>l(``),5e3)},1500)},e[5]=h):h=e[5];let g=h,_;e[6]===Symbol.for(`react.memo_cache_sentinel`)?(_={backgroundColor:`#3E2723`},e[6]=_):_=e[6];let v;e[7]===Symbol.for(`react.memo_cache_sentinel`)?(v=(0,F.jsxs)(s,{className:`navbar-brand text-white fw-bold`,to:`/`,children:[(0,F.jsx)(`span`,{style:{color:`#D7A86E`},children:`LEATHER`}),(0,F.jsx)(`span`,{style:{color:`#ffffff`},children:`LUXE`})]}),e[7]=v):v=e[7];let y;e[8]===Symbol.for(`react.memo_cache_sentinel`)?(y=(0,F.jsx)(`button`,{className:`navbar-toggler bg-white`,type:`button`,"data-bs-toggle":`collapse`,"data-bs-target":`#mainNavbar`,children:(0,F.jsx)(`span`,{className:`navbar-toggler-icon`})}),e[8]=y):y=e[8];let b;e[9]===Symbol.for(`react.memo_cache_sentinel`)?(b=(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/`,className:`nav-link text-white`,children:`Home`})}),e[9]=b):b=e[9];let x;e[10]===Symbol.for(`react.memo_cache_sentinel`)?(x=(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/shop`,className:`nav-link text-white`,children:`Shop`})}),e[10]=x):x=e[10];let S;e[11]===Symbol.for(`react.memo_cache_sentinel`)?(S=(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/about`,className:`nav-link text-white`,children:`About`})}),e[11]=S):S=e[11];let C;e[12]===Symbol.for(`react.memo_cache_sentinel`)?(C=(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/contact`,className:`nav-link text-white`,children:`Contact`})}),e[12]=C):C=e[12];let w;e[13]===Symbol.for(`react.memo_cache_sentinel`)?(w=(0,F.jsx)(`i`,{className:`fas fa-shopping-cart`}),e[13]=w):w=e[13];let T;e[14]===Symbol.for(`react.memo_cache_sentinel`)?(T={transform:`translate(25%, -50%)`},e[14]=T):T=e[14];let E;e[15]===t?E=e[16]:(E=t(),e[15]=t,e[16]=E);let D;e[17]===Symbol.for(`react.memo_cache_sentinel`)?(D=(0,F.jsx)(`span`,{className:`visually-hidden`,children:`cart items`}),e[17]=D):D=e[17];let O;e[18]===E?O=e[19]:(O=(0,F.jsx)(`li`,{className:`nav-item mx-2`,children:(0,F.jsxs)(s,{to:`/cart`,className:`btn btn-outline-light position-relative`,children:[w,(0,F.jsxs)(`span`,{className:`position-absolute top-0 start-100 translate-middle-x badge rounded-pill bg-danger`,style:T,children:[E,D]})]})}),e[18]=E,e[19]=O);let k;e[20]===Symbol.for(`react.memo_cache_sentinel`)?(k=(0,F.jsx)(`li`,{className:`nav-item mx-2`,children:(0,F.jsx)(s,{to:`/login`,className:`btn btn-primary fw-bold`,children:`Login`})}),e[20]=k):k=e[20];let A;e[21]===O?A=e[22]:(A=(0,F.jsx)(`nav`,{className:`navbar navbar-expand-lg px-4 shadow-sm`,style:_,children:(0,F.jsxs)(`div`,{className:`container-fluid`,children:[v,y,(0,F.jsx)(`div`,{className:`collapse navbar-collapse justify-content-end`,id:`mainNavbar`,children:(0,F.jsxs)(`ul`,{className:`navbar-nav align-items-center`,children:[b,x,S,C,O,k]})})]})}),e[21]=O,e[22]=A);let j;e[23]===Symbol.for(`react.memo_cache_sentinel`)?(j=(0,F.jsx)(`br`,{}),e[23]=j):j=e[23];let M;e[24]===Symbol.for(`react.memo_cache_sentinel`)?(M=(0,F.jsx)(`div`,{className:`container text-center position-relative`,children:(0,F.jsx)(`h1`,{className:`fw-bold mb-3`,"data-aos":`fade-down`,children:`Get In Touch`})}),e[24]=M):M=e[24];let P,I;e[25]===Symbol.for(`react.memo_cache_sentinel`)?(P=(0,F.jsx)(`h3`,{className:`mb-4 fw-bold`,style:{color:`#3E2723`},children:`Contact Information`}),I=(0,F.jsx)(`p`,{className:`text-muted mb-4`,children:`Feel free to reach out to us through any of the following channels. We're here to help with all your leather needs.`}),e[25]=P,e[26]=I):(P=e[25],I=e[26]);let L;e[27]===Symbol.for(`react.memo_cache_sentinel`)?(L={transition:`all 0.3s ease`,cursor:`pointer`},e[27]=L):L=e[27];let R;e[28]===Symbol.for(`react.memo_cache_sentinel`)?(R={width:`56px`,height:`56px`,borderRadius:`50%`,background:`linear-gradient(135deg, #D7A86E 0%, #3E2723 100%)`,boxShadow:`0 4px 15px rgba(215, 168, 110, 0.3)`,transition:`all 0.3s ease`,position:`relative`},e[28]=R):R=e[28];let z;e[29]===Symbol.for(`react.memo_cache_sentinel`)?(z=(0,F.jsx)(`div`,{className:`icon-wrapper me-3 d-flex align-items-center justify-content-center flex-shrink-0`,style:R,children:(0,F.jsx)(`i`,{className:`bi bi-geo-alt-fill`,style:{fontSize:`1.5rem`,color:`#ffffff`,filter:`drop-shadow(0 2px 4px rgba(0,0,0,0.2))`,position:`absolute`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`}})}),e[29]=z):z=e[29];let B;e[30]===Symbol.for(`react.memo_cache_sentinel`)?(B=(0,F.jsx)(`h6`,{className:`mb-1 fw-bold`,style:{color:`#3E2723`},children:`Address`}),e[30]=B):B=e[30];let V;e[31]===Symbol.for(`react.memo_cache_sentinel`)?(V=(0,F.jsx)(`div`,{className:`contact-card mb-3 p-4 bg-white rounded-3 shadow-sm border-0`,style:L,onMouseOver:hn,onMouseOut:mn,children:(0,F.jsxs)(`div`,{className:`d-flex align-items-center`,children:[z,(0,F.jsxs)(`div`,{children:[B,(0,F.jsxs)(`p`,{className:`mb-0 text-muted small`,children:[`23 valluvar Street`,(0,F.jsx)(`br`,{}),` Tirupattur,634560`]})]})]})}),e[31]=V):V=e[31];let H;e[32]===Symbol.for(`react.memo_cache_sentinel`)?(H={transition:`all 0.3s ease`,cursor:`pointer`},e[32]=H):H=e[32];let U;e[33]===Symbol.for(`react.memo_cache_sentinel`)?(U={width:`56px`,height:`56px`,borderRadius:`50%`,background:`linear-gradient(135deg, #D7A86E 0%, #3E2723 100%)`,boxShadow:`0 4px 15px rgba(215, 168, 110, 0.3)`,transition:`all 0.3s ease`,position:`relative`},e[33]=U):U=e[33];let W;e[34]===Symbol.for(`react.memo_cache_sentinel`)?(W=(0,F.jsx)(`div`,{className:`icon-wrapper me-3 d-flex align-items-center justify-content-center flex-shrink-0`,style:U,children:(0,F.jsx)(`i`,{className:`bi bi-telephone-fill`,style:{fontSize:`1.5rem`,color:`#ffffff`,filter:`drop-shadow(0 2px 4px rgba(0,0,0,0.2))`,position:`absolute`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`}})}),e[34]=W):W=e[34];let re;e[35]===Symbol.for(`react.memo_cache_sentinel`)?(re=(0,F.jsx)(`h6`,{className:`mb-1 fw-bold`,style:{color:`#3E2723`},children:`Phone`}),e[35]=re):re=e[35];let G;e[36]===Symbol.for(`react.memo_cache_sentinel`)?(G=(0,F.jsx)(`div`,{className:`contact-card mb-3 p-4 bg-white rounded-3 shadow-sm border-0`,style:H,onMouseOver:pn,onMouseOut:fn,children:(0,F.jsxs)(`div`,{className:`d-flex align-items-center`,children:[W,(0,F.jsxs)(`div`,{children:[re,(0,F.jsxs)(`p`,{className:`mb-0 text-muted small`,children:[` 9842365882`,(0,F.jsx)(`br`,{}),`Mon-Fri: 9AM-6PM `]})]})]})}),e[36]=G):G=e[36];let K;e[37]===Symbol.for(`react.memo_cache_sentinel`)?(K={transition:`all 0.3s ease`,cursor:`pointer`},e[37]=K):K=e[37];let ie;e[38]===Symbol.for(`react.memo_cache_sentinel`)?(ie={width:`56px`,height:`56px`,borderRadius:`50%`,background:`linear-gradient(135deg, #D7A86E 0%, #3E2723 100%)`,boxShadow:`0 4px 15px rgba(215, 168, 110, 0.3)`,transition:`all 0.3s ease`,position:`relative`},e[38]=ie):ie=e[38];let ae;e[39]===Symbol.for(`react.memo_cache_sentinel`)?(ae=(0,F.jsx)(`div`,{className:`icon-wrapper me-3 d-flex align-items-center justify-content-center flex-shrink-0`,style:ie,children:(0,F.jsx)(`i`,{className:`bi bi-envelope-fill`,style:{fontSize:`1.5rem`,color:`#ffffff`,filter:`drop-shadow(0 2px 4px rgba(0,0,0,0.2))`,position:`absolute`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`}})}),e[39]=ae):ae=e[39];let q;e[40]===Symbol.for(`react.memo_cache_sentinel`)?(q=(0,F.jsx)(`div`,{className:`contact-card mb-3 p-4 bg-white rounded-3 shadow-sm border-0`,style:K,onMouseOver:dn,onMouseOut:un,children:(0,F.jsxs)(`div`,{className:`d-flex align-items-center`,children:[ae,(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h6`,{className:`mb-1 fw-bold`,style:{color:`#3E2723`},children:`Email`}),(0,F.jsx)(`p`,{className:`mb-0 text-muted small`,children:`luxuryluxe@.com`})]})]})}),e[40]=q):q=e[40];let oe;e[41]===Symbol.for(`react.memo_cache_sentinel`)?(oe={transition:`all 0.3s ease`,cursor:`pointer`},e[41]=oe):oe=e[41];let se;e[42]===Symbol.for(`react.memo_cache_sentinel`)?(se={width:`56px`,height:`56px`,borderRadius:`50%`,background:`linear-gradient(135deg, #D7A86E 0%, #3E2723 100%)`,boxShadow:`0 4px 15px rgba(215, 168, 110, 0.3)`,transition:`all 0.3s ease`,position:`relative`},e[42]=se):se=e[42];let J;e[43]===Symbol.for(`react.memo_cache_sentinel`)?(J=(0,F.jsx)(`div`,{className:`icon-wrapper me-3 d-flex align-items-center justify-content-center flex-shrink-0`,style:se,children:(0,F.jsx)(`i`,{className:`bi bi-clock-fill`,style:{fontSize:`1.5rem`,color:`#ffffff`,filter:`drop-shadow(0 2px 4px rgba(0,0,0,0.2))`,position:`absolute`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`}})}),e[43]=J):J=e[43];let ce;e[44]===Symbol.for(`react.memo_cache_sentinel`)?(ce=(0,F.jsx)(`h6`,{className:`mb-1 fw-bold`,style:{color:`#3E2723`},children:`Business Hours`}),e[44]=ce):ce=e[44];let le;e[45]===Symbol.for(`react.memo_cache_sentinel`)?(le=(0,F.jsx)(`br`,{}),e[45]=le):le=e[45];let ue;e[46]===Symbol.for(`react.memo_cache_sentinel`)?(ue=(0,F.jsx)(`div`,{className:`contact-card mb-4 p-4 bg-white rounded-3 shadow-sm border-0`,style:oe,onMouseOver:ln,onMouseOut:cn,children:(0,F.jsxs)(`div`,{className:`d-flex align-items-center`,children:[J,(0,F.jsxs)(`div`,{children:[ce,(0,F.jsxs)(`p`,{className:`mb-0 text-muted small`,children:[`Monday - Friday: 9AM - 6PM`,le,`Saturday: 10AM - 4PM`,(0,F.jsx)(`br`,{}),`Sunday: Closed`]})]})]})}),e[46]=ue):ue=e[46];let de;e[47]===Symbol.for(`react.memo_cache_sentinel`)?(de=(0,F.jsx)(`h5`,{className:`mb-4 fw-bold`,style:{color:`#3E2723`},children:`Follow Us`}),e[47]=de):de=e[47];let fe;e[48]===Symbol.for(`react.memo_cache_sentinel`)?(fe={width:`45px`,height:`45px`,borderRadius:`50%`,background:`linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)`,boxShadow:`0 2px 10px rgba(0,0,0,0.1)`,transition:`all 0.3s ease`,color:`#3E2723`},e[48]=fe):fe=e[48];let pe;e[49]===Symbol.for(`react.memo_cache_sentinel`)?(pe=(0,F.jsx)(`a`,{href:`#`,className:`social-icon-link d-flex align-items-center justify-content-center text-decoration-none`,style:fe,onMouseOver:sn,onMouseOut:on,children:(0,F.jsx)(`i`,{className:`bi bi-facebook`,style:{fontSize:`1.3rem`}})}),e[49]=pe):pe=e[49];let me;e[50]===Symbol.for(`react.memo_cache_sentinel`)?(me={width:`45px`,height:`45px`,borderRadius:`50%`,background:`linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)`,boxShadow:`0 2px 10px rgba(0,0,0,0.1)`,transition:`all 0.3s ease`,color:`#3E2723`},e[50]=me):me=e[50];let he;e[51]===Symbol.for(`react.memo_cache_sentinel`)?(he=(0,F.jsx)(`a`,{href:`#`,className:`social-icon-link d-flex align-items-center justify-content-center text-decoration-none`,style:me,onMouseOver:an,onMouseOut:rn,children:(0,F.jsx)(`i`,{className:`bi bi-twitter`,style:{fontSize:`1.3rem`}})}),e[51]=he):he=e[51];let Y;e[52]===Symbol.for(`react.memo_cache_sentinel`)?(Y={width:`45px`,height:`45px`,borderRadius:`50%`,background:`linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)`,boxShadow:`0 2px 10px rgba(0,0,0,0.1)`,transition:`all 0.3s ease`,color:`#3E2723`},e[52]=Y):Y=e[52];let _e;e[53]===Symbol.for(`react.memo_cache_sentinel`)?(_e=(0,F.jsx)(`a`,{href:`#`,className:`social-icon-link d-flex align-items-center justify-content-center text-decoration-none`,style:Y,onMouseOver:nn,onMouseOut:tn,children:(0,F.jsx)(`i`,{className:`bi bi-instagram`,style:{fontSize:`1.3rem`}})}),e[53]=_e):_e=e[53];let X;e[54]===Symbol.for(`react.memo_cache_sentinel`)?(X={width:`45px`,height:`45px`,borderRadius:`50%`,background:`linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)`,boxShadow:`0 2px 10px rgba(0,0,0,0.1)`,transition:`all 0.3s ease`,color:`#3E2723`},e[54]=X):X=e[54];let ve;e[55]===Symbol.for(`react.memo_cache_sentinel`)?(ve=(0,F.jsx)(`div`,{className:`col-lg-4 mb-4`,children:(0,F.jsxs)(`div`,{className:`contact-info`,"data-aos":`fade-right`,children:[P,I,V,G,q,ue,(0,F.jsxs)(`div`,{className:`text-center`,children:[de,(0,F.jsxs)(`div`,{className:`social-icons justify-content-center d-flex gap-3`,children:[pe,he,_e,(0,F.jsx)(`a`,{href:`#`,className:`social-icon-link d-flex align-items-center justify-content-center text-decoration-none`,style:X,onMouseOver:en,onMouseOut:$t,children:(0,F.jsx)(`i`,{className:`bi bi-linkedin`,style:{fontSize:`1.3rem`}})})]})]})]})}),e[55]=ve):ve=e[55];let ye;e[56]===Symbol.for(`react.memo_cache_sentinel`)?(ye=(0,F.jsx)(`h3`,{className:`mb-4 fw-bold`,style:{color:`#3E2723`},children:`Send Us a Message`}),e[56]=ye):ye=e[56];let be;e[57]===c?be=e[58]:(be=c===`success`&&(0,F.jsxs)(`div`,{className:`alert alert-success d-flex align-items-center mb-4`,role:`alert`,children:[(0,F.jsx)(ee,{className:`me-2`}),(0,F.jsx)(`div`,{children:`Thank you for your message! We'll get back to you soon.`})]}),e[57]=c,e[58]=be);let xe;e[59]===Symbol.for(`react.memo_cache_sentinel`)?(xe=(0,F.jsx)(`label`,{htmlFor:`name`,className:`form-label fw-semibold`,children:`Full Name *`}),e[59]=xe):xe=e[59];let Se;e[60]===Symbol.for(`react.memo_cache_sentinel`)?(Se={backgroundColor:`#f8f9fa`,border:`1px solid #dee2e6`,borderRadius:`8px`,color:`#2C1810`},e[60]=Se):Se=e[60];let Ce;e[61]===a.name?Ce=e[62]:(Ce=(0,F.jsxs)(`div`,{className:`col-md-6 mb-3`,children:[xe,(0,F.jsx)(`input`,{type:`text`,className:`form-control`,id:`name`,name:`name`,value:a.name,onChange:m,required:!0,placeholder:`John Doe`,style:Se})]}),e[61]=a.name,e[62]=Ce);let Z;e[63]===Symbol.for(`react.memo_cache_sentinel`)?(Z=(0,F.jsx)(`label`,{htmlFor:`email`,className:`form-label fw-semibold`,children:`Email Address *`}),e[63]=Z):Z=e[63];let Q;e[64]===Symbol.for(`react.memo_cache_sentinel`)?(Q={backgroundColor:`#f8f9fa`,border:`1px solid #dee2e6`,borderRadius:`8px`,color:`#2C1810`},e[64]=Q):Q=e[64];let $;e[65]===a.email?$=e[66]:($=(0,F.jsxs)(`div`,{className:`col-md-6 mb-3`,children:[Z,(0,F.jsx)(`input`,{type:`email`,className:`form-control`,id:`email`,name:`email`,value:a.email,onChange:m,required:!0,placeholder:`john@example.com`,style:Q})]}),e[65]=a.email,e[66]=$);let we;e[67]!==Ce||e[68]!==$?(we=(0,F.jsxs)(`div`,{className:`row`,children:[Ce,$]}),e[67]=Ce,e[68]=$,e[69]=we):we=e[69];let Te;e[70]===Symbol.for(`react.memo_cache_sentinel`)?(Te=(0,F.jsx)(`label`,{htmlFor:`phone`,className:`form-label fw-semibold`,children:`Phone Number`}),e[70]=Te):Te=e[70];let Ee;e[71]===Symbol.for(`react.memo_cache_sentinel`)?(Ee={backgroundColor:`#f8f9fa`,border:`1px solid #dee2e6`,borderRadius:`8px`,color:`#2C1810`},e[71]=Ee):Ee=e[71];let De;e[72]===a.phone?De=e[73]:(De=(0,F.jsxs)(`div`,{className:`col-md-6 mb-3`,children:[Te,(0,F.jsx)(`input`,{type:`tel`,className:`form-control`,id:`phone`,name:`phone`,value:a.phone,onChange:m,placeholder:`+1 (555) 123-4567`,style:Ee})]}),e[72]=a.phone,e[73]=De);let Oe;e[74]===Symbol.for(`react.memo_cache_sentinel`)?(Oe=(0,F.jsx)(`label`,{htmlFor:`subject`,className:`form-label fw-semibold`,children:`Subject *`}),e[74]=Oe):Oe=e[74];let ke,Ae,je,Me,Ne,Pe,Fe,Ie;e[75]===Symbol.for(`react.memo_cache_sentinel`)?(ke={backgroundColor:`#f8f9fa`,border:`1px solid #dee2e6`,borderRadius:`8px`,color:`#2C1810`},Ae=(0,F.jsx)(`option`,{value:``,children:`Select a subject`}),je=(0,F.jsx)(`option`,{value:`general`,children:`General Inquiry`}),Me=(0,F.jsx)(`option`,{value:`product`,children:`Product Question`}),Ne=(0,F.jsx)(`option`,{value:`order`,children:`Order Status`}),Pe=(0,F.jsx)(`option`,{value:`custom`,children:`Custom Order`}),Fe=(0,F.jsx)(`option`,{value:`partnership`,children:`Partnership`}),Ie=(0,F.jsx)(`option`,{value:`other`,children:`Other`}),e[75]=ke,e[76]=Ae,e[77]=je,e[78]=Me,e[79]=Ne,e[80]=Pe,e[81]=Fe,e[82]=Ie):(ke=e[75],Ae=e[76],je=e[77],Me=e[78],Ne=e[79],Pe=e[80],Fe=e[81],Ie=e[82]);let Le;e[83]===a.subject?Le=e[84]:(Le=(0,F.jsxs)(`div`,{className:`col-md-6 mb-3`,children:[Oe,(0,F.jsxs)(`select`,{className:`form-control`,id:`subject`,name:`subject`,value:a.subject,onChange:m,required:!0,style:ke,children:[Ae,je,Me,Ne,Pe,Fe,Ie]})]}),e[83]=a.subject,e[84]=Le);let Re;e[85]!==De||e[86]!==Le?(Re=(0,F.jsxs)(`div`,{className:`row`,children:[De,Le]}),e[85]=De,e[86]=Le,e[87]=Re):Re=e[87];let ze;e[88]===Symbol.for(`react.memo_cache_sentinel`)?(ze=(0,F.jsx)(`label`,{htmlFor:`message`,className:`form-label fw-semibold`,children:`Message *`}),e[88]=ze):ze=e[88];let Be;e[89]===Symbol.for(`react.memo_cache_sentinel`)?(Be={backgroundColor:`#f8f9fa`,border:`1px solid #dee2e6`,borderRadius:`8px`,color:`#2C1810`,resize:`vertical`},e[89]=Be):Be=e[89];let Ve;e[90]===a.message?Ve=e[91]:(Ve=(0,F.jsxs)(`div`,{className:`mb-3`,children:[ze,(0,F.jsx)(`textarea`,{className:`form-control`,id:`message`,name:`message`,rows:`5`,value:a.message,onChange:m,required:!0,placeholder:`Tell us how we can help you...`,style:Be})]}),e[90]=a.message,e[91]=Ve);let He;e[92]===Symbol.for(`react.memo_cache_sentinel`)?(He={backgroundColor:`#3E2723`,borderColor:`#3E2723`,borderRadius:`50px`},e[92]=He):He=e[92];let Ue;e[93]===u?Ue=e[94]:(Ue=u?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`span`,{className:`spinner-border spinner-border-sm me-2`,role:`status`,"aria-hidden":`true`}),`Sending...`]}):`Send Message`,e[93]=u,e[94]=Ue);let We;e[95]!==u||e[96]!==Ue?(We=(0,F.jsx)(`div`,{className:`text-center`,children:(0,F.jsx)(`button`,{type:`submit`,className:`btn btn-primary px-5 py-2 fw-bold`,disabled:u,style:He,children:Ue})}),e[95]=u,e[96]=Ue,e[97]=We):We=e[97];let Ge;e[98]!==we||e[99]!==Re||e[100]!==Ve||e[101]!==We?(Ge=(0,F.jsxs)(`form`,{onSubmit:g,children:[we,Re,Ve,We]}),e[98]=we,e[99]=Re,e[100]=Ve,e[101]=We,e[102]=Ge):Ge=e[102];let Ke;e[103]!==be||e[104]!==Ge?(Ke=(0,F.jsxs)(`div`,{className:`row`,children:[ve,(0,F.jsx)(`div`,{className:`col-lg-8`,children:(0,F.jsxs)(`div`,{className:`contact-form bg-white p-4 rounded shadow-sm`,"data-aos":`fade-left`,children:[ye,be,Ge]})})]}),e[103]=be,e[104]=Ge,e[105]=Ke):Ke=e[105];let qe;e[106]===Symbol.for(`react.memo_cache_sentinel`)?(qe=(0,F.jsxs)(`div`,{className:`text-center mb-4`,"data-aos":`fade-up`,children:[(0,F.jsx)(`h2`,{className:`fw-bold mb-3`,style:{color:`#3E2723`},children:`Frequently Asked Questions`}),(0,F.jsx)(`p`,{className:`text-muted`,children:`Quick answers to common questions about our leather products`})]}),e[106]=qe):qe=e[106];let Je;e[107]===Symbol.for(`react.memo_cache_sentinel`)?(Je=(0,F.jsx)(`div`,{className:`col-md-6 mb-3`,"data-aos":`fade-up`,"data-aos-delay":`100`,children:(0,F.jsx)(`div`,{className:`card border-0 shadow-sm`,children:(0,F.jsxs)(`div`,{className:`card-body`,children:[(0,F.jsx)(`h6`,{className:`fw-bold mb-2`,style:{color:`#3E2723`},children:`What types of leather do you use?`}),(0,F.jsx)(`p`,{className:`text-muted small mb-0`,children:`We use full-grain, top-grain, and genuine leather, all sourced from sustainable tanneries.`})]})})}),e[107]=Je):Je=e[107];let Ye;e[108]===Symbol.for(`react.memo_cache_sentinel`)?(Ye=(0,F.jsx)(`div`,{className:`col-md-6 mb-3`,"data-aos":`fade-up`,"data-aos-delay":`200`,children:(0,F.jsx)(`div`,{className:`card border-0 shadow-sm`,children:(0,F.jsxs)(`div`,{className:`card-body`,children:[(0,F.jsx)(`h6`,{className:`fw-bold mb-2`,style:{color:`#3E2723`},children:`Do you offer custom orders?`}),(0,F.jsx)(`p`,{className:`text-muted small mb-0`,children:`Yes, we specialize in custom leather goods. Contact us with your specifications.`})]})})}),e[108]=Ye):Ye=e[108];let Xe;e[109]===Symbol.for(`react.memo_cache_sentinel`)?(Xe=(0,F.jsx)(`div`,{className:`col-md-6 mb-3`,"data-aos":`fade-up`,"data-aos-delay":`300`,children:(0,F.jsx)(`div`,{className:`card border-0 shadow-sm`,children:(0,F.jsxs)(`div`,{className:`card-body`,children:[(0,F.jsx)(`h6`,{className:`fw-bold mb-2`,style:{color:`#3E2723`},children:`What is your return policy?`}),(0,F.jsx)(`p`,{className:`text-muted small mb-0`,children:`We offer a 30-day return policy for unused items in original packaging.`})]})})}),e[109]=Xe):Xe=e[109];let Ze;e[110]===Symbol.for(`react.memo_cache_sentinel`)?(Ze=(0,F.jsx)(`div`,{className:`row mt-5`,children:(0,F.jsxs)(`div`,{className:`col-12`,children:[qe,(0,F.jsxs)(`div`,{className:`row`,children:[Je,Ye,Xe,(0,F.jsx)(`div`,{className:`col-md-6 mb-3`,"data-aos":`fade-up`,"data-aos-delay":`400`,children:(0,F.jsx)(`div`,{className:`card border-0 shadow-sm`,children:(0,F.jsxs)(`div`,{className:`card-body`,children:[(0,F.jsx)(`h6`,{className:`fw-bold mb-2`,style:{color:`#3E2723`},children:`How long does shipping take?`}),(0,F.jsx)(`p`,{className:`text-muted small mb-0`,children:`Standard shipping takes 5-7 business days. Express options available at checkout.`})]})})})]})]})}),e[110]=Ze):Ze=e[110];let Qe;e[111]===Ke?Qe=e[112]:(Qe=(0,F.jsxs)(`div`,{className:`container mb-5`,children:[Ke,Ze]}),e[111]=Ke,e[112]=Qe);let $e;e[113]===Symbol.for(`react.memo_cache_sentinel`)?($e=(0,F.jsx)(ge,{}),e[113]=$e):$e=e[113];let et;return e[114]!==A||e[115]!==Qe?(et=(0,F.jsxs)(F.Fragment,{children:[A,j,M,Qe,$e]}),e[114]=A,e[115]=Qe,e[116]=et):et=e[116],et}function $t(e){e.currentTarget.style.background=`linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)`,e.currentTarget.style.color=`#3E2723`,e.currentTarget.style.transform=`translateY(0) scale(1)`,e.currentTarget.style.boxShadow=`0 2px 10px rgba(0,0,0,0.1)`}function en(e){e.currentTarget.style.background=`linear-gradient(135deg, #0077b5 0%, #005885 100%)`,e.currentTarget.style.color=`#ffffff`,e.currentTarget.style.transform=`translateY(-3px) scale(1.1)`,e.currentTarget.style.boxShadow=`0 6px 20px rgba(0, 119, 181, 0.4)`}function tn(e){e.currentTarget.style.background=`linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)`,e.currentTarget.style.color=`#3E2723`,e.currentTarget.style.transform=`translateY(0) scale(1)`,e.currentTarget.style.boxShadow=`0 2px 10px rgba(0,0,0,0.1)`}function nn(e){e.currentTarget.style.background=`linear-gradient(135deg, #e4405f 0%, #c13584 100%)`,e.currentTarget.style.color=`#ffffff`,e.currentTarget.style.transform=`translateY(-3px) scale(1.1)`,e.currentTarget.style.boxShadow=`0 6px 20px rgba(228, 64, 95, 0.4)`}function rn(e){e.currentTarget.style.background=`linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)`,e.currentTarget.style.color=`#3E2723`,e.currentTarget.style.transform=`translateY(0) scale(1)`,e.currentTarget.style.boxShadow=`0 2px 10px rgba(0,0,0,0.1)`}function an(e){e.currentTarget.style.background=`linear-gradient(135deg, #1da1f2 0%, #0c85d0 100%)`,e.currentTarget.style.color=`#ffffff`,e.currentTarget.style.transform=`translateY(-3px) scale(1.1)`,e.currentTarget.style.boxShadow=`0 6px 20px rgba(29, 161, 242, 0.4)`}function on(e){e.currentTarget.style.background=`linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)`,e.currentTarget.style.color=`#3E2723`,e.currentTarget.style.transform=`translateY(0) scale(1)`,e.currentTarget.style.boxShadow=`0 2px 10px rgba(0,0,0,0.1)`}function sn(e){e.currentTarget.style.background=`linear-gradient(135deg, #1877f2 0%, #0c63d4 100%)`,e.currentTarget.style.color=`#ffffff`,e.currentTarget.style.transform=`translateY(-3px) scale(1.1)`,e.currentTarget.style.boxShadow=`0 6px 20px rgba(24, 119, 242, 0.4)`}function cn(e){e.currentTarget.style.transform=`translateY(0)`,e.currentTarget.style.boxShadow=`0 4px 15px rgba(0,0,0,0.08)`;let t=e.currentTarget.querySelector(`.icon-wrapper`);t.style.transform=`scale(1) rotate(0deg)`}function ln(e){e.currentTarget.style.transform=`translateY(-5px)`,e.currentTarget.style.boxShadow=`0 8px 25px rgba(215, 168, 110, 0.2)`;let t=e.currentTarget.querySelector(`.icon-wrapper`);t.style.transform=`scale(1.1) rotate(5deg)`}function un(e){e.currentTarget.style.transform=`translateY(0)`,e.currentTarget.style.boxShadow=`0 4px 15px rgba(0,0,0,0.08)`;let t=e.currentTarget.querySelector(`.icon-wrapper`);t.style.transform=`scale(1) rotate(0deg)`}function dn(e){e.currentTarget.style.transform=`translateY(-5px)`,e.currentTarget.style.boxShadow=`0 8px 25px rgba(215, 168, 110, 0.2)`;let t=e.currentTarget.querySelector(`.icon-wrapper`);t.style.transform=`scale(1.1) rotate(5deg)`}function fn(e){e.currentTarget.style.transform=`translateY(0)`,e.currentTarget.style.boxShadow=`0 4px 15px rgba(0,0,0,0.08)`;let t=e.currentTarget.querySelector(`.icon-wrapper`);t.style.transform=`scale(1) rotate(0deg)`}function pn(e){e.currentTarget.style.transform=`translateY(-5px)`,e.currentTarget.style.boxShadow=`0 8px 25px rgba(215, 168, 110, 0.2)`;let t=e.currentTarget.querySelector(`.icon-wrapper`);t.style.transform=`scale(1.1) rotate(5deg)`}function mn(e){e.currentTarget.style.transform=`translateY(0)`,e.currentTarget.style.boxShadow=`0 4px 15px rgba(0,0,0,0.08)`;let t=e.currentTarget.querySelector(`.icon-wrapper`);t.style.transform=`scale(1) rotate(0deg)`}function hn(e){e.currentTarget.style.transform=`translateY(-5px)`,e.currentTarget.style.boxShadow=`0 8px 25px rgba(215, 168, 110, 0.2)`;let t=e.currentTarget.querySelector(`.icon-wrapper`);t.style.transform=`scale(1.1) rotate(5deg)`}function gn(){G.default.init({duration:1e3,once:!0})}function _n(){let e=document.createElement(`style`);return e.textContent=`
      body, .contact-section, .contact-form, .contact-info {
        font-family: 'Montserrat', sans-serif !important;
        color: #2C1810 !important;
        line-height: 1.6 !important;
      }
      
      h1, h2, h3, h4, h5, h6 {
        font-family: 'Playfair Display', serif !important;
        font-weight: 700 !important;
        color: #3E2723 !important;
      }
      
      .form-label, .form-control, .btn, .card-body h6, .contact-card h6 {
        font-family: 'Montserrat', sans-serif !important;
      }
      
      .contact-card p, .contact-form p, .text-muted {
        font-family: 'Montserrat', sans-serif !important;
        font-weight: 400 !important;
      }
    `,document.head.appendChild(e),()=>{document.head.removeChild(e)}}function vn(){let e=document.createElement(`link`);return e.rel=`stylesheet`,e.href=`https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css`,document.head.appendChild(e),()=>{document.head.removeChild(e)}}function yn(){let{getCartCount:e}=ne(),[t,n]=(0,N.useState)({username:``,password:``}),[r,i]=(0,N.useState)({}),[o,c]=(0,N.useState)(!1),[l,f]=(0,N.useState)(!1),[p,m]=(0,N.useState)(!1),h=a(),g=e=>{let{name:t,value:a}=e.target;n(e=>({...e,[t]:a})),r[t]&&i(e=>({...e,[t]:``}))},_=()=>{let e={};return t.username.trim()?t.username.length<3&&(e.username=`Username must be at least 3 characters`):e.username=`Username is required`,t.password.trim()?t.password.length<6&&(e.password=`Password must be at least 6 characters`):e.password=`Password is required`,e};return(0,N.useEffect)(()=>{G.default.init({duration:1e3,once:!0})},[]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`nav`,{className:`navbar navbar-expand-lg px-4 shadow-sm`,style:{backgroundColor:`#3E2723`},children:(0,F.jsxs)(`div`,{className:`container-fluid`,children:[(0,F.jsxs)(s,{className:`navbar-brand text-white fw-bold`,to:`/`,children:[(0,F.jsx)(`span`,{style:{color:`#D7A86E`},children:`LEATHER`}),(0,F.jsx)(`span`,{style:{color:`#ffffff`},children:`LUXE`})]}),(0,F.jsx)(`button`,{className:`navbar-toggler bg-white`,type:`button`,"data-bs-toggle":`collapse`,"data-bs-target":`#mainNavbar`,children:(0,F.jsx)(`span`,{className:`navbar-toggler-icon`})}),(0,F.jsx)(`div`,{className:`collapse navbar-collapse justify-content-end`,id:`mainNavbar`,children:(0,F.jsxs)(`ul`,{className:`navbar-nav align-items-center`,children:[(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/`,className:`nav-link text-white`,children:`Home`})}),(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/shop`,className:`nav-link text-white`,children:`Shop`})}),(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/about`,className:`nav-link text-white`,children:`About`})}),(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/contact`,className:`nav-link text-white`,children:`Contact`})}),(0,F.jsx)(`li`,{className:`nav-item mx-2`,children:(0,F.jsxs)(s,{to:`/cart`,className:`btn btn-outline-light position-relative`,children:[(0,F.jsx)(`i`,{className:`fas fa-shopping-cart`}),(0,F.jsxs)(`span`,{className:`position-absolute top-0 start-100 translate-middle-x badge rounded-pill bg-danger`,style:{transform:`translate(25%, -50%)`},children:[e(),(0,F.jsx)(`span`,{className:`visually-hidden`,children:`cart items`})]})]})}),(0,F.jsx)(`li`,{className:`nav-item mx-2`,children:(0,F.jsx)(s,{to:`/login`,className:`btn btn-primary fw-bold`,children:`Login`})})]})})]})}),(0,F.jsxs)(`div`,{className:`position-relative`,style:{background:`linear-gradient(135deg, #2C1810 0%, #1A0E0A 50%, #0F0704 100%)`,minHeight:`100vh`,display:`flex`,alignItems:`center`,position:`relative`,overflow:`hidden`},children:[(0,F.jsx)(`div`,{style:{position:`absolute`,top:0,left:0,right:0,bottom:0,backgroundImage:`url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D7A86E' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm0 0c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10z'/%3E%3C/g%3E%3C/svg%3E")`,opacity:.4}}),(0,F.jsx)(`div`,{className:`container position-relative`,children:(0,F.jsx)(`div`,{className:`row justify-content-center align-items-center min-vh-100`,children:(0,F.jsx)(`div`,{className:`col-lg-5 col-md-7 col-sm-9`,children:(0,F.jsx)(`div`,{className:`card border-0 shadow-2xl`,style:{background:`linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 245, 240, 0.95) 100%)`,backdropFilter:`blur(20px) saturate(180%)`,borderRadius:`24px`,border:`1px solid rgba(215, 168, 110, 0.2)`,boxShadow:`0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)`},"data-aos":`fade-up`,"data-aos-duration":`800`,children:(0,F.jsxs)(`div`,{className:`card-body p-3 p-lg-4`,children:[(0,F.jsxs)(`div`,{className:`text-center mb-3`,children:[(0,F.jsx)(`div`,{className:`d-inline-flex align-items-center justify-content-center mb-2`,children:(0,F.jsx)(`div`,{style:{width:`60px`,height:`4px`,background:`linear-gradient(90deg, #D7A86E, #8B6914)`,borderRadius:`2px`}})}),(0,F.jsx)(`h2`,{className:`fw-bold mb-2`,style:{color:`#2C1810`,fontSize:`1.8rem`,letterSpacing:`-0.5px`},children:`Login LUXE`}),(0,F.jsx)(`p`,{className:`text-muted small`,style:{fontSize:`0.9rem`},children:`Welcome back to our exclusive leather community`})]}),p&&(0,F.jsxs)(`div`,{className:`alert alert-success d-flex align-items-center py-2 px-3 mb-3`,role:`alert`,style:{background:`linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)`,border:`1px solid #c3e6cb`,borderRadius:`12px`},children:[(0,F.jsx)(ee,{className:`me-2`,style:{color:`#155724`}}),(0,F.jsx)(`div`,{className:`small`,children:`Login successful! Redirecting...`})]}),r.general&&(0,F.jsxs)(`div`,{className:`alert alert-danger d-flex align-items-center py-2 px-3 mb-3`,role:`alert`,style:{background:`linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%)`,border:`1px solid #f5c6cb`,borderRadius:`12px`},children:[(0,F.jsx)(S,{className:`me-2`,style:{color:`#721c24`}}),(0,F.jsx)(`div`,{className:`small`,children:r.general})]}),(0,F.jsxs)(`form`,{onSubmit:async e=>{e.preventDefault();let n=_();if(Object.keys(n).length>0){i(n);return}c(!0),i({});try{await new Promise(e=>setTimeout(e,1500)),t.username===`admin`&&t.password===`password`?(m(!0),localStorage.setItem(`isLoggedIn`,`true`),localStorage.setItem(`username`,t.username),setTimeout(()=>{h(`/`)},1e3)):i({general:`Invalid username or password`})}catch{i({general:`Login failed. Please try again.`})}finally{c(!1)}},children:[(0,F.jsxs)(`div`,{className:`mb-2`,children:[(0,F.jsxs)(`label`,{className:`form-label small fw-semibold mb-1`,style:{color:`#2C1810`},children:[(0,F.jsx)(u,{className:`me-1`,style:{color:`#D7A86E`,fontSize:`0.75rem`}}),`Username`]}),(0,F.jsx)(`input`,{type:`text`,className:`form-control form-control-sm ${r.username?`is-invalid`:``}`,name:`username`,value:t.username,onChange:g,placeholder:`Enter your username`,autoComplete:`off`,style:{borderRadius:`8px`,border:`1px solid #e0d5c7`,fontSize:`0.85rem`,padding:`0.6rem 0.75rem`}}),r.username&&(0,F.jsx)(`div`,{className:`invalid-feedback`,style:{fontSize:`0.75rem`},children:r.username})]}),(0,F.jsxs)(`div`,{className:`mb-2`,children:[(0,F.jsxs)(`label`,{className:`form-label small fw-semibold mb-1`,style:{color:`#2C1810`},children:[(0,F.jsx)(b,{className:`me-1`,style:{color:`#D7A86E`,fontSize:`0.75rem`}}),`Password`]}),(0,F.jsxs)(`div`,{className:`input-group input-group-sm`,children:[(0,F.jsx)(`input`,{type:l?`text`:`password`,className:`form-control ${r.password?`is-invalid`:``}`,name:`password`,value:t.password,onChange:g,placeholder:`Enter your password`,style:{borderRadius:`8px 0 0 8px`,border:`1px solid #e0d5c7`,fontSize:`0.85rem`,padding:`0.6rem 0.75rem`}}),(0,F.jsx)(`button`,{type:`button`,className:`btn btn-outline-secondary btn-sm`,onClick:()=>f(!l),style:{borderRadius:`0 8px 8px 0`,border:`1px solid #e0d5c7`,padding:`0.6rem 0.75rem`},children:l?(0,F.jsx)(d,{style:{fontSize:`0.75rem`}}):(0,F.jsx)(T,{style:{fontSize:`0.75rem`}})})]}),r.password&&(0,F.jsx)(`div`,{className:`invalid-feedback`,style:{fontSize:`0.75rem`},children:r.password})]}),(0,F.jsxs)(`div`,{className:`mb-3`,children:[(0,F.jsx)(`button`,{type:`submit`,className:`btn w-100 py-2 fw-semibold mb-2`,disabled:o,style:{background:`linear-gradient(135deg, #D7A86E 0%, #8B6914 50%, #6B5610 100%)`,border:`none`,borderRadius:`12px`,fontSize:`0.9rem`,color:`#ffffff`,boxShadow:`0 4px 15px rgba(215, 168, 110, 0.3)`,transition:`all 0.3s ease`},onMouseOver:e=>{o||(e.target.style.background=`linear-gradient(135deg, #8B6914 0%, #D7A86E 50%, #6B5610 100%)`,e.target.style.transform=`translateY(-1px)`,e.target.style.boxShadow=`0 6px 20px rgba(215, 168, 110, 0.4)`)},onMouseOut:e=>{o||(e.target.style.background=`linear-gradient(135deg, #D7A86E 0%, #8B6914 50%, #6B5610 100%)`,e.target.style.transform=`translateY(0)`,e.target.style.boxShadow=`0 4px 15px rgba(215, 168, 110, 0.3)`)},children:o?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`span`,{className:`spinner-border spinner-border-sm me-2`,role:`status`,"aria-hidden":`true`,style:{width:`1rem`,height:`1rem`}}),`Logging in...`]}):`Login`}),(0,F.jsxs)(`div`,{className:`d-flex gap-2 mb-2`,children:[(0,F.jsx)(s,{to:`/Sign`,className:`btn btn-outline-secondary w-50 py-2 fw-semibold`,style:{borderRadius:`8px`,fontSize:`0.85rem`,borderColor:`#D7A86E`,color:`#D7A86E`,transition:`all 0.3s ease`},onMouseOver:e=>{e.target.style.background=`#D7A86E`,e.target.style.color=`#ffffff`},onMouseOut:e=>{e.target.style.background=`transparent`,e.target.style.color=`#D7A86E`},children:`Sign Up`}),(0,F.jsx)(`button`,{type:`button`,className:`btn btn-link w-50 py-2 fw-semibold text-decoration-none`,onClick:()=>{h(`/forgot-password`)},style:{borderRadius:`8px`,fontSize:`0.85rem`,color:`#D7A86E`,transition:`all 0.3s ease`},children:`Forgot Password?`})]})]})]})]})})})})})]}),(0,F.jsx)(ge,{})]})}function bn(){let e=a(),{getCartCount:t}=ne(),[n,r]=(0,N.useState)({firstName:``,lastName:``,email:``,phone:``,password:``,confirmPassword:``,address:``,agreeToTerms:!1}),[i,o]=(0,N.useState)({}),[c,f]=(0,N.useState)(!1),[p,m]=(0,N.useState)(!1),[h,g]=(0,N.useState)(!1),[_,v]=(0,N.useState)(!1),[y,x]=(0,N.useState)(0);(0,N.useEffect)(()=>{G.default.init({duration:1e3,once:!0})},[]),(0,N.useEffect)(()=>{if(n.password){let e=0;n.password.length>=8&&e++,n.password.match(/[a-z]/)&&e++,n.password.match(/[A-Z]/)&&e++,n.password.match(/[0-9]/)&&e++,n.password.match(/[^a-zA-Z0-9]/)&&e++,x(e)}else x(0)},[n.password]);let C=e=>{let{name:t,value:n,type:a,checked:s}=e.target;r(e=>({...e,[t]:a===`checkbox`?s:n})),i[t]&&o(e=>({...e,[t]:``}))},w=()=>{let e={};return n.firstName.trim()?n.firstName.length<2&&(e.firstName=`First name must be at least 2 characters`):e.firstName=`First name is required`,n.lastName.trim()?n.lastName.length<2&&(e.lastName=`Last name must be at least 2 characters`):e.lastName=`Last name is required`,n.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)||(e.email=`Please enter a valid email`):e.email=`Email is required`,n.password?n.password.length<8?e.password=`Password must be at least 8 characters`:y<3&&(e.password=`Password is too weak. Include uppercase, lowercase, numbers, and special characters`):e.password=`Password is required`,n.confirmPassword?n.password!==n.confirmPassword&&(e.confirmPassword=`Passwords do not match`):e.confirmPassword=`Please confirm your password`,n.address.trim()||(e.address=`Address is required`),n.agreeToTerms||(e.agreeToTerms=`You must agree to the terms and conditions`),o(e),Object.keys(e).length===0},E=async t=>{if(t.preventDefault(),w()){f(!0);try{await new Promise(e=>setTimeout(e,2e3));let t={...n,id:Date.now(),createdAt:new Date().toISOString()};localStorage.setItem(`user`,JSON.stringify(t)),v(!0),setTimeout(()=>{e(`/login`)},2e3)}catch(e){console.error(`Signup error:`,e),o({submit:`Something went wrong. Please try again.`})}finally{f(!1)}}},D=()=>y<=2?`danger`:y<=3?`warning`:`success`;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`nav`,{className:`navbar navbar-expand-lg px-4 shadow-sm`,style:{backgroundColor:`#3E2723`},children:(0,F.jsxs)(`div`,{className:`container-fluid`,children:[(0,F.jsxs)(s,{className:`navbar-brand text-white fw-bold`,to:`/`,children:[(0,F.jsx)(`span`,{style:{color:`#D7A86E`},children:`LEATHER`}),(0,F.jsx)(`span`,{style:{color:`#ffffff`},children:`LUXE`})]}),(0,F.jsx)(`button`,{className:`navbar-toggler bg-white`,type:`button`,"data-bs-toggle":`collapse`,"data-bs-target":`#mainNavbar`,children:(0,F.jsx)(`span`,{className:`navbar-toggler-icon`})}),(0,F.jsx)(`div`,{className:`collapse navbar-collapse justify-content-end`,id:`mainNavbar`,children:(0,F.jsxs)(`ul`,{className:`navbar-nav align-items-center`,children:[(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/`,className:`nav-link text-white`,children:`Home`})}),(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/shop`,className:`nav-link text-white`,children:`Shop`})}),(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/about`,className:`nav-link text-white`,children:`About`})}),(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/contact`,className:`nav-link text-white`,children:`Contact`})}),(0,F.jsx)(`li`,{className:`nav-item mx-2`,children:(0,F.jsxs)(s,{to:`/cart`,className:`btn btn-outline-light position-relative`,children:[(0,F.jsx)(`i`,{className:`fas fa-shopping-cart`}),(0,F.jsxs)(`span`,{className:`position-absolute top-0 start-100 translate-middle-x badge rounded-pill bg-danger`,style:{transform:`translate(25%, -50%)`},children:[t(),(0,F.jsx)(`span`,{className:`visually-hidden`,children:`cart items`})]})]})}),(0,F.jsx)(`li`,{className:`nav-item mx-2`,children:(0,F.jsx)(s,{to:`/login`,className:`btn btn-primary fw-bold`,children:`Login`})})]})})]})}),(0,F.jsxs)(`div`,{className:`position-relative`,style:{background:`linear-gradient(135deg, #2C1810 0%, #1A0E0A 50%, #0F0704 100%)`,minHeight:`100vh`,display:`flex`,alignItems:`center`,position:`relative`,overflow:`hidden`},children:[(0,F.jsx)(`div`,{style:{position:`absolute`,top:0,left:0,right:0,bottom:0,backgroundImage:`url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D7A86E' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm0 0c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10z'/%3E%3C/g%3E%3C/svg%3E")`,opacity:.4}}),(0,F.jsx)(`div`,{className:`container position-relative`,children:(0,F.jsx)(`div`,{className:`row justify-content-center align-items-center min-vh-100`,children:(0,F.jsx)(`div`,{className:`col-lg-5 col-md-7 col-sm-9`,children:(0,F.jsx)(`div`,{className:`card border-0 shadow-2xl`,style:{background:`linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 245, 240, 0.95) 100%)`,backdropFilter:`blur(20px) saturate(180%)`,borderRadius:`24px`,border:`1px solid rgba(215, 168, 110, 0.2)`,boxShadow:`0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)`},"data-aos":`fade-up`,"data-aos-duration":`800`,children:(0,F.jsxs)(`div`,{className:`card-body p-3 p-lg-4`,children:[(0,F.jsxs)(`div`,{className:`text-center mb-3`,children:[(0,F.jsx)(`div`,{className:`d-inline-flex align-items-center justify-content-center mb-2`,children:(0,F.jsx)(`div`,{style:{width:`60px`,height:`4px`,background:`linear-gradient(90deg, #D7A86E, #8B6914)`,borderRadius:`2px`}})}),(0,F.jsx)(`h2`,{className:`fw-bold mb-2`,style:{color:`#2C1810`,fontSize:`1.8rem`,letterSpacing:`-0.5px`},children:`Signup LUXE`}),(0,F.jsx)(`p`,{className:`text-muted small`,style:{fontSize:`0.9rem`},children:`Join our exclusive leather community`})]}),_&&(0,F.jsxs)(`div`,{className:`alert alert-success d-flex align-items-center py-2 px-3 mb-3`,role:`alert`,style:{background:`linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)`,border:`1px solid #c3e6cb`,borderRadius:`12px`},children:[(0,F.jsx)(ee,{className:`me-2`,style:{color:`#155724`}}),(0,F.jsx)(`div`,{className:`small`,children:`Account created! Redirecting...`})]}),i.submit&&(0,F.jsxs)(`div`,{className:`alert alert-danger d-flex align-items-center py-2 px-3 mb-3`,role:`alert`,style:{background:`linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%)`,border:`1px solid #f5c6cb`,borderRadius:`12px`},children:[(0,F.jsx)(S,{className:`me-2`,style:{color:`#721c24`}}),(0,F.jsx)(`div`,{className:`small`,children:i.submit})]}),(0,F.jsxs)(`form`,{onSubmit:E,children:[(0,F.jsxs)(`div`,{className:`row g-2 mb-2`,children:[(0,F.jsxs)(`div`,{className:`col-6`,children:[(0,F.jsxs)(`label`,{className:`form-label small fw-semibold mb-1`,style:{color:`#2C1810`},children:[(0,F.jsx)(u,{className:`me-1`,style:{color:`#D7A86E`,fontSize:`0.75rem`}}),`First Name`]}),(0,F.jsx)(`input`,{type:`text`,className:`form-control form-control-sm ${i.firstName?`is-invalid`:``}`,name:`firstName`,value:n.firstName,onChange:C,placeholder:`First name`,style:{borderRadius:`8px`,border:`1px solid #e0d5c7`,fontSize:`0.85rem`,padding:`0.6rem 0.75rem`}}),i.firstName&&(0,F.jsx)(`div`,{className:`invalid-feedback`,style:{fontSize:`0.75rem`},children:i.firstName})]}),(0,F.jsxs)(`div`,{className:`col-6`,children:[(0,F.jsxs)(`label`,{className:`form-label small fw-semibold mb-1`,style:{color:`#2C1810`},children:[(0,F.jsx)(u,{className:`me-1`,style:{color:`#D7A86E`,fontSize:`0.75rem`}}),`Last Name`]}),(0,F.jsx)(`input`,{type:`text`,className:`form-control form-control-sm ${i.lastName?`is-invalid`:``}`,name:`lastName`,value:n.lastName,onChange:C,placeholder:`Last name`,style:{borderRadius:`8px`,border:`1px solid #e0d5c7`,fontSize:`0.85rem`,padding:`0.6rem 0.75rem`}}),i.lastName&&(0,F.jsx)(`div`,{className:`invalid-feedback`,style:{fontSize:`0.75rem`},children:i.lastName})]})]}),(0,F.jsxs)(`div`,{className:`mb-2`,children:[(0,F.jsxs)(`label`,{className:`form-label small fw-semibold mb-1`,style:{color:`#2C1810`},children:[(0,F.jsx)(l,{className:`me-1`,style:{color:`#D7A86E`,fontSize:`0.75rem`}}),`Email`]}),(0,F.jsx)(`input`,{type:`email`,className:`form-control form-control-sm ${i.email?`is-invalid`:``}`,name:`email`,value:n.email,onChange:C,placeholder:`your@email.com`,style:{borderRadius:`8px`,border:`1px solid #e0d5c7`,fontSize:`0.85rem`,padding:`0.6rem 0.75rem`}}),i.email&&(0,F.jsx)(`div`,{className:`invalid-feedback`,style:{fontSize:`0.75rem`},children:i.email})]}),(0,F.jsxs)(`div`,{className:`mb-2`,children:[(0,F.jsxs)(`label`,{className:`form-label small fw-semibold mb-1`,style:{color:`#2C1810`},children:[(0,F.jsx)(b,{className:`me-1`,style:{color:`#D7A86E`,fontSize:`0.75rem`}}),`Password`]}),(0,F.jsxs)(`div`,{className:`input-group input-group-sm`,children:[(0,F.jsx)(`input`,{type:p?`text`:`password`,className:`form-control ${i.password?`is-invalid`:``}`,name:`password`,value:n.password,onChange:C,placeholder:`Create password`,style:{borderRadius:`8px 0 0 8px`,border:`1px solid #e0d5c7`,fontSize:`0.85rem`,padding:`0.6rem 0.75rem`}}),(0,F.jsx)(`button`,{type:`button`,className:`btn btn-outline-secondary btn-sm`,onClick:()=>m(!p),style:{borderRadius:`0 8px 8px 0`,border:`1px solid #e0d5c7`,padding:`0.6rem 0.75rem`},children:p?(0,F.jsx)(d,{style:{fontSize:`0.75rem`}}):(0,F.jsx)(T,{style:{fontSize:`0.75rem`}})})]}),i.password&&(0,F.jsx)(`div`,{className:`invalid-feedback`,style:{fontSize:`0.75rem`},children:i.password}),n.password&&(0,F.jsxs)(`div`,{className:`mt-1`,children:[(0,F.jsxs)(`div`,{className:`d-flex justify-content-between align-items-center`,children:[(0,F.jsx)(`small`,{className:`text-muted`,style:{fontSize:`0.7rem`},children:`Strength:`}),(0,F.jsx)(`small`,{className:`text-${D()} fw-semibold`,style:{fontSize:`0.7rem`},children:y<=2?`Weak`:y<=3?`Medium`:`Strong`})]}),(0,F.jsx)(`div`,{className:`progress`,style:{height:`3px`},children:(0,F.jsx)(`div`,{className:`progress-bar bg-${D()}`,role:`progressbar`,style:{width:`${y/5*100}%`}})})]})]}),(0,F.jsxs)(`div`,{className:`mb-2`,children:[(0,F.jsxs)(`label`,{className:`form-label small fw-semibold mb-1`,style:{color:`#2C1810`},children:[(0,F.jsx)(b,{className:`me-1`,style:{color:`#D7A86E`,fontSize:`0.75rem`}}),`Confirm`]}),(0,F.jsxs)(`div`,{className:`input-group input-group-sm`,children:[(0,F.jsx)(`input`,{type:h?`text`:`password`,className:`form-control ${i.confirmPassword?`is-invalid`:``}`,name:`confirmPassword`,value:n.confirmPassword,onChange:C,placeholder:`Confirm password`,style:{borderRadius:`8px 0 0 8px`,border:`1px solid #e0d5c7`,fontSize:`0.85rem`,padding:`0.6rem 0.75rem`}}),(0,F.jsx)(`button`,{type:`button`,className:`btn btn-outline-secondary btn-sm`,onClick:()=>g(!h),style:{borderRadius:`0 8px 8px 0`,border:`1px solid #e0d5c7`,padding:`0.6rem 0.75rem`},children:h?(0,F.jsx)(d,{style:{fontSize:`0.75rem`}}):(0,F.jsx)(T,{style:{fontSize:`0.75rem`}})})]}),i.confirmPassword&&(0,F.jsx)(`div`,{className:`invalid-feedback`,style:{fontSize:`0.75rem`},children:i.confirmPassword})]}),(0,F.jsxs)(`div`,{className:`mb-3`,children:[(0,F.jsxs)(`div`,{className:`form-check`,children:[(0,F.jsx)(`input`,{type:`checkbox`,className:`form-check-input ${i.agreeToTerms?`is-invalid`:``}`,name:`agreeToTerms`,checked:n.agreeToTerms,onChange:C,style:{borderColor:`#D7A86E`,borderRadius:`4px`}}),(0,F.jsxs)(`label`,{className:`form-check-label small`,style:{color:`#2C1810`},children:[`I agree to `,(0,F.jsx)(`a`,{href:`#`,className:`text-decoration-none`,style:{color:`#D7A86E`},children:`Terms`}),` & `,(0,F.jsx)(`a`,{href:`#`,className:`text-decoration-none`,style:{color:`#D7A86E`},children:`Privacy`})]})]}),i.agreeToTerms&&(0,F.jsx)(`div`,{className:`invalid-feedback`,style:{fontSize:`0.75rem`},children:i.agreeToTerms})]}),(0,F.jsx)(`button`,{type:`submit`,className:`btn w-100 py-2 fw-semibold mb-2`,disabled:c,style:{background:`linear-gradient(135deg, #D7A86E 0%, #8B6914 50%, #6B5610 100%)`,border:`none`,borderRadius:`12px`,fontSize:`0.9rem`,color:`#ffffff`,boxShadow:`0 4px 15px rgba(215, 168, 110, 0.3)`,transition:`all 0.3s ease`},onMouseOver:e=>{e.target.style.background=`linear-gradient(135deg, #8B6914 0%, #D7A86E 50%, #6B5610 100%)`,e.target.style.transform=`translateY(-1px)`,e.target.style.boxShadow=`0 6px 20px rgba(215, 168, 110, 0.4)`},onMouseOut:e=>{e.target.style.background=`linear-gradient(135deg, #D7A86E 0%, #8B6914 50%, #6B5610 100%)`,e.target.style.transform=`translateY(0)`,e.target.style.boxShadow=`0 4px 15px rgba(215, 168, 110, 0.3)`},children:c?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`span`,{className:`spinner-border spinner-border-sm me-2`,role:`status`,"aria-hidden":`true`,style:{width:`1rem`,height:`1rem`}}),`Creating...`]}):`Create Account`}),(0,F.jsx)(`div`,{className:`text-center`,children:(0,F.jsxs)(`p`,{className:`mb-0 small`,style:{color:`#2C1810`},children:[`Already have an account? `,(0,F.jsx)(s,{to:`/login`,className:`text-decoration-none fw-semibold`,style:{color:`#D7A86E`},children:`Sign In`})]})})]})]})})})})})]}),(0,F.jsx)(ge,{})]})}function xn(){let e=(0,te.c)(52),{cartItems:t,removeFromCart:n,updateQuantity:r,getCartCount:i}=ne(),a;e[0]===t?a=e[1]:(a=[t],e[0]=t,e[1]=a),(0,N.useEffect)(Sn,a);let o;e[2]===n?o=e[3]:(o=e=>{n(e)},e[2]=n,e[3]=o);let c=o,l;e[4]===t?l=e[5]:(l=()=>{if(t.length===0)return 0;let e=0;return t.forEach(t=>{let n=(t.price||0)*(t.quantity||0);e+=n}),e},e[4]=t,e[5]=l);let u=l,d;e[6]===u?d=e[7]:(d=()=>{let e=u();return Math.round(e*.18)},e[6]=u,e[7]=d);let f=d,p;e[8]!==u||e[9]!==f?(p=()=>u()+f(),e[8]=u,e[9]=f,e[10]=p):p=e[10];let m=p,h,g,_,v;if(e[11]!==u||e[12]!==f||e[13]!==m||e[14]!==t||e[15]!==i||e[16]!==c||e[17]!==r){let n=u(),a=f(),o=m(),l;e[22]===Symbol.for(`react.memo_cache_sentinel`)?(l={backgroundColor:`#3E2723`},e[22]=l):l=e[22];let d;e[23]===Symbol.for(`react.memo_cache_sentinel`)?(d=(0,F.jsxs)(s,{className:`navbar-brand text-white fw-bold`,to:`/`,children:[(0,F.jsx)(`span`,{style:{color:`#D7A86E`},children:`LEATHER`}),(0,F.jsx)(`span`,{style:{color:`#ffffff`},children:`LUXE`})]}),e[23]=d):d=e[23];let p;e[24]===Symbol.for(`react.memo_cache_sentinel`)?(p=(0,F.jsx)(`button`,{className:`navbar-toggler bg-white`,type:`button`,"data-bs-toggle":`collapse`,"data-bs-target":`#mainNavbar`,children:(0,F.jsx)(`span`,{className:`navbar-toggler-icon`})}),e[24]=p):p=e[24];let y;e[25]===Symbol.for(`react.memo_cache_sentinel`)?(y=(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/`,className:`nav-link text-white`,children:`Home`})}),e[25]=y):y=e[25];let b;e[26]===Symbol.for(`react.memo_cache_sentinel`)?(b=(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/shop`,className:`nav-link text-white`,children:`Shop`})}),e[26]=b):b=e[26];let x;e[27]===Symbol.for(`react.memo_cache_sentinel`)?(x=(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/about`,className:`nav-link text-white`,children:`About`})}),e[27]=x):x=e[27];let S;e[28]===Symbol.for(`react.memo_cache_sentinel`)?(S=(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/contact`,className:`nav-link text-white`,children:`Contact`})}),e[28]=S):S=e[28];let C;e[29]===Symbol.for(`react.memo_cache_sentinel`)?(C=(0,F.jsx)(`i`,{className:`fas fa-shopping-cart`}),e[29]=C):C=e[29];let w=`position-absolute top-0 start-100 translate-middle badge rounded-pill cart-badge ${i()===0?``:i()===1?`count-single`:i()<=9?`count-double`:i()<=99?`count-triple`:`count-many`}`,T=i()===0?`#6c757d`:`#D7A86E`,ee=i()===0?`#ffffff`:`#3E2723`,E=i()===0?`0.7`:`1`,D;e[30]!==T||e[31]!==ee||e[32]!==E?(D={backgroundColor:T,color:ee,border:`2px solid #ffffff`,boxShadow:`0 2px 8px rgba(0,0,0,0.2)`,fontWeight:`700`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontFamily:`Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,fontVariantNumeric:`tabular-nums`,letterSpacing:`-0.02em`,lineHeight:`1`,transition:`all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`,opacity:E},e[30]=T,e[31]=ee,e[32]=E,e[33]=D):D=e[33];let O=i(),k;e[34]===Symbol.for(`react.memo_cache_sentinel`)?(k=(0,F.jsx)(`span`,{className:`visually-hidden`,children:`cart items`}),e[34]=k):k=e[34];let A;e[35]!==w||e[36]!==D||e[37]!==O?(A=(0,F.jsx)(`li`,{className:`nav-item mx-2`,children:(0,F.jsxs)(s,{to:`/cart`,className:`btn btn-outline-light position-relative`,children:[C,(0,F.jsxs)(`span`,{className:w,style:D,children:[O,k]})]})}),e[35]=w,e[36]=D,e[37]=O,e[38]=A):A=e[38];let j;e[39]===Symbol.for(`react.memo_cache_sentinel`)?(j=(0,F.jsx)(`li`,{className:`nav-item mx-2`,children:(0,F.jsx)(s,{to:`/login`,className:`btn btn-primary fw-bold`,children:`Login`})}),e[39]=j):j=e[39],e[40]===A?_=e[41]:(_=(0,F.jsx)(`nav`,{className:`navbar navbar-expand-lg px-4 shadow-sm`,style:l,children:(0,F.jsxs)(`div`,{className:`container-fluid`,children:[d,p,(0,F.jsx)(`div`,{className:`collapse navbar-collapse justify-content-end`,id:`mainNavbar`,children:(0,F.jsxs)(`ul`,{className:`navbar-nav align-items-center`,children:[y,b,x,S,A,j]})})]})}),e[40]=A,e[41]=_);let M;e[42]===Symbol.for(`react.memo_cache_sentinel`)?(M={background:`linear-gradient(135deg, #3E2723 0%, #5D4037 100%)`,color:`white`},e[42]=M):M=e[42],e[43]===Symbol.for(`react.memo_cache_sentinel`)?(v=(0,F.jsx)(`div`,{className:`py-4 mb-4`,style:M,children:(0,F.jsxs)(`div`,{className:`container text-center`,children:[(0,F.jsx)(`h1`,{className:`fw-bold mb-2`,"data-aos":`fade-down`,children:`Your Leather Cart`}),(0,F.jsx)(`p`,{className:`mb-0`,"data-aos":`fade-up`,children:`Review your items and proceed to checkout`})]})}),e[43]=v):v=e[43],h=`container mb-5`,g=t.length===0?(0,F.jsxs)(`div`,{className:`text-center py-5`,children:[(0,F.jsx)(`h3`,{className:`mb-3`,children:`Your cart is empty`}),(0,F.jsx)(`p`,{className:`text-muted mb-4`,children:`Add some products to your cart to continue shopping`}),(0,F.jsx)(s,{to:`/shop`,className:`btn btn-primary btn-lg`,style:{backgroundColor:`#3E2723`,borderColor:`#3E2723`},children:`Continue Shopping`})]}):(0,F.jsxs)(`div`,{className:`row`,children:[(0,F.jsx)(`div`,{className:`col-lg-8 mb-4`,children:(0,F.jsxs)(`div`,{className:`card shadow-sm border-0`,"data-aos":`fade-right`,children:[(0,F.jsx)(`div`,{className:`card-header bg-white py-3`,children:(0,F.jsxs)(`h5`,{className:`mb-0 fw-bold`,children:[`Cart Items (`,t.length,`)`]})}),(0,F.jsx)(`div`,{className:`card-body p-0`,children:t.map((e,n)=>(0,F.jsx)(`div`,{className:`p-3 ${n===t.length-1?``:`border-bottom`} animate-slide-in-right`,style:{animationDelay:`${n*.1}s`},children:(0,F.jsxs)(`div`,{className:`row align-items-center`,children:[(0,F.jsx)(`div`,{className:`col-md-2 col-3`,children:e.image?(0,F.jsx)(`img`,{src:e.image,alt:e.name,className:`img-fluid rounded`,style:{height:`80px`,objectFit:`cover`}}):(0,F.jsx)(`div`,{className:`bg-light rounded d-flex align-items-center justify-content-center`,style:{height:`80px`},children:(0,F.jsx)(`i`,{className:`fas fa-tshirt text-muted fa-2x`})})}),(0,F.jsxs)(`div`,{className:`col-md-4 col-6`,children:[(0,F.jsx)(`h6`,{className:`mb-1 fw-bold`,children:e.name}),(0,F.jsx)(`p`,{className:`text-muted mb-0 small`,children:`Premium Quality`}),(0,F.jsxs)(`p`,{className:`mb-0 fw-bold text-primary`,children:[`₹`,(e.price||0).toLocaleString(`en-IN`)]})]}),(0,F.jsx)(`div`,{className:`col-md-3 col-6`,children:(0,F.jsxs)(`div`,{className:`input-group input-group-sm`,style:{maxWidth:`120px`},children:[(0,F.jsx)(`button`,{className:`btn btn-outline-secondary`,onClick:()=>r(e.id,e.quantity-1),disabled:e.quantity<=1,children:`-`}),(0,F.jsx)(`input`,{type:`text`,className:`form-control text-center`,value:e.quantity,readOnly:!0}),(0,F.jsx)(`button`,{className:`btn btn-outline-secondary`,onClick:()=>r(e.id,e.quantity+1),children:`+`})]})}),(0,F.jsxs)(`div`,{className:`col-md-2 col-3 text-end`,children:[(0,F.jsxs)(`p`,{className:`mb-0 fw-bold`,children:[`₹`,((e.price||0)*(e.quantity||0)).toLocaleString(`en-IN`)]}),(0,F.jsxs)(`button`,{className:`btn btn-sm btn-danger mt-2`,onClick:()=>c(e.id),style:{fontSize:`0.8rem`},children:[(0,F.jsx)(`i`,{className:`fas fa-trash me-1`}),`Remove`]})]})]})},e.id))})]})}),(0,F.jsx)(`div`,{className:`col-lg-4`,children:(0,F.jsxs)(`div`,{className:`card shadow-sm border-0 mb-4`,"data-aos":`fade-left`,children:[(0,F.jsx)(`div`,{className:`card-header bg-white py-3`,children:(0,F.jsx)(`h5`,{className:`mb-0 fw-bold`,children:`Order Summary`})}),(0,F.jsxs)(`div`,{className:`card-body`,children:[(0,F.jsxs)(`div`,{className:`d-flex justify-content-between mb-2`,children:[(0,F.jsx)(`span`,{children:`Subtotal:`}),(0,F.jsxs)(`span`,{className:`fw-bold`,children:[`₹`,n.toLocaleString(`en-IN`)]})]}),(0,F.jsxs)(`div`,{className:`d-flex justify-content-between mb-2`,children:[(0,F.jsx)(`span`,{children:`Tax (18%):`}),(0,F.jsxs)(`span`,{className:`fw-bold`,children:[`₹`,a.toLocaleString(`en-IN`)]})]}),(0,F.jsxs)(`div`,{className:`d-flex justify-content-between mb-3`,children:[(0,F.jsx)(`span`,{children:`Shipping:`}),(0,F.jsx)(`span`,{className:`fw-bold text-success`,children:`FREE`})]}),(0,F.jsx)(`hr`,{}),(0,F.jsxs)(`div`,{className:`d-flex justify-content-between mb-3`,children:[(0,F.jsx)(`h6`,{className:`mb-0`,children:`Total:`}),(0,F.jsxs)(`h5`,{className:`mb-0 text-primary`,children:[`₹`,o.toLocaleString(`en-IN`)]})]}),(0,F.jsx)(s,{to:`/checkout`,className:`btn btn-primary w-100 fw-bold text-decoration-none`,style:{backgroundColor:`#3E2723`,borderColor:`#3E2723`},children:`Proceed to Checkout`})]})]})})]}),e[11]=u,e[12]=f,e[13]=m,e[14]=t,e[15]=i,e[16]=c,e[17]=r,e[18]=h,e[19]=g,e[20]=_,e[21]=v}else h=e[18],g=e[19],_=e[20],v=e[21];let y;e[44]!==h||e[45]!==g?(y=(0,F.jsx)(`div`,{className:h,children:g}),e[44]=h,e[45]=g,e[46]=y):y=e[46];let b;e[47]===Symbol.for(`react.memo_cache_sentinel`)?(b=(0,F.jsx)(ge,{}),e[47]=b):b=e[47];let x;return e[48]!==_||e[49]!==v||e[50]!==y?(x=(0,F.jsxs)(F.Fragment,{children:[_,v,y,b]}),e[48]=_,e[49]=v,e[50]=y,e[51]=x):x=e[51],x}function Sn(){G.default.init({duration:1e3,once:!0})}function Cn(){let e=(0,te.c)(211),t=a(),{cartItems:n,getCartTotal:r}=ne(),i;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(i={firstName:``,lastName:``,email:``,phone:``,address:``,city:``,state:``,zipCode:``,paymentMethod:`cod`,cardNumber:``,cardName:``,expiryDate:``,cvv:``,upiId:``,bankName:``},e[0]=i):i=e[0];let[o,c]=(0,N.useState)(i),[l,u]=(0,N.useState)(!1),[d,f]=(0,N.useState)(!1),p;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(p=[],e[1]=p):p=e[1],(0,N.useEffect)(wn,p);let m;e[2]===r?m=e[3]:(m=()=>r(),e[2]=r,e[3]=m);let h=m,g;e[4]===h?g=e[5]:(g=()=>Math.round(h()*.18),e[4]=h,e[5]=g);let _=g,v;e[6]!==h||e[7]!==_?(v=()=>h()+_(),e[6]=h,e[7]=_,e[8]=v):v=e[8];let y=v,b;e[9]===o?b=e[10]:(b=e=>{c({...o,[e.target.name]:e.target.value})},e[9]=o,e[10]=b);let x=b,S;e[11]===Symbol.for(`react.memo_cache_sentinel`)?(S=async e=>{e.preventDefault(),f(!0),setTimeout(()=>{u(!0),f(!1)},2e3)},e[11]=S):S=e[11];let C=S,w,T,ee,E,D,O,k,A,j,M,P,I,L,R,z,B,V,H,U,W,re;if(e[12]!==h||e[13]!==_||e[14]!==y||e[15]!==n||e[16]!==o||e[17]!==x||e[18]!==d||e[19]!==t||e[20]!==l){H=Symbol.for(`react.early_return_sentinel`);bb0:{let r=h(),i=_(),a=y();if(l){let t,n,r;e[42]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,F.jsx)(`div`,{className:`mb-4`,children:(0,F.jsx)(`i`,{className:`fas fa-check-circle text-success`,style:{fontSize:`4rem`}})}),n=(0,F.jsx)(`h2`,{className:`fw-bold mb-3`,children:`Order Placed Successfully!`}),r=(0,F.jsx)(`p`,{className:`text-muted mb-4`,children:`Thank you for your purchase. Your order has been received and is being processed.`}),e[42]=t,e[43]=n,e[44]=r):(t=e[42],n=e[43],r=e[44]);let i;e[45]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,F.jsx)(`strong`,{children:`Order Number:`}),e[45]=i):i=e[45];let o;e[46]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,F.jsxs)(`p`,{className:`mb-2`,children:[i,` #ORD`,Date.now()]}),e[46]=o):o=e[46];let c;e[47]===Symbol.for(`react.memo_cache_sentinel`)?(c=(0,F.jsx)(`strong`,{children:`Total Amount:`}),e[47]=c):c=e[47];let l=(0,F.jsxs)(`p`,{className:`mb-0`,children:[c,` `,(0,F.jsxs)(`span`,{className:`text-primary`,children:[`₹`,a.toLocaleString(`en-IN`)]})]}),u;e[48]===l?u=e[49]:(u=(0,F.jsxs)(`div`,{className:`bg-light rounded p-3 mb-4`,children:[o,l]}),e[48]=l,e[49]=u);let d;e[50]===Symbol.for(`react.memo_cache_sentinel`)?(d=(0,F.jsxs)(`div`,{className:`d-flex gap-3 justify-content-center`,children:[(0,F.jsx)(s,{to:`/shop`,className:`btn btn-primary`,style:{backgroundColor:`#3E2723`,borderColor:`#3E2723`},children:`Continue Shopping`}),(0,F.jsx)(s,{to:`/`,className:`btn btn-outline-primary`,children:`Back to Home`})]}),e[50]=d):d=e[50];let f;e[51]===u?f=e[52]:(f=(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(`div`,{className:`container py-5`,children:(0,F.jsx)(`div`,{className:`row justify-content-center`,children:(0,F.jsx)(`div`,{className:`col-md-8`,children:(0,F.jsx)(`div`,{className:`card shadow-lg border-0`,"data-aos":`fade-up`,children:(0,F.jsxs)(`div`,{className:`card-body text-center py-5`,children:[t,n,r,u,d]})})})})})}),e[51]=u,e[52]=f),H=f;break bb0}let c;e[53]===Symbol.for(`react.memo_cache_sentinel`)?(c={backgroundColor:`#3E2723`},e[53]=c):c=e[53];let u;e[54]===Symbol.for(`react.memo_cache_sentinel`)?(u=(0,F.jsxs)(s,{className:`navbar-brand text-white fw-bold`,to:`/`,children:[(0,F.jsx)(`span`,{style:{color:`#D7A86E`},children:`LEATHER`}),(0,F.jsx)(`span`,{style:{color:`#ffffff`},children:`LUXE`})]}),e[54]=u):u=e[54];let f;e[55]===Symbol.for(`react.memo_cache_sentinel`)?(f=(0,F.jsx)(`button`,{className:`navbar-toggler bg-white`,type:`button`,"data-bs-toggle":`collapse`,"data-bs-target":`#mainNavbar`,children:(0,F.jsx)(`span`,{className:`navbar-toggler-icon`})}),e[55]=f):f=e[55];let p;e[56]===Symbol.for(`react.memo_cache_sentinel`)?(p=(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/`,className:`nav-link text-white`,children:`Home`})}),e[56]=p):p=e[56];let m;e[57]===Symbol.for(`react.memo_cache_sentinel`)?(m=(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/shop`,className:`nav-link text-white`,children:`Shop`})}),e[57]=m):m=e[57];let g;e[58]===Symbol.for(`react.memo_cache_sentinel`)?(g=(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/cart`,className:`nav-link text-white`,children:`Cart`})}),e[58]=g):g=e[58];let v;e[59]===Symbol.for(`react.memo_cache_sentinel`)?(v=(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/about`,className:`nav-link text-white`,children:`About`})}),e[59]=v):v=e[59];let b;e[60]===Symbol.for(`react.memo_cache_sentinel`)?(b=(0,F.jsx)(`li`,{className:`nav-item mx-1`,children:(0,F.jsx)(s,{to:`/contact`,className:`nav-link text-white`,children:`Contact`})}),e[60]=b):b=e[60];let S;e[61]===Symbol.for(`react.memo_cache_sentinel`)?(S=(0,F.jsx)(`i`,{className:`fas fa-shopping-cart`}),e[61]=S):S=e[61];let N;e[62]===Symbol.for(`react.memo_cache_sentinel`)?(N=(0,F.jsx)(`span`,{className:`visually-hidden`,children:`cart items`}),e[62]=N):N=e[62],e[63]===n.length?B=e[64]:(B=(0,F.jsx)(`nav`,{className:`navbar navbar-expand-lg px-4 shadow-sm`,style:c,children:(0,F.jsxs)(`div`,{className:`container-fluid`,children:[u,f,(0,F.jsx)(`div`,{className:`collapse navbar-collapse justify-content-end`,id:`mainNavbar`,children:(0,F.jsxs)(`ul`,{className:`navbar-nav align-items-center`,children:[p,m,g,v,b,(0,F.jsx)(`li`,{className:`nav-item mx-2`,children:(0,F.jsxs)(s,{to:`/cart`,className:`btn btn-outline-light position-relative`,children:[S,(0,F.jsxs)(`span`,{className:`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger`,children:[n.length,N]})]})})]})})]})}),e[63]=n.length,e[64]=B);let te;e[65]===Symbol.for(`react.memo_cache_sentinel`)?(te={background:`linear-gradient(135deg, #3E2723 0%, #5D4037 100%)`,color:`white`},e[65]=te):te=e[65],e[66]===Symbol.for(`react.memo_cache_sentinel`)?(V=(0,F.jsx)(`div`,{className:`py-4 mb-4`,style:te,children:(0,F.jsxs)(`div`,{className:`container text-center`,children:[(0,F.jsx)(`h1`,{className:`fw-bold mb-2`,"data-aos":`fade-down`,children:`Secure Checkout`}),(0,F.jsx)(`p`,{className:`mb-0`,"data-aos":`fade-up`,children:`Complete your order details`})]})}),e[66]=V):V=e[66],z=`container mb-5`,L=`row`;let ne;e[67]===Symbol.for(`react.memo_cache_sentinel`)?(ne={top:`20px`},e[67]=ne):ne=e[67];let G;e[68]===Symbol.for(`react.memo_cache_sentinel`)?(G=(0,F.jsx)(`div`,{className:`card-header bg-white py-3`,children:(0,F.jsx)(`h5`,{className:`mb-0 fw-bold`,children:`Order Summary`})}),e[68]=G):G=e[68];let K;if(e[69]!==n){let t;e[71]===n.length?t=e[72]:(t=(e,t)=>(0,F.jsxs)(`div`,{className:`d-flex justify-content-between align-items-center ${t===n.length-1?``:`mb-3 pb-3 border-bottom`}`,children:[(0,F.jsxs)(`div`,{className:`d-flex align-items-center`,children:[e.image?(0,F.jsx)(`img`,{src:e.image,alt:e.name,className:`rounded me-3`,style:{width:`50px`,height:`50px`,objectFit:`cover`}}):(0,F.jsx)(`div`,{className:`bg-light rounded d-flex align-items-center justify-content-center me-3`,style:{width:`50px`,height:`50px`},children:(0,F.jsx)(`i`,{className:`fas fa-tshirt text-muted`})}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h6`,{className:`mb-0 small fw-bold`,children:e.name}),(0,F.jsxs)(`p`,{className:`mb-0 text-muted small`,children:[`Qty: `,e.quantity]})]})]}),(0,F.jsxs)(`span`,{className:`fw-bold`,children:[`₹`,(isNaN(e.price*e.quantity)?0:e.price*e.quantity).toLocaleString(`en-IN`)]})]},e.id),e[71]=n.length,e[72]=t),K=n.map(t),e[69]=n,e[70]=K}else K=e[70];let ie;e[73]===Symbol.for(`react.memo_cache_sentinel`)?(ie=(0,F.jsx)(`span`,{children:`Subtotal:`}),e[73]=ie):ie=e[73];let ae=(isNaN(r)?0:r).toLocaleString(`en-IN`),q;e[74]===ae?q=e[75]:(q=(0,F.jsxs)(`div`,{className:`d-flex justify-content-between mb-2`,children:[ie,(0,F.jsxs)(`span`,{className:`fw-bold`,children:[`₹`,ae]})]}),e[74]=ae,e[75]=q);let oe;e[76]===Symbol.for(`react.memo_cache_sentinel`)?(oe=(0,F.jsx)(`span`,{children:`Tax (18%):`}),e[76]=oe):oe=e[76];let se=(isNaN(i)?0:i).toLocaleString(`en-IN`),J;e[77]===se?J=e[78]:(J=(0,F.jsxs)(`div`,{className:`d-flex justify-content-between mb-2`,children:[oe,(0,F.jsxs)(`span`,{className:`fw-bold`,children:[`₹`,se]})]}),e[77]=se,e[78]=J);let ce,le;e[79]===Symbol.for(`react.memo_cache_sentinel`)?(ce=(0,F.jsxs)(`div`,{className:`d-flex justify-content-between mb-3`,children:[(0,F.jsx)(`span`,{children:`Shipping:`}),(0,F.jsx)(`span`,{className:`fw-bold text-success`,children:`FREE`})]}),le=(0,F.jsx)(`hr`,{}),e[79]=ce,e[80]=le):(ce=e[79],le=e[80]);let ue;e[81]===Symbol.for(`react.memo_cache_sentinel`)?(ue=(0,F.jsx)(`h6`,{className:`mb-0`,children:`Total:`}),e[81]=ue):ue=e[81];let de=(0,F.jsxs)(`div`,{className:`d-flex justify-content-between`,children:[ue,(0,F.jsxs)(`h5`,{className:`mb-0 text-primary`,children:[`₹`,(isNaN(a)?0:a).toLocaleString(`en-IN`)]})]}),fe;e[82]!==q||e[83]!==J||e[84]!==de?(fe=(0,F.jsxs)(`div`,{className:`mt-3`,children:[q,J,ce,le,de]}),e[82]=q,e[83]=J,e[84]=de,e[85]=fe):fe=e[85],e[86]!==K||e[87]!==fe?(R=(0,F.jsx)(`div`,{className:`col-lg-4 mb-4`,children:(0,F.jsxs)(`div`,{className:`card shadow-sm border-0 sticky-top`,style:ne,"data-aos":`fade-right`,children:[G,(0,F.jsxs)(`div`,{className:`card-body`,children:[K,fe]})]})}),e[86]=K,e[87]=fe,e[88]=R):R=e[88],I=`col-lg-8`,j=`card shadow-sm border-0`,M=`fade-left`,e[89]===Symbol.for(`react.memo_cache_sentinel`)?(P=(0,F.jsx)(`div`,{className:`card-header bg-white py-3`,children:(0,F.jsx)(`h5`,{className:`mb-0 fw-bold`,children:`Billing & Shipping Information`})}),e[89]=P):P=e[89],A=`card-body`,E=C;let pe;e[90]===Symbol.for(`react.memo_cache_sentinel`)?(pe=(0,F.jsx)(`h6`,{className:`fw-bold mb-3`,children:`Personal Information`}),e[90]=pe):pe=e[90];let me;e[91]===Symbol.for(`react.memo_cache_sentinel`)?(me=(0,F.jsx)(`label`,{className:`form-label small fw-bold`,children:`First Name *`}),e[91]=me):me=e[91];let he;e[92]!==o.firstName||e[93]!==x?(he=(0,F.jsxs)(`div`,{className:`col-md-6 mb-3 mb-md-0`,children:[me,(0,F.jsx)(`input`,{type:`text`,className:`form-control`,name:`firstName`,value:o.firstName,onChange:x,required:!0})]}),e[92]=o.firstName,e[93]=x,e[94]=he):he=e[94];let ge;e[95]===Symbol.for(`react.memo_cache_sentinel`)?(ge=(0,F.jsx)(`label`,{className:`form-label small fw-bold`,children:`Last Name *`}),e[95]=ge):ge=e[95];let Y;e[96]!==o.lastName||e[97]!==x?(Y=(0,F.jsxs)(`div`,{className:`col-md-6`,children:[ge,(0,F.jsx)(`input`,{type:`text`,className:`form-control`,name:`lastName`,value:o.lastName,onChange:x,required:!0})]}),e[96]=o.lastName,e[97]=x,e[98]=Y):Y=e[98];let _e;e[99]!==he||e[100]!==Y?(_e=(0,F.jsxs)(`div`,{className:`row mb-3`,children:[he,Y]}),e[99]=he,e[100]=Y,e[101]=_e):_e=e[101];let X;e[102]===Symbol.for(`react.memo_cache_sentinel`)?(X=(0,F.jsx)(`label`,{className:`form-label small fw-bold`,children:`Email *`}),e[102]=X):X=e[102];let ve;e[103]!==o.email||e[104]!==x?(ve=(0,F.jsxs)(`div`,{className:`col-md-6 mb-3 mb-md-0`,children:[X,(0,F.jsx)(`input`,{type:`email`,className:`form-control`,name:`email`,value:o.email,onChange:x,required:!0})]}),e[103]=o.email,e[104]=x,e[105]=ve):ve=e[105];let ye;e[106]===Symbol.for(`react.memo_cache_sentinel`)?(ye=(0,F.jsx)(`label`,{className:`form-label small fw-bold`,children:`Phone *`}),e[106]=ye):ye=e[106];let be;e[107]!==o.phone||e[108]!==x?(be=(0,F.jsxs)(`div`,{className:`col-md-6`,children:[ye,(0,F.jsx)(`input`,{type:`tel`,className:`form-control`,name:`phone`,value:o.phone,onChange:x,required:!0})]}),e[107]=o.phone,e[108]=x,e[109]=be):be=e[109];let xe;e[110]!==ve||e[111]!==be?(xe=(0,F.jsxs)(`div`,{className:`row mb-3`,children:[ve,be]}),e[110]=ve,e[111]=be,e[112]=xe):xe=e[112],e[113]!==_e||e[114]!==xe?(D=(0,F.jsxs)(`div`,{className:`mb-4`,children:[pe,_e,xe]}),e[113]=_e,e[114]=xe,e[115]=D):D=e[115];let Se;e[116]===Symbol.for(`react.memo_cache_sentinel`)?(Se=(0,F.jsx)(`h6`,{className:`fw-bold mb-3`,children:`Shipping Address`}),e[116]=Se):Se=e[116];let Ce;e[117]===Symbol.for(`react.memo_cache_sentinel`)?(Ce=(0,F.jsx)(`label`,{className:`form-label small fw-bold`,children:`Address *`}),e[117]=Ce):Ce=e[117];let Z;e[118]!==o.address||e[119]!==x?(Z=(0,F.jsxs)(`div`,{className:`mb-3`,children:[Ce,(0,F.jsx)(`textarea`,{className:`form-control`,rows:`2`,name:`address`,value:o.address,onChange:x,required:!0})]}),e[118]=o.address,e[119]=x,e[120]=Z):Z=e[120];let Q;e[121]===Symbol.for(`react.memo_cache_sentinel`)?(Q=(0,F.jsx)(`label`,{className:`form-label small fw-bold`,children:`City *`}),e[121]=Q):Q=e[121];let $;e[122]!==o.city||e[123]!==x?($=(0,F.jsxs)(`div`,{className:`col-md-4 mb-3 mb-md-0`,children:[Q,(0,F.jsx)(`input`,{type:`text`,className:`form-control`,name:`city`,value:o.city,onChange:x,required:!0})]}),e[122]=o.city,e[123]=x,e[124]=$):$=e[124];let we;e[125]===Symbol.for(`react.memo_cache_sentinel`)?(we=(0,F.jsx)(`label`,{className:`form-label small fw-bold`,children:`State *`}),e[125]=we):we=e[125];let Te;e[126]!==o.state||e[127]!==x?(Te=(0,F.jsxs)(`div`,{className:`col-md-4 mb-3 mb-md-0`,children:[we,(0,F.jsx)(`input`,{type:`text`,className:`form-control`,name:`state`,value:o.state,onChange:x,required:!0})]}),e[126]=o.state,e[127]=x,e[128]=Te):Te=e[128];let Ee;e[129]===Symbol.for(`react.memo_cache_sentinel`)?(Ee=(0,F.jsx)(`label`,{className:`form-label small fw-bold`,children:`ZIP Code *`}),e[129]=Ee):Ee=e[129];let De;e[130]!==o.zipCode||e[131]!==x?(De=(0,F.jsxs)(`div`,{className:`col-md-4`,children:[Ee,(0,F.jsx)(`input`,{type:`text`,className:`form-control`,name:`zipCode`,value:o.zipCode,onChange:x,required:!0})]}),e[130]=o.zipCode,e[131]=x,e[132]=De):De=e[132];let Oe;e[133]!==$||e[134]!==Te||e[135]!==De?(Oe=(0,F.jsxs)(`div`,{className:`row mb-3`,children:[$,Te,De]}),e[133]=$,e[134]=Te,e[135]=De,e[136]=Oe):Oe=e[136],e[137]!==Z||e[138]!==Oe?(O=(0,F.jsxs)(`div`,{className:`mb-4`,children:[Se,Z,Oe]}),e[137]=Z,e[138]=Oe,e[139]=O):O=e[139];let ke;e[140]===Symbol.for(`react.memo_cache_sentinel`)?(ke=(0,F.jsx)(`h6`,{className:`fw-bold mb-3`,children:`Payment Method`}),e[140]=ke):ke=e[140];let Ae,je,Me,Ne;e[141]===Symbol.for(`react.memo_cache_sentinel`)?(Ae=(0,F.jsx)(`option`,{value:`cod`,children:`Cash on Delivery`}),je=(0,F.jsx)(`option`,{value:`card`,children:`Credit/Debit Card`}),Me=(0,F.jsx)(`option`,{value:`upi`,children:`UPI`}),Ne=(0,F.jsx)(`option`,{value:`netbanking`,children:`Net Banking`}),e[141]=Ae,e[142]=je,e[143]=Me,e[144]=Ne):(Ae=e[141],je=e[142],Me=e[143],Ne=e[144]);let Pe;e[145]!==o.paymentMethod||e[146]!==x?(Pe=(0,F.jsx)(`div`,{className:`mb-3`,children:(0,F.jsxs)(`select`,{className:`form-select`,name:`paymentMethod`,value:o.paymentMethod,onChange:x,children:[Ae,je,Me,Ne]})}),e[145]=o.paymentMethod,e[146]=x,e[147]=Pe):Pe=e[147];let Fe;e[148]!==o.cardName||e[149]!==o.cardNumber||e[150]!==o.cvv||e[151]!==o.expiryDate||e[152]!==o.paymentMethod||e[153]!==x?(Fe=o.paymentMethod===`card`&&(0,F.jsxs)(`div`,{className:`card bg-light p-3`,children:[(0,F.jsxs)(`div`,{className:`mb-3`,children:[(0,F.jsx)(`label`,{className:`form-label small fw-bold`,children:`Card Number *`}),(0,F.jsx)(`input`,{type:`text`,className:`form-control`,name:`cardNumber`,value:o.cardNumber,onChange:x,placeholder:`1234 5678 9012 3456`,required:!0})]}),(0,F.jsxs)(`div`,{className:`mb-3`,children:[(0,F.jsx)(`label`,{className:`form-label small fw-bold`,children:`Cardholder Name *`}),(0,F.jsx)(`input`,{type:`text`,className:`form-control`,name:`cardName`,value:o.cardName,onChange:x,placeholder:`John Doe`,required:!0})]}),(0,F.jsxs)(`div`,{className:`row`,children:[(0,F.jsxs)(`div`,{className:`col-md-6 mb-3 mb-md-0`,children:[(0,F.jsx)(`label`,{className:`form-label small fw-bold`,children:`Expiry Date *`}),(0,F.jsx)(`input`,{type:`text`,className:`form-control`,name:`expiryDate`,value:o.expiryDate,onChange:x,placeholder:`MM/YY`,required:!0})]}),(0,F.jsxs)(`div`,{className:`col-md-6`,children:[(0,F.jsx)(`label`,{className:`form-label small fw-bold`,children:`CVV *`}),(0,F.jsx)(`input`,{type:`text`,className:`form-control`,name:`cvv`,value:o.cvv,onChange:x,placeholder:`123`,required:!0})]})]})]}),e[148]=o.cardName,e[149]=o.cardNumber,e[150]=o.cvv,e[151]=o.expiryDate,e[152]=o.paymentMethod,e[153]=x,e[154]=Fe):Fe=e[154];let Ie;e[155]!==o.paymentMethod||e[156]!==o.upiId||e[157]!==x?(Ie=o.paymentMethod===`upi`&&(0,F.jsx)(`div`,{className:`card bg-light p-3`,children:(0,F.jsxs)(`div`,{className:`mb-3`,children:[(0,F.jsx)(`label`,{className:`form-label small fw-bold`,children:`UPI ID *`}),(0,F.jsx)(`input`,{type:`text`,className:`form-control`,name:`upiId`,value:o.upiId,onChange:x,placeholder:`yourname@upi`,required:!0})]})}),e[155]=o.paymentMethod,e[156]=o.upiId,e[157]=x,e[158]=Ie):Ie=e[158];let Le;e[159]!==o.bankName||e[160]!==o.paymentMethod||e[161]!==x?(Le=o.paymentMethod===`netbanking`&&(0,F.jsx)(`div`,{className:`card bg-light p-3`,children:(0,F.jsxs)(`div`,{className:`mb-3`,children:[(0,F.jsx)(`label`,{className:`form-label small fw-bold`,children:`Select Bank *`}),(0,F.jsxs)(`select`,{className:`form-select`,name:`bankName`,value:o.bankName,onChange:x,required:!0,children:[(0,F.jsx)(`option`,{value:``,children:`Select your bank`}),(0,F.jsx)(`option`,{value:`sbi`,children:`State Bank of India`}),(0,F.jsx)(`option`,{value:`hdfc`,children:`HDFC Bank`}),(0,F.jsx)(`option`,{value:`icici`,children:`ICICI Bank`}),(0,F.jsx)(`option`,{value:`axis`,children:`Axis Bank`}),(0,F.jsx)(`option`,{value:`pnb`,children:`Punjab National Bank`})]})]})}),e[159]=o.bankName,e[160]=o.paymentMethod,e[161]=x,e[162]=Le):Le=e[162],e[163]!==Pe||e[164]!==Fe||e[165]!==Ie||e[166]!==Le?(k=(0,F.jsxs)(`div`,{className:`mb-4`,children:[ke,Pe,Fe,Ie,Le]}),e[163]=Pe,e[164]=Fe,e[165]=Ie,e[166]=Le,e[167]=k):k=e[167],T=`d-flex gap-3`;let Re;e[168]===t?Re=e[169]:(Re=()=>t(`/cart`),e[168]=t,e[169]=Re);let ze;e[170]===Symbol.for(`react.memo_cache_sentinel`)?(ze=(0,F.jsx)(`i`,{className:`fas fa-arrow-left me-2`}),e[170]=ze):ze=e[170],e[171]===Re?ee=e[172]:(ee=(0,F.jsxs)(`button`,{type:`button`,className:`btn btn-outline-secondary`,onClick:Re,children:[ze,`Back to Cart`]}),e[171]=Re,e[172]=ee),U=`submit`,W=`btn btn-success flex-grow-1 fw-bold`,re=d,w=d?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`span`,{className:`spinner-border spinner-border-sm me-2`,role:`status`,"aria-hidden":`true`}),`Processing...`]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`i`,{className:`fas fa-lock me-2`}),`Place Order - ₹`,a.toLocaleString(`en-IN`)]})}e[12]=h,e[13]=_,e[14]=y,e[15]=n,e[16]=o,e[17]=x,e[18]=d,e[19]=t,e[20]=l,e[21]=w,e[22]=T,e[23]=ee,e[24]=E,e[25]=D,e[26]=O,e[27]=k,e[28]=A,e[29]=j,e[30]=M,e[31]=P,e[32]=I,e[33]=L,e[34]=R,e[35]=z,e[36]=B,e[37]=V,e[38]=H,e[39]=U,e[40]=W,e[41]=re}else w=e[21],T=e[22],ee=e[23],E=e[24],D=e[25],O=e[26],k=e[27],A=e[28],j=e[29],M=e[30],P=e[31],I=e[32],L=e[33],R=e[34],z=e[35],B=e[36],V=e[37],H=e[38],U=e[39],W=e[40],re=e[41];if(H!==Symbol.for(`react.early_return_sentinel`))return H;let G;e[173]!==w||e[174]!==U||e[175]!==W||e[176]!==re?(G=(0,F.jsx)(`button`,{type:U,className:W,disabled:re,children:w}),e[173]=w,e[174]=U,e[175]=W,e[176]=re,e[177]=G):G=e[177];let K;e[178]!==T||e[179]!==ee||e[180]!==G?(K=(0,F.jsxs)(`div`,{className:T,children:[ee,G]}),e[178]=T,e[179]=ee,e[180]=G,e[181]=K):K=e[181];let ie;e[182]!==E||e[183]!==D||e[184]!==O||e[185]!==k||e[186]!==K?(ie=(0,F.jsxs)(`form`,{onSubmit:E,children:[D,O,k,K]}),e[182]=E,e[183]=D,e[184]=O,e[185]=k,e[186]=K,e[187]=ie):ie=e[187];let ae;e[188]!==A||e[189]!==ie?(ae=(0,F.jsx)(`div`,{className:A,children:ie}),e[188]=A,e[189]=ie,e[190]=ae):ae=e[190];let q;e[191]!==j||e[192]!==M||e[193]!==P||e[194]!==ae?(q=(0,F.jsxs)(`div`,{className:j,"data-aos":M,children:[P,ae]}),e[191]=j,e[192]=M,e[193]=P,e[194]=ae,e[195]=q):q=e[195];let oe;e[196]!==I||e[197]!==q?(oe=(0,F.jsx)(`div`,{className:I,children:q}),e[196]=I,e[197]=q,e[198]=oe):oe=e[198];let se;e[199]!==L||e[200]!==R||e[201]!==oe?(se=(0,F.jsxs)(`div`,{className:L,children:[R,oe]}),e[199]=L,e[200]=R,e[201]=oe,e[202]=se):se=e[202];let J;e[203]!==z||e[204]!==se?(J=(0,F.jsx)(`div`,{className:z,children:se}),e[203]=z,e[204]=se,e[205]=J):J=e[205];let ce;e[206]===Symbol.for(`react.memo_cache_sentinel`)?(ce=(0,F.jsx)(ge,{}),e[206]=ce):ce=e[206];let le;return e[207]!==B||e[208]!==V||e[209]!==J?(le=(0,F.jsxs)(F.Fragment,{children:[B,V,J,ce]}),e[207]=B,e[208]=V,e[209]=J,e[210]=le):le=e[210],le}function wn(){G.default.init({duration:1e3,once:!0})}function Tn(){let e=(0,te.c)(8),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,F.jsx)(i,{path:`/`,element:(0,F.jsx)(Y,{})}),e[0]=t):t=e[0];let n;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,F.jsx)(i,{path:`/shop`,element:(0,F.jsx)(vt,{})}),e[1]=n):n=e[1];let a;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(a=(0,F.jsx)(i,{path:`/About`,element:(0,F.jsx)(Tt,{})}),e[2]=a):a=e[2];let o;e[3]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,F.jsx)(i,{path:`/Contact`,element:(0,F.jsx)(Qt,{})}),e[3]=o):o=e[3];let s;e[4]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,F.jsx)(i,{path:`/Login`,element:(0,F.jsx)(yn,{})}),e[4]=s):s=e[4];let c;e[5]===Symbol.for(`react.memo_cache_sentinel`)?(c=(0,F.jsx)(i,{path:`/Sign`,element:(0,F.jsx)(bn,{})}),e[5]=c):c=e[5];let l;e[6]===Symbol.for(`react.memo_cache_sentinel`)?(l=(0,F.jsx)(i,{path:`/cart`,element:(0,F.jsx)(xn,{})}),e[6]=l):l=e[6];let u;return e[7]===Symbol.for(`react.memo_cache_sentinel`)?(u=(0,F.jsx)(L,{children:(0,F.jsx)(O,{children:(0,F.jsxs)(r,{children:[t,n,a,o,s,c,l,(0,F.jsx)(i,{path:`/checkout`,element:(0,F.jsx)(Cn,{})})]})})}),e[7]=u):u=e[7],u}(0,P.createRoot)(document.getElementById(`root`)).render((0,F.jsx)(N.StrictMode,{children:(0,F.jsx)(Tn,{})}));