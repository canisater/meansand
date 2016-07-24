'use strict';

import mongoose from 'mongoose';

var GeopointSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Geopoint', GeopointSchema);
