/* export const PegaCooldown = {
  'HOZ' :  
}
 */

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


export const getCurrentTimestampMidnight = () => {
  //if(Object.prototype.toString.call(givenDate) === '[object Date]'){
    const now = new Date();
    now.setHours(0,0,0);
   /*  const year  = now.getFullYear();
    const month = now.getMonth()+1; // january is month 0
    const day   = now.getDate() */
    return Math.round(now.getTime() / 1000);
  //}
}

export const getCurrentTimestamp = () => {
  const now = new Date();
  
  return Math.round(now.getTime() / 1000);
}

export const checkIfHorseIsRaceable = (canRaceTimestamp : number, currentTimestamp : number) => {
  return currentTimestamp > canRaceTimestamp
}

export const EnergyValueToColor = (energylvl : number) => {
  let color = '#000000';
  if(energylvl >= 0 && energylvl <=25){
    if(energylvl >= 0 && energylvl <10){
      color = 'bg-green-600';
    }else if(energylvl >= 10 && energylvl < 19){
      color = 'bg-yellow-600';
    }else{
      color = 'bg-red-600'
    }
  }
  return color;
}

export const checkIfSomeLoading = (arrayOfLoading : Array<boolean>) => {
  return arrayOfLoading.some(x => x===true) 
}


export const checkIfHorseIsBreadable = (lastBredTimeTimeStamp : number, currentTimestamp : number, pegaBloodline : string) => {

}