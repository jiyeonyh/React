import './JsxEx.css';
import { Fragment } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

/* 하나만 리턴가능(div로 감싸줌) */
/*function App() {
 return(
  <div>
    <div>Hello</div>
    <div>React</div>
  </div>
 );
}/*

/* Fragment로 감싸줘서 안보이게 할 수 있음*/
/*function App(){
  return 
  <Fragment>
    <p>start</p>
    <span>!!!!</span>
  </Fragment>
}*/

/*function App(){
  return (<>
            <h1>work</h1>
          <h2>list</h2>
          </>);
}*/

/* 변수는 중괄호({})이용해서 사용*/
/*function App(){
  const numX = 3;
  const numY = 5;

  //style은 중괄호 두번.
  //background-color가 아닌 backgroundColor
  //Object.style.backgroundColor='aqua';
  return(<p style={{backgroundColor:'aqua'}}>{numX + numY}</p>);
}*/

/* if같은 제어문 사용불가-조건 연산자 사용 */
/*function App(){
  const name = 'react';
  return(
    <div>
      {name==='react' ? <h1>리액트입니다.</h1> : <h1>리액트가 아닙니다.</h1>}
    </div>
  )
}*/

/*function App(){
  const name = 'react';
  //null을 렌더링하면 아무것도 출력이 안된다.
  //return(<div>{name==='REACT'?'참':null}</div>);
  //return(<div>{name==='REACT'?<h1>참</h1>:<h1>null</h1>}</div>);
  return(<div>{name==='react'&&'참'}</div>);
}*/

/*function App(){
  const name = undefined;
  return(<div>{name || '값이 undefined 입니다.'}</div>);
}*/

/*function App(){
  const name='홍길동';
  return(<div className="react">{name}</div>);
}*/

/* jsx에서 주석 다는 법 */
function JsxEx(){
  return (<div>{/* 주석 시작*/}<p>comment</p>{/* 주석 끝 */}</div>);
}

export default JsxEx;