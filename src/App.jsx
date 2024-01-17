import React, { useState, useEffect } from 'react';

const App = () => {
    const root = document.getElementById('root');
    root.classList.add('container');

    const [films, setFilm] = useState([]);
    const [people, setPeople] = useState([]);
    const [fCount, setFcount] = useState(0);
    const [pCount, setPcount] = useState(0);

    useEffect(() => {
        fetch('http://api-ghibli.herokuapp.com/people')
            .then(allPeople => allPeople.json())
            .then(eachPerson => setPeople(eachPerson))
    }, []);

    useEffect(() => {
        fetch('http://api-ghibli.herokuapp.com/films')
            .then(allFilms => allFilms.json())
            .then(eachFilm => setFilm(eachFilm))
    }, []);

    const handleFclick = () => {
        if (fCount < 21) {
            basicFilmLoad(
                films[fCount].id,
                films[fCount].title,
                films[fCount].original_title_romanised,
                films[fCount].description
            );
            setFcount(fCount + 1);
        } else if (fCount === 21) {
            console.log('end Fclick');
        }
    }

    const handlePclick = () => {
         if (pCount < 50) {
            basicPeopleLoad(
                people[pCount].id,
                people[pCount].name,
                people[pCount].gender,
                people[pCount].age
            );
            setPcount(pCount + 1);
        }else if (pCount === 50) {
            console.log('end Pclick');
        }
    }

    function basicFilmLoad(id, cardTitle, cardSubsTitle, text) {

        const idFlm = document.getElementById('loadflm');
        const card = document.createElement('div');
        const body = document.createElement('div');
        const title = document.createElement('div');
        const subtitle = document.createElement('div');
        const cardText = document.createElement('div');
        title.textContent = 'Title: ' + cardTitle;
        subtitle.classList.add('card-subtitle');
        subtitle.textContent = 'Original Name: ' + cardSubsTitle;
        cardText.classList.add('card-text');
        cardText.textContent = text;
        body.append(title);
        body.append(subtitle);
        body.append(cardText);
        card.appendChild(body);
        card.setAttribute('Id', id);
        idFlm.append(card);
        card.classList.add('card');
        card.classList.add('shadow');
        card.classList.add('m-1');
        body.classList.add('card-body');
        title.classList.add('card-title');
        subtitle.classList.add('border-bottom');
        subtitle.classList.add('border-primary');
        title.classList.add('fw-bold');
    }

    function basicPeopleLoad(id, cardTitle, cardSubsTitle, text) {
        const idPpl = document.getElementById('loadppl');
        const card = document.createElement('div');
        const body = document.createElement('div');
        const title = document.createElement('div');
        const subtitle = document.createElement('div');
        const cardText = document.createElement('div');
        title.textContent = 'Name: ' + cardTitle;
        subtitle.classList.add('card-subtitle');
        subtitle.textContent = 'Gender: ' + cardSubsTitle;
        cardText.classList.add('card-text');
        cardText.textContent = 'Age: ' + text;
        body.append(title);
        body.append(subtitle);
        body.append(cardText);
        card.appendChild(body);
        card.setAttribute('Id', id);
        idPpl.append(card);
        card.classList.add('card');
        card.classList.add('shadow');
        card.classList.add('m-1');
        body.classList.add('card-body');
        title.classList.add('card-title');
        subtitle.classList.add('border-bottom');
        subtitle.classList.add('border-primary');
        title.classList.add('fw-bold');
    }

    return (
        <>
            <header className='text-center'>
                <h1>Reacting to API - Studio Gihbli endpoints</h1>
                <div className='row row-cols-2'>
                    <button className="btn btn-primary" onClick={e => {
                        // basicFilmLoad(
                        //     films[fCount].id,
                        //     films[fCount].title,
                        //     films[fCount].original_title_romanised,
                        //     films[fCount].description
                        // )
                        handleFclick()
                    }}>
                        Load film
                    </button>
                    <button className="btn btn-warning" onClick={e => {
                        // basicPeopleLoad(
                        //     people[pCount].id,
                        //     people[pCount].name,
                        //     people[pCount].gender,
                        //     people[pCount].age
                        // )
                        handlePclick()
                    }}>
                        Load people
                    </button>
                </div>
            </header>
            <main className='row row-cols-2'>
                <div className='' id='loadflm'></div>
                <div className='' id='loadppl'></div>
            </main>
            <footer>

            </footer>
        </>
    )
}

export default App