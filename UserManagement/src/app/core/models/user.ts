import { BankAccount } from './bank-account';
import { States } from './states.enum';

export interface IUser {
    id: number;
    name: string;
    lastName: string;
    account: BankAccount;
    state: States;
}

export class CreateUserRequest{
    name: string;
    lastName: string;
    account: BankAccount;
    state: States;
}