export const genRestrictedPaths = (paths = []) =>
  paths
    .reverse()
    .map((path, index, arr) => [path, arr.slice(index + 1)])
    .flatMap(([target, froms]) =>
      froms.map((from) => ({
        target,
        from,
      })),
    );
