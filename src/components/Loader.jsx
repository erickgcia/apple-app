import { Html } from '@react-three/drei'

const Loader = () => {
  return (
    <Html>
      <div className="absoulte top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex justify-center items-center">
        <p className="md:text-2xl text-xl font-bold text-nowrap">
          Click and turn to explore
        </p>
      </div>
    </Html>
  )
}

export default Loader
