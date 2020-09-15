import React from "react";
import FilterButton from "../../filterButton/AllButton";
import style from './table.css';
import {
  Checkbox,
  Typography,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@material-ui/core";


function FilterDate(props) { 
  return (
    <div>
      {  props.formState.showTodoItem !== 0 ?
         props.formState.showTodoItem.map((val, key) => {
            return (
              <TableContainer component={Paper}>
                  <Table striped bordered hover variant="dark">
                    <TableRow index={props.index}>
                    <TableCell >
                      <Typography
                        variant="h6"
                        style={{
                          textDecoration:
                            val.completed === true ? "line-through" : "",
                        }}
                      >
                        <Checkbox
                        className="chbx"
                        checked={val.completed}
                        type="checkbox"
                        id={val.id}
                        value={val.todo}
                        name="title"
                        onClick={() => props.handleChecked(val.id)}
                        inputProps={{
                          "aria-label": "checkbox with default color",
                        }}
                      />
                        {val.todo}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6"> {val.dates}</Typography>
                    </TableCell>
                    <TableCell >
                      <FilterButton
                        handleClickAll={() =>
                          props.handleDeleteListItem(val.id)
                        }
                        ButtonTypes={"Delete"}
                        colors={"secondary"}
                      />
                    </TableCell>
                  </TableRow>
                </Table>
              </TableContainer>
            );
          })
        : null
        }
    </div>
  );
}
export default FilterDate;
