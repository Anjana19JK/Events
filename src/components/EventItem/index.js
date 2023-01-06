const EventItem = props => {
  const {eventDetails, onClickItem} = props
  const {id, name, imageUrl, location, registrationStatus} = eventDetails

  onClickItem = () => {
    clickTabItem(id)
  }

  return (
    <li>
      <img src={imageUrl} alt={registrationStatus} onClick={onClickItem} />
      <h1>{name}</h1>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
