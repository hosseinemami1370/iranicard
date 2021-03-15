import Vuex from "vuex"

const createStore =() =>{
   return new Vuex.Store({
    state:{
        loadedData:[],
        token:null
    },
    mutations:{
        SETTOKEN(state,token){
            state.token=token;
        }
    },
    actions:{
        authentika()
    }
   })
}
export default createStore;