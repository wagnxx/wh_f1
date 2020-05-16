const Koa = require('koa');
const router = require('koa-simple-router');

const app = new Koa();


// 具体参数我们在后面进行解释


 
app.use(async (ctx, next) => {
  ctx.type = 'json';
  next();
});


require('./controllers')(app);

app.listen(3000, () => {
  console.log('server is running over 3000 port');
});
