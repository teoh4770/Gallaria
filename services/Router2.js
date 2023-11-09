const Router2 = {
  init: () => {
    // enhance links for spa
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        const href = event.target.getAttribute("href");
        Router2.go(href);
      });
    });

    // as always, add listener during initializing
    // add listener to the route change X
    window.addEventListener("popstate", event => {
      Router2.go(event.state.route, false);
    })

    // process initial url
    Router2.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log(`current route: ${route}`);
    // push the new route to the history state
    if (addToHistory) {
      history.pushState({ route }, null, route);
    }

    // inject different items based on different route
    let pageElement = null;
    switch (route) {
      case "/":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Menu";
        break;
      case "/order":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Menu";
        break;
      default:
        if (route.startsWith("/product-")) {
          pageElement = document.createElement("h1");
          pageElement.textContent = "Details";
          pageElement.dataset.productId = route.substring(
            route.lastIndexOf("-") + 1
          );
        }
        break;
    }
    if (pageElement) {
      document.querySelector("main").innerHTML = "";
      document.querySelector("main").appendChild(pageElement);
    }

    window.scrollX = 0;
    window.scrollY = 0;
  },
};

export default Router2;
