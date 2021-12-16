import { toast } from "react-toastify";
import './toast.scss'

export const toastInformSuccess = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    className: "styled-success-on-switch-status",
  });
  //console.log("Toast fire!!!")
  return null;
};

export const toastError = (message) => {
  toast.error(message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  return null;
};