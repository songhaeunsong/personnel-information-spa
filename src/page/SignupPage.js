import Button from "../components/Button.js";
import ComboBox from "../components/ComboBox.js";
import ContentTitle from "../components/ContentTitle.js";
import InputBox from "../components/InputBox.js";

class SignupPage {
  constructor({ $target }) {
    this.$target = $target;
  }

  render() {
    new ContentTitle({
      $target: this.$target,
      title: "Sign Up, GreatPeoPle",
    }).render();

    const $form = document.createElement("form");
    $form.setAttribute("id", "form_container");

    new InputBox({
      $target: $form,
      id: "name",
      text: "이름",
      type: "text",
      required: true,
    }).render();
    new InputBox({
      $target: $form,
      id: "email",
      text: "이메일",
      type: "email",
      required: true,
    }).render();
    new InputBox({
      $target: $form,
      id: "nickname",
      text: "닉네임",
      type: "text",
      required: true,
    }).render();

    let valueList = ["", "backend", "frontend", "fullstack"];
    let textList = ["직군을 선택해주세요", "백엔드", "프론트엔드", "풀스택"];
    new ComboBox({
      $target: $form,
      id: "role",
      text: "직군",
      valueList,
      textList,
      required: true,
    }).render();

    valueList = [
      "",
      "ENFJ",
      "ENTJ",
      "ENFP",
      "ENTP",
      "ESFJ",
      "ESTJ",
      "ESFP",
      "ESTP",
      "INFJ",
      "INTJ",
      "INFP",
      "INTP",
      "ISFJ",
      "ISTJ",
      "ISFP",
      "ISTP",
    ];
    textList = [
      "MBTI를 선택해주세요",
      "ENFJ",
      "ENTJ",
      "ENFP",
      "ENTP",
      "ESFJ",
      "ESTJ",
      "ESFP",
      "ESTP",
      "INFJ",
      "INTJ",
      "INFP",
      "INTP",
      "ISFJ",
      "ISTJ",
      "ISFP",
      "ISTP",
    ];
    new ComboBox({
      $target: $form,
      id: "mbti",
      text: "MBTI",
      valueList,
      textList,
      required: false,
    }).render();

    new Button({ $target: $form }).render();

    $form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = e.target.name.value;
      const email = e.target.email.value;
      const nickname = e.target.nickname.value;
      const role = e.target.role.value;
      const mbti = e.target.mbti.value;

      const submitInfo = { name, email, nickname, role, mbti };

      const personalInfo = JSON.parse(localStorage.getItem("personalInfo"));
      const check = personalInfo.find(
        ({ email: _email, nickname: _nickname }) =>
          _email === email || _nickname === nickname
      );

      if (!check) {
        personalInfo.push(submitInfo);
        localStorage.setItem("personalInfo", JSON.stringify(personalInfo));

        alert("성공적으로 등록되었습니다.");

        e.target.name.value = "";
        e.target.email.value = "";
        e.target.nickname.value = "";
        e.target.role.value = "";
        e.target.mbti.value = "";
      } else {
        alert("이메일 혹은 닉네임이 이미 등록되어 있습니다.");
      }
    });

    this.$target.appendChild($form);
  }
}

export default SignupPage;
