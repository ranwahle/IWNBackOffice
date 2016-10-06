/**
 * Created by ranwahle on 11/09/2016.
 */

var couchbase = require('couchbase')
var address = 'couchbase://10.211.55.11';

function newContact(contactToAdd) {
    if (!contactToAdd || !contactToAdd.eMail) {
        throw 'Missing contact Id number';
    }


    var cluster = new couchbase.Cluster(address);
    var bucket = cluster.openBucket('IWNContacts');
    bucket.operationTimeout = 120 * 1000;


    contactToAdd.type = 'contact';

    console.log('contact to add', contactToAdd);
    bucket.upsert('contact_' + contactToAdd.eMail, contactToAdd,
        function (err, result) {
            if (err) {
                console.error(err);
            }

        });
}

function getContacts(callback) {
    var cluster = new couchbase.Cluster(address);
    var bucket = cluster.openBucket('IWNContacts');
    bucket.operationTimeout = 120 * 1000;

    var ViewQuery = couchbase.ViewQuery;

    var query = ViewQuery.from('contacts', 'contacts');

    bucket.query(query, function (err, results) {
        var resultsToSend = null;
        console.log('got results', results);
        if (results) {
            resultsToSend = results.map(item => item.value);
        }
        callback(err, resultsToSend);
    });

}

function getUserByToken(userToken, callback) {
    var cluster = new couchbase.Cluster(address);
    var bucket = cluster.openBucket('IWNContacts');
    bucket.operationTimeout = 120 * 1000;
    bucket.get(userToken, function (err, result) {
        if (err) {
            console.error(err, userToken);
        }
        callback(err, result);

    });
}

function saveUser(user, callback) {
    var cluster = new couchbase.Cluster(address);
    var bucket = cluster.openBucket('IWNContacts');
    bucket.operationTimeout = 120 * 1000;

    user.type = 'user';
    console.log('saveing user', user);
    bucket.upsert('user_' + user.id, user,
        function (err, result) {
            if (err) {
                console.error(err);

            }
            callback(err, result);

        });
}
exports.newContact = newContact;
exports.getContacts = getContacts;
exports.getUserByToken = getUserByToken;
exports.saveUser = saveUser;
