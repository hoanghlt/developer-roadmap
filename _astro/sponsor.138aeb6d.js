import{a as n,T as i}from"./jwt.1d42f94f.js";import{s as u}from"./page.d4f83d9f.js";window.fireEvent=e=>{const{action:t,category:o,label:l,value:r}=e;if(!window.gtag){console.warn("Missing GTAG - Analytics disabled");return}window.__DEBUG__&&console.log("Analytics event fired",e),window.gtag("event",t,{event_category:o,event_label:l,value:r})};function s(e){e.classList.add("opacity-0","transition-opacity","duration-300"),e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0")})}function d(e="hide"){document.querySelectorAll("[data-auth-required]").forEach(t=>{e==="hide"?t.classList.add("hidden"):s(t)})}function a(e="hide"){document.querySelectorAll("[data-guest-required]").forEach(t=>{e==="hide"?t.classList.add("hidden"):s(t)})}function f(){const e=["/settings/update-profile","/settings/update-password"];d("hide"),a("show"),e.includes(window.location.pathname)&&(window.location.href="/")}function h(){const e=["/login","/signup","/verify-account","/verification-pending","/reset-password","/forgot-password"];a("hide"),d("show"),e.includes(window.location.pathname)&&(window.location.href="/")}function w(){n.get(i)?h():f()}window.setTimeout(()=>{w()},0);function m(){n.remove(i),window.location.reload()}function g(){document.addEventListener("click",e=>{const t=e.target,o={...t.dataset,...t.closest("button")?.dataset};o.logoutButton!==void 0?m():o.showMobileNav!==void 0?document.querySelector("[data-mobile-nav]")?.classList.remove("hidden"):o.closeMobileNav!==void 0&&document.querySelector("[data-mobile-nav]")?.classList.add("hidden")}),document.querySelector("[data-account-button]")?.addEventListener("click",e=>{e.stopPropagation(),document.querySelector("[data-account-dropdown]")?.classList.toggle("hidden")})}g();document.querySelector("[close-sponsor]")?.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),document.getElementById("sponsor-ad")?.classList.add("hidden")});function c(e){const t=document.querySelector("#sponsor-ad");t&&(e?(t.classList.add("hidden"),t.classList.remove("flex")):(t.classList.remove("hidden"),t.classList.add("flex")))}u.listen(c);window.setTimeout(()=>{c(!1)},500);