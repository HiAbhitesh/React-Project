import './App.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import WeatherApp from './WeatherApp';

function App() {

  let handleInput = () => {
    console.log("Button was Clicked");
  }

  return (
    <>
      <WeatherApp/>
    </>
  )
}

export default App
