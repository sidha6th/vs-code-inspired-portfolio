export function listenScroll(
  element: HTMLDivElement,
  listener: (ev: Event) => void
) {
  element.addEventListener("scroll", listener);
}
