import '../components/componentes.css'
import '../components/componentes.css'
import Zelda from '.././zelda.png'
import Mario from '.././MarioSwitch.png'
import Nintendo from '.././switch.png'
import Nintendo2 from '.././nintendinho.png'
import Comprar2 from '../components/comprar2'


function Carrinho() {
    return (
        <div className="countainer">
            <div>
            <h1>Seu carrinho</h1>
            <h2>Obrigado por comprar na minha loja!!!</h2>
            </div>
            <div className='produto1C'>
                <img src={Zelda} id='image' />
                <h1>Zelda Botw</h1>
                <h2>Preço: 250R$</h2>
                <Comprar2 />
            </div>



            <div className='produto2C'>
                <img src={Mario} id='image' />
                <h1>Mario Kart</h1>
                <h2>Preço: 250R$</h2>
                <Comprar2 />
            </div>

            <div className='produto3C'>
                <img src={Nintendo} id='image' />
                <h1>Nintendo switch</h1>
                <h2>Preço: 2000R$</h2>
                <Comprar2 />
            </div>
            <div className='produto4C'>
                <img src={Nintendo2} id='image' />
                <h1>Nintendinho</h1>
                <h2>Preço: 500R$</h2>
                <Comprar2 />
            </div>
            
        </div>
    )
}

export default Carrinho