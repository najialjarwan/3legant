export const calculateCartTotals = (cartItems) => {
    const subTotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const taxAmount = cartItems.reduce(
        (acc, item) => acc + (item.price * item.quantity * (item.taxRate ?? 0) / 100),
        0
    );

    const total = subTotal + taxAmount;

    return { subTotal, taxAmount, total };
};