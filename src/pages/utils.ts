/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

export function getProperties(obj: { [key: string]: unknown }) {
  const result = [];
  for (const p in obj) {
    result.push(p);
  }
  return result;
}

export function apple() {}
