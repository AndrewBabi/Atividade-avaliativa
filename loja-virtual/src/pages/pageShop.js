import '../components/componentes.css'
import Busca from '../components/busca'
import '../components/componentes.css'
import Zelda from '.././zelda.png'
import Mario from '.././MarioSwitch.png'
import Nintendo from '.././switch.png'
import Nintendo2 from '.././nintendinho.png'
import Contador from '../components/contador'
import Comprar from '../components/comprar'
import { Link } from 'react-router-dom'



function Pageshop() {
    return (
        <div className="countainer">
            <div className='busca'>
                <Busca />

            </div>

            <div className='produto1'>
                <img src={Zelda} id='image' />
                <h1>Zelda Botw</h1>
                <h2>Preço: 250R$</h2>
                <h2>Produtos no carrinho(  ) </h2>
                <Contador />
                <Comprar />
            </div>



            <div className='produto2'>
                <img src={Mario} id='image' />
                <h1>Mario Kart</h1>
                <h2>Preço: 250R$</h2>
                <h2>Produtos no carrinho(  ) </h2>
                <Contador />
                <Comprar />
            </div>

            <div className='produto3'>
                <img src={Nintendo} id='image' />
                <h1>Nintendo switch</h1>
                <h2>Preço: 2000R$</h2>
                <h2>Produtos no carrinho(  ) </h2>
                <Contador />
                <Comprar />
            </div>
            <div className='produto4'>
                <img src={Nintendo2} id='image' />
                <h1>Nintendinho</h1>
                <h2>Preço: 500R$</h2>
                <h2>Produtos no carrinho(  ) </h2>
                <Contador />
                <Comprar />
            </div>
            <div className='carrinho'>
                <h1>Carrinho</h1>
                <h2>Clique para ver o carrinho:</h2>

                <Link className="pageCarrinho" to={"/Page2"}>Carrinho</Link>
            </div>

        </div>
    )
}

export default Pageshop

