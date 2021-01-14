
//Prabodhan
const app = "http://localhost:7071";

const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;

const cust_details = {
    Member_id: 1,
    Provider_id: 'sd789',
    DrugCode: 'moderna007',
    BenefitTyoe: 'insured',
    TotalCost: 6000
};

const cust_details2 = {
    
    Member_id: 2,
    Provider_id: 'sd789',
    DrugCode: 'moderna007',
    BenefitTyoe: 'insured',
    TotalCost: 6000

}

chai.use(chaiHttp);
describe("Server!", () => {
    it("welcomes user to the api", done => {
        chai
            .request(app)
            .get("/api/GetData")
            .end((err, res) => {
                console.log(JSON.parse(res.text).data[0]);
                expect(res.status).equal(200);
                expect(JSON.parse(res.text).data[0]).to.be.deep.equal(cust_details);
                expect(JSON.parse(res.text).data[1]).to.not.equal(cust_details2);
                // expect(res.body.status).to.equals("success");
                // expect(res.body.message).to.equals("Welcome To Testing API");
                done();
            });
    });

});

