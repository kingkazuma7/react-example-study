import './App.css';
import FetchData from './components/FetchData';
import FetchDataReducer from './components/FetchDataReducer';
import AsyncAwait from './components/JavaScript/AsyncAwait';
import ErrorTryCatch from './components/JavaScript/ErrorTryCatch';
import PromiseParts from './components/JavaScript/PromiseParts';
import Return from './components/JavaScript/Return';
import DashBoard from './components/TypeScript/DashBoard';
import Status from './components/TypeScript/Status';

function App() {
  // const name = {
  //   firstName: "名無し", lastName: "太郎" 
  // }
  
  // const students = [
  //   {id:1, name: 'john', age: 12},
  //   {id:2, name: 'mary', age: 10},
  //   {id:3, name: 'taro', age: 11},
  // ];
  
  return (
    <>
      {/* <FetchData /> */}
      <hr />
      {/* <FetchDataReducer /> */}
      <hr />
      {/* <PromiseParts /> */}
      <hr />
      {/* <ErrorTryCatch /> */}
      <hr />
      {/* <Return /> */}
      <hr />
      {/* <AsyncAwait /> */}
      <hr />
      {/* <DashBoard username="nasio" notification={10} name={{ firstName: "名無し", lastName: "太郎"  }} students={students} /> */}
      <hr />
      <Status status="loading" />
      {/* <Status /> */}
    </>
  );
}

export default App;
