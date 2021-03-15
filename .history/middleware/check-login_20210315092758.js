export default function(context) {
    console.log("[Middleware] Just Auth");
    
    console.log("cookie:",token);
    if(localStorage.getItem("token") == null || localStorage.getItem("token") == undefined ){
      context.redirect("/auth");
      // context.redirect(`${config.url}/auth`);
    }
  }
  