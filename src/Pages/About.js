import React from 'react';
import FancyWindow from '../components/FancyWindow';
import '../styles/about-page.css';

function About() {
  return (
    <>
      <FancyWindow size="big">
        <div className="about-page">
          <div className="design">
            <h2>Design</h2>
            <p>
              &emsp;I designed the application in &nbsp;
              <a href="https://www.figma.com/file/idntchOmCrNcJqoa4Z146r/E-commerce?node-id=1%3A3&t=jeZHxs22Q8GUpRoK-0">
                Figma
              </a>{' '}
              , in order to style it easier and also to set up and structure it
              faster when I could come to the development part. During the
              design stage I have used the following tools:
            </p>
            <ul>
              <li>
                Tea descriptions were created using OpenAI's{' '}
                <a href="https://openai.com/blog/chatgpt">ChatGPT</a> .
              </li>
              <li>
                Tea images have been generated using Midjourney's{' '}
                <a href="https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F">
                  AI Program
                </a>
                .
              </li>
              <li>
                The background image was created by{' '}
                <a href="https://pixabay.com/users/pexels-2286921/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1869647">
                  Pexels
                </a>{' '}
                from{' '}
                <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1869647">
                  Pixabay
                </a>
              </li>
              <li>
                The icons have been created with the help of{' '}
                <a href="https://icons8.com/">Icons8</a>.
              </li>
              <li>
                The rest of the visuals were created using photoshop or css.
              </li>
            </ul>
            <p>This stage took two days.</p>
          </div>
          <div className="development">
            <h2>Development</h2>
            <p>
              &emsp;&emsp;The development part took seven days and revolved
              around using tools such as React Router, React Hooks, Context,
              propTypes, Default Props and React Testing Library.
            </p>
          </div>
          <br />
          <p>
            For any business inquiries, send me an{' '}
            <a href="mailto: octavian.nicu.sulic@gmail.com">email</a>.
          </p>
        </div>
      </FancyWindow>
    </>
  );
}

export default About;
