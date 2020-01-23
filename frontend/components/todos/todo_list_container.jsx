import TodoList from './todo_list';
import {receiveTodo, receiveTodos} from '../../actions/todo_actions'
import {allTodos} from '../../reducers/selectors';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
    receiveTodos: () => dispatch(receiveTodos()),
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    removeTodo: todo => dispatch(removeTodo(todo))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);