import React, { ReactElement } from "react";

import styles from "./NewHabitForm.module.scss";

function NewHabitForm(): ReactElement {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        type="text"
        id="title"
        aria-label="New Habit title"
        placeholder="Habit Name"
      />
    </form>
  );
}

export default NewHabitForm;
