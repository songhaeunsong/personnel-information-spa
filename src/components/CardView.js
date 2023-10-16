import { setCardStatus, setPersonalInfo } from "../lib/setLocalStorage.js";
import Card from "./Card.js";

class CardView {
  constructor({ $target }) {
    this.$target = $target;
  }

  infiniteScroll({ $target, personalInfo }) {
    let lastChild = document.querySelector("#cards_container").lastChild;

    const io = new IntersectionObserver(
      (entry) => {
        if (entry[0].isIntersecting) {
          io.unobserve(entry[0].target);

          const start = Number(lastChild.getAttribute("idx")) + 1;
          const end =
            start + 4 > personalInfo.length ? personalInfo.length : start + 4;
          for (let i = start; i < end; i++) {
            new Card({ $target, idx: i, ...personalInfo[i] }).render();
          }

          lastChild = document.querySelector("#cards_container").lastChild;
          io.observe(lastChild);
        }
      },
      { threshold: 0.7 }
    );

    io.observe(lastChild);
  }

  async render() {
    await setPersonalInfo();
    setCardStatus();

    const $div = document.createElement("div");
    $div.setAttribute("id", "cards_container");

    const personalInfo = JSON.parse(localStorage.getItem("personalInfo"));

    for (let i = 0; i < 4; i++) {
      new Card({ $target: $div, idx: i, ...personalInfo[i] }).render();
    }

    this.$target.appendChild($div);

    this.infiniteScroll({ $target: $div, personalInfo });
  }
}

export default CardView;

{
  /* <div id="cards_container">
  <div idx="1" class="card">
    <div class="card_plane card_plane--front">Heedo</div>
    <div class="card_plane card_plane--back">ESTJ</div>
  </div>
</div> */
}
