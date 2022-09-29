import React, { useState } from "react";
import { Button, Text, View, StyleSheet, TextInput, Image } from "react-native";

const Plant = (props) => {
  const [isHungry, setIsHungry] = useState(true);
  const [hungryTime, setHungryTime] = useState(2000);

  return (
    <View style={styles.innerContainer}>
      <Image
        style={styles.logo}
        source={{
          uri: props.img,
        }}
      />
      <Text>
        {props.name}, and I am {isHungry ? "thirsty" : "fed"}!
      </Text>
      <Text>{props.description}</Text>
      <Button
        onPress={() => {
          setIsHungry(false);
          setTimeout(() => {
            setIsHungry(true);
          }, hungryTime);
        }}
        disabled={!isHungry}
        title={isHungry ? "Water me!" : "Thank you!"}
      />
      <TextInput
        style={{
          height: 40,
          backgroundColor: "#FAF9F6",
          padding: 10,
          borderWidth: 0.5,
        }}
        placeholder="Set watering time"
        onChangeText={(inputValue) => setHungryTime(inputValue)}
        defaultValue={hungryTime}
      />
    </View>
  );
};

const plants = [
  {
    id: 1,
    name: "Cactus",
    description:
      "Cactus has a reputation for being easy to grow because it doesn't need a lot of water.",
    imgLink:
      "https://previews.123rf.com/images/urfandadashov/urfandadashov1808/urfandadashov180823550/108990079-cactus-vector-icon-isolated-on-transparent-background-cactus-logo-concept.jpg",
  },
  {
    id: 2,
    name: "Sunflower",
    description:
      "The sunflower (Helianthus annuus) is an annual plant with a large daisy-like flower face.",
    imgLink:
      "https://previews.123rf.com/images/urfandadashov/urfandadashov1809/urfandadashov180901576/109192431-sunflower-vector-icon-isolated-on-transparent-background-sunflower-logo-concept.jpg",
  },
  {
    id: 3,
    name: "Rose",
    description:
      "A rose is either a woody perennial flowering plant of the genus Rosa.",
    imgLink:
      "https://previews.123rf.com/images/wahyufrida/wahyufrida1909/wahyufrida190900422/130156966-rose-flower-logo-vector-template-design.jpg",
  },
];

const Plants = () => {
  return plants.map((plant) => {
    return (
      <Plant
        key={plant.id}
        name={plant.name}
        img={plant.imgLink}
        description={plant.description}
      />
    );
  });
};

const App = () => {
  return <View style={styles.container}>{Plants()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 66,
    height: 58,
    marginBottom: 10,
  },
  innerContainer: {
    padding: 35,
    borderBottomWidth: 1,
  },
});

export default App;
