import {Component} from 'react'
import User from './components'
import './App.css'

class App extends Component {
  state = {
    userData: [],
    Data: [],
  }

  componentDidMount() {
    this.getUserData()
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
  }

  render() {
    const {userData, Data} = this.state
    return (
      <div>
        <ul className="container">
          <li className="length">id</li>
          <li className="length">username</li>
          <li className="length">age</li>
          <li className="length">birthDate</li>
          <li className="length">email</li>
          <li className="length">eyeColor</li>
          <li className="length">firstName</li>
          <li className="length">lastName</li>
          <li className="length">gender</li>
          <li className="length">height</li>
          <li className="length">Image</li>
          <li className="length">macAddress</li>
          <li className="length">maidenName</li>
          <li className="length">password</li>
          <li className="length">phone</li>
          <li className="length">role</li>
          <li className="length">ssn</li>
          <li className="length">university</li>
          <li className="length">userAgent</li>
          <li className="length">weight</li>
          <li className="length">bloodGroup</li>
          <li className="length">ein</li>
          <li className="length">adress</li>
          <li className="length">bank</li>
          <li className="length">company</li>
          <li className="length">crypto</li>
          <li className="length">hair</li>
        </ul>

        <ul>
          {Data.map(eachItem => (
            <User eachItem={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
