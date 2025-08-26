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
// tansfer er work
document.getElementById("transfer-btn").addEventListener("click",function(e){
    e.preventDefault()
    console.log("click done")
    const transferAccountNumber = document.getElementById("trasnfer-account-number").value
    const transferAmount = parseInt(document.getElementById("transfer-ammount").value)
    const transferPin = parseInt(document.getElementById("transfer-pin").value)
    const availabaleSendMoney = parseInt(document.getElementById("available-balance").innerText)
    if(transferAccountNumber.length < 11){
        alert("please provide valid account number")
        return
    }
    if (transferPin != pinNumber){
        alert("wrong pin")
    }
    const totalSendMoney = availabaleSendMoney - transferAmount
    document.getElementById("available-balance").innerText =totalSendMoney

})

// pay bill work  
document.getElementById("pay-btn").addEventListener("click",function(e){
    e.preventDefault()
    console.log("click done")
    const payBillAccountNumber = document.getElementById("pay-bil-account-number").value
    const payBillAmount = parseInt(document.getElementById("pay-bill-ammount").value)
    const payBillPin = parseInt(document.getElementById("pay-bill-pin").value)
    const availabalpayBill = parseInt(document.getElementById("available-balance").innerText)
    if(payBillAccountNumber.length < 11){
        alert("please provide valid account number")
        return
    }
    if (payBillPin != pinNumber){
        alert("wrong pin")
    }
    const totalpayBillMoney = availabalpayBill - payBillAmount
    document.getElementById("available-balance").innerText =totalpayBillMoney


})













// toggoling feature
// when Add Money clicked
document.getElementById("add-money-1").addEventListener("click", function() {
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
    
    
    const btns = document.getElementsByClassName("button-1")
    // console.log (btns)
    for (const btn of btns){
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
        btn.classList.add("border-gray-500")
        
     }
     document.getElementById("add-money-1").classList.remove("border-gray-500")
     document.getElementById("add-money-1").classList.add("border-[#0874f2]", "bg-[#0874f20d]")
})

// when Cash Out clicked
document.getElementById("cash-out").addEventListener("click", function() {
    document.getElementById("cash-out-parent").style.display = "block"
    document.getElementById("add-money-parent").style.display = "none"
    const btns = document.getElementsByClassName("button-1")
    // console.log (btns)
    for (const btn of btns){
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
        btn.classList.add("border-gray-500")
        
     }
     document.getElementById("cash-out").classList.remove("border-gray-500")
     document.getElementById("cash-out").classList.add("border-[#0874f2]", "bg-[#0874f20d]")
})

// when Transfer clicked
document.getElementById("transfer-money").addEventListener("click",function(){
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("transfer-parent").style.display = "block"
    const btns = document.getElementsByClassName("button-1")
    // console.log (btns)
    for (const btn of btns){
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
        btn.classList.add("border-gray-500")
        
     }
     document.getElementById("transfer-money").classList.remove("border-gray-500")
     document.getElementById("transfer-money").classList.add("border-[#0874f2]", "bg-[#0874f20d]")

})
// get bonus clicked

document.getElementById("bonus-btn").addEventListener("click",function(e){
    e.preventDefault()
    console.log("click hoise")
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("transfer-parent").style.display = "none"
    document.getElementById("bonus-parent").style.display = "block"
    const btns = document.getElementsByClassName("button-1")
    // console.log (btns)
    for (const btn of btns){
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
        btn.classList.add("border-gray-500")
        
     }
     document.getElementById("bonus-btn").classList.remove("border-gray-500")
     document.getElementById("bonus-btn").classList.add("border-[#0874f2]", "bg-[#0874f20d]")
})

// pay bill clicked 

document.getElementById("pay-bill-btn").addEventListener("click",function(e){
    e.preventDefault()
    console.log("click hoise")
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("transfer-parent").style.display = "none"
    document.getElementById("bonus-parent").style.display = "none"
    document.getElementById("pay-bill-parent").style.display = "block"
    const btns = document.getElementsByClassName("button-1")
    // console.log (btns)
    for (const btn of btns){
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
        btn.classList.add("border-gray-500")
        
     }
     document.getElementById("pay-bill-btn").classList.remove("border-gray-500")
     document.getElementById("pay-bill-btn").classList.add("border-[#0874f2]", "bg-[#0874f20d]")
})







// logout button
document.getElementById("logout-btn").addEventListener("click", function(e){
    e.preventDefault()
    console.log("logout click")
    window.location.href = "./index.html"
});





