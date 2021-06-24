import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const listText = [
  "Data may be inaccurate.",
  "Data is off by one day (sometimes two).",
  "Data sources are linked at the bottom of the page.",
];

const WarningContent = () => {
  return (
    <List>
      {listText.map((text, index) => {
        return (
          <ListItem key={index + Math.random() * 1000}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default WarningContent;
