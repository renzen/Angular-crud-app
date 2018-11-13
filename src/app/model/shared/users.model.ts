// export interface IUsers {
//     id: number;
//     name: string;
// }
import {UserDetails} from './UserDetails.model';
export class Users {
        id: number;
        UserName: string;
        Password: string;
        Active: number;
        UserDetails: UserDetails;
        createdAt = null;
        updatedAt = null;
}


