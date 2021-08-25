import { List, ListItem, ListItemAvatar, ListItemText, Avatar, IconButton } from "@material-ui/core";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { Box } from "@material-ui/core";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

// Icons
import DeleteIcon from '@material-ui/icons/Delete';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import HomeIcon from '@material-ui/icons/Home';
import StorefrontIcon from '@material-ui/icons/Storefront';
import BuildIcon from '@material-ui/icons/Build';

const ItemList = ({ ...props }) => {
  const { dispatch } = useContext(AppContext);
  const positiveOrNegative = props.type === "expense" ? "-" : "+";

  const Icon = () => {
    switch (props.tag) {
      case "Food":
        return <FastfoodIcon />
      case "Games":
        return <SportsEsportsIcon />
      case "Shopping":
        return <StorefrontIcon />
      case "Home":
        return <HomeIcon />
      case "Other":
        return <BuildIcon />
      default:
        return <BuildIcon />
    }
  }

  return (
    <List>
      <ListItem className="calculator__lists__item">
        <ListItemAvatar>
          <Avatar>
            <Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.tag} />
      </ListItem>
      <ListItemSecondaryAction className="calculator__lists__item">
        <Box display="flex" alignItems="center" gridGap="1em">
          <ListItemText primary={`${positiveOrNegative} ${props.amount}`} />
          <IconButton onClick={() => dispatch({ type: "REMOVE", id: props.id })} edge="end">
            <DeleteIcon />
          </IconButton>
        </Box>
      </ListItemSecondaryAction>
    </List>
  );
}

export default ItemList;