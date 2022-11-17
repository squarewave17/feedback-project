import {useState, useEffect} from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

function FeedbackForm({handleAdd}) {
  const [text, setText] = useState("")
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")

  // Text input
  const handleTextChange = (e) => {
    setText(e.target.value)
  }
  //Validation
  useEffect(() => {
    if (text === "") {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== "" && text.trim().length <= 9) {
      setMessage("text must be at least 10 caracters")
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
  }, [text])
  // End Text Input

  // Form submit
  const handleSubmit = (e) => {
    //Prevent Default Behaviour
    e.preventDefault()
    // Construct object if form is filled
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      handleAdd(newFeedback)
      setText("")
      setRating(10)
    }
  }
  //End Form Submit

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
