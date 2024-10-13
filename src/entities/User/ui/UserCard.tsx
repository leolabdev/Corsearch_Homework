import styles from './UserCard.module.scss';

interface Props {
    name: string;
    email: string;
    phone: string;
    website: string;
    address: {
        street: string;
        city: string;
    };
}

export const UserCard = (props: Props) => {
    const { name, email, phone, website, address } = props;
    return (
        <div className={styles.userCard}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>Address: {address.street}, {address.city}</p>
        </div>
    );
};

export default UserCard;
