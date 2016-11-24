// just "site.com" or "site.com:port", no "http://"
exports.host = null;

// string to specify this server's ip, or null to listen on any ip
exports.ip = null;

exports.port = process.env.PORT || 8080;

// if set, GA tracking code will be inserted into the bottom of every page
exports.google_analytics_id = process.env.GA_ID || null;

// this is used connect to keep session cookies secure. You should change this.
<<<<<<< HEAD
exports.secret = process.env.SECRET || "superduperpar01";

// for redis if you're on heroku or using redis-to-go
exports.redistogo_url = process.env.REDISTOGO_URL || "redis://redistogo:ec0a254eaeb62416ba08ad727c71974c@crestfish.redistogo.com:10567/";

=======
exports.secret = process.env.SECRET || "superdupersecretword";

// for redis if you're on heroku or using redis-to-go
exports.redistogo_url = process.env.REDISTOGO_URL || "redis://redistogo:3a81328dd3933b83358c0bc945e13d06@hammerjaw.redistogo.com:11307/";
>>>>>>> 85e1f0779be64d1991b7053147b55229ccd45a74

// for redis if you're running your own copy
exports.redis_host = "localhost";
exports.redis_port = 6379;
exports.redis_options = null;
