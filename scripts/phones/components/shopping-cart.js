import Component from '../../common/component.js';

export default class ShoppingCart extends Component {
    constructor({element}) {
        super({element});
        this._element = element;

        this._items = [];

        this._render();
    }

    addItems(item) {
        this._items.push(item);

        this._render();
    }

    _render() {
        let cartContent;

        if(this._items.length === 0) {
            cartContent = `<p>No items in cart</p>`
        } else {
            cartContent = `
                <ul>
                    ${this._items.map(item => `
                        <li>${item}<button>x</button></li>
                    `).join('')}
                </ul>
            `
        }

        this._element.innerHTML = `
        <p>Shopping Cart</p>
        ${cartContent}
        `
    }
}