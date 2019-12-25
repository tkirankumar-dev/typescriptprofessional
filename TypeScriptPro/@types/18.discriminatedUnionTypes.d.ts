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
declare type CheckoutCard18 = Order18 & Stripe18;
declare type CheckoutPayPal18 = Order18 & PayPal18;
declare const order18: Order18;
declare const orderCard18: CheckoutCard18;
declare const orderPayPal18: CheckoutPayPal18;
declare type PayType = CheckoutCard18 | CheckoutPayPal18;
declare function checkout(payType: PayType): void;
