import { useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import { useGlobalContext } from "../../GlobalState/GlobalState";

const Toast = ({ msg, toastType, isToastOpen }) => {
  const { addToast } = useToasts();
  const { cart } = useGlobalContext();

  useEffect(() => {
    if (isToastOpen) {
      addToast(msg, {
        appearance: toastType ? toastType : "success",
        autoDismiss: true,
      });
    }
  }, [cart]);

  return <></>;
};

export default Toast;
