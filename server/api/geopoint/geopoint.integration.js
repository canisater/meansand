'use strict';

var app = require('../..');
import request from 'supertest';

var newGeopoint;

describe('Geopoint API:', function() {

  describe('GET /api/geopoints', function() {
    var geopoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/geopoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          geopoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(geopoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/geopoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/geopoints')
        .send({
          name: 'New Geopoint',
          info: 'This is the brand new geopoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newGeopoint = res.body;
          done();
        });
    });

    it('should respond with the newly created geopoint', function() {
      expect(newGeopoint.name).to.equal('New Geopoint');
      expect(newGeopoint.info).to.equal('This is the brand new geopoint!!!');
    });

  });

  describe('GET /api/geopoints/:id', function() {
    var geopoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/geopoints/' + newGeopoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          geopoint = res.body;
          done();
        });
    });

    afterEach(function() {
      geopoint = {};
    });

    it('should respond with the requested geopoint', function() {
      expect(geopoint.name).to.equal('New Geopoint');
      expect(geopoint.info).to.equal('This is the brand new geopoint!!!');
    });

  });

  describe('PUT /api/geopoints/:id', function() {
    var updatedGeopoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/geopoints/' + newGeopoint._id)
        .send({
          name: 'Updated Geopoint',
          info: 'This is the updated geopoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedGeopoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedGeopoint = {};
    });

    it('should respond with the updated geopoint', function() {
      expect(updatedGeopoint.name).to.equal('Updated Geopoint');
      expect(updatedGeopoint.info).to.equal('This is the updated geopoint!!!');
    });

  });

  describe('DELETE /api/geopoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/geopoints/' + newGeopoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when geopoint does not exist', function(done) {
      request(app)
        .delete('/api/geopoints/' + newGeopoint._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
