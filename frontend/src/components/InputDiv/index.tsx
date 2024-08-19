import { forwardRef, ForwardedRef, InputHTMLAttributes } from "react"

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: React.ReactNode;
}

export const InputDiv = forwardRef(({ error, ...rest } : IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <div>
            <input ref={ref} {...rest} />
            {error}
        </div>
    );
});