import React from "react";
import Navbar from "../../component/navbar/Navbar";
import TodoForm from "../../component/form/Form";
import TodoList from "../../component/todolist/HomeTodoList/HomeTodoList";
import useTodoFormAction from "../../customHook/UseTodoFormAction";
import { useSelector, useDispatch } from "react-redux";
import { addTodos, deleteTodos, checkTodos, allTodos } from "../../redux/action/index";
import {
  Typography,
  Table,
  TableCell,
  TableRow,
} from "@material-ui/core";

function Home(props) {
  const dispatch = useDispatch();
  const {
    formState,
    handleSubmit,
    handleDeleteListItem,
    handleChecked,
    handleDateChange,
    handleChange,
    handleClickCompleted,
    handleClickActiveList,
    handleClickAll,
  } = useTodoFormAction({
    title: "",
    date: new Date(),
    todoItem: [],
    buttonStatus: "",
    onSubmit: (todo) => {
      dispatch(addTodos(todo));
    },
    handleDeleteList: (showTodoItem, id) => {
      dispatch(deleteTodos({ showTodoItem, id }));
    },
    todoListItems: useSelector((state) => state.AddReducerstatus),
    // deletedListItems: useSelector((state) => state.DeleteReducerStatus),
    handleCheckedDispatch: (showTodoItem, id) => { dispatch(checkTodos({ showTodoItem, id })) },
    // checkedListItems: useSelector((state) => state.CheckedReducerStatus),
    handleAllDispatch: (todoItem) => { dispatch(allTodos({ todoItem })) },
    filterTodosList: useSelector((state) => state.FilterTodoReducerStatus)
  });

  return (
    <div>
      <Navbar class="navbar" />
      <TodoForm
        handleChange={(event) => {
          handleChange(event);
        }}
        handleSubmit={(e) => {
          handleSubmit(e);
        }}
        handleDateChange={(value, e) => handleDateChange(value, e)}
        formState={formState}
      />
      <Table style={{ paddingBottom: 0 }}>
        <TableRow>
          <TableCell>
            <Typography variant="h5"><b> Task</b> </Typography>
          </TableCell>
          <TableCell>
            <Typography variant="h5"><b> Date </b></Typography>
          </TableCell>
          <TableCell>
            <Typography variant="h5"><b> Action </b></Typography>
          </TableCell>
        </TableRow>
      </Table>
      <TodoList
        formState={formState}
        handleClickCompleted={handleClickCompleted}
        handleClickActiveList={handleClickActiveList}
        handleClickAll={handleClickAll}
        handleChecked={(id) => handleChecked(id)}
        handleDeleteListItem={(id) => handleDeleteListItem(id)}
      />
    </div>
  );
}

export default Home;
