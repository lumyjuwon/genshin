import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Detactor from 'i18next-browser-languagedetector';

enum LangCode {
  en = 'en',
  ko = 'ko'
}

enum Lang {
  Main_Logo = 'Main_Logo',
  Main_Title = 'Main_Title',
  Main_Wish_Desc = 'Main_Wish_Desc',
  Main_Party_Desc = 'Main_Party_Desc',
  Main_Privacy_Policy = 'Main_Privacy_Policy',
  Main_Notice = 'Main_Notice',
  Filter_Rarity = 'Filter_Rarity',
  Filter_Character = 'Filter_Character',
  Filter_Weapon = 'Filter_Weapon',
  Filter_PickUp = 'Filter_PickUp',

  Policy_Title = 'Policy_Title',
  Policy_Intro_1 = 'Policy_Intro_1',
  Policy_Intro_2 = 'Policy_Intro_2',
  Policy_Intro_3 = 'Policy_Intro_3',
  Policy_Consent = 'Policy_Consent',
  Policy_Consent_Content = 'Policy_Consent_Content',
  Policy_Collect = 'Policy_Collect',
  Policy_Collect_Content_1 = 'Policy_Collect_Content_1',
  Policy_Collect_Content_2 = 'Policy_Collect_Content_2',
  Policy_Collect_Content_3 = 'Policy_Collect_Content_3',
  Policy_Use = 'Policy_Use',
  Policy_Use_Content = 'Policy_Use_Content',
  Policy_Use_List1 = 'Policy_Use_List1',
  Policy_Use_List2 = 'Policy_Use_List2',
  Policy_Use_List3 = 'Policy_Use_List3',
  Policy_Use_List4 = 'Policy_Use_List4',
  Policy_Use_List5 = 'Policy_Use_List5',
  Policy_Use_List6 = 'Policy_Use_List6',
  Policy_Use_List7 = 'Policy_Use_List7',
  Policy_Log = 'Policy_Log',
  Policy_Log_Content = 'Policy_Log_Content',
  Policy_Ad = 'Policy_Ad',
  Policy_Ad_Content1 = 'Policy_Ad_Content1',
  Policy_Ad_Content2 = 'Policy_Ad_Content2',
  Policy_Ad_Content3 = 'Policy_Ad_Content3',
  Policy_Third = 'Policy_Third',
  Policy_Third_Content1 = 'Policy_Third_Content1',
  Policy_Third_Content2 = 'Policy_Third_Content2',
  Policy_CCPA_Content1 = 'Policy_CCPA_Content1',
  Policy_CCPA_Content2 = 'Policy_CCPA_Content2',
  Policy_CCPA_Content3 = 'Policy_CCPA_Content3',
  Policy_CCPA_Content4 = 'Policy_CCPA_Content4',
  Policy_CCPA_Content5 = 'Policy_CCPA_Content5',
  Policy_CCPA_Content6 = 'Policy_CCPA_Content6',
  Policy_GDPR = 'Policy_GDPR',
  Policy_GDPR_Content1 = 'Policy_GDPR_Content1',
  Policy_GDPR_Content2 = 'Policy_GDPR_Content2',
  Policy_GDPR_Content3 = 'Policy_GDPR_Content3',
  Policy_GDPR_Content4 = 'Policy_GDPR_Content4',
  Policy_GDPR_Content5 = 'Policy_GDPR_Content5',
  Policy_GDPR_Content6 = 'Policy_GDPR_Content6',
  Policy_GDPR_Content7 = 'Policy_GDPR_Content7',
  Policy_GDPR_Content8 = 'Policy_GDPR_Content8',
  Policy_Children = 'Policy_Children',
  Policy_Children_Content1 = 'Policy_Children_Content1',
  Policy_Children_Content2 = 'Policy_Children_Content2',

  Notice_Content1 = 'Notice_Content1',
  Notice_Content2 = 'Notice_Content2',
  Notice_Content3 = 'Notice_Content3',

