export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode;
};

export const ButtonOld = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return (
    <button
      className={`bg-brand-700 hover:bg-brand-900 transition text-brand px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:bg-brand-900  focus:border-transparent ${props.className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
