export function breakCamelCase(string) {
  const regex = /([a-z])([A-Z])/g;
  const words = string.replace(regex, '$1 $2');
  return words;
}

/**
 * 
 * other solution 
 */
export const breakCamelCase2 = string => {
  return [...string].map((char) => {
    return (char === char.toUpperCase()) ? ` ${char}` : char;
  }).join('');
};
