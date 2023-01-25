import React from "react";

/**
 * This interface represents the prop object for FormInput component
 */
interface IFormInputProps {
    value: string;
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

export default IFormInputProps;