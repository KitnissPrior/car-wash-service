import { useMutation, useQuery } from '@tanstack/react-query'
import {api} from './serverApi';
import { Carwash } from '../types';
import { Dialog } from 'antd-mobile';
import { Guid } from 'guid-typescript';
import { useFormData } from '../../pages/owner/CarwashFormContext';
import { useNavigate } from 'react-router-dom';

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

const {setFormData} = useFormData();
const navigate = useNavigate();

export const useCarwashAddMutation = () => useMutation <Carwash, Error, Carwash>({
    mutationFn: (carwash) => api('Carwash/' + (carwash?.carwashId || ''), {
        method: carwash?.carwashId ? 'PUT' : 'POST',
        json: carwash,
        
    }).json<Carwash>(),
    onSuccess: (data) => {
        Dialog.alert({content: 'Автомойка сохранена', confirmText: 'Хорошо'});
        console.log('Mutation successful:', data);
        setFormData(data);
        navigate('/carwash-about/:'+data.carwashId);
    },
    onError: (error) => {
        Dialog.alert({content: 'Сохранение выполнить не удалось', confirmText: 'Закрыть'});
        console.error('Mutation failed:', error);
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
