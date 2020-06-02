//DATA SECTION
/*Code for DbD Character Buider
 Author: "Vykaris"
 Current Version: 0.96
 Game Version: 2.2.X
 Date of current version: 7.11.2019*/
//var currentCharacter;
//declare lists for all game elements
//characters
var killers = [];
var survivors = [];
//perks
var killerPerks = [];
var survivorPerks = [];
//killer addon lists
var trapperAddons = [];
var wraithAddons = [];
var billyAddons = [];
var nurseAddons = [];
var mikeAddons = [];
var hagAddons = [];
var doctorAddons = [];
var huntressAddons = [];
var cannibalAddons = [];
var freddyAddons = [];
var pigAddons = [];
var clownAddons = [];
var spiritAddons = [];
var legionAddons = [];
var plagueAddons = [];
var ghostfaceAddons = [];
var demogorgonAddons = [];

//item addon lists
var flashlightAddons = [];
var medkitAddons = [];
var toolboxAddons = [];
var mapAddons = [];
var keyAddons = [];
//offerings
var survivorOfferings = [];
var killerOfferings = [];
//Survivor Items
var survivorItems = [];
//site Path
var filePath = "http://www.dbdbuilder.net/graphics/";
var buildPath = "http://www.dbdbuilder.net/index.html";
var soundPath = "http://www.dbdbuilder.net/sounds/";
//Menu items per page variables;
var columns = 4;
var rows = 8;
//Text Only Test Switcher
var loading = true;
//rng difficulty
var difficulty = 0;
//animation & sound settings
var doAnimation = true;
var doSound = true;
//gui lock feature
var guiIsLocked = false;
//Audio sound
var rngAudio = new Audio(soundPath + "timer5s.ogg");
//characer base class section
function DbDChar(charName, charType) {
    this.name = charName;
    this.type = charType;
    this.itemOrAbility;
    this.portrait;
}
//end basic class section
//NOTE KILLERS ARE ADDED MUCH LATER IN THE CODE
//begin basic survivor section
function selectSurvivor() {
    var defaultSurvivor = new DbDChar("Default Survivor", "survivor");
    defaultSurvivor.repairTime = 131313; //placeholder value
    defaultSurvivor.healTime = 131313; //placeholder value
    defaultSurvivor.walkSpeed = 131313; //placeholder value
    defaultSurvivor.sprintSpeed = 131313; //placeholder value
    defaultSurvivor.crouchSpeed = 131313; //placeholder value
    return defaultSurvivor;
}

function selectLaurie() {
    var laurie = new selectSurvivor();
    laurie.name = "Laurie Strode";
    laurie.portrait = "Laruie_manual.png";
    return laurie;
}

//ADD
survivors.push(selectLaurie());

function selectDwight() {
    var dwight = new selectSurvivor();
    dwight.name = "Dwight Fairfield";
    dwight.portrait = "Dbd-survivor-dwight-large.png";
    return dwight;
}

//ADD
survivors.push(selectDwight());

function selectMeg() {
    var meg = new selectSurvivor();
    meg.name = "Meg Thomas";
    meg.portrait = "Dbd-survivor-meg-large.png";
    return meg;
}

//ADD
survivors.push(selectMeg());

function selectJake() {
    var jake = new selectSurvivor();
    jake.name = "Jake Park";
    jake.portrait = "Dbd-survivor-jake-large.png";
    return jake;
}

//ADD
survivors.push(selectJake());

function selectClaud() {
    var claud = new selectSurvivor();
    claud.name = "Claudette Morel";
    claud.portrait = "Dbd-survivor-claudette-large.png";
    return claud;
}

//ADD
survivors.push(selectClaud());

function selectNea() {
    var nea = new selectSurvivor();
    nea.name = "Nea Karlsson";
    nea.portrait = "Nea_Karlsson.png";
    return nea;
}

//ADD
survivors.push(selectNea());

function selectAce() {
    var ace = new selectSurvivor();
    ace.name = "Ace Visconti";
    ace.portrait = "Portrait_ace.png";
    return ace;
}

//ADD
survivors.push(selectAce());

//BILL
function selectBill() {
    var bill = new selectSurvivor();
    bill.name = "William Overbeck";
    bill.portrait = "Dbd-survivor-bill-large.png";
    return bill;
}
//ADD
survivors.push(selectBill());

//BILL
function selectMin() {
    var fMin = new selectSurvivor();
    fMin.name = "Feng Min";
    fMin.portrait = "Dbd-survivor-large-feng.png";
    return fMin;
}
//ADD
survivors.push(selectMin());

function selectDavid() {
    var david = new selectSurvivor();
    david.name = "David King";
    david.portrait = "Portrait_david.png";
    return david;
}

//ADD
survivors.push(selectDavid());

function selectQuentin() {
    var quent = new selectSurvivor();
    quent.name = "Quentin Smith";
    quent.portrait = "Dbd-survivor-large-quentin.png";
    return quent;
}

//ADD
survivors.push(selectQuentin());

function selectTapp() {
    var tapp = new selectSurvivor();
    tapp.name = "David Tapp";
    tapp.portrait = "Tapp_Portrait.png";
    return tapp;
}

//ADD
survivors.push(selectTapp());

function selectKate() {
    var kate = new selectSurvivor();
    kate.name = "Kate Denson";
    kate.portrait = "kate_port.png";
    return kate;
}

//ADD
survivors.push(selectKate());

function selectAdam() {
    var adam = new selectSurvivor();
    adam.name = "Adam Francis";
    adam.portrait = "adam_port.png";
    return adam;
}

//ADD
survivors.push(selectAdam());

function selectJeff() {
    var jeff = new selectSurvivor();
    jeff.name = "Jeff Johansen";
    jeff.portrait = "JeffPortrait.png";
    return jeff;
}

//ADD
survivors.push(selectJeff());

function selectJane() {
    var jane = new selectSurvivor();
    jane.name = "Jane Romero";
    jane.portrait = "jane_port.png";
    return jane;
}

//ADD
survivors.push(selectJane());

function selectAsh() {
    var ash = new selectSurvivor();
    ash.name = "Ash Williams";
    ash.portrait = "ash_port.png";
    return ash;
}

//ADD
survivors.push(selectAsh());

function selectNancy() {
    var nancy = new selectSurvivor();
    nancy.name = "Nancy Wheeler";
    nancy.portrait = "QF_storeBackground.png";
    return nancy;
}

//ADD
survivors.push(selectNancy());

function selectSteve() {
    var steve = new selectSurvivor();
    steve.name = "Steve Harrington";
    steve.portrait = "QM_storeBackground.png";
    return steve;
}

//ADD
survivors.push(selectSteve());

//ADD ANY NEW SURVIVORS ABOVE HERE  AND THEN PUSH TO LIST -- P L O X
//end base survivor section
//begin loadout item section

//base loadout item
function DbDItem(name, effect, rarity, tooltip, icon) {
    this.name = name;
    this.effect = effect;
    this.rarity = rarity;
    this.tooltip = tooltip;
    this.icon = icon;
    this.isRedacted = false;
}

//base survivor equipment
function survItems(name, effect, rarity, tooltip, icon, itype, itarget, meterAmount, meterType) {
    var item = new DbDItem(name, effect, rarity, tooltip, icon);
    item.type = itype;
    item.target = itarget;
    item.meterType = meterType;
    item.meterAmount = meterAmount;
    return item;
}

//Begin Specific Survivor Equipment Items Section
//Medkits
function campingAidKit() {
    var sItem = survItems("Camping Aid Kit", ["Healing speed considerably increased", "Gain self-healing ability"], "Common", "Grants self-heal and considerable healing speed increase", "IconItems_rundownAidKit.png", "First Aid Kit", ["extra", "extra"], 8, "charges");
    return sItem;
}

//ADD
survivorItems.push(campingAidKit());

function firstAidKit() {
    var sItem = survItems("First Aid Kit", ["Healing speed considerably increased", "Gain self-healing ability"], "Uncommon", "Grants self-heal and considerable healing speed increase", "IconItems_firstAidKit.png", "First Aid Kit", ["extra", "extra"], 16, "charges");
    return sItem;
}

//ADD
survivorItems.push(firstAidKit());

function emergencyMedkit() {
    var sItem = survItems("Emergency Med-Kit", ["Healing speed tremendously increased", "Gain self-healing ability", "Moderately decreased charge consumption"], "Rare", "Grants self-heal and tremendous healing speed increase", "iconItems_medkit.png", "First Aid Kit", ["extra", "extra", "extra"], 16, "charges");
    return sItem;
}

//ADD
survivorItems.push(emergencyMedkit());

function rangerMedkit() {
    var sItem = survItems("Ranger Med-Kit", ["Healing speed considerably increased", "Gain self-healing ability", "Increased success and bonus zones"], "Very Rare", "Grants self-heal and considerable healing speed increase", "IconItems_rangersAidKit.png", "First Aid Kit", ["extra", "extra", "extra"], 24, "charges");
    return sItem;
}

//ADD
survivorItems.push(rangerMedkit());

//Toolboxes
function toolbox() {
    var sItem = survItems("Toolbox", ["Grants sabotage ability", "Moderately increased repair speed"], "Uncommon", "Grants sabotage and increased repair speed.", "IconItems_toolbox.png", "Toolbox", ["extra", "extra"], 130, "charges");
    return sItem;
}

//ADD
survivorItems.push(toolbox());

function wornOutTools() {
    var sItem = survItems("Worn-Out Tools", ["Grants sabotage ability", "Moderately increased repair speed", "Slightly decreased success zones"], "Common", "Grants sabotage and increased repair speed.", "IconItems_toolboxWornOut.png", "Toolbox", ["extra", "extra", "extra"], 80, "charges");
    return sItem;
}

//ADD
survivorItems.push(wornOutTools());

function mechanicsToolbox() {
    var sItem = survItems("Mechanic's Toolbox", ["Grants sabotage ability", "Considerably increased repair speed", "Moderately reduced sabotage speed"], "Rare", "Grants sabotage and increased repair speed.", "IconItems_toolboxMechanics.png", "Toolbox", ["extra", "extra", "extra"], 80, "charges");
    return sItem;
}

//ADD
survivorItems.push(mechanicsToolbox());

function commodiousToolbox() {
    var sItem = survItems("Commodious Toolbox", ["Grants sabotage ability", "Moderately increased repair speed"], "Rare", "Grants sabotage and increased repair speed.", "IconItems_toolboxCommodious.png", "Toolbox", ["extra", "extra"], 180, "charges");
    return sItem;
}

//ADD
survivorItems.push(commodiousToolbox());

function engineersToolbox() {
    var sItem = survItems("Engineer's Toolbox", ["Tremendously increased repair speed"], "Very Rare", "Grants increased repair speed.", "IconItems_toolboxEngineers.png", "Toolbox", ["extra"], 80, "charges");
    return sItem;
}

//ADD
survivorItems.push(engineersToolbox());

function alexsToolbox() {
    var sItem = survItems("Alex's Toolbox", ["Slightly increased repair speed", "Grants sabotage ability", "Moderately increased sabotage speed"], "Very Rare", "Grants sabotage and increased repair speed.", "IconItems_toolboxAlexs.png", "Toolbox", ["extra", "extra", "extra"], 130, "charges");
    return sItem;
}

//ADD
survivorItems.push(alexsToolbox());

//Flashlights
function flashlight() {
    var sItem = survItems("Flashlight", ["Blinds the killer", "Destroys hag traps"], "Uncommon", "Blinds the killer when aimed accurately", "Yellow_Flashlight.png", "Flashlight", ["extra", "extra"], 8, "seconds");
    return sItem;
}

//ADD
survivorItems.push(flashlight());

function sportFlashlight() {
    var sItem = survItems("Sport Flashlight", ["Blinds the killer", "Destroys hag traps", "Slightly increased accuracy", "Slightly decreased battery consumption"], "Rare", "Blinds the killer when aimed accurately", "IconItems_flashlightSport.png", "Flashlight", ["extra", "extra", "extra", "extra"], 8, "seconds");
    return sItem;
}

//ADD
survivorItems.push(sportFlashlight());

function utilityFlashlight() {
    var sItem = survItems("Utility Flashlight", ["Blinds the killer", "Destroys hag traps", "Slightly reduced accuracy", "Moderately increased effects"], "Very Rare", "Blinds the killer when aimed accurately", "IconItems_flashlightUtility.png", "Flashlight", ["extra", "extra", "extra", "extra"], 12, "seconds");
    return sItem;
}

//ADD
survivorItems.push(utilityFlashlight());

//Keys
function brokenKey() {
    var sItem = survItems("Broken Key", ["Does nothing on its own"], "Rare", "Does nothing on its own", "IconItems_brokenKey.png", "Key", ["extra"], 10, "seconds");
    return sItem;
}

//ADD
survivorItems.push(brokenKey());

function dullKey() {
    var sItem = survItems("Dull Key", ["Consume to open the hatch"], "Very Rare", "Consume to open the hatch", "IconItems_dullKey.png", "Key", ["extra"], 5, "seconds");
    return sItem;
}

//ADD
survivorItems.push(dullKey());

function skeletonKey() {
    var sItem = survItems("Skeleton Key", ["Consume to open the hatch"], "Ultra Rare", "Consume to open the hatch", "IconItems_key.png", "Key", ["extra"], 30, "seconds");
    return sItem;
}

//ADD
survivorItems.push(skeletonKey());

//Maps
function sMap() {
    var sItem = survItems("Map", ["Stars with one generator tracked", "Track generators within an 8 meter range"], "Rare", "Tracks generators", "IconItems_map.png", "Map", ["extra", "extra"], 20, "seconds");
    return sItem;
}

//ADD
survivorItems.push(sMap());

function rainbowMap() {
    var sItem = survItems("Rainbow Map", ["Stars with three things tracked", "Track all objectives within an 8 meter range"], "Ultra Rare", "Tracks objectives", "IconItems_rainbowMap.png", "Map", ["extra", "extra"], 20, "seconds");
    return sItem;
}

//ADD
survivorItems.push(rainbowMap());
//Chinese Firecracker
function chineseFirecracker() {
    var sItem = survItems("Chinese Firecracker", ["Distracts the Killer.", "Can blind and deafen the killer temporarily."], "Common", "Explosive distraction device.", "IconItems_chineseFirecracker.png", "Chinese Firecracker", ["extra", "extra"], 1, "explosive");
    sItem.isRedacted = true;
    return sItem;
}
//ADD
survivorItems.push(chineseFirecracker());

function willOWisp() {
    var sItem = survItems("Will O' Wisp", ["item text", "item text"], "Uncommon", "item text", "iconItems_flashlightHalloween.png", "Flashlight", ["extra", "extra"], 8, "seconds");
    sItem.isRedacted = true;
    return sItem;
}

//ADD
survivorItems.push(willOWisp());

function lunchbox() {
    var sItem = survItems("All Hallows' Eve Lunchbox", ["item text", "item text"], "Common", "item text", "iconItems_medkitHalloween.png", "First Aid Kit", ["extra", "extra"], 16, "charges");
    sItem.isRedacted = true;
    return sItem;
}

//ADD
survivorItems.push(lunchbox());

function winterCracker() {
    var sItem = survItems("Winter Party Starter", ["item text", "item text"], "Rare", "item text", "iconItems_winterEventFirecracker.png", "Chinese Firecracker", ["extra", "extra"], 1, "explosive");
    sItem.isRedacted = true;
    return sItem;
}

//ADD
survivorItems.push(winterCracker());

//ADD ANY NEW SURVIVOR ITEMS ABOVE THIS TEXT
//End Specific Survivor Equipment Items Section

//base add on Section
function selectAddOn(name, effect, rarity, tooltip, icon, combinesWith, itarget) {
    var addOn = new DbDItem(name, effect, rarity, tooltip, icon, combinesWith, itarget);
    addOn.combinesWith = combinesWith;
    addOn.target = itarget;
    addOn.isSelected = false;
    addOn.type = combinesWith;
    return addOn;
}

//Begin specific add on Section
//Specific survivor Add-ons
//medkit Add-ons
function bandages() {
    var addon = selectAddOn("Bandages", ["Add 6 charges to medkit."], "Common", "Add 6 charges to medkit.", "IconAddon_bandages.png", "First Aid Kit", ["extra"]);
    return addon;
}

//ADD
medkitAddons.push(bandages());

function butterflyTape() {
    var addon = selectAddOn("Butterfly Tape", ["Slightly increased healing speed."], "Common", "Slightly increased healing speed.", "IconAddon_butterflyTape.png", "First Aid Kit", ["extra"]);
    return addon;
}

//ADD
medkitAddons.push(butterflyTape());

function rubberGloves() {
    var addon = selectAddOn("Rubber Gloves", ["Slightly decreased healing skill check difficulty."], "Common", "Slightly decreased healing skill check difficulty.", "IconAddon_gloves.png", "First Aid Kit", ["extra"]);
    return addon;
}

//ADD
medkitAddons.push(rubberGloves());

function medicalScissors() {
    var addon = selectAddOn("Medical Scissors", ["Moderately increased healing speed."], "Uncommon", "Moderately increased healing speed.", "IconAddon_scissors.png", "First Aid Kit", ["extra"]);
    return addon;
}

//ADD
medkitAddons.push(medicalScissors());

function needleAndThread() {
    var addon = selectAddOn("Needle & Thread", ["Slightly increased chance to trigger a skill check.", "Considerably reduced success zones.", "Moderately increased healing speed."], "Uncommon", "Moderately decreased healing skill check difficulty.", "IconAddon_needAndThread.png", "First Aid Kit", ["extra", "extra", "extra"]);
    return addon;
}

//ADD
medkitAddons.push(needleAndThread());

function gauzeRoll() {
    var addon = selectAddOn("Gauze Roll", ["Adds 8 charges to the medkit."], "Uncommon", "Adds 8 charges to the medkit.", "IconAddon_gauseRoll.png", "First Aid Kit", ["extra"]);
    return addon;
}

//ADD
medkitAddons.push(gauzeRoll());

function sponge() {
    var addon = selectAddOn("Sponge", ["Moderately decreased skill check difficulty."], "Uncommon", "Moderately decreased skill check difficulty.", "IconAddon_sponge.png", "First Aid Kit", ["extra"]);
    return addon;
}

//ADD
medkitAddons.push(sponge());

function selfAdherentWrap() {
    var addon = selectAddOn("Self Adherent Wrap", ["Adds 8 charges to the medkit.", "Slightly increased healing speed."], "Uncommon", "Adds 8 charges to the medkit. Increased heal speed.", "IconAddon_selfAdherentWrap.png", "First Aid Kit", ["extra", "extra"]);
    return addon;
}

//ADD
medkitAddons.push(selfAdherentWrap());

function gelDressings() {
    var addon = selectAddOn("Gel Dressings", ["Adds 10 charges to the medkit."], "Rare", "Adds 10 charges to the medkit.", "IconAddon_gelDressings.png", "First Aid Kit", ["extra"]);
    return addon;
}

//ADD
medkitAddons.push(gelDressings());

function stypticAgent() {
    var addon = selectAddOn("Styptic Agent", ["25% reduction in charges.", "Instantly heal one state on secondary action", "Consumes medkit on use."], "Very Rare", "Insta heal.", "IconAddon_stypticAgent.png", "First Aid Kit", ["extra", "extra", "extra"]);
    return addon;
}

//ADD
medkitAddons.push(stypticAgent());

function abdominalDressing() {
    var addon = selectAddOn("Abdominal Dressing", ["Considerably increased healing speed.", "25% reduction in charges."], "Rare", "Reduced charges, increase heal speed.", "IconAddon_abdominalDressing.png", "First Aid Kit", ["extra", "extra"]);
    return addon;
}

//ADD
medkitAddons.push(abdominalDressing());

function surgicalSuture() {
    var addon = selectAddOn("Surgical Suture", ["Slightly increased chance for a skill check.", "Moderate reduction in skill check success zones.", "Moderately increased healing speed."], "Rare", "Reduced skill check success, increased heal speed.", "IconAddon_surgicalSuture.png", "First Aid Kit", ["extra", "extra", "extra"]);
    return addon;
}

//ADD
medkitAddons.push(surgicalSuture());

function antiHemoragicSyringe() {
    var addon = selectAddOn("Anti-Hemorrhagic Syringe", ["50% reduction in charges.", "Completely heal on secondary action", "Consumes medkit on use."], "Ultra Rare", "Insta heal.", "IconAddon_syringe.png", "First Aid Kit", ["extra", "extra", "extra"]);
    return addon;
}

//ADD
medkitAddons.push(antiHemoragicSyringe());

//ADD ADDITIONAL ITEMS OF THIS TYPE ABOVE THIS LINE
//toolbox Add-ons
function cleanRag() {
    var addon = selectAddOn("Clean Rag", ["Slightly increased repair speed."], "Common", "Slightly increased repair speed.", "IconAddon_cleanRag.png", "Toolbox", ["extra"]);
    return addon;
}

//ADD
toolboxAddons.push(cleanRag());

function scraps() {
    var addon = selectAddOn("Scraps", ["Adds 15 charges to the toolbox."], "Common", "Adds 15 charges to the toolbox.", "IconAddon_scraps.png", "Toolbox", ["extra"]);
    return addon;
}

//ADD
toolboxAddons.push(scraps());

function springClamp() {
    var addon = selectAddOn("Spring Clamp", ["Slightly increased skill check success zones."], "Common", "Slightly increased skill check success zones.", "IconAddon_springClamp.png", "Toolbox", ["extra"]);
    return addon;
}

//ADD
toolboxAddons.push(springClamp());

function gripWrench() {
    var addon = selectAddOn("Grip Wrench", ["Moderately increased skill check success zones."], "Uncommon", "Moderately increased skill check success zones.", "IconAddon_gripWrench.png", "Toolbox", ["extra"]);
    return addon;
}

//ADD
toolboxAddons.push(gripWrench());

function instructions() {
    var addon = selectAddOn("Instructions", ["Moderately increased toolbox efficiency."], "Uncommon", "Moderately increased toolbox efficiency.", "IconAddon_instructions.png", "Toolbox", ["extra"]);
    return addon;
}

//ADD
toolboxAddons.push(instructions());

function wireSpool() {
    var addon = selectAddOn("Wire Spool", ["Adds 30 charges to the toolbox."], "Uncommon", "Adds 30 charges to the toolbox.", "IconAddon_spoolOfWire.png", "Toolbox", ["extra"]);
    return addon;
}

//ADD
toolboxAddons.push(wireSpool());

function protectiveGloves() {
    var addon = selectAddOn("Protective Gloves", ["Slightly increased chance to trigger a sabotage skill check.", "Slightly decreased sabotage skill check difficulty.", "Considerably reduced fail penalty."], "Uncommon", "Decreased sabotage skill check difficulty.", "IconAddon_protectiveGloves.png", "Toolbox", ["extra", "extra", "extra"]);
    return addon;
}

//ADD
toolboxAddons.push(protectiveGloves());

function cuttingWire() {
    var addon = selectAddOn("Cutting Wire", ["Slightly increased sabotage speed."], "Uncommon", "Slightly increased sabotage speed.", "IconAddon_cuttingWire.png", "Toolbox", ["extra"]);
    return addon;
}

//ADD
toolboxAddons.push(cuttingWire());

function socketSwivels() {
    var addon = selectAddOn("Socket Swivels", ["Moderately increased repair speed."], "Uncommon", "Moderately increased repair speed.", "IconAddon_socketSwivels.png", "Toolbox", ["extra"]);
    return addon;
}

//ADD
toolboxAddons.push(socketSwivels());

function hacksaw() {
    var addon = selectAddOn("Hacksaw", ["Moderately increased sabotage speed."], "Rare", "Moderately increased sabotage speed.", "IconAddon_metalSaw.png", "Toolbox", ["extra"]);
    return addon;
}

//ADD
toolboxAddons.push(hacksaw());

function brandNewPart() {
    var addon = selectAddOn("Brand New Part", ["50% reduction in charges.", "Consumes the toolbox to instantly repair a generator."], "Ultra Rare", "Insta gen repair.", "IconAddon_brandNewPart.png", "Toolbox", ["extra", "extra"]);
    return addon;
}

//ADD
toolboxAddons.push(brandNewPart());

//ADD ADDITIONAL ITEMS OF THIS TYPE ABOVE THIS LINE
//flashlight Add-ons
function battery() {
    var addon = selectAddOn("Battery", ["Add 2 seconds to flashlight."], "Common", "Add 2 seconds to flashlight.", "IconAddon_battery.png", "Flashlight", ["extra"]);
    return addon;
}

//ADD
flashlightAddons.push(battery());

function leatherGrip() {
    var addon = selectAddOn("Leather Grip", ["Slight increase to accuracy."], "Common", "Slight increase to accuracy.", "IconAddon_leatherGrip.png", "Flashlight", ["extra"]);
    return addon;
}

//ADD
flashlightAddons.push(leatherGrip());

function powerBulb() {
    var addon = selectAddOn("Power Bulb", ["Slight increase to effect."], "Common", "Slight increase to effect.", "IconAddon_powerBulb.png", "Flashlight", ["extra"]);
    return addon;
}

//ADD
flashlightAddons.push(powerBulb());

function wideLens() {
    var addon = selectAddOn("Wide Lens", ["Moderately widens beam.", "Slightly decreased range."], "Common", "Wider beam but reduced range.", "IconAddon_wideLens.png", "Flashlight", ["extra", "extra"]);
    return addon;
}

//ADD
flashlightAddons.push(wideLens());

function heavyDutyBattery() {
    var addon = selectAddOn("Heavy Duty Battery", ["Add 4 seconds to flashlight."], "Uncommon", "Add 4 seconds to flashlight.", "IconAddon_heavyDutyBattery.png", "Flashlight", ["extra"]);
    return addon;
}

//ADD
flashlightAddons.push(heavyDutyBattery());

function lowAmpFilament() {
    var addon = selectAddOn("Low Amp Filament", ["Moderately decreased battery consumption."], "Uncommon", "Moderately decreased battery consumption.", "IconAddon_threadedFilament.png", "Flashlight", ["extra"]);
    return addon;
}

//ADD
flashlightAddons.push(lowAmpFilament());

function tirOptic() {
    var addon = selectAddOn("Tir Optic", ["Moderately increased effect."], "Uncommon", "Moderately increased effect.", "IconAddon_tirOptic.png", "Flashlight", ["extra"]);
    return addon;
}

//ADD
flashlightAddons.push(tirOptic());

function focusLens() {
    var addon = selectAddOn("Focus Lens", ["Slightly tightens beam.", "Slightly increased range.", "Slightly increased power."], "Uncommon", "Inceased power,range, and accuracy.", "IconAddon_focusLens.png", "Flashlight", ["extra", "extra", "extra"]);
    return addon;
}

//ADD
flashlightAddons.push(focusLens());

function rubberGrip() {
    var addon = selectAddOn("Rubber Grip", ["Moderately increased accuracy."], "Uncommon", "Moderately increased accuracy.", "IconAddon_rubberGrip.png", "Flashlight", ["extra"]);
    return addon;
}

//ADD
flashlightAddons.push(rubberGrip());

function hesl() {
    var addon = selectAddOn("High-End Sapphire Lens", ["Moderately widens beam.", "Slightly increased range.", "Moderately increased power."], "Very Rare", "Inceased power,range, and accuracy.", "IconAddon_highEndSapphireLens.png", "Flashlight", ["extra", "extra", "extra"]);
    return addon;
}

//ADD
flashlightAddons.push(hesl());

function intenseHalogen() {
    var addon = selectAddOn("Intense Halogen", ["Considerably increased effect."], "Rare", "Considerably increased effect.", "IconAddon_intenseHalogen.png", "Flashlight", ["extra"]);
    return addon;
}

//ADD
flashlightAddons.push(intenseHalogen());

function longLifeBattery() {
    var addon = selectAddOn("Long Life Battery", ["Add 6 seconds to flashlight."], "Rare", "Add 6 seconds to flashlight.", "IconAddon_longLifeBattery.png", "Flashlight", ["extra"]);
    return addon;
}

//ADD
flashlightAddons.push(longLifeBattery());

function oddBulb() {
    var addon = selectAddOn("Odd Bulb", ["Tremendously increased effect.", "Moderately increased battery consumption."], "Ultra Rare", "Tremendously increased effect and less battery life.", "IconAddon_oddBulb.png", "Flashlight", ["extra", "extra"]);
    return addon;
}

//ADD
flashlightAddons.push(oddBulb());

//ADD ADDITIONAL ITEMS OF THIS TYPE ABOVE THIS LINE
//key Add-ons
function prayerRope() {
    var addon = selectAddOn("Prayer Rope", ["Add 10 seconds to keys."], "Common", "Add 10 seconds to keys.", "IconAddon_prayerRope.png", "Key", ["extra"]);
    return addon;
}

//ADD
keyAddons.push(prayerRope());

function erodedToken() {
    var addon = selectAddOn("Eroded Token", ["See survivor auras at a 24m range."], "Uncommon", "See survivor auras at a 24m range.", "IconAddon_tokenErroded.png", "Key", ["extra"]);
    return addon;
}

//ADD
keyAddons.push(erodedToken());

function prayerBeads() {
    var addon = selectAddOn("Prayer Beads", ["Add 15 seconds to keys."], "Uncommon", "Add 15 seconds to keys.", "IconAddon_prayerBeads.png", "Key", ["extra"]);
    return addon;
}

//ADD
keyAddons.push(prayerBeads());

function scratchedPearl() {
    var addon = selectAddOn("Scratched Pearl", ["Moderately increased key aura reading range."], "Uncommon", "Moderately increased key aura reading range.", "IconAddon_scratchedPearl.png", "Key", ["extra"]);
    return addon;
}

//ADD
keyAddons.push(scratchedPearl());

function goldToken() {
    var addon = selectAddOn("Gold Token", ["See survivor auras at a 48m range."], "Rare", "See survivor auras at a 48m range.", "IconAddon_tokenGold.png", "Key", ["extra"]);
    return addon;
}

//ADD
keyAddons.push(goldToken());

function bloodAmber() {
    var addon = selectAddOn("Blood Amber", ["See killer auras at a 32m range. Expends more energy."], "Very Rare", "See killer auras at a 32m range. Expends more energy.", "IconAddon_bloodAmber.png", "Key", ["extra"]);
    return addon;
}

//ADD
keyAddons.push(bloodAmber());

function milkyGlass() {
    var addon = selectAddOn("Milky Glass", ["When opening the hatch lose this item instead of the key itself."], "Very Rare", "When opening the hatch lose this item instead of the key itself.", "IconAddon_milkyGlass.png", "Key", ["extra"]);
    return addon;
}

//ADD
keyAddons.push(milkyGlass());

function weavedRing() {
    var addon = selectAddOn("Weaved Ring", ["Upon death lose this item instead of the key itself."], "Very Rare", "Upon death lose this item instead of the key itself.", "IconAddon_weavedRing.png", "Key", ["extra"]);
    return addon;
}

//ADD
keyAddons.push(weavedRing());

function uniqueRing() {
    var addon = selectAddOn("Unique Wedding Ring", ["Upon death lose this item instead of the key itself."], "Very Rare", "Upon death lose this item instead of the key itself.", "iconAddon_uniqueRing.png", "Key", ["extra"]);
    return addon;
}

//ADD
keyAddons.push(uniqueRing());

//ADD ADDITIONAL ITEMS OF THIS TYPE ABOVE THIS LINE
//map Add-ons
function mapAddendum() {
    var addon = selectAddOn("Map Addendum", ["Add 5 seconds to maps."], "Common", "Add 5 seconds to maps.", "IconAddon_mapAddendum.png", "Map", ["extra"]);
    return addon;
}

//ADD
mapAddons.push(mapAddendum());

function glassBead() {
    var addon = selectAddOn("Glass Bead", ["Adds ability to create markers that other survivors can see."], "Uncommon", "Adds ability to create markers that other survivors can see.", "IconAddon_beadGlass.png", "Map", ["extra"]);
    return addon;
}

//ADD
mapAddons.push(glassBead());

function redTwine() {
    var addon = selectAddOn("Red Twine", ["Adds the ability to track killer objects."], "Uncommon", "Adds the ability to track killer objects.", "IconAddon_ropeRed.png", "Map", ["extra"]);
    return addon;
}

//ADD
mapAddons.push(redTwine());

function retardantJelly() {
    var addon = selectAddOn("Retardant Jelly", ["Moderately slows the map burning rate."], "Uncommon", "Moderately slows the map burning rate.", "IconAddon_retardantJelly.png", "Map", ["extra"]);
    return addon;
}

//ADD
mapAddons.push(retardantJelly());

function unusualStamp() {
    var addon = selectAddOn("Unusual Stamp", ["Moderately Increases the range of the map tracking ability."], "Uncommon", "Moderately Increases the range of the map tracking ability.", "IconAddon_stampUnusual.png", "Map", ["extra"]);
    return addon;
}

//ADD
mapAddons.push(unusualStamp());

function yellowWire() {
    var addon = selectAddOn("Yellow Wire", ["Adds the ability to track exit doors."], "Uncommon", "Adds the ability to track exit doors.", "IconAddon_ropeYellow.png", "Map", ["extra"]);
    return addon;
}

//ADD
mapAddons.push(yellowWire());

function blackSilkCord() {
    var addon = selectAddOn("Black Silk Cord", ["Adds the ability to track the hatch."], "Rare", "Adds the ability to track the hatch.", "IconAddon_ropeBlack.png", "Map", ["extra"]);
    return addon;
}

//ADD
mapAddons.push(blackSilkCord());

function oddStamp() {
    var addon = selectAddOn("Odd Stamp", ["Considerably increases the range of the map tracking ability."], "Rare", "Considerably increases the range of the map tracking ability.", "IconAddon_stampOdd.png", "Map", ["extra"]);
    return addon;
}

//ADD
mapAddons.push(oddStamp());

function crystalBead() {
    var addon = selectAddOn("Crystal Bead", ["All survivors see map auras when it is read."], "Very Rare", "All survivors see map auras when it is read.", "IconAddon_beadCrystal.png", "Map", ["extra"]);
    return addon;
}

//ADD
mapAddons.push(crystalBead());

//ADD ADDITIONAL ITEMS OF THIS TYPE ABOVE THIS LINE -- PLZ PLZ PLZ

//Specific killer Add-ons
//Trapper Add-ons
function serratedJaws() {
    var addon = selectAddOn("Serrated Jaws", ["Traps infict heavy bleeding until the effects are healed."], "Uncommon", "Traps infict heavy bleeding until the effects are healed.", "IconAddon_serratedJaws.png", "Trapper", ["extra"]);
    return addon;
}

//ADD
trapperAddons.push(serratedJaws());

function strongCoilSpring() {
    var addon = selectAddOn("Strong Coil Spring", ["Trap escape difficulty slightly increased.", "Trap rescue time slightly increased.", "Trap setting time slightly increased."], "Common", "Increase escape and rescue difficulty of traps.", "IconAddon_coilSpring.png", "Trapper", ["extra", "extra", "extra"]);
    return addon;
}

//ADD
trapperAddons.push(strongCoilSpring());

function trapperGloves() {
    var addon = selectAddOn("Trapper Gloves", ["Trap setting time slightly decreased."], "Common", "Trap setting time slightly decreased.", "IconAddon_trapperGloves.png", "Trapper", ["extra"]);
    return addon;
}

//ADD
trapperAddons.push(trapperGloves());

function logwoodDye() {
    var addon = selectAddOn("Logwood Dye", ["Moderately darkens traps."], "Uncommon", "Moderately darkens traps.", "IconAddon_logwoodDye.png", "Trapper", ["extra"]);
    return addon;
}

//ADD
trapperAddons.push(logwoodDye());

function secondaryCoil() {
    var addon = selectAddOn("Secondary Coil", ["Moderately increases trap sabotage time."], "Rare", "Moderately increases trap sabotage time.", "IconAddon_secondaryCoil.png", "Trapper", ["extra"]);
    return addon;
}

//ADD
trapperAddons.push(secondaryCoil());

function trapperBag() {
    var addon = selectAddOn("Trapper Bag", ["Start with and carry 1 extra trap."], "Uncommon", "Start with and carry 1 extra trap.", "IconAddon_trapperBag.png", "Trapper", ["extra"]);
    return addon;
}

//ADD
trapperAddons.push(trapperBag());

function waxBrick() {
    var addon = selectAddOn("Wax Brick", ["Trap sabotage skill check success zones are moderately decreased."], "Rare", "Trap sabotage skill check success zones are moderately decreased.", "IconAddon_waxBrick.png", "Trapper", ["extra"]);
    return addon;
}

//ADD
trapperAddons.push(waxBrick());

function fourCoilSpringKit() {
    var addon = selectAddOn("4-Coil Spring Kit", ["Trap escape difficulty moderately increased.", "Trap rescue time moderately increased.", "Trap setting time slightly increased."], "Uncommon", "Increase escape and rescue difficulty of traps.", "IconAddon_coilsKit4.png", "Trapper", ["extra", "extra", "extra"]);
    return addon;
}

//ADD
trapperAddons.push(fourCoilSpringKit());

function trapSetters() {
    var addon = selectAddOn("Trap Setters", ["Trap setting time moderately decreased."], "Uncommon", "Trap setting time moderately decreased.", "IconAddon_tapSetters.png", "Trapper", ["extra"]);
    return addon;
}

//ADD
trapperAddons.push(trapSetters());

function fasteningTools() {
    var addon = selectAddOn("Fastening Tools", ["Trap sabotage time moderately increased.", "Trap disable time moderately increased.", "Trap setting time slightly increased.", "Trap sabotage skill check success zones slightly decreased."], "Very Rare", "Increase disable and sabotage difficulty of traps.", "IconAddon_fasteningTools.png", "Trapper", ["extra", "extra", "extra", "extra"]);
    return addon;
}

//ADD
trapperAddons.push(fasteningTools());

function settingTools() {
    var addon = selectAddOn("Setting Tools", ["Trap setting time considerably decreased."], "Rare", "Trap setting time considerably decreased.", "IconAddon_settingTools.png", "Trapper", ["extra"]);
    return addon;
}

//ADD
trapperAddons.push(settingTools());

function tarBottle() {
    var addon = selectAddOn("Tar Bottle", ["Considerably darkens traps."], "Rare", "Considerably darkens traps.", "IconAddon_tarBottle.png", "Trapper", ["extra"]);
    return addon;
}

//ADD
trapperAddons.push(tarBottle());

function oilyCoil() {
    var addon = selectAddOn("Oily Coil", ["Moderately increases trap sabotage time.", "slightly decreased trap sabotage skill check success zones."], "Very Rare", "Moderately increases trap sabotage time.", "IconAddon_oilyCoil.png", "Trapper", ["extra", "extra"]);
    return addon;
}

//ADD
trapperAddons.push(oilyCoil());

function rustedJaws() {
    var addon = selectAddOn("Rusted Jaws", ["Moderately increases the healing time of trapped survivors.", "slightly decreased trap sabotage time."], "Rare", "Moderately increases the healing time of trapped survivors.", "IconAddon_rustedJaws.png", "Trapper", ["extra", "extra"]);
    return addon;
}

//ADD
trapperAddons.push(rustedJaws());

function honingStone() {
    var addon = selectAddOn("Honing Stone", ["50% to trigger a dying state."], "Very Rare", "50% to trigger a dying state.", "IconAddon_honingStone.png", "Trapper", ["extra"]);
    return addon;
}

