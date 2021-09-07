export default function sortBy(data, key, immutable = true) {
  const _data = immutable ? [...data] : data;
  return _data.sort((a, b) => a[key] - b[key]);
}
