import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: #fff;
  color: ${props => props.theme.bgColor};
  margin-bottom: 10px;
  border-radius: 15px;
  a{
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover{
    a{
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
font-size: 48px;
  color:${(props) =>props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

// 받아오는 코인 데이터가 어떻게 생겼는지 알려줌
interface ICoin{
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string,
}

function Coins(){

  // reqct query의 useQuery 훅 사용 (query 고유식별자, fetcher 함수)
  // * useQuery 훅 : api.ts의 fetcher 함수를 부르고, fetcher 함수가 loading 중이라면 그것을 알려주고, fetcher 함수가 끝나면 json을 data에 넣는다. 
  const { isLoading, data} = useQuery<ICoin[]>("allCoins", fetchCoins);   
  //! api.ts로 대체
  /*
  // 기본값은 빈배열로 지정
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [loading, setLoading] = useState(true);

  // API Fetch 하기
  useEffect(() => {
    (async() => {
      const response = await fetch('https://api.coinpaprika.com/v1/coins');
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, [])
  */
  
  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              {/* Link를 통해 다른 화면에 정보를 보낼 수 있다.  */}
              <Link 
                to={{
                  pathname: `/${coin.id}`,
                  state: {name: coin.name},
                }}
                >
                <Img
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                />
                {coin.name} &rarr;</Link>
            </Coin>
          ))}
        </CoinsList> 
      )}
    </Container>
  )
}

export default Coins;