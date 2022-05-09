export default function stripBom(string: String) {
  if (typeof string !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof string}`);
  }

  if (string.charCodeAt(0) === 0xFEFF) {
    return string.slice(1);
  }

  return string;
}
