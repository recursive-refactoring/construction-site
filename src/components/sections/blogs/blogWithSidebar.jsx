import React, { useState } from 'react'
import SideBar from './sideBar'
import { FaArrowRightLong, FaPlay, FaVolumeHigh } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { blogDataThree } from '../../../utils/fackData/blogDataThree'
import ModalVideo from 'react-modal-video'
import AudioPlayer from '../../ui/audioPlayer'
import Pagination from '../../ui/pagination'

const BlogWithSidebar = ({ isSidebarRight }) => {
    return (
        <section className="blog-slingle blog-area section-padding">
            <div className="container">
                <div className="row g-4">
                    {isSidebarRight || <SideBar />}
                    <div className="col-lg-8">
                        {
                            blogDataThree.map(({ author, date, details, id, tags, title, audio, thumbnail, video }) =>
                                <Card key={id} audio={audio} author={author} date={date} description={details} tags={tags} thumbnail={thumbnail} title={title} video={video} />)
                        }
                    </div>
                    {isSidebarRight && <SideBar />}
                </div>
                <Pagination/>
            </div>
        </section>
    )
}

export default BlogWithSidebar

const Card = ({ thumbnail, audio, video, author, date, tags, title, description, footer_style }) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <div className="item bor">
                <CardBody thumbnail={thumbnail} audio={audio} video={video} setOpen={setOpen} />
                <div className="d-flex align-items-center justify-content-between">
                    <div className="info">
                        <span>Written By: <Link to="#0">{author}</Link></span>
                        <span className="info_dot"></span>
                        <span>{date}</span>
                    </div>
                    <div className="image-tag">
                        {
                            tags.map((tag, index) => <Link key={index} to="#0">{tag}</Link>)
                        }
                    </div>
                </div>
            </div>
            <div className={`item mb-65 py-0`}>
                <h3 className="text-capitalize mt-30 mb-3"><Link to="/blog-single-left">{title}</Link></h3>
                <p>{description}</p>
                <Link className="go_blog mt-30" href="/blog-single-left"><i><FaArrowRightLong /></i></Link>
            </div>
            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="TfU0qjuZkJ4"
                onClose={() => setOpen(false)}
            />
        </>
    )
}

const CardBody = ({ audio, video, thumbnail, setOpen }) => {
    if (thumbnail) {
        return (
            <Link to="/blog-single-left" className="image d-block mb-30">
                <img src={thumbnail} alt="image" />
            </Link>
        )
    }
    if (video) {
        return (
            <div className="image video_item d-block mb-30">
                <img src={video} alt="image" />
                <div className="video-btn-wrp">
                    <div className="video video-pulse">
                        <div className="video-popup secondary-bg" onClick={() => setOpen(true)}><i className="fa-solid fa-play"><FaPlay /></i></div>
                    </div>
                </div>
            </div>
        )
    }
    if (audio) {
        return (
            <>
                <Link to="/blog-single-left" className="image d-block">
                    <img src={audio} alt="image" />
                </Link>
                <AudioPlayer />
            </>
        )
    }

}