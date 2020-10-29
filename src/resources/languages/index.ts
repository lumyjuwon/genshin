import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export enum LangCode {
  en = 'en',
  ko = 'ko'
}

export enum Lang {
  Main_Logo = 'Main_Logo',
  Main_Title = 'Main_Title',
  Main_Wish_Desc = 'Main_Wish_Desc',
  Main_Party_Desc = 'Main_Party_Desc',
  Main_Privacy_Policy = 'Main_Privacy_Policy',
  Main_Terms_Of_Service = 'Main_Terms_Of_Service',

  Gacha = 'Gacha',
  Character_Event_Wish = 'Character_Event_Wish',
  Weapon_Event_Wish = 'Weapon_Event_Wish',
  Standard_Wish = 'Standard_Wish',
  Novice_Wishes = 'Novice_Wishes',
  Blank_Arrange_View = "Blank_Arrange_View",
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
  Help_Rules = 'Help_Rules',
  Help_Rules_Desc = 'Help_Rules_Desc',
  Go_To_Wiki = 'Go_To_Wiki',
  Help_Item = 'Help_Item',
  Help_Content = 'Help_Content',
  Five_Pick_Up = 'Five_Pick_Up',
  Four_Pick_Up = 'Four_Pick_Up',
  Help_Warning = 'Help_Warning',

  Klee = 'Klee',
  Diluc = 'Diluc',
  Jean = 'Jean',
  Qiqi = 'Qiqi',
  Mona = 'Mona',
  Traveler = 'Traveler',
  Venti = 'Venti',
  Keqing = 'Keqing',
  Xiao = 'Xiao',
  Lisa = 'Lisa',
  Kaeya = 'Kaeya',
  Amber = 'Amber',
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

  Filter_Rarity = 'Filter_Rarity',
  Filter_Character = 'Filter_Character',
  Filter_Weapon = 'Filter_Weapon',
  Filter_PickUp = 'Filter_PickUp',

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
  Active_Party_Buff = 'Active_Party_Buff'
}

const languages = {
  [LangCode.en]: {
    translation: require('./en-us.json')
  },
  [LangCode.ko]: {
    translation: require('./ko-kr.json')
  }
};

i18n.use(initReactI18next).init({
  resources: languages,
  lng: LangCode.ko,
  fallbackLng: LangCode.ko,
  debug: true
});

export function trans(key: Lang): string {
  return i18n.t(key);
}

export function changeLang(code: LangCode): void {
  i18n.changeLanguage(code);
}

export { i18n };
