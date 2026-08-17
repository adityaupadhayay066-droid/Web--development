let calculate = (num1,num2,operator) =>{
    if(operator == "+"){
        return num1+num2;
    }
    else if(operator == "-"){
        return num1-num2;
    }
    else if(operator == "*"){
        return num1*num2;
    }
    else if(operator == "/"){
        return num1/num2;
    }
    else{
        return "Invalid Operator";
    }
};

console.log(calculate(10,20,"+"));
console.log(calculate(100,50,"-"));
console.log(calculate(30,20,"*"));
console.log(calculate(100,20,"/"));

console.log(calculate("%"));