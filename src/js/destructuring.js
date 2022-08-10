export default function destructuring(obj) {
  // eslint-disable-next-line no-param-reassign
  obj.special[obj.special.findIndex((item) => !item.description)].description = 'Описание недоступно';
  return obj.special;
}
