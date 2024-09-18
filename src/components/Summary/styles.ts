import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background-color: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;

      p.income {
        color: var(--green);
      }
      p.outcome {
        color: var(--red400);
      }
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlite-background {
      background-color: var(--green);
      color: #fff;
    }
  }
`
