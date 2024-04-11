import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import Task from "../Task/Task";

const Column = ({ tasks }) => {
  
  return (
    <div className={`${classPrefix}-column`}>
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} title={task.title} />
        ))}
      </SortableContext>
    </div>
  );
};

export default Column;
