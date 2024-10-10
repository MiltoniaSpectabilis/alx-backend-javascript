// Import the necessary types
import { RowID, RowElement } from './interface';

// Declare the functions from crud.js
declare module CRUD {
  function insertRow(row: RowElement): RowID;
  function deleteRow(rowID: RowID): void;
  function updateRow(rowID: RowID, row: RowElement): RowID;
}
