import { HiBell, HiBan, HiCheckCircle } from "react-icons/hi";
import Button from "./Button";

function App() {
    return(
        <div>
            <div>
                <Button primary rounded>
                    <HiBell />
                    Hi there!
                </Button>
            </div>
            <div>
                <Button secondary rounded>
                    <HiBan />
                    See Deal!
                </Button>
            </div>
            <div>
                <Button rounded success>
                    <HiCheckCircle />
                    Hide Ads!
                </Button>
            </div>
            <div>
                <Button warning>Something!</Button>
            </div>
            <div>
                <Button danger>Hello!</Button>
            </div>
        </div>
    );
}

export default App;