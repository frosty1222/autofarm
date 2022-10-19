function setArrayToLocalstorage(name,array){
    window.localStorage.setItem(name, JSON.stringify(array));
}
export default setArrayToLocalstorage;