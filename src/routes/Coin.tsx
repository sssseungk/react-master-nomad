import { useEffect, useState } from "react";
import { Switch, Route, useLocation, useParams, Link } from "react-router-dom";
import styled from "styled-components";
import Price from "./Price";
import Chart from "./Chart";

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

const Title = styled.h1`
font-size: 48px;
  color:${(props) =>props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface RouteParams{
  coinId: string;
}

interface RouteState{
  name:string;
}

// info 타입 정의하기
// 1. console.log(infoData)로 콘솔에서 확인한 infoData 우클릭 > Store object as global variable (temp1에 객체 데이터가 저장됨)
// 2. Object.keys(temp1)로 temp1 객체의 키값들 뽑아내기
// 3. Object.keys(temp1).join() 으로 키들 문자열로 합친 후 interface의 id에 넣기
// 4. Object.values(temp1).map(v => typeof v).join()로 값의 타입들 뽑아내서 interface의 value에 넣기
interface InfoData{
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

// priceInfo 타입 정의하기
interface PriceData{
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

// 검정색 박스 
const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

// 검정색 박스 안의 아이템(2개의 span) 
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0px;
`;


function Coin(){
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const {state} = useLocation<RouteState>();
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();
  
  useEffect(() => {
    (async () => {
      const infoData = await (
        // 코인 정보 받아오기
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ) .json();
      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
      
    })();
  }, [coinId]);    // coinId가 바뀌면 useEffect 안의 코드가 실행됨

  return (
    <Container>
      <Header>
        <Title>
          {/* loading -> 메인페이지에서가 아닌, 상세페이지로 바로 들어온경우 */}
          {state?.name ? state.name : loading ? "Loading..." : info?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{info?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${info?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source:</span>
              <span>{info?.open_source ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>{info?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{priceInfo?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{priceInfo?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Link to={`/${coinId}/chart`}>
            Chart
          </Link>
          <Link to={`/${coinId}/price`}>
            Price
          </Link>
          
          <Switch>
            <Route path={`/:coinId/price`}>
              <Price />
            </Route>
            <Route path={`/:coinId/chart`}>
              <Chart />
            </Route>
          </Switch>
        </>
      )}
    </Container>
  );
}

export default Coin;