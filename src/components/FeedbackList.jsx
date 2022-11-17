import FeedbackItem from "./FeedbackItem"

function FeedbackList({feedback, handleDelete}) {
  /*Check feedback isn't empty */
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback</p>
  }

  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  )
}
export default FeedbackList
