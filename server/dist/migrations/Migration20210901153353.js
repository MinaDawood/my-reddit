"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20210901153353 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20210901153353 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table "post" rename column "update_at" to "updated_at";');
    }
}
exports.Migration20210901153353 = Migration20210901153353;
//# sourceMappingURL=Migration20210901153353.js.map