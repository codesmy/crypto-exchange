import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  inputBox: {
    display: 'flex',
    gap: 10,
    marginBottom: 20,
  },
  currencyIcon: {
    width: 20,
    height: 20,
  },
  currencyInput: {
    minWidth: 'calc(70% - 10px)',
    marginRight: 10,
  },
  currencyType: {
    minWidth: '30%',
  },
  table: {
    minWidth: 650,
  },
  redColumn: {
    backgroundColor: '#d8ffc4',
  },
  greenColumn: {
    backgroundColor: '#ffdada',
  },
  rowCurrency: {
    cursor: 'pointer',
  },
});

export default useStyles;