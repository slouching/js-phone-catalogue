import Component from '../../common/component.js';

export default class PhoneCatalog extends Component {
    constructor({ element }) {
        super({ element });

        // this._phones = phones;

        // this._render();

        this.on('click', '[data-element="phone-link"]', (event) => {
            event.preventDefault();

            let phoneLink = event.delegateTarget;
            let phoneElement = phoneLink.closest('[data-element="phone"]');

            this._trigger('phoneSelected', phoneElement.dataset.phoneId);
        });

        this.on('click', '[data-element="button-add"]', (event) => {
            let phoneElement = event.delegateTarget.closest('[data-element="phone"]')

            this._trigger('addToShoppingCart', phoneElement.dataset.phoneId);
        })

    }

    showPhones(phones) {
        this._phones = phones;
        this._render();
        this.show();
    }

    _render() {
        this._element.innerHTML = `
            <ul class="phones">
            ${
                this._phones.map(phone => `   
                
                <li data-phone-id="${phone.id}" data-element="phone" class="thumbnail">
                    <a data-element="phone-link" href="#!/phones/${phone.id}" class="thumb">
                        <img alt="${phone.name}" src="${phone.imageUrl}">
                    </a>

                    <div class="phones__btn-buy-wrapper">
                        <a class="btn btn-success" data-element="button-add">
                            Add
                        </a>
                    </div>

                    <a data-element="phone-link" href="#!/phones/${phone.id}">${phone.name}</a>
                    <p>${phone.snippet}</p>
                </li>
                `).join('')
            }
                
            </ul>
        `;
    }
}