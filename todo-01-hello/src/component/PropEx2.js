/* default값 지정 */
/*export default function PropEx2({name='아무개',age=10,loc='제주'}){
    return(
    <div>
        <p>고객님 이름:{name}, 나이:{age}, 지역:{loc}입니다.</p>
    </div>
    );
}*/

export default function PropEx2(props){
    console.log(props);

    /*기본값 설정*/
    PropEx2.defaultProps = {
        name:'아무개',
        age:10,
        loc:'제주'
    }
    
    return(
    <div>
        <p>고객님 이름:{props.name}, 나이:{props.age}, 지역:{props.loc}입니다.</p>
    </div>
    );
}