export const numberFormat = (numberToFormat : number) => {
    let tempString = numberToFormat.toString();
    let formatedString = '';
    let j = 0;
    for(let i=tempString.length-1 ; i >= 0 ; i--){
        formatedString = tempString.charAt(i) + formatedString;
        
        j++;
        if(j % 3 == 0 && i !== 0){
            formatedString = ' ' + formatedString;
        }
    }

    return formatedString;

}

