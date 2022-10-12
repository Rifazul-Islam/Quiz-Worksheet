import { useRouteError } from "react-router-dom";
import './ErrorPage.css';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="error">
            <h1 className='text-9xl text-red-800'>404 !</h1>
            <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}