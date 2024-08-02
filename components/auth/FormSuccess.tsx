import React from "react";
import { CircleCheck } from "lucide-react";
interface FormSuccessProps {
  message?: string;
}
const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div className="bg-green-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-green-500">
      <CircleCheck className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};
export default FormSuccess;
