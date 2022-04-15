/* import { faker } from '@faker-js/faker'

export const genTableData = () => {    
    const data = [];
    const DATA_ROWS = 15;

    for(let i = 0; i<DATA_ROWS; i++){
        let row = {
            id : faker.datatype.number({min : 0, max : 154879, precision : 1}),
            name : faker.name.firstName(),
            bloodLine : faker.random.arrayElement(['Hoz', 'Campona', "Klin", "Zan"]),
            breedType : faker.random.arrayElement(['Pacer', 'Rare', "Epic", "Legendary", "Founding"]),
            gender : faker.random.arrayElement(['F','M']),
            winRate : faker.datatype.number({min : 0, max : 1, precision : 0.01}),
            totalRaces : faker.datatype.number({min : 0 , max : 500, precision : 1}),
            canRaceAt : faker.datatype.number({min : 1642130269 , max : 1655176669}),
            lastBreedTime : faker.datatype.number({min : 1642130269 , max : 1655176669}),
            renterAddress : faker.random.arrayElement([null, true]),
            breedCount : faker.datatype.number({min : 0 , max : 7, precision :1}),
            speed : faker.datatype.number({min : 0, max : 9, precision : 0.01}),
            strength : faker.datatype.number({min : 0, max : 9, precision : 0.01}),
            lightning : faker.datatype.number({min : 0, max : 9, precision : 0.01}),
            wind : faker.datatype.number({min : 0, max : 9, precision : 0.01}),
            water : faker.datatype.number({min : 0, max : 9, precision : 0.01}),
            fire : faker.datatype.number({min : 0, max : 9, precision : 0.01}),
            energy : faker.datatype.number({min : 0, max : 25, precision : 1}),
            gold : faker.datatype.number({min : 0, max : 100, precision : 1}),
            silver : faker.datatype.number({min : 0, max : 100, precision : 1}),
            bronze : faker.datatype.number({min : 0, max : 100, precision : 1}),
        }
        data.push(row);

    }
    return data;
}

console.log(genTableData()) */


