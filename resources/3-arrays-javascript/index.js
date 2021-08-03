const buyOrder = {
  user: "9gustin",
  date: "2021-06-13T18:00:00.407Z",
  currency: "ARS",
  total: 28,
  products: [
    {
      product: "Orange",
      unitPrice: 10,
      quantity: 2,
      total: 20
    },
    {
      product: "Mango",
      unitPrice: 5,
      quantity: 1,
      total: 5
    },
    {
      product: "Banana",
      unitPrice: 3,
      quantity: 1,
      total: 3
    }
  ]
};


const inStockProducts = [
  {
    product: 'Orange',
    quantity: 3
  },
  {
    product: 'Apple',
    quantity: 100
  },
  {
    product: 'Blackberry',
    quantity: 12
  },
  {
    product: 'Mango',
    quantity: 1
  },
  {
    product: 'Grape',
    quantity: 10
  },
  {
    product: 'Peach',
    quantity: 200
  },
  {
    product: 'Banana',
    quantity: 20
  },
  {
    product: 'Strawberry',
    quantity: 24
  },
];

function findProductByName(productsArray, productName) {
  const productInList = productsArray.find(element => {
    return element.product === productName
  });

  return productInList;
}

const productsToBuy = buyOrder.products.filter(element => {
  const productInStockList = findProductByName(inStockProducts, element.product);

  const quantityAfterBuy = productInStockList.quantity - element.quantity;

  return quantityAfterBuy < 3
})

const mappedProductsToBuy = productsToBuy.map(({ product, quantity }) => {
  const productInStockList = findProductByName(inStockProducts, product);

  const quantityAfterBuy = productInStockList.quantity - quantity;

  return {
    product,
    quantity: 3 - quantityAfterBuy
  };
})

// console.log(mappedProductsToBuy);

const quantityOranges = 2;
const quantityMangos = 1;

const indexOfOranges = inStockProducts.findIndex(element => element.product === "Orange")
const indexOfMangos = inStockProducts.findIndex(element => element.product === "Mango")

inStockProducts[indexOfOranges].quantity -= quantityOranges;
inStockProducts[indexOfMangos].quantity -= quantityMangos;

// console.log(inStockProducts);

[12, 1, 1233, 21].sort((paramA, paramB) => paramA - paramB);

function orderNumbers(array, property, isDesc) {
  return array.sort((valueA, valueB) => {
    return isDesc ? valueB[property] - valueA[property] : valueA[property] - valueB[property]
  })
}

// console.log(orderNumbers(inStockProducts, 'quantity', false))
/* Consola:
[
  { product: 'Mango', quantity: 0 },
  { product: 'Orange', quantity: 1 },
  { product: 'Grape', quantity: 10 },
  { product: 'Blackberry', quantity: 12 },
  { product: 'Banana', quantity: 20 },
  { product: 'Strawberry', quantity: 24 },
  { product: 'Apple', quantity: 100 },
  { product: 'Peach', quantity: 200 }
]
*/
// console.log(orderNumbers(inStockProducts, 'quantity', true))
/* Consola:
[
  { product: 'Peach', quantity: 200 },
  { product: 'Apple', quantity: 100 },
  { product: 'Strawberry', quantity: 24 },
  { product: 'Banana', quantity: 20 },
  { product: 'Blackberry', quantity: 12 },
  { product: 'Grape', quantity: 10 },
  { product: 'Orange', quantity: 1 },
  { product: 'Mango', quantity: 0 }
]
*/
const possitive = 1;
const negative = -1;

function orderStrings(array, property, isDesc) {
  return array.sort((valueA, valueB) => {
    const propA = valueA[property].toLowerCase();
    const propB = valueB[property].toLowerCase();

    if (propA < propB) {
      return isDesc ? possitive : negative;
    } else if (propB < propA) {
      return isDesc ? negative : possitive;
    }

    return 0;
  })
}

// console.log(orderStrings(inStockProducts, 'product', true))
/* Consola:
[
  { product: 'Strawberry', quantity: 24 },
  { product: 'Peach', quantity: 200 },
  { product: 'Orange', quantity: 1 },
  { product: 'Mango', quantity: 0 },
  { product: 'Grape', quantity: 10 },
  { product: 'Blackberry', quantity: 12 },
  { product: 'Banana', quantity: 20 },
  { product: 'Apple', quantity: 100 }
]
*/

// console.log(orderStrings(inStockProducts, 'product', false))
/* Consola:
[
  { product: 'Apple', quantity: 100 },
  { product: 'Banana', quantity: 20 },
  { product: 'Blackberry', quantity: 12 },
  { product: 'Grape', quantity: 10 },
  { product: 'Mango', quantity: 0 },
  { product: 'Orange', quantity: 1 },
  { product: 'Peach', quantity: 200 },
  { product: 'Strawberry', quantity: 24 }
]
*/

const dynamicProperties = [
  {
    prop: 'name',
    value: 'Agustin'
  },
  {
    prop: 'lastname',
    value: 'Vazquez'
  },
  {
    prop: 'age',
    value: 22
  },
  {
    prop: 'likeMatecito',
    value: true
  },
];

const me = Object.fromEntries(
  dynamicProperties.map(
    property => [property.prop, property.value]
  )
)

console.log(me)
//me = { name: 'Agustin', lastname: 'Vazquez', age: 22, likeMatecito: true }