"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const server = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
server.use((0, cors_1.default)());
server.get('/', async (req, res) => {
    const users = await prisma.user.findMany();
    res.send(users);
});
server.listen(process.env.PORT || 3333, () => {
    console.log(`Server is running on port ${process.env.PORT || 3333}`);
});
