'use client'
import React, { createContext, ReactNode } from "react";
import { toast, ToastOptions, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface ToastContextProps {
  showToast: (message: string, variant: ToastVariant) => void;
}

type ToastVariant = "success" | "error" | "info" | "warning";

const ToastContext = createContext<ToastContextProps>({} as any);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  function showToast(message: string, variant: ToastVariant) {
    const options: ToastOptions = {
      theme: "dark",
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
      pauseOnFocusLoss: false
    };

    switch (variant) {
      case "success":
        toast.success(message, options);
        break;
      case "error":
        toast.error(message, options);
        break;
      case "info":
        toast.info(message, options);
        break;
      case "warning":
        toast.warn(message, options);
        break;
    }
  }
  
  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

export default ToastContext;
