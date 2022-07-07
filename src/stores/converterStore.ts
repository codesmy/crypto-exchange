import { observable, computed, action } from 'mobx';
import { TypeCoin, TypeSelectedCoin } from '../types';

class ConverterStore {
  @observable private selectedCoin: TypeSelectedCoin = {
    name: '',
    price: 0,
  };

  @computed
  get getSelectedCoin() {
    return this.selectedCoin;
  }

  @action
  setSelectedCoin(coin: TypeCoin) {
    this.selectedCoin = {
      name: coin.name,
      price: coin.price,
    };
  }
}

export default ConverterStore;