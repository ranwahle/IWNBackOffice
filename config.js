/**
 * Created by ranwahle on 10/10/2016.
 */
let config = {
    port : 5000,
    security: {
        defaultAdminId : 'google_102180803478740486911'
    },
    database: {
        url: 'couchbase://13.79.36.80:?detailed_errcodes=1', //couchbase://10.211.55.11' couchbase://13.79.36.80
        password: 'IWNpass'
    }

}

module.exports = config;
