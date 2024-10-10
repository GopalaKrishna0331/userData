import {Component} from 'react'
import User from './components'
import './App.css'

class App extends Component {
  state = {
    userData: [],
    Data: [],
    value: '1',
    array: [],
  }

  componentDidMount() {
    this.getUserData()
  }

  updateData = () => {
    const {Data, value} = this.state
    const newData = []
    if (value === '1') {
      Data.map(each => {
        if (each.id >= 1 && each.id <= 10) {
          return newData.push(each)
        }
        return null
      })
    }
    if (value === '2') {
      Data.map(each => {
        if (each.id >= 10 && each.id <= 20) {
          return newData.push(each)
        }
        return null
      })
    }
    if (value === '3') {
      Data.map(each => {
        if (each.id >= 20 && each.id <= 30) {
          console.log(each)
          return newData.push(each)
        }
        return null
      })
    }
    this.setState({array: newData})
  }

  onClickPagination = event => {
    const {value} = this.state
    const newValue = event.target.value
    console.log(event.target.value)
    this.setState({value: newValue})
    this.updateData()
  }

  getUserData = async () => {
    const {Data} = this.state
    const apiUrl = `https://dummyjson.com/users`
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const fetchedData = await response.json()
    this.setState({
      userData: fetchedData,
      Data: fetchedData.users,
    })
    this.updateData()
  }

  render() {
    const {userData, Data, value, array} = this.state
    console.log(array)
    return (
      <div>
        <table>
          <tr className="container">
            <th>id</th>
            <th>username</th>
            <th>age</th>
            <th>birthDate</th>
            <th>email</th>
            <th>eyeColor</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>gender</th>
            <th>height</th>
            <th>Image</th>
            <th>macAddress</th>
            <th>maidenName</th>
            <th>password</th>
            <th>phone</th>
            <th>role</th>
            <th>ssn</th>
            <th>university</th>
            <th>userAgent</th>
            <th>weight</th>
            <th>bloodGroup</th>
            <th>ein</th>
            <th>address</th>
            <th>bank</th>
            <th>company</th>
            <th>crypto</th>
            <th>hair</th>
          </tr>
          <tr>
            {array.map(eachItem => (
              <User eachItem={eachItem} />
            ))}
          </tr>
        </table>
        <div className="pagination">
          <button
            className={value === '1' && 'active'}
            onClick={this.onClickPagination}
            type="button"
            value="1"
          >
            1
          </button>
          <button
            className={value === '2' && 'active'}
            onClick={this.onClickPagination}
            type="button"
            value="2"
          >
            2
          </button>
          <button
            className={value === '3' && 'active'}
            onClick={this.onClickPagination}
            type="button"
            value="3"
          >
            3
          </button>
        </div>
      </div>
    )
  }
}

export default App
