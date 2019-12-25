// we can combine singleton types, union types, type guards, and type aliases to build an advanced pattern called discriminated unions, 
// also known as tagged unions or algebraic data types.

/* 
There are three ingredients:

    1. Types that have a common, singleton type property — the discriminant.
    2. A type alias that takes the union of those types — the union.
    3. Type guards on the common property.
*/
interface Order18 {
    id: string;
    amount: number;
    currency: string;
  }
  
  interface Stripe18 {
    type: 'stripe';
    card: string;
    cvc: string;
  }
  
  interface PayPal18 {
    type: 'paypal';
    email: string;
  }
  
  type CheckoutCard18 = Order18 & Stripe18;
  type CheckoutPayPal18 = Order18 & PayPal18;
  
  const order18: Order18 = {
    id: 'xj28s',
    amount: 100,
    currency: 'USD'
  };
  
  const orderCard18: CheckoutCard18 = {
    ...order18,
    type: 'stripe',
    card: '1000 2000 3000 4000',
    cvc: '123'
  };
  
  const orderPayPal18: CheckoutPayPal18 = {
    ...order18,
    type: 'paypal',
    email: 'abc@def.com'
  };
  
  type PayType = CheckoutCard18 | CheckoutPayPal18;
  
  function checkout(payType: PayType) {
    if (payType.type === 'stripe') {
      console.log(payType.card, payType.cvc);
    }
    if (payType.type === 'paypal') {
      console.log(payType.email);
    }
  }

  checkout(orderCard18);
  checkout(orderPayPal18);