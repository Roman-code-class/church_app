import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DelSvg from "./DelSvg";

// function download(content, fileName, contentType) {
//   var a = document.createElement("a");
//   var file = new Blob([content], { type: contentType });
//   a.href = URL.createObjectURL(file);
//   a.download = fileName;
//   a.click();
// }

const data = [
  {
    key: uuidv4(),
    name: "Jon",
    sunday: false,
    morning: false,
    thursday: false,
    post: false,
    otherMinistries: false,
    called: false,
    visited: false,
    group: false,
    mentoring: false,
    reasonForAbsence: "",
  },
  {
    key: uuidv4(),
    name: "Ben",
    sunday: false,
    morning: false,
    thursday: false,
    post: false,
    otherMinistries: false,
    called: false,
    visited: false,
    group: false,
    mentoring: false,
    reasonForAbsence: "",
  },

  {
    key: uuidv4(),
    name: "Jen",
    sunday: false,
    morning: false,
    thursday: false,
    post: false,
    otherMinistries: false,
    called: false,
    visited: false,
    group: false,
    mentoring: false,
    reasonForAbsence: "",
  },
];

const week = {
  year: 2023,
  week: 52,
  data,
};

console.log(week);

function BasicExample(props) {
  const [currentData, setCurrentData] = useState(data);
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);

  // const deleteData = (del) => {
  //   setCurrentData((selectDel)) => {
  //     return
  //   }
  // }  функция для удаления нужна ли отдельная?

  const updateRow = (newRow) => {
    setCurrentData((oldData) => {
      return oldData.map((oldRow) => {
        return oldRow.key === newRow.key ? newRow : oldRow;
      });
    });
  };

  const toggleIsDeleteVisible = () => {
    setIsDeleteVisible((e) => !e);
  };

  const hideIsDeleteVisible = () => {
    setIsDeleteVisible(false);
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Воскресенье</th>
            <th>Утренняя молитва</th>
            <th>Молитвенное чт</th>
            <th>Пост чт</th>
            <th>Др служения</th>
            <th>Позвонил</th>
            <th>Посетил</th>
            <th>Домашка</th>
            <th>Наставничество</th>
            <th>Причина отсутствия</th>
            {isDeleteVisible && <th>Delete</th>}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row) => {
            return (
              <tr key={row.key}>
                <td>
                  <input
                    value={row.name}
                    onChange={(e) =>
                      updateRow({
                        ...row,
                        name: e.target.value,
                      })
                    }
                    onClick={hideIsDeleteVisible}
                  />
                </td>
                <td>
                  <Form.Check
                    onChange={() =>
                      updateRow({
                        ...row,
                        sunday: !row.sunday,
                      })
                    }
                    checked={row.sunday}
                    onClick={hideIsDeleteVisible}
                  />
                </td>
                <td>
                  <Form.Check
                    onChange={() =>
                      updateRow({
                        ...row,
                        morning: !row.morning,
                      })
                    }
                    checked={row.morning}
                    onClick={hideIsDeleteVisible}
                  />
                </td>

                <td>
                  <Form.Check
                    onChange={() =>
                      updateRow({
                        ...row,
                        thursday: !row.thursday,
                      })
                    }
                    checked={row.thursday}
                    onClick={hideIsDeleteVisible}
                  />
                </td>

                <td>
                  <Form.Check
                    onChange={() =>
                      updateRow({
                        ...row,
                        post: !row.post,
                      })
                    }
                    checked={row.post}
                    onClick={hideIsDeleteVisible}
                  />
                </td>

                <td>
                  <Form.Check
                    onChange={() =>
                      updateRow({
                        ...row,
                        otherMinistries: !row.otherMinistries,
                      })
                    }
                    checked={row.otherMinistries}
                    onClick={hideIsDeleteVisible}
                  />
                </td>

                <td>
                  <Form.Check
                    onChange={() =>
                      updateRow({
                        ...row,
                        called: !row.called,
                      })
                    }
                    checked={row.called}
                    onClick={hideIsDeleteVisible}
                  />
                </td>

                <td>
                  <Form.Check
                    onChange={() =>
                      updateRow({
                        ...row,
                        visited: !row.visited,
                      })
                    }
                    checked={row.visited}
                    onClick={hideIsDeleteVisible}
                  />
                </td>

                <td>
                  <Form.Check
                    onChange={() =>
                      updateRow({
                        ...row,
                        group: !row.group,
                      })
                    }
                    checked={row.group}
                    onClick={hideIsDeleteVisible}
                  />
                </td>

                <td>
                  <Form.Check
                    onChange={() =>
                      updateRow({
                        ...row,
                        mentoring: !row.mentoring,
                      })
                    }
                    checked={row.mentoring}
                    onClick={hideIsDeleteVisible}
                  />
                </td>

                <td>
                  <input
                    value={row.reasonForAbsence}
                    onChange={(e) =>
                      updateRow({
                        ...row,
                        reasonForAbsence: e.target.value,
                      })
                    }
                    onClick={hideIsDeleteVisible}
                  />
                </td>
                {isDeleteVisible && (
                  <td>
                    <Button
                      className="btn-del"
                      style={{ marginLeft: 10 }}
                      variant="outline-danger"
                      onClick={() =>
                        setCurrentData((data) =>
                          data.filter((oldRow) => oldRow !== row)
                        )
                      }
                    >
                      <DelSvg />
                    </Button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button
        style={{ marginLeft: 10 }}
        variant="dark"
        onClick={() => {
          props.onConfirm(currentData);
          hideIsDeleteVisible();
          // download(JSON.stringify(currentData), "json.txt", "text/json");
        }}
      >
        Отправить
      </Button>
      <Button
        style={{ marginLeft: 10 }}
        variant="success"
        onClick={() => {
          hideIsDeleteVisible();
          setCurrentData((oldData) => [
            ...oldData,
            {
              key: uuidv4(),
              name: "",
              group: false,
              at: "",
            },
          ]);
        }}
      >
        +
      </Button>{" "}
      <Button
        className="btn-del"
        style={{ marginLeft: 10 }}
        variant="outline-danger"
        onClick={toggleIsDeleteVisible}
      >
        {isDeleteVisible ? "Отмена" : <DelSvg />}
      </Button>{" "}
    </>
  );
}

export default BasicExample;
