import { TextField, Button } from "@material-ui/core";
import { useRef } from "react";
import { useDispatch } from "react-redux";
const PromiseForm = () => {
  const inputDate = useRef();
  const inputPromise = useRef();
  const inputName = useRef();

  const dispatch = useDispatch();

  const add = () => {
    const id = new Date().getTime();
    const date = inputDate.current.value;
    const promise = inputPromise.current.value;
    const name = inputName.current.value;
    dispatch({
      type: "ADD_PROMISE",
      payload: {
        id,
        date,
        promise,
        name,
      },
    });
    inputDate.current.value = "";
    inputPromise.current.value = "";
    inputName.current.value = "";
  };

  const change = (event) => {
    if (event.charCode === 13) {
      add();
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <TextField
        type="text"
        label="날짜"
        inputRef={inputDate}
        variant="outlined"
        size="small"
        style={{ width: "30%", marginRight: "0.5rem" }}
        inputProps={{ className: "date" }}
        onKeyPress={change}
      ></TextField>
      <TextField
        type="text"
        label="약속내용"
        inputRef={inputPromise}
        variant="outlined"
        size="small"
        style={{ width: "50%", marginRight: "0.5rem" }}
        inputProps={{ className: "promise" }}
        onKeyPress={change}
      ></TextField>
      <TextField
        type="text"
        label="이름"
        inputRef={inputName}
        variant="outlined"
        size="small"
        style={{ width: "20%", marginRight: "0.5rem" }}
        onKeyPress={change}
      ></TextField>
      <Button
        variant="outlined"
        onClick={add}
        color="primary"
        size="small"
        style={{ width: "10%" }}
      >
        추가
      </Button>
    </div>
  );
};
export default PromiseForm;
