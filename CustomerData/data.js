const CustomerData = {
    "searchInputMetaData": {
        "applicationId": "POR2",
        "consumerAppType": "IA",
        "consumerType": "CA",
        "externalCorrelationId": "Test03007062017"
    },
    "pagination": {
        "maxResults": "10",
        "maxResultsIndicator": "true"
    },
    "sourceSystemInstance": "RXDV1",
    "carrierId": "",
    "accountId": "",
    "groupId": "",
    "cagList": "",
    "cagListType": "",
    "incExcListIdentifier": "",
    "id": "TESTMEM22333322333",
    "idType": "",
    "idSearchOperator": "",
    "familyIdScope": "",
    "dateOfBirth": "19971102",
    "gender": "",
    "firstName": "",
    "firstNameSearchOperator": "",
    "lastName": "",
    "lastNameSearchOperator": "",
    "memberEffectiveDate": "",
    "includeCAGNames": "",
    "contact": {
        "address1": "",
        "address2": "",
        "address3": "",
        "city": "",
        "state": "",
        "zip1": "",
        "zip2": "",
        "zip3": "",
        "country": "",
        "phoneNumber": ""
    }
};


module.exports = {
    getCustomerDetails: function (context) {
        return CustomerData;
    },

    postmId: function (id) {
        if (id != CustomerData.id) {
            CustomerData.id = id;
        }
        return CustomerData;             
    },

    fname: function (fname) {
        if (fname != CustomerData.firstName) {
            CustomerData.firstName = fname;
        }
        return CustomerData;
    },
    lname: function (lname) {
        if (lname != CustomerData.lastName) {
            CustomerData.lastName = lname;
        }
        return CustomerData;
    }
};
