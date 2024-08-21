import { forwardRef, ForwardedRef, InputHTMLAttributes, SelectHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: React.ReactNode;
    is_select: boolean;
    options?: { value: string; label: string }[];
    label: string
}

export const InputDiv = forwardRef(({ label, is_select, error, options, ...rest }: IInputProps & SelectHTMLAttributes<HTMLSelectElement>, ref: ForwardedRef<HTMLInputElement | HTMLSelectElement>) => {
    return (
        <div>
            <label>{label}</label>
            {
                is_select ? 
                (
                    <>
                    <select ref={ref as ForwardedRef<HTMLSelectElement>} {...rest}>
                        {options?.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    {error}
                    </>
                )
                :
                (
                    <>
                        <input ref={ref as ForwardedRef<HTMLInputElement>} {...rest} />
                        {error}
                    </>
                )
            }
        </div>
    );
});
