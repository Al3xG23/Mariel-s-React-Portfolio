// TODO
import '../styles/Card.css';

const work = [
  { title: "Travel Weather App", description: "A weather page that allows you to check the weather for multiple cities beore you travel.", path: "https://al3xg23.github.io/Weather-App/"},
  { title: "Password Generator", description: "A site that allows you to generate a secure password based on prompted criteria.", path: "https://al3xg23.github.io/password-generator/"},
  { title: "Work Day Scheduler", description: "A simple scheduling site to organize your work day.", path:"https://al3xg23.github.io/calendar/"},
  { title: "Mariel's Note Taker", description: "A note taking site for your random and not so random thoughts.", path: "https://mariel-note-taker-639db3e23d2a.herokuapp.com/"},
  { title: "Budge It!", description: "A collaborative effort to create a budgeting app for your everyday life.", path: "https://blueberry-cake-79168-e1e68fe7cf3a.herokuapp.com/login"},
  { title: "Music2Me", description: "A collaborative page for journaling your take on music lyrics.", path: "https://fairleyv.github.io/Music2Me/"}, 
];

const styles = {
  card:{    
    padding: 10,
    border: 'solid',       
  },
  h2:{
    color: '#48beff', 
  },
  p:{
    color: '#68edc6'
  },
  content: {
    padding: 20,
  },
};

function Card(props) {
  return(
    <div className='card' style={styles.card}>
      <a href={props.path} style={styles.h2}>{props.title}</a>
      <p style={styles.p}>{props.description}</p>
    </div>
  );
}

function CardList() {
  return (
    <div className='cardList'>
      {work.map((item, index) => (
        <Card key={index} title={item.title} path={item.path} description={item.description} />
      ))}
    </div>
  );
}

export default CardList;
