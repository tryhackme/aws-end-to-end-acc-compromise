import React from 'react';

const Table = ({ data, columns }) => {
  const cellStyle = {
    border: '1px solid black',
    textAlign: 'center',
    verticalAlign: 'middle',
    padding: '0.5rem',
  };

  const headerCellStyle = {
    ...cellStyle,
    backgroundColor: 'black',
    color: 'white',
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>
      <table style={{ width: '90%', borderCollapse: 'collapse'}}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th style={headerCellStyle} key={column.name}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row[columns[0].name]}>
              {columns.map((column) => (
                <td style={cellStyle} key={column.name}>{row[column.name]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
