import React from "react";
import { Typography } from "@material-ui/core";
import { TextDecrypt } from "./TextDecrypt";
import { HeartIconFilled } from "./BlogButton";

export const Today = () => {
    var date = new Date();
    var hour = date.getHours();
    var time = `${
        (hour < 4 && "night") ||
        (hour < 12 && "morning") ||
        (hour < 18 && "afternoon") ||
        (hour < 22 && "evening") ||
        "night"
    }`;
    var days = [
        "weekend",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    var day = days[date.getDay()];

    return (
        <>
        <Typography variant="h6">
            <TextDecrypt text= {`Have a good ${day === "weekend" ? day : day + " " + time}!`} />
            <HeartIconFilled />
        </Typography>
        </>
    );
};
