export const finalPrice = (price, discountPercentage = 0) => {
    const discountPrice = price * (discountPercentage / 100);
    let result = 0;
    if (discountPrice % 10 === 0)
        result = price - discountPrice - 1;
    else if (discountPrice % 5 === 0 || discountPrice % 2 === 0)
        result = price - discountPrice - 0.01
    else
        result = price - discountPrice;
    return result;
}