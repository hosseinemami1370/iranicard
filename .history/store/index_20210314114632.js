import Vuex from "vuex";
import Cookie from "js-cookie";

const createStore =() =>{
   return new Vuex.Store({
    state:{
        loadedData:[],
        token:null,
        // visibelLogout:true
    },
    mutations:{
        SETTOKEN(state,token){
            state.token=token;
        },
        CLEARTOKEN(state) {
            state.token = null;
          },
          SETEDATA(state,data){
            state.loadedData=data;
          }
        // SETVISIBLE(state,visible){
        //     state.visibelLogout=visible
        // }
    },
    actions:{
        authenticationUser(vuexContext,authData){
            let authUrl =
          "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" +
          process.env.fbAPIKey;
        if (!authData.isLogin) {
          authUrl =
            "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" +
            process.env.fbAPIKey;
        }
        return this.$axios
          .$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(result => {
            console.log("result:",result);
            vuexContext.commit("SETEDATA",result.email);
            vuexContext.commit("SETTOKEN", result.idToken);
            localStorage.setItem("token", result.idToken);
            console.log("result.expiresIn",result.expiresIn);
            localStorage.setItem(
              "tokenExpiration",
              new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
            );
            Cookie.set("jwt", result.idToken);
            Cookie.set(
              "expirationDate",
              new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
            );
          })
          .catch(e => console.log('error1:', e));
        },
        initAuth(vuexContext, req) {
            let token;
            let expirationDate;
            if (req) {
              if (!req.headers.cookie) {
                return;
              }
              const jwtCookie = req.headers.cookie
                .split(";")
                .find(c => c.trim().startsWith("jwt="));
              if (!jwtCookie) {
                return;
              }
              token = jwtCookie.split("=")[1];
              expirationDate = req.headers.cookie
                .split(";")
                .find(c => c.trim().startsWith("expirationDate="))
                .split("=")[1];
            } else {
              token = localStorage.getItem("token");
              expirationDate = localStorage.getItem("tokenExpiration");
            }
            if (new Date().getTime() > +expirationDate || !token) {
              console.log("No token or invalid token");
              vuexContext.dispatch("logout");
              return;
            }
            vuexContext.commit("SETTOKEN", token);
          },
          logout(vuexContext) {
            vuexContext.commit("CLEARTOKEN");
            Cookie.remove("jwt");
            Cookie.remove("expirationDate");
            if (process.client) {
              localStorage.removeItem("token");
              localStorage.removeItem("tokenExpiration");
            }
          },
        // setVisible(vuexContext,payload){
        //     vuexContext.commit("SETVISIBLE", payload);
        // }
    },
    getters: {
      loadedData(state) {
        return state.loadedPosts;
      },
      isAuthenticated(state) {
        return state.token != null;
      },
      // loadedVisible(state){
      //   return state.visibelLogout
      // }
    }
   })
}
export default createStore;