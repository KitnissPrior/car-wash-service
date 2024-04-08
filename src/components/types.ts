export type Carwash = {
    id: string;
    name: string;
    carwashStreet: string;
    boxAmount: number;
    contactInfo: string;
}

export type Service = {
    id: string;
    name: string;
    price: number;
    time: string;
    status_ID: string;
    carwash_ID: string;
}

export type ServiceStatus = {
    id: string;
    name: string;
}