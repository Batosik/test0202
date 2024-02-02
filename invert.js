
const invertObject = (obj) => {
  const pairs = Object.entries(obj)
  let newObj = {}
  for (const [key, value] of pairs) {
    newObj[value] = key
  }
  return newObj;
}

const originalObject1 = { a: 1, b: 2, c: 1 };
const invertedObject1 = invertObject(originalObject1);
console.log(invertedObject1); // Выведет: { '1': 'c', '2': 'b' }