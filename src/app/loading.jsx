import { Spinner } from "@heroui/react";

const loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[90vh]">
      <div>
        <Spinner className="text-purple-600" />
      </div>
    </div>
  );
};

export default loading;
