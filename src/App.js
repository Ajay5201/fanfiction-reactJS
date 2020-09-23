import React from 'react';
import Album from './Layout/HomePage/Album/Album'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Blog from './Layout/HomePage/Main/Blog';

function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <div >
  <ThemeProvider theme={theme}>
  <CssBaseline/>
      
        
        
        
         <Blog/>
    
    
    
    </ThemeProvider>
    </div>
  );

}

export default App;
