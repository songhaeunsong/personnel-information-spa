class ComboBox {
  constructor({ $target, id, text, valueList, textList, required }) {
    this.$target = $target;
    this.id = id;
    this.text = text;
    this.valueList = valueList;
    this.textList = textList;
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

    const $select = document.createElement("select");
    $select.setAttribute("id", this.id);
    $select.setAttribute("name", this.id);
    $span.appendChild($select);

    for (let i = 0; i < this.valueList.length; i++) {
      const $option = document.createElement("option");
      $option.setAttribute("value", this.valueList[i]);
      $option.appendChild(document.createTextNode(this.textList[i]));
      $select.appendChild($option);
    }

    if (this.required) $select.setAttribute("required", "");

    this.$target.appendChild($span);
  }
}

export default ComboBox;
