import React from 'react'

const Poses = ({poses}) => (
  <ul>
    {poses.map(pose => <li key={pose.id}>{pose.name}</li>)}
  </ul>
)

export default Poses
