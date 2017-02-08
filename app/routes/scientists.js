import Ember from 'ember';
import Prismic from 'npm:prismic.io';

export default Ember.Route.extend({
	model() {
		return context().then(function(context) {
			console.log(context);
		  return context.api.query(
		  	Prismic.Predicates.at('document.type', 'project')
		  ); // An empty query will return all the documents
		}).then(function(response) {
		  console.log("Documents: ", response.results);
		  return {
		  	documents : response.results,
		  	linkResolver : context.linkResolver
		  };
		}).catch(err => console.log(err));

  	}


});	

function context() {
 	const endpoint = "http://sheriffderek.prismic.io/api";
	return Prismic.api(endpoint).then(function(api){
		return {
			api : api,
			endpoint : endpoint,
			linkResolver : linkResolver
		};
	});
}

function linkResolver() {
	return "/";
}