

export const BasicTypes = () => {

    const name:string = 'Pedro';
    const age:number = 28;
    const isActive: boolean = true;
    const powers: string[] = ['React', 'ReactNative', 'Angular'];

    powers.push('Nest');


    return (
        <>
            <h3>Tipos básicos</h3>
            { name } { age } { isActive ? 'true':'false'}
            <br/>
            { powers.join(', ')}
        </>
    )
}