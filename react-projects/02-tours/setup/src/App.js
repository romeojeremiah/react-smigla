import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
    const [tours, setTours] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    };

    const getTours = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const tours = await response.json();
            setTours(tours);
            setIsLoading(false);
        } catch (error) {
            if (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        getTours();
    }, []);

    if (isLoading) {
        return (
            <main>
                <Loading />
            </main>
        );
    }
    if (tours.length === 0) {
        return (
            <main>
                <div className="title">
                    <h2>no tours left</h2>
                    <button className="btn" onClick={() => getTours()}>
                        fetch tours
                    </button>
                </div>
            </main>
        );
    }
    return (
        <main>
            <Tours tours={tours} removeTour={removeTour} />
        </main>
    );
}

export default App;
