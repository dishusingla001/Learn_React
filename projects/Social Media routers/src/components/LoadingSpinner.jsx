import { useNavigation } from "react-router-dom";

const LoadingSpinner = () => {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === "loading" && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "80vh" }}
        >
          <div
            className="spinner-border text-primary"
            role="status"
            style={{ width: "4rem", height: "4rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingSpinner;
