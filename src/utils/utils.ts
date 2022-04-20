export const PegaCooldown = {
    HOZ: 24,
    CAMPONA: 48,
    KLIN: 72,
    ZAN: 96,
    BABY: 96,
};

export const numberFormat = (numberToFormat: number | string) => {
    let formatedString = "";
    let j = 0;

    if (typeof numberToFormat === "number" && !Number.isNaN(numberToFormat)) {
        let tempString = numberToFormat.toString();
        for (let i = tempString.length - 1; i >= 0; i--) {
            formatedString = tempString.charAt(i) + formatedString;

            j++;
            if (j % 3 == 0 && i !== 0) {
                formatedString = " " + formatedString;
            }
        }
    } else {
        if (typeof numberToFormat === "string") {
            formatedString = numberToFormat;
        }
    }
    return formatedString;
};

export const getCurrentTimestampMidnight = () => {
    const now = new Date();
    now.setHours(0, 0, 0);
    return Math.round(now.getTime() / 1000);
};

export const getCurrentTimestamp = () => {
    const now = new Date();

    return Math.round(now.getTime() / 1000);
};

export const checkIfHorseIsRaceable = (canRaceTimestamp: number, currentTimestamp: number) => {
    return currentTimestamp > canRaceTimestamp;
};

export const EnergyValueToColor = (energylvl: number) => {
    let color = "#000";
    if (energylvl >= 0 && energylvl <= 25) {
        if (energylvl >= 0 && energylvl < 10) {
            color = "bg-green-500";
        } else if (energylvl >= 10 && energylvl < 19) {
            color = "bg-yellow-500";
        } else {
            color = "bg-red-600";
        }
        return color;
    }
    //return;
};

export const checkIfSomeLoading = (arrayOfLoading: Array<boolean>) => {
    return arrayOfLoading.some((x) => x === true);
};

export const checkIfHorseIsBreedable = (canBreedTimestamp : number, currentTimestamp : number) => {
    return currentTimestamp > canBreedTimestamp
}
/* 
export const checkIfHorseIsBreedable = (lastBredTimeTimestamp: number, currentTimestamp: number, bornTimestamp: number, pegaBloodline: string) => {
    const hourToMs = 3600;
    let isBreadable = false;
    if (lastBredTimeTimestamp === 0) {
        //BABY PEGA

        switch (pegaBloodline.toUpperCase()) {
            case "HOZ":
                const hozcd = PegaCooldown["BABY"];
                isBreadable = currentTimestamp - bornTimestamp > hozcd * hourToMs;
                break;
            case "CAMPONA":
                const camponacd = PegaCooldown["BABY"];
                isBreadable = currentTimestamp - bornTimestamp > camponacd * hourToMs;
                break;
            case "KLIN":
                const klincd = PegaCooldown["BABY"];
                isBreadable = currentTimestamp - bornTimestamp > klincd * hourToMs;
                break;
            case "ZAN":
                const zancd = PegaCooldown["BABY"];
                isBreadable = currentTimestamp - bornTimestamp > zancd * hourToMs;
                break;
            default:
                break;
        }

        return isBreadable;
    } else if (lastBredTimeTimestamp > 0) {
        switch (pegaBloodline.toUpperCase()) {
            case "HOZ":
                const hozcd = PegaCooldown["HOZ"];
                isBreadable = currentTimestamp - lastBredTimeTimestamp > hozcd * hourToMs;
                break;
            case "CAMPONA":
                const camponacd = PegaCooldown["CAMPONA"];
                isBreadable = currentTimestamp - lastBredTimeTimestamp > camponacd * hourToMs;
                break;
            case "KLIN":
                const klincd = PegaCooldown["KLIN"];
                isBreadable = currentTimestamp - lastBredTimeTimestamp > klincd * hourToMs;
                break;
            case "ZAN":
                const zancd = PegaCooldown["ZAN"];
                isBreadable = currentTimestamp - lastBredTimeTimestamp > zancd * hourToMs;
                break;
            default:
                break;
        }
        return isBreadable;
    }
}; */

export const getItemStorage = (itemName: string) => {
    return JSON.parse(localStorage.getItem(itemName));
};

export const setItemStorage = (itemName: string, item: string) => {
    localStorage.setItem(itemName, JSON.stringify(item));
};

export const setItemStorageAppend = (itemName: string, item: string) => {
    const oldItem = getItemStorage(itemName);

    if (oldItem) {
        const walletsArray = oldItem?.split(";");
        const itemExists = checkIfExistsArray(walletsArray, item);

        if (!itemExists) {
            const newItem = oldItem + ";" + item;
            setItemStorage(itemName, newItem);
        }
    } else {
        setItemStorage(itemName, item);
    }
};

export const checkIfExistsArray = (arrayToCheck: Array<unknown>, itemToCheck: string) => {
    return arrayToCheck.some((item: unknown) => item === itemToCheck);
};

export const removeStorageItem = (itemName : string) => {
    localStorage.removeItem(itemName);
}

export const removeStorageElementFromItem = (itemName : string, elemToRemove : any) => {
    const item = getItemStorage(itemName);

    if(item) {
        const splitedItem = item.split(";");
        const index = splitedItem.indexOf(elemToRemove);
        const resultItem = splitedItem.splice(index, 1);
    
        splitedItem.length > 0 ? setItemStorage(itemName, splitedItem.toString()) : removeStorageItem(itemName)
    }
} 


export const shortenWalletAddress = (walletAddress : string) => {
    if(walletAddress){
        return walletAddress.substring(0,8) + "..." + walletAddress.substring(walletAddress.length-8, walletAddress.length-1);
    }
    return '';
}

const convertToMS = (time : number) => {
    return time * 1000;
}

/**DATE1 - HOLDS THE "FIRST DATE" to check against (generally the current timestamp)
 * DATE2 - HOLDS THE "SECOND DATE" (can breed, can race...)
*/
export const timeDiff = (date1 : number, date2 : number) => {
    const date_1 = new Date(convertToMS(date1));
    const date_2 = new Date(convertToMS(date2));
    const diff = new Date(date_2.getTime() - date_1.getTime()).getTime() / 1000;
    let resultDiff = 'N/A';
    
    if(diff > 60 && diff < 3600) {
        resultDiff = `in ${Math.floor(diff/60)} minute(s)`
    }else if(diff >= 3600 && diff < 86400){
        resultDiff = `in ${Math.floor(diff/3600)} hour(s)`
    }else if(diff >=86400 && diff < 31449600){
        resultDiff = `in ${Math.floor(diff/86400)} day(s)`
    }
    
    return resultDiff
}

/* console.log(timeDiff(getCurrentTimestamp(),1650397603)) */