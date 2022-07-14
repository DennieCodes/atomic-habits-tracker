import { ReactElement, useContext } from "react";
import HabitContext from "../../../../store/habit-context";

import styles from "./HabitList.module.scss";

function HabitList(): ReactElement {
  const context = useContext(HabitContext);

  console.log(context.title);

  return <div className={styles.container}>List</div>;
}

export default HabitList;
