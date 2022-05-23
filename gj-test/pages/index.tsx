import type { NextPage } from 'next'
import Head from 'next/head'
import Ticker from '../components/Ticker';
import styles from '../styles/Home.module.css'

interface HomeProps {
  atv: string;
  tradingPairs: {
    trading: string;
    base_decimals: number;
    url_symbol: string;
    name: string;
    instant_and_market_orders: string;
    minimum_order: string;
    counter_decimals: number;
    description: string;
  }[];
  intitialTradingPairs: {
    high: string;
    last: string;
    timestamp: string;
    bid: string;
    vwap: string;
    volume: string;
    low: string;
    ask: string;
    open: string;
  };
}

const Home: NextPage<HomeProps> = ({
  atv,
  tradingPairs,
  intitialTradingPairs,
}: HomeProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>GJ-test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="flex flex-wrap overflow-hidden lg:-mx-2 xl:-mx-1 h-full">
          <div className="w-full overflow-hidden lg:my-2 lg:w-full xl:my-1 xl:px-1 xl:w-1/2 ">
            <Ticker atv={atv} />
          </div>
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const tradingPairsData = await fetch(
    "https://www.bitstamp.net/api/v2/trading-pairs-info/"
  );

  const bitstampData = await fetch(
    "https://www.bitstamp.net/api/v2/ticker/btcusd"
  );

  const coinbaseData = await fetch(
    "https://api.coinbase.com/v2/exchange-rates?currency=BTC"
  );

  const bitfinexData = await fetch(
    "https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD"
  );

  const tradingPairs = await tradingPairsData.json();
  const bitstampDataJson = await bitstampData.json();
  const coinbaseDataJson = await coinbaseData.json();
  const bitfinexDataJson = await bitfinexData.json();

  const initialTradingPairResponse = await fetch(
    `https://www.bitstamp.net/api/v2/ticker/${tradingPairs[0].url_symbol}/`
  );

  const initialTradingPairData = await initialTradingPairResponse.json();

  const atv = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(
    (Number(bitstampDataJson.last) +
      Number(coinbaseDataJson.data.rates.USD) +
      bitfinexDataJson[0][1]) /
      3
  );

  return {
    props: {
      atv,
      tradingPairs,
      initialTradingPairData,
    },
  };
}

export default Home
