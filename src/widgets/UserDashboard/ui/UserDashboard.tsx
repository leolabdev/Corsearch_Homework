import { useGetUsers } from '@/entities/User';
import styles from './UserDashboard.module.scss';

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

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading users</div>;

    return (
        <div className={styles.dashboard}>
            <div className={styles.filters}>
                <input
                    type="text"
                    placeholder="Filter by name"
                    value={filters.name}
                    onChange={(e) => handleFilterChange('name', e.target.value)}
                    className={styles.filterInput}
                />
                <input
                    type="text"
                    placeholder="Filter by email"
                    value={filters.email}
                    onChange={(e) => handleFilterChange('email', e.target.value)}
                    className={styles.filterInput}
                />
                <input
                    type="text"
                    placeholder="Filter by phone"
                    value={filters.phone}
                    onChange={(e) => handleFilterChange('phone', e.target.value)}
                    className={styles.filterInput}
                />
                <input
                    type="text"
                    placeholder="Filter by website"
                    value={filters.website}
                    onChange={(e) => handleFilterChange('website', e.target.value)}
                    className={styles.filterInput}
                />
                <input
                    type="text"
                    placeholder="Filter by address"
                    value={filters.address}
                    onChange={(e) => handleFilterChange('address', e.target.value)}
                    className={styles.filterInput}
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
