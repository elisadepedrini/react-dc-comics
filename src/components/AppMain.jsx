// import 'bootstrap/dist/css/bootstrap.min.css'
import comics from "../assets/dc-comics-2/comics"

export default function AppMain() {
    return (
        <>
        <main>
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
        </main>
        </>
    )
}