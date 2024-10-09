// eslint-disable-next-line no-unused-vars
function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string' || startString === '') {
    return '';
  }

  const filteredValues = Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  return filteredValues.join('-');
}
