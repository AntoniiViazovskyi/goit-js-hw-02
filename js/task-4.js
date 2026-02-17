function getShippingCost(country) {
  const deliveryPriceChina = 100
  const deliveryPriceChile = 250
  const deliveryPriceAustralia = 170
  const deliveryPriceJamaica = 120

  let result

  switch (country) {
    case 'China':
      result = `Shipping to ${country} will cost ${deliveryPriceChina} credits`
      break
    case 'Chile':
      result = `Shipping to ${country} will cost ${deliveryPriceChile} credits`
      break
    case 'Australia':
      result = `Shipping to ${country} will cost ${deliveryPriceAustralia} credits`
      break
    case 'Jamaica':
      result = `Shipping to ${country} will cost ${deliveryPriceJamaica} credits`
      break
    default:
      result = 'Sorry, there is no delivery to your country'
  }

  return result
}

console.log(getShippingCost('Australia')) // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')) // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')) // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')) // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')) // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')) // "Sorry, there is no delivery to your country"
