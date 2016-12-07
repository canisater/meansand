'use strict';

import mongoose from 'mongoose';

var GeopointSchema = new mongoose.Schema({
  name: String,
  info: String,
  coordinates:[Number, Number],
  active: Boolean
});

export default mongoose.model('Geopoint', GeopointSchema);
