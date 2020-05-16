module.exports = {
    actionIndex:async(ctx,next)=>{
      
        ctx.body =  require('../mocks/actionAddress.json')
    },
    actionAddress:async(ctx,next)=>{
      
        ctx.body =  require('../mocks/actionAddress.json')
    },
    actionFoodTypes:async(ctx,next)=>{
        
        ctx.body =  require('../mocks/actionFoodTypes.json')
    },
    actionShopList:async(ctx,next)=>{
       
        ctx.body =  require('../mocks/actionShopList.json')
    },
}