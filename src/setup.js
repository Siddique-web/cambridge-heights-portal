import "@testing-library/jest-dom/vitest";
window.matchMedia=window.matchMedia||(q=>({matches:false,media:q,addEventListener(){},removeEventListener(){},addListener(){},removeListener(){}}));
window.IntersectionObserver=class{observe(){}unobserve(){}disconnect(){}};
window.scrollTo=()=>{};
Element.prototype.scrollIntoView=()=>{};
Element.prototype.scrollBy=()=>{};
