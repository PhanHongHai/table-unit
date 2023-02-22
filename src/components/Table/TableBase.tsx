import React, { FC, memo } from "react";
import MUIDataTable, {
  MUIDataTableOptions,
  MUIDataTableColumnDef,
} from "mui-datatables";

import Box from "@mui/material/Box";

import TableStyles from "./Table.style";
// import { useAppSelector } from "store";

interface IPropTypes {
  dataTable: any[];
  columns: MUIDataTableColumnDef[];
  title: string;
  options: MUIDataTableOptions;
}

const TableBase: FC<IPropTypes> = (props) => {
  const { dataTable, columns, title, options } = props;
  // const themeConfig = useAppSelector((state) => state.base.themeConfig);

  const { classes, cx } = TableStyles({
    count: dataTable.length,
    color: "red",
  });

  return (
    <Box className={cx(classes.tableComponent, classes.tableResponsivePopup)}>
      <MUIDataTable
        title={<div className={classes.tileTable}>{title}</div>}
        data={dataTable}
        columns={columns}
        options={options}
      />
    </Box>
  );
};
export default memo(TableBase);
