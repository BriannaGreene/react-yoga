import React from 'react'

const AddPose = ({addPose}) => {
  const handleAddPose = (e) => {
    e.preventDefault()
    const newPose = {name: e.target.name.value.trim()}
    addPose(newPose)
    e.target.reset()
  }

  return (
    <div>
      <h3>Add a Pose</h3>
      <form onSubmit={handleAddPose}>
        <input name="name" placeholder="Next Pose Name" />
        <input type="Submit" value="Add" />
      </form>
    </div>
  )
}

export default AddPose
