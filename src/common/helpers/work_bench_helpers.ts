
export function setOrGetWidth(currentWidth?: number) {
  const key = "work-bench-width";
  if (currentWidth != undefined) {
    localStorage.setItem(key, `${currentWidth}`);
    return;
  }
  const width = localStorage.getItem(key);
  if (width != undefined) {
    return parseFloat(width);
  }
}

export function updateStyle(width: number) {
  document.documentElement.style.setProperty(
    "--work-bench-width",
    `${width}px`
  );
  setOrGetWidth(width);
}
