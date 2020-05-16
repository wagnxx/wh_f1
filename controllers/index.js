module.exports = app => {
  app.use(
    router((_) => {
      // _.get('/api', require('./controllers/apiController').actionIndex);
      // 获取经纬度地址
      _.get('/api/position/:geoHash', require('./controllers/apiController').actionAddress);
      // 食品类型
      _.get(
        '/api/index_categeory',
        require('./controllers/apiController').actionFoodTypes
      );
      //　商铺列表
      _.get(
        '/api/shops',
        require('./controllers/apiController').actionShopList
      );
    　
    })
  );
  
}