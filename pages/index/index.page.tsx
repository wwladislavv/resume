
import './style.css'

export { Page }

function Page() {

    return (
        <>
            <div className="container">
                <div className="code__container">
                    <div className="code__head">
                        <nav className="code__nav">
                            <a className="text-green" href="#about">About me</a>
                            <a className="text-green" href="#experience">Experience</a>
                            <a className="text-green" href="#skills">Skills & Education</a>
                        </nav>

                        <div className="code__contacts">
                            <a
                                className="text-cyan text-white-active"
                                href="mailto:nairbresom@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="icon-mail" />
                            </a>
                            <a
                                className="text-cyan text-white-active"
                                href="https://linkedin.com/in/vladyslav-koponkin"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="icon-linkedin" />
                            </a>
                            <a
                                className="text-cyan text-white-active"
                                href="https://github.com/wwladislavv/resume"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="icon-github" />
                            </a>
                        </div>
                    </div>

                    <div className="code__body text-white-darker">
                        <span id="about" className="heading text-cyan">Vladyslav K.</span>
                        <br />
                        Frontend Developer
                        <br />
                        <br />
                        <span className="text-green">About me:</span>
                        <br />
                        --------------------------
                        <br />
                        <span>
                        I have over 7 years of hands-on expertise in the whole software development lifecycle as a seasoned senior frontend developer. Web and mobile application development, testing, and deployment are my areas of competence. I excel in successfully using JavaScript libraries and frameworks, especially React, to complete projects of various complexity levels. I have a reputation for having a good outlook and b`eing able to make wise decisions despite being under pressure.
                    </span>
                        <br />
                        <br />
                        <br />
                        <span id="experience" className="text-green">Work Experience:</span>
                        <br />
                        --------------------------
                        <br />
                        <span className="text-blue">**Intersog**</span>
                        <br />
                        June 2018 - Present
                        <br />
                        <br />
                        <span className="text-magenta">*Project 1: GDPR Solution*</span>
                        <br />
                        - Utilized HTML, CSS, JavaScript, React, Redux, Webpack, and RESTful APIs to develop a GDPR-related solution that processes personal information using artificial intelligence.
                        <br />
                        - Contributed to design discussions and built scalable, secure web applications.
                        - Collaborated with UI/UX, QA, and backend teams.
                        <br />
                        - Developed new application modules and various UI components.
                        <br />
                        <br />
                        <span className="text-magenta">*Project 2: Financial Management Platform*</span>
                        <br />
                        - Assisted the backend development team by providing frontend solutions using JavaScript, TypeScript, React, and Vue.
                        <br />
                        - Developed frontend solutions using RESTful APIs and GraphQL.
                        <br />
                        - Translated web designs into functional frontend applications.
                        <br />
                        - Improved web app reliability through unit tests and automated testing.
                        <br />
                        - Contributed to configuring DevOps solutions for frontend application deployments.
                        <br />
                        <br />
                        <br />
                        <span className="text-blue">**CyberVision**</span>
                        <br />
                        August 2017 - May 2018
                        <br />
                        <br />
                        - Worked on IoT projects, specializing in the development of visualization and interactive UI components using TypeScript, React, Redux, Angular 4+, RxJS, Webpack, and Git.
                        <br />
                        <br />
                        <br />
                        <span className="text-blue">**LENAL**</span>
                        <br />
                        July 2016 - July 2017
                        <br />
                        <br />
                        - Organized and led the mobile development department.
                        <br />
                        - Implemented code rules and style guides.
                        <br />
                        - Successfully completed and maintained large-scale e-commerce projects using HTML, CSS, JavaScript, Phonegap, Gulp, and Git.
                        <br />
                        <br />
                        <br />
                        <span className="text-blue">**Freelance (Self-employed)**</span>
                        <br />
                        November 2015 - July 2016
                        <br />
                        <br />
                        - Developed web applications, websites, and digital solutions using HTML, CSS, JavaScript, jQuery, Gulp, and Git.
                        <br />
                        <br />
                        <br />
                        <span id="skills" className="text-green">Skills:</span>
                        <br />
                        --------------------------
                        <br />
                        <span className="text-magenta">- Languages:</span> JavaScript, TypeScript, HTML/CSS
                        <br />
                        <span className="text-magenta">- Technologies:</span> React.js, Redux, Node.js, Vue.js, React Native
                        <br />
                        <span className="text-magenta">- CSS libraries:</span> Tailwind CSS, Bootstrap, Materialize, Fluent UI etc.
                        <br />
                        <span className="text-magenta">- Preprocessors:</span> Jade (Pug), SASS/SCSS.
                        <br />
                        <span className="text-magenta">- VCS:</span> GIT (GitHub, Bitbucket, GitLab, Azureetc…).
                        <br />
                        <span className="text-magenta">- Build tools:</span> Webpack, Vite, Gulp.
                        <br />
                        <span className="text-magenta">- Experienced</span> in integrating with both RESTful and GraphQL APIs.
                        <br />
                        <br />
                        <br />
                        <span id="education" className="text-green">Education:</span>
                        <br />
                        --------------------------
                        <br />
                        Bachelor of Science
                        <br />
                        Volodymyr Dahl East Ukrainian National University
                        <br />
                        Faculty of Information Technology and Electronics
                    </div>
                </div>
            </div>
        </>
    )
}
