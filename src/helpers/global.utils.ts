const setPageTitle = (title: string) => {
  document.title = `${title} | Merch2Zipette`
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);
}

export default {
  setPageTitle,
  formatPrice,
}