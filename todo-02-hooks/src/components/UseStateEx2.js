import { useState } from "react";

const UseStateEx2 = () => {
    const [name, setName] = useState('');
    const [nickname,setNickName] = useState('');

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
export default UseStateEx2;