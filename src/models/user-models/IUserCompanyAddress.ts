import {IUserCompanyAddressCoordinates} from "./IUserCompanyAddressCoordinates.ts";

export interface IUserCompanyAddress {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: IUserCompanyAddressCoordinates;
    country: string;
}