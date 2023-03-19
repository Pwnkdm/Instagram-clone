import React from "react";
import Post from "../Post/Post";
import User from "../User/User";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="homeleft">
        <Post
          postImage={
            "https://thumbs.dreamstime.com/b/happy-golden-retriever-puppy-seven-week-old-outdoors-sunny-day-46046484.jpg"
          }
          ownerName={"Pwnkdm"}
          caption={"this is sample post"}
        />
      </div>
      <div className="homeright">
        <User
          userId={"user._id"}
          name={"user.name"}
          avatar={"https://cdn-icons-png.flaticon.com/512/4712/4712126.png"}
        />
      </div>
    </div>
  );
};

export default Home;
