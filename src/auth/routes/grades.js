'use strict';

const express = require('express');
const router = express.Router();
const { grades } = require('../models');
const basicAuth = require('../../auth/middleware/basic');
const bearerAuth = require('../../auth/middleware/bearer');
const acl = require('../../auth/middleware/acl');

router.post('/grade', bearerAuth, acl('create'), async (req, res, next) => {
  try {
    let newGrade = await grades.create(req.body);

    res.status(200).send(newGrade);
  } catch(err) {
    next(err);
  }
});


router.get('/grade', async (req, res, next) => {
  try {
    let allGrades = await grades.read();

    res.status(200).send(allGrades);
  } catch(err) {
    next(err);
  }
});


router.get('/grade/:id', basicAuth, async (req, res, next) => {
  try {
    let singleGrade = await grades.read(req.params.id);

    res.status(200).send(singleGrade);
  } catch(err) {
    next(err);
  }
});


router.put('/grade/:id', bearerAuth, acl('update'), async (req, res, next) => {
  try {
    await grades.update(req.params.id,req.body);
    let updatedGrade = await grades.read(req.params.id);

    res.status(200).send(updatedGrade);
  } catch(err) {
    next(err);
  }
});


router.delete('/grade/:id', bearerAuth, acl('delete'), async (req, res, next) => {
  try {
    const deletedGrade = await grades.delete(req.params.id);
    res.status(200).send(deletedGrade);
  } catch(err) {
    next(err);
  }
});


module.exports = router;
