
import Script from "next/script"

const Reviews = () => {
  return (
    <div className=' mb-20 p-4 lg:p-10 md:p-10'>
        <h1 
        className=" text-[2rem] font-bold text-red-500  mb-10 text-center"> User{`\'`}s Reviews</h1>

        <div 
        className='sk-ww-google-reviews' data-embed-id='221555'></div><Script src='https://widgets.sociablekit.com/google-reviews/widget.js' async defer></Script>
</div>
  )
}

export default Reviews