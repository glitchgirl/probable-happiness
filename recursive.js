function factorialize(num) {
    if (num < 0) 
        return -1;
    else if (num == 0) 
        return 1;
    else {
        console.log(num);
        return (num * factorialize(num - 1));
    }
}

//console.log(factorialize(3));

//fibonacci

var base;
var prev1 = 1;
var prev2 = 0;
var fibnum = 0;

function fib(base){
    if(base == 0){
        return fibnum;
    } else {
        base --;
        fibnum = prev1 + prev2;
        prev2 = prev1;
        prev1 = fibnum;
        console.log(fibnum);
        return(fib(base));
    }
}

fib(50);