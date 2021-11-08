import React, {useEffect, useRef} from 'react';
import './Board.css';
import forHer from './templates/for_her.png';

const Result: React.FC = () => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

    // load template
    useEffect(() => {
        if (canvasRef.current) {
            canvasCtxRef.current = canvasRef.current.getContext('2d')
            let ctx = canvasCtxRef.current
            let template = new Image()

            const imageWidth = 1024
            const imageHeight = 769
            var hRatio = ctx!.canvas.width / imageWidth
            var vRatio = ctx!.canvas.height / imageHeight
            var ratio = Math.min(hRatio, vRatio)

            template.onload = function () {
                ctx!.drawImage(
                    template, 0, 0,
                    imageWidth, imageHeight,
                    0, 0,
                    imageWidth * ratio, imageHeight * ratio)
                ctx!.beginPath();
                ctx!.moveTo(0, 0);
                ctx!.stroke();
            }
            template.src = forHer;
        }
    }, []);

    function onGenerate() {
        if (canvasRef.current) {
            canvasCtxRef.current = canvasRef.current.getContext('2d');
            let ctx = canvasCtxRef.current;
            let a = document.createElement("a");
            a.download = "svg-graph.png";
            a.href = ctx!.canvas.toDataURL("image/png");
            a.click();
        }
    }

    return (
        <div className={"result-container"}>
            <ul>
                <li>
                    <canvas ref={canvasRef} className="canvas"></canvas>
                </li>
                <li>
                    <button type="button" onClick={onGenerate}>Generate</button>
                </li>
            </ul>
        </div>
    );
}

export default Result;
