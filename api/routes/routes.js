const config = require('../config');
let people = require('../people');

const appRouter = (app) => {
    // GET ALL people
    app.get('/people', (req, res) => {
        console.log('Get all people');

        if(people && people.length) {
            res.send({
                status: config.STATUS.OK,
                message: people,
            });
        } else {
            res.send({
                status: config.STATUS.ERROR,
                message: 'Could not find any people',
            });
        }
    });

  app.get('/people/:id', (req, res) => {
      let person = null;
      console.log('Get person', req.params.id);

      if(people && people.length) {
          person = people.filter((person) => ('' + person.id) === req.params.id);
      }
      if(person) {
          res.send({
              status: config.STATUS.OK,
              message: person[0],
          });
      } else {
          res.send({
              status: config.STATUS.ERROR,
              message: 'Could not find any person',
          });
      }
  });

  app.put('/people/:id', (req, res) => {
      let person = null;
      console.log('update person', req.body);

      if(people && people.length) {
          person = people.filter((person) => ('' + person.id) === req.params.id);
      }

      if(person[0]) {
          // people[req.params.id] = req.body;
          people = people.map((s) => {
              return ('' + s.id) === req.params.id ? req.body : s;
          })
          res.send({
              status: config.STATUS.OK,
              message: req.body,
          });
      } else {
          res.send({
              status: config.STATUS.ERROR,
              message: 'Could not find person for update',
          });
      }
  });

  app.delete('/people/:id', (req, res) => {
      console.log('Remove person', req.params.id);
      people = people.filter((person) => ('' + person.id) !== req.params.id);

      res.send({
          status: config.STATUS.OK,
          message: 'person removed',
      });
  });

  app.post('/people/add', (req, res) => {
      const maxIndex = Math.max.apply(Math,people.map((o) => o.id));
      console.log('Add person', req.body, maxIndex);
      let person = req.body;
      person.id = maxIndex + 1;

      people.push(person);

      if(people[people.length - 1] === person) {
          res.send({
              status: config.STATUS.OK,
              message: person,
          });
      } else {
          res.send({
              status: config.STATUS.ERROR,
              message: 'Could not add person',
          });
      }
  });
}

module.exports = appRouter;
