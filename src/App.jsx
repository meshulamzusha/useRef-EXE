import "./App.css";
import StateInput from "./task_1/StateInput";
import RefInput from "./task_1/RefInput";
import TaskTow from "./task_2/TaskTow";
import Counter from "./avoid_extra_rerender/Exercise1/Counter";
import StateTimer from "./avoid_extra_rerender/Exercise2/StateTimer/StateTimer";
import RefTimer from "./avoid_extra_rerender/Exercise2/RefTimer/RefTimer";
import RefCounter from "./avoid_extra_rerender/Exercise3/RefCounter";

function App() {
  return (
    <div className="global-container">
      <section className="task-1">
        <h2>Task 1</h2>
        <StateInput />
        <RefInput />
      </section>
      <section className="task-2">
        <h2>Task 2</h2>
        <TaskTow />
      </section>
      <section>
        <Counter />
      </section>
      <section>
        <StateTimer />
        <RefTimer />
      </section>
      <section>
        <RefCounter />
      </section>
    </div>
  );
}

export default App;
