import CardView from "../components/CardView.js";
import ContentTitle from "../components/ContentTitle.js";

class HomePage {
  constructor({ $target }) {
    this.$target = $target;
  }

  render() {
    new ContentTitle({ $target: this.$target, title: "Great PeoPle" }).render();
    new CardView({ $target: this.$target }).render();
  }
}

export default HomePage;
