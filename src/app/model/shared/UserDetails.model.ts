import {Users} from './users.model';
import {Address} from './address.model';
export class UserDetails {
    id: number;
    FirstName: string;
    LastName: string;
    Email: string;
    Gender: string;
    Birth: Date;
    Phone: string;
    Website: string;
    Address: Address;
    UsersId: number;
    Users: Users;
    createdAt = null;
    updatedAt = null;
    }