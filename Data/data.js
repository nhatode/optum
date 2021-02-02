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
    "dateOfBirth": "",
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

var pharmacyData = {
    "Physician_NP": "",
    "Physician_Tax_ID": ""
};

var drugData = {
    "Drug_Name": "",
    "Drug_Code": ""
};


module.exports = {
    getCustomerDetails: function () {
        return CustomerData;
    },

    setId: function (id) {
        if (id != CustomerData.id) {
            CustomerData.id = id;
        } return CustomerData;
    },

    setFname: function (fname) {
        if (fname != CustomerData.firstName) {
            CustomerData.firstName = fname;
        } return CustomerData;
    },

    setLname: function (lname) {
        if (lname != CustomerData.lastName) {
            CustomerData.lastName = lname;
        } return CustomerData;
    },

    setDob: function (dob) {
        if (dob != CustomerData.dateOfBirthName) {
            CustomerData.dateOfBirth = dob;
        } return CustomerData;
    },

    setPhysician_NP: function (physiciannp) {
        if (physiciannp != pharmacyData.Physician_NP) {
            pharmacyData.Physician_NP = physiciannp;
        } return pharmacyData;
    },
    setPhysician_Tax_ID: function (physiciantid) {
        if (physiciantid != pharmacyData.Physician_Tax_ID) {
            pharmacyData.Physician_Tax_ID = physiciantid;
        } return pharmacyData;
    },
    setDrug_Name: function (drugname) {
        if (drugname != drugData.Drug_Name) {
            drugData.Drug_Name = drugname;
        } return drugData;
    },
    setDrug_Code: function (drugcode) {
        if (drugcode != drugData.Drug_Code) {
            drugData.Drug_Code = drugcode;
        } return drugData;
    },
    getpharmacyData: function () {
        return pharmacyData;
    },
    getdrugData: function () {
        return drugData;
    },

};

