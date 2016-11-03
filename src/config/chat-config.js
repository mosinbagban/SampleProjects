var config = {

    baseURL : 'http://localhost:9200',
    loginRedirect: '#/welcome',

    disclaimerText : 'Please be aware that we are unable to execute transactions or provide personal account information through this request form.  You can only execute transactions, or obtain personal account information by following instructions in the appropriate password-protected sections of this site.',
    
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