//ADD
trapperAddons.push(honingStone());

function bloodyCoil() {
    var addon = selectAddOn("Bloody Coil", ["Tremendously increases trap sabotage time.", "Moderately decreased trap sabotage skill check success zones.", "Slightly increased trap setting time."], "Ultra Rare", "Moderately increases trap sabotage time.", "IconAddon_bloodyCoil.png", "Trapper", ["extra", "extra", "extra"]);
    return addon;
}

//ADD
trapperAddons.push(bloodyCoil());

function stitchedBag() {
    var addon = selectAddOn("Stitched Bag", ["Start with and carry 2 extra traps."], "Very Rare", "Start with and carry 2 extra traps.", "IconAddon_stichedBag.png", "Trapper", ["extra"]);
    return addon;
}

//ADD
trapperAddons.push(stitchedBag());

function diamondStone() {
    var addon = selectAddOn("Iridescent Stone", ["Traps trigger a dying state."], "Ultra Rare", "Traps trigger a dying state.", "IconAddon_diamondStone.png", "Trapper", ["extra"]);
    return addon;
}

//ADD
trapperAddons.push(diamondStone());

function trapperSack() {
    var addon = selectAddOn("Trapper Sack", ["text."], "Common", "text", "iconAddon_trapperSack.png", "Trapper", ["extra"]);
    return addon;
}

//ADD
trapperAddons.push(trapperSack());

function paddedJaws() {
    var addon = selectAddOn("Padded Jaws", ["text."], "Common", "text", "iconAddon_paddedJaws.png", "Trapper", ["extra"]);
    return addon;
}

//ADD
trapperAddons.push(paddedJaws());

//Wraith Addons

function blindWarriorWhite() {
    var addon = selectAddOn("Blind Warrior - White", ["Slightly increased burn resistance."], "Rare", "Slightly increased burn resistance.", "iconAddon_whiteBlindWarrior.png", "Wraith", ["extra"]);
    return addon;
}

//ADD
wraithAddons.push(blindWarriorWhite());

function blinkMud() {
    var addon = selectAddOn("Blink - Mud", ["Slightly reduced disappearance time."], "Uncommon", "Slightly reduced disappearance time.", "iconAddon_mudBlink.png", "Wraith", ["extra"]);
    return addon;
}

//ADD
wraithAddons.push(blinkMud());

function boneClapper() {
    var addon = selectAddOn("Bone Clapper", ["Slightly reduces the range of the bell sound."], "Uncommon", "Slightly reduces the range of the bell sound.", "IconAddon_boneClapper.png", "Wraith", ["extra"]);
    return addon;
}

//ADD
wraithAddons.push(boneClapper());

function swiftHuntBlood() {
    var addon = selectAddOn("Swift Hunt - Blood", ["Slightly reduced reappearance time."], "Very Rare", "Slightly reduced reappearance time.", "iconAddon_bloodSwiftHunt.png", "Wraith", ["extra"]);
    return addon;
}

//ADD
wraithAddons.push(swiftHuntBlood());

function beastSoot() {
    var addon = selectAddOn("The Beast - Soot", ["While invisible see survivor auras at a 4m range."], "Common", "While invisible see survivor auras at a 4m range.", "iconAddon_sootTheBeast.png", "Wraith", ["extra"]);
    return addon;
}

//ADD
wraithAddons.push(beastSoot());

function blindWarriorMud() {
    var addon = selectAddOn("Blind Warrior - Mud", ["Moderately increased burn resistance."], "Uncommon", "Moderately increased burn resistance.", "IconAddon_mudBlindWarrior.png", "Wraith", ["extra"]);
    return addon;
}

//ADD
wraithAddons.push(blindWarriorMud());

function windstormMud() {
    var addon = selectAddOn("Windstorm - Mud", ["Speed boost for .5s upon reappearing."], "Uncommon", "Speed boost for .5s upon reappearing.", "IconAddon_mudWindStorm.png", "Wraith", ["extra"]);
    return addon;
}

//ADD
wraithAddons.push(windstormMud());

function swiftHuntMud() {
    var addon = selectAddOn("Swift Hunt - Mud", ["Moderately reduced reappearance time."], "Uncommon", "Moderately reduced reappearance time.", "IconAddon_mudSwiftHunt.png", "Wraith", ["extra"]);
    return addon;
}

//ADD
wraithAddons.push(swiftHuntMud());

function coxcombedClapper() {
    var addon = selectAddOn("Coxcombed Clapper", ["Moderately reduces the range of the bell sound."], "Ultra Rare", "Slightly reduces the range of the bell sound.", "iconAddon_coxcombedClapper.png", "Wraith", ["extra"]);
    return addon;
}

//ADD
wraithAddons.push(coxcombedClapper());

function swiftHuntWhite() {
    var addon = selectAddOn("Swift Hunt - White", ["Considerably reduced reappearance time."], "Rare", "Considerably reduced reappearance time.", "IconAddon_whiteSwiftHunt.png", "Wraith", ["extra"]);
    return addon;
}

//ADD
wraithAddons.push(swiftHuntWhite());

function theGhostSoot() {
    var addon = selectAddOn("The Ghost - Soot", ["Gain stealth if you uncloak while motionless."], "Common", "Gain stealth if you uncloak while motionless.", "iconAddon_sootTheGhost.png", "Wraith", ["extra"]);
    return addon;
}

//ADD
wraithAddons.push(theGhostSoot());

function windstormWhite() {
    var addon = selectAddOn("Windstorm - White", ["Speed boost for 1s upon reappearing."], "Rare", "Speed boost for 1s upon reappearing.", "iconAddon_whiteWindstorm.png", "Wraith", ["extra"]);
    return addon;
}

//ADD
wraithAddons.push(windstormWhite());

function serpentSoot() {
    var addon = selectAddOn("The Serpent - Soot", ["While invisible see survivor auras at a 6m range."], "Common", "While invisible see survivor auras at a 6m range.", "iconAddon_sootTheSerpent.png", "Wraith", ["extra"]);
    return addon;
}

//ADD
wraithAddons.push(serpentSoot());

function houndSoot() {
    var addon = selectAddOn("The Hound - Soot", ["Considerably increased burn resistance."], "Common", "Considerably increased burn resistance.", "iconAddon_sootTheHound.png", "Wraith", ["extra"]);
    return addon;
}

//ADD
wraithAddons.push(houndSoot());

function allSeeingBlood() {
    var addon = selectAddOn("All Seeing - Blood", ["While invisible see survivor auras at a 8m range."], "Very Rare", "While invisible see survivor auras at a 8m range.", "IconAddon_bloodAllSeeing.png", "Wraith", ["extra"]);
    return addon;
}

//ADD
wraithAddons.push(allSeeingBlood());

function sDanceWhite() {
    var addon = selectAddOn("Shadow Dance - White", ["Tremendously increased burn resistance."], "Rare", "Tremendously increased burn resistance.", "iconAddon_whiteShadowDance.png", "Wraith", ["extra"]);
    return addon;
}

//ADD
wraithAddons.push(sDanceWhite());

function windstormBlood() {
    var addon = selectAddOn("Windstorm - Blood", ["Speed boost for 1.5s upon reappearing."], "Very Rare", "Speed boost for 1.5s upon reappearing.", "IconAddon_bloodWindstorm.png", "Wraith", ["extra"]);
    return addon;
}

//ADD
wraithAddons.push(windstormBlood());

function allSeeingSpirit() {
    var addon = selectAddOn("All Seeing - Spirit", ["While invisible see survivor auras at a 10m range."], "Ultra Rare", "While invisible see survivor auras at a 10m range.", "IconAddon_spiritAllSeeing.png", "Wraith", ["extra"]);
    return addon;
}

//ADD
wraithAddons.push(allSeeingSpirit());

function sDanceBlood() {
    var addon = selectAddOn("Shadow Dance - Blood", ["text"], "Very Rare", "text", "iconAddon_bloodShadowDance.png", "Wraith", ["extra"]);
    return addon;
}

//ADD
wraithAddons.push(sDanceBlood());

function blinkWhite() {
    var addon = selectAddOn("Blink - White", ["text"], "Rare", "text", "iconAddon_whiteBlink.png", "Wraith", ["extra"]);
    return addon;
}

//ADD
wraithAddons.push(blinkWhite());

//Billy Add-ons
function chainsawFile() {
    var addon = selectAddOn("Chainsaw File", ["Slightly decreased chainsaw noise."], "Common", "Slightly decreased chainsaw noise.", "IconAddon_chainsawFile.png", "Hillbilly", ["extra"]);
    return addon;
}

//ADD
billyAddons.push(chainsawFile());
cannibalAddons.push(chainsawFile());

function sparkPlug() {
    var addon = selectAddOn("Spark Plug", ["Slightly decreased chainsaw charge time."], "Common", "Slightly decreased chainsaw charge time.", "IconAddon_sparkPlug.png", "Hillbilly", ["extra"]);
    return addon;
}

//ADD x 2
billyAddons.push(sparkPlug());
cannibalAddons.push(sparkPlug());

function vegetableOil() {
    var addon = selectAddOn("Vegetable Oil", ["Slightly decreased chainsaw cooldown."], "Common", "Slightly decreased chainsaw cooldown.", "IconAddon_vegetableOil.png", "Hillbilly", ["extra"]);
    return addon;
}

//ADD
billyAddons.push(vegetableOil());
cannibalAddons.push(vegetableOil());

function longGuideBar() {
    var addon = selectAddOn("Long Guide Bar", ["Slightly increased chainsaw reach."], "Uncommon", "Slightly increased chainsaw reach.", "IconAddon_longGuideBar.png", "Hillbilly", ["extra"]);
    return addon;
}

//ADD
billyAddons.push(longGuideBar());
cannibalAddons.push(longGuideBar());

function depthGuageRake() {
    var addon = selectAddOn("Depth Gauge Rake", ["Moderately reduced time penalty when contacting objects."], "Uncommon", "Moderately reduced time penalty when contacting objects.", "IconAddon_depthGaugeRake.png", "Hillbilly", ["extra"]);
    return addon;
}

//ADD
billyAddons.push(depthGuageRake());
cannibalAddons.push(depthGuageRake());

function primerBulb() {
    var addon = selectAddOn("Primer Bulb", ["Moderately decreased chainsaw charge time."], "Uncommon", "Moderately decreased chainsaw charge time.", "IconAddon_primerBulb.png", "Hillbilly", ["extra"]);
    return addon;
}

//ADD
billyAddons.push(primerBulb());
cannibalAddons.push(primerBulb());

function shopLubricant() {
    var addon = selectAddOn("Shop Lubricant", ["Moderately decreased chainsaw cooldown."], "Uncommon", "Moderately decreased chainsaw cooldown.", "IconAddon_shopLubricant.png", "Hillbilly", ["extra"]);
    return addon;
}

//ADD
billyAddons.push(shopLubricant());
cannibalAddons.push(shopLubricant());

function spikedBoots() {
    var addon = selectAddOn("Spiked Boots", ["Moderately increases chainsaw sprint steering."], "Uncommon", "Moderately increases chainsaw sprint steering.", "IconAddon_spikedBoots.png", "Hillbilly", ["extra"]);
    return addon;
}

//ADD
billyAddons.push(spikedBoots());

function speedLimiter() {
    var addon = selectAddOn("Speed Limiter", ["Chainsaw does not trigger dying state.", "50% more points for chainsaw events."], "Uncommon", "Bonus points; chainsaw not as effective.", "IconAddon_speedLimiter.png", "Hillbilly", ["extra", "extra"]);
    return addon;
}

//ADD
billyAddons.push(speedLimiter());
cannibalAddons.push(speedLimiter());

function homemadeMuffler() {
    var addon = selectAddOn("Homemade Muffler", ["Moderately decreased chainsaw noise."], "Uncommon", "Moderately decreased chainsaw noise.", "IconAddon_homemadeMuffler.png", "Hillbilly", ["extra"]);
    return addon;
}

//ADD
billyAddons.push(homemadeMuffler());
cannibalAddons.push(homemadeMuffler());

function deathEngravings() {
    var addon = selectAddOn("Death Engravings", ["Slightly increased chainsaw movement speed.", "Slightly increased chainsaw charge time."], "Uncommon", "Increased charge time; increased sprint speed.", "IconAddon_deathEngravings.png", "Hillbilly", ["extra", "extra"]);
    return addon;
}

//ADD
billyAddons.push(deathEngravings());

function grislyChains() {
    var addon = selectAddOn("Grisly Chain", ["Moderately decreased repair speed to survivors hit by the chainsaw."], "Uncommon", "Moderately decreased repair speed to survivors hit by the chainsaw.", "IconAddon_chainsGrisly.png", "Hillbilly", ["extra"]);
    return addon;
}

//ADD
billyAddons.push(grislyChains());
cannibalAddons.push(grislyChains());

function rustedChains() {
    var addon = selectAddOn("Rusted Chain", ["Considerably decreased healing speed to survivors hit by the chainsaw."], "Rare", "Considerably decreased healing speed to survivors hit by the chainsaw.", "IconAddon_chainsRusted.png", "Hillbilly", ["extra"]);
    return addon;
}

//ADD
billyAddons.push(rustedChains());
cannibalAddons.push(rustedChains());

function doomEngravings() {
    var addon = selectAddOn("Doom Engravings", ["Moderately increases chainsaw sprint speed.", "Slightly increased chainsaw charge time."], "Rare", "Considerably decreased healing speed to survivors hit by the chainsaw.", "IconAddon_doomEngravings.png", "Hillbilly", ["extra", "extra"]);
    return addon;
}

//ADD
billyAddons.push(doomEngravings());

function ctg() {
    var addon = selectAddOn("Carburetor Tuning Guide", ["Moderately decreased chainsaw charge time.", "Slightly decreased chainsaw cooldown.", "Slightly reduced object contact time penalty.", "Slightly reduced chainsaw noise."], "Rare", "Improves most aspects of chainsaw.", "IconAddon_carburetorTuningGuide.png", "Hillbilly", ["extra", "extra", "extra", "extra"]);
    return addon;
}

//ADD
billyAddons.push(ctg());
cannibalAddons.push(ctg());

function lightChassis() {
    var addon = selectAddOn("Light Chassis", ["Slightly reduced chainsaw reach.", "Considerably reduced object contact time penalty."], "Rare", "Faster contact recovery; reduced reach.", "IconAddon_lightChassis.png", "Hillbilly", ["extra", "extra"]);
    return addon;
}

//ADD
billyAddons.push(lightChassis());
cannibalAddons.push(lightChassis());

function thompsonMix() {
    var addon = selectAddOn("The Thompson's Mix", ["Considerably reduced chainsaw cooldown.", "Slightly decreased chainsaw charge time."], "Rare", "Faster cooldowns; reduced charge time.", "IconAddon_theThompsonsMix.png", "Hillbilly", ["extra", "extra"]);
    return addon;
}

//ADD
billyAddons.push(thompsonMix());

function begrimedChains() {
    var addon = selectAddOn("Begrimed Chain", ["Considerably increased healing time of chainsawed survivors.", "Slightly reduced repair speed of chainsawed survivors."], "Very Rare", "Reduction in heal and repair speed of chainsaw victims.", "IconAddon_chainsBloody.png", "Hillbilly", ["extra", "extra"]);
    return addon;
}

//ADD
billyAddons.push(begrimedChains());
cannibalAddons.push(begrimedChains());

function thompsonMoonshine() {
    var addon = selectAddOn("Thompson's Moonshine", ["Tremendously increased chainsaw sprint steering.", "Considerably increased object contact penalty."], "Very Rare", "Increased chainsaw sprint control.", "IconAddon_thompsonsMoonshine.png", "Hillbilly", ["extra", "extra"]);
    return addon;
}

//ADD
billyAddons.push(thompsonMoonshine());
//killers[3].addonLink = billyAddons;

//Nurse Add-ons
function badManKeepsake() {
    var addon = selectAddOn("Bad Man Keepsake", ["Moderately increases blink charge speed."], "Common", "Moderately increases blink charge speed.", "IconAddon_badManKeepsake.png", "Nurse", ["extra"]);
    return addon;
}

//ADD
nurseAddons.push(badManKeepsake());

function metalSpoon() {
    var addon = selectAddOn("Metal Spoon", ["Slightly increased charge speed."], "Common", "Slightly increased charge speed.", "IconAddon_metalSpoon.png", "Nurse", ["extra"]);
    return addon;
}

//ADD
nurseAddons.push(metalSpoon());

function woodenHorse() {
    var addon = selectAddOn("Wooden Horse", ["Slightly decreased blink accuracy.", "Slightly inceased blink range."], "Common", "Decreased accuracy; inceased range.", "IconAddon_woodenHorse.png", "Nurse", ["extra", "extra"]);
    return addon;
}

//ADD
nurseAddons.push(woodenHorse());

function whiteNitComb() {
    var addon = selectAddOn("White Nit Comb", ["Slightly increased blink movement speed."], "Common", "Slightly increased blink movement speed.", "IconAddon_whiteNitComb.png", "Nurse", ["extra"]);
    return addon;
}

//ADD
nurseAddons.push(whiteNitComb());

function matchbox() {
    var addon = selectAddOn("Matchbox", ["Slightly increased chain blink window."], "Common", "Slightly increased chain blink window.", "IconAddon_matchBox.png", "Nurse", ["extra"]);
    return addon;
}

//ADD
nurseAddons.push(matchbox());

function tornBookmark() {
    var addon = selectAddOn("Torn Bookmark", ["Adds one chain blink.", "Slightly decreased blink range.", "Slightly decreased chain blink window."], "Common", "Adds a blink; less range and window.", "IconAddon_tornBookmark.png", "Nurse", ["extra", "extra"]);
    return addon;
}

//ADD
nurseAddons.push(tornBookmark());

function cbt() {
    var addon = selectAddOn("Catatonic Boy's Treasure", ["Moderately inceased maximum blink rande.", "Moderately decreased accuracy."], "Uncommon", "Decreased accuracy; inceased range.", "IconAddon_catatonicTreasure.png", "Nurse", ["extra", "extra"]);
    return addon;
}

//ADD
nurseAddons.push(cbt());

function pocketWatch() {
    var addon = selectAddOn("Pocket Watch", ["Slightly decreased blink charge speed.", "Moderately decreased blink fatigue time."], "Uncommon", "Decreased fatigue; decreased charge speed.", "IconAddon_pocketWatch.png", "Nurse", ["extra", "extra"]);
    return addon;
}

//ADD
nurseAddons.push(pocketWatch());

function darkCincture() {
    var addon = selectAddOn("Dark Cincture", ["Adds a chain blink.", "Slightly reduced blink range."], "Uncommon", "+1 blink; decreased range.", "IconAddon_darkCincture.png", "Nurse", ["extra", "extra"]);
    return addon;
}

//ADD
nurseAddons.push(darkCincture());

function dullBracelet() {
    var addon = selectAddOn("Dull Bracelet", ["Moderately increased blink movement speed.", "Slightly decreased blink charge speed."], "Uncommon", "Increased blink speed; decreased charge speed.", "IconAddon_dullBracelet.png", "Nurse", ["extra", "extra"]);
    return addon;
}

//ADD
nurseAddons.push(dullBracelet());

function anxiousGasp() {
    var addon = selectAddOn("Anxious Gasp", ["Considerably increased blink movement speed.", "Moderately decreased blink charge speed."], "Rare", "Increased blink speed; decreased charge speed.", "IconAddon_anxiousGasp.png", "Nurse", ["extra", "extra"]);
    return addon;
}

//ADD
nurseAddons.push(anxiousGasp());

function spasmodicBreath() {
    var addon = selectAddOn("Spasmodic Breath", ["Considerably increased blink charge speed.", "Slightly increased fatigue time."], "Rare", "Increased blink charge speed; increased fatigue time.", "IconAddon_spasmodicBreath.png", "Nurse", ["extra", "extra"]);
    return addon;
}

//ADD
nurseAddons.push(spasmodicBreath());

function heavyPanting() {
    var addon = selectAddOn("Heavy Panting", ["Moderately increased chain blink window.", "Moderately increased fatigue time."], "Rare", "Increased blink window; increased fatigue time.", "IconAddon_heavyPanting.png", "Nurse", ["extra", "extra"]);
    return addon;
}

//ADD
nurseAddons.push(heavyPanting());

function ataxicRespiration() {
    var addon = selectAddOn("Ataxic Respiration", ["Considerably increased blink range.", "Considerably decreased blink accuracy."], "Rare", "Increased range; decreased accuracy.", "IconAddon_ataxicRespiration.png", "Nurse", ["extra", "extra"]);
    return addon;
}

//ADD
nurseAddons.push(ataxicRespiration());

function fragileWheeze() {
    var addon = selectAddOn("Fragile Wheeze", ["Adds one chain blink."], "Rare", "Adds one chain blink.", "IconAddon_fragileWheeze.png", "Nurse", ["extra"]);
    return addon;
}

//ADD
nurseAddons.push(fragileWheeze());

function clb() {
    var addon = selectAddOn("Campbell's Last Breath", ["Adds 2 extra blinks.", "Slightly decreased blink range."], "Very Rare", "Decreased range; +2 blinks.", "IconAddon_campbellsLastBreath.png", "Nurse", ["extra", "extra"]);
    return addon;
}

//ADD
nurseAddons.push(clb());

function klb() {
    var addon = selectAddOn("Kavanagh's Last Breath", ["Moderately increased chain blink window.", "Slightly increased fatigue duration.", "Remove one chain blink."], "Very Rare", "Increased window; -1 blink; increased fatigue.", "IconAddon_kavanaghsLastBreath.png", "Nurse", ["extra", "extra", "extra"]);
    return addon;
}

//ADD
nurseAddons.push(klb());

function jlb() {
    var addon = selectAddOn("Jenner's Last Breath", ["Tremendously increased blink movement speed.", "Moderately decreased blink charge speed.", "Remove one chain blink."], "Very Rare", "Increased blink speed; -1 blink; decreased charge speed.", "IconAddon_jennersLastBreath.png", "Nurse", ["extra", "extra", "extra"]);
    return addon;
}

//ADD
nurseAddons.push(jlb());

function bmlb() {
    var addon = selectAddOn("Bad Man's Last Breath", ["Tremendously in blink charge speed.", "Slightly increased fatigue time.", "Remove one chain blink."], "Very Rare", "Increased charge speed; -1 blink; increased fatigue time.", "IconAddon_badMansLastBreath.png", "Nurse", ["extra", "extra", "extra"]);
    return addon;
}

//ADD
nurseAddons.push(bmlb());

function plaidFlannel() {
    var addon = selectAddOn("Plaid Flannel", ["See the blink landing area"], "Very Rare", "See the blink landing area.", "IconAddon_plaidFlannel.png", "Nurse", ["extra"]);
    return addon;
}

//ADD
nurseAddons.push(plaidFlannel());


//Myers Add-ons
function blondHair() {
    var addon = selectAddOn("Blond Hair", ["Slightly increased EWIII duration.", "Slightly increased amount of evil required to reach EWIII."], "Common", "Slightly increased EWIII duration.", "IconAddon_blondeHair.png", "Michael Myers", ["extra", "extra"]);
    return addon;
}

//ADD
mikeAddons.push(blondHair());

function boyfriendsMemo() {
    var addon = selectAddOn("Boyfriend's Memo", ["Slightly increased EWI lunge length."], "Common", "Slightly increased EWI lunge length.", "IconAddon_boyfriendsMemo.png", "Michael Myers", ["extra"]);
    return addon;
}

//ADD
mikeAddons.push(boyfriendsMemo());

function tackyEarings() {
    var addon = selectAddOn("Tacky Earings", ["Slightly increased stalk movement speed."], "Common", "Slightly increased stalk movement speed.", "IconAddon_tackyEarrings.png", "Michael Myers", ["extra"]);
    return addon;
}

//ADD
mikeAddons.push(tackyEarings());

function reflectiveFragment() {
    var addon = selectAddOn("Reflective Fragment", ["EWII reveals survivors who have been salked for 1s for 2s."], "Uncommon", "EWII survivor auras revealed.", "IconAddon_reflectiveFragment.png", "Michael Myers", ["extra"]);
    return addon;
}

//ADD
mikeAddons.push(reflectiveFragment());

function memorialFlower() {
    var addon = selectAddOn("Memorial Flower", ["Slightly increases evil gained while stalking."], "Uncommon", "Slightly increases evil gained while stalking.", "IconAddon_memorialFlower.png", "Michael Myers", ["extra"]);
    return addon;
}

//ADD
mikeAddons.push(memorialFlower());

function deadRabbit() {
    var addon = selectAddOn("Dead Rabbit", ["Moderately reduces terror radius of EWII.", "Moderately increases terror radius EWIII."], "Uncommon", "Changes terror radius. Moderate decrease of EWII, increase of EWIII.", "IconAddon_deadRabbit.png", "Michael Myers", ["extra", "extra"]);
    return addon;
}

//ADD
mikeAddons.push(deadRabbit());

function glassFragment() {
    var addon = selectAddOn("Glass Fragment", ["EW1 reveals auras of survivors who have been stalked for 1s.", "Survivors revealed for 2s."], "Uncommon", "EW1 reveals auras of survivors who have been stalked for 1s.", "IconAddon_glassFragment.png", "Michael Myers", ["extra", "extra"]);
    return addon;
}

//ADD
mikeAddons.push(glassFragment());

function jewelry() {
    var addon = selectAddOn("Jewelry", ["Moderately to stalk movement speed."], "Uncommon", "Changes terror radius. Moderate decrease of EWII, increase of EWIII.", "IconAddon_jewelry.png", "Michael Myers", ["extra"]);
    return addon;
}

//ADD
mikeAddons.push(jewelry());

function hairBrush() {
    var addon = selectAddOn("Hair Brush", ["Moderately increased EWIII duration.", "Slight increase to the amount of evil required to reach EWIII."], "Uncommon", "EWIII duration increased.", "IconAddon_hairBrush.png", "Michael Myers", ["extra", "extra"]);
    return addon;
}

//ADD
mikeAddons.push(hairBrush());

function mirrorShard() {
    var addon = selectAddOn("Mirror Shard", ["EWII reveals auras of survivors who have been stalked for 1s.", "Survivors revealed for 5s."], "Rare", "EWII reveals auras of survivors who have been stalked for 1s.", "IconAddon_mirrorShard.png", "Michael Myers", ["extra", "extra"]);
    return addon;
}

//ADD
mikeAddons.push(mirrorShard());

function hairBow() {
    var addon = selectAddOn("Hair Bow", ["Considerably increased EWIII duration.", "Slightly increased evil required to reach EWIII."], "Rare", "Increased duration for EWIII.", "IconAddon_hairBow.png", "Michael Myers", ["extra", "extra"]);
    return addon;
}

//ADD
mikeAddons.push(hairBow());

function jewelryBox() {
    var addon = selectAddOn("Jewelry Box", ["Considerably Increased movement speed while stalking."], "Rare", "Considerably Increased movement speed while stalking.", "IconAddon_jewelryBox.png", "Michael Myers", ["extra"]);
    return addon;
}

//ADD
mikeAddons.push(jewelryBox());

function judithsJournal() {
    var addon = selectAddOn("Judith's Journal", ["Become obsessed with a survivor.", "Considerably increased evil gained while stalking your obsession."], "Rare", "Increased duration for EWIII.", "IconAddon_judithsJournal.png", "Michael Myers", ["extra", "extra"]);
    return addon;
}

//ADD
mikeAddons.push(judithsJournal());

function tombstonePiece() {
    var addon = selectAddOn("Tombstone Piece", ["Grants ability to kill healthy or injured survivors with EWIII.", "Cannot stalk in EWIII.", "Killing a survivor drains evil.", "Considerably increased evil required to reach EWIII."], "Very Rare", "Kill survivors with EWIII. Has drawbacks.", "IconAddon_tombstonePiece.png", "Michael Myers", ["extra", "extra", "extra", "extra"]);
    return addon;
}

//ADD
mikeAddons.push(tombstonePiece());

function JMMemorial() {
    var addon = selectAddOn("J. Myers Memorial", ["Moderately increased evil gained when stalking."], "Rare", "Moderately increased evil gained when stalking.", "IconAddon_jMyersMemorial.png", "Michael Myers", ["extra"]);
    return addon;
}

//ADD
mikeAddons.push(JMMemorial());

function vanityMirror() {
    var addon = selectAddOn("Vanity Mirror", ["EWII reveals survivor auras within 16m while stalking.", "Cannot progress past EWII.", "Slightly decreased movement speed.", "200% point gain on EW score events."], "Very Rare", "EWII reveals survivor auras. Slower move speed.", "IconAddon_vanityMirror.png", "Michael Myers", ["extra", "extra", "extra", "extra"]);
    return addon;
}

//ADD
mikeAddons.push(vanityMirror());

function scratchedMirror() {
    var addon = selectAddOn("Scratched  Mirror", ["EWI reveals survivor auras within 32m while stalking.", "Cannot progress past EWI.", "300% point gain on EW score events."], "Very Rare", "EWI reveals survivor auras.", "IconAddon_scratchedMirror.png", "Michael Myers", ["extra", "extra", "extra"]);
    return addon;
}

//ADD
mikeAddons.push(scratchedMirror());

function lockOfHair() {
    var addon = selectAddOn("Lock of Hair", ["Tremendously increased EWIII duration.", "Moderately increased evil required to reach EWIII."], "Very Rare", "EWIII lasts longer.", "IconAddon_lockOfHair.png", "Michael Myers", ["extra", "extra"]);
    return addon;
}

//ADD
mikeAddons.push(lockOfHair());

function ftoh() {
    var addon = selectAddOn("Fragrant Tuft of Hair", ["Unlimited EWIII duration.", "Tremendously increased evil required to reach EWIII."], "Ultra Rare", "EWIII lasts forever.", "IconAddon_tuftOfHair.png", "Michael Myers", ["extra", "extra"]);
    return addon;
}

//ADD
mikeAddons.push(ftoh());

function judithsTombstone() {
    var addon = selectAddOn("Judith's Tombstone", ["Grants ability to kill healthy or injured survivors with EWIII.", "Cannot stalk in EWIII.", "Tremendously increased evil required to reach EWIII.", "Moderately decreased movement speed."], "Ultra Rare", "Slow movment. Can kill survivors with EWIII.", "IconAddon_judithsTombstone.png", "Michael Myers", ["extra", "extra", "extra", "extra"]);
    return addon;
}

//ADD
mikeAddons.push(judithsTombstone());

//Hag Add-ons
function bogWater() {
    var addon = selectAddOn("Bog Water", ["Slightly increased phantasm trap range."], "Common", "Slightly increased phantasm trap range.", "IconAddon_bogWater.png", "Hag", ["extra"]);
    return addon;
}

//ADD
hagAddons.push(bogWater());

function deadFlyMud() {
    var addon = selectAddOn("Dead Fly Mud", ["Slightly increased trap teleport range."], "Common", "Slightly increased trap teleport range.", "IconAddon_deadFlyMud.png", "Hag", ["extra"]);
    return addon;
}

//ADD
hagAddons.push(deadFlyMud());

function powderedEggshell() {
    var addon = selectAddOn("Powdered Eggshell", ["Slightly increased phantasm duration time."], "Common", "Slightly increased phantasm duration time.", "IconAddon_powderedEggshell.png", "Hag", ["extra"]);
    return addon;
}

//ADD
hagAddons.push(powderedEggshell());

function ropeNecklet() {
    var addon = selectAddOn("Rope Necklet", ["Slightly reduced trap setting time."], "Common", "Slightly reduced trap setting time.", "IconAddon_ropeNecklet.png", "Hag", ["extra"]);
    return addon;
}

//ADD
hagAddons.push(ropeNecklet());

function bloodiedWater() {
    var addon = selectAddOn("Bloodied Water", ["Moderately increased effective phantasm trap range."], "Uncommon", "Moderately increased effective phantasm trap range.", "IconAddon_bloodiedWater.png", "Hag", ["extra"]);
    return addon;
}

//ADD
hagAddons.push(bloodiedWater());

function cypressNecklet() {
    var addon = selectAddOn("Cypress Necklet", ["Moderately reduced trap setting time."], "Uncommon", "Moderately reduced trap setting time.", "IconAddon_cypressNecklet.png", "Hag", ["extra"]);
    return addon;
}

//ADD
hagAddons.push(cypressNecklet());

function dragonflyWings() {
    var addon = selectAddOn("Dragonfly Wings", ["Moderately increased teleport distance.", "Slightly increased trap setting time."], "Uncommon", "Moderately increased teleport distance.", "IconAddon_dragonflyWings.png", "Hag", ["extra", "extra"]);
    return addon;
}

//ADD
hagAddons.push(dragonflyWings());

function pwc() {
    var addon = selectAddOn("Pussy Willow Catkins", ["Reveals the survivor's aura for 2s when a trap is tripped.", "Slightly reduced the phantasm trap effective range."], "Uncommon", "Reveals the survivor's aura for 2s when a trap is tripped.", "IconAddon_pussyWillowCatkins.png", "Hag", ["extra", "extra"]);
    return addon;
}

//ADD
hagAddons.push(pwc());

function bloodiedMud() {
    var addon = selectAddOn("Bloodied Mud", ["Considerably increased effective phantasm trap range.", "Slightly reduced phantasm duration time."], "Rare", "Considerably increased effective phantasm trap range.", "IconAddon_bloodiedMud.png", "Hag", ["extra", "extra"]);
    return addon;
}

//ADD
hagAddons.push(bloodiedMud());

function halfEggshell() {
    var addon = selectAddOn("Half Eggshell", ["Moderately increased phantasm duration time.", "Slightly reduced teleport distance."], "Uncommon", "Moderately increased phantasm duration time.", "IconAddon_halfEggshell.png", "Hag", ["extra", "extra"]);
    return addon;
}

//ADD
hagAddons.push(halfEggshell());

function crackedTurtleEgg() {
    var addon = selectAddOn("Cracked Turtle Egg", ["Considerably increased phantasm duration time.", "Moderately decreased teleport distance."], "Rare", "Considerably increased phantasm duration time.", "IconAddon_crackedTurtleEgg.png", "Hag", ["extra", "extra"]);
    return addon;
}

//ADD
hagAddons.push(crackedTurtleEgg());

function driedCicada() {
    var addon = selectAddOn("Dried Cicada", ["Considerably increased teleport distance.", "Moderately increased trap setting time."], "Rare", "Considerably increased teleport distance.", "IconAddon_driedCicada.png", "Hag", ["extra", "extra"]);
    return addon;
}

//ADD
hagAddons.push(driedCicada());

function swampOrchidNecklet() {
    var addon = selectAddOn("Swamp Orchid Necklet", ["Considerably reduced trap setting time."], "Rare", "Considerably reduced trap setting time.", "IconAddon_swampOrchidNecklet.png", "Hag", ["extra"]);
    return addon;
}

//ADD
hagAddons.push(swampOrchidNecklet());

function granmasHeart() {
    var addon = selectAddOn("Granma's Heart", ["Reduce the Hag's heartbeat range to 0 when a trap is triggered.", "Increase mud phantasm's heartbeat radius by 16m."], "Very Rare", "Reduction in heartbeat radius when a trap is triggered.", "IconAddon_granmasHeart.png", "Hag", ["extra", "extra"]);
    return addon;
}

//ADD
hagAddons.push(granmasHeart());

function executionersHand() {
    var addon = selectAddOn("Scarred Hand", ["Phantasms have collision.", "Moderate reduction in movement speed.", "Cannot teleport.", "300% bonus to deviousness points."], "Very Rare", "Cannot teleport. Phantasms get collision.", "IconAddon_scarredHand.png", "Hag", ["extra", "extra", "extra", "extra"]);
    return addon;
}

//ADD
hagAddons.push(executionersHand());

function disfiguredEar() {
    var addon = selectAddOn("Disfigured Ear", ["Survivors are deafened for 6s upon triggering a trap.", "Considerable reduction in phantasm duration time."], "Very Rare", "Survivors are deafened for 6s upon triggering a trap.", "IconAddon_disfiguredEar.png", "Hag", ["extra", "extra"]);
    return addon;
}

//ADD
hagAddons.push(disfiguredEar());

function rustyShackles() {
    var addon = selectAddOn("Rusty Shackles", ["Traps do not spawn phantasms.", "Traps do not indicate to survivors that they have been tripped."], "Very Rare", "Stealth traps.", "IconAddon_rustyShackles.png", "Hag", ["extra", "extra"]);
    return addon;
}

//ADD
hagAddons.push(rustyShackles());

function waterloggedShoe() {
    var addon = selectAddOn("Waterlogged Shoe", ["Phantasms slow down surivors in their range.", "Cannot teleport."], "Ultra Rare", "Traps slow survivors. Cannot teleport.", "IconAddon_waterloggedShoe.png", "Hag", ["extra", "extra"]);
    return addon;
}

//ADD
hagAddons.push(waterloggedShoe());

function mintRag() {
    var addon = selectAddOn("Mint Rag", ["Teleport works on any phantasm in the map.", "15s cooldown on teleportation."], "Ultra Rare", "Teleports work anywhere. 15s cooldown.", "IconAddon_mintRag.png", "Hag", ["extra", "extra"]);
    return addon;
}

//ADD
hagAddons.push(mintRag());

function willowWreath() {
    var addon = selectAddOn("Willow Wreath", ["text", "text"], "Rare", "text", "IconAddon_willowWreath.png", "Hag", ["extra", "extra"]);
    return addon;
}

//ADD
hagAddons.push(willowWreath());

//BEGIN DOCTOR ADDONS
function moldyElectrode() {
    var addon = selectAddOn("Moldy Electrode", ["25% increased shock range", "Slight increase to shock charge time."], "Common", "25% increased range.", "IconAddon_moldyElectrode.png", "Doctor", ["extra", "extra"]);
    return addon;
}

//ADD
doctorAddons.push(moldyElectrode());

function mapleKnight() {
    var addon = selectAddOn("Maple Knight", ["Reveals shock AoE"], "Common", "Reveals shock AoE", "IconAddon_mapleKnight.png", "Doctor", ["extra", "extra"]);
    return addon;
}

//ADD
doctorAddons.push(mapleKnight());

function orderClass1() {
    var addon = selectAddOn("Order - Class 1", ["10% extra madness from shock field", "Adds 25% that mad survivors will get a skill check in a random location."], "Common", "Extra madness. Random skill check location chance", "IconAddon_orderClassI.png", "Doctor", ["extra", "extra"]);
    return addon;
}

//ADD
doctorAddons.push(orderClass1());

function calmClass1() {
    var addon = selectAddOn("Calm - Class 1", ["Terror radius changes with mode.", "Adds the chance for mad survivors to hear the terror radius heartbeat for 15s"], "Common", "Mad survivors can hear fake heartbeats.", "IconAddon_calmClassI.png", "Doctor", ["extra", "extra"]);
    return addon;
}

//ADD
doctorAddons.push(calmClass1());

function scrappedTape() {
    var addon = selectAddOn("Scrapped Tape", ["Shock Therapy becomes a ring 8m in front of the Doctor."], "Uncommon", "Shock Therapy becomes a ring 8m in front of the Doctor.", "IconAddon_scrappedTape.png", "Doctor", ["extra", "extra"]);
    return addon;
}

//ADD
doctorAddons.push(scrappedTape());

