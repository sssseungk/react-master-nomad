import { useParams } from "react-router-dom";

interface RouteParams{
  coinId: string;
}

function Coin(){
  const { coinId } = useParams<RouteParams>();
  
  return (
    <h1>Coin: {coinId}</h1>
  )
}

export default Coin;

// 타입스크립한테 useParams가 coindId를 포함하는 오브젝트를 반환할것임을 알려준다.