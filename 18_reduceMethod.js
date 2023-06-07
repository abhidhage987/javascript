const array = [23, 56, 78, 9, 5, 4,  0, 66, 21 ];

// 23 + 56 ==> 79 + 78 ==> 157 + 9 => 166
console.log(`Find the Sum of all Elements`);
const sum = array.reduce( (runningTotal, value) => {
    return runningTotal + value;
} );
console.log(`sum is : ${sum}`);

console.log(`find all the number multiple of 5 and sum it(filter and reduce Method used)`);
const newArray = array.filter( (element) => {
    if(element%5==0){
        return element;
    }
} );
const sum1= newArray.reduce((sumcount,value)=>{
    return sumcount + value;
})
console.log(`sum is : ${sum1}`);