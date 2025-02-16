import avatar from './assets/images/avatar-jessica.jpeg'
import PropTypes from 'prop-types';


function Button({ name }) {
  return (
    <div className="bg-neutral-700 sm:px-20 px-14 py-2 rounded-md hover:bg-[yellowgreen] transition-colors duration-150 text-center font-semibold text-white" >{name}</div>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};


function App() {

  return (
    <>
      <div className="min-h-screen bg-black flex justify-center items-center">

        <div className="flex flex-col gap-3 p-8 bg-neutral-900 rounded-lg m-4">
          <div className='items-center justify-center flex flex-col'>

            <img src={avatar} width={70} className='rounded-full' />
            <div className='m-4'>
              <div className='text-2xl text-white font-bold'>
                Jessica Randall
              </div>
              <div className='text-[yellowgreen] font-semibold'>
                London, United Kingdom
              </div>
            </div>
            <div className='text-white mb-2 text-center'>
              &ldquo; Front-end developer and avid reader. &rdquo;
            </div>
          </div>
          <Button name={"Github"} />
          <Button name={"Frontend Mentor"} />
          <Button name={"Linkedin"} />
          <Button name={"Twitter"} />
          <Button name={"Instagram"} />
        </div>
      </div>
    </>
  )
}

export default App
