import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { SectionHeading } from '../styledElements/Headings';
import { sectionSpacingLg, maxWidthLg } from '../../abstracts/Mixins';
import bgPatternOne from '../../assets/bg-pattern-home-4-about-3.svg';
import bgPatternTwo from '../../assets/bg-pattern-home-5.svg';
import Testimonial from './Testimonial';
import { useGlobalContext } from '../../context';
import Responsive from '../../abstracts/Responsive';

const StyledSection = styled.section`
  position: relative;
  overflow: hidden;

  .bg-pattern {
    position: absolute;
    width: 15%;

    ${Responsive.lg`
      width: 25%;
    `}

    ${Responsive.md`
      width: 35%;
    `}

    ${Responsive.sm`
      width: 40%;
    `}

    ${Responsive.xs`
      width: 50%;
    `}

    &--one {
      top: 0;
      left: 0;
    }

    &--two {
      bottom: 0;
      right: 0;
    }
  }
`;

const Container = styled.div`
  ${sectionSpacingLg}
  ${maxWidthLg}
  text-align: center;

  .slider-container {
    padding: 10rem 0;
    margin: 0 2rem;

    ${Responsive.sm`
      padding: 5rem 0;
    `}
  }
`;

const Testimonials = () => {
  const { testimonials } = useGlobalContext();

  let settings = {
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 8000,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <StyledSection>
      <img src={bgPatternOne} alt='' className='bg-pattern bg-pattern--one' />
      <Container>
        <SectionHeading data-aos='fade-in'>
          Delivering real results for top companies. <br /> Some of our{' '}
          <span>success stories.</span>
        </SectionHeading>
        <div
          className='slider-container'
          data-aos='fade-in'
          data-aos-delay='200'
        >
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.id} {...testimonial} />
            ))}
          </Slider>
        </div>
      </Container>
      <img src={bgPatternTwo} alt='' className='bg-pattern bg-pattern--two' />
    </StyledSection>
  );
};

export default Testimonials;
