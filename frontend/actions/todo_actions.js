export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

export const recieveTodos = todos => ({
    type: RECEIVE_TODOS,
    todos
});

export const receiveTodo = todo => ({
    type: RECEIVE_TODO,
    todo
});