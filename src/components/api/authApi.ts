import { api } from './serverApi';
import { useQuery } from '@tanstack/react-query';

export const useTokenQuery = () => {
    const token = localStorage.getItem('token');

    return useQuery({
        queryKey: ['auth'],
        queryFn: () => api.get("", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, 
            },
        }).json(),
        refetchInterval: 1000
    });
};
