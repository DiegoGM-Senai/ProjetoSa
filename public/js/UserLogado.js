
function getCookie(usuario_login) {
    let name = usuario_login + "=";
    let logado = decodeURIComponent(document.cookie);
    let search = logado.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = search[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }