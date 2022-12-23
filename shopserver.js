let express = require("express");

var cors = require("cors");
let app = express();
app.use(cors());

app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested=With,X-Auth-Token, Content-Type, Accept"
  );
  next();
});
var port = process.env.PORT || 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

let { purchases } = require("./purchasedata");
let { shops } = require("./shopdata");
let { products } = require("./productdata");





//   app.get("/shops", function (req, res) {
//     let arr1 = shops
//     console.log(arr1)

//     res.send(arr1);
//   });


//   app.post("/shops", function (req, res) {

//     let shopArry = shops
//     let maxid = shopArry.reduce((acc,curr)=>(curr.shopId>acc ? curr.shopId: acc),0)
//     let shopId = maxid + 1
//     console.log(shopId)

//   let body = req.body;
//   let newshop = {shopId, ...body };
//   shops.push(newshop);
//   res.send("inserted shop successfully");
// })


// app.get("/products", function (req, res) {
//   let arr1 = products
//   console.log(arr1)

//   res.send(arr1);
// });


// app.post("/products", function (req, res) {

//   let productArry = products
//   let maxid = productArry.reduce((acc,curr)=>(curr.productId>acc ? curr.productId: acc),0)
//   let productId = maxid + 1

// let body = req.body;
// let newproduct = {productId, ...body };
// products.push(newproduct);
// res.send("inserted product successfully");
// })



// app.put("/products/:productId", function (req, res) {
//   let productId = +req.params.productId;
//   let body = req.body;
//   let index = products.findIndex((st) => st.productId === productId);
//   console.log(index)

//   if (index >= 0) {
//     let updatedproduct = { productId: productId, ...body };
//     products[index] = updatedproduct;

//     res.send(updatedproduct);
//   } else res.status(404).send("No student found");
// })




// app.get("/purchases/shops/:id", function (req, res) {
//   let productId = +req.params.id;
//   arr1 = purchases.filter((st) => st.shopId === productId)
//   console.log(arr1)
//   res.send(arr1);
// });




// app.get("/purchases", function (req, res) {
//   let shop = req.query.shop;
//   let product = req.query.product;
//   let sort = req.query.sort;
//   let arr1 = purchases



//   if (product) {
//     let pro = product.split(",");
//     arr1 = arr1.filter((st) => pro.find((c1) => c1 === st.productName));
//   }
//   if (shop) {
//     let shop1 = shop.split(",");
//     arr1 = arr1.filter((st) => shop1.find((c1) => c1 * 1 === st.shopId));
//   }





//  if (sort === "QtyAsc") arr1.sort((st1, st2) => st1.quantity - st2.quantity);
//  if (sort === "QtyDesc") arr1.sort((st1, st2) =>  st2.quantity - st1.quantity);
//  if (sort === "ValueAsc") arr1.sort((st1, st2) => st1.quantity*st1.price - st2.quantity*st2.price);
//  if (sort === "ValueDesc") arr1.sort((st1, st2) => st2.quantity*st2.price - st1.quantity*st1.price );





//   res.send(arr1);
// });

// app.post("/purchases", function (req, res) {

//   let productArry = purchases
//   let maxid = productArry.reduce((acc,curr)=>(curr.purchaseId>acc ? curr.purchaseId: acc),0)
//   let purchaseId = maxid + 1

// let body = req.body;
// let newproduct = {purchaseId, ...body };
// purchases.push(newproduct);
// res.send("inserted purchase successfully");
// })


// app.get("/purchases/products/:id", function (req, res) {
//   let productId = +req.params.id;
//   arr1 = purchases.filter((st) => st.productid === productId)
//   console.log(arr1)
//   res.send(arr1);
// });


// app.get("/src/products/:id", function (req, res) {
//   let id = +req.params.id;
//   console.log(id)

//   arr1 = products.filter((st) => st.productId === id)
//   console.log(arr1)
//   res.send(arr1);
// });




// app.get("/totalpurchases/products/:id", function (req, res) {
//   let productId = +req.params.id;  
//   arr1 = purchases.filter((st) => st.productid === productId);
//   var result = arr1.reduce(function (agg, obj) {
//     var objForId = agg.filter(function (idObj) { return idObj.shopId === obj.shopId})[0]
    
//     if (objForId) {
//       objForId.quantity += obj.quantity;
//     } else {
//       agg.push({
//         shopId: obj.shopId,
//         quantity: obj.quantity
//       })
//     }
  
//     return agg;
//   }, [])

//   res.send(result);

// })

// app.get("/totalpurchases/shops/:id", function (req, res) {
//   let shopId = +req.params.id;  
//   arr1 = purchases.filter((st) => st.shopId === shopId);
//   var result = arr1.reduce(function (agg, obj) {
//     var objForId = agg.filter(function (idObj) { return idObj.productid === obj.productid})[0]
    
