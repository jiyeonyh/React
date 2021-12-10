
/* 
useMemo은 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있다. 
*/
//useState를 이용해서 list에 있는 값들의 평균을 냄

import { useState } from "react/cjs/react.development";

const getAverage = numbers => {
    console.log('평균값 계산');
    if(numbers.length===0) return 0;

    const sum = numbers.reduce((a,b) => a+b);
    return sum/numbers.length;
}

const UseMemoEx = () => {

    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = e => {
        setNumber(e.target.value);
    };

    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');

    }
    return(
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value,index) => <li key={index}>{value}</li>)}
            </ul>
            <div>
                <b>평균값:</b>{getAverage(list)}
            </div>
        </div>
    );
}

export default UseMemoEx;