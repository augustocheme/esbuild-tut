// import styles from './Button.module.scss';

export interface ButtonProps{
    label: string;
}

const Button = ({label}: ButtonProps) => {
    return <button>{label}</button>
}

export default Button;