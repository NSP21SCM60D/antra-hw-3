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
const sortedReorder = (str) => str.split('').sort().join('');

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
const getIdentityMatrix = (n) =>
    new Array(n)
        .fill(null)
        .map((_, i) => {
            const row = new Array(n).fill(0);
            row[i] = 1;
            return row;
        });

/**
 * Question 11
 */
const findSecondMinMax = (values) => {
    if (!Array.isArray(values) || values.length < 2) {
        return null;
    }
    const sorted = Array.of(...values).sort((a, b) => a - b);
    return [sorted[1], sorted[sorted.length - 2]];
};

/**
 * Question 12
 */
const isPerfect = (num) => {
    let divisorSum = 0;
    for (let i = 0; i <= num; ++i) {
        if (num % i === 0) {
            divisorSum += i;
        }
    }
    return divisorSum / 2 === num;
};

/**
 * Question 13
 */
const getFactors = (num) => {
    const factors = [];

    for (let i = 0; i <= num; ++i) {
        if (num % i === 0) {
            factors.push(i);
        }
    }

    return factors;
}

/**
 * Question 14
 */
const amountToCoins = (amount, coins) => {
    if (!coins) return [];

    const options = Array.of(...coins).sort((a, b) => a - b);
    const result = [];

    while (amount > 0 && options.length > 0) {
        const pick = options.pop();
        if (pick > amount || pick === undefined) continue;

        amount -= pick;
        options.push(pick);
        result.push(pick);
    }

    return amount > 0 ? [] : result;
}

const { createInterface } = require('readline');

/**
 * Question 15
 */
const exponentInput = () => {
    const input = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    input.question("Enter the exponent base: ", base => {
        input.question("Enter the exponent: ", exp => {
            console.log(`Result is ${Math.pow(base, exp)}`);
            input.close();
        })
    });
};

/**
 * Question 16
 */
const filterUniqueLetters = (str) => {
    const firstLetters = new Set();
    const uniques = [];

    for (const letter of str.split('')) {
        if (firstLetters.has(letter)) continue;

        firstLetters.add(letter);
        uniques.push(letter);
    }

    return uniques.join('');
};

/**
 * Question 17
 */
const getLetterCounts = (str) => {
    const counts = new Map();

    for (const letter of str.split('')) {
        const freq = counts.get(letter) ?? 0;
        counts.set(letter, freq + 1);
    }

    return Object.fromEntries(counts);
};

/**
 * Question 18
 */
const binarySearch = (arr, item) => {
};

/**
 * Question 19
 */
const filterGreaterThan = (ns, gt) => ns.filter(n => n > gt);

/**
 * Question 20
 */
const generateId = (length) => {
    const id = [];
    const options = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345678";

    for (let i = 0; i < length; ++i) {
        const pick = Math.round(Math.random() * options.length);
        id.push(options[pick]);
    }

    return id.join('');
};

/**
 * Question 21
 */
const findSubsets = (numbers, length) => {
    if (length > numbers.length) {
        return [];
    }
};

/**
 * Question 22
 */
const findLetterFrequency = (str, letter) =>
    str.split('').filter(l => l === letter).length;

/**
 * Question 23
 */
const findFirstUnique = (str) => {
    const letters = str.split('');
    const uniques = new Set();

    for (const letter of letters) {
        if (uniques.has(letter)) {
            uniques.delete(letter);
        } else {
            uniques.add(letter);
        }
    }

    return letters.find(l => uniques.has(l));
};

/**
 * Question 24
 */
const bubbleSort = (ns) => {
};

/**
 * Question 25
 */
const findLongestCountryName = (countries) =>
    countries.reduce((m, w) => m?.length > w.length ? m : w, null);

/**
 * Question 26
 */
const longestUniqueSubstring = (str) => {
    const uniques = new Set();
    const letters = str.split('');

    let maxStart = 0;
    let maxEnd = 0;

    let start = 0;
    let end = 0;

    for (let i = 0; i < letters.length; ++i) {
        const letter = letters[i];

        if (!uniques.has(letter)) {
            uniques.add(letter);
            end += 1;
            continue;
        }

        if (end - start > maxEnd - maxStart) {
            maxStart = start;
            maxEnd = end;
        }

        uniques.clear();

        start = i;
        end = i;
    }

    return str.substring(maxStart, maxEnd);
}

/**
 * question 27
 */

/**
 * Question 28
 */
const myFilter = (cb) => {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        const item = this[i];
        if (cb(item, i, this)) {
            newArr.push(item);
        }
    }
    return newArr;
}

/**
 * Question 29
 */
const getFunctionName = (func) => func.name;