function polishedElectrode() {
    var addon = selectAddOn("Polished Electrode", ["50% increased shock range.", "Considerably increased charge time."], "Uncommon", "Increased shock range with increase charge time.", "IconAddon_polishedElectrode.png", "Doctor", ["extra", "extra"]);
    return addon;
}

//ADD
doctorAddons.push(polishedElectrode());

function interviewTape() {
    var addon = selectAddOn("Interview Tape", ["Shock Therapy becomes a beam with a range of 20m and width of 2m"], "Uncommon", "Shock Therapy becomes a beam with a range of 20m and width of 2m", "IconAddon_interviewTape.png", "Doctor", ["extra", "extra"]);
    return addon;
}

//ADD
doctorAddons.push(interviewTape());

function restraintClass2() {
    var addon = selectAddOn("Restraint - Class 2", ["Reveals survivor auras for 1s on madness tier up.", "increased duration for doctor illusions", "auras of illusions are visible."], "Uncommon", "Doctor auras are visible. Survivors are revealed on madness up.", "IconAddon_restraintClassII.png", "Doctor", ["extra", "extra"]);
    return addon;
}

//ADD
doctorAddons.push(restraintClass2());

function orderClass2() {
    var addon = selectAddOn("Order - Class 2", ["15% extra madness from shock field", "Adds 50% that mad survivors will get a skill check in a random location."], "Uncommon", "Extra madness. Random skill check location chance", "IconAddon_orderClassII.png", "Doctor", ["extra", "extra"]);
    return addon;
}

//ADD
doctorAddons.push(orderClass2());

function disciplineClass2() {
    var addon = selectAddOn("Discipline - Class 2", ["15% extra madness from shock therapy", "A slight chance that survivors will see the stain for 3s."], "Uncommon", "Increase in madness from shock therapy. Chance for stain illusion.", "IconAddon_diciplineClassII.png", "Doctor", ["extra", "extra"]);
    return addon;
}

//ADD
doctorAddons.push(disciplineClass2());

function calmClass2() {
    var addon = selectAddOn("Calm - Class 2", ["Terror radius changes with mode.", "Adds the chance for mad survivors to hear the terror radius heartbeat for 20s"], "Uncommon", "Mad survivors can hear fake heartbeats.", "IconAddon_calmClassII.png", "Doctor", ["extra", "extra"]);
    return addon;
}

//ADD
doctorAddons.push(calmClass2());

function highStimElectrode() {
    var addon = selectAddOn("High Stimulus Electrode", ["75% increase to shock range", "Tremendously increased charge time."], "Rare", "75% increased range. Increased charge time.", "IconAddon_highStimulusElectrode.png", "Doctor", ["extra", "extra"]);
    return addon;
}

//ADD
doctorAddons.push(highStimElectrode());

function restraintClass3() {
    var addon = selectAddOn("Restraint - Class 3", ["Reveals survivor auras for 2s on madness tier up.", "increased duration for doctor illusions", "auras of illusions are visible."], "Rare", "Doctor auras are visible. Survivors are revealed on madness up.", "IconAddon_restraintClassIII.png", "Doctor", ["extra", "extra"]);
    return addon;
}

//ADD
doctorAddons.push(restraintClass3());

function disciplineClass3() {
    var addon = selectAddOn("Discipline - Class 3", ["20% extra madness from shock therapy", "A moderate chance that survivors will see the stain for 4s."], "Rare", "Increase in madness from shock therapy. Chance for stain illusion.", "IconAddon_diciplineClassIII.png", "Doctor", ["extra", "extra"]);
    return addon;
}

//ADD
doctorAddons.push(disciplineClass3());

function restraintNotes() {
    var addon = selectAddOn("Restraint - Carter's Notes", ["Reveals survivor auras for 3s on madness tier up.", "increased duration for doctor illusions", "auras of illusions are visible."], "Very Rare", "Doctor auras are visible. Survivors are revealed on madness up.", "IconAddon_restraintCartersNotes.png", "Doctor", ["extra", "extra"]);
    return addon;
}

//ADD
doctorAddons.push(restraintNotes());

function orderNotes() {
    var addon = selectAddOn("Order - Carter's Notes", ["25% extra madness from shock field", "Adds 100% that mad survivors will get a skill check in a random location."], "Very Rare", "Extra madness. Random skill check locations", "IconAddon_orderCartersNotes.png", "Doctor", ["extra", "extra"]);
    return addon;
}

//ADD
doctorAddons.push(orderNotes());

function obedienceNotes() {
    var addon = selectAddOn("Obedience - Carter's Notes", ["2s increase to snap out of it.", "Madness III causes exhaustion."], "Very Rare", "2s increase to snap out of it. Mad survivors are exhausted at T3.", "IconAddon_obedienceCartersNotes.png", "Doctor", ["extra", "extra"]);
    return addon;
}

//ADD
doctorAddons.push(obedienceNotes());

function disciplineNotes() {
    var addon = selectAddOn("Discipline - Carter's Notes", ["25% extra madness from shock therapy", "A moderate chance that survivors will see the stain for 5s."], "Very Rare", "Increase in madness from shock therapy. Chance for stain illusion.", "IconAddon_diciplineCartersNotes.png", "Doctor", ["extra", "extra"]);
    return addon;
}

//ADD
doctorAddons.push(disciplineNotes());

function calmNotes() {
    var addon = selectAddOn("Calm - Carter's Notes", ["Terror radius changes with mode.", "Adds the chance for mad survivors to hear the terror radius heartbeat for 20s at madness 2", "At madness 3 the heartbeat never stops."], "Very Rare", "Mad survivors can hear fake heartbeats.", "IconAddon_calmCartersNotes.png", "Doctor", ["extra", "extra"]);
    return addon;
}

//ADD
doctorAddons.push(calmNotes());

function iridescentKing() {
    var addon = selectAddOn("Iridescent King", ["Random afflictions are given to survivors based on madness tier."], "Ultra Rare", "Random afflictions are given to survivors based on madness tier.", "IconAddon_iridescentKing.png", "Doctor", ["extra", "extra"]);
    return addon;
}

//ADD
doctorAddons.push(iridescentKing());

//BEGIN HUNTRESS ADDONS
function coarseStone() {
    var addon = selectAddOn("Coarse Stone", ["Addon Text", "Addon Text", "Addon Text"], "Common", "Addon Text", "iconAddon_coarseStone.png", "Huntress", ["extra", "extra"]);
    return addon;
}

//ADD
huntressAddons.push(coarseStone());

function berusToxin() {
    var addon = selectAddOn("Berus Toxin", ["Addon Text", "Addon Text", "Addon Text"], "Common", "Addon Text", "iconAddon_berusToxin.png", "Huntress", ["extra", "extra"]);
    return addon;
}

//ADD
huntressAddons.push(berusToxin());

function bandagedHaft() {
    var addon = selectAddOn("Bandaged Haft", ["Addon Text", "Addon Text", "Addon Text"], "Common", "Addon Text", "iconAddon_bandagedHaft.png", "Huntress", ["extra", "extra"]);
    return addon;
}

//ADD
huntressAddons.push(bandagedHaft());

function amanitaToxin() {
    var addon = selectAddOn("Amanita Toxin", ["Addon Text", "Addon Text", "Addon Text"], "Common", "Addon Text", "iconAddon_amanitaToxin.png", "Huntress", ["extra", "extra"]);
    return addon;
}

//ADD
huntressAddons.push(amanitaToxin());

function yewSeedBrew() {
    var addon = selectAddOn("Yew Seed Brew", ["Addon Text", "Addon Text", "Addon Text"], "Uncommon", "Addon Text", "iconAddon_yewSeedBrew.png", "Huntress", ["extra", "extra"]);
    return addon;
}

//ADD
huntressAddons.push(yewSeedBrew());

function shinyPin() {
    var addon = selectAddOn("Shiny Pin", ["Addon Text", "Addon Text", "Addon Text"], "Uncommon", "Addon Text", "iconAddon_shinyPin.png", "Huntress", ["extra", "extra"]);
    return addon;
}

//ADD
huntressAddons.push(shinyPin());

function oakHaft() {
    var addon = selectAddOn("Oak Haft", ["Addon Text", "Addon Text", "Addon Text"], "Uncommon", "Addon Text", "iconAddon_oakHaft.png", "Huntress", ["extra", "extra"]);
    return addon;
}

//ADD
huntressAddons.push(oakHaft());

function mannaGrassBraid() {
    var addon = selectAddOn("Manna Grass Braid", ["Addon Text", "Addon Text", "Addon Text"], "Uncommon", "Addon Text", "iconAddon_mannaGrassBraid.png", "Huntress", ["extra", "extra"]);
    return addon;
}

//ADD
huntressAddons.push(mannaGrassBraid());

function leatherLoop() {
    var addon = selectAddOn("Leather Loop", ["Addon Text", "Addon Text", "Addon Text"], "Uncommon", "Addon Text", "iconAddon_leatherLoop.png", "Huntress", ["extra", "extra"]);
    return addon;
}

//ADD
huntressAddons.push(leatherLoop());

function fineStone() {
    var addon = selectAddOn("Fine Stone", ["Addon Text", "Addon Text", "Addon Text"], "Uncommon", "Addon Text", "iconAddon_fineStone.png", "Huntress", ["extra", "extra"]);
    return addon;
}

//ADD
huntressAddons.push(fineStone());

function deerskinGloves() {
    var addon = selectAddOn("Deerskin Gloves", ["Addon Text", "Addon Text", "Addon Text"], "Uncommon", "Addon Text", "iconAddon_deerskinGloves.png", "Huntress", ["extra", "extra"]);
    return addon;
}

//ADD
huntressAddons.push(deerskinGloves());

function yewSeedConcoction() {
    var addon = selectAddOn("Yew Seed Concoction", ["Addon Text", "Addon Text", "Addon Text"], "Rare", "Addon Text", "iconAddon_yewSeedConcoction.png", "Huntress", ["extra", "extra"]);
    return addon;
}

//ADD
huntressAddons.push(yewSeedConcoction());

function venomousConcoction() {
    var addon = selectAddOn("Venomous Concoction", ["Addon Text", "Addon Text", "Addon Text"], "Rare", "Addon Text", "iconAddon_venomousConcoction.png", "Huntress", ["extra", "extra"]);
    return addon;
}

//ADD
huntressAddons.push(venomousConcoction());

function rustyHead() {
    var addon = selectAddOn("Rusty Head", ["Addon Text", "Addon Text", "Addon Text"], "Rare", "Addon Text", "iconAddon_rustyHead.png", "Huntress", ["extra", "extra"]);
    return addon;
}

//ADD
huntressAddons.push(rustyHead());

function pungentFiale() {
    var addon = selectAddOn("Pungent Fiale", ["Addon Text", "Addon Text", "Addon Text"], "Rare", "Addon Text", "iconAddon_pungentFiale.png", "Huntress", ["extra", "extra"]);
    return addon;
}

//ADD
huntressAddons.push(pungentFiale());

function flowerBabushka() {
    var addon = selectAddOn("Flower Babushka", ["Addon Text", "Addon Text", "Addon Text"], "Rare", "Addon Text", "iconAddon_flowerBabushka.png", "Huntress", ["extra", "extra"]);
    return addon;
}

//ADD
huntressAddons.push(flowerBabushka());

function infantryBelt() {
    var addon = selectAddOn("Infantry Belt", ["Addon Text", "Addon Text", "Addon Text"], "Very Rare", "Addon Text", "iconAddon_infantryBelt.png", "Huntress", ["extra", "extra"]);
    return addon;
}

//ADD
huntressAddons.push(infantryBelt());

function glowingConcoction() {
    var addon = selectAddOn("Glowing Concoction", ["Addon Text", "Addon Text", "Addon Text"], "Very Rare", "Addon Text", "iconAddon_glowingConcoction.png", "Huntress", ["extra", "extra"]);
    return addon;
}

//ADD
huntressAddons.push(glowingConcoction());

function begrimedHead() {
    var addon = selectAddOn("Begrimed Head", ["Addon Text", "Addon Text", "Addon Text"], "Very Rare", "Addon Text", "iconAddon_begrimedHead.png", "Huntress", ["extra", "extra"]);
    return addon;
}

//ADD
huntressAddons.push(begrimedHead());

function iridescentHead() {
    var addon = selectAddOn("Iridescent Head", ["Addon Text", "Addon Text", "Addon Text"], "Ultra Rare", "Addon Text", "iconAddon_iridescentHead.png", "Huntress", ["extra", "extra"]);
    return addon;
}

//ADD
huntressAddons.push(iridescentHead());

//Leatherface addons (only the ones that differ from hillbilly's)
function knifeScratches() {
    var addon = selectAddOn("Knife Scratches", ["Addon Text", "Addon Text", "Addon Text"], "Uncommon", "Addon Text", "iconAddon_knifeScratches.png", "Leatherface", ["extra", "extra"]);
    return addon;
}

//ADD
cannibalAddons.push(knifeScratches());

function chilli() {
    var addon = selectAddOn("Chili", ["Addon Text", "Addon Text", "Addon Text"], "Uncommon", "Addon Text", "iconAddon_chili.png", "Leatherface", ["extra", "extra"]);
    return addon;
}

//ADD
cannibalAddons.push(chilli());

function theGrease() {
    var addon = selectAddOn("The Grease", ["Addon Text", "Addon Text", "Addon Text"], "Rare", "Addon Text", "iconAddon_theGrease.png", "Leatherface", ["extra", "extra"]);
    return addon;
}

//ADD
cannibalAddons.push(theGrease());

function beastsMarks() {
    var addon = selectAddOn("The Beast's Marks", ["Addon Text", "Addon Text", "Addon Text"], "Rare", "Addon Text", "iconAddon_theBeastsMark.png", "Leatherface", ["extra", "extra"]);
    return addon;
}

//ADD
cannibalAddons.push(beastsMarks());

function awardChilli() {
    var addon = selectAddOn("Award-winning Chili", ["Addon Text", "Addon Text", "Addon Text"], "Very Rare", "Addon Text", "iconAddon_awardwinningChili.png", "Leatherface", ["extra", "extra"]);
    return addon;
}

//ADD
cannibalAddons.push(awardChilli());

//Freddy Addons
function woolShirt() {
    var addon = selectAddOn("Wool Shirt", ["addon text"], "Common", "addon text", "iconAddon_woolShirt.png", "Freddy", ["extra"]);
    return addon;
}

//ADD
freddyAddons.push(woolShirt());

function sheepBlock() {
    var addon = selectAddOn("Sheep Block", ["addon text"], "Common", "addon text", "iconAddon_sheepBlock.png", "Freddy", ["extra"]);
    return addon;
}

//ADD
freddyAddons.push(sheepBlock());

function kidsDrawing() {
    var addon = selectAddOn("Kid's Drawing", ["addon text"], "Common", "addon text", "iconAddon_kidsDrawing.png", "Freddy", ["extra"]);
    return addon;
}

//ADD
freddyAddons.push(kidsDrawing());

function gardenRake() {
    var addon = selectAddOn("Garden Rake", ["addon text"], "Common", "addon text", "iconAddon_gardenRake.png", "Freddy", ["extra"]);
    return addon;
}

//ADD
freddyAddons.push(gardenRake());

function ptypeClaws() {
    var addon = selectAddOn("Prototype Claws", ["addon text"], "Uncommon", "addon text", "iconAddon_prototypeClaw.png", "Freddy", ["extra"]);
    return addon;
}

//ADD
freddyAddons.push(ptypeClaws());

function outdoorRope() {
    var addon = selectAddOn("Outdoor Rope", ["addon text"], "Uncommon", "addon text", "iconAddon_outdoorRope.png", "Freddy", ["extra"]);
    return addon;
}

//ADD
freddyAddons.push(outdoorRope());

function nancysSketch() {
    var addon = selectAddOn("Nancy's Sketch", ["addon text"], "Uncommon", "addon text", "iconAddon_nancysSketch.png", "Freddy", ["extra"]);
    return addon;
}

//ADD
freddyAddons.push(nancysSketch());

function greenDress() {
    var addon = selectAddOn("Green Dress", ["addon text"], "Uncommon", "addon text", "iconAddon_greenDress.png", "Freddy", ["extra"]);
    return addon;
}

//ADD
freddyAddons.push(greenDress());

function catBlock() {
    var addon = selectAddOn("Cat Block", ["addon text"], "Uncommon", "addon text", "iconAddon_catBlock.png", "Freddy", ["extra"]);
    return addon;
}

//ADD
freddyAddons.push(catBlock());

function unicornBlock() {
    var addon = selectAddOn("Unicorn Block", ["addon text"], "Rare", "addon text", "iconAddon_unicornBlock.png", "Freddy", ["extra"]);
    return addon;
}

//ADD
freddyAddons.push(unicornBlock());

function swingChains() {
    var addon = selectAddOn("Swing Chains", ["addon text"], "Rare", "addon text", "iconAddon_swingChains.png", "Freddy", ["extra"]);
    return addon;
}

//ADD
freddyAddons.push(swingChains());

function nancysMaster() {
    var addon = selectAddOn("Nancy's Masterpiece", ["addon text"], "Rare", "addon text", "iconAddon_nancysMasterpiece.png", "Freddy", ["extra"]);
    return addon;
}

//ADD
freddyAddons.push(nancysMaster());

function jumpRope() {
    var addon = selectAddOn("Jump Rope", ["addon text"], "Rare", "addon text", "iconAddon_jumpRope.png", "Freddy", ["extra"]);
    return addon;
}

//ADD
freddyAddons.push(jumpRope());

function blueDress() {
    var addon = selectAddOn("Blue Dress", ["addon text"], "Rare", "addon text", "iconAddon_blueDress.png", "Freddy", ["extra"]);
    return addon;
}

//ADD
freddyAddons.push(blueDress());

function pillBottle() {
    var addon = selectAddOn("Pill Bottle", ["addon text"], "Very Rare", "addon text", "iconAddon_pillBottle.png", "Freddy", ["extra"]);
    return addon;
}

//ADD
freddyAddons.push(pillBottle());

function paintThinner() {
    var addon = selectAddOn("Paint Thinner", ["addon text"], "Very Rare", "addon text", "iconAddon_paintThinner.png", "Freddy", ["extra"]);
    return addon;
}

//ADD
freddyAddons.push(paintThinner());

function classPhoto() {
    var addon = selectAddOn("Class Photo", ["addon text"], "Very Rare", "addon text", "iconAddon_classPhoto.png", "Freddy", ["extra"]);
    return addon;
}

//ADD
freddyAddons.push(classPhoto());

function zBlock() {
    var addon = selectAddOn("Z Block", ["addon text"], "Very Rare", "addon text", "iconAddon_zBlock.png", "Freddy", ["extra"]);
    return addon;
}

//ADD
freddyAddons.push(zBlock());

function redBrush() {
    var addon = selectAddOn("Red Paint Brush", ["addon text"], "Ultra Rare", "addon text", "iconAddon_redPaintBrush.png", "Freddy", ["extra"]);
    return addon;
}

//ADD
freddyAddons.push(redBrush());

function blackBox() {
    var addon = selectAddOn("Black Box", ["addon text"], "Ultra Rare", "addon text", "iconAddon_blackBox.png", "Freddy", ["extra"]);
    return addon;
}

//ADD
freddyAddons.push(blackBox());
//end freddy addon section

//begin pig addon section
function workshopGrease() {
    var addon = selectAddOn("Workshop Grease", ["addon text"], "Common", "addon text", "iconAddon_workshopGrease.png", "Pig", ["extra"]);
    return addon;
}

//ADD
pigAddons.push(workshopGrease());

function sSyringe() {
    var addon = selectAddOn("Shattered Syringe", ["addon text"], "Common", "addon text", "iconAddon_shatteredSyringe.png", "Pig", ["extra"]);
    return addon;
}

//ADD
pigAddons.push(sSyringe());

function jMedFile() {
    var addon = selectAddOn("John's Medical File", ["addon text"], "Common", "addon text", "iconAddon_johnsMedicalFile.png", "Pig", ["extra"]);
    return addon;
}

//ADD
pigAddons.push(jMedFile());

function combatStraps() {
    var addon = selectAddOn("Combat Straps", ["addon text"], "Common", "addon text", "iconAddon_combatStraps.png", "Pig", ["extra"]);
    return addon;
}

//ADD
pigAddons.push(combatStraps());

function videoTape() {
    var addon = selectAddOn("Video Tape", ["addon text"], "Uncommon", "addon text", "iconAddon_videoTape.png", "Pig", ["extra"]);
    return addon;
}

//ADD
pigAddons.push(videoTape());

function utilityBlades() {
    var addon = selectAddOn("Utility Blades", ["addon text"], "Uncommon", "addon text", "iconAddon_utilityBlades.png", "Pig", ["extra"]);
    return addon;
}

//ADD
pigAddons.push(utilityBlades());

function razorWires() {
    var addon = selectAddOn("Razor Wires", ["addon text"], "Uncommon", "addon text", "iconAddon_razerWire.png", "Pig", ["extra"]);
    return addon;
}

//ADD
pigAddons.push(razorWires());

function lastWill() {
    var addon = selectAddOn("Last Will", ["addon text"], "Uncommon", "addon text", "iconAddon_lastWill.png", "Pig", ["extra"]);
    return addon;
}

//ADD
pigAddons.push(lastWill());

function faceMask() {
    var addon = selectAddOn("Face Mask", ["addon text"], "Uncommon", "addon text", "iconAddon_faceMask.png", "Pig", ["extra"]);
    return addon;
}

//ADD
pigAddons.push(faceMask());

function sRelToxin() {
    var addon = selectAddOn("Slow-Release Toxin", ["addon text"], "Rare", "addon text", "iconAddon_slowReleaseToxin.png", "Pig", ["extra"]);
    return addon;
}

//ADD
pigAddons.push(sRelToxin());

function rustyAtt() {
    var addon = selectAddOn("Rusty Attachments", ["addon text"], "Rare", "addon text", "iconAddon_rustyAttachments.png", "Pig", ["extra"]);
    return addon;
}

//ADD
pigAddons.push(rustyAtt());

function jigsawSketch() {
    var addon = selectAddOn("Jigsaw's Sketch", ["addon text"], "Rare", "addon text", "iconAddon_jigsawsAnnotatedPlan.png", "Pig", ["extra"]);
    return addon;
}

//ADD
pigAddons.push(jigsawSketch());

function intRazor() {
    var addon = selectAddOn("Interlocking Razor", ["addon text"], "Rare", "addon text", "iconAddon_interlockingRazor.png", "Pig", ["extra"]);
    return addon;
}

//ADD
pigAddons.push(intRazor());

function bagOfGears() {
    var addon = selectAddOn("Bag Of Gears", ["addon text"], "Rare", "addon text", "iconAddon_bagOfGears.png", "Pig", ["extra"]);
    return addon;
}

//ADD
pigAddons.push(bagOfGears());

function tamperedTimer() {
    var addon = selectAddOn("Tampered Timer", ["addon text"], "Very Rare", "addon text", "iconAddon_tamperedTimer.png", "Pig", ["extra"]);
    return addon;
}

//ADD
pigAddons.push(tamperedTimer());

function jigsAnPlan() {
    var addon = selectAddOn("Jigsaw's Annotated Plan", ["addon text"], "Very Rare", "addon text", "iconAddon_jigsawsSketch.png", "Pig", ["extra"]);
    return addon;
}

//ADD
pigAddons.push(jigsAnPlan());

function crateOfGears() {
    var addon = selectAddOn("Crate Of Gears", ["addon text"], "Very Rare", "addon text", "iconAddon_crateOfGears.png", "Pig", ["extra"]);
    return addon;
}

//ADD
pigAddons.push(crateOfGears());

function amandaSecret() {
    var addon = selectAddOn("Amanda's Secret", ["addon text"], "Very Rare", "addon text", "iconAddon_amandasSecret.png", "Pig", ["extra"]);
    return addon;
}

//ADD
pigAddons.push(amandaSecret());

function ruleSet2() {
    var addon = selectAddOn("Rules Set No.2", ["addon text"], "Ultra Rare", "addon text", "iconAddon_rulesSetN2.png", "Pig", ["extra"]);
    return addon;
}

//ADD
pigAddons.push(ruleSet2());

function amandaLetter() {
    var addon = selectAddOn("Amanda's Letter", ["addon text"], "Ultra Rare", "addon text", "iconAddon_amandasLetter.png", "Pig", ["extra"]);
    return addon;
}

//ADD
pigAddons.push(amandaLetter());

//Clown adds section
function smellySoles() {
    var addon = selectAddOn("Smelly Inner Soles", ["addon text"], "Common", "addon text", "iconAddon_smellyInnerSoles.png", "Clown", ["extra"]);
    return addon;
}

//ADD
clownAddons.push(smellySoles());

function robinFeather() {
    var addon = selectAddOn("Robin Feather", ["addon text"], "Common", "addon text", "iconAddon_robinFeather.png", "Clown", ["extra"]);
    return addon;
}

//ADD
clownAddons.push(robinFeather());

function pGloves() {
    var addon = selectAddOn("Fingerless Parade Gloves", ["addon text"], "Common", "addon text", "iconAddon_fingerlessParadeGloves.png", "Clown", ["extra"]);
    return addon;
}

//ADD
clownAddons.push(pGloves());

function ether5() {
    var addon = selectAddOn("Ether 5 Vol%", ["addon text"], "Common", "addon text", "iconAddon_ether5.png", "Clown", ["extra"]);
    return addon;
}

//ADD
clownAddons.push(ether5());

function tCStopper() {
    var addon = selectAddOn("Thick Cork Stopper", ["addon text"], "Uncommon", "addon text", "iconAddon_thickCorkStopper.png", "Clown", ["extra"]);
    return addon;
}

//ADD
clownAddons.push(tCStopper());

function sSBottle() {
    var addon = selectAddOn("Sticky Soda Bottle", ["addon text"], "Uncommon", "addon text", "iconAddon_stickySodaBottle.png", "Clown", ["extra"]);
    return addon;
}

//ADD
clownAddons.push(sSBottle());

function sFeather() {
    var addon = selectAddOn("Starling Feather", ["addon text"], "Uncommon", "addon text", "iconAddon_starlingFeather.png", "Clown", ["extra"]);
    return addon;
}

//ADD
clownAddons.push(sFeather());

function solveJug() {
    var addon = selectAddOn("Solvent Jug", ["addon text"], "Uncommon", "addon text", "iconAddon_solventJug.png", "Clown", ["extra"]);
    return addon;
}

//ADD
clownAddons.push(solveJug());

function keroCan() {
    var addon = selectAddOn("Kerosene Can", ["addon text"], "Uncommon", "addon text", "iconAddon_keroseneCan.png", "Clown", ["extra"]);
    return addon;
}

//ADD
clownAddons.push(keroCan());

function VHS() {
    var addon = selectAddOn("VHS Porn", ["addon text"], "Rare", "addon text", "iconAddon_vhsPorn.png", "Clown", ["extra"]);
    return addon;
}

//ADD
clownAddons.push(VHS());

function SAVial() {
    var addon = selectAddOn("Sulphuric Acid Vial", ["addon text"], "Rare", "addon text", "iconAddon_sulfuricAcidVial.png", "Clown", ["extra"]);
    return addon;
}

//ADD
clownAddons.push(SAVial());

function FoBleach() {
    var addon = selectAddOn("Flask Of Bleach", ["addon text"], "Rare", "addon text", "iconAddon_flaskOfBleach.png", "Clown", ["extra"]);
    return addon;
}

//ADD
clownAddons.push(FoBleach());

function ether10() {
    var addon = selectAddOn("Ether 10 Vol%", ["addon text"], "Rare", "addon text", "iconAddon_ether10.png", "Clown", ["extra"]);
    return addon;
}

//ADD
clownAddons.push(ether10());

function BoChlor() {
    var addon = selectAddOn("Bottle Of Chloroform", ["addon text"], "Rare", "addon text", "iconAddon_bottleOfChloroform.png", "Clown", ["extra"]);
    return addon;
}

//ADD
clownAddons.push(BoChlor());

function gMKit() {
    var addon = selectAddOn("Garish Make-up Kit", ["addon text"], "Very Rare", "addon text", "iconAddon_garishMakeupKit.png", "Clown", ["extra"]);
    return addon;
}

//ADD
clownAddons.push(gMKit());

function ether15() {
    var addon = selectAddOn("Ether 15 Vol%", ["addon text"], "Very Rare", "addon text", "iconAddon_ether15.png", "Clown", ["extra"]);
    return addon;
}

//ADD
clownAddons.push(ether15());

function cigBox() {
    var addon = selectAddOn("Cigar Box", ["addon text"], "Very Rare", "addon text", "iconAddon_cigarBox.png", "Clown", ["extra"]);
    return addon;
}

//ADD
clownAddons.push(cigBox());

function cGBottle() {
    var addon = selectAddOn("Cheap Gin Bottle", ["addon text"], "Very Rare", "addon text", "iconAddon_cheapGinBottle.png", "Clown", ["extra"]);
    return addon;
}

//ADD
clownAddons.push(cGBottle());

function tMFinger() {
    var addon = selectAddOn("Tattoo's Middle Finger", ["addon text"], "Ultra Rare", "addon text", "iconAddon_tattoosMiddleFinger.png", "Clown", ["extra"]);
    return addon;
}

//ADD
clownAddons.push(tMFinger());

function rpFinger() {
    var addon = selectAddOn("Redhead's Pinky Finger", ["addon text"], "Ultra Rare", "addon text", "iconAddon_redheadsPinkyFinger.png", "Clown", ["extra"]);
    return addon;
}

//ADD
clownAddons.push(rpFinger());

//END CLOWN ADDONS

//SPIRIT ADDONS

function zori() {
    var addon = selectAddOn("Zori", ["addon text"], "Common", "addon text", "iconAddon_zori.png", "Spirit", ["extra"]);
    return addon;
}

//ADD
spiritAddons.push(zori());

function sAmulet() {
    var addon = selectAddOn("Shiawase Amulet", ["addon text"], "Common", "addon text", "iconAddon_ShiawaseAmulet.png", "Spirit", ["extra"]);
    return addon;
}

//ADD
spiritAddons.push(sAmulet());

function origamiCrane() {
    var addon = selectAddOn("Origami Crane", ["addon text"], "Common", "addon text", "iconAddon_origamiCrane.png", "Spirit", ["extra"]);
    return addon;
}

//ADD
spiritAddons.push(origamiCrane());

function gbComb() {
    var addon = selectAddOn("Gifted Bamboo Comb", ["addon text"], "Common", "addon text", "iconAddon_giftedBambooComb.png", "Spirit", ["extra"]);
    return addon;
}

//ADD
spiritAddons.push(gbComb());


function wHairRibbon() {
    var addon = selectAddOn("White Hair Ribbon", ["addon text"], "Uncommon", "addon text", "iconAddon_whiteHairRibbon.png", "Spirit", ["extra"]);
    return addon;
}

//ADD
spiritAddons.push(wHairRibbon());

function rBrokenWatch() {
    var addon = selectAddOn("Rin's Broken Watch", ["addon text"], "Uncommon", "addon text", "iconAddon_rinsBrokenWatch.png", "Spirit", ["extra"]);
    return addon;
}

//ADD
spiritAddons.push(rBrokenWatch());

function msDayCap() {
    var addon = selectAddOn("Muddy Sports Day Cap", ["addon text"], "Uncommon", "addon text", "iconAddon_muddySportCap.png", "Spirit", ["extra"]);
    return addon;
}

//ADD
spiritAddons.push(msDayCap());

function kaiunTalisman() {
    var addon = selectAddOn("Kaiun Talisman", ["addon text"], "Uncommon", "addon text", "iconAddon_kaiunTalisman.png", "Spirit", ["extra"]);
    return addon;
}

//ADD
spiritAddons.push(kaiunTalisman());

function juniperBonsai() {
    var addon = selectAddOn("Juniper Bonsai", ["addon text"], "Uncommon", "addon text", "iconAddon_juniperBonzai.png", "Spirit", ["extra"]);
    return addon;
}

//ADD
spiritAddons.push(juniperBonsai());

function rustyFlute() {
    var addon = selectAddOn("Rusty Flute", ["addon text"], "Rare", "addon text", "iconAddon_rustyFlute.png", "Spirit", ["extra"]);
    return addon;
}

//ADD
spiritAddons.push(rustyFlute());

function kTalisman() {
    var addon = selectAddOn("Katsumori Talisman", ["addon text"], "Rare", "addon text", "iconAddon_katsumoriTalisman.png", "Spirit", ["extra"]);
    return addon;
}

//ADD
spiritAddons.push(kTalisman());

function katanaTsuba() {
    var addon = selectAddOn("Katana Tsuba", ["addon text"], "Rare", "addon text", "iconAddon_katanaTsuba.png", "Spirit", ["extra"]);
    return addon;
}

//ADD
spiritAddons.push(katanaTsuba());

function dirtyUwabaki() {
    var addon = selectAddOn("Dirty Uwabaki", ["addon text"], "Rare", "addon text", "iconAddon_dirtyUwabaki.png", "Spirit", ["extra"]);
    return addon;
}

//ADD
spiritAddons.push(dirtyUwabaki());

function bHairBrooch() {
    var addon = selectAddOn("Bloody Hair Brooch", ["addon text"], "Rare", "addon text", "iconAddon_bloodyHairBroochi.png", "Spirit", ["extra"]);
    return addon;
}

//ADD
spiritAddons.push(bHairBrooch());

function yakAmulet() {
    var addon = selectAddOn("Yakuyoke Amulet", ["addon text"], "Very Rare", "addon text", "iconAddon_yakuyokeAmulet.png", "Spirit", ["extra"]);
    return addon;
}

//ADD
spiritAddons.push(yakAmulet());

function wazSaya() {
    var addon = selectAddOn("Wakizashi Saya", ["addon text"], "Very Rare", "addon text", "iconAddon_wakizashiSaya.png", "Spirit", ["extra"]);
    return addon;
}

//ADD
spiritAddons.push(wazSaya());

function pbBracelet() {
    var addon = selectAddOn("Prayer Beads Bracelet", ["addon text"], "Very Rare", "addon text", "iconAddon_prayersBeads.png", "Spirit", ["extra"]);
    return addon;
}

//ADD
spiritAddons.push(pbBracelet());

function dcBlossom() {
    var addon = selectAddOn("Dried Cherry Blossom", ["addon text"], "Very Rare", "addon text", "iconAddon_driedCherryBlossom.png", "Spirit", ["extra"]);
    return addon;
}

//ADD
spiritAddons.push(dcBlossom());

function mdRing() {
    var addon = selectAddOn("Mother-Daughter Ring", ["addon text"], "Ultra Rare", "addon text", "iconAddon_motherDaughterRing.png", "Spirit", ["extra"]);
    return addon;
}

//ADD
spiritAddons.push(mdRing());

function fGlasses() {
    var addon = selectAddOn("Father's Glasses", ["addon text"], "Ultra Rare", "addon text", "iconAddon_fathersGlasses.png", "Spirit", ["extra"]);
    return addon;
}

//ADD
spiritAddons.push(fGlasses());

//END SPIRIT ADDONS

//Legion Addons Start

function sFacePin() {
    var addon = selectAddOn("Smiley Face Pin", ["addon text"], "Common", "addon text", "iconAddon_smileyFaceButton.png", "Legion", ["extra"]);
    return addon;
}

//ADD
legionAddons.push(sFacePin());

function sRuler() {
    var addon = selectAddOn("Scratched Ruler", ["addon text"], "Common", "addon text", "iconAddon_scratchedRuler.png", "Legion", ["extra"]);
    return addon;
}

//ADD
legionAddons.push(sRuler());

function mList() {
    var addon = selectAddOn("Mischief List", ["addon text"], "Common", "addon text", "iconAddon_mischiefList.png", "Legion", ["extra"]);
    return addon;
}

//ADD
legionAddons.push(mList());

function fBracelet() {
    var addon = selectAddOn("Friendship Bracelet", ["addon text"], "Common", "addon text", "iconAddon_friendshipBracelet.png", "Legion", ["extra"]);
    return addon;
}

//ADD
legionAddons.push(fBracelet());

function nSPills() {
    var addon = selectAddOn("Never Sleep Pills", ["addon text"], "Uncommon", "addon text", "iconAddon_neverSleepPills.png", "Legion", ["extra"]);
    return addon;
}

//ADD
legionAddons.push(nSPills());

function mSketch() {
    var addon = selectAddOn("Mural Sketch", ["addon text"], "Uncommon", "addon text", "iconAddon_muralSketch.png", "Legion", ["extra"]);
    return addon;
}

//ADD
legionAddons.push(mSketch());

function jMTape() {
    var addon = selectAddOn("Julie\'s Mix Tape", ["addon text"], "Uncommon", "addon text", "iconAddon_juliesMixtape.png", "Legion", ["extra"]);
    return addon;
}

//ADD
legionAddons.push(jMTape());

function eRuler() {
    var addon = selectAddOn("Etched Ruler", ["addon text"], "Uncommon", "addon text", "iconAddon_etchedRuler.png", "Legion", ["extra"]);
    return addon;
}

//ADD
legionAddons.push(eRuler());

function dSPin() {
    var addon = selectAddOn("Deface Smiley Pin", ["addon text"], "Uncommon", "addon text", "iconAddon_defacedSmileyButton.png", "Legion", ["extra"]);
    return addon;
}

//ADD
legionAddons.push(dSPin());

function tLPin() {
    var addon = selectAddOn("The Legion Pin", ["addon text"], "Rare", "addon text", "iconAddon_theLegionButton.png", "Legion", ["extra"]);
    return addon;
}

//ADD
legionAddons.push(tLPin());

function sMTape() {
    var addon = selectAddOn("Susie\'s Mix Tape", ["addon text"], "Rare", "addon text", "iconAddon_suziesMixtape.png", "Legion", ["extra"]);
    return addon;
}

//ADD
legionAddons.push(sMTape());

function sSBook() {
    var addon = selectAddOn("Stolen Sketch Book", ["addon text"], "Rare", "addon text", "iconAddon_stolenSketchbook.png", "Legion", ["extra"]);
    return addon;
}

//ADD
legionAddons.push(sSBook);

function nBlade() {
    var addon = selectAddOn("Nasty Blade", ["addon text"], "Rare", "addon text", "iconAddon_nastyBlade.png", "Legion", ["extra"]);
    return addon;
}

//ADD
legionAddons.push(nBlade());

function joeMTape() {
    var addon = selectAddOn("Joey\'s Mix Tape", ["addon text"], "Rare", "addon text", "iconAddon_joeysMixtape.png", "Legion", ["extra"]);
    return addon;
}

//ADD
legionAddons.push(joeMTape());

function sWStudy() {
    var addon = selectAddOn("Stab Wounds Study", ["addon text"], "Very Rare", "addon text", "iconAddon_stabWoundsStudy.png", "Legion", ["extra"]);
    return addon;
}

//ADD
legionAddons.push(sWStudy());

function fMTape() {
    var addon = selectAddOn("Frank\'s Mix Tape", ["addon text"], "Very Rare", "addon text", "iconAddon_franksMixtape.png", "Legion", ["extra"]);
    return addon;
}

//ADD
legionAddons.push(fMTape());

function flBlade() {
    var addon = selectAddOn("Filthy Blade", ["addon text"], "Very Rare", "addon text", "iconAddon_filthyBlade.png", "Legion", ["extra"]);
    return addon;
}

