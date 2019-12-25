// combine multiple types with intersection types

interface Order {
    id: string;
    amount: number;
    currency: string;
  }
  
  interface Stripe {
    card: string;
    cvc: string;
  }
  
  interface PayPal {
    email: string;
  }
  
  type CheckoutCard = Order & Stripe; // intersection type - combine Order & Stripe
  type CheckoutPayPal = Order & PayPal;
  type IntersectObject = Order & { name: string, age: number }; // inline intersection type
  
  const order: Order = {
    id: 'xj28s',
    amount: 100,
    currency: 'USD'
  };
  
  const orderCard: CheckoutCard = {
    ...order,
    card: '1000 2000 3000 4000',
    cvc: '123'
  };
  
  const orderPayPal: CheckoutPayPal = {
    ...order,
    email: 'abc@def.com'
  };

  const intersectObj: IntersectObject = {
      ...order, // spread object
      name: 'Kiran',
      age: 39
  }
  // assigned will be of type CheckoutCard
  const assigned = Object.assign({}, order, orderCard);
  console.log(assigned);
  const assigned1 = Object.assign({}, order, orderPayPal);
  console.log(assigned1);
  const abc = Object.assign({}, order, intersectObj);
  console.log(abc);