const EventItem = props => {
  const {isActive, eventDetails, clickTabItem} = props
  const {id, name, imageUrl, location, registrationStatus} = eventDetails
  const btnClassName = isActive
    ? 'language-btn active-language-btn'
    : 'language-btn'

  const onClickItem = () => {
    clickTabItem(id, registrationStatus)
  }

  return (
    <li>
      <button type="button" className={btnClassName} onClick={onClickItem}>
        <img src={imageUrl} alt="event" />
      </button>

      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
