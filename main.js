const ITEMS = {
    "Arcangel": 0,
    "Banshees_Claw": 1,
    "BF": 2,
    "Blue_Buff": 3,
    "Bow": 4,
    "Bramblewest": 5,
    "BT": 6,
    "Chain_West": 7,
    "Chalice": 8,
    "Challanger_Emblem": 9,
    "Deathblade": 10,
    "Dragons_Claw": 11,
    "Emblem_Arcanist": 12,
    "Emblem_Assassin": 13,
    "Emblem_Bruiser": 14,
    "Emblem_Chemtech": 15,
    "Emblem_Clockwork": 16,
    "Emblem_Debonair": 17,
    "Emblem_Enforcer": 18,
    "Emblem_Hextech": 19,
    "Emblem_Innovator": 20,
    "Emblem_Mercenery": 21,
    "Emblem_Mutant": 22,
    "Emblem_Protector": 23,
    "Emblem_Scholar": 24,
    "Emblem_Scrap": 25,
    "Emblem_Sniper": 26,
    "Emblem_Socialite": 27,
    "Emblem_Striker": 28,
    "Frozen_Heart": 29,
    "GA": 30,
    "Gargoyle_Stoneplate": 31,
    "Giant_Slayer": 32,
    "Giants_Belt": 33,
    "Hand_Of_Justice": 34,
    "Hextech_Gunblade": 35,
    "IE": 36,
    "Ionic_Spark": 37,
    "Jeweled_Gauntlet": 38,
    "Last_Whisper": 39,
    "Locket": 40,
    "Morello": 41,
    "Negatron": 42,
    "Quicksilver": 43,
    "Rabadons": 44,
    "Rageblade": 45,
    "Rapid_Firecannon": 46,
    "Redemption": 47,
    "Rod": 48,
    "Runaans_Hurricane": 49,
    "Shroud_OF_Stillnes": 50,
    "Sparring_Gloves": 51,
    "Spatula": 52,
    "Spear_Of_Shojin": 53,
    "Statikk": 54,
    "Sunfire": 55,
    "Tacticians": 56,
    "Tear": 57,
    "Thiefs_Gloves": 58,
    "Titans_Resolve": 59,
    "Warmogs": 60,
    "Zekes_Herald": 61,
    "Zephir": 62,
    "ZZ_Rot_Portal": 63,
    "Edge_Of_Night": 64

};

// recipe single -----------------------------------------------------
let recipeBF = new Map([
    [ITEMS.BF, ITEMS.Deathblade],
    [ITEMS.Bow, ITEMS.Giant_Slayer],
    [ITEMS.Chain_West, ITEMS.Edge_Of_Night],
    [ITEMS.Rod, ITEMS.Hextech_Gunblade],
    [ITEMS.Tear, ITEMS.Spear_Of_Shojin],
    [ITEMS.Negatron, ITEMS.BT],
    [ITEMS.Giants_Belt, ITEMS.Zekes_Herald],
    [ITEMS.Spatula, ITEMS.Emblem_Striker],
    [ITEMS.Sparring_Gloves, ITEMS.IE],
]);

let recipeBow = new Map([
    [ITEMS.BF, ITEMS.Giant_Slayer],
    [ITEMS.Bow, ITEMS.Rapid_Firecannon],
    [ITEMS.Rod, ITEMS.Rageblade],
    [ITEMS.Tear, ITEMS.Statikk],
    [ITEMS.Chain_West, ITEMS.Titans_Resolve],
    [ITEMS.Negatron, ITEMS.Runaans_Hurricane],
    [ITEMS.Giants_Belt, ITEMS.ZZ_Rot_Portal],
    [ITEMS.Spatula, ITEMS.Challanger_Emblem],
    [ITEMS.Sparring_Gloves, ITEMS.Last_Whisper],
]);

let recipeRod = new Map([
    [ITEMS.BF, ITEMS.Hextech_Gunblade],
    [ITEMS.Bow, ITEMS.Rageblade],
    [ITEMS.Rod, ITEMS.Rabadons],
    [ITEMS.Tear, ITEMS.Arcangel],
    [ITEMS.Chain_West, ITEMS.Locket],
    [ITEMS.Negatron, ITEMS.Ionic_Spark],
    [ITEMS.Giants_Belt, ITEMS.Morello],
    [ITEMS.Spatula, ITEMS.Emblem_Arcanist],
    [ITEMS.Sparring_Gloves, ITEMS.Jeweled_Gauntlet],
]);

let recipeTear = new Map([
    [ITEMS.BF, ITEMS.Spear_Of_Shojin],
    [ITEMS.Bow, ITEMS.Statikk],
    [ITEMS.Rod, ITEMS.Arcangel],
    [ITEMS.Tear, ITEMS.Blue_Buff],
    [ITEMS.Chain_West, ITEMS.Frozen_Heart],
    [ITEMS.Negatron, ITEMS.Chalice],
    [ITEMS.Giants_Belt, ITEMS.Redemption],
    [ITEMS.Spatula, ITEMS.Emblem_Hextech],
    [ITEMS.Sparring_Gloves, ITEMS.Hand_Of_Justice],
]);

