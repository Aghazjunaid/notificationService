const express = require('express');
const router = express.Router();

const notificationservice = require('./notification');

router.post('/add', notificationservice.addNotification);
router.get('/get/:id', notificationservice.getNotficationById);
router.patch('/update/:id', notificationservice.updateNotficationById);

module.exports = router;