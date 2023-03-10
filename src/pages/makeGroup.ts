export function tieToObj(arr: Array<any>, key: string) {
  function findAll(id: string) {
    const filtered = arr.filter((e) => e[key] === id);
    filtered.forEach((e) => {
      delete e[key];
    });
    return filtered;
  }

  const criterias = arr.map((e) => e[key]);
  const uCriterias = [...new Set(criterias)];
  const result: any = {};
  uCriterias.forEach((criteria) => {
    result[criteria] = findAll(criteria);
  });
  return result;
}

export function makeGroup(
  arr: Array<any>,
  key: string,
  leftKey: string[],
  childKey: string,
): Array<any> {
  function findAll(id: string) {
    const filtered = arr.filter((e) => e[key] === id);
    filtered.forEach((e) => {
      delete e[key];
      leftKey.forEach((k) => {
        delete e[k];
      });
    });
    return filtered;
  }
  const criterias = arr.map((e) => e[key]);
  const deduplicaition = [...new Set(criterias)];
  return deduplicaition.map((criteria) => {
    const found = arr.find((e) => e[key] === criteria);
    const result = {
      [key]: found[key],
    };
    leftKey.forEach((e) => {
      result[e] = found[e];
    });
    result[childKey] = findAll(criteria);
    return result;
  });
}

export function changeArrayPropertyName(
  arr: Array<any>,
  from: string,
  to: string,
) {
  return arr.map((e) => {
    const a = { [to]: e[from], ...e };
    delete a[from];
    return a;
  });
}

export function changeArrayPropertyNames(
  arr: Array<any>,
  fromToArray: [string, string][],
) {
  let result = arr;
  for (let i = 0; i < fromToArray.length; i += 1) {
    result = changeArrayPropertyName(
      result,
      fromToArray[i][0],
      fromToArray[i][1],
    );
  }
  return result;
}
