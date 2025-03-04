import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const CommentForm = () => {
    return (
        <div className="form-area pt-65">
            <div className="container">
                <h2 className="text-capitalize mb-65">Leave a comment</h2>
                <form action="#0">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="col-lg-6">
                            <input type="email" placeholder="Email" />
                        </div>
                    </div>
                    <textarea name="textarea" id="comment" placeholder="Write Comment..."></textarea>
                    <button className="mt-40">Post Comment <i className="d-inline-block"><FaArrowRightLong/></i></button>
                </form>
            </div>
        </div>
    )
}

export default CommentForm