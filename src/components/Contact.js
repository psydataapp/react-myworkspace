import { useRef, useState } from "react";

const Contact = () => {
  const [people, setPeople] = useState([{ name: "", phone: "", mail: "" }]);

  const inputName = useRef();
  const inputPhone = useRef();
  const inputMail = useRef();
  const tbody = useRef();
  const add = () => {
    setPeople([
      {
        name: inputName.current.value,
        phone: inputPhone.current.value,
        mail: inputMail.current.value,
      },
      ...people,
    ]);

    inputName.current.value = "";
    inputPhone.current.value = "";
    inputMail.current.value = "";
  };

  const remove = (index) => {
    setPeople(people.filter((person, idx) => idx !== index));
  };

  const edit = (index) => {
    setPeople(
      people.map((person, idx) => {
        if (idx === index) {
          person.isEdit = true;
        }
        return person;
      })
    );
  };

  const cancel = (index) => {
    setPeople(
      people.map((person, idx) => {
        if (idx === index) {
          delete person.isEdit;
        }
        return person;
      })
    );
  };

  const save = (index) => {
    setPeople(
      people.map((person, idx) => {
        if (idx === index) {
          const td = tbody.current.children[index];
          const editName = td.querySelector(".edit-name");
          const editPhone = td.querySelector(".edit-phone");
          const editMail = td.querySelector(".edit-mail");

          person.name = editName.value;
          person.phone = editPhone.value;
          person.mail = editMail.value;

          delete person.isEdit;
        }
        return person;
      })
    );
  };

  return (
    <>
      <div>
        <input type="text" placeholder="이름" ref={inputName}></input>
        <input type="text" placeholder="연락처" ref={inputPhone}></input>
        <input type="text" placeholder="이메일" ref={inputMail}></input>
        <button onClick={add}>추가</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>이름</th>
              <th>연락처</th>
              <th>이메일</th>
              <th>작업</th>
            </tr>
          </thead>
          <tbody ref={tbody}>
            {people.map((person, index) => (
              <tr key={index}>
                <td>{person.name}</td>
                <td>{person.phone}</td>
                <td>{person.mail}</td>
                <td>
                  <button
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    삭제
                  </button>
                </td>

                {!person.isEdit && (
                  <td>
                    <button
                      onClick={() => {
                        edit(index);
                      }}
                    >
                      수정
                    </button>
                  </td>
                )}
                {person.isEdit && (
                  <tr>
                    <td>
                      <input
                        class="edit-name"
                        type="text"
                        defaultValue={person.name}
                      ></input>
                    </td>
                    <td>
                      <input
                        class="edit-phone"
                        type="text"
                        defaultValue={person.phone}
                      ></input>
                    </td>
                    <td>
                      <input
                        class="edit-mail"
                        type="text"
                        defaultValue={person.mail}
                      ></input>
                    </td>
                  </tr>
                )}
                {person.isEdit && (
                  <td>
                    <button
                      onClick={() => {
                        save(index);
                      }}
                    >
                      저장
                    </button>
                  </td>
                )}
                {person.isEdit && (
                  <td>
                    <button
                      onClick={() => {
                        cancel(index);
                      }}
                    >
                      취소
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Contact;
