import { bookkeepingHeading, bookkeepingValues } from "@/lib/tabels";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const NativeTable = () => {
  return (
    <div className="table-container">
      <table>
        <tbody>
          <tr>
            <th></th>
            {bookkeepingHeading.map((e, index) => {
              return <th key={index}>{e}</th>;
            })}
          </tr>
          {bookkeepingValues.map((e, index) => {
            return (
              <tr key={index}>
                <td>{e.rowHeading}</td>
                <td>{e.heading1 && <CheckCircle />}</td>
                <td>{e.heading2 && <CheckCircle />}</td>
                <td>{e.heading3 && <CheckCircle />}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default NativeTable;

function CheckCircle() {
  return (
    <div className="text-2xl text-mainG">
      <FaCheckCircle />
    </div>
  );
}
