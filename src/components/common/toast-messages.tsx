import { notification } from "antd";

/** 
 *  NOTE
 * 
 *  These functions can only be used withing client components
 */

export const showErrorToast = (title: string, message: string) => {
  notification["error"]({
    message: title,
    description: message,
    duration: 5,
  });
};

export const showSuccessToast = (title: string, message: string) => {
  notification["success"]({
    message: title,
    description: message,
    duration: 5,
  });
};

export const showInfoToast = (title: string, message: string) => {
  notification["info"]({
    message: title,
    description: message,
    duration: 5,
  });
};

export const showWarningToast = (title: string, message: string) => {
  notification["warning"]({
    message: title,
    description: message,
    duration: 5,
  });
};
