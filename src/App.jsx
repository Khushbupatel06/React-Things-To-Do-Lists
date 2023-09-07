import CssBaseline from '@mui/material/CssBaseline';
import ToDoLists from './ToDoList';
import Navbar from './Navbar';
import "./App.css";


function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <ToDoLists />
    </>
  );
}

export default App;