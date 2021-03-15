export default function(context) {
    console.log("[Middleware] Just ckeck login");
    
    
    if(localStorage.getItem("token") == null || localStorage.getItem("token") == undefined ){
      context.redirect("/auth");
      // context.redirect(`${config.url}/auth`);
    }
  }
  