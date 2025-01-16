import { useNavigate } from "react-router-dom";

export const Greeting: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button
                type="button"
                onClick={() => navigate("/aboutpage", { replace: true })}>
                Go to AboutPage
            </button>
            <h1>Hello, World!</h1>
        </div>
    );
};
