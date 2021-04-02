import React, {useState} from 'react'
import SkillBar from 'react-skillbars';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const SkillBars = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const SKILLS = [
    {
      "type": "Python",
      "level": 100
    },
    {
      "type": "React",
      "level": 85
    },
    {
      "type": "Javascript",
      "level": 75
    },
    {
      "type": "SEO",
      "level": 70
    },
    {
      "type": "CSS",
      "level": 60
    },
    {
      "type": "HTML",
      "level": 60
    },
    {
      "type": "SQL",
      "level": 60
    }
  ]

    // colours for skilbars  
  const colors = {
    "bar": "#5658DD",
    "title": {
      "text": "#fff",
      "background": "#25282C"
    }
  }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <div className="container-xs">
            <h2 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Professional <span className="text-color-primary">Skills</span>
            </h2>
            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              Programming Languages and Frameworks I know.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <SkillBar skills={SKILLS} animationDelay={1000} colors={colors}/>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

SkillBars.propTypes = propTypes;
SkillBars.defaultProps = defaultProps;

export default SkillBars;