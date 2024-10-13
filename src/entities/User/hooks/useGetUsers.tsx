import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
}

const fetchUsers = async (): Promise<User[]> => {
    const { data } = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    return data;
};

interface Filters {
    name: string;
    email: string;
    phone: string;
    website: string;
    address: string;
}

export const useGetUsers = () => {
    const [filters, setFilters] = useState<Filters>({
        name: '',
        email: '',
        phone: '',
        website: '',
        address: '',
    });
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    const { data: users, isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
    });

    const sortedAndFilteredUsers = () => {
        if (!users) return [];

        const filtered = users.filter((user: User) => {
            const userAddress = `${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`.toLowerCase();
            return (
                user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
                user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
                user.phone.toLowerCase().includes(filters.phone.toLowerCase()) &&
                user.website.toLowerCase().includes(filters.website.toLowerCase()) &&
                userAddress.includes(filters.address.toLowerCase())
            );
        });

        const sorted = filtered.sort((a, b) => {
            return sortOrder === 'asc'
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        });

        return sorted;
    };

    const handleFilterChange = (field: keyof Filters, value: string) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [field]: value,
        }));
    };

    const toggleSortOrder = () => {
        setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };

    return {
        users: sortedAndFilteredUsers(),
        isLoading,
        error,
        handleFilterChange,
        toggleSortOrder,
        sortOrder,
        filters,
    };
};
