// 326. Power of Three

var isPowerOfThree = function(n) {
    
    if(n <= 0){
        return false
    }

    function helper(n){
        if(n === 1){
            return true
        }

        if(n % 3 === 0){
            return helper(n / 3)
        }
        return false
    }

    return helper(n)
};