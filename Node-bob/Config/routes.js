const BiscuitsController = require('../Controller/BiscuitsController')

const routes = (app) => {
    app.get('/biscuits/', BiscuitsController.getAllBiscuits)

    app.get('/biscuits/topthree', BiscuitsController.getTopThreeBiscuits)

    app.get('/biscuits/fourtoten', BiscuitsController.getFourToTenBiscuits)

    app.put('/biscuits/winner', BiscuitsController.putWinnerBiscuit)
    
    app.put('/biscuits/loser',  BiscuitsController.putLoserBiscuit)
};

module.exports = routes
