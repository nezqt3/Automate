import LeftFace from '../static/left-face.png'
import RightFace from '../static/right-face.png'
import FrontFace from '../static/front-face.png'

export default function Difference() {
    return <div className="difference">
        <div className="difference-title">
            <h2>ЧЕМ AUTOMATE<br/> ОТЛИЧАЕТСЯ ОТ<br/> ДРУГИХ?</h2>
            <p>Автоматизация — это проще, чем кажется. Мы создаем<br/> решения, которые работают с первого дня и не требуют<br/> специальных знаний.</p>
        </div>

        <div className="difference-faces">
            <div className="difference-faces__left-face">
                <p>ПРОСТО</p>
                <img src={LeftFace} alt='left-face'/>
            </div>
            <div className="difference-faces__front-face">
                <p>- ДЕЙСТВЕННО - БЫСТРО</p>
                <img src={FrontFace} alt='front-face'/>
            </div>
            <div className="difference-faces__right-face">
                <img src={RightFace} alt='right-face'/>
            </div>
        </div>

        <div className='difference-info'>
            <div>
                <h3>Просто</h3>
                <p>Внедряем готовые модули без сложных<br/> настроек и длительного обучения</p>
            </div>
            <div>
                <h3>Действенно</h3>
                <p>Каждое решение приносит измеримый<br/> результат и экономит ваши ресурсы</p>
            </div>
            <div>
                <h3>БЫСТРО</h3>
                <p>Первые работающие процессы<br/> запускаем уже через 24 часа после<br/> обращения</p>
            </div>
        </div>
    </div>
}