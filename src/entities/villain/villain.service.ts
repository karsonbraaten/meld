import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

import { Villain } from './villain'

@Injectable({
  providedIn: 'root'
})
export class VillainService {
  constructor() {}

  list(): Observable<Villain[]> {
    return of(villains)
  }
}

const villains: Villain[] = [
  {
    name: 'Chameleon',
    alter_ego: 'Dmitri Anatoly Nikolayevich Smerdyakov',
    first_appearance: '#1 (March 1963)[3][9]',
    creator: 'Stan Lee[3][9], Steve Ditko[3][9]',
    description: 'Master of disguise. Can make himself look like anybody.[3][9]'
  },
  {
    name: 'Vulture',
    alter_ego: 'Adrian Toomes, Blackie Drago',
    first_appearance: '#2 (May 1963)[10][11]',
    creator: 'Stan Lee[10][12], Steve Ditko[10]',
    description:
      'An inventor that created mechanical wings that he harnessed to himself to let him fly and have superhuman strength.[13]'
  },
  {
    name: 'Tinkerer',
    alter_ego: 'Phineas Mason',
    first_appearance: '#2 (May 1963)[14]',
    creator: 'Stan Lee, [15] Steve Ditko[15]',
    description:
      'Gifted in engineering and creating gadgets from just about anything.[15]'
  },
  {
    name: 'Doctor Octopus',
    alter_ego: 'Doctor Otto Gunther Octavius',
    first_appearance: '#3 (July 1963)[9]',
    creator: 'Stan Lee[16][17], Steve Ditko[16][17]',
    description:
      'Originally a scientist whose invention of metallic limbs had become fused to his body by an accident which caused his insanity. He has telepathic control of these arms and they are strong enough to physically hurt Spider-Man when Octavius controls them.[18]'
  },
  {
    name: 'Sandman',
    alter_ego: 'William Baker / Flint Marko',
    first_appearance: '#4 (September 1963)[19][20]',
    creator: 'Stan Lee[19][20], Steve Ditko[19][20]',
    description:
      'After bathed in a nuclear reaction. His body is formed with sand which is depicted that he can manipulate in many ways such as shapeshifting and increasing his density and strength to lift up to 85 tons along with increasing height, turning his hands into weapons such as hammer or a mace along with being able form a near-impenetrable wall of sand or create a dust storm.[21]'
  },
  {
    name: 'Lizard',
    alter_ego: 'Dr. Curt Connors',
    first_appearance: '#6 (November 1963)[22][23][24]',
    creator: 'Stan Lee[22][23][24], Steve Ditko[22][23][24]',
    description:
      'Dr. Curt Connors tested himself an experimental serum from reptile DNA which created him as a giant humanoid Lizard. As the Lizard he has regeneration abilities. Along with superhuman strength, speed and agility. He can also telepathically command all reptiles within a one-mile radius.[25]'
  },
  {
    name: 'Living Brain',
    alter_ego: 'Living Brain',
    first_appearance: '#8 (January 1964)[27]',
    creator: 'Stan Lee[27], Steve Ditko[27]',
    description: 'A living robot that is designed to solve any problem.[27]'
  },
  {
    name: 'Electro',
    alter_ego: 'Maxwell Dillon',
    first_appearance: '#9 (February 1964)[28][29]',
    creator: 'Stan Lee[30],  Steve Ditko[30]',
    description:
      'As a lineman for an electric company, he was repairing a power line and holding a wire when lightning struck and mutated his nervous system making him a living electrical capacitor. He gained the power of electric mutation such as shooting up to one million volts of electricity from his fingertips. He also has superhuman strength and is fast when his body is charged and can glide over power lines along with even riding lightning bolts.[31]'
  },
  {
    name: 'Big Man',
    alter_ego: 'Frederick Foswell, Janice Foswell',
    first_appearance: '#10 (March 1964) [32]',
    creator: 'Stan Lee[32], Steve Ditko[32]',
    description: 'A notorious crime lord of New York City.[32]'
  },
  {
    name: 'Mysterio',
    alter_ego: 'Quentin Beck',
    first_appearance: '#13 (June 1964)[33][34]',
    creator: 'Stan Lee[33][35], Steve Ditko[33][35]',
    description:
      'Uses special effects that makes him a master of illusion. Also knows hypnosis. Can use combat that he learned from being a stuntman. Has knowledge of robotics and chemistry.[34]'
  },
  {
    name: 'Green Goblin',
    alter_ego: 'Norman OsbornArch, Harry Osborn[37][38]',
    first_appearance: '#14 (July 1964)[36]',
    creator: 'Stan Lee[36][39], Steve Ditko[36][39]',
    description:
      'The first Green Goblin is Norman Osborn, the CEO of Oscorp. He has Powers that derive from a "Goblin formula" that increase agility, endurance strength and reflexes to superhuman levels. The formula has also advances the intelligence but with a side effect of insanity. Has many weapons that Norman Osborn originally created. Such as glider to fly with and pumpkin bombs to throw.[36]'
  },
  {
    name: 'Kraven the Hunter',
    alter_ego:
      'Sergei Kravinoff, Alyosha Kravinoff (son), Ana Kravinoff (daughter)',
    first_appearance: '#15 (August 1964)[40]',
    creator: 'Stan Lee, Steve Ditko',
    description:
      "Depicted as the world's greatest big-game hunter, Kraven the Hunter is the stepbrother of Chameleon. Prefers using his bare hands instead of guns. Uses preparation along with magic jungle potion which helps with speed, strength and game tracking.[41]"
  },
  {
    name: 'Scorpion',
    alter_ego: 'Mac Gargan8',
    first_appearance: '#20 (January 1965)',
    creator: 'Stan Lee[42], Steve Ditko[42]',
    description:
      "A former private investigator. Endured a test that made him more powerful than Spider-Man but also insane. It gave him superhuman strength of a scorpion. He was then provided with a scorpion themed suit and weaponry (such as a tail which evolved from a simple club tail to a scythe-like spike capable of shooting lasers, acid among other projectiles). Gargan also gained power when switching to the Scorpion to being one of the characters known as Venom. See Venom's power and abilities below to see that power.[43][44]"
  },
  {
    name: 'Spencer Smythe / Spider-Slayers',
    alter_ego: 'Spencer Smythe Spider-Slayers: Multiple names',
    first_appearance: '#25 (June 1965)[32]',
    creator: 'Stan Lee, Steve Ditko',
    description: 'A robotic expert who created the Spider-Slayers.'
  },
  {
    name: 'Crime Master',
    alter_ego: 'Various',
    first_appearance: '#26 (July 1965)[32]',
    creator: 'Stan Lee, Steve Ditko',
    description:
      'A professional criminal who was the alias of different people.'
  },
  {
    name: 'Molten Man',
    alter_ego: 'Mark Raxton[46]',
    first_appearance: '#28 (September 1965)[47]',
    creator: 'Stan Lee, Steve Ditko',
    description:
      'A scientist who was covered in a liquid metallic alloy that not only gives him super-strength, but also enabled him to generate heat and radiation.'
  },
  {
    name: 'Looter',
    alter_ego: 'Norton G. Fester',
    first_appearance: '#36 (May 1966)[47]',
    creator: 'Stan Lee, Steve Ditko',
    description: 'A poor scientist who gains superpowers from meteor gas.'
  },
  {
    name: 'Robot Master / Gaunt',
    alter_ego: 'Mendel Stromm',
    first_appearance: '#37 (June 1966)[32][50]',
    creator: 'Stan Lee, Steve Ditko',
    description:
      'A former college teacher and partner of Norman Osborn that became a cyborg after being betrayed by Osborn.'
  },
  {
    name: 'Rhino9',
    alter_ego: 'Aleksei Mikhailovich Sytsevich',
    first_appearance: '#41 (October 1966)[51]',
    creator: 'Stan Lee[4], John Romita Sr.[4]',
    description:
      'Although classified as a fictional villain famous for being dimwitted.[52] He has superhuman strength with a rhinoceros modeled armor when undergoing a chemical and radiation treatment which would transform him as being a collective of professional spies.[53]'
  },
  {
    name: 'Shocker',
    alter_ego: 'Herman Schultz',
    first_appearance: '#46 (March 1967)[43][54]',
    creator: 'Stan Lee[55], John Romita Sr.[55]',
    description:
      'Wears a battle suit that contains vibro-shock gauntlets.[43][55]'
  },
  {
    name: 'Kingpin',
    alter_ego: 'Wilson Fisk',
    first_appearance: '#50(July 1967) ("Spider-Man No More!")[56][57]',
    creator: 'Stan Lee[58], John Romita Sr.[58]',
    description:
      'Depicted as crime lord of New York City. Manipulate henchman to do his bidding. His body consists of mostly muscle (despite looking like he is obese) that has much strength and agility. Enough to grapple and hammer Spider-Man.[59][60]'
  },
  {
    name: 'The Finisher',
    alter_ego: 'Karl Fiers',
    first_appearance: 'Annual #5 (November 1968)[61]',
    creator: 'Stan Lee[61] , Larry Lieber[61]',
    description: ''
  },
  {
    name: 'Man Mountain Marko',
    alter_ego: 'Michael Marko',
    first_appearance: '#73 (June 1969)[32]',
    creator: 'Stan Lee, John Romita Sr.',
    description: 'A mob lieutenant with super-strength'
  },
  {
    name: 'Silvermane',
    alter_ego: 'Silvio Manfredi',
    first_appearance: '#73 (June 1969)[64]',
    creator: 'Stan Lee, John Buscema[32]',
    description: 'An aging crime boss.'
  },
  {
    name: 'Kangaroo',
    alter_ego: 'Frank Oliver[66], Brian Hibbs',
    first_appearance: '#81 (February 1970)[32]',
    creator: 'Stan Lee, John Buscema,  Jim Mooney, John Romita, Sr.[65]',
    description: 'A name given to two kangaroo-themed villains.'
  },
  {
    name: 'Schemer',
    alter_ego: 'Richard Fisk',
    first_appearance: '#83 (April 1970)',
    creator: 'Stan Lee, John Romita Sr.',
    description: 'The son of Kingpin.'
  },
  {
    name: 'Morbius',
    alter_ego: 'Michael Morbius',
    first_appearance: '#101 (October 1971)11[69]',
    creator: 'Roy Thomas[69], Gil Kane[32]',
    description: 'Has the power of a vampire along with their weaknesses.[67]'
  },
  {
    name: 'Gog',
    alter_ego: 'N/A',
    first_appearance: '#103 (December 1971)[32]',
    creator: 'Roy Thomas, Gil Kane',
    description: ''
  },
  {
    name: 'Gibbon',
    alter_ego: 'Martin Blank',
    first_appearance: '#110 (July 1972)[32]',
    creator: 'Stan Lee, John Romita Sr.[70]',
    description: 'A lesser criminal with gibbon-like abilities.'
  },
  {
    name: 'Hammerhead',
    alter_ego: 'Joseph (full name unknown)[73]',
    first_appearance: '#113 (October  1972)[74]',
    creator: 'Gerry Conway, John Romita Sr.[75]',
    description:
      'An amnesica gangster whose skull was replaced with an unbendable steel alloy.'
  },
  {
    name: 'Man-Wolf',
    alter_ego: 'John Jameson',
    first_appearance: '#124 (September 1973).[32]',
    creator: 'Gerry Conway[75]',
    description:
      'When exposed to the Godstone, John Jameson transforms into the werewolf-like creature Man-Wolf.'
  },
  {
    name: 'Jackal',
    alter_ego: 'Miles Warren',
    first_appearance: '#129 (February 1974)12[77]',
    creator: 'Gerry Conway[77]10, Ross Andru[77]10',
    description:
      'Brilliant professor with the knowledge of cloning and using it to torment Spider-Man emotionally.[67]'
  },
  {
    name: 'Tarantula',
    alter_ego: 'Various',
    first_appearance: '#134 (July 1974)[32][64]',
    creator: 'Gerry Conway, Ross Andru',
    description: 'A name given to different tarantula-themed villains.'
  },
  {
    name: 'Mindworm',
    alter_ego: 'William Turner',
    first_appearance: '#138 (November 1974)',
    creator: 'Gerry Conway[32], Ross Andru [32]',
    description: 'A superhuman with telepathic powers.'
  },
  {
    name: 'Grizzly',
    alter_ego: 'Maxwell Markham',
    first_appearance: '#139 (December 1974)[80]',
    creator: 'Gerry Conway, Ross Andru',
    description:
      'An ex-professional wrestler that wears a grizzly bear-themed outfit.'
  },
  {
    name: 'Human Fly',
    alter_ego: 'Richard Deacon',
    first_appearance: 'Annual #10[81] (1976)',
    creator: 'Len Wein, Bill Mantlo, Gil Kane',
    description:
      'A criminal that was imprinted with the genetic code of a housefly.'
  },
  {
    name: "Will o' the Wisp",
    alter_ego: 'Jackson Arvad',
    first_appearance: '#167 (April 1977)',
    creator: 'Len Wein, Ross Andru',
    description: 'A former Roxxon employee who can manipulate his molecules.'
  },
  {
    name: 'Big Wheel',
    alter_ego: 'Jackson Wheele[66]',
    first_appearance: '#182 (July 1978)[32]',
    creator: 'Marv Wolfman, Ross Andru, Mike Esposito',
    description: 'A criminal that rides the Big Wheel vehicle.'
  },
  {
    name: 'Black Cat',
    alter_ego: 'Felicia Hardy',
    first_appearance: '#194 (July 1979)[82]',
    creator: 'Marv Wolfman, Keith Pollard[82]',
    description:
      'Expert burglary skills taught by her father along with carrying a grappling hook for swinging on rooftops.[1] Had bad luck powers off and on.[83]'
  },
  {
    name: 'Calypso',
    alter_ego: 'Calypso Ezili',
    first_appearance: '#209 (October 1980)',
    creator: "Dennis O'Neil, Alan Weiss",
    description: 'A voodoo accomplice of Kraven the Hunter.'
  },
  {
    name: 'Hydro-Man',
    alter_ego: 'Morris Bench',
    first_appearance: '#212 (January 10, 1981)[85][86]',
    creator: "Denny O'Neil, John Romita Jr.",
    description:
      "A former crewman who gained aquakinetic abilities following an accident during Spider-Man's fight with Namor."
  },
  {
    name: 'Hobgoblin',
    alter_ego: 'Roderick Kingsley, Jason Macendale, Phil Urich[68][87]',
    first_appearance: '#238 (March 1983)',
    creator: 'Roger Stern[88][89],  John Romita Sr.[89][90]',
    description:
      "Powers similar to Green Goblin after discovering Norman's lair. Perfecting Green Goblin's strength portion, goblin glider and pumpkin bombs without the insanity that Norman had.[89][91][92]"
  },
  {
    name: 'Rose',
    alter_ego: 'Richard Fisk',
    first_appearance: '#253 (June 1984)[84]',
    creator: 'Tom DeFalco',
    description:
      "The alias of a gentleman-like crime lord with the alias used by different people including Kingpin's son Richard Fisk."
  },
  {
    name: 'Alistair Smythe',
    alter_ego: 'Alistair Smythe[92]',
    first_appearance: 'Annual #19 (November 1985)[95][96]',
    creator: 'Louise Simonson, Mary Wilshire[50]',
    description: 'The son of Spencer Smythe.'
  },
  {
    name: 'Slyde',
    alter_ego: 'Jalome Beacher',
    first_appearance: '#272 (January 1986)[97]',
    creator: 'Tom DeFalco, Sal Buscema',
    description:
      'A chemist whose suit allow him to move at nearly 30 miles per hour (48 km/h). He is almost impossible to grasp and he is incredibly maneuverable'
  },
  {
    name: 'Venom',
    alter_ego: 'Eddie BrockArch, Mac Gargan',
    first_appearance: '#30015[8][98]',
    creator: 'Todd McFarlane[99]',
    description:
      "The symbiote that once merged with Spider-Man as a suit mimics and enhances the abilities of Spider-Man once bonded with Eddie.[99] Also he is undetectable to Spider-Man's spider sense.[100]"
  },
  {
    name: 'Styx and Stone',
    alter_ego: 'Jacob Eishorn and Gerald Stone',
    first_appearance: '#309 (November 1988)[101]',
    creator: 'David Michelinie, Todd McFarlane',
    description:
      'A mad scientist and homeless man duo who fought Spider-Man. Styx has a disintegrating touch. Stone had two-large weapons on his shoulders and was later mutated into a golem-like creature.'
  },
  {
    name: 'Carnage',
    alter_ego: 'Cletus Kasady',
    first_appearance: '#361 (April 1992)[102]16',
    creator: 'David Michelinie[103][104], Erik Larsen[105], Mark Bagley[103]',
    description:
      "Being an offspring of Venom. Carnage is an even stronger and more powerful character than Venom with his symbiotic powers. He can shapeshift himself such as creating sharp weapons with his symbiote body. He can also plant ideas in people's heads.[102]"
  },
  {
    name: 'Black Tarantula',
    alter_ego: 'Carlos LaMuerto',
    first_appearance: '#419 (January 1997)[50]',
    creator: 'Tom DeFalco, Steve Skroce',
    description: 'A tarantula-themed martial artist.'
  },
  {
    name: 'Morlun',
    alter_ego: 'N/',
    first_appearance: 'vol. 2 #30 (June 2001)[78]',
    creator: 'J. Michael Straczynski, John Romita Jr.',
    description:
      'A member of the Inheritors who can drain the life force out of totems.'
  },
  {
    name: 'Shathra',
    alter_ego: '???',
    first_appearance: 'vol. 2 #46 (December 2006)',
    creator: 'J. Michael Straczynski, John Romita Jr., Scott Hanna',
    description: 'An insectoid creature from the Astral Plane.'
  },
  {
    name: 'Grey Goblin',
    alter_ego: 'Gabriel Stacy, Lily Hollister (Menace)[72]',
    first_appearance: '#509 (August 2004), #550 (April 2008) (Menace)[106]',
    creator: 'J. Michael Straczynski, Mike Deodato',
    description:
      'A gray-resembling Green Goblin whose alias was used by different people.'
  },
  {
    name: 'Mister Negative',
    alter_ego: 'Martin Li',
    first_appearance: '#546 (January 2008) (full appearance)[107]',
    creator: 'Dan Slott, Phil Jimenez',
    description:
      'The leader of the Inner Demons who is able to switch between reversed and regular appearance'
  },
  {
    name: 'Overdrive',
    alter_ego: '???',
    first_appearance: 'Swing Shift (May 2007)[108]',
    creator: 'Dan Slott, Phil Jimenez',
    description:
      'A supervillain who can convert any vehicle into a high-powered one.'
  },
  {
    name: 'Screwball',
    alter_ego: '???',
    first_appearance: '#559 (May 2008)',
    creator: 'Dan Slott, Marcos Martin',
    description: 'The world\'s first "live streaming super-villain"'
  },
  {
    name: 'Massacre',
    alter_ego: 'Marcus Lyman',
    first_appearance: '#655 (April 2011)[111][112][113]',
    creator: 'Dan Slott, Marcos Martín',
    description: 'A brain-damaged criminal who lacks emotions.'
  },
  {
    name: 'Panda-Mania',
    alter_ego: '???',
    first_appearance: 'Vol. 3 #1',
    creator: 'Dan Slott, Humberto Ramos',
    description: 'A giant panda-themed supervillain.'
  }
]
