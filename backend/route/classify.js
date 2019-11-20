const router = require('express').Router();
const toxicity = require('@tensorflow-models/toxicity');

const threshold = 0.9;
const model = toxicity.load(threshold);

router.route('/').post((req, res) => {
  model.then(async model => {
    const sentences = req.body.text;
    console.log(sentences);
    // console.log('waiting!! pls dont freeze');
    
    return await model.classify(sentences);
  });
});

module.exports = router;