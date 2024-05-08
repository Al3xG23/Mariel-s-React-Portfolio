// TODO
import '../styles/Navbar.css';

const styles = {
  card: {
    margin: 10,
  },
  heading: {
    background: '#fed9b7',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: '#003b36',
    padding: '0 20px',
  }, 
};

function Navbar() {
  return (
    <div style={styles.card}>
      <ul className='nav' style={styles.heading}>
        <li>About Me</li>
        <li>Contact</li>
        <li>List of Works</li>
        </ul>
    </div>
  );
}

export default Navbar;
