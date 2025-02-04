import { CircularProgress } from "@mui/material";

const Spinner = ({
  size = 40,
  showText = false,
  customText = "Loading...",
}) => {
  return (
    <div className="flex flex-col items-center justify-center my-4">
      <CircularProgress size={size} color="secondary" />
      {showText && (
        <p className="text-xl text-primary-light dark:text-primary-dark">
          {customText}
        </p>
      )}
    </div>
  );
};

export default Spinner;
