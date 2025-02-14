import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";

import Spinner from "components/Spinner/Spinner";

const ConfirmationDialog = ({
  title = "",
  confirmationBtnText = "Confirm",
  setDialog,
  setService,
  setServiceName,
  onConfirm,
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
      fullWidth
      aria-labelledby="confirmation-dialog"
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "20px",
        },
      }}
    >
      <DialogContent>
        <Box className="flex flex-col justify-center items-center gap-4 p-8">
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: "400",
              lineHeight: "38.19px",
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
          <div className="!w-full flex flex-col gap-6 mt-16">
            <Button
              sx={{
                borderRadius: "10px",
                backgroundColor: "#F4F4F4",
                color: "#787878",
                padding: "12px",
                fontSize: "24px",
                fontWeight: 400,
              }}
              disabled={loading}
              onClick={closeDialog}
            >
              Cancel
            </Button>
            <Button
              sx={{
                borderRadius: "10px",
                backgroundColor: "#F4F4F4",
                color: "#FF3F3F",
                padding: "12px",
                fontSize: "24px",
                fontWeight: 400,
              }}
              onClick={onConfirm}
              loading={loading}
            >
              {confirmationBtnText}
            </Button>
          </div>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationDialog;
