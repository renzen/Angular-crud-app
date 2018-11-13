import {GeoLoc} from './GeoLoc.model';
import {UserDetails} from './UserDetails.model';
export class Address {
    Street: string;
    Suite: string;
    City: string;
    ZipCode: string;
    GeoLoc: GeoLoc;
    UserDetailsId: number;
    UserDetails: UserDetails;
    createdAt = null;
    updatedAt = null;
}