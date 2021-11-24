function knowSequence(arr) {
    let sequence = new Set();
    for(let i = 1; i < arr.length; i++) {
        number = arr[i] - arr[i - 1];
        sequence.add(number);
        if (sequence.size > 1) {
            break;
        }
    }
    if (sequence.size === 1) {
        return 'is arithmetic pattern';
    }

    // clearing Set to reuse if is not arithmetic
    sequence.clear()
    for (let i = 1; i < arr.length; i++) {
        if(arr[0] === 0 && arr[i] > 0) {
            return 'there is not pattern'
        }
        const element = arr[i] / arr[i - 1];
        sequence.add(element);

        if(sequence.size > 1) {
            return 'there is not pattern'
        }
    }

    return 'is geometric pattern'
}

console.log(knowSequence([2, 4, 8, 16, 32, 54]));