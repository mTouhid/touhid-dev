import React from 'react';
import { css } from '@emotion/react';
import { SocialIcon } from 'react-social-icons';

const HomePageStyle = css`
  h1 {
    font-size: 5rem;
    font-weight: 600;
    text-align: center;
  }
  p {
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.6;
    text-align: center;
    margin-top: 30px;
  }
`;

const HomePage = () => {
  return (
    <div css={[HomePageStyle]}>
      <h1 className="title">Hello there!</h1>
      <p>I'm Touhid and I am a Senior Cloud Infrastructure Engineer in Ministry of Justice UK. I specialise in AWS cloud platform. While at work, I'm a full time DevOps practitioner and I have experience in Ruby,
        Ruby in Rails, Terraform, Docker, Kubernetes.</p>
      <p>Here are my <strong>{new Date().getFullYear()}</strong> GitHub stats:<br />
        <img align="center" src="https://github-readme-stats.vercel.app/api?username=mTouhid&count_private=true&show_icons=true&hide_title=true&icon_color=6e5d00&line_height=26" />
        <br />
        And here are the top 3 most used languages: <br />
        <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=mTouhid&langs_count=3&hide_title=true&card_width=495" />
      </p>
      <p>
      <SocialIcon url="https://uk.linkedin.com/in/tislam1" /> <SocialIcon url="https://github.com/mTouhid" />
      </p>
    </div>
  );
};

export default HomePage;
