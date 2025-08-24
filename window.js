// console.log("connection")
document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault()
    console.log("add")
    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("account-number").value
    const ammout = parseInt(document.getElementById("add-ammount").value)
    const pin = document.getElementById("add-pin").value
    // console.log(bank,accountNumber,ammout,pin)
    const availablebalance = parseInt(document.getElementById("available-balance").innerText)
    const totalBalance = availablebalance + ammout
    document.getElementById("available-balance").innerText = totalBalance


})