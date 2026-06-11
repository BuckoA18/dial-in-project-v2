import { LoaderIcon } from "lucide-react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-80 backdrop-blur-sm transition-opacity">
      <div className="z-99">
        <LoaderIcon className="animate-spin" />
      </div>
    </div>
  );
};

export default Loader;
