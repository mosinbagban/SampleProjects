var config = {

    baseURL : 'http://localhost:9200',
    loginRedirect: '#/welcome',

    disclaimerText : 'Internet Response Team Members are not able to accept any account change requests or financial transaction instructions nor are they able to provide tax, investment or legal advice.   All interactions are subject to recordkeeping and monitoring.  Securities offered through Voya Financial Advisers, Inc. (Member SIPC).',
    
    preLoginAuthenticationLevel:'X',

    postLoginAuthenticationLevel:'2',
    
    helpOptions : [
                {
                    value : 'Advisory Services',
                    label : 'Advisory Services'
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
                    value : 'Statements & Documents',
                    label : 'Statements & Documents'
                },
                {
                    value : 'Personal Information',
                    label : 'Personal Information'
                },
                {
                    value : 'Web or Mobile App Support',
                    label : 'Web or Mobile App Support'
                },
                {
                    value : 'Withdrawals',
                    label : 'Withdrawals'
                },
                {
                    value : 'Other',
                    label : 'Other'
                }
            ] ,


        helpOptionsPre : [
                {
                    value : 'First Time User',
                    label : 'First Time User'
                },
                {
                    value : 'Web Assist',
                    label : 'Web Assist'
                },
                {
                    value : 'General Question',
                    label : 'General Question'
                }
            ]
}


export default config;