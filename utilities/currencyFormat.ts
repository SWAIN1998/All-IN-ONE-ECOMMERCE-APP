// Rial currency format
export const irrCurrencyFormat = (price: number | undefined) => {
  return price ? new Intl.NumberFormat("en-IN").format(price) : null;
};

//pound currency format
export const gbpCurrencyFormat = (price: number | undefined) => {
  return price ? new Intl.NumberFormat("en-GB").format(price) : null;
};

//dollar currency format
export const usdCurrencyFormat = (price: number | undefined) => {
  return price ? new Intl.NumberFormat("en-US").format(price) : null;
};

//euro currency format
export const eurCurrencyFormat = (price: number | undefined) => {
  return price ? new Intl.NumberFormat("de-DE").format(price) : null;
};

//toman currency format
export const tomanCurrencyFormat = (price: number | undefined) => {
  return price ? new Intl.NumberFormat("fa-IR").format(price) : null;
};
