import React from 'react';
import { observer, inject } from 'mobx-react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { TypeCoin, TypeCoinDiff } from '../../types';
import ConverterStore from '../../stores/converterStore';
import CurrenciesStore from '../../stores/currenciesStore';

type ICryptoTable = {
  classes: any;
  currenciesStore?: CurrenciesStore;
  converterStore?: ConverterStore;
};

const CryptoTable = inject(
  'currenciesStore',
  'converterStore',
)(
  observer(({ classes, currenciesStore, converterStore }: ICryptoTable) => {
    const items: TypeCoin[] = currenciesStore!.getItems;
    const diffObj: TypeCoinDiff = currenciesStore!.getDiffObj;

    React.useEffect(() => {
      if (currenciesStore) {
        currenciesStore.fetchCoins();
        setInterval(() => {
          currenciesStore.fetchCoins();
        }, 30 * 1000);
      }
    }, []);

    const onClickRow = (coin: TypeCoin) => {
      if (converterStore) {
        converterStore.setSelectedCoin(coin);
      }
    };

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">FullName</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">volume24hour</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!items.length
              ? 'Загрузка...'
              : items.map((coin: TypeCoin) => (
                  <TableRow
                    onClick={() => onClickRow(coin)}
                    className={classes.rowCurrency}
                    hover
                    key={coin.name}>
                    <TableCell>
                      <img className={classes.currencyIcon} src={coin.imageUrl} alt="Coin icon" />
                    </TableCell>
                    <TableCell align="left">{coin.name}</TableCell>
                    <TableCell align="left">{coin.fullName}</TableCell>
                    <TableCell
                      className={diffObj[coin.name] && classes[`${diffObj[coin.name]}Column`]}
                      align="left">
                      ${coin.price}
                    </TableCell>
                    <TableCell align="left">${coin.volume24Hour}</TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }),
);

export default CryptoTable;