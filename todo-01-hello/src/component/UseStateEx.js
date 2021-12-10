import { useState } from "react";

//useState가 제공함으로써 동적으로 처리하는게 가능함
export default function UseStateEx(){
    //data의 상태를 0으로 주고 data의 값을 setData함수에서 업데이트 해준다.
    const [data, setData] = useState(0);

    return(
        <div>
            <h3>{data}</h3>
            {/* <button onClick={()=>{console.log('+1');}}>+1</button>
            <button onClick={()=>{console.log('-1');}}>-1</button> */}

            <button onClick={()=>{setData(data+1);}}>+1</button>
            <button onClick={()=>{setData(data-1);}}>-1</button>
        </div>
    );
}