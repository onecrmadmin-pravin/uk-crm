const ErrorState = ({ message = "Something went wrong", onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <p className="text-red-400 mb-4">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-red-600 px-4 py-2 rounded"
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default ErrorState;

{/* <div className="...">: The main container box for centering the error message and action button.

flex flex-col: Sets Flexbox display and arranges elements in a vertical column direction.

items-center: Centers children horizontally along the cross-axis.

justify-center: Centers children vertically along the main axis.

py-10: Applies top and bottom padding of 2.5rem (40px) to give the section vertical breathing room.

text-center: Ensures text inside the container is center-aligned. */}
// text-red-400: Colors the text a soft red to signal an error state.

// mb-4: Adds a bottom margin of 1rem (16px) to space the text apart from the retry button below it.

// {message}: Displays the string passed via props (or the default text).