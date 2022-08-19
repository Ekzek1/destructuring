export default function destructuring(obj) {
  const { special } = obj;
  special[special.findIndex((item) => !item.description)].description = 'Описание недоступно';
  return special;
}
