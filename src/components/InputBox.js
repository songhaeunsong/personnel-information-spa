class InputBox {
  constructor({ $target, id, text, type, required }) {
    this.$target = $target;
    this.id = id;
    this.text = text;
    this.type = type;
    this.required = required;
  }

  render() {
    const $span = document.createElement("span");
    $span.setAttribute("class", "form_elem");

    const $label = document.createElement("label");
    $label.setAttribute("for", this.id);
    $label.appendChild(document.createTextNode(this.text));
    $span.appendChild($label);

    if (this.required) {
      const $mark = document.createElement("span");
      $mark.setAttribute("class", "mark");
      $mark.appendChild(document.createTextNode("(필수*)"));
      $label.appendChild($mark);
    }

    const $input = document.createElement("input");
    $input.setAttribute("id", this.id);
    $input.setAttribute("type", this.type);
    $input.setAttribute("placeholder", this.text);

    if (this.id === "name") {
      $input.setAttribute("pattern", "^[가-힣]{2,4}$");
      $input.setAttribute("title", "2~4 글자의 한글만 입력이 가능합니다.");
    } else if (this.id === "email") {
      $input.setAttribute("pattern", "^[a-z0-9]+@grepp.co$");
      $input.setAttribute(
        "title",
        "이메일 ID는 영문(대소문자 구분 없음)과 숫자만 입력이 가능하며, @grepp.co 형식의 이메일만 입력이 가능합니다."
      );
    } else if (this.id === "nickname") {
      $input.setAttribute("pattern", "^([a-zA-Z]){3,10}$");
      $input.setAttribute(
        "title",
        "대소문자 구분 없이 3~10 글자의 영문만 입력이 가능합니다."
      );
    }

    if (this.required) $input.setAttribute("required", "");

    $span.appendChild($input);

    this.$target.appendChild($span);
  }
}

export default InputBox;
