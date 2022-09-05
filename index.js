import React, { Component } from 'react';
import { AppRegistry } from 'react-native'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { Card } from 'react-native-elements';

const DATA = [
    {
        id: '1',
        title: 'Pupusas',
        description: "Las pupusas son el platillo más representativo de la cocina salvadoreña. Son como tortillas parecidas a las gorditas mexicanas pero más gruesas y elaboradas tanto con maíz o arroz, ingredientes con los que se prepara la masa.",
        src: require('./src/img/pupusas-comida.jpg')
    },
    {
        id: '2',
        title: 'Tamales salvadoreños',
        description: "Los tamales no solo forman parte de las comidas típicas de El salvador, también están entre los platillos típicos de México y de otros países centroamericanos. La masa se prepara con maíz y con varias especias que le otorgan el delicioso sabor que ofrecen. Se hacen porciones individuales que se rellenan con carne de cerdo, pato o gallina y salsa de tomate natural. Antes de cocinar en agua hirviendo se envuelven en hojas de plátano.",
        src: require('./src/img/tamales-comida.jpg')
    },
    {
        id: '3',
        title: 'Yuca frita o salcochada',
        description: "Tanto frita como salcochada, la yuca forma parte de las comidas típicas de El Salvador, un tubérculo que los salvadoreños comen como refrigerio, “tentempié” o merienda.La yuca se acompaña de chicharrones, trozos de cerdo o de las “pescadas”, pequeños peces típicos del país que se preparan fritos.La yuca frita se puede acompañar también con salsa de tomate, encurtidos, tomate y pepinos.",
        src: require('./src/img/yuca-frita-o-salcochada.jpg')
    },
    {
        id: '4',
        title: 'Sopa de pata',
        description: "Sopa cuyo ingrediente base son las extremidades de la vaca, a las que se les agregan verduras como plátano, repollo, yuca, pipianes, ejotes y güisquil.Al servirla se le añaden chiles jalapeños en pequeños trozos, cebolla y cilantro.  Unas gotas de limón les darán un sabor más exótico.",
        src: require('./src/img/sopa-de-pata.jpg')
    },
    {
        id: '5',
        title: 'Salpicón',
        description: "El salpicón es otra de las comidas típicas de El Salvador. Se prepara con carne de res cocinada y troceada en pedazos muy pequeños, a los que se les agrega hierbabuena, cebolla, rábanos cortados, sal y limón.En una variante del salpicón se sustituye la carne de res por carne de conejo.",
        src: require('./src/img/salpicon-comida.jpg')
    },
    {
        id: '6',
        title: 'Empanadas',
        description: "Otra comida salvadoreña que se come como una merienda junto con un café.Las empanadas se elaboran con una masa hecha a partir de un puré de plátanos maduros, con la que se hacen tortillas redondeadas y rellenas con frijoles molidos, que luego se fríen en abundante aceite.Al estar bien doraditas se espolvorean con azúcar o se comen como salen del sartén.",
        src: require('./src/img/empanadas-comida.jpg')
    },
    {
        id: '7',
        title: 'Riguas',
        description: "Pese a ser un platillo típico de El Salvador, es uno de los menos conocidos. Son tortas fritas hechas con masa de elotes condimentada y envueltas en hojas de elote o plátano. Se comen con queso y crema.",
        src: require('./src/img/riguas-comida.jpg')
    },
];

const Item = ({ title, description, img }) => (
    <Card style={styles.card}>
        <Card.Title>{title}</Card.Title>
        <Card.Divider />
        <View style={styles.item}>
            <Image style={styles.img} source={img} />
            <Text style={styles.paragraph}>{description}</Text>
        </View>
    </Card>
);

const App = () => {
    const renderItem = ({ item }) =>
    (
        <Item title={item.title} img={item.src} description={item.description} />
    );
    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    img: {
        height: 200,
        width: 200,
        resizeMode: 'contain',
        marginLeft: 60
    },
    container: {
        backgroundColor: '#ecf0f1'
    },
    paragraph: {
        margin: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#34495e'
    },
});

AppRegistry.registerComponent("guia3", () => App);