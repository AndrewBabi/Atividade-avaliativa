import '../components/componentes.css'
import Busca from '../components/busca'
import Zelda from '.././zelda.png'


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
                <button/>
            </div>

            <div className='carrinho'>

            </div>

        </div>
    )
}

export default Pageshop

