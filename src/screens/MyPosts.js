import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./MyPosts.css";

const MyPosts = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Network response not okay.");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="myposts-app">
      <h1>My Posts</h1>
      <div className="cards-container">
        {data.map((post) => (
          <Card className="card" key={post.id} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="card-title">
                <h2>{post.title}</h2>
              </Card.Title>
              <Card.Text className="card-text">{post.body}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
