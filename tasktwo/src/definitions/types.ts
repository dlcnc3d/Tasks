import { MarkerType } from "../definitions/enums";


export type MarkerData = {
  lat: number;
  lng: number;
  time?: number;
  type?: MarkerType;
  address?:string
  //label?:string;
};

export type RouteData = {
    fare: number;
    distance: string;
    duration: string;
};
