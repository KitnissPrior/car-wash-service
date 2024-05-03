import { useMutation, useQuery } from '@tanstack/react-query'
import {api} from './serverApi';
import { Service } from '../types';

export const useServicesQuery = () => useQuery({
    queryKey: ['services'],
    queryFn: () => api.get('Service/').json<Service[]>(),
    refetchInterval: 5000
})

export const useServiceAddMutation = () => useMutation <Service, Error, Service>({
    mutationFn: (service) => api('Service/' + (service?.serviceId || ''), {
        method: service?.serviceId ? 'PUT' : 'POST',
        json: service
    }).json<Service>()
})

export const userServiceDeleteMutation = () => useMutation <Service, Error, Service>({
    mutationFn: (service) => api('Service/' + (service?.serviceId || ''), {
        method: 'DELETE',
        json: service
    }).json<Service>()
})
