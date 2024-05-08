// TODO
import '../styles/Card.css';
import image1 from "../assets/Travel-Weather.png";
import image2 from "../assets/Password-Generator.png";
import image3 from "../assets/Work-Day-Scheduler.png";
import image4 from "../assets/Note-Taker.png";
import image5 from "../assets/Budge-It!.png";
import image6 from "../assets/Music2Me.png";

const work = [
  { title: "Travel Weather App", description: "A weather page that allows you to check the weather for multiple cities beore you travel.", path: "https://al3xg23.github.io/Weather-App/", image: image1},
  { title: "Password Generator", description: "A site that allows you to generate a secure password based on prompted criteria.", path: "https://al3xg23.github.io/password-generator/", image: image2},
  { title: "Work Day Scheduler", description: "A simple scheduling site to organize your work day.", path:"https://al3xg23.github.io/calendar/", image: image3},
  { title: "Mariel's Note Taker", description: "A note taking site for your random and not so random thoughts.", path: "https://mariel-note-taker-639db3e23d2a.herokuapp.com/", image: image4},
  { title: "Budge It!", description: "A collaborative effort to create a budgeting app for your everyday life.", path: "https://blueberry-cake-79168-e1e68fe7cf3a.herokuapp.com/login", image: image5},
  { title: "Music2Me", description: "A collaborative page for journaling your take on music lyrics.", path: "https://fairleyv.github.io/Music2Me/", image: image6}, 
];

const styles = {
  a:{
    fontSize: 40,
    color: '#48beff',
  },
  p:{
    fontSize: 30,
    color: '#68edc6'
  },
  content: {
    padding: 20,
  },
};

function Card(props) {
  return(    
    <div className='card'>
      <a className='links' style={styles.a} href={props.path}>{props.title}</a>
      <p style={styles.p}>{props.description}</p>
      <img src={props.image}/>
    </div>    
  );
}

function CardList() {
  return (
    <div>
      {work.map((item, index) => (
        <Card key={index} title={item.title} path={item.path} description={item.description} image={item.image}/>
      ))}
    </div>
  );
}

export default CardList;
