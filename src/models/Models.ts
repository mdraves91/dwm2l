
export interface IMonster {
  name: Monsters;
  family: Family;
  locations: (RecruitLocation)[];
  recipes: (IRecipe)[];
  asBase: (IRecipe)[];
  asMate: (IRecipe)[];
  cobiLocations: (RecruitLocation)[];
  taraLocations: (RecruitLocation)[];
  skills: String[];
  maxLevel: number;
  experience: number;
  hp: number;
  mp: number;
  attack: number;
  defence: number;
  agility: number;
  intelligence: number;
}

export interface IRecipe {
  base: Monsters | Family;
  mate: Monsters | Family;
  result: Monsters;
  req: Requirement | null;
}

export function isMonster(object: any): object is Monsters {
  return !isFamily(object);//(object as Monsters) !== undefined;
}

export function isFamily(object: any): boolean {
  return JSON.stringify(object).includes('Family');
}

export enum Family {
  SlimeFamily='SlimeFamily',
  DragonFamily='DragonFamily',
  BeastFamily='BeastFamily',
  BirdFamily='BirdFamily',
  PlantFamily='PlantFamily',
  BugFamily='BugFamily',
  DemonFamily='DemonFamily',
  ZombieFamily='ZombieFamily',
  MaterialFamily='MaterialFamily',
  WaterFamily='WaterFamily',
  BossFamily='BossFamily'
}

export function getColorFromFamily(family: Family) {
  switch (family) {
    case Family.SlimeFamily: return '#381d89';
    case Family.DragonFamily: return '#fa915a';
    case Family.BeastFamily: return '#a1592a';
    case Family.BirdFamily: return '#f13393';
    case Family.PlantFamily: return '#37b351';
    case Family.BugFamily: return '#26b2ab';
    case Family.DemonFamily: return '#020202';
    case Family.ZombieFamily: return '#734ca3';
    case Family.MaterialFamily: return '#919095';
    case Family.WaterFamily: return '#04b1f6';
    case Family.BossFamily: return '#fc2a20';
    default:
      return '#ffffff';
  }
}

export enum RecruitLocation {
  Oasis,
  Pirate,
  Ice,
  Sky,
  Limbo,
  Traveler,
  Elf,
  Lonely,
  ForeignMaster,
}

export enum Requirement {
  PlusFive,
  PlusTen,
  Link
}

export enum RecipeComponentType {
  Result='as Result',
  Base='as Base',
  Mate='as Mate'
}

export enum Monsters {
  // Slime
  DrakSlime,
  SpotSlime,
  WingSlime,
  TreeSlime,
  Snaily,
  SlimeNite,
  Babble,
  BoxSlime,
  PearlGel,
  Slime,
  Healer,
  FangSlime,
  RockSlime,
  SlimeBorg,
  Slabbit,
  KingSlime,
  Metaly,
  Metabble,
  SpotKing,
  TropicGel,
  MimeSlime,
  HaloSlime,
  MetalKing,
  GoldSlime,
  GranSlime,
  WonderEgg,

  // Dragon
  DragonKid,
  Tortragon,
  Pteranod,
  Gasgon,
  FairyDrak,
  LizardMan,
  Poisongon,
  Swordgon,
  Drygon,
  Dragon,
  MiniDrak,
  MadDragon,
  RayBurn,
  Chamelgon,
  LizardFly,
  Andreal,
  KingCobra,
  Vampirus,
  SnakeBat,
  Spikerous,
  GreatDrak,
  Crestpent,
  WingSnake,
  Coatol,
  Orochi,
  BattleRex,
  SkyDragon,
  Serpentia,
  Divinegon,
  Orligon,
  GigaDraco,

  // Beast
  Tonguella,
  Almiraj,
  CatFly,
  PillowRat,
  Saccer,
  GulpBeast,
  Skullroo,
  WindBeast,
  Beavern,
  AntBear,
  SuperTen,
  IronTurt,
  Mommonja,
  HammerMan,
  Grizzly,
  Yeti,
  ArrowDog,
  NoctoKing,
  BeastNite,
  MadGopher,
  FairyRat,
  Unicorn,
  Goategon,
  WildApe,
  Trumpeter,
  KingLeo,
  DarkHorn,
  MadCat,
  BigEye,
  Gorago,
  CatMage,
  Dumbira,

