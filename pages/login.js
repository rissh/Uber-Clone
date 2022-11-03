import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { signInWithPopup, onAuthStateChanged } from "@firebase/auth";
import { auth, provider } from "../firebase";
import tw from "tailwind-styled-components";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, []);
  return (
    <Wrapper>
      <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png" />
      <Description>Log in to access your account</Description>
      <Image src="https://i.ibb.co/CsV9RYZ/login-image.png" />
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
        Sign in with Google
      </SignInButton>
    </Wrapper>
  );
};

export default Login;

const Wrapper = tw.div`
    flex flex-col h-screen w-screen bg-gray-200 p-4 
`;

const UberLogo = tw.img`
    h-20 w-auto object-contain self-start
`;

const Description = tw.div`
    text-5xl pt-4 text-gray-500 
`;

const Image = tw.img`
    object-contain w-full
`;

const SignInButton = tw.div`
    bg-black text-white text-center py-4 mt-8 self-centerw-full cursor-pointer 
`;
