import digitalComicsImg from '../dc-comics-1/img/buy-comics-digital-comics.png'
import merchandiseImg from '../dc-comics-1/img/buy-comics-merchandise.png'
import subscriptionImg from '../dc-comics-1/img/buy-comics-subscriptions.png'
import shopLocatorImg from '../dc-comics-1/img/buy-comics-shop-locator.png'
import powerVisaImg from '../dc-comics-1/img/buy-dc-power-visa.svg'

export default function AppProducts() {
    return(
        <>
        <section className="products">
            <div className='single-product'>
                <img src={digitalComicsImg} alt="" />
                <h4>DIGITAL COMICS</h4>
            </div>
            <div className='single-product'>
                <img src={merchandiseImg} alt="" />
                <h4>DC MERCHANDISE</h4>
            </div>
            <div className='single-product'>
                <img src={subscriptionImg} alt="" />
                <h4>SUBSCRIPTION</h4>
            </div>
            <div className='single-product'>
                <img src={shopLocatorImg} alt="" />
                <h4>COMIC SHOP LOCATOR</h4>
            </div>
            <div className='single-product'>
                <img src={powerVisaImg} alt="" />
                <h4>DC POWER VISA</h4>
            </div>
        </section>
        </>
    )
}