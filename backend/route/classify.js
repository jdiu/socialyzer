const router = require('express').Router();
const toxicity = require('@tensorflow-models/toxicity');

const threshold = 0.9;
const model = toxicity.load(threshold);

model.then(() => {
  console.log('Classifier ready!');
});

router.route('/').post((req, res) => {
  model.then(async model => {
    const sentences = req.body.text;
    
    res.json(await model.classify(sentences));
  });
});

module.exports = router;