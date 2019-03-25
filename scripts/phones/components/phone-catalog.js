import Component from '../../common/component.js';

export default class PhoneCatalog extends Component {
    constructor({ element, phones }) {
        super({ element });

        this._phones = phones;

        this._render();

        this.on('click', '[data-element="phone-link"]', (event) => this._onPhoneClick(event));


    }

    _onPhoneClick(event) {
        event.preventDefault();

        let phoneLink = event.delegateTarget;

        this._trigger('phoneSelected', phoneLink.dataset.phoneId);
    }

    _render() {
        this._element.innerHTML = `
            <ul class="phones">
            ${
                this._phones.map(phone => `   
                
                <li class="thumbnail">
                    <a data-element="phone-link" data-phone-id="${phone.id}" href="#!/phones/${phone.id}" class="thumb">
                        <img alt="${phone.name}" src="${phone.imageUrl}">
                    </a>

                    <div class="phones__btn-buy-wrapper">
                        <a class="btn btn-success">
                            Add
                        </a>
                    </div>

                    <a data-element="phone-link" data-phone-id="${phone.id}" href="#!/phones/${phone.id}">${phone.name}</a>
                    <p>${phone.snippet}</p>
                </li>
                `).join('')
            }
                
            </ul>
        `;
    }
}