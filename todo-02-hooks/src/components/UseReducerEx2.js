import { useReducer } from "react";

function reducer(state,action){
    return(
        {...state,[action.name]:action.value}
    );
}

const UseReducerEx2 = () => {

    const [state, dispatch] = useReducer(reducer,{name:'',nickname:''});
    const onChange = (e) => {
        dispatch(e.target);
    };

    return(
        <div>
            <div>
                <div>
                    <input value={state.name} onChange={onChange} name='name'/>
                    <input value={state.nickname} onChange={onChange} name='nickname'/>
                </div>
            </div>
    
            <div>
                <div>
                    <b>이름:</b>{state.name}
                </div>
                <div>
                    <b>닉네임:</b>{state.nickname}
                </div>
            </div>
        </div>
        );
}

export default UseReducerEx2;