export const tableDemoData = [
    {
        id: 101503,
        name: 'Tess',
        bloodLine: 'Hoz',
        breedType: 'Legendary',
        gender: 'F',
        winRate: 0.87,
        totalRaces: 284,
        canRaceAt: 1643787139,
        lastBreedTime: 1648049785,
        renterAddress: true,
        breedCount: 4,
        speed: 4.44,
        strength: 3.33,
        lightning: 5.29,
        wind: 6.89,
        water: 7.05,
        fire: 8.25,
        energy: 20,
        gold: 94,
        silver: 38,
        bronze: 43
      },
      {
        id: 141322,
        name: 'Tania',
        bloodLine: 'Campona',
        breedType: 'Pacer',
        gender: 'F',
        winRate: 0.08,
        totalRaces: 329,
        canRaceAt: 1648093399,
        lastBreedTime: 1645423004,
        renterAddress: null,
        breedCount: 1,
        speed: 3.06,
        strength: 0.85,
        lightning: 3.79,
        wind: 0.38,
        water: 7.42,
        fire: 5.51,
        energy: 10,
        gold: 28,
        silver: 2,
        bronze: 41
      },
      {
        id: 34001,
        name: 'Jean',
        bloodLine: 'Hoz',
        breedType: 'Pacer',
        gender: 'F',
        winRate: 0.36,
        totalRaces: 285,
        canRaceAt: 1648734365,
        lastBreedTime: 1644679151,
        renterAddress: null,
        breedCount: 0,
        speed: 7.81,
        strength: 4.8,
        lightning: 0.65,
        wind: 3.74,
        water: 1.12,
        fire: 1.91,
        energy: 1,
        gold: 94,
        silver: 90,
        bronze: 39
      },
      {
        id: 79339,
        name: 'Ernestina',
        bloodLine: 'Campona',
        breedType: 'Epic',
        gender: 'F',
        winRate: 0.2,
        totalRaces: 297,
        canRaceAt: 1651093294,
        lastBreedTime: 1644457120,
        renterAddress: null,
        breedCount: 7,
        speed: 2.74,
        strength: 3.83,
        lightning: 0.48,
        wind: 4.66,
        water: 4.1,
        fire: 8.73,
        energy: 12,
        gold: 36,
        silver: 5,
        bronze: 12
      },
      {
        id: 83263,
        name: 'Annie',
        bloodLine: 'Hoz',
        breedType: 'Legendary',
        gender: 'M',
        winRate: 0.66,
        totalRaces: 313,
        canRaceAt: 1647523169,
        lastBreedTime: 1649273866,
        renterAddress: null,
        breedCount: 0,
        speed: 6.14,
        strength: 5.82,
        lightning: 1.56,
        wind: 5.32,
        water: 8.08,
        fire: 4.26,
        energy: 24,
        gold: 70,
        silver: 54,
        bronze: 19
      },
      {
        id: 49399,
        name: 'Delia',
        bloodLine: 'Campona',
        breedType: 'Pacer',
        gender: 'F',
        winRate: 0.15,
        totalRaces: 59,
        canRaceAt: 1650074645,
        lastBreedTime: 1647853695,
        renterAddress: true,
        breedCount: 7,
        speed: 1.22,
        strength: 1.06,
        lightning: 3.29,
        wind: 0.25,
        water: 7.53,
        fire: 0.09,
        energy: 0,
        gold: 37,
        silver: 0,
        bronze: 73
      },
      {
        id: 41678,
        name: 'Ludwig',
        bloodLine: 'Hoz',
        breedType: 'Legendary',
        gender: 'F',
        winRate: 0.23,
        totalRaces: 165,
        canRaceAt: 1646588370,
        lastBreedTime: 1647871012,
        renterAddress: null,
        breedCount: 0,
        speed: 4.96,
        strength: 2.4,
        lightning: 5.79,
        wind: 2.41,
        water: 7.62,
        fire: 2.43,
        energy: 4,
        gold: 47,
        silver: 3,
        bronze: 58
      },
      {
        id: 22736,
        name: 'Merle',
        bloodLine: 'Hoz',
        breedType: 'Rare',
        gender: 'F',
        winRate: 0.65,
        totalRaces: 143,
        canRaceAt: 1644902160,
        lastBreedTime: 1648069254,
        renterAddress: true,
        breedCount: 5,
        speed: 6.78,
        strength: 8.46,
        lightning: 7.09,
        wind: 1.86,
        water: 5.76,
        fire: 2.02,
        energy: 2,
        gold: 21,
        silver: 92,
        bronze: 10
      },
      {
        id: 4357,
        name: 'Laron',
        bloodLine: 'Hoz',
        breedType: 'Rare',
        gender: 'M',
        winRate: 0.41,
        totalRaces: 390,
        canRaceAt: 1652434129,
        lastBreedTime: 1648289281,
        renterAddress: null,
        breedCount: 5,
        speed: 6.65,
        strength: 8.66,
        lightning: 5.39,
        wind: 3.78,
        water: 4.07,
        fire: 3.19,
        energy: 24,
        gold: 24,
        silver: 38,
        bronze: 53
      },
      {
        id: 129484,
        name: 'Bria',
        bloodLine: 'Klin',
        breedType: 'Epic',
        gender: 'M',
        winRate: 0.55,
        totalRaces: 126,
        canRaceAt: 1649924627,
        lastBreedTime: 1647809159,
        renterAddress: true,
        breedCount: 6,
        speed: 6.94,
        strength: 0.02,
        lightning: 4.43,
        wind: 1.63,
        water: 3.65,
        fire: 6.57,
        energy: 11,
        gold: 24,
        silver: 88,
        bronze: 8
      },
      {
        id: 10179,
        name: 'Rosario',
        bloodLine: 'Hoz',
        breedType: 'Founding',
        gender: 'F',
        winRate: 0.75,
        totalRaces: 275,
        canRaceAt: 1642539066,
        lastBreedTime: 1642665251,
        renterAddress: null,
        breedCount: 6,
        speed: 3.74,
        strength: 7.73,
        lightning: 1.29,
        wind: 6.34,
        water: 0.59,
        fire: 0.13,
        energy: 23,
        gold: 83,
        silver: 85,
        bronze: 7
      },
      {
        id: 126011,
        name: 'Alda',
        bloodLine: 'Klin',
        breedType: 'Pacer',
        gender: 'M',
        winRate: 0.76,
        totalRaces: 451,
        canRaceAt: 1648286576,
        lastBreedTime: 1653508737,
        renterAddress: null,
        breedCount: 5,
        speed: 2.4,
        strength: 4.35,
        lightning: 4.51,
        wind: 8.38,
        water: 5.78,
        fire: 4.74,
        energy: 4,
        gold: 12,
        silver: 81,
        bronze: 67
      },
      {
        id: 23066,
        name: 'Chester',
        bloodLine: 'Zan',
        breedType: 'Founding',
        gender: 'F',
        winRate: 0.02,
        totalRaces: 278,
        canRaceAt: 1650462426,
        lastBreedTime: 1645745277,
        renterAddress: true,
        breedCount: 1,
        speed: 6.39,
        strength: 2.3,
        lightning: 1.53,
        wind: 3.91,
        water: 7.61,
        fire: 6.72,
        energy: 24,
        gold: 63,
        silver: 94,
        bronze: 1
      },
      {
        id: 29733,
        name: 'Lura',
        bloodLine: 'Zan',
        breedType: 'Pacer',
        gender: 'M',
        winRate: 0.44,
        totalRaces: 423,
        canRaceAt: 1645274659,
        lastBreedTime: 1647960317,
        renterAddress: null,
        breedCount: 1,
        speed: 5.31,
        strength: 3.81,
        lightning: 5.08,
        wind: 8.66,
        water: 6,
        fire: 2.8,
        energy: 2,
        gold: 98,
        silver: 73,
        bronze: 44
      },
      {
        id: 100462,
        name: 'Dawn',
        bloodLine: 'Hoz',
        breedType: 'Rare',
        gender: 'M',
        winRate: 0.56,
        totalRaces: 383,
        canRaceAt: 1655111475,
        lastBreedTime: 1647331355,
        renterAddress: true,
        breedCount: 2,
        speed: 4.99,
        strength: 1.76,
        lightning: 2.25,
        wind: 8.84,
        water: 0.14,
        fire: 0.75,
        energy: 14,
        gold: 75,
        silver: 11,
        bronze: 12
      }
]