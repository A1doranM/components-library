import React from 'react';

interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    return <button>{props.label}__test-text</button>
}

export default Button;