  // Bird
  Picky,
  Wyvern,
  BullBird,
  FloraJay,
  DuckKite,
  MadPecker,
  MadRaven,
  MistyWing,
  AquaHawk,
  Dracky,
  KiteHawk,
  BigRoost,
  StubBird,
  LandOwl,
  MadGoose,
  MadCondor,
  Emyu,
  Blizzardy,
  Phoenix,
  ZapBird,
  Garudian,
  WhipBird,
  FunkyBird,
  RainHawk,
  Azurile,
  Shantak,
  CragDevil,

  // Plant
  MadPlant,
  FireWeed,
  FloraMan,
  WingTree,
  CactiBall,
  Gulpple,
  ToadStool,
  AmberWeed,
  Slurperon,
  Stubsuck,
  Oniono,
  DanceVegi,
  TreeBoy,
  Devipine,
  FaceTree,
  HerbMan,
  BeanMan,
  EvilSeed,
  ManEater,
  Snapper,
  GhosTree,
  RoseVine,
  Egdracil,
  Warubou,
  Watabou,
  Eggplaton,
  FooHero,

  // Bug
  GiantSlug,
  Catapila,
  Gophecada,
  Butterfly,
  WeedBug,
  GiantWorm,
  Lipsy,
  StagBug,
  Pyuro,
  ArmyAnt,
  GoHopper,
  TailEater,
  ArmorPede,
  Eyeder,
  GiantMoth,
  Droll,
  ArmyCrab,
  MadHornet,
  Belzebub,
  WarMantis,
  HornBeet,
  Sickler,
  Armorpion,
  Digster,
  Skularach,
  MultiEyes,

  // Demon
  Pixy,
  MedusaEye,
  AgDevil,
  Demonite,
  DarkEye,
  EyeBall,
  SkulRider,
  EvilBeast,
  Bubblemon,
  OneEyeClown,
  Gremlin,
  ArcDemon,
  Lionex,
  GoatHorn,
  Orc,
  Ogre,
  GateGuard,
  ChopClown,
  BossTroll,
  Grendal,
  Akubar,
  MadKnight,
  EvilWell,
  Gigantes,
  Centasaur,
  EvilArmor,
  Jamirus,
  Durran,
  Titanis,
  LampGenie,

  // Zombie
  Spooky,
  Skullgon,
  PutrePup,
  RotRaven,
  Mummy,
  DarkCrab,
  DeadNite,
  Shadow,
  Skulpent,
  Hork,
  Mudron,
  NiteWhip,
  WindMerge,
  Reaper,
  Inverzon,
  FoxFire,
  CaptDead,
  DeadNoble,
  WhiteKing,
  BoneSlave,
  Skeletor,
  Servant,
  Lazamanus,
  CopyCat,
  MadSpirit,
  PomPomBom,
  Niterich,

  // Material
  JewelBag,
  EvilWand,
  MadCandle,
  CoilBird,
  Facer,
  SpikyBoy,
  MadMirror,
  RogueNite,
  Puppetor,
  Goopi,
  Voodoll,
  MetalDrak,
  Balzak,
  SabreMan,
  CurseLamp,
  Brushead,
  Roboster,
  Roboster2,
  EvilPot,
  Gismo,
  LavaMan,
  IceMan,
  Mimic,
  Exaucers,
  MudDoll,
  Golem,
  StoneMan,
  BombCrag,
  GoldGolem,
  DarkMate,
  ProtoMech,
  CloudKing,

  // Water
  Petiteel,
  Moray,
  WalrusMan,
  RayGigas,
  Anemon,
  Aquarella,
  Merman,
  Octokid,
  PutreFish,
  Octoreach,
  Angleron,
  FishRider,
  RushFish,
  Gamanian,
  Clawster,
  CancerMan,
  RogueWave,
  Scallopa,
  SeaHorse,
  HoodSquid,
  MerTiger,
  AxeShark,
  Octogon,
  KingSquid,
  Digong,
  WhaleMage,
  Aquadon,
  Octoraid,
  Grakos,
  Poseidon,
  Pumpoise,
  Starfish,

  // Boss
  DracoLord1,
  DracoLord2,
  LordDraco,
  Hargon,
  Sidoh,
  GenoSidoh,
  Baramos,
  Zoma,
  AsuraZoma,
  Pizzaro,
  PsychoPiz,
  Esterk,
  Mirudraas1,
  Mirudraas2,
  Mudou,
  DeathMore1,
  DeathMore2,
  DeathMore3,
  DarkDrium,
  Orgodemir1,
  Orgodemir2,
  Darck
}

