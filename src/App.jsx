import React from 'react';
import { Button } from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './temaConfig';
import Navbar from './components/Navbar';
import Listas from './components/Listas';


function App () {
  return(
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Listas/>
    </ThemeProvider>
    
  )
}

export default App;