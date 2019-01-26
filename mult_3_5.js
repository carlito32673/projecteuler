function mult_3_5(num) {
    let arr1=[];
    let totalNum = 0;
    for(let i = 2;i<num;i++) {
        if(i%3 == 0 || i%5 == 0) {
            arr1.push(i);
        }
    }

    for(let j = 0;j<arr1.length;j++) {
        totalNum += arr1[j];
    }
    //console.log(arr1);
    return totalNum;
    
}
console.log(mult_3_5(1000));
