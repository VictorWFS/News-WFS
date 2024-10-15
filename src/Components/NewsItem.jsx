
export const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-4 d-inline-block my-2 mx-2 px-3 py-3" style= {{maxWidth:"320px"}}>
  <img src={src} style={{height: "200px", width: "286px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0, 50)}</h5>
    <p className="card-text">{description?description.slice(0, 90): "News"}</p>
    <a href={url} className="btn btn-primary">Read Mode</a>
  </div>
</div>
  )
}

export default NewsItem;
