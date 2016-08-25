'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var geopointCtrlStub = {
  index: 'geopointCtrl.index',
  show: 'geopointCtrl.show',
  create: 'geopointCtrl.create',
  update: 'geopointCtrl.update',
  destroy: 'geopointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var geopointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './geopoint.controller': geopointCtrlStub
});

describe('Geopoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(geopointIndex).to.equal(routerStub);
  });

  describe('GET /api/geopoints', function() {

    it('should route to geopoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'geopointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/geopoints/:id', function() {

    it('should route to geopoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'geopointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/geopoints', function() {

    it('should route to geopoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'geopointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/geopoints/:id', function() {

    it('should route to geopoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'geopointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/geopoints/:id', function() {

    it('should route to geopoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'geopointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/geopoints/:id', function() {

    it('should route to geopoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'geopointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
