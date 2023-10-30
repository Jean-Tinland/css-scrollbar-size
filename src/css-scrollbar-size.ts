const isSSR = typeof document === "undefined" || typeof window === "undefined";

if (!isSSR) {
  // execture the function when the DOM is loaded
  document.addEventListener("DOMContentLoaded", setCssVariable);
  // set a default CSS variable
  document.documentElement.style.setProperty("--scrollbar-size", "0px");
}

function setCssVariable() {
  const sentinelSize = 100;

  // create the sentinel element with its styles
  const sentinel = document.createElement("div");
  const styles = ` 
    display: block;
    position: absolute;
    top: -9999px;
    width: ${sentinelSize}px;
    height: ${sentinelSize}px;
    overflow: scroll;
  `;
  sentinel.setAttribute("style", styles);

  document.body.appendChild(sentinel);

  // check if the DOM is fully loaded, otherwise try again in 100ms
  if (sentinel.clientWidth === 0) {
    document.body.removeChild(sentinel);
    setTimeout(setCssVariable, 100);
    return;
  }

  // detect desktop scrollbar width
  // mobile scrollbar width is always 0 as it is absolutely positioned
  const size = sentinel.offsetWidth - sentinel.clientWidth;

  document.body.removeChild(sentinel);

  // set CSS variable
  document.documentElement.style.setProperty("--scrollbar-size", `${size}px`);
}
