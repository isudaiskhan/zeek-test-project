import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

export const useReduxUser = () => {
  return useSelector((state) => state.authUser.user);
};

export const useRouterQuery = () => {
  return useRouter().query;
};

/**
 * useToggleState hook
 * @param {boolean} initialState - initial state of toggle
 * @returns {array} [state, toggleState] - state and toggleState function
 */
export const useToggleState = (initialState) => {
  // state
  const [state, setState] = useState(initialState);

  /**
   * toggleState function
   * @returns {void}
   */
  const toggleState = (newVal) => {
    if (typeof newVal !== "undefined") {
      setState(newVal);
    } else {
      setState(!state);
    }
  };

  return [state, toggleState];
};

/**
 * A hook that provides a submit handler for forms.
 *
 * It takes no parameters and returns a single function which can be used
 * as a submit handler for forms. The function takes in the values of the
 * form and sets the loading state to true when the function is called.
 * When the function is resolved, it sets the loading state to false.
 *
 * @returns An object with the following properties: submitHandler, submitLoading
 */
export const useSubmitHandler = () => {
  // state
  const [submitLoading, setSubmitLoading] = useState(false);

  /**
   * Submit handler
   *
   * @param {{
   *   onSubmit: () => Promise<any>,
   *   onSuccess?: (data: any) => void,
   *   onError?: (error: Error) => void,
   *   onFinally?: () => void,
   *   successMsg?: string,
   *   loadingMsg?: string
   * }} options
   *
   * @returns {Promise<void>}
   */
  const submitHandler = async ({
    onSubmit,
    onSuccess = () => {},
    onError = () => {},
    onFinally = () => {},
    successMsg = "Operation successful",
    loadingMsg = "In progress...",
  }) => {
    const toastID = toast.loading(loadingMsg, {
      important: true,
    });

    try {
      setSubmitLoading(true);
      const data = await onSubmit();
      toast.success(successMsg, {
        id: toastID,
      });

      onSuccess(data);
    } catch (error) {
      toast.error(error.message, {
        id: toastID,
      });
      onError(error);
      throw error;
    } finally {
      setSubmitLoading(false);
      onFinally();
    }
  };

  return { submitHandler, submitLoading };
};
