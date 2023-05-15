import { HiBell, HiBan, HiCheckCircle } from 'react-icons/hi';
import Button from '../components/Button';

function ButtonPage() {
    return(
        <div>
            <div>
                <Button primary rounded className="mb-5">
                    <HiBell />
                    Hi there!
                </Button>
            </div>
            <div>
                <Button secondary rounded outline>
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

export default ButtonPage;