// # ###############
let recipeChainWest = new Map([
    [ITEMS.BF, ITEMS.Edge_Of_Night],
    [ITEMS.Bow, ITEMS.Titans_Resolve],
    [ITEMS.Rod, ITEMS.Locket],
    [ITEMS.Tear, ITEMS.Frozen_Heart],
    [ITEMS.Chain_West, ITEMS.Bramblewest],
    [ITEMS.Negatron, ITEMS.Gargoyle_Stoneplate],
    [ITEMS.Giants_Belt, ITEMS.Sunfire],
    [ITEMS.Spatula, ITEMS.Emblem_Debonair],
    [ITEMS.Sparring_Gloves, ITEMS.Shroud_OF_Stillnes],
]);

let recipeNegatron = new Map([
    [ITEMS.BF, ITEMS.BT],
    [ITEMS.Bow, ITEMS.Runaans_Hurricane],
    [ITEMS.Rod, ITEMS.Ionic_Spark],
    [ITEMS.Tear, ITEMS.Chalice],
    [ITEMS.Chain_West, ITEMS.Gargoyle_Stoneplate],
    [ITEMS.Negatron, ITEMS.Dragons_Claw],
    [ITEMS.Giants_Belt, ITEMS.Zephir],
    [ITEMS.Spatula, ITEMS.Emblem_Mutant],
    [ITEMS.Sparring_Gloves, ITEMS.Quicksilver],
]);

let recipeGiantsBelt = new Map([
    [ITEMS.BF, ITEMS.Zekes_Herald],
    [ITEMS.Bow, ITEMS.ZZ_Rot_Portal],
    [ITEMS.Rod, ITEMS.Morello],
    [ITEMS.Tear, ITEMS.Redemption],
    [ITEMS.Chain_West, ITEMS.Sunfire],
    [ITEMS.Negatron, ITEMS.Zephir],
    [ITEMS.Giants_Belt, ITEMS.Warmogs],
    [ITEMS.Spatula, ITEMS.Emblem_Chemtech],
    [ITEMS.Sparring_Gloves, ITEMS.Banshees_Claw],
]);

let recipeSpatula = new Map([
    [ITEMS.BF, ITEMS.Emblem_Striker],
    [ITEMS.Bow, ITEMS.Challanger_Emblem],
    [ITEMS.Rod, ITEMS.Emblem_Arcanist],
    [ITEMS.Tear, ITEMS.Emblem_Hextech],
    [ITEMS.Chain_West, ITEMS.Knight],
    [ITEMS.Negatron, ITEMS.Emblem_Mutant],
    [ITEMS.Giants_Belt, ITEMS.Emblem_Chemtech],
    [ITEMS.Spatula, ITEMS.Tacticians],
    [ITEMS.Sparring_Gloves, ITEMS.Emblem_Assassin],
]);

let recipeSparringGloves = new Map([
    [ITEMS.BF, ITEMS.IE],
    [ITEMS.Bow, ITEMS.Last_Whisper],
    [ITEMS.Rod, ITEMS.Jeweled_Gauntlet],
    [ITEMS.Tear, ITEMS.Hand_Of_Justice],
    [ITEMS.Chain_West, ITEMS.Shroud_OF_Stillnes],
    [ITEMS.Negatron, ITEMS.Quicksilver],
    [ITEMS.Giants_Belt, ITEMS.Banshees_Claw],
    [ITEMS.Spatula, ITEMS.Emblem_Assassin],
    [ITEMS.Sparring_Gloves, ITEMS.Thiefs_Gloves],
]);

// -------------------------------------------------
let recipeAll = new Map([
    [ITEMS.BF, recipeBF],
    [ITEMS.Bow, recipeBow],
    [ITEMS.Rod, recipeRod],
    [ITEMS.Tear, recipeTear],
    [ITEMS.Negatron, recipeNegatron],
    [ITEMS.Chain_West, recipeChainWest],
    [ITEMS.Giants_Belt, recipeGiantsBelt],
    [ITEMS.Spatula, recipeSpatula],
    [ITEMS.Sparring_Gloves, recipeSparringGloves]
]);

