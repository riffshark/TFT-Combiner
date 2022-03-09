const ITEMS = {
    "Archangel": 0,
    "Banshees_Claw": 1,
    "BF": 2,
    "Blue_Buff": 3,
    "Bow": 4,
    "Bramblewest": 5,
    "BT": 6,
    "Chain_West": 7,
    "Chalice": 8,
    "Emblem_Challanger": 9,
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
    "Zephyr": 62,
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
    [ITEMS.Spatula, ITEMS.Emblem_Challanger],
    [ITEMS.Sparring_Gloves, ITEMS.Last_Whisper],
]);

let recipeRod = new Map([
    [ITEMS.BF, ITEMS.Hextech_Gunblade],
    [ITEMS.Bow, ITEMS.Rageblade],
    [ITEMS.Rod, ITEMS.Rabadons],
    [ITEMS.Tear, ITEMS.Archangel],
    [ITEMS.Chain_West, ITEMS.Locket],
    [ITEMS.Negatron, ITEMS.Ionic_Spark],
    [ITEMS.Giants_Belt, ITEMS.Morello],
    [ITEMS.Spatula, ITEMS.Emblem_Arcanist],
    [ITEMS.Sparring_Gloves, ITEMS.Jeweled_Gauntlet],
]);

let recipeTear = new Map([
    [ITEMS.BF, ITEMS.Spear_Of_Shojin],
    [ITEMS.Bow, ITEMS.Statikk],
    [ITEMS.Rod, ITEMS.Archangel],
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
    [ITEMS.Giants_Belt, ITEMS.Zephyr],
    [ITEMS.Spatula, ITEMS.Emblem_Mutant],
    [ITEMS.Sparring_Gloves, ITEMS.Quicksilver],
]);

let recipeGiantsBelt = new Map([
    [ITEMS.BF, ITEMS.Zekes_Herald],
    [ITEMS.Bow, ITEMS.ZZ_Rot_Portal],
    [ITEMS.Rod, ITEMS.Morello],
    [ITEMS.Tear, ITEMS.Redemption],
    [ITEMS.Chain_West, ITEMS.Sunfire],
    [ITEMS.Negatron, ITEMS.Zephyr],
    [ITEMS.Giants_Belt, ITEMS.Warmogs],
    [ITEMS.Spatula, ITEMS.Emblem_Chemtech],
    [ITEMS.Sparring_Gloves, ITEMS.Banshees_Claw],
]);

let recipeSpatula = new Map([
    [ITEMS.BF, ITEMS.Emblem_Striker],
    [ITEMS.Bow, ITEMS.Emblem_Challanger],
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
    [ITEMS.Archangel, "Archangel"],
    [ITEMS.Banshees_Claw, "Banshees_Claw"],
    [ITEMS.BF, "BF"],
    [ITEMS.Blue_Buff, "Blue_Buff"],
    [ITEMS.Bow, "Bow"],
    [ITEMS.Bramblewest, "Bramblewest"],
    [ITEMS.BT, "BT"],
    [ITEMS.Chain_West, "Chain_West"],
    [ITEMS.Chalice, "Chalice"],
    [ITEMS.Deathblade, "Deathblade"],
    [ITEMS.Dragons_Claw, "Dragons_Claw"],
    [ITEMS.Emblem_Arcanist, "Emblem_Arcanist"],
    [ITEMS.Emblem_Assassin, "Emblem_Assassin"],
    [ITEMS.Emblem_Bruiser, "Emblem_Bruiser"],
    [ITEMS.Emblem_Challanger, "Emblem_Challanger"],
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
    [ITEMS.Zephyr, "Zephyr"],
    [ITEMS.ZZ_Rot_Portal, "ZZ_Rot_Portal"],
    [ITEMS.Edge_Of_Night, "Edge_Of_Night"],

]);

