export default function countRegNumber(regNo){
    var splited = regNo.split(",");
    return splited.length;
    }
console.log(countRegNumber("CA 182736,CY 523519,CJ 812328"));
console.log(countRegNumber("CA 182736, GP 234650"));