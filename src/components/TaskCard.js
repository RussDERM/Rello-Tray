import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const TaskCard = ({ body }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <>
      <Card style={styles.taskCard} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Button</Button>
        </CardActions>
      </Card>
    </>
  );
};

const styles = {
  taskCard: {
    color: 'black',
    backgroundColor: '#ffffff',
    borderRadius: '5px',
    marginBottom: '5px',
  },
};

export default TaskCard;
