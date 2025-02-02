export interface IUser {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    image: string;
    age: number;
    gender: string;
    phone: string;
    address: {
        city: string;
        street: string;
    };
}