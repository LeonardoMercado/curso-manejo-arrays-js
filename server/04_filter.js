document.addEventListener('DOMContentLoaded',function(event){
  
  const words = ['spray','limit','elite','exuberant'];

  const wordsFilters = words.filter(word => word.length>=6);

  console.log('OriginalWords',words);
  console.log('WordsFilters',wordsFilters);

  const orders = [
    {
      customerName: 'Nicolas',
      total: 60,
      delivered: false,
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

  const orderHighest = orders.filter(order => order.total >= 200);
  const ordersDelivered = orders.filter(order => order.delivered);

  console.log('orders', orders);
  console.log('LikedOrders', orderHighest);
  console.log('ordersDelivered', ordersDelivered);
  

});