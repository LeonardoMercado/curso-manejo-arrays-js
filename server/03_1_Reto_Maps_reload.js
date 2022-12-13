document.addEventListener('DOMContentLoaded',function(event){
  const input = [
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    }
  ]
  
  console.log(addNewAttr(input));
  addNewAttr(input).forEach(element => {
    console.log(element.taxes);
  });

});

function addNewAttr(array){
  let modificado = array.map(element => {
    return {
      ...element,
      taxes: Math.trunc(element.price*0.19),
    };
  });
  return modificado;
};