document.querySelector("[submit-download-form]")?.addEventListener("click",()=>{window.fireEvent({category:"Subscription",action:"Submitted Popup Form",label:"Download Roadmap Popup"})});class n{constructor(){this.triggerPopup=this.triggerPopup.bind(this),this.onDOMLoaded=this.onDOMLoaded.bind(this),this.handleClosePopup=this.handleClosePopup.bind(this),this.handleKeydown=this.handleKeydown.bind(this)}triggerPopup(s){const e=s?.target?.closest("[data-popup]")?.dataset?.popup||"unknown-popup",o=document.querySelector(`#${e}`);if(!o)return;o.classList.remove("hidden"),o.classList.add("flex");const t=o.querySelector("[autofocus]");t&&t.focus()}handleClosePopup(s){const e=s.target,o=e.closest(".popup-body"),t=e.closest(".popup");!e.closest(".popup-close")&&o||t&&(t.classList.add("hidden"),t.classList.remove("flex"))}handleKeydown(s){if(s.key!=="Escape")return;const e=document.querySelector(".popup:not(.hidden)");e&&(e.classList.add("hidden"),e.classList.remove("flex"))}onDOMLoaded(){document.addEventListener("click",this.triggerPopup),document.addEventListener("click",this.handleClosePopup),document.addEventListener("keydown",this.handleKeydown)}init(){window.addEventListener("DOMContentLoaded",this.onDOMLoaded)}}const d=new n;d.init();