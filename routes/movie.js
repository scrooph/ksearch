var Movie = require('./../models/Movie.js');
exports.movieAdd = function(req, res) {
	if(req.params.name){
		// executing a query explicitly
		var query = Movie.find({ name: '/'+req.params.name+'/i' },null, { skip: req.params.page });
		var supplies = query.limit(10);
		return res.render('main/movie/movie', {
		title:req.params.name+'|电影|管理|moive.me',
		label:'编辑电影:'+req.params.name,
		movie:req.params.name,
		supplies:supplies
		});
	} else {
		// executing a query explicitly
		//var query = Movie.find({ name: /snickers/i }, null, { skip: 1 });
		var query = Movie.find(null, null, { skip: req.params.page });
		var supplies = query.limit(10).exec();
		console.log(supplies);
		return res.render('main/movie/movie',{
		title:'新增加|电影|管理|moive.me',
		label:'新增加电影',
		movie:false,
		supplies:supplies
		});
	}
};
exports.doMovieAdd = function(req, res) {
	
	if(req.body.mName==null||req.body.mName==""){
		res.send({'success':false});
	}else{
		Movie.create({ name: req.body.mName }, function (err, snickers) {
		  if (err)
			console.log(snickers);
		});
	}
	
	res.send({'success':true});
};
