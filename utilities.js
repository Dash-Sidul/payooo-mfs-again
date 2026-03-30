function getInputFieldValueById (id){

//     const addMoney = document.getElementById('input-add-money').Value;
//     return addMoney
//     const inputFieldValue = document.getElementById(id).Value;
//     return inputFieldValue
        const inputValue = document.getElementById(id).value;
        const inputValueNumber = Number(inputValue);
        return inputValueNumber
 }
 function showSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');

 }