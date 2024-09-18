import styled from "styled-components"

export const Container = styled.header`
  background-color: var(--red500);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background-color: var(--red200);
    border: 0;
    border-radius: 0.25rem;
    padding: 0 2rem;
    height: 3rem;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
