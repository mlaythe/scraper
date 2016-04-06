var request = require('request'),
    cheerio = require('cheerio'),
    url = 'https://twitter.com/',
    messages = {};

request(url, function(err, res, body) {
    if(!err && res.statusCode === 200) {
        //load the body of the page into Cheerio so we can traverse the DOM
        var $ = cheerio.load(body)
        //looks at the text inside every tweet on Twitter homepage
        $('p.tweet-text', 'div.js-tweet-text-container').each(function() {
            var message = $(this).text(),
                //specify your keyword search by changing elements in array
                key  = ['Bernie', 'Sophomore All-American', 'Merle Haggard'];
            //adds number of times the keyword appears on homepage and
            //makes that the value of the keyword property in the object
            for(var i = 0; i < key.length; i++) {
                 if(message.indexOf(key[i]) !== -1) {
                    if(messages[key[i]] === 1){
                        messages[key[i]] += 1;
                    } else {
                        messages[key[i]] = 1;
                    }
                }
            }
        });
        //logs the results of the keyword search
        console.log(messages);
    }
});
