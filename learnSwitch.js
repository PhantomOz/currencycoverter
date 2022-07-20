const score = 60;
switch (true) {
    case (score >= 70):
        console.log('Distinction')
        break;
        case (score >= 60 && score < 70):
        console.log('Very good')
        break;
        case (score >= 50 && score < 60):
        console.log('Credit')
        break;
        case (score >= 40 && score < 50):
        console.log('Pass')
        break;

    default:
        console.log('fail')
        break;
}