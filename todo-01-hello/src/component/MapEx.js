
//브라우저에서는 정상적으로 결과가 출력되지만 콘솔창에 key값 필요하다는 오류발생.
//Warning: Each child in a list should have a unique "key" prop.
//고유한 값을 갖는 index 이용해서 key값 설정
export default function MapEx(){
    const season = ['봄','여름','가을','겨울'];
    const seasonList = season.map((season,index) => <li key={index}>{season}</li>);
    return(
        <ul>{seasonList}</ul>
    );
}

//<li>~</li>가 반복이 되어 사용하고 있어 파일 용량이 쓸데없이 증가할 수 있고
//주어진 데이터가 유동적일때 효율적이지 않다.
/* export default function MapEx(){
    return(
        <ul>
            <li>봄</li>
            <li>여름</li>
            <li>가을</li>
            <li>겨울</li>

        </ul>
    );
} */