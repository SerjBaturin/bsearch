import React from 'react'

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

const search = (arr, item) => {

    let start = 0
    let  end = arr.length - 1
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        let guess = arr[mid]
        if(guess === item) {
            console.log(`RESULT ${guess}`)
            break
        }

        else if(guess > item) {
            end = mid - 1
        } 

        else {
            start = mid + 1
        }
    }
}

search(arr, 13)

const Search = () =>
<div className="search">
  <h2>Hey I am a search component</h2>
</div>

export default Search