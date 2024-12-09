import { createServer } from "http";
const server = createServer((request, response) => {
response.end("Hello world");
});
server.listen(8080);