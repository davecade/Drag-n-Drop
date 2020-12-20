import Backlog from './modules/backlog.js'
import Completed from './modules/completed.js'
import OnHold from './modules/OnHold.js'
import Progress from './modules/Progress.js'

const App = (() => {
    Backlog.init();
    Completed.init();
    OnHold.init();
    Progress.init();
})()