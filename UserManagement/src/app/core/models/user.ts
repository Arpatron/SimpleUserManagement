import { BankAccount } from './bank-account';
import { States } from './states.enum';

export class User {
    id: number;
    name: string;
    lastName: string;
    accounts: BankAccount[] = [];
    state: States;
}

export class UserRequest{
    name: string;
    lastName: string;
    accounts: BankAccount[] = [];
    state: States;
}