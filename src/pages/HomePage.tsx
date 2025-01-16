import React from "react";
import { Map } from "./../components/Map";
import { Greeting } from "./../components/Greeting";
import "./../styles/global.scss";

export const HomePage: React.FC = () => {
    return (
        <div>
            <Greeting />
            <Map />
        </div>
    );
};
