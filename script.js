// function myFunction()
// {
//     var carname = "I am Abhay Pratap Singh";
//     document.getElementById("demo").innerHTML = carname;
// }

var person = {
    firstName: "John",
    lastName: "Doe",
    id :5566,
    getinfo : function() {
        return this.firstName + " " + this.lastName;
    }
};

document.getElementById("demo").innerHTML = person.getinfo();