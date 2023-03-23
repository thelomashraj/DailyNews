import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, readMore, author, date } = props;
    return (
        <div className="card my-3 bg-info-subtle">
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: "50%"}}>{author}</span>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">Posted on:<span className='text-dark'>{new Date(date).toGMTString()}</span></small></p>
                <a href={readMore} rel="noreferrer" target="_blank" className="btn btn-sm btn-info">Read More</a>
            </div>
        </div>
    )
}

export default NewsItem
