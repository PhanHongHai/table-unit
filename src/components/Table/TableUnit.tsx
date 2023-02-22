import React, { FC, useState, useEffect, useRef } from "react";
import { MUIDataTableOptions, MUIDataTableColumnDef } from "mui-datatables";
import { Button, Paper, TextField, useMediaQuery, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Search } from "@mui/icons-material";
import Box from "@mui/material/Box";
// import iconFullScreen from "assets/icon-full-screen.png";
import TableStyles from "./Table.style";
import _ from "lodash";

import CloseIcon from "@mui/icons-material/Close";
import ClearIcon from "@mui/icons-material/Clear";
import TableData from "./TableBase";
import FilterSearch from "./FilterSearch";

interface IPropTypes {
  dataTable: any[];
  columns: MUIDataTableColumnDef[];
  title: string;
  handleFetchData: (payload: any, cancelRequest?: boolean) => void;
  totalData: number;
}

const limitDefault = 10;
const pageDefault = 0;
const commonFilter = [
  {
    key: 1,
    title: "Cần xử lý",
    value: "can-xu-ly",
  },
  {
    key: 2,

    title: "Test",
    value: "Test",
  },
  {
    key: 3,

    title: "Không kích hoạt",
    value: "Test",
  },
  {
    key: 4,
    title: "Test",
    value: "Test",
  },
];
const TableCustom: FC<IPropTypes> = (props) => {
  const { dataTable, columns, title, totalData, handleFetchData } = props;

  const [page, setPage] = useState<number>(pageDefault);
  const [pageSize, setPageSize] = useState(limitDefault);
  const [isChangeFilter, setIsChangeFilter] = useState<boolean>(false);
  const [sortData, setSortData] = useState<string | null>(null);
  const isMobile = useMediaQuery("(max-width:600px)");
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [keySearch, setKeySearch] = useState<string>("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [filterSelect, setFilterSelect] = useState(commonFilter[0]);
  const open = Boolean(anchorEl);
  const { t } = useTranslation();
  const { classes, cx } = TableStyles({
    count: dataTable.length,
    color: "red",
  });

  useEffect(() => {
    const handleSearchTable = () => {};
    handleSearchTable();
  }, [pageSize, sortData]);

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
    }
  };

  const handleDelete = (e: any): void => {
    setKeySearch("");
  };

  const handleOnChange = (e: any) => {
    setKeySearch(e.target.value);
  };

  const handleChangePageSize = (rowNumber: number) => {
    setPage(0);
    setPageSize(rowNumber);
  };

  const handleChangePage = (page: number) => {};

  const handleSortColumn = (changedColumn: string, direction: string) => {
    if (direction === "none") {
      setSortData(null);
      return;
    }
    setSortData(`${changedColumn} ${direction}`);
  };

  const HeaderElements = () => {
    // return (
    //   <>
    //     {fullScreen ? null : !isMobile ? (
    //       <img
    //         alt="icon"
    //         src={iconFullScreen}
    //         className={isMobile ? classes.buttonExpand : ""}
    //         width="18"
    //         style={{ cursor: "pointer" }}
    //         onClick={() => {
    //           if (setFullScreen) {
    //             setFullScreen(!fullScreen);
    //           }
    //         }}
    //       />
    //     ) : null}
    //   </>
    // );
    return null;
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleFilterSelect = (value: any) => {
    setFilterSelect(value);
    setAnchorEl(null);
    setIsChangeFilter(true);
  };
  const valueRef = useRef("");

  const options: MUIDataTableOptions = {
    print: false,
    search: false,
    viewColumns: false,
    filter: false,
    download: false,
    filterType: "dropdown",
    rowHover: true,
    serverSide: true,
    tableBodyMaxHeight: "80%",
    responsive: "standard",
    sort: true,
    selectableRowsHideCheckboxes: true,
    textLabels: {
      pagination: {
        next: "Trang tiếp",
        previous: "Previous Page",
        rowsPerPage: `${t("table.pagination.rows_per_page")}`,
        displayRows: "of",
      },
      body: {
        noMatch: `${t("table.body.not_found")}`,
        toolTip: `${t("table.body.tool_tip")}`,
      },
      toolbar: {
        search: `${t("table.toolbar.search")}`,
        downloadCsv: `${t("table.toolbar.download_csv")}`,
        filterTable: `${t("table.toolbar.filter_table")}`,
      },
      filter: {
        all: `${t("table.filter.all")}`,
        title: `${t("table.filter.title")}`,
        reset: `${t("table.filter.reset")}`,
      },
    },
    count: totalData,
    page: page,
    rowsPerPage: pageSize,
    rowsPerPageOptions: [5, 10, 20, 50],
    customToolbar: () => {
      return (
        <>
          <Box className={classes.itemHandleHeader} id="btn-create-dis2nd">
            <HeaderElements />
          </Box>
        </>
      );
    },
    onChangePage: handleChangePage,
    onColumnSortChange: handleSortColumn,
    onChangeRowsPerPage: handleChangePageSize,
  };

  return (
    <Box
      className={
        fullScreen === true ? cx(classes.content, classes.fullContent) : ""
      }
    >
      <Grid container justifyContent="flex-end">
        {fullScreen && (
          <Button
            onClick={() => setFullScreen(false)}
            className={classes.closeFullScreen}
          >
            <CloseIcon />
          </Button>
        )}
      </Grid>
      <Paper elevation={0} className={classes.boxTable}>
        <Box>
          <TextField
            fullWidth
            placeholder="Tìm Kiếm"
            onKeyDown={(e: any) => handleKeyPress(e)}
            onChange={(e: any) => handleOnChange(e)}
            value={keySearch}
            variant="filled"
            className={classes.placeHolder}
            inputRef={valueRef}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <Box
                  className={cx(
                    classes.selectValue,
                    isMobile && classes.mobileCSS
                  )}
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  {isChangeFilter ? (
                    <Box className={classes.boxBtnFilter}>
                      <Button onClick={handleClick} className="btn-filter">
                        {filterSelect.title}
                      </Button>
                      <Button
                        sx={{}}
                        onClick={() => {
                          setFilterSelect(commonFilter[0]);
                          setIsChangeFilter(false);
                        }}
                        className="btn-filter"
                      >
                        <CloseIcon fontSize="small" />
                      </Button>
                    </Box>
                  ) : (
                    <Button
                      className={classes.buttonSelect}
                      onClick={handleClick}
                    >
                      {filterSelect.title}
                    </Button>
                  )}
                </Box>
              ),
              endAdornment: (
                <Box display="flex" alignItems="center" paddingRight={1}>
                  <Button className={classes.buttonSearch}>
                    <Search style={{ color: "gray" }} />
                  </Button>
                  {keySearch && (
                    <Button
                      className={classes.buttonSearch}
                      onClick={(e: any) => handleDelete(e)}
                    >
                      <ClearIcon style={{ color: "gray" }} />
                    </Button>
                  )}
                </Box>
              ),
            }}
            size="small"
            id="search-contract"
          />
          <FilterSearch
            selected={filterSelect}
            handleSetFilterData={handleFilterSelect}
            dataSource={commonFilter}
            open={open}
            anchorEl={anchorEl}
            handleSetAnchorEl={(value: any) => {
              setAnchorEl(value);
            }}
          />
        </Box>

        <TableData
          columns={columns}
          dataTable={dataTable}
          title={title}
          options={options}
        />
      </Paper>
    </Box>
  );
};

TableCustom.defaultProps = {
  dataTable: [],
  title: "",
};
export default TableCustom;
