const getStoredCard = ()=>{
    const getCard = localStorage.getItem('cart');
    if (getCard) {
        return JSON.parse(getCard);
    }
    return []
}
const setItemCart = (card , id )=>{
   const getCardItem = getStoredCard();
   const  isExist = getCardItem.find(item => item?.id?.includes(id))
   if (!isExist) {
    getCardItem.push(card)
    localStorage.setItem('cart' , JSON.stringify(getCardItem))
   }
}
export {setItemCart , getStoredCard}