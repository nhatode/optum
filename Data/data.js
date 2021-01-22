var CustomerData = {
    "searchInputMetaData": {
        "applicationId": "ISDM",
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
    "id": "",
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
    getCustomerDetails: function () {
        return CustomerData;
    },

    setId: function (id) {
    if (id != CustomerData.id) {
        CustomerData.id = id;
    }return CustomerData;
    }, 

    setFname: function (fname) {
    if (fname != CustomerData.firstName) {
        CustomerData.firstName = fname;
    }return CustomerData;
    },

    setLname: function (lname) {
    if (lname != CustomerData.lastName) {
        CustomerData.lastName = lname;
    }return CustomerData;
    },
    
    setDob: function (dob) {
    if (dob != CustomerData.dateOfBirthName) {
        CustomerData.dateOfBirth = dob;
    }return CustomerData;
    }

};

