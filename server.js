var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
      'article-one' : {
                      title : 'Article One | Nagarajan J',
                      heading : 'Article ONE',
                      date : 'Aug 7, 2017',
                      content :`                
                                <p>
                                    This a created for Article One on 7th Aug 2017. This a created for ARTICLE ONE on 7th Aug 2017. This a created for Article One on 7th Aug 2017. This a created for ARTICLE ONE on 7th Aug 2017. This a created for Article One on 7th Aug 2017. This a created for ARTICLE ONE on 7th Aug 2017.
                                </p>
                                <p>
                                    This a created for Article One on 7th Aug 2017. This a created for ARTICLE ONE on 7th Aug 2017. This a created for Article One on 7th Aug 2017. This a created for ARTICLE ONE on 7th Aug 2017. This a created for Article One on 7th Aug 2017. This a created for ARTICLE ONE on 7th Aug 2017.
                                </p>
                                <p>
                                    This a created for Article One on 7th Aug 2017. This a created for ARTICLE ONE on 7th Aug 2017. This a created for Article One on 7th Aug 2017. This a created for ARTICLE ONE on 7th Aug 2017. This a created for Article One on 7th Aug 2017. This a created for ARTICLE ONE on 7th Aug 2017.
                                </p>
                                `
                    },
      'article-two' : {
                      title : 'Article Two | Nagarajan J',
                      heading : 'Article TWO',
                      date : 'Aug 7, 2017',
                      content :`                
                                <p>
                                    This a created for Article Two on 10th Aug 2017. This a created for ARTICLE TWO on 10th Aug 2017. This a created for Article TWO on 10th Aug 2017.
                                </p>
                                `
                    }
                };


function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viexport" content="width+device+width, initial-scroll-1">
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                
                <div>
                    ${content}    
                </div>
            </div>
        </body>
        
    </html>
    `;
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/:articleName', function (req, res) {
//   articleName = article-one
//   articles(articleName) = {} content object for article one
    var articleName = req.param.articleName;
    res.send(createTemplate(articles[articleName]));
});


//app.get('/article-one', function (req, res) {
////   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
//    res.send(createTemplate(articleOne));
//});

//app.get('/article-two', function (req, res) {
//   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
//});

app.get('/article-three', function (req, res) {
//   res.send('Article Three is requested here');
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