let ITEM_DESCRIPTION = new Map([
    [ITEMS.Arcangel, "Arcangel"],
    [ITEMS.Banshees_Claw, "Banshees_Claw"],
    [ITEMS.BF, "BF"],
    [ITEMS.Blue_Buff, "Blue_Buff"],
    [ITEMS.Bow, "Bow"],
    [ITEMS.Bramblewest, "Bramblewest"],
    [ITEMS.BT, "BT"],
    [ITEMS.Chain_West, "Chain_West"],
    [ITEMS.Chalice, "Chalice"],
    [ITEMS.Challanger_Emblem, "Challanger_Emblem"],
    [ITEMS.Deathblade, "Deathblade"],
    [ITEMS.Dragons_Claw, "Dragons_Claw"],
    [ITEMS.Emblem_Arcanist, "Emblem_Arcanist"],
    [ITEMS.Emblem_Assassin, "Emblem_Assassin"],
    [ITEMS.Emblem_Bruiser, "Emblem_Bruiser"],
    [ITEMS.Emblem_Chemtech, "Emblem_Chemtech"],
    [ITEMS.Emblem_Clockwork, "Emblem_Clockwork"],
    [ITEMS.Emblem_Debonair, "Emblem_Debonair"],
    [ITEMS.Emblem_Enforcer, "Emblem_Enforcer"],
    [ITEMS.Emblem_Hextech, "Emblem_Hextech"],
    [ITEMS.Emblem_Innovator, "Emblem_Innovator"],
    [ITEMS.Emblem_Mercenery, "Emblem_Mercenery"],
    [ITEMS.Emblem_Mutant, "Emblem_Mutant"],
    [ITEMS.Emblem_Protector, "Emblem_Protector"],
    [ITEMS.Emblem_Scholar, "Emblem_Scholar"],
    [ITEMS.Emblem_Scrap, "Emblem_Scrap"],
    [ITEMS.Emblem_Sniper, "Emblem_Sniper"],
    [ITEMS.Emblem_Socialite, "Emblem_Socialite"],
    [ITEMS.Emblem_Striker, "Emblem_Striker"],
    [ITEMS.Frozen_Heart, "Frozen_Heart"],
    [ITEMS.GA, "GA"],
    [ITEMS.Gargoyle_Stoneplate, "Gargoyle_Stoneplate"],
    [ITEMS.Giant_Slayer, "Giant_Slayer"],
    [ITEMS.Giants_Belt, "Giants_Belt"],
    [ITEMS.Hand_Of_Justice, "Hand_Of_Justice"],
    [ITEMS.Hextech_Gunblade, "Hextech_Gunblade"],
    [ITEMS.IE, "IE"],
    [ITEMS.Ionic_Spark, "Ionic_Spark"],
    [ITEMS.Jeweled_Gauntlet, "Jeweled_Gauntlet"],
    [ITEMS.Last_Whisper, "Last_Whisper"],
    [ITEMS.Locket, "Locket"],
    [ITEMS.Morello, "Morello"],
    [ITEMS.Negatron, "Negatron"],
    [ITEMS.Quicksilver, "Quicksilver"],
    [ITEMS.Rabadons, "Rabadons"],
    [ITEMS.Rageblade, "Rageblade"],
    [ITEMS.Rapid_Firecannon, "Rapid_Firecannon"],
    [ITEMS.Redemption, "Redemption"],
    [ITEMS.Rod, "Rod"],
    [ITEMS.Runaans_Hurricane, "Runaans_Hurricane"],
    [ITEMS.Shroud_OF_Stillnes, "Shroud_OF_Stillnes"],
    [ITEMS.Sparring_Gloves, "Sparring_Gloves"],
    [ITEMS.Spatula, "Spatula"],
    [ITEMS.Spear_Of_Shojin, "Spear_Of_Shojin"],
    [ITEMS.Statikk, "Statikk"],
    [ITEMS.Sunfire, "Sunfire"],
    [ITEMS.Tacticians, "Tacticians"],
    [ITEMS.Tear, "Tear"],
    [ITEMS.Thiefs_Gloves, "Thiefs_Gloves"],
    [ITEMS.Titans_Resolve, "Titans_Resolve"],
    [ITEMS.Warmogs, "Warmogs"],
    [ITEMS.Zekes_Herald, "Zekes_Herald"],
    [ITEMS.Zephir, "Zephir"],
    [ITEMS.ZZ_Rot_Portal, "ZZ_Rot_Portal"],
    [ITEMS.Edge_Of_Night, "Edge_Of_Night"],

]);

let REVERSE_ITEM_DESCRIPTION = new Map([
    ["BF", ITEMS.BF],
    ["Bow", ITEMS.Bow],
    ["Rod", ITEMS.Rod],
    ["Tear", ITEMS.Tear],
    ["Negatron", ITEMS.Negatron],
    ["Chain_West", ITEMS.Chain_West],
    ["Giants_Belt", ITEMS.Giants_Belt],
    ["Spatula", ITEMS.Spatula],
    ["Sparring_Gloves", ITEMS.Sparring_Gloves]
]);

let permutations = [];
// array.push(x)

