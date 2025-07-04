import rateLimit from 'express-rate-limit';

export const authLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: "Too many attempts. Try again in one minute",
});