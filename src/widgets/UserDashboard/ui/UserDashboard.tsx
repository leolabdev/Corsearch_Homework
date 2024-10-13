import { useGetUsers } from '@/entities/User';
import styles from './UserDashboard.module.scss';
import {PageLoader} from "@/widgets/PageLoader";
import Input from "@/shared/ui/Input";

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

    // it might be better to use here skeletons for cards
    if (isLoading) return (<PageLoader/>);
    if (error) return <div>Error loading users</div>;

    return (
        <div className={styles.dashboard}>
            <div className={styles.filters}>
                <Input
                    type="text"
                    placeholder="Filter by name"
                    value={filters.name}
                    onChange={(e) => handleFilterChange('name', e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Filter by email"
                    value={filters.email}
                    onChange={(e) => handleFilterChange('email', e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Filter by phone"
                    value={filters.phone}
                    onChange={(e) => handleFilterChange('phone', e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Filter by website"
                    value={filters.website}
                    onChange={(e) => handleFilterChange('website', e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Filter by address"
                    value={filters.address}
                    onChange={(e) => handleFilterChange('address', e.target.value)}
                />
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
