export function flattenDesignTokensObject(designTokensObj: object, keySeparator = '-') {
  const flattenRecursive = (obj: object, parentProperty?: string, propertyMap: Record<string, unknown> = {}) => {
    const newPropertyMap = propertyMap;

    for (const [key, value] of Object.entries(obj)) {
      const property = parentProperty ? `${parentProperty}${keySeparator}${key}` : key;
      if (!value?.value) {
        flattenRecursive(value, property, newPropertyMap);
      } else {
        newPropertyMap[property] = value;
      }
    }
    return newPropertyMap;
  };
  return flattenRecursive(designTokensObj);
}
