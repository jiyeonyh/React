//onChange가 <input>에서 발생하면 입력한 데이터를 <p>요소에 출력

import { useState } from "react/cjs/react.development";

export default function UseStateEx2(){
    const [data, setData] = useState('');
    function messageInput(e){
        setData(e.target.value);
    }
    return(
        <div>
            {/* <p placeholder="대기">{data}</p> */}
            <input type='text' placeholder="대기" readOnly='readOnly' value={data}/>
            <input type='text' onChange={messageInput} placeholder="입력"/>
        </div>
    )
}