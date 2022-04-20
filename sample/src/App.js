import axios from "axios";
import React from "react";

const baseURL = "http://127.0.0.1:8080/employees";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data)
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post[0].empId}</h1>
      <h2>{post[0].empName}</h2>
    </div>
  );
}


