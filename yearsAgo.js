
export default function yearsAgo(year){
    const date = new Date();
    var dt = date.getFullYear() - year;
    
    return dt;
  }
