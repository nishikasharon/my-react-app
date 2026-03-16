import profilePic from './assets/profile.jpeg'

function Card(){
    return(
        <div className = "card">
            <img className ="card-img" src = {profilePic} alt= "profile picture"  ></img>
            <h2 className = "card-title">Nishika</h2>
            <p className = "card-text"> I like to drinking coffee and code. I play guitar</p>
        </div>
    );
    
}

export default Card