
export default function totalPhoneBill(callsAndSmsesMade){
    var totalBill = 0;
    var callsAndSmsesMadeList = callsAndSmsesMade.split(",");
    for(let i=0; i<callsAndSmsesMadeList.length; i++){
      var callsAndSmses = callsAndSmsesMadeList[i].trim();
      if(callsAndSmses.startsWith("call")){
        totalBill += 2.75;
      }
      else if(callsAndSmses.startsWith("sms")){
        totalBill += 0.65;
      }
      else{
        return 'Error!!, can only take call and sms as input';
      }

      }
      return "R"+totalBill.toFixed(2);
    }
    