  Gacha = 'Gacha',
  Character_Event_Wish = 'Character_Event_Wish',
  Weapon_Event_Wish = 'Weapon_Event_Wish',
  Standard_Wish = 'Standard_Wish',
  Novice_Wishes = 'Novice_Wishes',
  Blank_Arrange_View = 'Blank_Arrange_View',
  Reset = 'Reset',
  Start = 'Start',
  Novice_Finish = 'Novice_Finish',
  Total_Count = 'Total_Count',
  Next_Pity = 'Next_Pity',
  Inventory = 'Inventory',
  Item_Count = 'Item_Count',
  Hide_Three_Star = 'Hide_Three_Star',
  If_Inventory_Blank = 'If_Inventory_Blank',
  Help_Title = 'Help_Title',
  Help_Prob = 'Help_Prob',
  Help_Prob_Five = 'Help_Prob_Five',
  Help_Prob_Four = 'Help_Prob_Four',
  Help_Prob_Five_Pick_Up = 'Help_Prob_Five_Pick_Up',
  Help_Prob_Four_Pick_Up = 'Help_Prob_Four_Pick_Up',
  Help_Item = 'Help_Item',
  Help_Content = 'Help_Content',
  Five_Pick_Up = 'Five_Pick_Up',
  Four_Pick_Up = 'Four_Pick_Up',
  Help_Warning = 'Help_Warning',
  Help_No_Pick_UP = 'Help_No_Pick_Up',

  Klee = 'Klee',
  Diluc = 'Diluc',
  Jean = 'Jean',
  Qiqi = 'Qiqi',
  Mona = 'Mona',
  Tartaglia = 'Tartaglia',
  Traveler_Anemo = 'Traveler_Anemo',
  Traveler_Geo = 'Traveler_Geo',
  Venti = 'Venti',
  Keqing = 'Keqing',
  Xiao = 'Xiao',
  Lisa = 'Lisa',
  Kaeya = 'Kaeya',
  Amber = 'Amber',
  Diona = 'Diona',
  Sucrose = 'Sucrose',
  Noelle = 'Noelle',
  Xingqiu = 'Xingqiu',
  Fischl = 'Fischl',
  Xiangling = 'Xiangling',
  Barbara = 'Barbara',
  Chongyun = 'Chongyun',
  Ningguang = 'Ningguang',
  Bennett = 'Bennett',
  Beidou = 'Beidou',
  Razor = 'Razor',

  Amos_Bow = 'Amos_Bow',
  Skyward_Harp = 'Skyward_Harp',
  Alley_Hunter = 'Alley_Hunter',
  The_Stringless = 'The_Stringless',
  Sacrificial_Bow = 'Sacrificial_Bow',
  Rust = 'Rust',
  Royal_Bow = 'Royal_Bow',
  The_Viridescent_Hunt = 'The_Viridescent_Hunt',
  Prototype_Crescent = 'Prototype_Crescent',
  Favonius_Warbow = 'Favonius_Warbow',
  Compound_Bow = 'Compound_Bow',
  Blackcliff_Warbow = 'Blackcliff_Warbow',
  Raven_Bow = 'Raven_Bow',
  Messenger = 'Messenger',
  Ebony_Bow = 'Ebony_Bow',
  Sharpshooters_Oath = 'Sharpshooters_Oath',
  Slingshot = 'Slingshot',
  Recurve_Bow = 'Recurve_Bow',
  Seasoned_Hunters_Bow = 'Seasoned_Hunters_Bow',
  Hunters_Bow = 'Hunters_Bow',

