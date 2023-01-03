import './App.css';
// import {} from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faCircleQuestion} from '@fortawesome/free-solid-svg-icons'
import ParticipantList from './ParticipantList';
import ApplicationReview from './pages/ApplicationReview';
import ChangeSuitability from './pages/ChangeSuitability';

function App() {
  return (
    <div >
      {/* <ParticipantList /> */}
      {/* <ApplicationReview /> */}
      <ChangeSuitability />
    </div>
  );
}

export default App;
