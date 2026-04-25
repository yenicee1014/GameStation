const fs = require('fs');
const filePath = '/Volumes/SanDisk/trae的项目/gamestation/src/data/horizon-forbidden-west-guide.js';

let content = fs.readFileSync(filePath, 'utf8');

const replacements = [
  " (Signal Spike)", " (Camp Nowhere)", " (Spike Thrower)", " (Thirst for the Hunt)",
  " (Arrowhand)", " (Tenakth Vanquisher)", " (The Promontory)", " (Plainsong)",
  " (Utaru Protector)", " (A Soldier's March)", " (The Bulwark)", " (Tenakth Tactician)",
  " (Breaking Even)", " (Blood for Blood)", " (The Memorial Grove)", " (Perimeter Tripcaster)",
  " (The Wound in the Sand)", " (In the Fog)", " (Tide's Reach)", " (Sunhawk Shredder Gauntlet)",
  " (Drowned Hopes)", " (Carja Camp)", " (Guardian Tripcaster)", " (Boom or Bust)",
  " (Hidden Ember)", " (Boomer's Shredder Gauntlet)", " (Lofty Ambitions)", " (Oseram Striker)",
  " (The Second Verse)", " (The Base)", " (Zo)", " (Utaru Birthsinger)",
  " (Need to Know)", " (Talanah)", " (Lightning Hunter Bow)", " (The Blood Choke)",
  " (Thornmarsh)", " (Tenakth Reaver)", " (The Valley of the Fallen)", " (Skystrike Boltcaster)",
  " (What Was Lost)", " (Kotallo)", " (Forbidden Legacy)", " (Alva)",
  " (The Way Home)", " (Legacy's Landfall)", " (The Skykiller)", " (The Arena)",
  " (Salvage Contracts)", " (Hunting Grounds)", " (Tallnecks)", " (Cinnabar Sands)",
  " (The Stillsands)", " (The Stand of the Sentinels)", " (Landfall)", " (Salt Bite)",
  " (IOTA)", " (The Shining Wastes)", " (Cauldrons)", " (Repair Bay TAU)",
  " (MU)", " (CHI)", " (KAPPA)", " (Relic Ruins)",
  " (No Man's Land)", " (Restless Weald)", " (The Dry Yearn)", " (Runner's Wild)",
  " (The Long Coast)", " (Isle of Spires)", " (Nights of Lights)", " (Black Boxes)",
  " (Survey Drones)", " (Vista Points)", " (Burning Shores)", " (To the Burning Shores)",
  " (Heaven and Earth)", " (The Stars in Their Eyes)", " (For His Amusement)", " (His Final Act)",
  " (Horus)", " (Pangea Figurines)", " (Aerial Captures)", " (Delver's Trinkets)",
  " (Waterwing)", " (Bilegut)", " (Stingspawn)", " (Rebel Camps)",
  " (Shadow in the West)", " (The Deluge)", " (North of Scalding Spear)", " (Tenakth Vindicator)",
  " (The Gate of the Vanquished)", " (Firestorm Warrior Bow)", " (A Tribe Apart)", " (Stone's Echo)",
  " (The Roots that Bind)", " (Kue's Sharpshot Bow)", " (The Burning Blooms)", " (Carja Shadow)",
  " (Deep Trouble)", " (Oseram Artificier)", " (Shadow from the Past)", " (Barren Light)",
  " (The Twilight Path)", " (Chainscrape)", " (Carja Scholar)", " (The Bristlebacks)",
  " (Gemini)", " (The Dig Site)", " (Faro’s Tomb)", " (GAIA)", " (Cauldron GEMINI)", " (HEPHAESTUS)",
  " (Return to the Base)", " (Talk to GAIA)", " (Talk to Varl)", " (Rost)", " (Protect Beta)",
  " (Behemoth)", " (Fire)", " (Acid)", " (Ravager)", " (Return to Beta and Varl)", " (Pursue HEPHAESTUS Into the Cauldron)",
  " (Force HEPHAESTUS Back to the Core – Follow the Conveyors)", " (Force HEPHAESTUS Back to the Core – Explore the Two Cauldron Chambers)",
  " (Pullcaster)", " (Force HEPHAESTUS Back to the Core – Override the Network Uplink)", " (Apex Leaplashers)", " (Longlegs)",
  " (Force HEPHAESTUS Back to the Core – Kill the Machines)", " (Grimhorn)", " (Force HEPHAESTUS Back to the Core – Go to the Second Cauldron Chamber)",
  " (Shieldwing)", " (Spikesnout)", " (Purgewater)", " (Fire Bellowback)", " (Return to the Assembly Chamber)", " (Kill the Slaughterspine)",
  " (Slaughterspine)", " (Override the Network Uplink)", " (All That Remains)", " (Tilda’s Mansion)", " (Tilda)",
  " (Meet Tilda Upstairs – Examine the Art (Optional))", " (The Wings of the Ten)", " (Sunwing)", " (Singularity)",
  " (Side Quests)"
];

for (const str of replacements) {
  content = content.split(str).join('');
}

// Additional replacements using regex for flexibility
content = content.replace(/ \([A-Za-z0-9'\-\s]+\)/g, (match) => {
    // We only want to remove it if it looks like an English translation in parentheses.
    // However, the above array should have caught most of them. 
    // Let's stick to the specific list to avoid removing necessary text like " (Optional)" which we might want to keep in Chinese " (可选)" but not if it's purely English.
    return match; // Actually, skip regex to be safe, the array is comprehensive.
});


fs.writeFileSync(filePath, content, 'utf8');
console.log('Replacement done.');
