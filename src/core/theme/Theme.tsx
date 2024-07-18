type Theme = "dark" | "light";
 function setTheme(theme?: Theme) {
  const key = "theme";
  const _theme = theme ?? localStorage.getItem(key) ?? "dark";
  document.documentElement.setAttribute("data-theme", _theme);
  localStorage.setItem(key, _theme);
}

export default setTheme;