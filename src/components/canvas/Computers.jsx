import { Suspense, useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ( {isMobile} ) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor="black" />
      <pointLight intensity={1}/>
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize= {1024}
      />
      <primitive object={computer.scene}
      scale={isMobile ? 0.7 : 0.75}
      position= {isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
      />

    </mesh>
    //3D üzerinde çalışırken önce mesh oluşturup içinde ışık oluşturmam gerekiyor.
    
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Listener ekliyoruz ekran büyüklüğünde değişikliği gözlemek için
    const mediaQuery = window.matchMedia
    (`(max-width: 500px)`);
    // Başlangıç değeri belirliyoruz setIsMobile kısmına
    setIsMobile(mediaQuery.matches);

    // Callback fonksiyonu olarak çalışıyor bu
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    
    //Use effect içerisinde olduğumda eventlisteneri kapatıp bir return almam gerekiyor.
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
        // İşlem tamamlandığında geri kaldırıyoruz
        mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
    frameloop="demand"
    shadows
    camera={{position: [20,3,5], fov: 25}}
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI /2}
        minPolarAngle={Math.PI /2}
        enablePan={false} // Objenin sayfada taşınmasını engellyior.
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
        <Preload all />
    </Canvas>
  )
  // OrbitControls objenin hareketini yönetiyor
}

export default ComputersCanvas;