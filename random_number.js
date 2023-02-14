    // generate a random number between 1-100 and guess it with user input and check the score 
    let a = Math.random()*100;
    a = Number.parseInt(a);
    let b;
    b = prompt("enter number: ");
    let score = 100;
    let count  = 1;
    while(a != b){
    if(a == b){
        console.log("correct guess!!")
        console.log("score: " + score-count);
    }
    else if(b>a && b<100){
        console.log("ur number is greater than actual number")
    }
    else if(b<a && b>0){
        console.log("ur number is less than actual number")
    }
    else{
        console.log("enter number between 1 and 100")
    } 
    count++;
    }
    