import Component from '../../common/component.js';

export default class PhoneViewer extends Component {
    constructor({ element }) {
        super({ element });

    }

    showPhone(phone) {
        this._phone = phone;
        this._render();

        super.show();
    }

    _render() {
        this._element.innerHTML = `
            <img class="phone" src="img/phones/motorola-xoom-with-wi-fi.0.jpg">
        
            <button>Back</button>
            <button>Add to basket</button>
        
        
            <h1>${ this._phone.name }</h1>
        
            <p>${ this._phone.description }</p>
        
            <ul class="phone-thumbs">
              <li>
                <img src="img/phones/motorola-xoom-with-wi-fi.0.jpg">
              </li>
              <li>
                <img src="img/phones/motorola-xoom-with-wi-fi.1.jpg">
              </li>
              <li>
                <img src="img/phones/motorola-xoom-with-wi-fi.2.jpg">
              </li>
              <li>
                <img src="img/phones/motorola-xoom-with-wi-fi.3.jpg">
              </li>
              <li>
                <img src="img/phones/motorola-xoom-with-wi-fi.4.jpg">
              </li>
              <li>
                <img src="img/phones/motorola-xoom-with-wi-fi.5.jpg">
              </li>
            </ul>
        `;
    }
}