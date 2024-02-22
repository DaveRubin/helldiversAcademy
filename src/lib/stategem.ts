import type { Stratagem } from "./types";
import _ from 'lodash';

const dirMap = {
  "icons/2BC55527EC20C05D73CBEC9F3EA3659C099D4AB8.png": "Up",
  "icons/A30A455C1EF5BF8740045A7604D79FFD2AC4E32C.png": "Down",
  "icons/9BB08C279B93D1ECD6E7387386FFFC22B90A8BFC.png": "Right",
  "icons/31B94090BCCDC70ADACDEBED9E684B25EA9DCD9E.png": "Left",
}

export const stratagems: Stratagem[] = [
  {
    "icon": "icons/4EEA9F50CAE2CBDACB5A71CDFDE0381FB3155F13.png",
    "text": "Reinforcement",
    "input": [
      "Up",
      "Down",
      "Right",
      "Left",
      "Up"
    ],
    "section": "General"
  },
  {
    "icon": "icons/E25EA5FBE68DB6291A41300BABB1FEC5059EEE56.png",
    "text": "Resupply",
    "input": [
      "Down",
      "Down",
      "Up",
      "Right"
    ],
    "section": "General",
    "function": "Drop ammo, grenades, and stim pack supplies at location."
  },
  {
    "icon": "icons/9BA70D7AEEED8FA05A5CC3E8DC934CF55B873577.png",
    "text": "SOS Beacon",
    "input": [
      "Up",
      "Down",
      "Right",
      "Up"
    ],
    "section": "General",
    "function": "Sends out a call for aid from other Helldivers that are online."
  },
  {
    icon: '',
    "text": "SEAF Artillery",
    "input": [
      "Right",
      "Up",
      "Up",
      "Down"
    ],
    "section": "General"
  },
  {
    "icon": "icons/BA8DE43C9F2A2F57114255A74E0BC6EC9C4B48BE.png",
    "text": "Hellbomb",
    "input": [
      "Down",
      "Up",
      "Left",
      "Down",
      "Up",
      "Right",
      "Down",
      "Up"
    ],
    "section": "General"
  },
  {
    icon: '',
    "text": "Super Earth Flag",
    "input": [
      "Down",
      "Up",
      "Down",
      "Up"
    ],
    "section": "General"
  },
  {
    "icon": "icons/C6780E7E3EF7725A861DDE7CA287564876789993.png",
    "text": "Machine Gun",
    "input": [
      "Down",
      "Left",
      "Down",
      "Up",
      "Right"
    ],
    "section": "Patriotic Administration Center Stratagem Codes",
    "function": "Quick-firing support weapon, best used when stationary."
  },
  {
    "icon": "icons/8888483F30AD90726D014C6E0E774EE322D232A3.png",
    "text": "Anti-Material Rifle",
    "input": [
      "Down",
      "Left",
      "Right",
      "Up",
      "Down"
    ],
    "section": "Patriotic Administration Center Stratagem Codes",
    "function": "Works well against light vehicle armor at longer distances."
  },
  {
    "icon": "icons/5352BA36BA7C15E10D376781BA911E2CBF4FE80C.png",
    "text": "Stalwart",
    "input": [
      "Down",
      "Left",
      "Down",
      "Up",
      "Up",
      "Left"
    ],
    "section": "Patriotic Administration Center Stratagem Codes",
    "function": "A more compact machine gun that is quicker to reload."
  },
  {
    "icon": "icons/454F51D73C804EF6B87865C8B1933933EC9B605F.png",
    "text": "Expendable Anti-Tank",
    "input": [
      "Down",
      "Down",
      "Left",
      "Up",
      "Right"
    ],
    "section": "Patriotic Administration Center Stratagem Codes",
    "function": "Single-use support weapon meant for vehicle armor for early-game usage."
  },
  {
    "icon": "icons/A43070B0E37ADFA3A3E7A34DF80917E2094E145F.png",
    "text": "Recoiless Rifle",
    "input": [
      "Down",
      "Left",
      "Right",
      "Right",
      "Left"
    ],
    "section": "Patriotic Administration Center Stratagem Codes",
  },
  {
    "icon": "icons/7030C0E9571495003AC159A48B8DF07798A643DB.png",
    "text": "Flamethrower",
    "input": [
      "Down",
      "Left",
      "Up",
      "Down",
      "Up"
    ],
    "section": "Patriotic Administration Center Stratagem Codes",
    "function": "Incendiary prowess meant for close-range encounters."
  },
  {
    "icon": "icons/341513D4FEB5B6C494A08E6B97D04705E491A386.png",
    "text": "Auto-Canon",
    "input": [
      "Down",
      "Left",
      "Down",
      "Up",
      "Up",
      "Right"
    ],
    "section": "Patriotic Administration Center Stratagem Codes",
  },
  {
    "icon": "icons/544CD7C5B04599AAE86B14916E2A845AC41A0B67.png",
    "text": "Railgun",
    "input": [
      "Down",
      "Right",
      "Down",
      "Up",
      "Left",
      "Right"
    ],
    "section": "Patriotic Administration Center Stratagem Codes",
    "function": "Designed for penetrating heavier armor."
  },
  {
    "icon": "icons/FC6AFA2B95A26C22DD9776EF8F71CD84F9973272.png",
    "text": "Spear",
    "input": [
      "Down",
      "Down",
      "Up",
      "Down",
      "Down"
    ],
    "section": "Patriotic Administration Center Stratagem Codes",
    "function": "Homing missile that is best used against tanks."
  },
  {
    "icon": "icons/C048CE42DB5A0F96185C94A12CEE725E88DF296E.png",
    "text": "Orbital Gatling Barrage",
    "input": [
      "Right",
      "Down",
      "Left",
      "Up",
      "Up"
    ],
    "section": "Orbital Cannons Stratagem Codes",
    "function": "Defensive anti-personnel minefield."
  },
  {
    "icon": "icons/14CADBDA8707CDD1A24C7A28873123769CC3FC0F.png",
    "text": "Orbital Airburst Strike",
    "input": [
      "Right",
      "Right",
      "Right"
    ],
    "section": "Orbital Cannons Stratagem Codes",
    "function": "Deadly rain of shrapnel but ineffective against heavy armor."
  },
  {
    "icon": "icons/894A03566E9E187580A30125C4C1718B88158733.png",
    "text": "Orbital 120MM HE Barrage",
    "input": [
      "Right",
      "Right",
      "Down",
      "Left",
      "Right",
      "Down"
    ],
    "section": "Orbital Cannons Stratagem Codes",
    "function": "A precise artillery salvo that targets a small area."
  },
  {
    "icon": "icons/0C48AEE76E67F599BACAD669F620E1E646D0D2FD.png",
    "text": "Orbital 380MM HE Barrage",
    "input": [
      "Right",
      "Down",
      "Up",
      "Up",
      "Left",
      "Down",
      "Down"
    ],
    "section": "Orbital Cannons Stratagem Codes",
    "function": "Used to blanket a large area with explosive shells."
  },
  {
    "icon": "icons/AA8917EEA49E2F930C41DCA48D162D2EE2AD6F6A.png",
    "text": "Orbital Walking Barrage",
    "input": [
      "Right",
      "Down",
      "Right",
      "Down",
      "Right",
      "Down"
    ],
    "section": "Orbital Cannons Stratagem Codes",
    "function": "A linear artillery barrage that moves forward in intervals, which will help force enemies out of cover."
  },
  {
    "icon": "icons/BD3C20A2D34D40A6BEB6A49D1E174517771D8293.png",
    "text": "Orbital Laser",
    "input": [
      "Right",
      "Down",
      "Up",
      "Right",
      "Down"
    ],
    "section": "Orbital Cannons Stratagem Codes",
  },
  {
    "icon": "icons/31514EE89DD636825D58B64F5EE982E146040004.png",
    "text": "Orbital Railgun Strike",
    "input": [
      "Right",
      "Up",
      "Down",
      "Down",
      "Right"
    ],
    "section": "Orbital Cannons Stratagem Codes",
  },
  {
    "icon": "icons/9106102211F5E3B12663B5632062B7CCF54D556D.png",
    "text": "Eagle Straffing Run",
    "input": [
      "Up",
      "Right",
      "Right"
    ],
    "section": "Hangar Stratagem Codes",
  },
  {
    "icon": "icons/A113428F9B062B96925BDFF125C838C5432DE508.png",
    "text": "Eagle Airstrike",
    "input": [
      "Up",
      "Right",
      "Down",
      "Right"
    ],
    "section": "Hangar Stratagem Codes",
    "function": "Utilizes a barrage of bombs to clear an area."
  },
  {
    "icon": "icons/C6C8186A827E5EAE0484C141C35F5ACE8D626897.png",
    "text": "Eagle Cluster Bomb",
    "input": [
      "Up",
      "Right",
      "Down",
      "Down",
      "Right"
    ],
    "section": "Hangar Stratagem Codes",
    "function": "Clustered explosives for smaller targets."
  },
  {
    "icon": "icons/29AEE6F7F7BD5432DEF3C93BC81B729D1B1D1195.png",
    "text": "Eagle Napalm Strike",
    "input": [
      "Up",
      "Right",
      "Down",
      "Up"
    ],
    "section": "Hangar Stratagem Codes",
  },
  {
    "icon": "icons/B0AA61F297ECA1FE24AF0200A5AB2D275235172A.png",
    "text": "Jump Pack",
    "input": [
      "Down",
      "Up",
      "Up",
      "Down",
      "Up"
    ],
    "section": "Hangar Stratagem Codes",
    "function": "A tool to help Helldivers get height and out of danger."
  },
  {
    "icon": "icons/03D4E880E6BF7D415FBC647096885B54F3560D06.png",
    "text": "Eagle Smoke Strike",
    "input": [
      "Up",
      "Right",
      "Up",
      "Down"
    ],
    "section": "Hangar Stratagem Codes",
    "function": "Creates smoke that helps to block enemy line of sight."
  },
  {
    "icon": "icons/B079900C49E017289EFB70E38B8EAD7DCFF461A4.png",
    "text": "Eagle 110MM Rocket Pods",
    "input": [
      "Up",
      "Right",
      "Up",
      "Left"
    ],
    "section": "Hangar Stratagem Codes",
    "function": "A barrage of rocket pods."
  },
  {
    "icon": "icons/67B74365421CEA30557BD1BC457CB7D25374B207.png",
    "text": "Eagle 500KG Bomb",
    "input": [
      "Up",
      "Right",
      "Down",
      "Down",
      "Down"
    ],
    "section": "Hangar Stratagem Codes",
    "function": "Large, destructive bomb that destroys everything within range."
  },
  {
    "icon": "icons/72BE0A12AC4E8F3885443B2CFA6609655AF4BBA2.png",
    "text": "Eagle Rearm",
    "input": [
      "Up",
      "Up",
      "Left",
      "Up",
      "Right"
    ],
    "section": "Hangar Stratagem Codes",
  },
  {
    "icon": "icons/CDC385D48A1018F8BC96DF2BABEAE948257DB523.png",
    "text": "Orbital Precision Strike",
    "input": [
      "Right",
      "Right",
      "Up"
    ],
    "section": "Bridge Stratagem Codes",
    "function": "A single precision shot."
  },
  {
    "icon": "icons/7696FD8F981D7D7E56AA7ADB4494897180B83427.png",
    "text": "Orbital Gas Strike",
    "input": [
      "Right",
      "Right",
      "Down",
      "Right"
    ],
    "section": "Bridge Stratagem Codes",
    "function": "Releases cloud of corrosive gas, harmful to both organic and robotic lifeforms."
  },
  {
    "icon": "icons/7669B324456C754AD3DB2067E77EA67E8E5423C0.png",
    "text": "Orbital EMS Strike",
    "input": [
      "Right",
      "Right",
      "Left",
      "Down"
    ],
    "section": "Bridge Stratagem Codes",
    "function": "Stuns enemies within its radius, leaving them vulnerable."
  },
  {
    "icon": "icons/1869F61BB24898CC057B53C4CB84ABF7E3093C58.png",
    "text": "Orbital Smoke Strike",
    "input": [
      "Right",
      "Right",
      "Down",
      "Up"
    ],
    "section": "Bridge Stratagem Codes",
    "function": "Drops a thick smoke screen to block enemies’ sight."
  },
  {
    "icon": "icons/C44FCC3B7BF91EE9D1464AA77F0CB50F7CCACD2F.png",
    "text": "HMG Emplacement",
    "input": [
      "Down",
      "Up",
      "Left",
      "Right",
      "Right",
      "Left"
    ],
    "section": "Bridge Stratagem Codes",
    "function": "Drops a fortification that can be manned to wreak havoc on light-armored targets."
  },
  {
    "icon": "icons/EAD49892D8BF6B73C3ECCDA028C66EE1581B6F12.png",
    "text": "Shield Generator",
    "input": [
      "Down",
      "Down",
      "Left",
      "Right",
      "Left",
      "Right"
    ],
    "section": "Bridge Stratagem Codes",
  },
  {
    "icon": "icons/6B9AF006D9062E7907F8E8DB9EA048DEF1DF57E7.png",
    "text": "Tesla Tower",
    "input": [
      "Down",
      "Up",
      "Right",
      "Up",
      "Left",
      "Right"
    ],
    "section": "Bridge Stratagem Codes",
    "function": "Stationary structure that shoots out powerful electrical charges at close range."
  },
  {
    "icon": "icons/D119A16C330A2B44E9B5E728FF2950E3FC0C3A0D.png",
    "text": "Anti-Personnel Minefield",
    "input": [
      "Down",
      "Left",
      "Up",
      "Right"
    ],
    "section": "Engineering Bay Stratagem Codes",
    "function": "Halts enemy advances with blankets of mines. Triggers when targets are nearby."
  },
  {
    "icon": "icons/1CB69C49DA55797DAEFA494BF55A431D1126B4FB.png",
    "text": "Supply Pack",
    "input": [
      "Down",
      "Left",
      "Down",
      "Up",
      "Up",
      "Down"
    ],
    "section": "Engineering Bay Stratagem Codes",
    "function": "Supply boxes with ammunition and a backpack to distribute to fellow Helldivers."
  },
  {
    "icon": "icons/B762ED55372B8CC933C7977A60501AFCB5C5685D.png",
    "text": "Grenade Launcher",
    "input": [
      "Down",
      "Left",
      "Up",
      "Left",
      "Down"
    ],
    "section": "Engineering Bay Stratagem Codes",
    "function": "Effective against armored infantry, but not for vehicle armor or fortified buildings)."
  },
  {
    "icon": "icons/4609132E03AC8FCC13B8C356265A6E9F8211920A.png",
    "text": "Laser Canon",
    "input": [
      "Down",
      "Left",
      "Down",
      "Up",
      "Left"
    ],
    "section": "Engineering Bay Stratagem Codes",
  },
  {
    "icon": "icons/A3FACD043040310A797DF50A7548DC3EDA6EEE72.png",
    "text": "Incendiary Mines",
    "input": [
      "Down",
      "Left",
      "Left",
      "Down"
    ],
    "section": "Engineering Bay Stratagem Codes",
    "function": "Halts enemy advances with blankets of incendiary mines. Triggers when targets are nearby."
  },
  {
    "icon": "icons/5F792F26C1BC3F17C2F9F45462EA83CDEFFEBC73.png",
    "text": "Guard Dog Rover",
    "input": [
      "Down",
      "Up",
      "Left",
      "Up",
      "Right",
      "Right"
    ],
    "section": "Engineering Bay Stratagem Codes",
  },
  {
    "icon": "icons/39B041C552917393A33CEE32BB7E4BCFD67194D9.png",
    "text": "Balistic Shield",
    "input": [
      "Down",
      "Left",
      "Down",
      "Down",
      "Up",
      "Left"
    ],
    "section": "Engineering Bay Stratagem Codes",
  },
  {
    "icon": "icons/D976855B0BCDC623FFDA249490C24C9EE634F6CB.png",
    "text": "Arc Thrower",
    "input": [
      "Down",
      "Right",
      "Down",
      "Up",
      "Left",
      "Left"
    ],
    "section": "Engineering Bay Stratagem Codes",
  },
  {
    "icon": "icons/760DE8B213BBE61259CE194FD3997B6D1AB22CD4.png",
    "text": "Shield Generator Pack",
    "input": [
      "Down",
      "Up",
      "Left",
      "Right",
      "Left",
      "Right"
    ],
    "section": "Engineering Bay Stratagem Codes",
    "function": "Generates a shield to protect players from high-speed projectiles, very useful in the latter stages."
  },
  {
    "icon": "icons/ABAA3025BBB48E814A19237AA447A17DEB1C98AB.png",
    "text": "Machine Gun Sentry",
    "input": [
      "Down",
      "Up",
      "Right",
      "Right",
      "Up"
    ],
    "section": "Robotic Workshop Stratagem Codes",
    "function": "Automated machine gun turret that can kill friend and foe."
  },
  {
    "icon": "icons/3B5B532E8F3E5C75C1602452B898EC1937D19E54.png",
    "text": "Gatling Sentry",
    "input": [
      "Down",
      "Up",
      "Right",
      "Left"
    ],
    "section": "Robotic Workshop Stratagem Codes",
    "function": "Automated turret with an even higher rate of fire."
  },
  {
    "icon": "icons/F28CE48798376AA722380E3A184C0C4952956943.png",
    "text": "Mortar Sentry",
    "input": [
      "Down",
      "Up",
      "Right",
      "Right",
      "Down"
    ],
    "section": "Robotic Workshop Stratagem Codes",
    "function": "Turret that uses powerful shells, effective for long range and targets behind cover."
  },
  {
    "icon": "icons/D098656018679A46BF1069A0F6AA761DC23D83D6.png",
    "text": "Guard Dog",
    "input": [
      "Down",
      "Up",
      "Left",
      "Up",
      "Right",
      "Down"
    ],
    "section": "Robotic Workshop Stratagem Codes",
  },
  {
    "icon": "icons/6EB483D6C35F11EE9B4C5DC36CC75C0D6C74F67D.png",
    "text": "Autocanon Sentry",
    "input": [
      "Down",
      "Up",
      "Right",
      "Up",
      "Left",
      "Up"
    ],
    "section": "Robotic Workshop Stratagem Codes",
  },
  {
    "icon": "icons/922D90F493CB8C03FE8607A393A41C9B1C68ED83.png",
    "text": "Rocket Sentry",
    "input": [
      "Down",
      "Up",
      "Right",
      "Right",
      "Left"
    ],
    "section": "Robotic Workshop Stratagem Codes",
    "function": "Automated turret, effective against armored targets, will always target larger enemies."
  },
  {
    "icon": "icons/F28CE48798376AA722380E3A184C0C4952956943.png",
    "text": "EMS Mortar Sentry",
    "input": [
      "Down",
      "Up",
      "Right",
      "Down",
      "Right"
    ],
    "section": "Robotic Workshop Stratagem Codes",
    "function": "Long-ranged turret that fires static field generators to slow enemies down."
  }
]

