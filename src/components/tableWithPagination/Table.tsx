import React from "react";

export default function Table({ dataItems, header }: any) {
  console.log(dataItems);
  console.log(header);

  return (
    <div>
      <table>
        <thead>
          <tr key="header">
            {header.map((el: any) => (
              <th key={el}>{el}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataItems.map((el: any) => (
            <tr key={el.id}>
              <td key={el.title}>{el.title}</td>
              <td key={el.price}>{el.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
