/**
 * @description
 * Turns an object of classnames into a class string
 *
 * @param {Object} classes
 *
 * @returns string
 */
export function classNames(classes) {
  if (!classes) return "";
  return Object.keys(classes)
    .map((key) => {
      return classes[key] ? key : null;
    })
    .filter((item) => !!item)
    .join(" ");
}
