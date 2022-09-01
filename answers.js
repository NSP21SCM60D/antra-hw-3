/**
 * Question 1
 */
const reverseNumber = (num) => 
    parseInt(num.toString().split('').reverse().join(''));

/**
 * Question 2
 */
const isPalindrome = (str) =>
    str === str.split('').reverse().join('');

/**
 * Question 3
 */
const stringCombinations = (str) => {
    const letters = str.split('');
    const combos = [];

    for (let i = 0; i < letters.length; ++i) {
        for (let j = i + 1; j <= letters.length; ++j) {
            combos.push(letters.slice(i, j).join(''));
        }
    }

    return combos;
};

/**
 * Question 4
 */
const sortedReorder = (str) =>
    str.split('').sort().join('');

/**
 * Question 5
 */
const toTitle = (str) => str
    .split(' ')
    .filter(w => Boolean(w))
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

/**
 * Question 6
 */
const longestWord = (str) => str
    .split(' ')
    .reduce((m, w) => m.length > w.length ? m : w, '');

/**
 * Question 7
 */
const vowelCount = (str) => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    return str
        .toLowerCase()
        .split('')
        .filter(s => vowels.has(s))
        .length;
};

/**
 * Question 8
 */
const isPrime = (num) => {
    if (isNaN(num) || !Number.isInteger(num) || num <= 1) {
        return false;
    }

    for (let i = 2; i < num; ++i) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

/**
 * Question 9
 */
const getType = (value) => typeof value;

/**
 * Question 10
 */
const getIdentityMatrix = (n) => {
    const matrix = [];
    for (let i = 0; i < n; ++i) {
        const row = Array(n).fill(0);
        row[i] = 1;
        matrix.push(row);
    }

    return matrix;
};

/**
 * Question 11
 */
const findSecondMinMax = (values) => {
    if (!Array.isArray(values) || values.length < 2) {
        return null;
    }
    const sorted = Array.of(...values).sort();
    return [sorted[1], sorted[sorted.length - 2]];
};
