// require controllers

module.exports = function(app){

    app.get('/test', function(req, res){
        res.json({message: 'yay you talked to my server'});
    })

};