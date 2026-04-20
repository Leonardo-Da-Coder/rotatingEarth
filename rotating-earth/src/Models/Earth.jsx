import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Earth(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/WeltWithText.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions["CircleAction"].reset().play()
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          position={[0, 4.061, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.036}>
          <group name="8a888f66473549c99c3f97fb5030482ffbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode">
              <group name="Sphere" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  name="Sphere_Material002_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere_Material002_0.geometry}
                  material={materials['Material.002']}
                  rotation={[-0.541, -0.062, 2.506]}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="PlainAxis"
          position={[0, 4.663, 0]}
          rotation={[-0.339, 0.01, 0.038]}
          scale={6.587}>
          <group name="Circle" rotation={[0, Math.PI / 2, 0]} scale={0.806}>
            <group name="BézierCircle" scale={0.903} />
            <mesh
              name="Text"
              castShadow
              receiveShadow
              geometry={nodes.Text.geometry}
              material={materials.Material}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.042}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/WeltWithText.glb')
