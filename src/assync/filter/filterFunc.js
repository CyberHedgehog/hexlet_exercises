const filter = (coll, pred, callback) => {
    let res = [];
    const iter = i => {
        if (i === coll.length) {
            return null;
        }
        const elem = coll[i];
        pred(elem, (err, value) => {
            if (value(elem)) {
                res.push(elem);
                console.log(`value = ${value(elem)}, res = ${res}`);
                
            }
        });
        return iter(i + 1);
    };
    iter(0);
    callback(null, res);
};

const coll = [1, 3, 1, 5, 1, 2, 2];
filter(coll, (item, cb) => {
    cb(null, item => item !== 1);
}, (err, newColl) => {
    if (err) {
        return null;
    }
    console.log(newColl);
});



