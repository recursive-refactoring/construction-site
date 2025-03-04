import React from 'react'
import SideBar from './sideBar'
import CommentForm from './commentForm'
import NextPrevPost from './nextPrevPost'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa6'

const BlogArticel = ({ isSidebarRight }) => {
    return (
        <section className="blog-slingle section-padding">
            <div className="container">
                <div className="row g-4">
                    {isSidebarRight || <SideBar />}
                    <div className="col-lg-8">
                        <div className="image mb-30">
                            <img src="/images/blog/single1.jpg" alt="image" />
                        </div>
                        <div className="item">
                            <div className="info">
                                <span>Written By: <a href="#0">Marry Biden</a></span>
                                <span className="info_dot"></span>
                                <span>10/01/2023</span>
                            </div>
                            <h3 className="text-capitalize mt-30 mb-3">Guide dog shortage: The blind people who train their
                            </h3>
                            <p className="mt-3 mb-3">Proin ultricies ultricies est vitae cursus. Nulla sit amet suscipit tortor. Maecenas dui erat, ornare eget tristique vitae, rutrum pretium justo. Phasellus vitae consequat nisi, quis luctus nisl. Praesent faucibus sem id massa semper ornare. Nam eu magna at mi pellentesque mattis. Morbi at condimentum velit. Phasellus aliquet, leo auctor volutpat ultrices, metus dolor dictum enim, sed convallis lacus urna nec erat.</p>
                            <p>consectetur adipiscing elit. Etiam at mauris accumsan mi pulvinar lacinia a in justo. Ut tempor et libero quis dignissim. Nulla at convallis libero, vitae aliquam leo. Etiam ut augue nibh. In laoreet neque quis ex ornare, quis auctor elit facilisis. Mauris dapibus massa rhoncus ligula luctus vulputate. Fusce condimentum placerat vulputate. Praesent ullamcorper dui in dui sagittis commodo.</p>
                            <h3 className="mb-40 mt-5">Where can I get some?</h3>
                        </div>
                        <div className="row g-3">
                            <div className="col-lg-6">
                                <div className="image">
                                    <img src="/images/blog/single2.jpg" alt="image" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="image">
                                    <img src="/images/blog/single3.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <p className="mt-40">Proin ultricies ultricies est vitae cursus. Nulla sit amet suscipit tortor. Maecenas dui erat, ornare eget tristique vitae, rutrum pretium justo. Phasellus vitae consequat nisi, quis luctus nisl. Praesent faucibus sem id massa semper ornare. Nam eu magna at mi pellentesque mattis. Morbi at condimentum velit. Phasellus aliquet, leo auctor volutpat ultrices, metus dolor dictum enim, sed convallis lacus urna nec erat.</p>
                            <ul className="mt-30 list_here mb-30">
                                <li>Mauris maximus diam ac imperdiet dictum.</li>
                                <li>Maecenas eget ipsum dapibus, rutrum mi non, ultricies massa..</li>
                                <li>Nam non purus porta risus tincidunt cursus.</li>
                                <li>Quisque blandit lacus vel urna pellentesque mattis.</li>
                                <li>Maecenas vehicula tortor et consectetur faucibus.</li>
                            </ul>
                            <div className="blog_testimonial mb-30 sub-bg">
                                <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                            </div>
                            <p>Proin ultricies ultricies est vitae cursus. Nulla sit amet suscipit tortor. Maecenas dui erat, ornare eget tristique vitae, rutrum pretium justo. Phasellus vitae consequat nisi, quis luctus nisl. Praesent faucibus sem id massa semper ornare. Nam eu magna at mi pellentesque mattis.</p>
                        </div>
                        <div className="tag-share py-4 bor-top bor-bottom">
                            <div className="tag">
                                <strong className="me-2">Tags:</strong>
                                <a href="#0">Creative</a>
                                <a href="#0">Agency</a>
                                <a href="#0">Business</a>
                            </div>
                            <div className="share">
                                <strong className="me-2">Share:</strong>
                                <a href="#0"><i ><FaFacebookF /></i></a>
                                <a href="#0"><i ><FaTwitter /></i></a>
                                <a href="#0"><i ><FaYoutube /></i></a>
                            </div>
                        </div>
                        <NextPrevPost />
                        <CommentForm />
                    </div>
                    {isSidebarRight && <SideBar />}
                </div>
            </div>
        </section>
    )
}

export default BlogArticel