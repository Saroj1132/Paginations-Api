var express = require('express');
var router = express.Router();
const joi = require('joi')
const pegination = require('../model/pegi')

router.get('/pegination-data', async (req,res)=>{

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  
  const _Pegination = await pegination.find({}).skip(skip).limit(limit);

  //display pagination status with current and las page 
  const totalCount = await pegination.countDocuments({});
  const lastPage = Math.ceil(totalCount / limit);

  const paginationData = {
    total_count: totalCount,
    last_page: lastPage,
    current_page: page,
  };

  const responseData = {
    data: _Pegination,
    pagination: paginationData,
  };
  res.json(responseData)
})

module.exports = router;
