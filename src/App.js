import * as React from 'react';
import ReactDOM from 'react-dom';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import SettingsIcon from '@mui/icons-material/Settings';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SettingsDialog from './component/SettingsDialog.js'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Route,
  useParams,
  useLocation,
} from 'react-router-dom';

const theme = createTheme();

export default function Top() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="l">
        <CssBaseline />
        <NavigationTab />
      </Container>
    </ThemeProvider>
  );
}

function NavigationTab(){
  const [value, setValue] = React.useState(0);
  const [id, setId] = React.useState(0);
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSettingsClose = (value) => {
    setSettingsOpen(false);
    setId(value);
  };

  return(
    <Box sx={{bgcolor: 'background.paper',width: '100%'}}>
      <AppBar position="static">
        <Toolbar>
          <h1>ISIIs</h1>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="inherit"
          >
            <Tab label="申請前"/>
            <Tab label="申請済み"/>
            <Tab label="発注済み"/>
            <Tab label="納品済み"/>
            <Tab label="受け取り済み"/>
          </Tabs>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'right'}}>
            25000/30000円
          </Typography>
          <Box textAlign="center" margin="0px 100px 0px 100px">
            Team1
          </Box>
          <Fab onClick={()=>setSettingsOpen(true)} size="small">
            <SettingsIcon />
          </Fab>
        </Toolbar>
      </AppBar>
      <Box>
        <SettingsDialog
          selectedValue={id}
          open={settingsOpen}
          onClose={handleSettingsClose}
        />
        <TabPanel value={value} index={0}>
          申請前
        </TabPanel>
        <TabPanel value={value} index={1}>
          申請済み
        </TabPanel>
        <TabPanel value={value} index={2}>
          発注済み
        </TabPanel>
        <TabPanel value={value} index={3}>
          納品済み
        </TabPanel>
        <TabPanel value={value} index={4}>
          受け取り済み
        </TabPanel>
      </Box>
    </Box>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}