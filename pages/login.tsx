import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import nextPackage from "next/package.json";

export default function Login({}) {
    return (
        <form action="/send-data-here" method="post">
            <label htmlFor="roll">Username</label>
            <input
                type="text"
                id="username"
                name="username"
                required
            />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <button type="submit">Submit</button>
        </form>
    )
}