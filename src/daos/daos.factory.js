import CONFIG from "../config/config.js";

let productDao;
let carritoDao;
let chatDao;
let userDao;
let homeDao;
let authDao;

switch (CONFIG.DATASOURCE) {
  case "MEMORY": {
    // TODO: completar lo que falta
    break;
  }
  case "MONGO": {
    productDao = await import("./mongo/product.mongo.dao.js");
    carritoDao = await import("./mongo/carrito.mongo.dao.js");
    chatDao = await import("./mongo/chat.mongo.dao.js");
    homeDao = await import("./mongo/home.mongo.dao.js");
    userDao = await import("./mongo/user.mongo.dao.js");
    authDao = await import("./mongo/auth.mongo.dao.js");
    break;
  }
  default: {
    throw new Error(
      "Debes elegir un tipo de persistencia válido: MEMORY o MONGO"
    );
  }
}

const getDAOS = () => {
  return {
    productDao,
    carritoDao,
    chatDao,
    homeDao,
    userDao,
    authDao,
  };
};

export default getDAOS;
