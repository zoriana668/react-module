import {IUserAddressCoordinates} from "./IUserAddressCoordinates.ts";

export interface IUserAddress {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: IUserAddressCoordinates;
    country: string;
}