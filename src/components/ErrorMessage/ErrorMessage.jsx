import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <div role="alert" className="text-center">
      <p className="text-red-400 font-semibold">Something went wrong:</p>
      <pre className="font-mono my-4">{error?.message}</pre>
    </div>
  );
};

export default ErrorMessage;
