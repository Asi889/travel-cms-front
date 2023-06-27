import { useId } from "react";

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};
export const TextField = (props: TextFieldProps) => {
  const { label } = props;
  const id = useId();
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className={`text-sm leading-tight text-slate-600 pb-2 block`}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={`border border-slate-400 w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent ${props.className}}`}
        {...props}
      />
    </div>
  );
};
