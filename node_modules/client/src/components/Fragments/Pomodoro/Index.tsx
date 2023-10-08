import "./pomodoro.css";
import "./main.js";

const Pomodoro = () => {
    return (
        <>
        <div>
        <script src="main.js"></script>

        <main className="app">
      <progress id="js-progress" value="0"></progress>
      <div className="progress-bar"></div>
      <div className="timer">
        <div className="button-group mode-buttons" id="js-mode-buttons">
          <button
            data-mode="pomodoro"
            className="button active mode-button"
            id="js-pomodoro"
          >
            Pomodoro
          </button>
          <button
            data-mode="shortBreak"
            className="button mode-button"
            id="js-short-break"
          >
            Short break
          </button>
          <button
            data-mode="longBreak"
            className="button mode-button"
            id="js-long-break"
          >
            Long break
          </button>
        </div>
        <div className="clock" id="js-clock">
          <span id="js-minutes">25</span>
          <span className="separator">:</span>
          <span id="js-seconds">00</span>
        </div>
        <button className="main-button" data-action="start" id="js-btn">
          Start
        </button>
      </div>
    </main>        </div>
        </>
    )
}

export default Pomodoro;