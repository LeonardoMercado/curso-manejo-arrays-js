const letters = ['a','b','c','d'];


for (let i = 0; i < letters.length; i++) {
  const element = letters[i];
  console.log(element);  
}

console.log('Aplicando el FOR EACH');

letters.forEach(item => console.log(item));

letters.forEach(element => {
  console.log('- ' + element);
});