import { useState } from 'react';
import Input from './Input/Input';
import { InputTypes } from './Input/types';
function App() {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [color, setColor] = useState<string>('#f5c211');
  const [theDate, setTheDate] = useState<string>(new Date().toISOString());
  return (
    <div>
      <h1 className='text-3xl'>Form Elements</h1>
      <Input
        label='name'
        placeholder='Enter Name'
        required={true}
        value={name}
        onChangeFn={(e) => setName(e?.target.value)}
        type={InputTypes.TEXT}
        classNames={['border', 'bg-slate-100']}
      />
      <Input
        label='age'
        placeholder='Enter Age'
        required={true}
        value={age}
        onChangeFn={(e) => setAge(parseInt(e?.target.value))}
        type={InputTypes.NUMBER}
        classNames={['border', 'bg-slate-100']}
      />
      <Input
        label='age'
        placeholder='Enter Age'
        required={false}
        value={age}
        onChangeFn={(e) => setAge(parseInt(e?.target.value))}
        type={InputTypes.NUMBER}
        classNames={['border', 'bg-slate-100']}
      />
      <Input
        label='color'
        placeholder='Enter Color'
        required={false}
        value={color}
        onChangeFn={(e) => setColor(e?.target.value)}
        type={InputTypes.COLOR}
        classNames={['border', 'bg-slate-100']}
      />
      <Input
        label='date'
        placeholder='Enter date'
        required={false}
        value={theDate}
        onChangeFn={(e) => setTheDate(e?.target.value)}
        type={InputTypes.DATE}
        classNames={['border', 'bg-slate-100']}
      />
    </div>
  );
}

export default App;
