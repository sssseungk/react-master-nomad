const BASE_URL = `https://api.coinpaprika.com/v1`

export function fetchCoins(){
  return fetch(`${BASE_URL}/coins`).then(
    (response) => response.json()
  );
}

// 코인 상세페이지의 코인 정보
export function fetchCoinInfo(coinId: string){
  return fetch(`${BASE_URL}/coins/${coinId}`).then(
    (response) => response.json()
  );
}

// 코인 상세페이지의 코인 가격 정보
export function fetchCoinTickers(coinId: string){
  return fetch(`${BASE_URL}/tickers/${coinId}`).then(
    (response) => response.json()
  );
}

// Chart 페이지의 2주동안의 코인 데이터 
export function fetchCoinHistory(coinId: string){
  // const endDate = Math.floor(Date.now() / 1000);
  // const startDate = endDate - 60 * 60 * 24 * 7 * 2;    // 1주일 전 (60초 * 60분 * 24시간 * 7일)
  return fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`).then(
    (response) => response.json()
  );
}
