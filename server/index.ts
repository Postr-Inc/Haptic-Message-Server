import { Hono } from "hono";
import { createBunWebSocket } from "hono/bun";
import Pocketbase from "pocketbase";
import { decode, sign, verify } from "hono/jwt";

 
import { upgradeWebSocket, websocket } from 'hono/bun'

const app = new Hono().get(
  '/ws',
  upgradeWebSocket(() => {
    return { 
     onOpen(_event, ws) {
         
      },
    }
  })
)

app.get('/health', async (c) => {
   // if main server is down messages partially works
   const isMainServerDown = await fetch('/isHealthy');
   if (!isMainServerDown.ok) {
     return c.json({ error: 'Main server is down' }, 500);
   }
   else{
     return c.json({ message: 'Healthy' });
   }
})

export default app