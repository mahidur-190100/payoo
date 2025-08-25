// console.log("connection")
const pinNumber = 1234;
document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault()
    console.log("add")
    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("account-number").value
    const ammout = parseInt(document.getElementById("add-ammount").value)
    const pin = parseInt(document.getElementById("add-pin").value)
    // console.log(bank,accountNumber,ammout,pin)
    const availablebalance = parseInt(document.getElementById("available-balance").innerText)
    console.log ("availablebalance")
    if (accountNumber.length < 11){
        alert ("Please valid a account number")
        return;
    }
    if (pin != pinNumber){
        alert("Please provide correct pin number")
        return;
    }



    const totalBalance = availablebalance + ammout
    document.getElementById("available-balance").innerText = totalBalance

})

// cash wothdraw er work
document.getElementById("withdraw-btn").addEventListener("click",function(e){
    e.preventDefault()
    // console.log("agent number paisi")
    const agentNumber = document.getElementById("agent-number").value
    const amountWithdraw = parseInt(document.getElementById ("ammount-withdraw").value)
    const pinWithdraw = parseInt(document.getElementById("withdraw-pin").value)
    const availablebalanceWithdraw = parseInt(document.getElementById("available-balance").innerText)


    if (agentNumber.length < 11){
        alert ("please provide 11 digit agent number")
        return
    }

    if (pinWithdraw != pinNumber){
        alert ("please provide a valid pin")
        return
    }
    const totalBalanceWithdraw = availablebalanceWithdraw - amountWithdraw
    document.getElementById("available-balance").innerText = totalBalanceWithdraw

})












// toggoling feature
// when Add Money clicked
document.getElementById("add-money-1").addEventListener("click", function() {
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
})

// when Cash Out clicked
document.getElementById("cash-out").addEventListener("click", function() {
    document.getElementById("cash-out-parent").style.display = "block"
    document.getElementById("add-money-parent").style.display = "none"
})
