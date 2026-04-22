import type {ChangeEvent} from "react";

type Props = {
    value: number | string
    onChange: (value: number) => void
    type?: string
}

const Input = ({value, onChange, type}: Props) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(+e.target.value)
    }

    return (
        <input type={type} value={value} onChange={onChangeHandler}/>
    );
};

export default Input;