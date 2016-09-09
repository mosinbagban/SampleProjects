import chai from 'chai';
const {assert, expect} = chai;

describe('smoke test om-questions', function () {

    describe('my-voya page', function () {
        const RESET_URL = 'https://my2.intg.voya.com/myvoya/ws/ers/admin/service/222e9980-24c1-8565-e053-d22aac0afcb2/delete/orangemoney';
        const TEST_CONFIG_PAGE = '/test-accounts.html#/my-voya';
        const TEST_PAGE = '/index.html#/my-voya';
        const MODAL_CLOSE = '#modalCloseButton';
        const NOT_SEEING_ACCOUNT_LINK = '#search-accounts-link';
        const SEARCH_ACCOUNTS_DROPDOWN = '#accountDropDown';
        const SLICK_NEXT = 'button.slick-next';

        const FORM1 = 'form[name=questionForm-1]';
        const FORM2 = 'form[name=questionForm-2]';
        const FORM3 = 'form[name=questionForm-3]';
        const FORM4 = 'form[name=questionForm-4]';
        const FORM5 = 'form[name=questionForm-5]';
        const DRAWER_FORM = '.orangeMoneyForm';

        const AGE_INPUT = FORM1+' input#age';
        const ANNUAL_INCOME_INPUT = FORM2+' input#annualIncomeAmount';
        const TOTAL_SAVINGS_INPUT = FORM3+' input#totalSavingsAmount';
        const SAVINGS_PER_MONTH = FORM4+' input#savingsPerMonthAmount';
        const OTHER_MONTHLY_INCOME = FORM5+' input#othersMonthlyIncome';

        const DRAWER_AGE_INPUT = DRAWER_FORM+' input#age';
        const DRAWER_ANNUAL_INCOME_INPUT = DRAWER_FORM+' input#annualIncomeAmount';
        const DRAWER_TOTAL_SAVINGS_INPUT = DRAWER_FORM+' input#totalSavingsAmount';
        const DRAWER_SAVINGS_PER_MONTH = DRAWER_FORM+' input#savingsPerMonthAmount';
        const DRAWER_OTHER_MONTHLY_INCOME = DRAWER_FORM+' input#othersMonthlyIncome';
        const DRAWER_INCLUDE_SS = 'voya-field[input-name="includeSocial"] .chosen-container';

        const ESTIMATED_INCOME = '#estimatedMonthlyIncome h2';

        const OM_FORM = '#orangeMoneyFormLabel'

        const SUBMIT_BUTTON = '.planningQuestionWrapper.active voya-button';

        before(function() {
            return browser.preset('no-accounts')
                .url(RESET_URL)
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

        describe('OM Questionaire', function() {

            it('question 1 accepts 18', function*() {
                yield browser.setValue(AGE_INPUT, '18')
                yield browser.click(SUBMIT_BUTTON)
                yield browser.waitForVisible(ANNUAL_INCOME_INPUT)
            });

            it('question 2 accepts 5000', function*() {
                yield browser.setValue(ANNUAL_INCOME_INPUT, '5000')
                yield browser.click(SUBMIT_BUTTON)
                yield browser.waitForVisible(FORM3)
            });

            it('question 3 accepts 5000', function*() {
                yield browser.setValue(TOTAL_SAVINGS_INPUT, '5000')
                yield browser.click(SUBMIT_BUTTON)
                yield browser.waitForVisible(FORM4)
            });

            it('question 4 accepts 5000', function*() {
                yield browser.setValue(SAVINGS_PER_MONTH, '5000')
                yield browser.click(SUBMIT_BUTTON)
                yield browser.waitForVisible(FORM5)
            });

            it('question 5 accepts 5000', function*() {
                yield browser.setValue(OTHER_MONTHLY_INCOME, '5000')
                yield browser.click(SUBMIT_BUTTON)
                yield browser.waitForVisible(OM_FORM)
            });

        });


        describe('OM Form Controls', function() {

            it('age accepts 19', function*() {
                yield browser.setValue(DRAWER_AGE_INPUT, '19')
            });

            it('income accepts 5001', function*() {
                yield browser.setValue(DRAWER_ANNUAL_INCOME_INPUT, '5001')
            });

            it('savings accepts 5001', function*() {
                yield browser.setValue(DRAWER_TOTAL_SAVINGS_INPUT, '5001')
            });

            // it('question 4 accepts 5001', function*() {
            //     yield browser.setValue(DRAWER_SAVINGS_PER_MONTH, '5001')
            // });

            it('future monthly income accepts 5001', function*() {
                yield browser.setValue(DRAWER_OTHER_MONTHLY_INCOME, '5001')
            });

           it('include social security toggled', function*() {
                yield browser.click(DRAWER_INCLUDE_SS)
                yield browser.click(DRAWER_INCLUDE_SS+' [data-option-array-index="2"]')
            });

           it('om graph shows the expected value',function*() {
                let val = yield browser.getText(ESTIMATED_INCOME);
                return expect(val === '$25,756');
           })

        });
            
    })

});
