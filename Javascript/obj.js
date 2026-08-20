 let object = {
    name:"Aditya Upadhayay",
    Regdno: 1,
    Department : "BCA",
    Year:"2nd"

};
object.address ="Bhubaneswar";
delete object.Year;
console.log(object);

// Creating an object using new keyword 
let obj2 = new Object();
obj2.name = "Aditya Upadhayay";
obj2.gender = "M";
console.log(obj2);

let Student = {
    name:"Aditya Upadhayay",
    Roll_no: 146,
    University:"CUTM",
    branch:"BCA",
    isActive:true

};
console.log(Student);
console.log("name" in Student); //Fetchings data using in keyword
console.log(Student.hasOwnProperty("Year")); //Fetching data using hasOwnProperty method


let S= new Object();
S.name="Aditya Upadhayay";
S.Roll_no= 146;
S.University="CUTM";
S.branch="BCA";
S.isActive=false;
console.log(S);



// Accessing using for in loop

for (values in S){
    // console.log(S.values);
    console.log(S[values]);
}
// Store a function in a object

let  Car = {
    Brand:"TATA",
    Model:"BE-6",
    Price:25000,
    access: function(){
        console.log("Brand of a car is : "+this.Brand);
        console.log("Model of car is : "+this.Model);
        console.log("Price of car is : "+this.Price);

    }
};
Car.access(); // Function call using oject name. fucntion name
