import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Card,
  CardActions,
  CardContent,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  ListItemIcon,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function ReliefCenterActionCard({ list, name, onAssignClick }) {
  const [value, setValue] = useState(1);
  const classes = useStyles();

  //   Handle Radio Change
  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h6">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <List>
            {list.map((listItem, index) => (
              <ListItem key={index}>
                <ListItemText>{listItem.type}</ListItemText>
                <ListItemText>{listItem.total}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container justify="flex-end">
          <Button color="primary" variant="contained" onClick={onAssignClick}>
            Assign
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}
