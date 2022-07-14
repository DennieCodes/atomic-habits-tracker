import { createContext, useState } from "react";

const HabitContext = createContext({
  id: 1,
  title: "Complete Form",
});

export function HabitContextProvider(props) {
  const [habit, setHabit] = useState("Complete Form");

  function addHabitHandler(habitData) {
    setHabit(habitData);
  }

  const context = { habit: habit, addHabit: addHabitHandler };

  return (
    <HabitContext.Provider value={context}>
      {props.children}
    </HabitContext.Provider>
  );
}

export default HabitContext;
