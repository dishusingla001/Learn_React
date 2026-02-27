const WelcomeMessage = ({setSelectedTab}) => {
  const handleCreatePost = () => {
    return true;
  }
  return (
    <div className="welcomeMessage bg-dark text-secondary px-4 py-5 text-center">
      {" "}
      <div className="py-5">
        {" "}
        <h1 className="display-5 fw-bold text-white">Welcome</h1>{" "}
        <div className="col-lg-6 mx-auto">
          {" "}
          <p className="fs-5 mb-4">
            There is no post for Today
          </p>{" "}
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            {" "}
            <button
              type="button"
              className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
              onClick={()=>setSelectedTab("CreatePost")}
            >
              Create Post
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default WelcomeMessage;
