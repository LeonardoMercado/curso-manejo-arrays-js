document.addEventListener("DOMContentLoaded", function(event){
  
  const letters = ['a','b','c','d'];
  const newArrayFor = [];

  for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    newArrayFor.push(`${element}-${element}`);    
  }
  console.log('El array original tiene: ');
  console.log(letters);
  console.log('El nuevo Array tiene: ');
  console.log(newArrayFor);

  console.log('*********************************');
  console.log('Aplicando el método Map');

  const newLetters = letters.map(letter => `${letter}=${letter}`);
  console.log(newLetters);




  
});