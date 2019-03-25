import PhoneCatalog from './components/phone-catalog.js';
import PhoneViewer from './components/phone-viewer.js';
import PhoneFilter from './components/phone-filter.js';
import ShoppingCart from './components/shopping-cart.js';

import PhoneService from './services/phone-service.js';


export default class PhonesPage {
    constructor({ element }) {
        this._element = element;

        this._render();

        this._initViewer();

        this._initCatalog();

        this._initShoppingCart();

        this._initFilter();


    }

    _initCatalog() {
        this._catalog = new PhoneCatalog({
            element: document.querySelector('[data-component="phone-catalog"]'),
            phones: PhoneService.getPhones(),
        })

        this._catalog.on('phoneSelected', (event) => {
            let phone = PhoneService.getPhone(event.detail.phoneId);

            this._catalog.hide();
            this._viewer.showPhone(phone);
        })

        this._catalog.on('addToShoppingCart', (event) => {
            let phoneId = event.detail;
            this._shoppingCart.addItem(phoneId);
        })

    }

    _initViewer() {
        this._viewer = new PhoneViewer({
            element: this._element.querySelector('[data-component="phone-viewer"]')
        })

        this._viewer.on('back', () => {
            this._catalog.show();
            this._viewer.hide();
        })

        this._viewer.on('addToShoppingCart', (event) => {
            let phoneId = event.detail;

            this._shoppingCart.addItem(phoneId);
        })

    }

    _initShoppingCart() {
        this._shoppingCart = new ShoppingCart({
            element: document.querySelector('[data-component="shopping-cart"]')
        })
    }

    _initFilter() {
        this._filter = new PhoneFilter({
            element: this._element.querySelector('[data-component="phone-filter"]')
        })
    }

    _render() {
        this._element.innerHTML = `
        <div class="row">

            <!--Sidebar-->
            <div class="col-md-2">
                <section>
                    <div data-component="phone-filter"></div>
                </section>
    
                <section>
                    <div data-component="shopping-cart"></div>
                </section>
            </div>
    
            <!--Main content-->
            <div class="col-md-10" data-component="phone-catalog"></div>
            
            <!--Phone Viewer-->
            <div data-component="phone-viewer" class="js-hidden"></div>
            
        </div>
        `;
    }
}