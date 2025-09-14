function ZeroOneTriangle(totalRows){

for(let i=1 ; i<= totalRows; i++){
    let row = "";
    for(let j=1; j<=i; j++){
        if((i+j)%2  == 0){
            row+='1';
        } else {
            row+='0';
        }
    }
    console.log(row);
}

}
ZeroOneTriangle(5);


// output
// 1
// 01
// 101
// 0101
// 10101