  Lost_Prayer_to_the_Sacred_Winds = 'Lost_Prayer_to_the_Sacred_Winds',
  Skyward_Atlas = 'Skyward_Atlas',
  Memory_of_Dust = 'Memory_of_Dust',
  Wine_and_Song = 'Wine_and_Song',
  Blackcliff_Amulet = 'Blackcliff_Amulet',
  Eye_of_Perception = 'Eye_of_Perception',
  Favonius_Codex = 'Favonius_Codex',
  Mappa_Mare = 'Mappa_Mare',
  The_Widsith = 'The_Widsith',
  Solar_Pearl = 'Solar_Pearl',
  Prototype_Malice = 'Prototype_Malice',
  Royal_Grimoire = 'Royal_Grimoire',
  Sacrificial_Fragments = 'Sacrificial_Fragments',
  Twin_Nephrite = 'Twin_Nephrite',
  Thrilling_Tales_of_Dragon_Slayers = 'Thrilling_Tales_of_Dragon_Slayers',
  Amber_Catalyst = 'Amber_Catalyst',
  Magic_Guide = 'Magic_Guide',
  Otherworldly_Story = 'Otherworldly_Story',
  Emerald_Orb = 'Emerald_Orb',
  Pocket_Grimoire = 'Pocket_Grimoire',
  Apprentices_Notes = 'Apprentices_Notes',

  Wolfs_Gravestone = 'Wolfs_Gravestone',
  Skyward_Pride = 'Skyward_Pride',
  Rainslasher = 'Rainslasher',
  Whiteblind = 'Whiteblind',
  The_Bell = 'The_Bell',
  Serpent_Spine = 'Serpent_Spine',
  Sacrificial_Greatsword = 'Sacrificial_Greatsword',
  Blackcliff_Slasher = 'Blackcliff_Slasher',
  Prototype_Aminus = 'Prototype_Aminus',
  Lithic_Blade = 'Lithic_Blade',
  Favonius_Greatsword = 'Favonius_Greatsword',
  Royal_Greatsword = 'Royal_Greatsword',
  Quartz = 'Quartz',
  Bloodtainted_Greatsword = 'Bloodtainted_Greatsword',
  Skyrider_Greatsword = 'Skyrider_Greatsword',
  Ferrous_Shadow = 'Ferrous_Shadow',
  White_Iron_Greatsword = 'White_Iron_Greatsword',
  Debate_Club = 'Debate_Club',
  Old_Mercs_Pal = 'Old_Mercs_Pal',
  Waster_Greatsword = 'Waster_Greatsword',

  Kunwus_Iris_Rift = 'Kunwus_Iris_Rift',
  Primordial_Jade_Winged_Spear = 'Primordial_Jade_Winged_Spear',
  Skyward_Spine = 'Skyward_Spine',
  Blackcliff_Pole = 'Blackcliff_Pole',
  Crescent_Pike = 'Crescent_Pike',
  Deathmatch = 'Deathmatch',
  Dragons_Bane = 'Dragons_Bane',
  Favonius_Lance = 'Favonius_Lance',
  Lithic_Spear = 'Lithic_Spear',
  Prototype_Grudge = 'Prototype_Grudge',
  Black_Tassel = 'Black_Tassel',
  White_Tassel = 'White_Tassel',
  Halberd = 'Halberd',
  Iron_Point = 'Iron_Point',
  Beginners_Protector = 'Beginners_Protector',

  Skyward_Blade = 'Skyward_Blade',
  Aquila_Favonia = 'Aquila_Favonia',
  Blackcliff_Longsword = 'Blackcliff_Longsword',
  The_Flute = 'The_Flute',
  The_Black_Sword = 'The_Black_Sword',
  The_Alley_Flash = 'The_Alley_Flash',
  Sacrificial_Sword = 'Sacrificial_Sword',
  Royal_Longsword = 'Royal_Longsword',
  Prototype_Rancour = 'Prototype_Rancour',
  Lions_Roar = 'Lions_Roar',
  Iron_Sting = 'Iron_Sting',
  Favonius_Sword = 'Favonius_Sword',
  Harbinger_of_Dawn = 'Harbinger_of_Dawn',
  Skyrider_Sword = 'Skyrider_Sword',
  Fillet_Blade = 'Fillet_Blade',
  Dark_Iron_Sword = 'Dark_Iron_Sword',
  Cool_Steel = 'Cool_Steel',
  Travelers_Handy_Sword = 'Travelers_Handy_Sword',
  Silver_Sword = 'Silver_Sword',
  Dull_Blade = 'Dull_Blade',

