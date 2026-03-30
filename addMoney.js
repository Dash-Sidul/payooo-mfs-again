document.getElementById('btn-add-money').addEventListener('click', function(){
              
    // 
// const addMoney = document.getElementById('input-add-money').value;
    // const addMoneyNumber = Number(addMoney)
    // console.log(addMoneyNumber);
    // const inputPinNumber = document.getElementById('input-pin-number').value;
    // console.log(inputPinNumber);
    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number')
   const availableBalance = document.getElementById('available-balance').innerText;
   const availableBalanceNumber = Number(availableBalance);
   if(isNaN(addMoney)){
    alert('failed add money');
    return
   }
   if(pinNumber === 1234){
   const newBalance = availableBalanceNumber + addMoney;
   console.log(addMoney , availableBalanceNumber, newBalance);
   document.getElementById('available-balance').innerText = newBalance;
   const p = document.createElement('p');
   p.innerText = `Added: ${addMoney} TK. New Balance: ${newBalance} TK`
   console.log(p);
   document.getElementById('transaction-container').appendChild(p)
   }
   else{
    alert('Wrong pin number')
   }
})

