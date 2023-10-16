import Header from "./components/Header.js";
import HomePage from "./page/HomePage.js";
import SignupPage from "./page/SignupPage.js";

class App {
  constructor({ $target }) {
    this.$target = $target;
    this.render();
  }

  render() {
    new Header({ $target: this.$target }).render();

    const $main = document.createElement("main");
    $main.setAttribute("id", "page_content");

    this.$target.appendChild($main);

    const homePage = new HomePage({ $target: $main });
    const signupPage = new SignupPage({ $target: $main });

    homePage.render();

    document.addEventListener("urlChange", ({ detail: { url } }) => {
      $main.innerHTML = "";

      switch (url) {
        case "/web":
          homePage.render();
          break;
        case "/web/signup":
          signupPage.render();
          break;
        default:
          break;
      }
    });
  }
}

export default App;
