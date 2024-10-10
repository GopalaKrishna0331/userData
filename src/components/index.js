import './index.css'

const User = props => {
  const {eachItem} = props

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
    <tr>
      <th>{id}</th>
      <th>{username}</th>
      <th>{age}</th>
      <th>{birthDate}</th>
      <th>{email}</th>
      <th>{eyeColor}</th>
      <th>{firstName}</th>
      <th>{lastName}</th>
      <th>{gender}</th>
      <th>{height}</th>
      <th>
        <img src={image} alt="pic" />
      </th>

      <th>{macAddress}</th>
      <th>{maidenName}</th>
      <th>{password}</th>
      <th>{phone}</th>
      <th>{role}</th>
      <th>{ssn}</th>
      <th>{university}</th>
      <th>{userAgent}</th>
      <th>{weight}</th>
      <th>{bloodGroup}</th>
      <th>{ein}</th>

      <th>
        ({cardExpire}, {cardNumber}, {cardType}, {currency}, {iban})
      </th>
      <th>
        ({city}, {country}, {postalCode}, {state}, {stateCode})
      </th>
      <th>
        {department}, {name}, {title})
      </th>
      <th>
        {coin}, {network}, {wallet}
      </th>
      <th>
        {color}, {type}
      </th>
    </tr>
  )
}

export default User
