const format = (a) => {
    const arr = a.split('') 
    if(arr.length > 40) {
        arr.length = 40;
        const strArr = arr.join('')
        console.log(strArr + '...')
    } else if(arr.length <= 40) {
        console.log(a)
    }
};
const y = "111111111111111111111111111111111111116666666";
console.log(y.length)
format("111111111111111111111111111111111111111111")

