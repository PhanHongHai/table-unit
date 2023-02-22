import { makeStyles } from "tss-react/mui";
import ThemeConstant from "./Theme";
const { Colors } = ThemeConstant;

export default makeStyles()({
  accordionFileContainer: {
    "&.MuiAccordion-root": {
      boxShadow: "none",
      borderRadius: 10,
      border: `1px solid ${Colors.lightGray}`,
    },
    "& .MuiAccordionSummary-root": {
      padding: "0 11px",
    },
    "& .MuiAccordionDetails-root": {
      padding: 0,
    },
    "& .MuiAccordionSummary-content": {
      paddingLeft: 4,
    },
  },
  icons: {
    color: Colors.gray,
    fontSize: "24px !important",
  },
  buttonBottom: {
    "& .MuiFilledInput-root:hover:not(.Mui-disabled):before": {
      borderBottom: "none",
    },
    "& .MuiFilledInput-root:after": {
      borderBottom: "none !important",
    },
    "& .MuiFilledInput-root:before": {
      borderBottom: "none !important",
    },
    "& .MuiFilledInput-root.Mui-disabled": {
      backgroundColor: "#fff !important",
    },
    "& .MuiFilledInput-input.Mui-disabled": {
      "-webkit-text-fill-color": "#1D1D1B !important",
      color: "#1D1D1B !important",
    },
  },
  paperShadow:{
    boxShadow: "1px 1px 10px 5px #9d9c9c70 !important",
  },
  typeInput: {
    "& input": {
      backgroundColor: "#fff !important",
      borderRadius: 5,
    },
    "& input::-webkit-outer-spin-button,input::-webkit-inner-spin-button": {
      " -webkit-appearance": "none",
    },
    "& label": {
      color: Colors.gray,
    },
    "&.Mui-focused": {
      color: `${Colors.white} !important`,
    },
  },
  typeInputViewOnly: {
    "& input": {
      backgroundColor: "rgba(0,0,0,0.06) !important",
      borderRadius: 5,
    },
    "& input::-webkit-outer-spin-button,input::-webkit-inner-spin-button": {
      " -webkit-appearance": "none",
    },
    "& label": {
      color: Colors.gray,
    },
    "&.Mui-focused": {
      color: `${Colors.white} !important`,
    },
    "& .MuiInputLabel-root": {
      color: Colors.black,
    },
  },
  errValidation: {
    color: "red",
    fontSize: "13px",
  },
  muiExpanded: {
    backgroundColor: "#f2f2f2 !important",
    "&.Mui-expanded": {
      minHeight: "30px !important",
      height: 55,
    },
    "&.MuiFilledInput-root:after": {
      border: "none !important",
    },
  },

});
