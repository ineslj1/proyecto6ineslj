const { isAuth, isAdmin } = require("../../middlewares/auth");
const { getInstruments, getandModifyInstrument, getInstrumentByID, postInstruments, deleteInstrument, getInstrumentByTrademark} = require("../controllers/instruments.js");

const instrumentRoutes = require('express').Router();
  
  instrumentRoutes.post('/', postInstruments);
  instrumentRoutes.get('/', getInstruments);
  instrumentRoutes.get('/trademark/:trademark', getInstrumentByTrademark);
  instrumentRoutes.get('/:id', getInstrumentByID);
  instrumentRoutes.put('/:id', getandModifyInstrument);
  instrumentRoutes.delete('/:id', deleteInstrument);

module.exports = instrumentRoutes;

