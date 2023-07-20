import ChallengeList from 'components/Challenge/ChallengeList';
import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Nav } from 'components/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
const ChallengePage = () => {
  const navigate = useNavigate();
  const gotoWrite = () => {
    navigate('/challenge/write');
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <Nav />
      <StyledWrapper>
        <HeadLine>
          <h1>☘️ 챌린지</h1>
          <WriteButton onClick={gotoWrite}>글 작성하기</WriteButton>
        </HeadLine>
        <ChallengeList />
        <div className="scroll-container">
          <button id="top" onClick={scrollToTop} type="button">
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      </StyledWrapper>
    </>
  );
};

export default ChallengePage;

const StyledWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
  .scroll-container {
    position: fixed;
    right: 3%;
    bottom: 6%;
    z-index: 1;
  }
  #top {
    font-weight: bold;
    font-size: 20px;
    padding: 20px 22px;
    background-color: white;
    color: var(--green-200);
    border: 1px solid var(--green-200);
    border-radius: 50%;
    outline: none;
    cursor: pointer;
  }
  #top:hover {
    color: white;
    background-color: var(--green-200);
  }
`;
const HeadLine = styled.div`
  display: flex;
  margin-bottom: 1rem;
  h1 {
    width: 90%;
  }
`;

const WriteButton = styled.div`
  display: flex;
  width: 10%;
  align-items: center;
  font-size: 13px;
  cursor: pointer;
  justify-content: center;
  border-radius: 0.5rem;
  color: white;
  background-color: var(--green-100);
  &:hover {
    background-color: var(--green-200);
  }
  @media (max-width: 900px) {
    width: 20%;
  }
`;