//ADD
legionAddons.push(flBlade());

function clDirt() {
    var addon = selectAddOn("Cold Dirt", ["addon text"], "Very Rare", "addon text", "iconAddon_coldDirt.png", "Legion", ["extra"]);
    return addon;
}

//ADD
legionAddons.push(clDirt());

function irButton() {
    var addon = selectAddOn("Iridescent Button", ["addon text"], "Ultra Rare", "addon text", "iconAddon_iridescentButton.png", "Legion", ["extra"]);
    return addon;
}

//ADD
legionAddons.push(irButton());

function fumMTape() {
    var addon = selectAddOn("Fuming Mix Tape", ["addon text"], "Ultra Rare", "addon text", "iconAddon_fumingMixtape.png", "Legion", ["extra"]);
    return addon;
}

//ADD
legionAddons.push(fumMTape());

//Legion Addons End

//Plague Addons Begin
function ptFrag() {
    var addon = selectAddOn("Prayer Tablet Fragment", ["addon text"], "Common", "addon text", "iconAddon_prayerTabletFragment.png", "Plague", ["extra"]);
    return addon;
}

//ADD
plagueAddons.push(ptFrag());

function oIncense() {
    var addon = selectAddOn("Olibanum Incense", ["addon text"], "Common", "addon text", "iconAddon_olibanumIncense.png", "Plague", ["extra"]);
    return addon;
}

//ADD
plagueAddons.push(oIncense());

function lSeal() {
    var addon = selectAddOn("Limestone Seal", ["addon text"], "Common", "addon text", "iconAddon_limestoneSeal.png", "Plague", ["extra"]);
    return addon;
}

//ADD
plagueAddons.push(lSeal());

function hSalve() {
    var addon = selectAddOn("Healing Salve", ["addon text"], "Common", "addon text", "iconAddon_healingSalve.png", "Plague", ["extra"]);
    return addon;
}

//ADD
plagueAddons.push(hSalve());

function proAmulet() {
    var addon = selectAddOn("Prophylactic Amulet", ["addon text"], "Uncommon", "addon text", "iconAddon_prophylacticAmulet.png", "Plague", ["extra"]);
    return addon;
}

//ADD
plagueAddons.push(proAmulet());

function potTinc() {
    var addon = selectAddOn("Potent Tincture", ["addon text"], "Uncommon", "addon text", "iconAddon_potentTincture.png", "Plague", ["extra"]);
    return addon;
}

//ADD
plagueAddons.push(potTinc());

function hSeal() {
    var addon = selectAddOn("Haematite Seal", ["addon text"], "Uncommon", "addon text", "iconAddon_hematiteSeal.png", "Plague", ["extra"]);
    return addon;
}

//ADD
plagueAddons.push(hSeal());

function emPotion() {
    var addon = selectAddOn("Emetic Potion", ["addon text"], "Uncommon", "addon text", "iconAddon_emeticPotion.png", "Plague", ["extra"]);
    return addon;
}

//ADD
plagueAddons.push(emPotion());

function blApple() {
    var addon = selectAddOn("Blessed Apple", ["addon text"], "Uncommon", "addon text", "iconAddon_prayerApple.png", "Plague", ["extra"]);
    return addon;
}

//ADD
plagueAddons.push(blApple());

function rOil() {
    var addon = selectAddOn("Rubbing Oil", ["addon text"], "Rare", "addon text", "iconAddon_rubbingOil.png", "Plague", ["extra"]);
    return addon;
}

//ADD
plagueAddons.push(rOil());

function inEmetic() {
    var addon = selectAddOn("Infected Emetic", ["addon text"], "Rare", "addon text", "iconAddon_infectedEmetic.png", "Plague", ["extra"]);
    return addon;
}

//ADD
plagueAddons.push(inEmetic());

function inOintment() {
    var addon = selectAddOn("Incensed Ointment", ["addon text"], "Rare", "addon text", "iconAddon_incensedOintment.png", "Plague", ["extra"]);
    return addon;
}

//ADD
plagueAddons.push(inOintment());

function exAmulet() {
    var addon = selectAddOn("Exorcism Amulet", ["addon text"], "Rare", "addon text", "iconAddon_exorcismAmulet.png", "Plague", ["extra"]);
    return addon;
}

//ADD
plagueAddons.push(exAmulet());

function ashApple() {
    var addon = selectAddOn("Ashen Apple", ["addon text"], "Rare", "addon text", "iconAddon_ashenApple.png", "Plague", ["extra"]);
    return addon;
}

//ADD
plagueAddons.push(ashApple());

function worTablet() {
    var addon = selectAddOn("Worship Tablet", ["addon text"], "Very Rare", "addon text", "iconAddon_worshipTablet.png", "Plague", ["extra"]);
    return addon;
}

//ADD
plagueAddons.push(worTablet());

function vEmetic() {
    var addon = selectAddOn("Vile Emetic", ["addon text"], "Very Rare", "addon text", "iconAddon_vileEmetic.png", "Plague", ["extra"]);
    return addon;
}

//ADD
plagueAddons.push(vEmetic());

function sevToe() {
    var addon = selectAddOn("Severed Toe", ["addon text"], "Very Rare", "addon text", "iconAddon_severedToe.png", "Plague", ["extra"]);
    return addon;
}

//ADD
plagueAddons.push(sevToe());

function devAmulet() {
    var addon = selectAddOn("Devotees Amulet", ["addon text"], "Very Rare", "addon text", "iconAddon_devoteesAmulet.png", "Plague", ["extra"]);
    return addon;
}

//ADD
plagueAddons.push(devAmulet());

function irSeal() {
    var addon = selectAddOn("Iridescent Seal", ["addon text"], "Ultra Rare", "addon text", "iconAddon_IridescentSeal.png", "Plague", ["extra"]);
    return addon;
}

//ADD
plagueAddons.push(irSeal());

function blIncense() {
    var addon = selectAddOn("Black Incense", ["addon text"], "Ultra Rare", "addon text", "iconAddon_blackIncense.png", "Plague", ["extra"]);
    return addon;
}

//ADD
plagueAddons.push(blIncense());

//Plague Addons End
//Ghostface Addons Begin

function philly() {
    var addon = selectAddOn("Philly", ["addon text"], "Common", "addon text", "iconAddon_philly.png", "Ghost Face", ["extra"]);
    return addon;
}

//ADD
ghostfaceAddons.push(philly());

function wMatchbook() {
    var addon = selectAddOn("Walleyes Matchbook", ["addon text"], "Common", "addon text", "iconAddon_walleyesMatchbook.png", "Ghost Face", ["extra"]);
    return addon;
}

//ADD
ghostfaceAddons.push(wMatchbook());

function hlCutouts() {
    var addon = selectAddOn("Headlines Cut-outs", ["addon text"], "Common", "addon text", "iconAddon_headlinesCutouts.png", "Ghost Face", ["extra"]);
    return addon;
}

//ADD
ghostfaceAddons.push(hlCutouts());

function olsJournal() {
    var addon = selectAddOn("Olsen's Journal", ["addon text"], "Uncommon", "addon text", "iconAddon_olsensJournal.png", "Ghost Face", ["extra"]);
    return addon;
}

//ADD
ghostfaceAddons.push(olsJournal());

function cheapC() {
    var addon = selectAddOn("Cheap Cologne", ["addon text"], "Common", "addon text", "iconAddon_cheapCologne.png", "Ghost Face", ["extra"]);
    return addon;
}

//ADD
ghostfaceAddons.push(cheapC());

function teleLens() {
    var addon = selectAddOn("Telephoto Lens", ["addon text"], "Uncommon", "addon text", "iconAddon_telephotoLens.png", "Ghost Face", ["extra"]);
    return addon;
}

//ADD
ghostfaceAddons.push(teleLens());

function cStraps() {
    var addon = selectAddOn("Reusable Cinch Straps", ["addon text"], "Uncommon", "addon text", "iconAddon_reusuableCinchStraps.png", "Ghost Face", ["extra"]);
    return addon;
}

//ADD
ghostfaceAddons.push(cStraps());

function adrBook() {
    var addon = selectAddOn("Olsen's Address Book", ["addon text"], "Uncommon", "addon text", "iconAddon_olsensAddressBook.png", "Ghost Face", ["extra"]);
    return addon;
}

//ADD
ghostfaceAddons.push(adrBook());

function mMap() {
    var addon = selectAddOn("Marked Map", ["addon text"], "Uncommon", "addon text", "iconAddon_markedMap.png", "Ghost Face", ["extra"]);
    return addon;
}

//ADD
ghostfaceAddons.push(mMap());

function olWallet() {
    var addon = selectAddOn("Olsen's Wallet", ["addon text"], "Rare", "addon text", "iconAddon_olsensWallet.png", "Ghost Face", ["extra"]);
    return addon;
}

//ADD
ghostfaceAddons.push(olWallet());

function kSheath() {
    var addon = selectAddOn("Leather Knife Sheath", ["addon text"], "Rare", "addon text", "iconAddon_leatherKnifeSheath.png", "Ghost Face", ["extra"]);
    return addon;
}

//ADD
ghostfaceAddons.push(kSheath());

function lPerfume() {
    var addon = selectAddOn("Lasting Perfume", ["addon text"], "Rare", "addon text", "iconAddon_lastingPerfume.png", "Ghost Face", ["extra"]);
    return addon;
}

//ADD
ghostfaceAddons.push(lPerfume());

function beltClip() {
    var addon = selectAddOn("Knife Belt Clip", ["addon text"], "Rare", "addon text", "iconAddon_knifeBeltClip.png", "Ghost Face", ["extra"]);
    return addon;
}

//ADD
ghostfaceAddons.push(beltClip());

function chPen() {
    var addon = selectAddOn("Chewed Pen", ["addon text"], "Rare", "addon text", "iconAddon_chewedPen.png", "Ghost Face", ["extra"]);
    return addon;
}

//ADD
ghostfaceAddons.push(chPen());

function vRoutine() {
    var addon = selectAddOn("Victim's Detailed Routine", ["addon text"], "Very Rare", "addon text", "iconAddon_victimsDetailedRoutine.png", "Ghost Face", ["extra"]);
    return addon;
}

//ADD
ghostfaceAddons.push(vRoutine());

function nVis() {
    var addon = selectAddOn("Night Vision Monocular", ["addon text"], "Very Rare", "addon text", "iconAddon_nightvisionMoncular.png", "Ghost Face", ["extra"]);
    return addon;
}

//ADD
ghostfaceAddons.push(nVis());

function dlSheath() {
    var addon = selectAddOn("Drop-Leg Knife Sheath", ["addon text"], "Very Rare", "addon text", "iconAddon_dropLegKnifeSheath.png", "Ghost Face", ["extra"]);
    return addon;
}

//ADD
ghostfaceAddons.push(dlSheath());

function drvrLic() {
    var addon = selectAddOn("Driver's License", ["addon text"], "Very Rare", "addon text", "iconAddon_driversLicense.png", "Ghost Face", ["extra"]);
    return addon;
}

//ADD
ghostfaceAddons.push(drvrLic());

function onTape() {
    var addon = selectAddOn("Ghost Face Caught on Tape", ["addon text"], "Ultra Rare", "addon text", "iconAddon_caughtOnTape.png", "Ghost Face", ["extra"]);
    return addon;
}

//ADD
ghostfaceAddons.push(onTape());

function secCam() {
    var addon = selectAddOn("Outdoor Security Camera", ["addon text"], "Ultra Rare", "addon text", "iconAddon_outdoorSecurityCamera.png", "Ghost Face", ["extra"]);
    return addon;
}

//ADD
ghostfaceAddons.push(secCam());

//Ghostface Addons End

//Demogorgon Addons Begin

function rtnPumpkin() {
    var addon = selectAddOn("Rotten Pumpkin", ["addon text"], "Common", "addon text", "iconAddon_rottenPumpkin.png", "Demogorgon", ["extra"]);
    return addon;
}

//ADD
demogorgonAddons.push(rtnPumpkin());

function blkHeart() {
    var addon = selectAddOn("Black Heart", ["addon text"], "Common", "addon text", "iconAddon_blackHeart.png", "Demogorgon", ["extra"]);
    return addon;
}

//ADD
demogorgonAddons.push(blkHeart());

function ratLiver() {
    var addon = selectAddOn("Rat Liver", ["addon text"], "Common", "addon text", "iconAddon_ratLiver.png", "Demogorgon", ["extra"]);
    return addon;
}

//ADD
demogorgonAddons.push(ratLiver());

function ratTail() {
    var addon = selectAddOn("Rat Tail", ["addon text"], "Common", "addon text", "iconAddon_ratLiver.png", "Demogorgon", ["extra"]);
    return addon;
}

//ADD
demogorgonAddons.push(ratTail());

function stickyLining() {
    var addon = selectAddOn("Sticky Lining", ["addon text"], "Uncommon", "addon text", "iconAddon_stickyLining.png", "Demogorgon", ["extra"]);
    return addon;
}

//ADD
demogorgonAddons.push(stickyLining());

function visWebbing() {
    var addon = selectAddOn("Viscous Webbing", ["addon text"], "Uncommon", "addon text", "iconAddon_viscousWebbing.png", "Demogorgon", ["extra"]);
    return addon;
}

//ADD
demogorgonAddons.push(visWebbing());

function rtnTripe() {
    var addon = selectAddOn("Rotten Green Tripe", ["addon text"], "Uncommon", "addon text", "iconAddon_rottenGreenTripe.png", "Demogorgon", ["extra"]);
    return addon;
}

//ADD
demogorgonAddons.push(rtnTripe());

function mewGuts() {
    var addon = selectAddOn("Mews Guts", ["addon text"], "Uncommon", "addon text", "iconAddon_mewsGuts.png", "Demogorgon", ["extra"]);
    return addon;
}

//ADD
demogorgonAddons.push(mewGuts());

function barbGlasses() {
    var addon = selectAddOn("Barbs Glasses", ["addon text"], "Uncommon", "addon text", "iconAddon_barbsGlasses.png", "Demogorgon", ["extra"]);
    return addon;
}

//ADD
demogorgonAddons.push(barbGlasses());

function elvnSoda() {
    var addon = selectAddOn("Elevens Soda", ["addon text"], "Rare", "addon text", "iconAddon_elevensSoda.png", "Demogorgon", ["extra"]);
    return addon;
}

//ADD
demogorgonAddons.push(elvnSoda());

function thrnVines() {
    var addon = selectAddOn("Thorny Vines", ["addon text"], "Rare", "addon text", "iconAddon_thornyVines.png", "Demogorgon", ["extra"]);
    return addon;
}

//ADD
demogorgonAddons.push(thrnVines());

function bcLighter() {
    var addon = selectAddOn("Brass Case Lighter", ["addon text"], "Rare", "addon text", "iconAddon_brassCaseLighter.png", "Demogorgon", ["extra"]);
    return addon;
}

//ADD
demogorgonAddons.push(bcLighter());

function vWaxcap() {
    var addon = selectAddOn("Violet Waxcap", ["addon text"], "Rare", "addon text", "iconAddon_violetWaxcap.png", "Demogorgon", ["extra"]);
    return addon;
}

//ADD
demogorgonAddons.push(vWaxcap());

function deerLung() {
    var addon = selectAddOn("Deer Lung", ["addon text"], "Rare", "addon text", "iconAddon_deerLung.png", "Demogorgon", ["extra"]);
    return addon;
}

//ADD
demogorgonAddons.push(deerLung());

function lgWhistle() {
    var addon = selectAddOn("Lifeguard Whistle", ["addon text"], "Very Rare", "addon text", "iconAddon_lifeguardWhistle.png", "Demogorgon", ["extra"]);
    return addon;
}

//ADD
demogorgonAddons.push(lgWhistle());

function vermWebcap() {
    var addon = selectAddOn("Vermilion Webcap", ["addon text"], "Very Rare", "addon text", "iconAddon_vermillionWebcap.png", "Demogorgon", ["extra"]);
    return addon;
}

//ADD
demogorgonAddons.push(vermWebcap());

function udResin() {
    var addon = selectAddOn("Upside Down Resin", ["addon text"], "Very Rare", "addon text", "iconAddon_upsidedownResin.png", "Demogorgon", ["extra"]);
    return addon;
}

//ADD
demogorgonAddons.push(udResin());

function uknEgg() {
    var addon = selectAddOn("Unknown Egg", ["addon text"], "Very Rare", "addon text", "iconAddon_unknownEgg.png", "Demogorgon", ["extra"]);
    return addon;
}

//ADD
demogorgonAddons.push(uknEgg());

function lepLichen() {
    var addon = selectAddOn("Leprose Lichen", ["addon text"], "Ultra Rare", "addon text", "iconAddon_leproseLichen.png", "Demogorgon", ["extra"]);
    return addon;
}

//ADD
demogorgonAddons.push(lepLichen());

function redMoss() {
    var addon = selectAddOn("Red Moss", ["addon text"], "Ultra Rare", "addon text", "iconAddon_redMoss.png", "Demogorgon", ["extra"]);
    return addon;
}

//ADD
demogorgonAddons.push(redMoss());

//Demogorgon Addons End
//end specific add on Section

//base perk Section (native to lets us know if it is teachable)
function selectPerk(name, effect, target, rarity, tooltip, icon, isFor, nativeTo) {
    var perk = new DbDItem(name, effect, rarity, tooltip, icon);
    perk.isFor = isFor;
    perk.nativeTo = nativeTo;
    perk.target = target;
    perk.isSelected = false;
    perk.type = "perk";
    return perk;
}

//begin specific perk section

//begin specific survivor perk section
function adrenaline() {
    var perk = selectPerk("Adrenaline", ["Instantly heal from inured or dying state and run at 150% of normal speed for 5s when the exit gates are powered."], ["extra"], "Very Rare", "Instantly heal from inured or dying state and run at 150% of normal speed for 5s when the exit gates are powered on.", "IconPerks_adrenaline.png", "survivor", "Meg Thomas");
    return perk;
}

//ADD
survivorPerks.push(adrenaline());

function balancedLanding() {
    var perk = selectPerk("Balanced Landing", ["Stagger effects from falls are reduced by 75%. Run for 150% of normal speed for 3s upon landing."], ["extra"], "Rare", "Stagger effects from falls are reduced by 75%. Run for 150% of normal speed for 3s upon landing.", "IconPerks_balancedLanding.png", "survivor", "Nea Karlsson");
    return perk;
}

//ADD
survivorPerks.push(balancedLanding());

function bond() {
    var perk = selectPerk("Bond", ["Reveals allied auras within 36m."], ["extra"], "Rare", "Reveals allied auras within 36m.", "IconPerks_bond.png", "survivor", "Dwight Fairfield");
    return perk;
}

//ADD
survivorPerks.push(bond());

function botanyKnowledge() {
    var perk = selectPerk("Botany Knowledge", ["Your healing speed and efficiency with healing items are increased by 20%."], ["extra"], "Very Rare", "Your healing speed and efficiency with healing items are increased by 20%.", "IconPerks_botanyKnowledge.png", "survivor", "Claudette Morel");
    return perk;
}

//ADD
survivorPerks.push(botanyKnowledge());

function calmSpirit() {
    var perk = selectPerk("Calm Spirit", ["100% reduced chaance of alerting wildlife."], ["extra"], "Very Rare", "100% reduced chaance of alerting wildlife.", "IconPerks_calmSpirit.png", "survivor", "Jake Park");
    return perk;
}

//ADD
survivorPerks.push(calmSpirit());

function darkSense() {
    var perk = selectPerk("Dark Sense", ["See the killers aura for 7s when the gates unlock."], ["extra"], "Very Rare", "See the killers aura for 7s when the gates unlock.", "IconPerks_darkSense.png", "survivor", "All");
    return perk;
}

//ADD
survivorPerks.push(darkSense());

function decisiveStrike() {
    var perk = selectPerk("Decisive Strike", ["If you are the obsession, escape the killer's grasp and stun them for 5s. This is limited to once per match by succeeding on a skill check."], ["extra"], "Very Rare", "If you are the obsession, escape the killers grasp and stun them for 5s. This is limited to once per match by succeeding on a skill check. If you are not the obsession the skill check only appears at 35% of the wiggle bar and the stun lasts only 3s.", "IconPerks_decisiveStrike.png", "survivor", "Laurie Strode");
    return perk;
}

//ADD
survivorPerks.push(decisiveStrike());

function dejaVu() {
    var perk = selectPerk("Deja Vu", ["The auras of 2 objectives are revealed for 8s when starting a trial. If possible, these objects are added to your equipped map."], ["extra"], "Very Rare", "The auras of 2 objectives are revealed for 8s when starting a trial. If possible, these objects are added to your equipped map.", "IconPerks_dejaVu.png", "survivor", "All");
    return perk;
}

//ADD
survivorPerks.push(dejaVu());

function empathy() {
    var perk = selectPerk("Empathy", ["See the aura of injured or dying survivors at an unlimited range. Does not reveal the auras of survivors while they are being carried."], ["extra"], "Rare", "See the aura of injured or dying survivors at an unlimited range. Does not reveal the auras of survivors while they are being carried.", "IconPerks_empathy.png", "survivor", "Claudette Morel");
    return perk;
}

//ADD
survivorPerks.push(empathy());

function hope() {
    var perk = selectPerk("Hope", ["Your movement speed is increased by 7% for 120s when the gates are powered."], ["extra"], "Very Rare", "Your movement speed is increased by 7% for 120s when the gates are powered.", "IconPerks_hope.png", "survivor", "All");
    return perk;
}

//ADD
survivorPerks.push(hope());

function ironWill() {
    var perk = selectPerk("Iron Will", ["Your cries of pain while injured are reduced by 100% at all times."], ["extra"], "Rare", "Your cries of pain while injured are reduced by 100% at all times.", "IconPerks_ironWill.png", "survivor", "Jake Park");
    return perk;
}

//ADD
survivorPerks.push(ironWill());

function kindred() {
    var perk = selectPerk("Kindred", ["While you are on the hook, all survivors auras are revealed to all other survivors and the killer's aura is revealed while they are within 8m of the hook."], ["extra"], "Very Rare", "Your cries of pain while injured are reduced by 100% at all times.", "Kindred_Icon.png", "survivor", "All");
    return perk;
}

//ADD
survivorPerks.push(kindred());

function leader() {
    var perk = selectPerk("Leader", ["Increases the healing, repair, and sabotage speed of other survivors within 8m by 9%."], ["extra"], "Very Rare", "Increases the healing, repair, and sabotage speed of other survivors within 8m by 9%.", "IconPerks_leader.png", "survivor", "Dwight Fairfield");
    return perk;
}

//ADD
survivorPerks.push(leader());

function lightweight() {
    var perk = selectPerk("Lightweight", ["Your footstep marks are visible for 3s less than normal."], ["extra"], "Rare", "Your footstep marks are visible for 3s less than normal.", "IconPerks_lightweight.png", "survivor", "All");
    return perk;
}

//ADD
survivorPerks.push(lightweight());

function nolb() {
    var perk = selectPerk("No One Left Behind", ["The speed of your altruistic actions execute 16% quicker than normal after the exit gates are powered."], ["extra"], "Very Rare", "The speed of your altruistic actions execute 16% quicker than normal after the exit gates are powered.", "IconPerks_noOneLeftBehind.png", "survivor", "All");
    return perk;
}

//ADD
survivorPerks.push(nolb());

function objectOfObsession() {
    var perk = selectPerk("Object of Obsession", ["If you are the killer's obsession, looking in their direction will reveal your auras to each other at a 72m range."], ["extra"], "Very Rare", "If you are the killer's obsession, looking in their direction will reveal your auras to each other at a 72m range.", "IconPerks_objectOfObsession.png", "survivor", "Laurie Strode");
    return perk;
}

//ADD
survivorPerks.push(objectOfObsession());

function plunderersInstinct() {
    var perk = selectPerk("Plunderer's Instinct", ["You can see the auras of chests within a 64m range."], ["extra"], "Rare", "You can see the auras of chests within a 64m range.", "IconPerks_plunderersInstinct.png", "survivor", "All");
    return perk;
}

//ADD
survivorPerks.push(plunderersInstinct());

function premonition() {
    var perk = selectPerk("Premonition", ["Receive an auditory warning when looking in the direction of the killer at a range of 36m in a 45 degree cone. This perk has a 30s cooldown."], ["extra"], "Very Rare", "Receive an auditory warning when looking in the direction of the killer at a range of 36m and in a 45 degree cone. This perk has a 30s cooldown.", "IconPerks_premonition.png", "survivor", "All");
    return perk;
}

//ADD
survivorPerks.push(premonition());

function proveThyself() {
    var perk = selectPerk("Prove Thyself", ["You receive a 3% bonus to healing, repair, and sabotage actions for each other survivor within an 8m range of your position."], ["extra"], "Very Rare", "You receive a 3% bonus to healing, repair, and sabotage actions for each other survivor within an 8m range of your position.", "IconPerks_proveThyself.png", "survivor", "Dwight Fairfield");
    return perk;
}

//ADD
survivorPerks.push(proveThyself());

function quickAndQuiet() {
    var perk = selectPerk("Quick & Quiet", ["The detection range of your vault and hide actions is reduced by 90%."], ["extra"], "Rare", "The detection range of your vault and hide actions is reduced by 90%.", "IconPerks_quickAndQuiet.png", "survivor", "Meg Thomas");
    return perk;
}

//ADD
survivorPerks.push(quickAndQuiet());

function resilience() {
    var perk = selectPerk("Resilience", ["While you are injured, you repair, heal, and sabotage 9% faster."], ["extra"], "Very Rare", "While you are injured, you repair, heal, and sabotage 9% faster.", "IconPerks_resilience.png", "survivor", "All");
    return perk;
}

//ADD
survivorPerks.push(resilience());

function sabotage() {
    var perk = selectPerk("Sabotage", ["You can sabotage without a toolbox at 50% normal speed. Increases the efficiency of toolbox sabotage by 100%."], ["extra"], "Very Rare", "You can sabotage without a toolbox at 50% normal speed. Increases the efficiency of toolbox sabotage by 100%.", "IconPerks_saboteur.png", "Jake Park", "All");
    return perk;
}

//ADD
survivorPerks.push(sabotage());

function selfCare() {
    var perk = selectPerk("Self Care", ["You can heal yourself without a medkit at 50% of normal speed. Increases the efficiency of healing-item healing by 100%."], ["extra"], "Very Rare", "You can heal yourself without a medkit at 50% of normal speed. Increases the efficiency of healing-item healing by 100%.", "IconPerks_selfCare.png", "survivor", "Claudette Morel");
    return perk;
}

//ADD
survivorPerks.push(selfCare());

function slipperyMeat() {
    var perk = selectPerk("Slippery Meat", ["The speed at which you attempt to free yourself from traps and hooks is increased by 15%. The odds of freeing yourself from traps are increased by 10%. The odds of freeing yourself from hooks are increased by 5%."], ["extra"], "Rare", "The speed at which you attempt to free yourself from traps and hooks is increased by 15%. The odds of freeing yourself from traps are increased by 10%. The odds of freeing yourself from hooks are increased by 5%.", "IconPerks_slipperyMeat.png", "survivor", "All");
    return perk;
}

//ADD
survivorPerks.push(slipperyMeat());

function smallGame() {
    var perk = selectPerk("Small Game", ["Get an auditory warning when standing within 15m of a killer trap or totem within a 45 degree cone in front of you. Cooldown 15s."], ["extra"], "Rare", "Get an auditory warning when standing within 15m of a killer trap or totem within a 45 degree cone in front of you. Cooldown 15s.", "IconPerks_smallGame.png", "survivor", "All");
    return perk;
}

//ADD
survivorPerks.push(smallGame());

function soleSurvivor() {
    var perk = selectPerk("Sole Survivor", ["While you are alive each survivor killed disrupts the killer's aura reading ability. The disruption is 50% for the first survivor killed and 25% more for each additional dead survivor."], ["extra"], "Very Rare", "While you are alive each survivor killed disrupts the killer's aura reading ability. The disruption is 50% for the first survivor killed and 25% more for each additional dead survivor.", "IconPerks_soleSurvivor.png", "survivor", "Laurie Strode");
    return perk;
}

//ADD
survivorPerks.push(soleSurvivor());

function spineChill() {
    var perk = selectPerk("Spine Chill", ["Get notified when the killer is looking in your direction and standing within 36m. During spine chill, your skill check success zones are reduced by 10% while heal, sabotage, and repair speed are all increased by 6%."], ["extra"], "Very Rare", "Get notified when the killer is looking in your direction and standing within 36m. During spine chill, your skill check success zones are reduced by 10% while heal, sabotage, and repair speed are all increased by 6%.", "IconPerks_spineChill.png", "survivor", "All");
    return perk;
}

//ADD
survivorPerks.push(spineChill());

function sprintBurst() {
    var perk = selectPerk("Sprint Burst", ["When starting to run, you run 150% faster for 3 seconds. Does not work while you are exhausted."], ["extra"], "Very Rare", "When starting to run, you run 150% faster for 3 seconds. Does not work while you are exhausted.", "IconPerks_sprintBurst.png", "survivor", "Meg Thomas");
    return perk;
}

//ADD
survivorPerks.push(sprintBurst());

function streetwise() {
    var perk = selectPerk("Streetwise", ["Reduces the consumption of item charges for both you and other survivors within 8m by 15%."], ["extra"], "Very Rare", "Reduces the consumption of item charges for both you and other survivors within 8m by 15%.", "IconPerks_streetwise.png", "survivor", "Nea Karlsson");
    return perk;
}

//ADD
survivorPerks.push(streetwise());

function tinh() {
    var perk = selectPerk("This is Not Happening", ["While you are injured, repair, healing, and sabotage skill check success zones are increased by 30%."], ["extra"], "Very Rare", "While you are injured, repair, healing, and sabotage skill check success zones are increased by 30%.", "IconPerks_thisIsNotHappening.png", "survivor", "All");
    return perk;
}

//ADD
survivorPerks.push(tinh());

function urbanEvasion() {
    var perk = selectPerk("Urban Evasion", ["Your movement speed while crouching is increased by 50%."], ["extra"], "Very Rare", "Your movement speed while crouching is increased by 50%.", "IconPerks_urbanEvasion.png", "survivor", "Nea Karlsson");
    return perk;
}

//ADD
survivorPerks.push(urbanEvasion());

function wellMakeIt() {
    var perk = selectPerk("We'll Make It", ["For each survivor you save from a hook, gain 100% increased healing speed (max 100%)."], ["extra"], "Very Rare", "For each survivor you save from a hook, gain 100% increased healing speed (max 100%).", "IconPerks_wellMakeIt.png", "survivor", "All");
    return perk;
}

//ADD
survivorPerks.push(wellMakeIt());

function openHanded() {
    var perk = selectPerk("Open-Handed", ["Increases aura reading ability by 8 meters."], ["extra"], "Very Rare", "Increases aura reading ability by 8 meters.", "IconPerks_openHanded.png", "survivor", "Ace Visconti");
    return perk;
}

//ADD
survivorPerks.push(openHanded());

function aceInTheHole() {
    var perk = selectPerk("Ace in The Hole", ["50% chance of getting an add on of very rare quality or lower on looted items."], ["extra"], "Very Rare", "50% chance of getting an add on of very rare quality or lower on looted items.", "IconPerks_aceInTheHole.png", "survivor", "Ace Visconti");
    return perk;
}

//ADD
survivorPerks.push(aceInTheHole());

function upTheAnte() {
    var perk = selectPerk("Up The Ante", ["Each survivor receives a 3% bonus to luck for each other remaining survivor."], ["extra"], "Very Rare", "Each survivor recieves a 3% bonus to luck for each other remaining survivor.", "IconPerks_upTheAnte.png", "survivor", "Ace Visconti");
    return perk;
}

//ADD
survivorPerks.push(upTheAnte());

function leftBehind() {
    var perk = selectPerk("Left Behind", ["If all other survivors are dead, you gain a 25% bonus to repair speed for each generator left to do."], ["extra"], "Rare", "Do generators fast if your teammates are dead.", "IconPerks_leftBehind.png", "survivor", "William Overbeck");
    return perk;
}

//ADD
survivorPerks.push(leftBehind());

function unbreakable() {
    var perk = selectPerk("Unbreakable", ["Fully recover from dying once per match. Recovery speed increased by 25%."], ["extra"], "Very Rare", "Enhanced recovery. Recover from dying once per match.", "IconPerks_unbreakable.png", "survivor", "William Overbeck");
    return perk;
}

//ADD
survivorPerks.push(unbreakable());

function borrowedTime() {
    var perk = selectPerk("Borrowed Time", ["Activates  for 20s once per match when you save a hooked survivor within the killer's terror radius. Any attack that causes a dying state instead causes a 40s bleed-out timer."], ["extra"], "Very Rare", "Each survivor recieves a 3% bonus to luck for each other remaining survivor.", "IconPerks_borrowedTime.png", "survivor", "William Overbeck");
    return perk;
}

//ADD
survivorPerks.push(borrowedTime());

function technician() {
    var perk = selectPerk("Technician", ["The noise detection range of your repairs are decreased by 8m.", "50% chance to prevent gen explosions."], ["extra"], "Rare", "Quieter gen repair", "IconPerks_technician.png", "survivor", "Feng Min");
    return perk;
}

//ADD
survivorPerks.push(technician());

function fmAlert() {
    var perk = selectPerk("Alert", ["See the killer's aura for 3s after they perform a break action within 36m of you.", "Cooldown: 30s."], ["extra"], "Very Rare", "Detection of killer break actions.", "IconPerks_alert.png", "survivor", "Feng Min");
    return perk;
}

//ADD
survivorPerks.push(fmAlert());

function lithe() {
    var perk = selectPerk("Lithe", ["During a chase, gain 150% sprint for 3s after vaulting.", "Causes exhaustion for 40s."], ["extra"], "Very Rare", "Sprint after a vault.", "IconPerks_lithe.png", "survivor", "Feng Min");
    return perk;
}

//ADD
survivorPerks.push(lithe());

function wglf() {
    var perk = selectPerk("We're Gonna Live Forever", ["Perk Text", "Perk Text"], ["extra"], "Rare", "Perk Text", "IconPerks_wereGonnaLiveForever.png", "survivor", "David King");
    return perk;
}

//ADD
survivorPerks.push(wglf());

function deadHard() {
    var perk = selectPerk("Dead Hard", ["Perk Text", "Perk Text"], ["extra"], "Very Rare", "Perk Text", "IconPerks_deadHard.png", "survivor", "David King");
    return perk;
}

//ADD
survivorPerks.push(deadHard());

function noMither() {
    var perk = selectPerk("No Mither", ["Perk Text", "Perk Text"], ["extra"], "Very Rare", "Perk Text", "IconPerks_noMither.png", "survivor", "David King");
    return perk;
}

//ADD
survivorPerks.push(noMither());

function wakeUp() {
    var perk = selectPerk("Wake Up!", ["perk text"], ["extra"], "Rare", "perk text", "iconPerks_wakeUp.png", "survivor", "Quentin Smith");
    return perk;
}

//ADD
survivorPerks.push(wakeUp());

