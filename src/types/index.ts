export type TypeCoin = {
    name: string;
    fullName: string;
    imageUrl: string;
    price: number;
    volume24Hour: number;
  };
  
  export type TypeCoinDiff = { [key: string]: string };
  
  export type TypeSelectedCoin = {
    name: string;
    price: number;
  };