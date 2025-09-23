console.log("Day 5")

for(let count=1; count<=5; count++){
    console.log("Count is: ", count);
}

let sum = 0;
for(let num=1; num<=10; num++){
    sum += num;  // sum = sum + num
}
console.log("Sum is: ", sum);

let lang = "JavaScript";
//for(let char of lang){
for(let i=0; i<lang.length; i++){
    //console.log(char);
    console.log(lang.charAt(i))
}

//Nested Loop

for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
        console.log("Row", i, "Column", j);
    }   
}

//continue
for(let i=1; i<=5; i++){
    if(i===3){
        continue; //skip the current iteration
    }
    console.log("Current value of i is: ", i);
}

//Multiple counters

for(let i=1, j=5; i<=5 && j>=1; i++, j--){
    console.log(i,j);
}

//while loop
let counter = 1;
while(counter <=5){
    console.log("Counter is: ", counter);
    counter++;
}

//do-while loop
let num = 1;
do{
    console.log("Num is: ", num);
    num++;
}while(num <=5);

//Infinite loop - avoid this as this never terminates