import { useReducer } from "react";

/*useReduder : useState보다 더 다양한 컴포넌트 상황에 따라 
다양한 상태를 다른 값으로 업데이트해주고 싶을 때 사용한다. 
리듀서는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션(action)값을 
전달받아 새로운 상태를 변환하는 함수이다. 리듀서 함수에서 새로운 상태를 
만들 때는 반드시 불변성을 지켜 주어야 한다.
*/

function reducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return {value:state.value+1};
        case 'DECREMENT':
            return {value:state.value-1};
        default:
            return state;
    }
}

const UseReducerEx = () => {

    const [state, dispatch] = useReducer(reducer,{value:0});
    return(
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b>입니다.
            </p>
            <button onClick={() => dispatch({type:'INCREMENT'})}>+1</button>
            <button onClick={() => dispatch({type:'DECREMENT'})}>-1</button>
        </div>
    );
};

export default UseReducerEx;