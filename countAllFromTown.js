export default function countAllFromTown(regNum, regNumStart){
    var regNumList = regNum.split(",");
    var allFromTownCount = 0;
    for(let i=0; i<regNumList.length; i++){
      var allTownReg = regNumList[i].trim();
      if(allTownReg.startsWith(regNumStart)){
         allFromTownCount += 1;
         }
    }
         return allFromTownCount;
  }
  console.log(countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF'))