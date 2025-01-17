import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

function ErrorPage() {
  const error = useRouteError();

  let title;
  let message;

  if (error.status === 500) {
    message = JSON.parse(error.data.message);
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not found resurce or page.";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
