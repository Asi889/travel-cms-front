"use client";

import { useDarkMode } from "../services/darkmode.service";

const GetDarkMode = () => {
    const { status: stat, data: dat, isLoading, isError } = useDarkMode();
    console.log("darkmode99999");
    console.log(dat)
    return (
        <div></div>
    )
};

export default GetDarkMode;