import logo from './logo.svg';
import './App.css';
import UseStateEx from './components/UseStateEx';
import UseStateEx2 from './components/UseStateEx2';
import UseEffectEx from './components/UseEffectEx';
import { useState } from 'react/cjs/react.development';
import UseReducerEx from './components/UseReducerEx';
import UseReducerEx2 from './components/UseReducerEx2';
import UseMemoEx from './components/UseMemoEx';
import UseMemoEx2 from './components/UseMemoEx2';
import UseCallbackEx from './components/UseCallbackEx';

/* function App() {
  return (
    <UseStateEx/>
  );
} */

/* function App(){
  return(
    <UseStateEx2/>
  );
} */

/* function App(){
  const [visible, setVisible] = useState(false);
  return(
    <div>
      <button onClick={() => {
        setVisible(!visible);
      }}>{visible?'숨기기':'보이기'}</button>
      {visible && <UseEffectEx/>}
    </div>
  );
} */

/* function App(){
  return(
    <UseReducerEx/>
  );
} */

/* function App(){
  return (<UseReducerEx2/>);
} */

/* function App(){
  return (<UseMemoEx/>);
} */

/* function App(){
  return (<UseMemoEx2/>);
} */

function App(){
  return (<UseCallbackEx/>);
}
export default App;
