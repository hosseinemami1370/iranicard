export default function(context) {
    console.log("[Middleware] Just Auth");
    console.log("[Middleware] app:");
    // console.log("!context.store.getters.isAuthenticated:",context.store.getters.isAuthenticated);
    // if (!context.store.getters.isAuthenticated) {
    //   context.redirect("/auth");
    // }
    
    if(localStorage.getItem("token") == null || localStorage.getItem("token") == undefined ){
      context.redirect("/auth");
     
    }
  }
  