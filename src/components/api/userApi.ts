import { useMutation, useQuery } from '@tanstack/react-query'
import {api} from './serverApi';
import { User, Role, Person } from '../types';
import { Dialog } from 'antd-mobile';
import { Guid } from 'guid-typescript';

export const useUserQuery = (userId : string | undefined | Guid) => useQuery({
    queryKey: ['User', userId],
    queryFn: () => api.get('User/' + userId).json<User>(),
    refetchInterval: 1000,
})

export const useUserAddMutation = (handleSuccess: (newUser: User) => void) => useMutation <User, Error, User>({
    mutationFn: (user) => api('User/' + (user?.userId || ''), {
        method: user?.userId ? 'PUT' : 'POST',
        json: user
    }).json<User>(),
    onSuccess: (data : any) => {
        handleSuccess(data.value as User);
    },
    onError: () => {
        Dialog.alert({content: 'Зарегистрироваться не получилось', confirmText: 'Закрыть'});
    },
})

export const usePersonAddMutation = () => useMutation <Person, Error, Person>({
    mutationFn: (person) => api('Person/' + (person?.personId || ''), {
        method: person?.personId ? 'PUT' : 'POST',
        json: person
    }).json<Person>()
})

export const useRoleQuery = (roleId: string) => useQuery({
    queryKey: ['role', roleId],
    queryFn: () => api.get('Role/' + roleId).json<Role>(),
    refetchInterval: 1000,
})

export const useRolesQuery = () => useQuery({
    queryKey: ['roles'],
    queryFn: () => api.get('Role/').json<Role[]>(),
    refetchInterval: 1000
})

export const checkRoleQuery = (roleId: string, requiredRole: string) => useQuery({
    queryKey: ['roleCheck', roleId, requiredRole],
    queryFn: () => api.get('Role/' + roleId + '/' + requiredRole).json<boolean>(),
    refetchInterval: 1000
})

export const usePersonDataQuery = (personId:  string | undefined | Guid) => useQuery({
    queryKey: ['Person'],
    queryFn: () => api.get('Person/' + personId).json<Person>(),
    refetchInterval: 1000
})