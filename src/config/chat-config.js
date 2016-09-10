/**
 * Created by n689716 on 9/7/16.
 */

var config = {

    baseURL : 'http://localhost:9200',
    loginRedirect: '#/welcome',

    genesysChatServiceAPI: 'http://djaxlvbl9087:9080/genesys/2/chat/myservice',

    disclaimerText : 'Internet Response Team Members are not able to accept any requests to submit account changes or financial transactions,nor are they able to provide tax, investment or legal advice.All interactions are subject to recordkeeping and monitoring. Securities offered through Voya Financial Advisers, LLC (Member SIPC).',

    helpOptions : [
            {
                value : 'Advisor Services',
                label : 'Advisor Services'
            },
            {
                value : 'Contributions',
                label : 'Contributions'
            },
            {
                value : 'Enrollment',
                label : 'Enrollment'
            },
            {
                value : 'Fund Information/Changes',
                label : 'Fund Information/Changes'
            },
            {
                value : 'Loans',
                label : 'Loans'
            },
            {
                value : 'Personal Information',
                label : 'Personal Information'
            },
            {
                value : 'Statements & Documents',
                label : 'Statements & Documents'
            },
            {
                value : 'Technical Support',
                label : 'Technical Support'
            },
            {
                value : 'Withdrawals',
                label : 'Withdrawals'
            },
            {
                value : 'Others',
                label : 'Other'
            }
        ]
}


export default config;