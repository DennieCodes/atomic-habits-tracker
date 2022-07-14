import { ReactElement } from "react";

import NewHabitForm from "../habitTracker/newHabitForm";
import HabitList from "../habitTracker/habitList";

import styles from "./habitTracker.module.scss";

function HabitTracker(): ReactElement {
  return (
    <section className={styles.container}>
      <NewHabitForm />
      <HabitList />
    </section>
  );
}

export default HabitTracker;
