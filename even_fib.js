function even_fib(num) {
    let fibFirst = 1;
    let fibSecond = 2;
    let tempNum = 0;
    let evenTotal = 0;
    let evenTotalArr = [];

    while (fibSecond < num){
        if(fibSecond%2 == 0){
            evenTotal += fibSecond;
            evenTotalArr.push(fibSecond);
        }

        tempNum = fibFirst + fibSecond;
        fibFirst = fibSecond;
        fibSecond = tempNum;
    }
    //evenTotal = evenTotal - evenTotalArr[evenTotalArr.length-1];
    
    return evenTotal;

}
console.log(even_fib(4000000));
