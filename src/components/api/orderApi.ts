import { useMutation, useQuery } from '@tanstack/react-query'
import {api} from './serverApi';
import { Order } from '../types';
import { Guid } from 'guid-typescript';
import { Dialog } from 'antd-mobile';

export const useOrdersQuery = () => useQuery({
    queryKey: ['orders'],
    queryFn: () => api.get('Order/').json<Order[]>(),
    refetchInterval: 5000
})

export const useOrderQuery = (orderId: string | undefined | Guid, ) => useQuery({
    queryKey: ['order', orderId],
    queryFn: () => api.get('Order/' + orderId).json<Order>(),
    refetchInterval: 1000,
})

export const useOrderAddMutation = (handleSuccess: () => void) => useMutation <Order, Error, Order>({
    mutationFn: (order) => api('Order/' + (order?.orderId || ''), {
        method: order?.orderId ? 'PUT' : 'POST',
        json: order
    }).json<Order>(),
    onSuccess: () => {
        handleSuccess();
    },
    onError: () => {
        Dialog.alert({content: 'Забронировать место не получилось', confirmText: 'Закрыть'});
    },
})

export const useOrderDeleteMutation = () => useMutation <Order, Error, Order>({
    mutationFn: (order) => api('Order/' + (order?.orderId || ''), {
        method: 'DELETE',
        json: order
    }).json<Order>()
})
