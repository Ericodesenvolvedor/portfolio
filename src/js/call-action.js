function callAction() {
  const [download, contact] = document.querySelectorAll(".call-action a");
  download.addEventListener('click', () => alert('Curriculo indisponivel no momento.'));
}

export default callAction;
