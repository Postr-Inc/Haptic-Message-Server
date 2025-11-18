import { Hono } from "hono";

export   const savePublicKey =  new Hono().post('/savePublicKey', async (c) => {
    const { publicKey } = await c.req.json();
    const Authorization = c.req.header('Authorization');
    if (!Authorization) {
      return c.json({ error: 'Authorization header missing' }, 401);
    }

    const token = Authorization.split(' ')[1];
    const isValidated = await fetch('/validateToken', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!isValidated.ok) {
      return c.json({ error: 'Invalid token' }, 401);
    }

    return c.json({ message: 'PublicKey saved successfully' });
  })