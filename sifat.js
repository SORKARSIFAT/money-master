document.getElementById('btn-calculate').addEventListener("click" , function(){
    // income field
    const incomeField = document.getElementById('income-field');
    const incomeString = incomeField.value;
    const income        = parseInt(incomeString);

    // food field
    const foodField = document.getElementById('food-field');
    const foodString = foodField.value;
    const food =       parseInt(foodString);
    
    // rent field 
    const rentField = document.getElementById('rent-field');
    const rentString = rentField.value;
    const rent =       parseInt(rentString);
   
    // clothes field
    const clothesField =  document.getElementById('clothes-field');
    const clothesString = clothesField.value;
    const clothes =       parseInt(clothesString);

    //  previous expenses 
    const totalExpensesElement = document.getElementById('total-expenses');
    const previousExpensesString = totalExpensesElement.innerText;
    const previousExpenses       = parseFloat(previousExpensesString);

    // previous Balance
    const totalBalanceElement = document.getElementById('balance-total');
    const previousBalanceString = totalBalanceElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    // Calculation:
    const newExpensesTotal = food + rent + clothes ;
     // set new expenses value:
    totalExpensesElement.innerText = newExpensesTotal;

      // new balance total:
      const newBalanceTotal = income - newExpensesTotal;
      if(newExpensesTotal > income){
        alert("You don't have that much money");
      }
      else{
        totalBalanceElement.innerText = newBalanceTotal;
      }
})


// saving part : 
document.getElementById('btn-save').addEventListener("click" , function(){

    // saveMoneyField 
    const saveMoneyField = document.getElementById('save-field');
    const saveMoneyPercentString = saveMoneyField.value;
    const saveMoneyPercent       = parseFloat(saveMoneyPercentString);

     // savingAmountElement:
     const savingAmountElement = document.getElementById('saving-amount');
     const previousSavingAmountString = savingAmountElement.innerText;
     const previousSavingAmount   = parseFloat(previousSavingAmountString);

    //  remaining-amount :
    const remainingAmountElement = document.getElementById('remaining-balance');
    const previousRemainingString = remainingAmountElement.innerText;
    const previousRemaining      = parseFloat(previousRemainingString);

    // balance :
    const totalBalanceElement = document.getElementById('balance-total');
    const previousBalanceString = totalBalanceElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);
     
      // Calculate Saving Amount:
      const newSavingAmount = (previousBalance / 100) * saveMoneyPercent;

      // set Saving Amount:
      savingAmountElement.innerText = newSavingAmount;

    //   Calculate Remaining Amount :
    const newRemainingAmount = previousBalance - newSavingAmount;

    //  set Remaining Amount :

    remainingAmountElement.innerText = newRemainingAmount;


     






})