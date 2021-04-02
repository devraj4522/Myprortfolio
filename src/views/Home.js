import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import VerticalTimeLines from '../components/sections/VerticalTimeLines'

import SkillBars from '../components/sections/SkillBar'

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <VerticalTimeLines />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <SkillBars />
      <FeaturesTiles />
      {/* <Testimonial topDivider /> */}
      <Cta split />
    </>
  );
}

export default Home;