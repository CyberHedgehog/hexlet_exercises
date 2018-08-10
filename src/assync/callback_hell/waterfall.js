export default (functions, callback) => {
    if (functions.length === 0) {
        return callback();
    }
    const next = ([head, ...rest], previousResult) => {
        const cb = (err, ...args) => {
            if (err) {
                return callback(err, args);
            }
            if (rest.length === 0) {
                callback(err, args);
            }
            else {
                next(rest, args);
            }
        };
        head(...previousResult, cb);
    };
    next(functions, []);
};