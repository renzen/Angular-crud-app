export class Users {
    id: number;
    UserName: string;
    Password: string;
    Active: number;
    UserDetails: UserDetails;
    createdAt = null;
    updatedAt = null;
}

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

export class GeoLoc {
lat: string;
lng: string;
AddressId: number;
Address: Address; 
createdAt = null;
updatedAt = null;
}