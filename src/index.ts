const isSSR = typeof document === "undefined" || typeof window === "undefined";

if (!isSSR) {
  document.addEventListener("DOMContentLoaded", setCssVariable);
}

function setCssVariable() {
  const sentinelSize = 100;

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

  if (sentinel.clientWidth === 0) {
    // remove the element and skip the caching
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
