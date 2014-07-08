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
	Movie.create({ name: 'jelly bean' }, { name: req.body.mName }, function (err, jellybean, snickers) {
	  if (err)
		console.log(jellybean);
	});
	
	// executing a query explicitly
	var query = Movie.find({ name: /snickers/i }, null, { skip: 1 })
	query.exec(function (err, docs) {
		if(err){
			console.log("something wrong");
		}else{
			console.log(docs);
		}
	});
	
	res.send({'success':true});
};