  Adventurer_TwoPieceSet = 'Adventurer_TwoPieceSet',
  LuckyDog_TwoPieceSet = 'LuckyDog_TwoPieceSet',
  TravelingDoctor_TwoPieceSet = 'TravelingDoctor_TwoPieceSet',
  Instructor_TwoPieceSet = 'Instructor_TwoPieceSet',
  Berserker_TwoPieceSet = 'Berserker_TwoPieceSet',
  TheExile_TwoPieceSet = 'TheExile_TwoPieceSet',
  ResolutionOfSojourner_TwoPieceSet = 'ResolutionOfSojourner_TwoPieceSet',
  MartialArtist_TwoPieceSet = 'MartialArtist_TwoPieceSet',
  DefenderOfWill_TwoPieceSet = 'DefenderOfWill_TwoPieceSet',
  TinyMiracle_TwoPieceSet = 'TinyMiracle_TwoPieceSet',
  BraveHeart_TwoPieceSet = 'BraveHeart_TwoPieceSet',
  Gambler_TwoPieceSet = 'Gambler_TwoPieceSet',
  Scholar_TwoPieceSet = 'Scholar_TwoPieceSet',
  GladiatorOfFinaleFinale_TwoPieceSet = 'GladiatorOfFinaleFinale_TwoPieceSet',
  MaidenBeloved_TwoPieceSet = 'MaidenBeloved_TwoPieceSet',
  NoblesseOblige_TwoPieceSet = 'NoblesseOblige_TwoPieceSet',
  BloodstainedChivalry_TwoPieceSet = 'BloodstainedChivalry_TwoPieceSet',
  WandererOfTroupe_TwoPieceSet = 'WandererOfTroupe_TwoPieceSet',
  ViridescentVenerer_TwoPieceSet = 'ViridescentVenerer_TwoPieceSet',
  ThunderingFury_TwoPieceSet = 'ThunderingFury_TwoPieceSet',
  Thundersoother_TwoPieceSet = 'Thundersoother_TwoPieceSet',
  CrimsonWitchOfFlames_TwoPieceSet = 'CrimsonWitchOfFlames_TwoPieceSet',
  Lavawalker_TwoPieceSet = 'Lavawalker_TwoPieceSet',
  ArchaicPetra_TwoPieceSet = 'ArchaicPetra_TwoPieceSet',
  RetracingBolide_TwoPieceSet = 'RetracingBolide_TwoPieceSet',

