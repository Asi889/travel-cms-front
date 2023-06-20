import { Button, ButtonProps } from "./Button";
import { Spinner } from "./Spinner";

export const LoadingButton = (props: ButtonProps & { loading?: boolean }) => {
  const { loading, children, ...rest } = props;
  return (
    <Button {...rest}>
      {loading ? (
        <div className="flex items-center space-x-2">
          <span>Loading</span>
          <Spinner size={6} />
        </div>
      ) : (
        children
      )}
    </Button>
  );
};
