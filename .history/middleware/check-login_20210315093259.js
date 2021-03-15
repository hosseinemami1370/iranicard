export default function(context) {
    console.log("[Middleware] Just ckeck login");
    
    
    if(localStorage.getItem("token") == null || localStorage.getItem("token") == undefined ){
      context.redirect("/user");
      // context.redirect(`${config.url}/auth`);
    }
  }
  