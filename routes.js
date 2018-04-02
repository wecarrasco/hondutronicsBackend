var usersController = require('./controllers/usersController');

exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, Hondutronics Home API')}}},
	{method: 'POST', path: '/suscribe', config: usersController.createUser}
];
