var Movie = require('./../models/Movie.js');
exports.movieAdd = function(req, res) {
	if(req.params.name){//update
		return res.render('main/movie/movie', {
		title:req.params.name+'|电影|管理|moive.me',
		label:'编辑电影:'+req.params.name,
		movie:req.params.name
		});
	} else {
		return res.render('main/movie/movie',{
		title:'新增加|电影|管理|moive.me',
		label:'新增加电影',
		movie:false
	});
	}
};
exports.doMovieAdd = function(req, res) {
	Movie.create({ name: 'jelly bean' }, { name: 'snickers' }, function (err, jellybean, snickers) {
	  if (err)
		console.log(jellybean);
		
		console.log("something wrong");
	});
	res.send({'success':true});
};
