const productExceptSelf = (nums: Array<number>): Array<number> => {
    let newArray: Array<number> = [];
    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        newArray[i] = prefix;
        prefix *= nums[i];
    }

    // newArray = [1, 1, 2, 6]

    let postfix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        newArray[i] *= postfix;
        postfix *= nums[i];
    }

    // newArray = [24,12,8,6];
    return newArray;
}

console.log(productExceptSelf([1,2,3,4]));

const productExceptSelf2 = (nums: Array<number>): Array<number> => {
    let newArray: Array<number> = [];

    let index: number = 0;

    const processArray = () => {
        if (index === nums.length) {
            return newArray;
        }
        const tempNums: Array<number> = nums.slice();
        tempNums.splice(index, 1);
        const newNum: number = tempNums.reduce((a,b) => a*b);

        newArray.push(newNum);
        index++;
        processArray();
    }

    processArray();
    return newArray;
}

console.log(productExceptSelf2([0,0]));