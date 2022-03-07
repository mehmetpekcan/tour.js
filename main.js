import "./style.css";
import Tour from "./src";

document.querySelector("#app").innerHTML = `
  <span>
    <h1 style='font-size: 64px'>Tour.js</h1>
    <p>A walkthrough maker for your web app</p>
    <button id='stop-record-button'>Stop recording</button>
  </span>
`;

const stopRecordButton = document.querySelector("#stop-record-button");

Tour.addWorker();
stopRecordButton.addEventListener("click", Tour.removeWorker);
