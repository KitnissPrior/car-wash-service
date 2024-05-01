import { Guid } from 'guid-typescript';

export type Carwash = {
    carwashId?: Guid;
    name: string;
    carwashStreet: string;
    boxAmount: number;
    contactInfo: string;
}

export type FormContextProviderProps = {
    children: React.ReactNode;
}

export type ConfirmationProps = {
    title: string;
    visible: boolean;
    handleOk: () => void;
    handleCancel: () => void;
    okText: string;
    cancelText: string;
}

export type Service = {
    id?: Guid | string;
    name: string;
    price: number;
    time: string;
    status_ID?: Guid;
    carwash_ID?: Guid;
}

export type ServiceStatus = {
    id: Guid;
    name: string;
}

export type NoDataProps = {
    message: string;
}

export type UUID = string & { __uuid: void };