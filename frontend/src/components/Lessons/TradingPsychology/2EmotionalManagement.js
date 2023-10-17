import './TS.css';
import emotionBackground from '../../../assets/emo.gif';
import 'animate.css';
import SocialShare from '../../SocialShare/SocialShare';

const EmotionalManagement = () => {
    const closeVideo = () => {
        const checkbox = document.querySelector('.checkbox-risk');
        if (checkbox) checkbox.checked = false;
    };

    return (
        <div className='risk'>
            <div className="imageContainer">
                <img className='emotionbg' src={emotionBackground} alt="Emotional Management Background" />
                <h1 className='animate__animated animate__bounceInLeft'>Emotional Management</h1>
            </div>
            <div className='risk-content'>
                <h4 className='animate__animated animate__bounceIn'>4 minutes read</h4>
                <p>Emotional management in forex trading refers to the ability of a trader to remain calm and composed, especially in the face of market volatility. It's essential for making rational decisions and avoiding impulsive actions based on fear or greed.</p>
                <h3>Importance of Emotional Management</h3>
                <p>Being emotionally stable can help traders stick to their trading plan, maintain discipline, and avoid making hasty decisions that can lead to significant losses.</p>
                <h3>Strategies for Emotional Management</h3>
                <p>Some strategies include meditation, taking regular breaks, setting realistic goals, and avoiding over-leveraging.</p>
                <div className='wrapper-risk'>
                    <input type="checkbox" className="checkbox-risk" />
                    <div className="video-risk">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8wMExlw8OBs?si=AzO_s-UMwhU00QFs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>                        
                    <button className="close-video" onClick={closeVideo}>Close Video</button>
                    </div>
                    <div className="text-risk">
                        <span data-text="Watch the video"></span>
                    </div>
                </div>
                <SocialShare/>
                <div className='back-to-psychology'>
                    <a href="/Lessons/TradingPsychology">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Back to Trading Psychology page
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EmotionalManagement;
