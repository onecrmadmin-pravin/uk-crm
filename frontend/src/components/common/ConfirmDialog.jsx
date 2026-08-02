const ConfirmDialog = ({
  open,
  title = "Are you sure?",
  description = "",
  onConfirm,
  onCancel,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="bg-zinc-900 p-6 rounded-xl w-80 space-y-4">
        <h3 className="text-lg font-semibold">{title}</h3>

        {description && (
          <p className="text-sm text-gray-400">{description}</p>
        )}

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="bg-zinc-700 px-4 py-2 rounded"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="bg-red-600 px-4 py-2 rounded"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
// //fixed: Positions the element relative to the browser viewport so it stays in place even when scrolling.

// inset-0: Sets top: 0, right: 0, bottom: 0, and left: 0 so the overlay covers the full screen.

// flex items-center justify-center: Uses Flexbox to perfectly center the modal box horizontally and vertically.

// bg-black/70: Gives the backdrop a black background with 70% opacity to dim out the rest of the page.

// z-50: Ensures the modal renders on top of other content using z-index: 50.
// bg-zinc-900: Sets a dark gray background color.

// p-6: Adds 1.5rem (24px) of padding inside the card.

// rounded-xl: Rounds the outer corners of the card.

// w-80: Sets a fixed width of 20rem (320px).

// space-y-4: Adds a vertical margin gap between direct child elements inside this container.
// text-lg font-semibold: Sets large font size with a semi-bold weight.

// {title}: Renders the string value passed via the title prop.

// {description && (...)}: Short-circuit logic. It only renders the <p> element if description is a non-empty string.

// <p className="...">: Renders the body text.

// text-sm text-gray-400: Sets small font size with muted gray text.

// {description}: Renders the text content.
// flex justify-end: Uses Flexbox and aligns the child buttons to the far-right.

// gap-3: Adds horizontal spacing between the buttons.
// Cancel Button:

// onClick={onCancel}: Triggers the onCancel callback when clicked.

// bg-zinc-700 px-4 py-2 rounded: Gives it a neutral dark-gray color, padding (16px horizontal, 8px vertical), and rounded corners.

// Confirm Button:

// onClick={onConfirm}: Triggers the onConfirm callback when clicked.

// bg-red-600 px-4 py-2 rounded: Uses a red background to signal a destructive or decisive action.