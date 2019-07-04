import React, { Component, Fragment } from 'react'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]



class Search extends Component {
    
    state = {
        searched: 0,
        inputValue: 0
    }
    
    search = (arr, item) => {
        let start = 0
        let end = arr.length - 1
        
        while (start <= end) {
            let mid = Math.floor((start + end) / 2)
            let guess = arr[mid]
            if (guess === item) {
                break
            }
            
            else if (guess > item) {
                end = mid - 1
            }
            
            else {
                start = mid + 1
            }
            this.setState({searched: guess})
        }
    }

    handleButton = () => {
        this.search(numbers, this.state.inputValue)
    }

    handleInput = ({target: {value}}) => {
        this.setState({inputValue: value})
    }

    render() {
        const {searched, inputValue} = this.state
        return (
            <div className="search">
                <h2>Binnary Search</h2>
                <h3>{searched}</h3>
                <p>Please, enter an array number<br />the array consists of numbers from 1 to 20</p>
                <div>
                    <input type="number" value={inputValue} onChange={this.handleInput}/>
                    <button onClick={this.handleButton}>search</button>
                </div>
            </div>
        )
    }
}

export default Search