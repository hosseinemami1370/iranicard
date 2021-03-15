import Vuex from "vuex"

const createStore =() =>{
   return new Vuex.Store({
    state:{
        loadedData:[],
        token:null
    }
    
   })
}
export default createStore;