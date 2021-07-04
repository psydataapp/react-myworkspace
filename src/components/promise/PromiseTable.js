import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import PromiseItem from "./PromiseItem";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const PromiseTable = () => {
  const classes = useStyles();
  const promiseList = useSelector((state) => state.promise);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_PROMISELIST" });
  }, [dispatch]);
  return (
    <div>
      <TableContainer>
        <Table className={classes.table} aria-label="simple-table">
          <TableHead>
            <TableRow>
              <TableCell>날짜</TableCell>
              <TableCell>약속내용</TableCell>
              <TableCell>만나는사람</TableCell>
              <TableCell>수정/삭제</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ height: "40vh", overflowY: "auto" }}>
            {promiseList.map((promiseContent) => (
              <PromiseItem
                key={promiseContent.id}
                promiseContent={promiseContent}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default PromiseTable;
