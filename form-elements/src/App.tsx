import Button from './Button/Button';
import { ButtonVariant } from './Button/types';
function App() {
  return (
    <div>
      <h1 className='text-3xl'>Form Elements</h1>

      <Button
        onClickFn={() => console.log('Button Clicked')}
        children='Submit '
        disabled={false}
        label='Submit Details'
        width='w-[100px]'
        height='h-[40px]'
        variant={ButtonVariant.PRIMARY}
        fontSize='text-sm'
      />
      <Button
        onClickFn={() => console.log('Button Clicked')}
        children='Submit '
        disabled={true}
        label='Submit Details'
        width='w-[100px]'
        height='h-[40px]'
        variant={ButtonVariant.DANGER}
        fontSize='text-sm'
      />
      <Button
        onClickFn={() => console.log('Button Clicked')}
        children='Submit '
        disabled={false}
        label='Submit Details'
        width='w-[200px]'
        height='h-[40px]'
        variant={ButtonVariant.SUCCESS}
        fontSize='text-lg'
      />
    </div>
  );
}

export default App;
