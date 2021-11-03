
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import { AppContainer, Player } from './appStyles';
import Hero from './components/Hero';
import Oracle from './components/Oracle';
import song from './utils/soWhat.mp3'
import { Container } from 'react-bootstrap';
import {BsFillPlayBtnFill, BsFillStopBtnFill} from 'react-icons/bs'


function App() {
  const [play, {stop}] = useSound(song)
  const [isPlaying, setIsPlaying] = useState(true)
  useEffect(()=>{
    play();
  }, [play])

  const setPlay = () => {
    setIsPlaying(!isPlaying)
    play()
  }
  const setStop = () => {
    setIsPlaying(!isPlaying)
    stop()
  }
  return (
    <AppContainer>
      <Hero/>
      <Oracle/>
    <Player>
     <Container fluid style={{display: 'flex',alignItems: 'center', justifyContent: 'center' }}>
        <div className='cont'>
       {isPlaying ?  <h3>stop <BsFillStopBtnFill onClick={()=> setStop()} /> </h3>: 
        <h3>play <BsFillPlayBtnFill onClick={()=> setPlay()} /> </h3>
        }
        <span>designed & coded by @MacarenaZalazar</span>
        </div>
     </Container>
    </Player>
    </AppContainer>
  );
}

export default App;
