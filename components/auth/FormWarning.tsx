import { CircleAlertIcon } from 'lucide-react';
import React from 'react'
interface FormWarningProps {
    message?: string;
  }
const FormWarning = ({message}:FormWarningProps) => {
    if (!message) return null;
    return (
      <div className="bg-yellow-500/10 p-3 rounded-md flex items-center gap-x-2 text-sm text-yellow-600">
        <CircleAlertIcon className="w-4 h-4" />
        <p>{message}</p>
      </div>
    );
  };

export default FormWarning