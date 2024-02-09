import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Reptil } from './model/Reptil';
import { Mamifero } from './model/Mamifero';
import { Habitat } from './model/Habitat';
import { Atracao } from './model/Atracao';
import { Zoologico } from './model/Zoologico';

const server = express();
const port = 3000;

server.use(express.json());
server.use(cors());

server.get('/ave', (req, res) => {
    const server = express ()

    let ave: Ave = new Ave(12, 'Papagaio' , 10, 'Masculino');
    let reptil: Reptil = new Reptil('Cicloides', 'Ratuli', 16,  'Feminino');
    let mamifero: Mamifero = new Mamifero('Cachorro', 'Susi', 10, 'Femêa');
    res.json([ave, reptil, mamifero]);
})
server.post('/ave', (req, res) =>{
  const {nome, idade, genero, envergadura} = req.body;
  let ave: Ave = new Ave(nome, idade, genero, envergadura);
  res.json(["A nova ave do zoologico é:",ave]);
})

server.post('/habitat', (req, res)=> {
  const  { nome, animais} = req.body;
  const habitat = new Habitat(nome, animais);
  console.log(habitat);
  res.status(200).json('Habitat criando');
})

server.post('/atracao', (req, res)=> {
  const  { nome, habitat} = req.body;
  const atracao = new Atracao(nome, habitat);
  console.log(atracao);
  res.status(200).json('Atracao criada');
})


server.post('/zoologico', (req, res) => {
  const {nome, atracao}= req.body;
  const zoo = new Zoologico (nome, atracao);
  console.log(zoo);
  res.status(200).json('Zoologico criado');
});


server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})

