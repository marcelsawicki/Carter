import { Injectable } from '@angular/core';

export interface Element {
  symbol: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  private elements: Element[] = [
    { symbol: 'H', name: 'Wodór' },
    { symbol: 'He', name: 'Hel' },
    { symbol: 'Li', name: 'Lit' },
    { symbol: 'Be', name: 'Beryl' },
    { symbol: 'B', name: 'Bor' },
    { symbol: 'C', name: 'Węgiel' },
    { symbol: 'N', name: 'Azot' },
    { symbol: 'O', name: 'Tlen' },
    { symbol: 'F', name: 'Fluor' },
    { symbol: 'Ne', name: 'Neon' },
    { symbol: 'Na', name: 'Sód' },
    { symbol: 'Mg', name: 'Magnez' },
    { symbol: 'Al', name: 'Glin' },
    { symbol: 'Si', name: 'Krzem' },
    { symbol: 'P', name: 'Fosfor' },
    { symbol: 'S', name: 'Siarka' },
    { symbol: 'Cl', name: 'Chlor' },
    { symbol: 'Ar', name: 'Argon' },
    { symbol: 'K', name: 'Potas' },
    { symbol: 'Ca', name: 'Wapń' },
    { symbol: 'Sc', name: 'Skand' },
    { symbol: 'Ti', name: 'Tytan' },
    { symbol: 'V', name: 'Vanad' },
    { symbol: 'Cr', name: 'Chrom' },
    { symbol: 'Mn', name: 'Mangan' },
    { symbol: 'Fe', name: 'Żelazo' },
    { symbol: 'Co', name: 'Kobalt' },
    { symbol: 'Ni', name: 'Nikiel' },
    { symbol: 'Cu', name: 'Miedź' },
    { symbol: 'Zn', name: 'Cynk' },
    { symbol: 'Ga', name: 'Gall' },
    { symbol: 'Ge', name: 'German' },
    { symbol: 'As', name: 'Arsem' },
    { symbol: 'Se', name: 'Selen' },
    { symbol: 'Br', name: 'Brom' },
    { symbol: 'Kr', name: 'Krypton' },
    { symbol: 'Rb', name: 'Rubid' },
    { symbol: 'Sr', name: 'Stront' },
    { symbol: 'Y', name: 'Itr' },
    { symbol: 'Zr', name: 'Cyrkon' },
    { symbol: 'Nb', name: 'Niob' },
    { symbol: 'Mo', name: 'Molibden' },
    { symbol: 'Tc', name: 'Technet' },
    { symbol: 'Ru', name: 'Ruten' },
    { symbol: 'Rh', name: 'Rod' },
    { symbol: 'Pd', name: 'Paladyn' },
    { symbol: 'Ag', name: 'Srebro' },
    { symbol: 'Cd', name: 'Kadm' },
    { symbol: 'In', name: 'Ind' },
    { symbol: 'Sn', name: 'Ołów' },
    { symbol: 'Sb', name: 'Antymon' },
    { symbol: 'Te', name: 'Tellur' },
    { symbol: 'I', name: 'Jod' },
    { symbol: 'Xe', name: 'Ksenon' },
    { symbol: 'Cs', name: 'Cezy' },
    { symbol: 'Ba', name: 'Bar' },
    { symbol: 'La', name: 'Lantan' },
    { symbol: 'Ce', name: 'Cer' },
    { symbol: 'Pr', name: 'Praseodym' },
    { symbol: 'Nd', name: 'Neodym' },
    { symbol: 'Pm', name: 'Promet' },
    { symbol: 'Sm', name: 'Samaryj' },
    { symbol: 'Eu', name: 'Europ' },
    { symbol: 'Gd', name: 'Gadolin' },
    { symbol: 'Tb', name: 'Terb' },
    { symbol: 'Dy', name: 'Dysproz' },
    { symbol: 'Ho', name: 'Holmi' },
    { symbol: 'Er', name: 'Erb' },
    { symbol: 'Tm', name: 'Tul' },
    { symbol: 'Yb', name: 'Iterbi' },
    { symbol: 'Lu', name: 'Lutet' },
    { symbol: 'Hf', name: 'Hafn' },
    { symbol: 'Ta', name: 'Tantal' },
    { symbol: 'W', name: 'Wolfram' },
    { symbol: 'Re', name: 'Ren' },
    { symbol: 'Os', name: 'Os' },
    { symbol: 'Ir', name: 'Iryd' },
    { symbol: 'Pt', name: 'Platyna' },
    { symbol: 'Au', name: 'Złoto' },
    { symbol: 'Hg', name: 'Rtęć' },
    { symbol: 'Tl', name: 'Tal' },
    { symbol: 'Pb', name: 'Ołów' },
    { symbol: 'Bi', name: 'Bizmut' },
    { symbol: 'Po', name: 'Polon' },
    { symbol: 'At', name: 'Astat' },
    { symbol: 'Rn', name: 'Radon' },
    { symbol: 'Fr', name: 'Franc' },
    { symbol: 'Ra', name: 'Radium' },
    { symbol: 'Ac', name: 'Aktyn' },
    { symbol: 'Th', name: 'Tor' },
    { symbol: 'Pa', name: 'Protaktyn' },
    { symbol: 'U', name: 'Uran' },
    { symbol: 'Np', name: 'Neptun' },
    { symbol: 'Pu', name: 'Pluton' },
    { symbol: 'Am', name: 'Ameryk' },
    { symbol: 'Cm', name: 'Kurium' },
    { symbol: 'Bk', name: 'Berkel' },
    { symbol: 'Cf', name: 'Kaliforn' },
    { symbol: 'Es', name: 'Einstein' },
    { symbol: 'Fm', name: 'Ferm' },
    { symbol: 'Md', name: 'Mendelew' },
    { symbol: 'No', name: 'Nobel' },
    { symbol: 'Lr', name: 'Lawrenc' },
    { symbol: 'Rf', name: 'Rutherford' },
    { symbol: 'Db', name: 'Dubni' },
    { symbol: 'Sg', name: 'Seaborg' },
    { symbol: 'Bh', name: 'Bohr' },
    { symbol: 'Hs', name: 'Hass' },
    { symbol: 'Mt', name: 'Meitner' },
    { symbol: 'Ds', name: 'Darmstadt' },
    { symbol: 'Rg', name: 'Roentgen' },
    { symbol: 'Cn', name: 'Kopernik' },
    { symbol: 'Nh', name: 'Nihon' },
    { symbol: 'Fl', name: 'Flerow' },
    { symbol: 'Mc', name: 'Moscow' },
    { symbol: 'Lv', name: 'Livermor' },
    { symbol: 'Ts', name: 'Tenness' },
    { symbol: 'Og', name: 'Oganesson' }
  ];

  constructor() { }

  getRandomElements(count: number): Element[] {
    const shuffled = this.elements.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  getRandomQuestion(): { symbol: string, options: string[], correctAnswer: string } {
    const randomElement = this.getRandomElements(1)[0];
    const otherElements = this.getRandomElements(2).map(e => e.name);

    const options = [randomElement.name, ...otherElements].sort(() => 0.5 - Math.random());

    return {
      symbol: randomElement.symbol,
      options: options,
      correctAnswer: randomElement.name
    };
  }
}