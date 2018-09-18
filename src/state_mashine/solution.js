import Order from './Order';

export const init = items => new Order(items);

// BEGIN (write your solution here)
export const cancel = (order) => {
    if(order.state === 'init' || order.state === 'pending') {
        order.cancel();
    }
};
// END
