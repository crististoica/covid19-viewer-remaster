import { forwardRef } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Slide,
} from "@material-ui/core";

const Transition = forwardRef((props, ref) => (
  <Slide direction="down" ref={ref} {...props} />
));

const DialogComponent = ({ open, handleClose, classes, title, children }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        <div className={classes.iconWTextGap1}>{title}</div>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogComponent;
