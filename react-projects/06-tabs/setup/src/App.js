import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
    const [workers, setWorkers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [index, setIndex] = useState(1);

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(url);
                const newJobs = await response.json();
                setWorkers(newJobs);
                setIsLoading(false);
            } catch (error) {
                if (error) {
                    console.log(error);
                }
            }
        }

        getData();
    }, []);

    if (isLoading) {
        return (
            <section className="section loading">
                <h2>...Loading</h2>
            </section>
        );
    } else {
        const { company, dates, duties, title } = workers[index];

        return (
            <section className="section">
                <div className="title">
                    <h2>experience</h2>
                    <div className="underline"></div>
                </div>
                <div className="jobs-center">
                    <div className="btn-container">
                        {workers.map((item, value) => {
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setIndex(value);
                                    }}
                                    className={`job-btn ${
                                        value === index && "active-btn"
                                    }`}
                                >
                                    {item.company}
                                </button>
                            );
                        })}
                    </div>
                    <article className="job-info">
                        <h3>{title}</h3>
                        <h4>{company}</h4>
                        <p className="job-date">{dates}</p>
                        {duties.map((duty, index) => {
                            return (
                                <div key={index} className="job-desc">
                                    <FaAngleDoubleRight className="job-icon" />
                                    <p>{duty}</p>
                                </div>
                            );
                        })}
                    </article>
                </div>
                <button className="btn">more info</button>
            </section>
        );
    }
}

export default App;
