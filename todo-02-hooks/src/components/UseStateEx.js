import { useState } from "react";
/*
Hooks는 리엑트 v16.8에 새로 도입된 기능으로 함수 컴포넌트에서도 상태 관리를 할 수 있는 useState,
렌더링 직후 작업을 설정하는 useEffect등의 기능을 제공한다.
*/
const UseStateEx = () => {
const [value, setValue] = useState(0);
    return(
        <div>
            <p>현재 카운터 값은<b>{value}</b>입니다.</p>
            <button onClick={() => setValue(value+1)}>+1</button>
            <button onClick={() => setValue(value-1)}>-1</button>
        </div>
    );
}
export default  UseStateEx;