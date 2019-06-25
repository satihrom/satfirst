var money,time;
function start(){
 money=prompt ("Ваш бюджет на месяц",'');
 time=prompt ("Введите дату в формате YYYY-MM-DD",'');
     while (isNaN(money) || money === "" ||  money===null) {
             prompt ("Ваш бюджет на месяц",'');

        } 
        
}
        start();

    
var appData={
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    saving: false

};
for (var i=0; i<2; i++){
    var a=prompt ("Введите обязательную статью расходов в этом месяце",''),
        b=prompt("Во сколько обойдется?",'');
        if ((typeof(a))==='string'&& (typeof(a))!=null && (typeof(b))!=null && a!='' && b!='' && a.length<50) {
        
                console.log('done'); 
                appData.expenses[a] =b;
                }
        else i --;
              
        
        }

        appData.moneyPerDay = appData.budget / 30;
        alert("Ваш ежедневный бюджет"+appData.moneyPerDay);
       


   