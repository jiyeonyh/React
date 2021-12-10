export default function EventEx(){
    const name = '홍길동';
    function showName(){
        console.log(name);
    }

    function showText(e){
        //console.log(e.target.value);
        console.log(document.getElementsByTagName('input')[0].value);
    }

    function showMessage(msg){
        console.log(msg);
    }
    return (
        <div>
            <button onClick={showName}>Show name</button>
            <input type='text' onChange={showText}/>
            <input type='text' onChange={(e) => {
                console.log(e.target.value);
                }}/>
            <input type='text' onChange={(e) => {
                showMessage(e.target.value);
            }}/>
        </div>
    );
}