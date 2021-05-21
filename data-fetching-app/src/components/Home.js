import React, { Component } from 'react'
import TableData from './TableData'

export class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            displayData: [],
            pageNumber:0
        }
    }

    componentDidMount() {
        const getData = async () => {
            const response = await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${this.state.pageNumber}`)
            const data = await response.json()
            console.log(data)
            this.setState({
                pageNumber : this.state.pageNumber + 1,
                displayData : data
            })
        } 
        getData()
        /* setInterval( () => {
            getData()
        }, 10000);  */
    }

    render() {

        return (
            <div>
                {this.state.displayData?.hits && <TableData alldata={this.state.displayData}/>}
            </div>
        )
    }
}

export default Home