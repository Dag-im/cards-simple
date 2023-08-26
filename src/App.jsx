import img1 from './images/img-1.jpg'
import img2 from './images/img-2.jpg'
import img3 from './images/img-3.jpg'
import img4 from './images/img-4.jpg'
import img5 from './images/img-5.jpg'
import img6 from './images/img-6.jpg'
import './App.css'
import { useState } from 'react'
const images = [img1, img2, img3, img4, img5, img6]

function App() {
  const [hoverIndex, setHoverIndex] = useState(null)
  const handleMouseOver = (index) => setHoverIndex(index)
  const handleMouseOut = () => setHoverIndex(null)

  return (
    <>
      <div className='image-container'>
        {images.map((image, index) => {
          return (
            <>
              <div
                className='image'
                key={index}
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={handleMouseOut}
              >
                <img src={image} />
                <div
                  className={
                    hoverIndex === index
                      ? 'hover-content'
                      : 'hover-content hidden'
                  }
                >
                  <h3>Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae ad sint sed minus corporis perspiciatis saepe officia
                    blanditiis! Harum laboriosam reprehenderit nemo nam
                    blanditiis inventore, doloremque praesentium iusto beatae
                    iste.
                  </p>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default App
