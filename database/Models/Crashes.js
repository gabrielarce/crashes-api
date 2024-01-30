import mongoose from 'mongoose';

const crashSchema = new mongoose.Schema(
  {
    COLLISION_DATE: {
      type: Date,
      required: true,
    },
    collision_time: {
      type: String,
      required: true,
    },
    day_of_week: {
      type: Number,
      required: true,
    },
    direction: { type: String },
    inter: {
      type: String,
      default: 'Y',
    },
    weather_1: { type: String },
    state_hwy_ind: {
      type: String,
      default: 'N',
    },
    state_route: { type: Number },
    collision_severity: {
      type: Number,
      required: true,
    },
    number_killed: {
      type: Number,
      default: 0,
    },
    number_injured: {
      type: Number,
      default: 0,
    },
    party_count: {
      type: Number,
      required: true,
    },
    primary_coll_factor: { type: String },
    hit_and_run: {
      type: String,
      default: 'N',
    },
    type_of_collision: { type: String },
    ped_action: { type: String },
    road_cond_1: { type: String },
    lighting: { type: String },
    pedestrian_accident: {
      type: Boolean,
      default: false,
    },
    bicycle_accident: {
      type: Boolean,
      default: false,
    },
    motorcycle_accident: {
      type: Boolean,
      default: false,
    },
    truck_accident: {
      type: Boolean,
      default: false,
    },
    alcohol_involved: {
      type: Boolean,
      default: false,
    },
    point_x: {
      type: Number,
      required: true,
    },
    point_y: {
      type: Number,
      required: true,
    },
  },
  { collection: 'crashes' }
);

const Crash = mongoose.model('Crash', crashSchema);
export default Crash;
