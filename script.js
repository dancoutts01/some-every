// has odd number
function hasOddNumber(array) {
    return array.some(function(val) {
        // if there's an odd number, return true
        return !(val % 2 == 0)
    })
}

// has a zero
function hasAZero(number) {
    let numberString = number.toString();
    let numberArray = numberString.split('')
    return numberArray.some(function(val) {
        return val === '0'
    })
}

// has only odd numbers
function hasOnlyOddNumbers(array) {
    return array.every(function(val) {
        // if it's an odd number return true  
        return !(val % 2 == 0);
    })
}   

// has no duplicates
function hasNoDuplicates(array) {
    return array.every(function(val) {
        return arr.indexOf(val) === arr.lastIndexOf(val);
    })
}

// has certain key
function hasCertainKey(array, key) {
    return array.every(function(val) {
        return key in val;
    })
}

// has certain value
function hasCertainValue(array, key, value) {
    return array.every(function(val) {
        return val[key] === value;
    })
}

