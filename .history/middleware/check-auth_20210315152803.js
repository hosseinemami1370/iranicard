export default function(context) {
  console.log("context:",context.req)
    console.log("[Middleware] Check Auth");
   return context.store.dispatch("initAuth", context.req);
  }