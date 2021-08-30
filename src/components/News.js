import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    render() {
        return (
            <div>
                this is news
                <NewsItems/>
            </div>
        )
    }
}

export default News
