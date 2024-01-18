
// fetcher 함수 생성하기 : fetch promise를 return 해줘야함 !
// API를 fetch하고 json을 return 하는 함수
export function fetchCoins(){
  return fetch('https://api.coinpaprika.com/v1/coins').then((response) => 
  response.json()
  );
}