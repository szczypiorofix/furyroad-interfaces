export enum EventResults {
  NONE,
  FOUND_WATER,
  FOUND_FOOD,
  FOUND_SCRAP,
  FOUND_FUEL,
  ADD_CAR_HEALTH,
  LOOSE_WATER,
  LOOSE_FOOD,
  LOOSE_SCRAP,
  LOOSE_FUEL,
  LOOSE_CAR_HEALTH,
}

export enum EventTypes {
  START_GAME,
  VILLAGE,
  FIGHT,
  ENCOUNTER,
  TERRAIN,
  INFO,
}

export enum GameStatsEnum {
  FUEL = 'fuel',
  WATER = 'water',
  FOOD = 'food',
  SCRAP = 'scrap',
  CARHEALTH = 'carHealth',
  CARMAXHEALTH = 'carMaxHealth',
  CARTEMPERATURE = 'carTemperature',
  CARMAXTEMPERATURE = 'carMaxTemperature',
  DISTANCEDRIVEN = 'distanceDriven',
  ATTACTRATE = 'attactRate',
  DEFENSERATE = 'defenseRate',
}

export const defaultStats: IGameStats = {
  fuel: 40,
  maxFuel: 60,
  water: 20,
  food: 20,
  scrap: 0,
  carHealth: 100,
  carMaxHealth: 100,
  carTemperature: 80,
  carMaxTemperature: 120,
  distanceDriven: 0,
  carSpeed: 0,
  carMaxSpeed: 80,
  carFuelUsage: 1,
  attackRate: 1,
  defenseRate: 1,
  hoursPassed: 0,
  daysPassed: 0,
  score: 0,
};

export const defaultSettings: IGameSettings = {
  canContinue: true,
  musicOn: true,
  musicVolume: 100,
  offline: false,
};

export interface IGameStats {
  [key: string]: number;
  fuel: number;
  maxFuel: number;
  water: number;
  food: number;
  scrap: number;
  carHealth: number;
  carMaxHealth: number;
  carTemperature: number;
  carMaxTemperature: number;
  distanceDriven: number;
  carSpeed: number;
  carMaxSpeed: number;
  carFuelUsage: number;
  attackRate: number;
  defenseRate: number;
  hoursPassed: number;
  daysPassed: number;
  score: number;
}

export interface IGameLogin {
  email: string;
  uuid: string;
}

export interface IGameSettings {
  musicOn: boolean; // true if music is on
  musicVolume: number; // 0 - 100 music volume
  canContinue: boolean; // if player could continue last saved game
  offline: boolean; // false - play offline locally without logging in, true - play online
}

interface IResultOfEvent {
  res: EventResults;
  value: number;
}

interface IEventOptions {
  yesbutton: string;
  nobutton: string;
}

export interface IGameEvent {
  type: EventTypes;
  name: string;
  chance: number; // x / 100 to appear
  text: string;
  attackRate: number;
  defenseRate: number;
  options: IEventOptions;
  result: { succ: IResultOfEvent[]; fail: IResultOfEvent[] };
}

export interface IStatToModify {
  attribute: string;
  value: number;
}

export interface ISavedState {
  gamestats: IGameStats;
  gameeventshistory: IGameEvent[];
  gamesettings: IGameSettings;
  gamelogin: IGameLogin;
}

export interface IUser {
  email: string;
  password: string;
  uuid: string;
  stats: IGameStats;
}

export interface ILoginResponseType {
  error?: string;
  msg: string;
  statusCode: number;
  data?: IUser;
}

export interface IResponseType {
  error?: string;
  msg: string;
  statusCode: number;
  data: any[];
}

export const Greeter = (name: string) => `Hello ${name}`;
