import React from 'react'
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{
        backgroundImage: `url(${imageUrl})`
    }}
        />
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem)

// withRouter je komponenta viseg reda (HOC skracenica na engleskom), a 
// HOC je u sustini funkcija koja kao argumenat uzima komponentu i vraca 
// modifikovanu komponentu. Ono sto nam withRouter omogucava je da napravimo
// HOC komponentu koja ima pristup "Route" propovima: location, history, match..
// Ono sta dobijamo ovim je smannjivanje prosledjivanja prop kroz nasu strukturu
// kako bismo pristupili tim propovima, jer inace da bi "MenuItem" komponenta imala
// pristup ovim prop-sima, oni bi morali biti prosledjeni kroz nekoliko komponenti
// (u nasem slucaju od "Route" do "HomePage" komponente, od "HomePage" do "Dyrectory", 
// i tek na kraju od "Directory" ka "MenuItem" komponenti) sto je losa praksa
// poznatija kao "Prop drilling" sto nema smisla jer na mnogo jednostavniji nacin
// ne opterecujujuci komponente sa nepotrebnim prop-sima mozemo da dodjemo do zeljenih 
// rezultata