//     if (objForId) {
//       objForId.quantity += obj.quantity;
//     } else {
//       agg.push({
//         productid: obj.productid,
//         quantity: obj.quantity
//       })
//     }
  
//     return agg;
//   }, [])


//   res.send(result);

// })




app.get("/shops", function (req, res) {
  let arr1 = shops
  console.log(arr1)

  res.send(arr1);
});


app.post("/shops", function (req, res) {

  let shopArry = shops
  let maxid = shopArry.reduce((acc,curr)=>(curr.shopId>acc ? curr.shopId: acc),0)
  let shopId = maxid + 1
  console.log(shopId)

let body = req.body;
let newshop = {shopId, ...body };
shops.push(newshop);
res.send("inserted shop successfully");
})


app.get("/products", function (req, res) {
let arr1 = products
console.log(arr1)

res.send(arr1);
});


app.post("/products", function (req, res) {

let productArry = products
let maxid = productArry.reduce((acc,curr)=>(curr.productId>acc ? curr.productId: acc),0)
let productId = maxid + 1

let body = req.body;
let newproduct = {productId, ...body };
products.push(newproduct);
res.send("inserted product successfully");
})



app.put("/products/:productId", function (req, res) {
let productId = +req.params.productId;
let body = req.body;
let index = products.findIndex((st) => st.productId === productId);
console.log(index)

if (index >= 0) {
  let updatedproduct = { productId: productId, ...body };
  products[index] = updatedproduct;

  res.send(updatedproduct);
} else res.status(404).send("No student found");
})




app.get("/purchases/shops/:id", function (req, res) {
let productId = +req.params.id;
arr1 = purchases.filter((st) => st.shopId === productId)
console.log(arr1)
res.send(arr1);
});




app.get("/purchases", function (req, res) {
let shop = req.query.shop;
let product = req.query.product;
let sort = req.query.sort;
let arr1 = purchases



if (product) {
  let pro = product.split(",");
  arr1 = arr1.filter((st) => pro.find((c1) => c1 * 1 === st.productid));
}
// if (shop) {
//   let shop1 = shop.split(",");
//   arr1 = arr1.filter((st) => shop1.find((c1) => c1 * 1 === st.shopId));
// }
if (shop) {
  arr1 = arr1.filter((st) =>shop === st.shopname);
}




if (sort === "QtyAsc") arr1.sort((st1, st2) => st1.quantity - st2.quantity);
if (sort === "QtyDesc") arr1.sort((st1, st2) =>  st2.quantity - st1.quantity);
if (sort === "ValueAsc") arr1.sort((st1, st2) => st1.quantity*st1.price - st2.quantity*st2.price);
if (sort === "ValueDesc") arr1.sort((st1, st2) => st2.quantity*st2.price - st1.quantity*st1.price );





res.send(arr1);
});

app.post("/purchases", function (req, res) {

let productArry = purchases
let maxid = productArry.reduce((acc,curr)=>(curr.purchaseId>acc ? curr.purchaseId: acc),0)
let purchaseId = maxid + 1

let body = req.body;
let newproduct = {purchaseId, ...body };
purchases.push(newproduct);
res.send("inserted purchase successfully");
})


app.get("/purchases/products/:id", function (req, res) {
let productId = +req.params.id;
arr1 = purchases.filter((st) => st.productid === productId)
console.log(arr1)
res.send(arr1);
});


app.get("/src/products/:id", function (req, res) {
let id = +req.params.id;
console.log(id)

arr1 = products.filter((st) => st.productId === id)
console.log(arr1)
res.send(arr1);
});




app.get("/totalpurchases/products/:id", function (req, res) {
let productId = +req.params.id;  
arr1 = purchases.filter((st) => st.productid === productId);
var result = arr1.reduce(function (agg, obj) {
  var objForId = agg.filter(function (idObj) { return idObj.shopId === obj.shopId})[0]
  
  if (objForId) {
    objForId.quantity += obj.quantity;
  } else {
    agg.push({
      shopId: obj.shopId,
      quantity: obj.quantity
    })
  }

  return agg;
}, [])

res.send(result);

})

app.get("/totalpurchases/shops/:id", function (req, res) {
let shopId = +req.params.id;  
arr1 = purchases.filter((st) => st.shopId === shopId);
var result = arr1.reduce(function (agg, obj) {
  var objForId = agg.filter(function (idObj) { return idObj.productid === obj.productid})[0]
  
  if (objForId) {
    objForId.quantity += obj.quantity;
  } else {
    agg.push({
      productid: obj.productid,
      quantity: obj.quantity
    })
  }

  return agg;
}, [])


res.send(result);

})