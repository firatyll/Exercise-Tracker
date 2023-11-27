const User = require('../database/models/user');

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
        let log = user.log;
        if (from) {
            log = log.filter((exercise) => new Date(exercise.date) >= new Date(from));
        }
        if (to) {
            log = log.filter((exercise) => new Date(exercise.date) <= new Date(to));
        }
        if (limit) {
            log = log.slice(0, parseInt(limit, 10));
        }

        return res.status(200).json({
            _id: user._id,
            username: user.username,
            count: user.count,
            log: log.map((exercise) => ({
                description: exercise.description,
                duration: exercise.duration,
                date: new Date(exercise.date).toDateString(),
            })),
        });
    } catch (err) {
        res.status(500).json({ error: 'Error getting logs' });
    }
};
