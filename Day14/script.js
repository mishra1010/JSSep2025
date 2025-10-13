console.log("Day 14 - Error Handling in JS");

//console.log(x); // ReferenceError: x is not defined

/*let obj = null;
console.log(obj.name); // TypeError: Cannot read property 'name' of null
*/
//console.log("hi" //syntax error: missing closing parenthesis

//let arr = new Array(-1); // RangeError: Invalid array length

//decodeURIComponent("%"); // URIError: URI malformed

//eval("var a = ;"); // SyntaxError: Unexpected token ';'

// Handling errors using try-catch

try{
    console.log("Inside try block");
} catch(err){
    console.log("Inside catch block");
    console.log(err.name, err.message, err.stack);
}

// Real-world use cases
function divideNumbers(a, b){
   try{
    if(b === 0) throw new Error("Division by zero is not allowed");
    return a / b;
   } catch(error){
    console.log("Error:", error.message);
   }
}
divideNumbers(15, 3);
divideNumbers(15, 0);

//Object

const person = {
    name: "Alice",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Wonderland"
    }
};

function getPostalCode(person){
    try{
        // Accessing nested property that may not exist
        console.log(person.address.postalCode);
        console.log(person.address.country.postalCode);
    } catch(error){
        console.log("Error accessing postal code:", error.message);
        return null;
    }
}
getPostalCode(person);

//Rethrow

function validateForm(formData){
    try{
        if(!formData.name) throw new Error("Name is required");
        if(!formData.email) throw new Error("Email is required");
        //console.log("Form is valid");
    } catch(error){
        console.error("Validation error:", error.message);
        throw error; // Rethrow the error for higher-level handling
    }
}

try{
    validateForm({name:"x"}); // Missing name and email
}catch(error){
    console.error("Caught rethrown error:", error.message);
}

//custom error

function ValidationError(message){
    this.name = "ValidationError";
    this.message = message || "Default Message";
    this.stack = (new Error()).stack;
}

ValidationError.prototype = Object.create(Error.prototype);
function validateCitizen(age){
    if (age<60){
        throw new ValidationError("you are not a senior citizen");
    }
    return "you are a senior citizen";
}

try{
    const message = validateCitizen(45)
    console.log(message);

} catch (error){
    console.error(`${error.name} : ${error.message}`);
    console.log(error.stack);
}