function pharmacy() {
    var perk = selectPerk("Pharmacy", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_pharmacy.png", "survivor", "Quentin Smith");
    return perk;
}

//ADD
survivorPerks.push(pharmacy());

function vigil() {
    var perk = selectPerk("Vigil", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_vigil.png", "survivor", "Quentin Smith");
    return perk;
}

//ADD
survivorPerks.push(vigil());

function tenacity() {
    var perk = selectPerk("Tenacity", ["perk text"], ["extra"], "Rare", "perk text", "iconPerks_tenacity.png", "survivor", "David Tapp");
    return perk;
}

//ADD
survivorPerks.push(tenacity());

function detHunch() {
    var perk = selectPerk("Detective's Hunch", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_detectivesHunch.png", "survivor", "David Tapp");
    return perk;
}

//ADD
survivorPerks.push(detHunch());

function stakeOut() {
    var perk = selectPerk("Stake Out", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_stakeOut.png", "survivor", "David Tapp");
    return perk;
}

//ADD
survivorPerks.push(stakeOut());

function dWithMe() {
    var perk = selectPerk("Dance With Me", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_danceWithMe.png", "survivor", "Kate Denson");
    return perk;
}

//ADD
survivorPerks.push(dWithMe());

function WinoOpp() {
    var perk = selectPerk("Windows Of Opportunity", ["perk text"], ["extra"], "Rare", "perk text", "iconPerks_windowsOfOpportunity.png", "survivor", "Kate Denson");
    return perk;
}

//ADD
survivorPerks.push(WinoOpp());

function boilOver() {
    var perk = selectPerk("Boil Over", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_boilOver.png", "survivor", "Kate Denson");
    return perk;
}

//ADD
survivorPerks.push(boilOver());

function diversion() {
    var perk = selectPerk("Diversion", ["perk text"], ["extra"], "Rare", "perk text", "iconPerks_diversion.png", "survivor", "Adam Francis");
    return perk;
}

//ADD
survivorPerks.push(diversion());

function deliverance() {
    var perk = selectPerk("Deliverance", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_deliverance.png", "survivor", "Adam Francis");
    return perk;
}

//ADD
survivorPerks.push(deliverance());

function autodidact() {
    var perk = selectPerk("Autodidact", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_autodidact.png", "survivor", "Adam Francis");
    return perk;
}

//ADD
survivorPerks.push(autodidact());

function brkDown() {
    var perk = selectPerk("Break Down", ["perk text"], ["extra"], "Rare", "perk text", "iconPerks_breakdown.png", "survivor", "Jeff Johansen");
    return perk;
}

//ADD
survivorPerks.push(brkDown());

function aftCare() {
    var perk = selectPerk("Aftercare", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_aftercare.png", "survivor", "Jeff Johansen");
    return perk;
}

//ADD
survivorPerks.push(aftCare());

function distortion() {
    var perk = selectPerk("Distortion", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_distortion.png", "survivor", "Jeff Johansen");
    return perk;
}

//ADD
survivorPerks.push(distortion());

function solidarity() {
    var perk = selectPerk("Solidarity", ["perk text"], ["extra"], "Rare", "perk text", "iconPerks_solidarity.png", "survivor", "Jane Romero");
    return perk;
}

//ADD
survivorPerks.push(solidarity());

function poised() {
    var perk = selectPerk("Poised", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_poised.png", "survivor", "Jane Romero");
    return perk;
}

//ADD
survivorPerks.push(poised());

function headOn() {
    var perk = selectPerk("Head On", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_headOn.png", "survivor", "Jane Romero");
    return perk;
}

//ADD
survivorPerks.push(headOn());

function flipFlop() {
    var perk = selectPerk("Flip-Flop", ["perk text"], ["extra"], "Rare", "perk text", "iconPerks_flipFlop.png", "survivor", "Ash");
    return perk;
}

//ADD
survivorPerks.push(flipFlop());

function buckleUp() {
    var perk = selectPerk("Buckle Up", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_buckleUp.png", "survivor", "Ash");
    return perk;
}

//ADD
survivorPerks.push(buckleUp());

function mettle() {
    var perk = selectPerk("Mettle Of Man", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_mettleOfMan.png", "survivor", "Ash");
    return perk;
}

//ADD
survivorPerks.push(mettle());

function betterT() {
    var perk = selectPerk("Better Together", ["perk text"], ["extra"], "Rare", "perk text", "iconPerks_betterTogether.png", "survivor", "Nancy Wheeler");
    return perk;
}

//ADD
survivorPerks.push(betterT());

function fixated() {
    var perk = selectPerk("Fixated", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_fixated.png", "survivor", "Nancy Wheeler");
    return perk;
}

//ADD
survivorPerks.push(fixated());

function innerStr() {
    var perk = selectPerk("Inner Strength", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_innerStrength.png", "survivor", "Nancy Wheeler");
    return perk;
}

//ADD
survivorPerks.push(innerStr());

function babySit() {
    var perk = selectPerk("Babysitter", ["perk text"], ["extra"], "Rare", "perk text", "iconPerks_babySitter.png", "survivor", "Steve Harrington");
    return perk;
}

//ADD
survivorPerks.push(babySit());

function camaraderie() {
    var perk = selectPerk("Camaraderie", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_camaraderie.png", "survivor", "Steve Harrington");
    return perk;
}

//ADD
survivorPerks.push(camaraderie());

function secondWind() {
    var perk = selectPerk("Second Wind", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_secondWind.png", "survivor", "Steve Harrington");
    return perk;
}

//ADD
survivorPerks.push(secondWind());

//end specific survivor perk section

//begin specific killer perk section
function nursesCalling() {
    var perk = selectPerk("A Nurse's Calling", ["Read the aura of healing survivors within 28m"], ["extra"], "Very Rare", "Read the aura of healing survivors within 28m", "IconPerks_aNursesCalling.png", "killer", "Nurse");
    return perk;
}

//ADD
killerPerks.push(nursesCalling());

function agitation() {
    var perk = selectPerk("Agitation", ["Speed when transporting bodies increased by 18%", 6], ["extra", "Terror Radius"], "Very Rare", "Speed when transporting bodies increased by 18% and terror radius increased by 6m", "IconPerks_agitation.png", "killer", "Trapper");
    return perk;
}

//ADD
killerPerks.push(agitation());

function bitterMurmur() {
    var perk = selectPerk("Bitter Murmur", ["Reveal survivor auras for 6s when the exit gates are powered"], ["extra"], "Very Rare", "Reveal survivor auras for 6s when the exit gates are powered", "IconPerks_bitterMurmur.png", "killer", "All");
    return perk;
}

//ADD
killerPerks.push(bitterMurmur());

function bloodhound() {
    var perk = selectPerk("Bloodhound", ["Blood marks are considerably more discernible and stay visible for 4 extra seconds"], ["extra"], "Very Rare", "Blood marks are considerably more discernible and stay visible for 4 extra seconds", "IconPerks_bloodhound.png", "killer", "Wraith");
    return perk;
}

//ADD
killerPerks.push(bloodhound());

function brutalStrength() {
    var perk = selectPerk("Brutal Strength", ["Destroy dropped barricades 40% faster"], ["extra"], "Very Rare", "Destroy dropped barricades 40% faster", "IconPerks_brutalStrength.png", "killer", "Trapper");
    return perk;
}

//ADD
killerPerks.push(brutalStrength());

function deerstalker() {
    var perk = selectPerk("Deerstalker", ["Reveals the aura of dying survivors within 36m"], ["extra"], "Rare", "Reveals the aura of dying survivors within 36m", "IconPerks_deerstalker.png", "killer", "All");
    return perk;
}

//ADD
killerPerks.push(deerstalker());

function distressing() {
    var perk = selectPerk("Distressing", ["Terror radius increased by 24%", "Gain 15% extra deviousness points"], ["extra", "extra"], "Very Rare", "Terror radius increased by 24% and gain 15% extra deviousness points", "IconPerks_distressing.png", "killer", "All");
    return perk;
}

//ADD
killerPerks.push(distressing());

function dyingLight() {
    var perk = selectPerk("Dying Light", ["Your obsession gains 50% altruistic action speed. If your obsession is killed, all survivors suffer a 25% penalty to the speed of repair, healing, and sabotage."], ["extra"], "Very Rare", "Your obsession gains 50% altruistic action speed. If your obsession is killed, all survivors suffer a 25% penalty to the speed of repair, healing, and sabotage.", "IconPerks_dyingLight.png", "killer", "Michael Myers");
    return perk;
}

//ADD
killerPerks.push(dyingLight());

function enduring() {
    var perk = selectPerk("Enduring", ["Recover from stuns caused by physical objects 75% faster", "Recover from stuns caused by perks 35% faster"], ["extra", "extra"], "Rare", "Recover from stuns caused by physical objects 75% faster. Recover from stuns caused by perks 35% faster", "IconPerks_enduring.png", "killer", "Hillbilly");
    return perk;
}

//ADD
killerPerks.push(enduring());

function insidious() {
    var perk = selectPerk("Insidious", ["Standing still for 2 seconds reduces your terror radius to 0 until you move or act again."], ["extra"], "Very Rare", "Standing still for 2 seconds reduces your terror radius to 0 until you move or act again.", "IconPerks_insidious.png", "killer", "All");
    return perk;
}

//ADD
killerPerks.push(insidious());

function ironGrasp() {
    var perk = selectPerk("Iron Grasp", ["Effects of struggling reduced by 60%. Time to struggle out of your grasp increased by 36%"], ["extra"], "Rare", "Effects of struggling reduced by 60%. Time to struggle out of your grasp increased by 36%", "IconPerks_ironGrasp.png", "killer", "All");
    return perk;
}

//ADD
killerPerks.push(ironGrasp());

function lightborn() {
    var perk = selectPerk("Lightborn", ["Resistance to blindness increased by 60%. Recovery from blindness increased by 50%. Your vision is dimmed by 35%."], ["extra"], "Very Rare", "Resistance to blindness increased by 60%. Recovery from blindness increased by 50%. Your vision is dimmed by 35%.", "IconPerks_lightborn.png", "killer", "Hillbilly");
    return perk;
}

//ADD
killerPerks.push(lightborn());

function monstrousShrine() {
    var perk = selectPerk("Monstrous Shrine", ["Basement hooks have 9% faster entity progression, 15% extra difficulty to escape, and 9% extra penalty on failed escape attempts."], ["extra"], "Very Rare", "Basement hooks have 9% faster entity progression, 15% extra difficulty to escape, and 9% extra penalty on failed escape attempts.", "IconPerks_monstrousShrine.png", "killer", "All");
    return perk;
}

//ADD
killerPerks.push(monstrousShrine());

function noed() {
    var perk = selectPerk("Hex: No One Escapes Death", ["Attack cooldowns are reduced by 8%, Movement speed increased by 4%, and attacks trigger a dying state.Totem activates upon the gates being powered provided it is left standing."], ["extra"], "Very Rare", "Attack cooldowns are reduced by 8%, Movement speed increased by 4%, and attacks trigger a dying state.", "IconPerks_noOneEscapesDeath.png", "killer", "All");
    return perk;
}

//ADD
killerPerks.push(noed());

function pwyf() {
    var perk = selectPerk("Play With Your Food", ["Each time your obsession escapes a chase, gain a token (max 3). Each token increases your movement speed by 7%. Lose a token each time you take an offensive action."], ["extra"], "Very Rare", "Each time your obsession escapes a chase, gain a token (max 3). Each token increases your movement speed by 7%. Lose a token each time you take an offensive action.", "IconPerks_playWithYourFood.png", "killer", "Michael Myers");
    return perk;
}

//ADD
killerPerks.push(pwyf());

function predator() {
    var perk = selectPerk("Predator", ["Footstep marks remain visible for 3 extra seconds."], ["extra"], "Rare", "Footstep marks remain visible for 3 extra seconds.", "IconPerks_predator.png", "killer", "Wraith");
    return perk;
}

//ADD
killerPerks.push(predator());

function stbfl() {
    var perk = selectPerk("Save the Best For Last", ["As long as your obsession is alive gain 40% reduced cooldown on successful attacks. Only activates after chasing a survivor for 20s."], ["extra"], "Very Rare", "As long as your obsession is alive gain 40% reduced cooldown on successful attacks. Only activates after chasing a survivor for 20s.", "IconPerks_saveTheBestForLast.png", "killer", "Michael Myers");
    return perk
}

//ADD
killerPerks.push(stbfl());

function shadowborn() {
    var perk = selectPerk("Shadowborn", ["Your vision is 35% clearer and your field of view is considerably wider. You also get blinded 30% faster and take 50% longer to recover from blind."], ["extra"], "Very Rare", "Your vision is 35% clearer and your field of view is considerably wider. You also get blinded 30% faster and take 50% longer to recover from blind.", "IconPerks_shadowborn.png", "killer", "Wraith");
    return perk;
}

//ADD
killerPerks.push(shadowborn());

function sloppyButcher() {
    var perk = selectPerk("Sloppy Butcher", ["Wounds you inflict cause a considerable increase in survivor bleeding frequency"], ["extra"], "Rare", "Wounds you inflict cause a considerable increase in survivor bleeding frequency", "IconPerks_sloppyButcher.png", "killer", "All");
    return perk;
}

//ADD
killerPerks.push(sloppyButcher());

function sfts() {
    var perk = selectPerk("Spies From the Shadows", ["Crows within 36m give you a visual cue 75% of the time when disturbed by survivors."], ["extra"], "Very Rare", "Crows within 36m give you a visual cue 75% of the time when disturbed by survivors.", "IconPerks_spiesFromTheShadows.png", "killer", "All");
    return perk;
}

//ADD
killerPerks.push(sfts());

function stridor() {
    var perk = selectPerk("Stridor", ["Breathing of survivors in pain is 50% louder. Normal survivor breathing is 25% louder."], ["extra"], "Rare", "Breathing of survivors in pain is 50% louder. Normal survivor breathing is 25% louder.", "IconPerks_stridor.png", "killer", "Nurse");
    return perk;
}

//ADD
killerPerks.push(stridor());

function tinkerer() {
    var perk = selectPerk("Tinkerer", ["Add-ons that affect the charge time of your power are 10% more effective."], ["extra"], "Very Rare", "Add-ons that affect the charge time of your power are 10% more effective.", "IconPerks_tinkerer.png", "killer", "Hillbilly");
    return perk;
}

//ADD
killerPerks.push(tinkerer());

function thanatophobia() {
    var perk = selectPerk("Thanatophobia", ["1 injured, dying, or hooked survivor causes a 6% penalty to survivor repair, healing, and sabotage speed. Each additional injured, dying, or hooked survivor increases the penalty by 3%."], ["extra"], "Very Rare", "1 injured, dying, or hooked survivor causes a 6% penalty to survivor repair, healing, and sabotage speed. Each additional injured, dying, or hooked survivor increases the penalty by 3%.", "IconPerks_thatanophobia.png", "killer", "Nurse");
    return perk;
}

//ADD
killerPerks.push(thanatophobia());

function unnervingPresence() {
    var perk = selectPerk("Unnerving Presence", ["Survivors in your terror radius have an 8% additional chance to trigger skill checks. Skill checks triggered by this perk have a 15% reduced success zone."], ["extra"], "Rare", "Survivors in your terror radius have an 8% additional chance to trigger skill checks. Skill checks triggered by this perk have a 15% reduced success zone.", "IconPerks_unnervingPresence.png", "killer", "Trapper");
    return perk;
}

//ADD
killerPerks.push(unnervingPresence());

function unrelenting() {
    var perk = selectPerk("Unrelenting", ["The cooldown of missed attacks is reduced by 30%."], ["extra"], "Very Rare", "The cooldown of missed attacks is reduced by 30%.", "IconPerks_unrelenting.png", "killer", "All");
    return perk;
}

//ADD
killerPerks.push(unrelenting());

function whispers() {
    var perk = selectPerk("Whispers", ["Hear the entity's whisper when within 32m of a survivor."], ["extra"], "Very Rare", "Hear the entity's whisper when within 32m of a survivor.", "IconPerks_whispers.png", "killer", "All");
    return perk;
}

//ADD
killerPerks.push(whispers());

function ruin() {
    var perk = selectPerk("Hex: Ruin", ["While totem is active: Good skill checks regress generators 5%. Great skill checks have no effect."], ["extra"], "Very Rare", "Hear the entity's whisper when within 32m of a survivor.", "IconPerks_ruin.png", "killer", "Hag");
    return perk;
}

//ADD
killerPerks.push(ruin());

function devourHope() {
    var perk = selectPerk("Hex: Devour Hope", ["While totem is active: grants abilities based on tokens. 2: 5% speed bonus for 10s after hooking a survivor 3: NOED 5: Mori."], ["extra"], "Very Rare", "While totem is active: grants abilities based on tokens.", "IconPerks_devourHope.png", "killer", "Hag");
    return perk;
}

//ADD
killerPerks.push(devourHope());

function theThirdSeal() {
    var perk = selectPerk("Hex: The Third Seal", ["While totem is active: all survivors you hit have their aura reading ability reduced by 100%."], ["extra"], "Very Rare", "While totem is active: all survivors you hit have their aura reading ability reduced by 100%.", "IconPerks_theThirdSeal.png", "killer", "Hag");
    return perk;
}

//ADD
killerPerks.push(theThirdSeal());

function toth() {
    var perk = selectPerk("Hex: Thrill of the Hunt", ["While totem is active: grants bonuses based on tokens (max 5 tokens). 8% bonus hunter points per token. 10% less totem cleansing speed per token. Get a notification when a survivor begins cleansing."], ["extra"], "Rare", "While totem is active: grants abilities based on tokens.", "IconPerks_thrillOfTheHunt.png", "killer", "All");
    return perk;
}

//ADD
killerPerks.push(toth());

function overwhelmingPresence() {
    var perk = selectPerk("Overwhelming Presence", ["Survivor item consumption rates are increased by 50% while in your terror radius."], ["extra"], "Rare", "Survivor item consumption rates are increased by 50% while in your terror radius.", "IconPerks_overwhelmingPresence.png", "killer", "Doctor");
    return perk;
}
//ADD
killerPerks.push(overwhelmingPresence());

function monitorAndAbuse() {
    var perk = selectPerk("Monitor & Abuse", ["While in a chase your terror radius is increased by 8m", "While not in a chase, your terror radius is decreased by 8m and your field of view is considerably increased."], ["extra"], "Very Rare", "Decreased terror radius and increased FOV when not in chase. Increased terror radius when in a chase.", "IconPerks_monitorAndAbuse.png", "killer", "Doctor");
    return perk;
}
//ADD
killerPerks.push(monitorAndAbuse());

function overcharge() {
    var perk = selectPerk("Overcharge", ["Survivors must are faced with a tremendously difficult skill when attempting to work on a generator you previously damaged.", "Failing the skill check causes an explosion and 5% additional regression."], ["extra"], "Very Rare", "Additional skill check required to stop generator resgression.", "IconPerks_generatorOvercharge.png", "killer", "Doctor");
    return perk;
}

//ADD
killerPerks.push(overcharge());

function beastOfPrey() {
    var perk = selectPerk("Beast Of Prey", ["Perk Text", "Perk Text"], ["extra"], "Rare", "Perk Text", "IconPerks_beastOfPrey.png", "killer", "Huntress");
    return perk;
}
//ADD
killerPerks.push(beastOfPrey());

function territorialImperative() {
    var perk = selectPerk("Territorial Imperative", ["Perk Text", "Perk Text"], ["extra"], "Very Rare", "Perk Text", "IconPerks_territorialImperative.png", "killer", "Huntress");
    return perk;
}
//ADD
killerPerks.push(territorialImperative());

function huntressLullaby() {
    var perk = selectPerk("Hex: Huntress Lullaby", ["Perk Text", "Perk Text"], ["extra"], "Very Rare", "Perk Text", "IconPerks_hexHuntressLullaby.png", "killer", "Huntress");
    return perk;
}
//ADD
killerPerks.push(huntressLullaby());

function knockOut() {
    var perk = selectPerk("Knock Out", ["Perk Text", "Perk Text"], ["extra"], "Rare", "Perk Text", "IconPerks_knockOut.png", "killer", "Leatherface");
    return perk;
}
//ADD
killerPerks.push(knockOut());

function bbqChilli() {
    var perk = selectPerk("Barbecue & Chili", ["Perk Text", "Perk Text"], ["extra"], "Very Rare", "Perk Text", "IconPerks_barbecueAndChili.png", "killer", "Leatherface");
    return perk;
}
//ADD
killerPerks.push(bbqChilli());

function franklinDemise() {
    var perk = selectPerk("Franklin's Demise", ["Perk Text", "Perk Text"], ["extra"], "Very Rare", "Perk Text", "IconPerks_franklinsDemise.png", "killer", "Leatherface");
    return perk;
}
//ADD
killerPerks.push(franklinDemise());

function fireUp() {
    var perk = selectPerk("Fire Up", ["perk text"], ["extra"], "Rare", "perk text", "iconPerks_fireUp.png", "killer", "Freddy");
    return perk;
}

//ADD
killerPerks.push(fireUp());

function rememberMe() {
    var perk = selectPerk("Remember Me", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_rememberMe.png", "killer", "Freddy");
    return perk;
}

//ADD
killerPerks.push(rememberMe());

function bloodWarden() {
    var perk = selectPerk("Blood Warden", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_bloodWarden.png", "killer", "Freddy");
    return perk;
}

//ADD
killerPerks.push(bloodWarden());

function hangmanTrick() {
    var perk = selectPerk("Hangman's Trick", ["perk text"], ["extra"], "Rare", "perk text", "iconPerks_hangmansTrick.png", "killer", "Pig");
    return perk;
}

//ADD
killerPerks.push(hangmanTrick());

function surveillance() {
    var perk = selectPerk("Surveillance", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_surveillance.png", "killer", "Pig");
    return perk;
}

//ADD
killerPerks.push(surveillance());

function makeYourChoice() {
    var perk = selectPerk("Make Your Choice", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_makeYourChoice.png", "killer", "Pig");
    return perk;
}

//ADD
killerPerks.push(makeYourChoice());

function bamboozle() {
    var perk = selectPerk("Bamboozle", ["perk text"], ["extra"], "Rare", "perk text", "iconPerks_bamboozle.png", "killer", "Clown");
    return perk;
}

//ADD
killerPerks.push(bamboozle());

function coulrophobia() {
    var perk = selectPerk("Coulrophobia", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_coulrophobia.png", "killer", "Clown");
    return perk;
}

//ADD
killerPerks.push(coulrophobia());

function pGTWeasel() {
    var perk = selectPerk("Pop Goes The Weasel", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_popGoesTheWeasel.png", "killer", "Clown");
    return perk;
}

//ADD
killerPerks.push(pGTWeasel());

function spiritFury() {
    var perk = selectPerk("Spirit Fury", ["perk text"], ["extra"], "Rare", "perk text", "iconPerks_spiritFury.png", "killer", "Spirit");
    return perk;
}

//ADD
killerPerks.push(spiritFury());

function hauntedGround() {
    var perk = selectPerk("Hex: Haunted Ground", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_hauntedGround.png", "killer", "Spirit");
    return perk;
}

//ADD
killerPerks.push(hauntedGround());

function rancor() {
    var perk = selectPerk("Rancor", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_hatred.png", "killer", "Spirit");
    return perk;
}

//ADD
killerPerks.push(rancor());

function discordance() {
    var perk = selectPerk("Discordance", ["perk text"], ["extra"], "Rare", "perk text", "iconPerks_discordance.png", "killer", "Legion");
    return perk;
}

//ADD
killerPerks.push(discordance());

function maGrit() {
    var perk = selectPerk("Mad Grit", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_madGrit.png", "killer", "Legion");
    return perk;
}

//ADD
killerPerks.push(maGrit());

function irMaiden() {
    var perk = selectPerk("Iron Maiden", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_ironMaiden.png", "killer", "Legion");
    return perk;
}

//ADD
killerPerks.push(irMaiden());

function corInt() {
    var perk = selectPerk("Corrupt Intervention", ["perk text"], ["extra"], "Rare", "perk text", "iconPerks_corruptIntervention.png", "killer", "Plague");
    return perk;
}

//ADD
killerPerks.push(corInt());

function infFright() {
    var perk = selectPerk("Infectious Fright", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_infectiousFright.png", "killer", "Plague");
    return perk;
}

//ADD
killerPerks.push(infFright());

function drkDevotion() {
    var perk = selectPerk("Dark Devotion", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_darkDevotion.png", "killer", "Plague");
    return perk;
}

//ADD
killerPerks.push(drkDevotion());

function allEars() {
    var perk = selectPerk("I'm All Ears", ["perk text"], ["extra"], "Rare", "perk text", "iconPerks_imAllEars.png", "killer", "Ghost Face");
    return perk;
}

//ADD
killerPerks.push(allEars());

function tTremors() {
    var perk = selectPerk("Thrilling Tremors", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_thrillingTremors.png", "killer", "Ghost Face");
    return perk;
}

//ADD
killerPerks.push(tTremors());

function fChase() {
    var perk = selectPerk("Furtive Chase", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_furtiveChase.png", "killer", "Ghost Face");
    return perk;
}

//ADD
killerPerks.push(fChase());

function surge() {
    var perk = selectPerk("Surge", ["perk text"], ["extra"], "Rare", "perk text", "iconPerks_surge.png", "killer", "Demogorgon");
    return perk;
}

//ADD
killerPerks.push(surge());

function cruelLimits() {
    var perk = selectPerk("Cruel Limits", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_cruelConfinement.png", "killer", "Demogorgon");
    return perk;
}

//ADD
killerPerks.push(cruelLimits());

function mindbreaker() {
    var perk = selectPerk("Mindbreaker", ["perk text"], ["extra"], "Very Rare", "perk text", "iconPerks_mindBreaker.png", "killer", "Demogorgon");
    return perk;
}

//ADD
killerPerks.push(mindbreaker());

//end specific killer perk section

//end specific perk section

//base offering section
function selectOffering(name, effect, rarity, tooltip, icon, isFor) {
    var offering = new DbDItem(name, effect, rarity, tooltip, icon, isFor);
    offering.isFor = isFor;
    offering.type = "offering";
    return offering;
}
//begin specific offering section
function cattleTag28() {
    var offering = selectOffering("Cattle Tag-28", "Slightly increased chance of going to Coldwind Farm", "Common", "Slightly increased chance of going to Coldwind Farm", "IconFavors_cattleTag28.png", "All");
    offering.isRedacted = true;
    return offering;
}

//ADD x 2
killerOfferings.push(cattleTag28());
survivorOfferings.push(cattleTag28());

function fumingCordage() {
    var offering = selectOffering("Fuming Cordage", "Slightly increased chance of going to Backwater Swamp", "Common", "Slightly increased chance of going to Backwater Swamp", "IconFavors_fumingCordage.png", "All");
    offering.isRedacted = true;
    return offering;
}

//ADD x 2
killerOfferings.push(fumingCordage());
survivorOfferings.push(fumingCordage());

function fumingWelcomeSign() {
    var offering = selectOffering("Fuming Welcome Sign", "Considerably increased chance of going to Backwater Swamp", "Uncommon", "Considerably increased chance of going to Backwater Swamp", "IconFavors_fumingWelcomeSign.png", "All");
    offering.isRedacted = true;
    return offering;
}

//ADD x 2
killerOfferings.push(fumingWelcomeSign());
survivorOfferings.push(fumingWelcomeSign());

function granmasCookbook() {
    var offering = selectOffering("Granma's Cookbook", "Tremendously increased chance of going to Backwater Swamp", "Rare", "Tremendously increased chance of going to Backwater Swamp", "IconFavors_granmasCookbook.png", "All");
    return offering;
}

//ADD x 2
killerOfferings.push(granmasCookbook());
survivorOfferings.push(granmasCookbook());

function clearReagent() {
    var offering = selectOffering("Clear Reagent", "Slightly lessens the dark mist.", "Common", "Slightly lessens the dark mist", "IconFavors_clearReagent.png", "All");
    return offering;
}

//ADD x 2
killerOfferings.push(clearReagent());
survivorOfferings.push(clearReagent());

function faintReagent() {
    var offering = selectOffering("Faint Reagent", "Slightly thickens the dark mist.", "Common", "Slightly thickens the dark mist.", "IconFavors_faintReagent.png", "All");
    return offering;
}

//ADD x 2
killerOfferings.push(faintReagent());
survivorOfferings.push(faintReagent());

function harvestFestivalLeaflet() {
    var offering = selectOffering("Harvest Festival Leaflet", "Slightly increased chance of going to Haddonfield", "Common", "Slightly increased chance of going to Haddonfield", "IconFavors_harvestFestivalLeaflet.png", "All");
    offering.isRedacted = true;
    return offering;
}

//ADD x 2
killerOfferings.push(harvestFestivalLeaflet());
survivorOfferings.push(harvestFestivalLeaflet());

function lunacyTicket() {
    var offering = selectOffering("Lunacy Ticket", "Slightly increased chance to go to Crotus Prenn Asylum", "Common", "Slightly increased chance of going to Crotus Prenn Asylum", "IconFavors_lunacyTicket.png", "All");
    offering.isRedacted = true;
    return offering;
}

//ADD x 2
killerOfferings.push(lunacyTicket());
survivorOfferings.push(lunacyTicket());

function macmillanLedgerPage() {
    var offering = selectOffering("MacMillan Ledger Page", "Slightly increased chance of going to the MacMillan Estate", "Common", "Slightly increased chance of going to the MacMillan Estate", "IconFavors_macmillianLedgerPage.png", "All");
    offering.isRedacted = true;
    return offering;
}

//ADD x 2
killerOfferings.push(macmillanLedgerPage());
survivorOfferings.push(macmillanLedgerPage());

function shreddedPlate() {
    var offering = selectOffering("Shredded Plate", "Slightly increased chance of going to Autohaven Wreckers", "Common", "Slightly increased chance of going to Autohaven Wreckers", "IconFavors_plateShredded.png", "All");
    offering.isRedacted = true;
    return offering;
}

//ADD x 2
killerOfferings.push(shreddedPlate());
survivorOfferings.push(shreddedPlate());

function cattleTag81() {
    var offering = selectOffering("Coldwind Cattle Tag-81", "Considerable chance to go to Coldwind Farm", "Uncommon", "Considerable chance to go to Coldwind Farm", "IconFavors_cattleTag81.png", "All");
    offering.isRedacted = true;
    return offering;
}

//ADD x 2
killerOfferings.push(cattleTag81());
survivorOfferings.push(cattleTag81());

function crescentMoonBouquet() {
    var offering = selectOffering("Crescent Moon Bouquet", "Dims Moonlight", "Uncommon", "Dims Moonlight", "IconFavors_crecentMoonBouquet.png", "All");
    offering.isRedacted = true;
    return offering;
}

//ADD x 2
killerOfferings.push(crescentMoonBouquet());
survivorOfferings.push(crescentMoonBouquet());

function decrepitClipboard() {
    var offering = selectOffering("Decrepit Clapboard", "Considerable chance to go to Haddonfield", "Uncommon", "Considerable chance to go to Haddonfield", "IconFavors_decrepitClapboard.png", "All");
    offering.isRedacted = true;
    return offering;
}

//ADD x 2
killerOfferings.push(decrepitClipboard());
survivorOfferings.push(decrepitClipboard());

function hazyReagent() {
    var offering = selectOffering("Hazy Reagent", "Moderately thickens mist", "Uncommon", "Moderately thickens mist", "IconFavors_hazyReagent.png", "All");
    return offering;
}

//ADD x 2
killerOfferings.push(hazyReagent());
survivorOfferings.push(hazyReagent());

function pElliottLunacyTicket() {
    var offering = selectOffering("P. Elliott Lunacy Ticket", "Considerable chance to go to Crotus Prenn Asylum", "Uncommon", "Considerable chance to go to Crotus Prenn Asylum", "IconFavors_pElliottLunacyTicket.png", "All");
    offering.isRedacted = true;
    return offering;
}

//ADD x 2
killerOfferings.push(pElliottLunacyTicket());
survivorOfferings.push(pElliottLunacyTicket());

function signedLedgerPage() {
    var offering = selectOffering("Signed Ledger Page", "Considerable chance to go to the MacMilan Estate", "Uncommon", "Considerable chance to go to the MacMillan Estate", "IconFavors_signedLedgerPage.png", "All");
    offering.isRedacted = true;
    return offering;
}

//ADD x 2
killerOfferings.push(signedLedgerPage());
survivorOfferings.push(signedLedgerPage());

function quarterMoonBouquet() {
    var offering = selectOffering("Quarter Moon Bouquet", "Brightens moonlight", "Uncommon", "Brightens moonlight", "IconFavors_quarterMoonBouquet.png", "All");
    offering.isRedacted = true;
    return offering;
}

//ADD x 2
killerOfferings.push(quarterMoonBouquet());
survivorOfferings.push(quarterMoonBouquet());

function virginiaPlate() {
    var offering = selectOffering("Virginia Plate", "Considerable chance to go to Autohaven Wreckers", "Uncommon", "Considerable chance to go to Autohaven Wreckers", "IconFavors_plateVirginia.png", "All");
    offering.isRedacted = true;
    return offering;
}

//ADD x 2
killerOfferings.push(virginiaPlate());
survivorOfferings.push(virginiaPlate());

function murkyReagent() {
    var offering = selectOffering("Murky Reagent", "Greatly thickens mist", "Very Rare", "Greatly thickens mist", "IconFavors_murkyReagent.png", "All");
    return offering;
}

//ADD x 2
killerOfferings.push(murkyReagent());
survivorOfferings.push(murkyReagent());

function azarovsKey() {
    var offering = selectOffering("Azarov's Key", "Tremendous chance to go to Autohaven Wreckers", "Rare", "Tremendous chance to go to Autohaven Wreckers", "IconFavors_azarovsKey.png", "All");
    return offering;
}

//ADD x 2
killerOfferings.push(azarovsKey());
survivorOfferings.push(azarovsKey());

function charredWeddingPhotograph() {
    var offering = selectOffering("Charred Wedding Photograph", "Tremendous chance to go to Crotus Prenn Asylum", "Rare", "Tremendous chance to go to Crotus Prenn Asylum", "IconFavors_charredWeddingPhotograph.png", "All");
    return offering;
}

//ADD x 2
killerOfferings.push(charredWeddingPhotograph());
survivorOfferings.push(charredWeddingPhotograph());

function strodeRealityKey() {
    var offering = selectOffering("Strode Realty Key", "Tremendous chance to go to Haddonfield", "Rare", "Tremendous chance to go to Haddonfield", "Strode_Realty_Key.png", "All");
    return offering;
}

//ADD x 2
killerOfferings.push(strodeRealityKey());
survivorOfferings.push(strodeRealityKey());

function macMillansPhalanxBone() {
    var offering = selectOffering("MacMillan's Phalanx Bone", "Tremendous chance to go to the MacMillan Estate", "Rare", "Tremendous chance to go to the MacMillan Estate", "IconFavors_macmilliansPhalanxBone.png", "All");
    return offering;
}

//ADD x 2
killerOfferings.push(macMillansPhalanxBone());
survivorOfferings.push(macMillansPhalanxBone());

function heartLocket() {
    var offering = selectOffering("Heart Locket", "Tremendous chance to go to Coldwind Farm", "Rare", "Tremendous chance to go to Coldwind Farm", "IconFavors_heartLocket.png", "All");
    return offering;
}

//ADD x 2
killerOfferings.push(heartLocket());
survivorOfferings.push(heartLocket());

function fullMoonBouquet() {
    var offering = selectOffering("Full Moon Bouquet", "Brightest possible moonlight", "Very Rare", "Brightest possible moonlight", "IconFavors_fullMoonBouquet.png", "All");
    offering.isRedacted = true;
    return offering;
}

//ADD x 2
killerOfferings.push(fullMoonBouquet());
survivorOfferings.push(fullMoonBouquet());

function newMoonBouquet() {
    var offering = selectOffering("New Moon Bouquet", "Darkest possible moonlight", "Ultra Rare", "Darkest possible moonlight", "IconFavors_newMoonBouquet.png", "All");
    offering.isRedacted = true;
    return offering;
}

//ADD x 2
killerOfferings.push(newMoonBouquet());
survivorOfferings.push(newMoonBouquet());

function ravenWreath() {
    var offering = selectOffering("Raven Wreath", "Bonus 25% deviousness points", "Common", "Bonus 25% deviousness points", "IconFavors_ravenWreath.png", "Killer");
    return offering;
}

//ADD
killerOfferings.push(ravenWreath());

function shrikeWreath() {
    var offering = selectOffering("Shrike Wreath", "Bonus 25% sacrifice points", "Common", "Bonus 25% sacrifice points", "IconFavors_shrikeWreath.png", "Killer");
    return offering;
}

//ADD
killerOfferings.push(shrikeWreath());

function spottedOwlWreath() {
    var offering = selectOffering("Spotted Owl Wreath", "Bonus 25% hunting points", "Common", "Bonus 25% hunting points", "IconFavors_spottedOwlWreath.png", "Killer");
    return offering;
}

//ADD
killerOfferings.push(spottedOwlWreath());

function tanagerWreath() {
    var offering = selectOffering("Tanager Wreath", "Bonus 25% brutality points", "Common", "Bonus 25% brutality points", "IconFavors_tanagerWreath.png", "Killer");
    return offering;
}

//ADD
killerOfferings.push(tanagerWreath());

function cypressMementoMori() {
    var offering = selectOffering("Cypress Memento Mori", "Ability to kill the last survivor", "Uncommon", "Ability to kill the last survivor", "IconFavors_momentoMoriCypress.png", "Killer");
    return offering;
}

//ADD
killerOfferings.push(cypressMementoMori());

function devoutRavenWreath() {
    var offering = selectOffering("Devout Raven Wreath", "Bonus 50% deviousness points", "Uncommon", "Bonus 50% deviousness points", "IconFavors_devoutRavenWreath.png", "Killer");
    return offering;
}

//ADD
killerOfferings.push(devoutRavenWreath());

function devoutSpottedOwl() {
    var offering = selectOffering("Devout Spotted Owl Wreath", "Bonus 50% hunting points", "Uncommon", "Bonus 50% deviousness points", "IconFavors_devoutSpottedOwlWreath.png", "Killer");
    return offering;
}

//ADD
killerOfferings.push(devoutSpottedOwl());

function devoutShrikeWreath() {
    var offering = selectOffering("Devout Shrike Wreath", "Bonus 50% sacrifice points", "Uncommon", "Bonus 50% sacrifice points", "IconFavors_devoutShrikeWreath.png", "Killer");
    return offering;
}

//ADD
killerOfferings.push(devoutShrikeWreath());

function devoutTanagerWreath() {
    var offering = selectOffering("Devout Tanager Wreath", "Bonus 50% brutality points", "Uncommon", "Bonus 50% sacrifice points", "IconFavors_devoutTanagerWreath.png", "Killer");
    return offering;
}

//ADD
killerOfferings.push(devoutTanagerWreath());

function hollowShell() {
    var offering = selectOffering("Hollow Shell", "Bonus 25% points in all categories", "Uncommon", "Bonus 25% points in all categories", "IconFavors_hollowShell.png", "Killer");
    return offering;
}

//ADD
killerOfferings.push(hollowShell());

function moldyOak() {
    var offering = selectOffering("Moldy Oak", "Generates 1 extra hook", "Uncommon", "Generates 1 extra hook", "IconFavors_moldyOak.png", "Killer");
    return offering;
}

//ADD
killerOfferings.push(moldyOak());

function scratchedCoin() {
    var offering = selectOffering("Scratched Coin", "Prevent 1 chest from appearing", "Uncommon", "Prevent 1 chest from appearing", "IconFavors_scratchedCoin.png", "Killer");
    return offering;
}

//ADD
killerOfferings.push(scratchedCoin());

function ardentRavenWreath() {
    var offering = selectOffering("Ardent Raven Wreath", "Bonus 75% deviousness points", "Rare", "Bonus 75% deviousness points", "IconFavors_ardentRavenWreath.png", "Killer");
    return offering;
}

//ADD
killerOfferings.push(ardentRavenWreath());

function ardentShrikeWreath() {
    var offering = selectOffering("Ardent Shrike Wreath", "Bonus 75% sacrifice points", "Rare", "Bonus 75% sacrifice points", "IconFavors_ardentShrikeWreath.png", "Killer");
    return offering;
}

//ADD
killerOfferings.push(ardentShrikeWreath());

function ardentSpottedOwlWreath() {
    var offering = selectOffering("Ardent Spotted Owl Wreath", "Bonus 75% hunting points", "Rare", "Bonus 75% hunting points", "IconFavors_ardentSpottedOwlWreath.png", "Killer");
    return offering;
}

//ADD
killerOfferings.push(ardentSpottedOwlWreath());

function ardentTanagerWreath() {
    var offering = selectOffering("Aredent Tanager Wreath", "Bonus 75% brutality points", "Rare", "Bonus 75% brutality points", "IconFavors_ardentTanagerWreath.png", "Killer");
    return offering;
}

//ADD
killerOfferings.push(ardentTanagerWreath());

function ivoryMementoMori() {
    var offering = selectOffering("Ivory Memento Mori", "You can kill one survivor", "Rare", "You can kill one survivor", "IconFavors_momentoMoriIvory.png", "Killer");
    return offering;
}

//ADD
killerOfferings.push(ivoryMementoMori());

function shroudOfSeparation() {
    var offering = selectOffering("Shroud of Separation", "Survivors start separated", "Uncommon", "Survivors start separated", "IconFavors_shroudOfSeparation.png", "Killer");
    return offering;
}

//ADD
killerOfferings.push(shroudOfSeparation());

function rottenOak() {
    var offering = selectOffering("Rotten Oak", "Creates 2 extra hooks", "Rare", "Creates 2 extra hooks", "IconFavors_rottenOak.png", "Killer");
    return offering;
}

//ADD
killerOfferings.push(rottenOak());

function blackWard() {
    var offering = selectOffering("Black Ward", "Do not lose add-ons after the match", "Very Rare", "Do not lose add-ons after the match", "IconFavors_wardBlack.png", "Killer");
    return offering;
}

//ADD
killerOfferings.push(blackWard());

function putridOak() {
    var offering = selectOffering("Putrid Oak", "Create 3 extra hooks", "Very Rare", "Create 3 extra hooks", "iconFavors_putridOak.png", "Killer");
    return offering;
}

//ADD
killerOfferings.push(putridOak());

function ebonyMementoMori() {
    var offering = selectOffering("Ebony Memento Mori", "You can kill all survivors", "Ultra Rare", "You can kill all survivors", "IconFavors_momentoMoriEbony.png", "Killer");
    return offering;
}

//ADD
killerOfferings.push(ebonyMementoMori());

function blackSplinter() {
    var offering = selectOffering("Black Splinter", "Play as the Shape", "Ultra Rare", "Play as the shape", "IconFavors_blackSplinter.png", "Killer");
    offering.isRedacted = true;
    return offering;
}

//ADD
killerOfferings.push(blackSplinter());

function muddySplinter() {
    var offering = selectOffering("Muddy Splinter", "Play as the Hag", "Ultra Rare", "Play as the Hag", "IconFavors_muddySplinter.png", "Killer");
    offering.isRedacted = true;
    return offering;
}

//ADD
killerOfferings.push(muddySplinter());

function bogLaurelSachet() {
    var offering = selectOffering("Bog Laurel Sachet", "Bonus 25% in objective points", "Common", "Bonus 25% in objective points", "IconFavors_bogLaurelSachet.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(bogLaurelSachet());

function chalkPouch() {
    var offering = selectOffering("Chalk Pouch", "Slight luck increase", "Common", "Slight luck increase", "IconFavors_chalkPouch.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(chalkPouch());

function crispleafAmaranth() {
    var offering = selectOffering("Crispleaf Amaranth", "Bonus 25% in survival points", "Common", "Bonus 25% in survival points", "IconFavors_crispleafAmaranthSachet.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(crispleafAmaranth());

function primroseBlossomSachet() {
    var offering = selectOffering("Primrose Blossom Sachet", "Bonus 25% in altruism points", "Common", "Bonus 25% in altruism points", "IconFavors_primroseBlossomSachet.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(primroseBlossomSachet());

function sweetWilliamSachet() {
    var offering = selectOffering("Sweet William Sachet", "Bonus 25% in boldness points", "Common", "Bonus 25% in boldness points", "IconFavors_sweetWilliamSachet.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(sweetWilliamSachet());

function freshBogLaurel() {
    var offering = selectOffering("Fresh Bog Laurel", "Bonus 50% in objective points", "Uncommon", "Bonus 50% in objective points", "IconFavors_freshBogLaurel.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(freshBogLaurel());

function freshCrispleafAmaranth() {
    var offering = selectOffering("Fresh Crispleaf Amaranth", "Bonus 50% in survival points", "Uncommon", "Bonus 50% in survival points", "IconFavors_freshCrispleafAmaranth.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(freshCrispleafAmaranth());

function freshPrimroseBlossom() {
    var offering = selectOffering("Fresh Primrose Blossom", "Bonus 50% in altruism points", "Uncommon", "Bonus 50% in altruism points", "IconFavors_freshPrimroseBlossom.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(freshPrimroseBlossom());

function freshSweetWilliam() {
    var offering = selectOffering("Fresh Sweet William", "Bonus 50% in boldness points", "Uncommon", "Bonus 50% boldness points", "IconFavors_freshSweetWilliam.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(freshSweetWilliam());

function sealedEnvelope() {
    var offering = selectOffering("Sealed Envelope", "25% bonus to points in all categories", "Uncommon", "25% bonus to points in all categories", "IconFavors_sealedEnvelope.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(sealedEnvelope());

function shroudOfUnion() {
    var offering = selectOffering("Shroud of Union", "Start with someone else", "Uncommon", "Start with someone else", "IconFavors_shroudOfUnion.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(shroudOfUnion());

function tarnishedCoin() {
    var offering = selectOffering("Tarnished Coin", "Creates 1 extra chest", "Uncommon", "Creates 1 extra chest", "IconFavors_tarnishedCoin.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(tarnishedCoin());

function vigosShroud() {
    var offering = selectOffering("Vigo's Shroud", "Start far from the Killer", "Uncommon", "Start far from the Killer", "IconFavors_vigosShroud.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(vigosShroud());

function saltPouch() {
    var offering = selectOffering("Salt Pouch", "Slight increase in luck for all", "Uncommon", "Slight increase in luck for all", "IconFavors_saltPouch.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(saltPouch());

function creamChalkPouch() {
    var offering = selectOffering("Cream Chalk Pouch", "Moderate luck increase", "Uncommon", "Moderate luck increase", "IconFavors_creamChalkPouch.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(creamChalkPouch());

function petrifiedOak() {
    var offering = selectOffering("Petrified Oak", "Creates 1 less hook", "Very Rare", "Creates 1 less hook", "IconFavors_petrifiedOak.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(petrifiedOak());

function fragrantBogLaurel() {
    var offering = selectOffering("Fragrant Bog Laurel", "Bonus 75% in objective points", "Rare", "Bonus 75% in objetive points", "IconFavors_fragrantBogLaurel.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(fragrantBogLaurel());

function fragrantCrispleafAmaranth() {
    var offering = selectOffering("Fragrant Crispleaf Amaranth", "Bonus 75% in survival points", "Rare", "Bonus 75% in survival points", "IconFavors_fragrantCrispleafAmaranth.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(fragrantCrispleafAmaranth());

function fragrantPrimrose() {
    var offering = selectOffering("Fragrant Primrose Blossom", "Bonus 75% in altruism points", "Rare", "Bonus 75% in altruism points", "IconFavors_fragrantPrimroseBlossom.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(fragrantPrimrose());

function fragrantSweetWilliam() {
    var offering = selectOffering("Fragrant Sweet William", "Bonus 75% in boldness points", "Rare", "Bonus 75% in boldness points", "IconFavors_fragrantSweetWilliam.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(fragrantSweetWilliam());

function shroudOfBinding() {
    var offering = selectOffering("Shroud of Binding", "All survivors start together", "Very Rare", "All survivors start together", "IconFavors_shroudOfBinding.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(shroudOfBinding());

function ivoryChalkPouch() {
    var offering = selectOffering("Ivory Chalk Pouch", "Considerable luck increase", "Rare", "Considerable luck increase", "IconFavors_ivoryChalkPouch.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(ivoryChalkPouch());

function blackSaltStatuette() {
    var offering = selectOffering("Black Salt Statuette", "Moderate increase in luck for all", "Rare", "Moderate increase in luck for all", "IconFavors_blackSaltStatuette.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(blackSaltStatuette());

function boundEnvelope() {
    var offering = selectOffering("Bound Envelope", "15% bonus to all point categories for all", "Rare", "15% bonus to all point categories for all", "IconFavors_boundEnvelope.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(boundEnvelope());

function whiteWard() {
    var offering = selectOffering("White Ward", "Do not lose your equipment in death", "Very Rare", "Do not lose your equipment in death", "IconFavors_wardWhite.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(whiteWard());

function vigosJarOfSaltyLips() {
    var offering = selectOffering("Vigo's Jar of Salty Lips", "Considerable luck increase for all", "Very Rare", "Considerable luck increase for all", "IconFavors_jarOfSaltyLips.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(vigosJarOfSaltyLips());

function shinyCoin() {
    var offering = selectOffering("Shiny Coin", "Create 2 extra chests", "Very Rare", "Create 2 extra chests", "IconFavors_shinyCoin.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(shinyCoin());

function emergencyCertificate() {
    var offering = selectOffering("Emergency Certificate", "Slightly increased chance of going to Treatment Theatre", "Common", "Slightly increased chance of going to Treatment Theatre", "iconFavors_emergencyCertificate.png", "All");
    offering.isRedacted = true;
    return offering;
}

//ADD x 2
killerOfferings.push(emergencyCertificate());
survivorOfferings.push(emergencyCertificate());

function psychReport() {
    var offering = selectOffering("Psychiatric Assessment Report", "Considerably increased chance of going to Treatment Theatre", "Uncommon", "Considerably increased chance of going to Treatment Theatre", "iconFavors_psychiatricAssessmentReport.png", "All");
    offering.isRedacted = true;
    return offering;
}

//ADD x 2
killerOfferings.push(psychReport());
survivorOfferings.push(psychReport());

function shatteredGlasses() {
    var offering = selectOffering("Shattered Glasses", "Tremendously increased chance of going to Treatment Theatre", "Rare", "Tremendously increased chance of going to Treatment Theatre", "iconFavors_shatteredGlasses.png", "All");
    return offering;
}

//ADD x 2
killerOfferings.push(shatteredGlasses());
survivorOfferings.push(shatteredGlasses());

function shockSplinter() {
    var offering = selectOffering("Shock Splinter", "Play as the Doctor", "Ultra Rare", "Play as the Doctor", "iconFavors_shockSplinter.png", "Killer");
    offering.isRedacted = true;
    return offering;
}

//ADD
killerOfferings.push(shockSplinter());

function escapeCake() {
    var offering = selectOffering("Escape! Cake", "Bonus 100% in all categories", "Uncommon", "Bonus 100% in all categories", "IconFavors_escapeCake.png", "Survivor");
    return offering;
}

//ADD
survivorOfferings.push(escapeCake());

function survivorPudding() {
    var offering = selectOffering("Survivor Pudding", "Bonus 100% in all categories", "Uncommon", "Bonus 100% in all categories", "IconFavors_survivorPudding.png", "Killer");
    return offering;
}

//ADD
killerOfferings.push(survivorPudding());


function partyStreamers() {
    var offering = selectOffering("Bloody Party Streamers", "All participants receive 100% bonus in all categories", "Rare", "All participants receive 100% bonus in all categories", "IconFavors_bloodyPartyStreamers.png", "All");
    return offering;
}

//ADD x 2
killerOfferings.push(partyStreamers());
survivorOfferings.push(partyStreamers());

function boneSplinter() {
    var offering = selectOffering("Bone Splinter", "Play as Leatherface", "Ultra Rare", "Play as Leatherface", "IconFavors_boneSplinter.png", "killer");
    offering.isRedacted = true;
    return offering;
}

//ADD x 2
killerOfferings.push(boneSplinter());

function smokingSplinter() {
    var offering = selectOffering("Smoking Splinter", "off text", "Ultra Rare", "off text", "iconFavors_smokingSplinter.png", "killer");
    offering.isRedacted = true;
    return offering;
}

//ADD x 2
killerOfferings.push(smokingSplinter());

function piedPiper() {
    var offering = selectOffering("The Pied Piper", "off text", "Rare", "off text", "iconFavors_thePiedPiper.png", "all");
    return offering;
}

//ADD x 2
killerOfferings.push(piedPiper());
survivorOfferings.push(piedPiper());

function glassSplinter() {
    var offering = selectOffering("Glass Splinter", "Play as the Pig", "Ultra Rare", "Play as the Pig", "iconFavors_glassSplinter.png", "Killer");
    offering.isRedacted = true;
    return offering;
}

//ADD
killerOfferings.push(glassSplinter());

function jigsawPiece() {
    var offering = selectOffering("Jigsaw Piece", "x", "Rare", "x", "iconFavors_jigsawPiece.png", "All");
    return offering;
}

//ADD x 2
killerOfferings.push(jigsawPiece());
survivorOfferings.push(jigsawPiece());

function redEnvelope() {
    var offering = selectOffering("Red Envelope", "x", "Common", "x", "iconFavors_redMoneyPacket.png", "All");
    offering.isRedacted = true;
    return offering;
}

//ADD x 2
killerOfferings.push(redEnvelope());
survivorOfferings.push(redEnvelope());

function lastMask() {
    var offering = selectOffering("The Last Mask", "off text", "Rare", "off text", "IconFavors_theLastMask.png", "all");
    return offering;
}

//ADD x 2
killerOfferings.push(lastMask());
survivorOfferings.push(lastMask());

function childBook() {
    var offering = selectOffering("Children's Book", "off text", "Uncommon", "off text", "IconFavors_childrensBook.png", "all");
    offering.isRedacted = true;
    return offering;
}

//ADD x 2
killerOfferings.push(childBook());
survivorOfferings.push(childBook());

function riverRock() {
    var offering = selectOffering("Painted River Rock", "off text", "Common", "off text", "IconFavors_paintedRiverRock.png", "all");
    offering.isRedacted = true;
    return offering;
}

//ADD x 2
killerOfferings.push(riverRock());
survivorOfferings.push(riverRock());

function cutCoin() {
    var offering = selectOffering("Cut Coin", "off text", "Very Rare", "off text", "iconFavors_cutCoin.png", "all");
    return offering;
}

//ADD x 2
killerOfferings.push(cutCoin());

function bbqInv() {
    var offering = selectOffering("BBQ Invitation", "off text", "Common", "off text", "iconFavors_bbqInvitation.png", "all");
    offering.isRedacted = true;
    return offering;
}

//ADD x 2
killerOfferings.push(bbqInv());
survivorOfferings.push(bbqInv());

function yamCrest() {
    var offering = selectOffering("Yamaokas Crest", "off text", "Rare", "off text", "iconFavors_yamaokasCrest.png", "all");
    return offering;
}

//ADD x 2
killerOfferings.push(yamCrest());
survivorOfferings.push(yamCrest());

function damPhoto() {
    var offering = selectOffering("Damaged Photo", "off text", "Rare", "off text", "iconFavors_damagedPhoto.png", "all");
    return offering;
}

//ADD x 2
killerOfferings.push(damPhoto());
survivorOfferings.push(damPhoto());

function hawkinsID() {
    var offering = selectOffering("Hawkins National Laboratory ID", "off text", "Rare", "off text", "iconFavors_hawkinsNationalLaboratoryID.png", "all");
    return offering;
}

//ADD x 2
killerOfferings.push(hawkinsID());
survivorOfferings.push(hawkinsID());

//end specific offering section

//begin basic killer section
//WARNING!!!!! ADD NEW KILLERS TO THE BOTTOM AND TO THE END OF THE LIST
function selectKiller() {
    var defaultKiller = new DbDChar("Default Killer", "killer");
    defaultKiller.stunRecover = 131313; //placeholder value
    defaultKiller.missRecover = 131313; //placeholder value
    defaultKiller.breakPallet = 131313; //placeholder value
    defaultKiller.hitRecover = 131313;	//placeholder value
    defaultKiller.addonLink;
    return defaultKiller;
}
//0 = mike
function selectMike() {
    var mike = selectKiller();
    mike.name = "Michael Myers";
    mike.itemOrAbility = selectAddOn("Evil Within", ["Stalk"], "Common", "Stalk", "iconPowers_stalker1.png", "killer", ["extra"]);
    mike.addonLink = mikeAddons;
    mike.portrait = "Michael_main_killer.png";
    return mike;
}
//ADD
killers.push(selectMike());
//1 = wraith
function selectWraith() {
    var wraith = selectKiller();
    wraith.name = "Wraith";
    wraith.itemOrAbility = selectAddOn("Wailing Bell", ["Disappear/Reappear"], "Common", "Disappear/Reappear", "iconPowers_bell.png", "killer", ["extra"]);
    wraith.addonLink = wraithAddons;
    wraith.portrait = "Dbd-killer-wraith-large.png";
    return wraith;
}

//ADD
killers.push(selectWraith());
//2 = trapper
function selectTrapper() {
    var trapper = selectKiller();
    trapper.name = "Trapper";
    trapper.itemOrAbility = selectAddOn("Bear Trap", ["Set Trap"], "Common", "Set Trap", "iconPowers_trap.png", "killer", ["extra"]);
    trapper.addonLink = trapperAddons;
    trapper.portrait = "Dbd-killer-trapper-large.png";
    return trapper;
}

//ADD
killers.push(selectTrapper());
// 3 = billy
function selectBilly() {
    var billy = selectKiller();
    billy.name = "Hillbilly";
    billy.itemOrAbility = selectAddOn("Chainsaw", ["Chainsaw Sprint"], "Common", "Chainsaw Sprint", "iconPowers_chainsaw.png", "killer", ["extra"]);
    billy.addonLink = billyAddons;
    billy.portrait = "Dbd-killer-hillbilly-large.png";
    return billy;
}

//ADD
killers.push(selectBilly());
//4 = nurse
function selectNurse() {
    var nurse = selectKiller();
    nurse.name = "Nurse";
    nurse.itemOrAbility = selectAddOn("Spencer's Last Breath", ["Blink"], "Common", "Blink", "IconPowers_breath.png", "killer", ["extra"]);
    nurse.addonLink = nurseAddons;
    nurse.portrait = "The_Nurse.png";
    return nurse;
}

//ADD
killers.push(selectNurse())
// 5 = hag
function selectHag() {
    var hag = selectKiller();
    hag.name = "Hag";
    hag.itemOrAbility = selectAddOn("Blackened Catalyst", ["Phantasm Trap"], "Common", "Phantasm Trap", "iconPowers_blackenedCatalyst.png", "killer", ["extra"]);
    hag.addonLink = hagAddons;
    hag.portrait = "Portrait_hag.png";
    return hag;
}

//ADD
killers.push(selectHag());

// 6 = doc
function selectDoc() {
    var doc = selectKiller();
    doc.name = "Doctor";
    doc.itemOrAbility = selectAddOn("Carter's Spark", ["Shock Therapy"], "Common", "Shock Therapy", "iconPowers_cartersSpark.png", "killer", ["extra"]);
    doc.addonLink = doctorAddons;
    doc.portrait = "Dbd-killer-large-doctor.png";
    return doc;
}

//ADD
killers.push(selectDoc());

//7 = huntress
function selectHuntress() {
    var huntress = selectKiller();
    huntress.name = "Huntress";
    huntress.itemOrAbility = selectAddOn("Hunting Hatchets", ["Hatchet Throw"], "Common", "Hatchet Throw", "iconPowers_huntingHatchets.png", "killer", ["extra"]);
    huntress.addonLink = huntressAddons;
    huntress.portrait = "Portrait_huntress.png";
    return huntress;
}

//ADD
killers.push(selectHuntress());
//8 Cannibal
function selectCannibal() {
    var cannibal = selectKiller();
    cannibal.name = "Leatherface";
    cannibal.itemOrAbility = selectAddOn("Bubba's Chainsaw", ["Chainsaw Sweep"], "Common", "Chainsaw Sweep", "iconPowers_bubbasChainsaw.png", "killer", ["extra"]);
    cannibal.addonLink = cannibalAddons;
    cannibal.portrait = "Dbd-killer-leatherface.png";
    return cannibal;
}

//ADD
killers.push(selectCannibal());
//9 - Fred
function selectFreddy() {
    var fred = selectKiller();
    fred.name = "Freddy Krueger";
    fred.itemOrAbility = selectAddOn("Dream Demon", ["Dream Demon"], "Common", "Dream Demon", "iconPowers_dreamMaster.png", "killer", ["extra"]);
    fred.addonLink = freddyAddons;
    fred.portrait = "Dbd-killer-freddy.png";
    return fred;
}
//ADD
killers.push(selectFreddy());
//10 Pig
function selectPig() {
    var pig = selectKiller();
    pig.name = "The Pig";
    pig.itemOrAbility = selectAddOn("Jigsaw's Baptism", ["Jigsaw's Baptism"], "Common", "Jigsaw's Baptism", "iconPowers_reverseBearTrap.png", "killer", ["extra"]);
    pig.addonLink = pigAddons;
    pig.portrait = "Pig_Portrait.png";
    return pig;
}
//ADD
killers.push(selectPig());

function selectClown() {
    var clown = selectKiller();
    clown.name = "The Clown";
    clown.itemOrAbility = selectAddOn("The Afterpiece Tonic", ["The Afterpiece Tonic"], "Common", "The Afterpiece Tonic", "iconPowers_gasBomb.png", "killer", ["extra"]);
    clown.addonLink = clownAddons;
    clown.portrait = "clown_port.png";
    return clown;
}
//ADD
killers.push(selectClown());

function selectSpirit() {
    var spirit = selectKiller();
    spirit.name = "The Spirit";
    spirit.itemOrAbility = selectAddOn("Yamaoka's Haunting", ["Yamaoka's Haunting"], "Common", "Yamaoka's Haunting", "iconPowers_yamaokasHaunting.png", "killer", ["extra"]);
    spirit.addonLink = spiritAddons;
    spirit.portrait = "spirit_port.png";
    return spirit;
}
//ADD
killers.push(selectSpirit());

function selectLegion() {
    var legion = selectKiller();
    legion.name = "The Legion";
    legion.itemOrAbility = selectAddOn("Feral Frenzy", ["Feral Frenzy"], "Common", "Feral Frenzy", "iconPowers_feralFrenzy.png", "killer", ["extra"]);
    legion.addonLink = legionAddons;
    legion.portrait = "LegionPortrait.png";
    return legion;
}
//ADD
killers.push(selectLegion());

function selectPlague() {
    var plague = selectKiller();
    plague.name = "The Plague";
    plague.itemOrAbility = selectAddOn("Vile Purge", ["Vile Purge"], "Common", "Vile Purge", "iconPowers_vilePurge.png", "killer", ["extra"]);
    plague.addonLink = plagueAddons;
    plague.portrait = "plague_port.png";
    return plague;
}
//ADD
killers.push(selectPlague());

function selectGFace() {
    var ghostface = selectKiller();
    ghostface.name = "The Ghost Face";
    ghostface.itemOrAbility = selectAddOn("Night Shroud", ["Night Shroud"], "Common", "Night Shroud", "iconPowers_ghostPower_available.png", "killer", ["extra"]);
    ghostface.addonLink = ghostfaceAddons;
    ghostface.portrait = "gf_port.png";
    return ghostface;
}
//ADD
killers.push(selectGFace());

function selectDemo() {
    var demo = selectKiller();
    demo.name = "The Demogorgon";
    demo.itemOrAbility = selectAddOn("Of the Abyss", ["Of the Abyss"], "Common", "Of the Abyss", "iconPowers_ofTheAbyss.png", "killer", ["extra"]);
    demo.addonLink = demogorgonAddons;
    demo.portrait = "QK_storeBackground.png";
    return demo;
}
//ADD
killers.push(selectDemo());

//end basic killer section - add new killers above here, plox
//END DATA SECTION
//Add escape quotes for HTML - quick and dirty
function toHTML(myString) {
    myString = "\"" + myString + "\""
    return myString;
}
//Add escape SINGLE quotes for HTML - quick and dirty
function toHTML2(myString) {
    myString = "\'" + myString + "\'"
    return myString;
}
//gui lock toggle function
function toggleGUI() {
    guiIsLocked = !guiIsLocked;
}
//Quick and dirty random integers within exclusive limitation
function rando(limitation) {
    return Math.floor((Math.random() * limitation));
}
//function for updating difficulty value in menu
function updateDiff() {
    document.getElementById("diffLvl").innerHTML = difficulty;
}
//function for increasing difficulty
function diffUp() {
    difficulty++;
    if (difficulty > 10)
        difficulty = 0;
    updateDiff();
}
//function for decreasing difficulty
function diffDown() {
    difficulty--;
    if (difficulty < 0)
        difficulty = 10;
    updateDiff();
}
//function to update sound & animation settings on options menu
function updateCowbell() {
    if (doAnimation)
        document.getElementById("animations").innerHTML = "Animation: on";
    else
        document.getElementById("animations").innerHTML = "Animation: off";
    if (doSound)
        document.getElementById("sounds").innerHTML = "Sound: on";
    else
        document.getElementById("sounds").innerHTML = "Sound: off";
}
//toggle sound
function toggleSound() {
    if (doAnimation) {
        doSound = !doSound;
        updateCowbell();
    }
}
//toggle animation
function toggleAnimate() {
    doAnimation = !doAnimation;
    if (!doAnimation)
        doSound = false;
    updateCowbell();
}


//HTML Display Code Helpers
//Quick sorter function for menu sorting by rarity and name
function compare(a, b) {
    //console.log(a.rarity + " > " + b.rarity);
    var result;
    var result2;
    switch (a.rarity.toLowerCase()) {
        case "common":
            result = 1;
            break;
        case "uncommon":
            result = 2;
            break;
        case "rare":
            result = 3;
            break;
        case "very rare":
            result = 4;
            break;
        case "ultra rare":
            result = 5;
            break;
    }
    switch (b.rarity.toLowerCase()) {
        case "common":
            result2 = 1;
            break;
        case "uncommon":
            result2 = 2;
            break;
        case "rare":
            result2 = 3;
            break;
        case "very rare":
            result2 = 4;
            break;
        case "ultra rare":
            result2 = 5;
            break;
    }
    if (result - result2 === 0) {
        if (a.name > b.name)
            return 1;
        else if (a.name < b.name)
            return -1;
        else
            return 0;
    }
    else
        return result - result2;
}
//sort items for menu display
function sortForDisplay(targetArray) {
    var i;
    var tempArray = [];
    for (i in targetArray) {
        tempArray.push(targetArray[i]);
        tempArray[i].pKey = i;
    }
    tempArray.sort(compare);
    //for (i in tempArray) {
        //console.log(tempArray[i].name);
    //}
    return tempArray;
}
//Snag potential build link keys!
function checkIncoming() {
    var addressBar = window.location.href;
    var potentialBuild = addressBar.split('?');
    if (potentialBuild.length > 1 && potentialBuild[1].length > 1) {
        return potentialBuild[1];
    }
    else
        return -1;
}
//assigns the appropriate underlay graphic based on the item sent in
function assignGraphic(targetItem) {
    if (undefined == targetItem.type) {
        //console.log(targetItem.name + " HAS NO TYPE");
        return filePath + "EmptyBox.png";
    }
    var itemType = targetItem.type.toLowerCase();
    //sense items & addons
    switch (itemType) {
        case "flashlight":
        case "toolbox":
        case "first aid kit":
        case "map":
        case "key":
        case "chinese firecracker":
        case "addon":
            switch (targetItem.rarity.toLowerCase()) {
                case "common":
                    return filePath + "BoxCommon.png";
                case "uncommon":
                    return filePath + "BoxUncommon.png";
                case "rare":
                    return filePath + "BoxRare.png";
                case "very rare":
                    return filePath + "BoxVeryRare.png";
                case "ultra rare":
                    return filePath + "BoxUltraRare.png";
            }
            break;
            //sense killer for killer power box
        case "killer":
            return filePath + "BoxCommon.png";//INSERT PIC NAME
            break;
            //sense offerings
        case "offering":
            switch (targetItem.rarity.toLowerCase()) {
                case "common":
                    return filePath + "OffCommon.png";
                case "uncommon":
                    return filePath + "OffUncommon.png";
                case "rare":
                    return filePath + "OffRare.png";
                case "very rare":
                    return filePath + "OffVeryRare.png";
                case "ultra rare":
                    return filePath + "OffUltraRare.png";
            }
            break;
            //sense perks
        case "perk":
            switch (targetItem.rarity.toLowerCase()) {
                case "common":
                    return filePath + "PerkRare.png";
                case "uncommon":
                    return filePath + "PerkRare.png";
                case "rare":
                    return filePath + "PerkRare.png";
                case "very rare":
                    return filePath + "PerkVeryRare.png";
                case "ultra rare":
                    return filePath + "PerkUltraRare.png";
            }
            break;
            //by default we return an error
        default:
            switch (targetItem.rarity.toLowerCase()) {
                case "common":
                    return filePath + "BoxCommon.png";
                case "uncommon":
                    return filePath + "BoxUncommon.png";
                case "rare":
                    return filePath + "BoxRare.png";
                case "very rare":
                    return filePath + "BoxVeryRare.png";
                case "ultra rare":
                    return filePath + "BoxUltraRare.png";
            }
    }
    return -1;
}
//Builder for formating loadout panel sections
//uType refers to underlay type there's one type for perks, one for addons and one for items/
//abilities. toDisplay is a pointer to the item - the return value is a table heading item
//this should be placed in a table row <tr></tr> section
function loadoutBuilder(oType, uType, tSlot) {
    var toDisplay = tSlot.getHolding();
    /*console.log(oType + " " + uType);
     console.log(toDisplay.name);
     console.log(toDisplay.type);*/
    if (oType === 1)
        oType = "overlay";
    else if (oType === 2)
        oType = "overlay2";
    else
        oType = "overlay3";
    var finalHTML = "<th><div class=" + toHTML("setforloadout") + " onclick=" + toHTML("siteManager.sManager." + tSlot.moniker + ".spawnMenu()") + "><img class=" + toHTML(oType) + "src=" + toHTML(filePath + toDisplay.icon) + ">" + "<img class=";
    if (uType === 3)
        uType = "underlay3";
    else if (uType === 2)
        uType = "underlay2";
    else if (uType === 4)
        uType = "underlay4";
    else
        uType = "underlay";
    finalHTML += toHTML(uType) + "src=" + toHTML(assignGraphic(toDisplay)) + "></div></th>";
    //Generate Static
    //console.log(finalHTML);
    return finalHTML;
}
//CODE FOR BLANKING OUT SLOTS ON THE LOADOUT PANEL IN HTML
//target slot to be used later to send to overpanel in all four helper functions
function blankPerk(targetSlot) {
    var toDisplay = "iconHelp_HowToWin_killers.png";
    var oType = "overlay";
    var finalHTML = "<th><div class=" + toHTML("setforloadout") + " onclick=" + toHTML("siteManager.sManager." + targetSlot.moniker + ".spawnMenu()") + "><img class=" + toHTML(oType) + "src=" + toHTML(filePath + toDisplay) + ">" + "<img class=";
    var uType = "underlay";
    finalHTML += toHTML(uType) + "src=" + toHTML(filePath + "PerkUltraRare.png") + "></div></th>";
    return finalHTML;
    /*var finalHTML = "<th><div class=" + toHTML("setforloadout") +" onclick="+ toHTML("siteManager.sManager." + targetSlot.moniker + ".spawnMenu()") + ">";
     finalHTML += "<img src=" + toHTML(filePath + "EmptyPerk.png") + ">" + "</div></th>";
     return finalHTML;*/
}
function blankAddon(targetSlot) {
    var toDisplay = "iconHelp_HowToWin_killers.png";
    var oType = "overlay2";
    var finalHTML = "<th><div class=" + toHTML("setforloadout") + " onclick=" + toHTML("siteManager.sManager." + targetSlot.moniker + ".spawnMenu()") + "><img class=" + toHTML(oType) + "src=" + toHTML(filePath + toDisplay) + ">" + "<img class=";
    var uType = "underlay3";
    finalHTML += toHTML(uType) + "src=" + toHTML(filePath + "BoxUltraRare.png") + "></div></th>";
    return finalHTML;
    /*var finalHTML = "<th><div class=" + toHTML("setforloadout") +" onclick="+ toHTML("siteManager.sManager." + targetSlot.moniker + ".spawnMenu()") +">";
     finalHTML += "<img src=" + toHTML(filePath + "EmptyBox.png") + ">" + "</div></th>";
     return finalHTML;*/
}
function blankItem(targetSlot) {
    var toDisplay = "iconHelp_HowToWin_killers.png";
    var oType = "overlay3";
    var finalHTML = "<th><div class=" + toHTML("setforloadout") + " onclick=" + toHTML("siteManager.sManager." + targetSlot.moniker + ".spawnMenu()") + "><img class=" + toHTML(oType) + "src=" + toHTML(filePath + toDisplay) + ">" + "<img class=";
    var uType = "underlay4";
    finalHTML += toHTML(uType) + "src=" + toHTML(filePath + "BoxUltraRare.png") + "></div></th>";
    return finalHTML;
    /*var finalHTML = "<th><div class=" + toHTML("setforloadout") +" onclick="+ toHTML("siteManager.sManager." + targetSlot.moniker + ".spawnMenu()") + ">";
     finalHTML += "<img src=" + toHTML(filePath + "EmptyBox.png") + ">" + "</div></th>";
     return finalHTML;*/
}
function blankOffering(targetSlot) {
    var toDisplay = "iconHelp_HowToWin_killers.png";
    var oType = "overlay";
    var finalHTML = "<th><div class=" + toHTML("setforloadout") + " onclick=" + toHTML("siteManager.sManager." + targetSlot.moniker + ".spawnMenu()") + "><img class=" + toHTML(oType) + "src=" + toHTML(filePath + toDisplay) + ">" + "<img class=";
    var uType = "underlay";
    finalHTML += toHTML(uType) + "src=" + toHTML(filePath + "OffUltraRare.png") + "></div></th>";
    return finalHTML;
    /*var finalHTML = "<th><div class=" + toHTML("setforloadout") +" onclick="+ toHTML("siteManager.sManager." + targetSlot.moniker + ".spawnMenu()") + ">";
     finalHTML += "<img src=" + toHTML(filePath + "EmptyOff.png") + ">" + "</div></th>";
     return finalHTML;*/
}
//Rarity -> background color conversion helper function (takes in rarity and spits out the color code)
function getColor(rarityStr) {
    switch (rarityStr.toLowerCase()) {
        case "common":
            return "#483527";
        case "uncommon":
            return "#a88d26";
        case "rare":
            return "#095816";
        case "ultra rare":
            return "#a20435";
        case "very rare":
            return "#502167";
        default:
            return "#312d2e";
    }
}
//Overpanel build and show
function showOverpanel(pullFrom, slotName, pageNum) {
    //console.log("Overpanel Function Acitvted");
    var itemsPerPage = columns * rows;
    var start = pageNum * itemsPerPage;
    if (start == pullFrom.length - 1)
        start -= 3;
    var stopHere = pullFrom.length;
    if (pageNum < 0 || start > stopHere) {
        //console.log("Page number is less than 0 or the start number is beyond stophere");
        return 0;
    }
    var i;
    var j;
    var itemRarity;
    var itemCount = start;
    document.getElementById("overpanel").style.display = "block";
    var finalHTML = "<table id=" + toHTML("opTable") + ">";
    for (i = 0; i < rows; i++) {
        if (itemCount >= stopHere)
            break;
        finalHTML += "<tr>"
        for (j = 0; j < columns; j++) {
            itemRarity = pullFrom[itemCount].rarity;
            finalHTML += "<th class=" + toHTML("cellcontainer") + "onclick=" + toHTML("siteManager.guiSelectItem(siteManager.sManager." + slotName + ", " + pullFrom[itemCount].pKey + ")") + "><div class=" + toHTML("holdicon") + " style=" + toHTML("background-color:" + getColor(itemRarity)) + "><img src=" + toHTML(filePath + pullFrom[itemCount].icon) + "></div><div class=" + toHTML("holdname") + ">" + pullFrom[itemCount].name + "</div></th>";
            itemCount++;
            if (itemCount >= stopHere) {
                finalHTML += "</tr>";
                break;
            }
        }
    }
    finalHTML += "</table><table id=" + toHTML("bottomNav") + "><tr><th class=" + toHTML("menuNav") + " onclick=" + toHTML("clickedPrev(" + pageNum + ", siteManager.sManager." + slotName + ")") + ">&lt; PREV</th><th class=" + toHTML("menuBlank") + "onclick=" + toHTML("clickedClear(siteManager.sManager." + slotName + ")") + ">CLEAR</th><th class=" + toHTML("menuClose") + " onclick=" + toHTML("clickedClose()") + ">CLOSE</th><th class=" + toHTML("menuNav") + " onclick=" + toHTML("clickedNext(" + pageNum + ", " + "siteManager.sManager." + slotName + ")") + ">NEXT &gt;</th></tr></table>";
    //console.log(finalHTML);
    document.getElementById("overpanel").innerHTML = finalHTML;
}
//close up the overpanel
function closeMainMenu() {
    document.getElementById("overpanel").style.display = "none";
}
//CODE AND DECODE SECTION
//Default setup
function setupDefault() {
}

//Killer Code Decipher
function decipherK(decodeMe) {
    //check size limits and for lack of bookends
    if (decodeMe.length > 26)
        return -1;
    else if (decodeMe.charAt(decodeMe.length - 1) === 'X')
        decodeMe = decodeMe.slice(1, -1);
    else
        return -1;
    //check for first chacter lower case - N is not valid for character indicator
    if (decodeMe.charAt(0).toLowerCase() !== decodeMe.charAt(0))
        return -1;
    //indicators will follow a format that shifts between upper and lower case
    //N is a special case where nothing is there
    //declare variables
    var groupsOut = ["", "", "", "", "", "", "", ""];
    var currentGroup = 0;
    var tempStr;
    var i;
    var emergencyBrake = 0;
    var lowerCaseMode = true;
    //start string breakdown
    while (decodeMe.length !== 0) {
        if (lowerCaseMode) {
            //group of 3
            for (i = 0; i < 3; i++) {
                //4 possibilities - 'N', continue group, group ends early, entire string is over
                if (decodeMe.length <= 0)
                    break; //string over
                else if (decodeMe.charAt(0) === 'N') { //we encounter an N
                    //if we did not just get here, we need to increment
                    if (i != 0)
                        ++currentGroup;
                    //if we did just get here we need to set back to previous mode
                    else
                        lowerCaseMode = false;
                    //add the N and break out
                    groupsOut[currentGroup] += 'N';
                    decodeMe = decodeMe.substring(1);
                    break;
                }
                else if (decodeMe.charAt(0).toUpperCase() === decodeMe.charAt(0)) {
                    lowerCaseMode = false;
                    break;
                }
                else {
                    groupsOut[currentGroup] += decodeMe.charAt(0);
                    decodeMe = decodeMe.substring(1);
                }
            }
            ++currentGroup;
        }
        else {
            for (i = 0; i < 3; i++) {
                if (decodeMe.length <= 0)
                    break;
                else if (decodeMe.charAt(0) === 'N') {
                    if (i != 0)
                        ++currentGroup;
                    else
                        lowerCaseMode = true;
                    groupsOut[currentGroup] += 'N';
                    decodeMe = decodeMe.substring(1);
                    break;
                }
                else if (decodeMe.charAt(0).toLowerCase() === decodeMe.charAt(0)) {
                    lowerCaseMode = true;
                    break;
                }
                else {
                    groupsOut[currentGroup] += decodeMe.charAt(0);
                    decodeMe = decodeMe.substring(1);
                }
            }
            ++currentGroup;
        }
        ++emergencyBrake;
        if (emergencyBrake > 10)
            return -1;
    }
    for (i in groupsOut) {
        if (groupsOut[i] != 'N')
            groupsOut[i] = groupsOut[i].toLowerCase();
    }
    return groupsOut;
}
//Survivor Code Decipher
function decipherS(decodeMe) {
    //check size limits and for lack of bookends
    if (decodeMe.length > 29)
        return -1;
    else if (decodeMe.charAt(decodeMe.length - 1) === 'X')
        decodeMe = decodeMe.slice(1, -1);
    else {
        console.log("ERROR 3199");
        return -1;
    }
    //check for first chacter lower case - N is not valid for character indicator
    if (decodeMe.charAt(0).toLowerCase() !== decodeMe.charAt(0))
        return -1;
    //indicators will follow a format that shifts between upper and lower case
    //N is a special case where nothing is there
    //declare variables
    var groupsOut = ["", "", "", "", "", "", "", "", ""];
    var currentGroup = 0;
    var tempStr;
    var i;
    var emergencyBrake = 0;
    var lowerCaseMode = true;
    //start string breakdown
    while (decodeMe.length !== 0) {
        if (lowerCaseMode) {
            for (i = 0; i < 3; i++) {
                if (decodeMe.length <= 0)
                    break;
                else if (decodeMe.charAt(0) === 'N') {
                    if (i != 0)
                        ++currentGroup;
                    else
                        lowerCaseMode = false;
                    groupsOut[currentGroup] += 'N';
                    decodeMe = decodeMe.substring(1);
                    break;
                }
                else if (decodeMe.charAt(0).toUpperCase() === decodeMe.charAt(0)) {
                    lowerCaseMode = false;
                    break;
                }
                else {
                    groupsOut[currentGroup] += decodeMe.charAt(0);
                    decodeMe = decodeMe.substring(1);
                }
            }
            ++currentGroup;
        }
        else {
            for (i = 0; i < 3; i++) {
                if (decodeMe.length <= 0)
                    break;
                else if (decodeMe.charAt(0) === 'N') {
                    if (i != 0)
                        ++currentGroup;
                    else
                        lowerCaseMode = true;
                    groupsOut[currentGroup] += 'N';
                    decodeMe = decodeMe.substring(1);
                    break;
                }
                else if (decodeMe.charAt(0).toLowerCase() === decodeMe.charAt(0)) {
                    lowerCaseMode = true;
                    break;
                }
                else {
                    groupsOut[currentGroup] += decodeMe.charAt(0);
                    decodeMe = decodeMe.substring(1);
                }
            }
            ++currentGroup;
        }
        ++emergencyBrake;
        if (emergencyBrake > 10) {
            console.log("ERROR 3256");
            return -1;
        }
    }
    for (i in groupsOut) {
        if (groupsOut[i] != 'N')
            groupsOut[i] = groupsOut[i].toLowerCase();
    }
    return groupsOut;
}
//Base 10 low case to number converter - Special thanks to Aardvark on stackoverflow
function btConvert(convertMe) {
    //because the number system and string system places are in reverse order, we need to
    //reverse the string.
    var tmpArray = convertMe.split("");
    tmpArray = tmpArray.reverse();
    convertMe = tmpArray.join("");
    if (convertMe.length === 1 && convertMe === 'N')
        return -2;
    if (convertMe.length > 3)
        return -2;
    var position = convertMe.length - 1;
    var testMe;
    var converted = 0;
    while (position >= 0) {
        testMe = convertMe.charAt(position);
        if (!isNaN(testMe * 1)) {
            console.log("ERROR 3278");
            return -1;
        }
        else {
            if (testMe === testMe.toUpperCase()) {
                console.log("ERROR 3282");
                return -1;
            }
            if (testMe === testMe.toLowerCase()) {
                switch (testMe) {
                    case 'a':
                        converted = converted + 0 * Math.pow(10, (position));
                        break;
                    case 'b':
                        converted = converted + 1 * Math.pow(10, (position));
                        break;
                    case 'c':
                        converted = converted + 2 * Math.pow(10, (position));
                        break;
                    case 'd':
                        converted = converted + 3 * Math.pow(10, (position));
                        break;
                    case 'e':
                        converted = converted + 4 * Math.pow(10, (position));
                        break;
                    case 'f':
                        converted = converted + 5 * Math.pow(10, (position));
                        break;
                    case 'g':
                        converted = converted + 6 * Math.pow(10, (position));
                        break;
                    case 'h':
                        converted = converted + 7 * Math.pow(10, (position));
                        break;
                    case 'i':
                        converted = converted + 8 * Math.pow(10, (position));
                        break;
                    case 'j':
                        converted = converted + 9 * Math.pow(10, (position));
                        break;
                    default:
                        return -2;
                }
                --position;
            }
        }
    }
    return converted;
}
function tenToChar(num) {
    if (num === -2)
        return "N";
    var myString = num.toString();
    var outString = "";
    //console.log(myString);
    position = 0;
    while (position < myString.length) {
        switch (myString.charAt(position)) {
            case '0':
                outString += 'a';
                break;
            case '1':
                outString += 'b';
                break;
            case '2':
                outString += 'c';
                break;
            case '3':
                outString += 'd';
                break;
            case '4':
                outString += 'e';
                break;
            case '5':
                outString += 'f';
                break;
            case '6':
                outString += 'g';
                break;
            case '7':
                outString += 'h';
                break;
            case '8':
                outString += 'i';
                break;
            case '9':
                outString += 'j';
                break;
            default:
                return -1;
        }
        ++position;
    }
    return outString;
}
//Decipher Main
function decipherMain(decodeMe) {
    //console.log("Decipher main running");
    var numbersOut;
    //if we don't have a number, evaluate the char
    if (isNaN(decodeMe.charAt(0))) {
        //if we don't have a K or S we return -1 othwise we call the appropriate function
        if (decodeMe.charAt(0) === 'K')
            numbersOut = decipherK(decodeMe);
        else if (decodeMe.charAt(0) === 'S')
            numbersOut = decipherS(decodeMe);
        else {
            console.log("ERROR 3379");
            return -1;
        }
    }
    //if we have a number run default
    else {
        console.log("ERROR 3382");
        return -1;
    }
    //console.log(numbersOut + " 1");
    var addonBookend1;
    var addonBookend2;
    //check for double numbers in perks and addons
    //set position of addon numbers
    if (numbersOut.length === 8) {
        addonBookend1 = 5;
        addonBookend2 = 6;
    }
    else if (numbersOut.length === 9) {
        addonBookend1 = 6;
        addonBookend2 = 7;
    }
    else
        return -1;
    //first check perks
    var perkChecker = [numbersOut[1], numbersOut[2], numbersOut[3], numbersOut[4]];
    var temp;
    //console.log(numbersOut);
    for (var x in perkChecker) {
        var temp = perkChecker[x];
        //console.log(temp);
        if (perkChecker.indexOf(temp) != perkChecker.lastIndexOf(temp) && perkChecker[x] != 'N') {
            console.log("ERROR 3403");
            return -1;
        }
    }
    //now check addons
    if (numbersOut[addonBookend1] === numbersOut[addonBookend2] && numbersOut[addonBookend2] != 'N') {
        console.log("ERROR 3406");
        return -1;
    }
    //Checks complete.
    var i;
    for (i in numbersOut) {
        numbersOut[i] = btConvert(numbersOut[i]);
    }
    return numbersOut;
}
//END CODE AND DECODE SECTION

//ANIMATIONS SECTION
//generate pool of item keys to use in animation
function generatePool(poolSize, targetArray) {
    //declarations
    var arraySize = targetArray.length;
    var pool = [];
    var rand;
    var isDuplicate;
    var allowDuplicates = (targetArray.length < poolSize)
    //generate the values for animation only
    for (var i = 0; i < poolSize; i++) {
        rand = Math.floor(Math.random() * arraySize);
        isDuplicate = pool.indexOf(rand);
        //isDuplicate = pool.findIndex(x => x === rand);
        if (allowDuplicates)
            isDuplicate = -1;
        if (isDuplicate != -1 || targetArray[rand].isSelected || targetArray[rand].isRedacted) {
            --i;
            continue;
        }
        else
            pool.push(rand);
    }
    //generate the actual thing that will be selected
    while (true) {
        //difficulty adds in BLANK space possibilities
        rand = Math.floor(Math.random() * (arraySize + difficulty));
        if (rand >= arraySize) {
            // -2 will be code for BLANK we'll send -2 out... too bad ;)
            rand = -2;
            break;
        }
        //if we find a value that is already selected or redacted we need to try again
        else if (targetArray[rand].isSelected === true || targetArray[rand].isRedacted)
            continue;
        //otherwise we found a valid option and break out
        else
            break;
    }
    pool.push(rand);
    return pool; //returns pool of keys for selected values in target array
}
//close the animate window
function closeAnimWindow() {
    document.getElementById("animWindow").style.display = "none";
    document.getElementById("animResult").style.display = "none";
    document.getElementById("toAnimate").style.width = "0px";
    document.getElementById("toAnimate").style.height = "0px";
}
//animation function
function itemAnimate(targetPic) {
    var target = document.getElementById("toAnimate");
    var width = 0;
    var height = 0;
    var correct = -30;
    var count = 0;
    target.style.width = width + 'px';
    target.style.height = height + 'px';
    document.getElementById("toAnimate").src = targetPic;
    var animation = setInterval(roll, 10);
    function roll() {
        if (width >= 300)
            clearInterval(animation);
        else {
            width += 6;
            height += 6;
            correct = correct + 0.5;
            target.style.width = width + 'px';
            target.style.height = height + 'px';
            target.style.marginTop = (height * -1 / 2) + 'px';
            target.style.marginLeft = (-width / 3 + 150 - correct) + 'px';
        }
    }
}
function preparePool(pool, targetArray) {
    var lastValue = pool.length - 1;
    for (var i = 0; i < pool.length - 1; i++) {
        pool[i] = filePath + targetArray[pool[i]].icon;
    }
    if (pool[lastValue] < 0)
        pool[lastValue] = filePath + "iconHelp_HowToWin_killers.png";
    else
        pool[lastValue] = filePath + targetArray[pool[lastValue]].icon;
    return pool;
}
function animatePool(targetArray, pool) {
    document.getElementById("animWindow").style.display = "block";
    var finalResult;
    var count = 0;
    var last = pool.length - 1;
    var out = pool[last];
    if (pool[last] < 0)
        finalResult = "NOTHING!";
    else
        finalResult = targetArray[pool[last]].name;
    document.getElementById("animResult").innerHTML = finalResult;
    pool = preparePool(pool, targetArray);
    for (var i = 0; i < pool.length; i++) {
        let ii = i;
        setTimeout(function () {
            itemAnimate(pool[ii]);
        }, 600 * ii);
    }
    /*var iAnimation = setInterval(iRoll, 300 * count);
     function iRoll(){
     if(count >= pool.length) clearInterval(iAnimation);
     else{
     let iCount = count;
     itemAnimate(pool[iCount]);
     ++count;
     }
     }*/
    setTimeout(function () {
        document.getElementById("animResult").style.display = "block";
    }, 4210);
    setTimeout(function () {
        closeAnimWindow();
    }, 4960);
    return out;
}
/*function animatePool(targetArray, targetPool){
 var wait;
 document.getElementById("animWindow").style.display = "block";
 var finalResult = targetPool.pop();
 var trolled = finalResult < 0;
 if(trolled) document.getElementById("animResult").innerHTML = "NOTHING!";
 else document.getElementById("animResult").innerHTML = targetArray[finalResult].name;
 for(var i = targetPool.length - 1; i > -1 ; i--){
 wait = i * 300;
 setTimeout(itemAnimate(filePath + targetArray[targetPool[i]].icon), wait);
 }
 if(trolled) setTimeout(itemAnimate(filePath + "iconHelp_HowToWin_killers.png"), 3000);
 else setTimeout(itemAnimate(filePath + targetArray[finalResult].icon), 3000);
 document.getElementById("animResult").style.display = "block";
 setTimeout(closeAnimWindow, 800);
 return finalResult;
 //NOTE the slot will have to set the item to holding after this using the return value
 //should the return value be negative the slot will need to be blanked out
 }*/
//SLOTS SECTION
//code for assigning blank underlays to slots
function assignUnderlay(targetMoniker) {
    if (targetMoniker.includes("perk"))
        return (filePath + "PerkUltraRare.png");
    else if (targetMoniker.includes("offering"))
        return (filePath + "OffUltraRare.png");
    else if (targetMoniker.includes("item"))
        return (filePath + "BoxUltraRare.png");
    else if (targetMoniker.includes("add"))
        return (filePath + "BoxUltraRare.png");
    else
        return -2;
}
//Making a general slot object
function createSlot(listPointer, moniker) {
    //name of the slot to be used later. MUST be the same as the variable name
    this.moniker = moniker;
    //menu page we are currently on
    this.menuPage = 0;
    //this should be tied to a specific list item or set to blank as below. Default is blank.
    var holding = "BLANK";
    //this should be pointing to the list of items to draw from.
    var drawFrom = listPointer;
    //Boolean true or false value - is the slot open for assignment
    var isOpen = false;
    //number of redactions in the list associated with the slot
    //var numOfRedactions = 0;
    //store the blank graphic filename
    this.blankGraphic = "iconHelp_HowToWin_killers.png";
    //variable for the underlay graphic. MUST be initialized later
    this.blankUnderlay = assignUnderlay(moniker);
    //variable for target ID for overlay
    this.overlayID = moniker + "overlay";
    //variable for underlay ID
    this.underlayID = moniker + "underlay";
    //variable for target label ID
    this.labelID = moniker + "label";
    //variable for number of companion slots ( 1 for addons 3 for perks 0 otherwise)
    var companion = 0;
    //returns the item that is being held
    this.getHolding = function () {
        return holding;
    };
    this.updateDOM = function () {
        //console.log("i'm holding " + holding);
        if (holding != "BLANK" && typeof holding != 'undefined') {
            document.getElementById(this.labelID).innerHTML = holding.name;
            document.getElementById(this.overlayID).src = filePath + holding.icon;
            document.getElementById(this.underlayID).src = assignGraphic(holding);
        }
    };
    //This function blanks out the slot
    this.blankOut = function () {
        //console.log("blank out started");
        //console.log("my name is " + this.moniker);
        //console.log("graphic = " + this.blankGraphic);
        //console.log("underlay = " + this.blankUnderlay);
        //console.log("label target = " + this.labelID);
        var blankAddonsToo = false;
        if (this.moniker === "itemOrAbility")
            blankAddonsToo = true;
        if (!isOpen) {
        } //if the slot is closed do nothing
        else if (holding != "BLANK" && typeof holding != 'undefined') {
            holding.isSelected = false;
            holding = "BLANK";
            if (this.moniker != "currentChar") {
                document.getElementById(this.labelID).innerHTML = "Empty";
                document.getElementById(this.overlayID).src = filePath + this.blankGraphic;
                document.getElementById(this.underlayID).src = this.blankUnderlay;
            }
            if (blankAddonsToo) {
                siteManager.sManager.addon1.blankOut();
                siteManager.sManager.addon2.blankOut();
            }
        }
        else {
            holding = "BLANK";
            if (this.moniker != "currentChar") {
                document.getElementById(this.labelID).innerHTML = "Empty";
                document.getElementById(this.overlayID).src = filePath + this.blankGraphic;
                document.getElementById(this.underlayID).src = this.blankUnderlay;
            }
            if (blankAddonsToo) {
                siteManager.sManager.addon1.blankOut();
                siteManager.sManager.addon2.blankOut();
            }
        }
    };
    //this function takes a number and grabs the list item that corresponds with it
    //that list item is then held in the slot
    this.setHolding = function (key) {
        //3 possible scenarios
        //1st: blanking out a slot (either with or wihout something in it)
        if (key == -2)
            this.blankOut();
        //check to make sure we have a valid key
        else if (key >= 0 && key < drawFrom.length && !drawFrom[key].isSelected) {
            //2nd: we're slotting into a blank slot
            if (undefined == holding || "BLANK" == holding) {
                holding = drawFrom[key];
                //if we have a perk or addon
                if (typeof holding.isSelected != 'undefined')
                    holding.isSelected = true;
            }
            //3rd: we're slotting into an occupied slot
            //3 sub: we're dealing with a perk or addon
            else if (typeof holding.isSelected != 'undefined') {
                //console.log("Setting " + holding.name + " to unselected")
                holding.isSelected = false;
                holding = drawFrom[key];
                holding.isSelected = true;
            }
            //3 sub 2: we're dealing with an item or offering
            else
                holding = drawFrom[key];
        }
        if (this.moniker != "currentChar")
            this.updateDOM();
    };
    //this function sets a list (array of items to pull from)
    this.setList = function (myPointer) {
        drawFrom = myPointer;
       /* var pollMe = 0;
        for(x in myPointer){
            if(myPointer[x].isRedacted) pollMe++;
        }
        numOfRedactions = pollMe;*/
    };
    //this function resets the list to point to a string
    this.resetList = function () {
        drawFrom = "BLANK";
       /* numOfRedactions = 0;*/
    };
    //this function sets up killer power
    this.holdKillerPower = function (power) {
        power.type = "killer";
        holding = power;
        isOpen = false;
        this.updateDOM();
    }
    //unlocks slot
    this.setOpen = function () {
        isOpen = true;
    };
    //locks down slot
    this.setClosed = function () {
        isOpen = false;
    };

    //return whether we're locked down
    this.getOpen = function () {
        return isOpen;
    };
    //convert slot to a keycode and return that code. -2 represents a blank slot
    this.getKey = function () {
        if (drawFrom === "BLANK")
            return -2;
        else if (drawFrom.indexOf(holding) === -1)
            return -2;
        else
            return drawFrom.indexOf(holding);
    };
    this.checkDraw = function (listerino) {
        if (drawFrom === listerino)
            return true;
        else
            return false;
    };
    this.getDraw = function () {
        if (typeof drawFrom != 'undefined') {
            return drawFrom;
        }
        else {
            return "BLANK";
        }
    };
    //brings up the menu using the buildOverpanel function
    this.spawnMenu = function (pageNumber) {
        //console.log("In spawn menu");
        if (!guiIsLocked) {
            if (undefined == pageNumber)
                pageNumber = 0;
            if (!isOpen)
                console.log("SLOT CLOSED");
            if (drawFrom == "BLANK")
                console.log("DRAWFROM IS BLANK");
            if (undefined == drawFrom)
                console.log("DRAWFROM IS UNDEFINED");
            if (isOpen && drawFrom != "BLANK" && typeof drawFrom != 'undefined') {
                var orderedMenu = sortForDisplay(drawFrom);
                //console.log("passed blank / undefined check");
                showOverpanel(orderedMenu, this.moniker, pageNumber);
            }
        }
    };
    this.doRNG = function () {
        if (!guiIsLocked) {
            var that = this;
            if (isOpen && this.moniker != "currentChar" && typeof holding != 'undefined' && drawFrom != "BLANK" && typeof drawFrom != 'undefined') {
                this.blankOut();
                var redCount = 0;
                for(j in drawFrom){
                    if(drawFrom[j].isRedacted) redCount++;
                }
                var animAvailable = drawFrom.length - redCount;
                if (doAnimation && animAvailable >= (6 + companion)) {
                    toggleGUI();
                    if (doSound)
                        rngAudio.play();
                    var pool = generatePool(6, drawFrom);
                    var ourResult = animatePool(drawFrom, pool);
                    //function slotIn(){this.setHolding(ourResult);}
                    if (ourResult >= 0) {
                        setTimeout(function () {
                            that.setHolding(ourResult);
                            toggleGUI();
                        }, 5000);
                        if (this.moniker === "itemOrAbility" && siteManager.sManager.checkMode() === 'S')
                            siteManager.survAddsConfig(ourResult);
                    }
                    else
                        setTimeout(toggleGUI, 5000);
                }
                else {
                    var candidate;
                    do {
                        candidate = rando(drawFrom.length + difficulty);
                        if (candidate >= drawFrom.length)
                            break;
                        else if (!drawFrom[candidate].isSelected && !drawFrom[candidate].isRedacted) {
                            this.setHolding(candidate);
                            //case survivor item
                            if (this.moniker === "itemOrAbility" && siteManager.sManager.checkMode() === 'S')
                                siteManager.survAddsConfig(candidate);
                            break;
                        }
                    } while (true);
                }
            }
            else
                console.log("CHECK FAILED RNG NOT DONE!");
        }
    };
}
function slotManager() {
    this.currentChar = new createSlot("BLANK", "currentChar");
    this.perk1 = new createSlot("BLANK", "perk1");
    this.perk1.companion = 3;
    this.perk2 = new createSlot("BLANK", "perk2");
    this.perk2.companion = 3;
    this.perk3 = new createSlot("BLANK", "perk3");
    this.perk3.companion = 3;
    this.perk4 = new createSlot("BLANK", "perk4");
    this.perk4.companion = 3;
    this.itemOrAbility = new createSlot("BLANK", "itemOrAbility");
    this.addon1 = new createSlot("BLANK", "addon1");
    this.addon1.companion = 1;
    this.addon2 = new createSlot("BLANK", "addon2");
    this.addon2.companion = 1;
    this.offering = new createSlot("BLANK", "offering");
    var killerMode = false;
    var survivorMode = false;
    var startupMode = true;
    //Blanks all slots (lists to draw from are not changed)
    this.blankAll = function () {
        this.perk1.blankOut();
        this.perk2.blankOut();
        this.perk3.blankOut();
        this.perk4.blankOut();
        this.itemOrAbility.blankOut();
        this.addon1.blankOut();
        this.addon2.blankOut();
        this.offering.blankOut();
        this.currentChar.blankOut();
    };
    //Rests the draw from on all slots to nothing
    this.resetAll = function () {
        this.perk1.resetList();
        this.perk2.resetList();
        this.perk3.resetList();
        this.perk4.resetList();
        this.itemOrAbility.resetList();
        this.addon1.resetList();
        this.addon2.resetList();
        this.offering.resetList();
        this.currentChar.resetList();
    };
    //lock down everything
    this.lockAll = function () {
        this.perk1.setClosed();
        this.perk2.setClosed();
        this.perk3.setClosed();
        this.perk4.setClosed();
        this.itemOrAbility.setClosed();
        this.addon1.setClosed();
        this.addon2.setClosed();
        this.offering.setClosed();
    };
    //unlock everything
    this.unlockAll = function () {
        this.perk1.setOpen();
        this.perk2.setOpen();
        this.perk3.setOpen();
        this.perk4.setOpen();
        this.itemOrAbility.setOpen();
        this.addon1.setOpen();
        this.addon2.setOpen();
        this.offering.setOpen();
    };
    //Sets the state of the slots to Killer
    this.setKiller = function () {
        survivorMode = false;
        startupMode = false;
        killerMode = true;
    };
    //sets the state of the slots to survivor
    this.setSurvivor = function () {
        survivorMode = true;
        startupMode = false;
        killerMode = false;
    };
    //sets the state of the slots to startup
    this.setStartup = function () {
        survivorMode = false;
        startupMode = true;
        killerMode = false;
    };
    //returns a character for each different mode slots can be in K - Killer, S- survivor
    //I - initial
    this.checkMode = function () {
        //return K for killer, S for survivor, I for initial mode
        if (killerMode)
            return 'K';
        if (survivorMode)
            return 'S';
        return 'I';
    };
    //Return an array of keys for packaging into an alphabetic code.
    this.getKeys = function () {
        var out = -1;
        if (this.checkMode() === 'S') {
            out = [this.currentChar.getKey(), this.perk1.getKey(), this.perk2.getKey(),
                this.perk3.getKey(), this.perk4.getKey(), this.itemOrAbility.getKey(),
                this.addon1.getKey(), this.addon2.getKey(), this.offering.getKey()];
        }
        else if (this.checkMode() == 'K') {
            out = [this.currentChar.getKey(), this.perk1.getKey(), this.perk2.getKey(),
                this.perk3.getKey(), this.perk4.getKey(), this.addon1.getKey(),
                this.addon2.getKey(), this.offering.getKey()];
        }
        else
            out = [-2, -2, -2, -2, -2, -2, -2, -2, -2];
        return out;
    };
    //This code simply applies a code to the code manager. Checks for validity should
    //be performed first at a higher level
    this.applySurvivorCode = function (codeArray)
    {
        this.currentChar.setHolding(codeArray[0]);
        document.getElementById("fullsize").src = filePath + this.currentChar.getHolding().portrait;
        this.perk1.setHolding(codeArray[1]);
        this.perk2.setHolding(codeArray[2]);
        this.perk3.setHolding(codeArray[3]);
        this.perk4.setHolding(codeArray[4]);
        this.itemOrAbility.setHolding(codeArray[5]);
        this.addon1.setHolding(codeArray[6]);
        this.addon2.setHolding(codeArray[7]);
        this.offering.setHolding(codeArray[8]);
    };
    //This code simply applies a code to the code manager. Checks for validity should
    //be performed first at a higher level
    this.applyKillerCode = function (codeArray) {
        this.currentChar.setHolding(codeArray[0]);
        document.getElementById("fullsize").src = filePath + this.currentChar.getHolding().portrait;
        this.perk1.setHolding(codeArray[1]);
        this.perk2.setHolding(codeArray[2]);
        this.perk3.setHolding(codeArray[3]);
        this.perk4.setHolding(codeArray[4]);
        this.addon1.setHolding(codeArray[5]);
        this.addon2.setHolding(codeArray[6]);
        this.offering.setHolding(codeArray[7]);
    };
}
//Test object remove from final
var menuBuilder = function () {
    var menuText = "";
    this.add = function (stringy) {
        menuText = menuText + stringy + "\n";
    };
    this.ask = function () {
        var showMe = menuText.valueOf();
        menuText = "";
        var input = prompt(showMe);
        return input;
    };
    this.show = function () {
        var showMe = menuText.valueOf();
        menuText = "";
        alert(showMe);
    };
}
//end test object
var siteManager = {
    sManager: new slotManager(),
    setupBlank: function () {
        this.sManager.unlockAll();
        this.sManager.blankAll();
        this.sManager.resetAll();
        this.sManager.lockAll();
        this.sManager.setStartup();
    },
    setupSurvivor: function () {
        this.setupBlank();
        this.sManager.unlockAll();
        this.sManager.setSurvivor();
        this.sManager.addon1.setClosed();
        this.sManager.addon2.setClosed();
        this.sManager.perk1.setList(survivorPerks);
        this.sManager.perk2.setList(survivorPerks);
        this.sManager.perk3.setList(survivorPerks);
        this.sManager.perk4.setList(survivorPerks);
        this.sManager.itemOrAbility.setList(survivorItems);
        this.sManager.offering.setList(survivorOfferings);
        this.sManager.currentChar.setList(survivors);
    },
    setupKiller: function () {
        this.setupBlank();
        this.sManager.unlockAll();
        this.sManager.setKiller();
        this.sManager.itemOrAbility.setClosed();
        this.sManager.perk1.setList(killerPerks);
        this.sManager.perk2.setList(killerPerks);
        this.sManager.perk3.setList(killerPerks);
        this.sManager.perk4.setList(killerPerks);
        this.sManager.offering.setList(killerOfferings);
        this.sManager.currentChar.setList(killers);
    },
    survAddsConfig: function (key) {
        if (key == -2)
            return 0;
        var type = survivorItems[key].type.toLowerCase();
        this.sManager.addon1.setOpen();
        this.sManager.addon2.setOpen();
        switch (type) {
            case "flashlight":
                this.sManager.addon1.setList(flashlightAddons);
                this.sManager.addon2.setList(flashlightAddons);
                break;
            case "toolbox":
                this.sManager.addon1.setList(toolboxAddons);
                this.sManager.addon2.setList(toolboxAddons);
                break;
            case "first aid kit":
                this.sManager.addon1.setList(medkitAddons);
                this.sManager.addon2.setList(medkitAddons);
                break;
            case "map":
                this.sManager.addon1.setList(mapAddons);
                this.sManager.addon2.setList(mapAddons);
                break;
            case "key":
                this.sManager.addon1.setList(keyAddons);
                this.sManager.addon2.setList(keyAddons);
                break;
            default:
                return -1;
        }
        return 0;
    },
    killerPowerConfig: function (key) {
        this.sManager.addon1.setList(killers[key].addonLink);
        this.sManager.addon2.setList(killers[key].addonLink);
        this.sManager.itemOrAbility.holdKillerPower(killers[key].itemOrAbility);
        return 0;
    },
    generateCode: function () {
        var siteState = this.sManager.checkMode();
        var numeric = this.sManager.getKeys();
        var codeOut;
        //console.log(numeric);
        if (siteState === 'K') {
            codeOut = 'K' + tenToChar(numeric[0]).toLowerCase() + tenToChar(numeric[1]).toUpperCase() +
                    tenToChar(numeric[2]).toLowerCase() +
                    tenToChar(numeric[3]).toUpperCase() +
                    tenToChar(numeric[4]).toLowerCase() +
                    tenToChar(numeric[5]).toUpperCase() +
                    tenToChar(numeric[6]).toLowerCase() +
                    tenToChar(numeric[7]).toUpperCase() + 'X';
        }
        else if (siteState === 'S') {
            codeOut = 'S' + tenToChar(numeric[0]).toLowerCase() + tenToChar(numeric[1]).toUpperCase() +
                    tenToChar(numeric[2]).toLowerCase() +
                    tenToChar(numeric[3]).toUpperCase() +
                    tenToChar(numeric[4]).toLowerCase() +
                    tenToChar(numeric[5]).toUpperCase() +
                    tenToChar(numeric[6]).toLowerCase() +
                    tenToChar(numeric[7]).toUpperCase() +
                    tenToChar(numeric[8]).toLowerCase() + 'X';
        }
        else
            return -1;
        codeOut = codeOut.replace(/n/g, 'N');
        return codeOut;
    },
    //Accepts a string code and translates
    acceptCode: function (alphaString) {
        //console.log(alphaString);
        var tempArray = decipherMain(alphaString);
        //see if the decipher went ok if it didn't we go to blankout mode.
        if (tempArray === -1)
            this.setupBlank();
        //if it did, we check what we're dealing with: 8 is a killer build, 9 for survivor
        else if (tempArray.length === 8) {
            //killer section
            this.setupKiller();
            this.killerPowerConfig(tempArray[0]);
            this.sManager.applyKillerCode(tempArray);

            //invalid build means we blank everything out
            if (this.sManager.currentChar === "BLANK")
                this.setupBlank();
        }
        else if (tempArray.length === 9) {
            //survivor section
            this.setupSurvivor();
            this.survAddsConfig(tempArray[5]);
            this.sManager.applySurvivorCode(tempArray);
            if (this.sManager.currentChar === "BLANK")
                this.setupBlank();
        }
        //any other length of array means there was an error.
        else
            this.setupBlank();
        /*console.log(this.sManager.perk1.getOpen());
         console.log(this.sManager.perk2.getOpen());
         console.log(this.sManager.perk3.getOpen());
         console.log(this.sManager.perk4.getOpen());
         console.log(this.sManager.addon1.getOpen());
         console.log(this.sManager.addon2.getOpen());
         console.log(this.sManager.offering.getOpen());
         console.log(this.sManager.itemOrAbility.getOpen()); */
    },
    //default build for sit
    siteDefaultBuild: function () {
        //code for Dwight. No other items selected.
        this.acceptCode("SbNNNNNNNNX");
    },
    testDisplayAll: function () {
        if (this.sManager.checkMode != 'I') {
            mb.add("character: " + siteManager.sManager.currentChar.getHolding().name);
            mb.add("0. perk1: " + siteManager.sManager.perk1.getHolding().name);
            mb.add("1. perk2: " + siteManager.sManager.perk2.getHolding().name);
            mb.add("2. perk3: " + siteManager.sManager.perk3.getHolding().name);
            mb.add("3. perk4: " + siteManager.sManager.perk4.getHolding().name);
            if (typeof siteManager.sManager.addon1.getHolding() != 'undefined')
                mb.add("4. addon1: " + siteManager.sManager.addon1.getHolding().name);
            else
                mb.add("4. addon1: BLANK");
            if (typeof siteManager.sManager.addon2.getHolding() != 'undefined')
                mb.add("5. addon2: " + siteManager.sManager.addon2.getHolding().name);
            else
                mb.add("5. addon2: BLANK");
            mb.add("6. offering: " + siteManager.sManager.offering.getHolding().name);
        }
        else {
            mb.add("character: BLANK");
            mb.add("perk1: BLANK");
            mb.add("perk2: BLANK");
            mb.add("perk3: BLANK");
            mb.add("perk4: BLANK");
            mb.add("addon1: BLANK");
            mb.add("addon2: BLANK");
            mb.add("offering: BLANK");
            mb.add("item/power: BLANK");
        }
        if (this.sManager.checkMode() === 'S')
            mb.add("7. Item: " + this.sManager.itemOrAbility.getHolding().name);
        else if (this.sManager.checkMode() === 'K')
            mb.add("Power: " + this.sManager.itemOrAbility.getHolding().name);
    },
    displayLoadout: function () {
        var perkSlot1;
        var perkSlot2;
        var perkSlot3;
        var perkSlot4;
        var itemOrAbilitySlot;
        var addonSlot1;
        var addonSlot2;
        var offeringSlot;
        //perk1 section
        //if perk is empty we handle this special case
        if (undefined == this.sManager.perk1.getHolding() || this.sManager.perk1.getHolding() === "BLANK")
            perkSlot1 = blankPerk(this.sManager.perk1);
        else
            perkSlot1 = loadoutBuilder(1, 1, this.sManager.perk1);
        //perk 2 section
        //if perk is empty we handle this special case
        if (undefined == this.sManager.perk2.getHolding() || this.sManager.perk2.getHolding() === "BLANK")
            perkSlot2 = blankPerk(this.sManager.perk2);
        else
            perkSlot2 = loadoutBuilder(1, 1, this.sManager.perk2);
        //perk3 section
        //if perk is empty we handle this special case
        if (undefined == this.sManager.perk3.getHolding() || this.sManager.perk3.getHolding() === "BLANK")
            perkSlot3 = blankPerk(this.sManager.perk3);
        else
            perkSlot3 = loadoutBuilder(1, 1, this.sManager.perk3);
        //perk4 section
        //if perk is empty we handle this special case
        if (undefined == this.sManager.perk4.getHolding() || this.sManager.perk4.getHolding() === "BLANK")
            perkSlot4 = blankPerk(this.sManager.perk4);
        else
            perkSlot4 = loadoutBuilder(1, 1, this.sManager.perk4);
        //item or killer power section
        //check for blank or undefined
        if (undefined == this.sManager.itemOrAbility.getHolding() || this.sManager.itemOrAbility.getHolding() === "BLANK")
            itemOrAbilitySlot = blankItem(this.sManager.itemOrAbility);
        else
            itemOrAbilitySlot = loadoutBuilder(3, 4, this.sManager.itemOrAbility);
        //addon1 section
        //check for blank or undefined
        if (undefined == this.sManager.addon1.getHolding() || this.sManager.addon1.getHolding() === "BLANK") {
            addonSlot1 = blankAddon(this.sManager.addon1);
            //console.log("Slot 1: " + addonSlot1);
        }
        else
            addonSlot1 = loadoutBuilder(2, 3, this.sManager.addon1);
        //addon2 section
        //check for blank or undefined
        if (undefined == this.sManager.addon2.getHolding() || this.sManager.addon2.getHolding() === "BLANK") {
            addonSlot2 = blankAddon(this.sManager.addon2);
            //console.log("Slot 2: " + addonSlot2);
        }
        else
            addonSlot2 = loadoutBuilder(2, 3, this.sManager.addon2);
        //offering section
        //check for blank or undefined
        if (undefined == this.sManager.offering.getHolding() || this.sManager.offering.getHolding() === "BLANK")
            offeringSlot = blankOffering(this.sManager.offering);
        else
            offeringSlot = loadoutBuilder(1, 1, this.sManager.offering);
        var webCode = "<table id=" + toHTML("perks") + ">" + "<tr>" + perkSlot1 + perkSlot2 + perkSlot3 + perkSlot4 + "</tr>" + "</table>" + "<table id=" + toHTML("misc") + ">" + "<tr>" + itemOrAbilitySlot + addonSlot1 + addonSlot2 + offeringSlot + "</tr>" + "</table>";
        //console.log(addonSlot1);
        //console.log(addonSlot2);
        //console.log(webCode);
        return webCode;
    },
    addPerk: function (slot, key) {
        if (key == -2) {
            switch (slot) {
                case 1:
                    this.sManager.perk1.blankOut();
                    break;
                case 2:
                    this.sManager.perk2.blankOut();
                    break;
                case 3:
                    this.sManager.perk3.blankOut();
                    break;
                case 4:
                    this.sManager.perk4.blankOut();
                    break;
            }
            if (!loading) {
                closeMainMenu();
                //document.getElementById("loadoutpanel").innerHTML = this.displayLoadout();
            }
            return 0;
        }
        if (this.sManager.checkMode() === 'K') {
            if (this.sManager.perk1.getHolding() === killerPerks[key] || this.sManager.perk2.getHolding() === killerPerks[key] || this.sManager.perk3.getHolding() === killerPerks[key] || this.sManager.perk4.getHolding() === killerPerks[key]) {
                console.log("ERROR THIS PERK ALREADY SELECTED");
                return -1;

            }
            else {
                switch (slot) {
                    case 1:
                        this.sManager.perk1.setHolding(key);
                        break;
                    case 2:
                        this.sManager.perk2.setHolding(key);
                        break;
                    case 3:
                        this.sManager.perk3.setHolding(key);
                        break;
                    case 4:
                        this.sManager.perk4.setHolding(key);
                        break;
                }
                if (!loading) {
                    closeMainMenu();
                    //document.getElementById("loadoutpanel").innerHTML = this.displayLoadout();
                }
            }
        }
        else if (this.sManager.checkMode() === 'S') {
            if (this.sManager.perk1.getHolding() === survivorPerks[key] || this.sManager.perk2.getHolding() === survivorPerks[key] || this.sManager.perk3.getHolding() === survivorPerks[key] || this.sManager.perk4.getHolding() === survivorPerks[key])
                return -1;
            else {
                switch (slot) {
                    case 1:
                        this.sManager.perk1.setHolding(key);
                        break;
                    case 2:
                        this.sManager.perk2.setHolding(key);
                        break;
                    case 3:
                        this.sManager.perk3.setHolding(key);
                        break;
                    case 4:
                        this.sManager.perk4.setHolding(key);
                        break;
                }
                if (!loading) {
                    closeMainMenu();
                    //document.getElementById("loadoutpanel").innerHTML = this.displayLoadout();
                }
            }
        }
        else
            return -1;
    },
    addOffering: function (key) {
        if (this.sManager.checkMode() === 'K') {
            if (this.sManager.offering.checkDraw(killerOfferings)) {
                this.sManager.offering.setHolding(key);
                if (!loading) {
                    closeMainMenu();
                    //document.getElementById("loadoutpanel").innerHTML = this.displayLoadout();
                }
            }
            else {
                console.log("IN KILLER MODE BUT OFFERING LIST WAS NOT SET!");
                return -1;
            }
        }
        else if (this.sManager.checkMode() === 'S') {
            if (this.sManager.offering.checkDraw(survivorOfferings)) {
                this.sManager.offering.setHolding(key);
                if (!loading) {
                    closeMainMenu();
                    //document.getElementById("loadoutpanel").innerHTML = this.displayLoadout();
                }
            }
            else {
                console.log("IN SURVIVOR MODE BUT OFFERING LIST WAS NOT SET!");
                return -1;
            }
        }
        else {
            console.log("we got nuthin");
            return -1;
        }
    },
    addItem: function (key) {
        if (this.sManager.checkMode() === 'S') {
            if (this.sManager.itemOrAbility.checkDraw(survivorItems)) {
                this.sManager.itemOrAbility.setHolding(key);
                this.sManager.addon1.blankOut();
                this.sManager.addon2.blankOut();
                if (this.sManager.itemOrAbility.getHolding() != "BLANK") {
                    this.survAddsConfig(key);
                }
                else {
                    this.sManager.addon1.setClosed();
                    this.sManager.addon2.setClosed();
                }
            }
            if (!loading) {
                closeMainMenu();
                //document.getElementById("loadoutpanel").innerHTML = this.displayLoadout();
            }
        }
        else {
            console.log("SURVIVOR MODE NOT SET ITEM SELECTION FAILED");
            return -1;
        }
    },
    addAddon: function (slot, key) {
        if (this.sManager.itemOrAbility.getHolding() === "BLANK")
            return -1;
        if (this.sManager.checkMode() === 'K') {
            if (slot == 1) {
                this.sManager.addon1.setHolding(key);
            }
            else if (slot == 2) {
                this.sManager.addon2.setHolding(key);
            }
            if (!loading) {
                closeMainMenu();
                //document.getElementById("loadoutpanel").innerHTML = this.displayLoadout();
            }
        }
        else if (this.sManager.checkMode() === 'S') {
            if (typeof this.sManager.itemOrAbility.getHolding() != 'undefined' && this.sManager.itemOrAbility.getHolding() != "BLANK") {
                if (slot == 1) {
                    this.sManager.addon1.setHolding(key);
                }
                if (slot == 2) {
                    this.sManager.addon2.setHolding(key);
                }
            }
            if (!loading) {
                closeMainMenu();
                //document.getElementById("loadoutpanel").innerHTML = this.displayLoadout();
            }
        }
        else
            return -1;
    },
    pickKiller: function (key) {
        this.setupKiller();
        this.sManager.currentChar.setHolding(key);
        this.killerPowerConfig(key);
    },
    pickSurvivor: function (key) {
        this.setupSurvivor();
        this.sManager.currentChar.setHolding(key);
    },
    //do a complete random build ('S' for Survivor, 'K' for killer, nothing for total randomness)
    RNGeezus: function (mode) {
        //declarations
        var perkLimit;
        var addLimit;
        var pickedPerks = [];
        var pickedAddons = [];
        var tempArray = [];
        var addonList;
        var candidate;
        var i;
        var runAgain = true;
        var sendOut;
        do { //run once loop begin
            //check for survivor mode
            if (mode === 'S') {
                runAgain = false;
                //set limits for perks
                perkLimit = survivorPerks.length;
                //push opening char
                tempArray.push('S');
                //push character indicator
                tempArray.push(tenToChar(rando(survivors.length)));
                //loop to fill perks
                do {
                    //generate a possible perk
                    candidate = rando(perkLimit);
                    //check if it has already been picked. if not we add it to both arrays.
                    if (pickedPerks.indexOf(candidate) === -1) {
                        pickedPerks.push(candidate);
                        //candidate is converted to characters before adding
                        tempArray.push(tenToChar(candidate));
                    }
                }
                while (pickedPerks.length < 4); //end fill loop
                //push 1 random item
                candidate = rando(survivorItems.length)
                tempArray.push(tenToChar(candidate));
                //sense item type and set addon list accordingly
                switch (survivorItems[candidate].type.toLowerCase()) {
                    case "flashlight":
                        addonList = flashlightAddons;
                        break;
                    case "toolbox":
                        addonList = toolboxAddons;
                        break;
                    case "first aid kit":
                        addonList = medkitAddons;
                        break;
                    case "map":
                        addonList = mapAddons;
                        break;
                    case "key":
                        addonList = keyAddons;
                        break;
                    case "chinese firecracker":
                        addonList = "BLANK";
                        break;
                    default:
                        return -1;
                }
                //THAT DAMN FIRECRACKER HAS NO ADDONS
                if (addonList === "BLANK")
                    addLimit = -1;
                //pointer to addon list length
                else
                    addLimit = addonList.length;
                //fill two addon positions
                do {
                    //CHINESE FIRECRACKER SPECIAL CASE
                    if (addLimit === -1) {
                        tempArray.push('N');
                        tempArray.push('N');
                        break;
                    }
                    //select possible addon
                    candidate = rando(addLimit);
                    //if it has not been picked, add it
                    if (pickedAddons.indexOf(candidate) === -1) {
                        pickedAddons.push(candidate);
                        tempArray.push(tenToChar(candidate));
                    }
                }
                while (pickedAddons.length < 2);//loop runs until we've chosen 2 addons
                //add offering into the mix
                tempArray.push(tenToChar(rando(survivorOfferings.length)));
            }
            //killer mode section
            else if (mode === 'K') {
                runAgain = false;
                //set limit for perks
                perkLimit = killerPerks.length;
                //push opening char
                tempArray.push('K');
                //pick random killer
                candidate = rando(killers.length);
                tempArray.push(tenToChar(candidate));
                //sense killer and link up addons
                addonLink = killers[candidate].addonLink;
                addLimit = addonLink.length;
                //fill 4 perk slots
                do {
                    //generate a possible perk
                    candidate = rando(perkLimit);
                    //check if it has already been picked. if not we add it to both arrays.
                    if (pickedPerks.indexOf(candidate) === -1) {
                        pickedPerks.push(candidate);
                        //candidate is converted to characters before adding
                        tempArray.push(tenToChar(candidate));
                    }
                }
                while (pickedPerks.length < 4); //end fill loop
                //fill two addon positions
                do {
                    //select possible addon
                    candidate = rando(addLimit);
                    //if it has not been picked, add it
                    if (pickedAddons.indexOf(candidate) === -1) {
                        pickedAddons.push(candidate);
                        tempArray.push(tenToChar(candidate));
                    }
                }
                while (pickedAddons.length < 2);//loop runs until we've chosen 2 addons
                //add offering into the mix
                tempArray.push(tenToChar(rando(killerOfferings.length)));
            }
            //this option pick either killer or survivor for us and then sends up back to the beginning
            else {
                candidate = rando(2); //random 1 or 0
                if (candidate) { //1 means killer
                    mode = 'K';
                }
                else { //0 means survivor
                    mode = 'S';
                }
            }
        }
        while (runAgain); //loop executes exactly once unless we aren't in a specified mode(K or S)
        //cap off the key with the standard X bookend
        tempArray.push('X');
        //format upper & lowercase portions
        for (i = 1; i < tempArray.length - 1; i++) {
            if (i % 2 === 0)
                tempArray[i] = tempArray[i].toUpperCase();
        }
        //collapse array into a string
        sendOut = tempArray.join("");
        //console.log(sendOut);
        //return our result
        return sendOut;
    },
    displayPortrait: function () {
        var pPath = filePath + this.sManager.currentChar.getHolding().portrait;
        var webCode = "<img id=\"fullsize\" src=\"" + pPath + "\" alt=\"" + this.sManager.currentChar.getHolding().name + "\">";
        //Generate static
        console.log(webCode);
        return webCode;
    },
    miniRNGeezus: function (mode) {
        //declarations
        var perkLimit;
        var pickedPerks = [];
        var tempArray = [];
        var candidate;
        var i;
        var sendOut;
        if (mode === 'S') {
            //set limits for perks
            perkLimit = survivorPerks.length;
            //push opening char
            tempArray.push('S');
            //push character indicator
            tempArray.push(tenToChar(rando(survivors.length)));
            //loop to fill perks
            do {
                //generate a possible perk
                candidate = rando(perkLimit);
                //check if it has already been picked. if not we add it to both arrays.
                if (pickedPerks.indexOf(candidate) === -1) {
                    pickedPerks.push(candidate);
                    //candidate is converted to characters before adding
                    tempArray.push(tenToChar(candidate));
                }
            }
            while (pickedPerks.length < 4); //end fill loop
        }
        //killer mode section
        else if (mode === 'K') {
            //set limit for perks
            perkLimit = killerPerks.length;
            //push opening char
            tempArray.push('K');
            //pick random killer
            candidate = rando(killers.length);
            tempArray.push(tenToChar(candidate));
            //fill 4 perk slots
            do {
                //generate a possible perk
                candidate = rando(perkLimit);
                //check if it has already been picked. if not we add it to both arrays.
                if (pickedPerks.indexOf(candidate) === -1) {
                    pickedPerks.push(candidate);
                    //candidate is converted to characters before adding
                    tempArray.push(tenToChar(candidate));
                }
            }
            while (pickedPerks.length < 4); //end fill loop
        }
        //fill in the blanks. 3 for killer, 4 for survivor
        if (mode === 'K')
            for (i = 0; i < 3; i++)
                tempArray.push('N');
        else
            for (i = 0; i < 4; i++)
                tempArray.push('N');
        //cap off the key with the standard X bookend
        tempArray.push('X');
        //format upper & lowercase portions
        for (i = 1; i < tempArray.length - 1; i++) {
            if (i % 2 === 0)
                tempArray[i] = tempArray[i].toUpperCase();
        }
        //collapse array into a string
        sendOut = tempArray.join("");
        //console.log(sendOut);
        //retrun our result
        return sendOut;
    },
//user selects a specified thing off the overpanel
    guiSelectItem: function (slot, key) {
        if (slot.moniker === "itemOrAbility") {
            //console.log("FOUND ITEM SLOT");
            if (this.sManager.checkMode() === 'S') {
                if (this.sManager.itemOrAbility.checkDraw(survivorItems)) {
                    this.sManager.itemOrAbility.setHolding(key);
                    this.sManager.addon1.blankOut();
                    this.sManager.addon2.blankOut();
                    if (this.sManager.itemOrAbility.getHolding() != "BLANK") {
                        this.survAddsConfig(key);
                    }
                    else {
                        this.sManager.addon1.setClosed();
                        this.sManager.addon2.setClosed();
                    }
                    if (this.sManager.itemOrAbility.getHolding().type == "Chinese Firecracker") {
                        this.sManager.addon1.setClosed();
                        this.sManager.addon2.setClosed();
                    }
                }
            }
            else
                console.log("SURVIVOR MODE NOT SET ITEM SELECTION FAILED");
        }
        else {
            slot.setHolding(key);
        }
        closeMainMenu();
        //document.getElementById("loadoutpanel").innerHTML = this.displayLoadout();
    },
//old default load function
    defaultLoad: function () {
        this.acceptCode("KcNNNNNNNX");
    },
//user picks a specific killer
    guiSelectKiller: function (key) {
        this.pickKiller(key);
        document.getElementById("fullsize").src = filePath + killers[key].portrait;
        closeMainMenu();
    },
//user picks a sepcifice survivor
    guiSelectSurvivor: function (key) {
        this.pickSurvivor(key);
        document.getElementById("fullsize").src = filePath + survivors[key].portrait;
        closeMainMenu();
    },
//old random function
    guiSelectRandom: function (mode) {
        this.acceptCode(this.miniRNGeezus(mode));
    },
//user submits saved key via gui
    guiSubmitKey: function () {
        var keyIn = document.getElementById("keycodein").value;
        //console.log(keyIn);
        if (typeof keyIn != 'undefined') {
            this.acceptCode(keyIn);
            if (this.sManager.checkMode() == 'I')
                this.siteDefaultBuild();
            /*var toToggleOff = document.getElementById("loadform");
             if(toToggleOff.classList.contains('show')) toToggleOff.classList.remove('show');*/
        }
    },
//tied to gui does a random survivor
    guiRandomSurv: function () {
        var selection = rando(survivors.length);
        this.guiSelectSurvivor(selection);
    },
//picks a random killer
    guiRandomKiller: function () {
        var selection = rando(survivors.length);
        this.guiSelectKiller(selection);
    },
//bypass animation do a quick 4 perk build
    guiQuickRandom: function () {
        var saveSetting = doAnimation;
        if (doAnimation)
            doAnimation = false;
        this.sManager.perk1.doRNG();
        this.sManager.perk2.doRNG();
        this.sManager.perk3.doRNG();
        this.sManager.perk4.doRNG();
        doAnimation = saveSetting;
    },
//site loader helper
    loadHandler: function () {
        var checkMe = checkIncoming();
        if (checkMe == -1)
            this.siteDefaultBuild();
        else
            this.acceptCode(checkMe);
        if (this.sManager.checkMode() == 'I')
            this.siteDefaultBuild();
    }
};
// -- TEST CONSOLE -- FUNCTIONS --
var mb = new menuBuilder();
var testMenuGeneral = function () {
    mb.add("1. Survivor");
    mb.add("2. Killer");
    mb.add("Select option 1 or 2.");
    var response = mb.ask();
    return Number(response);
};
//Pick killer menu
var testMenuKiller = function () {
    var i;
    for (i in killers) {
        mb.add(i + ". " + killers[i].name);
    }
    var response = mb.ask();
    return Number(response);
};
//pick Survivor menu
var testMenuSurvivor = function () {
    var i;
    for (i in survivors) {
        mb.add(i + ". " + survivors[i].name);
    }
    var response = mb.ask();
    return Number(response);
};
//pick killer perk menu
var testMenuKillerPerks = function () {
    var i;
    for (i in killerPerks) {
        if (!killerPerks[i].isSelected)
            mb.add(i + " ." + killerPerks[i].name);
    }
    mb.add("-2. Blank");
    var response = mb.ask();
    if (!killerPerks[response].isSelected)
        return Number(response);
    else if (response == -2)
        return -2;
    else
        return -2;
};
//pick survivor perk menu
var testMenuSurvivorPerks = function () {
    var i;
    for (i in survivorPerks) {
        if (!survivorPerks[i].isSelected)
            mb.add(i + ". " + survivorPerks[i].name);
    }
    mb.add("-2. Blank");
    var response = mb.ask();
    if (!survivorPerks[response].isSelected)
        return Number(response);
    else if (response == -2)
        return -2;
    else
        return -2;
};
//Killer addon menu
var testMenuKillerAdds = function () {
    //console.log("inside try");
    var i;
    var listX = siteManager.sManager.addon1.getDraw();
    for (i in listX) {
        mb.add([i] + ". " + listX[i].name);
    }
    mb.add("-2. Blank");
    var response = mb.ask();
    return Number(response);
};
//flashlight menu
var flashlightMenu = function () {
    var out;
    var i;
    for (i in flashlightAddons) {
        if (!flashlightAddons[i].isSelected)
            mb.add(i + ". " + flashlightAddons[i].name);
    }
    mb.add("-2. Blank");
    out = mb.ask();
    if (!flashlightAddons[out].isSelected)
        return Number(out);
    else
        return -2;
};
//toolboxes menu
var toolboxMenu = function () {
    var out;
    var i;
    for (i in toolboxAddons) {
        if (!toolboxAddons[i].isSelected)
            mb.add(i + ". " + toolboxAddons[i].name);
    }
    mb.add("-2. Blank");
    out = mb.ask();
    if (!toolboxAddons[out].isSelected)
        return Number(out);
    else
        return -2;
};
//maps menu
var mapMenu = function () {
    var out;
    var i;
    for (i in mapAddons) {
        if (!mapAddons[i].isSelected)
            mb.add(i + ". " + mapAddons[i].name);
    }
    mb.add("-2. Blank");
    out = mb.ask();
    if (!mapAddons[out].isSelected)
        return Number(out);
    else
        return -2;
};
//keys menu
var keyMenu = function () {
    var out;
    var i;
    for (i in keyAddons) {
        if (!keyAddons[i].isSelected)
            mb.add(i + ". " + keyAddons[i].name);
    }
    mb.add("-2. Blank");
    out = mb.ask();
    if (!keyAddons[out].isSelected)
        return Number(out);
    else
        return -2;
};
//medkit menu
var medkitMenu = function () {
    var out;
    var i;
    for (i in medkitAddons) {
        if (!medkitAddons[i].isSelected)
            mb.add(i + ". " + medkitAddons[i].name);
    }
    mb.add("-2. Blank");
    out = mb.ask();
    if (!medkitAddons[out].isSelected)
        return Number(out);
    else
        return -2;
};

//Survivor addon menu
var testMenuSurvivorAdds = function () {
    var out;
    if (siteManager.sManager.itemOrAbility.getHolding() != "BLANK" || typeof siteManager.sManager.itemOrAbility.getHolding() != 'undefined') {
        switch (siteManager.sManager.itemOrAbility.getHolding().type.toLowerCase()) {
            case "map":
                out = mapMenu();
                break;
            case "key":
                out = keyMenu();
                break;
            case "first aid kit":
                out = medkitMenu();
                break;
            case "toolbox":
                out = toolboxMenu();
                break;
            case "flashlight":
                out = flashlightMenu();
                break;
            default:
                console.log("ADDON MENU NOT LOADED! SOMETHING IS WRONG!");
                out = -2;
        }
        return out;
    }
    else
        return -2
};
//offerings for killer
var testKillerOfferings = function () {
    var out;
    var i;
    for (i in killerOfferings) {
        mb.add(i + ". " + killerOfferings[i].name);
    }
    mb.add("-2. Blank");
    out = mb.ask();
    return Number(out);
};
//offerings for survivor
var testSurvivorOfferings = function () {
    var out;
    var i;
    for (i in survivorOfferings) {
        mb.add(i + ". " + survivorOfferings[i].name);
    }
    mb.add("-2. Blank");
    out = mb.ask();
    return Number(out);
};
//survivor items menu
var testSurvivorItems = function () {
    var out;
    var i;
    for (i in survivorItems) {
        mb.add(i + ". " + survivorItems[i].name);
    }
    mb.add("-2. Blank");
    out = mb.ask();
    return Number(out);
};
var testSiteMenu = function () {
    var out;
    mb.add("0. RNG Tool")
    mb.add("1. Killer");
    mb.add("2. Survivor");
    mb.add("3. Enter Key");
    mb.add("4. Generate Key")
    mb.add("5. Quit");
    out = mb.ask();
    console.log("Your selection was " + out);
    return Number(out);
};
var testLoadoutMenu = function () {
    mb.add("select a slot or type -2 to return to main menu.")
    var out = mb.ask();
    return Number(out);
}
var testMain = function () {
    var selection;
    while (true) {
        console.log("Make a selection");
        selection = testSiteMenu();
        console.log("The selection was " + selection);
        if (selection === 1) {
            //console.log("inside 1");
            selection = testMenuKiller();
            siteManager.pickKiller(selection);
            while (true) {
                siteManager.testDisplayAll();
                selection = testLoadoutMenu();
                if (selection === -2)
                    break;
                if (selection < 4 && selection >= 0) {
                    var chosenPerk = testMenuKillerPerks();
                    switch (selection) {
                        case 0:
                            siteManager.addPerk(1, chosenPerk);
                            //console.log("added perk " + selection + " to slot 1");
                            break;
                        case 1:
                            siteManager.addPerk(2, chosenPerk);
                            break;
                        case 2:
                            siteManager.addPerk(3, chosenPerk);
                            break;
                        case 3:
                            siteManager.addPerk(4, chosenPerk);
                            break;
                        default:
                            console.log("PERK SLOT NOT FOUND!");
                            break;
                    }
                }
                else if (selection < 6 && selection > 3) {
                    console.log("4 or 5");
                    var chosenAdd = testMenuKillerAdds();
                    console.log("past 1");
                    if (selection === 4)
                        siteManager.addAddon(1, chosenAdd);
                    else if (selection === 5)
                        siteManager.addAddon(2, chosenAdd);
                }
                else if (selection === 6) {
                    var chosenOffering = testKillerOfferings();
                    siteManager.addOffering(chosenOffering);
                }
                else
                    break;
            }
        }
        else if (selection === 2) {
            selection = testMenuSurvivor();
            siteManager.pickSurvivor(selection);
            while (true) {
                siteManager.testDisplayAll();
                selection = testLoadoutMenu();
                if (selection === -2)
                    break;
                if (selection >= 0 && selection < 4) {
                    var chosenPerk = testMenuSurvivorPerks();
                    switch (selection) {
                        case 0:
                            siteManager.addPerk(1, chosenPerk);
                            break;
                        case 1:
                            siteManager.addPerk(2, chosenPerk);
                            break;
                        case 2:
                            siteManager.addPerk(3, chosenPerk);
                            break;
                        case 3:
                            siteManager.addPerk(4, chosenPerk);
                            break;
                        default:
                            break;
                    }
                }
                else if (selection > 3 && selection < 6) {
                    if (siteManager.sManager.addon1.getOpen() &&
                            siteManager.sManager.addon2.getOpen()) {
                        if (selection === 4) {
                            var chosenAdd = testMenuSurvivorAdds();
                            siteManager.addAddon(1, chosenAdd);
                        }
                        else if (selection === 5) {
                            var chosenAdd = testMenuSurvivorAdds();
                            siteManager.addAddon(2, chosenAdd);
                        }
                    }
                    else
                        alert("slot not open");
                }
                else if (selection === 6) {
                    var chosenOffering = testSurvivorOfferings();
                    siteManager.addOffering(chosenOffering);
                }
                else if (selection === 7) {
                    var chosenItem = testSurvivorItems();
                    siteManager.addItem(chosenItem);
                }
                else
                    break;
            }
        }
        else if (selection === 3) {
            console.log("Enter Key");
            var keyIn = prompt("blah");
            siteManager.acceptCode(keyIn);
            siteManager.testDisplayAll();
        }
        else if (selection === 4) {
            var keyOut = siteManager.generateCode();
            console.log(keyOut);
        }
        else if (selection === 0) {
            var keyIn = siteManager.RNGeezus();
            siteManager.acceptCode(keyIn);
            siteManager.testDisplayAll();
        }
        else
            break;
    }
}
//FUNCTIONS FOR CLICKS ON OVERPANEL MENU


//user selected go to next page
function clickedNext(currentPage, targetSlot) {
    //console.log("NEXT FUNCTION ACTIVATED");
    ++currentPage;
    targetSlot.spawnMenu(currentPage);
}
//user selected go to prev page
function clickedPrev(currentPage, targetSlot) {
    //console.log("PREV FUNCTION ACTIVATED");
    --currentPage;
    targetSlot.spawnMenu(currentPage);
}
//user selected close menu
function clickedClose() {
    document.getElementById("overpanel").style.display = "none";
}
//user selected to clear the current slot
function clickedClear(targetSlot) {
    if (!guiIsLocked) {
        //console.log("CLEAR FUNCTION ACTIVATED");
        targetSlot.blankOut();
        clickedClose();
    }
    //document.getElementById("loadoutpanel").innerHTML = siteManager.displayLoadout();
}
//create dynamic survivor & killer menus
//dynamic killer menu (run once)
function dKillerMenu() {
    var i;
    var ourList = "<p onclick=" + toHTML("siteManager.guiRandomKiller()") + ">Random</p>";
    for (i in killers) {
        ourList += "<p onClick=" + toHTML("siteManager.guiSelectKiller(" + i + ")") + ">" + killers[i].name + "</p>";
    }

    document.getElementById("killerDropdown").innerHTML = ourList;
}
//dynamic survivor menu (run once)
function dSurvivorMenu() {
    //console.log("creating survivor menu");
    var i;
    var ourList = "<p onclick=" + toHTML("siteManager.guiRandomSurv()") + ">Random</p>";
    //console.log(ourList);
    for (i in survivors) {
        ourList += "<p onClick=" + toHTML("siteManager.guiSelectSurvivor(" + i + ")") + ">" + survivors[i].name + "</p>";
    }
    document.getElementById("survDropdown").innerHTML = ourList;
}

//NAV MENU SECTION
function killerMenu() {
    //show menu
    document.getElementById("killerlist").classList.toggle("show");
}
function survivorMenu() {
    //show menu
    document.getElementById("survivorlist").classList.toggle("show");
}
function loadMenu() {
    //show menu
    document.getElementById("loadform").classList.toggle("show");
}
function shareMenu() {
    //Fill Form Content
    var ourBuildKey = siteManager.generateCode();
    document.getElementById("keycodeout").value = ourBuildKey;
    document.getElementById("linkout").value = buildPath + "?" + ourBuildKey;
    //Form Toggle Show
    document.getElementById("shareform").classList.toggle("show");
}
function submitKey() {
    //Toggle Form Show to Hidden
    //Load The Key
    //Reload Loadout
}
function checkParent(t, checkFor) {
    while (t.parentNode) {
        if (t.id == checkFor)
            return true;
        t = t.parentNode;
    }
    return false;
}




/* When the user clicks on the button,
 toggle between hiding and showing the twopack_contain content */
function closeTwopack() {
    var twopack_contains = document.getElementsByClassName("tp_drop_list");
    for (var i = 0; i < twopack_contains.length; i++) {
        var openDropdown = twopack_contains[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}
function closeThreepack() {
    var threepack_contains = document.getElementsByClassName("thp_drop_list");
    for (var i = 0; i < threepack_contains.length; i++) {
        var openDropdown = threepack_contains[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}
function showSurvs() {
    if (!guiIsLocked) {
        closeTwopack();
        closeThreepack();
        document.getElementById("survDropdown").classList.toggle("show");
    }
}
function showKills() {
    if (!guiIsLocked) {
        closeTwopack();
        closeThreepack;
        document.getElementById("killerDropdown").classList.toggle("show");
    }
}
function place() {
    console.log("replace me");
}
function showSaveMenu() {
    if (!guiIsLocked) {
        closeTwopack();
        closeThreepack();
        document.getElementById("saveDropup").classList.toggle("show");
    }
}
function showLoadMenu() {
    if (!guiIsLocked) {
        closeTwopack();
        closeThreepack();
        document.getElementById("loadDropup").classList.toggle("show");
    }
}
function showOptnMenu() {
    if (!guiIsLocked) {
        closeTwopack();
        closeThreepack();
        document.getElementById("optnDropup").classList.toggle("show");
    }
}

// Close the twopack_contain if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.twopack')) {
        closeTwopack();
    }
    /* if(!event.target.matches('.threepack') && !checkParent(e.target, "loadDropup")){
     closeThreepack();
     }
     if(!event.target.matches('.threepack') && !checkParent(e.target, "saveDropup")){
     closeThreepack();
     }*/
    if (!event.target.matches('.threepack') && !checkParent(event.target, "saveDropup")) {
        var toToggleOff = document.getElementById("saveDropup");
        if (toToggleOff.classList.contains('show'))
            toToggleOff.classList.remove('show');
    }
    if (!event.target.matches('.threepack') && !checkParent(event.target, "loadDropup")) {
        var toToggleOff = document.getElementById("loadDropup");
        if (toToggleOff.classList.contains('show'))
            toToggleOff.classList.remove('show');
    }
    if (!event.target.matches('.threepack') && !checkParent(event.target, "optnDropup")) {
        var toToggleOff = document.getElementById("optnDropup");
        if (toToggleOff.classList.contains('show'))
            toToggleOff.classList.remove('show');
    }

}

//BEGIN PERK FILTER SECTION
//COOKIE SECTION
//HELPER CODE for Perk Filters
//poll perks function - returns the key values of all perks that pass a test (isRedacted)
function pollPerks(pollArr){
	var pollResults = [];
	for(x in pollArr){
		if(pollArr[x].isRedacted){
			pollResults.push(x);
		}
	}
	return pollResults;
}
//String replace all commas with periods
function formatData(strng){
	while(strng.includes(',')){
		strng = strng.replace(',', '.');
	}
	return strng;
}
//END HELPER CODE
//make killer perk cookie - called in the set cookies function
function kPerkCookie(){
	//declare and initialize variables
	var chipsAhoy;
	var killerPoll = pollPerks(killerPerks);
	var expDate = new Date();
	//set the expiration date 5 years from now
	expDate.setFullYear(expDate.getFullYear() + 5);
	//check for case - no redactions
	if(killerPoll.length < 1) {
		chipsAhoy = "KillerPerks=none;" + "expires=" + expDate.toUTCString();
	}
	//check for case - there are redactions
	else {
		var redactPerks = killerPoll.toString();
		redactPerks = formatData(redactPerks);
		chipsAhoy = "KillerPerks=" + redactPerks + ";" + "expires=" + expDate.toUTCString();
	}
	return chipsAhoy;
}
//make survivor perk cookie - called in the set cookies function
function sPerkCookie(){
	//declare and initialize variables
	var chipsAhoy;
	var survivorPoll = pollPerks(survivorPerks);
	var expDate = new Date();
	//set the expiration date 5 years from now
	expDate.setFullYear(expDate.getFullYear() + 5);
	//check for case - no redactions
	if(survivorPoll.length < 1) {
		chipsAhoy = "SurvivorPerks=none;" + "expires=" + expDate.toUTCString();
	}
	//check for case - there are redactions
	else {
		var redactPerks = survivorPoll.toString();
		redactPerks = formatData(redactPerks);
		chipsAhoy = "SurvivorPerks=" + redactPerks + ";" + "expires=" + expDate.toUTCString();
	}
	return chipsAhoy;
}
//set cookies - called when user presses "SAVE"
function setCookie(){
	document.cookie = sPerkCookie();
	document.cookie = kPerkCookie();
}
//process cookies - called on loading the site
function processCookies(){
	cookieJar = document.cookie;
	//check for case - no cookies found
	if(!cookieJar.includes("KillerPerks") || !cookieJar.includes("SurvivorPerks")){
		setCookie();
	}
	//case - cookies found
	else {
		//break up cookies
		cookieJar = cookieJar.split(";")
		var killerCookie = cookieJar[1];
		//log for testing
		//console.log("killer cookie is: " + killerCookie);
		var survivorCookie = cookieJar[0];
		//log for testing
		//console.log("survivor cookie is: " + survivorCookie);
		//final splits
		killerCookie = killerCookie.split("=");
		survivorCookie = survivorCookie.split("=");
		//load content
		killerCookie = killerCookie[1];
		survivorCookie = survivorCookie[1];
		//content check - killer
		if(!killerCookie.includes("none")){
			//case there are cookies - we process the cookie
			killerCookie = killerCookie.split(".");
			for(x in killerCookie){
				killerCookie[x] = parseInt(killerCookie[x]);
				killerPerks[killerCookie[x]].isRedacted = true;
			}
		}
		//content check - survivor
		if(!survivorCookie.includes("none")){
			//case there are cookies - we process the info
			survivorCookie = survivorCookie.split(".");
			for(y in survivorCookie){
				survivorCookie[y] = parseInt(survivorCookie[y]);
				survivorPerks[survivorCookie[y]].isRedacted = true;
			}
		}
	}
}
//END COOKIE SECTION
//FILTER MENU SECTION

//menu helper functions
//generate list returns a list of all of the perks currently redacted. This is for use
// when the menu loads. Pass in either the killer or survivor perk list. The returned list is
//an array of integers
function generateList(targetArray){
	var myList = [];
	for(x in targetArray){
		if(targetArray[x].isRedacted){
			myList.push(Number(x));
		}
	}
	return myList;
}

//returns proper key list name based on mode
function getKeyList(mode){
	if(mode === 'S'){
		return "sRedList";
	}
	else return "kRedList";
}

//links the correct redaction key list
function connectList(mode){
	if(mode === 'S'){
		return sRedList;
	}
	else return kRedList;
}

//connects functions to the correct array given the mode
function connectArray(mode){
	if(mode === 'S'){
		return survivorPerks;
	}
	else {
		return killerPerks;
	}
}
//Displays the correct option text depending on mode
function switcherText(mode){
    //console.log(mode);
	if(mode === 'S'){
		return ">Swap to Killer";
	}
	else {
		return ">Swap to Survivor";
	}
}

//checking perks during menu generation returns a boolean
function checkForDisp(mode, key){
	if(mode === 'S'){
		return (survivorPerks[key].isRedacted || sRedList.indexOf(key) != -1);
	}
	else{
		return (killerPerks[key].isRedacted || kRedList.indexOf(key) != -1);
	}
}

//process list takes the current list of redactions and commits it to the target array (surv or killer
// perks) pass in the target array and the list array (no return value)
function processList(targetArray, currentList){
	//there must be at least 5 perks to random from
	var checkLimit = targetArray.length - currentList.length;
	if(checkLimit > 4){
		//reset the list entirely to default
		for(x in targetArray){
			targetArray[x].isRedacted = false;
		}
		//now process the redactions from the list
		for(y in currentList){
			targetArray[currentList[y]].isRedacted = true;
		}
	}
	//if check fails reset to default
	else {
	    for(x in targetArray){
			targetArray[x].isRedacted = false;
		}
		while(currentList.length > 0){
		    currentList.pop();
		}
	}
}

//box toggled takes the key of the checkbox associated with the list item. it then checks to
// see if that item is on the list. If it is on the list, it is removed. If it is not on the list it is added
function boxToggled(key, currentList, tgtArray){
	//search for the item
	var indexCheck = currentList.indexOf(key);
	//console.log("indexCheck is equal to: " + indexCheck);
	//if it isn't there add it
	if(indexCheck === -1){
		currentList.push(key);
	}
	//if it is there remove it
	else{
		currentList.splice(indexCheck, 1);
		}
	if(document.getElementById(tgtArray[key].name).hasAttribute("checked")){
	    document.getElementById(tgtArray[key].name).removeAttribute("checked");
	}
	else{
	    document.getElementById(tgtArray[key].name).setAttribute("checked","checked");
	}
	//console.log(currentList);
}
//given the mode character (S or K) this returns the list name
function getListName(mode){
	if(mode === 'S'){
		return "survivorPerks";
	}
	else{
		return "killerPerks";
	}
}

function spawnPF(indicator, pageNum){
    //console.log(indicator);
	if(typeof indicator != 'undefined' && typeof pageNum != 'undefined'){
		//set up pages
		var itemsPerPage = columns * rows;
		var start = itemsPerPage * pageNum;
		//set up menu items
		var pullFrom;
		var connectedList;
		if(indicator === 'S') {
			pullFrom = sortForDisplay(survivorPerks);
			connectedList = sRedList;
			}
		else {
			pullFrom = sortForDisplay(killerPerks);
			connectedList = kRedList;
		}
		//we want at least one complete row
		if(start === pullFrom.length - 1){
			start -=3;
		}
		//stop point
		var stopHere = pullFrom.length;
		//check to see if we are beyond the bounds of the array -> exit operation if we are
		if(pageNum < 0 || start > stopHere) return 0;
		//setup display variables
    	var itemRarity;
    	var itemCount = start;
    	var i;
    	var j;
    	 document.getElementById("overpanel").style.display = "block";
    var finalHTML = "<table id=" + toHTML("opTable") + ">";
    var inputCheck = "";
    for (i = 0; i < rows; i++) {
        if (itemCount >= stopHere)
            break;
        finalHTML += "<tr>"
        //console.log(connectedList);
        for (j = 0; j < columns; j++) {
            itemRarity = pullFrom[itemCount].rarity;
            //console.log(typeof pullFrom[itemCount].pKey);
            //console.log(connectedList.indexOf(pullFrom[itemCount].pKey));
            if(connectedList.indexOf(Number(pullFrom[itemCount].pKey)) === -1){
            	inputCheck = "checked=" + toHTML("checked");
            }
            else console.log("FALSE!");
            finalHTML += "<th class=" + toHTML("cellcontainer2") +  "><div class=" + toHTML("holdname2") + "onclick="+ toHTML("boxToggled(" + pullFrom[itemCount].pKey + "," + getKeyList(indicator) + "," + getListName(indicator) + ")") + ">" + pullFrom[itemCount].name + "<input id=" + toHTML(pullFrom[itemCount].name) + "type =" + toHTML("checkbox") + inputCheck  + "><span class =" + toHTML("boxcheck") + "></span></div><div class=" + toHTML("holdicon") + " style=" + toHTML("background-color:" + getColor(itemRarity)) + "><img src=" + toHTML(filePath + pullFrom[itemCount].icon) + "></div></th>";
            itemCount++;
             inputCheck = "";
            if (itemCount >= stopHere) {
                finalHTML += "</tr>";
                break;
            }
        }
    }
    finalHTML += "</table><table id=" + toHTML("bottomNav") + "><tr><th class=" + toHTML("pfNav") + " onclick=" + toHTML("pfClickedPrev(" + pageNum + ',' + toHTML2(indicator) + ")") + ">&lt; PREV</th><th class=" + toHTML("pfButton") + "onclick=" + toHTML("pfClickedSave(" + toHTML2(indicator) + ")") + ">SAVE</th><th class=" + toHTML("pfButton") + " onclick=" + toHTML("pfClickedCancel("+ toHTML2(indicator) + ")") + ">CANCEL</th><th class=" + toHTML("pfButton") + "onclick ="+ toHTML("swapSides(" + toHTML2(indicator) +")") + switcherText(indicator)+ "</th><th class="+ toHTML("pfButton") + "onclick="+ toHTML("pfClickedReset(" + toHTML2(indicator) + ")")+ ">RESET" +"<th class=" + toHTML("pfNav") + " onclick=" + toHTML("pfClickedNext(" + pageNum + ", " + toHTML2(indicator) + ")") + ">NEXT &gt;</th></tr></table>";
    //console.log(finalHTML);
    document.getElementById("overpanel").innerHTML = finalHTML;
	}

}

//bottom bar functions for PERK FILTER MENUS
//advance one page pass in current page and S or K
function pfClickedNext(pageNumba, mode){
    //console.log("Clicked Next");
	pageNumba++;
	spawnPF(mode, pageNumba);
}
//go back one page pass in current page and S or K
function pfClickedPrev(pageNumba, mode){
	pageNumba--;
	spawnPF(mode, pageNumba);
}
//commits the list of redacted keys to the target perk array sets the cookies and closes menu
function pfClickedSave(mode){
	var targetArray = connectArray(mode);
	var keyList = connectList(mode);
	processList(targetArray, keyList);
	setCookie();
	document.getElementById("overpanel").style.display = "none";
}
//resets all the keylist values & sets perk list and cookies to original values
function pfClickedReset(mode){
	var keyList = connectList(mode);
	var targetArray = connectArray(mode);
	for(x in targetArray){
		targetArray[x].isRedacted = false;
	}
	while(keyList.length > 0){
		keyList.pop();
	}
	setCookie();
	spawnPF(mode, 0);
}
//Changes from S to K or vice-versa
function swapSides(mode){
	var keyList = connectList(mode);
	var targetArray = connectArray(mode);
	pfClickedSave(targetArray, keyList);
	if (mode === 'S'){
		spawnPF('K', 0);
	}
	else {
		spawnPF('S', 0);
	}
}
function pfClickedCancel(mode){
	var keyList = connectList(mode);
	var targetArray = connectArray(mode);
	while(keyList.length > 0){
		keyList.pop();
	}
	for(x in targetArray){
		if(targetArray[x].isRedacted){
			keyList.push(x);
		}
	}
	document.getElementById("overpanel").style.display = "none";
}


// NOTE siteManager.sManager.checkMode() will give u S or K


//function to OPEN perk filter menu FROM the OPTIONS menu
function pfOpen(){
	if (siteManager.sManager.checkMode() === 'S'){
		spawnPF('S', 0);
	}
	else {
		spawnPF('K', 0);
	}
	closeThreepack();
}
//END FILTER MENU SECTION
//END PERK FILTER SECTION



/*
 window.onclick = function(e){
 if(!e.target.matches('.kdropbtn')){
 var toToggleOff = document.getElementById("killerlist");
 if(toToggleOff.classList.contains('show')) toToggleOff.classList.remove('show');
 }
 if(!e.target.matches('.sdropbtn')){
 var toToggleOff = document.getElementById("survivorlist");
 if(toToggleOff.classList.contains('show')) toToggleOff.classList.remove('show');
 }
 if(!e.target.matches('.shdropbtn') && !e.target.matches('shdropcontent') && !e.target.matches('dontcloseme')){
 var toToggleOff = document.getElementById("shareform");
 if(toToggleOff.classList.contains('show')) toToggleOff.classList.remove('show');
 }
 if(!e.target.matches('.shdropbtn') && !checkParent(e.target, "shareform")){
 var toToggleOff = document.getElementById("shareform");
 if(toToggleOff.classList.contains('show')) toToggleOff.classList.remove('show');
 }
 if(!e.target.matches('.ldropbtn') && !checkParent(e.target, "loadform")){
 var toToggleOff = document.getElementById("loadform");
 if(toToggleOff.classList.contains('show')) toToggleOff.classList.remove('show');
 }

 }*/
/*Slots we will have:
 Item or Killer ability Slot
 Addon Slots x 2
 Perk Slots x 4
 Offering Slot*/
/*Configure for killer
 set item slot to the current killer's power.
 lock down the item slot.
 set addon slots to draw from the current killers addons.
 set perk slots to draw from killer perk list.
 set offerring slot to draw from killer offering list.
 blank all slots except the killer power.
 all previous items should be deselected properly*/
/*Configure for survivor
 set item slot to draw from survivor item list*/
//END SLOTS SECTION
/*siteManager.setupBlank();
 siteManager.testDisplayAll();
 siteManager.acceptCode("SbPaPbPcbPdIbaAaAbOcX");
 siteManager.testDisplayAll();
 var coderino = siteManager.generateCode();
 console.log(coderino);*/
dKillerMenu();
dSurvivorMenu();
//siteManager.acceptCode(siteManager.RNGeezus());
//siteManager.acceptCode("SbNNNNNNNNX");
siteManager.loadHandler();
processCookies();
//Make redaction key lists for killer and survivor perks DO AT SITE LOAD AFTER COOKIE
//PROCESS
var sRedList = generateList(survivorPerks);
var kRedList = generateList(killerPerks);
//var whatIsIt = document.getElementById("keycodein").value;
//console.log(whatIsIt);
//siteManager.sManager.perk1.spawnMenu();
/*for(i in toolboxAddons){
 if(typeof toolboxAddons[i].type != 'undefined') ;
 else console.log(toolboxAddons[i].name);
 }*/
//testMain();
