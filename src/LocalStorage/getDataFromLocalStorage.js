function getItemFromLocalstorage(nameItem){
   JSON.parse(window.localStorage.getItem(nameItem));
}
export default getItemFromLocalstorage;