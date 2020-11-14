import "./App.css";
import MiniCart from "./Components/MenuPage/MiniCart";
import { Routes } from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      <Routes />
      {/* <div>
        <div
          class="modal fade"
          id="CartModal"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-body">
                <MiniCart />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
