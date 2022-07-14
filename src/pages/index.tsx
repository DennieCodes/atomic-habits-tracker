import type { NextPage } from "next";
import HabitTracker from "../components/habitTracker";
import styles from "../../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <main className={styles.container}>
      <HabitTracker />
    </main>
  );
};

export default Home;
