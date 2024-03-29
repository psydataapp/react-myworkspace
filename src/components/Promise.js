import { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Grid, Hidden } from "@material-ui/core";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  TextField,
} from "@material-ui/core";

const Promise = () => {
  const [promiseList, setPromiseList] = useState([]);

  const inputDate = useRef();
  const inputPromise = useRef();
  const inputName = useRef();
  const tbody = useRef();

  const add = () => {
    setPromiseList([
      {
        date: inputDate.current.value,
        promise: inputPromise.current.value,
        name: inputName.current.value,
      },
      ...promiseList,
    ]);

    inputDate.current.value = "";
    inputPromise.current.value = "";
    inputName.current.value = "";
  };

  const remove = (index) => {
    setPromiseList(promiseList.filter((promiseContent, idx) => idx !== index));
  };

  const edit = (index) => {
    setPromiseList(
      promiseList.map((promiseContent, idx) => {
        if (idx === index) {
          promiseContent.isEdit = true;
        }
        return promiseContent;
      })
    );
  };

  const cancel = (index) => {
    setPromiseList(
      promiseList.map((promiseContent, idx) => {
        if (idx === index) {
          delete promiseContent.isEdit;
        }
        return promiseContent;
      })
    );
  };

  const save = (index) => {
    setPromiseList(
      promiseList.map((promiseContent, idx) => {
        if (idx === index) {
          const td = tbody.current.children[index];
          const editInput1 = td.querySelector("#editDate");
          const editInput2 = td.querySelector("#editPromise");
          const editInput3 = td.querySelector("#editName");

          promiseContent.date = editInput1.value;
          promiseContent.promise = editInput2.value;
          promiseContent.name = editInput3.value;

          delete promiseContent.isEdit;
        }
        return promiseContent;
      })
    );
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    container: {
      [theme.breakpoints.up("lg")]: {
        marginTop: "80px",
      },
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.container} spacing={3}>
        <Hidden>
          <Grid item sm={1} md={2} lg={2}></Grid>
        </Hidden>
        <Grid item xs={12} sm={10} lg={8}>
          <div style={{ display: "flex" }}>
            <TextField
              type="text"
              label="날짜"
              inputRef={inputDate}
              variant="outlined"
              size="small"
              style={{ width: "30%", marginRight: "0.5rem" }}
              inputProps={{ className: "date" }}
            ></TextField>
            <TextField
              type="text"
              label="약속내용"
              inputRef={inputPromise}
              variant="outlined"
              size="small"
              style={{ width: "50%", marginRight: "0.5rem" }}
              inputProps={{ className: "promise" }}
            ></TextField>
            <TextField
              type="text"
              label="이름"
              inputRef={inputName}
              variant="outlined"
              size="small"
              style={{ width: "20%", marginRight: "0.5rem" }}
            ></TextField>
            <Button
              variant="outlined"
              onClick={() => {
                add();
              }}
              color="primary"
              size="small"
              style={{ width: "10%" }}
            >
              추가
            </Button>
          </div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple-table">
              <TableHead>
                <TableRow>
                  <TableCell>날짜</TableCell>
                  <TableCell>약속내용</TableCell>
                  <TableCell>만나는사람</TableCell>
                  <TableCell>수정/삭제</TableCell>
                </TableRow>
              </TableHead>
              <TableBody ref={tbody}>
                {promiseList.map((promiseContent, index) => (
                  <TableRow key={index}>
                    {!promiseContent.isEdit && (
                      <TableCell align="left">{promiseContent.date}</TableCell>
                    )}
                    {!promiseContent.isEdit && (
                      <TableCell align="left">
                        {promiseContent.promise}
                      </TableCell>
                    )}
                    {!promiseContent.isEdit && (
                      <TableCell align="left">{promiseContent.name}</TableCell>
                    )}
                    {promiseContent.isEdit && (
                      <TableCell>
                        <TextField
                          type="text"
                          defaultValue={promiseContent.date}
                          id={"editDate"}
                        ></TextField>
                      </TableCell>
                    )}
                    {promiseContent.isEdit && (
                      <TableCell>
                        <TextField
                          type="text"
                          defaultValue={promiseContent.promise}
                          id={"editPromise"}
                        ></TextField>
                      </TableCell>
                    )}
                    {promiseContent.isEdit && (
                      <TableCell>
                        <TextField
                          type="text"
                          defaultValue={promiseContent.name}
                          id={"editName"}
                        ></TextField>
                      </TableCell>
                    )}
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        onClick={() => {
                          remove(index);
                        }}
                      >
                        삭제
                      </Button>
                      {!promiseContent.isEdit && (
                        <Button
                          variant="outlined"
                          color="primary"
                          size="small"
                          onClick={() => {
                            edit(index);
                          }}
                        >
                          수정
                        </Button>
                      )}

                      {promiseContent.isEdit && (
                        <Button
                          variant="outlined"
                          color="primary"
                          size="small"
                          onClick={() => {
                            save(index);
                          }}
                        >
                          저장
                        </Button>
                      )}
                      {promiseContent.isEdit && (
                        <Button
                          variant="outlined"
                          color="primary"
                          size="small"
                          onClick={() => {
                            cancel(index);
                          }}
                        >
                          취소
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Hidden>
          <Grid item sm={1} md={2} lg={2}></Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default Promise;
