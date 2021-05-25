import { Component } from 'react'
import TableData from './TableData';


export class Home extends Component {

    filterArray = []
    interval = 0
    constructor(props) {
        super(props)

        this.state = {
            displayData: [],
            pageNumber:0,
            searchValue: ''
        }
    }

    componentDidMount() {

        //fetching data from api
        const getData = async () => {
            const response = await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${this.state.pageNumber}`)
            const data = await response.json()
            this.setState(prevState => ({
                pageNumber : this.state.pageNumber + 1,
                displayData : [...prevState.displayData, ...data.hits]
            }))
            this.filterArray = data.hits
        } 

        getData()
        /* this.interval = setInterval( () => {
            getData()
        }, 10000);  */
    }

    searchHandler(e){
        let filterArray2 = this.filterArray.filter(d => {
        let x = d.title.toLowerCase()
        return x.indexOf(e.target.value) !== -1
        })
        this.setState({
             displayData : filterArray2
        })
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {

        return (
            <div className='main-wrapper'>
                    <input type='text' placeholder='Search..' value={this.state.value} onChange={this.searchHandler.bind(this)} class='table-search'></input>
                {this.state.displayData && <TableData alldata={this.state.displayData} page_number={this.state.pageNumber}/>}
            </div>
        )
    }
}

export default Home