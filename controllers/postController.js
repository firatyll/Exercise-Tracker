const User = require('../database/models/user');
const Exercise = require('../database/models/exercise');

exports.createUser = async (req, res) => {
    const { username } = req.body;
    try {
        const user = new User({
            username : username
        });
        await user.save();
        res.status(201).json({
            username: user.username,
            _id: user._id
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error. Please try again."
        });
    }
};

exports.createExercise = async (req, res) => {
    const id = req.params.id;
    let { description, duration, date } = req.body;

    if (!date) {
        date = new Date().toISOString().substring(0, 10);
    } else {
        date = new Date(date);
    }

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                message: "User not found."
            });
        }

        const exercise = new Exercise({
            userId: id,
            description,
            duration,
            date
        });

        await exercise.save();
        await user.save();

        res.status(201).json({
            _id: user._id,
            username: user.username,
            date: exercise.date.toDateString(),
            duration: exercise.duration,
            description: exercise.description
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server error. Please try again."
        });
    }
};


