export const reverse = arr => {
    const iter = (arr, index, acc) => {
        if (index < 0) {
            return acc;
        }
        return iter(arr, index - 1, acc.concat(arr[index]));
    }
    return iter(arr, arr.length - 1, []);
};