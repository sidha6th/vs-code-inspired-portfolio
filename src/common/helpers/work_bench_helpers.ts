import Constants from "../../constants/Constants";

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

export function hideWorkBench() {
  const workBench = document.getElementById("resizableWorkBench");
  workBench?.classList.remove("overlayed");
  workBench?.classList.add("hide");
}
export function displayWorkBench() {
  const workBench = document.getElementById("resizableWorkBench");
  const workBenchWidth = setOrGetWidth()
  if (window.innerWidth -(workBenchWidth??0) < Constants.dimension.minVWToDisplyWorkbench) {
  workBench?.classList.remove("hide");
    workBench?.classList.add("overlayed");
    return;
  }
  workBench?.classList.remove("hide");
  workBench?.classList.remove("overlayed");
}

export function toggleWorkbenchVisiblity() {
  const workBench = document.getElementById("resizableWorkBench");
  if (workBench?.classList.contains("hide")) {
    displayWorkBench();
  } else {
    hideWorkBench();
  }
}
