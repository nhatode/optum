// const request = require("supertest");
// const app = 'http://localhost:7071'

// const data = require('../CustomerData/service')


// const expect = require('chai').expect;
// const request = require('request');

// describe('Status and content', () => {
//     describe('Dummy GET', () => {
//         it('status', done => {
//             request('http://localhost:7071/api/GetData', (_, response) => {
//                 expect(response.status).to.equal(200)
//                 done()
//             })
//         })

//         it('content', done => {
//             request('http://localhost:7071/api/GetData', (_, response) => {
//                 expect(JSON.parse(response.body)).to.equal([
//                     {

//                         Member_id: 1,
//                         Provider_id: 'sd789',
//                         DrugCode: 'moderna007',
//                         BenefitTyoe: 'insured',
//                         TotalCost: 6000
//                     },
//                     {
//                         Member_id: 2,
//                         Provider_id: 'rt383',
//                         DrugCode: 'moderna786',
//                         BenefitTyoe: 'partial_insured',
//                         TotalCost: 2000
//                     },
//                     {
//                         Member_id: 3,
//                         Provider_id: 'dhs29',
//                         DrugCode: 'pfizer007',
//                         BenefitTyoe: 'insured',
//                         TotalCost: 8000
//                     },
//                     {
//                         Member_id: 4,
//                         Provider_id: 'ks885',
//                         DrugCode: 'pfizer786',
//                         BenefitTyoe: 'insured',
//                         TotalCost: 3000
//                     }
//                 ])
//                 done()
//             })

//         })
//     })
// })

// github=chai version
// const expect = require('chai').expect;
// const request = require('request');

// describe('Status and content', () => {
//     describe('Dummy GET', () => {
//         it('status', done => {
//             request('http://localhost:3000/dummy', (_, response) => {
//                 expect(response.statusCode).to.equal(200)
//                 done()
//             })
//         })

//         it('content', done => {
//             request('http://localhost:3000/dummy', (_, response) => {
//                 expect(JSON.parse(response.body).message).to.equal('Test is passed')
//                 done()
//             })
//         })
//     })
// })

// supertest documentation
// describe("GET /", () => {
//     test("It should respond with an array of CustomerDetails", async () => {
//         const response = await request(app).get("/GetData");
//         expect(response.body).toEqual([
//                 {
//                     Member_id: 1,
//                     Provider_id: 'sd789',
//                     DrugCode: 'moderna007',
//                     BenefitTyoe: 'insured',
//                     TotalCost: 6000
//                 },
//                 {
//                     Member_id: 2,
//                     Provider_id: 'rt383',
//                     DrugCode: 'moderna786',
//                     BenefitTyoe: 'partial_insured',
//                     TotalCost: 2000
//                 },
//                 {
//                     Member_id: 3,
//                     Provider_id: 'dhs29',
//                     DrugCode: 'pfizer007',
//                     BenefitTyoe: 'insured',
//                     TotalCost: 8000
//                 },
//                 {
//                     Member_id: 4,
//                     Provider_id: 'ks885',
//                     DrugCode: 'pfizer786',
//                     BenefitTyoe: 'insured',
//                     TotalCost: 3000
//                 }
//             ]   

//         );
//         expect(response.statusCode).toBe(200);
//     });
// });

// Azure trigger
// const httpFunction = require('../GetData/index');
// const context = require('./defaultContext')
// const request = require('supertest')

// test('Http trigger should return known text', async () => {


//     await httpFunction(context, request);
//     console.log(context.res)
//     expect(context.res.status).toBe(200);
//     // expect(context.res.body).toEqual(data);
// });



// const request = require('supertest')
// // const app = 'http://localhost:7071'
// describe('Get Endpoints', () => {
//     it('should get a all ', async () => {
//         const res = await request('http://localhost:7071')
//             .get('api/GetData')

//         expect(res.statusCode).toEqual(200)
//         // expect(res.body).toHaveProperty('post')
//     })
// })