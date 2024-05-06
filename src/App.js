import './App.css';
import FetchData from './components/FetchData';
import FetchDataReducer from './components/FetchDataReducer';
import AsyncAwait from './components/JavaScript/AsyncAwait';
import ErrorTryCatch from './components/JavaScript/ErrorTryCatch';
import PromiseParts from './components/JavaScript/PromiseParts';
import Return from './components/JavaScript/Return';
import DashBoard from './components/TypeScript/DashBoard';
import Status from './components/TypeScript/Status';
import ChildrenParts from './components/TypeScript/ChildrenParts';
import WrapperChildrenParts from './components/TypeScript/WrapperChildrenParts';
import Event from './components/TypeScript/Event';
import UseState from './components/UseState';
import CustomHook from './components/CustomHook';
import ArrayMap from './components/ArrayMap';
import ReactuseEffect from './components/ReactuseEffect';
import Object_01 from './components/Owl_JavaScript/Object_01';
import UseStateTSX from './components/TypeScript/UseStateTSX.tsx';
import UseReducer from './components/TypeScript/UseReducer.tsx';
import Object_01_6 from './components/Owl_JavaScript/Object_01_6.js';
import Object_01_7 from './components/Owl_JavaScript/Object_01_7.js';
import Object_01_8 from './components/Owl_JavaScript/Object_01_8.js';
import DestructuringAssignment from './components/DestructuringAssignment.js';


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
      {/* <Status status="loading" /> */}
      {/* <Status /> */}
      <hr />
      {/* <div>
      <WrapperChildrenParts>
        <ChildrenParts>親から子へチルドレン</ChildrenParts>
      </WrapperChildrenParts>
      </div> */}
      {/* <Event
        click={(e, text) => alert(text)}
        change={(e) => console.log(e)}
        // change={(e) => console.log(e.target.value)}
      /> */}
      <hr />
      {/* <UseState /> */}
      <hr />
      {/* <CustomHook /> */}
      <hr />
      {/* <ArrayMap /> */}
      <hr />
      {/* <ReactuseEffect /> */}
      <hr />
      {/* <Object_01 /> */}
      {/* <Object_01_6 /> */}
      {/* <Object_01_7 /> */}
      {/* <Object_01_8 /> */}
      <hr />
      {/* <UseStateTSX /> */}
      {/* <UseReducer /> */}
      <DestructuringAssignment />
    </>
  );
}

export default App;
