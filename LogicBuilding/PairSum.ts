let arr = [2, 7, 11, 15];
let target: number = 9;

for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {

        if (arr[i] + arr[j] === target) {
            console.log("Pair: " + arr[i] + " + " + arr[j]);
        }
    }
}


// function twoSum(nums: number[], target: number): number[] {
//     let map = new Map<number, number>();

//     for (let i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];

//         if (map.has(complement)) {
//             return [map.get(complement)!, i];
//         }

//         map.set(nums[i], i);
//     }

//     return [];
// }

// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
