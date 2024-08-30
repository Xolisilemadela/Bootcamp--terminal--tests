
export default function countAllPaarl(regNumbers){
    var regNumbersList = regNumbers.split(",");
    var paarlRegNumCount = 0;
    for(let i=0; i<regNumbersList.length; i++){
      var paarlRegNum = regNumbersList[i].trim();
      if(paarlRegNum.startsWith("CJ")){
         paarlRegNumCount += 1;
         }
    }
         return paarlRegNumCount;
  }
