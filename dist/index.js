(() => {
  var __defProp = Object.defineProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

  // workers-site/index.js
  addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
  });
  async function handleRequest(request) {
    const url = new URL(request.url);
    let pathname = url.pathname;
    const securityHeaders = {
      "X-XSS-Protection": "1; mode=block",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "Referrer-Policy": "no-referrer",
      "Content-Security-Policy": "default-src 'self'; img-src 'self' data:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
    };
    try {
      if (pathname === "/") {
        pathname = "/index.html";
      }
      let response = await fetch(new URL(pathname.slice(1), self.origin));
      if (!response.ok) {
        response = await fetch(new URL("index.html", self.origin));
      }
      const newResponse = new Response(response.body, response);
      Object.keys(securityHeaders).forEach((key) => {
        newResponse.headers.set(key, securityHeaders[key]);
      });
      return newResponse;
    } catch (error) {
      return new Response(`Server error: ${error.message}`, {
        status: 500,
        headers: securityHeaders
      });
    }
  }
  __name(handleRequest, "handleRequest");
})();
//# sourceMappingURL=index.js.map
