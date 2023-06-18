const mongoose = require('mongoose');
const { Schema } = mongoose;

const WorkoutSchemeSchema = new Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    compoundName: { 
        type: String,
        required: true,
    },
    repRange: { 
        type: Number,
        required: true,
    },
    compoundSets: {
        type: [Number],
        required: false,
    },
    accessoryExercises: {
        type: [ [String, [[Number]]] ],
        required: false
    }


},{
    timestamps: true,
});

const Workout = mongoose.model('Workout', WorkoutSchemeSchema);

export default Workout;