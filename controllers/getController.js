const User = require('../database/models/user');
const Exercise = require('../database/models/exercise');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find().select('-log -count');
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: 'Error getting users' });
    }
};

exports.getLogs = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        let { from, to, limit } = req.query;
        let exercises = await Exercise.find({ userId: req.params.id }).select('-_id -userId -__v');

        if (from) {
            exercises = exercises.filter((exercise) => new Date(exercise.date) >= new Date(from));
        }
        if (to) {
            exercises = exercises.filter((exercise) => new Date(exercise.date) <= new Date(to));
        }
        if (limit) {
            exercises = exercises.slice(0, parseInt(limit, 10));
        }

        return res.status(200).json({
            _id: user._id,
            username: user.username,
            count: exercises.length,
            log: exercises.map((exercise) => ({
                description: exercise.description,
                duration: exercise.duration,
                date: exercise.date.toDateString()
            }))
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error getting logs' });
    }
};
