const library = {
    [1]: 'I',
    [5]: 'V',
    [10]: 'X',
    [50]: 'L',
    [100]: 'C',
    [500]: 'D',
    [1000]: 'M'
};

function transformDecToRoman (decNumber) {
    if (!decNumber) {
        throw new Error('An argument is required');
    } else if (typeof decNumber !== 'number' ){
        throw new Error('The argument passed must be a number');
    }
    let {thousands, hundreds, tens, units} = splitNumbers(decNumber);
    // CONVERTING HUNDREDS TO ROMAN
    let thousandsRoman = Array(thousands).fill(library[1000]).join('');
    // CONVERTING HUNDREDS TO ROMAN
    let hundredsRoman = '';
    if (hundreds === 4) {
        hundreds -= 4;
        hundredsRoman += `${library[100]}${library[500]}`
    } else if (hundreds === 9) {
        hundreds -= 9;
        hundredsRoman += `${library[100]}${library[1000]}`
    } else if (hundreds >= 4) {
        hundreds -= 5;
        hundredsRoman += library[500];
    }
    if (hundreds < 4) {
        hundredsRoman += Array(hundreds).fill(library[100]).join('');
    }
    // CONVERTING TENS TO ROMAN
    let tensRoman = '';
    if (tens === 4) {
        tens -= 4;
        tensRoman += `${library[10]}${library[50]}`
    } else if (tens === 9) {
        tens -= 9;
        tensRoman += `${library[10]}${library[100]}`
    } else if (tens >= 4) {
        tens -= 5;
        tensRoman += library[50];
    }
    if (tens < 4) {
        tensRoman += Array(tens).fill(library[10]).join('');
    }
    // CONVERTING UNITS TO ROMAN
    let unitsRoman = '';
    if (units === 4) {
        units -= 4;
        unitsRoman += `${library[1]}${library[5]}`
    } else if (units === 9) {
        units -= 9;
        unitsRoman += `${library[1]}${library[10]}`
    } else if (units >= 4) {
        units -= 5;
        unitsRoman += library[5];
    }
    if (units < 4) {
        unitsRoman += Array(units).fill(library[1]).join('');
    }
    return `${thousandsRoman}${hundredsRoman}${tensRoman}${unitsRoman}`;
}

function splitNumbers (number) {
    const stringNumber = number.toString();
    const remainingLength = 4 - stringNumber.length;
    // generating a number of 4 digits adding 0 at the beginning
    const completeNumber = Array(remainingLength).fill('0').join('') + stringNumber;
    const [thousands, hundreds, tens, units] = completeNumber;
    return {thousands: parseInt(thousands), hundreds: parseInt(hundreds), tens: parseInt(tens), units: parseInt(units)};
}

module.exports = transformDecToRoman;