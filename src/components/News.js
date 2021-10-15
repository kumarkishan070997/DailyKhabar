import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount(){
        let apiUrl = "https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=7844984c37a0488e874a07df1c84543a";
        let data = await fetch(apiUrl);
        let parseData =  await data.json();
        console.log(parseData.articles);
        this.setState({
            articles:parseData.articles,
            loading: true
        })
        console.log(this.state.articles);
    }
    render() {
        return (
            <div className="container my-2">
                <h2>Top Trendings</h2>
                <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                        <NewsItems title={element.title} description={element.description} image={element.urlToImage} readLink={element.url}/>
                    </div>
                    })}
                    
                </div>
            </div>
        )
    }
}

export default News
