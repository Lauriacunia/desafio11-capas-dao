import BaseMongoDao from "./base.mongo.dao.js";
import chatModel from "../../models/chat.model.js";

class ChatMongoDao extends BaseMongoDao {
  constructor() {
    super(chatModel);
  }
}

export default new ChatMongoDao();
