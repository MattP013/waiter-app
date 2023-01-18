

export function formatCurrency(currentPrice: number){
  const formatedPrice = new Intl.NumberFormat('pt-br', {style:'currency', currency:'BRL'}).format(currentPrice);
  return formatedPrice;
}
