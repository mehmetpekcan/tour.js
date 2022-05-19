var b=Object.defineProperty;var N=(e,t)=>{for(var s in t)b(e,s,{get:t[s],enumerable:!0})};var x={};N(x,{BUTTON:()=>c,CONTENT:()=>f,FINISH_BUTTON:()=>u,FOOTER:()=>i,NEXT_BUTTON:()=>d,PREV_BUTTON:()=>h,TITLE:()=>T,TOOLTIP:()=>m});var T={class:"tour--tooltip-title",css:`
    font-weight: 700;
    font-size: 24px;
    overflow-wrap: break-word;
    line-height: 1.5;
  `},f={class:"tour--tooltip-content",css:`
    color: #2c3e50;
    margin-top: 4px;
    line-height: 24px;
    font-size: 16px;
    overflow-wrap: break-word;
    line-height: 1.5;
  `},c={class:"tour--tooltip-button",css:`
    cursor: pointer;
    letter-spacing: .2px;
    border: 0;
    outline: 0;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 14px;
    box-shadow: 0 5px 20px 10px rgba(0, 0, 0, .1);
    color: #ecf0f1;
    background-color: #4834d4;
    overflow-wrap: break-word;
    line-height: 1.5;
  `},h={class:"tour--tooltip-prev",css:`
  `,element({prev:e,isEditMode:t=!1}){return e?`
        <div>
          <button class='${this.class} ${c.class}' contenteditable='${t}' style='${this.css}'>${e}</button>
        </div>
      `:""}},d={class:"tour--tooltip-next",wrapperCSS:`
  `,css:`
  `,element({next:e,isEditMode:t=!1}){return e?`
        <div style='${this.wrapperCSS}'>
          <button class='${this.class} ${c.class}' contenteditable='${t}' style='${this.css}'>${e}</button>
        </div>
      `:""}},u={class:"tour--tooltip-finish",wrapperCSS:`
  `,css:`
    background-color: #eb4d4b;
  `,element({finish:e,isEditMode:t=!1}){return e?`
        <div style='${this.wrapperCSS}'>
          <button class='${this.class} ${c.class}' contenteditable='${t}' style='${this.css}'>${e}</button>
        </div>
      `:""}},i={class:"tour--tooltip-footer",css:`
    margin-top: 16px;
    display: flex;
    gap: 8px;
  `},m={class:"tour--tooltip-wrapper",css:`
    position: absolute;
    width: 350px;
    min-width: 350px;
    max-width: 500px;
    padding: 24px;
    z-index: 999;
    opacity: 0;
    border-radius: 8px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, .1);
    background-color: rgba(255, 255,255, .9);
    transition: all ${300}ms;
    line-height: 1.5;
  `,innerElement({title:e,content:t,next:s,prev:r,finish:n,isEditMode:o}){return`
      ${e?`<h3 class='${T.class}' contenteditable='${o}' style='${T.css}'>${e}</h3>`:""}
      ${t?`<div class='${f.class}' contenteditable='${o}' style='${f.css}'>${t}</div>`:""}
      ${r||s||n?`
          <div class='${i.class}' style='${i.css}'>
            ${h.element({prev:r,isEditMode:o})}
            ${d.element({next:s,isEditMode:o})}
            ${u.element({finish:n,isEditMode:o})}
          </div>
        `:""}
    `},element(e){return`
      <div class='${this.class}' style='${this.css}'>
        ${this.innerElement(e)}
      </div>
    `}};var a=8,I={class:"tour--highlighter-wrapper",css:`
    box-sizing: content-box;
    position: absolute;
    z-index: 998;
    opacity: 0;
    border: ${a}px solid rgba(255, 255, 255, .8);
    background-color: transparent;
    transition: all ${300}ms;
    box-shadow: rgba(33, 33, 33, 0.5) 0px 0px 0px 5000px;
    border-radius: 8px;
  `,element(){return`<div class='${this.class}' style='${this.css}'></div>`}};var l=e=>{let t=document.createElement("template");return t.innerHTML=e,t.content.firstElementChild};var O={header:"Header",body:"Hulog"},p=()=>{},$=class{constructor({onNext:t,onPrev:s,onFinish:r,onEditNegative:n,onEditPositive:o}={}){this.onNext=t||p,this.onPrev=s||p,this.onFinish=r||p,this.onEditNegative=n||p,this.onEditPositive=o||p,this.constant=x}onEditNextButtonClick(){let t=document.querySelector(`.${i.class}`);t.style.display="flex";let s=l(d.element({next:"Next",isEditMode:!0}));return t.appendChild(s),this}onEditPrevButtonClick(){let t=document.querySelector(`.${i.class}`);t.style.display="flex";let s=l(h.element({prev:"Prev",isEditMode:!0}));return t.appendChild(s),this}onEditFinishButtonClick(){let t=document.querySelector(`.${i.class}`);t.style.display="flex";let s=l(u.element({finish:"Finish",isEditMode:!0}));return t.appendChild(s),this}bindEvents(){let t=".tour--tooltip";[{selector:`${t}-next`,handler:this.onNext},{selector:`${t}-prev`,handler:this.onPrev},{selector:`${t}-finish`,handler:this.onFinish},{selector:`${t}-edit-positive`,handler:this.onEditPositive},{selector:`${t}-edit-negative`,handler:this.onEditNegative},{selector:`${t}-edit-next`,handler:this.onEditNextButtonClick},{selector:`${t}-edit-prev`,handler:this.onEditPrevButtonClick},{selector:`${t}-edit-finish`,handler:this.onEditFinishButtonClick}].forEach(({selector:r,handler:n})=>{let o=document.querySelector(r);o&&o.addEventListener("click",n,{once:!0})})}remove(){this.tooltipElement.outerHTML=null}render(t=null,s={}){this.tooltipElement=document.querySelector(".tour--tooltip-wrapper");let r={...O,...s};if(this.tooltipElement)this.tooltipElement.innerHTML=m.innerElement(r);else{let n=m.element(r);this.tooltipElement=l(n),document.body.append(this.tooltipElement)}this.bindEvents(),setTimeout(()=>{let{height:n,top:o,left:E}=t,v=`${E-a}px`,y=`${o+n+a+16}px`;this.tooltipElement.classList.add("visible"),this.tooltipElement.style.setProperty("top",y),this.tooltipElement.style.setProperty("left",v)},0)}};$.constant=x;(function(){window.ahmet="asdada",alert("hi")})();
//# sourceMappingURL=index.js.map
