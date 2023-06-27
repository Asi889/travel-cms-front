import { useId } from "react";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};
export const TextField = (props: TextFieldProps) => {
  const { label } = props;
  const id = useId();
  return (
    <div>
      {label && (
        <Label
          htmlFor={id}
          className={`text-sm leading-tight text-brand-600 pb-1  block`}
        >
          {label}
        </Label>
      )}
      <Input id={id} className={` ${props.className}}`} {...props} />
    </div>
  );
};
