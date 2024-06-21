
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
    isAlive?: boolean;
}

interface Address {
    country: string;
    houseNo: number;
}

export const ObjectLiterals = () => {

    const person: Person = {
        firstName: 'Pedro',
        lastName: 'R.',
        age: 37,
        isAlive: true,
        address: {
            country: 'Spain',
            houseNo: 18
        }
    };

    return (
        <>
            <h3>Objetos literales</h3>
            <pre>
                { JSON.stringify(person, null, 2)}
            </pre>
        </>
    )
}