import React, { Component } from 'react'

export class NewsItems extends Component {
    dummyUrlImage = "https://previews.123rf.com/images/leodelagarza/leodelagarza2005/leodelagarza200500034/147045749-dummy-online-dummy-news-website-sketch-copy-space.jpg";
    render() {
        return (
            <>
            <div>
            <div className="card" style={{"width": "18rem"}}>
                <img src={this.props.image ? this.props.image : this.dummyUrlImage} className="card-img-top" alt="image" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.description}</p>
                    <a href="/" className="btn btn-primary">Read More</a>
                </div>
                </div>
            </div>
            </>
        )
    }
}

export default NewsItems
