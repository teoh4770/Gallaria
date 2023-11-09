const Router = {
  init: () => {
    // enhance the link
    document.querySelectorAll(".navlink").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("link clicked");
        const route = event.target.getAttribute("href");
        Router.go(route);
      });
    });

    // listen to pop state event: when user goes back to the previous navigation state
    window.addEventListener("popstate", (event) => {
      Router.go(event.state.route, false);
    });

    // initial url
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log(`Going to ${route}`);

    if (addToHistory) {
      history.pushState({ route }, null, route);
    }

    // based on route, show and hide the elements
    let pageElement = null;

    if (route === "/") {
      pageElement = document.createElement("h1");
      pageElement.textContent = "homepage";
    } else if (route.startsWith("/detail-")) {
      pageElement = document.createElement("h1");
      pageElement.textContent = "detail page";
      const paramId = route.substring(route.lastIndexOf("-") + 1);
      pageElement.dataset.id = paramId;
    } else if (route.startsWith("/gallery-")) {
      pageElement = document.createElement("h1");
      pageElement.textContent = "gallery page";
      const paramId = route.substring(route.lastIndexOf("-") + 1);
      pageElement.dataset.id = paramId;
    }

    if (pageElement) {
      const cache = document.getElementById("app");
      if (cache.children[0]) {
        cache.children[0].remove();
      }
      cache.appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};

export default Router;
