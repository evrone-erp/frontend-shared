import { memo, FC, NamedExoticComponent, MemoExoticComponent } from 'react';
import Table, { TableProps } from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

type BaseTableCompose = {
  Container: MemoExoticComponent<typeof TableContainer>;
  Body: MemoExoticComponent<typeof TableBody>;
  Cell: MemoExoticComponent<typeof TableCell>;
  Head: MemoExoticComponent<typeof TableHead>;
  Row: MemoExoticComponent<typeof TableRow>;
};

const BaseTable: FC<TableProps> = Table;

const MemoizedTable = memo(BaseTable) as NamedExoticComponent<TableProps> & BaseTableCompose;

MemoizedTable.Container = memo(TableContainer);

MemoizedTable.Body = memo(TableBody);

MemoizedTable.Cell = memo(TableCell);

MemoizedTable.Head = memo(TableHead);

MemoizedTable.Row = memo(TableRow);

export { MemoizedTable as BaseTable };
