import { useMutation, useQuery } from '@tanstack/react-query'
import {api} from './serverApi';
import { Carwash } from '../types';

export const useCarwashesQuery = () => useQuery({
    queryKey: ['carwashes'],
    queryFn: () => api.get('Carwash/').json<Carwash[]>(),
    refetchInterval: 5000
})

export const useCarwashAddMutation = () => useMutation <Carwash, Error, Carwash>({
    mutationFn: (carwash) => api('Carwash/' + (carwash?.id || ''), {
        method: carwash?.id !==''? 'PUT' : 'POST',
        json: carwash
    }).json<Carwash>()
})
