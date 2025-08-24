// console.log ("connection done");
// login click js
document.getElementById("loginButton"). addEventListener("click",function(e){
    e.preventDefault() 
    // prevent default er karone click koraro por console.log dekha jaitese
    // ar ekta chilo btn html e type= button korle eta submit button thake na normal button hoy ar click korle load ne na
    // console.log("CLICK DONE")
    const mobileNumber =12345678910;
    const pinNumber = 1234;
    const mobileNumberValue = document.getElementById("mobile-number").value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)
    const pinNumberValue= document.getElementById("pin-number").value
    const pinNumberValueConverted = parseInt(pinNumberValue)
    // console.log("Expected Mobile:", mobileNumber); // Debugging
    // console.log("Entered Mobile:", mobileNumberValueConverted); // Debugging
    // console.log("Expected PIN:", pinNumber); // Debugging
    // console.log("Entered PIN:", pinNumberValueConverted); // Debugging

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        // console.log("Matched Succesfully")
        window.location.href ="./window.html"
    } 
    else{
        // console.log("Wrong input")
        alert ("Wrong input")
    }
})
    
