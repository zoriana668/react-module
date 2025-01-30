import {IUserCompanyAddress} from "./IUserCompanyAddress.ts";


export interface IUserCompany {
    department: string;
    name: string;
    title: string;
    address: IUserCompanyAddress;
}