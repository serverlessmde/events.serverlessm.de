///<reference path="../../typings/index.d.ts"/>

//import $ = require("jquery");

hello.on('auth.login', function(auth) {
	console.log('auth: ', auth);

	hello(auth.network).api('/2/profiles?&sign=true&photo-host=public&member_id=self&group_id=19906279').then(function(r) {
		console.log('r: ', r);
	});
});

$(() => {
	hello.init({
		'meetup': '4sbt5ama5llhhp0h91o59qeunb'
	}, { 
		'redirect_uri': 'callback.html',
		'display': 'page',
		'network': 'meetup'
	})

	//console.log(JSON.stringify(getNVPairs()))

})