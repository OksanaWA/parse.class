function getElementWidth(content, padding, border) {
  const contentWith = Number.parseFloat(content);
  const paddingSides = Number.parseFloat(padding);
  const borderSides = Number.parseFloat(border);
  return contentWith + 2 * paddingSides + 2 * borderSides;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