  Adventurer_FourPieceSet = 'Adventurer_FourPieceSet',
  LuckyDog_FourPieceSet = 'LuckyDog_FourPieceSet',
  TravelingDoctor_FourPieceSet = 'TravelingDoctor_FourPieceSet',
  Instructor_FourPieceSet = 'Instructor_FourPieceSet',
  Berserker_FourPieceSet = 'Berserker_FourPieceSet',
  TheExile_FourPieceSet = 'TheExile_FourPieceSet',
  ResolutionOfSojourner_FourPieceSet = 'ResolutionOfSojourner_FourPieceSet',
  MartialArtist_FourPieceSet = 'MartialArtist_FourPieceSet',
  DefenderOfWill_FourPieceSet = 'DefenderOfWill_FourPieceSet',
  TinyMiracle_FourPieceSet = 'TinyMiracle_FourPieceSet',
  BraveHeart_FourPieceSet = 'BraveHeart_FourPieceSet',
  Gambler_FourPieceSet = 'Gambler_FourPieceSet',
  Scholar_FourPieceSet = 'Scholar_FourPieceSet',
  GladiatorOfFinaleFinale_FourPieceSet = 'GladiatorOfFinaleFinale_FourPieceSet',
  MaidenBeloved_FourPieceSet = 'MaidenBeloved_FourPieceSet',
  NoblesseOblige_FourPieceSet = 'NoblesseOblige_FourPieceSet',
  BloodstainedChivalry_FourPieceSet = 'BloodstainedChivalry_FourPieceSet',
  WandererOfTroupe_FourPieceSet = 'WandererOfTroupe_FourPieceSet',
  ViridescentVenerer_FourPieceSet = 'ViridescentVenerer_FourPieceSet',
  ThunderingFury_FourPieceSet = 'ThunderingFury_FourPieceSet',
  Thundersoother_FourPieceSet = 'Thundersoother_FourPieceSet',
  CrimsonWitchOfFlames_FourPieceSet = 'CrimsonWitchOfFlames_FourPieceSet',
  Lavawalker_FourPieceSet = 'Lavawalker_FourPieceSet',
  ArchaicPetra_FourPieceSet = 'ArchaicPetra_FourPieceSet',
  RetracingBolide_FourPieceSet = 'RetracingBolide_FourPieceSet',

  Prayers_for_Destiny = 'Prayers_for_Destiny',
  Prayers_for_Illumination = 'Prayers_for_Illumination',
  Prayers_to_Springtime = 'Prayers_to_Springtime',
  Prayers_for_Wisdom = 'Prayers_for_Wisdom',

