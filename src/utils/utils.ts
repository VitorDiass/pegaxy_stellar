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
    //console.log(numberToFormat)

    if (typeof numberToFormat === "number" && !Number.isNaN(numberToFormat)) {
        console.log(numberToFormat);
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
            console.log(numberToFormat);
            formatedString = numberToFormat;
        }
    }
    return formatedString;
};

export const getCurrentTimestampMidnight = () => {
    //if(Object.prototype.toString.call(givenDate) === '[object Date]'){
    const now = new Date();
    now.setHours(0, 0, 0);
    /*  const year  = now.getFullYear();
    const month = now.getMonth()+1; // january is month 0
    const day   = now.getDate() */
    return Math.round(now.getTime() / 1000);
    //}
};

export const getCurrentTimestamp = () => {
    const now = new Date();

    return Math.round(now.getTime() / 1000);
};

export const checkIfHorseIsRaceable = (canRaceTimestamp: number, currentTimestamp: number) => {
    return currentTimestamp > canRaceTimestamp;
};

export const EnergyValueToColor = (energylvl: number) => {
    let color = "#000000";
    if (energylvl >= 0 && energylvl <= 25) {
        if (energylvl >= 0 && energylvl < 10) {
            color = "bg-green-600";
        } else if (energylvl >= 10 && energylvl < 19) {
            color = "bg-yellow-600";
        } else {
            color = "bg-red-600";
        }
    }
    console.log(color)
    return color;
};

export const checkIfSomeLoading = (arrayOfLoading: Array<boolean>) => {
    return arrayOfLoading.some((x) => x === true);
};

export const checkIfHorseIsBreadable = (lastBredTimeTimestamp: number, currentTimestamp: number, bornTimestamp: number, pegaBloodline: string) => {
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
};
