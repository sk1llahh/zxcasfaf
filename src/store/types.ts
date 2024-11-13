import {IStatus} from "./status";

export type TFetch = {
  [key in string]: IStatus & { data: any }
}