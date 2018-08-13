import waterfall from './waterfall';
import fs from 'fs';

const sourceFile = 'test/file1';
const destFile = 'test/file2';

const functions = [
    cb => fs.readFile(sourceFile, (err, body) => {
        cb(err, `${body}`);
    }),
    (body, cb) => fs.writeFile(destFile, body, err => {
            cb(err);
        }),
];

waterfall(functions, err => {
    if (err) {
        return console.log(err);
    };
});