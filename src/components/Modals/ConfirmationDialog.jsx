import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import Spinner from "components/Spinner/Spinner";

const ConfirmationDialog = ({
  title = "",
  confirmationBtnText = "Confirm",
  setDialog,
  setService,
  setServiceName,
  onConfirm,
  confirmationBtnColor = "primary",
  isLoading,
  loading,
}) => {
  const closeDialog = () => {
    setDialog(false);
    if (setService) {
      setService();
    }
    if (setServiceName) {
      setServiceName("");
    }
  };

  if (isLoading) {
    return (
      <Dialog
        maxWidth="sm"
        open={true}
        onClose={closeDialog}
        aria-labelledby="confirmation-dialog"
        fullWidth
        className="p-3 flex justify-center"
      >
        <DialogContent>
          <Spinner />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog
      open={true}
      onClose={closeDialog}
      aria-labelledby="confirmation-dialog"
      fullWidth
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent></DialogContent>
          <DialogActions>
            <Button onClick={closeDialog} color="secondary">
              Cancel
            </Button>
            <Button
              onClick={onConfirm}
              color="warning"
              disableElevation
              variant="contained"
            >
              {confirmationBtnText}
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

export default ConfirmationDialog;
