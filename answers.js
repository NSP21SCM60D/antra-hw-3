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
    const combos = [];

    for (let i = 0; i < str.length; ++i) {
        for (let j = i + 1; j <= str.length; ++j) {
            combos.push(str.slice(i, j));
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
    const vowels = new Set([...'aeiou']);
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
    let low = 0;
    let hi = arr.length;

    while (low < hi) {
        const mid = Math.floor((low + hi) / 2);
        const check = arr[mid];

        if (check === item) {
            return mid;
        } else if (check < item) {
            low = mid + 1;
        } else {
            hi = mid;
        }
    }

    return null;
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

    if (length === numbers.length) {
        return numbers;
    }

    const subsets = [];

    for (const n of numbers) {
        const includeN = subsets
            .filter(s => s.length < length)
            .map(s => [n, ...s]);

        subsets.push([n], ...includeN);
    }

    return subsets.filter(s => s.length === length);
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
    const counts = new Map();

    for (const letter of str.split('')) {
        const freq = counts.get(letter) ?? 0;
        counts.set(letter, freq + 1);
    }

    for (const [letter, freq] of counts.entries()) {
        if (freq === 1) {
            return letter;
        }
    }

    return null;
};

/**
 * Question 24
 */
const bubbleSort = (ns) => {
    let hasSwapped = false;

    for (let i = ns.length - 1; i >= 0; --i) {
        for (let j = 0; j < i; ++j) {
            const lookahead = j + 1;

            if (ns[j] >= ns[lookahead]) continue;

            const temp = ns[j];
            ns[j] = ns[lookahead];
            ns[lookahead] = temp;

            hasSwapped = true;
        }

        if (!hasSwapped) return;
    }

    return ns;
};

/**
 * Question 25
 */
const findLongestCountryName = (countries) =>
    countries.reduce((m, c) => m?.length > c.length ? m : c, null);

/**
 * Question 26
 */
const longestUniqueSubstring = (str) => {
    const uniques = new Set();

    let maxStart = 0;
    let maxEnd = 0;

    let start = 0;
    let end = 0;

    for (let i = 0; i < str.length; ++i) {
        const letter = str.charAt(i);

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
        uniques.add(letter);

        start = i;
        end = i + 1;
    }

    return str.substring(maxStart, maxEnd);
}

/**
 * question 27
 */
const findLongestPalindrome = (str) => {
    let longest = '';

    for (let i = 0; i < str.length; ++i) {
        for (let j = i + 1; j <= str.length; ++j) {
            const substring = str.substring(i, j);

            if (!isPalindrome(substring)) continue;
            if (substring.length <= longest.length) continue;

            longest = substring;
        }
    }

    return longest;
};

/**
 * Question 28
 */
const myFilter = (cb) => {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        const item = this[i];
        if (cb(item, i, this)) {
            result.push(item);
        }
    }

    return result;
}

/**
 * Question 29
 */
const getFunctionName = (func) => func.name;
