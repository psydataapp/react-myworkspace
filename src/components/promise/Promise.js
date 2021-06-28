import { useRef, useState } from "react";
import PromiseTable from "./PromiseTable";

const Promise = () => {
  const [promiseList, setPromiseList] = useState([]);

  const inputDate = useRef();
  const inputPromise = useRef();
  const inputName = useRef();
  const tbody = useRef();
  const input = useRef();

  const handleAdd = () => {
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

  const handleRemove = (index) => {
    setPromiseList(promiseList.filter((promiseContent, idx) => idx !== index));
  };

  const handleEdit = (index) => {
    setPromiseList(
      promiseList.map((promiseContent, idx) => {
        if (idx === index) {
          promiseContent.isEdit = true;
        }
        return promiseContent;
      })
    );
  };

  const handleCancel = (index) => {
    setPromiseList(
      promiseList.map((promiseContent, idx) => {
        if (idx === index) {
          delete promiseContent.isEdit;
        }
        return promiseContent;
      })
    );
  };

  const handleSave = (index) => {
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

  return (
    <PromiseTable
      inputDateRef={inputDate}
      inputPromiseRef={inputPromise}
      inputNameRef={inputName}
      tbodyRef={tbody}
      onAdd={handleAdd}
      onRemove={handleRemove}
      onEdit={handleEdit}
      onCancel={handleCancel}
      onSave={handleSave}
      promiseList={promiseList}
    />
  );
};

export default Promise;
