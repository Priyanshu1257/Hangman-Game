import Level0 from '../../assets/Images/level00.png'
import Level1 from '../../assets/Images/level0.png'
import Level2 from '../../assets/Images/level1.png'
import Level3 from '../../assets/Images/level2.png'
import Level4 from '../../assets/Images/level3.png'
import Level5 from '../../assets/Images/level4.png'
import Level6 from '../../assets/Images/level5.png'
import Level7 from '../../assets/Images/level6.png'


function HangMan( {step} ){
    const images = [Level0, Level1, Level2, Level3, Level4, Level5, Level6, Level7];

    return (
        <div className='w-[300px] h-[300px]'>
            <img
                src={step >= images.length ? images[images.length-1] : images[step]}
            />
        </div>
    )
}

export default HangMan;