export default function ProductComics({thumb, series, title}) {
    return(
        <>
        <div className="card">
            <img src={thumb} alt={title} />
            <div className="card-body p-1">
            <p>{series.toUpperCase()}</p>
            </div>
        </div>
        </>
    )
}