document.addEventListener("DOMContentLoaded", function(event){
  
  const orders = [
    {
      customerName: 'Nicolas',
      total: 60,
      delivered: true,
    },
    {
      customerName: 'Zulema',
      total: 120,
      delivered: false,
    },
    {
      customerName: 'Santiago',
      total: 180,
      delivered: true,
    },
    {
      customerName: 'Valentina',
      total: 240,
      delivered: true,
    }
  ];

  const totalOrders = orders.map(order => order.total);
  //console.log(totalOrders);

  // const ordersCustom = orders.map(order => {
  //   order.tax = 0.19;
  //   return order;
  // });

  //console.log(orders);
  //console.log(ordersCustom);

  const ordersCustom = orders.map(order => {
    return {
      ...order,
      tax: 0.19,
    };
  });

  console.log('Original orders:');
  console.log(orders);
  console.log('ordersCustom');
  console.log(ordersCustom);
   
  
  
  
  const total = sumarArray(totalOrders);
  console.log(total);
});

function sumarArray(array){
  let contador = 0;
  array.forEach(element => {
    console.log(element);
    contador += element
  });
  return contador;
}