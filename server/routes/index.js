var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get("/*", function(req,res,next){
    var file = req.params[0] || "/assets/views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;