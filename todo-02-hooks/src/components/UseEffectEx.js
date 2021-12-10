/* useEffect : 컴포넌트가 랜더링 될 때 마다 특정 작업을 수행하도록 설정하는 기능이다. */

import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const UseEffectEx = () => {

    
    const [name, setName] = useState('');
    const [nickname,setNickName] = useState('');
    
    /* useEffect(() => {
        console.log('랜더링이 되었습니다.'); 
        console.log({name,nickname});
    }); */

    //마운트 될 때만 useEffect실행하고 업데이트 할떄에는 실행되지 않도록 하려면
    //-2번째 인자로 비어있는 []를 넣어준다.
    //useEffect(() => {console.log('랜더링이 되었습니다.'); },[]);

    /* useEffect(() => {
        console.log('랜더링이 되었습니다.'); 
        console.log({name});
    },[name]); */
    
    //컴포넌트가 어마운트 되기 전이나 업데이트 되기 직전에 어떠한 작업을 수행하고 싶을때
    /* useEffect(() => {
        console.log('랜더링이 되었습니다.'); 
        console.log({name});
        return() => {
            console.log('cleanup');
            console.log(name);
        }
    },[name]); */

    //컴포넌트가 나타날때 콘솔에 effect가 나타나고, 사라질때 cleanup이 나타난다.
    useEffect(() => {
        console.log('랜더링이 되었습니다.'); 
        console.log({name});
        return() => {
            console.log('cleanup');
        }
    },[]);

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickName = e => {
        setNickName(e.target.value);
    }

    return(
        <div>
            <div>
                <div>
                    <input value={name} onChange={onChangeName}/>
                    <input value={nickname} onChange={onChangeNickName}/>
                </div>
            </div>
    
            <div>
                <div>
                    <b>이름:</b>{name}
                </div>
                <div>
                    <b>닉네임:</b>{nickname}
                </div>
            </div>
        </div>
        );
}

export default UseEffectEx;