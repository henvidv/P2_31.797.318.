import express from 'express';
import cors from "cors";

const middlewareBasicos = (app: any) => {
    
    app.use(express.static( "./src/public"));
    
    // Usa cors como middleware
    const CORS_URL = process.env.CORS_URL || "*";
    app.use(cors({ origin: CORS_URL }));

    // Middleware para analizar el cuerpo de las solicitudes
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
}

export default middlewareBasicos;