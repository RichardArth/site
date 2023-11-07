import './index.scss';
import { Link } from 'react-router-dom';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function LandingAdm() {

    const nav = useNavigate();

    function SairPagina() {
        storage.remove('adm-login')
        nav('/adm-login')
    }

    useEffect(() => {
        if(!storage('adm-login')) {
            nav('/adm-login')
        }
    }, [])

    return(
        <section className='secao-01-adm'>
            <div className='menu-adm'>
                <header>
                    <div>
                        <span>R</span>
                        <h4>richardarthur@gmail.com</h4>
                    </div>
                    <hr></hr>
                </header>

                <nav className='s1eadm-projetos'>
                    <h2>PROJETOS</h2>
                    <li><Link to='https://www.figma.com/file/OpQQXeuksFS66F1xjIsB7l/Joias-King?type=design&node-id=0-1&mode=design&t=DsyVs1E4AQED9YNt-0'>APARÊNCIA</Link></li>
                    <li>PÁGINAS</li>
                </nav>

                <nav className='s1eadm-produtos'>
                    <h2>PRODUTOS</h2>
                    <li><Link to='/cd-produto'>ADICIONAR PRODUTO</Link></li>
                    <li><Link to='/produtos'>PRODUTOS</Link></li>
                    <li>MELHORES AVALIAÇÕES</li>
                    <li>OS MAIS COMPRADOS</li>
                    <li><Link to='/graficos'>GRÁFICO DE VENDAS</Link></li>
                    <li>PEDIDOS EM ANDAMENTO</li>
                    <li>PEDIDOS ENVIADOS</li>
                </nav>

                <button onClick={SairPagina} className='sair-pagina'><img src='./assets/images/sair-pagina.png'></img>Sair</button>
            </div>
            
            <div className='s1adm-parte-principal'>
                <header>
                    <img src='./assets/images/logobranca.png'></img>
                    <hr></hr>
                </header>

                <div className='s1admp-titulo'>
                    <h1>
                        SEJA BEM-VINDO
                    </h1>
                </div>

                <main className='s1p-produtos'>
                    <div className='ficha-produto'>
                        <div className='imagem-produto'>
                            <img src='./assets/images/colar-01.png'></img>
                        </div>

                        <div className='descricao-produto'>
                            <h4>Mix de Colares de Prata Corações e Ponto de Luz</h4>
                            <h5 style={{color: '#B88B1B'}}>R$129,98</h5>
                        </div>

                        <div className='personalizar-produto'>
                            <img src='./assets/images/deletar-produto.png'></img>
                            <img src='./assets/images/alterar-produto.png'></img>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default LandingAdm
