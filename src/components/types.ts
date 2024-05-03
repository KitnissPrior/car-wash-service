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
    serviceId?: Guid | string;
    name: string;
    price: number;
    duration: string;
    statusId?: Guid | string;
    carwashId?: Guid | string;
}

export type ServiceStatus = {
    statusId: Guid;
    name: string;
}

export type NoDataProps = {
    message: string;
}

export type UUID = string & { __uuid: void };