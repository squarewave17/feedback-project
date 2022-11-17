import PropTypes from "prop-types"
function Header({text, bgColor, textColor}) {
  /*Inline styles for Header */
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  )
}
/* Set Default Props */
Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "var(--light)",
}
/* Declare Prop Types */
Header.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  extColor: PropTypes.string,
}

export default Header
