import session from "express-session";

// Option de création d'une session via express-session
export const setupSession = session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: true,
    cookie: {
        maxAge: 7000 * 120 * 24, // 7 jours
        secure: false, // true si on utilise HTTPS
    }
})