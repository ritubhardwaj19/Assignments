

//if -else 

let percentage : number = 80 ;

if (percentage >= 9) {
    console.log("grade A");
}
else if (percentage >= 70) {
    console.log("grade B");
}
else if (percentage >= 95)  {
    console.log("grade c");
}
else {
console.log("Average");
}



//nested if 


if (percentage >= 96) {
    console.log("grade A");
    if (percentage >= 95){
    console.log("hey you got the gold medal");
    }else{
        console.log("hey you got silver medal");

    }
}
else if (percentage >= 70) {
    console.log("grade B");
}
else if (percentage >= 95)  {
    console.log("grade c");
}
else {
console.log("Average");
}


//switch 
let env :string = "qa";
switch (env) {
    case "dev":
        console.log("launch the application with dev.amazon.com");
        break; //break keyword is used to exit from the switch-case block when the case is matched.
    case "qa":
        console.log("launch the application with qa.amazon.com");
        break;
    case "prod":
        console.log("launch the application with amazon.com");
        break;
    default:
        console.log("Please provide the correct environment");
}

///
