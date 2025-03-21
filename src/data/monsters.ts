type Element = 'fire' | 'water' | 'thunder' | 'ice' | 'dragon';

interface Monster {
  name: string;
  weaponElements: Element[];
  resistElements: Element[];
  items: string[];
  skills: string[];
  abilities: string[];
}

export const monsters: Monster[] = [
  {
    name: 'Chatacabra',
    weaponElements: ['thunder', 'ice'],
    resistElements: [],
    items: [],
    skills: [],
    abilities: ['TODO'],
  },
  {
    name: 'Quematrice',
    weaponElements: ['water'],
    resistElements: ['fire'],
    items: ['nulberry'],
    skills: ['fire resist', 'blight resist'],
    abilities: ['TODO'],
  },
  {
    name: 'Lala Barina',
    weaponElements: ['fire'],
    resistElements: [],
    items: ['TODO'],
    skills: ['TODO'],
    abilities: ['TODO'],
  },
  {
    name: 'Congalala',
    weaponElements: ['fire', 'ice'],
    resistElements: ['TODO'],
    items: ['antidote', 'deodorant'],
    skills: [
      'poison resist',
      'paralysis resist',
      'blast resist',
      'stench resist',
    ],
    abilities: ['TODO'],
  },
  {
    name: 'Balahara',
    weaponElements: ['thunder'],
    resistElements: ['water'],
    items: ['nulberry'],
    skills: ['water resist', 'blight resist'],
    abilities: ['TODO'],
  },
  {
    name: 'Doshaguma',
    weaponElements: ['fire', 'thunder'],
    resistElements: [],
    items: ['TODO'],
    skills: ['TODO'],
    abilities: ['TODO'],
  },
  {
    name: 'Uth Duna',
    weaponElements: ['thunder'],
    resistElements: ['water'],
    items: ['nulberry'],
    skills: ['water resist', 'blight resist'],
    abilities: ['TODO'],
  },
  {
    name: 'Rompopolo',
    weaponElements: ['water'],
    resistElements: [],
    items: ['antidote'],
    skills: ['poison resist'],
    abilities: ['TODO'],
  },
  {
    name: 'Rey Dau',
    weaponElements: ['TODO'],
    resistElements: ['TODO'],
    items: ['TODO'],
    skills: ['TODO'],
    abilities: ['TODO'],
  },
  {
    name: 'Nerscylla',
    weaponElements: ['TODO'],
    resistElements: ['TODO'],
    items: ['TODO'],
    skills: ['TODO'],
    abilities: ['TODO'],
  },
  {
    name: 'Hirabami',
    weaponElements: ['TODO'],
    resistElements: ['TODO'],
    items: ['TODO'],
    skills: ['TODO'],
    abilities: ['TODO'],
  },
  {
    name: 'Ajarakan',
    weaponElements: ['TODO'],
    resistElements: ['TODO'],
    items: ['TODO'],
    skills: ['TODO'],
    abilities: ['TODO'],
  },
  {
    name: 'Nu Udra',
    weaponElements: ['TODO'],
    resistElements: ['TODO'],
    items: ['TODO'],
    skills: ['TODO'],
    abilities: ['TODO'],
  },
  {
    name: 'Guardian Doshaguma',
    weaponElements: ['fire', 'thunder', 'ice', 'dragon'],
    resistElements: ['TODO'],
    items: [
      'earplugs',
      'adamant seed',
      'armorskin',
      'mega armorskin',
      'hardshell powder',
    ],
    skills: ['tremor resist', 'iron skin'],
    abilities: ['TODO'],
  },
  {
    name: 'Guardian Rathalos',
    weaponElements: ['TODO'],
    resistElements: ['TODO'],
    items: ['TODO'],
    skills: ['TODO'],
    abilities: ['TODO'],
  },
  {
    name: 'Jin Dahaad',
    weaponElements: ['fire'],
    resistElements: ['TODO'],
    items: ['TODO'],
    skills: ['TODO'],
    abilities: ['TODO'],
  },
  {
    name: 'Guardian Ebony Odogaron',
    weaponElements: ['water'],
    resistElements: ['TODO'],
    items: ['TODO'],
    skills: ['TODO'],
    abilities: ['TODO'],
  },
  {
    name: 'Xu Wu',
    weaponElements: ['ice'],
    resistElements: [],
    items: ['TODO'],
    skills: ['TODO'],
    abilities: ['TODO'],
  },
  {
    name: 'Guardian Arkveld',
    weaponElements: ['dragon'],
    resistElements: ['TODO'],
    items: ['TODO'],
    skills: ['TODO'],
    abilities: ['TODO'],
  },
  {
    name: 'Zoh Shia',
    weaponElements: ['dragon'],
    resistElements: ['TODO'],
    items: ['TODO'],
    skills: ['TODO'],
    abilities: ['TODO'],
  },
  {
    name: 'Yian Kut-ku',
    weaponElements: ['water', 'thunder', 'ice'],
    resistElements: ['TODO'],
    items: ['TODO'],
    skills: ['TODO'],
    abilities: ['TODO'],
  },
  {
    name: 'Gypceros',
    weaponElements: ['fire', 'ice'],
    resistElements: [],
    items: ['antidote'],
    skills: ['windproof', 'poison resist', 'stun resist'],
    abilities: ['Minor Wind Pressure', 'Poison', 'Flash'],
  },
  {
    name: 'Rathian',
    weaponElements: ['thunder', 'dragon'],
    resistElements: ['fire'],
    items: ['earplugs', 'nulberry', 'antidote'],
    skills: ['windproof', 'fire resist', 'blight resist', 'poison resist'],
    abilities: ['TODO'],
  },
  {
    name: 'Rathalos',
    weaponElements: ['TODO'],
    resistElements: ['TODO'],
    items: ['TODO'],
    skills: ['TODO'],
    abilities: ['TODO'],
  },

  // {
  //   name:'Template',
  //   weaponElements: ['TODO'],
  //   resistElements: ['TODO'],
  //   items: ['TODO'],
  //   skills: ['TODO'],
  //   abilities:['TODO']
  // }
];

export const monsterNameList = monsters.map((monster) => monster.name);
