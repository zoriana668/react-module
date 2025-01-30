import {IUserHair} from "./IUserHair.ts";
import {IUserAddress} from "./IUserAddress.ts";
import {IUserBank} from "./IUserBank.ts";
import {IUserCompany} from "./IUserCompany.ts";
import {IUserCrypto} from "./IUserCrypto.ts";

export interface IUser {
	id: number;
	firstName: string;
	lastName: string;
	maidenName: string;
	age: number;
	gender: string;
	email: string;
	phone: string;
	username: string;
	password: string;
	birthDate: string;
	image: string;
	bloodGroup: string;
	height: number;
	weight: number;
	eyeColor: string;
	hair: IUserHair;
	ip: string;
	address: IUserAddress;
	macAddress: string;
	university: string;
	bank: IUserBank;
	company: IUserCompany;
	ein: string;
	ssn: string;
	userAgent: string;
	crypto: IUserCrypto;
	role: string;
}
