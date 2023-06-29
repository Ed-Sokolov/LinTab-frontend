import {Container} from "../Container/Container";
import {Button} from "../Button/Button";
import "./extraAction.scss"

export const ExtraAction = () => {
    return (
        <Container>
            <div className="extra_action">
                <p className="message">You can read other posts</p>
                <Button></Button>
            </div>
        </Container>
    )
}