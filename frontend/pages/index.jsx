import styles from "../styles/Home.module.css";
import TokenBalancesDisplay from "../components/tokenBalancesDisplay.jsx";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <TokenBalancesDisplay address={"vitalik.eth"} chain={"ETH_MAINNET"}/>
      </main>
    </div>
  );
}
