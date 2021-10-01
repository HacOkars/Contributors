import './Card.css';

const Card = ({ userData }) => {
    return (
        <div className="card">
            <div className="card_image"><img src={userData.avatar_url} /></div>
            <div className="card_title">  <a href={userData.html_url}>{userData.login}</a></div>
            <p>Contributions: {userData.contributions}</p>
        </div>
    )
};

export default Card;