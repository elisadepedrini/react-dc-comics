import facebookImg from '../dc-comics-1/img/footer-facebook.png'
import twitterImg from '../dc-comics-1/img/footer-twitter.png'
import youtubeImg from '../dc-comics-1/img/footer-youtube.png'
import pinterestImg from '../dc-comics-1/img/footer-pinterest.png'
import periscopeImg from '../dc-comics-1/img/footer-periscope.png'

export default function AppFollow() {
    return(
        <>
        <section className="end-section">
            <button>SIGN-UP NOW!</button>
            <div className='follow'>
                <h4>FOLLOW US</h4>
                <a href=''><img src={facebookImg} alt="" /></a>
                <a href=''><img src={twitterImg} alt="" /></a>
                <a href=''><img src={youtubeImg} alt="" /></a>
                <a href=''><img src={pinterestImg} alt="" /></a>
                <a href=''><img src={periscopeImg} alt="" /></a>
            </div>
        </section>
        </>
    )
}