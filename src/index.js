import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // alert();

  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";
  // console.log(div);

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;
  // console.log(li);

  // button(完了)タグの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  // console.log(completeButton);
  completeButton.addEventListener("click", () => {
    // alert("完了");
  });

  // button(削除)タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // console.log(deleteButton);
  deleteButton.addEventListener("click", () => {
    // alert("削除");
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // console.log(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
