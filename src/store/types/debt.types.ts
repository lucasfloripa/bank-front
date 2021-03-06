import { billTypes } from "./";

// Data Types
export interface Model extends billTypes.Model {
  bankerId: string
}

// Action Types
export enum Types {
  GET_DEBT = "GET_DEBT",
  GET_DEBTS = "GET_DEBTS",
  GET_DEBTS_BY_USER = "GET_DEBTS_BY_USER",
  CREATE_DEBT = "CREATE_DEBT",
  UPDATE_DEBT = "UPDATE_DEBT",
  DELETE_DEBT = "DELETE_DEBT",
  CLEAR_DEBT = 'CLEAR_DEBT',
  CLEAR_DEBTS = 'CLEAR_DEBTS',
}

interface Get {
  type: typeof Types.GET_DEBT;
  payload: Model;
}

interface Gets {
  type: typeof Types.GET_DEBTS;
  payload: Model[];
}

interface GetsByUser {
  type: typeof Types.GET_DEBTS_BY_USER;
  payload: Model[];
}

interface Create {
  type: typeof Types.CREATE_DEBT;
  payload: Model;
}

interface Update {
  type: typeof Types.UPDATE_DEBT;
  payload: Model;
}

interface Delete {
  type: typeof Types.DELETE_DEBT;
  payload: {};
}

interface Clear {
  type: typeof Types.CLEAR_DEBT
  payload: Model
}

interface ClearAll {
  type: typeof Types.CLEAR_DEBTS
  payload: []
}

export interface ResponseGetAll {
  sucess: boolean;
  count: Number;
  debts: Model[];
}

export interface ResponseSingle {
  sucess: boolean;
  debt: Model;
}

export type ActionsTypes = Get | Gets | GetsByUser | Create | Update | Delete | Clear | ClearAll;

// State Types
export interface State {
  readonly debt: Model;
  readonly debts: Model[];
}
