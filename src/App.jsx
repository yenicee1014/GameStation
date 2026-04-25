import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './Gallery';
import About from './About';
import Changelog from './Changelog';
import Sponsors from './Sponsors';
import Walkthrough from './Walkthrough';
import WalkthroughTlou1 from './WalkthroughTlou1';
import WalkthroughRe9 from './WalkthroughRe9';
import WalkthroughBloodborne from './WalkthroughBloodborne';
import WalkthroughHFW from './WalkthroughHFW';
import WalkthroughFF7R from './WalkthroughFF7R';
import WalkthroughTlou2 from './WalkthroughTlou2';
import Tlou2TrophyPage from './Tlou2TrophyPage';
import Tlou1TrophyPage from './Tlou1TrophyPage';
import FF7RTrophyPage from './FF7RTrophyPage';
import Re9TrophyPage from './Re9TrophyPage';
import Bg3TrophyPage from './Bg3TrophyPage';
import HorizonForbiddenWestTrophyPage from './HorizonForbiddenWestTrophyPage';
import BloodborneTrophyPage from './BloodborneTrophyPage';
import Witcher3TrophyPage from './Witcher3TrophyPage';
import GameResources from './GameResources';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/the-last-of-us-part-2/trophies" element={<Tlou2TrophyPage />} />
        <Route path="/the-last-of-us-part-1/trophies" element={<Tlou1TrophyPage />} />
        <Route path="/baldurs-gate-3/trophies" element={<Bg3TrophyPage />} />
        <Route path="/horizon-forbidden-west/trophies" element={<HorizonForbiddenWestTrophyPage />} />
        <Route path="/bloodborne/trophies" element={<BloodborneTrophyPage />} />
        <Route path="/the-witcher-3/trophies" element={<Witcher3TrophyPage />} />
        <Route path="/resident-evil-9/trophies" element={<Re9TrophyPage />} />
        <Route path="/final-fantasy-7-remake/trophies" element={<FF7RTrophyPage />} />
        <Route path="/resident-evil-9" element={<WalkthroughRe9 />} />
        <Route path="/resident-evil-9-walkthrough" element={<WalkthroughRe9 />} />
        <Route path="/the-last-of-us-part-2" element={<WalkthroughTlou2 />} />
        <Route path="/the-last-of-us-part-2-walkthrough" element={<WalkthroughTlou2 />} />
        <Route path="/the-last-of-us-part-1" element={<WalkthroughTlou1 />} />
        <Route path="/the-last-of-us-part-1-walkthrough" element={<WalkthroughTlou1 />} />
        <Route path="/horizon-forbidden-west" element={<WalkthroughHFW />} />
        <Route path="/horizon-forbidden-west-walkthrough" element={<WalkthroughHFW />} />
        <Route path="/bloodborne-walkthrough" element={<WalkthroughBloodborne />} />
        <Route path="/final-fantasy-7-remake" element={<WalkthroughFF7R />} />
        <Route path="/final-fantasy-7-remake-walkthrough" element={<WalkthroughFF7R />} />
        <Route path="/:slug/resources" element={<GameResources />} />
        <Route path="/:slug" element={<Walkthrough />} />
      </Routes>
    </Router>
  );
}