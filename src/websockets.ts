import SocketIo from "socket.io";
import * as http from "http";

let io: SocketIo.Server;

const initWebSockets = (server: http.Server): void => {
  io = SocketIo(server, { destroyUpgrade: false });
};

export { io, initWebSockets };
