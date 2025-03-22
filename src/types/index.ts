export {};
declare global {
  //@ts-ignore
  type Element = 'fire' | 'water' | 'thunder' | 'ice' | 'dragon';

  interface Monster {
    name: string;
    weaponElements: Element[];
    resistElements: Element[];
    items: string[];
    skills: string[];
    abilities: string[];
    loadouts: Loadouts;
  }

  interface Loadouts {
    items: string;
    armor: string;
    palicoArmor: string;
  }
}
