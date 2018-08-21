import each from 'async/each';

const collection = [`a`, `b`, `c`];

each(collection, (elem, cb) => {
    console.log(`${elem} - ${elem}`);
    cb(err);
}, (err) => {
    (err, elems) => {
        console.log(`elems - ${elems}`);
    };
});
