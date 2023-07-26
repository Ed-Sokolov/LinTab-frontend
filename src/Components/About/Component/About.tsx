import "./about.scss";
import {Container} from "../../../Widgets/Container/Container";
import {H2} from "../../../Widgets/Headings/H2/H2";
import {H4} from "../../../Widgets/Headings/H4/H4";

export const About = () => {
    return (
        <div className={"about_page"}>
            <div className="about">
                <Container>
                    <div className="about_inner">
                        <H2>About</H2>
                        <div className="about_content">
                            <p className={"paragraph"}>
                                LINTAB is a project for blogging and sharing your projects with other users in this
                                website. I’d like to add an opportunity for communication between users so it can be a
                                social network in a future.
                            </p>
                            <p className={"paragraph"}>
                                This project is my way to IT so I’m trying to made my best to get the result.
                            </p>
                            <p className={"paragraph"}>
                                I used React for front-end and Laravel for back-end and I’m not a designer. This project
                                is in GitHub so you can move there and look at code or download it and check how it
                                works.
                            </p>
                            <p className={"paragraph"}>
                                If you don’t like something you can move to Contact and write me what you’ll want to add
                                or change in the website in a future updating.
                            </p>
                            <p className={"paragraph"}>
                                You can scroll down and read about all the updating.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="versions">
                <Container>
                    <div className="versions_content">
                        <div className="versions_nav">
                            <H4>Versions</H4>
                            <ul className="versions_list">
                                <li className="version_item">
                                    <div className="version_link">1.1. Release</div>
                                </li>
                                <li className="version_item">
                                    <div className="version_link active">1.1. Release</div>
                                </li>
                                <li className="version_item">
                                    <div className="version_link">1.1. Release</div>
                                </li>
                                <li className="version_item">
                                    <div className="version_link">1.1. Release</div>
                                </li>
                                <li className="version_item">
                                    <div className="version_link">1.1. Release</div>
                                </li>
                                <li className="version_item">
                                    <div className="version_link">Soon</div>
                                </li>
                            </ul>
                        </div>
                        <div className="selected_version">
                            <H4>1.1. Release</H4>
                            <div className="selected_version_content">
                                <p className="selected_version_paragraph">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan
                                    lacus vel facilisis volutpat. Arcu felis bibendum ut tristique et egestas quis ipsum.
                                    Adipiscing diam donec adipiscing tristique risus nec feugiat. Sem integer vitae justo
                                    eget. Suspendisse in est ante in. Purus in massa tempor nec feugiat nisl pretium. Ac
                                    tortor vitae purus faucibus.
                                </p>
                                <p className="selected_version_paragraph">
                                    Ut faucibus pulvinar elementum integer. Enim sit amet venenatis urna cursus eget. Odio
                                    aenean sed adipiscing diam donec. Sit amet cursus sit amet dictum sit. Diam sit amet
                                    nisl suscipit adipiscing bibendum. Nunc aliquet bibendum enim facilisis gravida neque
                                    convallis. Risus in hendrerit gravida rutrum quisque non tellus orci.
                                </p>
                                <p className="selected_version_paragraph">
                                    Semper viverra nam libero justo laoreet. Nunc sed velit dignissim sodales ut eu.
                                    Faucibus nisl tincidunt eget nullam non nisi est sit. Lorem dolor sed viverra ipsum nunc
                                    aliquet bibendum enim facilisis. Quisque sagittis purus sit amet volutpat consequat.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}