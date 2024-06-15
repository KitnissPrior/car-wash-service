import { Guid } from 'guid-typescript';

export type Carwash = {
    carwashId?: Guid;
    name: string;
    carwashStreet: string;
    boxAmount: number;
    contactInfo: string;
}

export type ContextProviderProps = {
    children: React.ReactNode;
}

export type ConfirmationProps = {
    title: string;
    visible: boolean;
    handleOk: () => void;
    handleCancel: () => void;
    okText: string;
    cancelText: string;
    isAdditionalTextHidden?: boolean;
}

export type Service = {
    serviceId?: Guid | string;
    name: string;
    price: number | string;
    duration: string;
    statusId?: Guid | string;
    carwashId?: Guid | string;
}

export type ServiceStatus = {
    statusId?: Guid;
    name: string;
}

export type User = {
    userId?: Guid | string;
    roleId?: Guid | string;
    login: string;
    password: string;
    personId?: Guid | string;
}

export type Role = {
    roleId: Guid | string;
    roleName: string;
}

export type Person = {
    personId?: Guid | string;
    firstName?: string;
    lastName?: string;
    fathersName?: string;
    email?: string;
    phoneNumber?: string;
}

export type NoDataProps = {
    message: string;
}

export type RegisterFormProps = {
    firstName: string;
    lastName: string;
    fathersName?: string;
    email?: string;
    phoneNumber: string;
    role: string
    password: string;
    confirmPassword: string;
}

export type UserData = {
    userId?: Guid | string;
    carwashId?: Guid | string;
    firstName?: string;
    lastName?: string;
    fathersName?: string;
    email?: string;
    phoneNumber?: string;
    role?: string
    password?: string;
    roleId?: Guid | string;
    login?: string;
    personId?: Guid | string;
    carNumber?: string, 
}

export type OrderFormProps = {
    carwashes? : Carwash[];
    services?: Service[];
    data: any; 
    onDataChange: (data: any) => void; 
    shouldGoNext: (shouldGoNext: boolean) => void;
}

export type Order = {
    orderId?: Guid | string;
    dateTime?: DateOnly;
    carwashId?: Guid | string;
    userId?: Guid | string;
    licencePlate?: string;
    statusId?: Guid | string;
    box_Id?: Guid | string;
    servicesIds?: string[] ;
}

export type ServiceInOrder = {
    serviceInOrderId?: Guid | string;
    serviceId?: Guid | string;
    orderId?: Guid | string;
}

export type DateOnly = { 
    year: number;
    month: number;
    day: number ;
}