import { useContext } from "react";
import { QuestionsContext } from "../../Contexts/QuestionsContext";


export const Prices = () => {

    const { currentIndex, gameOver, playAgain } = useContext(QuestionsContext)


    const backgroundChanger = (index) => {
        if (gameOver) {
            return false
        }
        return index === currentIndex
    }

    return (
        <div className="pricing-box">
            {gameOver ? (
                <div className="game-over">
                    <h3> Game Over <span className="sad-emoji">😢</span></h3>
                    <button className="play-again" onClick={playAgain}>Play Again</button>
                </div>
            ) : (
                <div className="game-board">
                    <div className="joker-boxes">
                        <div className="joker">
                            <img src="./img/50-50.png" alt="50-50" /></div>
                        <div className="joker">
                            <img src="./img/Pomoshtotpriqtel.png" alt="Pomosht ot priqtel" />
                        </div>
                        <div className="joker">
                            <img src="./img/pomoshtotpublikata.png" alt="Pomosht ot publikata" />
                        </div>
                    </div>
                    <div className="prices">
                        <ul className="numbers">
                            <li className={`price-item ${backgroundChanger(14) ? "selected" : ""}`}><span>15</span>100 000</li>
                            <li className={`price-item ${backgroundChanger(13) ? "selected" : ""}`}><span>14</span>50 000</li>
                            <li className={`price-item ${backgroundChanger(12) ? "selected" : ""}`}><span>13</span>30 000</li>
                            <li className={`price-item ${backgroundChanger(11) ? "selected" : ""}`}><span>12</span>20 000</li>
                            <li className={`price-item ${backgroundChanger(10) ? "selected" : ""}`}><span>11</span>10 000</li>
                            <li className={`price-item ${backgroundChanger(9) ? "selected" : ""}`}><span>10</span>5000</li>
                            <li className={`price-item ${backgroundChanger(8) ? "selected" : ""}`}><span>9</span>3000</li>
                            <li className={`price-item ${backgroundChanger(7) ? "selected" : ""}`}><span>8</span>2000</li>
                            <li className={`price-item ${backgroundChanger(6) ? "selected" : ""}`}><span>7</span>1500</li>
                            <li className={`price-item ${backgroundChanger(5) ? "selected" : ""}`}><span>6</span>1000</li>
                            <li className={`price-item ${backgroundChanger(4) ? "selected" : ""}`}><span>5</span>500</li>
                            <li className={`price-item ${backgroundChanger(3) ? "selected" : ""}`}><span>4</span>400</li>
                            <li className={`price-item ${backgroundChanger(2) ? "selected" : ""}`}><span>3</span>300</li>
                            <li className={`price-item ${backgroundChanger(1) ? "selected" : ""}`}><span>2</span>200</li>
                            <li className={`price-item ${backgroundChanger(0) ? "selected" : ""}`}><span>1</span>100</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
};