import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <card className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by the Net Ninja</div>
                    <div>2nd September, 2am</div>
                </div>
            </card>
        </div>
    )
}

export default ProjectDetails
