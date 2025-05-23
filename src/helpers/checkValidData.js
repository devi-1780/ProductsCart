function checkValidData(email,password,name,mobile){
    let isNameValid=/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name);
    let isNumberValid=/^(\+\d{1,3}[- ]?)?\d{10}$/.test(mobile);
    let isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    let isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // if(!isNameValid) return "Enter valid Name.";
    // if(!isNumberValid) return "Enter valid Number.";
    if(!isEmailValid) return "Enter valid Email.";
    if(!isPasswordValid) return "Invalid password.";
        
    return null;
}
export default checkValidData;