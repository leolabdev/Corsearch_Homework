import {useGetUsers, UserFilters} from '@/entities/User';
import styles from './UserDashboard.module.scss';
import { PageLoader } from '@/widgets/PageLoader';
import Input from '@/shared/ui/Input';


interface FieldConfig<T> {
    field: T;
    placeholder: string;
}

const UserDashboard = () => {
    const {
        users,
        isLoading,
        error,
        handleFilterChange,
        toggleSortOrder,
        sortOrder,
        filters,
    } = useGetUsers();

    type FilterField = keyof UserFilters;

    const filterFields: FieldConfig<FilterField>[] = [
        { field: 'name', placeholder: 'Filter by name' },
        { field: 'email', placeholder: 'Filter by email' },
        { field: 'phone', placeholder: 'Filter by phone' },
        { field: 'website', placeholder: 'Filter by website' },
        { field: 'address', placeholder: 'Filter by address' },
    ];

    if (isLoading) return <PageLoader />;
    if (error) return <div>Error loading users</div>;

    return (
        <div className={styles.dashboard}>
            <div className={styles.filters}>
                {filterFields.map(({ field, placeholder }) => (
                    <Input
                        key={field}
                        type="text"
                        placeholder={placeholder}
                        value={filters[field]}
                        onChange={(e) => handleFilterChange(field, e.target.value)}
                    />
                ))}
            </div>
            <button onClick={toggleSortOrder}>
                Sort by name ({sortOrder})
            </button>
            <div className={styles.userList}>
                {users.map((user) => (
                    <div key={user.id} className={styles.userCard}>
                        <h3>{user.name}</h3>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Website: {user.website}</p>
                        <p>Address: {user.address.street}, {user.address.city}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserDashboard;
