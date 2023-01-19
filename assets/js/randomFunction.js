function randomMintoMax(min, max){
    const random = Math.ceil(Math.random() * (max - min) + min);
    console.log(random);
    return random;
};

export {randomMintoMax};