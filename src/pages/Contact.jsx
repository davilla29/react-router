import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is contact page</h1>
      <button
        onClick={() => {
          navigate("info");
        }}
      >
        info
      </button>
      <button
        onClick={() => {
          navigate("form");
        }}
      >
        form
      </button>
    </div>
  );
};

export default Contact;


