const express = require('express');
const router = express.Router();


const {
    getAll,
    createNew,
    updateInfo,
    deleteInfo
} = require('/home/user/WebstormProjects/Счетчик трат/back/src/modules/controllers/controller');

router.get('/all', getAll);
router.post('/create', createNew);
router.put('/update/:id', updateInfo);
router.delete('/delete/:id', deleteInfo);

module.exports = router;