import React, { createContext, useState, useContext } from 'react';

const TableContext = createContext();

export const TableProvider = ({ children }) => {
  const [table, setTable] = useState(null);

  return (
    <TableContext.Provider value={{ table, setTable }}>
      {children}
    </TableContext.Provider>
  );
};

export const useTable = () => useContext(TableContext);
