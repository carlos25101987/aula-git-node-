const express = require('express')
const alunocontroller = require('../controllers/alunoController')
const router = express.Router()
const override = require('method-override')



router.use(override('_method'))
router.post('/cadastro', alunocontroller.novoAluno)
router.get('/listarAlunos', alunocontroller.listarAlunos)
router.get('/buscarAlunos/:matricula',alunocontroller.buscarAlunos)
router.put('/editarAluno/:matricula',alunocontroller.editarAluno)
router.get('/editarAluno/:matricula',alunocontroller.formEditarAluno)
router.delete('/deletarAluno/:matricula',alunocontroller.deletarAluno)
router.get('/formCadastroUser', alunocontroller.formCadastro)
router.get('/deletarAluno/:matricula', alunocontroller.formDeletarAluno)
router.get('/', alunocontroller.home)



module.exports = router
