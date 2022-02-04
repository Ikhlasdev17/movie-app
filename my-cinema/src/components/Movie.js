import React from 'react';

const Movie = (props) => {
    const {Title, Year, Type, Poster} = props;
    return (
        <div className="card">
            <img src={Poster} alt=""/>
            <div className="content">
                <a href="#"><h1>{Title}</h1></a>
                <div>
                    <span>{Year}</span>
                    <span>{Type}</span>
                </div>
            </div>
        </div>
    );
};

export default Movie;