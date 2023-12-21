export const useLocalStorage=(key)=>{
    const setItem=(value)=>{
        window.localStorage.setItem(key,JSON.stringify(value))
    }
    const getItem=()=>{
        const item=window.localStorage.getItem(key)
        if(item){
            return JSON.parse(item)
        } 
    }
    return {setItem,getItem}
}
