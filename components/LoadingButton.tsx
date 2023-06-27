import { ButtonOld, ButtonProps } from "./ButtonOld";
import { Spinner } from "./Spinner";

export const LoadingButton = (props: ButtonProps & { loading?: boolean }) => {
  const { loading, children, ...rest } = props;
  return (
    <ButtonOld {...rest}>
      {loading ? (
        <div className="flex items-center space-x-2">
          <span>Loading</span>
          <Spinner size={6} />
        </div>
      ) : (
        children
      )}
    </ButtonOld>
  );
};
