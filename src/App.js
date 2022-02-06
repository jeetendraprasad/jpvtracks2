//import logo from './logo.svg';
import './App.css';
import Reports from './components/reports';
import studentInfo from './AppData/StudentsInfo.json';


function App() {
  return (
    <Reports studentInfoData={studentInfo}/>
  );
}

export default App;
