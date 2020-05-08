import React from "react";
<<<<<<< HEAD
import styled from "styled-components";
import constants from "../../constants";
=======
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
>>>>>>> 0d932958f95b5cd36b6f679c3863b29edcac3c60

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

<<<<<<< HEAD
const Image = styled.Image`
  width: ${constants.width / 2.5};
`;

const Touchable = styled.TouchableOpacity``;
const SignUpBtn = styled.View`
  background-color: ${(props) => props.theme.blueColor};
  padding: 10px;
  margin: 0px 50px;
  border-radius: 4px;
  width: ${constants.width / 2};
  margin-bottom: 25px;
`;
const SignUpBtnText = styled.Text`
  color: white;
  text-align: center;
  font-weight: 600;
`;

const LoginLink = styled.View``;
const LoginLinkText = styled.Text`
  color: ${(props) => props.theme.blueColor};
  font-weight: 600;
`;

export default ({ navigation }) => (
  <View>
    <Image resizeMode={"contain"} source={require("../../assets/logo.png")} />
    <Touchable onPress={() => navigation.navigate("Signup")}>
      <SignUpBtn>
        <SignUpBtnText>Create New Account</SignUpBtnText>
      </SignUpBtn>
    </Touchable>
    <Touchable onPress={() => navigation.navigate("Login")}>
      <LoginLink>
        <LoginLinkText>Log in</LoginLinkText>
      </LoginLink>
    </Touchable>
=======
const Text = styled.Text``;

export default ({ navigation }) => (
  <View>
    <Text>Auth Home</Text>
    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
      <Text>Go to Login</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
      <Text>Go to Signup</Text>
    </TouchableOpacity>
>>>>>>> 0d932958f95b5cd36b6f679c3863b29edcac3c60
  </View>
);
