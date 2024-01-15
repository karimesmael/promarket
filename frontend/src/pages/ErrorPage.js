import { useRouteError } from "react-router-dom";
import Header from "../components/Header";

function ErrorPage() {
  const error = useRouteError();
  let title = "An error occurred!";
  let message = "Something went wrong!";
  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }
  return (
    <div style={{ textAlign: "center" }}>
      <Header />
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
}

export default ErrorPage;
