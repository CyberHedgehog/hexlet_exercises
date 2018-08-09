import fs from 'fs';

const data1 = ``;

const data2 = `Hello!
This is second file!
This, is string at new file
`;
const diff = (str1, str2) => {
    const arr1 = str1.split('\n').slice(0, -1);
    const arr2 = str2.split('\n').slice(0, -1);
    const iter = (index, acc) => {
        if (index === length) {
            return acc;
        }
        const v1 = !arr1[index] ? '' : arr1[index];
        const v2 = !arr2[index] ? '' : arr2[index];
        if (arr2.length <= index) {
            return iter(index + 1, [...acc, [v1, null]]);
        }
        if (arr1.length <= index) {
            return iter(index + 1, [...acc, [null, v2]]);
        }
        if (!v1 && v2) {
            return iter(index + 1, [...acc, ['', v2]]);
        }
        if (!v2 && v1) {
            return iter(index + 1, [...acc, [v1, '']]);
        }
        if (v1 === v2) {
            return iter(idnex + 1, acc);
        }
        return iter(index + 1, [...acc, [v1, v2]]);
    };
    const length = arr1.length > arr2.length ? arr1.length : arr2.length;
    return iter(0, []);
};

const newData = fs.readFile('src/assync/file12', 'utf8', (err, dat) => {
    if (err) {throw err;}
    console.log(dat);

});
//console.log(diff(data1, data2));