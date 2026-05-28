let creditScore: number = 740;
let income: number = 550000;
let isEmployed: boolean = true;
let dtiRatio: number = 35;

if (creditScore > 750) {
    console.log("Loan Approved");
}
else if (
    creditScore >= 650 &&
    income >= 50000 &&
    isEmployed &&
    dtiRatio < 40
) {
    console.log("Loan Approved");
}

else {
    console.log("Loan Denied");
}


