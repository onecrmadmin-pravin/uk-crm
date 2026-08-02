const Loader = () => {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-700 border-t-blue-500" />
    </div>
  );
};

export default Loader;

// h-10 w-10: Sets a fixed height and width of 2.5rem (40px), making it a square.

// animate-spin: Applies a continuous 360-degree CSS rotation animation using @keyframes spin.

// rounded-full: Sets border-radius: 9999px to transform the square into a perfect circle.

// border-4: Sets the border thickness to 4px on all sides.

// border-zinc-700: Sets the default color of all 4 borders to a dark gray background ring.

// border-t-blue-500: Overrides only the top border with a bright blue color, creating the highlighted accent segment that appears to spin around the circle.