import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(1)

    const updateNews = async () => {
        const url = `https://api.currentsapi.services/v1/search?apiKey=kbidK6AzjBl_58hS6_e6SRhGou8hnTCyblPXm-rCqMdIoBvi&country=${props.country}&category=${props.category}`
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(parsedData.news)
        document.title = `DailyNews - ${props.category? props.category.toUpperCase(): "HOME"} `
    }

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        setPage(page + 1)
        let url = `https://api.currentsapi.services/v1/search?apiKey=kbidK6AzjBl_58hS6_e6SRhGou8hnTCyblPXm-rCqMdIoBvi&country=${props.country}&category=${props.category}`  //&page=${page}&language=${props.country}&category=${props.category}&pageSize=${props.pageSize}
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.news))
        setPage(page + 1)
        setTotalResults(parsedData.totalResults)
    }

    return (
        <div>

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== 0 && articles.length !== totalResults}
                loader={<Spinner />}
            >

                <div className="container my-5 pt-1">
                    <h1 className='text-center my-3'>{props.heading}</h1>

                    <div className="row">

                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.image ? element.image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU"} readMore={element.url} author={element.author} date={element.published} />
                            </div>
                        })}

                    </div>
                </div>
            </InfiniteScroll>
        </div>
    )

}

export default News
