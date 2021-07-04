import { TableRow, TableCell, TextField, Button } from "@material-ui/core";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

const PromiseItem = ({ promiseContent }) => {
  const [isEdit, setIsEdit] = useState(promiseContent.isEdit);
  const dispatch = useDispatch();
  const inputDate = useRef();
  const inputPromise = useRef();
  const inputName = useRef();

  const remove = (id) => {
    dispatch({ type: "REMOVE_PROMISE", payload: id });
  };

  const save = (id) => {
    const date = inputDate.current.value;
    const promise = inputPromise.current.value;
    const name = inputName.current.value;
    dispatch({ type: "MODIFY_PROMISE", payload: { id, date, promise, name } });
  };
  return (
    <TableRow style={{ height: "2rem" }}>
      {!isEdit && <TableCell align="left">{promiseContent.date}</TableCell>}
      {!isEdit && <TableCell align="left">{promiseContent.promise}</TableCell>}
      {!isEdit && <TableCell align="left">{promiseContent.name}</TableCell>}
      {isEdit && (
        <TableCell>
          <TextField
            type="text"
            defaultValue={promiseContent.date}
            id={"editDate"}
            inputRef={inputDate}
          ></TextField>
        </TableCell>
      )}
      {isEdit && (
        <TableCell>
          <TextField
            type="text"
            defaultValue={promiseContent.promise}
            id={"editPromise"}
            inputRef={inputPromise}
          ></TextField>
        </TableCell>
      )}
      {isEdit && (
        <TableCell>
          <TextField
            type="text"
            defaultValue={promiseContent.name}
            id={"editName"}
            inputRef={inputName}
          ></TextField>
        </TableCell>
      )}
      <TableCell>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={() => {
            remove(promiseContent.id);
          }}
        >
          삭제
        </Button>
        {!isEdit && (
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => {
              setIsEdit(true);
            }}
          >
            수정
          </Button>
        )}

        {isEdit && (
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => {
              save(promiseContent.id);
              setIsEdit(false);
            }}
          >
            저장
          </Button>
        )}
        {isEdit && (
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => {
              setIsEdit(false);
            }}
          >
            취소
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
};
export default PromiseItem;
