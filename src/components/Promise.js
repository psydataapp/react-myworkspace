import { useRef, useState } from "react";

const Promise = () => {
  const [promiseList, setPromiseList] = useState([
    { date: "", promise: "", name: "" },
  ]);

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
          const editDate = td.querySelector(".edit-date");
          const editPromise = td.querySelector(".edit-promise");
          const editName = td.querySelector(".edit-name");

          promiseContent.date = editDate.value;
          promiseContent.promise = editPromise.value;
          promiseContent.name = editName.value;

          delete promiseContent.isEdit;
        }
        return promiseContent;
      })
    );
  };

  return (
    <>
      <div>
        <input type="text" placeholder="날짜" ref={inputDate}></input>
        <input type="text" placeholder="약속내용" ref={inputPromise}></input>
        <input type="text" placeholder="만나는사람" ref={inputName}></input>
        <button onClick={add}>추가</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>날짜</th>
              <th>약속내용</th>
              <th>만나는사람</th>
              <th>작업</th>
            </tr>
          </thead>
          <tbody ref={tbody}>
            {promiseList.map((promiseContent, index) => (
              <tr>
                {!promiseContent.isEdit && <td>{promiseContent.date}</td>}
                {!promiseContent.isEdit && <td>{promiseContent.promise}</td>}
                {!promiseContent.isEdit && <td>{promiseContent.name}</td>}
                {promiseContent.isEdit && (
                  <td>
                    <input
                      class="edit-date"
                      type="text"
                      defaultValue={promiseContent.date}
                    ></input>
                  </td>
                )}
                {promiseContent.isEdit && (
                  <td>
                    <input
                      class="edit-promise"
                      type="text"
                      defaultValue={promiseContent.promise}
                    ></input>
                  </td>
                )}
                {promiseContent.isEdit && (
                  <td>
                    <input
                      class="edit-name"
                      type="text"
                      defaultValue={promiseContent.name}
                    ></input>
                  </td>
                )}
                <td>
                  <button
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    삭제
                  </button>
                  <button
                    onClick={() => {
                      edit(index);
                    }}
                  >
                    수정
                  </button>
                  {promiseContent.isEdit && (
                    <button
                      onClick={() => {
                        save(index);
                      }}
                    >
                      저장
                    </button>
                  )}
                  {promiseContent.isEdit && (
                    <button
                      onClick={() => {
                        cancel(index);
                      }}
                    >
                      취소
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Promise;
