import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function FilterButton(props) {
  const useStyles = makeStyles((theme) => ({
    boxs: {
      display: "inline-block",
      padding: "10px",
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.boxs}>
      <Button
        type="submit"
        size="small"
        variant="contained"
        color={props.colors}
        onClick={() => props.handleClickAll()}
      >
        {props.ButtonTypes}
      </Button>
      {""}
    </div>
  );
}
export default FilterButton;