  Adventurers_Flower = 'Adventurers_Flower',
  Adventurers_Tail_Feather = 'Adventurers_Tail_Feather',
  Adventurers_Pocket_Watch = 'Adventurers_Pocket_Watch',
  Adventurers_Golden_Goblet = 'Adventurers_Golden_Goblet',
  Adventurers_Bandana = 'Adventurers_Bandana',
  Lucky_Dogs_Clover = 'Lucky_Dogs_Clover',
  Lucky_Dogs_Eagle_Feather = 'Lucky_Dogs_Eagle_Feather',
  Lucky_Dogs_Hourglass = 'Lucky_Dogs_Hourglass',
  Lucky_Dogs_Goblet = 'Lucky_Dogs_Goblet',
  Lucky_Dogs_Silver_Circlet = 'Lucky_Dogs_Silver_Circlet',
  Traveling_Doctors_Silver_Lotus = 'Traveling_Doctors_Silver_Lotus',
  Traveling_Doctors_Owl_Feather = 'Traveling_Doctors_Owl_Feather',
  Traveling_Doctors_Pocket_Watch = 'Traveling_Doctors_Pocket_Watch',
  Traveling_Doctors_Medicine_Pot = 'Traveling_Doctors_Medicine_Pot',
  Traveling_Doctors_Handkerchief = 'Traveling_Doctors_Handkerchief',
  Instructors_Brooch = 'Instructors_Brooch',
  Instructors_Feather_Accessory = 'Instructors_Feather_Accessory',
  Instructors_Pocket_Watch = 'Instructors_Pocket_Watch',
  Instructors_Tea_Cup = 'Instructors_Tea_Cup',
  Instructors_Cap = 'Instructors_Cap',
  Berserkers_Rose = 'Berserkers_Rose',
  Berserkers_Indigo_Feather = 'Berserkers_Indigo_Feather',
  Berserkers_Timepiece = 'Berserkers_Timepiece',
  Berserkers_Bone_Goblet = 'Berserkers_Bone_Goblet',
  Berserkers_Battle_Mask = 'Berserkers_Battle_Mask',
  Exiles_Flower = 'Exiles_Flower',
  Exiles_Feather = 'Exiles_Feather',
  Exiles_Pocket_Watch = 'Exiles_Pocket_Watch',
  Exiles_Goblet = 'Exiles_Goblet',
  Exiles_Circlet = 'Exiles_Circlet',
  Heart_of_Comeradeship = 'Heart_of_Comeradeship',
  Feather_of_Homecoming = 'Feather_of_Homecoming',
  Sundial_of_the_Sojourner = 'Sundial_of_the_Sojourner',
  Goblet_of_the_Sojourner = 'Goblet_of_the_Sojourner',
  Crown_of_Parting = 'Crown_of_Parting',
  Martial_Artists_Red_Flower = 'Martial_Artists_Red_Flower',
  Martial_Artists_Feather_Accessory = 'Martial_Artists_Feather_Accessory',
  Martial_Artists_Water_Hourglass = 'Martial_Artists_Water_Hourglass',
  Martial_Artists_Wine_Cup = 'Martial_Artists_Wine_Cup',
  Martial_Artists_Bandana = 'Martial_Artists_Bandana',
  Guardians_Flower = 'Guardians_Flower',
  Guardians_Sigil = 'Guardians_Sigil',
  Guardians_Clock = 'Guardians_Clock',
  Guardians_Vessel = 'Guardians_Vessel',
  Guardians_Band = 'Guardians_Band',
  Tiny_Miracles_Flower = 'Tiny_Miracles_Flower',
  Tiny_Miracles_Feather = 'Tiny_Miracles_Feather',
  Tiny_Miracles_Hourglass = 'Tiny_Miracles_Hourglass',
  Tiny_Miracles_Goblet = 'Tiny_Miracles_Goblet',
  Tiny_Miracles_Earrings = 'Tiny_Miracles_Earrings',
  Medal_of_the_Brave = 'Medal_of_the_Brave',
  Prospect_of_the_Brave = 'Prospect_of_the_Brave',
  Fortitude_of_the_Brave = 'Fortitude_of_the_Brave',
  Outset_of_the_Brave = 'Outset_of_the_Brave',
  Crown_of_the_Brave = 'Crown_of_the_Brave',
  Gamblers_Brooch = 'Gamblers_Brooch',
  Gamblers_Feather_Accessory = 'Gamblers_Feather_Accessory',
  Gamblers_Pocket_Watch = 'Gamblers_Pocket_Watch',
  Gamblers_Dice_Cup = 'Gamblers_Dice_Cup',
  Gamblers_Earrings = 'Gamblers_Earrings',
  Scholars_Bookmark = 'Scholars_Bookmark',
  Scholars_Quill_Pen = 'Scholars_Quill_Pen',
  Scholars_Clock = 'Scholars_Clock',
  Scholars_Ink_Cup = 'Scholars_Ink_Cup',
  Scholars_Lens = 'Scholars_Lens',
  Gladiators_Nostalgia = 'Gladiators_Nostalgia',
  Gladiators_Destiny = 'Gladiators_Destiny',
  Gladiators_Longing = 'Gladiators_Longing',
  Gladiators_Intoxication = 'Gladiators_Intoxication',
  Gladiators_Triumphus = 'Gladiators_Triumphus',
  Maidens_Distant_Love = 'Maidens_Distant_Love',
  Maidens_Heart_stricken_Infatuation = 'Maidens_Heart_stricken_Infatuation',
  Maidens_Passing_Youth = 'Maidens_Passing_Youth',
  Maidens_Fleeting_Leisure = 'Maidens_Fleeting_Leisure',
  Maidens_Fading_Beauty = 'Maidens_Fading_Beauty',
  Royal_Flora = 'Royal_Flora',
  Royal_Plume = 'Royal_Plume',
  Royal_Pocket_Watch = 'Royal_Pocket_Watch',
  Royal_Silver_Urn = 'Royal_Silver_Urn',
  Royal_Masque = 'Royal_Masque',
  Bloodstained_Flower_of_Iron = 'Bloodstained_Flower_of_Iron',
  Bloodstained_Black_Plume = 'Bloodstained_Black_Plume',
  Bloodstained_Final_Hour = 'Bloodstained_Final_Hour',
  Bloodstained_Chevaliers_Goblet = 'Bloodstained_Chevaliers_Goblet',
  Bloodstained_Iron_Mask = 'Bloodstained_Iron_Mask',
  Troupes_Dawnlight = 'Troupes_Dawnlight',
  Bards_Arrow_Feather = 'Bards_Arrow_Feather',
  Concerts_Final_Hour = 'Concerts_Final_Hour',
  Wanderers_String_Kettle = 'Wanderers_String_Kettle',
  Conductors_Top_Hat = 'Conductors_Top_Hat',
  In_Remembrance_of_Viridescent_Fields = 'In_Remembrance_of_Viridescent_Fields',
  Viridescent_Arrow_Feather = 'Viridescent_Arrow_Feather',
  Viridescent_Venerers_Determination = 'Viridescent_Venerers_Determination',
  Viridescent_Venerers_Vessel = 'Viridescent_Venerers_Vessel',
  Viridescent_Venerers_Diadem = 'Viridescent_Venerers_Diadem',
  Thunderbirds_Mercy = 'Thunderbirds_Mercy',
  Survivor_of_Catastrophe = 'Survivor_of_Catastrophe',
  Hourglass_of_Thunder = 'Hourglass_of_Thunder',
  Omen_of_Thunderstorm = 'Omen_of_Thunderstorm',
  Thunder_Summoners_Crown = 'Thunder_Summoners_Crown',
  Thundershoothers_Heart = 'Thundershoothers_Heart',
  Thundershoothers_Plume = 'Thundershoothers_Plume',
  Hour_of_Soothing_Thunder = 'Hour_of_Soothing_Thunder',
  Thundershoothers_Goblet = 'Thundershoothers_Goblet',
  Thundershoothers_Diadem = 'Thundershoothers_Diadem',
  Witchs_Flower_of_Blaze = 'Witchs_Flower_of_Blaze',
  Witchs_Ever_Burning_Plume = 'Witchs_Ever_Burning_Plume',
  Witchs_End_Time = 'Witchs_End_Time',
  Witchs_Heart_Flames = 'Witchs_Heart_Flames',
  Witchs_Scorching_Hat = 'Witchs_Scorching_Hat',
  Lavawalkers_Resolution = 'Lavawalkers_Resolution',
  Lavawalkers_Salvation = 'Lavawalkers_Salvation',
  Lavawalkers_Torment = 'Lavawalkers_Torment',
  Lavawalkers_Epiphany = 'Lavawalkers_Epiphany',
  Lavawalkers_Wisdom = 'Lavawalkers_Wisdom',
  Flower_of_Creviced_Cliff = 'Flower_of_Creviced_Cliff',
  Feather_of_Jagged_Peaks = 'Feather_of_Jagged_Peaks',
  Sundial_of_Enduring_Jade = 'Sundial_of_Enduring_Jade',
  Goblet_of_Chiseled_Crag = 'Goblet_of_Chiseled_Crag',
  Mask_of_Solitude_Basalt = 'Mask_of_Solitude_Basalt',
  Summer_Nights_Bloom = 'Summer_Nights_Bloom',
  Summer_Nights_Finale = 'Summer_Nights_Finale',
  Summer_Nights_Moment = 'Summer_Nights_Moment',
  Summer_Nights_Waterballoon = 'Summer_Nights_Waterballoon',
  Summer_Nights_Mask = 'Summer_Nights_Mask',
  Tiara_of_Thunder = 'Tiara_of_Thunder',
  Tiara_of_Flame = 'Tiara_of_Flame',
  Tiara_of_Frost = 'Tiara_of_Frost',
  Tiara_of_Torrents = 'Tiara_of_Torrents',

