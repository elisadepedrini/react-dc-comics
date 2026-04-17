import jumbotron from '../assets/dc-comics-1/img/jumbotron.jpg'
import comics from "../assets/dc-comics-2/comics"

export default function AppMain() {
    return (
        <>
        <main>

            <div className='hero-section'>
                <img src={jumbotron} alt="Jumbotron" className='jumbotron'/>
            <div className="button-main-top">
                <button className="btn mb-3">CURRENT SERIES</button>
            </div>
            </div>


            <div className="container">
                <div className="grid">
                    {comics.map((el) => (
                        <div key={el.id}>
                            <div className="card">
                              <img src={el.thumb} alt="el.title" />
                              <div className="card-body p-1">
                                <p>{el.series.toUpperCase()}</p>
                              </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="button-main-bottom">
                <button className="btn mb-3">LOAD MORE</button>
            </div>
        </main>
        </>
    )
}