export default class RestoService {
  getMenuItems() {
    return fetch("http://localhost:3000/menu")
      .then(menu => menu.json())
      .then(data => console.log(data));
  }
}