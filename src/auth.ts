import type { NextFunction, Request, Response } from 'express';
import { randomUUID } from 'node:crypto';
import { db, type User } from './store.js';

export interface AuthedRequest extends Request {
  user?: User;
}

function tokenFrom(req: Request): string | undefined {
  const header = req.header('authorization');
  if (header?.startsWith('Bearer ')) return header.slice(7);
  const cookie = req.header('cookie') ?? '';
  const match = cookie.match(/(?:^|;\s*)sid=([^;]+)/);
  return match?.[1];
}

export function createSession(userId: number): string {
  const token = randomUUID();
  db.sessions.set(token, userId);
  return token;
}

export function destroySession(req: Request): void {
  const token = tokenFrom(req);
  if (token) db.sessions.delete(token);
}

export function requireAuth(req: AuthedRequest, res: Response, next: NextFunction): void {
  const token = tokenFrom(req);
  const userId = token ? db.sessions.get(token) : undefined;
  const user = db.users.find((u) => u.id === userId);
  if (!user) {
    res.status(401).json({ error: 'UNAUTHORIZED', message: 'Zaloguj się' });
    return;
  }
  req.user = user;
  next();
}

export function requireAdmin(req: AuthedRequest, res: Response, next: NextFunction): void {
  if (req.user?.role !== 'admin') {
    res.status(403).json({ error: 'FORBIDDEN', message: 'Brak uprawnień' });
    return;
  }
  next();
}
