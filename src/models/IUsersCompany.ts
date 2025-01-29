import {IUsersCompanyAddress} from "./IUsersCompanyAddress.ts";

export interface IUsersCompany {
    department: string;
    name: string;
    title: string;
    address: IUsersCompanyAddress;
}