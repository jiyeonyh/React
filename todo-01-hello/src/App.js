import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import JsxEx from './component/JsxEx';
import UserName from './component/UserName';
import EventEx from './component/EventEx';
import PropEx from './component/PropEx';
import PropEx2 from './component/PropEx2';
import Wrapper from './component/Wrapper';
import UseStateEx from './component/UseStateEx';
import UseStateEx2 from './component/UseStateEx2';
import MapEx from './component/MapEx';
import MapSeason from './component/MapSeason';

/*function App(){
return(<div><JsxEx/></div>);
}*/

/*function App(){
return(<div><UserName/></div>);
}*/

/*function App(){
  return(<div><EventEx/></div>);
}*/

/*function App(){
  const name='홍길동';
  const age=30;
  const loc='서울';
  return(
  <div>
    <PropEx name={'홍길동'}/>
    <PropEx name={'정해인'}/>
    <PropEx2 name={name} age={age} loc={loc}/>
    <PropEx2 name={name} age={age} />
    <PropEx2 name={name} loc={loc} />
  </div>);}*/

// function App(){
//   return(
//     <Wrapper>
//       {/* Wrapper컴포넌트에서 여기에 있는 하위요소를 받을 수 있는 {children} 선언해줘야 한다.*/}
//       <PropEx2 name={'정해인'} age={30} loc={'대구'} />
//     </Wrapper>
//   );
// }

// function App(){
//   return(
//     <UseStateEx/>
//   );
// }

/* function App(){
  return (
    <UseStateEx2/>
  );
} */

/* function App(){
  return(
    <MapEx/>
  );
} */

function App(){
  return(
    <MapSeason/>
  );
}

export default App;
