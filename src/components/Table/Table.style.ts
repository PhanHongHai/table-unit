import { makeStyles } from 'tss-react/mui';
import Themes from 'styles/Theme';

const { FontSizes, Colors } = Themes;

export default makeStyles<{ count: number; color: string }>()((_, { color, count }) => ({
  itemHandleHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  MenuLeft: {
    background: '#F9F9F9',
    padding: '20px 0',
  },
  MenuRight: {
    padding: '20px 0',
  },
  boxTable: {
    width: '100%',
    // overflow: "scroll",
    padding: 24,
    '& .MuiOutlinedInput-notchedOutline ': {
      border: 'none !important',
    },
  },
  tableComponent: {
    marginTop: 20,
    position: 'relative',
    width: '100% !important',
    height: '70vh !important',
    '& .tss-1cdcmys-MUIDataTable-responsiveBase': {
      border: `1px solid rgba(0, 0, 0, 0.23)`,
      borderBottom: `3px solid ${color}`,
      boxShadow: `0px 12px 10px -15px ${color}`,
      borderTop: 'none',
      borderBottomRightRadius: 5,
      borderBottomLeftRadius: 5,
      width: '100%',
      overflowX: 'scroll',
    },
    '& .MuiToolbar-root': {
      border: '1px solid rgba(0, 0, 0, 0.23)',
      borderBottom: 'none',
      borderTopLeftRadius: '4px',
      borderTopRightRadius: '4px',
    },
    '& .MuiTypography-root': {
      fontSize: FontSizes.medium,
    },
    '& .MuiTableRow-head': {
      '& .table-header': {
        padding: '4px 10px',
        fontsize: '13px',
        textAlign: 'left',
        fontWeight: '400 !important',
        backgroundColor: '#EFEFEF',
        display: 'table-cell',
        verticalAlign: 'inherit',
        borderBottom: '1px solid rgba(224, 224, 224, 1)',
        position: 'sticky',
        top: '0px',
        zIndex: 100,
        '& .table-header-text': {
          padding: '13px',
        },
      },
    },
    '& .MuiTableCell-head': {
      backgroundColor: '#EFEFEF',
      padding: '4px 10px',
      textAlign: 'center',
      fontSize: `${FontSizes.medium}px`,
      fontWeight: '400 !important',
      '& .MuiButton-root': {
        fontSize: `${FontSizes.medium}px !important`,
      },
    },
    '& .MUIDataTableHeadCell-data': {
      fontSize: `${FontSizes.medium}px !important`,
      fontWeight: '400',
      textAlign: 'center',
    },
    '& .MuiTableCell-body': {
      fontSize: FontSizes.medium,
      borderBottom: 'none',
      padding: '7px 10px !important',
      '& .table-text': {
        padding: '5px 13px',
      },
    },
    '& .MuiTableCell-footer': {
      padding: '0px 0px 0px 24px',
      border: 'none',
      '& .MuiTablePagination-root .MuiToolbar-root': {
        border: 'none',
      },
    },
    '& .MuiTableRow-hover:hover': {
      backgroundColor: '#F8F8F8',
    },
    '& .MuiPaper-root': {
      boxShadow: 'none',
      width: '100%',
      height: '100%',
    },
  },
  tableResponsivePopup: {
    '& .tss-1cdcmys-MUIDataTable-responsiveBase': {
      position: `${count > 5 ? 'relative' : 'unset'}`,
    },
  },
  tableFooter: {
    '& .MuiOutlinedInput-root': {
      width: 70,
      height: 30,
      fontSize: FontSizes.small,
    },
    '& .MuiPagination-ul li button': {
      minWidth: 25,
      height: 25,
      fontSize: FontSizes.medium,
      margin: 0,
    },
  },
  tileTable: {
    color,
    fontSize: `${FontSizes.semi}px`,
    fontWeight: '400',
  },
  buttonExpand: {
    marginRight: '-32px !important',
    '& .MuiButton-root:hover': {
      backgroundColor: 'transparent ',
    },
  },
  selectValue: {
    margin: 0,
    '& .MuiFilledInput-root': {
      backgroundColor: `${Colors.blurGray} !important`,
      borderBottom: 'none',
      borderBottomLeftRadius: '4px',
      borderBottomRightRadius: '4px',
      '&:before, &:after': {
        borderBottom: 'none !important',
      },
    },
    '& .MuiFilledInput-input': {
      padding: '11px 12px 11px 12px',
    },
    '& .MuiSelect-root:before': {
      borderBottom: 'none',
    },
    '& .MuiSelect-root:after': {
      borderBottom: 'none',
    },
    '& .MuiSelect-root': {
      borderRadius: '5px',
    },
  },
  mobileCSS: {
    '& .MuiFormControl-root': {
      width: '160px',
      minWidth: '150px',
    },
  },
  boxBtnFilter: {
    background: '#f2f2f2',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,

    minHeight: 45,
    '& .btn-filter': {
      color: '#4b4b4b',
      padding: 0,
      minWidth: 0,
      '&:hover': {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
      '&:active': {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
      '&:focus': {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
      '& svg': {
        fontSize: 15,
      },
      '&:first-of-type': {
        minWidth: 50,
      },
      '&:last-child': {
        // paddingLeft: 10,
      },
    },
  },
  buttonSelect: {
    background: '#f2f2f2',
    minWidth: 100,
    minHeight: 45,
    color: '#4b4b4b',
    fontSize: 14,
    '&:hover': {
      backgroundColor: '#f2f2f2',
    },
  },
  buttonDelete: {
    marginRight: '-12px !important',
    width: 15,
    '& .MuiButton-root': {
      padding: '15px 20px',
    },
  },
  buttonDeleteIsMy: {
    marginRight: '-12px !important',
    width: 15,
    '& .MuiButton-root': {
      padding: '15px 20px',
    },
  },
  buttonSearch: {
    minWidth: 15,
    padding: 4,
    '& .MuiButton-root': {
      padding: 0,
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  buttonSearchIsMy: {
    marginLeft: '-13px !important',
    width: '10px',
    padding: '15px 20px !important',
  },
  placeHolder: {
    '& .MuiInputBase-root': {
      padding: 6,
      '&:hover, &:focus': {
        borderColor: color,
      },
    },
    '& input': {
      padding: '0 0 0 12px!important',
      minHeight: '45px',
      fontSize: 14,
    },
  },
  buttonBottom: {
    '& .MuiFilledInput-input': {
      padding: '1px 4px 16px 4px !important',
    },
    '& .MuiFilledInput-root:hover:not(.Mui-disabled):before': {
      borderBottom: 'none',
    },
    '& .MuiFilledInput-root:after': {
      borderBottom: 'none !important',
    },
    '& .MuiFilledInput-root:before': {
      borderBottom: 'none !important',
    },
  },
  widthDialog: {
    '& .MuiPaper-root': {
      maxWidth: 660,
    },
    '& input::placeholder': {
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 2,
    },
  },
  headerTable: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  tableMasterData: {
    '& .MuiDataGrid-footerContainer': {
      borderBottom: `3px solid ${Colors.red}`,
      boxShadow: `0px 12px 10px -15px ${Colors.red}`,
      borderBottomRightRadius: 5,
      borderBottomLeftRadius: 5,
      width: '100%',
    },
    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {
      display: 'none',
    },
    '& .MuiDataGrid-virtualScroller:hover::-webkit-scrollbar': {
      display: 'block',
    },
    '& .MuiDataGrid-columnHeader:focus': {
      zIndex: 99999999999,
    },
    '& .MuiDataGrid-cell:focus-within': {
      zIndex: 99999999999,
    },
    '& .MuiDataGrid-columnHeaderTitleContainer': {
      flexDirection: 'row',
    },
    '& .MuiDataGrid-cell--textRight': {
      justifyContent: 'flex-start !important',
    },
  },
  buttonHeader: {
    padding: '5px 20px !important',
    width: '20px !important',
    minWidth: '30px !important',
    '& svg': {
      color: Colors.black,
    },
    '& .MuiButton-startIcon': {
      margin: '0 !important',
    },
  },
  content: {
    background: '#fff',
    margin: '60px auto 0 auto',
    padding: '30px 40px',
    borderRadius: '5px',
    position: 'relative',
    transition: 'all 0.3s ease-out',
    '@media (min-width: 1460px)': {
      width: '1100px!important',
    },
    '@media (min-width: 1300px)': {
      width: '980px',
    },
    '@media (min-width: 1299px)': {
      width: '90%',
    },
    '@media (max-width: 991px)': {
      width: '95%',
    },
    '.css-zs49jv-MuiButtonBase-root-MuiButton-root:hover': {
      textDecoration: 'none',
      backgroundColor: 'transparent ',
    },
  },
  fullContent: {
    position: 'fixed',
    width: '100% !important',
    margin: '0',
    left: '0 !important',
    height: 'calc(100vh + 500px)',
    paddingTop: 40,
    marginTop: '-78px',
    background: 'white',
    top: '10vh',
    zIndex: 9999,
  },
  closeFullScreen: {
    position: 'relative',
    top: '-6px',
    right: '18px',
    padding: 0,
    minWidth: '20px',
  },
}));

export const TableUploadStyles = makeStyles<{ qty: number }>()((_) => ({
  tableMuiCustomHead: {
    '& .MuiTableCell-root': {
      color: Colors.gray,
      fontWeight: 400,
      padding: '7px 15px',
      backgroundColor: Colors.blurGray,
    },
  },
  tableMuiCustomBody: {
    '& .MuiTableCell-root': {
      padding: '5px 15px',
      borderBottom: 'none',
      fontWeight: 400,
    },
    '& .MuiTableRow-hover:hover': {
      backgroundColor: `${Colors.blurGray} !important`,
    },
  },
}));
export const TableMasterDataStyles = makeStyles()({
  placeHolder: {
    '& input': {
      paddingTop: '5px !important',
    },
    '& .MuiFilledInput-root': {
      paddingRight: '0 !important',
      paddingLeft: '0 !important',
    },
  },
  buttonSubmit: {
    padding: '25px !important',
  },
  boxButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '10vh',
    alignItems: 'flex-end',
  },
  buttonDelete: {
    width: 15,
  },
});
export const FilterSearchStyles = makeStyles()({
  boxContent: {
    width: '1285px',
    border: '1px solid #eaeaea',
    boxShadow: '1px 3px 10px 0 rgb(0 0 0 / 10%)',
    '@media (min-width: 1460px)': {},
  },
  leftContainer: {
    backgroundColor: '#f2f2f2',
    minHeight: '440px',
  },
  leftContent: {
    '& ul': {
      padding: 0,
      '& li': {
        padding: 0,
        color: '#4b4b4b',
        '& .MuiListItemButton-root:hover, & .Mui-selected': {
          backgroundColor: '#fff',
        },
      },
    },
  },
  inputBox: {
    '& .MuiInputBase-root': {
      height: '45px',
    },
    '& .MuiAutocomplete-input': {
      minWidth: '150px !important',
    },
  },
  btnTransparent: {
    padding: '6px 0px',
    '&:hover': {
      backgroundColor: 'transparent  !important',
    },
    '&:last-child': {
      color: 'gray',
      paddingLeft: 24,
    },
  },
  fieldsBoxContainer: {
    maxWidth: 915,
    padding: 16,
  },
  popupAddField: {
    '& .MuiPaper-root': {
      boxShadow: '1px 1px 10px 4px #e9e9e9',
    },
  },
});
