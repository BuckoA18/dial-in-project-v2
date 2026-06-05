const PullShotButton = ({ children, className }) => {
  return (
    <div
      className={`size-20 rounded-full bg-neutral-950 ${className} flex items-center justify-center`}
    >
      <button
        aria-label="Pull a shot"
        className={`flex cursor-pointer items-center justify-center gap-2 rounded-full border-3 border-orange-700 bg-neutral-950 p-4 text-xl font-semibold text-orange-600 shadow-orange-700 transition-transform duration-75 hover:scale-98 focus:border-neutral-200 focus:text-neutral-200 focus:ring-2 focus:ring-neutral-200 focus:outline-none active:scale-90 sm:justify-between sm:bg-neutral-900 sm:px-4 sm:py-2`}
      >
        {children}
      </button>
    </div>
  );
};

export default PullShotButton;
