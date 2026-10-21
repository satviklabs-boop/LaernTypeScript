
let arr: number[] = [1, 3, 5, 3, 1];

for (let i = 0; i < arr.length; i++) {

    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < i; j++) {
        leftSum = leftSum + arr[j];
    }

    for (let j = i + 1; j < arr.length; j++) {
        rightSum = rightSum + arr[j];
    }

    if (leftSum == rightSum) {
        console.log("Equilibrium index:", i);
        console.log("Equilibrium element:", arr[i]);
        break;
    }
}
