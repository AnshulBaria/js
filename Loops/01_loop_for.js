// for loop

for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element==5) {
        // console.log("5 is best number");
    }
    // console.log(element); 
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 0; j < 10; j++) {
        const element =[j];
            // console.log(`inner loop value: ${j}`);  
        // console.log(i + "*" +j+"=" + i*j );
        
    }
}


let MyArray = ["a", "b", "c", "d", "e"];

for (let i = 0; i < MyArray.length; i++) {
    const element = MyArray[i];
    // console.log(element);
}

// keywords:break, continue

for (let i = 1 ; i <= 10; i++) {
   if (i == 5){
    console.log(`decected 5`);
    // break;
    continue;
   }
    console.log(`value of i: ${i}`);
    }
