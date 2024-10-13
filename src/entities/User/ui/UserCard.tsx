import clsx from "clsx";
import styles from './UserCard.module.scss';
import {memo} from "react";

interface Props {
    name: string;
    email: string;
    phone: string;
    website: string;
    address: {
        street: string;
        city: string;
    };
    className?: string;
}

const UserCard = memo((props: Props) => {
    const {
        name,
        email,
        phone,
        website,
        address,
        className
    } = props;
    return (
        <div className={clsx(styles.userCard, className)}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>Address: {address.street}, {address.city}</p>
        </div>
    );
});

export default UserCard;
