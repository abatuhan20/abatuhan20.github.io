import { Html , useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span>
      <p 
        style={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop:40
        }}
      >{progress.toFixed(2)}%</p>
      {/* toFixed yazan digit kadar gösteriyo decimal sonrası
      Loader resimler yüklenirken % kaç yüklendiğini gösteriyor
      three/drei useProgressten faydalanıyorum
      */}
    </Html>
  )
}

export default Loader