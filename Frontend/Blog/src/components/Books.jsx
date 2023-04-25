import React from 'react'
import '../index.css'

function Books() {
    return (
        <>
            <div className='book-main'>
                <div className='item-1'>
                    <article>
                        <h3 className='article__title'>Do Epic Shit</h3>
                        <p className='article__description'>
                            This is a book to be read, and re-read, a book whose lines you will underline and think about again and again, a book you will give your family and your friends and strangers.
                        </p>
                        <img src="https://i0.wp.com/ankurwarikoo.com/wp-content/uploads/2022/05/Logo_Black_Vector.png?w=662&ssl=1" alt="Signature" />
                        <p>ankur warikoo</p>
                        <a className='article__btn' href="https://www.amazon.in/dp/9391165486/ref=cm_sw_r_as_gl_api_glt_fabc_NK3C7XXD87BM58E94XW5?linkCode=ml1&tag=ankurwarikoo-21" target="_blank">Get your copy</a>
                    </article>

                    <img className='image-book' loading='lazy' src="https://i0.wp.com/ankurwarikoo.com/wp-content/uploads/2022/07/1659009279-1-1.png?w=1200&ssl=1" alt="Do Epic Shit" />
                </div>

                <div className='item-2'>
                    <article>
                        <h3 className='article__title'>Get Epic Shit Done</h3>
                        <p className='article__description'>
                            36 life questions you need answers to!
                            <span>DO EPIC SHIT</span> made you think
                            <span>GET EPIC SHIT DONE</span> will make you act!
                        </p>
                        <img src="https://i0.wp.com/ankurwarikoo.com/wp-content/uploads/2022/05/Logo_Black_Vector.png?w=662&ssl=1" alt="Signature" />
                        <p>ankur warikoo</p>
                        <a className='article__btn' href="https://www.amazon.in/dp/939398607X?&linkCode=sl1&tag=ankurwarikoo-21&linkId=cc48b1330c4327b5d72da281eac226ec&language=en_IN&ref_=as_li_ss_tl" target="_blank">Get your copy</a>
                    </article>

                    <img className='image-book' loading='lazy' src="https://i0.wp.com/ankurwarikoo.com/wp-content/uploads/2022/11/Get-Epic-Shit-Done-Book-1.png?w=1200&ssl=1" alt="Get Epic Shit Done" />
                </div>
            </div>
        </>
    )
}

export default Books
