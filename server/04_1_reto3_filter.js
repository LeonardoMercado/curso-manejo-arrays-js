document.addEventListener('DOMContentLoaded',function(){
  const input1 = ['amor', 'sol', 'piedra', 'día'];
  const input2 = ['rosa', 'gol', 'pez', 'día', 'gafas'];

  console.log('Filtrando input1',filterByLength(input1));
  console.log('Filtrando input2',filterByLength(input2));

});

function filterByLength(array){
  return filtrado = array.filter(element => element.length>=4);
}