import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

export const Input: React.FC<InputProps> = ({ label, name, ...rest }) => (
    <div className="input-block">
        <label htmlFor={name}>{label}</label>
        <input name={name} type="text" id={name} {...rest} />
    </div>
);