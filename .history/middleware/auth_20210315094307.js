export default function(context) {
    console.log("[Middleware] Just Auth");
    console.log("!context.store.getters.isAuthenticated:",context.store.getters.isAuthenticated);
    // if (!context.store.getters.isAuthenticated) {
    //   context.redirect("/auth");
    // }
    
    console.log("cookie:",token);
    if(localStorage.getItem("token") == null || localStorage.getItem("token") == undefined ){
      context.redirect("/auth");
     
    }
  }
  