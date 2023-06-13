import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 10px;
  width: max-content;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;

  p {
    font-size: 16px;
    color: #b5b5b5;
    margin-left: 5px;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px 15px;
  padding: 10px;

  img {
    border-radius: 10px;
    width: 120px;
  }

  p {
    font-size: 16px;
    color: #000000;
    align-items: stretch;
  }

  .trash {
    display: flex;
    gap: 30px;

    img {
      width: 20px;
      height: 20px;
    }

    .button-trash {
      border: none;
      border-radius: 0;

      &:hover {
        animation: treme 0.2s;
        animation-iteration-count: 3;

        @keyframes treme {
          0% {
            margin-left: 0;
          }
          25% {
            margin-left: 5px;
          }
          50% {
            margin-left: 0;
          }
          75% {
            margin-left: -5px;
          }
          100% {
            margin-left: 0;
          }
        }
      }
    }
  }

  .quantity-container {
    display: flex;
    gap: 20px;
  }

  button {
    height: 30px;
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
    width: 20px;
    height: 20px;
    border: 1px solid #000000;
    border-radius: 50%;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      opacity: 0.8;
      transform: scale(1.1);
      border: 2px solid #000000;
    }
    &:active {
      opacity: 0.6;
    }
  }

  p {
    margin-top: 5px;
  }
`
export const EmptyCart = styled.p`
  padding: 20px;
  text-align: center;
  font-weight: bold;
`