  Pyro_DMG = 'Pyro_DMG',
  CRIT_DMG = 'CRIT_DMG',
  CRIT_Rate = 'CRIT_Rate',
  Healing = 'Healing',
  Healing_Bonus = 'Healing_Bonus',
  Energy_Recharge = 'Energy_Recharge',
  Recharge = 'Recharge',
  ATK = 'ATK',
  DEF = 'DEF',
  Physical_DMG = 'Physical_DMG',
  Geo_DMG = 'Geo_DMG',
  Elemental_Mastery = 'Element_Mastery',
  Electro_DMG = 'Electro_DMG',
  HP = 'HP',
  Anemo_DMG = 'Anemo_DMG',
  Hydro_DMG = 'Hydro_DMG',
  Physical_DMG_Bonus = 'Physical_DMG_Bonus',
  Base_HP = 'Base_HP',
  No_Data = 'No_Data',
  None = 'None',

  Party = 'Party',
  Party_Save_Text = 'Party_Save_Text',
  Party_Save_Text_Placeholder = 'Party_Save_Text_Placeholder',
  Tangled_Guardian = 'Tangled_Guardian',
  Fire_Of_Passion = 'Fire_Of_Passion',
  Healing_Water = 'Healing_Water',
  Swift_Wind = 'Swift_Wind',
  Energetic_Lightning = 'Energetic_Lightning',
  Crushing_Ice = 'Crushing_Ice',
  Floating_Rock = 'Floating_Rock',
  Active_Party_Buff = 'Active_Party_Buff',
  Active_Artifact_Buff = 'Active_Artifact_Buff',
  Character_Stat = 'Character_Stat',
  Character_HP = 'Character_HP',
  Character_ATK = 'Character_ATK',
  Character_DEF = 'Character_DEF',
  Character_Additional = 'Character_Additional',
  Save_Party_Image = 'Save_Party_Image',
  Party_List = 'Party_List',
  Reset_Party = 'Reset_Party',
  Image_Save_Question = 'Image_Save_Question',
  Party_Name_Blank = 'Party_Name_Blank',
  Party_Delete_Question = 'Party_Delete_Question',
  Party_Reset_Question = 'Party_Reset_Question',
  Party_Override_Question = 'Party_Override_Question',
  Party_Name_Overlap = 'Party_Name_Overlap',
  Party_Blank_Space = 'Party_Blank_Space',

