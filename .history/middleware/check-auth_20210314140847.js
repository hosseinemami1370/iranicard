export default function(context) {
  console.log("context:",context)
    console.log("[Middleware] Check Auth");
   return context.store.dispatch("initAuth", context.req);
  }