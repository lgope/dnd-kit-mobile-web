import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Task = ({ id, title }) => {
	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

	const style = {
		transition,
		transform: CSS.Transform.toString(transform),
	};

	return (
		<div ref={setNodeRef} style={style} {...attributes} {...listeners} className={`${classPrefix}-task`}>
			<input className={`${classPrefix}-checkbox`} type="checkbox" />
			{title}
		</div>
	);
};

export default Task;
