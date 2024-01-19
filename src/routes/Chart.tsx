import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

// 하루의 코인 데이터
interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps{
  coinId: string;
}

function Chart({coinId}:ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"   // 차트 타입 종류
          // 차트 데이터
          series={[
            {
              name: "Price",
              data: data?.map((price) => price.close) as number[],
            },
          ]}
          options={{   
            theme:{
              mode: "dark",
            } ,
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid:{show:false},
            // 차트 선 커스텀
            stroke: {
              curve: "smooth",
              width: 3,
            },
            yaxis: {
              show: false
            },
            xaxis: {
              labels: {show: false},
              axisTicks: {show: false},
              axisBorder: {show: false},
            }
          }}
        />
      )}
    </div>
  )
}

export default Chart;