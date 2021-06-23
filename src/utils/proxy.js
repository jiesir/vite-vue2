export const createProxy = (str) => {
  const list = str ? [str.split(',')] : [];
  const ret = {};
  for (const [prefix, target] of list) {
    ret[prefix] = {
      target: target,
      changeOrigin: true,
      rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
    };
  }
  return ret;
}
