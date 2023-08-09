type SpinnerProps = {
  size?: number;
};

export const Spinner = ({ size = 4 }: SpinnerProps) => {
  return (
    <div
      className={`animate-spin rounded-full z-50 h-${size} w-${size} border-t-2 border-b-2 border-gray-900`}
    ></div>
  );
};
