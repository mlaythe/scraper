var request = require('request'),
    cheerio = require('cheerio'),
    url = 'https://twitter.com/',
    names = {};

request(url, function(err, res, body) {
    if(!err && res.statusCode === 200) {
        var $ = cheerio.load(body)
        $('strong.fullname', 'div.stream-item-header').each(function() {
            var name = $(this).html();
            if(names[name] === 1) {
                names[name] += 1;
                console.log('repeats more than once', name);
            } else {
                names[name] = 1;
            }
        });
        console.log(names);
    }
});
