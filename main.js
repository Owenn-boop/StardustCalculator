/*

    Helper JS file for StardustCalculator.
    Author: Owenn Herrmann

    This file fetches prices from APIs and hold different rates and values to help the website works.

    (For the online videogame Old School Runescape)

*/


// the chance you will get each gem out of a gem bag
const GEM_BAG_RATES = {
    "Uncut sapphire": 0.5,
    "Uncut emerald": 0.347,
    "Uncut ruby": 0.118,
    "Uncut diamond": 0.0309,
    "Uncut dragonstone": 0.0062,
    "Uncut onyx": 1/100000000
}

// xp you get from cutting each gem respectively
const GEM_XP_CUT = {
    "Uncut sapphire": 50,
    "Uncut emerald": 67.5,
    "Uncut ruby": 85,
    "Uncut diamond": 107.5,
    "Uncut dragonstone": 137.5,
    "Uncut onyx": 167.5
}

// cost in stardust
const SOFT_CLAY_COST = 150;
const BAG_COST = 300;

const CLAY_PACK_ID = 1761;
const UNCUT_GEM_IDS = {
    "Uncut sapphire": 1623,
    "Uncut emerald": 1621,
    "Uncut ruby": 1619,
    "Uncut diamond": 1617,
    "Uncut dragonstone": 1631,
    "Uncut onyx": 6571
}

// amount of clay in a soft clay pack
const CLAY_PACK_AMOUNT = 100;

// amount of gems in a gem bag
const GEM_BAG_AMOUNT = 40;

// prices to be set by the wiki API and used in other parts of the site
let softClayGEPrice = 0;
let uncutGemGEPrice = {};

// sets the GE values of gems and soft clay
async function setGEValues() {
    const response = await fetch('https://prices.runescape.wiki/api/v1/osrs/latest');
    const responseJson = await response.json();
    softClayGEPrice = responseJson.data[CLAY_PACK_ID]['low'];
    for(key in UNCUT_GEM_IDS) {
        let id = UNCUT_GEM_IDS[key];
        uncutGemGEPrice[key] = responseJson.data[id]['low'];
    }
}

setGEValues();
