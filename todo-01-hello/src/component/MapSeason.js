import { useState } from "react/cjs/react.development";

export default function MapSeason(){
    const [seasons, setSeasons] = useState([
        {id:1, text:'봄'},
        {id:2, text:'여름'},
        {id:3, text:'가을'},
        {id:4, text:'겨울'},
    ]);

    const [inputText,setInputText] = useState('');
    const [nextId, setNextId] = useState(5); //새로운 항목을 추가할때 사용할 id

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextSeason = seasons.concat({id:nextId,text:inputText});
        setNextId(nextId+1);
        setSeasons(nextSeason);
        setInputText('');
    }

    //제거
    const onRemove = id => {
        const nextSeasons = seasons.filter(season => season.id !== id);
        setSeasons(nextSeasons);
    }

    const seasonList = seasons.map((season)=>(
            <li key={season.id} onDoubleClick={() => onRemove(season.id)}>
                {season.text}
            </li>
    ));

    return(
        <>
            <input value={inputText} onChange={onChange}></input>
            <button onClick={onClick} >추가</button>
            <ul>{seasonList}</ul>
        </>
    );
}