import Ember from 'ember';

export function getStructuredText(params/*, hash*/) {
	console.log("helper");
	var prismicDocument = params[0];
	var keyPrismic = params[1];
	var linkResolver = params[2];
	console.log(keyPrismic);

    return new Ember.Handlebars.SafeString(prismicDocument.getStructuredText(keyPrismic).asHtml(linkResolver));
}

export default Ember.Helper.helper(getStructuredText);
