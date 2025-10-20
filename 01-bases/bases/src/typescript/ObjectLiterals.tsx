interface Address {
    country: string;
    city: string;
    houseNumber: string;
}

interface Person {
    age: number;
    firstName: string;
    lastName?: string;
    address: Address;
}

interface Student extends Person {
    course: string;
}

export const ObjectLiterals = () => {
    const person : Person = {
        age: 22,
        firstName: 'Erick',
        lastName: 'Quizhpe',
        address: {
            country: 'Ecuador',
            city: 'Cuenca',
            houseNumber: '1-93'
        }
    }

    const student: Student = {
        course: '7B',
        ...person
    }
  return (
    <>  
        <h3>Object Literales:</h3>
        <pre>
            {JSON.stringify(student, null, 2)}
        </pre>
    </>
  )
}
