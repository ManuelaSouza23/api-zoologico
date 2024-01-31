import express from 'express';
import cors from 'cors';

const server = express();
const port: number = 3000;

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.json('Olá');
})

server.listen(port, () => {
    console.log(`Servidor escutando no endereço http://localhost:${port}`);
})