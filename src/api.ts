const BASE_URL = `https://api.coinpaprika.com/v1`
// fetcher 함수 생성하기 : fetch promise를 return 해줘야함 !
// API를 fetch하고 json을 return 하는 함수
export function fetchCoins(){
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

// 코인 상세페이지의 코인 정보
export function fetchCoinInfo(coinId: string){
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) => response.json());
}

// 코인 상세페이지의 코인 가격 정보
export function fetchCoinTickers(coinId: string){
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) => response.json());
}