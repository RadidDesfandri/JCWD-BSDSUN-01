import { Server, Socket } from "socket.io";

interface ChatMessage {
  sender: string;
  content: string;
  timestamp: number;
}

function registerChatHandlers(io: Server, socket: Socket) {
  socket.on("sendMessage", (message: ChatMessage) => {
    console.log(`Received message from ${message.sender}: ${message.content}`);

    // Broadcast the message to all connected clients
    io.emit("receiveMessage", message);
  });
}

export { registerChatHandlers };
