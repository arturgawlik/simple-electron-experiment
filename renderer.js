const [h1] = document.getElementsByTagName("h1");
h1.textContent = `This app is using Chrome: ${window.versions.chrome()}`;

async function pingPong() {
  const pingMainProcess = window.versions.ping;
  const resp = await pingMainProcess();
  console.log(resp);
}

pingPong();
