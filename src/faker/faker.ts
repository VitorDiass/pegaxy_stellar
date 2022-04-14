import { faker } from '@faker-js/faker'
/* 
export const genTableData = () => {    
    const data = [];
    const DATA_ROWS = 15;

    for(let i = 0; i<DATA_ROWS; i++){
        let row = {
            id : faker.datatype.number({min : 0, max : 154879, precision : 1}),
            name : faker.name.firstName(),
            bloodLine : faker.random.arrayElement(['Hoz', 'Campona', "Klin", "Zan"]),
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
 */

export const tableDemoData = [
    {
        id: 1540,
        name: 'Christ',
        bloodLine: 'Klin',
        gender: 'F',
        winRate: 0.88,
        totalRaces: 445,
        canRaceAt: 1651456319,
        lastBreedTime: 1647428213,
        renterAddress: true,
        breedCount: 6,
        speed: 2.07,
        strength: 3.87,
        lightning: 2.04,
        wind: 3.54,
        water: 7.89,
        fire: 5.29,
        energy: 20,
        gold: 63,
        silver: 10,
        bronze: 95
      },
      {
        id: 89649,
        name: 'Jamaal',
        bloodLine: 'Zan',
        gender: 'F',
        winRate: 0.3,
        totalRaces: 111,
        canRaceAt: 1647612425,
        lastBreedTime: 1652459574,
        renterAddress: true,
        breedCount: 5,
        speed: 8.87,
        strength: 7.76,
        lightning: 6.27,
        wind: 3.68,
        water: 2.26,
        fire: 5.89,
        energy: 13,
        gold: 47,
        silver: 2,
        bronze: 99
      },
      {
        id: 147455,
        name: 'Patsy',
        bloodLine: 'Zan',
        gender: 'F',
        winRate: 0.81,
        totalRaces: 201,
        canRaceAt: 1652120271,
        lastBreedTime: 1653762888,
        renterAddress: true,
        breedCount: 1,
        speed: 8.41,
        strength: 7.93,
        lightning: 0.49,
        wind: 6.36,
        water: 2.83,
        fire: 6.95,
        energy: 10,
        gold: 74,
        silver: 12,
        bronze: 66
      },
      {
        id: 150746,
        name: 'Elouise',
        bloodLine: 'Klin',
        gender: 'M',
        winRate: 0.17,
        totalRaces: 198,
        canRaceAt: 1654577147,
        lastBreedTime: 1646750943,
        renterAddress: null,
        breedCount: 7,
        speed: 6.67,
        strength: 3.12,
        lightning: 3.01,
        wind: 1.06,
        water: 5.8,
        fire: 4.96,
        energy: 10,
        gold: 90,
        silver: 22,
        bronze: 32
      },
      {
        id: 54815,
        name: 'Houston',
        bloodLine: 'Zan',
        gender: 'F',
        winRate: 0.54,
        totalRaces: 132,
        canRaceAt: 1654730998,
        lastBreedTime: 1648575543,
        renterAddress: true,
        breedCount: 0,
        speed: 1.77,
        strength: 3.99,
        lightning: 5.96,
        wind: 1.84,
        water: 7.69,
        fire: 7.64,
        energy: 22,
        gold: 9,
        silver: 46,
        bronze: 19
      },
      {
        id: 138749,
        name: 'Noble',
        bloodLine: 'Zan',
        gender: 'M',
        winRate: 0.99,
        totalRaces: 417,
        canRaceAt: 1649199539,
        lastBreedTime: 1643230977,
        renterAddress: null,
        breedCount: 3,
        speed: 3.99,
        strength: 8.41,
        lightning: 8.82,
        wind: 7.45,
        water: 4.9,
        fire: 4.39,
        energy: 1,
        gold: 24,
        silver: 4,
        bronze: 78
      },
      {
        id: 115342,
        name: 'Damion',
        bloodLine: 'Klin',
        gender: 'F',
        winRate: 0.8,
        totalRaces: 25,
        canRaceAt: 1643610211,
        lastBreedTime: 1646802747,
        renterAddress: null,
        breedCount: 7,
        speed: 8.89,
        strength: 3.15,
        lightning: 8.36,
        wind: 5.03,
        water: 7.07,
        fire: 0.71,
        energy: 12,
        gold: 79,
        silver: 68,
        bronze: 87
      },
      {
        id: 64386,
        name: 'Tiana',
        bloodLine: 'Hoz',
        gender: 'M',
        winRate: 0.84,
        totalRaces: 385,
        canRaceAt: 1642934215,
        lastBreedTime: 1642794084,
        renterAddress: null,
        breedCount: 2,
        speed: 3.67,
        strength: 5.44,
        lightning: 5.5,
        wind: 1.04,
        water: 7.72,
        fire: 3.9,
        energy: 15,
        gold: 39,
        silver: 7,
        bronze: 57
      },
      {
        id: 123253,
        name: 'Deondre',
        bloodLine: 'Campona',
        gender: 'M',
        winRate: 0.98,
        totalRaces: 1,
        canRaceAt: 1650128255,
        lastBreedTime: 1643218028,
        renterAddress: null,
        breedCount: 5,
        speed: 6.71,
        strength: 1.1,
        lightning: 2.81,
        wind: 3.03,
        water: 5.67,
        fire: 0.42,
        energy: 25,
        gold: 99,
        silver: 79,
        bronze: 93
      },
      {
        id: 110133,
        name: 'Kiera',
        bloodLine: 'Hoz',
        gender: 'F',
        winRate: 0.08,
        totalRaces: 261,
        canRaceAt: 1649273333,
        lastBreedTime: 1653440243,
        renterAddress: null,
        breedCount: 6,
        speed: 2.5,
        strength: 3.23,
        lightning: 8.84,
        wind: 8.67,
        water: 4.75,
        fire: 1.49,
        energy: 17,
        gold: 23,
        silver: 79,
        bronze: 15
      },
      {
        id: 77489,
        name: 'Alexandrea',
        bloodLine: 'Zan',
        gender: 'F',
        winRate: 0.42,
        totalRaces: 258,
        canRaceAt: 1649852102,
        lastBreedTime: 1648128866,
        renterAddress: null,
        breedCount: 2,
        speed: 7.97,
        strength: 7.55,
        lightning: 8.22,
        wind: 8.13,
        water: 6.91,
        fire: 3.14,
        energy: 3,
        gold: 16,
        silver: 62,
        bronze: 100
      },
      {
        id: 14741,
        name: 'Giovanny',
        bloodLine: 'Campona',
        gender: 'M',
        winRate: 0.45,
        totalRaces: 429,
        canRaceAt: 1649979418,
        lastBreedTime: 1647270440,
        renterAddress: true,
        breedCount: 5,
        speed: 8.4,
        strength: 8.37,
        lightning: 7.58,
        wind: 1.82,
        water: 7.48,
        fire: 4.86,
        energy: 23,
        gold: 60,
        silver: 49,
        bronze: 58
      },
      {
        id: 92844,
        name: 'Karianne',
        bloodLine: 'Campona',
        gender: 'F',
        winRate: 0.56,
        totalRaces: 296,
        canRaceAt: 1653055069,
        lastBreedTime: 1643913505,
        renterAddress: true,
        breedCount: 4,
        speed: 8.39,
        strength: 1.25,
        lightning: 2.07,
        wind: 4.67,
        water: 8.34,
        fire: 6.76,
        energy: 1,
        gold: 59,
        silver: 73,
        bronze: 29
      },
      {
        id: 143706,
        name: 'Janet',
        bloodLine: 'Campona',
        gender: 'M',
        winRate: 0.81,
        totalRaces: 454,
        canRaceAt: 1642456497,
        lastBreedTime: 1645983708,
        renterAddress: true,
        breedCount: 5,
        speed: 8.93,
        strength: 1.63,
        lightning: 0.86,
        wind: 4.4,
        water: 8.87,
        fire: 4.3,
        energy: 7,
        gold: 65,
        silver: 14,
        bronze: 39
      },
      {
        id: 83954,
        name: 'Monte',
        bloodLine: 'Zan',
        gender: 'F',
        winRate: 0.97,
        totalRaces: 343,
        canRaceAt: 1649395711,
        lastBreedTime: 1644633970,
        renterAddress: true,
        breedCount: 7,
        speed: 1.26,
        strength: 1.41,
        lightning: 0.87,
        wind: 0.63,
        water: 7.19,
        fire: 1.52,
        energy: 18,
        gold: 94,
        silver: 57,
        bronze: 0
      }
]