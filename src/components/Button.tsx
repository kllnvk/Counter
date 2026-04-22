type Props = {
    title: string
    disabled: boolean
    onClick: () => void
}

const Button = ({title, disabled, onClick} : Props) => {
    return (
        <button disabled={disabled} onClick={onClick}>{title}</button>
    );
};

export default Button;