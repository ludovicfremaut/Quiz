import session from "express-session";

// Option de création d'une session via express-session
export const setupSession = session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 jours en millisecondes
    secure: false, // true si on utilise HTTPS
  },
});
