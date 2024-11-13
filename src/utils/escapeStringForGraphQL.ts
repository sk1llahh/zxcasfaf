export const escapeStringForGraphQL = (str: string) => {
  const escapableChars = {
    '\\': '\\\\',
    '"': '\\"',
    "'": "\\'",
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\b': '\\b',
    '\f': '\\f',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029',
  };

  // @ts-ignore
  return str.replace(/[\\\"\n\r\t\b\f\u2028\u2029]/g, (char: string) => escapableChars[char]);
}