const maxProfit = (nums: Array<number>): number => {
    let minPrice: number = 100000000000000000000000000000000000000000000000000000000000000000;
    let maxProfit: number = 0;

    for (const num of nums) {
        if (num < minPrice) {
            minPrice = num;
        } else if ((num - minPrice) > maxProfit) {
            maxProfit = num - minPrice;
        }
    }

    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]));