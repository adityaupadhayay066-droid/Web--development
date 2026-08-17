function add(num1,num2,oprator){
    if(oprator == "+"){
        return num1+num2;
    }
    else if(oprator ==  "-"){
        return num1-num2;
  }
  else if(oprator=="*"){
    return num1* num2;
}
else{
    return num1/num2;
}

}
console.log(add(10,20,"+"));
