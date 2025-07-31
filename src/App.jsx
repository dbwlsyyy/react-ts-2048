import Game from './components/Game';
import Header from './components/Header';
import Intro from './components/Intro';

export default function App() {
    return (
        <div className="container">
            <Header />
            <Intro />
            <Game />
        </div>
    );
}
