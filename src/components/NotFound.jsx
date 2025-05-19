import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./NotFound.css";

const NotFound = () => {
  const totalTime = 12;
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [isRed, setIsRed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  // Switch colors to red after 10 seconds elapsed (i.e., timeLeft <= totalTime - 10)
  useEffect(() => {
    if (timeLeft <= totalTime - totalTime / 4) {
      setIsRed(true);
    }
  }, [timeLeft]);

  const circleStyles = buildStyles({
    pathColor: isRed ? "#ef4444" : "#3b82f6",
    trailColor: isRed ? "#fee2e2" : "#dbeafe",
    textColor: isRed ? "#991b1b" : "#1e3a8a",
    textSize: "20px",
  });
  return (
    <>
      <div className="notFoundContainer">
        <h2>404 | Page not found</h2>
        <p>You will be automatically redirected back to the in:</p>
        <div className="timer">
          <CircularProgressbar
            value={(timeLeft / totalTime) * 100}
            text={`${timeLeft}s`}
            styles={circleStyles}
          />
        </div>

        <button className="notFoundBtn" onClick={() => navigate("/")}>
          Go Home Now
        </button>
        <button className="notFoundBtn" onClick={() => navigate(-1)}>
          Go to previous page
        </button>
      </div>
    </>
  );
};

export default NotFound;
