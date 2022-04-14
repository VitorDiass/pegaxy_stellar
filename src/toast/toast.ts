import toast, { ToastPosition } from "react-hot-toast";

export enum TOAST_TYPE {
    SUCCESS = "success",
    ERROR = "error",
    CUSTOM = "custom",
    DEFAULT = 'default'
}

export const MyToaster = (toastMessage: string, toastId : string, toastType: TOAST_TYPE = TOAST_TYPE.DEFAULT, toastPosition: ToastPosition = 'top-center') => {
    const baseStyle = {
        borderRadius: "10px",
        background: "var(--color-toast-bg)",
        color: "#fff",
        height: "50px",
    };

    switch (toastType) {
        case TOAST_TYPE.SUCCESS:
            return toast.success(toastMessage, {
                id : toastId,
                style: baseStyle,
                position: toastPosition,
            });
        case TOAST_TYPE.ERROR:
            return toast.error(toastMessage, {
                id : toastId,
                style: baseStyle,
                position: toastPosition,
            });
        default:
            return toast(toastMessage, {
                id : toastId,
                style: baseStyle,
                position: toastPosition,
            });
    }
};
