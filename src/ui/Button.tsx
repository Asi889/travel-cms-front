export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode;
};

export const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return (
    <button
      className={`bg-slate-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent ${props.className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
