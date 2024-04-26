import { useMutation, useQuery } from '@tanstack/react-query'
import {api} from './serverApi';
import { Carwash } from '../types';
import { Dialog } from 'antd-mobile';

export const useCarwashesQuery = () => useQuery({
    queryKey: ['carwashes'],
    queryFn: () => api.get('Carwash/').json<Carwash[]>(),
    refetchInterval: 1000
})

export const useCarwashAddMutation = () => useMutation <Carwash, Error, Carwash>({
    mutationFn: (carwash) => api('Carwash/' + (carwash?.id || ''), {
        method: carwash?.id ? 'PUT' : 'POST',
        json: carwash,
        
    }).json<Carwash>(),
    onSuccess: (data) => {
        //Dialog.alert({content: 'Автомойка сохранена', confirmText: 'Хорошо'});
        console.log('Mutation successful:', data);
    },
    onError: (error) => {
        Dialog.alert({content: 'Сохранение выполнить не удалось', confirmText: 'Закрыть'});
        console.error('Mutation failed:', error);
    },
})

export const useCarwashDeleteMutation = () => useMutation <Carwash, Error, Carwash>({
    mutationFn: (carwash) => api('Carwash/' + (carwash?.id || ''), {
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