let ITEM_DESCRIPTION_FULL = new Map([
    [ITEMS.Archangel, "During combat, the holder gains 25 Ability Power every 5 seconds"],
    [ITEMS.Banshees_Claw, "When combat begins, the holder and all allies within 1 hex in the same row gain a shield that blocks the damage and effects of the first enemy Ability, up to 600 damage"],
    [ITEMS.BF, "BF"],
    [ITEMS.Blue_Buff, "The holder gains 50 Mana (including components). After casting their Ability, the holder gains 20 mana.\n[Unique - only 1 per champion]"],
    [ITEMS.Bow, "Bow"],
    [ITEMS.Bramblewest, "Grants 70 bonus Armor (including components). Negates 75% bonus damage from incoming critical strikes. On being hit by an attack, deal 75/100/150★ magic damage to all nearby enemies (once every 2.5 seconds)"],
    [ITEMS.BT, "Physical damage heals the holder for 33% of the damage dealt.\nUpon falling below 40% Health, the holder gains a 30% max Health shield that lasts up to 5 seconds."],
    [ITEMS.Chain_West, "Chain_West"],
    [ITEMS.Chalice, "When combat begins, the holder and all allies within 1 hex in the same row gain 30 Ability Power for the rest of combat"],
    [ITEMS.Deathblade, "The holder gains 50/75/100★ bonus Attack Damage (including components)."],
    [ITEMS.Dragons_Claw, "Grants 200 bonus Magic Resist (including components). On being hit by magic or true damage from an Ability, launch a fireball at the Ability's caster that deals magic damage equal to 18% of their max Health (0.5 second cooldown)"],
    [ITEMS.Emblem_Arcanist, "The holder gains the Arcanist trait.\n[Unique - Only One Per Champion]"],
    [ITEMS.Emblem_Assassin, "The holder gains the Assassin trait.\n[Unique - Only One Per Champion]"],
    [ITEMS.Emblem_Bruiser, "The holder gains the Bruiser trait.\n[Unique - Only One Per Champion]"],
    [ITEMS.Emblem_Challanger, "The holder gains the Challanger trait.\n[Unique - Only One Per Champion]"],
    [ITEMS.Emblem_Chemtech, "The holder gains the Chemtech trait.\n[Unique - Only One Per Champion]"],
    [ITEMS.Emblem_Clockwork, "The holder gains the Clockwork trait.\n[Unique - Only One Per Champion]"],
    [ITEMS.Emblem_Debonair, "The holder gains the Debonair trait.\n[Unique - Only One Per Champion]"],
    [ITEMS.Emblem_Enforcer, "The holder gains the Enforcer trait.\n[Unique - Only One Per Champion]"],
    [ITEMS.Emblem_Hextech, "The holder gains the Hextech trait.\n[Unique - Only One Per Champion]"],
    [ITEMS.Emblem_Innovator, "The holder gains the Innovator trait.\n[Unique - Only One Per Champion]"],
    [ITEMS.Emblem_Mercenery, "The holder gains the Mercenary trait.\n[Unique - Only One Per Champion]"],
    [ITEMS.Emblem_Mutant, "The holder gains the Mutant trait.\n[Unique - Only One Per Champion]"],
    [ITEMS.Emblem_Protector, "The holder gains the Protector trait.\n[Unique - Only One Per Champion]"],
    [ITEMS.Emblem_Scholar, "The holder gains the Scholar trait.\n[Unique - Only One Per Champion]"],
    [ITEMS.Emblem_Scrap, "The holder gains the Scrap trait.\n[Unique - Only One Per Champion]"],
    [ITEMS.Emblem_Sniper, "The holder gains the Sniper trait.\n[Unique - Only One Per Champion]"],
    [ITEMS.Emblem_Socialite, "The holder gains the Socialite trait.\n[Unique - Only One Per Champion]"],
    [ITEMS.Emblem_Striker, "The holder gains the Striker trait.\n[Unique - Only One Per Champion]"],
    [ITEMS.Frozen_Heart, "Reduces the Attack Speed of enemies within 2 hexes by 35%.\n[Unique - only 1 per champion]"],
    [ITEMS.GA, "GA"],
    [ITEMS.Gargoyle_Stoneplate, "The holder gains 18 Armor and 18 Magic Resist for each enemy targeting them"],
    [ITEMS.Giant_Slayer, "The holder's Abilities and attacks do 20% bonus damage. If the target has more than 1600 maximum Health, the bonus increases to 60%"],
    [ITEMS.Giants_Belt, "Giants_Belt"],
    [ITEMS.Hand_Of_Justice, "The holder gains both of the following:\n• +10 Attack Damage and +10 Ability Power.\n• Attacks and Abilities heal for 10% of damage dealt.\nAt the beginning of each planning phase, one of these buffs is increased to 33%"],
    [ITEMS.Hextech_Gunblade, "The holder's magic and true damage from Abilities heal them for 33% of the damage dealt. The holder also heals their lowest health ally for the same amount."],
    [ITEMS.IE, "The holder gains 75% Critical Strike Chance and 10% Critical Strike Damage. Each point of Critical Strike Chance above 100% becomes +1% Critical Strike Damage.\n[Unique - only 1 per champion]"],
    [ITEMS.Ionic_Spark, "Enemies within 3 hexes have their Magic Resist reduced by 50%. When they cast an Ability, they are zapped taking magic damage equal to 200% of their max Mana"],
    [ITEMS.Jeweled_Gauntlet, "The holder's magic and true damage from their Ability can critically strike. The holder gains 40% bonus Critical Strike Damage and 10 bonus Ability Power.\n[Unique - only 1 per champion]"],
    [ITEMS.Last_Whisper, "When the holder inflicts a critical hit, the target's Armor is reduced by 70% for 5 seconds. This effect does not stack.\n[Unique - only one per champion]"],
    [ITEMS.Locket, "When combat begins, the holder and all allies within 2 hexes in the same row gain a shield that blocks 300/350/400★ damage for 15 seconds"],
    [ITEMS.Morello, "When the holder deals magic or true damage with their Ability, they burn the target, dealing 20% of the target's maximum Health as true damage over 10 seconds and reducing healing by 50% for the duration of the burn.\n[Unique - only 1 per champion]"],
    [ITEMS.Negatron, "Negatron"],
    [ITEMS.Quicksilver, "The holder gains 20% bonus Attack Speed. The holder is immune to crowd control in combat for 15 seconds.\n[Unique - only 1 per champion]"],
    [ITEMS.Rabadons, "The holder gains 75 bonus Ability Power (including components)"],
    [ITEMS.Rageblade, "Attacks grant +6% bonus Attack Speed for the rest of combat.\nThis effect can stack any number of times."],
    [ITEMS.Rapid_Firecannon, "Increases the holder's Attack Range by 1 hex and grants 55% bonus Attack Speed (including components).\nThe holder's attacks can no longer miss"],
    [ITEMS.Redemption, "Every 5 seconds, the holder radiates an aura to allies within 1 hex, healing them for 18% of their missing Health. Affected allies take 25% reduced damage from multi-target abilities and attacks for 5 seconds"],
    [ITEMS.Rod, "Rod"],
    [ITEMS.Runaans_Hurricane, "The holder gains 15 bonus Attack Damage. The holder's attacks fire a bolt at another nearby enemy, dealing 75% of the wearer's Attack Damage as physical damage"],
    [ITEMS.Shroud_OF_Stillnes, "When combat begins, the holder shoots a beam straight ahead that delays affected enemies' first cast, increasing their max Mana by 35% until they cast.\n[Unique - only 1 per champion]"],
    [ITEMS.Sparring_Gloves, "Sparring_Gloves"],
    [ITEMS.Spatula, "Spatula"],
    [ITEMS.Spear_Of_Shojin, "The holder's attacks restore 8 additional Mana"],
    [ITEMS.Statikk, "The holder gains 10% bonus Attack Speed. Every third attack from the holder unleashes a chain lightning that bounces to 4 enemies, dealing 60 magic damage and reducing their Magic Resist by 50% for 5 seconds"],
    [ITEMS.Sunfire, "Every 2 seconds, a random enemy within 2 hexes is burned for 16% of their maximum health as true damage over 8 seconds. Any healing they receive is reduced by 50%.\n[Unique - only 1 per champion]"],
    [ITEMS.Tacticians, "Wearer's team gains +1 maximum team size"],
    [ITEMS.Tear, "Tear"],
    [ITEMS.Thiefs_Gloves, "At the beginning of each planning phase, the holder equips 2 temporary items. Temporary items increase in power based on your player level.\n[Consumes 3 item slots]"],
    [ITEMS.Titans_Resolve, "When the holder attacks or takes damage, they gain 2 Attack Damage and Ability Power.\nThis stacks up to 25 times, at which point the holder gains 25 Armor and Magic Resist"],
    [ITEMS.Warmogs, "Grants 1000 bonus Health (including components)"],
    [ITEMS.Zekes_Herald, "When combat begins, the holder and all allies within 1 hexes in the same row gain +30% Attack Speed for the rest of combat"],
    [ITEMS.Zephyr, "When combat begins, the holder summons a whirlwind on the opposite side of the arena that removes the closest enemy from combat for 5 seconds.\n[Unique - only 1 per champion]"],
    [ITEMS.ZZ_Rot_Portal, "At the start of combat, the holder taunts enemies within 4 hexes.\nWhen the holder dies, a Voidspawn arises taunting nearby enemies."],
    [ITEMS.Edge_Of_Night, "When the holder first drops below 50% health, they briefly enter stealth, becoming untargetable and shedding negative effects. After coming out of stealth, the holder gains an additional 40% bonus Attack Speed"],

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
            let description_full = ITEM_DESCRIPTION_FULL.get(item);
            let img = document.createElement("img");
            img.src = "img/" + description + ".png"
            img.alt = description;
            img.title = description + "\n" + description_full;
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