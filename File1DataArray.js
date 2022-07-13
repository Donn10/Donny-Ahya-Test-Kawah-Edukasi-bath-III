/* 
Array1; [1, 1, 1, 2, 2, 4, 1, 1 ]
Array2; [2, 1, 2, 2, 2, 8, 1, 1 ];
Array3; [3, 3, 3, 3, 2, 4, 1, 1 ];
*/
var arNums1; [1, 1, 1, 2, 2, 4, 1, 1 ]
var arNums2; [2, 1, 2, 2, 2, 8, 1, 1 ];
var arNums3; [3, 3, 3, 3, 2, 4, 1, 1 ];
var arNums4 = {
  ... var arNums1
  ... var arNums2
  ... var arNums3
}
console.log(var arNums4)

var occurances = {};
var curNumber;
var maxNumber = arNums[0];
for(let i=0; i<arNums.length; i++) {
    curNumber = arNums [i];

    if(occurances[curNumber] !== undefined) {
        occurances[curNumber]++;
    }else {
        occurances[curNumber] = 1;
    }
    if(occurances[curNumber]> occurances[maxNumber]) {
        maxNumber = curNumber;
    }
}
if(occurances[maxNumber]> arNums.length/2){
    writeline("Found the majority element: " + maxNumber);

} else{
    writeline("No Majority element found");
}
