// TODO
import '../styles/Card.css';

const work = [
  { title: "Travel Weather App", description: "A weather page that allows you to check the weather for multiple cities beore you travel."},
  { title: "Password Generator", description: "A site that allows you to generate a secure password based on prompted criteria."},
  { title: "Work Day Scheduler", description: "A simple scheduling site to organize your work day."},
  { title: "Mariel's Note Taker", description: "A note taking site for your random and not so random thoughts."},
  { title: "Budge It!", description: "A collaborative effort to create a budgeting app for your everyday life."},
  { title: "Music2Me", description: "A collaborative page for journaling your take on music lyrics."},
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
      <h2 style={styles.h2}>{props.title}</h2>
      <p style={styles.p}>{props.description}</p>
    </div>
  );
}

function CardList() {
  return (
    <div className='cardList'>
      {work.map((item, index) => (
        <Card key={index} title={item.title} description={item.description} />
      ))}
    </div>
  );
}

export default CardList;
