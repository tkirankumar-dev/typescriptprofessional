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
declare type CheckoutCard = Order & Stripe;
declare type CheckoutPayPal = Order & PayPal;
declare type IntersectObject = Order & {
    name: string;
    age: number;
};
declare const order: Order;
declare const orderCard: CheckoutCard;
declare const orderPayPal: CheckoutPayPal;
declare const intersectObj: IntersectObject;
declare const assigned: CheckoutCard;
declare const assigned1: CheckoutPayPal;
declare const abc: IntersectObject;
