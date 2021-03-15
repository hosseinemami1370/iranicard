export default function(context) {
  log
    console.log("[Middleware] Check Auth");
    context.store.dispatch("initAuth", context.req);
  }