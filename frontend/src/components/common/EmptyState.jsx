const EmptyState = ({ message = "No data available -Working on this !!" }) => {
  return (
    <div className="flex items-center justify-center py-10 text-gray-400">
      {message}
    </div>
  );
};

export default EmptyState;
// //flex: Applies display: flex layout to the container.

// items-center: Centers child content vertically along the cross-axis.

// justify-center: Centers child content horizontally along the main axis.

// py-10: Applies padding top and bottom of 2.5rem (40px) to give the empty state vertical breathing room.

// text-gray-400: Sets the text color to a muted light gray.