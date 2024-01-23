const { json } = require('express')
const db = require('../database/conction')


    

class alunoController {
    
    
    home(req, res){
        res.render('home')
    }

    novoAluno(req, res) {
        const { matricula, nome, email, turma, sexo, telefone, endereco, responsavel } = req.body


        db.insert({ matricula, nome, email, turma, sexo, telefone, endereco, responsavel }).table('alunos').then(data => {
            console.log(data)
            res.json({ message: 'Aluno cadastrado com sucesso' })
        }).catch(error => {
            console.log(error)
        })

    }
    listarAlunos(req, res) {
        db.select("*").table("alunos").then(
            alunos => {
                console.log(alunos)
                //res.json(alunos)
                res.render('listarAlunos', {bancoAlunos:alunos})
            }
        ).catch(error => {
            console.log(error)
        })

    }

    buscarAlunos(req, res) {
        const dados = req.params
        db.select("*").table('alunos').where({ matricula: dados.matricula }).then(aluno => {
            console.log(aluno)
            res.json(aluno)
        }
        ).catch(error => {
            console.log(error)
        })
    }
    editarAluno(req, res) {
        const { matricula } = req.params
        const { nome, email, turma, sexo, telefone, endereco, responsavel } = req.body
        db.where({ matricula: matricula }).update({ nome, email, turma, sexo, telefone, endereco, telefone, responsavel }).table
            ("alunos").then(data => {
                res.json({ menssage: "dados atualizados com sucesso"})
            }).catch(error => {
                res.json(error)
            })
    }

    deletarAluno(req, res){
        const{matricula} = req.params
        db.where({matricula:matricula}).del().table("alunos").then
        (data=>{
            res.json({message: "registro deletado com sucesso!"})
        }).catch(error=>{
            res.json(error)
        })
    }

    formCadastro(req, res){
        //res.sendfile(path.join(__dirname, '../views/cad.html'))
        res.render('cad')
    }
    formEditarAluno(req, res) {
        const dados = req.params
        db.select("*").table('alunos').where({ matricula: dados.matricula }).then(aluno => {
            console.log(aluno)
            res.render('editar', {aluno})
        }
        ).catch(error => {
            console.log(error)
        })

}
formDeletarAluno(req, res) {
    const dados = req.params
    db.select("*").table('alunos').where({ matricula: dados.matricula }).then(aluno => {
        console.log(aluno)
        res.render('excluir', {aluno})
    }
    ).catch(error => {
        console.log(error)
    })
}

}



module.exports = new alunoController()

