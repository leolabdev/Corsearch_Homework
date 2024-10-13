import {ChangeEvent, HTMLInputTypeAttribute} from "react";
import clsx from "clsx";
import styles from './Input.module.scss';


interface Props {
    type: HTMLInputTypeAttribute
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export const Input = (props: Props) => {

    const {
        type,
        placeholder,
        value,
        onChange,
        className
    } = props

        return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={clsx(styles.input, className)}
        />
    );
};

export default Input;
