const Preferences = require('../models/Preferences');

exports.savePreferences = async (req, res) => {
  const { theme, layout } = req.body;
  const preferences = await Preferences.findOneAndUpdate(
    { userId: req.user.id },
    { theme, layout },
    { upsert: true, new: true }
  );
  res.json(preferences);
};

exports.getPreferences = async (req, res) => {
  const preferences = await Preferences.findOne({ userId: req.user.id });
  res.json(preferences);
};

exports.getDashboardSummary = (req, res) => {
  res.json({
    team: 3,
    projects: 5,
    notifications: 7
  });
};
