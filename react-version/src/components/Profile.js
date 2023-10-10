import profileImage from'../profile-hex.png';

function Profile() {
  const firstName = 'Taylor'
  const lastName = 'Maine'
  const avatar = '/profile-hex.png'

  return (
   <aside>
    <div className="profile">
      <img className="profile__image" src={profileImage} alt="profilepic"/>
    </div>
    <br />
    <div className="profile__name">
      <h2><span className="profile--bold">{firstName}</span> {lastName}</h2>
    </div>
  </aside>
  );
}

export default Profile;