import re

text = """
Beasthunter Saif 
 
 TypeLocation 
 Normal 
 Found by the river of blood end in Hunter's Nightmare 
 Uncanny 
 Chalice Dungeon Messengers Shops - 16,000 Blood Echoes 
 Lost 
 Chalice Dungeon Messengers Shops - 16,000 Blood Echoes 
 Attribute Requirement 
 9 
 11 
 - 
 - 
 Damage from UpgradesLvlBaseAttribute Bonus 
 0 
 90 
 E 
 D 
 - 
 D 
 1 
 99 
 E 
 D 
 - 
 D 
 2 
 108 
 E 
 D 
 - 
 D 
 3 
 117 
 E 
 D 
 - 
 D 
 4 
 126 
 E 
 C 
 - 
 D 
 5 
 135 
 E 
 C 
 - 
 D 
 6 
 144 
 E 
 C 
 - 
 D 
 7 
 153 
 E 
 C 
 - 
 D 
 8 
 162 
 E 
 C 
 - 
 D 
 9 
 171 
 D 
 B 
 - 
 C 
 10 
 180 
 D 
 B 
 - 
 C 
 Gem Slots 
 Normal 
 Uncanny 
 Lost 
 Average Physical Attack Increase (Strength)Stat RangeDmg Gain per PtEstimated Total 
 9 - 25 
 1.56 
 25 
 26 - 50 
 0.72 
 18 
 51 - 99 
 0.18 
 9 
 Average Physical Attack Increase (Skill)Stat RangeDmg Gain per PtEstimated Total 
 11 - 25 
 3.79 
 53 
 26 - 50 
 1.76 
 44 
 51 - 99 
 0.39 
 19 
 Special Attacks 
 0 
 0 
 100 
 100 
 Threaded Cane 
 
 TypeLocation 
 Normal 
 Given by the Messengers as a starter weapon 
 Messengers Shops - 1,200 Blood Echoes 
 Uncanny 
 Central Pthumerian Labyrinth Root 
 Lost 
 Sinister/Isz Gravestone Root 
 Attribute Requirement 
 7 
 9 
 - 
 - 
 Damage from UpgradesLvlBaseAttribute Bonus 
 0 
 78 
 E 
 C 
 - 
 D 
 1 
 85 
 E 
 C 
 - 
 D 
 2 
 92 
 E 
 B 
 - 
 D 
 3 
 99 
 E 
 B 
 - 
 D 
 4 
 106 
 E 
 B 
 - 
 D 
 5 
 113 
 E 
 B 
 - 
 D 
 6 
 120 
 E 
 B 
 - 
 C 
 7 
 127 
 E 
 B 
 - 
 C 
 8 
 134 
 E 
 B 
 - 
 C 
 9 
 141 
 E 
 A 
 - 
 C 
 10 
 156 
 E 
 A 
 - 
 B 
 Gem Slots 
 Normal 
 Uncanny 
 Lost 
 Average Physical Attack Increase (Strength)Stat RangeDmg Gain per PtEstimated Total 
 8 - 25 
 1.17 
 21 
 26 - 50 
 0.64 
 16 
 51 - 99 
 0.14 
 7 
 Average Physical Attack Increase (Skill)Stat RangeDmg Gain per PtEstimated Total 
 10 - 25 
 4.00 
 64 
 26 - 50 
 1.96 
 49 
 51 - 99 
 0.43 
 21 
 Special Attacks 
 0 
 0 
 100 
 100 
 Beast Cutter 
 
 TypeLocation 
 Normal 
 Found on the main Grand Cathedral stairs in Hunter's Nightmare 
 Uncanny 
 Chalice Dungeon Messengers Shops - 20,000 Blood Echoes 
 Lost 
 Chalice Dungeon Messengers Shops - 20,000 Blood Echoes 
 Attribute Requirement 
 11 
 9 
 - 
 - 
 Damage from UpgradesLvlBaseAttribute Bonus 
 0 
 92 
 D 
 E 
 - 
 E 
 1 
 101 
 D 
 E 
 - 
 D 
 2 
 110 
 D 
 E 
 - 
 D 
 3 
 119 
 D 
 E 
 - 
 D 
 4 
 128 
 D 
 E 
 - 
 D 
 5 
 137 
 D 
 E 
 - 
 D 
 6 
 146 
 D 
 E 
 - 
 D 
 7 
 155 
 C 
 E 
 - 
 D 
 8 
 164 
 C 
 E 
 - 
 D 
 9 
 173 
 C 
 E 
 - 
 D 
 10 
 184 
 C 
 D 
 - 
 D 
 Gem Slots 
 Normal 
 Uncanny 
 Lost 
 Average Physical Attack Increase (Strength)Stat RangeDmg Gain per PtEstimated Total 
 11 - 25 
 3.21 
 45 
 26 - 50 
 1.56 
 39 
 51 - 99 
 0.33 
 16 
 Average Physical Attack Increase (Skill)Stat RangeDmg Gain per PtEstimated Total 
 9 - 25 
 1.71 
 24 
 26 - 50 
 0.76 
 19 
 51 - 99 
 0.18 
 9 
 Special Attacks 
 0 
 0 
 100 
 100 
 Burial Blade 
 
 TypeLocation 
 Normal 
 Messengers Shops - 60,000 Blood Echoes 
 Uncanny 
 Sinister/Lower Ailing Loran Root 
 Lost 
 Sinister/Pthumeru Ihyll Root 
 Attribute Requirement 
 10 
 12 
 - 
 - 
 Damage from UpgradesLvlBaseAttribute Bonus 
 0 
 80 
 30 
 E 
 C 
 - 
 D 
 1 
 88 
 33 
 E 
 C 
 - 
 D 
 2 
 96 
 36 
 E 
 C 
 - 
 D 
 3 
 104 
 39 
 E 
 C 
 - 
 D 
 4 
 112 
 42 
 E 
 C 
 - 
 D 
 5 
 120 
 45 
 E 
 B 
 - 
 C 
 6 
 128 
 48 
 E 
 B 
 - 
 C 
 7 
 136 
 51 
 E 
 B 
 - 
 C 
 8 
 144 
 54 
 E 
 B 
 - 
 C 
 9 
 152 
 57 
 E 
 B 
 - 
 B 
 10 
 160 
 60 
 D 
 B 
 - 
 B 
 Gem Slots 
 Normal 
 Uncanny 
 Lost 
 Average Physical Attack Increase (Strength)Stat RangeDmg Gain per PtEstimated Total 
 11 - 25 
 1.53 
 23 
 26 - 50 
 0.68 
 17 
 51 - 99 
 0.14 
 7 
 Average Physical Attack Increase (Skill)Stat RangeDmg Gain per PtEstimated Total 
 13 - 25 
 3.69 
 48 
 26 - 50 
 1.68 
 42 
 51 - 99 
 0.37 
 18 
 Special Attacks 
 0 
 0 
 100 
 100 
 Average Physical Attack Increase (Arcane)Stat RangeDmg Gain per PtEstimated Total 
 8 - 25 
 1.11 
 20 
 26 - 50 
 0.60 
 15 
 51 - 99 
 0.12 
 6 
 Blade of Mercy 
 
 TypeLocation 
 Normal 
 Messengers Shops - 1,200 Blood Echoes 
 Uncanny 
 Sinister/Lower Ailing Loran Root 
 Lost 
 Sinister/Pthumeru Ihyll Root 
 Attribute Requirement 
 7 
 11 
 - 
 - 
 Damage from UpgradesLvlBaseAttribute Bonus 
 0 
 60 
 30 
 - 
 C 
 - 
 D 
 1 
 66 
 33 
 - 
 B 
 - 
 D 
 2 
 72 
 36 
 - 
 B 
 - 
 D 
 3 
 78 
 39 
 - 
 B 
 - 
 D 
 4 
 84 
 42 
 - 
 B 
 - 
 D 
 5 
 90 
 45 
 - 
 A 
 - 
 C 
 6 
 96 
 48 
 - 
 A 
 - 
 C 
 7 
 102 
 51 
 - 
 A 
 - 
 C 
 8 
 108 
 54 
 - 
 A 
 - 
 C 
 9 
 114 
 57 
 - 
 A 
 - 
 B 
 10 
 120 
 60 
 - 
 S 
 - 
 B 
 Gem Slots 
 Normal 
 Uncanny 
 Lost 
 Average Physical Attack Increase (Strength)Stat RangeDmg Gain per PtEstimated Total 
 12 - 25 
 4.00 
 56 
 26 - 50 
 1.84 
 46 
 51 - 99 
 0.41 
 20 
 Average Physical Attack Increase (Skill)Stat RangeDmg Gain per PtEstimated Total 
 8 - 25 
 1.00 
 18 
 26 - 50 
 0.60 
 15 
 51 - 99 
 0.12 
 6 
 Special Attacks 
 0 
 0 
 100 
 100 
 Rifle Spear 
 
 TypeLocation 
 Normal 
 Found in the hidden building of Old Yharnam plaza 
 Messengers Shops - 4,000 Blood Echoes 
 Uncanny 
 Sinister/Lower Pthumerian Labyrinth Root 
 Lost 
 Ailing Loran Root 
 Attribute Requirement 
 10 
 11 
 9 
 - 
 Damage from UpgradesLvlBaseAttribute Bonus 
 0 
 85 
 85 
 E 
 D 
 D 
 D 
 1 
 93 
 93 
 E 
 D 
 D 
 D 
 2 
 101 
 101 
 E 
 D 
 D 
 D 
 3 
 109 
 109 
 E 
 C 
 D 
 D 
 4 
 117 
 117 
 E 
 C 
 D 
 D 
 5 
 125 
 125 
 E 
 C 
 D 
 D 
 6 
 133 
 133 
 E 
 C 
 D 
 D 
 7 
 141 
 141 
 E 
 C 
 C 
 D 
 8 
 149 
 149 
 E 
 B 
 C 
 D 
 9 
 157 
 157 
 E 
 B 
 C 
 D 
 10 
 170 
 170 
 D 
 B 
 B 
 C 
 Gem Slots 
 Normal 
 Uncanny 
 Lost 
 Average Physical Attack Increase (Strength)Stat RangeDmg Gain per PtEstimated Total 
 11 - 25 
 1.53 
 23 
 26 - 50 
 0.68 
 17 
 51 - 99 
 0.16 
 8 
 Average Physical Attack Increase (Skill)Stat RangeDmg Gain per PtEstimated Total 
 12 - 25 
 3.57 
 50 
 26 - 50 
 1.64 
 41 
 51 - 99 
 0.37 
 18 
 Special Attacks 
 0 
 0 
 100 
 100 
 Average Physical Attack Increase (Arcane)Stat RangeDmg Gain per PtEstimated Total 
 10 - 25 
 3.19 
 51 
 26 - 50 
 1.52 
 38 
 51 - 99 
 0.35 
 17 
 Stake Driver 
 
 TypeLocation 
 Normal 
 Messengers Shops - 8,000 Blood Echoes 
 Uncanny 
 Sinister/Lower Hintertomb Root 
 Lost 
 Sinister/Lower Ailing Loran Root 
 Attribute Requirement 
 18 
 9 
 - 
 - 
 Damage from UpgradesLvlBaseAttribute Bonus 
 0 
 85 
 D 
 D 
 - 
 D 
 1 
 93 
 D 
 D 
 - 
 D 
 2 
 101 
 D 
 D 
 - 
 D 
 3 
 109 
 D 
 D 
 - 
 D 
 4 
 117 
 D 
 D 
 - 
 D 
 5 
 125 
 D 
 D 
 - 
 D 
 6 
 133 
 D 
 D 
 - 
 D 
 7 
 141 
 D 
 D 
 - 
 C 
 8 
 149 
 C 
 D 
 - 
 C 
 9 
 157 
 C 
 D 
 - 
 C 
 10 
 170 
 C 
 C 
 - 
 C 
 Gem Slots 
 Normal 
 Uncanny 
 Lost 
 Average Physical Attack Increase (Strength)Stat RangeDmg Gain per PtEstimated Total 
 19 - 25 
 3.14 
 22 
 26 - 50 
 1.40 
 35 
 51 - 99 
 0.33 
 16 
 Average Physical Attack Increase (Skill)Stat RangeDmg Gain per PtEstimated Total 
 10 - 25 
 2.69 
 43 
 26 - 50 
 1.32 
 33 
 51 - 99 
 0.29 
 14 
 
 Special Attacks 
 0 
 0 
 100
"""

print(len(text))
