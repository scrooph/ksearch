var Movie = require('./../models/Movie.js');
exports.movieAdd = function(req, res) {
	var perpage = 10;
	if(req.params.name){
		// executing a query explicitly
		var query = Movie.find({ name: req.params.name },null, { skip: req.params.page });
		query.limit(perpage).exec(function(err,docs){
			var supplies;
			if(err)
				console.log("something wrong")
			else{
				supplies = docs;
				console.log(supplies);
				return res.render('main/movie/movie', {
				title:req.params.name+'|电影|管理|moive.me',
				label:'编辑电影:'+req.params.name,
				movie:req.params.name,
				supplies:supplies
				});
			}
		});
		
	} else {
		// executing a query explicitly
		//var query = Movie.find({ name: /snickers/i }, null, { skip: 1 });
		var query = Movie.find(null, null, { skip: req.params.page });
		query.limit(perpage).exec(function(err,docs){
			var supplies;
			if(err)
				console.log("something wrong")
			else{
				supplies = docs;
				console.log(supplies);
				return res.render('main/movie/movie',{
				title:'新增加|电影|管理|moive.me',
				label:'新增加电影',
				movie:false,
				supplies:supplies
				});
			}
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
