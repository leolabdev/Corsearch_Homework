export interface UserFilters {
    name: string;
    email: string;
    phone: string;
    website: string;
    address: string;
}


export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
}