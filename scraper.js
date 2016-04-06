var request = require('request'),
    cheerio = require('cheerio'),
    url = 'https://www.reddit.com/',
    urls = [];

request(url, function(err, res, body) {
    if(!err && res.statusCode === 200) {
        var $ = cheerio.load(body)
        $('a.title', '#siteTable').each(function() {
            var url = $(this).attr('href');
            if(url.indexOf('i.imgur.com') !== -1) {
                urls.push(url);
            }
        });
        console.log(urls);
    }
});
