import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import React from 'react'

export default function VerticalTimeLines() {
    return (
        <div className="hero section center-content illustration-section-0">

            <h2> Studies and Experience </h2>
            <VerticalTimeline className="mt-32 mb-32">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#25282C', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)', color: '#fff' }}
                    date="2020 - present"
                    iconStyle={{ background: '#25282C', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">The Yuvas</h3>
                    <h4 className="vertical-timeline-element-subtitle">Blog</h4>
                    <p>
                        Creative Direction, SEO, User Experience, Visual Design, Project Management, Team Leading
    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2019 - Present"
                    contentStyle={{ background: '#6163FF', color: '#fff' }}
                    iconStyle={{ background: '#6163FF', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Techno Main Salt Lake</h3>
                    <h4 className="vertical-timeline-element-subtitle">Computer Science and Eng.</h4>
                    <p>
                        Undegraduate Major course learning computer science and software development
    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2016 - 2018"
                    iconStyle={{ background: '#25282C', color: '#fff' }}
                    contentStyle={{ background: '#25282C', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #25282C', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Intermediate</h3>
                    <h4 className="vertical-timeline-element-subtitle">Shivam Residential School</h4>
                    <p>
                        Physics, Chemistry, Mathematics
    </p>
                </VerticalTimelineElement>
                {/* <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                        User Experience, Visual Design
    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                    <p>
                        Strategy, Social Media
    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design
    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                        Creative Direction, Visual Design
    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                /> */}
            </VerticalTimeline>
        </div>
    )
}
