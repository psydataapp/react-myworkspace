import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const foodPoisonColor = (val) => {
  let color = "#000000";
  if (val == 0) {
    color = "#00BFFF";
  } else if (val == 1) {
    color = "#80E12A";
  } else if (val == 2) {
    color = "#FFA500";
  } else if (val == 3) {
    color = "#FF0000";
  } else if (val < 55) {
    color = "#00BFFF";
  } else if (val >= 55 && val < 71) {
    color = "#80E12A";
  } else if (val >= 71 && val < 86) {
    color = "#FFB400";
  } else if (val >= 86) color = "#FF0000";
  return color;
};

const ResponsiveTable = ({ data }) => {
  console.log("--table data--");
  console.log(data);

  return (
    // <Table >
    data.length > 0 && (
      <Table style={{ borderCollapse: "collapse" }}>
        <Thead>
          <Tr>
            {Object.keys(data[0]).map((key, index) => (
              <Th
                style={{
                  borderBottom: "1px solid rgba(224, 224, 224)",
                  lineHeight: "2rem",
                  fontWeight: "bold",
                }}
                key={`th-${index}`}
              >
                {key}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr
              key={`tr-${item.시간}-${item.구분}`}
              style={{
                border: "0px",
                borderBottom: "1px solid rgba(224, 224, 224)",
              }}
            >
              {Object.keys(item).map((key, index) => (
                <Td
                  style={{
                    borderBottom: "1px solid rgba(224, 224, 224)",
                    lineHeight: "2rem",
                  }}
                  key={`td-${index}`}
                >
                  {["시간", "구분"].indexOf(key) > -1 ? (
                    <span
                      style={{
                        color: item.구분 === "PM10" ? "#8884d8" : "#82ca9d",
                      }}
                    >
                      {item[key]}
                    </span>
                  ) : (
                    <span
                      style={{
                        color:
                          item.구분 === "PM10"
                            ? foodPoisonColor(item[key])
                            : foodPoisonColor(item[key]),
                      }}
                    >
                      {item[key]}
                    </span>
                  )}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    )
  );
};

export default ResponsiveTable;
