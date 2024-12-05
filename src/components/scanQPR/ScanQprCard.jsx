import "./ScanQprCard.css"
import QPR from "../../images/qpr.png"

const ScanQprCard = () => {
  return (
        <div className="scancard">
          <h6>Quick download</h6>
          <div className="scancard__qpr">
           <img src={QPR} alt="Fixed Element" />
          </div>
        </div>
  )
}

export default ScanQprCard