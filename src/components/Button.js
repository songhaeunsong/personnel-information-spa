class Button {
  constructor({ $target }) {
    this.$target = $target;
  }

  render() {
    const $span = document.createElement("span");
    $span.setAttribute("class", "form_elem");

    const $button = document.createElement("button");
    $button.setAttribute("type", "submit");
    $button.appendChild(document.createTextNode("등록"));
    $span.appendChild($button);

    this.$target.appendChild($span);
  }
}

export default Button;
