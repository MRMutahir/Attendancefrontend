import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  width: 100%;
  background-color: transparent;
  outline: inherit;

  color: ${({ theme }) => theme.textSoft};
`;
const Button = styled.button`
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  display: flex;

  font-size: 12px;
  margin-top: 10px;
  padding: 10px;
`;

const Links = styled.div`
  display: flex;
  margin-left: 30px;
`;

const Link = styled.div`
  margin-left: 30px;
`;
function Sign() {
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const response = await fetch("/addmin/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      });

      if (response.ok) {
        // Handle successful login
        console.log("Login successful");

        // Save user information to local storage
        const userData = { name, password };
        localStorage.setItem("userData", JSON.stringify(userData));

        navigate("/");
      } else {
        // Handle login failure
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>LOGIN</Title>

        <Input
          placeholder="username"
          value={name}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSignIn}>Sign in</Button>
      </Wrapper>
    </Container>
  );
}

export default Sign;

// function Sign() {
//   return (
//     <Container>
//       <Wrapper>
//         <Title>LOGIN</Title>

//         <Input
//           placeholder="username"
//         />
//         <Input type="password" placeholder="password" />
//         <Button>Sign in</Button>
//       </Wrapper>
//     </Container>
//   );
// }

// export default Sign;