  Daily_Abyssal_MainScreen = 'Daily_Abyssal_MainScreen',
  Change_Server = 'Change_Server',
  Daily_Character = 'Daily_Character',
  Daily_Weapon = 'Daily_Weapon',
  Freedom = 'Freedom',
  Resistance = 'Resistance',
  Ballad = 'Ballad',
  Prosperity = 'Prosperity',
  Diligence = 'Diligence',
  Gold = 'Gold',
  Decarabian = 'Decarabian',
  Boreal_Wolf = 'Boreal_Wolf',
  Dandelion_Gladiator = 'Dandelion_Gladiator',
  Guyun = 'Guyun',
  Elixir = 'Elixir',
  Aerosiderite = 'Aerosiderite',

  Map = 'Map'
}

export type KeyLang = keyof typeof Lang;

const languages = {
  [LangCode.en]: {
    translation: require('./en-us.json')
  },
  [LangCode.ko]: {
    translation: require('./ko-kr.json')
  }
};

const options = {
  order: ['querystring', 'navigator'],
  lookupQuerystring: 'lng'
};
const detactor = new Detactor();
detactor.init(options);

i18n.use(detactor).use(initReactI18next).init({
  resources: languages,
  fallbackLng: LangCode.en
});

function getCurrentLanguage(): LangCode {
  return i18n.language as LangCode;
}

function trans(key: Lang): string {
  return i18n.t(key);
}

function changeLang(code: LangCode): void {
  i18n.changeLanguage(code);
}

export { i18n, Lang, LangCode, getCurrentLanguage, trans, changeLang };
