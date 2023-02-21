import { writable, derived } from "svelte/store";

export const todos = writable([
    {
        id: 1,
        text: 'Complete online JavaScript course',
        completed: true
    },
    {
        id: 2,
        text: 'Jog around the park 3x',
        completed: false
    },
    {
        id: 3,
        text: '10 minutes meditation',
        completed: false
    },
    {
        id: 4,
        text: 'Read for 1 hour',
        completed: false
    },
    {
        id: 5,
        text: 'Pick up groceries',
        completed: false
    },
    {
        id: 6,
        text: 'Complete Todo App on Frontend Mentor',
        completed: false
    }
]);

export const filter = writable('all');

export const filteredTodoIds = derived([todos, filter], ([$todos, $filter]) => {
    if ($filter === 'active') {
        return $todos.filter(todo => !todo.completed).map(todo => todo.id);
    } else if ($filter === 'completed') {
        return $todos.filter(todo => todo.completed).map(todo => todo.id);
    } else {
        return $todos;
    }
});