import request from 'supertest';
import {app} from '../index';

describe("Test GET /", function() {

  it("Request '/' should returns status code 200", function() {
          request(app).get('/').expect(200);
  })
});