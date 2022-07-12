import NewHabitForm from "../../components/habitTracker/newHabitForm";
import HabitList from "../../components/habitTracker/habitList";

import styles from "./habitTracker.module.scss";

function HabitTracker() {
  return (
    <section className={styles.container}>
      <NewHabitForm />
      <HabitList />
    </section>
  );
}

export default HabitTracker;
