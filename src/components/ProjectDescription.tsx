import React from "react";
import { useNavigate } from "react-router-dom";

export const ProjectDescription: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Project Description</h1>
            <p>
                This is a simple project that demonstrates how to use Mapbox in
                a React application.
            </p>
            <button
                type="button"
                onClick={() => navigate("/homepage", { replace: true })}>
                Go to HomePage
            </button>
        </div>
    );
};
