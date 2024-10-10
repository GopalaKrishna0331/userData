import './index.css'

const User = props => {
  const {eachItem} = props
  console.log(eachItem)
  const {
    address,
    age,
    bank,
    birthDate,
    bloodGroup,
    company,
    crypto,
    ein,
    email,
    eyeColor,
    firstName,
    gender,
    hair,
    height,
    id,
    image,
    lastName,
    macAddress,
    maidenName,
    password,
    phone,
    role,
    ssn,
    university,
    userAgent,
    username,
    weight,
  } = eachItem
  const {cardExpire, cardNumber, cardType, currency, iban} = bank
  const {city, country, postalCode, state, stateCode} = address
  const {department, name, title} = company
  const {coin, network, wallet} = crypto
  const {color, type} = hair

  return (
    <li className="container">
      <p className="width">{id}</p>
      <p className="width">{username}</p>
      <p className="width">{age}</p>
      <p className="width">{birthDate}</p>
      <p className="width">{email}</p>
      <p className="width">{eyeColor}</p>
      <p className="width">{firstName}</p>
      <p className="width">{lastName}</p>
      <p className="width">{gender}</p>
      <p className="width">{height}</p>
      <img src={image} alt="pic" className="width img" />
      <p className="width">{macAddress}</p>
      <p className="width">{maidenName}</p>
      <p className="width">{password}</p>
      <p className="width">{phone}</p>
      <p className="width">{role}</p>
      <p className="width">{ssn}</p>
      <p className="width">{university}</p>
      <p className="width">{userAgent}</p>
      <p className="width">{weight}</p>
      <p className="width">{bloodGroup}</p>
      <p className="width">{ein}</p>

      <p className="width">
        ({cardExpire}, {cardNumber}, {cardType}, {currency}, {iban})
      </p>
      <p className="width">
        ({city}, {country}, {postalCode}, {state}, {stateCode})
      </p>
      <p className="width">
        {department}, {name}, {title})
      </p>
      <p className="width">
        {coin}, {network}, {wallet}
      </p>
      <p className="width">
        {color}, {type}
      </p>
    </li>
  )
}

export default User
