const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const queryString = require('query-string');

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
    req.body.updatedAt = Date.now();
  }else if(req.method==="PATCH"){
    req.body.updatedAt = Date.now();
  }
  // Continue to JSON Server router
  next()
})

// Custom output 
// To modify responses, overwrite router.render method:
// In this example, returned resources will be wrapped in a body property
router.render = (req, res) => {
    //check GET with pagination
    // If yes , custom output
    const headers = res.getHeaders();
    // console.log('headers: ',headers);

    const totalCountHeader = headers['x-total-count'];
    // console.log('X-Total-Count: ', Number.parseInt(totalCountHeader));
    if (req.method === 'GET' && totalCountHeader) {
        // console.log('Req: ', req);
        // console.log('_parsedUrl: ', req._parsedUrl.query);
        const queryParams = queryString.parse(req._parsedUrl.query);
        // console.log('queryParams: ', queryParams);
        const result = {
            data: res.locals.data,
            pagination: {
                _page: Number.parseInt(queryParams._page) || 1,
                _limit: Number.parseInt(queryParams._limit) || 10,
                _totalRows: Number.parseInt(totalCountHeader),
            },
        };
        // console.log(result.pagination);
        return res.jsonp(result);
    };    
    // Otherwise, keep default behavior
  res.jsonp({
    body: res.locals.data
  })
}
// Use default router
// server.use(router)
server.use('/api',router)
server.listen(4000, () => {
  console.log('JSON Server is running')
})