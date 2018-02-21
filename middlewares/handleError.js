const fs            = require('fs');
const path = require('path');


exports.errorHandler = (err, req, res, next)=>{
    if (res.headersSent) {
        return next(err)
      }
      res.status(500)
      res.render('error', { error: err })
    
};
