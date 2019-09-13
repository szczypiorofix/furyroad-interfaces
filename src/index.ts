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
  musicOn: boolean;
  musicVolume: number;
  canContinue: boolean;
  offline: boolean;
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

export interface IResponseType {
  error?: string;
  msg: string;
  statusCode: number;
  data?: any[];
}

export const Greeter = (name: string) => `Hello ${name}`;
