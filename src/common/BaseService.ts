import request from "src/services/request";

class BaseService {
    request: typeof request;
    constructor() {
        this.request = request;
    }
}

export default BaseService;
