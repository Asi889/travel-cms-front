import { Spinner } from "./Spinner";
import { Button, ButtonProps } from "./ui/button";

export const LoadingButton = (props: ButtonProps & { loading?: boolean }) => {
  const { loading, children, ...rest } = props;
  return (
    <Button {...rest}>
      {loading ? (
        <div className="flex items-center space-x-2">
          <Spinner size={6} />
        </div>
      ) : (
        children
      )}
    </Button>
  );
};
