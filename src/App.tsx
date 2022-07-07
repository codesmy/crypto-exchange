import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { CryptoTable, ConverterBlock } from './components';
import useStyles from './styles';

function App() {

  const classes: any = useStyles();
  return (
    <Container fixed>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <CryptoTable classes={classes} />
        </Grid>
        <Grid item xs={4}>
          <ConverterBlock classes={classes} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
