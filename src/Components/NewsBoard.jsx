import { useEffect, useState } from "react" 
import NewsItem from './NewsItem';
export const NewsBoard = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=f2e754b278c3400e85cf0df1fded6721`;
    fetch(url).then(response => response.json()).then(data=> setArticles(data.articles));
  },[])

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger text-light fs-4">News</span></h2>
       {articles.map((news,index)=>  {
        return <NewsItem key= {index} title = {news.title} description = {news.description} src = {news.urlToImage} url = {news.url} />
      })}   
    </div> 
  )
}

export default NewsBoard;