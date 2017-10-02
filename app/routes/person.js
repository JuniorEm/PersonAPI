module.exports = (app) => {

  app.get('/person/:id', (req, res) => {
    var personDAO = new app.app.dao.PersonDAO();
      personDAO.findById(req.params.id, function (result) {
        res.send(result);
      });
    });

  app.get('/person', (req, res) => {
    var personDAO = new app.app.dao.PersonDAO();
    personDAO.findAll((result) => {
      res.send(result);
    });
  });

  app.delete('/person/:id', (req, res) => {
    var personDAO = new app.app.dao.PersonDAO();
    personDAO.delete( req.params.id, ( result ) => {
      res.send( { 'result' : result, 'status-code' : 200 } );
    });

  });

  app.post('/person', (req, res) => {
    var personDAO = new app.app.dao.PersonDAO();
    var person = req.body;
    var obj = new Person(parseInt(person._id), person._name);

    personDAO.insert(obj, (result) => {
      res.send( { 'result' : result, 'status-code' : 200 } );
    });
  });
};

function Person(id, name) {
  this._id = id;
  this._name = name;
}
