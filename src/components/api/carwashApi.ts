import { useMutation, useQuery } from '@tanstack/react-query'
import {api} from './serverApi';
import { Carwash } from '../types';
import { Dialog } from 'antd-mobile';

export const useCarwashesQuery = () => useQuery({
    queryKey: ['carwashes'],
    queryFn: () => api.get('Carwash/').json<Carwash[]>(),
    refetchInterval: 1000
})

export const useCarwashQuery = (id: string) => useQuery({
    queryKey: ['carwash', id],
    queryFn: () => api.get('Carwash/' + id).json<Carwash>(),
    refetchInterval: 1000,
})

export const useCarwashAddMutation = (handleSuccess: (carwash: Carwash) => void) => useMutation <Carwash, Error, Carwash>({
    mutationFn: (carwash) => api('Carwash/' + (carwash?.carwashId || ''), {
        method: carwash?.carwashId ? 'PUT' : 'POST',
        json: carwash,
        
    }).json<Carwash>(),
    onSuccess: (data: any) => {
        handleSuccess(data.value as Carwash);
    },
    onError: () => {
        Dialog.alert({content: 'Сохранение выполнить не удалось', confirmText: 'Закрыть'});
    },
})

export const useCarwashDeleteMutation = () => useMutation <Carwash, Error, Carwash>({
    mutationFn: (carwash) => api('Carwash/' + (carwash?.carwashId || ''), {
        method: 'DELETE',
        json: carwash
    }).json<Carwash>(),
    onSuccess: () => {
        Dialog.alert({content: 'Автомойка успешно удалена', confirmText: 'Хорошо'});
    },
    onError: (error) => {
        Dialog.alert({content: 'Удаление выполнить не удалось'+ error, confirmText: 'Закрыть'});
        console.error('Mutation failed:', error);
    }
})
