import chai from 'chai';
const {assert, expect} = chai;

describe('smoke test my-voya page', function () {

    describe('my-voya page', function () {
        const TEST_PAGE = '/index.html#/my-voya';
        const MODAL_CLOSE = '#modalCloseButton';
        const NOT_SEEING_ACCOUNT_LINK = '#search-accounts-link';
        const SEARCH_ACCOUNTS_DROPDOWN = '#accountDropDown';

        before(function() {
            return browser.preset('no-accounts')
                .url(TEST_PAGE)
                .waitForVisible('#myAccountsLabel');
        });

        it('loads', function() {
            return browser.waitForVisible('#myAccountsLabel');
        });

        it('intro modal closes by clicking close button', function() {
            browser.click(MODAL_CLOSE);
            return !browser.isVisible(MODAL_CLOSE);
        });

        describe('"Not Seeing Your Voya Account"', function() {
            
            it('opens when clicked', function() {
                return browser.waitForVisible(NOT_SEEING_ACCOUNT_LINK)
                .click(NOT_SEEING_ACCOUNT_LINK)
                .waitForVisible(SEARCH_ACCOUNTS_DROPDOWN);
            });

            it('closes when clicked again', function() {
                return browser.click(NOT_SEEING_ACCOUNT_LINK)
                .pause(1000)
                .isVisible(SEARCH_ACCOUNTS_DROPDOWN);  //TODO: this should fail as currently written
            });
        });

    })

});
