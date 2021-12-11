import styled from "styled-components";

interface ILabelProps {
  bold: boolean;
}

export const StyledCard = {
  container: styled.div`
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border-radius: 1rem;
    box-shadow: 0rem 0rem 2rem rgba(0, 0, 0, 0.1);
    padding: 1rem;
    height: 50%;
    width: 40%;
  `,
  header: {
    content: styled.div`
      display: flex;
      flex: 1;
      align-items: center;
      height: 20%;
      width: 100%;
    `,
  },
  body: {
    content: styled.div`
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid orange;
      border-bottom: 1px solid orange;
      width: 100%;
    `,
  },
  footer: {
    content: styled.div`
      display: flex;
      flex: 2;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      width: 100%;
    `,
    group: styled.div``,
  },
};

export const StyledTitle = styled.h2`
  font-weight: bold;
`;

export const StyledLabel = styled.label<ILabelProps>`
  margin-right: 1rem;
  font-weight: ${(props: any) => (props.bold ? "bold" : "regular")};
`;

export const StyledInput = styled.input`
  margin-right: auto;
  border: 1px solid #6c757d;
  border-radius: 0.5rem;
  padding: 0.375rem 0.75rem;
  line-height: 1.8;
  outline: none;
`;

export const StyledButton = styled.button`
  color: white;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  background-color: #0a5efd;
  border: 1px solid #2e9efd;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
  cursor: pointer;
  :hover {
    background-color: #2e9efd;
  }
`;
