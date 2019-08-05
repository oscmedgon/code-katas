function potter (books) {
    const bookPrice = 8;
    const discounts = {
        [1]: 0,
        [2]: 5,
        [3]: 10,
        [4]: 20,
        [5]: 25
    };
    if (!books) {
        return 0;
    }
    let {first = 0, second = 0, third = 0, fourth = 0, fifth = 0} = books;
    const userBooks = [first, second, third, fourth, fifth].filter((value) => value > 0);
    // Splitting the aditional books into different orders to calculate the discounts
    const numberOfOrders = Math.max(...userBooks);
    const orders = Array(numberOfOrders).fill('').map(() => {
        let newOrder = {
            bookNumber: 0
        };
        // calculating the amount of books and updating the original value.
        if (first > 0) {
            first -= 1;
            newOrder.bookNumber += 1;
        }
        if (second > 0) {
            second -= 1;
            newOrder.bookNumber += 1;
        }
        if (third > 0) {
            third -= 1;
            newOrder.bookNumber += 1;
        }
        if (fourth > 0) {
            fourth -= 1;
            newOrder.bookNumber += 1;
        }
        if (fifth > 0) {
            fifth -= 1;
            newOrder.bookNumber += 1;
        }

        // calculating price, discounts and price with discount
        newOrder.price = newOrder.bookNumber * bookPrice;
        newOrder.discount = newOrder.price * (discounts[newOrder.bookNumber] / 100);
        newOrder.finalPrice = newOrder.price - newOrder.discount;
        return newOrder;
    });

    // getting all the prices with discount from each order
    return orders.reduce((acc, order) => {
        acc += order.finalPrice;
        return acc
    }, 0);
}

module.exports = potter;