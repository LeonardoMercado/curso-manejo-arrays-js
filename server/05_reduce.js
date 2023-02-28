document.addEventListener('DOMContentLoaded',function(){
  
  const totals = [5,2,3,4]

  const sumTotals = totals.reduce((suma, elemento) => suma+elemento**2,0);

  console.log('La suma total es = ', sumTotals);
  


});