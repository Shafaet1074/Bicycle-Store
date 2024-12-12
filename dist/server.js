"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./app/config"));
const mongoose_1 = __importDefault(require("mongoose"));
async function main() {
    try {
        await mongoose_1.default.connect(config_1.default.database_url);
        app_1.default.listen(config_1.default.port, () => {
            console.log(`Example app listening on port ${config_1.default.port}`);
        });
    }
    catch (err) {
        console.log(err);
    }
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main();