let startItems = [];
// let startItems = [ITEMS.BF, ITEMS.Bow, ITEMS.Rod, ITEMS.Tear];
// let startItems = [ITEMS.BF, ITEMS.Bow, ITEMS.Rod, ITEMS.Tear, ITEMS.BF, ITEMS.Bow, ITEMS.Tear, ITEMS.Rod, ITEMS.BF];
// let startItems = [ITEMS.Bow, ITEMS.Bow, ITEMS.Bow, ITEMS.Bow];

let closedList = [];        // for duplicates removal
let cleanResultItems = [];  // for html




const swap = function (A, index1, index2) {
    let temp = A[index2];
    A[index2] = A[index1];
    A[index1] = temp;
}

const generate = function (k, A) {
    if (k <= 0) return;



    if (k === 1) {
        // console.log(A);
        permutations.push([...A]);
    } else {
        // Generate permutations with kth unaltered
        // Initially k == length(A)
        generate(k - 1, A);

        // Generate permutations for kth swapped with each k-1 initial
        for (let i = 0; i < k - 1; i++) {
            // Swap choice dependent on parity of k (even or odd)
            if (k % 2 == 0) {
                swap(A, i, k - 1) // zero-indexed, the kth is at k-1
            } else {
                swap(A, 0, k - 1);
            }
            generate(k - 1, A);
        }
    }

}

const addToClosedList = function (itemList) {
    let isInClosedList = false;
    let newMap = new Map();

    // fill the map
    for (const [item, value] of ITEM_DESCRIPTION) {
        newMap.set(item, 0);
    }

    // count per item
    itemList.forEach(resultItem => {
        newMap.set(resultItem, newMap.get(resultItem) + 1);
    });

    if (closedList.length == 0) {
        closedList.push(newMap);
        cleanResultItems.push(itemList);
        return;
    }

    for (let map of closedList) {
        let fullEqual = true;

        for (let [key, value] of map) {
            if (newMap.get(key) != value) {
                fullEqual = false;
                break;
            }
        }

        if (fullEqual) {
            isInClosedList = true;
            break;
        }
    }

    if (!isInClosedList) {
        closedList.push(newMap);
        cleanResultItems.push(itemList);
    }
}

const interpretItems = function () {
    // PERMUTATIONS
    permutations.forEach(permutation => {
        let itemList = [];

        for (let i = 0; i < permutation.length; i += 2) {
            let resultItem = null;

            if (i + 1 < permutation.length) {
                let recipe = recipeAll.get(permutation[i]);
                resultItem = recipe.get(permutation[i + 1]);
            } else {
                // last odd item
                resultItem = permutation[i];
            }

            itemList.push(resultItem);
        }

        // closed list test
        // 45 items total
        addToClosedList(itemList);
    });
}

const showItems = function () {
    let combinedItems = document.getElementById("combined_items");

    while (combinedItems.firstChild) {
        combinedItems.removeChild(combinedItems.firstChild);
    }

    cleanResultItems.forEach(itemList => {
        itemList.forEach(item => {
            let description = ITEM_DESCRIPTION.get(item);
            let img = document.createElement("img");
            img.src = "img/" + description + ".png"
            img.alt = description;
            img.id = "BF";

            combinedItems.appendChild(img);
        });

        combinedItems.appendChild(document.createElement("br"));
    });

}

// ############################################################################

const selectedItems = document.getElementById("selected_items");

const removeItem = function () {
    selectedItems.removeChild(this);
    // TODO
    console.log(startItems);
    let toRemove = REVERSE_ITEM_DESCRIPTION.get(this.id);
    console.log(toRemove);

    for (let i = 0; i < startItems.length; i++) {
        if (startItems[i] === toRemove) {
            startItems.splice(i, 1);
            break;
        }
    }

    console.log(startItems);
}

const addItem = function (itemID) {
    let img = document.createElement("img");
    img.src = "img/" + itemID + ".png";
    img.id = itemID;
    img.onmousedown = removeItem;
    selectedItems.appendChild(img);
    startItems.push(REVERSE_ITEM_DESCRIPTION.get(itemID));
    // console.log(startItems);
}

const calculate = function () {
    permutations = [];
    closedList = [];
    cleanResultItems = [];
    generate(startItems.length, [...startItems]);

    interpretItems();
    showItems();
}

const init = function () {
    // add listener to basic items
    let basicItems = document.getElementsByClassName("basic_item");

    for (const item of basicItems) {
        item.onmousedown = function () {
            // console.log(this.id, " clicked");
            addItem(this.id);
        }
    }

    let btn = document.getElementById("calculate");
    btn.onmousedown = calculate;
}

// ################################################################################

// let t0 = performance.now();
// generate(startItems.length, startItems);

// interpretItems();
// showItems();

// let t1 = performance.now();
// console.log("Call to GENERATE took " + (t1 - t0) + " milliseconds.")

init();