import { useState } from 'react';
import './index.scss';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../constants.js';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import LoadingBar from 'react-top-loading-bar';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

function Index(){
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const navigate = useNavigate();


  const[email, setEmail] = useState('');
  const[senha, setSenha] = useState('');
  const[telefone, setTelefone] = useState('');
  const[nome, setNome] = useState('');
  const[sobrenome, setSobrenome] = useState('');
  const[nascimento, setNascimento] = useState('');
  const[cpf, setCpf] = useState('');
  const[erro, setErro] = useState('')
  const[carregando, setCarregando] = useState(false);

  const toggleSenhaVisivel = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  async function Cadastrar() {
    ref.current.continuousStart();
    setCarregando(true);

    const cliente = {
      email:email,
      senha:senha,
      telefone:telefone,
      nome:nome,
      sobrenome:sobrenome,
      nascimento:nascimento,
      cpf:cpf
    }

    try {
      const r = await axios.post(API_URL + '/cadastrar',cliente
      );
      storage('adm-login', r);

      setTimeout(() => {
        navigate('/home-adm');
      }, 3000)

    }

    catch (err){
      ref.current.complete();
      setCarregando(false)

      if(err.response.status === 401){
        setErro(err.response.data.erro)
      }
    }
  }



return(
    <div className='index'>
        <LoadingBar/>
        <section className='cadastro01'>
        <div className='cabecalho-cadastro'>
          <Link to='/'><img src='./assets/images/logopreta.png'/></Link>
        </div>
        
        <div className='cadastro-0'>
          <div className='cadastro-s1'>
          <h2>FAÇA SEU CADASTRO</h2>
          <img src='./assets/images/usuario.png'/>
          </div>
          <div className='cadastro-s2'>
            <h4>EMAIL</h4>
            <input type="text" placeholder="Digite seu e-mail" value={email} onChange={e => setEmail(e.target.value)}/>

            <h4>SENHA</h4>
                <div className="senha-container">
                  <input
                    type={senhaVisivel ? 'text' : 'password'}
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                  {senhaVisivel ? (
                    <FaEyeSlash className="icon-eye" onClick={toggleSenhaVisivel} />
                  ) : (
                    <FaEye className="icon-eye" onClick={toggleSenhaVisivel} />
                  )}
          

                </div>
                
            <h4>TELEFONE</h4>
            <input type="text" placeholder="Digite seu telefone" value={telefone} onChange={e => setTelefone(e.target.value)}/>

            <h4>NOME</h4>
            <input type="text" placeholder="Digite seu nome" value={nome} onChange={e => setNome(e.target.value)}/>

            <h4>SOBRENOME</h4>
            <input type="text" placeholder="Digite seu sobrenome" value={sobrenome} onChange={e => setSobrenome(e.target.value)}/>

            <h4>DATA DE NASCIMENTO</h4>
            <input type="date" placeholder="Digite sua data de nascimento" value={nascimento} onChange={e => setNascimento(e.target.value)}/>

            <h4>CPF</h4>
            <input type="text" placeholder="Digite seu CPF" value={cpf} onChange={e => setCpf(e.target.value)}/>

          </div>
          <button onClick={Cadastrar} className='jump-button'>CADASTRAR</button>
        </div>

        </section>
    </div>
);
}

export default Index;