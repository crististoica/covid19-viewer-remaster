import { useState } from "react";
import { IconButton, Tooltip, useTheme } from "@material-ui/core";

import DialogComponent from "../DialogComponent";

const Help = ({
  classes,
  icon: Icon,
  title,
  content: Content,
  tooltipTitle,
}) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title={tooltipTitle}>
        <IconButton onClick={handleClickOpen}>
          <Icon color="primary" />
        </IconButton>
      </Tooltip>
      <DialogComponent
        open={open}
        handleClose={handleClose}
        classes={classes}
        title={title}
      >
        <Content theme={theme} classes={classes} />
      </DialogComponent>
    </div>
  );
};

export default Help;
