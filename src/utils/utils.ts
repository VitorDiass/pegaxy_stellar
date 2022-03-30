export const numberFormat = (numberToFormat: number | string) => {
  let formatedString = "";
  let j = 0;
  //console.log(numberToFormat)

  if (typeof numberToFormat === "number" && !Number.isNaN(numberToFormat)) {
    console.log(numberToFormat)
    let tempString = numberToFormat.toString();
    for (let i = tempString.length - 1; i >= 0; i--) {
      formatedString = tempString.charAt(i) + formatedString;

      j++;
      if (j % 3 == 0 && i !== 0) {
        formatedString = " " + formatedString;
      }
    }
  } else {
   if(typeof numberToFormat === 'string'){
     console.log(numberToFormat)
     formatedString = numberToFormat
   }
  }
  return formatedString;
};


export const getCurrentTimestamp = () => {
  //if(Object.prototype.toString.call(givenDate) === '[object Date]'){
    const now   = new Date();
    now.setHours(0,0,0);
   /*  const year  = now.getFullYear();
    const month = now.getMonth()+1; // january is month 0
    const day   = now.getDate() */
    return Math.round(now.getTime() / 1000);
  //}
}

export const checkIfSomeLoading = (arrayOfLoading : Array<boolean>) => {
  return arrayOfLoading.some(x => x===true) 
}
