const ITEMS = {
    "BF" : 0, 
    "Bow": 1, 
    "Rod":2, 
    "Tear": 3, 
    "Negatron": 4,
    "Chain_West": 5,
    "Giants_Belt": 6,
    "Spatula": 7,
    "IE": 8, 
    "Rapidfire": 9, 
    "Rabadons": 10, 
    "Seraphs": 11, 
    "Divine": 12, 
    "Gunblade": 13, 
    "Spear": 14, 
    "Rageblade": 15,
    "Statikk" : 16,
    "Ludens" : 17,
    "Bloodthirster": 18,
    "BOTRK": 19,
    "Brawler": 20,
    "Cursed_Blade": 21,
    "Darkin": 22,
    "Dragons_Claw": 23,
    "Force_Of_Nature": 24,
    "Frozen_Heart": 25,
    "Frozen_Mallet": 26,
    "GA": 27,
    "Hurricane": 28,
    "Hush": 29,
    "Ionic": 30,
    "Knight": 31,
    "Locket": 32,
    "Morello": 33,
    "Phantom_Dancer": 34,
    "Red_Buff": 35,
    "Redemption": 36,
    "Sword_Breaker": 37,
    "Thornmail": 38,
    "Titanic": 39,
    "Warmogs": 40,
    "Youmuus": 41,
    "Yuumi": 42,
    "Zekes": 43,
    "Zephyr": 44
};

// recipe single -----------------------------------------------------
let recipeBF = new Map([
    [ITEMS.BF, ITEMS.IE],
    [ITEMS.Bow, ITEMS.Divine],
    [ITEMS.Rod, ITEMS.Gunblade],
    [ITEMS.Tear, ITEMS.Spear],
    [ITEMS.Chain_West, ITEMS.GA],
    [ITEMS.Negatron, ITEMS.Bloodthirster],
    [ITEMS.Giants_Belt, ITEMS.Zekes],
    [ITEMS.Spatula, ITEMS.Youmuus],
]);

let recipeBow = new Map([
    [ITEMS.BF, ITEMS.Divine],
    [ITEMS.Bow, ITEMS.Rapidfire],
    [ITEMS.Rod, ITEMS.Rageblade],
    [ITEMS.Tear, ITEMS.Statikk],
    [ITEMS.Chain_West, ITEMS.Phantom_Dancer],
    [ITEMS.Negatron, ITEMS.Cursed_Blade],
    [ITEMS.Giants_Belt, ITEMS.Titanic],
    [ITEMS.Spatula, ITEMS.BOTRK],
]);

let recipeRod = new Map([
    [ITEMS.BF, ITEMS.Gunblade],
    [ITEMS.Bow, ITEMS.Rageblade],
    [ITEMS.Rod, ITEMS.Rabadons],
    [ITEMS.Tear, ITEMS.Ludens],
    [ITEMS.Chain_West, ITEMS.Locket],
    [ITEMS.Negatron, ITEMS.Ionic],
    [ITEMS.Giants_Belt, ITEMS.Morello],
    [ITEMS.Spatula, ITEMS.Yuumi],
]);

let recipeTear = new Map([
    [ITEMS.BF, ITEMS.Spear],
    [ITEMS.Bow, ITEMS.Statikk],
    [ITEMS.Rod, ITEMS.Ludens],
    [ITEMS.Tear, ITEMS.Seraphs],
    [ITEMS.Chain_West, ITEMS.Frozen_Heart],
    [ITEMS.Negatron, ITEMS.Hush],
    [ITEMS.Giants_Belt, ITEMS.Redemption],
    [ITEMS.Spatula, ITEMS.Darkin],
]);

// # ###############
let recipeChainWest = new Map([
    [ITEMS.BF, ITEMS.GA],
    [ITEMS.Bow, ITEMS.Phantom_Dancer],
    [ITEMS.Rod, ITEMS.Locket],
    [ITEMS.Tear, ITEMS.Frozen_Heart],
    [ITEMS.Chain_West, ITEMS.Thornmail],
    [ITEMS.Negatron,ITEMS.Sword_Breaker],
    [ITEMS.Giants_Belt, ITEMS.Red_Buff],
    [ITEMS.Spatula, ITEMS.Knight],
]);

let recipeNegatron = new Map([
    [ITEMS.BF, ITEMS.Bloodthirster],
    [ITEMS.Bow, ITEMS.Cursed_Blade],
    [ITEMS.Rod, ITEMS.Ionic],
    [ITEMS.Tear, ITEMS.Hush],
    [ITEMS.Chain_West, ITEMS.Sword_Breaker],
    [ITEMS.Negatron, ITEMS.Dragons_Claw],
    [ITEMS.Giants_Belt, ITEMS.Zephyr],
    [ITEMS.Spatula, ITEMS.Hurricane],
]);

let recipeGiantsBelt = new Map([
    [ITEMS.BF, ITEMS.Zekes],
    [ITEMS.Bow, ITEMS.Titanic],
    [ITEMS.Rod, ITEMS.Morello],
    [ITEMS.Tear, ITEMS.Redemption],
    [ITEMS.Chain_West,ITEMS.Red_Buff],
    [ITEMS.Negatron, ITEMS.Zephyr],
    [ITEMS.Giants_Belt, ITEMS.Warmogs],
    [ITEMS.Spatula, ITEMS.Frozen_Mallet],
]);

