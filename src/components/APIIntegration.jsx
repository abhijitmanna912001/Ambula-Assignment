import React, { useEffect, useState } from "react";
import "../styles/APIIntegration.css";

const APIIntegration = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        ); // Replace with your API endpoint
        if (response.ok) {
          const data = await response.json();
          setData(data);
          setIsLoading(false);
        } else {
          throw new Error("Error fetching data");
        }
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="api-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <h2>API Integration</h2>
          <div className="api-data">
            {/* Display fetched data here */}
            {data && (
              <ul>
                {data.map((post) => (
                  <li key={post.id}>{post.title}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default APIIntegration;
