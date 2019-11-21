export const pascalCase = (name) => name.substring(0, 1).toUpperCase() + name.substring(1);

export const camelCase = (name) => name.substring(0, 1).toLowerCase() + name.substring(1);

export const kebabCase = (name) => name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

export default (name) => ({
  camelCased: camelCase(name),
  kebabCased: kebabCase(name),
  pascalCased: pascalCase(name),
});
