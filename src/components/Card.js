class Card {
  constructor({ $target, idx, name, email, nickname, role, mbti }) {
    this.$target = $target;
    this.idx = idx;
    this.name = name;
    this.email = email;
    this.nickname = nickname;
    this.role = role;
    this.mbti = mbti;
  }

  render() {
    const $div = document.createElement("div");
    $div.setAttribute("idx", this.idx);

    const status = JSON.parse(localStorage.getItem("cardStatus"));
    const check = status.find(({ idx }) => idx === this.idx);

    if (check) {
      $div.setAttribute("class", check.status);
    } else {
      $div.setAttribute("class", "card");
      status.push({ idx: this.idx, status: "card" });
      localStorage.setItem("cardStatus", JSON.stringify(status));
    }

    $div.addEventListener("click", () => {
      $div.classList.toggle("is-flipped");
      const status = JSON.parse(localStorage.getItem("cardStatus"));
      status[this.idx].status = $div.className;
      localStorage.setItem("cardStatus", JSON.stringify(status));
    });

    const $front = document.createElement("div");
    $front.setAttribute("class", "card_plane card_plane--front");
    $front.appendChild(document.createTextNode(this.name));

    const $back = document.createElement("div");
    $back.setAttribute("class", "card_plane card_plane--back");
    $back.appendChild(document.createTextNode(this.mbti));

    $div.appendChild($front);
    $div.appendChild($back);
    this.$target.appendChild($div);
  }
}

export default Card;

{
  /* <div id="cards_container">
  <div idx="1" class="card">
    <div class="card_plane card_plane--front">Heedo</div>
    <div class="card_plane card_plane--back">ESTJ</div>
  </div>
</div> */
}
