export default function(context) {
    console.log("[Middleware] Just Auth");
    console.log("!context.store.getters.isAuthenticated:",context.store.getters.isAuthenticated);
    // if (!context.store.getters.isAuthenticated) {
    //   context.redirect("/auth");
    // }
    // const token = context.route.query.token
    const token = localStorage.getItem('token')
  //  const cookei=localStorage.getItem('token')
    console.log("cookie:",token);
    if(localStorage.getItem("token") == null || localStorage.getItem("token") == undefined ){
      context.redirect("/auth");
    }
  }
  