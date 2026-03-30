document.getElementById('btn-cash-out').addEventListener('click', function(){
    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('cash-out-pin-number');
    const availableBalance = document.getElementById('available-balance').innerText;
    if(pinNumber === 1234){
    const availableBalanceNumber = Number(availableBalance);
    const newBalance = availableBalanceNumber - cashOut;
    document.getElementById('available-balance').innerText = newBalance;
    const div = document.createElement('div');
    div.classList.add('bg-red-300');
    div.classList.add('p-4');
    div.classList.add('rounded')
    div.innerHTML = `
    <h4 class="text-2xl font-bold">Cash Out</h4>
    <p>${cashOut} TK Withdraw</p>
    `
    document.getElementById('transaction-container').appendChild(div)
    
    }
    else{
        alert('wrong pin number')
    }
})