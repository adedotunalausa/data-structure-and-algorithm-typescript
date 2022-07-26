const twoSum = (nums: Array<number>, target: number): Array<number> => {
    let numsMap: Record<number, number> = {};
    const result: Array<number> = [];

    for (let i = 0; i < nums.length; i++) {
        const number1 = nums[i];
        const number2 = target - number1;
        if (number2 in numsMap) {
            result.push(i);
            result.push(numsMap[number2]);
            break;
        }
        numsMap[number1] = i;
    }

    return result;
}

console.log(twoSum([2,7,11,15], 9));