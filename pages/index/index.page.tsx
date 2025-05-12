import React, { Fragment } from 'react';
import words from 'lodash.words';
import capitalize from 'lodash.capitalize';

import './style.css';

export { Page }

const isHTML = RegExp.prototype.test.bind(/(<([^>]+)>)/i);

type Skill = string | string[];
type Education = {
    degree: string;
    university: string;
    faculty: string;
};
type Project = {
    description: string;
    name: string;
};
type WorkExperienceItem = {
    company: string;
    startDate: string;
    endDate: string;
    description?: string;
    role: string;
    projects?: Project[];
};

export type ResumeData = {
    name: string;
    title: string;
    summary: string;
    skills: {
        [key: string]: Skill;
    };
    education: Education;
    workExperience: WorkExperienceItem[];
};

type Props = ResumeData;

function Page({
    name, title, summary,
    workExperience, skills, education
}: Props) {
    return (
        <>
            <div className="container">
                <div className="code__container">
                    <div className="code__head">
                        <nav className="code__nav">
                            <a className="text-green" href="#about">About me</a>
                            <a className="text-green" href="#skills">Skills & Education</a>
                            <a className="text-green" href="#experience">Experience</a>
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
                        <h1
                            id="about"
                            className="heading text-cyan"
                        >
                            {name}
                        </h1>
                        <br />
                        {title}
                        <br />
                        <br />
                        <span className="text-green">About me:</span>
                        <br />
                        --------------------------
                        <br />
                        {summary}
                        <br />
                        <br />
                        <br />
                        <span id="skills" className="text-green">Skills:</span>
                        <br />
                        --------------------------
                        <br />
                        {Object.entries(skills).map(([key, value]) => (
                            <Fragment key={key}>
                                <span className="text-magenta">- {words(key).map((value) =>  value.length === 3 ? value.toUpperCase() : capitalize(value)).join(' ')}: </span>
                                {Array.isArray(value) ? value.join(', ') : value}
                                <br />
                            </Fragment>
                        ))}
                        <br />
                        <br />
                        <span id="experience" className="text-green">Work Experience:</span>
                        <br />
                        --------------------------
                        <br />
                        {workExperience.map((workItem) => (
                            <Fragment key={workItem.company}>
                                <span className="text-blue">**{workItem.company}**</span>
                                <br />
                                {workItem.startDate} - {workItem.endDate}
                                <br />
                                <br />
                                {workItem.projects?.map((projectItem) => (
                                    <Fragment key={projectItem.name}>
                                        <span className="text-magenta">*{projectItem.name}*</span>
                                        <br />
                                        {projectItem.description.split('. ').map((description, index) => (
                                            <Fragment key={index}>
                                                {isHTML(description)
                                                    ? <span dangerouslySetInnerHTML={{__html: description}}/>
                                                    : `- ${description}`}
                                                <br />
                                            </Fragment>
                                        ))}
                                        <br />
                                    </Fragment>
                                ))}
                                {workItem.description
                                    ? (
                                        <Fragment>
                                            {workItem.description.split('. ').map((description, index) => (
                                                <Fragment key={index}>
                                                    {`- ${description}`}
                                                    <br />
                                                </Fragment>
                                            ))}
                                            <br />
                                        </Fragment>
                                    )
                                    : ''
                                }
                                <br />
                            </Fragment>
                        ))}
                        <span id="education" className="text-green">Education:</span>
                        <br />
                        --------------------------
                        <br />
                        {education.degree}
                        <br />
                        {education.university}
                        <br />
                        {education.faculty}
                    </div>
                </div>
            </div>
        </>
    )
}
