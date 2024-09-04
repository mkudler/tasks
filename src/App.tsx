import React from "react";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to My React App</h1>
                Hello World Matthew Kudler UD CISC275 with React Hooks and
                TypeScript
            </header>
            <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fdog%2F&psig=AOvVaw0cvn2L-j9F8UhXdcWosSzl&ust=1725571200739000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICbuOabqogDFQAAAAAdAAAAABAK"
                alt="Random dog image"
            />
            <ul>
                <li>I</li>
                <li>Did</li>
                <li>It</li>
            </ul>
            <button
                className="btn btn-primary"
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </button>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "20px",
                }}
            >
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "red",
                    }}
                ></div>
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "red",
                    }}
                ></div>
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "red",
                    }}
                ></div>
            </div>
        </div>
    );
}

export default App;