let recipeSpatula = new Map([
    [ITEMS.BF, ITEMS.Youmuus],
    [ITEMS.Bow, ITEMS.BOTRK],
    [ITEMS.Rod, ITEMS.Yuumi],
    [ITEMS.Tear, ITEMS.Darkin],
    [ITEMS.Chain_West, ITEMS.Knight],
    [ITEMS.Negatron, ITEMS.Hurricane],
    [ITEMS.Giants_Belt, ITEMS.Frozen_Mallet],
    [ITEMS.Spatula, ITEMS.Force_Of_Nature],
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
    [ITEMS.Spatula, recipeSpatula]
]);

let ITEM_DESCRIPTION = new Map([
    [ITEMS.BF, "BF"],
    [ITEMS.Bow, "Bow"],
    [ITEMS.Rod, "Rod"],
    [ITEMS.Tear, "Tear"],
    [ITEMS.Negatron, "Negatron"],
    [ITEMS.Chain_West, "Chain_West"],
    [ITEMS.Giants_Belt, "Giants_Belt"],
    [ITEMS.Spatula, "Spatula"],

    [ITEMS.IE, "IE"], 
    [ITEMS.Rapidfire, "Rapidfire"], 
    [ITEMS.Rabadons, "Rabadons"], 
    [ITEMS.Seraphs, "Seraphs"], 
    [ITEMS.Divine, "Divine"], 
    [ITEMS.Gunblade, "Gunblade"], 
    [ITEMS.Spear, "Spear"], 
    [ITEMS.Rageblade, "Rageblade"], 
    [ITEMS.Statikk, "Statikk"], 
    [ITEMS.Ludens, "Ludens"],

    [ITEMS.Bloodthirster, "Bloodthirster"],
    [ITEMS.BOTRK, "BOTRK"],
    [ITEMS.Brawler, "Brawler"],
    [ITEMS.Cursed_Blade, "Cursed_Blade"],
    [ITEMS.Darkin, "Darkin"],
    [ITEMS.Dragons_Claw, "Dragons_Claw"],
    [ITEMS.Force_Of_Nature, "Force_Of_Nature"],
    [ITEMS.Frozen_Heart, "Frozen_Heart"],
    [ITEMS.Frozen_Mallet, "Frozen_Mallet"],
    [ITEMS.GA, "GA"],
    [ITEMS.Hurricane, "Hurricane"],
    [ITEMS.Hush, "Hush"],
    [ITEMS.Ionic, "Ionic"],
    [ITEMS.Knight, "Knight"],
    [ITEMS.Locket, "Locket"],
    [ITEMS.Morello, "Morello"],
    [ITEMS.Phantom_Dancer, "Phantom_Dancer"],
    [ITEMS.Red_Buff, "Red_Buff"],
    [ITEMS.Redemption, "Redemption"],
    [ITEMS.Sword_Breaker, "Sword_Breaker"],
    [ITEMS.Thornmail, "Thornmail"],
    [ITEMS.Titanic, "Titanic"],
    [ITEMS.Warmogs, "Warmogs"],
    [ITEMS.Youmuus, "Youmuus"],
    [ITEMS.Yuumi, "Yuumi"],
    [ITEMS.Zekes, "Zekes"],
    [ITEMS.Zephyr, "Zephyr"]
]);

let REVERSE_ITEM_DESCRIPTION = new Map([
    ["BF", ITEMS.BF],
    ["Bow", ITEMS.Bow],
    ["Rod", ITEMS.Rod],
    ["Tear", ITEMS.Tear],
    ["Negatron", ITEMS.Negatron],
    ["Chain_West", ITEMS.Chain_West],
    ["Giants_Belt", ITEMS.Giants_Belt],
    ["Spatula", ITEMS.Spatula]
]);

let permutations = [];
// array.push(x)

let startItems = [];
// let startItems = [ITEMS.BF, ITEMS.Bow, ITEMS.Rod, ITEMS.Tear];
// let startItems = [ITEMS.BF, ITEMS.Bow, ITEMS.Rod, ITEMS.Tear, ITEMS.BF, ITEMS.Bow, ITEMS.Tear, ITEMS.Rod, ITEMS.BF];
// let startItems = [ITEMS.Bow, ITEMS.Bow, ITEMS.Bow, ITEMS.Bow];

let closedList = [];        // for duplicates removal
let cleanResultItems = [];  // for html




const swap = function(A, index1, index2) {
    let temp = A[index2];
    A[index2] = A[index1];
    A[index1] = temp;
} 

const generate = function(k, A) {
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
                swap(A, i, k-1) // zero-indexed, the kth is at k-1
            } else {
                swap(A, 0, k-1);
            }
            generate(k - 1, A);
        }
    }

}

const addToClosedList = function(itemList) {
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

const interpretItems = function() {
    // PERMUTATIONS
    permutations.forEach(permutation => {
        let itemList = [];

        for (let i = 0; i < permutation.length; i+= 2) {
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

const showItems = function(){
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

const removeItem = function() {
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

const addItem = function(itemID) {
    let img = document.createElement("img");
    img.src = "img/" + itemID + ".png";
    img.id = itemID;
    img.onmousedown = removeItem;
    selectedItems.appendChild(img);
    startItems.push(REVERSE_ITEM_DESCRIPTION.get(itemID));
    // console.log(startItems);
}

const calculate = function() {
    permutations = [];
    closedList = [];
    cleanResultItems = [];
    generate(startItems.length, [...startItems]);
    
    interpretItems();
    showItems();
}

const init = function() {
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