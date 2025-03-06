import React from 'react';
import { Button, Container, TextField, Typography, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MuiDataGrid from './components/MuiDataGrid';

const App: React.FC = () => {
  const [numberOfRows, setNumberOfRows] = React.useState(50);
  const [darkMode, setDarkMode] = React.useState(() => 
    localStorage.getItem('darkMode') === 'true'
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light'
        }
      }),
    [darkMode]
  );

  const handelChange = (e: any) => {
    e.preventDefault();
    setNumberOfRows(isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ 
        bgcolor: 'background.default', 
        color: 'text.primary',
        minHeight: '100vh',
        py: 3
      }}>
        <Grid container sx={{ justifyContent: 'space-between', margin: '24px 0' }}>
          <Grid container item sx={{ width: 'fit-content' }}>
            <TextField
              size="small"
              label="# of rows"
              required
              value={numberOfRows}
              onChange={handelChange}
            />
          </Grid>
        </Grid>
        <MuiDataGrid 
          numberOfRows={numberOfRows} 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </Container>
    </ThemeProvider>
  );
};

export default App;
