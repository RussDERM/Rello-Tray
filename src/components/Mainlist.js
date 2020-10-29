import React from 'react';
import Container from '@material-ui/core/Container';
import TaskCard from './TaskCard';

const Mainlist = ({ title }) => {
  return (
    <Container style={styles.mainList_container}>
      <h2 style={styles.cardTitle}>{title}</h2>
      <TaskCard
        style={styles.taskCard}
        body="testestsetsetsetsetsetsettestsetsetsetsetsetsetsetsetset"
      />
      <TaskCard
        style={styles.taskCard}
        body="testestsetsetsetsetsetsettestsetsetsetsetsetsetsetsetset"
      />
    </Container>
  );
};

const styles = {
  cardTitle: {
    color: '#ffffff',
  },
  mainList_container: {
    color: 'black',
    backgroundColor: '#073642',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
  },
  taskCard: {
    margin: '500px',
  },
};

export default Mainlist;
