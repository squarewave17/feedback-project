import {useContext} from "react"
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)
  /*Check feedback isn't empty */
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback</p>
  }

  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  )
}
export default FeedbackList
