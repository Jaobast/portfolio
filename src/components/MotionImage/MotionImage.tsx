import * as motion from "motion/react-client"


type MotionImageProps= {
    img: string,
    noMobile?: boolean,
    onlyMobile?: boolean,
    height?: boolean,
    padding?: boolean,
    extraClass?: string,
}


function MotionImage({img, noMobile, onlyMobile, height, padding, extraClass}: MotionImageProps) {

    const classes = [
    'img-project',
    noMobile && 'no-mobile',
    onlyMobile && 'only-mobile',
    height && 'height',
    padding && 'padding',
    extraClass ?? ''
    ].join(' ')


  return (
    <motion.img className={classes} src={img} alt="visual presentation"
       initial={{ opacity: 0, scale: 0.8 }}
        
       whileInView={{
         opacity: 1,
         scale: 1,
         transition: {
           duration: 1.3
         }
       }}
       viewport={{
         once: true,
         amount: "some",
       }}
    />
  )
}

export default MotionImage
