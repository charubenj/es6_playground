import { Person , SuperPerson} from './person';

const charu =new Person('Charu');
const superLisa= new SuperPerson('Lisa','running really fast');
charu.greet();

superLisa.greet();

superLisa.saySuperpower('Running really fast');


