import "dotenv/config";
import http from "http";
import { scheduleTask } from "./cron/scheduleTask";
import { Server } from "socket.io";
import { registerChatHandlers } from "./socket/chat.socket";

const server = http.createServer();
const PORT = 8000;

// scheduleTask();

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`a user connected with id: ${socket.id}`);

  registerChatHandlers(io, socket);

  socket.on("disconnect", () => {
    console.log(`user with id: ${socket.id} disconnected`);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
