import Cookie from "js-cookie";
export default function(context) {
    console.log("[Middleware] Just Auth");
    console.log("!context.store.getters.isAuthenticated:",context.store.getters.isAuthenticated);
    const cookei=localStorage.getItem('token')
    console.log("cookie:",cookei);
    if (!context.store.getters.isAuthenticated) {
      context.redirect("/auth");
    }

   
  }
  