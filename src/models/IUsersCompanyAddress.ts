import {IUsersCompanyAddressCoordinates} from "./IUsersCompanyAddressCoordinates.ts";

export interface IUsersCompanyAddress {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: IUsersCompanyAddressCoordinates;
    country: string;
}